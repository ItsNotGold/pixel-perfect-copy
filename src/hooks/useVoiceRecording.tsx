import { useState, useRef, useCallback } from "react";
import { toast } from "sonner";
import { AssemblyAI, RealtimeTranscriber } from 'assemblyai';
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

export interface WordTimestamp {
  text: string;
  start: number;
  end: number;
}

interface UseVoiceRecordingReturn {
  isRecording: boolean;
  isProcessing: boolean;
  transcript: string;
  rawTranscript: string;
  wordTimestamps: WordTimestamp[];
  startRecording: (languageCode?: string) => Promise<void>;
  stopRecording: () => Promise<{ blob: Blob | null; transcript: string }>;
  resetTranscript: () => void;
  audioBlob: Blob | null;
  audioUrl: string | null;
  saveAudio: (blobOverride?: Blob | null) => Promise<string | null>;
}

export function useVoiceRecording(): UseVoiceRecordingReturn {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [rawTranscript, setRawTranscript] = useState("");
  const [wordTimestamps, setWordTimestamps] = useState<WordTimestamp[]>([]);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const sessionBegunRef = useRef(false);
  const startTimeRef = useRef<number | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<SpeechRecognitionType | null>(null);
  const rtRef = useRef<RealtimeTranscriber | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);

  const startRecording = useCallback(async (languageCode: string = "en-US") => {
    try {
      startTimeRef.current = Date.now();
      setWordTimestamps([]);
      setTranscript("");
      setRawTranscript("");
      sessionBegunRef.current = false;
      // Check for browser support
      const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition || null;

      if (!SpeechRecognitionConstructor) {
        // Allow recording even when SpeechRecognition is unavailable
        toast.error("Speech recognition not supported in this browser. Recording will still work if AssemblyAI is configured.");
      }

      // Request microphone permission
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        toast.error("Microphone capture is not supported in this browser.");
        return;
      }

      let stream: MediaStream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (err) {
        const error = err as Error;
        // Show a clearer error message based on the error
        if (error.name === "NotAllowedError" || error.name === "SecurityError") {
          toast.error("Microphone access denied. Please allow microphone permissions in your browser.");
        } else if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
          toast.error("No microphone found. Please connect a microphone and try again.");
        } else {
          toast.error("Unable to access microphone. Check device settings and try again.");
        }
        console.error("getUserMedia error:", error);
        return;
      }

      // Set up MediaRecorder for audio capture
      if (typeof MediaRecorder === "undefined") {
        toast.error("Recording is not supported in this browser.");
        stream.getTracks().forEach((t) => t.stop());
        return;
      }

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

      // Set up Speech Recognition only when available
      if (SpeechRecognitionConstructor) {
        const recognition = new SpeechRecognitionConstructor();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = languageCode;

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          let interim = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const result = event.results[i];
            if (result.isFinal) {
              const text = result[0].transcript;
              // If AssemblyAI is NOT active or NOT begun, use Web Speech for basic transcription and dummy timestamps
              if (!import.meta.env.VITE_ASSEMBLYAI_API_KEY || !sessionBegunRef.current) {
                setTranscript((prev) => (prev + " " + text).trim());
                
                const words = text.split(/\s+/).filter(Boolean);
                const now = Date.now();
                const recordingElapsed = now - (startTimeRef.current || now);
                
                const dummyWords: WordTimestamp[] = words.map((w, idx) => ({
                   text: w,
                   start: recordingElapsed - (words.length - idx) * 300, 
                   end: recordingElapsed - (words.length - idx - 1) * 300
                }));
                setWordTimestamps(prev => [...prev, ...dummyWords]);
              }
            } else {
              interim += result[0].transcript;
            }
          }
          const raw = interim.trim();
          setRawTranscript(raw);
          if (!import.meta.env.VITE_ASSEMBLYAI_API_KEY) {
            setTranscript(raw); 
          }
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error("Speech recognition error:", event.error);
          if (event.error === "not-allowed") {
            toast.error("Microphone access denied. Please allow microphone access.");
          }
        };

        recognitionRef.current = recognition;
      } else {
        recognitionRef.current = null;
      }

      // --- AssemblyAI Realtime Setup ---
      const apiKey = import.meta.env.VITE_ASSEMBLYAI_API_KEY;
      if (apiKey) {
        console.log("🔗 AssemblyAI Realtime: Initializing transcriber...");
        try {
          const rt = new RealtimeTranscriber({
            apiKey: apiKey,
            sampleRate: 16000
          });

          rt.on('open', ({ sessionId }) => {
            console.log('✅ AssemblyAI Realtime: Connection opened', sessionId);
            sessionBegunRef.current = true;
          });

          rt.on('error', (err) => {
            console.error('❌ AssemblyAI Realtime error:', err);
            // If we get an auth error, we'll know
            if (err.message?.includes('4001') || err.message?.includes('authorized')) {
               console.warn("AssemblyAI Auth failed. Using Web Speech fallback.");
               toast.error("AssemblyAI Auth failed. WPM will use browser fallback (less accurate).");
            }
          });

          rt.on('transcript', (data) => {
            if (data.message_type === 'FinalTranscript') {
              const newWords = (data.words || []).map((w) => ({
                text: w.text,
                start: w.start,
                end: w.end
              }));
              
              setWordTimestamps(prev => [...prev, ...newWords]);
              setTranscript(prev => (prev + " " + (data.text || "")).trim());
            }
          });

          rt.on('close', (code, reason) => {
            console.log('ℹ️ AssemblyAI Realtime: Connection closed', code, reason);
            sessionBegunRef.current = false;
          });

          await rt.connect();
          rtRef.current = rt;

          // Set up Audio Context for capture
          const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
          audioContextRef.current = audioCtx;
          
          const source = audioCtx.createMediaStreamSource(stream);
          const processor = audioCtx.createScriptProcessor(4096, 1, 1);
          processorRef.current = processor;

          processor.onaudioprocess = (e) => {
            const inputData = e.inputBuffer.getChannelData(0);
            const pcmData = new Int16Array(inputData.length);
            for (let i = 0; i < inputData.length; i++) {
              pcmData[i] = Math.max(-1, Math.min(1, inputData[i])) * 0x7FFF;
            }
            
            if (rtRef.current && sessionBegunRef.current) {
              rtRef.current.sendAudio(pcmData.buffer);
            }
          };

          source.connect(processor);
          processor.connect(audioCtx.destination);
        } catch (asaiError) {
          console.error("AssemblyAI initialization failed:", asaiError);
        }
      }

      // Start the recorder and recognition (if available)
      mediaRecorder.start();
      if (recognitionRef.current) {
        try { recognitionRef.current.start(); } catch (e) { console.warn('Speech recognition start failed', e); }
      }
      setIsRecording(true);
      setTranscript("");

    } catch (err) {
      const error = err as Error;
      console.error("Error starting recording:", error);
      // Provide more actionable messages for common failure modes
      if (error.name === "NotAllowedError") {
        toast.error("Microphone access denied. Please enable microphone permissions in your browser and reload the page.");
      } else if (error.name === "NotFoundError") {
        toast.error("No microphone found. Connect a microphone and try again.");
      } else {
        toast.error("Failed to start recording. Check microphone permissions and try again.");
      }
    }
  }, []);


  const stopRecording = useCallback(async (): Promise<{ blob: Blob | null; transcript: string }> => {
    setIsProcessing(true);



    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

    if (rtRef.current) {
      await rtRef.current.close();
      rtRef.current = null;
    }

    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }

    if (audioContextRef.current) {
      await audioContextRef.current.close();
      audioContextRef.current = null;
    }

    // Stop the media recorder and wait for onstop to resolve with the blob
    let recordedBlob: Blob | null = null;
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      try {
        const recorder = mediaRecorderRef.current;
        recordedBlob = await new Promise<Blob | null>((resolve) => {
          recorder.onstop = () => {
            try {
              const blob = new Blob(chunksRef.current, { type: "audio/webm" });
              // update state for UI playback
              setAudioBlob(blob);
              resolve(blob);
            } catch (err) {
              console.error("Error creating audio blob:", err);
              resolve(null);
            }
          };
          try {
            recorder.stop();
          } catch (err) {
            console.error("Error stopping recorder:", err);
            resolve(null);
          }
        });
      } catch (err) {
        console.error("Error stopping recorder:", err);
      } finally {
        mediaRecorderRef.current = null;
      }
    }

    setIsRecording(false);

    // If we have a recorded blob (from the recorder), try to transcribe it using the configured service
    // Use the local recorded blob variable instead of referencing the possibly-stale state value
    let finalTranscriptVal = rawTranscript;
    if (recordedBlob) {
      try {

        // Only attempt AssemblyAI if an API key is configured
        const apiKey = import.meta.env.VITE_ASSEMBLYAI_API_KEY;
        if (apiKey) {
          const client = new AssemblyAI({ apiKey });
          const audioFile = new File([recordedBlob], 'recording.webm', { type: 'audio/webm' });
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
            finalTranscriptVal = merged;
          } else {

            toast.error('Transcription failed');
          }
        } else {
          // No remote ASR configured — keep the raw transcript captured by the Web Speech API
          setTranscript(rawTranscript);
          finalTranscriptVal = rawTranscript;

        }
      } catch (error) {
        console.error('Transcription error:', error);
        // Don't surface a toast for transcription errors in order to keep recording flow smooth
      }
    }

    setIsProcessing(false);
    return { blob: recordedBlob, transcript: finalTranscriptVal };
  }, [rawTranscript]); // transcript and wordTimestamps are used inside state update logic but don't need to trigger re-creation of the callback itself if we treat them correctly. Actually wordTimestamps is needed for the return but this is the stop hook. 
  // Wait, if I use them in return, they should be dependencies if used in the closure. 
  // But transcript and wordTimestamps are state that changes during recording. 
  // This hook is for STOPPING, it should grab LATEST. So dependencies are correct. 
  // I'll leave them to avoid stale closures.




  const saveAudio = useCallback(async (blobOverride?: Blob | null): Promise<string | null> => {
    const blobToSave = blobOverride || audioBlob;
    if (!blobToSave) return null;

    try {
      const fileName = `recording-${Date.now()}.webm`;
      const { data, error } = await supabase.storage
        .from('audio-recordings')
        .upload(fileName, blobToSave, {
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
    setRawTranscript("");
    setWordTimestamps([]);
    setAudioBlob(null);
    setAudioUrl(null);
    sessionBegunRef.current = false;
  }, []);

  return {
    isRecording,
    isProcessing,
    transcript,
    rawTranscript,
    wordTimestamps,
    startRecording,
    stopRecording,
    resetTranscript,
    audioBlob,
    audioUrl,
    saveAudio,
  };
}
