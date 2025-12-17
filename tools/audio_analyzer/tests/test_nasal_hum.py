import tempfile
import numpy as np
import soundfile as sf
from app import detect_phonetic_fillers_frame_based

# Generate a 400ms nasal hum-like sound (low F0, harmonic-rich) with silence around
sr = 16000
duration = 0.4
f0 = 120.0
t = np.linspace(0, duration, int(sr*duration), endpoint=False)
# sum of harmonics to create 'hum' timbre
signal = 0.6 * np.sin(2*np.pi*f0*t) + 0.2 * np.sin(2*np.pi*2*f0*t) + 0.1 * np.sin(2*np.pi*3*f0*t)
# apply a short fade-in/out
fade = np.linspace(0,1, int(0.01*sr))
signal[:len(fade)] *= fade
signal[-len(fade):] *= fade[::-1]

# Surround with silence
silence_before = np.zeros(int(sr*0.2))
silence_after = np.zeros(int(sr*0.2))
full = np.concatenate([silence_before, signal, silence_after])

with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as tmp:
    sf.write(tmp.name, full, sr)
    path = tmp.name

print('WAV path:', path)
res = detect_phonetic_fillers_frame_based(path)
print('Detected fillers:', res)

# Basic assertions for acceptance test
assert len(res) == 1, f'Expected 1 filler, found {len(res)}'
fill = res[0]
assert fill['category'] == 'nasal_hum', f"Expected category nasal_hum, found {fill['category']}"
assert abs(fill['duration_ms'] - 400) < 80, f"Expected duration ~400ms, got {fill['duration_ms']}ms"
print('Nasal hum test passed')
