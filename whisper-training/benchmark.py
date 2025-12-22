import torch
from transformers import AutoModelForSpeechSeq2Seq, AutoProcessor, pipeline
from datasets import load_dataset
from evaluate import load
import time

def evaluate_model(model_id, dataset_name, language="en"):
    print(f"📊 Benchmarking {model_id} on {dataset_name} ({language})...")
    
    device = "cuda:0" if torch.cuda.is_available() else "cpu"
    torch_dtype = torch.float16 if torch.cuda.is_available() else torch.float32

    model = AutoModelForSpeechSeq2Seq.from_pretrained(
        model_id, torch_dtype=torch_dtype, low_cpu_mem_usage=True, use_safetensors=True
    ).to(device)
    
    processor = AutoProcessor.from_pretrained(model_id)
    pipe = pipeline(
        "automatic-speech-recognition",
        model=model,
        tokenizer=processor.tokenizer,
        feature_extractor=processor.feature_extractor,
        max_new_tokens=128,
        chunk_length_s=30,
        batch_size=16,
        torch_dtype=torch_dtype,
        device=device,
    )

    dataset = load_dataset(dataset_name, language, split="test[:100]", trust_remote_code=True)
    
    wer_metric = load("wer")
    predictions = []
    references = []

    start_time = time.time()
    for i, data in enumerate(dataset):
        audio = data["audio"]["array"]
        sample_rate = data["audio"]["sampling_rate"]
        
        result = pipe({"sampling_rate": sample_rate, "raw": audio})
        predictions.append(result["text"].lower())
        references.append(data["sentence"].lower())
        
        if (i+1) % 10 == 0:
            print(f"Processed {i+1}/100...")

    end_time = time.time()
    wer = wer_metric.compute(predictions=predictions, references=references)
    
    print(f"✅ Results for {model_id}:")
    print(f"   WER: {wer*100:.2f}%")
    print(f"   Avg Latency: {(end_time - start_time)/100:.2f}s per sample")
    
    return wer

if __name__ == "__main__":
    # Compare base vs fine-tuned
    base_wer = evaluate_model("distil-whisper/distil-large-v3", "mozilla-foundation/common_voice_13_0", "en")
    # tuned_wer = evaluate_model("./distil-whisper-v1-fine-tuned", "mozilla-foundation/common_voice_13_0", "en")
    
    # print(f"\n📈 OVERALL IMPROVEMENT: {(base_wer - tuned_wer)*100:.2f}%")
