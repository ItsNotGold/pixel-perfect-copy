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


# Detect non-lexical fillers via VAD + spectral heuristics

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
                candidates.append({"type": "short_hum", "start": start_s, "end": end_s})
        elif dur >= 0.12 and dur <= 1.5:
            # longer voiced region in silence: could be long filler or sustained vowel
            start_s = seg['start']
            end_s = seg['end']
            yseg = y[int(start_s*sr):int(end_s*sr)]
            spec_cent = np.mean(librosa.feature.spectral_centroid(yseg+1e-9, sr=sr)) if yseg.size>0 else 0
            f0 = np.mean(librosa.yin(yseg+1e-9, fmin=50, fmax=500)) if yseg.size>0 else 0
            # if f0 present and sustained, consider long filler
            if not np.isnan(f0) and f0 > 50 and (end_s - start_s) > 0.25:
                candidates.append({"type": "long_voiced_fill", "start": start_s, "end": end_s})
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

        # Non-lexical fillers
        nonlex = detect_non_lexical_fillers(wav, vad_segs)

        total_count = len(lexical) + len(nonlex)
        total_duration = sum([(f.get("end", 0) - f.get("start", 0)) for f in lexical]) + sum([n.get("end", 0) - n.get("start", 0) for n in nonlex])

        result = {
            "transcript": transcript,
            "lexical_fillers": lexical,
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
