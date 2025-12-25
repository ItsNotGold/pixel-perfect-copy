// src/workers/whisper.worker.ts
import { pipeline, AutomaticSpeechRecognitionPipeline, env } from '@huggingface/transformers';

// Disable local models to ensure we use the remote quantized model
env.allowLocalModels = false;
// Use a proxy for the WASM backend if you are running this in a cross-origin environment
// env.backends.onnx.wasm.proxy = true;

/**
 * This class holds the state of the single Whisper pipeline instance.
 */
class WhisperPipelineSingleton {
    static instance: AutomaticSpeechRecognitionPipeline | null = null;
    static loading = false;

    static async getInstance(progress_callback?: (progress: { status: string; file: string; progress: number; loaded: number; total: number; }) => void) {
        if (this.instance === null && !this.loading) {
            this.loading = true;
            try {
                this.instance = await pipeline('automatic-speech-recognition', 'onnx-community/whisper-large-v3-turbo', {
                    device: 'webgpu',
                    dtype: {
                        encoder: 'fp16',
                        decoder: 'q4',
                    },
                    progress_callback,
                });
            } catch (error) {
                console.error("Pipeline initialization failed:", error);
                self.postMessage({
                    status: 'error',
                    message: 'Failed to load the model. Your device may not have enough memory or WebGPU support. Please try closing other tabs or refreshing.',
                    error: error instanceof Error ? error.message : String(error),
                });
                this.instance = null;
            } finally {
                this.loading = false;
            }
        }
        return this.instance;
    }
}

// Listener for messages from the main thread
self.onmessage = async (event) => {
    const { action, audio, language, task } = event.data;

    // Handle the initial model loading trigger
    if (action === 'loadModel') {
        self.postMessage({ status: 'loading' });
        await WhisperPipelineSingleton.getInstance((progress) => {
            self.postMessage(progress);
        });
        // Model is either loaded or failed, no further action here
        return;
    }

    // Handle transcription requests
    if (!audio) return;

    try {
        // Since loading might not have been triggered yet, or might still be in progress,
        // we always get the instance here. The singleton pattern handles the state.
        const transcriber = await WhisperPipelineSingleton.getInstance((progress) => {
            self.postMessage(progress);
        });

        if (!transcriber) {
            // Error was already posted during initialization
            return;
        }

        self.postMessage({ status: 'transcribing' });

        const resampledAudio = await resampleAudio(audio);

        const output = await transcriber(resampledAudio, {
            language: language, // `null` or `undefined` triggers auto-detection
            task: task || 'transcribe',
            return_timestamps: true,
        });

        self.postMessage({
            status: 'complete',
            output: output,
        });

    } catch (error) {
        console.error("Transcription failed:", error);
        self.postMessage({
            status: 'error',
            message: 'An error occurred during transcription.',
            error: error instanceof Error ? error.message : String(error),
        });
    }
};

/**
 * Converts an audio blob into a Float32Array, resampled to 16kHz mono.
 * This is required for the Whisper model.
 * @param {Blob} audioBlob The audio blob received from the MediaRecorder.
 * @returns {Promise<Float32Array>} A promise that resolves to the resampled audio data.
 */
async function resampleAudio(audioBlob: Blob): Promise<Float32Array> {
    const TARGET_SAMPLE_RATE = 16000;
    const audioData = await audioBlob.arrayBuffer();

    // Use a try-catch block to handle potential decoding errors
    try {
        const audioContext = new (self.AudioContext || self.webkitAudioContext)();
        const decodedAudio = await audioContext.decodeAudioData(audioData);

        const duration = decodedAudio.duration;
        const offlineContext = new OfflineAudioContext(
            1, // Mono channel
            Math.ceil(duration * TARGET_SAMPLE_RATE),
            TARGET_SAMPLE_RATE
        );

        const source = offlineContext.createBufferSource();
        source.buffer = decodedAudio;
        source.connect(offlineContext.destination);
        source.start();

        const renderedBuffer = await offlineContext.startRendering();
        return renderedBuffer.getChannelData(0);
    } catch (e) {
        console.error("Failed to decode or resample audio:", e);
        throw new Error("Invalid audio format or file corrupted.");
    }
}
