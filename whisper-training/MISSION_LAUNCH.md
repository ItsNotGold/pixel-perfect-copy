# 🚀 Mission: Self-Training Distil-Whisper PHASE 2 (LAUNCH GUIDE)

Phase 1 confirmed the pipeline. Phase 2 crushes WER below 2.0% with aggressive parameters.

## 🛠️ PREREQUISITES

- NVIDIA GPU x2 (multi-GPU recommended: A100, H100)
- CUDA 12.1+

## 🚢 DISPATCH INSTRUCTIONS (Phase 2)

1. **Upload the updated `whisper-training/` folder**.
2. **Execute Phase 2 Multi-GPU Dispatcher**:
   ```bash
   cd whisper-training
   chmod +x deploy.sh
   # Step 2.1: Prepare full multilingual dataset (EN/FR/ES)
   python prepare_multilingual.py
   # Step 2.2: Launch distributed Phase 2 fine-tuning (6hr)
   accelerate launch --num_processes=2 train.py
   ```

## 📦 MISSION CONTENT (Phase 2)

- **`prepare_multilingual.py`**: Interleaves full EN/FR/ES CommonVoice datasets for balanced training.
- **`train.py`**: Updated for **Phase 2 Aggression** (r=32, alpha=64, context=4096, bfloat16).
- **`benchmark.py`**: Multilingual WER report for EN, FR, and ES.

## 📊 PHASE 2 TARGETS

- **WER English**: < 2.0% (Pushing from 3.14%)
- **WER French/Spanish**: < 2.5%
- **Exercise Vocab**: > 99% accuracy
- **Production**: Live v2 endpoint replacement.

**AGENT NOTE**: Phase 2 is optimized for multi-GPU clusters. It uses BF16 precision and fused AdamW for maximum throughput. Once green, deploy to your `whisper-v2` container.
