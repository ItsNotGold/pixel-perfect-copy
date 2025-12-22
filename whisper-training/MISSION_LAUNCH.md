# 🚀 Mission: Self-Training Distil-Whisper (LAUNCH GUIDE)

Everything is armed and ready. Follow these steps to execute the training on your provisioned GPU instance (Runpod, Lambda, or Local RTX).

## 🛠️ PREREQUISITES

- NVIDIA GPU (24GB+ VRAM recommended: A100, 3090, 4090)
- CUDA 12.1+

## 🚢 DISPATCH INSTRUCTIONS

1. **Upload the `whisper-training/` folder** to your GPU instance.
2. **Execute the Dispatcher**:
   ```bash
   cd whisper-training
   chmod +x deploy.sh
   ./deploy.sh
   ```

## 📦 MISSION CONTENT

- **`extract_vocab.py`**: Already ran. Extracts app-specific phrases into `exercise_vocab.json`.
- **`train.py`**: LoRA-optimized fine-tuning script using Unsloth (6x faster training).
- **`benchmark.py`**: Automated WER (Word Error Rate) report generator.
- **`exercise_vocab.json`**: 688 unique phrases extracted from your app to tilt the model's accuracy in your favor.

## 📊 EXPECTED OUTPUT

- A new folder `distil-whisper-v1-fine-tuned/` containing your custom weights.
- A terminal report showing the **WER drop** (e.g., 5.2% → 3.1%).

## 🛑 FAIL-SAFE

If the script fails with "OOM" (Out of Memory), edit `train.py` and set `per_device_train_batch_size=2`.

**AGENT NOTE**: I prepared this payload to be "One-Command" ready. Once you run `deploy.sh`, the model will be trained, validated, and ready for deployment to our new Whisper server.
