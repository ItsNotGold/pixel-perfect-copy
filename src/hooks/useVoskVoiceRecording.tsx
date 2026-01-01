import { useState, useRef, useCallback, useEffect } from "react";
import { toast } from "sonner";
import { createModel, KaldiRecognizer, Model } from "vosk-browser";
import { supabase } from "@/integrations/supabase/client";

export interface WordTimestamp {
  text: string;
  start: number;
  end: number;
}

const VOSK_MODELS: Record<string, { url: string; name: string }> = {
  "en-US": { url: "https://alphacephei.com/vosk/models/vosk-model-small-en-us-0.15.zip", name: "English (US)" },
  "fr-FR": { url: "https://alphacephei.com/vosk/models/vosk-model-small-fr-0.22.zip", name: "French" },
  "de-DE": { url: "https://alphacephei.com/vosk/models/vosk-model-small-de-0.15.zip", name: "German" },
  "es-ES": { url: "https://alphacephei.com/vosk/models/vosk-model-small-es-0.42.zip", name: "Spanish" },
  "ru-RU": { url: "https://alphacephei.com/vosk/models/vosk-model-small-ru-0.22.zip", name: "Russian" },
  "zh-CN": { url: "https://alphacephei.com/vosk/models/vosk-model-small-cn-0.22.zip", name: "Chinese" }
};

declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
  }
}

interface UseVoskVoiceRecordingReturn {
  isRecording: boolean;
  isProcessing: boolean;
  isModelLoading: boolean;
  transcript: string;
  wordTimestamps: WordTimestamp[];
  startRecording: (languageCode?: string) => Promise<void>;
  stopRecording: () => Promise<{ blob: Blob | null; transcript: string; words: WordTimestamp[] }>;
  resetTranscript: () => void;
  audioBlob: Blob | null;
  audioUrl: string | null;
  saveAudio: (blobOverride?: Blob | null) => Promise<string | null>;
}

export function useVoskVoiceRecording(): UseVoskVoiceRecordingReturn {
  const [isRecording, setIsRecording] = useState(false);
  const isRecordingRef = useRef(isRecording);
  useEffect(() => {
    isRecordingRef.current = isRecording;
  }, [isRecording]);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [wordTimestamps, setWordTimestamps] = useState<WordTimestamp[]>([]);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const modelsRef = useRef<Map<string, Model>>(new Map());
  const recognizerRef = useRef<KaldiRecognizer | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const mediaStreamSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const getModelForLanguage = useCallback(async (languageCode: string) => {
    if (!VOSK_MODELS[languageCode]) {
      toast.error(`Language "${languageCode}" is not supported.`);
      return null;
    }
    if (modelsRef.current.has(languageCode)) {
      return modelsRef.current.get(languageCode);
    }
    setIsModelLoading(true);
    const modelPath = `vosk-model-${languageCode}`;
    try {
      const modelUrl = VOSK_MODELS[languageCode].url;
      const newModel = await createModel(modelUrl, modelPath);
      modelsRef.current.set(languageCode, newModel);
      toast.success(`Model for ${VOSK_MODELS[languageCode].name} loaded.`);
      return newModel;
    } catch (e) {
      console.error(`Failed to load model for ${languageCode}`, e);
      toast.error(`Could not load model for ${VOSK_MODELS[languageCode].name}.`);
      return null;
    } finally {
      setIsModelLoading(false);
    }
  }, []);

  const startRecording = useCallback(async (languageCode: string = "en-US") => {
    setTranscript("");
    setWordTimestamps([]);
    setAudioBlob(null);

    try {
      const model = await getModelForLanguage(languageCode);
      if (!model) throw new Error("Vosk model is not available.");

      const recognizer = new model.KaldiRecognizer(16000);
      recognizer.setWords(true);

      recognizer.on("result", (message) => {
        const result = message.result;
        if (result.text) {
          setTranscript(prev => (prev + " " + result.text).trim());
        }
        if (result.result) {
          const newWords: WordTimestamp[] = result.result.map(w => ({
            text: w.word,
            start: w.start,
            end: w.end,
          }));
          setWordTimestamps(prev => [...prev, ...newWords]);
        }
      });
      recognizerRef.current = recognizer;

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      mediaStreamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContextClass({ sampleRate: 16000 });
      audioContextRef.current = audioContext;
      const source = audioContext.createMediaStreamSource(stream);
      mediaStreamSourceRef.current = source;
      const processor = audioContext.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;

      processor.onaudioprocess = (event) => {
        if (!isRecordingRef.current) return;
        try {
          recognizerRef.current?.acceptWaveform(event.inputBuffer);
        } catch (error) {
          console.error("Error accepting waveform:", error);
        }
      };

      source.connect(processor);
      processor.connect(audioContext.destination);

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error starting recording:", err);
      toast.error("Failed to start recording. Please check microphone permissions.");
    }
  }, [getModelForLanguage]);

  const stopRecording = useCallback(async () => {
    if (!isRecording) {
      return { blob: audioBlob, transcript, words: wordTimestamps };
    }

    setIsProcessing(true);

    if (processorRef.current && mediaStreamSourceRef.current) {
      mediaStreamSourceRef.current.disconnect();
      processorRef.current.disconnect();
    }

    let recordedBlob: Blob | null = null;
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      recordedBlob = await new Promise<Blob>((resolve) => {
        mediaRecorderRef.current!.onstop = () => {
          const blob = new Blob(chunksRef.current, { type: "audio/webm" });
          setAudioBlob(blob);
          resolve(blob);
        };
        mediaRecorderRef.current!.stop();
      });
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
    }

    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      await audioContextRef.current.close();
    }

    if (recognizerRef.current) {
      recognizerRef.current.remove();
      recognizerRef.current = null;
    }

    setIsRecording(false);
    setIsProcessing(false);

    return {
      blob: recordedBlob,
      transcript: transcript,
      words: wordTimestamps
    };
  }, [isRecording, audioBlob, transcript, wordTimestamps]);

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
    setWordTimestamps([]);
    setAudioBlob(null);
    setAudioUrl(null);
  }, []);

  return {
    isRecording,
    isProcessing,
    isModelLoading,
    transcript,
    wordTimestamps,
    startRecording,
    stopRecording,
    resetTranscript,
    audioBlob,
    audioUrl,
    saveAudio,
  };
}
