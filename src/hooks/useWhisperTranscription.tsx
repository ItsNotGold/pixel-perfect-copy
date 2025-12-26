// src/hooks/useWhisperTranscription.tsx
import { useState, useEffect, useCallback } from 'react';
import workerClient from '../workers/workerClient';
import { WorkerMessage } from '../workers/types';

/**
 * A React hook to interact with the shared Whisper transcription worker.
 * It handles the component's state based on messages from the WorkerClient singleton.
 */
export const useWhisperTranscription = () => {
    // State to hold the latest message from the worker.
    const [workerState, setWorkerState] = useState<WorkerMessage>({ status: 'unloaded' });
    // State to store the final transcription output.
    const [transcription, setTranscription] = useState<string | null>(null);

    useEffect(() => {
        // Subscribe to the worker client on component mount.
        // The client immediately provides the current status, preventing race conditions.
        const unsubscribe = workerClient.subscribe(message => {
            setWorkerState(message);
            if (message.status === 'complete') {
                setTranscription(message.output);
            }
        });

        // The component might mount after the model is already loaded.
        // The workerClient's subscribe method handles this by immediately
        // sending the current status. We don't need to manually load the model here.

        // Unsubscribe when the component unmounts to prevent memory leaks.
        return () => {
            unsubscribe();
        };
    }, []);

    /**
     * Sends an audio blob to the worker for transcription.
     * The hook must be in a 'ready' state to accept transcription tasks.
     * @param audioBlob The audio data to be transcribed.
     */
    const startTranscription = useCallback((audioBlob: Blob) => {
        if (workerState.status === 'ready') {
            const worker = workerClient.getWorker();
            worker.postMessage({
                action: 'transcribe',
                audio: audioBlob,
            });
            // Set state to 'transcribing' immediately for responsive UI.
            setWorkerState({ status: 'transcribing' });
        } else {
            console.error('Whisper model is not ready. Current state:', workerState.status);
        }
    }, [workerState.status]);

    return {
        workerState,
        transcription,
        startTranscription,
    };
};
