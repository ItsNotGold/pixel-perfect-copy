
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
  instruction: {
    en: string;
    es: string;
    fr: string;
  };
}

export interface PaceContent {
  exerciseId: string;
  name: string;
  description: string;
  topics: {
    language: 'en' | 'es' | 'fr';
    list: string[];
  }[];
  paceDefinitions: {
     [key in 'en' | 'es' | 'fr']: {
        slow: PaceRange;
        fast: PaceRange;
        free: PaceRange; // usually wide open
     }
  };
  segments: PaceSegment[];
}

export const paceCadenceMaster: PaceContent = {
  exerciseId: "pace-cadence-trainer",
  name: "Pace & Cadence Trainer",
  description: "Master the art of varying your speech speed to command attention.",
  topics: [
    {
      language: 'en',
      list: [
        "Explain your favorite hobby to a complete beginner.",
        "Describe your dream vacation destination.",
        "Argue whether coffee or tea is better.",
        "Tell a story about a time you got lost.",
        "Explain how to make the perfect sandwich.",
        "Describe the plot of your favorite movie.",
        "Discuss the best season of the year.",
        "Explain why sleep is important.",
      ]
    },
    {
      language: 'es',
      list: [
        "Explica tu pasatiempo favorito a un principiante.",
        "Describe el destino de vacaciones de tus sueños.",
        "Argumenta si es mejor el café o el té.",
        "Cuéntame una historia sobre una vez que te perdiste.",
        "Explica cómo hacer el sándwich perfecto.",
        "Describe la trama de tu película favorita.",
        "Discute cuál es la mejor estación del año.",
        "Explica por qué dormir es importante.",
      ]
    },
    {
      language: 'fr',
      list: [
        "Expliquez votre passe-temps favori à un débutant.",
        "Décrivez la destination de vacances de vos rêves.",
        "Débattez pour savoir si le café est meilleur que le thé.",
        "Racontez une fois où vous vous êtes perdu.",
        "Expliquez comment faire le sandwich parfait.",
        "Décrivez l'intrigue de votre film préféré.",
        "Discutez de la meilleure saison de l'année.",
        "Expliquez pourquoi le sommeil est important.",
      ]
    }
  ],
  paceDefinitions: {
    en: {
      slow: { min: 90, max: 120 },
      fast: { min: 160, max: 210 },
      free: { min: 100, max: 180 }
    },
    es: {
      slow: { min: 100, max: 130 }, // Spanish syllables often faster, but word count meaningful
      fast: { min: 170, max: 220 },
      free: { min: 110, max: 190 }
    },
    fr: {
      slow: { min: 90, max: 120 },
      fast: { min: 160, max: 210 },
      free: { min: 100, max: 180 }
    }
  },
  segments: [
    { 
      type: 'slow', 
      duration: 15, 
      start: 0, 
      end: 15, 
      instruction: {
        en: "Speak slowly and deliberately...",
        es: "Habla despacio y deliberadamente...",
        fr: "Parlez lentement et délibérètement..."
      }
    },
    { 
      type: 'fast', 
      duration: 15, 
      start: 15, 
      end: 30, 
      instruction: {
        en: "Now speed up! Add energy!",
        es: "¡Ahora acelera! ¡Añade energía!",
        fr: "Accélérez maintenant ! Mettez de l'énergie !"
      }
    },
    { 
      type: 'slow', 
      duration: 15, 
      start: 30, 
      end: 45, 
      instruction: {
        en: "Slow it down. Calm and controlled.",
        es: "Ralentiza. Calma y control.",
        fr: "Ralentissez. Calme et contrôle."
      }
    },
    { 
      type: 'free', 
      duration: 15, 
      start: 45, 
      end: 60, 
      instruction: {
        en: "Finish at your own natural pace.",
        es: "Termina a tu propio ritmo natural.",
        fr: "Terminez à votre rythme naturel."
      }
    },
  ]
};
