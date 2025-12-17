import { ExerciseMaster, PrecisionSwapContent } from "../types";

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
                questions: [
                    {
                        id: "en-1",
                        sentence: "A system outage caused a big problem that threatened the project's deadline.",
                        targetWord: "big",
                        targetWordIndex: 4,
                        options: [
                            { word: "serious", score: 90, feedback: "Excellent! 'Serious' conveys gravity and importance." },
                            { word: "critical", score: 100, feedback: "Perfect! 'Critical' implies urgency and significance." },
                            { word: "large", score: 30, feedback: "Too similar to 'big' - try something more impactful." },
                            { word: "pressing", score: 85, feedback: "Great choice! 'Pressing' adds urgency." }
                        ],
                        bestAnswer: "critical",
                        explanation: "'Critical' is the strongest choice because it implies both urgency and potential consequences."
                    },
                    {
                        id: "en-2",
                        sentence: "The meeting resulted in several clear action items and measurable outcomes.",
                        targetWord: "good",
                        targetWordIndex: 4,
                        options: [
                            { word: "productive", score: 100, feedback: "Excellent! 'Productive' is specific and meaningful." },
                            { word: "nice", score: 20, feedback: "Too vague - similar problem as 'good'." },
                            { word: "constructive", score: 90, feedback: "Strong choice! Shows positive outcomes." },
                            { word: "fruitful", score: 85, feedback: "Good! Implies tangible results." }
                        ],
                        bestAnswer: "productive",
                        explanation: "'Productive' precisely describes what made the meeting valuable."
                    },
                    {
                        id: "en-3",
                        sentence: "He walked slowly to the door.",
                        targetWord: "slowly",
                        targetWordIndex: 2,
                        options: [
                            { word: "trudged", score: 95, feedback: "Great verb choice! Shows weariness or reluctance." },
                            { word: "shuffled", score: 90, feedback: "Vivid! Implies dragging feet." },
                            { word: "ambled", score: 85, feedback: "Nice! Suggests a leisurely, unhurried pace." },
                            { word: "moved", score: 25, feedback: "Too generic - loses the 'slowly' meaning entirely." }
                        ],
                        bestAnswer: "trudged",
                        explanation: "Using a strong verb like 'trudged' replaces both 'walked' and 'slowly' with one vivid word."
                    },
                    {
                        id: "en-4",
                        sentence: "The food was really bad.",
                        targetWord: "bad",
                        targetWordIndex: 4,
                        options: [
                            { word: "inedible", score: 100, feedback: "Perfect! Very specific about the quality." },
                            { word: "disappointing", score: 80, feedback: "Good! Adds an emotional dimension." },
                            { word: "terrible", score: 50, feedback: "Better than 'bad' but still quite vague." },
                            { word: "revolting", score: 90, feedback: "Strong! Conveys a visceral reaction." }
                        ],
                        bestAnswer: "inedible",
                        explanation: "'Inedible' tells us exactly how bad the food was."
                    },
                    {
                        id: "en-5",
                        sentence: "She solved the complex proof with shrewd insight, showing she's a smart person.",
                        targetWord: "smart",
                        targetWordIndex: 10,
                        options: [
                            { word: "brilliant", score: 85, feedback: "Good intensity! Shows exceptional intelligence." },
                            { word: "astute", score: 100, feedback: "Excellent! Implies shrewd judgment and perception." },
                            { word: "clever", score: 60, feedback: "Similar to 'smart' - try something more specific." },
                            { word: "intelligent", score: 50, feedback: "Valid but still quite general." }
                        ],
                        bestAnswer: "astute",
                        explanation: "'Astute' is more specific - it describes someone with keen insight."
                    },
                    {
                        id: "en-6",
                        sentence: "A sudden blizzard left the town cold and streets impassable.",
                        targetWord: "cold",
                        targetWordIndex: 6,
                        options: [
                            { word: "frigid", score: 100, feedback: "Perfect! Conveys extreme cold vividly." },
                            { word: "chilly", score: 60, feedback: "Actually less intense than 'very cold'." },
                            { word: "bitter", score: 95, feedback: "Excellent! 'Bitter cold' is evocative." },
                            { word: "cool", score: 20, feedback: "Much weaker than the original." }
                        ],
                        bestAnswer: "frigid",
                        explanation: "'Frigid' captures 'very cold' in a single, powerful word."
                    },
                    {
                        id: "en-7",
                        sentence: "He made a quick decision.",
                        targetWord: "quick",
                        targetWordIndex: 3,
                        options: [
                            { word: "hasty", score: 85, feedback: "Good! Implies speed, possibly too fast." },
                            { word: "snap", score: 100, feedback: "Perfect! 'Snap decision' is idiomatic and vivid." },
                            { word: "rapid", score: 70, feedback: "Okay, but doesn't add much nuance." },
                            { word: "impulsive", score: 90, feedback: "Strong! Adds psychological dimension." }
                        ],
                        bestAnswer: "snap",
                        explanation: "'Snap decision' is a powerful collocation."
                    },
                    {
                        id: "en-8",
                        sentence: "Long stretches without plot or character development made the movie boring.",
                        targetWord: "boring",
                        targetWordIndex: 9,
                        options: [
                            { word: "tedious", score: 95, feedback: "Excellent! Implies tiresome repetition." },
                            { word: "dull", score: 60, feedback: "Similar to boring - not much improvement." },
                            { word: "mind-numbing", score: 100, feedback: "Perfect! Vivid and emphatic." },
                            { word: "uninteresting", score: 40, feedback: "Actually weaker than 'boring'." }
                        ],
                        bestAnswer: "mind-numbing",
                        explanation: "'Mind-numbing' captures the intensity of 'very boring' perfectly."
                    },
                    {
                        id: "en-9",
                        sentence: "She felt elated when the funding for her project was approved.",
                        targetWord: "happy",
                        targetWordIndex: 2,
                        options: [
                            { word: "elated", score: 100, feedback: "Perfect! Conveys intense joy." },
                            { word: "pleased", score: 50, feedback: "Less intense than 'very happy'." },
                            { word: "thrilled", score: 95, feedback: "Excellent! Shows excitement." },
                            { word: "glad", score: 40, feedback: "Too weak for 'very happy'." }
                        ],
                        bestAnswer: "elated",
                        explanation: "'Elated' perfectly captures the heightened emotion."
                    },
                    {
                        id: "en-10",
                        sentence: "The final exam's complex problems made the test hard for most students.",
                        targetWord: "hard",
                        targetWordIndex: 5,
                        options: [
                            { word: "grueling", score: 100, feedback: "Perfect! Implies exhausting difficulty." },
                            { word: "challenging", score: 70, feedback: "Good but slightly positive connotation." },
                            { word: "tough", score: 50, feedback: "Similar intensity to 'hard'." },
                            { word: "demanding", score: 85, feedback: "Strong! Shows high requirements." }
                        ],
                        bestAnswer: "grueling",
                        explanation: "'Grueling' conveys extreme difficulty and effort required."
                    }
                ]
            },
            fr: {
                instructions: {
                    intro: "Remplacez les mots faibles.",
                    details: "Choisissez le meilleur mot pour remplacer le terme souligné."
                },
                questions: [
                    {
                        id: "fr-1",
                        sentence: "Elle avait un gros problème.",
                        targetWord: "gros",
                        targetWordIndex: 4,
                        options: [
                            { word: "sérieux", score: 90, feedback: "Excellent ! 'Sérieux' transmet la gravité." },
                            { word: "majeur", score: 100, feedback: "Parfait ! 'Majeur' implique importance et urgence." },
                            { word: "grand", score: 30, feedback: "Trop similaire à 'gros'." },
                            { word: "pressant", score: 85, feedback: "Bon choix ! Ajoute l'urgence." }
                        ],
                        bestAnswer: "majeur",
                        explanation: "'Majeur' est le meilleur choix car il implique l'importance et les conséquences."
                    },
                    {
                        id: "fr-2",
                        sentence: "La réunion était bonne.",
                        targetWord: "bonne",
                        targetWordIndex: 4,
                        options: [
                            { word: "productive", score: 100, feedback: "Excellent ! Précis et significatif." },
                            { word: "agréable", score: 40, feedback: "Trop vague - même problème que 'bonne'." },
                            { word: "constructive", score: 90, feedback: "Fort ! Montre des résultats positifs." },
                            { word: "fructueuse", score: 85, feedback: "Bien ! Implique des résultats tangibles." }
                        ],
                        bestAnswer: "productive",
                        explanation: "'Productive' décrit précisément ce qui a rendu la réunion précieuse."
                    }
                ]
            },
            es: {
                instructions: {
                    intro: "Sustituye las palabras débiles.",
                    details: "Elige la mejor palabra para reemplazar el término resaltado."
                },
                questions: [
                    {
                        id: "es-1",
                        sentence: "Porque la interfaz es simple, los usuarios nuevos completaron las tareas más rápido.",
                        targetWord: "simple",
                        targetWordIndex: 3,
                        options: [
                            { word: "intuitiva", score: 100, feedback: "Perfecto — implica facilidad de uso." },
                            { word: "sosa", score: 30, feedback: "Demasiado básica." },
                            { word: "minimal", score: 80, feedback: "Buena — diseño limpio." },
                            { word: "sencilla", score: 90, feedback: "Excelente — fácil de navegar." }
                        ],
                        bestAnswer: "intuitiva",
                        explanation: "'Intuitiva' conecta la simplicidad con la usabilidad y rapidez."
                    }
                ]

            }
        }
    }
};
