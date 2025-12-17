import os
import io
import json
import tempfile
import subprocess
from typing import List, Dict, Any
from flask import Flask, request, jsonify
import requests
import numpy as np
import soundfile as sf
import webrtcvad

# optional imports
try:
    import whisperx
    HAS_WHISPERX = True
except Exception:
    HAS_WHISPERX = False

try:
    import whisper
    HAS_WHISPER = True
except Exception:
    HAS_WHISPER = False

try:
    from vosk import Model, KaldiRecognizer
    HAS_VOSK = True
except Exception:
    HAS_VOSK = False

# Simple spectral helpers
import librosa

app = Flask(__name__)

# Filler lists per language
FILLER_LEXICAL = {
    "en": ["um", "uh", "er", "like", "you know", "basically", "literally", "actually", "sort of", "kind of", "i mean", "hmm", "mmh"],
    "fr": ["euh", "ben", "genre", "en fait", "du coup", "voilà", "quoi", "tu vois", "bah", "enfin"],
    "es": ["eh", "este", "pues", "o sea", "bueno", "como", "sabes", "entonces", "básicamente", "tipo"],
}

# utility: download audio to local file and convert to 16k mono wav via ffmpeg

def download_and_convert(url: str) -> str:
    tmp = tempfile.NamedTemporaryFile(suffix=".wav", delete=False)
    out_path = tmp.name
    tmp.close()

    # use ffmpeg to download and convert
    cmd = [
        "ffmpeg", "-y", "-i", url,
        "-ar", "16000", "-ac", "1", "-vn",
        out_path
    ]
    subprocess.check_call(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    return out_path


# VAD segmentation (returns list of (start_s, end_s) voiced segments)

def vad_segments(wav_path: str, aggressiveness: int = 2) -> List[Dict[str, float]]:
    sr = 16000
    data, sr_ = sf.read(wav_path)
    if sr_ != sr:
        data = librosa.resample(data.astype(float), orig_sr=sr_, target_sr=sr)
    pcm = (data * 32767).astype(np.int16).tobytes()

    vad = webrtcvad.Vad(aggressiveness)
    frame_duration = 30  # ms
    frame_bytes = int(sr * frame_duration / 1000) * 2

    segments = []
    voiced = False
    start = 0
    for i in range(0, len(pcm), frame_bytes):
        frame = pcm[i:i+frame_bytes]
        if len(frame) < frame_bytes:
            break
        is_speech = vad.is_speech(frame, sr)
        t = (i / 2) / sr
        if is_speech and not voiced:
            voiced = True
            start = t
        elif not is_speech and voiced:
            voiced = False
            end = t
            segments.append({"start": start, "end": end})
    if voiced:
        segments.append({"start": start, "end": len(pcm) / 2 / sr})
    return segments


# Run Whisper (via whisperx if available) and return word-level timestamps if possible

def transcribe_with_whisper(wav_path: str, lang: str = "en") -> Dict[str, Any]:
    if HAS_WHISPERX:
        model = "small"  # configurable
        device = "cpu"
        res = whisperx.load_model(model, device=device)
        audio = whisperx.load_audio(wav_path)
        result = res.transcribe(audio)
        # align
        model_a, metadata = whisperx.load_align_model(language_code=lang, device=device)
        result_aligned = whisperx.align(result, model_a, metadata, audio, device)
        transcript = result_aligned['text']
        words = []
        for w in result_aligned['segments']:
            for segword in w['words']:
                words.append({
                    'word': segword['word'].strip(),
                    'start': segword['start'],
                    'end': segword['end'],
                })
        return {"transcript": transcript, "words": words}
    elif HAS_WHISPER:
        m = whisper.load_model("small")
        r = m.transcribe(wav_path, language=lang)
        transcript = r["text"]
        # word timestamps not available reliably; return tokens with None timestamps
        return {"transcript": transcript, "words": []}
    else:
        return {"transcript": "", "words": []}


# Vosk secondary ASR

def transcribe_with_vosk(wav_path: str) -> Dict[str, Any]:
    model_path = os.getenv("VOSK_MODEL_PATH")
    if not HAS_VOSK or not model_path:
        return {"transcript": "", "words": []}
    model = Model(model_path)
    with open(wav_path, "rb") as f:
        data = f.read()
    rec = KaldiRecognizer(model, 16000)
    rec.AcceptWaveform(data)
    res = json.loads(rec.Result())
    words = res.get("result", [])
    words_out = []
    for w in words:
        words_out.append({"word": w.get("word"), "start": w.get("start"), "end": w.get("end")})
    return {"transcript": res.get("text", ""), "words": words_out}


# Detect lexical filler occurrences using word timestamps when available

def detect_lexical_fillers(words_ts: List[Dict[str, Any]], language: str) -> List[Dict[str, Any]]:
    fillers = FILLER_LEXICAL.get(language, FILLER_LEXICAL.get("en"))
    found = []
    lower_f = [f.lower() for f in fillers]
    for w in words_ts:
        token = (w.get("word") or "").strip(" ").lower()
        if not token:
            continue
        # some transcripts include punctuation, strip
        t = token.replace("\u2019", "'")
        # check direct match or common variants
        if t in lower_f or any(t == f.replace(" ", "") for f in lower_f):
            found.append({"word": w.get("word"), "start": w.get("start"), "end": w.get("end")})
    return found


# Optional MFA-based phoneme alignment helpers

def run_mfa_alignment(wav_path: str, transcript: str, language: str = "en") -> List[Dict[str, Any]]:
    """Run Montreal Forced Aligner (if available) to get phoneme-level alignments.
    Expects environment vars MFA_BIN, MFA_DICT and MFA_ACOUSTIC_MODEL to be set (optional).
    Returns list of {'phoneme': str, 'start': float, 'end': float}
    """
    try:
        import shutil
        from textgrid import TextGrid
    except Exception:
        return []

    mfa_bin = os.getenv("MFA_BIN", shutil.which("mfa") or "")
    mfa_dict = os.getenv("MFA_DICT")
    mfa_acoustic = os.getenv("MFA_ACOUSTIC_MODEL")

    if not mfa_bin or not mfa_dict or not mfa_acoustic:
        return []

    tmpdir = tempfile.mkdtemp()
    try:
        # write wav and transcript in corpus format
        base = os.path.join(tmpdir, "corpus")
        os.makedirs(base, exist_ok=True)
        # transcript expected in a .lab file with same basename as wav
        # Copy wav to corpus with a stable name
        wav_basename = "audio.wav"
        wav_dst = os.path.join(base, wav_basename)
        subprocess.check_call(["cp", wav_path, wav_dst])
        lab_path = os.path.join(base, "audio.lab")
        with open(lab_path, "w", encoding="utf-8") as f:
            f.write(transcript.strip() + "\n")

        out_dir = os.path.join(tmpdir, "mfa_out")
        cmd = [mfa_bin, "align", base, mfa_dict, mfa_acoustic, out_dir, "--clean", "--quiet"]
        subprocess.check_call(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

        # read resulting TextGrid
        tg_path = os.path.join(out_dir, "audio.TextGrid")
        if not os.path.exists(tg_path):
            return []

        tg = TextGrid.fromFile(tg_path)
        phonemes = []
        # find phones tier
        for tier in tg.tiers:
            if tier.name.lower().startswith("phones") or tier.name.lower().startswith("phone"):
                for interval in tier.intervals:
                    label = interval.mark.strip()
                    if label:
                        phonemes.append({"phoneme": label, "start": interval.minTime, "end": interval.maxTime})
                break
        return phonemes
    except Exception:
        return []
    finally:
        try:
            subprocess.call(["rm", "-rf", tmpdir])
        except Exception:
            pass


# Detect phonetic fillers from MFA phoneme alignments

def detect_phonetic_fillers_from_phonemes(phonemes: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    fillers = []
    # simple vowel set and nasal set based on common ARPAbet/IPA labels in MFA outputs
    vowel_labels = set(["AA","AE","AH","AO","AW","AY","EH","ER","EY","IH","IY","OW","OY","UH","UW","AH0","AA0","AH1","AH2"])
    nasal_labels = set(["M","N","NG"])

    i = 0
    while i < len(phonemes):
        p = phonemes[i]
        ph = p.get("phoneme", "").upper()
        dur = p.get("end", 0) - p.get("start", 0)
        if ph in vowel_labels and dur >= 0.2:
            fillers.append({"type": "sustained_vowel", "phoneme": ph, "start": p.get("start"), "end": p.get("end"), "duration": round(dur, 3)})
        # repeated nasals (mmm, nnn) aggregation
        if ph in nasal_labels and dur >= 0.08:
            # aggregate consecutive same or other nasals
            j = i
            start = p.get("start")
            end = p.get("end")
            while j + 1 < len(phonemes) and phonemes[j+1].get("phoneme", "").upper() in nasal_labels:
                end = phonemes[j+1].get("end")
                j += 1
            total_dur = end - start
            if total_dur >= 0.12:
                fillers.append({"type": "nasal_hum", "phoneme": "{"+",".join([phonemes[k].get('phoneme') for k in range(i, j+1)])+"}", "start": start, "end": end, "duration": round(total_dur,3)})
            i = j
        i += 1
    return fillers


# Detect non-lexical fillers via VAD + spectral heuristics (kept as fallback/enrichment)

def detect_non_lexical_fillers(wav_path: str, vad_segs: List[Dict[str, float]]) -> List[Dict[str, Any]]:
    y, sr = librosa.load(wav_path, sr=16000)
    candidates = []
    for seg in vad_segs:
        dur = seg['end'] - seg['start']
        if dur < 0.12 and dur > 0.02:
            # short voiced blip -> possible short filler ("uh", "mmm")
            start_s = seg['start']
            end_s = seg['end']
            yseg = y[int(start_s*sr):int(end_s*sr)]
            rms = np.mean(np.abs(yseg))
            zcr = np.mean(librosa.feature.zero_crossing_rate(yseg+1e-9)) if yseg.size>0 else 0
            spec_cent = np.mean(librosa.feature.spectral_centroid(yseg+1e-9, sr=sr)) if yseg.size>0 else 0
            # heuristics: low centroid & low zcr -> hum / nasal / mmm
            if spec_cent < 2000 and zcr < 0.1:
                candidates.append({"type": "short_hum", "start": start_s, "end": end_s, "duration": round(end_s-start_s,3)})
        elif dur >= 0.12 and dur <= 1.5:
            # longer voiced region in silence: could be long filler or sustained vowel
            start_s = seg['start']
            end_s = seg['end']
            yseg = y[int(start_s*sr):int(end_s*sr)]
            spec_cent = np.mean(librosa.feature.spectral_centroid(yseg+1e-9, sr=sr)) if yseg.size>0 else 0
            f0 = np.mean(librosa.yin(yseg+1e-9, fmin=50, fmax=500)) if yseg.size>0 else 0
            # if f0 present and sustained, consider long filler
            if not np.isnan(f0) and f0 > 50 and (end_s - start_s) > 0.25:
                candidates.append({"type": "long_voiced_fill", "start": start_s, "end": end_s, "duration": round(end_s-start_s,3)})
    return candidates

@app.route("/analyze", methods=["POST"])
def analyze():
    try:
        payload = request.get_json()
        audio_url = payload.get("audio_url")
        language = payload.get("language", "en")
        if not audio_url:
            return jsonify({"error": "audio_url required"}), 400

        wav = download_and_convert(audio_url)

        # VAD segments
        vad_segs = vad_segments(wav, aggressiveness=2)

        # Transcriptions
        wres = transcribe_with_whisper(wav, lang=language)
        vres = transcribe_with_vosk(wav)

        # Build combined word timestamps (prefer whisper words, supplement with vosk)
        words = wres.get("words", []) or vres.get("words", [])
        transcript = wres.get("transcript") or vres.get("transcript")

        # Lexical fillers
        lexical = detect_lexical_fillers(words, language)

        # MFA phoneme alignments (optional)
        phonemes = []
        try:
            phonemes = run_mfa_alignment(wav, transcript, language)
        except Exception:
            phonemes = []

        phonetic_from_phonemes = []
        if phonemes:
            phonetic_from_phonemes = detect_phonetic_fillers_from_phonemes(phonemes)

        # Non-lexical fillers (VAD + heuristics fallback/enrichment)
        nonlex = detect_non_lexical_fillers(wav, vad_segs)

        # Merge phonetic detections, prefer phoneme-based when overlapping
        phonetic_fillers = []
        # start with phoneme detections
        for p in phonetic_from_phonemes:
            phonetic_fillers.append({
                "type": p.get("type"),
                "phoneme": p.get("phoneme"),
                "start": p.get("start"),
                "end": p.get("end"),
                "duration": p.get("duration"),
                "source": "mfa",
            })
        # add non-lexical heuristics if they don't overlap existing phonetic detections
        def overlaps(a, b):
            return not (a['end'] <= b['start'] or a['start'] >= b['end'])

        for n in nonlex:
            conflict = False
            for p in phonetic_fillers:
                if overlaps(n, p):
                    conflict = True
                    break
            if not conflict:
                phonetic_fillers.append({"type": n.get("type"), "start": n.get("start"), "end": n.get("end"), "duration": n.get("duration"), "source": "heuristic"})

        total_count = len(lexical) + len(phonetic_fillers)
        total_duration = sum([(f.get("end", 0) - f.get("start", 0)) for f in lexical]) + sum([n.get("end", 0) - n.get("start", 0) for n in phonetic_fillers])

        result = {
            "transcript": transcript,
            "words": words,
            "lexical_fillers": lexical,
            "phonetic_fillers": phonetic_fillers,
            "non_lexical_fillers": nonlex,
            "total_filler_count": total_count,
            "filler_duration_total": round(float(total_duration), 3),
        }

        return jsonify(result)

    except Exception as e:
        app.logger.exception("analyze failed")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.getenv("PORT", "5000"))
    app.run(host="0.0.0.0", port=port)
