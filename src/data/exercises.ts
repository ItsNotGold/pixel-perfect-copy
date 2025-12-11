import { 
  Zap, 
  MessageCircle, 
  Target, 
  Mic, 
  BookOpen, 
  Pen, 
  Palette, 
  Link, 
  HelpCircle, 
  RefreshCw,
  LucideIcon
} from "lucide-react";

export interface Exercise {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  goal: string;
  mechanic: string;
  description: string;
  icon: LucideIcon;
  color: string;
  path: string;
}

export const exercises: Exercise[] = [
  {
    id: "rapid-context-switch",
    number: 1,
    title: "Rapid Context Switch",
    shortTitle: "Context Switch",
    goal: "Vocabulary agility + improvisation",
    mechanic: "Use a target word in 3 different contexts",
    description: "Get a word, then use it in romantic, scientific, humorous, and professional contexts. Build your vocabulary flexibility!",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    path: "/exercise/rapid-context-switch",
  },
  {
    id: "filler-word-eliminator",
    number: 2,
    title: "Filler Word Eliminator",
    shortTitle: "Filler Eliminator",
    goal: "Reduce fillers, improve clarity",
    mechanic: "Speak for 30-60 seconds while the app tracks fillers",
    description: "Eliminate 'um', 'uh', 'like', and 'you know' from your speech. Track your progress and earn badges!",
    icon: MessageCircle,
    color: "from-rose-500 to-pink-500",
    path: "/exercise/filler-word-eliminator",
  },
  {
    id: "precision-swap",
    number: 3,
    title: "Precision Swap",
    shortTitle: "Precision Swap",
    goal: "Sharpen word choice",
    mechanic: "Replace vague words with precise alternatives",
    description: "Transform bland sentences into powerful ones by swapping weak words for stronger, more precise alternatives.",
    icon: Target,
    color: "from-emerald-500 to-teal-500",
    path: "/exercise/precision-swap",
  },
  {
    id: "one-minute-talks",
    number: 4,
    title: "One-Minute Micro-Talks",
    shortTitle: "Micro-Talks",
    goal: "Fluency + structured speaking",
    mechanic: "Timed speaking challenges with score metrics",
    description: "Speak for 60 seconds without stopping. Build fluency, vocabulary diversity, and confidence!",
    icon: Mic,
    color: "from-violet-500 to-purple-500",
    path: "/exercise/one-minute-talks",
  },
  {
    id: "reverse-definitions",
    number: 5,
    title: "Reverse Definitions",
    shortTitle: "Reverse Definitions",
    goal: "Deepen word understanding",
    mechanic: "App gives definition, you guess the word",
    description: "Read the definition, guess the word. Master vocabulary through spaced repetition and word mastery levels.",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    path: "/exercise/reverse-definitions",
  },
  {
    id: "narrative-puzzle",
    number: 6,
    title: "Narrative Puzzle Builder",
    shortTitle: "Narrative Puzzle",
    goal: "Coherence + vocabulary integration",
    mechanic: "Build stories containing required target words",
    description: "Weave target words into creative stories. Save your best work to your portfolio!",
    icon: Pen,
    color: "from-indigo-500 to-blue-500",
    path: "/exercise/narrative-puzzle",
  },
  {
    id: "tone-transformer",
    number: 7,
    title: "Tone Transformer",
    shortTitle: "Tone Transformer",
    goal: "Control tone + register",
    mechanic: "Rewrite sentences in different tones",
    description: "Transform neutral sentences into formal, friendly, persuasive, or humorous versions. Master the art of tone!",
    icon: Palette,
    color: "from-fuchsia-500 to-pink-500",
    path: "/exercise/tone-transformer",
  },
  {
    id: "synonym-speed-chain",
    number: 8,
    title: "Synonym Speed Chain",
    shortTitle: "Synonym Chain",
    goal: "Rapid lexical retrieval",
    mechanic: "Generate synonyms within a time limit",
    description: "Race against the clock to list as many synonyms as possible. Rare words score more points!",
    icon: Link,
    color: "from-orange-500 to-red-500",
    path: "/exercise/synonym-speed-chain",
  },
  {
    id: "question-crafting",
    number: 9,
    title: "Question Crafting Lab",
    shortTitle: "Question Lab",
    goal: "Improve conversational skill",
    mechanic: "Transform statements into effective questions",
    description: "Turn simple statements into thoughtful, engaging questions. Build your conversational curiosity!",
    icon: HelpCircle,
    color: "from-cyan-500 to-teal-500",
    path: "/exercise/question-crafting",
  },
  {
    id: "repair-rephrase",
    number: 10,
    title: "Repair & Rephrase",
    shortTitle: "Repair & Rephrase",
    goal: "Improvisation + clarity",
    mechanic: "Fix clumsy or vague sentences quickly",
    description: "Take messy sentences and make them shine. Improve clarity, brevity, and impact!",
    icon: RefreshCw,
    color: "from-lime-500 to-green-500",
    path: "/exercise/repair-rephrase",
  },
];
