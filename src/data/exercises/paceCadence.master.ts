import { ExerciseMaster, ExerciseMetadata, SupportedLanguage } from "@/data/types";

export interface PaceRange {
  min: number;
  max: number;
}

export type PaceType = 'slow' | 'fast' | 'free';

export interface PaceSegment {
  type: PaceType;
  duration: number; // seconds
  start: number; // seconds from start
  end: number; // seconds from start
  instruction: string; // Localized string
}

export interface PaceCadenceLocalizedContent {
    name: string;
    description: string;
    topics: string[];
    paceDefinitions: {
        slow: PaceRange;
        fast: PaceRange;
        free: PaceRange;
    };
    segments: PaceSegment[];
}

export const paceCadenceMaster: ExerciseMaster<any> = {
  id: "pace-cadence-trainer",
  metadata: {
    id: "pace-cadence-trainer",
    displayName: "Pace & Cadence Trainer",
    description: "Master speech velocity.",
    supportedLanguages: ['en', 'es', 'fr'],
    icon: "Gauge"
  },
  content: {
    type: 'pace-cadence-trainer',
    config: {},
    multilingual: {
      en: {
        name: "Pace & Cadence Trainer",
        description: "Master the art of varying your speech speed to command attention.",
        topics: [
            "Explain your favorite hobby to a complete beginner.",
            "Describe your dream vacation destination.",
            "Argue whether coffee or tea is better.",
            "Tell a story about a time you got lost.",
            "Explain how to make the perfect sandwich.",
            "Describe the plot of your favorite movie.",
            "Discuss the best season of the year.",
            "Explain why sleep is important."
        ],
        paceDefinitions: {
            slow: { min: 90, max: 120 },
            fast: { min: 160, max: 210 },
            free: { min: 100, max: 180 }
        },
        segments: [
            { type: 'slow', duration: 15, start: 0, end: 15, instruction: "Speak slowly and deliberately..." },
            { type: 'fast', duration: 15, start: 15, end: 30, instruction: "Now speed up! Add energy!" },
            { type: 'slow', duration: 15, start: 30, end: 45, instruction: "Slow it down. Calm and controlled." },
            { type: 'free', duration: 15, start: 45, end: 60, instruction: "Finish at your own natural pace." }
        ]
      },
      es: {
        name: "Entrenador de Ritmo",
        description: "Domina el arte de variar la velocidad de tu discurso.",
        topics: [
            "Explica tu pasatiempo favorito a un principiante.",
            "Describe el destino de vacaciones de tus sueños.",
            "Argumenta si es mejor el café o el té.",
            "Cuéntame una historia sobre una vez que te perdiste.",
            "Explica cómo hacer el sándwich perfecto.",
            "Describe la trama de tu película favorita.",
            "Discute cuál es la mejor estación del año.",
            "Explica por qué dormir es importante."
        ],
        paceDefinitions: {
            slow: { min: 100, max: 130 },
            fast: { min: 170, max: 220 },
            free: { min: 110, max: 190 }
        },
        segments: [
            { type: 'slow', duration: 15, start: 0, end: 15, instruction: "Habla despacio y deliberadamente..." },
            { type: 'fast', duration: 15, start: 15, end: 30, instruction: "¡Ahora acelera! ¡Añade energía!" },
            { type: 'slow', duration: 15, start: 30, end: 45, instruction: "Ralentiza. Calma y control." },
            { type: 'free', duration: 15, start: 45, end: 60, instruction: "Termina a tu propio ritmo natural." }
        ]
      },
      fr: {
        name: "Entraînement au Rythme",
        description: "Maîtrisez l'art de varier votre vitesse d'élocution.",
        topics: [
            "Expliquez votre passe-temps favori à un débutant.",
            "Décrivez la destination de vacances de vos rêves.",
            "Débattez pour savoir si le café est meilleur que le thé.",
            "Racontez une fois où vous vous êtes perdu.",
            "Expliquez comment faire le sandwich parfait.",
            "Décrivez l'intrigue de votre film préféré.",
            "Discutez de la meilleure saison de l'année.",
            "Expliquez pourquoi le sommeil est important."
        ],
        paceDefinitions: {
            slow: { min: 90, max: 120 },
            fast: { min: 160, max: 210 },
            free: { min: 100, max: 180 }
        },
        segments: [
            { type: 'slow', duration: 15, start: 0, end: 15, instruction: "Parlez lentement et délibérètement..." },
            { type: 'fast', duration: 15, start: 15, end: 30, instruction: "Accélérez maintenant ! Mettez de l'énergie !" },
            { type: 'slow', duration: 15, start: 30, end: 45, instruction: "Ralentissez. Calme et contrôle." },
            { type: 'free', duration: 15, start: 45, end: 60, instruction: "Terminez à votre rythme naturel." }
        ]
      },
      de: {
        name: "Tempo-Trainer",
        description: "",
        topics: [],
        paceDefinitions: { slow: { min: 90, max: 120 }, fast: { min: 160, max: 210 }, free: { min: 100, max: 180 } },
        segments: []
      }
    }
  }
};
