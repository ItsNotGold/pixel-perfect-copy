import React, { createContext, useContext, useState, useRef, useCallback } from 'react';
import { toast } from 'sonner';

export interface WordData {
  text: string;
  start: number;
  end: number;
}

interface TranscriptionContextType {
  transcript: string;
  words: WordData[];
  isRecording: boolean;
  startRecording: (languageCode?: string) => Promise<void>;
  stopRecording: () => void;
}

const TranscriptionContext = createContext<TranscriptionContextType | undefined>(undefined);

export const TranscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transcript, setTranscript] = useState('');
  const [words, setWords] = useState<WordData[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  
  const wsRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const startTimeRef = useRef<number>(0);
  const sessionBegunRef = useRef(false);

  const startRecording = useCallback(async (languageCode: string = "en-US") => {
    try {
      setTranscript('');
      setWords([]);
      setIsRecording(true);
      sessionBegunRef.current = false;
      startTimeRef.current = Date.now();

      const whisperUrl = import.meta.env.VITE_WHISPER_URL;
      if (!whisperUrl) {
        toast.error("ASR Server not configured.");
        setIsRecording(false);
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const ws = new WebSocket(whisperUrl);
      wsRef.current = ws;

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.message_type === 'SessionBegun') {
          sessionBegunRef.current = true;
        }
        if (data.message_type === 'FinalTranscript' && data.words) {
          const sessionStart = startTimeRef.current;
          const newWords = (data.words as { text: string; start: number; end: number }[]).map((w) => ({
            text: w.text,
            start: sessionStart + w.start,
            end: sessionStart + w.end
          }));
          setWords(prev => [...prev, ...newWords]);
          setTranscript(prev => (prev + " " + data.text).trim());
        }
      };

      ws.onclose = () => {
        sessionBegunRef.current = false;
      };

      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      audioContextRef.current = audioCtx;
      
      const source = audioCtx.createMediaStreamSource(stream);
      const processor = audioCtx.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;

      processor.onaudioprocess = (e) => {
        if (ws.readyState !== WebSocket.OPEN || !sessionBegunRef.current) return;
        const inputData = e.inputBuffer.getChannelData(0);
        const pcmData = new Int16Array(inputData.length);
        for (let i = 0; i < inputData.length; i++) {
          pcmData[i] = Math.max(-1, Math.min(1, inputData[i])) * 0x7FFF;
        }
        const b64 = window.btoa(String.fromCharCode(...new Uint8Array(pcmData.buffer)));
        ws.send(JSON.stringify({ audio_data: b64 }));
      };

      source.connect(processor);
      processor.connect(audioCtx.destination);

    } catch (err) {
      console.error("Transcription start failed:", err);
      toast.error("Failed to start transcription.");
      setIsRecording(false);
    }
  }, []);

  const stopRecording = useCallback(() => {
    setIsRecording(false);
    
    if (wsRef.current) {
      if (wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify({ terminate_session: true }));
      }
      wsRef.current.close();
      wsRef.current = null;
    }

    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  }, []);

  return (
    <TranscriptionContext.Provider value={{ transcript, words, isRecording, startRecording, stopRecording }}>
      {children}
    </TranscriptionContext.Provider>
  );
};

export const useInvisibleTranscription = () => {
  const context = useContext(TranscriptionContext);
  if (context === undefined) {
    throw new Error('useInvisibleTranscription must be used within a TranscriptionProvider');
  }
  return context;
};
