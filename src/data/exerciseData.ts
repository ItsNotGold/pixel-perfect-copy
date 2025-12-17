

// Exercise 2: Filler Word Eliminator
export const fillerWords = ["um", "uh", "like", "you know", "basically", "literally", "actually", "sort of", "kind of", "I mean"];

export const speakingTopics = [
  "Describe your ideal weekend",
  "Explain why you chose your current job or field of study",
  "Talk about a memorable trip you've taken",
  "Describe your morning routine",
  "Explain how to make your favorite meal",
  "Talk about a skill you'd like to learn",
  "Describe your favorite book or movie",
  "Explain why exercise is important",
  "Talk about a challenge you overcame",
  "Describe your dream home",
];

// Exercise 4: One-Minute Micro-Talks


// Exercise 5: Reverse Definitions
export interface ReverseDefinition {
  id: string;
  definition: string;
  answer: string;
  hints: string[];
  difficulty: "easy" | "medium" | "hard";
}

export const reverseDefinitions: ReverseDefinition[] = [
  { id: "1", definition: "A feeling of great happiness and triumph", answer: "elation", hints: ["Starts with 'e'", "Has 7 letters"], difficulty: "medium" },
  { id: "2", definition: "Speaking or writing in a clear and effective way", answer: "articulate", hints: ["Starts with 'a'", "Can be verb or adjective"], difficulty: "medium" },
  { id: "3", definition: "A person who doubts or questions everything", answer: "skeptic", hints: ["Starts with 's'", "Greek origin"], difficulty: "easy" },
  { id: "4", definition: "Existing everywhere at the same time", answer: "ubiquitous", hints: ["Starts with 'u'", "Latin origin"], difficulty: "hard" },
  { id: "5", definition: "To make something seem less important than it is", answer: "understate", hints: ["Compound word", "Opposite of exaggerate"], difficulty: "easy" },
  { id: "6", definition: "A temporary state of mind or feeling", answer: "mood", hints: ["4 letters", "Very common word"], difficulty: "easy" },
  { id: "7", definition: "The ability to understand and share feelings of another", answer: "empathy", hints: ["Starts with 'e'", "Often confused with sympathy"], difficulty: "medium" },
  { id: "8", definition: "Extremely idealistic; unrealistic and impractical", answer: "quixotic", hints: ["From literature", "Starts with 'q'"], difficulty: "hard" },
  { id: "9", definition: "Brief and to the point", answer: "concise", hints: ["Starts with 'c'", "Opposite of verbose"], difficulty: "medium" },
  { id: "10", definition: "A strong feeling of dislike or disapproval", answer: "aversion", hints: ["Starts with 'a'", "Often paired with 'to'"], difficulty: "medium" },
];

// Exercise 6: Narrative Puzzle Builder


// Exercise 7: Tone Transformer


// Exercise 8: Synonym Speed Chain
export interface SynonymChallenge {
  id: string;
  word: string;
  commonSynonyms: string[];
  rareSynonyms: string[];
  timeLimit: number;
}

export const synonymChallenges: SynonymChallenge[] = [
  { id: "1", word: "happy", commonSynonyms: ["joyful", "glad", "pleased", "content", "cheerful"], rareSynonyms: ["elated", "jubilant", "blissful", "ecstatic", "euphoric"], timeLimit: 30 },
  { id: "2", word: "sad", commonSynonyms: ["unhappy", "upset", "down", "gloomy", "sorrowful"], rareSynonyms: ["melancholy", "despondent", "forlorn", "disconsolate", "woebegone"], timeLimit: 30 },
  { id: "3", word: "big", commonSynonyms: ["large", "huge", "enormous", "giant", "massive"], rareSynonyms: ["colossal", "mammoth", "gargantuan", "immense", "titanic"], timeLimit: 30 },
  { id: "4", word: "smart", commonSynonyms: ["clever", "intelligent", "bright", "sharp", "quick"], rareSynonyms: ["astute", "sagacious", "perspicacious", "erudite", "shrewd"], timeLimit: 30 },
  { id: "5", word: "beautiful", commonSynonyms: ["pretty", "lovely", "gorgeous", "attractive", "stunning"], rareSynonyms: ["resplendent", "ravishing", "exquisite", "sublime", "pulchritudinous"], timeLimit: 30 },
];




