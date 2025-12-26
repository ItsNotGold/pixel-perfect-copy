// src/hooks/useWhisper.js
import { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { initWhisper, transcribe } from 'whisper.rn';

const MODEL_URL = 'https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo.bin';
const FILE_NAME = 'ggml-large-v3-turbo.bin';
const MODEL_FILE_PATH = `${FileSystem.documentDirectory}${FILE_NAME}`;

export const useWhisper = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [whisperContext, setWhisperContext] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        const fileInfo = await FileSystem.getInfoAsync(MODEL_FILE_PATH);
        if (fileInfo.exists) {
          console.log('Model already exists, initializing Whisper...');
          await initializeWhisper();
        } else {
          console.log('Model not found, downloading...');
          await downloadModel();
          await initializeWhisper();
        }
      } catch (error) {
        console.error('Error during initialization:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initialize();

    return () => {
      if (whisperContext) {
        whisperContext.release();
      }
    };
  }, []);

  const downloadModel = async () => {
    setIsModelLoading(true);
    const downloadResumable = FileSystem.createDownloadResumable(
      MODEL_URL,
      MODEL_FILE_PATH,
      {},
      (progress) => {
        setDownloadProgress(Math.round((progress.totalBytesWritten / progress.totalBytesExpectedToWrite) * 100));
      }
    );

    try {
      const { uri } = await downloadResumable.downloadAsync();
      console.log('Finished downloading to ', uri);
    } catch (e) {
      console.error(e);
    } finally {
      setIsModelLoading(false);
    }
  };

  const initializeWhisper = async () => {
    try {
      const context = await initWhisper({
        filePath: MODEL_FILE_PATH,
        isCoreML: Platform.OS === 'ios', // Enable CoreML on iOS
        isGPU: Platform.OS === 'android', // Enable GPU on Android
      });
      setWhisperContext(context);
      console.log('Whisper initialized');
    } catch (error) {
      console.error('Error initializing Whisper:', error);
    }
  };

  const startTranscription = async (audioFilePath) => {
    if (!whisperContext) {
      console.error('Whisper context not initialized');
      return null;
    }
    try {
      const { result } = await transcribe(whisperContext, {
        filePath: audioFilePath,
        language: 'auto',
      });
      return result;
    } catch (error) {
      console.error('Error during transcription:', error);
      return null;
    }
  };

  return {
    isLoading,
    isModelLoading,
    downloadProgress,
    startTranscription,
  };
};
