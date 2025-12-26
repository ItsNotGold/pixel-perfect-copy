import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Platform } from 'react-native';
import { Audio } from 'expo-av';
import Button from '../components/Button';
import { useWhisper } from '../hooks/useWhisper';
import { evaluateSpeech } from '../utils/evaluateSpeech';

const ExerciseScreen = ({ route }) => {
  const { exercise } = route.params;
  const [recording, setRecording] = useState(null);
  const [recordingUri, setRecordingUri] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [evaluation, setEvaluation] = useState(null);
  const [duration, setDuration] = useState(0);
  const { isLoading, isModelLoading, downloadProgress, startTranscription } = useWhisper();

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const { status } = await Audio.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'This app needs microphone access to record audio.');
    }
  };

  const startRecording = async () => {
    try {
      setTranscription('');
      setEvaluation(null);
      const { recording } = await Audio.Recording.createAsync({
        android: {
          extension: '.m4a',
          outputFormat: Audio.AndroidOutputFormat.MPEG_4,
          audioEncoder: Audio.AndroidAudioEncoder.AAC,
          sampleRate: 16000,
          numberOfChannels: 1,
        },
        ios: {
          extension: '.m4a',
          audioQuality: Audio.IOSAudioQuality.HIGH,
          sampleRate: 16000,
          numberOfChannels: 1,
        },
      });
      setRecording(recording);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    if (!recording) return;

    try {
      const status = await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(null);
      setRecordingUri(uri);
      setDuration(status.durationMillis / 1000); // Convert to seconds
      transcribeAudio(uri, status.durationMillis / 1000);
    } catch (error) {
      console.error('Failed to stop recording', error);
    }
  };

  const transcribeAudio = async (uri, durationInSeconds) => {
    if (!uri) return;
    const result = await startTranscription(uri);
    if (result) {
      setTranscription(result);
      const evalResult = evaluateSpeech(result, exercise.targetText, durationInSeconds);
      setEvaluation(evalResult);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.title}</Text>
      <Text style={styles.instructions}>{exercise.instructions}</Text>
      <Text style={styles.targetText}>{exercise.targetText}</Text>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
        style={recording ? styles.stopButton : styles.startButton}
        disabled={isLoading || isModelLoading}
      />
      {isModelLoading && <Text>Downloading Model: {downloadProgress}%</Text>}
      {isLoading && !isModelLoading && <Text>Initializing Whisper...</Text>}
      {transcription ? (
        <View style={styles.resultsContainer}>
          <Text style={styles.header}>Your Transcription:</Text>
          <Text>{transcription}</Text>
          {evaluation && (
            <>
              <Text style={styles.header}>Evaluation:</Text>
              <Text>Accuracy: {evaluation.accuracy.toFixed(2)}%</Text>
              <Text>Filler Words: {evaluation.fillerWords}</Text>
              <Text>Words Per Minute: {evaluation.wordsPerMinute}</Text>
              <Text style={styles.header}>Feedback:</Text>
              <Text>{evaluation.feedback}</Text>
            </>
          )}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    instructions: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
    },
    targetText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333',
    },
    startButton: {
      backgroundColor: '#28a745',
    },
    stopButton: {
      backgroundColor: '#dc3545',
    },
    resultsContainer: {
      marginTop: 20,
      padding: 15,
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    header: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
    },
  });

export default ExerciseScreen;
