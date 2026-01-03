
import { pipeline, env, AutomaticSpeechRecognitionPipeline } from '@huggingface/transformers';

// Skip local checks for browser environment
env.allowLocalModels = false;

// Singleton to hold the pipeline
class WhisperPipelineSingleton {
  static instance: Promise<AutomaticSpeechRecognitionPipeline> | null = null;

  static async getInstance(progress_callback?: (data: any) => void) {
    if (this.instance === null) {
      this.instance = pipeline('automatic-speech-recognition', 'onnx-community/whisper-large-v3-turbo', {
        progress_callback,
      }) as Promise<AutomaticSpeechRecognitionPipeline>;
    }
    return this.instance;
  }
}

self.addEventListener('message', async (event) => {
  const { action, audio, language } = event.data;

  if (action === 'loadModel') {
    try {
      self.postMessage({ status: 'loading' });
      await WhisperPipelineSingleton.getInstance((data) => {
        self.postMessage({ status: 'progress', progress: data.progress }); // Relay progress
      });
      self.postMessage({ status: 'ready' });
    } catch (err: any) {
      self.postMessage({ status: 'error', message: 'Failed to load model', error: err.message || err });
    }
    return;
  }

  if (action === 'transcribe' || event.data.task === 'transcribe') {
    // audio is expected to be a Float32Array
    const audioData = audio || event.data.audio;
    if (!audioData) return;

    try {
      const transcriber = await WhisperPipelineSingleton.getInstance();
      self.postMessage({ status: 'transcribing' });

      const output = await transcriber(audioData, {
        language: language || 'en',
        return_timestamps: true,
        chunk_length_s: 30,
      });

      self.postMessage({
        status: 'complete',
        output: output,
      });
    } catch (err: any) {
      self.postMessage({ status: 'error', message: 'Transcription failed', error: err.message || err });
    }
  }
});
