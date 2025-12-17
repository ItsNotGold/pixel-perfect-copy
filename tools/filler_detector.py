import json
import numpy as np
import librosa
import librosa.display


def detect_fillers(y, sr, frame_ms=25, hop_ms=10):
    frame_length = int(sr * frame_ms / 1000)
    hop_length = int(sr * hop_ms / 1000)

    # Features per frame
    rms = librosa.feature.rms(y=y, frame_length=frame_length, hop_length=hop_length)[0]
    zcr = librosa.feature.zero_crossing_rate(y, frame_length=frame_length, hop_length=hop_length)[0]
    spec_flat = librosa.feature.spectral_flatness(y=y, n_fft=frame_length, hop_length=hop_length)[0]
    mfcc = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13, n_fft=frame_length, hop_length=hop_length)

    # Fundamental frequency and voicing probability (pyin)
    try:
        f0, voiced_flag, voiced_prob = librosa.pyin(
            y, fmin=50, fmax=sr/2 - 100, frame_length=frame_length, hop_length=hop_length
        )
    except Exception:
        # Fallback when pyin not available; create NaNs/zeros
        n_frames = rms.shape[0]
        f0 = np.full(n_frames, np.nan)
        voiced_prob = np.zeros(n_frames)

    # Ensure arrays align
    n_frames = rms.shape[0]
    times = (np.arange(n_frames) * hop_length) / sr

    # Heuristic for median speech energy: use frames above a small fraction of max
    speech_mask = rms > (np.max(rms) * 0.1 + 1e-12)
    if np.any(speech_mask):
        median_speech_energy = float(np.median(rms[speech_mask]))
    else:
        median_speech_energy = float(np.median(rms) + 1e-12)

    # Silence threshold for surrounding-silence rule
    silence_thresh = np.max(rms) * 0.02

    # Basic hesitation frame criteria (primary) and separate breathy rule
    voiced_prob_arr = np.array(voiced_prob)
    cond_voiced_high = voiced_prob_arr > 0.6
    cond_rms = rms < (median_speech_energy * 0.8)
    cond_sf = spec_flat > 0.3
    cond_zcr = zcr < 0.05

    hesitation = cond_voiced_high & cond_rms & cond_sf & cond_zcr

    # Allow breathy hesitations with lower voicing probability
    breathy = (voiced_prob_arr >= 0.3) & (voiced_prob_arr <= 0.6) & (spec_flat > 0.45) & (zcr < 0.05) & cond_rms
    hesitation = hesitation | breathy

    # Merge consecutive hesitation frames into segments
    segments = []
    i = 0
    while i < n_frames:
        if hesitation[i]:
            j = i + 1
            while j < n_frames and hesitation[j]:
                j += 1
            # i..j-1 is a candidate segment
            start_time = (i * hop_length) / sr
            end_time = ((j - 1) * hop_length + frame_length) / sr
            duration_ms = (end_time - start_time) * 1000.0

            # Surrounding silence bypass: if the segment is between silences, allow even if RMS rule strict
            left_silence = (i - 3 >= 0 and np.all(rms[max(0, i - 3) : i] < silence_thresh)) or i < 3
            right_silence = (j + 2 < n_frames and np.all(rms[j : min(n_frames, j + 3)] < silence_thresh)) or (j + 2 >= n_frames)

            # Validate duration
            if 180 <= duration_ms <= 2000:
                # Classify
                seg_slice = slice(i, j)
                mfcc_seg = mfcc[:, seg_slice]
                mfcc_var = float(np.mean(np.var(mfcc_seg, axis=1)))

                f0_seg = f0[seg_slice]
                f0_clean = f0_seg[~np.isnan(f0_seg)]
                pitch_std = float(np.std(f0_clean)) if f0_clean.size > 0 else float('nan')

                mean_sf = float(np.mean(spec_flat[seg_slice]))
                mean_voicing = float(np.mean(voiced_prob_arr[seg_slice]))

                # Determine category
                category = "prolonged_vowel"
                if mfcc_var < 15:
                    category = "nasal_hum"
                elif not np.isnan(pitch_std) and pitch_std < 20:
                    category = "prolonged_vowel"
                elif mean_sf > 0.45 and 0.3 <= mean_voicing <= 0.6:
                    category = "breathy_hesitation"

                # Confidence: simple normalized score of how strongly frames meet criteria
                score_components = []
                score_components.append(np.clip((mean_voicing - 0.3) / 0.7, 0.0, 1.0))
                score_components.append(np.clip((mean_sf - 0.3) / 0.7, 0.0, 1.0))
                # RMS-based: lower RMS relative to median => higher score
                if median_speech_energy > 0:
                    rms_mean = float(np.mean(rms[seg_slice]))
                    score_components.append(np.clip((median_speech_energy * 0.8 - rms_mean) / (median_speech_energy * 0.8 + 1e-9), 0.0, 1.0))
                else:
                    score_components.append(0.5)

                confidence = float(np.mean(score_components))

                # If RMS criterion failed but surrounded by silence, accept with slightly lowered confidence
                if not np.all(cond_rms[seg_slice]) and left_silence and right_silence:
                    confidence = confidence * 0.85

                if np.isnan(confidence):
                    confidence = 0.0

                segments.append(
                    {
                        "start_time": float(start_time),
                        "end_time": float(end_time),
                        "duration_ms": float(duration_ms),
                        "category": category,
                        "confidence": float(np.clip(confidence, 0.0, 1.0)),
                    }
                )

            i = j
        else:
            i += 1

    return segments


def detect_file(path):
    y, sr = librosa.load(path, sr=None)
    return detect_fillers(y, sr)


if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2:
        print("Usage: python filler_detector.py <audio.wav>")
        sys.exit(1)

    out = detect_file(sys.argv[1])
    print(json.dumps(out, indent=2))
