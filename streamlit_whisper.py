

import streamlit as st
import whisper

st.title("Whisper")

#upload audio file with streamlit
audio_file = st.file_uploader("Upload an audio file", type=["mp3", "wav"])

model = whisper.load_model("turbo")
st.text("Whisper Model Loaded")

    
if st.sidebar.button("Transcribe Audio"):
    if audio_file is not None:
        st.sidebar.success("Transcribing Audio")
        transcription = model.transcribe(audio_file.name)
        st.sidebar.success("Transcription Complete")
        st.markdown(transcription["text"])
    else:
        st.sidebar.error("Please upload an audio file")


st.sidebar.header("Play Original Audio File")
st.sidebar.audio(audio_file)