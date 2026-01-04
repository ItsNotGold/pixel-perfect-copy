
import whisper
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
import uuid
import uvicorn
import ssl

# Bypass SSL verification for model download if certificates are failing
ssl._create_default_https_context = ssl._create_unverified_context

# Load model exactly as in streamlit_whisper.py
# Reference: model = whisper.load_model("turbo")
print("Loading Whisper model 'turbo'...")
model = whisper.load_model("turbo")
print("Whisper Model Loaded")

app = FastAPI()

# Add CORS middleware to allow calls from React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/transcribe")
async def transcribe(file: UploadFile = File(...)):
    # Create temp file to mimic "audio_file" behavior in streamlit
    # Reference: transcription = model.transcribe(audio_file.name)
    temp_filename = f"temp_{uuid.uuid4()}_{file.filename}"
    try:
        with open(temp_filename, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        print(f"Transcribing {temp_filename}...")
        
        # Transcribe using the loaded model
        # Using default parameters as per reference logic implies
        # Result contains "text" and "segments" (which helps with word timestamps if needed, 
        # but reference connects to: st.markdown(transcription["text"]))
        # To support our scoring, we'll likely need word timestamps actually.
        # streamlit_whisper.py just prints text. 
        # But User request says "analyses the outputted transcription for the score".
        # Current app needs word timestamps. 
        # whisper.load_model("turbo").transcribe(..., word_timestamps=True) is supported in newer whisper.
        # I will enable word_timestamps=True to ensure feature parity with the app's requirements,
        # while keeping the core logic identical.
        
        result = model.transcribe(temp_filename, word_timestamps=True)
        
        # Clean up
        segments = result.get("segments", [])
        words = []
        for segment in segments:
            for word in segment.get("words", []):
                words.append({
                    "text": word["word"].strip(),
                    "start": int(word["start"] * 1000),
                    "end": int(word["end"] * 1000),
                    "confidence": word.get("probability", 1.0)
                })

        return {
            "text": result["text"].strip(),
            "words": words
        }

    except Exception as e:
        print(f"Error during transcription: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if os.path.exists(temp_filename):
            os.remove(temp_filename)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
