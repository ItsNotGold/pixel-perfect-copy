
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), "audio_analyzer"))

import pytest
np = pytest.importorskip("numpy")
from scipy.io import wavfile
from phonetic_detector import detect_phonetic_fillers_frame_based

def synth_mmm(duration_ms=400, sr=22050):
    t = np.linspace(0, duration_ms / 1000.0, int(sr * duration_ms / 1000.0), endpoint=False)
    sine = 0.15 * np.sin(2 * np.pi * 140 * t)
    noise = 0.03 * np.random.normal(size=t.shape)
    harmonic = 0.05 * np.sin(2 * np.pi * 280 * t)
    return sine + harmonic + noise

def build_test_wav(path="/tmp/test_mmm_new.wav", sr=22050):
    silence1 = np.zeros(int(sr * 0.4))
    mmm = synth_mmm(400, sr=sr)
    silence2 = np.zeros(int(sr * 0.4))
    audio = np.concatenate([silence1, mmm, silence2])
    audio_norm = audio / (np.max(np.abs(audio)) + 1e-9)
    wav_int16 = (audio_norm * 32767).astype(np.int16)
    wavfile.write(path, sr, wav_int16)
    return path

def run():
    path = build_test_wav()
    print("Test audio written to:", path)
    # Note: detector expects path
    results = detect_phonetic_fillers_frame_based(path)
    print("Detector output:")
    import json
    print(json.dumps(results, indent=2))

    if len(results) != 1:
        print("FAIL: expected exactly 1 filler, got", len(results))
        return 2

    r = results[0]
    cat = r.get("category")
    dur = r.get("duration_ms")
    if cat != "nasal_hum":
        print("FAIL: expected category 'nasal_hum', got", cat)
        return 3

    if not (300 <= dur <= 500):
        print("FAIL: expected duration ≈400ms, got", dur)
        return 4

    print("PASS: acceptance test succeeded")
    return 0

if __name__ == "__main__":
    raise SystemExit(run())
