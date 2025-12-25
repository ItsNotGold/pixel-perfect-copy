// src/workers/workerClient.ts
import { WorkerMessage, MessageListener } from './types';

/**
 * A stateful singleton class to manage the Web Worker.
 * This client ensures that no matter when a component subscribes,
 * it will receive the current status of the model, preventing race conditions.
 */
class WorkerClient {
    private worker: Worker;
    private listeners: Set<MessageListener> = new Set();
    private static instance: WorkerClient;

    // The crucial piece of state: holds the most recent status of the worker.
    private currentStatus: WorkerMessage = { status: 'unloaded' };

    private constructor() {
        this.worker = new Worker(new URL('./whisper.worker.ts', import.meta.url), {
            type: 'module'
        });
        this.worker.onmessage = this.handleWorkerMessage.bind(this);
        // Automatically start loading the model as soon as the client is instantiated.
        this.loadModel();
    }

    /**
     * Get the singleton instance of the WorkerClient.
     */
    public static getInstance(): WorkerClient {
        if (!WorkerClient.instance) {
            WorkerClient.instance = new WorkerClient();
        }
        return WorkerClient.instance;
    }

    /**
     * Handles incoming messages from the worker and updates the client's state.
     */
    private handleWorkerMessage(event: MessageEvent): void {
        const message: WorkerMessage = event.data;

        // Update the current status. This is the source of truth.
        this.currentStatus = message;

        // Notify all active listeners of the new message.
        this.listeners.forEach(listener => listener(message));
    }

    /**
     * Initiates the model loading process in the worker.
     * Prevents duplicate load commands if already loading or ready.
     */
    public loadModel() {
        if (this.currentStatus.status === 'unloaded') {
            this.currentStatus = { status: 'loading', progress: 0, file: 'Initializing...' };
            // Also notify listeners that we are starting the loading process.
            this.listeners.forEach(listener => listener(this.currentStatus));
            this.worker.postMessage({ action: 'loadModel' });
        }
    }

    /**
     * Allows a component to subscribe to worker messages.
     * @param listener The function to call when a message is received.
     * @returns An unsubscribe function.
     */
    public subscribe(listener: MessageListener): () => void {
        this.listeners.add(listener);

        // **The Core Fix**: Immediately notify the new subscriber of the current status.
        // This solves the race condition where a component mounts after the 'ready' event has fired.
        listener(this.currentStatus);

        // Return a function to allow the component to unsubscribe.
        return () => {
            this.listeners.delete(listener);
        };
    }

    /**
     * Provides direct access to the worker for posting messages.
     * @returns The underlying Worker instance.
     */
    public getWorker(): Worker {
        return this.worker;
    }
}

// Export the singleton instance for use across the application.
export default WorkerClient.getInstance();
