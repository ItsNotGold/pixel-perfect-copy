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
  - returns: detailed JSON per spec (transcript, lexical_fillers, non_lexical_fillers, totals)

Notes:
- The script prefers WhisperX for transcription and timestamps when available, otherwise falls back to Whisper.
- Vosk is used as a secondary ASR for cross-validation.
- VAD (webrtcvad) and spectral heuristics detect non-lexical fillers (e.g., "mmm", breathy hesitations).
- If Montreal Forced Aligner (MFA) is available in your environment and phoneme models installed, the analyzer will attempt phoneme-level alignment for more accurate non-lexical detection.

Output format (example):
```
{
  "transcript": "...",
  "lexical_fillers": [{"word":"um","start":1.23,"end":1.35}],
  "non_lexical_fillers": [{"type":"mmm","start":2.00,"end":2.15}],
  "total_filler_count": 3,
  "filler_duration_total": 1.12
}
```

Security: run this behind your trusted network or reverse proxy for production usage.
