FROM nvidia/cuda:12.1-devel-ubuntu22.04

RUN apt update && apt install -y python3-pip ffmpeg git

# Install PyTorch (assuming CUDA 12.1)
RUN pip install --upgrade pip
RUN pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121

# Install Hugging Face & other libs
RUN pip install --upgrade transformers datasets[audio] accelerate
RUN pip install fastapi uvicorn[standard] python-multipart numpy

# Install Flash Attention 2 (requires CUDA toolkit, hence devel image)
RUN pip install flash-attn --no-build-isolation

COPY server.py /app/server.py
WORKDIR /app

EXPOSE 8000

CMD ["uvicorn", "server.py:app", "--host", "0.0.0.0", "--port", "8000"]
