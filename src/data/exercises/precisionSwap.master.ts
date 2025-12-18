import { ExerciseMaster, PrecisionSwapContent } from "../types";
import { enQuestions } from "./precisionSwap/en";
import { frQuestions } from "./precisionSwap/fr";
import { esQuestions } from "./precisionSwap/es";

export const precisionSwapMaster: ExerciseMaster<PrecisionSwapContent> = {
    id: "precision-swap",
    metadata: {
        id: "precision-swap",
        displayName: "Precision Swap",
        description: "Transform bland sentences into powerful ones.",
        supportedLanguages: ["en", "fr", "es"],
        icon: "Target"
    },
    content: {
        type: "precision-swap",
        config: {
            pointsPerCorrectAnswer: 100
        },
        multilingual: {
            en: {
                instructions: {
                    intro: "Swap weak words for precise ones.",
                    details: "Choose the best word to replace the highlighted weak word. Look for the option that adds the most meaning and precision.",
                    tips: ["Consider the context", "Look for intensity"]
                },
                questions: enQuestions
            },
            fr: {
                instructions: {
                    intro: "Remplacez les mots faibles.",
                    details: "Choisissez le meilleur mot pour remplacer le terme souligné."
                },
                questions: frQuestions
            },
            es: {
                instructions: {
                    intro: "Sustituye las palabras débiles.",
                    details: "Elige la mejor palabra para reemplazar el término resaltado."
                },
                questions: esQuestions
            }
        }
    }
};
