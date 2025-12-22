try:
    from unsloth import FastLanguageModel
    from datasets import load_from_disk, Audio
    from trl import SFTTrainer
    from transformers import TrainingArguments
    import torch
    import os

    # 1. SETUP MODEL (Phase 2: Resume from v1 or use original with higher rank)
    # Using BF16 for precision boost on A100/H100
    model, tokenizer = FastLanguageModel.from_pretrained(
        model_name="distil-whisper-v1-fine-tuned", # Resume from Phase 1
        max_seq_length=4096, # Double context
        dtype=torch.bfloat16,
        load_in_4bit=True,
    )

    # Aggressive LoRA for hyper-accuracy
    model = FastLanguageModel.get_peft_model(
        model,
        r=32, # Double rank
        target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
        lora_alpha=64, # Double alpha
        lora_dropout=0,
        bias="none",
        use_gradient_checkpointing=True
    )

    # 2. LOAD BALANCED MULTILINGUAL DATASET
    if not os.path.exists("whisper-training/datasets/multilingual_v2"):
        print("❌ Dataset missing. Run prepare_multilingual.py first.")
        exit(1)
        
    dataset = load_from_disk("whisper-training/datasets/multilingual_v2")

    # 3. TRAIN (Phase 2 Aggression)
    trainer = SFTTrainer(
        model=model,
        tokenizer=tokenizer,
        train_dataset=dataset,
        dataset_text_field="sentence",
        max_seq_length=4096,
        dataset_num_proc=8,
        args=TrainingArguments(
            per_device_train_batch_size=8,
            gradient_accumulation_steps=2,
            warmup_steps=50,
            max_steps=800, # 6 hours on A100x2
            learning_rate=1e-4,
            bf16=True,
            logging_steps=10,
            optim="adamw_torch_fused",
            weight_decay=0.01,
            lr_scheduler_type="linear",
            seed=3407,
            output_dir="distil-whisper-v2-fine-tuned",
            save_strategy="steps",
            save_steps=100,
        ),
    )

    print("🚀 Starting Phase 2 Aggressive Fine-Tuning...")
    trainer.train()

    # 4. SAVE
    model.save_pretrained("distil-whisper-v2-fine-tuned")
    tokenizer.save_pretrained("distil-whisper-v2-fine-tuned")
    print("✅ Model saved to distil-whisper-v2-fine-tuned")

except ImportError as e:
    print(f"ERROR: Missing dependencies. Run './deploy.sh'.")
except Exception as e:
    print(f"An error occurred during Phase 2 training: {e}")
