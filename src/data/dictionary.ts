import { WordDetails } from "./types";

export const LOCAL_DICTIONARY: Record<string, Record<string, Partial<WordDetails>>> = {
    en: {
        "elation": {
            definition: "A feeling of great happiness and triumph.",
            example: "She was filled with elation after winning the first prize."
        },
        "joyful": {
            definition: "Feeling, expressing, or causing great pleasure and happiness.",
            example: "The joyful news brought a smile to everyone's face."
        },
        "meticulous": {
            definition: "Showing great attention to detail; very careful and precise.",
            example: "He was meticulous about keeping his room clean."
        },
        "robust": {
            definition: "Strong and healthy; vigorous.",
            example: "The company has a robust system for handling customer complaints."
        },
        "elated": {
            definition: "Make (someone) ecstatically happy.",
            example: "I was elated by the news that I had passed my driving test."
        },
        "jubilant": {
            definition: "Feeling or expressing great happiness and triumph.",
            example: "The jubilant fans celebrated their team's victory."
        },
        "blissful": {
            definition: "Extremely happy; full of joy.",
            example: "They spent a blissful week on the beach."
        },
        "ecstatic": {
            definition: "Feeling or expressing overwhelming happiness or joyful excitement.",
            example: "The crowd was ecstatic as the band took the stage."
        },
        "euphoric": {
            definition: "Characterized by or feeling intense excitement and happiness.",
            example: "He felt euphoric after completing the marathon."
        }
    },
    fr: {
        "allégresse": {
            definition: "Joie très vive qui se manifeste publiquement.",
            example: "La foule était en allégresse après l'annonce de la paix."
        },
        "méticuleux": {
            definition: "Qui a le goût du détail, qui est d'une exactitude scrupuleuse.",
            example: "C'est un artisan méticuleux qui prend soin de son travail."
        }
    },
    es: {
        "alegría": {
            definition: "Sentimiento grato y vivo que suele manifestarse con signos exteriores.",
            example: "Su cara reflejaba una gran alegría al ver a su familia."
        },
        "meticuloso": {
            definition: "Que hace las cosas con detenimiento y cuidando los más pequeños detalles.",
            example: "Es muy meticuloso en su trabajo, nunca deja nada al azar."
        }
    }
};

export function resolveLocalDefinition(word: string, language: string): WordDetails | null {
    const langDict = LOCAL_DICTIONARY[language.toLowerCase()];
    if (!langDict) return null;

    const entry = langDict[word.toLowerCase().trim()];
    if (!entry) return null;

    return {
        id: `local-${word}`,
        word: word.toLowerCase().trim(),
        language: language.toLowerCase(),
        definition: entry.definition || "Definition unavailable",
        example: entry.example || "No example sentence available.",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    } as WordDetails;
}
