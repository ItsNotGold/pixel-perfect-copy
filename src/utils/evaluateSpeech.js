// src/utils/evaluateSpeech.js

const FILLER_WORDS = [
  'um', 'uh', 'er', 'ah', 'like', 'okay', 'right', 'so', 'you know'
];

/**
 * Calculates words per minute (WPM).
 * @param {string[]} words - An array of words.
 * @param {number} durationInSeconds - The duration of the speech in seconds.
 * @returns {number} - The calculated WPM.
 */
const calculateWPM = (words, durationInSeconds) => {
  if (durationInSeconds === 0) return 0;
  const wordCount = words.length;
  const minutes = durationInSeconds / 60;
  return Math.round(wordCount / minutes);
};

/**
 * Evaluates the user's speech transcription against a target text.
 * @param {string} transcription - The transcription of the user's speech.
 * @param {string} targetText - The text the user was supposed to say.
 * @param {number} durationInSeconds - The duration of the speech in seconds.
 * @returns {object} - An object containing the evaluation results.
 */
export const evaluateSpeech = (transcription, targetText, durationInSeconds) => {
  if (!transcription || !targetText) {
    return {
      accuracy: 0,
      fillerWords: 0,
      wordsPerMinute: 0,
      feedback: 'Transcription or target text is missing.',
    };
  }

  const transcriptionWords = transcription.toLowerCase().split(/\s+/);
  const targetWords = targetText.toLowerCase().split(/\s+/);

  // Accuracy calculation
  const correctWords = transcriptionWords.filter(word => targetWords.includes(word));
  const accuracy = (correctWords.length / targetWords.length) * 100;

  // Filler word detection
  const fillerWordCount = transcriptionWords.filter(word => FILLER_WORDS.includes(word)).length;

  // WPM calculation
  const wordsPerMinute = calculateWPM(transcriptionWords, durationInSeconds);

  // Feedback generation
  let feedback = 'Good job!';
  if (accuracy < 80) {
    feedback = 'You missed a few words. Try to speak more clearly.';
  } else if (fillerWordCount > 2) {
    feedback = `You used ${fillerWordCount} filler words. Try to pause instead of using fillers.`;
  } else if (wordsPerMinute < 100) {
    feedback = 'You are speaking a bit slowly. Try to increase your pace.';
  }

  return {
    accuracy: Math.min(100, accuracy),
    fillerWords: fillerWordCount,
    wordsPerMinute,
    feedback,
  };
};
