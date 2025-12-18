import { SwapChallenge } from "../../types";

export const frQuestions: SwapChallenge[] = [
    {
        id: "fr-1",
        sentence: "La bonne décision a été prise par le directeur.",
        targetWord: "bonne",
        targetWordIndex: 1,
        options: [
            { word: "judicieuse", score: 100, feedback: "Parfait ! 'Judicieuse' suggère une décision sage et réfléchie." },
            { word: "claire", score: 40, feedback: "Trop simple." },
            { word: "belle", score: 20, feedback: "Inapproprié." },
            { word: "grande", score: 30, feedback: "Vague." }
        ],
        bestAnswer: "judicieuse",
        explanation: "'Judicieuse' qualifie précisément une décision prise avec bon sens."
    },
    {
        id: "fr-2",
        sentence: "Le vent fort soufflait sur la côte.",
        targetWord: "fort",
        targetWordIndex: 2,
        options: [
            { word: "impétueux", score: 100, feedback: "Parfait ! 'Impétueux' décrit un vent violent et rapide." },
            { word: "grand", score: 20, feedback: "Inapproprié." },
            { word: "dur", score: 30, feedback: "Texture." },
            { word: "long", score: 10, feedback: "Dimension." }
        ],
        bestAnswer: "impétueux",
        explanation: "'Impétueux' apporte une dimension dramatique et précise à la force du vent."
    },
    {
        id: "fr-3",
        sentence: "La petite lueur dans le noir nous guidait.",
        targetWord: "petite",
        targetWordIndex: 1,
        options: [
            { word: "courte", score: 20, feedback: "Longueur." },
            { word: "basse", score: 30, feedback: "Hauteur." },
            { word: "ténue", score: 100, feedback: "Parfait ! 'Ténue' signifie très fine et légère, presque invisible." },
            { word: "morte", score: 10, feedback: "Absence de lumière." }
        ],
        bestAnswer: "ténue",
        explanation: "'Ténue' décrit avec précision la fragilité de la lueur dans l'obscurité."
    },
    {
        id: "fr-4",
        sentence: "Le bel opéra a ému tout le public.",
        targetWord: "bel",
        targetWordIndex: 1,
        options: [
            { word: "bon", score: 30, feedback: "Trop vague." },
            { word: "joli", score: 40, feedback: "Trop faible." },
            { word: "magnifique", score: 60, feedback: "Commun." },
            { word: "transcendant", score: 100, feedback: "Parfait ! 'Transcendant' suggère une beauté qui dépasse l'ordinaire." }
        ],
        bestAnswer: "transcendant",
        explanation: "'Transcendant' capture l'impact émotionnel profond de l'opéra."
    },
    {
        id: "fr-5",
        sentence: "Le vieux château dominait la vallée.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "séculaire", score: 100, feedback: "Parfait ! 'Séculaire' signifie qui existe depuis un ou plusieurs siècles." },
            { word: "usé", score: 30, feedback: "État physique." },
            { word: "sale", score: 10, feedback: "Propreté." },
            { word: "grand", score: 20, feedback: "Taille." }
        ],
        bestAnswer: "séculaire",
        explanation: "'Séculaire' souligne l'importance historique et la longévité du château."
    },
    {
        id: "fr-6",
        sentence: "Le gars était très intelligent dans ses affaires.",
        targetWord: "intelligent",
        targetWordIndex: 3,
        options: [
            { word: "astucieux", score: 100, feedback: "Parfait ! 'Astucieux' suggère une intelligence pratique et habile." },
            { word: "beau", score: 10, feedback: "Apparence." },
            { word: "clair", score: 20, feedback: "Vague." },
            { word: "bon", score: 30, feedback: "Vague." }
        ],
        bestAnswer: "astucieux",
        explanation: "'Astucieux' est le mot idéal pour l'habileté dans le monde des affaires."
    },
    {
        id: "fr-7",
        sentence: "La lumière claire du matin nous a réveillés.",
        targetWord: "claire",
        targetWordIndex: 2,
        options: [
            { word: "limpide", score: 100, feedback: "Parfait ! 'Limpide' signifie d'une clarté parfaite." },
            { word: "blanche", score: 30, feedback: "Couleur." },
            { word: "droite", score: 10, feedback: "Direction." },
            { word: "pleine", score: 20, feedback: "Intensité." }
        ],
        bestAnswer: "limpide",
        explanation: "'Limpide' décrit la pureté de la lumière matinale sans ambiguïté."
    },
    {
        id: "fr-8",
        sentence: "Le bruit fort de l'explosion a secoué les vitres.",
        targetWord: "fort",
        targetWordIndex: 2,
        options: [
            { word: "fracassant", score: 100, feedback: "Parfait ! 'Fracassant' décrit un bruit violent qui semble tout briser." },
            { word: "grand", score: 20, feedback: "Taille." },
            { word: "dur", score: 30, feedback: "Texture." },
            { word: "long", score: 10, feedback: "Durée." }
        ],
        bestAnswer: "fracassant",
        explanation: "'Fracassant' rend compte de la violence physique de l'explosion."
    },
    {
        id: "fr-9",
        sentence: "La petite erreur a failli tout gâcher.",
        targetWord: "petite",
        targetWordIndex: 1,
        options: [
            { word: "infime", score: 100, feedback: "Parfait ! 'Infime' signifie extrêmement petite, presque négligeable." },
            { word: "courte", score: 10, feedback: "Longueur." },
            { word: "basse", score: 20, feedback: "Hauteur." },
            { word: "fine", score: 30, feedback: "Épaisseur." }
        ],
        bestAnswer: "infime",
        explanation: "'Infime' souligne que même un détail minuscule peut avoir de grandes conséquences."
    },
    {
        id: "fr-10",
        sentence: "La bonne odeur de la cuisine nous ouvrait l'appétit.",
        targetWord: "bonne",
        targetWordIndex: 1,
        options: [
            { word: "claire", score: 10, feedback: "Vue." },
            { word: "belle", score: 20, feedback: "Apparence." },
            { word: "parfumée", score: 40, feedback: "Trop simple." },
            { word: "alléchante", score: 100, feedback: "Parfait ! 'Alléchante' signifie qui donne envie, qui attire." }
        ],
        bestAnswer: "alléchante",
        explanation: "'Alléchante' lie l'odeur à l'envie de manger, ce qui est le but de la phrase."
    },
    {
        id: "fr-11",
        sentence: "Le voyage long a duré plus de dix heures.",
        targetWord: "long",
        targetWordIndex: 2,
        options: [
            { word: "interminable", score: 100, feedback: "Parfait ! 'Interminable' suggère que le voyage semblait ne jamais finir." },
            { word: "grand", score: 20, feedback: "Taille." },
            { word: "gros", score: 10, feedback: "Volume." },
            { word: "haut", score: 30, feedback: "Hauteur." }
        ],
        bestAnswer: "interminable",
        explanation: "'Interminable' exprime le ressenti subjectif de la durée du voyage."
    },
    {
        id: "fr-12",
        sentence: "Le travail dur a fini par porter ses fruits.",
        targetWord: "dur",
        targetWordIndex: 2,
        options: [
            { word: "laborieux", score: 100, feedback: "Parfait ! 'Laborieux' qualifie un travail exigeant beaucoup d'efforts." },
            { word: "solide", score: 30, feedback: "Résistance." },
            { word: "fort", score: 20, feedback: "Puissance." },
            { word: "lourd", score: 40, feedback: "Poids." }
        ],
        bestAnswer: "laborieux",
        explanation: "'Laborieux' est le terme précis pour un effort soutenu et difficile."
    },
    {
        id: "fr-13",
        sentence: "Le ciel bleu était sans un nuage.",
        targetWord: "bleu",
        targetWordIndex: 1,
        options: [
            { word: "azuré", score: 100, feedback: "Parfait ! 'Azuré' est le terme poétique pour le bleu du ciel." },
            { word: "clair", score: 40, feedback: "Manque de couleur." },
            { word: "net", score: 20, feedback: "Précision." },
            { word: "vide", score: 10, feedback: "Absence." }
        ],
        bestAnswer: "azuré",
        explanation: "'Azuré' évoque la beauté classique d'un ciel d'été parfait."
    },
    {
        id: "fr-14",
        sentence: "L'eau froide de la rivière nous a saisis.",
        targetWord: "froide",
        targetWordIndex: 1,
        options: [
            { word: "glaciale", score: 100, feedback: "Parfait ! 'Glaciale' indique une température extrêmement basse." },
            { word: "basse", score: 20, feedback: "Niveau." },
            { word: "fraîche", score: 40, feedback: "Trop doux." },
            { word: "morte", score: 10, feedback: "Inactif." }
        ],
        bestAnswer: "glaciale",
        explanation: "'Glaciale' justifie le fait d'avoir été 'saisi' par la température."
    },
    {
        id: "fr-15",
        sentence: "Le grand bâtiment bloquait la vue sur la mer.",
        targetWord: "grand",
        targetWordIndex: 1,
        options: [
            { word: "imposant", score: 100, feedback: "Parfait ! 'Imposant' suggère une taille qui domine l'environnement." },
            { word: "haut", score: 40, feedback: "Seulement la hauteur." },
            { word: "large", score: 30, feedback: "Seulement la largeur." },
            { word: "gros", score: 10, feedback: "Volume informe." }
        ],
        bestAnswer: "imposant",
        explanation: "'Imposant' décrit l'effet visuel massif du bâtiment."
    },
    {
        id: "fr-16",
        sentence: "La musique douce calmait les esprits.",
        targetWord: "douce",
        targetWordIndex: 1,
        options: [
            { word: "suave", score: 100, feedback: "Parfait ! 'Suave' signifie d'une douceur agréable et harmonieuse." },
            { word: "basse", score: 30, feedback: "Volume." },
            { word: "fine", score: 20, feedback: "Épaisseur." },
            { word: "lente", score: 40, feedback: "Rythme." }
        ],
        bestAnswer: "suave",
        explanation: "'Suave' qualifie la qualité esthétique et apaisante de la musique."
    },
    {
        id: "fr-17",
        sentence: "Le nouveau projet a été lancé hier.",
        targetWord: "nouveau",
        targetWordIndex: 1,
        options: [
            { word: "novateur", score: 100, feedback: "Parfait ! 'Novateur' suggère l'originalité et le progrès." },
            { word: "frais", score: 20, feedback: "Température/alimentation." },
            { word: "jeune", score: 30, feedback: "Âge." },
            { word: "dernier", score: 40, feedback: "Ordre." }
        ],
        bestAnswer: "novateur",
        explanation: "'Novateur' valorise l'ambition derrière le lancement du projet."
    },
    {
        id: "fr-18",
        sentence: "Le petit ruisseau serpentait dans la forêt.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "fluet", score: 100, feedback: "Parfait ! 'Fluet' signifie mince et gracile." },
            { word: "court", score: 10, feedback: "Longueur." },
            { word: "bas", score: 20, feedback: "Hauteur." },
            { word: "mince", score: 40, feedback: "Trop simple." }
        ],
        bestAnswer: "fluet",
        explanation: "'Fluet' apporte une touche poétique à la description du ruisseau."
    },
    {
        id: "fr-19",
        sentence: "La forte pluie a inondé les rues.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "diluvienne", score: 100, feedback: "Parfait ! 'Diluvienne' qualifie une pluie extrêmement abondante." },
            { word: "grande", score: 20, feedback: "Taille." },
            { word: "dure", score: 30, feedback: "Texture." },
            { word: "longue", score: 10, feedback: "Durée." }
        ],
        bestAnswer: "diluvienne",
        explanation: "'Diluvienne' est le mot exact pour une pluie causant des inondations."
    },
    {
        id: "fr-20",
        sentence: "Le gars était très gentil avec tout le monde.",
        targetWord: "gentil",
        targetWordIndex: 3,
        options: [
            { word: "bienveillant", score: 100, feedback: "Parfait ! 'Bienveillant' signifie qui veut le bien d'autrui." },
            { word: "bon", score: 30, feedback: "Trop vague." },
            { word: "doux", score: 40, feedback: "Caractère calme." },
            { word: "beau", score: 10, feedback: "Apparence." }
        ],
        bestAnswer: "bienveillant",
        explanation: "'Bienveillant' décrit une disposition d'esprit positive envers les autres."
    },
    {
        id: "fr-21",
        sentence: "La lumière brillante des projecteurs nous aveuglait.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "belle", score: 20, feedback: "Esthétique." },
            { word: "blanche", score: 30, feedback: "Couleur." },
            { word: "éblouissante", score: 100, feedback: "Parfait ! 'Éblouissante' signifie qui aveugle par l'éclat." },
            { word: "claire", score: 40, feedback: "Transparence." }
        ],
        bestAnswer: "éblouissante",
        explanation: "'Éblouissante' est le terme précis pour une lumière qui 'aveugle'."
    },
    {
        id: "fr-22",
        sentence: "Le vieux manuscrit était fragile.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "archaïque", score: 100, feedback: "Parfait ! 'Archaïque' souligne l'antiquité et le style d'une époque révolue." },
            { word: "ancien", score: 50, feedback: "Trop commun." },
            { word: "usé", score: 30, feedback: "État." },
            { word: "passé", score: 10, feedback: "Temps." }
        ],
        bestAnswer: "archaïque",
        explanation: "'Archaïque' valorise l'aspect historique et précieux du manuscrit."
    },
    {
        id: "fr-23",
        sentence: "Le silence calme de la nuit était apaisant.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "imperturbable", score: 100, feedback: "Parfait ! 'Imperturbable' suggère un silence que rien ne peut troubler." },
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "vide", score: 30, feedback: "Manque." },
            { word: "fixe", score: 10, feedback: "Immobilité." }
        ],
        bestAnswer: "imperturbable",
        explanation: "'Imperturbable' renforce la profondeur et la stabilité du silence."
    },
    {
        id: "fr-24",
        sentence: "La belle vue depuis le sommet était incroyable.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "panoramique", score: 100, feedback: "Parfait ! 'Panoramique' décrit une vue très étendue." },
            { word: "bonne", score: 20, feedback: "Qualité." },
            { word: "claire", score: 40, feedback: "Visibilité." },
            { word: "jolie", score: 30, feedback: "Faible." }
        ],
        bestAnswer: "panoramique",
        explanation: "'Panoramique' est le terme technique idéal pour une vue depuis un sommet."
    },
    {
        id: "fr-25",
        sentence: "Le petit détail a fait toute la différence.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "subtil", score: 100, feedback: "Parfait ! 'Subtil' signifie délicat et difficile à percevoir." },
            { word: "court", score: 10, feedback: "Longueur." },
            { word: "bas", score: 20, feedback: "Hauteur." },
            { word: "mince", score: 30, feedback: "Épaisseur." }
        ],
        bestAnswer: "subtil",
        explanation: "'Subtil' explique pourquoi le détail était crucial malgré sa petite taille."
    },
    {
        id: "fr-26",
        sentence: "La forte chaleur nous empêchait de sortir.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "accablante", score: 100, feedback: "Parfait ! 'Accablante' décrit une chaleur qui pèse lourdement sur le corps." },
            { word: "grande", score: 20, feedback: "Taille." },
            { word: "dure", score: 30, feedback: "Texture." },
            { word: "longue", score: 10, feedback: "Durée." }
        ],
        bestAnswer: "accablante",
        explanation: "'Accablante' traduit l'impact physique épuisant de la chaleur."
    },
    {
        id: "fr-27",
        sentence: "Le gars était très courageux face au danger.",
        targetWord: "courageux",
        targetWordIndex: 3,
        options: [
            { word: "intrépide", score: 100, feedback: "Parfait ! 'Intrépide' signifie qui ne craint pas le danger." },
            { word: "bon", score: 20, feedback: "Qualité vague." },
            { word: "fort", score: 40, feedback: "Puissance." },
            { word: "bien", score: 10, feedback: "Nonsens." }
        ],
        bestAnswer: "intrépide",
        explanation: "'Intrépide' est la forme noble et précise du courage face au péril."
    },
    {
        id: "fr-28",
        sentence: "La lumière claire de la lune éclairait le sentier.",
        targetWord: "claire",
        targetWordIndex: 1,
        options: [
            { word: "diaphane", score: 100, feedback: "Parfait ! 'Diaphane' signifie qui laisse passer la lumière, très fine." },
            { word: "blanche", score: 30, feedback: "Couleur." },
            { word: "pleine", score: 40, feedback: "Phase lunaire." },
            { word: "droite", score: 10, feedback: "Direction." }
        ],
        bestAnswer: "diaphane",
        explanation: "'Diaphane' évoque la qualité poétique et légère de la lumière lunaire."
    },
    {
        id: "fr-29",
        sentence: "Le bruit fort du tonnerre a résonné.",
        targetWord: "fort",
        targetWordIndex: 1,
        options: [
            { word: "tonitruant", score: 100, feedback: "Parfait ! 'Tonitruant' signifie qui fait un bruit de tonnerre." },
            { word: "grand", score: 20, feedback: "Taille." },
            { word: "dur", score: 30, feedback: "Texture." },
            { word: "long", score: 40, feedback: "Durée." }
        ],
        bestAnswer: "tonitruant",
        explanation: "'Tonitruant' est l'adjectif exact dérivé du mot tonnerre pour décrire son bruit."
    },
    {
        id: "fr-30",
        sentence: "La petite fleur poussait entre les pierres.",
        targetWord: "petite",
        targetWordIndex: 1,
        options: [
            { word: "chétive", score: 100, feedback: "Parfait ! 'Chétive' signifie de faible constitution, maigre." },
            { word: "courte", score: 10, feedback: "Longueur." },
            { word: "basse", score: 30, feedback: "Hauteur." },
            { word: "fine", score: 40, feedback: "Épaisseur." }
        ],
        bestAnswer: "chétive",
        explanation: "'Chétive' souligne la fragilité de la fleur dans un environnement hostile."
    },
    {
        id: "fr-31",
        sentence: "La bonne nouvelle a réjoui toute la famille.",
        targetWord: "bonne",
        targetWordIndex: 1,
        options: [
            { word: "ravissante", score: 100, feedback: "Parfait ! 'Ravissante' exprime une joie intense provoquée par la nouvelle." },
            { word: "claire", score: 20, feedback: "Précision." },
            { word: "belle", score: 40, feedback: "Esthétique." },
            { word: "vraie", score: 30, feedback: "Vérité." }
        ],
        bestAnswer: "ravissante",
        explanation: "'Ravissante' met l'accent sur le sentiment de bonheur engendré."
    },
    {
        id: "fr-32",
        sentence: "Le voyage long a été épuisant.",
        targetWord: "long",
        targetWordIndex: 1,
        options: [
            { word: "fastidieux", score: 100, feedback: "Parfait ! 'Fastidieux' suggère l'ennui causé par la durée." },
            { word: "grand", score: 10, feedback: "Dimension." },
            { word: "dur", score: 30, feedback: "Difficulté." },
            { word: "haut", score: 20, feedback: "Hauteur." }
        ],
        bestAnswer: "fastidieux",
        explanation: "'Fastidieux' décrit le sentiment de lassitude lié à la longueur du voyage."
    },
    {
        id: "fr-33",
        sentence: "Le travail dur exige de la discipline.",
        targetWord: "dur",
        targetWordIndex: 1,
        options: [
            { word: "exigeant", score: 100, feedback: "Parfait ! 'Exigeant' signifie qui demande beaucoup d'efforts et de soin." },
            { word: "solide", score: 20, feedback: "Matériau." },
            { word: "fort", score: 30, feedback: "Intensité." },
            { word: "lourd", score: 10, feedback: "Poids." }
        ],
        bestAnswer: "exigeant",
        explanation: "'Exigeant' lie directement la difficulté du travail à la nécessité de discipline."
    },
    {
        id: "fr-34",
        sentence: "Le ciel bleu annonçait une belle journée.",
        targetWord: "bleu",
        targetWordIndex: 1,
        options: [
            { word: "immaculé", score: 100, feedback: "Parfait ! 'Immaculé' signifie sans aucune tache, d'une pureté totale." },
            { word: "propre", score: 20, feedback: "Propreté." },
            { word: "net", score: 40, feedback: "Visibilité." },
            { word: "vide", score: 30, feedback: "Absence." }
        ],
        bestAnswer: "immaculé",
        explanation: "'Immaculé' renforce l'idée d'une perfection sans nuage."
    },
    {
        id: "fr-35",
        sentence: "L'eau froide de la cascade était rafraîchissante.",
        targetWord: "froide",
        targetWordIndex: 1,
        options: [
            { word: "cinglante", score: 100, feedback: "Parfait ! 'Cinglante' décrit une sensation de froid vif et piquant." },
            { word: "basse", score: 20, feedback: "Niveau." },
            { word: "fraîche", score: 50, feedback: "Trop faible." },
            { word: "morte", score: 10, feedback: "Inactif." }
        ],
        bestAnswer: "cinglante",
        explanation: "'Cinglante' ajoute une dimension sensorielle dynamique à l'eau de la cascade."
    },
    {
        id: "fr-36",
        sentence: "Le grand palais était décoré d'or.",
        targetWord: "grand",
        targetWordIndex: 1,
        options: [
            { word: "somptueux", score: 100, feedback: "Parfait ! 'Somptueux' signifie d'un luxe magnifique." },
            { word: "gros", score: 10, feedback: "Masse." },
            { word: "haut", score: 30, feedback: "Taille." },
            { word: "long", score: 20, feedback: "Distance." }
        ],
        bestAnswer: "somptueux",
        explanation: "'Somptueux' s'accorde avec la richesse évoquée par l'or."
    },
    {
        id: "fr-37",
        sentence: "La musique douce m'aidait à m'endormir.",
        targetWord: "douce",
        targetWordIndex: 1,
        options: [
            { word: "basse", score: 40, feedback: "Volume." },
            { word: "fine", score: 20, feedback: "Qualité." },
            { word: "mélodieuse", score: 60, feedback: "Commun." },
            { word: "lénifiante", score: 100, feedback: "Parfait ! 'Lénifiante' signifie qui calme la douleur ou l'inquiétude." }
        ],
        bestAnswer: "lénifiante",
        explanation: "'Lénifiante' souligne la fonction apaisante et thérapeutique de la musique."
    },
    {
        id: "fr-38",
        sentence: "Le nouveau concept a surpris le jury.",
        targetWord: "nouveau",
        targetWordIndex: 1,
        options: [
            { word: "frais", score: 20, feedback: "Alimentation." },
            { word: "original", score: 50, feedback: "Simple." },
            { word: "pionnier", score: 100, feedback: "Parfait ! 'Pionnier' suggère une approche totalement inédite." },
            { word: "jeune", score: 10, feedback: "Âge." }
        ],
        bestAnswer: "pionnier",
        explanation: "'Pionnier' valorise l'aspect avant-gardiste du concept."
    },
    {
        id: "fr-39",
        sentence: "Le petit animal se cachait dans l'herbe.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "minuscule", score: 100, feedback: "Parfait ! 'Minuscule' insiste sur la taille extrêmement réduite." },
            { word: "court", score: 10, feedback: "Longueur." },
            { word: "bas", score: 20, feedback: "Hauteur." },
            { word: "mince", score: 30, feedback: "Largeur." }
        ],
        bestAnswer: "minuscule",
        explanation: "'Minuscule' aide à visualiser à quel point l'animal est difficile à voir."
    },
    {
        id: "fr-40",
        sentence: "La forte brise gonflait les voiles.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "vigoureuse", score: 100, feedback: "Parfait ! 'Vigoureuse' décrit une force pleine de vie et d'énergie." },
            { word: "grande", score: 10, feedback: "Dimension." },
            { word: "dure", score: 20, feedback: "Texture." },
            { word: "solide", score: 30, feedback: "Résistance." }
        ],
        bestAnswer: "vigoureuse",
        explanation: "'Vigoureuse' rend compte du dynamisme du vent sur les voiles."
    },
    {
        id: "fr-41",
        sentence: "Le gars était très poli avec les clients.",
        targetWord: "poli",
        targetWordIndex: 3,
        options: [
            { word: "bon", score: 20, feedback: "Vague." },
            { word: "obséquieux", score: 30, feedback: "Trop poli, presque faux." },
            { word: "courtois", score: 100, feedback: "Parfait ! 'Courtois' signifie d'une politesse raffinée." },
            { word: "bien", score: 10, feedback: "Adverbe." }
        ],
        bestAnswer: "courtois",
        explanation: "'Courtois' est le terme idéal pour une politesse professionnelle et élégante."
    },
    {
        id: "fr-42",
        sentence: "La lumière brillante du diamant étincelait.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "belle", score: 20, feedback: "Esthétique." },
            { word: "claire", score: 30, feedback: "Transparence." },
            { word: "scintillante", score: 100, feedback: "Parfait ! 'Scintillante' décrit une lumière qui tremble et brille par intermittence." },
            { word: "vraie", score: 40, feedback: "Authenticité." }
        ],
        bestAnswer: "scintillante",
        explanation: "'Scintillante' rend compte de l'effet visuel spécifique du diamant."
    },
    {
        id: "fr-43",
        sentence: "Le vieux mur tombait en ruine.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "délabré", score: 100, feedback: "Parfait ! 'Délabré' signifie qui tombe en ruine par vétusté." },
            { word: "usé", score: 40, feedback: "État." },
            { word: "sale", score: 10, feedback: "Propreté." },
            { word: "bas", score: 20, feedback: "Hauteur." }
        ],
        bestAnswer: "délabré",
        explanation: "'Délabré' est le mot précis pour un objet qui se dégrade avec le temps."
    },
    {
        id: "fr-44",
        sentence: "Le silence calme du désert était impressionnant.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "sépulcral", score: 100, feedback: "Parfait ! 'Sépulcral' suggère un silence profond et inquiétant comme dans une tombe." },
            { word: "bas", score: 10, feedback: "Volume." },
            { word: "vide", score: 40, feedback: "Manque." },
            { word: "long", score: 20, feedback: "Temps." }
        ],
        bestAnswer: "sépulcral",
        explanation: "'Sépulcral' donne une dimension mystérieuse et intense au silence du désert."
    },
    {
        id: "fr-45",
        sentence: "La belle histoire a captivé les enfants.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "féerique", score: 100, feedback: "Parfait ! 'Féerique' suggère la magie et l'enchantement." },
            { word: "bonne", score: 50, feedback: "Trop simple." },
            { word: "vraie", score: 30, feedback: "Réalité." },
            { word: "claire", score: 20, feedback: "Compréhension." }
        ],
        bestAnswer: "féerique",
        explanation: "'Féerique' s'accorde parfaitement avec l'imaginaire des enfants."
    },
    {
        id: "fr-46",
        sentence: "Le petit profit ne justifiait pas le risque.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "dérisoire", score: 100, feedback: "Parfait ! 'Dérisoire' signifie si petit qu'il en est méprisable." },
            { word: "court", score: 10, feedback: "Temps." },
            { word: "bas", score: 30, feedback: "Position." },
            { word: "mince", score: 40, feedback: "Forme." }
        ],
        bestAnswer: "dérisoire",
        explanation: "'Dérisoire' souligne l'absurdité de prendre un risque pour un gain si faible."
    },
    {
        id: "fr-47",
        sentence: "La forte pression a fait céder le barrage.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 20, feedback: "Dimensions." },
            { word: "irrésistible", score: 100, feedback: "Parfait ! 'Irrésistible' signifie à quoi on ne peut pas résister." },
            { word: "dure", score: 30, feedback: "Texture." },
            { word: "longue", score: 10, feedback: "Temps." }
        ],
        bestAnswer: "irrésistible",
        explanation: "'Irrésistible' explique pourquoi le barrage n'a pas pu tenir."
    },
    {
        id: "fr-48",
        sentence: "Le gars était très fier de son travail.",
        targetWord: "fier",
        targetWordIndex: 3,
        options: [
            { word: "bon", score: 20, feedback: "Qualité." },
            { word: "altier", score: 30, feedback: "Fierté excessive et hautaine." },
            { word: "honoré", score: 40, feedback: "Sentiment passif." },
            { word: "orgueilleux", score: 100, feedback: "Parfait ! 'Orgueilleux' suggère une fierté profonde et peut-être excessive." }
        ],
        bestAnswer: "orgueilleux",
        explanation: "'Orgueilleux' apporte une nuance de caractère plus forte que 'fier'."
    },
    {
        id: "fr-49",
        sentence: "La lumière claire de l'aube pointait à l'horizon.",
        targetWord: "claire",
        targetWordIndex: 1,
        options: [
            { word: "blanche", score: 30, feedback: "Couleur." },
            { word: "estompée", score: 100, feedback: "Parfait ! 'Estompée' signifie dont les contours sont adoucis." },
            { word: "pleine", score: 20, feedback: "Plénitude." },
            { word: "droite", score: 10, feedback: "Direction." }
        ],
        bestAnswer: "estompée",
        explanation: "'Estompée' décrit parfaitement la lumière douce et incertaine de l'aube."
    },
    {
        id: "fr-50",
        sentence: "Le bruit fort de la machine nous empêchait de parler.",
        targetWord: "fort",
        targetWordIndex: 1,
        options: [
            { word: "assourdissant", score: 100, feedback: "Parfait ! 'Assourdissant' signifie qui rend sourd par son intensité." },
            { word: "grand", score: 20, feedback: "Taille." },
            { word: "dur", score: 30, feedback: "Texture." },
            { word: "long", score: 10, feedback: "Temps." }
        ],
        bestAnswer: "assourdissant",
        explanation: "'Assourdissant' explique l'impossibilité de tenir une conversation."
    },
    {
        id: "fr-51",
        sentence: "Le soleil brillant brille sur la plage.",
        targetWord: "brillant",
        targetWordIndex: 1,
        options: [
            { word: "radieux", score: 100, feedback: "Parfait ! 'Radieux' exprime une lumière intense et joyeuse." },
            { word: "clair", score: 40, feedback: "Simple." },
            { word: "beau", score: 30, feedback: "Vague." },
            { word: "blanc", score: 20, feedback: "Couleur." }
        ],
        bestAnswer: "radieux",
        explanation: "'Radieux' qualifie un soleil éclatant et bienfaisant."
    },
    {
        id: "fr-52",
        sentence: "Le vieux mur de la ville est classé monument historique.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "médiéval", score: 100, feedback: "Parfait ! 'Médiéval' date le mur de l'époque du Moyen Âge." },
            { word: "antique", score: 40, feedback: "Trop spécifique (Rome/Grèce)." },
            { word: "usé", score: 30, feedback: "État." },
            { word: "passé", score: 10, feedback: "Temps." }
        ],
        bestAnswer: "médiéval",
        explanation: "'Médiéval' est le terme architectural précis pour un mur de ville ancien."
    },
    {
        id: "fr-53",
        sentence: "Le silence calme nous entourait dans la bibliothèque.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "vide", score: 30, feedback: "Manque." },
            { word: "religieux", score: 100, feedback: "Parfait ! 'Religieux' qualifie un silence profond et respectueux." },
            { word: "net", score: 40, feedback: "Visibilité." }
        ],
        bestAnswer: "religieux",
        explanation: "'Religieux' décrit l'atmosphère de respect et de concentration de la bibliothèque."
    },
    {
        id: "fr-54",
        sentence: "La belle forêt abritait de nombreux animaux.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 10, feedback: "Qualité." },
            { word: "claire", score: 40, feedback: "Visibilité." },
            { word: "luxuriante", score: 100, feedback: "Parfait ! 'Luxuriante' décrit une végétation riche and abondante." },
            { word: "jolie", score: 30, feedback: "Faible." }
        ],
        bestAnswer: "luxuriante",
        explanation: "'Luxuriante' souligne la richesse écologique de la forêt."
    },
    {
        id: "fr-55",
        sentence: "Le petit geste a été grandement apprécié.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "minime", score: 40, feedback: "Taille." },
            { word: "court", score: 10, feedback: "Longueur." },
            { word: "insigne", score: 100, feedback: "Parfait ! 'Insigne' qualifie un geste remarquable par sa valeur morale." },
            { word: "bas", score: 20, feedback: "Hauteur." }
        ],
        bestAnswer: "insigne",
        explanation: "'Insigne' valorise la portée morale de ce 'petit' geste."
    },
    {
        id: "fr-56",
        sentence: "La forte demande a épuisé les stocks.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grosse", score: 30, feedback: "Volume." },
            { word: "dure", score: 20, feedback: "Texture." },
            { word: "massive", score: 100, feedback: "Parfait ! 'Massive' suggère une quantité énorme et soudaine." },
            { word: "serrée", score: 10, feedback: "Pression." }
        ],
        bestAnswer: "massive",
        explanation: "'Massive' illustre l'ampleur du flux qui a vidé les stocks."
    },
    {
        id: "fr-57",
        sentence: "Le gars était très intelligent dans sa façon de parler.",
        targetWord: "intelligent",
        targetWordIndex: 3,
        options: [
            { word: "beau", score: 10, feedback: "Apparence." },
            { word: "bon", score: 20, feedback: "Vague." },
            { word: "éloquent", score: 100, feedback: "Parfait ! 'Éloquent' signifie qui s'exprime avec facilité et persuasion." },
            { word: "clair", score: 30, feedback: "Logique." }
        ],
        bestAnswer: "éloquent",
        explanation: "'Éloquent' lie l'intelligence à la maîtrise du langage."
    },
    {
        id: "fr-58",
        sentence: "La lumière brillante des étoiles nous guidait.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "belle", score: 30, feedback: "Simple." },
            { word: "blanche", score: 40, feedback: "Couleur." },
            { word: "sidérale", score: 100, feedback: "Parfait ! 'Sidérale' signifie relatif aux astres." },
            { word: "claire", score: 20, feedback: "Atmosphère." }
        ],
        bestAnswer: "sidérale",
        explanation: "'Sidérale' est le terme astronomique et poétique approprié."
    },
    {
        id: "fr-59",
        sentence: "Le vieux professeur était respecté par tous.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "émérite", score: 100, feedback: "Parfait ! 'Émérite' qualifie un professeur à la retraite mais qui conserve son titre pour son excellence." },
            { word: "ancien", score: 40, feedback: "Simple." },
            { word: "usé", score: 10, feedback: "Péjoratif." },
            { word: "passé", score: 20, feedback: "Temps." }
        ],
        bestAnswer: "émérite",
        explanation: "'Émérite' souligne la reconnaissance académique du professeur."
    },
    {
        id: "fr-60",
        sentence: "Le silence calme de l'église inspirait la prière.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "vide", score: 10, feedback: "Manque." },
            { word: "monacal", score: 100, feedback: "Parfait ! 'Monacal' suggère un silence propre aux monastères, austère et profond." },
            { word: "net", score: 30, feedback: "Clarté." }
        ],
        bestAnswer: "monacal",
        explanation: "'Monacal' renforce le caractère sacré du silence dans l'église."
    },
    {
        id: "fr-61",
        sentence: "La belle mélodie nous a fait rêver.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 20, feedback: "Qualité." },
            { word: "claire", score: 40, feedback: "Son." },
            { word: "envoûtante", score: 100, feedback: "Parfait ! 'Envoûtante' signifie qui exerce un charme puissant." },
            { word: "jolie", score: 30, feedback: "Faible." }
        ],
        bestAnswer: "envoûtante",
        explanation: "'Envoûtante' décrit le pouvoir de séduction de la mélodie."
    },
    {
        id: "fr-62",
        sentence: "Le petit insecte était difficile à voir.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Dimension." },
            { word: "bas", score: 20, feedback: "Hauteur." },
            { word: "imperceptible", score: 100, feedback: "Parfait ! 'Imperceptible' signifie qu'on ne peut presque pas percevoir par les sens." },
            { word: "fin", score: 30, feedback: "Délicatesse." }
        ],
        bestAnswer: "imperceptible",
        explanation: "'Imperceptible' justifie la difficulté de voir l'insecte."
    },
    {
        id: "fr-63",
        sentence: "La forte détermination du champion a payé.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 30, feedback: "Simple." },
            { word: "dure", score: 20, feedback: "Texture." },
            { word: "inébranlable", score: 100, feedback: "Parfait ! 'Inébranlable' signifie qu'on ne peut pas faire varier, très ferme." },
            { word: "longue", score: 10, feedback: "Durée." }
        ],
        bestAnswer: "inébranlable",
        explanation: "'Inébranlable' exprime une force morale que rien ne peut arrêter."
    },
    {
        id: "fr-64",
        sentence: "Le gars était très habile avec ses mains.",
        targetWord: "habile",
        targetWordIndex: 3,
        options: [
            { word: "bon", score: 20, feedback: "Vague." },
            { word: "adroit", score: 50, feedback: "Simple." },
            { word: "prestigieux", score: 10, feedback: "Nonsens." },
            { word: "virtuose", score: 100, feedback: "Parfait ! 'Virtuose' indique une maîtrise technique exceptionnelle." }
        ],
        bestAnswer: "virtuose",
        explanation: "'Virtuose' élève l'habileté au rang d'excellence artistique ou technique."
    },
    {
        id: "fr-65",
        sentence: "La lumière brillante du soleil couchant colorait le ciel.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "belle", score: 30, feedback: "Esthétique." },
            { word: "blanche", score: 20, feedback: "Couleur." },
            { word: "crépusculaire", score: 100, feedback: "Parfait ! 'Crépusculaire' qualifie tout ce qui appartient au crépuscule." },
            { word: "claire", score: 40, feedback: "Visibilité." }
        ],
        bestAnswer: "crépusculaire",
        explanation: "'Crépusculaire' précise le moment exact et l'ambiance de la lumière."
    },
    {
        id: "fr-66",
        sentence: "Le vieux livre contenait des secrets oubliés.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "antique", score: 100, feedback: "Parfait ! 'Antique' évoque un passé très lointain et prestigieux." },
            { word: "usé", score: 30, feedback: "État." },
            { word: "sale", score: 10, feedback: "Propreté." },
            { word: "grand", score: 20, feedback: "Taille." }
        ],
        bestAnswer: "antique",
        explanation: "'Antique' s'accorde avec le mystère des 'secrets oubliés'."
    },
    {
        id: "fr-67",
        sentence: "Le silence calme du sommet était inspirant.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "vide", score: 30, feedback: "Manque." },
            { word: "solennel", score: 100, feedback: "Parfait ! 'Solennel' signifie empreint d'une gravité imposante." },
            { word: "net", score: 40, feedback: "Précision." }
        ],
        bestAnswer: "solennel",
        explanation: "'Solennel' traduit le respect que l'on ressent face à la majesté du sommet."
    },
    {
        id: "fr-68",
        sentence: "La belle robe de mariée attirait tous les regards.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 10, feedback: "Qualité." },
            { word: "claire", score: 30, feedback: "Couleur." },
            { word: "somptueuse", score: 100, feedback: "Parfait ! 'Somptueuse' signifie magnifique et coûteuse." },
            { word: "jolie", score: 40, feedback: "Trop faible." }
        ],
        bestAnswer: "somptueuse",
        explanation: "'Somptueuse' souligne le luxe et l'éclat de la robe de mariée."
    },
    {
        id: "fr-69",
        sentence: "Le petit village semblait endormi.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Dimension." },
            { word: "bas", score: 20, feedback: "Position." },
            { word: "pittoresque", score: 100, feedback: "Parfait ! 'Pittoresque' signifie qui mérite d'être peint, charmant par son originalité." },
            { word: "mince", score: 30, feedback: "Forme." }
        ],
        bestAnswer: "pittoresque",
        explanation: "'Pittoresque' ajoute une note de charme visuel au village."
    },
    {
        id: "fr-70",
        sentence: "La forte influence de cet auteur se fait sentir aujourd'hui.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 40, feedback: "Simple." },
            { word: "dure", score: 20, feedback: "Texture." },
            { word: "prépondérante", score: 100, feedback: "Parfait ! 'Prépondérante' signifie d'un poids dominant." },
            { word: "longue", score: 30, feedback: "Temps." }
        ],
        bestAnswer: "prépondérante",
        explanation: "'Prépondérante' décrit une influence qui l'emporte sur les autres."
    },
    {
        id: "fr-71",
        sentence: "Le gars était très honnête dans son témoignage.",
        targetWord: "honnête",
        targetWordIndex: 3,
        options: [
            { word: "bon", score: 20, feedback: "Vague." },
            { word: "franc", score: 40, feedback: "Simple." },
            { word: "véridique", score: 100, feedback: "Parfait ! 'Véridique' signifie conforme à la vérité." },
            { word: "vrai", score: 30, feedback: "Commun." }
        ],
        bestAnswer: "véridique",
        explanation: "'Véridique' est le terme légal et précis pour un témoignage fidèle aux faits."
    },
    {
        id: "fr-72",
        sentence: "La lumière brillante des phares perçait le brouillard.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "belle", score: 20, feedback: "Esthétique." },
            { word: "blanche", score: 30, feedback: "Couleur." },
            { word: "claire", score: 40, feedback: "Visibilité." },
            { word: "fulgurante", score: 100, feedback: "Parfait ! 'Fulgurante' suggère un éclat vif et puissant comme l'éclair." }
        ],
        bestAnswer: "fulgurante",
        explanation: "'Fulgurante' souligne l'intensité nécessaire pour traverser le brouillard."
    },
    {
        id: "fr-73",
        sentence: "Le vieux mur d'enceinte entourait la cité.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "antique", score: 60, feedback: "Historique." },
            { word: "usé", score: 20, feedback: "État." },
            { word: "séculaire", score: 100, feedback: "Parfait ! 'Séculaire' signifie qui existe depuis des siècles." },
            { word: "passé", score: 10, feedback: "Temps." }
        ],
        bestAnswer: "séculaire",
        explanation: "'Séculaire' insiste sur la persistance de l'ouvrage à travers le temps."
    },
    {
        id: "fr-74",
        sentence: "Le silence calme du petit matin était brisé par les oiseaux.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "vide", score: 30, feedback: "Manque." },
            { word: "limpide", score: 100, feedback: "Parfait ! 'Limpide' signifie clair et sans trouble." },
            { word: "net", score: 40, feedback: "Visibilité." }
        ],
        bestAnswer: "limpide",
        explanation: "'Limpide' décrit la pureté de l'ambiance matinale."
    },
    {
        id: "fr-75",
        sentence: "La belle statue était sculptée dans le marbre.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 10, feedback: "Qualité." },
            { word: "claire", score: 30, feedback: "Couleur." },
            { word: "gracieuse", score: 100, feedback: "Parfait ! 'Gracieuse' souligne l'élégance des formes." },
            { word: "jolie", score: 40, feedback: "Trop simple." }
        ],
        bestAnswer: "gracieuse",
        explanation: "'Gracieuse' exprime la beauté esthétique spécifique d'une sculpture."
    },
    {
        id: "fr-76",
        sentence: "Le petit enfant faisait ses premiers pas.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Taille." },
            { word: "bas", score: 20, feedback: "Hauteur." },
            { word: "jeune", score: 40, feedback: "Âge." },
            { word: "frêle", score: 100, feedback: "Parfait ! 'Frêle' suggère la fragilité touchante de l'enfance." }
        ],
        bestAnswer: "frêle",
        explanation: "'Frêle' souligne la vulnérabilité et la tendresse du moment."
    },
    {
        id: "fr-77",
        sentence: "La forte opposition a retardé le projet de loi.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 50, feedback: "Simple." },
            { word: "dure", score: 30, feedback: "Texture." },
            { word: "farouche", score: 100, feedback: "Parfait ! 'Farouche' qualifie une opposition violente et déterminée." },
            { word: "solide", score: 20, feedback: "Résistance." }
        ],
        bestAnswer: "farouche",
        explanation: "'Farouche' décrit une résistance active et passionnée."
    },
    {
        id: "fr-78",
        sentence: "Le gars était très fier de sa réussite.",
        targetWord: "fier",
        targetWordIndex: 3,
        options: [
            { word: "bon", score: 10, feedback: "Vague." },
            { word: "fort", score: 30, feedback: "Puissance." },
            { word: "noble", score: 100, feedback: "Parfait ! 'Noble' suggère une fierté légitime et élevée." },
            { word: "altier", score: 40, feedback: "Hautain." }
        ],
        bestAnswer: "noble",
        explanation: "'Noble' donne une dimension de dignité à la fierté ressentie."
    },
    {
        id: "fr-79",
        sentence: "La lumière claire de l'hiver est souvent crue.",
        targetWord: "claire",
        targetWordIndex: 1,
        options: [
            { word: "blanche", score: 30, feedback: "Couleur." },
            { word: "pleine", score: 20, feedback: "Intensité." },
            { word: "boréale", score: 100, feedback: "Parfait ! 'Boréale' signifie relatif au nord, à l'hiver." },
            { word: "droite", score: 10, feedback: "Direction." }
        ],
        bestAnswer: "boréale",
        explanation: "'Boréale' ancre la lumière dans son contexte saisonnier et géographique."
    },
    {
        id: "fr-80",
        sentence: "Le bruit fort des vagues s'écrasant sur les rochers.",
        targetWord: "fort",
        targetWordIndex: 1,
        options: [
            { word: "grand", score: 20, feedback: "Taille." },
            { word: "dur", score: 30, feedback: "Texture." },
            { word: "fracassant", score: 100, feedback: "Parfait ! 'Fracassant' décrit un bruit de brisement violent." },
            { word: "long", score: 10, feedback: "Temps." }
        ],
        bestAnswer: "fracassant",
        explanation: "'Fracassant' rend compte de l'impact physique de l'eau sur la pierre."
    },
    {
        id: "fr-81",
        sentence: "La petite maison au bord du lac était charmante.",
        targetWord: "petite",
        targetWordIndex: 1,
        options: [
            { word: "courte", score: 10, feedback: "Dimension." },
            { word: "basse", score: 30, feedback: "Hauteur." },
            { word: "coquette", score: 100, feedback: "Parfait ! 'Coquette' signifie jolie et soignée." },
            { word: "mince", score: 20, feedback: "Forme." }
        ],
        bestAnswer: "coquette",
        explanation: "'Coquette' ajoute une note d'élégance à la petite maison."
    },
    {
        id: "fr-82",
        sentence: "La bonne conduite de l'élève a été remarquée.",
        targetWord: "bonne",
        targetWordIndex: 1,
        options: [
            { word: "claire", score: 20, feedback: "Visibilité." },
            { word: "grande", score: 30, feedback: "Taille." },
            { word: "exemplaire", score: 100, feedback: "Parfait ! 'Exemplaire' signifie qui peut servir de modèle." },
            { word: "belle", score: 40, feedback: "Esthétique." }
        ],
        bestAnswer: "exemplaire",
        explanation: "'Exemplaire' est le mot d'éloge académique idéal."
    },
    {
        id: "fr-83",
        sentence: "Le voyage long nous a permis de réfléchir.",
        targetWord: "long",
        targetWordIndex: 1,
        options: [
            { word: "grand", score: 10, feedback: "Taille." },
            { word: "dur", score: 40, feedback: "Difficulté." },
            { word: "exténuant", score: 100, feedback: "Parfait ! 'Exténuant' signifie qui fatigue à l'extrême." },
            { word: "longuet", score: 20, feedback: "Trop familier." }
        ],
        bestAnswer: "exténuant",
        explanation: "'Exténuant' souligne l'impact physique du voyage important."
    },
    {
        id: "fr-84",
        sentence: "Le travail dur se fait dans les mines.",
        targetWord: "dur",
        targetWordIndex: 1,
        options: [
            { word: "solide", score: 20, feedback: "Matériau." },
            { word: "fort", score: 30, feedback: "Puissance." },
            { word: "lourd", score: 40, feedback: "Poids." },
            { word: "pénible", score: 100, feedback: "Parfait ! 'Pénible' qualifie un travail harassant et usant." }
        ],
        bestAnswer: "pénible",
        explanation: "'Pénible' décrit la dureté physique et morale du travail minier."
    },
    {
        id: "fr-85",
        sentence: "Le ciel bleu se fondait dans l'horizon.",
        targetWord: "bleu",
        targetWordIndex: 1,
        options: [
            { word: "propre", score: 10, feedback: "Propreté." },
            { word: "vide", score: 20, feedback: "Absence." },
            { word: "clair", score: 40, feedback: "Visibilité." },
            { word: "d'azur", score: 100, feedback: "Parfait ! 'D'azur' est le complément de nom poétique pour le ciel." }
        ],
        bestAnswer: "d'azur",
        explanation: "'D'azur' est le terme noble pour le bleu intense du firmament."
    },
    {
        id: "fr-86",
        sentence: "L'eau froide du lac était revitalisante.",
        targetWord: "froide",
        targetWordIndex: 1,
        options: [
            { word: "basse", score: 10, feedback: "Niveau." },
            { word: "fraîche", score: 50, feedback: "Température moyenne." },
            { word: "morte", score: 20, feedback: "Étagnante." },
            { word: "perçante", score: 100, feedback: "Parfait ! 'Perçante' décrit un froid qui traverse le corps." }
        ],
        bestAnswer: "perçante",
        explanation: "'Perçante' souligne la vivacité du froid qui revitalise."
    },
    {
        id: "fr-87",
        sentence: "Le grand palais servait de résidence royale.",
        targetWord: "grand",
        targetWordIndex: 1,
        options: [
            { word: "gros", score: 10, feedback: "Volume." },
            { word: "haut", score: 40, feedback: "Hauteur." },
            { word: "large", score: 20, feedback: "Largeur." },
            { word: "majestueux", score: 100, feedback: "Parfait ! 'Majestueux' signifie qui a une grandeur imposante et digne." }
        ],
        bestAnswer: "majestueux",
        explanation: "'Majestueux' qualifie la noblesse et l'éclat du palais."
    },
    {
        id: "fr-88",
        sentence: "La musique douce résonnait dans la chapelle.",
        targetWord: "douce",
        targetWordIndex: 1,
        options: [
            { word: "basse", score: 40, feedback: "Volume." },
            { word: "fine", score: 20, feedback: "Dimensions." },
            { word: "lente", score: 30, feedback: "Rythme." },
            { word: "harmonieuse", score: 100, feedback: "Parfait ! 'Harmonieuse' souligne l'équilibre et la beauté des sons." }
        ],
        bestAnswer: "harmonieuse",
        explanation: "'Harmonieuse' décrit la qualité intrinsèque de la musique."
    },
    {
        id: "fr-89",
        sentence: "Le nouveau système simplifie les procédures.",
        targetWord: "nouveau",
        targetWordIndex: 1,
        options: [
            { word: "frais", score: 10, feedback: "Nourriture." },
            { word: "jeune", score: 20, feedback: "Âge." },
            { word: "dernier", score: 40, feedback: "Ordre." },
            { word: "inédit", score: 100, feedback: "Parfait ! 'Inédit' signifie qu'on n'a encore jamais vu ou publié." }
        ],
        bestAnswer: "inédit",
        explanation: "'Inédit' souligne l'innovation totale derrière le nouveau système."
    },
    {
        id: "fr-90",
        sentence: "Le petit ruisseau chante sous les arbres.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Distance." },
            { word: "bas", score: 20, feedback: "Hauteur." },
            { word: "mince", score: 30, feedback: "Largeur." },
            { word: "gazouillant", score: 100, feedback: "Parfait ! 'Gazouillant' est le mot idéal pour le bruit de l'eau." }
        ],
        bestAnswer: "gazouillant",
        explanation: "'Gazouillant' personnifie joliment le ruisseau et son bruit."
    },
    {
        id: "fr-91",
        sentence: "La forte brume masquait les montagnes.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 20, feedback: "Étendue." },
            { word: "dure", score: 10, feedback: "Matière." },
            { word: "solide", score: 30, feedback: "Consistance." },
            { word: "opaque", score: 100, feedback: "Parfait ! 'Opaque' signifie qui ne laisse pas passer la lumière." }
        ],
        bestAnswer: "opaque",
        explanation: "'Opaque' explique techniquement pourquoi les montagnes sont masquées."
    },
    {
        id: "fr-92",
        sentence: "Le gars était très reconnaissant de notre aide.",
        targetWord: "reconnaissant",
        targetWordIndex: 3,
        options: [
            { word: "bon", score: 20, feedback: "Vague." },
            { word: "content", score: 40, feedback: "Simple émotion." },
            { word: "bien", score: 10, feedback: "Adverbe." },
            { word: "redevable", score: 100, feedback: "Parfait ! 'Redevable' signifie que l'on a une dette morale envers quelqu'un." }
        ],
        bestAnswer: "redevable",
        explanation: "'Redevable' exprime une gratitude profonde et durable."
    },
    {
        id: "fr-93",
        sentence: "La lumière brillante des bougies dansait sur les murs.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "belle", score: 20, feedback: "Générique." },
            { word: "blanche", score: 10, feedback: "Couleur." },
            { word: "claire", score: 40, feedback: "Intensité." },
            { word: "vacillante", score: 100, feedback: "Parfait ! 'Vacillante' décrit une flamme qui bouge sous l'effet du vent." }
        ],
        bestAnswer: "vacillante",
        explanation: "'Vacillante' décrit le mouvement spécifique de la lumière des bougies."
    },
    {
        id: "fr-94",
        sentence: "Le vieux pont de bois craquait sous nos pas.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "vétuste", score: 100, feedback: "Parfait ! 'Vétuste' signifie usé par le temps, en mauvais état." },
            { word: "usé", score: 40, feedback: "Trop simple." },
            { word: "antique", score: 30, feedback: "Inapproprié ici." },
            { word: "passé", score: 10, feedback: "Temps." }
        ],
        bestAnswer: "vétuste",
        explanation: "'Vétuste' justifie le bruit de craquement et l'état du pont."
    },
    {
        id: "fr-95",
        sentence: "Le silence calme de la salle d'attente était pesant.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "vide", score: 30, feedback: "Manque." },
            { word: "long", score: 40, feedback: "Temps." },
            { word: "oppressant", score: 100, feedback: "Parfait ! 'Oppressant' décrit un silence qui met mal à l'aise." }
        ],
        bestAnswer: "oppressant",
        explanation: "'Oppressant' rend compte de l'atmosphère lourde ressentie."
    },
    {
        id: "fr-96",
        sentence: "La belle vue sur les toits de Paris.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 10, feedback: "Qualité." },
            { word: "claire", score: 40, feedback: "Météo." },
            { word: "jolie", score: 30, feedback: "Faible." },
            { word: "pittoresque", score: 100, feedback: "Parfait ! 'Pittoresque' décrit une vue qui a du charme et du caractère." }
        ],
        bestAnswer: "pittoresque",
        explanation: "'Pittoresque' valorise l'aspect visuel typique des toits de Paris."
    },
    {
        id: "fr-97",
        sentence: "Le petit avantage n'a pas suffi pour gagner.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Longueur." },
            { word: "bas", score: 30, feedback: "Position." },
            { word: "mince", score: 40, feedback: "Largeur." },
            { word: "insignifiant", score: 100, feedback: "Parfait ! 'Insignifiant' signifie sans importance réelle." }
        ],
        bestAnswer: "insignifiant",
        explanation: "'Insignifiant' explique pourquoi l'avantage n'a pas été déterminant."
    },
    {
        id: "fr-98",
        sentence: "La forte volonté de réussir est essentielle.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 30, feedback: "Vague." },
            { word: "dure", score: 10, feedback: "Texture." },
            { word: "longue", score: 20, feedback: "Durée." },
            { word: "inébranlable", score: 100, feedback: "Parfait ! 'Inébranlable' exprime une volonté que rien ne peut faire plier." }
        ],
        bestAnswer: "inébranlable",
        explanation: "'Inébranlable' est le qualificatif idéal pour une volonté forte et constante."
    },
    {
        id: "fr-99",
        sentence: "Le gars était très malin pour éviter les ennuis.",
        targetWord: "malin",
        targetWordIndex: 3,
        options: [
            { word: "bon", score: 20, feedback: "Qualité." },
            { word: "beau", score: 10, feedback: "Apparence." },
            { word: "bien", score: 30, feedback: "Adverbe." },
            { word: "perspicace", score: 100, feedback: "Parfait ! 'Perspicace' signifie qui voit clair, qui a du flair." }
        ],
        bestAnswer: "perspicace",
        explanation: "'Perspicace' souligne l'intelligence de situation et la clairvoyance."
    },
    {
        id: "fr-100",
        sentence: "La lumière claire de la lampe éclairait son travail.",
        targetWord: "claire",
        targetWordIndex: 1,
        options: [
            { word: "blanche", score: 20, feedback: "Couleur." },
            { word: "pleine", score: 30, feedback: "Remplissage." },
            { word: "droite", score: 10, feedback: "Ligne." },
            { word: "focalisée", score: 100, feedback: "Parfait ! 'Focalisée' signifie concentrée sur un point précis." }
        ],
        bestAnswer: "focalisée",
        explanation: "'Focalisée' décrit la précision de l'éclairage sur le plan de travail."
    },
    {
        id: "fr-101",
        sentence: "Le soleil brillant éclairait la pièce.",
        targetWord: "brillant",
        targetWordIndex: 1,
        options: [
            { word: "éblouissant", score: 100, feedback: "Parfait ! 'Éblouissant' décrit une lumière très vive." },
            { word: "clair", score: 40, feedback: "Simple." },
            { word: "beau", score: 20, feedback: "Esthétique." },
            { word: "blanc", score: 30, feedback: "Couleur." }
        ],
        bestAnswer: "éblouissant",
        explanation: "'Éblouissant' renforce l'intensité de la lumière dans la pièce."
    },
    {
        id: "fr-102",
        sentence: "Le vieux bâtiment a été rénové l'an dernier.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "historique", score: 100, feedback: "Parfait ! 'Historique' souligne l'importance et l'ancienneté du bâtiment." },
            { word: "usé", score: 30, feedback: "Dégradé." },
            { word: "sale", score: 10, feedback: "Propreté." },
            { word: "grand", score: 20, feedback: "Taille." }
        ],
        bestAnswer: "historique",
        explanation: "'Historique' est le terme valorisant pour un bâtiment ancien rénové."
    },
    {
        id: "fr-103",
        sentence: "Le silence calme de la forêt nous apaise.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "vide", score: 30, feedback: "Manque." },
            { word: "net", score: 40, feedback: "Précision." },
            { word: "bucolique", score: 100, feedback: "Parfait ! 'Bucolique' évoque la douceur de la vie à la campagne et en forêt." }
        ],
        bestAnswer: "bucolique",
        explanation: "'Bucolique' capture l'harmonie paisible de la nature."
    },
    {
        id: "fr-104",
        sentence: "La belle promenade nous a permis de voir le coucher du soleil.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 10, feedback: "Qualité." },
            { word: "claire", score: 30, feedback: "Météo." },
            { word: "jolie", score: 40, feedback: "Faible." },
            { word: "enchanteresse", score: 100, feedback: "Parfait ! 'Enchanteresse' souligne le charme magique de la promenade." }
        ],
        bestAnswer: "enchanteresse",
        explanation: "'Enchanteresse' s'accorde avec la poésie d'un coucher de soleil."
    },
    {
        id: "fr-105",
        sentence: "Le petit ruisseau traverse le pré.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Longueur." },
            { word: "bas", score: 20, feedback: "Hauteur." },
            { word: "mince", score: 30, feedback: "Largeur." },
            { word: "limpide", score: 100, feedback: "Parfait ! 'Limpide' décrit la pureté et la clarté de l'eau." }
        ],
        bestAnswer: "limpide",
        explanation: "'Limpide' apporte un détail sensoriel qualitatif au ruisseau."
    },
    {
        id: "fr-106",
        sentence: "La forte pression au travail cause du stress.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grosse", score: 40, feedback: "Volume." },
            { word: "dure", score: 20, feedback: "Matière." },
            { word: "serrée", score: 30, feedback: "Espace." },
            { word: "omniprésente", score: 100, feedback: "Parfait ! 'Omniprésente' souligne que la pression est partout." }
        ],
        bestAnswer: "omniprésente",
        explanation: "'Omniprésente' explique pourquoi la pression finit par peser sur le mental."
    },
    {
        id: "fr-107",
        sentence: "Le gars était très intelligent dans sa réplique.",
        targetWord: "intelligent",
        targetWordIndex: 3,
        options: [
            { word: "beau", score: 10, feedback: "Apparence." },
            { word: "bon", score: 20, feedback: "Vague." },
            { word: "pétillant", score: 40, feedback: "Métaphore vive." },
            { word: "spirituel", score: 100, feedback: "Parfait ! 'Spirituel' signifie qui a de l'esprit, de la finesse." }
        ],
        bestAnswer: "spirituel",
        explanation: "'Spirituel' qualifie une intelligence vive et amusante dans la discussion."
    },
    {
        id: "fr-108",
        sentence: "La lumière brillante des bougies créait une ambiance intime.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "belle", score: 30, feedback: "Générique." },
            { word: "blanche", score: 10, feedback: "Couleur." },
            { word: "claire", score: 40, feedback: "Visibilité." },
            { word: "tamisée", score: 100, feedback: "Parfait ! 'Tamisée' décrit une lumière douce et voilée." }
        ],
        bestAnswer: "tamisée",
        explanation: "'Tamisée' est le mot exact pour une ambiance 'intime' créée par les bougies."
    },
    {
        id: "fr-109",
        sentence: "Le vieux professeur nous a transmis sa passion.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "vétéran", score: 40, feedback: "Expérience." },
            { word: "usé", score: 10, feedback: "Négatif." },
            { word: "passé", score: 20, feedback: "Temps." },
            { word: "vénérable", score: 100, feedback: "Parfait ! 'Vénérable' inspire le respect par l'âge et le mérite." }
        ],
        bestAnswer: "vénérable",
        explanation: "'Vénérable' souligne le respect dû au professeur et à son savoir."
    },
    {
        id: "fr-110",
        sentence: "Le silence calme de la bibliothèque était propice à l'étude.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "vide", score: 10, feedback: "Manque." },
            { word: "net", score: 30, feedback: "Précision." },
            { word: "studieux", score: 100, feedback: "Parfait ! 'Studieux' qualifie un silence tourné vers le travail intellectuel." }
        ],
        bestAnswer: "studieux",
        explanation: "'Studieux' caractérise le type de silence que l'on attend dans une bibliothèque."
    },
    {
        id: "fr-111",
        sentence: "La belle exposition d'art a attiré beaucoup de monde.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 10, feedback: "Vague." },
            { word: "claire", score: 20, feedback: "Visibilité." },
            { word: "jolie", score: 40, feedback: "Inapproprié ici." },
            { word: "prestigieuse", score: 100, feedback: "Parfait ! 'Prestigieuse' souligne l'importance et l'éclat de l'exposition." }
        ],
        bestAnswer: "prestigieuse",
        explanation: "'Prestigieuse' justifie l'importante affluence de public."
    },
    {
        id: "fr-112",
        sentence: "Le petit insecte se posa sur la fleur.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Longueur." },
            { word: "bas", score: 20, feedback: "Hauteur." },
            { word: "frêle", score: 100, feedback: "Parfait ! 'Frêle' souligne la légèreté et la fragilité de l'insecte." },
            { word: "fin", score: 40, feedback: "Délicatesse." }
        ],
        bestAnswer: "frêle",
        explanation: "'Frêle' décrit la nature délicate de l'insecte dans ce contexte printanier."
    },
    {
        id: "fr-113",
        sentence: "La forte détermination est la clé du succès.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 50, feedback: "Vague." },
            { word: "dure", score: 20, feedback: "Texture." },
            { word: "longue", score: 30, feedback: "Temps." },
            { word: "indéfectible", score: 100, feedback: "Parfait ! 'Indéfectible' signifie qu'on ne peut pas détruire, très solide." }
        ],
        bestAnswer: "indéfectible",
        explanation: "'Indéfectible' est le qualificatif pour une résolution à toute épreuve."
    },
    {
        id: "fr-114",
        sentence: "Le gars était très doué pour la musique.",
        targetWord: "doué",
        targetWordIndex: 3,
        options: [
            { word: "bon", score: 30, feedback: "Simple." },
            { word: "inspiré", score: 100, feedback: "Parfait ! 'Inspiré' signifie habité par le souffle créateur." },
            { word: "bien", score: 10, feedback: "Adverbe." },
            { word: "clair", score: 20, feedback: "Logique." }
        ],
        bestAnswer: "inspiré",
        explanation: "'Inspiré' valorise la dimension artistique du talent musical."
    },
    {
        id: "fr-115",
        sentence: "La lumière brillante du soleil à midi est aveuglante.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "belle", score: 20, feedback: "Esthétique." },
            { word: "zénithale", score: 100, feedback: "Parfait ! 'Zénithale' qualifie la lumière venant du zénith (midi)." },
            { word: "blanche", score: 30, feedback: "Couleur." },
            { word: "claire", score: 40, feedback: "Précision." }
        ],
        bestAnswer: "zénithale",
        explanation: "'Zénithale' est le terme précis pour la lumière du soleil au milieu de la journée."
    },
    {
        id: "fr-116",
        sentence: "Le vieux document était jauni par le temps.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "ancien", score: 40, feedback: "Générique." },
            { word: "vénérable", score: 60, feedback: "Moral." },
            { word: "séculaire", score: 100, feedback: "Parfait ! 'Séculaire' signifie qui a un ou plusieurs siècles." },
            { word: "passé", score: 20, feedback: "Moment." }
        ],
        bestAnswer: "séculaire",
        explanation: "'Séculaire' souligne le grand âge du document."
    },
    {
        id: "fr-117",
        sentence: "Le silence calme du salon n’était troublé que par le tic-tac.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Son." },
            { word: "ouaté", score: 100, feedback: "Parfait ! 'Ouaté' qualifie un silence doux et comme étouffé." },
            { word: "vide", score: 30, feedback: "Espace." },
            { word: "net", score: 40, feedback: "Précision." }
        ],
        bestAnswer: "ouaté",
        explanation: "'Ouaté' décrit l'ambiance calfeutrée et confortable du salon."
    },
    {
        id: "fr-118",
        sentence: "La belle performance de l’acteur a été saluée par la critique.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 20, feedback: "Simple." },
            { word: "magistrale", score: 100, feedback: "Parfait ! 'Magistrale' signifie d'une maîtrise complète." },
            { word: "claire", score: 30, feedback: "Logique." },
            { word: "jolie", score: 10, feedback: "Peu sérieux." }
        ],
        bestAnswer: "magistrale",
        explanation: "'Magistrale' est l’éloge ultime pour une interprétation artistique."
    },
    {
        id: "fr-119",
        sentence: "Le petit profit n’était pas notre priorité.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Temps." },
            { word: "subalterne", score: 100, feedback: "Parfait ! 'Subalterne' signifie de second ordre, peu important." },
            { word: "bas", score: 20, feedback: "Position." },
            { word: "mince", score: 30, feedback: "Largeur." }
        ],
        bestAnswer: "subalterne",
        explanation: "'Subalterne' qualifie un intérêt qui passe après les autres."
    },
    {
        id: "fr-120",
        sentence: "La forte persuasion de l’orateur a convaincu la foule.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 30, feedback: "Vague." },
            { word: "irrésistible", score: 100, feedback: "Parfait ! 'Irrésistible' qualifie une force à laquelle on ne peut s'opposer." },
            { word: "dure", score: 20, feedback: "Matière." },
            { word: "longue", score: 10, feedback: "Temps." }
        ],
        bestAnswer: "irrésistible",
        explanation: "'Irrésistible' explique pourquoi la foule a été conquise sans réserve."
    },
    {
        id: "fr-121",
        sentence: "Le gars était très courageux pendant l’assaut.",
        targetWord: "courageux",
        targetWordIndex: 3,
        options: [
            { word: "fort", score: 20, feedback: "Physique." },
            { word: "valeureux", score: 100, feedback: "Parfait ! 'Valeureux' souligne le courage et la bravoure au combat." },
            { word: "bon", score: 30, feedback: "Moral." },
            { word: "bien", score: 10, feedback: "Adverbe." }
        ],
        bestAnswer: "valeureux",
        explanation: "'Valeureux' est le terme épique et précis pour le courage guerrier."
    },
    {
        id: "fr-122",
        sentence: "La lumière brillante des vitraux colorait le sol.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "belle", score: 30, feedback: "Générique." },
            { word: "blanche", score: 10, feedback: "Couleur unique." },
            { word: "claire", score: 20, feedback: "Intensité." },
            { word: "irisante", score: 100, feedback: "Parfait ! 'Irisante' décrit une lumière qui change de couleur comme l'arc-en-ciel." }
        ],
        bestAnswer: "irisante",
        explanation: "'Irisante' rend compte du magnifique effet multicolore des vitraux."
    },
    {
        id: "fr-123",
        sentence: "Le vieux château fort se dressait sur la colline.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "ancien", score: 40, feedback: "Commun." },
            { word: "imposant", score: 60, feedback: "Taille." },
            { word: "féodal", score: 100, feedback: "Parfait ! 'Féodal' date précisément le château du système seigneurial." },
            { word: "usé", score: 20, feedback: "État." }
        ],
        bestAnswer: "féodal",
        explanation: "'Féodal' ancre le monument dans sa période historique exacte."
    },
    {
        id: "fr-124",
        sentence: "Le silence calme du monastère était propice au recueillement.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "solennel", score: 40, feedback: "Caractère grave." },
            { word: "mystique", score: 100, feedback: "Parfait ! 'Mystique' donne une dimension spirituelle au silence." },
            { word: "vide", score: 10, feedback: "Inutilité." }
        ],
        bestAnswer: "mystique",
        explanation: "'Mystique' s'accorde avec l'idée de 'recueillement' religieux."
    },
    {
        id: "fr-125",
        sentence: "La belle œuvre fut admirée par tous.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 10, feedback: "Générique." },
            { word: "remarquable", score: 100, feedback: "Parfait ! 'Remarquable' souligne ce qui mérite l'attention par sa qualité." },
            { word: "claire", score: 20, feedback: "Logique." },
            { word: "jolie", score: 30, feedback: "Faible." }
        ],
        bestAnswer: "remarquable",
        explanation: "'Remarquable' justifie l'admiration unanime de l'auditoire."
    },
    {
        id: "fr-126",
        sentence: "Le petit chemin menait directement à la source.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Longueur." },
            { word: "tortueux", score: 100, feedback: "Parfait ! 'Tortueux' signifie qui fait de nombreux détours." },
            { word: "bas", score: 20, feedback: "Hauteur." },
            { word: "mince", score: 30, feedback: "Largeur." }
        ],
        bestAnswer: "tortueux",
        explanation: "'Tortueux' décrit précisément la forme du petit sentier de nature."
    },
    {
        id: "fr-127",
        sentence: "La forte impression que m'a faite ce film reste gravée.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 30, feedback: "Simple." },
            { word: "indélébile", score: 100, feedback: "Parfait ! 'Indélébile' signifie qu'on ne peut pas effacer." },
            { word: "dure", score: 10, feedback: "Matière." },
            { word: "longue", score: 20, feedback: "Durée." }
        ],
        bestAnswer: "indélébile",
        explanation: "'Indélébile' est le terme idéal pour un souvenir 'gravé' dans la mémoire."
    },
    {
        id: "fr-128",
        sentence: "Le gars était très honnête avec ses collègues.",
        targetWord: "honnête",
        targetWordIndex: 3,
        options: [
            { word: "bon", score: 20, feedback: "Vague." },
            { word: "intègre", score: 100, feedback: "Parfait ! 'Intègre' qualifie une honnêteté absolue et incorruptible." },
            { word: "bien", score: 10, feedback: "Adverbe." },
            { word: "vrai", score: 40, feedback: "Simple." }
        ],
        bestAnswer: "intègre",
        explanation: "'Intègre' souligne la droiture morale dans le cadre professionnel."
    },
    {
        id: "fr-129",
        sentence: "La lumière claire de la chandelle vacillait dans le courant d'air.",
        targetWord: "claire",
        targetWordIndex: 1,
        options: [
            { word: "blanche", score: 10, feedback: "Couleur." },
            { word: "jaunâtre", score: 20, feedback: "Nuance." },
            { word: "vacillante", score: 100, feedback: "Parfait ! 'Vacillante' décrit exactement le mouvement de la flamme." },
            { word: "pleine", score: 30, feedback: "Intensité." }
        ],
        bestAnswer: "vacillante",
        explanation: "'Vacillante' rend compte de l'instabilité de la lumière face au vent."
    },
    {
        id: "fr-130",
        sentence: "Le bruit fort du klaxon m'a fait sursauter.",
        targetWord: "fort",
        targetWordIndex: 1,
        options: [
            { word: "grand", score: 10, feedback: "Dimension." },
            { word: "strident", score: 100, feedback: "Parfait ! 'Strident' qualifie un son aigu et perçant." },
            { word: "dur", score: 20, feedback: "Matière." },
            { word: "long", score: 30, feedback: "Durée." }
        ],
        bestAnswer: "strident",
        explanation: "'Strident' capture l'agression sonore typique du klaxon."
    },
    {
        id: "fr-131",
        sentence: "La petite récompense l'a beaucoup touché.",
        targetWord: "petite",
        targetWordIndex: 1,
        options: [
            { word: "courte", score: 10, feedback: "Longueur." },
            { word: "modeste", score: 100, feedback: "Parfait ! 'Modeste' signifie simple, sans ostentation." },
            { word: "basse", score: 20, feedback: "Hauteur." },
            { word: "fine", score: 30, feedback: "Délicatesse." }
        ],
        bestAnswer: "modeste",
        explanation: "'Modeste' valorise le sentiment malgré la faible valeur matérielle."
    },
    {
        id: "fr-132",
        sentence: "La bonne méthode permet de gagner du temps.",
        targetWord: "bonne",
        targetWordIndex: 1,
        options: [
            { word: "claire", score: 30, feedback: "Logique." },
            { word: "rationnelle", score: 100, feedback: "Parfait ! 'Rationnelle' qualifie une méthode basée sur la raison et l'efficacité." },
            { word: "grande", score: 10, feedback: "Taille." },
            { word: "belle", score: 20, feedback: "Esthétique." }
        ],
        bestAnswer: "rationnelle",
        explanation: "'Rationnelle' explique pourquoi la méthode fait gagner du temps."
    },
    {
        id: "fr-133",
        sentence: "Le voyage long à travers le désert fut une épreuve.",
        targetWord: "long",
        targetWordIndex: 1,
        options: [
            { word: "grand", score: 10, feedback: "Dimension." },
            { word: "éprouvant", score: 100, feedback: "Parfait ! 'Éprouvant' souligne la difficulté physique et mentale." },
            { word: "dur", score: 40, feedback: "Simple." },
            { word: "vaste", score: 20, feedback: "Espace." }
        ],
        bestAnswer: "éprouvant",
        explanation: "'Éprouvant' insiste sur la dureté du voyage dans le désert."
    },
    {
        id: "fr-134",
        sentence: "Le travail dur dans les champs épuise le corps.",
        targetWord: "dur",
        targetWordIndex: 1,
        options: [
            { word: "solide", score: 10, feedback: "Résistance." },
            { word: "éreintant", score: 100, feedback: "Parfait ! 'Éreintant' signifie qui brise de fatigue." },
            { word: "fort", score: 20, feedback: "Puissance." },
            { word: "lourd", score: 30, feedback: "Poids." }
        ],
        bestAnswer: "éreintant",
        explanation: "'Éreintant' est le mot le plus fort pour décrire l'épuisement physique."
    },
    {
        id: "fr-135",
        sentence: "Le ciel bleu était parsemé de petits nuages blancs.",
        targetWord: "bleu",
        targetWordIndex: 1,
        options: [
            { word: "propre", score: 10, feedback: "Propreté." },
            { word: "azuré", score: 100, feedback: "Parfait ! 'Azuré' est l'adjectif noble pour le bleu du ciel." },
            { word: "net", score: 40, feedback: "Visibilité." },
            { word: "vide", score: 20, feedback: "Absence." }
        ],
        bestAnswer: "azuré",
        explanation: "'Azuré' apporte une touche de raffinement à la description du ciel."
    },
    {
        id: "fr-136",
        sentence: "L'eau froide de la fontaine nous a désaltérés.",
        targetWord: "froide",
        targetWordIndex: 1,
        options: [
            { word: "basse", score: 10, feedback: "Température." },
            { word: "limpide", score: 100, feedback: "Parfait ! 'Limpide' signifie transparente et pure." },
            { word: "fraîche", score: 60, feedback: "Trop commun." },
            { word: "morte", score: 20, feedback: "Absence." }
        ],
        bestAnswer: "limpide",
        explanation: "'Limpide' souligne la pureté de l'eau de la fontaine."
    },
    {
        id: "fr-137",
        sentence: "Le grand succès de la soirée a surpris les organisateurs.",
        targetWord: "grand",
        targetWordIndex: 1,
        options: [
            { word: "véritable", score: 60, feedback: "Authenticité." },
            { word: "retentissant", score: 100, feedback: "Parfait ! 'Retentissant' qualifie un succès dont tout le monde parle." },
            { word: "haut", score: 20, feedback: "Taille." },
            { word: "large", score: 30, feedback: "Étendue." }
        ],
        bestAnswer: "retentissant",
        explanation: "'Retentissant' illustre l'éclat et la portée du succès de la soirée."
    },
    {
        id: "fr-138",
        sentence: "La musique douce m'aidait à me concentrer.",
        targetWord: "douce",
        targetWordIndex: 1,
        options: [
            { word: "basse", score: 30, feedback: "Volume." },
            { word: "harmonieuse", score: 50, feedback: "Équilibre." },
            { word: "frugale", score: 10, feedback: "Inapproprié." },
            { word: "mélodieuse", score: 100, feedback: "Parfait ! 'Mélodieuse' souligne la qualité plaisante de l'air." }
        ],
        bestAnswer: "mélodieuse",
        explanation: "'Mélodieuse' caractérise la douceur musicale agréable."
    },
    {
        id: "fr-139",
        sentence: "Le nouveau produit sera en vente dès demain.",
        targetWord: "nouveau",
        targetWordIndex: 1,
        options: [
            { word: "frais", score: 20, feedback: "Nourriture." },
            { word: "innovant", score: 100, feedback: "Parfait ! 'Innovant' souligne l'aspect technologique ou original." },
            { word: "jeune", score: 10, feedback: "Âge." },
            { word: "dernier", score: 30, feedback: "Ordre." }
        ],
        bestAnswer: "innovant",
        explanation: "'Innovant' valorise la nouveauté commerciale."
    },
    {
        id: "fr-140",
        sentence: "Le petit geste de gentillesse a égayé ma journée.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Longueur." },
            { word: "spontané", score: 100, feedback: "Parfait ! 'Spontané' signifie qui arrive sans être forcé." },
            { word: "bas", score: 20, feedback: "Hauteur." },
            { word: "mince", score: 30, feedback: "Épaisseur." }
        ],
        bestAnswer: "spontané",
        explanation: "'Spontané' souligne la sincérité du geste de gentillesse."
    },
    {
        id: "fr-141",
        sentence: "La forte brise marine agitait ses cheveux.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 20, feedback: "Dimension." },
            { word: "vive", score: 100, feedback: "Parfait ! 'Vive' décrit une force pleine d'allant et de fraîcheur." },
            { word: "dure", score: 10, feedback: "Lourde." },
            { word: "solide", score: 30, feedback: "Texture." }
        ],
        bestAnswer: "vive",
        explanation: "'Vive' capture le dynamisme et la légèreté de la brise marine."
    },
    {
        id: "fr-142",
        sentence: "Le gars était très honnête, il a rendu le portefeuille trouvé.",
        targetWord: "honnête",
        targetWordIndex: 3,
        options: [
            { word: "bon", score: 20, feedback: "Vague." },
            { word: "scrupuleux", score: 100, feedback: "Parfait ! 'Scrupuleux' signifie qui a beaucoup de rigueur morale." },
            { word: "bien", score: 10, feedback: "Douteux." },
            { word: "vrai", score: 30, feedback: "Simple." }
        ],
        bestAnswer: "scrupuleux",
        explanation: "'Scrupuleux' souligne le respect rigoureux des principes moraux."
    },
    {
        id: "fr-143",
        sentence: "La lumière brillante de la lune éclairait la neige.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "belle", score: 30, feedback: "Esthétique." },
            { word: "argentine", score: 100, feedback: "Parfait ! 'Argentine' qualifie une lumière qui a l'éclat de l'argent." },
            { word: "blanche", score: 40, feedback: "Simple." },
            { word: "claire", score: 20, feedback: "Visibilité." }
        ],
        bestAnswer: "argentine",
        explanation: "'Argentine' est l'adjectif poétique précis pour la lumière lunaire sur la neige."
    },
    {
        id: "fr-144",
        sentence: "Le vieux manuscrit était écrit en latin.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "vétuste", score: 30, feedback: "En mauvais état." },
            { word: "antique", score: 60, feedback: "Hautement historique." },
            { word: "original", score: 100, feedback: "Parfait ! 'Original' souligne qu'il s'agit du texte de base et ancien." },
            { word: "usé", score: 20, feedback: "État physique." }
        ],
        bestAnswer: "original",
        explanation: "'Original' valorise l'authenticité culturelle du manuscrit."
    },
    {
        id: "fr-145",
        sentence: "Le silence calme de la nuit était rassurant.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 10, feedback: "Volume." },
            { word: "profond", score: 40, feedback: "Intense." },
            { word: "apaisant", score: 100, feedback: "Parfait ! 'Apaisant' signifie qui calme et rassure." },
            { word: "vide", score: 20, feedback: "Inutile." }
        ],
        bestAnswer: "apaisant",
        explanation: "'Apaisant' explique pourquoi le silence était 'rassurant'."
    },
    {
        id: "fr-146",
        sentence: "La belle vue sur le lac m'a laissé sans voix.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 10, feedback: "Qualité." },
            { word: "grandiose", score: 100, feedback: "Parfait ! 'Grandiose' signifie d'une grandeur magnifique." },
            { word: "claire", score: 30, feedback: "Visibilité." },
            { word: "jolie", score: 40, feedback: "Faible." }
        ],
        bestAnswer: "grandiose",
        explanation: "'Grandiose' justifie l'émotion de rester 'sans voix' devant le lac."
    },
    {
        id: "fr-147",
        sentence: "Le petit avantage nous a conduits à la défaite.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Dimension." },
            { word: "dérisoire", score: 100, feedback: "Parfait ! 'Dérisoire' souligne le caractère insignifiant de l'avantage." },
            { word: "bas", score: 20, feedback: "Hauteur." },
            { word: "mince", score: 30, feedback: "Largeur." }
        ],
        bestAnswer: "dérisoire",
        explanation: "'Dérisoire' explique pourquoi l'avantage n'a pas pu éviter la défaite."
    },
    {
        id: "fr-148",
        sentence: "La forte pluie a fait déborder la rivière.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 20, feedback: "Étendue." },
            { word: "torrentielle", score: 100, feedback: "Parfait ! 'Torrentielle' qualifie une pluie si forte qu'elle ressemble à un torrent." },
            { word: "dure", score: 10, feedback: "Texture." },
            { word: "longue", score: 30, feedback: "Durée." }
        ],
        bestAnswer: "torrentielle",
        explanation: "'Torrentielle' est le terme exact pour la pluie responsable du débordement."
    },
    {
        id: "fr-149",
        sentence: "Le gars était très fier de ses racines.",
        targetWord: "fier",
        targetWordIndex: 3,
        options: [
            { word: "bon", score: 10, feedback: "Vague." },
            { word: "attaché", score: 100, feedback: "Parfait ! 'Attaché' souligne le lien affectif profond avec les racines." },
            { word: "haut", score: 20, feedback: "Hauteur." },
            { word: "vrai", score: 30, feedback: "Simple." }
        ],
        bestAnswer: "attaché",
        explanation: "'Attaché' exprime une fidélité émotionnelle forte aux racines."
    },
    {
        id: "fr-150",
        sentence: "La lumière claire de l'été nous fait chaud au cœur.",
        targetWord: "claire",
        targetWordIndex: 1,
        options: [
            { word: "blanche", score: 20, feedback: "Couleur." },
            { word: "radieuse", score: 100, feedback: "Parfait ! 'Radieuse' signifie qui rayonne de joie et de lumière." },
            { word: "pleine", score: 30, feedback: "Volume." },
            { word: "droite", score: 10, feedback: "Direction." }
        ],
        bestAnswer: "radieuse",
        explanation: "'Radieuse' capture le sentiment de bonheur lié à la lumière estivale."
    },
    {
        id: "fr-151",
        sentence: "Le soleil brillant chauffait la terrasse.",
        targetWord: "brillant",
        targetWordIndex: 1,
        options: [
            { word: "ardent", score: 100, feedback: "Parfait ! 'Ardent' décrit une chaleur solaire intense." },
            { word: "clair", score: 30, feedback: "Brillance seule." },
            { word: "blanc", score: 20, feedback: "Couleur." },
            { word: "beau", score: 40, feedback: "Vague." }
        ],
        bestAnswer: "ardent",
        explanation: "'Ardent' capture à la fois l'éclat et la force thermique du soleil."
    },
    {
        id: "fr-152",
        sentence: "Le vieux mur d'enceinte fut détruit durant la guerre.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "antique", score: 50, feedback: "Très ancien." },
            { word: "fortifié", score: 100, feedback: "Parfait ! 'Fortifié' décrit un mur conçu pour la défense." },
            { word: "usé", score: 30, feedback: "État." },
            { word: "bas", score: 20, feedback: "Hauteur." }
        ],
        bestAnswer: "fortifié",
        explanation: "'Fortifié' est le terme exact pour un mur militaire défensif."
    },
    {
        id: "fr-153",
        sentence: "Le silence calme de la crypte imposait le respect.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "sépulcral", score: 100, feedback: "Parfait ! 'Sépulcral' suggère un silence profond de tombeau." },
            { word: "vide", score: 30, feedback: "Manque." },
            { word: "froid", score: 40, feedback: "Température." }
        ],
        bestAnswer: "sépulcral",
        explanation: "'Sépulcral' donne une profondeur historique et grave au silence de la crypte."
    },
    {
        id: "fr-154",
        sentence: "La belle performance de la gymnaste fut applaudie.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 20, feedback: "Simple." },
            { word: "athlétique", score: 40, feedback: "Description technique." },
            { word: "éclatante", score: 100, feedback: "Parfait ! 'Éclatante' souligne le brio et le succès de la performance." },
            { word: "jolie", score: 10, feedback: "Peu sérieux." }
        ],
        bestAnswer: "éclatante",
        explanation: "'Éclatante' exprime la réussite brillante et visible de la gymnaste."
    },
    {
        id: "fr-155",
        sentence: "Le petit détail technique changea toute la donne.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Dimension." },
            { word: "insoupçonné", score: 100, feedback: "Parfait ! 'Insoupçonné' souligne que le détail était caché ou ignoré." },
            { word: "bas", score: 20, feedback: "Hauteur." },
            { word: "fin", score: 30, feedback: "Délicatesse." }
        ],
        bestAnswer: "insoupçonné",
        explanation: "'Insoupçonné' explique l'effet de surprise du changement."
    },
    {
        id: "fr-156",
        sentence: "La forte pluie d'orage s'est abattue soudainement.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grosse", score: 20, feedback: "Gouttes." },
            { word: "impétueuse", score: 100, feedback: "Parfait ! 'Impétueuse' décrit une force rapide et violente." },
            { word: "dure", score: 10, feedback: "Texture." },
            { word: "serrée", score: 30, feedback: "Densité." }
        ],
        bestAnswer: "impétueuse",
        explanation: "'Impétueuse' rend compte de la soudaineté et de la violence de l'averse."
    },
    {
        id: "fr-157",
        sentence: "Le gars était très intelligent dans sa gestion de crise.",
        targetWord: "intelligent",
        targetWordIndex: 3,
        options: [
            { word: "beau", score: 10, feedback: "Apparence." },
            { word: "bon", score: 20, feedback: "Vague." },
            { word: "lucide", score: 100, feedback: "Parfait ! 'Lucide' signifie qui voit clairement et sans erreur." },
            { word: "clair", score: 30, feedback: "Logique." }
        ],
        bestAnswer: "lucide",
        explanation: "'Lucide' est la qualité première pour gérer efficacement une crise."
    },
    {
        id: "fr-158",
        sentence: "La lumière brillante de l'écran fatiguait ses yeux.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "belle", score: 20, feedback: "Générique." },
            { word: "agressive", score: 100, feedback: "Parfait ! 'Agressive' souligne l'impact négatif de la lumière." },
            { word: "blanche", score: 10, feedback: "Couleur." },
            { word: "claire", score: 40, feedback: "Transparence." }
        ],
        bestAnswer: "agressive",
        explanation: "'Agressive' explique pourquoi l'œil se fatigue devant l'écran."
    },
    {
        id: "fr-159",
        sentence: "Le vieux pont fut emporté par la crue.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "antique", score: 40, feedback: "Ancien." },
            { word: "caduc", score: 100, feedback: "Parfait ! 'Caduc' signifie qui tombe, qui est à son terme." },
            { word: "usé", score: 30, feedback: "État physique." },
            { word: "bas", score: 20, feedback: "Position." }
        ],
        bestAnswer: "caduc",
        explanation: "'Caduc' souligne la fragilité structurelle du pont face à l'eau."
    },
    {
        id: "fr-160",
        sentence: "Le silence calme de la chambre d'hôtel était reposant.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "imperturbable", score: 100, feedback: "Parfait ! 'Imperturbable' suggère un calme total que rien ne vient troubler." },
            { word: "vide", score: 10, feedback: "Manque." },
            { word: "net", score: 30, feedback: "Précision." }
        ],
        bestAnswer: "imperturbable",
        explanation: "'Imperturbable' renforce la qualité du repos trouvé dans la chambre."
    },
    {
        id: "fr-161",
        sentence: "Le soleil brillant brille sur les cimes.",
        targetWord: "brillant",
        targetWordIndex: 1,
        options: [
            { word: "éblouissant", score: 40, feedback: "Simple." },
            { word: "incandescent", score: 100, feedback: "Parfait ! 'Incandescent' suggère une lumière blanche et brûlante." },
            { word: "blanc", score: 20, feedback: "Couleur." },
            { word: "vif", score: 10, feedback: "Vitesse." }
        ],
        bestAnswer: "incandescent",
        explanation: "'Incandescent' capture la force extrême de la lumière sur les sommets."
    },
    {
        id: "fr-162",
        sentence: "Le vieux mur s'effondrait sous le poids du lierre.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "décrépit", score: 100, feedback: "Parfait ! 'Décrépit' signifie qui tombe en ruine de vieillesse." },
            { word: "antique", score: 30, feedback: "Noble." },
            { word: "usé", score: 40, feedback: "Simple." },
            { word: "grand", score: 20, feedback: "Taille." }
        ],
        bestAnswer: "décrépit",
        explanation: "'Décrépit' est le terme exact pour une structure en ruine."
    },
    {
        id: "fr-163",
        sentence: "Le silence calme du jardin au soir était magique.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "serein", score: 100, feedback: "Parfait ! 'Serein' signifie calme et paisible sans trouble." },
            { word: "vide", score: 30, feedback: "Espace." },
            { word: "clair", score: 40, feedback: "Vue." }
        ],
        bestAnswer: "serein",
        explanation: "'Serein' exprime le calme paisible idéal d'un jardin."
    },
    {
        id: "fr-164",
        sentence: "La belle prestation du ténor a enchanté l’opéra.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 10, feedback: "Simple." },
            { word: "vibrante", score: 100, feedback: "Parfait ! 'Vibrante' souligne l'émotion et la force vocale." },
            { word: "claire", score: 30, feedback: "Logique." },
            { word: "jolie", score: 20, feedback: "Faible." }
        ],
        bestAnswer: "vibrante",
        explanation: "'Vibrante' capture la dimension sonore et émotionnelle du chant."
    },
    {
        id: "fr-165",
        sentence: "Le petit avantage stratégique débloqua la situation.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Dimension." },
            { word: "décisif", score: 100, feedback: "Parfait ! 'Décisif' signifie qui emporte la décision." },
            { word: "bas", score: 30, feedback: "Position." },
            { word: "fin", score: 20, feedback: "Manque." }
        ],
        bestAnswer: "décisif",
        explanation: "'Décisif' explique l’impact de l’avantage sur l’issue finale."
    },
    {
        id: "fr-166",
        sentence: "Le soleil brillant éclairait la campagne.",
        targetWord: "brillant",
        targetWordIndex: 1,
        options: [
            { word: "clair", score: 40, feedback: "Simple." },
            { word: "beau", score: 20, feedback: "Esthétique." },
            { word: "radieux", score: 100, feedback: "Parfait ! 'Radieux' suggère un éclat joyeux et puissant." },
            { word: "blanc", score: 30, feedback: "Couleur." }
        ],
        bestAnswer: "radieux",
        explanation: "'Radieux' qualifie un soleil éclatant au-dessus d'un paysage."
    },
    {
        id: "fr-167",
        sentence: "Le vieux château gardait l'entrée du défilé.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "antique", score: 40, feedback: "Temps." },
            { word: "redoutable", score: 100, feedback: "Parfait ! 'Redoutable' souligne sa fonction militaire imposante." },
            { word: "usé", score: 20, feedback: "État." },
            { word: "bas", score: 30, feedback: "Taille." }
        ],
        bestAnswer: "redoutable",
        explanation: "'Redoutable' valorise l'aspect défensif du château fort."
    },
    {
        id: "fr-168",
        sentence: "Le silence calme de la salle était impressionnant.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "vide", score: 20, feedback: "Espace." },
            { word: "total", score: 40, feedback: "Simple." },
            { word: "saisissant", score: 100, feedback: "Parfait ! 'Saisissant' souligne l'impact immédiat sur le public." }
        ],
        bestAnswer: "saisissant",
        explanation: "'Saisissant' rend compte de l'effet émotionnel du calme absolu."
    },
    {
        id: "fr-169",
        sentence: "La belle rivière coulait doucement.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 10, feedback: "Qualité." },
            { word: "limpide", score: 30, feedback: "Visibilité." },
            { word: "majestueuse", score: 100, feedback: "Parfait ! 'Majestueuse' décrit une rivière imposante et noble." },
            { word: "claire", score: 40, feedback: "Visibilité." }
        ],
        bestAnswer: "majestueuse",
        explanation: "'Majestueuse' ancre le cours d'eau dans une dimension de grandeur."
    },
    {
        id: "fr-170",
        sentence: "Le petit ruisseau se transformait en torrent.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Longueur." },
            { word: "bas", score: 20, feedback: "Position." },
            { word: "étroit", score: 40, feedback: "Largeur." },
            { word: "anodin", score: 100, feedback: "Parfait ! 'Anodin' souligne le contraste entre le début simple et le torrent." }
        ],
        bestAnswer: "anodin",
        explanation: "'Anodin' met en relief la transformation spectaculaire de l'eau."
    },
    {
        id: "fr-171",
        sentence: "Le soleil brillant tapait sur les toits.",
        targetWord: "brillant",
        targetWordIndex: 1,
        options: [
            { word: "plombant", score: 100, feedback: "Parfait ! 'Plombant' décrit un soleil dont on sent le poids thermique." },
            { word: "clair", score: 20, feedback: "Vision." },
            { word: "blanc", score: 30, feedback: "Couleur." },
            { word: "beau", score: 40, feedback: "Vague." }
        ],
        bestAnswer: "plombant",
        explanation: "'Plombant' souligne l'accablement dû à une chaleur intense."
    },
    {
        id: "fr-172",
        sentence: "Le vieux manuscrit fut retrouvé dans les archives.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "antique", score: 40, feedback: "Noble." },
            { word: "inédit", score: 100, feedback: "Parfait ! 'Inédit' souligne que le texte n'a jamais été publié." },
            { word: "usé", score: 20, feedback: "Physique." },
            { word: "grand", score: 30, feedback: "Taille." }
        ],
        bestAnswer: "inédit",
        explanation: "'Inédit' est la découverte la plus précieuse dans des archives."
    },
    {
        id: "fr-173",
        sentence: "Le silence calme de l'océan m'intriguait.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "mystérieux", score: 40, feedback: "Intrigue." },
            { word: "insondable", score: 100, feedback: "Parfait ! 'Insondable' suggère une profondeur que l'on ne peut mesurer." },
            { word: "vide", score: 10, feedback: "Inutile." }
        ],
        bestAnswer: "insondable",
        explanation: "'Insondable' ancre le silence dans la profondeur marine."
    },
    {
        id: "fr-174",
        sentence: "La belle aventure touchait à sa fin.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 10, feedback: "Vague." },
            { word: "épique", score: 100, feedback: "Parfait ! 'Épique' souligne le caractère héroïque de l'aventure." },
            { word: "claire", score: 20, feedback: "Logique." },
            { word: "jolie", score: 30, feedback: "Faible." }
        ],
        bestAnswer: "épique",
        explanation: "'Épique' valorise l'ampleur et la dimension héroïque des évènements."
    },
    {
        id: "fr-175",
        sentence: "Le petit geste de sa main indiquait la direction.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Dimension." },
            { word: "bas", score: 20, feedback: "Position." },
            { word: "furtif", score: 100, feedback: "Parfait ! 'Furtif' signifie rapide et presque invisible." },
            { word: "mince", score: 30, feedback: "Largeur." }
        ],
        bestAnswer: "furtif",
        explanation: "'Furtif' apporte une dimension de rapidité et de discrétion au geste."
    },
    {
        id: "fr-176",
        sentence: "La musique douce s'estompa.",
        targetWord: "douce",
        targetWordIndex: 1,
        options: [
            { word: "basse", score: 10, feedback: "Volume." },
            { word: "fine", score: 20, feedback: "Dimension." },
            { word: "faible", score: 30, feedback: "Force." },
            { word: "évanescente", score: 100, feedback: "Parfait ! 'Évanescente' signifie qui disparaît peu à peu." }
        ],
        bestAnswer: "évanescente",
        explanation: "'Évanescente' décrit poétiquement l'affaiblissement de la musique."
    },
    {
        id: "fr-177",
        sentence: "Le nouveau parfum évoque le printemps.",
        targetWord: "nouveau",
        targetWordIndex: 1,
        options: [
            { word: "frais", score: 40, feedback: "Lien printanier." },
            { word: "pur", score: 20, feedback: "Nuance." },
            { word: "novateur", score: 30, feedback: "Technique." },
            { word: "subtil", score: 100, feedback: "Parfait ! 'Subtil' qualifie une fragrance délicate et fine." }
        ],
        bestAnswer: "subtil",
        explanation: "'Subtil' est le qualificatif pour un parfum de qualité."
    },
    {
        id: "fr-178",
        sentence: "Le petit profit fut réinvesti.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Temps." },
            { word: "modeste", score: 50, feedback: "Taille." },
            { word: "marginal", score: 20, feedback: "Position." },
            { word: "congrûment", score: 100, feedback: "Parfait ! 'Congru' signifie ici qui convient tout juste, minime." }
        ],
        bestAnswer: "congrûment",
        explanation: "'Congru' souligne la précision du profit juste nécessaire."
    },
    {
        id: "fr-179",
        sentence: "La forte influence de la mode se voit partout.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 40, feedback: "Vague." },
            { word: "dure", score: 10, feedback: "Matière." },
            { word: "intense", score: 30, feedback: "Force." },
            { word: "prépondérante", score: 100, feedback: "Parfait ! 'Prépondérante' signifie qui l'emporte sur les autres." }
        ],
        bestAnswer: "prépondérante",
        explanation: "'Prépondérante' exprime une influence dominante."
    },
    {
        id: "fr-180",
        sentence: "Le gars était très fier de sa nouvelle voiture.",
        targetWord: "fier",
        targetWordIndex: 3,
        options: [
            { word: "bon", score: 10, feedback: "Vague." },
            { word: "altier", score: 20, feedback: "Hautain." },
            { word: "content", score: 30, feedback: "Simple." },
            { word: "orgueilleux", score: 100, feedback: "Parfait ! 'Orgueilleux' suggère une fierté très marquée." }
        ],
        bestAnswer: "orgueilleux",
        explanation: "'Orgueilleux' exprime une satisfaction intense et démonstrative."
    },
    {
        id: "fr-181",
        sentence: "La lumière claire de l'ampoule grésillait.",
        targetWord: "claire",
        targetWordIndex: 1,
        options: [
            { word: "blanche", score: 20, feedback: "Couleur." },
            { word: "artificielle", score: 40, feedback: "Nature." },
            { word: "crue", score: 30, feedback: "Dureté." },
            { word: "vacillante", score: 100, feedback: "Parfait ! 'Vacillante' correspond au grésillement électrique." }
        ],
        bestAnswer: "vacillante",
        explanation: "'Vacillante' rend compte de l'instabilité de la source lumineuse."
    },
    {
        id: "fr-182",
        sentence: "Le bruit fort du moteur indiquait une panne.",
        targetWord: "fort",
        targetWordIndex: 1,
        options: [
            { word: "grand", score: 10, feedback: "Dimension." },
            { word: "rauque", score: 20, feedback: "Voix." },
            { word: "nase", score: 10, feedback: "Argot." },
            { word: "discontinu", score: 100, feedback: "Parfait ! 'Discontinu' précise que le bruit n'est pas régulier, signe de panne." }
        ],
        bestAnswer: "discontinu",
        explanation: "'Discontinu' apporte une précision de diagnostic au bruit du moteur."
    },
    {
        id: "fr-183",
        sentence: "La petite récompense fut une surprise.",
        targetWord: "petite",
        targetWordIndex: 1,
        options: [
            { word: "courte", score: 10, feedback: "Longueur." },
            { word: "basse", score: 20, feedback: "Position." },
            { word: "belle", score: 40, feedback: "Vague." },
            { word: "inattendue", score: 100, feedback: "Parfait ! 'Inattendue' renforce l'aspect 'surprise'." }
        ],
        bestAnswer: "inattendue",
        explanation: "'Inattendue' renforce le sentiment de surprise lié à la récompense."
    },
    {
        id: "fr-184",
        sentence: "La bonne décision a sauvé l'entreprise.",
        targetWord: "bonne",
        targetWordIndex: 1,
        options: [
            { word: "claire", score: 30, feedback: "Logique." },
            { word: "salutaire", score: 100, feedback: "Parfait ! 'Salutaire' signifie qui procure le salut, qui sauve." },
            { word: "belle", score: 10, feedback: "Esthétique." },
            { word: "vraie", score: 20, feedback: "Réalité." }
        ],
        bestAnswer: "salutaire",
        explanation: "'Salutaire' est le mot précis pour une décision qui évite la catastrophe."
    },
    {
        id: "fr-185",
        sentence: "Le voyage long fut rempli de péripéties.",
        targetWord: "long",
        targetWordIndex: 1,
        options: [
            { word: "grand", score: 10, feedback: "Taille." },
            { word: "épique", score: 40, feedback: "Héroïque." },
            { word: "mouvementé", score: 100, feedback: "Parfait ! 'Mouvementé' signifie riche en incidents." },
            { word: "dur", score: 20, feedback: "Simple." }
        ],
        bestAnswer: "mouvementé",
        explanation: "'Mouvementé' s'accorde avec l'idée de 'péripéties'."
    },
    {
        id: "fr-186",
        sentence: "Le travail dur a été reconnu par la direction.",
        targetWord: "dur",
        targetWordIndex: 1,
        options: [
            { word: "solide", score: 20, feedback: "Texture." },
            { word: "méritant", score: 50, feedback: "Personne." },
            { word: "intense", score: 30, feedback: "Force." },
            { word: "remarquable", score: 100, feedback: "Parfait ! 'Remarquable' souligne la qualité exceptionnelle du travail." }
        ],
        bestAnswer: "remarquable",
        explanation: "'Remarquable' explique pourquoi le travail a été officiellement reconnu."
    },
    {
        id: "fr-187",
        sentence: "Le ciel bleu offrait un spectacle magnifique.",
        targetWord: "bleu",
        targetWordIndex: 1,
        options: [
            { word: "propre", score: 10, feedback: "Propreté." },
            { word: "net", score: 20, feedback: "Clarté." },
            { word: "indigo", score: 40, feedback: "Nuance." },
            { word: "radieux", score: 100, feedback: "Parfait ! 'Radieux' exprime l'éclat général du ciel." }
        ],
        bestAnswer: "radieux",
        explanation: "'Radieux' participe à la dimension du spectacle magnifique."
    },
    {
        id: "fr-188",
        sentence: "L'eau froide nous a réveillés instantanément.",
        targetWord: "froide",
        targetWordIndex: 1,
        options: [
            { word: "basse", score: 10, feedback: "Niveau." },
            { word: "vive", score: 100, feedback: "Parfait ! 'Vive' souligne l'énergie rafraîchissante de l'eau." },
            { word: "fraîche", score: 30, feedback: "Moyen." },
            { word: "morte", score: 20, feedback: "Étagnante." }
        ],
        bestAnswer: "vive",
        explanation: "'Vive' correspond à l'effet de réveil instantané."
    },
    {
        id: "fr-189",
        sentence: "Le grand palais possédait des jardins immenses.",
        targetWord: "grand",
        targetWordIndex: 1,
        options: [
            { word: "gros", score: 10, feedback: "Volume." },
            { word: "vaste", score: 40, feedback: "Espace." },
            { word: "somptueux", score: 100, feedback: "Parfait ! 'Somptueux' suggère la richesse et l'éclat du palais." },
            { word: "haut", score: 30, feedback: "Taille." }
        ],
        bestAnswer: "somptueux",
        explanation: "'Somptueux' s'harmonise avec l'idée de grandeur et de luxe."
    },
    {
        id: "fr-190",
        sentence: "La musique douce réchauffait l'atmosphère du café.",
        targetWord: "douce",
        targetWordIndex: 1,
        options: [
            { word: "basse", score: 20, feedback: "Volume." },
            { word: "feutrée", score: 100, feedback: "Parfait ! 'Feutrée' décrit une ambiance sonore tamisée et intime." },
            { word: "belle", score: 40, feedback: "Vague." },
            { word: "fine", score: 10, feedback: "Dimension." }
        ],
        bestAnswer: "feutrée",
        explanation: "'Feutrée' correspond au cadre chaleureux d'un café."
    },
    {
        id: "fr-191",
        sentence: "Le nouveau projet verra le jour bientôt.",
        targetWord: "nouveau",
        targetWordIndex: 1,
        options: [
            { word: "ambitieux", score: 100, feedback: "Parfait ! 'Ambitieux' souligne l'ampleur du nouveau projet." },
            { word: "frais", score: 20, feedback: "Nouveauté." },
            { word: "jeune", score: 10, feedback: "Âge." },
            { word: "dernier", score: 30, feedback: "Ordre." }
        ],
        bestAnswer: "ambitieux",
        explanation: "'Ambitieux' qualifie positivement la portée du lancement."
    },
    {
        id: "fr-192",
        sentence: "Le petit animal s'est enfui à notre approche.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Longueur." },
            { word: "bas", score: 20, feedback: "Position." },
            { word: "farouche", score: 100, feedback: "Parfait ! 'Farouche' signifie sauvage, qui fuit la présence humaine." },
            { word: "mince", score: 30, feedback: "Largeur." }
        ],
        bestAnswer: "farouche",
        explanation: "'Farouche' explique pourquoi l'animal a pris la fuite."
    },
    {
        id: "fr-193",
        sentence: "La forte brise nous a rafraîchis après la marche.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 20, feedback: "Étendue." },
            { word: "bienfaisante", score: 100, feedback: "Parfait ! 'Bienfaisante' souligne l'effet positif ressenti." },
            { word: "dure", score: 10, feedback: "Texture." },
            { word: "solide", score: 30, feedback: "Consistance." }
        ],
        bestAnswer: "bienfaisante",
        explanation: "'Bienfaisante' traduit le soulagement apporté par le vent."
    },
    {
        id: "fr-194",
        sentence: "Le gars était très reconnaissant pour nos conseils.",
        targetWord: "reconnaissant",
        targetWordIndex: 3,
        options: [
            { word: "bon", score: 20, feedback: "Vague." },
            { word: "attentif", score: 40, feedback: "Écoute." },
            { word: "obligé", score: 100, feedback: "Parfait ! 'Obligé' signifie que l'on a une dette de reconnaissance." },
            { word: "bien", score: 10, feedback: "Adverbe." }
        ],
        bestAnswer: "obligé",
        explanation: "'Obligé' souligne que le conseil a une grande valeur à ses yeux."
    },
    {
        id: "fr-195",
        sentence: "La lumière brillante de l'aurore annonçait un beau jour.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "claire", score: 30, feedback: "Visibilité." },
            { word: "blanche", score: 10, feedback: "Couleur." },
            { word: "radieuse", score: 100, feedback: "Parfait ! 'Radieuse' évoque l'éclat joyeux de l'aurore." },
            { word: "belle", score: 40, feedback: "Esthétique." }
        ],
        bestAnswer: "radieuse",
        explanation: "'Radieuse' s'accorde avec l'annonce optimiste de la journée."
    },
    {
        id: "fr-196",
        sentence: "Le vieux mur de pierre abritait des lézards.",
        targetWord: "vieux",
        targetWordIndex: 1,
        options: [
            { word: "antique", score: 30, feedback: "Noblesse." },
            { word: "moussant", score: 20, feedback: "Végétation." },
            { word: "vétuste", score: 40, feedback: "Usure." },
            { word: " ancestral", score: 100, feedback: "Parfait ! 'Ancestral' souligne que le mur est là depuis des générations." }
        ],
        bestAnswer: " ancestral",
        explanation: "'Ancestral' valorise la pérennité du mur au fil du temps."
    },
    {
        id: "fr-197",
        sentence: "Le silence calme de la salle d'attente était rompu par un enfant.",
        targetWord: "calme",
        targetWordIndex: 1,
        options: [
            { word: "bas", score: 20, feedback: "Volume." },
            { word: "pesant", score: 40, feedback: "Force." },
            { word: "atone", score: 100, feedback: "Parfait ! 'Atone' signifie sans expression, plat, neutre." },
            { word: "vide", score: 10, feedback: "Manque." }
        ],
        bestAnswer: "atone",
        explanation: "'Atone' décrit le caractère neutre et sans vie du silence de la salle."
    },
    {
        id: "fr-198",
        sentence: "La belle vue en haut du phare.",
        targetWord: "belle",
        targetWordIndex: 1,
        options: [
            { word: "bonne", score: 10, feedback: "Qualité." },
            { word: "vaste", score: 40, feedback: "Espace." },
            { word: "claire", score: 30, feedback: "Visibilité." },
            { word: "saisissante", score: 100, feedback: "Parfait ! 'Saisissante' souligne l'impact visuel fort." }
        ],
        bestAnswer: "saisissante",
        explanation: "'Saisissante' rend compte de l'effet impressionnant de la vue."
    },
    {
        id: "fr-199",
        sentence: "Le petit avantage permit de remporter le match.",
        targetWord: "petit",
        targetWordIndex: 1,
        options: [
            { word: "court", score: 10, feedback: "Dimension." },
            { word: "marginal", score: 20, feedback: "Position." },
            { word: "bas", score: 30, feedback: "Position." },
            { word: "prépondérant", score: 100, feedback: "Parfait ! 'Prépondérant' signifie qui a un poids déterminant." }
        ],
        bestAnswer: "prépondérant",
        explanation: "'Prépondérant' explique que l'avantage a été le facteur de victoire."
    },
    {
        id: "fr-200",
        sentence: "La forte volonté de son équipe a fait basculer la rencontre.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "grande", score: 20, feedback: "Vague." },
            { word: "collective", score: 100, feedback: "Parfait ! 'Collective' souligne l'esprit d'équipe de la volonté." },
            { word: "dure", score: 10, feedback: "Texture." },
            { word: "longue", score: 30, feedback: "Temps." }
        ],
        bestAnswer: "collective",
        explanation: "'Collective' apporte une précision cruciale sur la source de la volonté."
    }
];
