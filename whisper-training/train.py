try:
    from unsloth import FastLanguageModel
    from datasets import load_from_disk, Audio
    from trl import SFTTrainer
    from transformers import TrainingArguments
    import torch
    import os

    # 1. SETUP MODEL (Phase 3: Deep LoRA + Industrial Capacity)
    model, tokenizer = FastLanguageModel.from_pretrained(
        model_name="distil-whisper-duolingo-v2", # Resume from Phase 2
        max_seq_length=4096,
        dtype=torch.bfloat16,
        load_in_4bit=True,
    )

    # DEEP LoRA for <1.5% WER
    model = FastLanguageModel.get_peft_model(
        model,
        r=64, # Phase 3: Industrial Rank
        target_modules=["q_proj", "k_proj", "v_proj", "o_proj", "gate_proj", "up_proj", "down_proj"],
        lora_alpha=128,
        lora_dropout=0,
        bias="none",
        use_gradient_checkpointing=True
    )

    # 2. LOAD INDUSTRIAL DATASET
    if not os.path.exists("whisper-training/datasets/industrial_v3"):
        print("❌ Industrial dataset missing. Run data_explosion.py first.")
        exit(1)
        
    dataset = load_from_disk("whisper-training/datasets/industrial_v3")

    # 3. TRAIN (Phase 3 Industrial Pipeline)
    trainer = SFTTrainer(
        model=model,
        tokenizer=tokenizer,
        train_dataset=dataset,
        dataset_text_field="sentence",
        max_seq_length=4096,
        dataset_num_proc=8,
        args=TrainingArguments(
            per_device_train_batch_size=16,      # 4x Phase 2
            gradient_accumulation_steps=1,       # Full speed with DeepSpeed ZeRO-3
            learning_rate=5e-5,                  # Ultra-conservative for fine-tuning
            max_steps=5000,                      # 24 hours 4xA100 target
            warmup_steps=200,
            weight_decay=0.005,
            optim="paged_adamw_32bit",
            bf16=True,
            gradient_checkpointing=True,
            deepspeed="whisper-training/ds_config.json", # Powering ZeRO-3 memory
            logging_steps=10,
            lr_scheduler_type="cosine",
            seed=3407,
            output_dir="distil-whisper-duolingo-v3",
            save_strategy="steps",
            save_steps=500,
            remove_unused_columns=False
        ),
    )

    print("🚀 LAUNCHING PHASE 3 BEAST TRAINING...")
    trainer.train()

    # 4. SAVE & EXPORT
    model.save_pretrained("distil-whisper-duolingo-v3")
    tokenizer.save_pretrained("distil-whisper-duolingo-v3")
    print("✅ Model saved to distil-whisper-duolingo-v3")

except ImportError as e:
    print(f"ERROR: Missing dependencies. Run './deploy.sh'.")
except Exception as e:
    print(f"An error occurred during Phase 3 industrial training: {e}")
