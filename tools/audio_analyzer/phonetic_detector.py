import numpy as np
import librosa

def detect_phonetic_fillers_frame_based(wav_path: str, frame_ms=25, hop_ms=10):
    """
    Detect phonetic fillers directly from the waveform using frame-level features.
    Ported from original filler_detector.py for robust non-lexical detection.
    
    Returns list of entries with keys:
      start_time, end_time, duration_ms, category, confidence
    """
    y, sr = librosa.load(wav_path, sr=None)
    
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
        # Fallback when pyin not available/fails
        n_frames = rms.shape[0]
        f0 = np.full(n_frames, np.nan)
        voiced_prob = np.zeros(n_frames)

    # Ensure arrays align
    n_frames = rms.shape[0]
    
    # Heuristic for median speech energy: use frames above a small fraction of max
    # This helps avoid silence dominating the median
    if np.max(rms) > 0:
        speech_mask = rms > (np.max(rms) * 0.1)
        if np.any(speech_mask):
            median_speech_energy = float(np.median(rms[speech_mask]))
        else:
            median_speech_energy = float(np.median(rms))
    else:
        median_speech_energy = 0.0

    # Silence threshold for surrounding-silence rule
    silence_thresh = np.max(rms) * 0.02 if np.max(rms) > 0 else 0

    # Basic hesitation frame criteria (primary)
    voiced_prob_arr = np.array(voiced_prob)
    # Ensure nans are handled
    voiced_prob_arr = np.nan_to_num(voiced_prob_arr)
    
    cond_voiced_high = voiced_prob_arr > 0.6
    cond_rms = rms < (median_speech_energy * 0.8)
    cond_sf = spec_flat > 0.3
    cond_zcr = zcr < 0.05

    hesitation = cond_voiced_high & cond_rms & cond_sf & cond_zcr

    # Allow breathy hesitations with lower voicing probability but high flatness
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

            # Surrounding silence bypass: if the segment is between silences, 
            # allow it even if RMS rule was strict (re-checking nearby context)
            left_slice = rms[max(0, i - 3) : i]
            right_slice = rms[j : min(n_frames, j + 3)]
            
            left_silence = (left_slice.size > 0 and np.all(left_slice < silence_thresh)) or i < 3
            right_silence = (right_slice.size > 0 and np.all(right_slice < silence_thresh)) or (j + 2 >= n_frames)

            # Validate duration (180ms - 2000ms typically covers fillers)
            if 180 <= duration_ms <= 2000:
                # Classify
                seg_slice = slice(i, j)
                
                # Check MFCC variance (low variance = stable sound like hum)
                mfcc_seg = mfcc[:, seg_slice]
                mfcc_var = float(np.mean(np.var(mfcc_seg, axis=1))) if mfcc_seg.size > 0 else 999.0

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

                # Confidence calculation
                score_components = []
                score_components.append(np.clip((mean_voicing - 0.3) / 0.7, 0.0, 1.0))
                score_components.append(np.clip((mean_sf - 0.3) / 0.7, 0.0, 1.0))
                
                if median_speech_energy > 0:
                    rms_mean = float(np.mean(rms[seg_slice]))
                    # lower RMS relative to median => higher score
                    score_components.append(np.clip((median_speech_energy * 0.8 - rms_mean) / (median_speech_energy * 0.8 + 1e-9), 0.0, 1.0))
                else:
                    score_components.append(0.5)

                confidence = float(np.mean(score_components))

                # If it was accepted due to surrounding silence but failed primary RMS, lower confidence slightly
                # (Logic: if we bypassed strict RMS because of silence, it's a good candidate but maybe quieter)
                # But here we only used 'hesitation' mask which ALREADY includes cond_rms. 
                # The original logic implied valid segments might be resurrected if surrounded by silence
                # For strict porting, we stick to the mask. Enhancements could go here.

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
