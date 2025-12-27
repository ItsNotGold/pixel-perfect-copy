// src/workers/whisper.worker.ts
import {
    pipeline,
    AutomaticSpeechRecognitionPipeline,
    env,
    AutomaticSpeechRecognitionOutput,
    PipelineType
} from '@huggingface/transformers';

// Disable local models to ensure we use the remote quantized model
env.allowLocalModels = false;
// Use a proxy for the WASM backend if you are running this in a cross-origin environment
// env.backends.onnx.wasm.proxy = true;

// Define interfaces for message passing
interface WorkerMessage {
    action: 'loadModel' | 'transcribe';
    audio?: Blob;
    language?: string;
    task?: 'transcribe' | 'translate';
}

interface ProgressUpdate {
    status: string;
    file: string;
    progress: number;
    loaded: number;
    total: number;
}

/**
 * This class holds the state of the single Whisper pipeline instance.
 * It is designed to be robust against concurrent calls.
 */
class WhisperPipelineSingleton {
    static instance: AutomaticSpeechRecognitionPipeline | null = null;
    // A promise that resolves with the pipeline instance once it's loaded.
    // This prevents race conditions where multiple components try to load the model simultaneously.
    static loadingPromise: Promise<AutomaticSpeechRecognitionPipeline | null> | null = null;

    static getInstance(progress_callback?: (progress: ProgressUpdate) => void): Promise<AutomaticSpeechRecognitionPipeline | null> {
        // If the instance is already loaded, return it immediately.
        if (this.instance) {
            return Promise.resolve(this.instance);
        }

        // If the model is already being loaded, wait for the existing promise to resolve.
        if (this.loadingPromise) {
            return this.loadingPromise;
        }

        // This is the first call, so start the loading process.
        this.loadingPromise = new Promise((resolve, reject) => {
            // Use an IIFE to allow async/await inside the promise executor
            // without making the executor itself async.
            (async () => {
                try {
                    const model = await pipeline('automatic-speech-recognition' as PipelineType, 'onnx-community/whisper-large-v3-turbo', {
                        device: 'webgpu' as any, // eslint-disable-line @typescript-eslint/no-explicit-any
                        dtype: {
                            encoder: 'fp16' as any, // eslint-disable-line @typescript-eslint/no-explicit-any
                            decoder: 'q4' as any, // eslint-disable-line @typescript-eslint/no-explicit-any
                        },
                        progress_callback,
                    });
                    this.instance = model;
                    resolve(this.instance);
                } catch (error) {
                    console.error("Pipeline initialization failed:", error);
                    self.postMessage({
                        status: 'error',
                        message: 'Failed to load the model. Your device may not have enough memory or WebGPU support. Please try closing other tabs or refreshing.',
                        error: error instanceof Error ? error.message : String(error),
                    });
                    this.instance = null; // Ensure instance is null on failure
                    reject(error);
                } finally {
                    // The loading process is complete (either success or failure),
                    // so reset the promise. Future calls will either get the instance
                    // or try to load again if it failed.
                    this.loadingPromise = null;
                }
            })();
        });

        return this.loadingPromise;
    }
}

// Listener for messages from the main thread
self.onmessage = async (event: MessageEvent<WorkerMessage>) => {
    const { action, audio, language, task } = event.data;

    const postProgress = (progress: ProgressUpdate) => self.postMessage(progress);

    if (action === 'loadModel') {
        self.postMessage({ status: 'loading' });
        try {
            const instance = await WhisperPipelineSingleton.getInstance(postProgress);
            if (instance) {
                self.postMessage({ status: 'ready' });
            }
        } catch (error) {
            // Error is already posted by getInstance
        }
        return;
    }

    if (!audio) return;

    try {
        const transcriber = await WhisperPipelineSingleton.getInstance(postProgress);

        if (!transcriber) {
            return; // Error already posted
        }

        self.postMessage({ status: 'transcribing' });
        const resampledAudio = await resampleAudio(audio);

        const output: AutomaticSpeechRecognitionOutput = await transcriber(resampledAudio, {
            language: language,
            task: (task || 'transcribe') as 'transcribe' | 'translate',
            return_timestamps: true,
        });

        self.postMessage({
            status: 'complete',
            output,
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
