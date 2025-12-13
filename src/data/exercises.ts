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
    id: "filler-word-eliminator",
    number: 1,
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
    number: 2,
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
    id: "reverse-definitions",
    number: 3,
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
    id: "synonym-speed-chain",
    number: 4,
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
    id: "word-incorporation",
    number: 5,
    title: "Word Incorporation",
    shortTitle: "Word Incorporation",
    goal: "Vocabulary integration + fluency",
    mechanic: "Incorporate target words into spontaneous speech",
    description: "Speak for 30 seconds while incorporating 5 progressively revealed words. Perfect for building natural vocabulary usage!",
    icon: Target,
    color: "from-purple-500 to-blue-500",
    path: "/exercise/word-incorporation",
  },
];
