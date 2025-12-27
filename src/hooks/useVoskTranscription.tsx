
import { useState, useRef, useCallback, useEffect } from 'react';
import { Vosk } from 'vosk-browser';
import { toast } from 'sonner';

export interface WordTimestamp {
  text: string;
  start: number;
  end: number;
}

interface UseVoskTranscriptionReturn {
  isRecording: boolean;
  isModelLoading: boolean;
  transcript: string;
  wordTimestamps: WordTimestamp[];
  startRecording: (languageCode?: string) => Promise<void>;
  stopRecording: () => void;
  reset: () => void;
}

const modelCache = new Map();

export function useVoskTranscription(): UseVoskTranscriptionReturn {
  const [isRecording, setIsRecording] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [wordTimestamps, setWordTimestamps] = useState<WordTimestamp[]>([]);

  const recognizer = useRef<any | null>(null);

  const onPartialResult = useCallback((result: any) => {
    setTranscript(result.result.partial);
  }, []);

  const onResult = useCallback((result: any) => {
    setTranscript(result.result.text);
    if (result.result.result) {
      const timestamps: WordTimestamp[] = result.result.result.map((word: any) => ({
        text: word.word,
        start: word.start,
        end: word.end,
      }));
      setWordTimestamps(timestamps);
    }
  }, []);

  const startRecording = useCallback(async (languageCode: string = 'en-US') => {
    setIsModelLoading(true);
    try {
      const modelUrl = `https://ccoreilly.github.io/vosk-browser/models/vosk-model-small-${languageCode.toLowerCase()}.tar.gz`;

      let model;
      if (modelCache.has(modelUrl)) {
        model = modelCache.get(modelUrl);
      } else {
        model = await Vosk.createModel(modelUrl);
        modelCache.set(modelUrl, model);
      }

      recognizer.current = new model.KaldiRecognizer();
      recognizer.current.on('result', onResult);
      recognizer.current.on('partialresult', onPartialResult);
      recognizer.current.start();
      setIsRecording(true);
    } catch (error) {
      toast.error('Failed to initialize recognizer.', {
        description: error instanceof Error ? error.message : String(error),
      });
    } finally {
      setIsModelLoading(false);
    }
  }, [onResult, onPartialResult]);

  const stopRecording = useCallback(() => {
    if (recognizer.current) {
      recognizer.current.stop();
      recognizer.current = null;
    }
    setIsRecording(false);
  }, []);

  const reset = useCallback(() => {
    setTranscript('');
    setWordTimestamps([]);
    setIsRecording(false);
  }, []);

  return {
    isRecording,
    isModelLoading,
    transcript,
    wordTimestamps,
    startRecording,
    stopRecording,
    reset,
  };
}
