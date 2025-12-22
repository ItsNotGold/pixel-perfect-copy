try:
    from fastapi import FastAPI, WebSocket
    from faster_whisper import WhisperModel
    import asyncio
    import base64
    import io
    import json
    import numpy as np

    app = FastAPI()
    # Using large-v3 for best multilingual accuracy (EN/FR/ES)
    model = WhisperModel("distil-whisper/distil-large-v3", device="cuda", compute_type="float16")

    @app.websocket("/transcribe")
    async def transcribe(websocket: WebSocket):
        await websocket.accept()
        
        # Send AssemblyAI-compatible SessionBegun
        await websocket.send_json({
            "message_type": "SessionBegun",
            "session_id": "distil-whisper-local"
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
                
                # Process every 750ms for better context than 500ms
                if len(audio_buffer) > 16000 * 2 * 0.75:
                    # Convert to float32 for whisper
                    audio_np = np.frombuffer(audio_buffer, dtype=np.int16).astype(np.float32) / 32768.0
                    
                    segments, _ = model.transcribe(
                        audio_np,
                        word_timestamps=True,
                        language=None  # Auto-detection for EN/FR/ES
                    )
                    
                    for segment in segments:
                        words = [{
                            "text": word.word.strip(),
                            "start": round(word.start * 1000),
                            "end": round(word.end * 1000),
                            "confidence": getattr(word, 'probability', 0.99)
                        } for word in segment.words]
                        
                        if words:
                            await websocket.send_json({
                                "message_type": "FinalTranscript",
                                "words": words,
                                "text": segment.text.strip()
                            })
                    
                    audio_buffer.clear()
        except Exception as e:
            print(f"Error: {e}")
        finally:
            await websocket.close()

except ImportError as e:
    print(f"Server script ready but dependencies missing for local run: {e}")
