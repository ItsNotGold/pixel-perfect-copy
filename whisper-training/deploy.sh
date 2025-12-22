#!/bin/bash

# 1. GPU + ENVIRONMENT CHECK
echo "🔍 Checking GPU status..."
nvidia-smi || { echo "❌ ERROR: No NVIDIA GPU detected. This mission requires CUDA 12.1+."; exit 1; }

# 2. INSTALL DEPENDENCIES
echo "📦 Installing training dependencies..."
pip install --upgrade pip
pip install unsloth[colab-new] transformers datasets[audio] trl peft evaluate jiwer accelerate bitsandbytes

# 3. RUN TRAINING
echo "🚀 Starting Fine-Tuning (Phase 2)..."
python train.py

# 4. RUN BENCHMARKING
echo "📊 Running Benchmark (Phase 3)..."
python benchmark.py

# 5. DEPLOYMENT (DUMMY)
if [ -d "./distil-whisper-v1-fine-tuned" ]; then
    echo "✅ Training successful!"
    echo "👉 Next: Update your WHISPER_LOAD_MODEL env to point to this directory or push to HuggingFace."
    # huggingface-cli login
    # huggingface-cli upload your-repo ./distil-whisper-v1-fine-tuned
else
    echo "❌ ERROR: Training output not found."
    exit 1
fi
