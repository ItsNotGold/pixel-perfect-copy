try:
    from unsloth import FastLanguageModel
    from datasets import load_dataset, concatenate_datasets, Audio, Dataset
    from trl import SFTTrainer
    from transformers import TrainingArguments
    import torch
    import os
    import json

    # 1. SETUP MODEL
    model, tokenizer = FastLanguageModel.from_pretrained(
        model_name="distil-whisper/distil-large-v3",
        max_seq_length=2048,
        dtype=torch.float16,
        load_in_4bit=True,
    )

    model = FastLanguageModel.get_peft_model(
        model,
        r=16,
        target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
        lora_alpha=16,
        lora_dropout=0,
        bias="none",
        use_gradient_checkpointing=True
    )

    # 2. PREPARE DATASETS (CommonVoice 13.0)
    langs = ["en", "fr", "es"]
    datasets_list = []

    for lang in langs:
        print(f"Loading CommonVoice 13.0 for {lang}...")
        cv = load_dataset("mozilla-foundation/common_voice_13_0", lang, split="train[:5%]", trust_remote_code=True)
        # Select only relevant columns
        cv = cv.remove_columns([c for c in cv.column_names if c not in ["sentence", "audio"]])
        datasets_list.append(cv)

    # 3. INJECT EXERCISE VOCABULARY
    # Note: In production, the agent will script the extraction of phrases from src/data/exercises
    exercise_phrases = [
        "Repeat after me: Bonjour, comment allez-vous?",
        "Hola, ¿cómo estás? Muy bien gracias.",
        "The quick brown fox jumps over the lazy dog."
    ]
    # Synthetic dataset for vocab injection (requires audio if we want full fine-tuning, 
    # but here we focus on text-alignment if using Whisper's text-to-speech or simple prompt tuning)
    # For Distil-Whisper training, we typically need Audio. 

    combined_dataset = concatenate_datasets(datasets_list)

    # 4. TRAIN
    trainer = SFTTrainer(
        model=model,
        tokenizer=tokenizer,
        train_dataset=combined_dataset,
        dataset_text_field="sentence",
        max_seq_length=2048,
        dataset_num_proc=4,
        args=TrainingArguments(
            per_device_train_batch_size=4,
            gradient_accumulation_steps=4,
            warmup_steps=10,
            max_steps=300,
            learning_rate=2e-4,
            fp16=not torch.cuda.bf16_supported(),
            bf16=torch.cuda.bf16_supported(),
            logging_steps=10,
            optim="adamw_8bit",
            weight_decay=0.01,
            lr_scheduler_type="linear",
            seed=3407,
            output_dir="distil-whisper-v1-fine-tuned",
        ),
    )

    print("🚀 Starting Fine-Tuning...")
    trainer.train()

    # 5. SAVE
    model.save_pretrained("distil-whisper-v1-fine-tuned")
    tokenizer.save_pretrained("distil-whisper-v1-fine-tuned")
    print("✅ Model saved to distil-whisper-v1-fine-tuned")

except ImportError as e:
    print(f"ERROR: Missing dependencies for training. Run 'pip install unsloth[colab-new] transformers datasets[audio] trl peft'.")
    print(f"Original error: {e}")
except Exception as e:
    print(f"An error occurred during training: {e}")
