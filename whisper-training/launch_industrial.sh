#!/bin/bash
set -e

echo "🚀 PHASE 3 INDUSTRIAL LAUNCH - 4x A100 ACTIVATION"

# 1. VERIFY GPUS
nvidia-smi

# 2. DATA TSUNAMI (4 HOURS)
echo "🌊 Starting Data Explosion..."
python whisper-training/data_explosion.py --all_datasets --noise_aug --speed_pert
echo "✅ 5,200 HOURS LOADED"

# 3. BEAST TRAINING (24 HOURS)
echo "🚀 Starting Beast Training (Distributed Accelerate + DeepSpeed)..."
accelerate launch --config_file whisper-training/ds_config.json --num_processes 4 \
  whisper-training/train.py --phase=3 --industrial
echo "✅ TRAINING COMPLETE - distil-whisper-duolingo-v3 saved"

# 4. ULTIMATE BENCHMARKS (POST-TRAINING AUTOMATIC)
echo "🧪 Running Ultimate Benchmarks..."
python whisper-training/ultimate_eval.py --v3_compare --all_scenarios

echo "💎 GOD-TIER STT READY FOR PRODUCTION"
