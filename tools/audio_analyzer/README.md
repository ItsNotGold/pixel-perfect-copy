# Local Audio Analyzer

This is a self-hosted analysis service that uses open-source tools to detect
lexical and non-lexical filler/hesitation events in recorded speech.

Hard constraints: everything here uses free/open-source tools and can be run
locally.

Prereqs (install these on your system):
- Python 3.10+
- ffmpeg (system package)
- A Vosk model (download and set VOSK_MODEL_PATH env var) - small model works for tests
- Optional: whisperx and its dependencies (these can be heavy: torch, etc.)
- Optional: MFA / OpenSMILE (not required; pipeline will fall back to heuristics if absent)
  - Environment variables (optional):
    - `MFA_BIN`: path to `mfa` executable (if not on PATH)
    - `MFA_DICT`: path to pronunciation dictionary used by MFA
    - `MFA_ACOUSTIC_MODEL`: path to MFA acoustic model
    - `OPENSMILE_BIN`: path to `SMILExtract` if you wish to extract voice-quality features


Quickstart (venv):

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
export VOSK_MODEL_PATH=/path/to/vosk-model-small-en-us-0.15
python app.py
```

By default the service runs on http://127.0.0.1:5000 and exposes:
- POST /analyze
  - body: JSON { audio_url: string, language: "en" | "fr" | "es" }
  - returns: detailed JSON per spec (transcript, words, lexical_fillers, phonetic_fillers, non_lexical_fillers, totals)

Notes:
- The script prefers WhisperX for transcription and timestamps when available, otherwise falls back to Whisper.
- Vosk is used as a secondary ASR for cross-validation.
- VAD (webrtcvad) and spectral heuristics detect non-lexical fillers (e.g., "mmm", breathy hesitations).
- If Montreal Forced Aligner (MFA) is available in your environment and phoneme models installed, the analyzer will attempt phoneme-level alignment for more accurate non-lexical detection.

Frame-level phonetic detection (mandatory behavior):
- Audio is framed at 25 ms frames with 10 ms hop.
- Frames compute RMS, ZCR, spectral flatness, MFCCs (13), and F0 (via YIN) and a voicing probability estimate (harmonic energy ratio).
- A frame is marked a "phonetic hesitation" if ALL are true:
  - voicing_probability > 0.6
  - RMS_energy < median_speech_energy * 0.8
  - spectral_flatness > 0.3
  - zero_crossing_rate < 0.05
- Consecutive hesitation frames are merged; segments are valid fillers when duration is between 180 ms and 2000 ms.
- Each valid segment is classified into one of: `nasal_hum`, `prolonged_vowel`, `breathy_hesitation` using MFCC variance, F0 std, and spectral flatness rules respectively.

Output format (example):
```
{
  "transcript": "...",
  "words": [ { word, start, end } ],
  "lexical_fillers": [{"word":"um","start":1.23,"end":1.35}],
  "phonetic_fillers": [{"category":"nasal_hum","start_time":2.0,"end_time":2.45,"duration_ms":450,"confidence":0.87}],
  "non_lexical_fillers": [{"type":"mmm","start":2.00,"end":2.15}],
  "total_filler_count": 3,
  "filler_duration_total": 1.12
}
```

Acceptance test (example):
- Input: silence → 400 ms sustained "mmmm" → silence
- Expected: `phonetic_fillers` includes exactly 1 entry with `category: nasal_hum` and duration ≈ 400ms



Security: run this behind your trusted network or reverse proxy for production usage.
