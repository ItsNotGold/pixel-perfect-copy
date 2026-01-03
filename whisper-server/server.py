import torch
from transformers import AutoModelForSpeechSeq2Seq, AutoProcessor, pipeline
from fastapi import FastAPI, WebSocket
import asyncio
import base64
import json
import numpy as np

# --- Model Setup ---
device = "cuda:0" if torch.cuda.is_available() else "cpu"
torch_dtype = torch.float16 if torch.cuda.is_available() else torch.float32

model_id = "openai/whisper-large-v3-turbo"

print(f"Loading model: {model_id} on {device}...")

# Attempt to use Flash Attention 2 if available, otherwise SDPA
attn_implementation = "sdpa"
try:
    import flash_attn
    attn_implementation = "flash_attention_2"
except ImportError:
    pass

print(f"Using attention implementation: {attn_implementation}")

# Load model directly as requested
processor = AutoProcessor.from_pretrained(model_id)
model = AutoModelForSpeechSeq2Seq.from_pretrained(
    model_id, 
    torch_dtype=torch_dtype, 
    low_cpu_mem_usage=True, 
    use_safetensors=True,
    attn_implementation=attn_implementation
)
model.to(device)

pipe = pipeline(
    "automatic-speech-recognition",
    model=model,
    tokenizer=processor.tokenizer,
    feature_extractor=processor.feature_extractor,
    torch_dtype=torch_dtype,
    device=device,
)

print("Model loaded successfully.")

app = FastAPI()

if __name__ == "__main__":
    import uvicorn
    # Listen on all interfaces so the host can access it
    uvicorn.run(app, host="0.0.0.0", port=8000)

@app.websocket("/transcribe")
async def transcribe(websocket: WebSocket):
    await websocket.accept()
    
    # Send AssemblyAI-compatible SessionBegun
    await websocket.send_json({
        "message_type": "SessionBegun",
        "session_id": "whisper-large-v3-turbo-local"
    })

    audio_buffer = bytearray()
    
    try:
        while True:
            message = await websocket.receive_text()
            data = json.loads(message)
            
            if data.get("terminate_session"):
                break

            if "audio_data" in data:
                chunk = base64.b64decode(data["audio_data"])
                audio_buffer.extend(chunk)
            
            # Process every ~750ms of audio (assuming 16kHz mono 16-bit PCM: 32000 bytes/sec)
            # 16000 samples/sec * 2 bytes/sample * 0.75 sec = 24000 bytes
            if len(audio_buffer) > 24000:
                # Convert to float32 for pipeline
                # Note: Pipeline expects a numpy array of shape (N,)
                audio_np = np.frombuffer(audio_buffer, dtype=np.int16).astype(np.float32) / 32768.0
                
                # Transcribe
                # return_timestamps="word" gives word-level timestamps in the "chunks" key
                result = pipe(
                    audio_np, 
                    return_timestamps="word"
                )
                
                # Format output for client
                # result["chunks"] structure: [{'text': ' word', 'timestamp': (start, end)}, ...]
                # Timestamps are in seconds. Client expects milliseconds (int).
                
                output_words = []
                chunks = result.get("chunks", [])
                full_text = result.get("text", "").strip()

                for chunk in chunks:
                    text = chunk.get("text", "").strip()
                    timestamp = chunk.get("timestamp")
                    
                    start_ms = 0
                    end_ms = 0
                    
                    # timestamp can be None, a tuple (start, end), or (start, None)
                    if timestamp:
                        start_sec = timestamp[0] if timestamp[0] is not None else 0
                        end_sec = timestamp[1] if timestamp[1] is not None else start_sec + 0.5 # fallback duration
                        start_ms = int(start_sec * 1000)
                        end_ms = int(end_sec * 1000)
                    
                    output_words.append({
                        "text": text,
                        "start": start_ms,
                        "end": end_ms,
                        "confidence": 1.0 # Pipeline doesn't always return confidence per word easily in this simple mode
                    })
                
                if output_words:
                    await websocket.send_json({
                        "message_type": "FinalTranscript",
                        "words": output_words,
                        "text": full_text
                    })
                
                # Clear buffer after processing
                # Note: In a real streaming setup, we might want to keep some overlap or use a streaming-compatible approach.
                # But mimicking the previous logic, we clear it.
                audio_buffer.clear()
                
    except Exception as e:
        print(f"Error during transcription: {e}")
    finally:
        await websocket.close()
