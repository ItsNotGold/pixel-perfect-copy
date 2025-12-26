import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const EXERCISES = [
  {
    id: '1',
    title: 'Filler Eliminator',
    instructions: 'Speak the sentence below without using any filler words (um, uh, like, etc.).',
    targetText: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    id: '2',
    title: 'Precision Swap',
    instructions: 'Replace the common word in the sentence with a more precise synonym.',
    targetText: 'The very big dog ran quickly.',
  },
  {
    id: '3',
    title: 'Reverse Definitions',
    instructions: 'Read the definition and then say the word it describes.',
    targetText: 'A place where books are kept.',
  },
];

const HomeScreen = ({ navigation }) => {
  const renderExercise = ({ item }) => (
    <TouchableOpacity
      style={styles.exerciseButton}
      onPress={() => navigation.navigate('Exercise', { exercise: item })}
    >
      <Text style={styles.exerciseButtonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <FlatList
        data={EXERCISES}
        renderItem={renderExercise}
        keyExtractor={(item) => item.id}
      />
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exerciseButton: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  exerciseButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
