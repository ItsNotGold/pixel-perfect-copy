import { Language } from "@/contexts/LanguageContext";

export interface WordIncorporationPrompt {
  prompt: string;
  words: string[];
}

export const wordIncorporationPrompts: Record<Language, WordIncorporationPrompt[]> = {
  en: [
    {
      prompt: "Talk about your daily routine",
      words: ["morning", "breakfast", "commute", "work", "lunch"]
    },
    {
      prompt: "Describe your favorite hobby",
      words: ["passionate", "creative", "relaxing", "challenging", "rewarding"]
    },
    {
      prompt: "Discuss the importance of education",
      words: ["knowledge", "skills", "opportunities", "growth", "future"]
    },
    {
      prompt: "Talk about technology in modern life",
      words: ["innovation", "convenience", "communication", "efficiency", "adaptation"]
    },
    {
      prompt: "Describe a memorable vacation",
      words: ["adventure", "relaxation", "culture", "memories", "exploration"]
    },
    {
      prompt: "Discuss healthy lifestyle choices",
      words: ["nutrition", "exercise", "wellness", "balance", "discipline"]
    },
    {
      prompt: "Talk about your career goals",
      words: ["ambition", "development", "achievement", "challenges", "fulfillment"]
    },
    {
      prompt: "Describe the impact of social media",
      words: ["connectivity", "influence", "information", "engagement", "privacy"]
    },
    {
      prompt: "Discuss environmental conservation",
      words: ["sustainability", "protection", "resources", "responsibility", "action"]
    },
    {
      prompt: "Talk about personal relationships",
      words: ["trust", "communication", "support", "understanding", "connection"]
    },
    {
      prompt: "Describe the benefits of reading",
      words: ["knowledge", "imagination", "perspective", "relaxation", "wisdom"]
    },
    {
      prompt: "Discuss the future of work",
      words: ["flexibility", "technology", "collaboration", "productivity", "balance"]
    },
    {
      prompt: "Talk about cultural diversity",
      words: ["traditions", "perspectives", "understanding", "enrichment", "harmony"]
    },
    {
      prompt: "Describe overcoming challenges",
      words: ["resilience", "determination", "growth", "learning", "strength"]
    },
    {
      prompt: "Discuss the role of art in society",
      words: ["expression", "creativity", "culture", "emotion", "inspiration"]
    },
    {
      prompt: "Talk about financial planning",
      words: ["security", "goals", "budgeting", "investment", "planning"]
    },
    {
      prompt: "Describe the importance of sleep",
      words: ["restoration", "health", "productivity", "mood", "recovery"]
    },
    {
      prompt: "Discuss effective communication",
      words: ["clarity", "listening", "empathy", "respect", "understanding"]
    },
    {
      prompt: "Talk about lifelong learning",
      words: ["curiosity", "growth", "adaptation", "knowledge", "development"]
    },
    {
      prompt: "Describe the power of gratitude",
      words: ["appreciation", "mindfulness", "positivity", "relationships", "perspective"]
    },
    {
      prompt: "Discuss leadership qualities",
      words: ["vision", "inspiration", "responsibility", "collaboration", "integrity"]
    },
    {
      prompt: "Talk about time management",
      words: ["priorities", "organization", "efficiency", "focus", "balance"]
    },
    {
      prompt: "Describe the impact of music",
      words: ["emotion", "expression", "therapy", "culture", "creativity"]
    },
    {
      prompt: "Discuss ethical decision making",
      words: ["integrity", "consequences", "values", "responsibility", "fairness"]
    },
    {
      prompt: "Talk about building good habits",
      words: ["consistency", "discipline", "routine", "progress", "motivation"]
    },
    {
      prompt: "Describe the value of volunteering",
      words: ["contribution", "community", "purpose", "skills", "fulfillment"]
    },
    {
      prompt: "Discuss the role of humor",
      words: ["laughter", "stress", "connection", "perspective", "wellness"]
    },
    {
      prompt: "Talk about personal growth",
      words: ["reflection", "change", "learning", "confidence", "potential"]
    },
    {
      prompt: "Describe sustainable living",
      words: ["environment", "choices", "impact", "future", "consciousness"]
    },
    {
      prompt: "Discuss the importance of mental health",
      words: ["wellness", "support", "awareness", "resilience", "balance"]
    }
    ,
    {
      prompt: "Talk about a recent book you enjoyed",
      words: ["plot", "characters", "theme", "insightful", "recommend"]
    },
    {
      prompt: "Describe how you plan a trip",
      words: ["itinerary", "budget", "accommodation", "sightseeing", "transport"]
    },
    {
      prompt: "Discuss your approach to learning new skills",
      words: ["practice", "feedback", "consistency", "resources", "patience"]
    },
    {
      prompt: "Talk about a memorable meal",
      words: ["flavor", "presentation", "ingredients", "ambience", "service"]
    },
    {
      prompt: "Describe how you handle conflict",
      words: ["dialogue", "compromise", "respect", "listening", "resolution"]
    },
    {
      prompt: "Discuss how you manage your finances",
      words: ["saving", "budget", "investment", "debt", "goals"]
    },
    {
      prompt: "Talk about a technology you can't live without",
      words: ["device", "connectivity", "utility", "dependence", "innovation"]
    },
    {
      prompt: "Describe a community event you attended",
      words: ["volunteering", "attendance", "organization", "outreach", "impact"]
    },
    {
      prompt: "Discuss your favorite way to stay active",
      words: ["workout", "routine", "motivation", "endurance", "recovery"]
    },
    {
      prompt: "Talk about a goal you achieved recently",
      words: ["planning", "milestone", "effort", "celebration", "reflection"]
    },
    {
      prompt: "Describe the role of teamwork in a project",
      words: ["collaboration", "responsibility", "communication", "roles", "trust"]
    },
    {
      prompt: "Discuss how you maintain work-life balance",
      words: ["boundaries", "priorities", "time", "self-care", "flexibility"]
    },
    {
      prompt: "Talk about an invention that changed the world",
      words: ["innovation", "impact", "adoption", "scale", "legacy"]
    },
    {
      prompt: "Describe how you prepare for interviews",
      words: ["research", "practice", "confidence", "questions", "follow-up"]
    },
    {
      prompt: "Discuss a cultural tradition you enjoy",
      words: ["ritual", "celebration", "meaning", "customs", "heritage"]
    },
    {
      prompt: "Talk about strategies for staying focused",
      words: ["distraction", "priority", "technique", "schedule", "consistency"]
    },
    {
      prompt: "Describe a volunteer experience",
      words: ["service", "community", "learning", "empathy", "contribution"]
    },
    {
      prompt: "Discuss the importance of sleep hygiene",
      words: ["routine", "environment", "restorative", "consistency", "quality"]
    },
    {
      prompt: "Talk about a lesson you learned from failure",
      words: ["insight", "resilience", "adjustment", "growth", "perspective"]
    }
  ],
  fr: [
    {
      prompt: "Parlez de votre routine quotidienne",
      words: ["matinée", "petit-déjeuner", "trajet", "travail", "déjeuner"]
    },
    {
      prompt: "Décrivez votre passe-temps préféré",
      words: ["passionné", "créatif", "relaxant", "difficile", "gratifiant"]
    },
    {
      prompt: "Discutez de l'importance de l'éducation",
      words: ["connaissance", "compétences", "opportunités", "croissance", "avenir"]
    },
    {
      prompt: "Parlez de la technologie dans la vie moderne",
      words: ["innovation", "commodité", "communication", "efficacité", "adaptation"]
    },
    {
      prompt: "Décrivez des vacances mémorables",
      words: ["aventure", "relaxation", "culture", "souvenirs", "exploration"]
    },
    {
      prompt: "Discutez des choix de vie saine",
      words: ["nutrition", "exercice", "bien-être", "équilibre", "discipline"]
    },
    {
      prompt: "Parlez de vos objectifs de carrière",
      words: ["ambition", "développement", "réussite", "défis", "épanouissement"]
    },
    {
      prompt: "Décrivez l'impact des réseaux sociaux",
      words: ["connectivité", "influence", "information", "engagement", "vie privée"]
    },
    {
      prompt: "Discutez de la conservation environnementale",
      words: ["durabilité", "protection", "ressources", "responsabilité", "action"]
    },
    {
      prompt: "Parlez des relations personnelles",
      words: ["confiance", "communication", "soutien", "compréhension", "connexion"]
    }
  ],
  es: [
    {
      prompt: "Habla de tu rutina diaria",
      words: ["mañana", "desayuno", "viaje", "trabajo", "almuerzo"]
    },
    {
      prompt: "Describe tu hobby favorito",
      words: ["apasionado", "creativo", "relajante", "desafiante", "gratificante"]
    },
    {
      prompt: "Discute la importancia de la educación",
      words: ["conocimiento", "habilidades", "oportunidades", "crecimiento", "futuro"]
    },
    {
      prompt: "Habla de la tecnología en la vida moderna",
      words: ["innovación", "conveniencia", "comunicación", "eficiencia", "adaptación"]
    },
    {
      prompt: "Describe unas vacaciones memorables",
      words: ["aventura", "relajación", "cultura", "recuerdos", "exploración"]
    },
    {
      prompt: "Discute las elecciones de estilo de vida saludable",
      words: ["nutrición", "ejercicio", "bienestar", "equilibrio", "disciplina"]
    },
    {
      prompt: "Habla de tus metas profesionales",
      words: ["ambición", "desarrollo", "logro", "desafíos", "cumplimiento"]
    },
    {
      prompt: "Describe el impacto de las redes sociales",
      words: ["conectividad", "influencia", "información", "compromiso", "privacidad"]
    },
    {
      prompt: "Discute la conservación ambiental",
      words: ["sostenibilidad", "protección", "recursos", "responsabilidad", "acción"]
    },
    {
      prompt: "Habla de las relaciones personales",
      words: ["confianza", "comunicación", "apoyo", "comprensión", "conexión"]
    }
  ]
};