import { ExerciseMaster, WordIncorporationContent } from "../types";

export const wordIncorporationMaster: ExerciseMaster<WordIncorporationContent> = {
    id: "word-incorporation",
    metadata: {
        id: "word-incorporation",
        displayName: "Word Incorporation",
        description: "Weave specific words into your speech naturally.",
        supportedLanguages: ["en", "fr", "es"],
        icon: "Mic"
    },
    content: {
        type: "word-incorporation",
        config: {
            wordsPerPrompt: 5
        },
        multilingual: {
            en: {
                instructions: {
                    intro: "Incorporate words naturally.",
                    details: "Speak about the prompt and use the required words. The app listens to check if you used them correctly."
                },
                prompts: [
                    {
                        prompt: "Describe your typical morning routine",
                        words: ["morning", "breakfast", "commute", "work", "lunch"]
                    },
                    {
                        prompt: "Explain your favorite hobby or pastime",
                        words: ["passionate", "creative", "relaxing", "challenging", "rewarding"]
                    },
                    {
                        prompt: "Discuss the role of education in personal development",
                        words: ["knowledge", "skills", "opportunities", "growth", "future"]
                    },
                    {
                        prompt: "Talk about the role of technology in modern life",
                        words: ["innovation", "convenience", "communication", "efficiency", "adaptation"]
                    },
                    {
                        prompt: "Describe a memorable vacation or trip",
                        words: ["adventure", "relaxation", "culture", "memories", "exploration"]
                    },
                    {
                        prompt: "Discuss the key components of a healthy lifestyle",
                        words: ["nutrition", "exercise", "wellness", "balance", "discipline"]
                    },
                    {
                        prompt: "Describe your professional aspirations and career goals",
                        words: ["ambition", "development", "achievement", "challenges", "fulfillment"]
                    },
                    {
                        prompt: "Discuss the societal impact of social media",
                        words: ["connectivity", "influence", "information", "engagement", "privacy"]
                    },
                    {
                        prompt: "Talk about the importance of environmental conservation",
                        words: ["sustainability", "protection", "resources", "responsibility", "action"]
                    },
                    {
                        prompt: "Describe what makes a personal relationship strong",
                        words: ["trust", "communication", "support", "understanding", "connection"]
                    },
                    {
                        prompt: "Explain the benefits of regular reading",
                        words: ["knowledge", "imagination", "perspective", "relaxation", "wisdom"]
                    },
                    {
                        prompt: "Discuss how the nature of work might change in the future",
                        words: ["flexibility", "technology", "collaboration", "productivity", "balance"]
                    },
                    {
                        prompt: "Talk about the value of cultural diversity in a community",
                        words: ["traditions", "perspectives", "understanding", "enrichment", "harmony"]
                    },
                    {
                        prompt: "Describe a time you overcame a significant challenge",
                        words: ["resilience", "determination", "growth", "learning", "strength"]
                    },
                    {
                        prompt: "Discuss the purpose of art in society",
                        words: ["expression", "creativity", "culture", "emotion", "inspiration"]
                    },
                    {
                        prompt: "Explain the principles of sound financial planning",
                        words: ["security", "goals", "budgeting", "investment", "planning"]
                    },
                    {
                        prompt: "Talk about the critical importance of quality sleep",
                        words: ["restoration", "health", "productivity", "mood", "recovery"]
                    },
                    {
                        prompt: "Describe the key elements of effective communication",
                        words: ["clarity", "listening", "empathy", "respect", "understanding"]
                    },
                    {
                        prompt: "Discuss the concept and benefits of lifelong learning",
                        words: ["curiosity", "growth", "adaptation", "knowledge", "development"]
                    },
                    {
                        prompt: "Talk about the personal impact of practicing gratitude",
                        words: ["appreciation", "mindfulness", "positivity", "relationships", "perspective"]
                    },
                    {
                        prompt: "Describe the essential qualities of a good leader",
                        words: ["vision", "inspiration", "responsibility", "collaboration", "integrity"]
                    },
                    {
                        prompt: "Explain your strategies for effective time management",
                        words: ["priorities", "organization", "efficiency", "focus", "balance"]
                    },
                    {
                        prompt: "Discuss the influence of music on individuals and culture",
                        words: ["emotion", "expression", "therapy", "culture", "creativity"]
                    },
                    {
                        prompt: "Talk about the process of making an ethical decision",
                        words: ["integrity", "consequences", "values", "responsibility", "fairness"]
                    },
                    {
                        prompt: "Describe how to build and maintain positive habits",
                        words: ["consistency", "discipline", "routine", "progress", "motivation"]
                    },
                    {
                        prompt: "Discuss the personal and social value of volunteering",
                        words: ["contribution", "community", "purpose", "skills", "fulfillment"]
                    },
                    {
                        prompt: "Talk about the role of humor in daily life",
                        words: ["laughter", "stress", "connection", "perspective", "wellness"]
                    },
                    {
                        prompt: "Describe your journey of personal growth and development",
                        words: ["reflection", "change", "learning", "confidence", "potential"]
                    },
                    {
                        prompt: "Explain what sustainable living means to you",
                        words: ["environment", "choices", "impact", "future", "consciousness"]
                    },
                    {
                        prompt: "Discuss the importance of prioritizing mental health",
                        words: ["wellness", "support", "awareness", "resilience", "balance"]
                    },
                    {
                        prompt: "Describe a recent book you read and why you enjoyed it",
                        words: ["plot", "characters", "theme", "insightful", "recommend"]
                    },
                    {
                        prompt: "Explain your process for planning a trip or vacation",
                        words: ["itinerary", "budget", "accommodation", "sightseeing", "transport"]
                    },
                    {
                        prompt: "Discuss your approach to acquiring a new skill",
                        words: ["practice", "feedback", "consistency", "resources", "patience"]
                    },
                    {
                        prompt: "Describe a memorable dining experience",
                        words: ["flavor", "presentation", "ingredients", "ambiance", "service"]
                    },
                    {
                        prompt: "Talk about your methods for resolving a disagreement",
                        words: ["dialogue", "compromise", "respect", "listening", "resolution"]
                    },
                    {
                        prompt: "Describe your system for managing personal finances",
                        words: ["saving", "budget", "investment", "debt", "goals"]
                    },
                    {
                        prompt: "Talk about a piece of technology that is indispensable to you",
                        words: ["device", "connectivity", "utility", "dependence", "innovation"]
                    },
                    {
                        prompt: "Describe a positive community event you participated in",
                        words: ["volunteering", "attendance", "organization", "outreach", "impact"]
                    },
                    {
                        prompt: "Discuss your favorite form of physical activity",
                        words: ["workout", "routine", "motivation", "endurance", "recovery"]
                    },
                    {
                        prompt: "Describe a recent personal or professional goal you achieved",
                        words: ["planning", "milestone", "effort", "celebration", "reflection"]
                    },
                    {
                        prompt: "Discuss the importance of teamwork in a successful project",
                        words: ["collaboration", "responsibility", "communication", "roles", "trust"]
                    },
                    {
                        prompt: "Explain how you maintain a balance between work and personal life",
                        words: ["boundaries", "priorities", "time", "self-care", "flexibility"]
                    },
                    {
                        prompt: "Talk about a historical invention that profoundly changed society",
                        words: ["innovation", "impact", "adoption", "scale", "legacy"]
                    },
                    {
                        prompt: "Describe how you prepare for an important job interview",
                        words: ["research", "practice", "confidence", "questions", "follow-up"]
                    },
                    {
                        prompt: "Discuss a cultural tradition that is meaningful to you",
                        words: ["ritual", "celebration", "meaning", "customs", "heritage"]
                    },
                    {
                        prompt: "Explain your strategies for maintaining focus and avoiding distractions",
                        words: ["distraction", "priority", "technique", "schedule", "consistency"]
                    },
                    {
                        prompt: "Describe a rewarding volunteer experience you had",
                        words: ["service", "community", "learning", "empathy", "contribution"]
                    },
                    {
                        prompt: "Talk about the principles of good sleep hygiene",
                        words: ["routine", "environment", "restorative", "consistency", "quality"]
                    },
                    {
                        prompt: "Discuss a valuable lesson you learned from a failure or setback",
                        words: ["insight", "resilience", "adjustment", "growth", "perspective"]
                    },
                    {
                        prompt: "Describe your ideal weekend",
                        words: ["leisure", "recharge", "hobbies", "social", "spontaneous"]
                    },
                    {
                        prompt: "Explain the importance of critical thinking in the digital age",
                        words: ["analysis", "sources", "bias", "logic", "discernment"]
                    },
                    {
                        prompt: "Talk about a historical figure you admire",
                        words: ["legacy", "impact", "principles", "struggle", "achievement"]
                    },
                    {
                        prompt: "Describe the qualities of a good mentor or teacher",
                        words: ["guidance", "patience", "knowledge", "encouragement", "example"]
                    },
                    {
                        prompt: "Discuss the benefits of spending time in nature",
                        words: ["serenity", "fresh air", "exercise", "perspective", "connection"]
                    },
                    {
                        prompt: "Talk about a social issue you are passionate about",
                        words: ["awareness", "change", "advocacy", "justice", "community"]
                    },
                    {
                        prompt: "Describe how you handle stress and pressure",
                        words: ["coping", "mindfulness", "resilience", "strategy", "composure"]
                    },
                    {
                        prompt: "Explain the process of making a difficult decision",
                        words: ["weighing", "options", "consequences", "intuition", "commitment"]
                    },
                    {
                        prompt: "Discuss the evolution of your personal style or taste",
                        words: ["influences", "expression", "confidence", "evolution", "individuality"]
                    },
                    {
                        prompt: "Talk about the importance of local businesses in a community",
                        words: ["character", "economy", "service", "personal", "support"]
                    },
                    {
                        prompt: "Describe a piece of advice that has guided you",
                        words: ["wisdom", "application", "impact", "mentor", "reminder"]
                    },
                    {
                        prompt: "Discuss the pros and cons of urban versus rural living",
                        words: ["pace", "access", "community", "environment", "lifestyle"]
                    },
                    {
                        prompt: "Talk about the role of curiosity in driving innovation",
                        words: ["inquiry", "exploration", "discovery", "problem-solving", "breakthrough"]
                    },
                    {
                        prompt: "Describe your favorite season and why you prefer it",
                        words: ["weather", "activities", "atmosphere", "associations", "change"]
                    },
                    {
                        prompt: "Explain the concept of emotional intelligence",
                        words: ["awareness", "regulation", "empathy", "relationships", "management"]
                    },
                    {
                        prompt: "Discuss the impact of globalization on culture",
                        words: ["exchange", "homogenization", "diversity", "access", "adaptation"]
                    },
                    {
                        prompt: "Talk about the importance of preserving historical sites",
                        words: ["heritage", "identity", "education", "tourism", "legacy"]
                    },
                    {
                        prompt: "Describe a scientific discovery that fascinates you",
                        words: ["breakthrough", "implications", "research", "complexity", "wonder"]
                    },
                    {
                        prompt: "Discuss how you stay informed about current events",
                        words: ["sources", "reliability", "perspective", "frequency", "analysis"]
                    },
                    {
                        prompt: "Talk about the ethics of artificial intelligence",
                        words: ["autonomy", "bias", "control", "future", "responsibility"]
                    },
                    {
                        prompt: "Describe the experience of learning a new language",
                        words: ["challenge", "immersion", "grammar", "fluency", "culture"]
                    },
                    {
                        prompt: "Explain what 'home' means to you",
                        words: ["comfort", "memories", "people", "belonging", "security"]
                    },
                    {
                        prompt: "Discuss the benefits of a minimalist lifestyle",
                        words: ["clarity", "intentionality", "freedom", "sustainability", "focus"]
                    },
                    {
                        prompt: "Talk about a film that left a lasting impression on you",
                        words: ["narrative", "cinematography", "characters", "theme", "impact"]
                    },
                    {
                        prompt: "Describe the perfect work environment for you",
                        words: ["culture", "colleagues", "space", "autonomy", "values"]
                    },
                    {
                        prompt: "Discuss the role of luck versus hard work in success",
                        words: ["opportunity", "preparation", "fortune", "effort", "recognition"]
                    },
                    {
                        prompt: "Talk about the importance of public speaking skills",
                        words: ["confidence", "clarity", "persuasion", "engagement", "preparation"]
                    },
                    {
                        prompt: "Describe your process for solving a complex problem",
                        words: ["breakdown", "research", "brainstorming", "solution", "evaluation"]
                    },
                    {
                        prompt: "Discuss the value of constructive criticism",
                        words: ["feedback", "growth", "receptiveness", "improvement", "perspective"]
                    },
                    {
                        prompt: "Talk about how architecture affects our mood and behavior",
                        words: ["design", "space", "light", "function", "atmosphere"]
                    },
                    {
                        prompt: "Describe a tradition you would like to start",
                        words: ["ritual", "meaning", "connection", "anticipation", "legacy"]
                    },
                    {
                        prompt: "Explain the importance of digital literacy",
                        words: ["navigation", "safety", "evaluation", "creation", "participation"]
                    },
                    {
                        prompt: "Discuss the concept of 'quality of life'",
                        words: ["health", "security", "relationships", "freedom", "environment"]
                    },
                    {
                        prompt: "Talk about a moment that renewed your optimism",
                        words: ["hope", "inspiration", "kindness", "progress", "perspective"]
                    },
                    {
                        prompt: "Describe how you would define 'success'",
                        words: ["goals", "fulfillment", "impact", "happiness", "achievement"]
                    },
                    {
                        prompt: "Discuss the influence of family on your values",
                        words: ["upbringing", "lessons", "support", "heritage", "foundation"]
                    },
                    {
                        prompt: "Talk about the challenges and rewards of entrepreneurship",
                        words: ["vision", "risk", "perseverance", "innovation", "autonomy"]
                    },
                    {
                        prompt: "Describe the most beautiful place you have ever seen",
                        words: ["landscape", "emotion", "memory", "awe", "serenity"]
                    },
                    {
                        prompt: "Explain how to cultivate patience",
                        words: ["practice", "mindfulness", "perspective", "acceptance", "calm"]
                    },
                    {
                        prompt: "Discuss the role of sports in society",
                        words: ["competition", "health", "unity", "entertainment", "discipline"]
                    },
                    {
                        prompt: "Talk about the importance of preserving indigenous languages",
                        words: ["culture", "knowledge", "identity", "diversity", "heritage"]
                    },
                    {
                        prompt: "Describe a time you stepped outside your comfort zone",
                        words: ["fear", "growth", "new", "confidence", "experience"]
                    },
                    {
                        prompt: "Discuss the future of renewable energy",
                        words: ["sustainability", "technology", "adoption", "policy", "impact"]
                    },
                    {
                        prompt: "Talk about the qualities of a true friend",
                        words: ["loyalty", "honesty", "support", "fun", "reliability"]
                    },
                    {
                        prompt: "Describe how you organize your living or workspace",
                        words: ["efficiency", "aesthetics", "clutter", "system", "productivity"]
                    },
                    {
                        prompt: "Explain the significance of a balanced diet",
                        words: ["nutrients", "energy", "health", "moderation", "variety"]
                    },
                    {
                        prompt: "Discuss the impact of automation on jobs",
                        words: ["efficiency", "displacement", "reskilling", "future", "adaptation"]
                    },
                    {
                        prompt: "Talk about a museum or exhibit you found fascinating",
                        words: ["artifacts", "story", "education", "curiosity", "presentation"]
                    },
                    {
                        prompt: "Describe your approach to giving gifts",
                        words: ["thoughtful", "occasion", "personal", "generosity", "reaction"]
                    },
                    {
                        prompt: "Discuss the psychology of advertising",
                        words: ["persuasion", "desire", "branding", "subconscious", "influence"]
                    },
                    {
                        prompt: "Talk about the importance of civic engagement",
                        words: ["vote", "community", "responsibility", "voice", "change"]
                    },
                    {
                        prompt: "Describe a skill you believe everyone should learn",
                        words: ["essential", "practical", "empowering", "safety", "foundational"]
                    },
                    {
                        prompt: "Explain the benefits of learning history",
                        words: ["context", "patterns", "mistakes", "identity", "perspective"]
                    },
                    {
                        prompt: "Discuss the role of intuition in decision-making",
                        words: ["instinct", "experience", "gut", "analysis", "trust"]
                    },
                    {
                        prompt: "Talk about the design of a user-friendly product",
                        words: ["intuitive", "aesthetic", "function", "experience", "simplicity"]
                    },
                    {
                        prompt: "Describe how cities can become more livable",
                        words: ["green spaces", "transport", "housing", "community", "planning"]
                    },
                    {
                        prompt: "Discuss the importance of intellectual humility",
                        words: ["open-minded", "learning", "dialogue", "uncertainty", "growth"]
                    },
                    {
                        prompt: "Talk about a public figure who uses their platform for good",
                        words: ["influence", "advocacy", "integrity", "inspiration", "action"]
                    },
                    {
                        prompt: "Describe the feeling of accomplishing a long-term project",
                        words: ["satisfaction", "relief", "pride", "retrospective", "culmination"]
                    },
                    {
                        prompt: "Explain the value of unplugging from technology",
                        words: ["detox", "present", "mindfulness", "clarity", "reconnection"]
                    },
                    {
                        prompt: "Discuss the concept of universal basic income",
                        words: ["security", "work", "automation", "poverty", "experiment"]
                    },
                    {
                        prompt: "Talk about the etiquette of online communication",
                        words: ["tone", "respect", "privacy", "permanence", "empathy"]
                    },
                    {
                        prompt: "Describe your favorite type of storytelling (e.g., novels, films, podcasts)",
                        words: ["immersion", "characters", "narrative", "escape", "medium"]
                    },
                    {
                        prompt: "Discuss the importance of bees and pollinators",
                        words: ["ecosystem", "agriculture", "biodiversity", "threat", "conservation"]
                    },
                    {
                        prompt: "Talk about how fashion reflects culture and personality",
                        words: ["expression", "trends", "identity", "art", "societal"]
                    },
                    {
                        prompt: "Describe the process of learning from someone with opposing views",
                        words: ["dialogue", "respect", "understanding", "challenge", "common ground"]
                    },
                    {
                        prompt: "Explain why space exploration is important",
                        words: ["discovery", "technology", "perspective", "future", "collaboration"]
                    },
                    {
                        prompt: "Discuss the benefits of intergenerational relationships",
                        words: ["wisdom", "perspective", "history", "connection", "learning"]
                    },
                    {
                        prompt: "Talk about managing the influx of information daily",
                        words: ["filter", "focus", "sources", "overload", "synthesis"]
                    },
                    {
                        prompt: "Describe an act of kindness you witnessed or performed",
                        words: ["compassion", "impact", "selfless", "chain", "humanity"]
                    },
                    {
                        prompt: "Discuss the pros and cons of remote work",
                        words: ["flexibility", "isolation", "productivity", "communication", "balance"]
                    },
                    {
                        prompt: "Talk about the significance of national parks",
                        words: ["preservation", "recreation", "education", "wildlife", "beauty"]
                    },
                    {
                        prompt: "Describe how you deal with uncertainty",
                        words: ["adaptability", "planning", "mindset", "support", "courage"]
                    },
                    {
                        prompt: "Explain the appeal of puzzles and brain teasers",
                        words: ["logic", "satisfaction", "mental exercise", "pattern", "solution"]
                    },
                    {
                        prompt: "Discuss the role of compromise in a democracy",
                        words: ["collaboration", "progress", "diversity", "negotiation", "stability"]
                    },
                    {
                        prompt: "Talk about the importance of coral reefs",
                        words: ["biodiversity", "protection", "climate", "economy", "fragile"]
                    },
                    {
                        prompt: "Describe a piece of furniture or object with sentimental value",
                        words: ["memory", "story", "heritage", "comfort", "attachment"]
                    },
                    {
                        prompt: "Discuss the future of transportation",
                        words: ["electric", "autonomous", "efficiency", "infrastructure", "sustainable"]
                    },
                    {
                        prompt: "Talk about the psychology behind superstitions",
                        words: ["belief", "ritual", "control", "luck", "cultural"]
                    },
                    {
                        prompt: "Describe the ideal learning environment for children",
                        words: ["curiosity", "safety", "creativity", "guidance", "resources"]
                    },
                    {
                        prompt: "Explain the importance of soil health",
                        words: ["foundation", "agriculture", "ecosystem", "regeneration", "life"]
                    },
                    {
                        prompt: "Discuss the value of keeping a journal or diary",
                        words: ["reflection", "memory", "clarity", "creativity", "therapeutic"]
                    },
                    {
                        prompt: "Talk about the cultural significance of food",
                        words: ["tradition", "identity", "celebration", "sharing", "heritage"]
                    },
                    {
                        prompt: "Describe how you would design the perfect day off",
                        words: ["leisurely", "engaging", "restful", "fulfilling", "unstructured"]
                    },
                    {
                        prompt: "Discuss the importance of watersheds and clean water",
                        words: ["resource", "health", "ecosystem", "conservation", "access"]
                    },
                    {
                        prompt: "Talk about the evolution of communication methods",
                        words: ["speed", "reach", "intimacy", "record", "revolution"]
                    },
                    {
                        prompt: "Describe a local legend or folklore from your area",
                        words: ["story", "origin", "moral", "tradition", "mystery"]
                    },
                    {
                        prompt: "Explain the challenges of achieving world peace",
                        words: ["conflict", "cooperation", "justice", "understanding", "diplomacy"]
                    },
                    {
                        prompt: "Discuss the role of libraries in the 21st century",
                        words: ["access", "community", "digital", "knowledge", "sanctuary"]
                    },
                    {
                        prompt: "Talk about the importance of play for adults",
                        words: ["creativity", "stress", "connection", "joy", "mindfulness"]
                    },
                    {
                        prompt: "Describe the feeling of being in a live audience (concert, play, speech)",
                        words: ["energy", "shared", "anticipation", "reaction", "collective"]
                    },
                    {
                        prompt: "Discuss the ethics of genetic engineering",
                        words: ["potential", "risks", "ethics", "future", "modification"]
                    },
                    {
                        prompt: "Talk about the significance of the circadian rhythm",
                        words: ["cycle", "health", "sleep", "productivity", "alignment"]
                    },
                    {
                        prompt: "Describe how you would explain the internet to someone from the past",
                        words: ["network", "information", "instant", "global", "revolution"]
                    },
                    {
                        prompt: "Discuss the importance of marine conservation",
                        words: ["oceans", "biodiversity", "climate", "pollution", "stewardship"]
                    },
                    {
                        prompt: "Talk about the concept of 'slow living'",
                        words: ["intentional", "present", "quality", "mindful", "resistance"]
                    },
                    {
                        prompt: "Describe the role of a goalkeeper or defender in a team sport",
                        words: ["pressure", "strategy", "reliability", "anticipation", "crucial"]
                    },
                    {
                        prompt: "Explain why biodiversity matters",
                        words: ["ecosystem", "resilience", "medicine", "interconnected", "loss"]
                    },
                    {
                        prompt: "Discuss the impact of tourism on a destination",
                        words: ["economy", "culture", "environment", "infrastructure", "exchange"]
                    },
                    {
                        prompt: "Talk about the importance of hand-written letters",
                        words: ["personal", "thoughtful", "tangible", "slow", "keepsake"]
                    },
                    {
                        prompt: "Describe the process of brewing coffee or tea",
                        words: ["ritual", "aroma", "technique", "flavor", "pause"]
                    },
                    {
                        prompt: "Discuss the future of artificial intelligence in healthcare",
                        words: ["diagnosis", "efficiency", "personalized", "ethics", "assistance"]
                    },
                    {
                        prompt: "Talk about the symbolism in a famous piece of art or literature",
                        words: ["meaning", "interpretation", "depth", "artist", "message"]
                    },
                    {
                        prompt: "Describe the benefits of cooperative games over competitive ones",
                        words: ["teamwork", "inclusion", "shared", "strategy", "joy"]
                    },
                    {
                        prompt: "Explain the importance of preserving dark skies",
                        words: ["astronomy", "wildlife", "pollution", "wonder", "heritage"]
                    },
                    {
                        prompt: "Discuss what makes a city's public transit system effective",
                        words: ["reliable", "accessible", "affordable", "network", "efficient"]
                    },
                    {
                        prompt: "Talk about the tradition of oral storytelling",
                        words: ["history", "culture", "performance", "memory", "connection"]
                    },
                    {
                        prompt: "Describe the feeling of witnessing a stunning natural phenomenon",
                        words: ["awe", "scale", "beauty", "transient", "power"]
                    },
                    {
                        prompt: "Discuss the importance of phonetic alphabets in communication",
                        words: ["clarity", "standardization", "aviation", "military", "universal"]
                    },
                    {
                        prompt: "Talk about the challenges and beauty of raising children",
                        words: ["patience", "growth", "unconditional", "sacrifice", "joy"]
                    },
                    {
                        prompt: "Describe the ideal qualities of a public servant",
                        words: ["integrity", "service", "transparency", "empathy", "dedication"]
                    },
                    {
                        prompt: "Explain the significance of migratory animals",
                        words: ["cycle", "ecosystem", "journey", "indicator", "wonder"]
                    },
                    {
                        prompt: "Discuss the role of silence in communication",
                        words: ["pause", "reflection", "emphasis", "comfort", "listening"]
                    },
                    {
                        prompt: "Talk about the importance of failure in scientific research",
                        words: ["hypothesis", "data", "iteration", "knowledge", "perseverance"]
                    },
                    {
                        prompt: "Describe the community aspect of a farmers' market",
                        words: ["local", "fresh", "interaction", "seasonal", "support"]
                    },
                    {
                        prompt: "Discuss the psychology of color in marketing and design",
                        words: ["emotion", "association", "branding", "influence", "choice"]
                    },
                    {
                        prompt: "Talk about the importance of wetlands",
                        words: ["filter", "flood", "habitat", "biodiversity", "protection"]
                    },
                    {
                        prompt: "Describe the process of reconciliation after a conflict",
                        words: ["forgiveness", "dialogue", "healing", "trust", "progress"]
                    },
                    {
                        prompt: "Explain the appeal of analog photography in a digital age",
                        words: ["tangible", "process", "limit", "authenticity", "patience"]
                    },
                    {
                        prompt: "Discuss the future of printed books",
                        words: ["tactile", "focus", "collection", "digital", "enduring"]
                    },
                    {
                        prompt: "Talk about the importance of mycorrhizal fungi in forests",
                        words: ["network", "symbiosis", "communication", "trees", "foundational"]
                    },
                    {
                        prompt: "Describe the art of negotiation",
                        words: ["interests", "compromise", "leverage", "outcome", "relationship"]
                    },
                    {
                        prompt: "Discuss the role of public art in urban spaces",
                        words: ["beautification", "conversation", "identity", "accessible", "inspiration"]
                    },
                    {
                        prompt: "Talk about the importance of seed banks",
                        words: ["preservation", "diversity", "future", "security", "heritage"]
                    },
                    {
                        prompt: "Describe the feeling of mastering a difficult piece of music",
                        words: ["practice", "flow", "expression", "accomplishment", "connection"]
                    },
                    {
                        prompt: "Explain the concept of a 'circular economy'",
                        words: ["waste", "reuse", "design", "system", "sustainable"]
                    },
                    {
                        prompt: "Discuss the value of an interdisciplinary education",
                        words: ["connections", "innovation", "versatility", "understanding", "synthesis"]
                    },
                    {
                        prompt: "Talk about the importance of estuary ecosystems",
                        words: ["nursery", "filter", "biodiversity", "transition", "protection"]
                    },
                    {
                        prompt: "Describe the process of creative collaboration",
                        words: ["synergy", "ideas", "feedback", "compromise", "vision"]
                    },
                    {
                        prompt: "Discuss the role of satire in society",
                        words: ["critique", "humor", "reflection", "power", "awareness"]
                    },
                    {
                        prompt: "Talk about the significance of the deep ocean",
                        words: ["mystery", "exploration", "extremophiles", "climate", "unknown"]
                    }
                ]
            },
            fr: {
                instructions: {
                    intro: "Incorporez les mots naturellement.",
                    details: "Parlez du sujet et utilisez les mots requis."
                },
                prompts: [
                    {
                        prompt: "Décrivez votre routine matinale typique",
                        words: ["matin", "petit déjeuner", "trajet", "travail", "déjeuner"]
                    },
                    {
                        prompt: "Expliquez votre passe-temps ou loisir préféré",
                        words: ["passionné", "créatif", "relaxant", "difficile", "récompensant"]
                    },
                    {
                        prompt: "Discutez du rôle de l'éducation dans le développement personnel",
                        words: ["connaissance", "compétences", "opportunités", "croissance", "avenir"]
                    },
                    {
                        prompt: "Parlez du rôle de la technologie dans la vie moderne",
                        words: ["innovation", "commodité", "communication", "efficacité", "adaptation"]
                    },
                    {
                        prompt: "Décrivez des vacances ou un voyage mémorable",
                        words: ["aventure", "relaxation", "culture", "souvenirs", "exploration"]
                    },
                    {
                        prompt: "Discutez des composantes clés d'un mode de vie sain",
                        words: ["nutrition", "exercice", "santé", "équilibre", "discipline"]
                    },
                    {
                        prompt: "Décrivez vos aspirations professionnelles et vos objectifs de carrière",
                        words: ["ambition", "développement", "réussite", "défis", "épanouissement"]
                    },
                    {
                        prompt: "Discutez de l'impact sociétal des réseaux sociaux",
                        words: ["connectivité", "influence", "information", "engagement", "vie privée"]
                    },
                    {
                        prompt: "Parlez de l'importance de la conservation environnementale",
                        words: ["durabilité", "protection", "ressources", "responsabilité", "action"]
                    },
                    {
                        prompt: "Décrivez ce qui rend une relation personnelle solide",
                        words: ["confiance", "communication", "soutien", "compréhension", "lien"]
                    },
                    {
                        prompt: "Expliquez les bénéfices de la lecture régulière",
                        words: ["connaissance", "imagination", "perspective", "détente", "sagesse"]
                    },
                    {
                        prompt: "Discutez de la manière dont le travail pourrait changer à l'avenir",
                        words: ["flexibilité", "technologie", "collaboration", "productivité", "équilibre"]
                    },
                    {
                        prompt: "Parlez de la valeur de la diversité culturelle dans une communauté",
                        words: ["traditions", "perspectives", "compréhension", "enrichissement", "harmonie"]
                    },
                    {
                        prompt: "Décrivez un moment où vous avez surmonté un défi important",
                        words: ["résilience", "détermination", "croissance", "apprentissage", "force"]
                    },
                    {
                        prompt: "Discutez du but de l'art dans la société",
                        words: ["expression", "créativité", "culture", "émotion", "inspiration"]
                    },
                    {
                        prompt: "Expliquez les principes d'une planification financière saine",
                        words: ["sécurité", "objectifs", "budget", "investissement", "planification"]
                    },
                    {
                        prompt: "Parlez de l'importance cruciale d'un sommeil de qualité",
                        words: ["récupération", "santé", "productivité", "humeur", "rétablissement"]
                    },
                    {
                        prompt: "Décrivez les éléments clés d'une communication efficace",
                        words: ["clarté", "écoute", "empathie", "respect", "compréhension"]
                    },
                    {
                        prompt: "Discutez du concept et des bénéfices de l'apprentissage continu",
                        words: ["curiosité", "croissance", "adaptation", "savoir", "développement"]
                    },
                    {
                        prompt: "Parlez de l'impact personnel de pratiquer la gratitude",
                        words: ["appréciation", "pleine conscience", "positivité", "relations", "perspective"]
                    },
                    {
                        prompt: "Décrivez les qualités essentielles d'un bon leader",
                        words: ["vision", "inspiration", "responsabilité", "collaboration", "intégrité"]
                    },
                    {
                        prompt: "Expliquez vos stratégies pour une gestion efficace du temps",
                        words: ["priorités", "organisation", "efficacité", "concentration", "équilibre"]
                    },
                    {
                        prompt: "Discutez de l'influence de la musique sur les individus et la culture",
                        words: ["émotion", "expression", "thérapie", "culture", "créativité"]
                    },
                    {
                        prompt: "Parlez du processus de prise de décision éthique",
                        words: ["intégrité", "conséquences", "valeurs", "responsabilité", "équité"]
                    },
                    {
                        prompt: "Décrivez comment construire et maintenir de bonnes habitudes",
                        words: ["constance", "discipline", "routine", "progrès", "motivation"]
                    },
                    {
                        prompt: "Discutez de la valeur personnelle et sociale du bénévolat",
                        words: ["contribution", "communauté", "but", "compétences", "épanouissement"]
                    },
                    {
                        prompt: "Parlez du rôle de l'humour dans la vie quotidienne",
                        words: ["rire", "stress", "lien", "perspective", "mieux être"]
                    },
                    {
                        prompt: "Décrivez votre parcours de croissance et développement personnel",
                        words: ["réflexion", "changement", "apprentissage", "confiance", "potentiel"]
                    },
                    {
                        prompt: "Expliquez ce que signifie pour vous une vie durable",
                        words: ["environnement", "choix", "impact", "futur", "conscience"]
                    },
                    {
                        prompt: "Discutez de l'importance de prioriser la santé mentale",
                        words: ["mieux être", "soutien", "sensibilisation", "résilience", "équilibre"]
                    },
                    {
                        prompt: "Décrivez un livre récent que vous avez lu et pourquoi vous l'avez aimé",
                        words: ["intrigue", "personnages", "thème", "enrichissant", "recommander"]
                    },
                    {
                        prompt: "Expliquez votre processus pour planifier un voyage ou des vacances",
                        words: ["itinéraire", "budget", "hébergement", "visites", "transport"]
                    },
                    {
                        prompt: "Discutez de votre approche pour acquérir une nouvelle compétence",
                        words: ["pratique", "retour", "constance", "ressources", "patience"]
                    },
                    {
                        prompt: "Décrivez une expérience culinaire mémorable",
                        words: ["saveur", "présentation", "ingrédients", "ambiance", "service"]
                    },
                    {
                        prompt: "Parlez de vos méthodes pour résoudre un désaccord",
                        words: ["dialogue", "compromis", "respect", "écoute", "résolution"]
                    },
                    {
                        prompt: "Décrivez votre système pour gérer vos finances personnelles",
                        words: ["épargne", "budget", "investissement", "dette", "objectifs"]
                    },
                    {
                        prompt: "Parlez d'une technologie qui vous est indispensable",
                        words: ["appareil", "connectivité", "utilité", "dépendance", "innovation"]
                    },
                    {
                        prompt: "Décrivez un événement communautaire positif auquel vous avez participé",
                        words: ["bénévolat", "participation", "organisation", "rayonnement", "impact"]
                    },
                    {
                        prompt: "Discutez de votre forme d'activité physique préférée",
                        words: ["entraînement", "routine", "motivation", "endurance", "récupération"]
                    },
                    {
                        prompt: "Décrivez un objectif personnel ou professionnel récemment atteint",
                        words: ["planification", "étape", "effort", "célébration", "réflexion"]
                    },
                    {
                        prompt: "Discutez de l'importance du travail d'équipe dans un projet réussi",
                        words: ["collaboration", "responsabilité", "communication", "rôles", "confiance"]
                    },
                    {
                        prompt: "Expliquez comment vous maintenez un équilibre entre vie professionnelle et personnelle",
                        words: ["limites", "priorités", "temps", "soi", "flexibilité"]
                    },
                    {
                        prompt: "Parlez d'une invention historique qui a profondément changé la société",
                        words: ["innovation", "impact", "adoption", "envergure", "héritage"]
                    },
                    {
                        prompt: "Décrivez comment vous préparez un entretien d'embauche important",
                        words: ["recherche", "pratique", "confiance", "questions", "suivi"]
                    },
                    {
                        prompt: "Discutez d'une tradition culturelle qui a du sens pour vous",
                        words: ["rituel", "célébration", "signification", "coutumes", "patrimoine"]
                    },
                    {
                        prompt: "Expliquez vos stratégies pour maintenir la concentration et éviter les distractions",
                        words: ["distraction", "priorité", "technique", "emploi du temps", "constance"]
                    },
                    {
                        prompt: "Décrivez une expérience bénévole enrichissante que vous avez vécue",
                        words: ["service", "communauté", "apprentissage", "empathie", "contribution"]
                    },
                    {
                        prompt: "Parlez des principes d'une bonne hygiène de sommeil",
                        words: ["routine", "environnement", "récupérateur", "constance", "qualité"]
                    },
                    {
                        prompt: "Discutez d'une leçon précieuse apprise d'un échec ou d'un revers",
                        words: ["perspicacité", "résilience", "ajustement", "croissance", "perspective"]
                    },
                    {
                        prompt: "Décrivez votre week-end idéal",
                        words: ["loisirs", "recharge", "passe temps", "social", "spontané"]
                    },
                    {
                        prompt: "Expliquez l'importance de l'esprit critique à l'ère numérique",
                        words: ["analyse", "sources", "biais", "logique", "discernement"]
                    },
                    {
                        prompt: "Parlez d'une figure historique que vous admirez",
                        words: ["héritage", "impact", "principes", "lutte", "accomplissement"]
                    },
                    {
                        prompt: "Décrivez les qualités d'un bon mentor ou professeur",
                        words: ["guidance", "patience", "savoir", "encouragement", "exemple"]
                    },
                    {
                        prompt: "Discutez des bénéfices de passer du temps dans la nature",
                        words: ["sérénité", "air frais", "exercice", "perspective", "connexion"]
                    },
                    {
                        prompt: "Parlez d'une question sociale qui vous passionne",
                        words: ["sensibilisation", "changement", "plaidoyer", "justice", "communauté"]
                    },
                    {
                        prompt: "Décrivez comment vous gérez le stress et la pression",
                        words: ["adaptation", "pleine conscience", "résilience", "stratégie", "sang froid"]
                    },
                    {
                        prompt: "Expliquez le processus de prise d'une décision difficile",
                        words: ["pondération", "options", "conséquences", "intuition", "engagement"]
                    },
                    {
                        prompt: "Discutez de l'évolution de votre style personnel ou de vos goûts",
                        words: ["influences", "expression", "confiance", "évolution", "individualité"]
                    },
                    {
                        prompt: "Parlez de l'importance des commerces locaux dans une communauté",
                        words: ["caractère", "économie", "service", "personnel", "soutien"]
                    },
                    {
                        prompt: "Décrivez un conseil qui vous a guidé",
                        words: ["sagesse", "application", "impact", "mentor", "rappel"]
                    },
                    {
                        prompt: "Discutez des avantages et inconvénients de la vie urbaine versus rurale",
                        words: ["rythme", "accès", "communauté", "environnement", "mode de vie"]
                    },
                    {
                        prompt: "Parlez du rôle de la curiosité dans la conduite de l'innovation",
                        words: ["questionnement", "exploration", "découverte", "résolution de problèmes", "avancée"]
                    },
                    {
                        prompt: "Décrivez votre saison préférée et pourquoi vous la préférez",
                        words: ["météo", "activités", "atmosphère", "associations", "changement"]
                    },
                    {
                        prompt: "Expliquez le concept d'intelligence émotionnelle",
                        words: ["conscience", "régulation", "empathie", "relations", "gestion"]
                    },
                    {
                        prompt: "Discutez de l'impact de la mondialisation sur la culture",
                        words: ["échange", "homogénéisation", "diversité", "accès", "adaptation"]
                    },
                    {
                        prompt: "Parlez de l'importance de préserver les sites historiques",
                        words: ["patrimoine", "identité", "éducation", "tourisme", "héritage"]
                    },
                    {
                        prompt: "Décrivez une découverte scientifique qui vous fascine",
                        words: ["avancée", "implications", "recherche", "complexité", "émerveillement"]
                    },
                    {
                        prompt: "Discutez de comment vous vous informez sur l'actualité",
                        words: ["sources", "fiabilité", "perspective", "fréquence", "analyse"]
                    },
                    {
                        prompt: "Parlez de l'éthique de l'intelligence artificielle",
                        words: ["autonomie", "biais", "contrôle", "futur", "responsabilité"]
                    },
                    {
                        prompt: "Décrivez l'expérience d'apprendre une nouvelle langue",
                        words: ["défi", "immersion", "grammaire", "maîtrise", "culture"]
                    },
                    {
                        prompt: "Expliquez ce que signifie 'chez soi' pour vous",
                        words: ["confort", "souvenirs", "personnes", "appartenance", "sécurité"]
                    },
                    {
                        prompt: "Discutez des bénéfices d'un mode de vie minimaliste",
                        words: ["clarté", "intentionnalité", "liberté", "durabilité", "concentration"]
                    },
                    {
                        prompt: "Parlez d'un film qui vous a marqué durablement",
                        words: ["récit", "cinématographie", "personnages", "thème", "impact"]
                    },
                    {
                        prompt: "Décrivez l'environnement de travail idéal pour vous",
                        words: ["culture", "collègues", "espace", "autonomie", "valeurs"]
                    },
                    {
                        prompt: "Discutez du rôle de la chance versus le travail acharné dans la réussite",
                        words: ["opportunité", "préparation", "fortune", "effort", "reconnaissance"]
                    },
                    {
                        prompt: "Parlez de l'importance des compétences en prise de parole en public",
                        words: ["confiance", "clarté", "persuasion", "engagement", "préparation"]
                    },
                    {
                        prompt: "Décrivez votre processus pour résoudre un problème complexe",
                        words: ["décomposition", "recherche", "remue méninges", "solution", "évaluation"]
                    },
                    {
                        prompt: "Discutez de la valeur de la critique constructive",
                        words: ["retour", "croissance", "réceptivité", "amélioration", "perspective"]
                    },
                    {
                        prompt: "Parlez de comment l'architecture affecte notre humeur et notre comportement",
                        words: ["conception", "espace", "lumière", "fonction", "atmosphère"]
                    },
                    {
                        prompt: "Décrivez une tradition que vous aimeriez instaurer",
                        words: ["rituel", "signification", "lien", "anticipation", "héritage"]
                    },
                    {
                        prompt: "Expliquez l'importance de la littératie numérique",
                        words: ["navigation", "sécurité", "évaluation", "création", "participation"]
                    },
                    {
                        prompt: "Discutez du concept de 'qualité de vie'",
                        words: ["santé", "sécurité", "relations", "liberté", "environnement"]
                    },
                    {
                        prompt: "Parlez d'un moment qui a renouvelé votre optimisme",
                        words: ["espoir", "inspiration", "gentillesse", "progrès", "perspective"]
                    },
                    {
                        prompt: "Décrivez comment vous définiriez la 'réussite'",
                        words: ["objectifs", "épanouissement", "impact", "bonheur", "accomplissement"]
                    },
                    {
                        prompt: "Discutez de l'influence de la famille sur vos valeurs",
                        words: ["éducation", "leçons", "soutien", "patrimoine", "fondation"]
                    },
                    {
                        prompt: "Parlez des défis et des récompenses de l'entrepreneuriat",
                        words: ["vision", "risque", "persévérance", "innovation", "autonomie"]
                    },
                    {
                        prompt: "Décrivez le plus bel endroit que vous ayez jamais vu",
                        words: ["paysage", "émotion", "souvenir", "émerveillement", "sérénité"]
                    },
                    {
                        prompt: "Expliquez comment cultiver la patience",
                        words: ["pratique", "pleine conscience", "perspective", "acceptation", "calme"]
                    },
                    {
                        prompt: "Discutez du rôle du sport dans la société",
                        words: ["compétition", "santé", "unité", "divertissement", "discipline"]
                    },
                    {
                        prompt: "Parlez de l'importance de préserver les langues autochtones",
                        words: ["culture", "savoir", "identité", "diversité", "patrimoine"]
                    },
                    {
                        prompt: "Décrivez un moment où vous êtes sorti de votre zone de confort",
                        words: ["peur", "croissance", "nouveau", "confiance", "expérience"]
                    },
                    {
                        prompt: "Discutez de l'avenir des énergies renouvelables",
                        words: ["durabilité", "technologie", "adoption", "politique", "impact"]
                    },
                    {
                        prompt: "Parlez des qualités d'un véritable ami",
                        words: ["loyauté", "honnêteté", "soutien", "plaisir", "fiabilité"]
                    },
                    {
                        prompt: "Décrivez comment vous organisez votre espace de vie ou de travail",
                        words: ["efficacité", "esthétique", "encombrement", "système", "productivité"]
                    },
                    {
                        prompt: "Expliquez l'importance d'une alimentation équilibrée",
                        words: ["nutriments", "énergie", "santé", "modération", "variété"]
                    },
                    {
                        prompt: "Discutez de l'impact de l'automatisation sur l'emploi",
                        words: ["efficacité", "remplacement", "requalification", "futur", "adaptation"]
                    },
                    {
                        prompt: "Parlez d'un musée ou d'une exposition que vous avez trouvé fascinant",
                        words: ["artefacts", "histoire", "éducation", "curiosité", "présentation"]
                    },
                    {
                        prompt: "Décrivez votre approche pour offrir des cadeaux",
                        words: ["attentionné", "occasion", "personnel", "générosité", "réaction"]
                    },
                    {
                        prompt: "Discutez de la psychologie de la publicité",
                        words: ["persuasion", "désir", "image de marque", "subconscient", "influence"]
                    },
                    {
                        prompt: "Parlez de l'importance de l'engagement civique",
                        words: ["vote", "communauté", "responsabilité", "voix", "changement"]
                    },
                    {
                        prompt: "Décrivez une compétence que vous pensez que tout le monde devrait apprendre",
                        words: ["essentiel", "pratique", "autonomisant", "sécurité", "fondamental"]
                    },
                    {
                        prompt: "Expliquez les bénéfices d'apprendre l'histoire",
                        words: ["contexte", "motifs", "erreurs", "identité", "perspective"]
                    },
                    {
                        prompt: "Discutez du rôle de l'intuition dans la prise de décision",
                        words: ["instinct", "expérience", "intuition", "analyse", "confiance"]
                    },
                    {
                        prompt: "Parlez de la conception d'un produit facile à utiliser",
                        words: ["intuitif", "esthétique", "fonction", "expérience", "simplicité"]
                    },
                    {
                        prompt: "Décrivez comment les villes peuvent devenir plus agréables à vivre",
                        words: ["espaces verts", "transport", "logement", "communauté", "planification"]
                    },
                    {
                        prompt: "Discutez de l'importance de l'humilité intellectuelle",
                        words: ["ouverture d'esprit", "apprentissage", "dialogue", "incertitude", "croissance"]
                    },
                    {
                        prompt: "Parlez d'une personnalité publique qui utilise sa plateforme pour le bien",
                        words: ["influence", "plaidoyer", "intégrité", "inspiration", "action"]
                    },
                    {
                        prompt: "Décrivez le sentiment d'accomplir un projet à long terme",
                        words: ["satisfaction", "soulagement", "fierté", "rétrospective", "apogée"]
                    },
                    {
                        prompt: "Expliquez la valeur de se déconnecter de la technologie",
                        words: ["détox", "présent", "pleine conscience", "clarté", "reconnexion"]
                    },
                    {
                        prompt: "Discutez du concept du revenu universel de base",
                        words: ["sécurité", "travail", "automatisation", "pauvreté", "expérience"]
                    },
                    {
                        prompt: "Parlez des bonnes manières dans la communication en ligne",
                        words: ["ton", "respect", "vie privée", "permanence", "empathie"]
                    },
                    {
                        prompt: "Décrivez votre type de narration préféré (ex: romans, films, podcasts)",
                        words: ["immersion", "personnages", "récit", "évasion", "média"]
                    },
                    {
                        prompt: "Discutez de l'importance des abeilles et des pollinisateurs",
                        words: ["écosystème", "agriculture", "biodiversité", "menace", "conservation"]
                    },
                    {
                        prompt: "Parlez de comment la mode reflète la culture et la personnalité",
                        words: ["expression", "tendances", "identité", "art", "sociétal"]
                    },
                    {
                        prompt: "Décrivez le processus d'apprentissage auprès de quelqu'un ayant des opinions opposées",
                        words: ["dialogue", "respect", "compréhension", "défi", "terrain d'entente"]
                    },
                    {
                        prompt: "Expliquez pourquoi l'exploration spatiale est importante",
                        words: ["découverte", "technologie", "perspective", "futur", "collaboration"]
                    },
                    {
                        prompt: "Discutez des bénéfices des relations intergénérationnelles",
                        words: ["sagesse", "perspective", "histoire", "lien", "apprentissage"]
                    },
                    {
                        prompt: "Parlez de la gestion du flux quotidien d'informations",
                        words: ["filtre", "concentration", "sources", "surcharge", "synthèse"]
                    },
                    {
                        prompt: "Décrivez un acte de gentillesse dont vous avez été témoin ou que vous avez accompli",
                        words: ["compassion", "impact", "désintéressé", "chaine", "humanité"]
                    },
                    {
                        prompt: "Discutez des avantages et inconvénients du travail à distance",
                        words: ["flexibilité", "isolement", "productivité", "communication", "équilibre"]
                    },
                    {
                        prompt: "Parlez de l'importance des parcs nationaux",
                        words: ["préservation", "loisirs", "éducation", "faune", "beauté"]
                    },
                    {
                        prompt: "Décrivez comment vous gérez l'incertitude",
                        words: ["adaptabilité", "planification", "état d'esprit", "soutien", "courage"]
                    },
                    {
                        prompt: "Expliquez l'attrait des puzzles et des casse-têtes",
                        words: ["logique", "satisfaction", "exercice mental", "motif", "solution"]
                    },
                    {
                        prompt: "Discutez du rôle du compromis dans une démocratie",
                        words: ["collaboration", "progrès", "diversité", "négociation", "stabilité"]
                    },
                    {
                        prompt: "Parlez de l'importance des récifs coralliens",
                        words: ["biodiversité", "protection", "climat", "économie", "fragile"]
                    },
                    {
                        prompt: "Décrivez un meuble ou un objet ayant une valeur sentimentale",
                        words: ["souvenir", "histoire", "héritage", "confort", "attachement"]
                    },
                    {
                        prompt: "Discutez du futur des transports",
                        words: ["électrique", "autonome", "efficacité", "infrastructure", "durable"]
                    },
                    {
                        prompt: "Parlez de la psychologie derrière les superstitions",
                        words: ["croyance", "rituel", "contrôle", "chance", "culturel"]
                    },
                    {
                        prompt: "Décrivez l'environnement d'apprentissage idéal pour les enfants",
                        words: ["curiosité", "sécurité", "créativité", "guidance", "ressources"]
                    },
                    {
                        prompt: "Expliquez l'importance de la santé des sols",
                        words: ["fondation", "agriculture", "écosystème", "régénération", "vie"]
                    },
                    {
                        prompt: "Discutez de la valeur de tenir un journal intime",
                        words: ["réflexion", "mémoire", "clarté", "créativité", "thérapeutique"]
                    },
                    {
                        prompt: "Parlez de la signification culturelle de la nourriture",
                        words: ["tradition", "identité", "célébration", "partage", "héritage"]
                    },
                    {
                        prompt: "Décrivez comment vous concevriez la journée de repos parfaite",
                        words: ["paisible", "engagé", "reposant", "épanouissant", "non structuré"]
                    },
                    {
                        prompt: "Discutez de l'importance des bassins versants et de l'eau propre",
                        words: ["ressource", "santé", "écosystème", "conservation", "accès"]
                    },
                    {
                        prompt: "Parlez de l'évolution des méthodes de communication",
                        words: ["vitesse", "portée", "intimité", "enregistrement", "révolution"]
                    },
                    {
                        prompt: "Décrivez une légende locale ou un folklore de votre région",
                        words: ["histoire", "origine", "morale", "tradition", "mystère"]
                    },
                    {
                        prompt: "Expliquez les défis pour parvenir à la paix mondiale",
                        words: ["conflit", "coopération", "justice", "compréhension", "diplomatie"]
                    },
                    {
                        prompt: "Discutez du rôle des bibliothèques au 21ème siècle",
                        words: ["accès", "communauté", "numérique", "savoir", "sanctuaire"]
                    },
                    {
                        prompt: "Parlez de l'importance du jeu pour les adultes",
                        words: ["créativité", "stress", "lien", "joie", "pleine conscience"]
                    },
                    {
                        prompt: "Décrivez la sensation d'être dans un public en direct (concert, pièce, discours)",
                        words: ["énergie", "partagé", "anticipation", "réaction", "collectif"]
                    },
                    {
                        prompt: "Discutez de l'éthique du génie génétique",
                        words: ["potentiel", "risques", "éthique", "futur", "modification"]
                    },
                    {
                        prompt: "Parlez de l'importance du rythme circadien",
                        words: ["cycle", "santé", "sommeil", "productivité", "alignement"]
                    },
                    {
                        prompt: "Décrivez comment vous expliqueriez internet à quelqu'un du passé",
                        words: ["réseau", "information", "instantané", "global", "révolution"]
                    },
                    {
                        prompt: "Discutez de l'importance de la conservation marine",
                        words: ["océans", "biodiversité", "climat", "pollution", "gestion"]
                    },
                    {
                        prompt: "Parlez du concept de 'vie lente'",
                        words: ["intentionnel", "présent", "qualité", "pleine conscience", "résistance"]
                    },
                    {
                        prompt: "Décrivez le rôle d'un gardien de but ou d'un défenseur dans un sport d'équipe",
                        words: ["pression", "stratégie", "fiabilité", "anticipation", "crucial"]
                    },
                    {
                        prompt: "Expliquez pourquoi la biodiversité est importante",
                        words: ["écosystème", "résilience", "médecine", "interconnecté", "perte"]
                    },
                    {
                        prompt: "Discutez de l'impact du tourisme sur une destination",
                        words: ["économie", "culture", "environnement", "infrastructure", "échange"]
                    },
                    {
                        prompt: "Parlez de l'importance des lettres manuscrites",
                        words: ["personnel", "attentionné", "tangible", "lent", "souvenir"]
                    },
                    {
                        prompt: "Décrivez le processus de préparation du café ou du thé",
                        words: ["rituel", "arôme", "technique", "saveur", "pause"]
                    },
                    {
                        prompt: "Discutez du futur de l'intelligence artificielle dans la santé",
                        words: ["diagnostic", "efficacité", "personnalisé", "éthique", "assistance"]
                    },
                    {
                        prompt: "Parlez du symbolisme dans une œuvre d'art ou un texte littéraire célèbre",
                        words: ["signification", "interprétation", "profondeur", "artiste", "message"]
                    },
                    {
                        prompt: "Décrivez les bénéfices des jeux coopératifs par rapport aux jeux compétitifs",
                        words: ["travail d'équipe", "inclusion", "partagé", "stratégie", "joie"]
                    },
                    {
                        prompt: "Expliquez l'importance de préserver les cieux nocturnes",
                        words: ["astronomie", "faune", "pollution", "émerveillement", "patrimoine"]
                    },
                    {
                        prompt: "Discutez de ce qui rend le système de transport en commun d'une ville efficace",
                        words: ["fiable", "accessible", "abordable", "réseau", "efficace"]
                    },
                    {
                        prompt: "Parlez de la tradition de la narration orale",
                        words: ["histoire", "culture", "performance", "mémoire", "lien"]
                    },
                    {
                        prompt: "Décrivez la sensation de témoigner d'un phénomène naturel époustouflant",
                        words: ["émerveillement", "échelle", "beauté", "éphémère", "puissance"]
                    },
                    {
                        prompt: "Discutez de l'importance des alphabets phonétiques dans la communication",
                        words: ["clarté", "standardisation", "aviation", "militaire", "universel"]
                    },
                    {
                        prompt: "Parlez des défis et des joies d'élever des enfants",
                        words: ["patience", "croissance", "inconditionnel", "sacrifice", "joie"]
                    },
                    {
                        prompt: "Décrivez les qualités idéales d'un fonctionnaire",
                        words: ["intégrité", "service", "transparence", "empathie", "dévouement"]
                    },
                    {
                        prompt: "Expliquez l'importance des animaux migrateurs",
                        words: ["cycle", "écosystème", "voyage", "indicateur", "merveille"]
                    },
                    {
                        prompt: "Discutez du rôle du silence dans la communication",
                        words: ["pause", "réflexion", "accent", "confort", "écoute"]
                    },
                    {
                        prompt: "Parlez de l'importance de l'échec dans la recherche scientifique",
                        words: ["hypothèse", "données", "itération", "connaissance", "persévérance"]
                    },
                    {
                        prompt: "Décrivez l'aspect communautaire d'un marché de producteurs",
                        words: ["local", "frais", "interaction", "saisonnier", "soutien"]
                    },
                    {
                        prompt: "Discutez de la psychologie de la couleur dans le marketing et le design",
                        words: ["émotion", "association", "image de marque", "influence", "choix"]
                    },
                    {
                        prompt: "Parlez de l'importance des zones humides",
                        words: ["filtre", "inondation", "habitat", "biodiversité", "protection"]
                    },
                    {
                        prompt: "Décrivez le processus de réconciliation après un conflit",
                        words: ["pardon", "dialogue", "guérison", "confiance", "progrès"]
                    },
                    {
                        prompt: "Expliquez l'attrait de la photographie argentique à l'ère numérique",
                        words: ["tangible", "processus", "limite", "authenticité", "patience"]
                    },
                    {
                        prompt: "Discutez du futur des livres imprimés",
                        words: ["tactile", "concentration", "collection", "numérique", "durable"]
                    },
                    {
                        prompt: "Parlez de l'importance des champignons mycorhiziens dans les forêts",
                        words: ["réseau", "symbiose", "communication", "arbres", "fondamental"]
                    },
                    {
                        prompt: "Décrivez l'art de la négociation",
                        words: ["intérêts", "compromis", "levier", "résultat", "relation"]
                    },
                    {
                        prompt: "Discutez du rôle de l'art public dans les espaces urbains",
                        words: ["embellissement", "conversation", "identité", "accessible", "inspiration"]
                    },
                    {
                        prompt: "Parlez de l'importance des banques de semences",
                        words: ["préservation", "diversité", "futur", "sécurité", "patrimoine"]
                    },
                    {
                        prompt: "Décrivez la sensation de maîtriser un morceau de musique difficile",
                        words: ["pratique", "flux", "expression", "accomplissement", "connexion"]
                    },
                    {
                        prompt: "Expliquez le concept d'une 'économie circulaire'",
                        words: ["déchets", "réutilisation", "conception", "système", "durable"]
                    },
                    {
                        prompt: "Discutez de la valeur d'une éducation interdisciplinaire",
                        words: ["connexions", "innovation", "polyvalence", "compréhension", "synthèse"]
                    },
                    {
                        prompt: "Parlez de l'importance des écosystèmes estuariens",
                        words: ["nurserie", "filtre", "biodiversité", "transition", "protection"]
                    },
                    {
                        prompt: "Décrivez le processus de collaboration créative",
                        words: ["synergie", "idées", "retour", "compromis", "vision"]
                    },
                    {
                        prompt: "Discutez du rôle de la satire dans la société",
                        words: ["critique", "humour", "réflexion", "pouvoir", "conscience"]
                    },
                    {
                        prompt: "Parlez de l'importance des abysses océaniques",
                        words: ["mystère", "exploration", "extrêmophiles", "climat", "inconnu"]
                    }
                ]
            },
            es: {
                instructions: {
                    intro: "Incorpora las palabras naturalmente.",
                    details: "Habla sobre el tema y usa las palabras requeridas."
                },
                prompts: [
                    {
                        prompt: "Describe tu rutina matutina típica",
                        words: ["mañana", "desayuno", "desplazamiento", "trabajo", "almuerzo"]
                    },
                    {
                        prompt: "Explica tu pasatiempo o afición favorita",
                        words: ["apasionado", "creativo", "relajante", "desafiante", "gratificante"]
                    },
                    {
                        prompt: "Discute el papel de la educación en el desarrollo personal",
                        words: ["conocimiento", "habilidades", "oportunidades", "crecimiento", "futuro"]
                    },
                    {
                        prompt: "Habla del papel de la tecnología en la vida moderna",
                        words: ["innovación", "comodidad", "comunicación", "eficiencia", "adaptación"]
                    },
                    {
                        prompt: "Describe unas vacaciones o viaje memorables",
                        words: ["aventura", "relajación", "cultura", "recuerdos", "exploración"]
                    },
                    {
                        prompt: "Discute los componentes clave de un estilo de vida saludable",
                        words: ["nutrición", "ejercicio", "salud", "equilibrio", "disciplina"]
                    },
                    {
                        prompt: "Describe tus aspiraciones profesionales y metas de carrera",
                        words: ["ambición", "desarrollo", "logro", "desafíos", "realización"]
                    },
                    {
                        prompt: "Discute el impacto social de las redes sociales",
                        words: ["conectividad", "influencia", "información", "compromiso", "privacidad"]
                    },
                    {
                        prompt: "Habla de la importancia de la conservación ambiental",
                        words: ["sostenibilidad", "protección", "recursos", "responsabilidad", "acción"]
                    },
                    {
                        prompt: "Describe lo que hace fuerte a una relación personal",
                        words: ["confianza", "comunicación", "apoyo", "comprensión", "conexión"]
                    },
                    {
                        prompt: "Explica los beneficios de leer regularmente",
                        words: ["conocimiento", "imaginación", "perspectiva", "relajación", "sabiduría"]
                    },
                    {
                        prompt: "Discute cómo podría cambiar la naturaleza del trabajo en el futuro",
                        words: ["flexibilidad", "tecnología", "colaboración", "productividad", "equilibrio"]
                    },
                    {
                        prompt: "Habla del valor de la diversidad cultural en una comunidad",
                        words: ["tradiciones", "perspectivas", "comprensión", "enriquecimiento", "armonía"]
                    },
                    {
                        prompt: "Describe un momento en que superaste un desafío importante",
                        words: ["resiliencia", "determinación", "crecimiento", "aprendizaje", "fortaleza"]
                    },
                    {
                        prompt: "Discute el propósito del arte en la sociedad",
                        words: ["expresión", "creatividad", "cultura", "emoción", "inspiración"]
                    },
                    {
                        prompt: "Explica los principios de una planificación financiera sólida",
                        words: ["seguridad", "objetivos", "presupuesto", "inversión", "planificación"]
                    },
                    {
                        prompt: "Habla de la importancia crucial del sueño de calidad",
                        words: ["restauración", "salud", "productividad", "estado de ánimo", "recuperación"]
                    },
                    {
                        prompt: "Describe los elementos clave de la comunicación efectiva",
                        words: ["claridad", "escucha", "empatía", "respeto", "comprensión"]
                    },
                    {
                        prompt: "Discute el concepto y beneficios del aprendizaje continuo",
                        words: ["curiosidad", "crecimiento", "adaptación", "saber", "desarrollo"]
                    },
                    {
                        prompt: "Habla del impacto personal de practicar la gratitud",
                        words: ["aprecio", "conciencia plena", "positividad", "relaciones", "perspectiva"]
                    },
                    {
                        prompt: "Describe las cualidades esenciales de un buen líder",
                        words: ["visión", "inspiración", "responsabilidad", "colaboración", "integridad"]
                    },
                    {
                        prompt: "Explica tus estrategias para una gestión efectiva del tiempo",
                        words: ["prioridades", "organización", "eficiencia", "concentración", "equilibrio"]
                    },
                    {
                        prompt: "Discute la influencia de la música en individuos y cultura",
                        words: ["emoción", "expresión", "terapia", "cultura", "creatividad"]
                    },
                    {
                        prompt: "Habla del proceso de tomar decisiones éticas",
                        words: ["integridad", "consecuencias", "valores", "responsabilidad", "equidad"]
                    },
                    {
                        prompt: "Describe cómo construir y mantener buenos hábitos",
                        words: ["constancia", "disciplina", "rutina", "progreso", "motivación"]
                    },
                    {
                        prompt: "Discute el valor personal y social del voluntariado",
                        words: ["contribución", "comunidad", "propósito", "habilidades", "realización"]
                    },
                    {
                        prompt: "Habla del papel del humor en la vida diaria",
                        words: ["risa", "estrés", "conexión", "perspectiva", "bienestar"]
                    },
                    {
                        prompt: "Describe tu camino de crecimiento y desarrollo personal",
                        words: ["reflexión", "cambio", "aprendizaje", "confianza", "potencial"]
                    },
                    {
                        prompt: "Explica lo que significa para ti vivir de manera sostenible",
                        words: ["medio ambiente", "decisiones", "impacto", "futuro", "conciencia"]
                    },
                    {
                        prompt: "Discute la importancia de priorizar la salud mental",
                        words: ["bienestar", "apoyo", "concienciación", "resiliencia", "equilibrio"]
                    },
                    {
                        prompt: "Describe un libro reciente que leíste y por qué te gustó",
                        words: ["trama", "personajes", "tema", "enriquecedor", "recomendar"]
                    },
                    {
                        prompt: "Explica tu proceso para planificar un viaje o vacaciones",
                        words: ["itinerario", "presupuesto", "alojamiento", "visitas", "transporte"]
                    },
                    {
                        prompt: "Discute tu enfoque para adquirir una nueva habilidad",
                        words: ["práctica", "retroalimentación", "constancia", "recursos", "paciencia"]
                    },
                    {
                        prompt: "Describe una experiencia gastronómica memorable",
                        words: ["sabor", "presentación", "ingredientes", "ambiente", "servicio"]
                    },
                    {
                        prompt: "Habla de tus métodos para resolver un desacuerdo",
                        words: ["diálogo", "compromiso", "respeto", "escucha", "resolución"]
                    },
                    {
                        prompt: "Describe tu sistema para gestionar tus finanzas personales",
                        words: ["ahorro", "presupuesto", "inversión", "deuda", "objetivos"]
                    },
                    {
                        prompt: "Habla de una tecnología que te resulta indispensable",
                        words: ["dispositivo", "conectividad", "utilidad", "dependencia", "innovación"]
                    },
                    {
                        prompt: "Describe un evento comunitario positivo en el que participaste",
                        words: ["voluntariado", "participación", "organización", "alcance", "impacto"]
                    },
                    {
                        prompt: "Discute tu forma favorita de actividad física",
                        words: ["entrenamiento", "rutina", "motivación", "resistencia", "recuperación"]
                    },
                    {
                        prompt: "Describe una meta personal o profesional alcanzada recientemente",
                        words: ["planificación", "hito", "esfuerzo", "celebración", "reflexión"]
                    },
                    {
                        prompt: "Discute la importancia del trabajo en equipo en un proyecto exitoso",
                        words: ["colaboración", "responsabilidad", "comunicación", "roles", "confianza"]
                    },
                    {
                        prompt: "Explica cómo mantienes el equilibrio entre trabajo y vida personal",
                        words: ["límites", "prioridades", "tiempo", "cuidado personal", "flexibilidad"]
                    },
                    {
                        prompt: "Habla de una invención histórica que cambió profundamente la sociedad",
                        words: ["innovación", "impacto", "adopción", "escala", "legado"]
                    },
                    {
                        prompt: "Describe cómo te preparas para una entrevista de trabajo importante",
                        words: ["investigación", "práctica", "confianza", "preguntas", "seguimiento"]
                    },
                    {
                        prompt: "Discute una tradición cultural que tenga significado para ti",
                        words: ["ritual", "celebración", "significado", "costumbres", "patrimonio"]
                    },
                    {
                        prompt: "Explica tus estrategias para mantener la concentración y evitar distracciones",
                        words: ["distracción", "prioridad", "técnica", "horario", "constancia"]
                    },
                    {
                        prompt: "Describe una experiencia de voluntariado enriquecedora",
                        words: ["servicio", "comunidad", "aprendizaje", "empatía", "contribución"]
                    },
                    {
                        prompt: "Habla de los principios de una buena higiene del sueño",
                        words: ["rutina", "entorno", "restaurador", "consistencia", "calidad"]
                    },
                    {
                        prompt: "Discute una lección valiosa aprendida de un fracaso o contratiempo",
                        words: ["comprensión", "resiliencia", "ajuste", "crecimiento", "perspectiva"]
                    },
                    {
                        prompt: "Describe tu fin de semana ideal",
                        words: ["ocio", "recargar energías", "aficiones", "social", "espontáneo"]
                    },
                    {
                        prompt: "Explica la importancia del pensamiento crítico en la era digital",
                        words: ["análisis", "fuentes", "sesgo", "lógica", "discernimiento"]
                    },
                    {
                        prompt: "Habla de una figura histórica que admiras",
                        words: ["legado", "impacto", "principios", "lucha", "logro"]
                    },
                    {
                        prompt: "Describe las cualidades de un buen mentor o profesor",
                        words: ["guía", "paciencia", "conocimiento", "estímulo", "ejemplo"]
                    },
                    {
                        prompt: "Discute los beneficios de pasar tiempo en la naturaleza",
                        words: ["serenidad", "aire fresco", "ejercicio", "perspectiva", "conexión"]
                    },
                    {
                        prompt: "Habla de un tema social que te apasione",
                        words: ["concienciación", "cambio", "defensa", "justicia", "comunidad"]
                    },
                    {
                        prompt: "Describe cómo manejas el estrés y la presión",
                        words: ["afrontamiento", "conciencia plena", "resiliencia", "estrategia", "serenidad"]
                    },
                    {
                        prompt: "Explica el proceso de tomar una decisión difícil",
                        words: ["ponderación", "opciones", "consecuencias", "intuición", "compromiso"]
                    },
                    {
                        prompt: "Discute la evolución de tu estilo personal o gustos",
                        words: ["influencias", "expresión", "confianza", "evolución", "individualidad"]
                    },
                    {
                        prompt: "Habla de la importancia de los negocios locales en una comunidad",
                        words: ["carácter", "economía", "servicio", "personal", "apoyo"]
                    },
                    {
                        prompt: "Describe un consejo que te ha guiado",
                        words: ["sabiduría", "aplicación", "impacto", "mentor", "recordatorio"]
                    },
                    {
                        prompt: "Discute los pros y contras de vivir en ciudad versus en el campo",
                        words: ["ritmo", "acceso", "comunidad", "medio ambiente", "estilo de vida"]
                    },
                    {
                        prompt: "Habla del papel de la curiosidad en impulsar la innovación",
                        words: ["indagación", "exploración", "descubrimiento", "resolución de problemas", "avance"]
                    },
                    {
                        prompt: "Describe tu estación favorita y por qué la prefieres",
                        words: ["clima", "actividades", "atmósfera", "asociaciones", "cambio"]
                    },
                    {
                        prompt: "Explica el concepto de inteligencia emocional",
                        words: ["consciencia", "regulación", "empatía", "relaciones", "gestión"]
                    },
                    {
                        prompt: "Discute el impacto de la globalización en la cultura",
                        words: ["intercambio", "homogeneización", "diversidad", "acceso", "adaptación"]
                    },
                    {
                        prompt: "Habla de la importancia de preservar sitios históricos",
                        words: ["patrimonio", "identidad", "educación", "turismo", "legado"]
                    },
                    {
                        prompt: "Describe un descubrimiento científico que te fascine",
                        words: ["avance", "implicaciones", "investigación", "complejidad", "asombro"]
                    },
                    {
                        prompt: "Discute cómo te mantienes informado sobre eventos actuales",
                        words: ["fuentes", "fiabilidad", "perspectiva", "frecuencia", "análisis"]
                    },
                    {
                        prompt: "Habla de la ética de la inteligencia artificial",
                        words: ["autonomía", "sesgo", "control", "futuro", "responsabilidad"]
                    },
                    {
                        prompt: "Describe la experiencia de aprender un nuevo idioma",
                        words: ["desafío", "inmersión", "gramática", "fluidez", "cultura"]
                    },
                    {
                        prompt: "Explica qué significa 'hogar' para ti",
                        words: ["confort", "recuerdos", "personas", "pertenencia", "seguridad"]
                    },
                    {
                        prompt: "Discute los beneficios de un estilo de vida minimalista",
                        words: ["claridad", "intencionalidad", "libertad", "sostenibilidad", "enfoque"]
                    },
                    {
                        prompt: "Habla de una película que te dejó una impresión duradera",
                        words: ["narrativa", "cinematografía", "personajes", "tema", "impacto"]
                    },
                    {
                        prompt: "Describe el entorno de trabajo ideal para ti",
                        words: ["cultura", "compañeros", "espacio", "autonomía", "valores"]
                    },
                    {
                        prompt: "Discute el papel de la suerte versus el trabajo duro en el éxito",
                        words: ["oportunidad", "preparación", "fortuna", "esfuerzo", "reconocimiento"]
                    },
                    {
                        prompt: "Habla de la importancia de las habilidades de hablar en público",
                        words: ["confianza", "claridad", "persuasión", "compromiso", "preparación"]
                    },
                    {
                        prompt: "Describe tu proceso para resolver un problema complejo",
                        words: ["desglose", "investigación", "lluvia de ideas", "solución", "evaluación"]
                    },
                    {
                        prompt: "Discute el valor de la crítica constructiva",
                        words: ["retroalimentación", "crecimiento", "receptividad", "mejora", "perspectiva"]
                    },
                    {
                        prompt: "Habla de cómo la arquitectura afecta nuestro estado de ánimo y comportamiento",
                        words: ["diseño", "espacio", "luz", "función", "ambiente"]
                    },
                    {
                        prompt: "Describe una tradición que te gustaría iniciar",
                        words: ["ritual", "significado", "conexión", "anticipación", "legado"]
                    },
                    {
                        prompt: "Explica la importancia de la alfabetización digital",
                        words: ["navegación", "seguridad", "evaluación", "creación", "participación"]
                    },
                    {
                        prompt: "Discute el concepto de 'calidad de vida'",
                        words: ["salud", "seguridad", "relaciones", "libertad", "medio ambiente"]
                    },
                    {
                        prompt: "Habla de un momento que renovó tu optimismo",
                        words: ["esperanza", "inspiración", "amabilidad", "progreso", "perspectiva"]
                    },
                    {
                        prompt: "Describe cómo definirías el 'éxito'",
                        words: ["objetivos", "realización", "impacto", "felicidad", "logro"]
                    },
                    {
                        prompt: "Discute la influencia de la familia en tus valores",
                        words: ["crianza", "lecciones", "apoyo", "herencia", "fundación"]
                    },
                    {
                        prompt: "Habla de los desafíos y recompensas del emprendimiento",
                        words: ["visión", "riesgo", "perseverancia", "innovación", "autonomía"]
                    },
                    {
                        prompt: "Describe el lugar más hermoso que hayas visto",
                        words: ["paisaje", "emoción", "memoria", "asombro", "serenidad"]
                    },
                    {
                        prompt: "Explica cómo cultivar la paciencia",
                        words: ["práctica", "conciencia plena", "perspectiva", "aceptación", "calma"]
                    },
                    {
                        prompt: "Discute el papel del deporte en la sociedad",
                        words: ["competencia", "salud", "unidad", "entretenimiento", "disciplina"]
                    },
                    {
                        prompt: "Habla de la importancia de preservar las lenguas indígenas",
                        words: ["cultura", "conocimiento", "identidad", "diversidad", "patrimonio"]
                    },
                    {
                        prompt: "Describe un momento en que saliste de tu zona de confort",
                        words: ["miedo", "crecimiento", "nuevo", "confianza", "experiencia"]
                    },
                    {
                        prompt: "Discute el futuro de las energías renovables",
                        words: ["sostenibilidad", "tecnología", "adopción", "política", "impacto"]
                    },
                    {
                        prompt: "Habla de las cualidades de un verdadero amigo",
                        words: ["lealtad", "honestidad", "apoyo", "diversión", "confiabilidad"]
                    },
                    {
                        prompt: "Describe cómo organizas tu espacio de vida o trabajo",
                        words: ["eficiencia", "estética", "desorden", "sistema", "productividad"]
                    },
                    {
                        prompt: "Explica la importancia de una dieta equilibrada",
                        words: ["nutrientes", "energía", "salud", "moderación", "variedad"]
                    },
                    {
                        prompt: "Discute el impacto de la automatización en el empleo",
                        words: ["eficiencia", "desplazamiento", "recapacitación", "futuro", "adaptación"]
                    },
                    {
                        prompt: "Habla de un museo o exposición que encontraste fascinante",
                        words: ["artefactos", "historia", "educación", "curiosidad", "presentación"]
                    },
                    {
                        prompt: "Describe tu enfoque para dar regalos",
                        words: ["considerado", "ocasión", "personal", "generosidad", "reacción"]
                    },
                    {
                        prompt: "Discute la psicología de la publicidad",
                        words: ["persuasión", "deseo", "marca", "subconsciente", "influencia"]
                    },
                    {
                        prompt: "Habla de la importancia del compromiso cívico",
                        words: ["voto", "comunidad", "responsabilidad", "voz", "cambio"]
                    },
                    {
                        prompt: "Describe una habilidad que crees que todos deberían aprender",
                        words: ["esencial", "práctico", "empoderador", "seguridad", "fundamental"]
                    },
                    {
                        prompt: "Explica los beneficios de aprender historia",
                        words: ["contexto", "patrones", "errores", "identidad", "perspectiva"]
                    },
                    {
                        prompt: "Discute el papel de la intuición en la toma de decisiones",
                        words: ["instinto", "experiencia", "corazonada", "análisis", "confianza"]
                    },
                    {
                        prompt: "Habla del diseño de un producto fácil de usar",
                        words: ["intuitivo", "estético", "función", "experiencia", "simplicidad"]
                    },
                    {
                        prompt: "Describe cómo las ciudades pueden volverse más habitables",
                        words: ["espacios verdes", "transporte", "vivienda", "comunidad", "planificación"]
                    },
                    {
                        prompt: "Discute la importancia de la humildad intelectual",
                        words: ["mente abierta", "aprendizaje", "diálogo", "incertidumbre", "crecimiento"]
                    },
                    {
                        prompt: "Habla de una figura pública que usa su plataforma para el bien",
                        words: ["influencia", "defensa", "integridad", "inspiración", "acción"]
                    },
                    {
                        prompt: "Describe la sensación de completar un proyecto a largo plazo",
                        words: ["satisfacción", "alivio", "orgullo", "retrospectiva", "culminación"]
                    },
                    {
                        prompt: "Explica el valor de desconectarse de la tecnología",
                        words: ["desintoxicación", "presente", "conciencia plena", "claridad", "reconexión"]
                    },
                    {
                        prompt: "Discute el concepto de renta básica universal",
                        words: ["seguridad", "trabajo", "automatización", "pobreza", "experimento"]
                    },
                    {
                        prompt: "Habla de la etiqueta en la comunicación en línea",
                        words: ["tono", "respeto", "privacidad", "permanencia", "empatía"]
                    },
                    {
                        prompt: "Describe tu tipo de narración favorito (ej: novelas, películas, podcasts)",
                        words: ["inmersión", "personajes", "narrativa", "escape", "medio"]
                    },
                    {
                        prompt: "Discute la importancia de las abejas y los polinizadores",
                        words: ["ecosistema", "agricultura", "biodiversidad", "amenaza", "conservación"]
                    },
                    {
                        prompt: "Habla de cómo la moda refleja la cultura y la personalidad",
                        words: ["expresión", "tendencias", "identidad", "arte", "social"]
                    },
                    {
                        prompt: "Describe el proceso de aprender de alguien con opiniones opuestas",
                        words: ["diálogo", "respeto", "comprensión", "desafío", "terreno común"]
                    },
                    {
                        prompt: "Explica por qué la exploración espacial es importante",
                        words: ["descubrimiento", "tecnología", "perspectiva", "futuro", "colaboración"]
                    },
                    {
                        prompt: "Discute los beneficios de las relaciones intergeneracionales",
                        words: ["sabiduría", "perspectiva", "historia", "conexión", "aprendizaje"]
                    },
                    {
                        prompt: "Habla de cómo gestionar el flujo diario de información",
                        words: ["filtro", "enfoque", "fuentes", "sobrecarga", "síntesis"]
                    },
                    {
                        prompt: "Describe un acto de amabilidad del que fuiste testigo o que realizaste",
                        words: ["compasión", "impacto", "desinteresado", "cadena", "humanidad"]
                    },
                    {
                        prompt: "Discute los pros y contras del trabajo remoto",
                        words: ["flexibilidad", "aislamiento", "productividad", "comunicación", "equilibrio"]
                    },
                    {
                        prompt: "Habla de la importancia de los parques nacionales",
                        words: ["preservación", "recreación", "educación", "vida silvestre", "belleza"]
                    },
                    {
                        prompt: "Describe cómo manejas la incertidumbre",
                        words: ["adaptabilidad", "planificación", "mentalidad", "apoyo", "valentía"]
                    },
                    {
                        prompt: "Explica el atractivo de los rompecabezas y acertijos",
                        words: ["lógica", "satisfacción", "ejercicio mental", "patrón", "solución"]
                    },
                    {
                        prompt: "Discute el papel del compromiso en una democracia",
                        words: ["colaboración", "progreso", "diversidad", "negociación", "estabilidad"]
                    },
                    {
                        prompt: "Habla de la importancia de los arrecifes de coral",
                        words: ["biodiversidad", "protección", "clima", "economía", "frágil"]
                    },
                    {
                        prompt: "Describe un mueble u objeto con valor sentimental",
                        words: ["memoria", "historia", "herencia", "confort", "apego"]
                    },
                    {
                        prompt: "Discute el futuro del transporte",
                        words: ["eléctrico", "autónomo", "eficiencia", "infraestructura", "sostenible"]
                    },
                    {
                        prompt: "Habla de la psicología detrás de las supersticiones",
                        words: ["creencia", "ritual", "control", "suerte", "cultural"]
                    },
                    {
                        prompt: "Describe el entorno de aprendizaje ideal para los niños",
                        words: ["curiosidad", "seguridad", "creatividad", "guía", "recursos"]
                    },
                    {
                        prompt: "Explica la importancia de la salud del suelo",
                        words: ["fundación", "agricultura", "ecosistema", "regeneración", "vida"]
                    },
                    {
                        prompt: "Discute el valor de llevar un diario",
                        words: ["reflexión", "memoria", "claridad", "creatividad", "terapéutico"]
                    },
                    {
                        prompt: "Habla de la importancia cultural de la comida",
                        words: ["tradición", "identidad", "celebración", "compartir", "herencia"]
                    },
                    {
                        prompt: "Describe cómo diseñarías el día de descanso perfecto",
                        words: ["tranquilo", "comprometido", "reposado", "realizador", "no estructurado"]
                    },
                    {
                        prompt: "Discute la importancia de las cuencas hidrográficas y el agua limpia",
                        words: ["recurso", "salud", "ecosistema", "conservación", "acceso"]
                    },
                    {
                        prompt: "Habla de la evolución de los métodos de comunicación",
                        words: ["velocidad", "alcance", "intimidad", "registro", "revolución"]
                    },
                    {
                        prompt: "Describe una leyenda local o folclore de tu área",
                        words: ["historia", "origen", "moral", "tradición", "misterio"]
                    },
                    {
                        prompt: "Explica los desafíos para lograr la paz mundial",
                        words: ["conflicto", "cooperación", "justicia", "comprensión", "diplomacia"]
                    },
                    {
                        prompt: "Discute el papel de las bibliotecas en el siglo XXI",
                        words: ["acceso", "comunidad", "digital", "conocimiento", "santuario"]
                    },
                    {
                        prompt: "Habla de la importancia del juego para los adultos",
                        words: ["creatividad", "estrés", "conexión", "alegría", "conciencia plena"]
                    },
                    {
                        prompt: "Describe la sensación de estar en una audiencia en vivo (concierto, obra, discurso)",
                        words: ["energía", "compartido", "anticipación", "reacción", "colectivo"]
                    },
                    {
                        prompt: "Discute la ética de la ingeniería genética",
                        words: ["potencial", "riesgos", "ética", "futuro", "modificación"]
                    },
                    {
                        prompt: "Habla de la importancia del ritmo circadiano",
                        words: ["ciclo", "salud", "sueño", "productividad", "alineación"]
                    },
                    {
                        prompt: "Describe cómo le explicarías internet a alguien del pasado",
                        words: ["red", "información", "instantáneo", "global", "revolución"]
                    },
                    {
                        prompt: "Discute la importancia de la conservación marina",
                        words: ["océanos", "biodiversidad", "clima", "contaminación", "gestión"]
                    },
                    {
                        prompt: "Habla del concepto de 'vida lenta'",
                        words: ["intencional", "presente", "calidad", "conciencia plena", "resistencia"]
                    },
                    {
                        prompt: "Describe el papel de un portero o defensor en un deporte de equipo",
                        words: ["presión", "estrategia", "confiabilidad", "anticipación", "crucial"]
                    },
                    {
                        prompt: "Explica por qué es importante la biodiversidad",
                        words: ["ecosistema", "resiliencia", "medicina", "interconectado", "pérdida"]
                    },
                    {
                        prompt: "Discute el impacto del turismo en un destino",
                        words: ["economía", "cultura", "medio ambiente", "infraestructura", "intercambio"]
                    },
                    {
                        prompt: "Habla de la importancia de las cartas escritas a mano",
                        words: ["personal", "considerado", "tangible", "lento", "recuerdo"]
                    },
                    {
                        prompt: "Describe el proceso de preparar café o té",
                        words: ["ritual", "aroma", "técnica", "sabor", "pausa"]
                    },
                    {
                        prompt: "Discute el futuro de la inteligencia artificial en la salud",
                        words: ["diagnóstico", "eficiencia", "personalizado", "ética", "asistencia"]
                    },
                    {
                        prompt: "Habla del simbolismo en una obra de arte o literatura famosa",
                        words: ["significado", "interpretación", "profundidad", "artista", "mensaje"]
                    },
                    {
                        prompt: "Describe los beneficios de los juegos cooperativos sobre los competitivos",
                        words: ["trabajo en equipo", "inclusión", "compartido", "estrategia", "alegría"]
                    },
                    {
                        prompt: "Explica la importancia de preservar los cielos oscuros",
                        words: ["astronomía", "vida silvestre", "contaminación", "asombro", "patrimonio"]
                    },
                    {
                        prompt: "Discute qué hace efectivo el sistema de transporte público de una ciudad",
                        words: ["confiable", "accesible", "asequible", "red", "eficiente"]
                    },
                    {
                        prompt: "Habla de la tradición de la narración oral",
                        words: ["historia", "cultura", "interpretación", "memoria", "conexión"]
                    },
                    {
                        prompt: "Describe la sensación de presenciar un fenómeno natural impresionante",
                        words: ["asombro", "escala", "belleza", "transitorio", "poder"]
                    },
                    {
                        prompt: "Discute la importancia de los alfabetos fonéticos en la comunicación",
                        words: ["claridad", "estandarización", "aviación", "militar", "universal"]
                    },
                    {
                        prompt: "Habla de los desafíos y la belleza de criar hijos",
                        words: ["paciencia", "crecimiento", "incondicional", "sacrificio", "alegría"]
                    },
                    {
                        prompt: "Describe las cualidades ideales de un servidor público",
                        words: ["integridad", "servicio", "transparencia", "empatía", "dedicación"]
                    },
                    {
                        prompt: "Explica la importancia de los animales migratorios",
                        words: ["ciclo", "ecosistema", "viaje", "indicador", "maravilla"]
                    },
                    {
                        prompt: "Discute el papel del silencio en la comunicación",
                        words: ["pausa", "reflexión", "énfasis", "confort", "escucha"]
                    },
                    {
                        prompt: "Habla de la importancia del fracaso en la investigación científica",
                        words: ["hipótesis", "datos", "iteración", "conocimiento", "perseverancia"]
                    },
                    {
                        prompt: "Describe el aspecto comunitario de un mercado de agricultores",
                        words: ["local", "fresco", "interacción", "estacional", "apoyo"]
                    },
                    {
                        prompt: "Discute la psicología del color en el marketing y diseño",
                        words: ["emoción", "asociación", "marca", "influencia", "elección"]
                    },
                    {
                        prompt: "Habla de la importancia de los humedales",
                        words: ["filtro", "inundación", "hábitat", "biodiversidad", "protección"]
                    },
                    {
                        prompt: "Describe el proceso de reconciliación después de un conflicto",
                        words: ["perdón", "diálogo", "sanación", "confianza", "progreso"]
                    },
                    {
                        prompt: "Explica el atractivo de la fotografía analógica en la era digital",
                        words: ["tangible", "proceso", "límite", "autenticidad", "paciencia"]
                    },
                    {
                        prompt: "Discute el futuro de los libros impresos",
                        words: ["táctil", "concentración", "colección", "digital", "perdurable"]
                    },
                    {
                        prompt: "Habla de la importancia de los hongos micorrícicos en los bosques",
                        words: ["red", "simbiosis", "comunicación", "árboles", "fundamental"]
                    },
                    {
                        prompt: "Describe el arte de la negociación",
                        words: ["intereses", "compromiso", "palanca", "resultado", "relación"]
                    },
                    {
                        prompt: "Discute el papel del arte público en espacios urbanos",
                        words: ["embellecimiento", "conversación", "identidad", "accesible", "inspiración"]
                    },
                    {
                        prompt: "Habla de la importancia de los bancos de semillas",
                        words: ["preservación", "diversidad", "futuro", "seguridad", "patrimonio"]
                    },
                    {
                        prompt: "Describe la sensación de dominar una pieza musical difícil",
                        words: ["práctica", "flujo", "expresión", "realización", "conexión"]
                    },
                    {
                        prompt: "Explica el concepto de 'economía circular'",
                        words: ["residuos", "reutilización", "diseño", "sistema", "sostenible"]
                    },
                    {
                        prompt: "Discute el valor de una educación interdisciplinaria",
                        words: ["conexiones", "innovación", "versatilidad", "comprensión", "síntesis"]
                    },
                    {
                        prompt: "Habla de la importancia de los ecosistemas estuarinos",
                        words: ["criadero", "filtro", "biodiversidad", "transición", "protección"]
                    },
                    {
                        prompt: "Describe el proceso de colaboración creativa",
                        words: ["sinergia", "ideas", "retroalimentación", "compromiso", "visión"]
                    },
                    {
                        prompt: "Discute el papel de la sátira en la sociedad",
                        words: ["crítica", "humor", "reflexión", "poder", "conciencia"]
                    },
                    {
                        prompt: "Habla de la importancia de las profundidades oceánicas",
                        words: ["misterio", "exploración", "extremófilos", "clima", "desconocido"]
                    }
                ]
            }
        }
    }
};
