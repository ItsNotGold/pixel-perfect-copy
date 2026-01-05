
import whisper
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
import uuid
import uvicorn
import ssl

# Bypass SSL verification for model download if certificates are failing (common issue)
ssl._create_default_https_context = ssl._create_unverified_context

print("Loading Whisper model 'turbo'...")
# Reference from streamlit_whisper.py: model = whisper.load_model("turbo")
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
    # Create temp file
    temp_filename = f"temp_{uuid.uuid4()}_{file.filename}"
    try:
        with open(temp_filename, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        print(f"Transcribing {temp_filename}...")
        
        # Transcribe
        # User requirement: "analyses the outputted transcription for the score"
        # We need text and potentially word timestamps for scoring logic in frontend.
        # Adding word_timestamps=True is a safe addition that provides more data without breaking text structure.
        result = model.transcribe(temp_filename, word_timestamps=True)
        
        # Format legacy segments into a flat word list for frontend analysis
        words = []
        for segment in result.get("segments", []):
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
    uvicorn.run(app, host="0.0.0.0", port=6000)
