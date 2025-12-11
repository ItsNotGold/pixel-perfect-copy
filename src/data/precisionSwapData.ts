export interface SwapChallenge {
  id: string;
  sentence: string;
  targetWord: string;
  targetWordIndex: number;
  options: {
    word: string;
    score: number;
    feedback: string;
  }[];
  bestAnswer: string;
  explanation: string;
}

export const swapChallenges: SwapChallenge[] = [
  {
    id: "1",
    sentence: "She had a very big problem.",
    targetWord: "big",
    targetWordIndex: 4,
    options: [
      { word: "serious", score: 90, feedback: "Excellent! 'Serious' conveys gravity and importance." },
      { word: "critical", score: 100, feedback: "Perfect! 'Critical' implies urgency and significance." },
      { word: "large", score: 30, feedback: "Too similar to 'big' - try something more impactful." },
      { word: "pressing", score: 85, feedback: "Great choice! 'Pressing' adds urgency." },
    ],
    bestAnswer: "critical",
    explanation: "'Critical' is the strongest choice because it implies both urgency and potential consequences.",
  },
  {
    id: "2",
    sentence: "The meeting was very good.",
    targetWord: "good",
    targetWordIndex: 4,
    options: [
      { word: "productive", score: 100, feedback: "Excellent! 'Productive' is specific and meaningful." },
      { word: "nice", score: 20, feedback: "Too vague - similar problem as 'good'." },
      { word: "constructive", score: 90, feedback: "Strong choice! Shows positive outcomes." },
      { word: "fruitful", score: 85, feedback: "Good! Implies tangible results." },
    ],
    bestAnswer: "productive",
    explanation: "'Productive' precisely describes what made the meeting valuable - things got accomplished.",
  },
  {
    id: "3",
    sentence: "He walked slowly to the door.",
    targetWord: "slowly",
    targetWordIndex: 2,
    options: [
      { word: "trudged", score: 95, feedback: "Great verb choice! Shows weariness or reluctance." },
      { word: "shuffled", score: 90, feedback: "Vivid! Implies dragging feet." },
      { word: "ambled", score: 85, feedback: "Nice! Suggests a leisurely, unhurried pace." },
      { word: "moved", score: 25, feedback: "Too generic - loses the 'slowly' meaning entirely." },
    ],
    bestAnswer: "trudged",
    explanation: "Using a strong verb like 'trudged' replaces both 'walked' and 'slowly' with one vivid word.",
  },
  {
    id: "4",
    sentence: "The food was really bad.",
    targetWord: "bad",
    targetWordIndex: 4,
    options: [
      { word: "inedible", score: 100, feedback: "Perfect! Very specific about the quality." },
      { word: "disappointing", score: 80, feedback: "Good! Adds an emotional dimension." },
      { word: "terrible", score: 50, feedback: "Better than 'bad' but still quite vague." },
      { word: "revolting", score: 90, feedback: "Strong! Conveys a visceral reaction." },
    ],
    bestAnswer: "inedible",
    explanation: "'Inedible' is precise - it tells us exactly how bad the food was (couldn't be eaten).",
  },
  {
    id: "5",
    sentence: "She is a very smart person.",
    targetWord: "smart",
    targetWordIndex: 4,
    options: [
      { word: "brilliant", score: 85, feedback: "Good intensity! Shows exceptional intelligence." },
      { word: "astute", score: 100, feedback: "Excellent! Implies shrewd judgment and perception." },
      { word: "clever", score: 60, feedback: "Similar to 'smart' - try something more specific." },
      { word: "intelligent", score: 50, feedback: "Valid but still quite general." },
    ],
    bestAnswer: "astute",
    explanation: "'Astute' is more specific than 'smart' - it describes someone with keen insight and good judgment.",
  },
  {
    id: "6",
    sentence: "The weather was very cold.",
    targetWord: "cold",
    targetWordIndex: 4,
    options: [
      { word: "frigid", score: 100, feedback: "Perfect! Conveys extreme cold vividly." },
      { word: "chilly", score: 60, feedback: "Actually less intense than 'very cold'." },
      { word: "bitter", score: 95, feedback: "Excellent! 'Bitter cold' is evocative." },
      { word: "cool", score: 20, feedback: "Much weaker than the original." },
    ],
    bestAnswer: "frigid",
    explanation: "'Frigid' captures 'very cold' in a single, powerful word.",
  },
  {
    id: "7",
    sentence: "He made a quick decision.",
    targetWord: "quick",
    targetWordIndex: 3,
    options: [
      { word: "hasty", score: 85, feedback: "Good! Implies speed, possibly too fast." },
      { word: "snap", score: 100, feedback: "Perfect! 'Snap decision' is idiomatic and vivid." },
      { word: "rapid", score: 70, feedback: "Okay, but doesn't add much nuance." },
      { word: "impulsive", score: 90, feedback: "Strong! Adds psychological dimension." },
    ],
    bestAnswer: "snap",
    explanation: "'Snap decision' is a powerful collocation that conveys immediacy and instinct.",
  },
  {
    id: "8",
    sentence: "The movie was very boring.",
    targetWord: "boring",
    targetWordIndex: 4,
    options: [
      { word: "tedious", score: 95, feedback: "Excellent! Implies tiresome repetition." },
      { word: "dull", score: 60, feedback: "Similar to boring - not much improvement." },
      { word: "mind-numbing", score: 100, feedback: "Perfect! Vivid and emphatic." },
      { word: "uninteresting", score: 40, feedback: "Actually weaker than 'boring'." },
    ],
    bestAnswer: "mind-numbing",
    explanation: "'Mind-numbing' is vivid and captures the intensity of 'very boring' perfectly.",
  },
];
