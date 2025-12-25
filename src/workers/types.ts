// src/workers/types.ts

/**
 * Defines the structure for messages passed between the worker, the client, and the UI components.
 */
export type WorkerMessage = {
    status: 'unloaded' | 'loading' | 'ready' | 'error' | 'progress' | 'transcribing' | 'complete';
    // Using [key: string]: any to allow for flexible properties depending on the status.
    // For 'progress': `progress` (number), `file` (string)
    // For 'complete': `output` (string)
    // For 'error': `error` (any)
    [key: string]: any;
};

/**
 * Defines the signature for a listener function that subscribes to worker messages.
 */
export type MessageListener = (message: WorkerMessage) => void;
