export interface Badge {
  id: string;
  name: string;
  description: { en: string; fr: string; es: string };
  category: string;
  exercises?: string[];
  level?: 'bronze' | 'silver' | 'gold' | 'platinum';
  imageUrl: string;
  colorPalette: string[];
  animation: string;
  points?: number;
}

export const BADGES: Badge[] = [
  {
    id: "completion_first_step_bronze",
    name: "First Step",
    description: {
      en: "Complete your first exercise.",
      fr: "Terminez votre premier exercice.",
      es: "Completa tu primer ejercicio."
    },
    category: "Completion",
    exercises: [],
    level: "bronze",
    imageUrl: "/assets/badges/completion_first_step_bronze.svg",
    colorPalette: ["#00C2A8","#00695C","#E6FFF6"],
    animation: "scale-up + soft glow + brief confetti",
    points: 10
  },
  {
    id: "completion_committed_silver",
    name: "Committed Communicator",
    description: {
      en: "Finish 10 exercises.",
      fr: "Terminez 10 exercices.",
      es: "Completa 10 ejercicios."
    },
    category: "Completion",
    exercises: [],
    level: "silver",
    imageUrl: "/assets/badges/completion_committed_silver.svg",
    colorPalette: ["#00695C","#00E8C6","#004D40"],
    animation: "ribbon-fade + sparkle sweep",
    points: 50
  },
  {
    id: "completion_marathon_gold",
    name: "Marathon Speaker",
    description: {
      en: "Finish 100 exercises.",
      fr: "Terminez 100 exercices.",
      es: "Completa 100 ejercicios."
    },
    category: "Completion",
    exercises: [],
    level: "gold",
    imageUrl: "/assets/badges/completion_marathon_gold.svg",
    colorPalette: ["#FFD166","#FFAB00","#FFF4D1"],
    animation: "scale-up + confetti shower + subtle camera shake",
    points: 150
  },
  {
    id: "completion_master_of_all_gold",
    name: "Full Library",
    description: {
      en: "Complete every exercise at least once.",
      fr: "Terminez chaque exercice au moins une fois.",
      es: "Completa cada ejercicio al menos una vez."
    },
    category: "Completion",
    exercises: ["filler-word-eliminator","precision-swap","reverse-definitions","synonym-speed-chain","word-incorporation"],
    level: "gold",
    imageUrl: "/assets/badges/completion_master_of_all_gold.svg",
    colorPalette: ["#4F46E5","#8B5CF6","#EEF2FF"],
    animation: "targeted burst + ribbon unfurl + gold shimmer sweep",
    points: 250
  },
  {
    id: "completion_exercise_filler_silver",
    name: "Filler Finisher",
    description: {
      en: "Complete all Filler Word Eliminator sets.",
      fr: "Terminez tous les niveaux d'Éliminateur de Mots de Remplissage.",
      es: "Completa todos los niveles de Eliminador de Palabras de Relleno."
    },
    category: "Completion",
    exercises: ["filler-word-eliminator"],
    level: "silver",
    imageUrl: "/assets/badges/completion_exercise_filler_silver.svg",
    colorPalette: ["#FF8DA1","#C62828","#FFF1F2"],
    animation: "small sparkle + checkmark reveal",
    points: 60
  },
  {
    id: "completion_fifty_bronze",
    name: "Dedicated Learner",
    description: {
      en: "Complete 50 exercises.",
      fr: "Terminez 50 exercices.",
      es: "Completa 50 ejercicios."
    },
    category: "Completion",
    exercises: [],
    level: "bronze",
    imageUrl: "/assets/badges/completion_fifty_bronze.svg",
    colorPalette: ["#FFDCC1","#FFB78F","#7A2E00"],
    animation: "small confetti + shine",
    points: 110
  },
  {
    id: "accuracy_ace_bronze",
    name: "Accuracy Ace",
    description: {
      en: "Achieve ≥ 90% accuracy in a session.",
      fr: "Atteindre ≥ 90 % de précision en une session.",
      es: "Alcanza ≥ 90% de precisión en una sesión."
    },
    category: "Accuracy",
    exercises: [],
    level: "bronze",
    imageUrl: "/assets/badges/accuracy_ace_bronze.svg",
    colorPalette: ["#E53935","#FFCDD2","#7F0000"],
    animation: "target reticle pulse + small sparkle",
    points: 30
  },
  {
    id: "accuracy_pinpoint_silver",
    name: "Pinpoint Pro",
    description: {
      en: "Achieve ≥ 95% accuracy.",
      fr: "Atteindre ≥ 95 % de précision.",
      es: "Alcanza ≥ 95% de precisión."
    },
    category: "Accuracy",
    exercises: [],
    level: "silver",
    imageUrl: "/assets/badges/accuracy_pinpoint_silver.svg",
    colorPalette: ["#FF7043","#FFAB91","#A54724"],
    animation: "precision sweep + sparkle cascade",
    points: 75
  },
  {
    id: "accuracy_perfectionist_gold",
    name: "Perfectionist",
    description: {
      en: "Score ≥ 99% accuracy in a session.",
      fr: "Obtenez ≥ 99 % de précision en une session.",
      es: "Consigue ≥ 99% de precisión en una sesión."
    },
    category: "Accuracy",
    exercises: [],
    level: "gold",
    imageUrl: "/assets/badges/accuracy_perfectionist_gold.svg",
    colorPalette: ["#FFD600","#FFECB3","#B38600"],
    animation: "micro-particle gold sparkle + shine sweep",
    points: 180
  },
  {
    id: "accuracy_consistent_master_platinum",
    name: "Precision Champion",
    description: {
      en: "Three sessions ≥ 95% accuracy within 7 days.",
      fr: "Trois sessions ≥ 95 % de précision en 7 jours.",
      es: "Tres sesiones ≥ 95% de precisión en 7 días."
    },
    category: "Accuracy",
    exercises: [],
    level: "platinum",
    imageUrl: "/assets/badges/accuracy_consistent_master_platinum.svg",
    colorPalette: ["#FFD700","#FFF8E1","#FFDD57"],
    animation: "rising trophy + fireworks + glow pulse",
    points: 500
  },
  {
    id: "streak_daily_week_bronze",
    name: "Weekly Starter",
    description: {
      en: "Maintain a 7-day streak.",
      fr: "Maintenez une série de 7 jours.",
      es: "Mantén una racha de 7 días."
    },
    category: "Streak",
    exercises: [],
    level: "bronze",
    imageUrl: "/assets/badges/streak_daily_week_bronze.svg",
    colorPalette: ["#3B82F6","#93C5FD","#0B63D3"],
    animation: "ribbon pop + calendar flip",
    points: 40
  },
  {
    id: "streak_monthly_consistency_silver",
    name: "Consistent Communicator",
    description: {
      en: "Maintain a 30-day streak.",
      fr: "Maintenez une série de 30 jours.",
      es: "Mantén una racha de 30 días."
    },
    category: "Streak",
    exercises: [],
    level: "silver",
    imageUrl: "/assets/badges/streak_monthly_consistency_silver.svg",
    colorPalette: ["#06B6D4","#CFFAFE","#065F72"],
    animation: "progress-ring fill + confetti",
    points: 120
  },
  {
    id: "streak_relentless_gold",
    name: "Relentless",
    description: {
      en: "Maintain a 100-day streak.",
      fr: "Maintenez une série de 100 jours.",
      es: "Mantén una racha de 100 días."
    },
    category: "Streak",
    exercises: [],
    level: "gold",
    imageUrl: "/assets/badges/streak_relentless_gold.svg",
    colorPalette: ["#A78BFA","#7C3AED","#F3E8FF"],
    animation: "epic confetti + spotlight + shimmer",
    points: 300
  },
  {
    id: "exploration_try_two_languages_bronze",
    name: "Bilingual Explorer",
    description: {
      en: "Complete exercises in 2 different languages.",
      fr: "Terminez des exercices dans 2 langues différentes.",
      es: "Completa ejercicios en 2 idiomas diferentes."
    },
    category: "Exploration",
    exercises: [],
    level: "bronze",
    imageUrl: "/assets/badges/exploration_try_two_languages_bronze.svg",
    colorPalette: ["#7DD3FC","#0284C7","#E1F8FF"],
    animation: "two-flag flip + subtle sparkle",
    points: 60
  },
  {
    id: "exploration_trilingual_silver",
    name: "Polyglot Primer",
    description: {
      en: "Complete exercises in English, French and Spanish.",
      fr: "Terminez des exercices en anglais, français et espagnol.",
      es: "Completa ejercicios en inglés, francés y español."
    },
    category: "Exploration",
    exercises: [],
    level: "silver",
    imageUrl: "/assets/badges/exploration_trilingual_silver.svg",
    colorPalette: ["#7C3AED","#10B981","#FF7A59"],
    animation: "triple-flag bloom + light pulse",
    points: 150
  },
  {
    id: "exploration_all_exercises_gold",
    name: "All-Exercise Explorer",
    description: {
      en: "Play each exercise at least once.",
      fr: "Jouez à chaque exercice au moins une fois.",
      es: "Juega cada ejercicio al menos una vez."
    },
    category: "Exploration",
    exercises: ["filler-word-eliminator","precision-swap","reverse-definitions","synonym-speed-chain","word-incorporation"],
    level: "gold",
    imageUrl: "/assets/badges/exploration_all_exercises_gold.svg",
    colorPalette: ["#6EE7B7","#047857","#ECFDF5"],
    animation: "map marker sweep + small confetti",
    points: 200
  },
  {
    id: "mastery_filler_bronze",
    name: "Filler Scholar",
    description: {
      en: "Reach mastery tier in Filler Word Eliminator (3 gold sessions).",
      fr: "Atteignez la maîtrise pour Éliminateur de Mots de Remplissage (3 sessions or).",
      es: "Alcanza maestría en Eliminador de Palabras de Relleno (3 sesiones oro)."
    },
    category: "Mastery",
    exercises: ["filler-word-eliminator"],
    level: "bronze",
    imageUrl: "/assets/badges/mastery_filler_bronze.svg",
    colorPalette: ["#FF8DA1","#FF4757","#FFF3F4"],
    animation: "gold ribbon + gentle sparkle",
    points: 80
  },
  {
    id: "mastery_precision_gold",
    name: "Precision Master",
    description: {
      en: "Consistently hit mastery on Precision Swap (10 gold sessions).",
      fr: "Atteignez la maîtrise sur Precision Swap (10 sessions or).",
      es: "Alcanza maestría en Precision Swap (10 sesiones oro)."
    },
    category: "Mastery",
    exercises: ["precision-swap"],
    level: "gold",
    imageUrl: "/assets/badges/mastery_precision_gold.svg",
    colorPalette: ["#FFB020","#FFAB00","#FFF8E1"],
    animation: "sparkline + shiny sweep + particle burst",
    points: 250
  },
  {
    id: "mastery_reverse_gold",
    name: "Reverse Sage",
    description: {
      en: "Demonstrate sustained mastery in Reverse Definitions.",
      fr: "Démontrez une maîtrise soutenue des Définitions Inversées.",
      es: "Demuestra maestría sostenida en Definiciones Inversas."
    },
    category: "Mastery",
    exercises: ["reverse-definitions"],
    level: "gold",
    imageUrl: "/assets/badges/mastery_reverse_gold.svg",
    colorPalette: ["#60A5FA","#164E63","#E8F6FF"],
    animation: "page-turn + soft glow",
    points: 240
  },
  {
    id: "mastery_synonym_gold",
    name: "Synonym Maestro",
    description: {
      en: "Reach mastery in Synonym Speed Chain repeatedly.",
      fr: "Atteignez la maîtrise à plusieurs reprises dans Synonym Speed Chain.",
      es: "Alcanza maestría repetidamente en Synonym Speed Chain."
    },
    category: "Mastery",
    exercises: ["synonym-speed-chain"],
    level: "gold",
    imageUrl: "/assets/badges/mastery_synonym_gold.svg",
    colorPalette: ["#8B5CF6","#C7B3FF","#EFE7FF"],
    animation: "word-chain spin + sparkles",
    points: 240
  },
  {
    id: "mastery_incorporator_platinum",
    name: "Word Weaver",
    description: {
      en: "Sustained top-tier mastery in Word Incorporation.",
      fr: "Maîtrise soutenue de haut niveau en Word Incorporation.",
      es: "Maestría sostenida de primer nivel en Word Incorporation."
    },
    category: "Mastery",
    exercises: ["word-incorporation"],
    level: "platinum",
    imageUrl: "/assets/badges/mastery_incorporator_platinum.svg",
    colorPalette: ["#00F5A0","#00BFA6","#E6FFF7"],
    animation: "flowing ribbon + shimmering particle galaxy + slow zoom",
    points: 600
  },  {
    id: "total_progress_bronze",
    name: "Progress Builder",
    description: {
      en: "Reach 25% of total possible progress across exercises.",
      fr: "Atteignez 25 % du progrès total possible sur les exercices.",
      es: "Alcanza el 25 % del progreso total posible en los ejercicios."
    },
    category: "Completion",
    exercises: [],
    level: "bronze",
    imageUrl: "/assets/badges/total_progress_bronze.svg",
    colorPalette: ["#FFDAB9","#FFEFD5","#7C4DFF"],
    animation: "subtle fill + small confetti",
    points: 40
  },
  {
    id: "total_progress_silver",
    name: "Progress Veteran",
    description: {
      en: "Reach 60% of total possible progress across exercises.",
      fr: "Atteignez 60 % du progrès total possible sur les exercices.",
      es: "Alcanza el 60 % del progreso total posible en los ejercicios."
    },
    category: "Completion",
    exercises: [],
    level: "silver",
    imageUrl: "/assets/badges/total_progress_silver.svg",
    colorPalette: ["#C7F9EC","#A7F3E0","#059669"],
    animation: "progress sweep + sparkle",
    points: 120
  },
  {
    id: "total_progress_gold",
    name: "Progress Authority",
    description: {
      en: "Reach 90% of total possible progress across exercises.",
      fr: "Atteignez 90 % du progrès total possible sur les exercices.",
      es: "Alcanza el 90 % del progreso total posible en los ejercicios."
    },
    category: "Completion",
    exercises: [],
    level: "gold",
    imageUrl: "/assets/badges/total_progress_gold.svg",
    colorPalette: ["#FFD166","#FFAB00","#FFF4D1"],
    animation: "big sparkle + shine sweep",
    points: 300
  },
  {
    id: "streak_short_bronze",
    name: "Streak Starter",
    description: {
      en: "Maintain a 3-day practice streak.",
      fr: "Maintenez une série de 3 jours.",
      es: "Mantén una racha de 3 días."
    },
    category: "Streak",
    level: "bronze",
    imageUrl: "/assets/badges/streak_short_bronze.svg",
    colorPalette: ["#FDE68A","#FCD34D","#F97316"],
    animation: "small ribbon pop",
    points: 25
  },
  {
    id: "special_founders_platinum",
    name: "Founder's Laurels",
    description: {
      en: "Early backer / account created during launch window.",
      fr: "Soutien précoce / compte créé pendant la période de lancement.",
      es: "Patrocinador temprano / cuenta creada en la ventana de lanzamiento."
    },
    category: "Special",
    exercises: [],
    level: "platinum",
    imageUrl: "/assets/badges/special_founders_platinum.svg",
    colorPalette: ["#FFD700","#FFF1A8","#FFEAA7"],
    animation: "grand confetti + trophy reveal + voice chime",
    points: 1000
  },
  {
    id: "special_beta_pioneer_gold",
    name: "Beta Pioneer",
    description: {
      en: "Participated in beta testing or early feedback rounds.",
      fr: "A participé aux tests bêta ou aux retours précoces.",
      es: "Participaste en pruebas beta o rondas de feedback temprano."
    },
    category: "Special",
    exercises: [],
    level: "gold",
    imageUrl: "/assets/badges/special_beta_pioneer_gold.svg",
    colorPalette: ["#FF7A59","#FFEDD5","#8A3F2A"],
    animation: "ribbon reveal + small fireworks",
    points: 500
  },
  {
    id: "special_seasonal_snowflake_bronze",
    name: "Seasonal Snowflake",
    description: {
      en: "Unlocked during the winter seasonal challenge.",
      fr: "Débloqué pendant le défi saisonnier d'hiver.",
      es: "Desbloqueado durante el desafío de temporada de invierno."
    },
    category: "Special",
    exercises: [],
    level: "bronze",
    imageUrl: "/assets/badges/special_seasonal_snowflake_bronze.svg",
    colorPalette: ["#E0F2FE","#CFFAFE","#89CFF0"],
    animation: "snowflake spin + frosty shimmer",
    points: 80
  },
  {
    id: "community_helper_silver",
    name: "Community Helper",
    description: {
      en: "Shareable reward for contributions (e.g., help, guide, refer).",
      fr: "Récompense pour contributions (aide, guide, parrainage).",
      es: "Recompensa por contribuir (ayuda, guía, referir)."
    },
    category: "Special",
    exercises: [],
    level: "silver",
    imageUrl: "/assets/badges/community_helper_silver.svg",
    colorPalette: ["#F97316","#FFF4EB","#C2410C"],
    animation: "heart pulse + small confetti",
    points: 150
  },
  {
    id: "special_collection_legend_platinum",
    name: "Collector's Trophy",
    description: {
      en: "Unlock every badge in the set (full completion).",
      fr: "Débloquez tous les badges (complétion totale).",
      es: "Desbloquea todas las insignias (completado total)."
    },
    category: "Special",
    exercises: [],
    level: "platinum",
    imageUrl: "/assets/badges/special_collection_legend_platinum.svg",
    colorPalette: ["#FCD34D","#FDE68A","#5B3800"],
    animation: "epic halo + fullscreen confetti + cinematic sweep",
    points: 1500
  }
];

export default BADGES;
