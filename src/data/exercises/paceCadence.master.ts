
export interface PaceSegment {
  type: 'slow' | 'fast' | 'free';
  duration: number; // seconds
  start: number; // seconds from start
  end: number; // seconds from start
  instruction: string;
}

export interface PaceContent {
  exerciseId: string;
  name: string;
  description: string;
  topics: {
    language: 'en' | 'es' | 'fr';
    list: string[];
  }[];
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
  segments: [
    { type: 'slow', duration: 15, start: 0, end: 15, instruction: "Speak slowly and deliberately..." },
    { type: 'fast', duration: 15, start: 15, end: 30, instruction: "Now speed up! Add energy!" },
    { type: 'slow', duration: 15, start: 30, end: 45, instruction: "Slow it down. Calm and controlled." },
    { type: 'free', duration: 15, start: 45, end: 60, instruction: "Finish at your own natural pace." },
  ]
};
