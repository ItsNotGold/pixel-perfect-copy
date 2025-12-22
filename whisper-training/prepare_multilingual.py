from datasets import load_dataset, interleave_datasets, Audio
import os

def prepare_data():
    print("🌍 Downloading Full Multilingual Datasets (EN/FR/ES)...")
    
    # Using 'train+validation' for maximum data exposure
    en_ds = load_dataset("mozilla-foundation/common_voice_13_0", "en", split="train+validation", trust_remote_code=True)
    fr_ds = load_dataset("mozilla-foundation/common_voice_13_0", "fr", split="train+validation", trust_remote_code=True)
    es_ds = load_dataset("mozilla-foundation/common_voice_13_0", "es", split="train+validation", trust_remote_code=True)

    def clean(example):
        return {"sentence": example["sentence"].lower().strip(), "audio": example["audio"]}

    print("🧹 Cleaning and Interleaving...")
    # Interleave to ensure balanced training across languages
    combined = interleave_datasets([en_ds, fr_ds, es_ds], stopping_strategy="all_exhausted")
    combined = combined.map(clean, remove_columns=[c for c in combined.column_names if c not in ["sentence", "audio"]])
    
    combined.save_to_disk("whisper-training/datasets/multilingual_v2")
    print("✅ Full multilingual dataset saved to disk.")

if __name__ == "__main__":
    prepare_data()
