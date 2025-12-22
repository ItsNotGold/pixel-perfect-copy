FROM nvidia/cuda:12.1-runtime-ubuntu22.04

RUN apt update && apt install -y python3-pip ffmpeg
RUN pip install faster-whisper fastapi uvicorn[standard] python-multipart numpy

COPY server.py /app/server.py
WORKDIR /app

EXPOSE 8000

CMD ["uvicorn", "server.py:app", "--host", "0.0.0.0", "--port", "8000"]
