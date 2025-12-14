import { useState, useRef, useCallback } from "react";
import { toast } from "sonner";
import { AssemblyAI } from 'assemblyai';
import { supabase } from "@/integrations/supabase/client";

// Type definitions for Web Speech API
interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognitionType extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognitionType;
    webkitSpeechRecognition: new () => SpeechRecognitionType;
  }
}

interface UseVoiceRecordingReturn {
  isRecording: boolean;
  isProcessing: boolean;
  transcript: string;
  rawTranscript: string;
  startRecording: (languageCode?: string) => Promise<void>;
  stopRecording: () => void;
  resetTranscript: () => void;
  audioBlob: Blob | null;
  audioUrl: string | null;
  saveAudio: () => Promise<string | null>;
}

export function useVoiceRecording(): UseVoiceRecordingReturn {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [rawTranscript, setRawTranscript] = useState("");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<SpeechRecognitionType | null>(null);

  const startRecording = useCallback(async (languageCode: string = "en-US") => {
    try {
      // Check for browser support
      const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (!SpeechRecognitionConstructor) {
        toast.error("Speech recognition not supported in this browser. Please use Chrome or Edge.");
        return;
      }

      // Request microphone permission
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Set up MediaRecorder for audio capture
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
      };
      
      // Set up Speech Recognition
      const recognition = new SpeechRecognitionConstructor();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = languageCode;
      
      let finalTranscript = "";
      
      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let interim = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            finalTranscript += result[0].transcript + " ";
          } else {
            interim += result[0].transcript;
          }
        }
        // Keep raw/interim transcript for better detection of disfluencies
        const raw = (finalTranscript + interim).trim();
        setRawTranscript(raw);
        setTranscript(raw); // keep transcript populated while processing
      };
      
      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error("Speech recognition error:", event.error);
        if (event.error === "not-allowed") {
          toast.error("Microphone access denied. Please allow microphone access.");
        }
      };
      
      recognitionRef.current = recognition;
      
      // Start both recording and recognition
      mediaRecorder.start();
      recognition.start();
      setIsRecording(true);
      setTranscript("");
      
    } catch (error) {
      console.error("Error starting recording:", error);
      toast.error("Failed to start recording. Please check microphone permissions.");
    }
  }, []);

  const stopRecording = useCallback(async () => {
    setIsProcessing(true);
    
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current = null;
    }
    
    setIsRecording(false);
    
    // Wait for audioBlob to be set
    setTimeout(async () => {
      if (audioBlob) {
        try {
          const client = new AssemblyAI({
            apiKey: import.meta.env.VITE_ASSEMBLYAI_API_KEY,
          });
          
          const audioFile = new File([audioBlob], 'recording.webm', { type: 'audio/webm' });
          
          const uploadUrl = await client.files.upload(audioFile);
          
          // Ask ASR to preserve disfluencies where possible and punctuate
          const transcriptResponse = await client.transcripts.transcribe({
            audio: uploadUrl,
            punctuate: true,
            format_text: true,
            disfluencies: true,
          });
          
          if (transcriptResponse.status === 'completed') {
            // Merge processed transcript with raw interim transcript to preserve filler detections
            const processed = transcriptResponse.text || '';
            const merged = [processed, rawTranscript].filter(Boolean).join(' ');
            setTranscript(merged);
          } else {
            toast.error('Transcription failed');
          }
        } catch (error) {
          console.error('Transcription error:', error);
          toast.error('Failed to transcribe audio');
        }
      }
      setIsProcessing(false);
    }, 100);
  }, [audioBlob]);

  const saveAudio = useCallback(async (): Promise<string | null> => {
    if (!audioBlob) return null;
    
    try {
      const fileName = `recording-${Date.now()}.webm`;
      const { data, error } = await supabase.storage
        .from('audio-recordings')
        .upload(fileName, audioBlob, {
          contentType: 'audio/webm',
        });
      
      if (error) throw error;
      
      const { data: urlData } = supabase.storage
        .from('audio-recordings')
        .getPublicUrl(fileName);
      
      setAudioUrl(urlData.publicUrl);
      return urlData.publicUrl;
    } catch (error) {
      console.error('Error saving audio:', error);
      toast.error('Failed to save audio recording');
      return null;
    }
  }, [audioBlob]);

  const resetTranscript = useCallback(() => {
    setTranscript("");
    setAudioBlob(null);
    setAudioUrl(null);
  }, []);

  return {
    isRecording,
    isProcessing,
    transcript,
    rawTranscript,
    startRecording,
    stopRecording,
    resetTranscript,
    audioBlob,
    audioUrl,
    saveAudio,
  };
}
