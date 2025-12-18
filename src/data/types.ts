export type SupportedLanguage = 'en' | 'fr' | 'es' | 'de';

export interface ExerciseInstructions {
    intro: string;
    details: string;
    tips?: string[];
}

export interface ExerciseMetadata {
    id: string;
    displayName: string;
    description: string; // Internal or short description
    supportedLanguages: SupportedLanguage[];
    icon?: string; // Icon name (lucide-react)
}

// Base configuration shared by all exercises (or specific ones)
export interface BaseExerciseConfig {
    durationSeconds?: number;
    timeLimit?: number; // per question/round
    pointsPerCorrectAnswer?: number;
    wordsPerPrompt?: number;
}

// Discriminator for exercise content types
export type ExerciseContent =
    | FillerWordEliminatorContent
    | PrecisionSwapContent
    | ReverseDefinitionsContent
    | SynonymSpeedChainContent
    | WordIncorporationContent;

// 1. Filler Word Eliminator
export interface FillerWordEliminatorContent {
    type: 'filler-word-eliminator';
    config: BaseExerciseConfig;
    multilingual: {
        [key in SupportedLanguage]?: {
            instructions: ExerciseInstructions;
            targetFillerWords: string[]; // The filler words to detect
            topics: string[];
        }
    }
}

// 2. Precision Swap
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

export interface PrecisionSwapContent {
    type: 'precision-swap';
    config: BaseExerciseConfig;
    multilingual: {
        [key in SupportedLanguage]?: {
            instructions: ExerciseInstructions;
            questions: SwapChallenge[];
        }
    }
}

// 3. Reverse Definitions
export interface ReverseDefinition {
    id: string;
    definition: string;
    answer: string;
    hints: string[];
    difficulty: "easy" | "medium" | "hard";
}

export interface ReverseDefinitionsContent {
    type: 'reverse-definitions';
    config: BaseExerciseConfig;
    multilingual: {
        [key in SupportedLanguage]?: {
            instructions: ExerciseInstructions;
            questions: ReverseDefinition[];
        }
    }
}

// 4. Synonym Speed Chain
export interface SynonymChallenge {
    id: string;
    word: string;
    commonSynonyms: string[];
    rareSynonyms: string[];
    timeLimit?: number; // Override base limit if needed
}

export interface SynonymSpeedChainContent {
    type: 'synonym-speed-chain';
    config: BaseExerciseConfig;
    multilingual: {
        [key in SupportedLanguage]?: {
            instructions: ExerciseInstructions;
            challenges: SynonymChallenge[];
        }
    }
}

// 5. Word Incorporation
export interface WordIncorporationContent {
    type: 'word-incorporation';
    config: BaseExerciseConfig;
    multilingual: {
        [key in SupportedLanguage]?: {
            instructions: ExerciseInstructions;
            prompts: {
                prompt: string;
                words: string[];
            }[];
        }
    }
}

// The Master Object
export interface ExerciseMaster<T extends ExerciseContent> {
    id: string;
    metadata: ExerciseMetadata;
    content: T;
}

export interface ExerciseOverride {
    id: string;
    user_id: string | null;
    exercise_id: string;
    content: any; // Generic object to store the overridden part of the exercise content
    created_at: string;
    updated_at: string;
}

export interface WordDetails {
    id: string;
    word: string;
    language: string;
    definition: string;
    example: string;
    created_at: string;
    updated_at: string;
}
