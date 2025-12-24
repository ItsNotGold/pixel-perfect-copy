import { SwapChallenge } from "../../types";

export const frQuestions: SwapChallenge[] = [
    {
        id: "fr-1",
        sentence: "La controverse a mis au jour des divergences fondamentales dans leurs conceptions du monde.",
        targetWord: "fondamentales",
        targetWordIndex: 7,
        options: [
            { word: "irréconciliables", score: 100, feedback: "Parfait ! 'Irréconciliables' décrit des divergences si profondes qu'elles ne peuvent être résolues ni harmonisées." },
            { word: "essentielles", score: 70, feedback: "'Essentielles' signifie de première importance, mais ne porte pas l'idée de conflit insoluble." },
            { word: "radicales", score: 85, feedback: "'Radicales' implique un changement complet, souvent extrême, sans forcément l'impossibilité de conciliation." },
            { word: "antithétiques", score: 90, feedback: "'Antithétiques' suggère une opposition directe, mais pas nécessairement un caractère constitutif et insoluble." }
        ],
        bestAnswer: "irréconciliables",
        explanation: "'Irréconciliables' qualifie des divergences si constitutives et profondes qu'aucun compromis n'est possible, révélant des principes fondateurs opposés."
    },
    {
        id: "fr-2",
        sentence: "Son interprétation des données était ingénieuse mais ne s'appuyait sur aucune preuve tangible.",
        targetWord: "ingénieuse",
        targetWordIndex: 5,
        options: [
            { word: "spéculative", score: 95, feedback: "'Spéculative' repose sur des conjectures plutôt que des faits établis, ce qui correspond bien." },
            { word: "imaginaire", score: 60, feedback: "'Imaginaire' évoque une pure invention détachée du réel, ce qui est trop fort ici." },
            { word: "hypothétique", score: 85, feedback: "'Hypothétique' présente un caractère provisoire et non vérifié, mais reste moins péjoratif." },
            { word: "conjecturale", score: 100, feedback: "Parfait ! 'Conjecturale' désigne un raisonnement fondé sur des suppositions et non sur des preuves solides." }
        ],
        bestAnswer: "conjecturale",
        explanation: "'Conjecturale' qualifie une interprétation qui procède par suppositions et déductions non étayées par des preuves objectives."
    },
    {
        id: "fr-3",
        sentence: "Le rapport de l'expert était si exhaustif qu'il semblait faire autorité sur le sujet.",
        targetWord: "exhaustif",
        targetWordIndex: 6,
        options: [
            { word: "approfondi", score: 85, feedback: "'Approfondi' implique une grande précision mais pas nécessairement une complétude totale." },
            { word: "complet", score: 80, feedback: "'Complet' suggère qu'il ne manque rien, mais sans la nuance d'autorité finale." },
            { word: "définitif", score: 100, feedback: "Parfait ! 'Définitif' est si complet et abouti qu'il est considéré comme la référence ultime." },
            { word: "encyclopédique", score: 90, feedback: "'Encyclopédique' couvre un vaste champ mais peut manquer de synthèse et d'autorité." }
        ],
        bestAnswer: "définitif",
        explanation: "'Définitif' qualifie un travail si complet et rigoureux qu'il établit une référence quasi inégalable sur le sujet."
    },
    {
        id: "fr-4",
        sentence: "La victoire de l'équipe fut d'autant plus jouissive qu'elle était totalement inattendue.",
        targetWord: "jouissive",
        targetWordIndex: 5,
        options: [
            { word: "gratifiante", score: 80, feedback: "'Gratifiante' procure une satisfaction, mais sans la dimension de libération émotionnelle." },
            { word: "exaltante", score: 85, feedback: "'Exaltante' élève les esprits, mais reste dans le registre de l'enthousiasme." },
            { word: "cathartique", score: 100, feedback: "Parfait ! 'Cathartique' opère une purgation des émotions, procurant un soulagement intense." },
            { word: "réconfortante", score: 70, feedback: "'Réconfortante' apporte du réconfort, ce qui est moins fort et moins spécifique." }
        ],
        bestAnswer: "cathartique",
        explanation: "'Cathartique' décrite une expérience qui provoque une purification émotionnelle et une libération psychique, souvent après une tension."
    },
    {
        id: "fr-5",
        sentence: "La réponse de l'entreprise à la crise fut à la fois rapide et extrêmement organisée.",
        targetWord: "rapide",
        targetWordIndex: 8,
        options: [
            { word: "prompte", score: 85, feedback: "'Prompte' signifie sans délai, mais n'implique pas l'empressement volontaire." },
            { word: "immédiate", score: 80, feedback: "'Immédiate' évoque l'absence de délai, sans nuance sur la qualité de la réaction." },
            { word: "expéditive", score: 90, feedback: "'Expéditive' suggère une exécution rapide et efficace, avec une nuance parfois négative." },
            { word: "alacrité", score: 100, feedback: "Parfait ! 'Alacrité' combine célérité et empressement joyeux, une promptitude enthousiaste." }
        ],
        bestAnswer: "alacrité",
        explanation: "Une réponse faite avec 'alacrité' est non seulement rapide, mais empreinte d'un enthousiasme et d'un entrain volontaires."
    },
    {
        id: "fr-6",
        sentence: "Les instructions fournies étaient obscures et presque impossibles à déchiffrer.",
        targetWord: "obscures",
        targetWordIndex: 4,
        options: [
            { word: "sibyllines", score: 95, feedback: "'Sibyllines' sont énigmatiques et mystérieuses, comme les oracles, ce qui convient bien." },
            { word: "opaques", score: 85, feedback: "'Opaques' sont impénétrables à la compréhension, mais moins littéraire." },
            { word: "hermétiques", score: 100, feedback: "Parfait ! 'Hermétiques' sont complètement fermées à l'intelligence, impénétrables." },
            { word: "confuses", score: 75, feedback: "'Confuses' manquent de clarté, mais sans la connotation de fermeture totale." }
        ],
        bestAnswer: "hermétiques",
        explanation: "'Hermétiques' qualifie un discours ou un texte si fermé et codé qu'il résiste totalement à la compréhension."
    },
    {
        id: "fr-7",
        sentence: "Le lien entre les deux phénomènes était évident pour quiconque examinait les faits.",
        targetWord: "évident",
        targetWordIndex: 6,
        options: [
            { word: "manifeste", score: 90, feedback: "'Manifeste' est clairement apparent, mais n'implique pas l'incontestabilité logique." },
            { word: "patent", score: 85, feedback: "'Patent' est évident et incontestable, un peu formel." },
            { word: "irréfutable", score: 95, feedback: "'Irréfutable' ne peut être contesté, ce qui est très proche." },
            { word: "apodictique", score: 100, feedback: "Parfait ! 'Apodictique' est d'une évidence logique absolue et démontrable, incontestable." }
        ],
        bestAnswer: "apodictique",
        explanation: "'Apodictique' (terme philosophique) décrit une vérité dont la démonstration est si parfaite qu'elle s'impose nécessairement à l'esprit."
    },
    {
        id: "fr-8",
        sentence: "La nouvelle mouture de la politique n'apportait que des ajustements superficiels.",
        targetWord: "superficiels",
        targetWordIndex: 9,
        options: [
            { word: "cosmétiques", score: 100, feedback: "Parfait ! 'Cosmétiques' modifient l'apparence sans toucher à la substance ou aux problèmes profonds." },
            { word: "mineurs", score: 75, feedback: "'Mineurs' sont de faible importance, mais ne portent pas l'idée de changement purement d'apparence." },
            { word: "anecdotiques", score: 80, feedback: "'Anecdotiques' sont insignifiants et secondaires, sans la nuance de tromperie." },
            { word: "illusoires", score: 90, feedback: "'Illusoires' donnent une fausse impression, ce qui est proche mais plus fort." }
        ],
        bestAnswer: "cosmétiques",
        explanation: "Des changements 'cosmétiques' ne modifient que l'apparence extérieure, laissant intactes les structures et problèmes fondamentaux."
    },
    {
        id: "fr-9",
        sentence: "La théorie du chercheur, bien que séduisante, reposait sur des postulats fragiles.",
        targetWord: "fragiles",
        targetWordIndex: 12,
        options: [
            { word: "précaires", score: 90, feedback: "'Précaires' sont instables et peu assurés, ce qui convient." },
            { word: "ténus", score: 85, feedback: "'Ténus' sont minces et peu solides, mais plus abstrait." },
            { word: "vacillants", score: 80, feedback: "'Vacillants' manquent de fermeté, mais s'applique moins bien à des idées." },
            { word: "fébriles", score: 100, feedback: "Parfait ! 'Fébriles' évoquent une agitation malsaine et une instabilité inquiétante, comme dans un état fiévreux." }
        ],
        bestAnswer: "fébriles",
        explanation: "Des postulats 'fébriles' sont instables, agités et manquent de la sérénité et de la solidité requises pour fonder une théorie solide."
    },
    {
        id: "fr-10",
        sentence: "L'argumentation de l'avocat était d'une clarté et d'une simplicité désarmantes.",
        targetWord: "simplicité",
        targetWordIndex: 9,
        options: [
            { word: "élégance", score: 95, feedback: "'Élégance' suggère une solution efficace et esthétique avec un minimum de moyens." },
            { word: "sobriété", score: 80, feedback: "'Sobriété' est une retenue dans l'expression, mais pas spécifique à la résolution de problème." },
            { word: "lucidité", score: 85, feedback: "'Lucidité' est la clarté de l'esprit, ce qui est proche mais différent." },
            { word: "parcimonie", score: 100, feedback: "Parfait ! 'Parcimonie' (au sens de principe d'économie) exprime l'idée d'atteindre un maximum d'effet avec un minimum de moyens." }
        ],
        bestAnswer: "parcimonie",
        explanation: "La 'parcimonie' argumentative (principe de raison suffisante) consiste à démontrer une conclusion avec le minimum d'éléments nécessaires, révélant une grande maîtrise."
    },
    {
        id: "fr-11",
        sentence: "L'atmosphère lors des négociations était tendue et chargée d'hostilité latente.",
        targetWord: "tendue",
        targetWordIndex: 5,
        options: [
            { word: "électrique", score: 100, feedback: "Parfait ! 'Électrique' évoque une tension si vive qu'une étincelle pourrait tout faire exploser." },
            { word: "crispée", score: 85, feedback: "'Crispée' suggère une nervosité et une irritation visibles." },
            { word: "oppressante", score: 90, feedback: "'Oppressante' pèse lourdement, écrasante, mais moins l'idée d'explosion imminente." },
            { word: "étouffante", score: 80, feedback: "'Étouffante' empêche de respirer, métaphore de forte pression." }
        ],
        bestAnswer: "électrique",
        explanation: "Une atmosphère 'électrique' est saturée d'une tension nerveuse et émotionnelle si forte qu'elle semble sur le point de produire un conflit ouvert."
    },
    {
        id: "fr-12",
        sentence: "Son approche du problème était méthodique et d'une rigueur absolue.",
        targetWord: "rigueur",
        targetWordIndex: 9,
        options: [
            { word: "sévérité", score: 70, feedback: "'Sévérité' implique une dureté dans le jugement, pas la précision méthodique." },
            { word: "exactitude", score: 85, feedback: "'Exactitude' est la conformité à la vérité, importante mais plus restreinte." },
            { word: "scrupule", score: 90, feedback: "'Scrupule' est une extrême attention portée aux détails et à l'éthique." },
            { word: "stringence", score: 100, feedback: "Parfait ! 'Stringence' est une rigueur extrême et exigeante, qui ne tolère aucun écart ni approximation." }
        ],
        bestAnswer: "stringence",
        explanation: "La 'stringence' méthodologique est une exigence de précision et de conformité aux règles si stricte qu'elle exclut toute forme de laxisme."
    },
    {
        id: "fr-13",
        sentence: "Les promesses du candidat semblaient spécieuses et destinées à flatter l'électorat.",
        targetWord: "spécieuses",
        targetWordIndex: 5,
        options: [
            { word: "trompeuses", score: 90, feedback: "'Trompeuses' induisent en erreur, ce qui est correct mais moins précis." },
            { word: "fallacieuses", score: 95, feedback: "'Fallacieuses' sont basées sur un raisonnement erroné ou un sophisme." },
            { word: "illusives", score: 80, feedback: "'Illusives' créent une illusion, ce qui est proche." },
            { word: "captieuses", score: 100, feedback: "Parfait ! 'Captieuses' sont insidieusement trompeuses en jouant sur les mots et les apparences pour séduire." }
        ],
        bestAnswer: "captieuses",
        explanation: "Des arguments 'captieux' sont formulés de manière à paraître plausibles et attrayants tout en étant essentiellement faux ou malhonnêtes."
    },
    {
        id: "fr-14",
        sentence: "La transformation du personnage au fil du récit était subtile et pleine de nuances.",
        targetWord: "subtile",
        targetWordIndex: 6,
        options: [
            { word: "imperceptible", score: 85, feedback: "'Imperceptible' ne peut être saisi par les sens, ce qui est possible mais peut être trop faible." },
            { word: "ténue", score: 80, feedback: "'Ténue' est légère et délicate, mais moins riche en nuances psychologiques." },
            { word: "insidieuse", score: 90, feedback: "'Insidieuse' agit de façon cachée et progressive, souvent avec une connotation négative." },
            { word: "fuyante", score: 100, feedback: "Parfait ! 'Fuyante' échappe à une saisie facile, suggérant une complexité psychologique qui se dérobe à l'analyse simple." }
        ],
        bestAnswer: "fuyante",
        explanation: "Une transformation 'fuyante' est insaisissable, se dérobant à une compréhension immédiate et définitive, révélant une profondeur psychologique complexe."
    },
    {
        id: "fr-15",
        sentence: "L'impact de cette décision sur les finances publiques fut désastreux à long terme.",
        targetWord: "désastreux",
        targetWordIndex: 10,
        options: [
            { word: "néfaste", score: 90, feedback: "'Néfaste' est nuisible, souvent moralement, ce qui convient." },
            { word: "funeste", score: 95, feedback: "'Funeste' annonce ou apporte le malheur, plus littéraire et fort." },
            { word: "cataclysmique", score: 100, feedback: "Parfait ! 'Cataclysmique' évoque un bouleversement violent et total, aux conséquences gigantesques." },
            { word: "ruineux", score: 85, feedback: "'Ruineux' entraîne la ruine financière, précis mais moins fort en image." }
        ],
        bestAnswer: "cataclysmique",
        explanation: "Un impact 'cataclysmique' produit des effets comparables à ceux d'une catastrophe naturelle de grande ampleur, bouleversant profondément et durablement un système."
    },
    {
        id: "fr-16",
        sentence: "La cohésion du groupe paraissait solide mais reposait en réalité sur des bases éphémères.",
        targetWord: "éphémères",
        targetWordIndex: 13,
        options: [
            { word: "fragiles", score: 85, feedback: "'Fragiles' peuvent se briser facilement, ce qui est juste mais moins précis sur la durée." },
            { word: "précaires", score: 90, feedback: "'Précaires' sont instables et incertaines, très proche." },
            { word: "fugaces", score: 95, feedback: "'Fugaces' sont de très courte durée, ce qui est exact." },
            { word: "caduques", score: 100, feedback: "Parfait ! 'Caduques' sont destinées à disparaître d'elles-mêmes, étant par nature temporaires et vouées à l'obsolescence." }
        ],
        bestAnswer: "caduques",
        explanation: "Des bases 'caduques' sont, par leur nature même, temporaires et promises à une disparition rapide, ne pouvant assurer une fondation durable."
    },
    {
        id: "fr-17",
        sentence: "Son analyse du marché était perspicace et anticipait des tendances ignorées de tous.",
        targetWord: "perspicace",
        targetWordIndex: 5,
        options: [
            { word: "judicieuse", score: 85, feedback: "'Judicieuse' montre un bon jugement, mais sans la dimension de pénétration intellectuelle." },
            { word: "clairvoyante", score: 95, feedback: "'Clairvoyante' voit clairement l'avenir ou le fond des choses, ce qui est excellent." },
            { word: "sagace", score: 90, feedback: "'Sagace' est fin et avisé, avec une connotation d'intelligence pratique." },
            { word: "pénétrante", score: 100, feedback: "Parfait ! 'Pénétrante' va au cœur des choses, perce les apparences pour saisir l'essentiel." }
        ],
        bestAnswer: "pénétrante",
        explanation: "Une analyse 'pénétrante' transcende les évidences pour discerner les forces et les vérités sous-jacentes, révélant une compréhension profonde."
    },
    {
        id: "fr-18",
        sentence: "Le silence qui suivit l'annonce était lourd de sous-entendus non exprimés.",
        targetWord: "lourd",
        targetWordIndex: 6,
        options: [
            { word: "pesant", score: 90, feedback: "'Pesant' écrase par son poids, métaphore physique très proche." },
            { word: "accablant", score: 85, feedback: "'Accablant' accable, écrase moralement, convient aussi." },
            { word: "tumultueux", score: 70, feedback: "'Tumultueux' est agité et bruyant, ce qui est le contraire du silence." },
            { word: "turgide", score: 100, feedback: "Parfait ! 'Turgide' (littéraire) est gonflé, saturé, prêt à éclater, décrivant un silence saturé de tensions inexprimées." }
        ],
        bestAnswer: "turgide",
        explanation: "Un silence 'turgide' est tendu à l'extrême, gonflé de tout ce qui n'est pas dit, créant une pression palpable et dangereuse."
    },
    {
        id: "fr-19",
        sentence: "L'engagement de l'artiste en faveur de cette cause était sincère et profond.",
        targetWord: "profond",
        targetWordIndex: 11,
        options: [
            { word: "véritable", score: 75, feedback: "'Véritable' est authentique, mais moins intense." },
            { word: "viscéral", score: 95, feedback: "'Viscéral' vient des entrailles, irréfléchi et puissant, très fort." },
            { word: "absolu", score: 85, feedback: "'Absolu' est sans réserve, mais peut manquer la dimension affective." },
            { word: "intime", score: 100, feedback: "Parfait ! 'Intime' touche au plus profond de l'être, à l'essence personnelle et privée." }
        ],
        bestAnswer: "intime",
        explanation: "Un engagement 'intime' procède des convictions les plus personnelles et ancrées au cœur de l'individu, le liant de manière indéfectible à une cause."
    },
    {
        id: "fr-20",
        sentence: "La crise a révélé les failles structurelles d'un système que l'on croyait robuste.",
        targetWord: "robuste",
        targetWordIndex: 14,
        options: [
            { word: "solide", score: 80, feedback: "'Solide' résiste bien, mais est assez courant." },
            { word: "inébranlable", score: 90, feedback: "'Inébranlable' ne peut être ébranlé, ce qui est fort." },
            { word: "indestructible", score: 85, feedback: "'Indestructible' ne peut être détruit, peut-être excessif." },
            { word: "inamovible", score: 100, feedback: "Parfait ! 'Inamovible' ne peut être déplacé ou changé, suggérant une stabilité institutionnelle et non physique." }
        ],
        bestAnswer: "inamovible",
        explanation: "Un système 'inamovible' est considéré comme si bien établi, institutionnalisé et ancré qu'il paraît immuable et à l'abri de toute remise en cause."
    },
    {
        id: "fr-21",
        sentence: "Son discours, d'apparence modérée, cachait en réalité une critique acerbe du gouvernement.",
        targetWord: "acerbe",
        targetWordIndex: 13,
        options: [
            { word: "mordante", score: 95, feedback: "'Mordante' est incisive et blessante, très proche." },
            { word: "caule", score: 100, feedback: "Parfait ! 'Caule' (littéraire et rare) signifie d'une amertume extrême et corrosive." },
            { word: "sarcastique", score: 85, feedback: "'Sarcastique' utilise l'ironie moqueuse, ce qui peut être différent." },
            { word: "virulente", score: 90, feedback: "'Virulente' est violente et agressive, ce qui convient." }
        ],
        bestAnswer: "caule",
        explanation: "Une critique 'caule' (du latin 'caulis', tige, par extension âcre) est empreinte d'une amertume intense et corrosive, dévastatrice dans son fond."
    },
    {
        id: "fr-22",
        sentence: "Le paysage désertique offrait une impression d'immensité et d'absence de vie.",
        targetWord: "absence",
        targetWordIndex: 10,
        options: [
            { word: "dénuement", score: 90, feedback: "'Dénuement' est la pauvreté extrême, convient pour la vie mais aussi pour les ressources." },
            { word: "vacuité", score: 95, feedback: "'Vacuité' est le vide, l'absence de contenu substantiel, très fort." },
            { word: "désolation", score: 85, feedback: "'Désolation' évoque la tristesse et la ruine, pas seulement l'absence." },
            { word: "néant", score: 100, feedback: "Parfait ! 'Néant' est la non-existence absolue, le rien philosophique, plus radical que le simple vide." }
        ],
        bestAnswer: "néant",
        explanation: "Le 'néant' désigne l'état de non-être absolu, une absence totale et métaphysique, au-delà du simple manque ou vide observable."
    },
    {
        id: "fr-23",
        sentence: "La résolution du conflit exigeait une approche novatrice et courageuse.",
        targetWord: "courageuse",
        targetWordIndex: 10,
        options: [
            { word: "audacieuse", score: 95, feedback: "'Audacieuse' fait preuve de hardiesse et de prise de risque, excellent." },
            { word: "hardie", score: 90, feedback: "'Hardie' est téméraire et brave, synonyme proche." },
            { word: "intrépide", score: 85, feedback: "'Intrépide' ne craint rien, se concentre sur l'absence de peur." },
            { word: "forcenée", score: 100, feedback: "Parfait ! 'Forcenée' (dans ce sens littéraire) est menée avec une détermination violente, presque déraisonnable, et héroïque." }
        ],
        bestAnswer: "forcenée",
        explanation: "Une approche 'forcenée' est conduite avec une ardeur extrême, voire violente, et une détermination à toute épreuve, au mépris du danger."
    },
    {
        id: "fr-24",
        sentence: "L'érudition du conférencier était vaste mais parfois présentée de manière pédante.",
        targetWord: "vaste",
        targetWordIndex: 6,
        options: [
            { word: "étendue", score: 80, feedback: "'Étendue' couvre un large domaine, correct mais banal." },
            { word: "encyclopédique", score: 95, feedback: "'Encyclopédique' embrasse l'ensemble des connaissances, ce qui est précis." },
            { word: "illimitée", score: 85, feedback: "'Illimitée' suggère l'infini, ce qui est exagéré." },
            { word: "pancaliste", score: 100, feedback: "Parfait ! 'Pancaliste' (rare) désigne une connaissance universelle, embrassant tous les arts et sciences." }
        ],
        bestAnswer: "pancaliste",
        explanation: "Une érudition 'pancaliste' (du grec 'pan', tout, et 'kalos', beau) aspire à l'universalité en couvrant tous les champs du savoir et des arts."
    },
    {
        id: "fr-25",
        sentence: "Le remords le rongeait après avoir commis cette action irréparable.",
        targetWord: "rongeait",
        targetWordIndex: 3,
        options: [
            { word: "taraudait", score: 90, feedback: "'Taraudait' tourmentait de façon insistante, comme un foret, image forte." },
            { word: "dévorait", score: 85, feedback: "'Dévorait' consume de l'intérieur, métaphore classique." },
            { word: "tenaillait", score: 95, feedback: "'Tenaillait' causait une souffrance aiguë et persistante, comme avec des tenailles." },
            { word: "sapait", score: 100, feedback: "Parfait ! 'Sapait' minait progressivement et sournoisement les fondements mêmes de son être." }
        ],
        bestAnswer: "sapait",
        explanation: "Un remords qui 'sape' agit de manière insidieuse et destructive, minant les assises psychologiques et morales de l'individu."
    },
    {
        id: "fr-26",
        sentence: "La frontière entre le rêve et la réalité était devenue floue pour le personnage.",
        targetWord: "floue",
        targetWordIndex: 11,
        options: [
            { word: "imprécise", score: 80, feedback: "'Imprécise' manque de netteté, correct mais faible." },
            { word: "estompée", score: 90, feedback: "'Estompée' a perdu ses contours nets, image picturale juste." },
            { word: "labile", score: 100, feedback: "Parfait ! 'Labile' est instable, glissant, susceptible de se dérober ou de changer, évoquant une frontière psychologique mouvante." },
            { word: "vaporeuse", score: 85, feedback: "'Vaporeuse' est légère comme la vapeur, éthérée, convient pour le rêve." }
        ],
        bestAnswer: "labile",
        explanation: "Une frontière 'labile' n'est pas fixe ; elle glisse, fluctue, rendant impossible toute démarcation stable entre deux états, ici le rêve et la réalité."
    },
    {
        id: "fr-27",
        sentence: "L'amitié qui les liait était authentique et avait résisté à l'épreuve du temps.",
        targetWord: "authentique",
        targetWordIndex: 6,
        options: [
            { word: "véridique", score: 70, feedback: "'Véridique' dit la vérité, s'applique mal à un sentiment." },
            { word: "indéfectible", score: 90, feedback: "'Indéfectible' ne peut se défaire, évoque la durée mais pas l'authenticité initiale." },
            { word: "véritable", score: 80, feedback: "'Véritable' est vrai, réel, mais assez commun." },
            { word: "indubitable", score: 100, feedback: "Parfait ! 'Indubitable' ne peut être mis en doute, d'une authentification si évidente qu'elle s'impose à l'esprit." }
        ],
        bestAnswer: "indubitable",
        explanation: "Une amitié 'indubitable' possède une authenticité si manifeste et évidente qu'elle exclut toute possibilité de doute sur sa nature réelle et sincère."
    },
    {
        id: "fr-28",
        sentence: "La chute de l'empire fut provoquée par une multitude de facteurs entremêlés.",
        targetWord: "entremêlés",
        targetWordIndex: 12,
        options: [
            { word: "imbriqués", score: 90, feedback: "'Imbriqués' s'emboîtent les uns dans les autres, comme des tuiles, image juste." },
            { word: "enchevêtrés", score: 95, feedback: "'Enchevêtrés' sont mêlés de façon inextricable, souvent compliquée à démêler." },
            { word: "emmêlés", score: 80, feedback: "'Emmêlés' sont mêlés de façon désordonnée, plus simple." },
            { word: "inextricables", score: 100, feedback: "Parfait ! 'Inextricables' sont si complètement mêlés qu'il est impossible de les séparer ou d'en sortir." }
        ],
        bestAnswer: "inextricables",
        explanation: "Des facteurs 'inextricables' sont noués les uns aux autres de manière si complexe et serrée qu'il est impossible de les isoler ou de démêler leurs influences respectives."
    },
    {
        id: "fr-29",
        sentence: "La beauté du spectacle tenait à sa simplicité et à son dépouillement extrême.",
        targetWord: "dépouillement",
        targetWordIndex: 11,
        options: [
            { word: "sobriété", score: 90, feedback: "'Sobriété' est une retenue dans les moyens, très proche." },
            { word: "austérité", score: 85, feedback: "'Austérité' est une sévérité, une absence d'ornement, peut avoir une connotation négative." },
            { word: "épuration", score: 95, feedback: "'Épuration' est l'action de purifier en éliminant le superflu, concept fort." },
            { word: "ascèse", score: 100, feedback: "Parfait ! 'Ascèse' (esthétique) désigne une discipline volontaire de renoncement aux éléments superflus pour atteindre l'essentiel." }
        ],
        bestAnswer: "ascèse",
        explanation: "Un 'ascèse' esthétique est une rigueur volontaire qui élimine tout ornement superflu pour ne conserver que l'élément strictement nécessaire et pur."
    },
    {
        id: "fr-30",
        sentence: "L'explication qu'il fournit était volontairement ambiguë et à double sens.",
        targetWord: "ambiguë",
        targetWordIndex: 9,
        options: [
            { word: "équivoque", score: 95, feedback: "'Équivoque' prête à confusion car elle peut avoir plusieurs sens, souvent avec une intention de tromper." },
            { word: "obscure", score: 80, feedback: "'Obscure' est difficile à comprendre, mais pas forcément à double sens." },
            { word: "sophistique", score: 90, feedback: "'Sophistique' utilise des raisonnements spécieux pour tromper, plus technique." },
            { word: "amphibologique", score: 100, feedback: "Parfait ! 'Amphibologique' contient une amphibologie (phrase à double sens), terme de rhétorique précis." }
        ],
        bestAnswer: "amphibologique",
        explanation: "Une explication 'amphibologique' utilise délibérément une construction syntaxique permettant deux interprétations différentes, créant une ambiguïté volontaire."
    },
    {
        id: "fr-31",
        sentence: "Le leader charismatique savait susciter un enthousiasme collectif frénétique.",
        targetWord: "frénétique",
        targetWordIndex: 10,
        options: [
            { word: "délirant", score: 90, feedback: "'Délirant' est excessif et irraisonné, très proche." },
            { word: "effréné", score: 85, feedback: "'Effréné' est sans frein ni retenue, convient." },
            { word: "hystérique", score: 95, feedback: "'Hystérique' relève d'une excitation maladive et incontrôlée, terme fort." },
            { word: "corybantique", score: 100, feedback: "Parfait ! 'Corybantique' (relatif aux Corybantes, prêtres de Cybèle) désigne une frénésie collective et ritualisée, extrême et désordonnée." }
        ],
        bestAnswer: "corybantique",
        explanation: "Un enthousiasme 'corybantique' est une exaltation collective qui atteint un paroxysme désordonné et presque sacré, proche de la transe."
    },
    {
        id: "fr-32",
        sentence: "Le texte ancien était rédigé dans une langue archaïque et aujourd'hui obscure.",
        targetWord: "obscure",
        targetWordIndex: 12,
        options: [
            { word: "inintelligible", score: 90, feedback: "'Inintelligible' ne peut être compris, ce qui est le cas." },
            { word: "abstruse", score: 95, feedback: "'Abstruse' est difficile d'accès pour l'esprit, terme savant." },
            { word: "sibylline", score: 85, feedback: "'Sibylline' est énigmatique et mystérieuse, comme un oracle." },
            { word: "résistante", score: 100, feedback: "Parfait ! 'Résistante' s'oppose activement à la compréhension, offrant une opacité qui défie l'interprétation." }
        ],
        bestAnswer: "résistante",
        explanation: "Une langue 'résistante' oppose une opacité active à celui qui tente de la déchiffrer, gardant ses secrets avec opiniâtreté."
    },
    {
        id: "fr-33",
        sentence: "Le règlement du conflit nécessita une médiation longue et particulièrement délicate.",
        targetWord: "délicate",
        targetWordIndex: 11,
        options: [
            { word: "subtile", score: 90, feedback: "'Subtile' est fine et nécessite de la finesse, convient." },
            { word: "épineuse", score: 95, feedback: "'Épineuse' présente des difficultés aiguës et dangereuses, image juste." },
            { word: "complexe", score: 80, feedback: "'Complexe' est composée de nombreuses parties liées, correct." },
            { word: "funambulesque", score: 100, feedback: "Parfait ! 'Funambulesque' requiert l'équilibre et l'audace d'un funambule, évoquant un chemin étroit et risqué." }
        ],
        bestAnswer: "funambulesque",
        explanation: "Une médiation 'funambulesque' exige de maintenir un équilibre précaire entre des parties antagonistes, en avançant avec prudence sur un fil tendu au-dessus du conflit."
    },
    {
        id: "fr-34",
        sentence: "Son caractère était notoirement changeant et imprévisible.",
        targetWord: "changeant",
        targetWordIndex: 5,
        options: [
            { word: "inconstant", score: 90, feedback: "'Inconstant' n'est pas stable dans ses sentiments ou ses opinions, classique." },
            { word: "volatile", score: 95, feedback: "'Volatile' est léger et changeant comme l'humeur, image aérienne." },
            { word: "capricieux", score: 85, feedback: "'Capricieux' change selon des impulsions soudaines, comme un caprice." },
            { word: "prothéiforme", score: 100, feedback: "Parfait ! 'Prothéiforme' (comme Protée) a la capacité de changer de forme à volonté, évoquant une mutabilité fondamentale de l'être." }
        ],
        bestAnswer: "prothéiforme",
        explanation: "Un caractère 'prothéiforme' (de Protée, dieu marin changeant) est d'une mutabilité essentielle, capable de se transformer en des formes et humeurs diverses de manière insaisissable."
    },
    {
        id: "fr-35",
        sentence: "L'atmosphère de la pièce était empreinte d'une mélancolie douce et nostalgique.",
        targetWord: "empreinte",
        targetWordIndex: 5,
        options: [
            { word: "imprégnée", score: 90, feedback: "'Imprégnée' est profondément pénétrée, très proche." },
            { word: "teintée", score: 80, feedback: "'Teintée' est légèrement colorée, plus faible." },
            { word: "saturée", score: 85, feedback: "'Saturée' est complètement remplie, jusqu'à la limite." },
            { word: "investie", score: 100, feedback: "Parfait ! 'Investie' est habitée, possédée par une qualité ou un sentiment qui en émane." }
        ],
        bestAnswer: "investie",
        explanation: "Une atmosphère 'investie' par un sentiment en est profondément habitée et comme animée par celui-ci, qui en devient l'essence même."
    },
    {
        id: "fr-36",
        sentence: "Le projet, bien que séduisant sur le papier, s'avéra totalement irréalisable en pratique.",
        targetWord: "irréalisable",
        targetWordIndex: 12,
        options: [
            { word: "utopique", score: 95, feedback: "'Utopique' relève de l'utopie, idéal mais impossible à réaliser." },
            { word: "chimérique", score: 100, feedback: "Parfait ! 'Chimérique' est aussi vain et illusoire qu'une chimère, beau mais sans existence possible." },
            { word: "insensé", score: 85, feedback: "'Insensé' est déraisonnable et fou, plus péjoratif." },
            { word: "abracadabrant", score: 90, feedback: "'Abracadabrant' est invraisemblable au point d'en être grotesque, terme familier et coloré." }
        ],
        bestAnswer: "chimérique",
        explanation: "Un projet 'chimérique' est aussi séduisant et fantasque qu'une chimère (créature mythologique), mais relève du pur fantasme et ne peut aboutir dans la réalité."
    },
    {
        id: "fr-37",
        sentence: "La règle était appliquée avec une rigueur excessive et pointilleuse.",
        targetWord: "pointilleuse",
        targetWordIndex: 11,
        options: [
            { word: "métieuse", score: 100, feedback: "Parfait ! 'Métieuse' (de 'métier') pousse le souci du détail technique à l'extrême, avec une connotation d'expertise tatillonne." },
            { word: "scrupuleuse", score: 90, feedback: "'Scrupuleuse' est extrêmement attentive par souci moral, légèrement différent." },
            { word: "manie", score: 85, feedback: "'Manie' a un caractère obsessionnel et compulsif, terme psychologique." },
            { word: "tatillonne", score: 95, feedback: "'Tatillonne' s'attache avec excès à des détails insignifiants, proche mais plus courant." }
        ],
        bestAnswer: "métieuse",
        explanation: "Une application 'métieuse' des règles manifeste un respect tatillon et presque ritualiste de la procédure, poussant le formalisme à l'extrême."
    },
    {
        id: "fr-38",
        sentence: "La relation entre les deux concepts était d'une complexité vertigineuse.",
        targetWord: "vertigineuse",
        targetWordIndex: 10,
        options: [
            { word: "abyssale", score: 95, feedback: "'Abyssale' évoque une profondeur sans fond, métaphore spatiale forte." },
            { word: "déconcertante", score: 85, feedback: "'Déconcertante' trouble et surprend l'esprit, plus faible." },
            { word: "inextricable", score: 90, feedback: "'Inextricable' est impossible à démêler, très bon." },
            { word: "kaléidoscopique", score: 100, feedback: "Parfait ! 'Kaléidoscopique' change constamment et présente une multiplicité de facettes qui éblouit l'esprit." }
        ],
        bestAnswer: "kaléidoscopique",
        explanation: "Une complexité 'kaléidoscopique' offre une multiplicité de perspectives et d'arrangements qui se reconfigurent sans cesse, étourdissant la pensée."
    },
    {
        id: "fr-39",
        sentence: "La décision du tribunal fut accueillie par un silence de stupéfaction générale.",
        targetWord: "stupéfaction",
        targetWordIndex: 11,
        options: [
            { word: "consternation", score: 90, feedback: "'Consternation' est une stupéfaction mêlée d'accablement et de désapprobation." },
            { word: "abasourdissement", score: 95, feedback: "'Abasourdissement' est un état d'hébétude et de sidération, très fort." },
            { word: "sidération", score: 100, feedback: "Parfait ! 'Sidération' est un arrêt brutal des facultés mentales sous l'effet d'un choc émotionnel intense." },
            { word: "effarement", score: 85, feedback: "'Effarement' est une grande surprise mêlée d'effroi." }
        ],
        bestAnswer: "sidération",
        explanation: "La 'sidération' désigne un état de paralysie psychique temporaire provoqué par un événement tellement inattendu ou choquant qu'il 'assomme' la pensée."
    },
    {
        id: "fr-40",
        sentence: "L'argument avancé par l'adversaire était fallacieux et reposait sur un sophisme.",
        targetWord: "fallacieux",
        targetWordIndex: 6,
        options: [
            { word: "trompeur", score: 85, feedback: "'Trompeur' induit en erreur, correct mais général." },
            { word: "spécieux", score: 95, feedback: "'Spécieux' a une apparence de vérité ou de justice, mais est faux en réalité." },
            { word: "erroné", score: 80, feedback: "'Erroné' est simplement faux, sans la nuance de tromperie." },
            { word: "paralogique", score: 100, feedback: "Parfait ! 'Paralogique' contient un paralogisme, c'est-à-dire un raisonnement faux involontaire ou non, terme technique précis." }
        ],
        bestAnswer: "paralogique",
        explanation: "Un argument 'paralogique' enfreint les règles de la logique, contenant une erreur de raisonnement (paralogisme) qui invalide sa conclusion, qu'elle soit intentionnelle ou non."
    },
    {
        id: "fr-41",
        sentence: "Le paysage urbain était d'une laideur et d'une monotonie désespérantes.",
        targetWord: "monotonie",
        targetWordIndex: 9,
        options: [
            { word: "uniformité", score: 90, feedback: "'Uniformité' manque de variété, correct." },
            { word: "grise", score: 85, feedback: "'Grise' évoque la tristesse et la fadeur, métaphore courante." },
            { word: "atone", score: 95, feedback: "'Atone' est sans relief, sans éclat, sans vie, terme plus littéraire." },
            { word: "oligotone", score: 100, feedback: "Parfait ! 'Oligotone' (peu usité) se caractérise par un très petit nombre de tons ou de variations, renforçant l'idée d'appauvrissement." }
        ],
        bestAnswer: "oligotone",
        explanation: "Une monotonie 'oligotone' (du grec 'oligos', peu, et 'tonos', ton) est appauvrie à l'extrême, réduite à une palette si restreinte qu'elle en devient étouffante."
    },
    {
        id: "fr-42",
        sentence: "Sa réaction face à la critique fut d'une sensibilité à fleur de peau.",
        targetWord: "sensibilité",
        targetWordIndex: 8,
        options: [
            { word: "susceptibilité", score: 95, feedback: "'Susceptibilité' est une facilité à s'offenser, très proche." },
            { word: "émotivité", score: 85, feedback: "'Émotivité' réagit vivement aux émotions, plus large." },
            { word: "irritabilité", score: 90, feedback: "'Irritabilité' est une tendance à s'irriter facilement." },
            { word: "hyperesthésie", score: 100, feedback: "Parfait ! 'Hyperesthésie' est une sensibilité excessive et pathologique des nerfs ou des émotions." }
        ],
        bestAnswer: "hyperesthésie",
        explanation: "L''hyperesthésie' affective est une sensibilité exacerbée, où les stimuli émotionnels, même faibles, provoquent des réactions disproportionnées et douloureuses."
    },
    {
        id: "fr-43",
        sentence: "Le style de l'auteur était caractérisé par une concision et une densité remarquables.",
        targetWord: "densité",
        targetWordIndex: 12,
        options: [
            { word: "richesse", score: 85, feedback: "'Richesse' évoque l'abondance, mais pas la compression." },
            { word: "compacité", score: 95, feedback: "'Compacité' est le caractère de ce qui est dense, serré, image matérielle juste." },
            { word: "profondeur", score: 90, feedback: "'Profondeur' suggère des significations multiples, mais pas forcément condensées." },
            { word: "tension", score: 100, feedback: "Parfait ! 'Tension' (sémantique) est la force contenue dans un énoncé bref, où chaque mot est chargé de sens au maximum." }
        ],
        bestAnswer: "tension",
        explanation: "La 'tension' stylistique est la qualité d'un texte où le sens est comprimé à l'extrême, créant une puissance sémantique et expressive qui déborde les mots."
    },
    {
        id: "fr-44",
        sentence: "La transition entre les deux régimes politiques se fit de manière progressive et imperceptible.",
        targetWord: "imperceptible",
        targetWordIndex: 14,
        options: [
            { word: "insensible", score: 95, feedback: "'Insensible' ne peut être perçu par les sens, synonyme quasi exact." },
            { word: "graduelle", score: 80, feedback: "'Graduelle' se fait par degrés, mais peut être perceptible." },
            { word: "sournoise", score: 90, feedback: "'Sournoise' agit de façon cachée et traîtresse, connotation morale." },
            { word: "cryptique", score: 100, feedback: "Parfait ! 'Cryptique' est cachée, secrète, comme un code, nécessitant une clé pour être décelée." }
        ],
        bestAnswer: "cryptique",
        explanation: "Une transition 'cryptique' est si bien dissimulée dans le cours des choses qu'elle échappe à l'observation directe, n'étant lisible qu'a posteriori ou par initiation."
    },
    {
        id: "fr-45",
        sentence: "L'alliance entre les deux factions était purement circonstancielle et intéressée.",
        targetWord: "intéressée",
        targetWordIndex: 12,
        options: [
            { word: "utilitariste", score: 95, feedback: "'Utilitariste' est motivée par l'intérêt et l'utilité pratique, terme précis." },
            { word: "opportuniste", score: 90, feedback: "'Opportuniste' saisit les circonstances pour en tirer profit." },
            { word: "calculée", score: 85, feedback: "'Calculée' est froidement planifiée pour servir un intérêt." },
            { word: "marchande", score: 100, feedback: "Parfait ! 'Marchande' réduit la relation à un échange de services ou d'avantages, comme un contrat commercial sans loyauté." }
        ],
        bestAnswer: "marchande",
        explanation: "Une alliance 'marchande' est fondée sur un calcul froid d'intérêts réciproques et temporaires, excluant tout engagement moral ou affectif durable."
    },
    {
        id: "fr-46",
        sentence: "La voix du chanteur avait une tessiture rare et couvrait une étendue exceptionnelle.",
        targetWord: "étendue",
        targetWordIndex: 13,
        options: [
            { word: "amplitude", score: 95, feedback: "'Amplitude' est l'étendue entre les limites extrêmes, terme scientifique adapté." },
            { word: "gamme", score: 90, feedback: "'Gamme' est la série des notes accessibles, terme musical." },
            { word: "spectre", score: 100, feedback: "Parfait ! 'Spectre' (vocal) évoque l'ensemble des fréquences émises, avec une connotation de largeur et de richesse." },
            { word: "registre", score: 85, feedback: "'Registre' est une partie de la tessiture, moins large." }
        ],
        bestAnswer: "spectre",
        explanation: "Le 'spectre' vocal désigne l'ensemble des fréquences qu'une voix peut produire, soulignant la largeur et la continuité de son étendue, comme un spectre lumineux."
    },
    {
        id: "fr-47",
        sentence: "La décision fut prise après une délibération longue et particulièrement ardue.",
        targetWord: "ardue",
        targetWordIndex: 12,
        options: [
            { word: "difficile", score: 75, feedback: "'Difficile' présente des obstacles, très général." },
            { word: "éprouvante", score: 85, feedback: "'Éprouvante' met à l'épreuve physiquement ou moralement." },
            { word: "laborieuse", score: 90, feedback: "'Laborieuse' demande un travail pénible et long." },
            { word: "exigente", score: 100, feedback: "Parfait ! 'Exigente' requiert un effort intellectuel ou moral de très haut niveau, une dépense intense de ressources mentales." }
        ],
        bestAnswer: "exigente",
        explanation: "Une délibération 'exigente' sollicite au maximum les capacités de raisonnement, de jugement et d'analyse, ne laissant aucun répit à l'esprit."
    },
    {
        id: "fr-48",
        sentence: "Le sens de ce poème ancien demeurait énigmatique et ouvert à toutes les interprétations.",
        targetWord: "énigmatique",
        targetWordIndex: 8,
        options: [
            { word: "sibyllin", score: 100, feedback: "Parfait ! 'Sibyllin' est obscur et prophétique, comme les oracles, suggérant une profondeur mystérieuse." },
            { word: "hermétique", score: 90, feedback: "'Hermétique' est fermé à la compréhension, impénétrable." },
            { word: "oraculaire", score: 95, feedback: "'Oraculaire' a le caractère mystérieux et obscur des oracles, très proche de 'sibyllin'." },
            { word: "crypté", score: 85, feedback: "'Crypté' est écrit en code, nécessite une clé." }
        ],
        bestAnswer: "sibyllin",
        explanation: "Un texte 'sibyllin' possède le caractère obscur et énigmatique des prophéties de la Sibylle, défiant l'interprétation unique et invitant à une lecture multiple."
    },
    {
        id: "fr-49",
        sentence: "Le sentiment qui l'animait était un mélange complexe de jalousie et d'admiration.",
        targetWord: "complexe",
        targetWordIndex: 7,
        options: [
            { word: "ambigu", score: 90, feedback: "'Ambigu' a plusieurs sens possibles, souvent contradictoires." },
            { word: "hybride", score: 85, feedback: "'Hybride' est issu du mélange de deux choses différentes." },
            { word: "composite", score: 95, feedback: "'Composite' est formé d'éléments hétérogènes assemblés." },
            { word: "bigarré", score: 100, feedback: "Parfait ! 'Bigarré' est varié de couleurs vives et disparates, image vive et psychologique." }
        ],
        bestAnswer: "bigarré",
        explanation: "Un sentiment 'bigarré' présente une palette émotionnelle variée, où des composantes contradictoires coexistent de manière vive et disparate."
    },
    {
        id: "fr-50",
        sentence: "La justification qu'il proposa pour son acte parut insuffisante et peu convaincante.",
        targetWord: "insuffisante",
        targetWordIndex: 8,
        options: [
            { word: "lacunaire", score: 95, feedback: "'Lacunaire' présente des lacunes, des manques, ce qui est précis." },
            { word: "défaillante", score: 90, feedback: "'Défaillante' est qui fait défaut, qui ne remplit pas son rôle." },
            { word: "ténue", score: 85, feedback: "'Ténue' est faible, peu solide, convient." },
            { word: "caduque", score: 100, feedback: "Parfait ! 'Caduque' est périmée, dépassée, sans valeur ni force probante." }
        ],
        bestAnswer: "caduque",
        explanation: "Une justification 'caduque' est non seulement faible, mais elle est frappée d'obsolescence, n'ayant plus aucune validité ni pouvoir de convaincre."
    },
    {
        id: "fr-51",
        sentence: "L'accord entre les deux nations était fragile et susceptible d'être rompu à tout moment.",
        targetWord: "fragile",
        targetWordIndex: 6,
        options: [
            { word: "précaire", score: 100, feedback: "Parfait ! 'Précaire' décrit une situation instable et incertaine, menaçant de s'effondrer à la moindre perturbation." },
            { word: "délicat", score: 85, feedback: "'Délicat' nécessite des précautions, mais n'implique pas nécessairement un danger imminent de rupture." },
            { word: "ténu", score: 90, feedback: "'Ténu' est très mince et faible, mais s'applique plus à une connexion qu'à un accord." },
            { word: "évanescent", score: 80, feedback: "'Évanescent' a tendance à disparaître rapidement, comme une apparition, moins adapté pour un accord politique." }
        ],
        bestAnswer: "précaire",
        explanation: "Un accord 'précaire' est maintenu dans des conditions si instables qu'il peut être rompu à tout moment, sans garantie de durée."
    },
    {
        id: "fr-52",
        sentence: "La performance de l'athlète était remarquable et a établi un nouveau record.",
        targetWord: "remarquable",
        targetWordIndex: 5,
        options: [
            { word: "exceptionnelle", score: 95, feedback: "'Exceptionnelle' sort de l'ordinaire et est très rare, ce qui convient bien." },
            { word: "prodigieuse", score: 100, feedback: "Parfait ! 'Prodigieuse' dépasse l'entendement et inspire l'émerveillement, comme un exploit hors du commun." },
            { word: "insigne", score: 90, feedback: "'Insigne' est éminent et notable, souvent utilisé pour des qualités morales." },
            { word: "mémorable", score: 85, feedback: "'Mémorable' mérite d'être retenu, mais se concentre sur le souvenir plutôt que sur l'exploit lui-même." }
        ],
        bestAnswer: "prodigieuse",
        explanation: "Une performance 'prodigieuse' est si extraordinaire qu'elle semble tenir du prodige, dépassant les attentes et les capacités humaines normales."
    },
    {
        id: "fr-53",
        sentence: "Les conditions météorologiques étaient défavorables pour le lancement de la fusée.",
        targetWord: "défavorables",
        targetWordIndex: 4,
        options: [
            { word: "adverses", score: 100, feedback: "Parfait ! 'Adverses' s'opposent activement au bon déroulement d'une activité, impliquant une opposition hostile." },
            { word: "hostiles", score: 95, feedback: "'Hostiles' sont très défavorables et même agressives, souvent utilisées dans un contexte militaire." },
            { word: "néfastes", score: 85, feedback: "'Néfastes' sont nuisibles, mais avec une connotation plus générale de causer du mal." },
            { word: "incommodantes", score: 70, feedback: "'Incommodantes' gênent et causent un inconfort, mais sont moins fortes." }
        ],
        bestAnswer: "adverses",
        explanation: "Des conditions 'adverses' sont contraires et opposées à ce qui est souhaité, créant des obstacles difficiles à surmonter."
    },
    {
        id: "fr-54",
        sentence: "Le discours du dirigeant était vague et manquait de propositions concrètes.",
        targetWord: "vague",
        targetWordIndex: 5,
        options: [
            { word: "évasif", score: 100, feedback: "Parfait ! 'Évasif' cherche à éviter de s'engager ou de donner des détails précis, souvent délibérément." },
            { word: "imprécis", score: 85, feedback: "'Imprécis' manque de précision, mais pas forcément avec l'intention d'esquiver." },
            { word: "flou", score: 90, feedback: "'Flou' manque de netteté, ce qui est proche, mais moins connoté politiquement." },
            { word: "indéterminé", score: 80, feedback: "'Indéterminé' n'est pas fixé ou décidé, mais peut être involontaire." }
        ],
        bestAnswer: "évasif",
        explanation: "Un discours 'évasif' est intentionnellement vague pour ne pas aborder les points sensibles ou pour éviter de prendre des engagements clairs."
    },
    {
        id: "fr-55",
        sentence: "La ressemblance entre les deux jumeaux était frappante et trompait souvent leur entourage.",
        targetWord: "frappante",
        targetWordIndex: 7,
        options: [
            { word: "sidérante", score: 100, feedback: "Parfait ! 'Sidérante' frappe de stupeur, tellement elle est surprenante et incroyable." },
            { word: "stupéfiante", score: 95, feedback: "'Stupéfiante' étonne au point de laisser sans voix, très proche." },
            { word: "saisissante", score: 90, feedback: "'Saisissante' attire immédiatement l'attention par son intensité." },
            { word: "remarquable", score: 80, feedback: "'Remarquable' est digne d'être remarqué, mais moins fort." }
        ],
        bestAnswer: "sidérante",
        explanation: "Une ressemblance 'sidérante' est si étonnante qu'elle provoque une surprise mêlée d'incrédulité, comme un coup de foudre."
    },
    {
        id: "fr-56",
        sentence: "La décision du jury fut immuable malgré les pressions extérieures.",
        targetWord: "immuable",
        targetWordIndex: 5,
        options: [
            { word: "inaltérable", score: 95, feedback: "'Inaltérable' ne peut être modifié ou altéré, très proche." },
            { word: "inflexible", score: 100, feedback: "Parfait ! 'Inflexible' ne fléchit pas, ne cède à aucun changement ou influence, impliquant une fermeté de volonté." },
            { word: "invariable", score: 85, feedback: "'Invariable' ne change pas, mais plus neutre et moins fort." },
            { word: "pérenne", score: 80, feedback: "'Pérenne' dure longtemps, mais ne s'applique pas forcément à une décision ponctuelle." }
        ],
        bestAnswer: "inflexible",
        explanation: "Une décision 'inflexible' reste ferme et ne plie devant aucune tentative de la faire changer, montrant une détermination absolue."
    },
    {
        id: "fr-57",
        sentence: "Le secret était bien gardé et n'a été découvert que des décennies plus tard.",
        targetWord: "bien",
        targetWordIndex: 3,
        options: [
            { word: "jalousement", score: 100, feedback: "Parfait ! 'Jalousement' gardé implique une protection vigilante et exclusive, comme un trésor." },
            { word: "soigneusement", score: 90, feedback: "'Soigneusement' avec grand soin, mais sans la connotation de possessivité." },
            { word: "hermétiquement", score: 95, feedback: "'Hermétiquement' de manière totalement étanche et impénétrable, métaphore forte." },
            { word: "rigoureusement", score: 85, feedback: "'Rigoureusement' avec une stricte observance des règles, convient aussi." }
        ],
        bestAnswer: "jalousement",
        explanation: "Un secret 'jalousement' gardé est protégé avec une vigilance possessive, comme un bien précieux que l'on ne veut partager avec personne."
    },
    {
        id: "fr-58",
        sentence: "L'opposition entre les deux théories était nette et irréductible.",
        targetWord: "nette",
        targetWordIndex: 5,
        options: [
            { word: "tranchée", score: 95, feedback: "'Tranchée' est clairement définie, comme coupée au couteau, sans zone grise." },
            { word: "manifeste", score: 90, feedback: "'Manifeste' est évidente et facile à percevoir." },
            { word: "patente", score: 85, feedback: "'Patente' est évidente et incontestable, un peu formel." },
            { word: "irrécusable", score: 100, feedback: "Parfait ! 'Irréfutable' s'impose de manière absolue, ne laissant aucune place au doute ou à la conciliation." }
        ],
        bestAnswer: "irrécusable",
        explanation: "Une opposition 'irréfutable' est si évidente et logiquement nécessaire qu'elle ne peut être niée ou atténuée."
    },
    {
        id: "fr-59",
        sentence: "La lumière de l'aube était douce et apaisante.",
        targetWord: "douce",
        targetWordIndex: 5,
        options: [
            { word: "délicate", score: 90, feedback: "'Délicate' est fine et légère, mais peut manquer la dimension apaisante." },
            { word: "sereine", score: 95, feedback: "'Sereine' est calme et paisible, très proche." },
            { word: "suave", score: 100, feedback: "Parfait ! 'Suave' est douce et agréable de manière enveloppante et sensuelle." },
            { word: "tendre", score: 85, feedback: "'Tendre' évoque la délicatesse et la gentillesse, plus souvent pour les sentiments." }
        ],
        bestAnswer: "suave",
        explanation: "Une lumière 'suave' caresse les sens par sa douceur agréable et enveloppante, procurant une sensation de bien-être."
    },
    {
        id: "fr-60",
        sentence: "L'erreur dans le calcul était minime mais a conduit à un résultat complètement faux.",
        targetWord: "minime",
        targetWordIndex: 6,
        options: [
            { word: "infime", score: 95, feedback: "'Infime' extrêmement petite, presque négligeable." },
            { word: "négligeable", score: 90, feedback: "'Négligeable' si petite qu'on peut la négliger, mais ici elle a eu des conséquences." },
            { word: "imperceptible", score: 100, feedback: "Parfait ! 'Imperceptible' ne peut être perçue, tellement elle est petite, mais son impact est énorme." },
            { word: "minuscule", score: 85, feedback: "'Minuscule' très petite, mais moins technique." }
        ],
        bestAnswer: "imperceptible",
        explanation: "Une erreur 'imperceptible' est si petite qu'elle échappe à la détection, mais peut avoir des effets disproportionnés dans des systèmes sensibles."
    },
    {
        id: "fr-61",
        sentence: "La découverte scientifique fut majeure et a changé notre compréhension de l'univers.",
        targetWord: "majeure",
        targetWordIndex: 4,
        options: [
            { word: "capitale", score: 95, feedback: "'Capitale' d'une importance primordiale, comme la capitale d'un pays." },
            { word: "fondamentale", score: 90, feedback: "'Fondamentale' sert de fondement, essentielle." },
            { word: "révolutionnaire", score: 100, feedback: "Parfait ! 'Révolutionnaire' bouleverse les connaissances établies et provoque un changement de paradigme." },
            { word: "cruciale", score: 85, feedback: "'Cruciale' est décisive à un moment critique, mais peut être moins durable." }
        ],
        bestAnswer: "révolutionnaire",
        explanation: "Une découverte 'révolutionnaire' transforme radicalement un domaine de connaissance, renversant les théories antérieures."
    },
    {
        id: "fr-62",
        sentence: "La colère du public était intense après l'annonce de la mesure impopulaire.",
        targetWord: "intense",
        targetWordIndex: 5,
        options: [
            { word: "véhémente", score: 100, feedback: "Parfait ! 'Véhémente' est violente et passionnée, exprimée avec force et emportement." },
            { word: "ardente", score: 90, feedback: "'Ardente' brûlante, passionnée, mais peut être positive." },
            { word: "déchaînée", score: 95, feedback: "'Déchaînée' libérée et incontrôlable, comme une tempête." },
            { word: "exacerbée", score: 85, feedback: "'Exacerbée' portée à son paroxysme, rendue plus aiguë." }
        ],
        bestAnswer: "véhémente",
        explanation: "Une colère 'véhémente' se manifeste par des expressions violentes et passionnées, reflet d'une indignation profonde."
    },
    {
        id: "fr-63",
        sentence: "Le lien entre ces deux variables est ténu et difficile à prouver.",
        targetWord: "ténu",
        targetWordIndex: 6,
        options: [
            { word: "ténu", score: 100, feedback: "Parfait ! 'Ténu' est très mince, faible, presque insaisissable, ce qui rend la preuve difficile." },
            { word: "faible", score: 80, feedback: "'Faible' manque de force, mais est plus général." },
            { word: "ténu", score: 90, feedback: "'Ténu' est très fin et délicat, mais peut aussi signifier faible en intensité." },
            { word: "subtile", score: 85, feedback: "'Subtile' est fine et difficile à percevoir, mais souvent avec une connotation d'intelligence." }
        ],
        bestAnswer: "ténu",
        explanation: "Attention : le bestAnswer est identique au targetWord. Je vais modifier la phrase ou les options pour éviter cela. Je vais changer le targetWord dans la phrase pour 'ténu' et proposer un meilleur synonyme."
    },
    {
        id: "fr-63 corrigée",
        sentence: "Le lien entre ces deux variables est faible et difficile à prouver.",
        targetWord: "faible",
        targetWordIndex: 6,
        options: [
            { word: "ténu", score: 100, feedback: "Parfait ! 'Ténu' est très mince, faible, presque insaisissable, ce qui rend la preuve difficile." },
            { word: "léger", score: 75, feedback: "'Léger' de peu de poids, moins adapté pour un lien abstrait." },
            { word: "incertain", score: 85, feedback: "'Incertain' n'est pas assuré, mais ne décrit pas directement la force du lien." },
            { word: "fragile", score: 90, feedback: "'Fragile' peut se rompre facilement, mais insiste sur la solidité plutôt que l'intensité." }
        ],
        bestAnswer: "ténu",
        explanation: "Un lien 'ténu' est si mince et faible qu'il est à la limite de l'inexistence, rendant toute démonstration ardue."
    },
    {
        id: "fr-64",
        sentence: "La réunion fut brève et n'a abordé que les points essentiels.",
        targetWord: "brève",
        targetWordIndex: 3,
        options: [
            { word: "concis", score: 95, feedback: "'Concis' va à l'essentiel sans digression, mais qualifie plutôt le discours que la durée." },
            { word: "courte", score: 80, feedback: "'Courte' de courte durée, synonyme simple." },
            { word: "lapidaire", score: 100, feedback: "Parfait ! 'Lapidaire' exprime l'essentiel en très peu de mots, avec une efficacité tranchante." },
            { word: "succincte", score: 90, feedback: "'Succincte' traitée brièvement mais complètement, en quelques mots." }
        ],
        bestAnswer: "lapidaire",
        explanation: "Une réunion 'lapidaire' est d'une brièveté qui n'omet rien d'important, allant droit au but avec une économie de moyens."
    },
    {
        id: "fr-65",
        sentence: "La preuve apportée par l'accusation était solide et difficile à contester.",
        targetWord: "solide",
        targetWordIndex: 6,
        options: [
            { word: "robuste", score: 90, feedback: "'Robuste' résistante, souvent pour des objets physiques." },
            { word: "irréfutable", score: 100, feedback: "Parfait ! 'Irréfutable' ne peut être réfutée, s'imposant par sa logique ou son évidence." },
            { word: "ferme", score: 80, feedback: "'Ferme' inébranlable, mais moins technique en droit." },
            { word: "inattaquable", score: 95, feedback: "'Inattaquable' ne peut être attaquée ou critiquée, très proche." }
        ],
        bestAnswer: "irréfutable",
        explanation: "Une preuve 'irréfutable' est d'une force logique ou factuelle telle qu'aucun argument ne peut la mettre en doute."
    },
    {
        id: "fr-66",
        sentence: "La paix qui régnait dans le village était fragile et menacée par des tensions voisines.",
        targetWord: "fragile",
        targetWordIndex: 6,
        options: [
            { word: "précaire", score: 100, feedback: "Parfait ! 'Précaire' instable et incertaine, pouvant cesser à tout moment." },
            { word: "délicate", score: 85, feedback: "'Délicate' nécessite des précautions, mais pas forcément instable." },
            { word: "éphémère", score: 90, feedback: "'Éphémère' de courte durée, mais pas nécessairement menacée." },
            { word: "vacillante", score: 95, feedback: "'Vacillante' chancelante, sur le point de tomber, image forte." }
        ],
        bestAnswer: "précaire",
        explanation: "Une paix 'précaire' tient à peu de chose, maintenue dans un équilibre instable qui peut être rompu par le moindre incident."
    },
    {
        id: "fr-67",
        sentence: "L'analyse du sociologue était nuancée et évitait les généralisations abusives.",
        targetWord: "nuancée",
        targetWordIndex: 5,
        options: [
            { word: "subtile", score: 95, feedback: "'Subtile' fine et délicate, qui distingue des différences imperceptibles." },
            { word: "différenciée", score: 90, feedback: "'Différenciée' qui opère des distinctions, évite l'uniformisation." },
            { word: "chatoyante", score: 100, feedback: "Parfait ! 'Chatoyante' (au sens figuré) présente des variations de tons et de couleurs, une richesse de nuances." },
            { word: "complexe", score: 85, feedback: "'Complexe' composée de multiples éléments, mais pas forcément nuancée." }
        ],
        bestAnswer: "chatoyante",
        explanation: "Une analyse 'chatoyante' offre une palette de nuances changeantes selon les angles, évitant les jugements monolithiques."
    },
    {
        id: "fr-68",
        sentence: "L'engagement des bénévoles était total et sans réserve.",
        targetWord: "total",
        targetWordIndex: 4,
        options: [
            { word: "absolu", score: 95, feedback: "'Absolu' sans restriction, complet." },
            { word: "inconditionnel", score: 100, feedback: "Parfait ! 'Inconditionnel' ne dépend d'aucune condition, donné sans attente en retour." },
            { word: "entier", score: 90, feedback: "'Entier' complet, mais moins fort." },
            { word: "illimité", score: 85, feedback: "'Illimité' sans limites, mais peut s'appliquer à des ressources." }
        ],
        bestAnswer: "inconditionnel",
        explanation: "Un engagement 'inconditionnel' est donné librement, sans exiger de contrepartie et quelles que soient les circonstances."
    },
    {
        id: "fr-69",
        sentence: "Le conflit entre les deux familles était ancien et remontait à plusieurs générations.",
        targetWord: "ancien",
        targetWordIndex: 5,
        options: [
            { word: "séculaire", score: 100, feedback: "Parfait ! 'Séculaire' qui dure depuis plusieurs siècles, impliquant une longue tradition." },
            { word: "vétéran", score: 70, feedback: "'Vétéran' expérimenté, mais s'applique à des personnes, pas à des conflits." },
            { word: "antique", score: 85, feedback: "'Antique' très ancien, vient de l'Antiquité, peut-être trop." },
            { word: "ancestral", score: 95, feedback: "'Ancestral' transmis par les ancêtres, hérité du passé lointain." }
        ],
        bestAnswer: "séculaire",
        explanation: "Un conflit 'séculaire' perdure depuis des siècles, semblant faire partie de l'histoire même des parties concernées."
    },
    {
        id: "fr-70",
        sentence: "La ressemblance entre les deux œuvres d'art était troublante et suggérait un plagiat.",
        targetWord: "troublante",
        targetWordIndex: 7,
        options: [
            { word: "dérangeante", score: 90, feedback: "'Dérangeante' perturbe la tranquillité, mais pas spécifique au doute." },
            { word: "inquiétante", score: 85, feedback: "'Inquiétante' cause de l'inquiétude, plus large." },
            { word: "suspecte", score: 95, feedback: "'Suspecte' éveille la suspicion, oriente vers une malversation." },
            { word: "équivoque", score: 100, feedback: "Parfait ! 'Équivoque' prête à confusion, peut avoir deux interprétations, dont une malhonnête." }
        ],
        bestAnswer: "équivoque",
        explanation: "Une ressemblance 'équivoque' est ambiguë et laisse planer un doute sur son origine, pouvant cacher un emprunt illégitime."
    },
    {
        id: "fr-71",
        sentence: "La décision de justice a créé un précédent important pour les affaires futures.",
        targetWord: "important",
        targetWordIndex: 7,
        options: [
            { word: "majeur", score: 90, feedback: "'Majeur' de grande importance, très proche." },
            { word: "fondamental", score: 95, feedback: "'Fondamental' sert de base, essentiel." },
            { word: "capital", score: 100, feedback: "Parfait ! 'Capital' d'une importance primordiale, décisif pour l'avenir." },
            { word: "significatif", score: 85, feedback: "'Significatif' qui a un sens, notable, mais moins fort." }
        ],
        bestAnswer: "capital",
        explanation: "Un précédent 'capital' est d'une importance telle qu'il influencera de manière décisive les décisions futures, servant de référence obligée."
    },
    {
        id: "fr-72",
        sentence: "La frontière entre le réel et l'imaginaire dans ce roman est floue et perméable.",
        targetWord: "floue",
        targetWordIndex: 8,
        options: [
            { word: "imprécise", score: 85, feedback: "'Imprécise' manque de précision, correct." },
            { word: "estompée", score: 90, feedback: "'Estompée' dont les contours sont atténués, image picturale." },
            { word: "vaporeuse", score: 95, feedback: "'Vaporeuse' légère comme la vapeur, éthérée, convient pour l'imaginaire." },
            { word: "labile", score: 100, feedback: "Parfait ! 'Labile' instable, susceptible de glisser d'un état à l'autre, notion de mouvement." }
        ],
        bestAnswer: "labile",
        explanation: "Une frontière 'labile' n'est pas fixe, elle fluctue et permet des passages constants d'un côté à l'autre, brouillant les catégories."
    },
    {
        id: "fr-73",
        sentence: "La critique du film fut élogieuse et a contribué à son succès en salle.",
        targetWord: "élogieuse",
        targetWordIndex: 5,
        options: [
            { word: "dithyrambique", score: 100, feedback: "Parfait ! 'Dithyrambique' excessivement élogieuse, enthousiaste au point de l'excès." },
            { word: "élogieuse", score: 90, feedback: "'Élogieuse' qui fait l'éloge, mais moins intense." },
            { word: "panégyrique", score: 95, feedback: "'Panégyrique' discours public à la louange, souvent formel." },
            { word: "complimenteuse", score: 80, feedback: "'Complimenteuse' qui donne des compliments, plus faible." }
        ],
        bestAnswer: "dithyrambique",
        explanation: "Une critique 'dithyrambique' est un hymne de louanges exubérant, dépassant la simple approbation pour verser dans l'enthousiasme pur."
    },
    {
        id: "fr-74",
        sentence: "La situation économique du pays est instable et préoccupante.",
        targetWord: "instable",
        targetWordIndex: 5,
        options: [
            { word: "fluctuante", score: 90, feedback: "'Fluctuante' varie beaucoup, mais peut être normale." },
            { word: "chancelante", score: 95, feedback: "'Chancelante' vacillante, sur le point de tomber, image forte." },
            { word: "versatile", score: 85, feedback: "'Versatile' changeante, mais s'applique plus aux personnes." },
            { word: "éruptive", score: 100, feedback: "Parfait ! 'Éruptive' sujette à des crises soudaines et violentes, comme un volcan." }
        ],
        bestAnswer: "éruptive",
        explanation: "Une situation 'éruptive' est caractérisée par des crises imprévisibles et violentes qui menacent l'équilibre général."
    },
    {
        id: "fr-75",
        sentence: "L'argument développé par le philosophe était convaincant et bien structuré.",
        targetWord: "convaincant",
        targetWordIndex: 6,
        options: [
            { word: "probant", score: 95, feedback: "'Probant' qui prouve de manière certaine, très technique." },
            { word: "persuasif", score: 100, feedback: "Parfait ! 'Persuasif' a le pouvoir de persuader, d'emporter l'adhésion par la force de la raison." },
            { word: "irréfutable", score: 90, feedback: "'Irréfutable' ne peut être réfuté, mais peut manquer la dimension de séduction." },
            { word: "cogent", score: 85, feedback: "'Cogent' (terme de logique) qui s'impose par sa nécessité interne, rare." }
        ],
        bestAnswer: "persuasif",
        explanation: "Un argument 'persuasif' combine la logique rigoureuse et une présentation qui séduit l'esprit, conduisant à l'adhésion."
    },
    {
        id: "fr-76",
        sentence: "Le silence dans la salle était complet pendant le discours.",
        targetWord: "complet",
        targetWordIndex: 5,
        options: [
            { word: "absolu", score: 95, feedback: "'Absolu' sans la moindre faille, très fort." },
            { word: "total", score: 90, feedback: "'Total' entier, sans exception." },
            { word: "assourdissant", score: 100, feedback: "Parfait ! 'Assourdissant' métaphore oxymorique pour un silence si intense qu'il en devient bruyant." },
            { word: "parfait", score: 85, feedback: "'Parfait' sans défaut, mais moins expressif." }
        ],
        bestAnswer: "assourdissant",
        explanation: "Un silence 'assourdissant' est si dense et pesant qu'il semble absorber tout son, créant une impression d'intensité extrême."
    },
    {
        id: "fr-77",
        sentence: "La progression de la maladie fut rapide et inattendue.",
        targetWord: "rapide",
        targetWordIndex: 5,
        options: [
            { word: "fulgurante", score: 100, feedback: "Parfait ! 'Fulgurante' aussi rapide que l'éclair, soudaine et brutale." },
            { word: "accélérée", score: 85, feedback: "'Accélérée' dont la vitesse a augmenté." },
            { word: "précipitée", score: 90, feedback: "'Précipitée' très rapide, souvent désordonnée." },
            { word: "expéditive", score: 80, feedback: "'Expéditive' réglée rapidement, mais pour une procédure." }
        ],
        bestAnswer: "fulgurante",
        explanation: "Une progression 'fulgurante' est extrêmement rapide, foudroyante, laissant peu de temps pour réagir."
    },
    {
        id: "fr-78",
        sentence: "La différence entre les deux versions du texte est minime et à peine perceptible.",
        targetWord: "minime",
        targetWordIndex: 7,
        options: [
            { word: "infime", score: 95, feedback: "'Infime' extrêmement petite." },
            { word: "imperceptible", score: 100, feedback: "Parfait ! 'Imperceptible' ne peut être perçue, même avec attention." },
            { word: "négligeable", score: 90, feedback: "'Négligeable' si petite qu'on peut l'ignorer." },
            { word: "ténue", score: 85, feedback: "'Ténue' faible et délicate." }
        ],
        bestAnswer: "imperceptible",
        explanation: "Une différence 'imperceptible' échappe à la détection, même pour un observateur attentif, et n'a souvent pas de conséquence pratique."
    },
    {
        id: "fr-79",
        sentence: "La découverte archéologique fut exceptionnelle et a éclairé une période méconnue.",
        targetWord: "exceptionnelle",
        targetWordIndex: 4,
        options: [
            { word: "inouïe", score: 100, feedback: "Parfait ! 'Inouïe' extraordinaire au point de ne jamais avoir été entendue auparavant, unique." },
            { word: "insolite", score: 85, feedback: "'Insolite' étrange et surprenante, mais pas forcément importante." },
            { word: "prodigieuse", score: 95, feedback: "'Prodigieuse' merveilleuse, tenant du prodige." },
            { word: "singulière", score: 90, feedback: "'Singulière' remarquable par son caractère unique." }
        ],
        bestAnswer: "inouïe",
        explanation: "Une découverte 'inouïe' est si extraordinaire qu'elle dépasse tout ce qui a été connu auparavant, ouvrant de nouvelles perspectives."
    },
    {
        id: "fr-80",
        sentence: "L'atmosphère de la vieille maison était sinistre et décourageait les visiteurs.",
        targetWord: "sinistre",
        targetWordIndex: 5,
        options: [
            { word: "lugubre", score: 95, feedback: "'Lugubre' triste et sombre, évoquant la mort." },
            { word: "funèbre", score: 100, feedback: "Parfait ! 'Funèbre' propre à un enterrement, d'une tristesse solennelle et glaciale." },
            { word: "morne", score: 90, feedback: "'Morne' sans éclat, déprimant." },
            { word: "macabre", score: 85, feedback: "'Macabre' qui évoque la mort de manière horrible." }
        ],
        bestAnswer: "funèbre",
        explanation: "Une atmosphère 'funèbre' est imprégnée d'une tristesse grave et solennelle, comme lors de funérailles, inspirant le recueillement et l'effroi."
    },
    {
        id: "fr-81",
        sentence: "La réaction de la foule fut spontanée et unanime.",
        targetWord: "spontanée",
        targetWordIndex: 5,
        options: [
            { word: "impulsive", score: 90, feedback: "'Impulsive' faite sous l'impulsion du moment, sans réflexion." },
            { word: "automatique", score: 85, feedback: "'Automatique' mécanique, sans intervention de la volonté." },
            { word: "irréfléchie", score: 80, feedback: "'Irréfléchie' sans réflexion, souvent avec une connotation négative." },
            { word: "grégaire", score: 100, feedback: "Parfait ! 'Grégaire' qui suit l'instinct de groupe, se conformant au comportement collectif." }
        ],
        bestAnswer: "grégaire",
        explanation: "Une réaction 'grégaire' est celle d'un groupe agissant comme un seul être, par conformisme instinctif plutôt que par décision individuelle."
    },
    {
        id: "fr-82",
        sentence: "La preuve de son innocence était évidente et a immédiatement convaincu le jury.",
        targetWord: "évidente",
        targetWordIndex: 5,
        options: [
            { word: "manifeste", score: 90, feedback: "'Manifeste' clairement apparente." },
            { word: "patente", score: 85, feedback: "'Patente' évidente et incontestable." },
            { word: "irréfutable", score: 95, feedback: "'Irréfutable' ne peut être réfutée." },
            { word: "aveuglante", score: 100, feedback: "Parfait ! 'Aveuglante' d'une clarté si éclatante qu'elle s'impose de manière fulgurante." }
        ],
        bestAnswer: "aveuglante",
        explanation: "Une preuve 'aveuglante' est d'une évidence si lumineuse qu'elle ne laisse aucune place au doute, éclairant instantanément la vérité."
    },
    {
        id: "fr-83",
        sentence: "Le changement dans l'attitude du personnage est progressif et subtil.",
        targetWord: "progressif",
        targetWordIndex: 6,
        options: [
            { word: "graduel", score: 95, feedback: "'Graduel' qui se fait par degrés, presque synonyme." },
            { word: "insidieux", score: 100, feedback: "Parfait ! 'Insidieux' agit de façon cachée et progressive, sans qu'on s'en aperçoive au premier abord." },
            { word: "continu", score: 85, feedback: "'Continu' sans interruption, mais pas forcément lent." },
            { word: "imperceptible", score: 90, feedback: "'Imperceptible' ne peut être perçu, mais peut être trop fort." }
        ],
        bestAnswer: "insidieux",
        explanation: "Un changement 'insidieux' s'installe lentement et sournoisement, de manière à ne pas être remarqué jusqu'à ce qu'il soit trop tard."
    },
    {
        id: "fr-84",
        sentence: "La similarité entre les deux textes est frappante et suggère une influence directe.",
        targetWord: "frappante",
        targetWordIndex: 7,
        options: [
            { word: "sidérante", score: 100, feedback: "Parfait ! 'Sidérante' frappe de stupeur, tellement elle est surprenante." },
            { word: "stupéfiante", score: 95, feedback: "'Stupéfiante' étonnante au point de paralyser l'esprit." },
            { word: "saisissante", score: 90, feedback: "'Saisissante' qui saisit l'attention immédiatement." },
            { word: "remarquable", score: 80, feedback: "'Remarquable' digne d'être remarqué, mais moins fort." }
        ],
        bestAnswer: "sidérante",
        explanation: "Une similarité 'sidérante' est si étonnante qu'elle laisse sans voix, comme un coup de tonnerre dans un ciel serein."
    },
    {
        id: "fr-85",
        sentence: "La décision du comité fut unanime et sans aucune opposition.",
        targetWord: "unanime",
        targetWordIndex: 5,
        options: [
            { word: "consensuelle", score: 100, feedback: "Parfait ! 'Consensuelle' obtenue par consensus, impliquant l'accord de tous après discussion." },
            { word: "unanime", score: 95, feedback: "'Unanime' adoptée à l'unanimité, mais c'est le mot cible." },
            { word: "collective", score: 85, feedback: "'Collective' prise par le groupe, mais pas nécessairement avec accord total." },
            { word: "concordante", score: 90, feedback: "'Concordante' en accord, harmonieuse." }
        ],
        bestAnswer: "consensuelle",
        explanation: "Une décision 'consensuelle' est le fruit d'un accord général obtenu après concertation, reflétant une volonté commune."
    },
    {
        id: "fr-86",
        sentence: "La méfiance entre les deux communautés était ancienne et profondément enracinée.",
        targetWord: "ancienne",
        targetWordIndex: 5,
        options: [
            { word: "séculaire", score: 100, feedback: "Parfait ! 'Séculaire' vieille de plusieurs siècles, ancrée dans l'histoire." },
            { word: "invétérée", score: 95, feedback: "'Invétérée' ancrée par l'habitude depuis longtemps, difficile à déraciner." },
            { word: "vétuste", score: 70, feedback: "'Vétuste' vieilli et délabré, pour des objets." },
            { word: "antique", score: 85, feedback: "'Antique' très ancienne, remontant à l'Antiquité." }
        ],
        bestAnswer: "séculaire",
        explanation: "Une méfiance 'séculaire' est héritée d'un passé lointain, transmise de génération en génération comme une tradition."
    },
    {
        id: "fr-87",
        sentence: "La réponse de l'étudiant fut précise et démontrait une bonne compréhension du sujet.",
        targetWord: "précise",
        targetWordIndex: 5,
        options: [
            { word: "exacte", score: 90, feedback: "'Exacte' conforme à la vérité." },
            { word: "rigoureuse", score: 95, feedback: "'Rigoureuse' méthodique et strictement conforme aux règles." },
            { word: "punctuelle", score: 100, feedback: "Parfait ! 'Punctuelle' (au sens de point par point) qui traite chaque détail avec exactitude." },
            { word: "correcte", score: 80, feedback: "'Correcte' sans faute, mais peut être minimale." }
        ],
        bestAnswer: "punctuelle",
        explanation: "Une réponse 'punctuelle' aborde chaque point avec une exactitude scrupuleuse, sans omission ni approximation."
    },
    {
        id: "fr-88",
        sentence: "L'obscurité dans la forêt était totale et empêchait tout repérage.",
        targetWord: "totale",
        targetWordIndex: 5,
        options: [
            { word: "absolue", score: 95, feedback: "'Absolue' sans la moindre faille." },
            { word: "complète", score: 90, feedback: "'Complète' entière, sans reste." },
            { word: "opaque", score: 100, feedback: "Parfait ! 'Opaque' si dense qu'aucune lumière ne la traverse, métaphore matérielle." },
            { word: "profonde", score: 85, feedback: "'Profonde' intense, mais moins spécifique." }
        ],
        bestAnswer: "opaque",
        explanation: "Une obscurité 'opaque' est impénétrable à la lumière, créant un écran noir qui rend toute vision impossible."
    },
    {
        id: "fr-89",
        sentence: "La chaleur dans la pièce était étouffante et difficile à supporter.",
        targetWord: "étouffante",
        targetWordIndex: 5,
        options: [
            { word: "suffocante", score: 100, feedback: "Parfait ! 'Suffocante' empêche de respirer, oppressante au point de menacer l'asphyxie." },
            { word: "accablante", score: 95, feedback: "'Accablante' écrasante, qui accable." },
            { word: "torride", score: 90, feedback: "'Torride' brûlante, comme sous les tropiques." },
            { word: "caniculaire", score: 85, feedback: "'Caniculaire' propre à la canicule, très chaude." }
        ],
        bestAnswer: "suffocante",
        explanation: "Une chaleur 'suffocante' prive littéralement d'air, rendant la respiration laborieuse et créant une sensation d'oppression."
    },
    {
        id: "fr-90",
        sentence: "L'analyse des données fut minutieuse et a révélé des patterns insoupçonnés.",
        targetWord: "minutieuse",
        targetWordIndex: 5,
        options: [
            { word: "méticuleuse", score: 95, feedback: "'Méticuleuse' extrêmement attentive aux détails." },
            { word: "scrupuleuse", score: 90, feedback: "'Scrupuleuse' guidée par un souci de perfection et d'exactitude." },
            { word: "pointilleuse", score: 85, feedback: "'Pointilleuse' qui s'attache à des détails insignifiants, parfois avec une connotation négative." },
            { word: "exhaustive", score: 100, feedback: "Parfait ! 'Exhaustive' qui examine tout, ne laissant rien de côté, combinant minutie et complétude." }
        ],
        bestAnswer: "exhaustive",
        explanation: "Une analyse 'exhaustive' explore toutes les possibilités, laissant aucun aspect inexploré, garantissant ainsi des conclusions solides."
    },
    {
        id: "fr-91",
        sentence: "La rivalité entre les deux entreprises était féroce et sans merci.",
        targetWord: "féroce",
        targetWordIndex: 6,
        options: [
            { word: "acharnée", score: 100, feedback: "Parfait ! 'Acharnée' menée avec une détermination violente et persistante, sans relâche." },
            { word: "sanglante", score: 90, feedback: "'Sanglante' qui fait couler le sang, trop violent pour une rivalité économique." },
            { word: "impitoyable", score: 95, feedback: "'Impitoyable' sans pitié, très proche." },
            { word: "sauvage", score: 85, feedback: "'Sauvage' brutale et dénuée de règles, mais moins organisée." }
        ],
        bestAnswer: "acharnée",
        explanation: "Une rivalité 'acharnée' est menée avec une intensité et une persévérance extrêmes, chaque partie cherchant à anéantir l'autre."
    },
    {
        id: "fr-92",
        sentence: "La réputation de l'écrivain était immense et incontestée.",
        targetWord: "immense",
        targetWordIndex: 5,
        options: [
            { word: "colossale", score: 95, feedback: "'Colossale' de dimensions gigantesques, comme un colosse." },
            { word: "prodigieuse", score: 100, feedback: "Parfait ! 'Prodigieuse' extraordinaire, digne d'un prodige, évoquant l'admiration." },
            { word: "considérable", score: 90, feedback: "'Considérable' très grande, importante." },
            { word: "monumentale", score: 85, feedback: "'Monumentale' imposante comme un monument, souvent pour une œuvre." }
        ],
        bestAnswer: "prodigieuse",
        explanation: "Une réputation 'prodigieuse' est si grande qu'elle semble surnaturelle, suscitant l'émerveillement et le respect universel."
    },
    {
        id: "fr-93",
        sentence: "L'erreur dans le raisonnement était grossière et aurait pu être évitée.",
        targetWord: "grossière",
        targetWordIndex: 6,
        options: [
            { word: "crasse", score: 100, feedback: "Parfait ! 'Crasse' ignorance totale et choquante, erreur flagrante et inadmissible." },
            { word: "lourde", score: 90, feedback: "'Lourde' importante et manifeste." },
            { word: "évidente", score: 85, feedback: "'Évidente' facile à voir, mais pas nécessairement grossière." },
            { word: "patente", score: 95, feedback: "'Patente' évidente et incontestable, souvent publique." }
        ],
        bestAnswer: "crasse",
        explanation: "Une erreur 'crasse' est d'une stupidité tellement flagrante qu'elle indique une ignorance complète ou une négligence coupable."
    },
    {
        id: "fr-94",
        sentence: "La confiance entre les partenaires était réciproque et fondée sur une longue collaboration.",
        targetWord: "réciproque",
        targetWordIndex: 6,
        options: [
            { word: "mutuelle", score: 95, feedback: "'Mutuelle' partagée de part et d'autre, presque synonyme." },
            { word: "bilatérale", score: 100, feedback: "Parfait ! 'Bilatérale' qui engage les deux parties de manière égale et formelle, terme de relations internationales." },
            { word: "symétrique", score: 85, feedback: "'Symétrique' équilibrée, mais moins pour les relations humaines." },
            { word: "partagée", score: 90, feedback: "'Partagée' commune, mais moins précise." }
        ],
        bestAnswer: "bilatérale",
        explanation: "Une confiance 'bilatérale' est un engagement réciproque et équilibré, où chaque partie s'engage envers l'autre de manière formelle et égale."
    },
    {
        id: "fr-95",
        sentence: "La croissance économique du pays fut régulière et soutenue sur plusieurs années.",
        targetWord: "régulière",
        targetWordIndex: 5,
        options: [
            { word: "constante", score: 95, feedback: "'Constante' qui reste la même, sans variation." },
            { word: "linéaire", score: 100, feedback: "Parfait ! 'Linéaire' qui suit une ligne droite, sans à-coups, progression uniforme." },
            { word: "continue", score: 90, feedback: "'Continue' sans interruption." },
            { word: "stable", score: 85, feedback: "'Stable' qui ne fluctue pas, mais pas forcément en croissance." }
        ],
        bestAnswer: "linéaire",
        explanation: "Une croissance 'linéaire' suit une progression constante et prévisible, comme une droite, sans fluctuations significatives."
    },
    {
        id: "fr-96",
        sentence: "L'ambition du projet était démesurée et semblait irréaliste.",
        targetWord: "démesurée",
        targetWordIndex: 5,
        options: [
            { word: "exorbitante", score: 95, feedback: "'Exorbitante' qui excède les limites normales, souvent pour des prix." },
            { word: "pharaonique", score: 100, feedback: "Parfait ! 'Pharaonique' d'une ampleur gigantesque, comme les constructions des pharaons, dépassant l'entendement." },
            { word: "extravagante", score: 90, feedback: "'Extravagante' excessive et bizarre." },
            { word: "déraisonnable", score: 85, feedback: "'Déraisonnable' contraire à la raison, mais moins imagé." }
        ],
        bestAnswer: "pharaonique",
        explanation: "Une ambition 'pharaonique' vise des réalisations colossales, à l'image des pyramides, nécessitant des moyens immenses et une volonté hors norme."
    },
    {
        id: "fr-97",
        sentence: "La lueur à l'horizon était faible mais donnait un peu d'espoir.",
        targetWord: "faible",
        targetWordIndex: 5,
        options: [
            { word: "ténue", score: 100, feedback: "Parfait ! 'Ténue' très faible, à peine perceptible, comme un fil fragile." },
            { word: "pâle", score: 95, feedback: "'Pâle' sans éclat, faible en intensité lumineuse." },
            { word: "vacillante", score: 90, feedback: "'Vacillante' qui tremble, instable." },
            { word: "médiocre", score: 70, feedback: "'Médiocre' de qualité moyenne, pas adapté pour une lueur." }
        ],
        bestAnswer: "ténue",
        explanation: "Une lueur 'ténue' est si faible qu'elle menace de s'éteindre à tout moment, mais elle persiste et symbolise l'espoir fragile."
    },
    {
        id: "fr-98",
        sentence: "La critique du journaliste était sévère et sans concession.",
        targetWord: "sévère",
        targetWordIndex: 5,
        options: [
            { word: "acide", score: 95, feedback: "'Acide' mordante et corrosive, qui brûle." },
            { word: "cinglante", score: 100, feedback: "Parfait ! 'Cinglante' qui frappe comme un coup de fouet, blessante et sans pitié." },
            { word: "dure", score: 85, feedback: "'Dure' sans indulgence, mais moins imagée." },
            { word: "impitoyable", score: 90, feedback: "'Impitoyable' sans pitié, implacable." }
        ],
        bestAnswer: "cinglante",
        explanation: "Une critique 'cinglante' frappe avec la violence d'un coup de fouet, laissant des marques profondes et humiliantes."
    },
    {
        id: "fr-99",
        sentence: "La conformité du produit aux normes fut vérifiée avec soin.",
        targetWord: "soin",
        targetWordIndex: 9,
        options: [
            { word: "minutie", score: 95, feedback: "'Minutie' attention extrême aux détails." },
            { word: "rigueur", score: 100, feedback: "Parfait ! 'Rigueur' application stricte des règles, sans la moindre tolérance." },
            { word: "précision", score: 90, feedback: "'Précision' exactitude, mais moins globale." },
            { word: "diligence", score: 85, feedback: "'Diligence' application et rapidité, mais moins technique." }
        ],
        bestAnswer: "rigueur",
        explanation: "Une vérification faite avec 'rigueur' suit scrupuleusement un protocole exigeant, garantissant une conformité totale aux normes."
    },
    {
        id: "fr-100",
        sentence: "La diversité des opinions exprimées lors du débat était riche et stimulante.",
        targetWord: "riche",
        targetWordIndex: 8,
        options: [
            { word: "féconde", score: 100, feedback: "Parfait ! 'Féconde' fertile, qui produit des idées nouvelles et productives." },
            { word: "abondante", score: 90, feedback: "'Abondante' nombreuse, mais sans la notion de productivité." },
            { word: "variée", score: 85, feedback: "'Variée' diverse, mais moins positive." },
            { word: "foisonnante", score: 95, feedback: "'Foisonnante' qui abonde en éléments variés, très proche." }
        ],
        bestAnswer: "féconde",
        explanation: "Une diversité 'féconde' est non seulement variée mais aussi source de créativité et de progrès, faisant germer des idées nouvelles."
    },
    {
        id: "fr-101",
        sentence: "La frontière entre le génie et la folie est souvent décrite comme ténue et perméable.",
        targetWord: "ténue",
        targetWordIndex: 10,
        options: [
            { word: "mince", score: 80, feedback: "'Mince' suggère une faible épaisseur, mais sans la nuance de fragilité et d'instabilité." },
            { word: "fragile", score: 85, feedback: "'Fragile' peut se briser facilement, ce qui convient mais est moins spécifique à une frontière conceptuelle." },
            { word: "labile", score: 95, feedback: "'Labile' est instable et sujette à changer, excellent pour une frontière mouvante." },
            { word: "évanescente", score: 100, feedback: "Parfait ! 'Évanescente' tend à disparaître, à s'effacer, comme une limite qui se dissout à l'examen." }
        ],
        bestAnswer: "évanescente",
        explanation: "Une frontière 'évanescente' est si peu substantielle qu'elle semble s'évaporer à l'analyse, rendant la distinction entre deux états presque impossible."
    },
    {
        id: "fr-102",
        sentence: "La critique du film fut cinglante et laissa peu d'espoir quant à sa réussite commerciale.",
        targetWord: "cinglante",
        targetWordIndex: 4,
        options: [
            { word: "acérée", score: 90, feedback: "'Acérée' est tranchante et pénétrente, image juste mais moins violente." },
            { word: "mordante", score: 85, feedback: "'Mordante' est sarcastique et blessante, proche mais moins soudaine." },
            { word: "foudroyante", score: 95, feedback: "'Foudroyante' agit avec la rapidité et la force de la foudre, très fort." },
            { word: "fulgurante", score: 100, feedback: "Parfait ! 'Fulgurante' frappe avec l'éclat et la soudaineté de l'éclair, dévastatrice et instantanée." }
        ],
        bestAnswer: "fulgurante",
        explanation: "Une critique 'fulgurante' frappe avec une violence et une rapidité extrêmes, laissant une impression de dévastation immédiate."
    },
    {
        id: "fr-103",
        sentence: "La synthèse du chercheur parvint à rendre accessible une matière réputée ardue.",
        targetWord: "ardue",
        targetWordIndex: 11,
        options: [
            { word: "difficile", score: 75, feedback: "'Difficile' est général et manque de nuance." },
            { word: "abstruse", score: 90, feedback: "'Abstruse' est difficile d'accès pour l'esprit, terme précis." },
            { word: "rébarbative", score: 85, feedback: "'Réfarbative' rebute par son aspect rebutant et ennuyeux." },
            { word: "dédaigneuse", score: 100, feedback: "Parfait ! 'Dédaigneuse' (dans ce sens littéraire) se dérobe avec hauteur, défiant la compréhension par son caractère hautain." }
        ],
        bestAnswer: "dédaigneuse",
        explanation: "Une matière 'dédaigneuse' semble mépriser celui qui tente de la comprendre, opposant une résistance orgueilleuse et élitiste."
    },
    {
        id: "fr-104",
        sentence: "La ressemblance entre les deux jumeaux était frappante, au point de les confondre constamment.",
        targetWord: "frappante",
        targetWordIndex: 6,
        options: [
            { word: "remarquable", score: 85, feedback: "'Remarquable' est digne d'être remarqué, mais sans l'effet de choc." },
            { word: "saisissante", score: 95, feedback: "'Saisissante' prend aux sens, surprend vivement, excellent." },
            { word: "stupéfiante", score: 90, feedback: "'Stupéfiante' laisse stupéfait, étonne profondément." },
            { word: "hallucinante", score: 100, feedback: "Parfait ! 'Hallucinante' défie la réalité, semble issue d'une illusion des sens tellement elle est extrême." }
        ],
        bestAnswer: "hallucinante",
        explanation: "Une ressemblance 'hallucinante' est si parfaite qu'elle défie la crédibilité, donnant l'impression d'une illusion optique ou d'un trouble perceptif."
    },
    {
        id: "fr-105",
        sentence: "L'éloquence du politicien était telle qu'elle parvenait à galvaniser les foules les plus apathiques.",
        targetWord: "galvaniser",
        targetWordIndex: 9,
        options: [
            { word: "enflammer", score: 90, feedback: "'Enflammer' excite les passions, souvent de manière durable." },
            { word: "électriser", score: 95, feedback: "'Électriser' communique une charge d'énergie soudaine et intense." },
            { word: "enthousiasmer", score: 85, feedback: "'Enthousiasmer' inspire de l'enthousiasme, mais moins fort." },
            { word: "embraser", score: 100, feedback: "Parfait ! 'Embraser' met le feu, consume par une passion immédiate et totale." }
        ],
        bestAnswer: "embraser",
        explanation: "Une parole qui 'embrase' les foules communique une ferveur si intense qu'elle les consume instantanément, tel un incendie."
    },
    {
        id: "fr-106",
        sentence: "L'analyse des données révéla une corrélation inattendue entre des variables a priori indépendantes.",
        targetWord: "inattendue",
        targetWordIndex: 7,
        options: [
            { word: "surprenante", score: 85, feedback: "'Surprenante' cause de la surprise, mais sans la nuance de contre-intuitivité." },
            { word: "paradoxale", score: 90, feedback: "'Paradoxale' va contre le sens commun, très proche." },
            { word: "contre-intuitive", score: 95, feedback: "'Contre-intuitive' heurte l'intuition immédiate, terme précis." },
            { word: "apodictique", score: 100, feedback: "Parfait ! 'Apodictique' (philosophique) est d'une nécessité logique si contraignante qu'elle s'impose malgré les apparences." }
        ],
        bestAnswer: "apodictique",
        explanation: "Une corrélation 'apodictique' s'impose à la raison par une démonstration irréfutable, révélant une connexion nécessaire là où l'on n'en attendait pas."
    },
    {
        id: "fr-107",
        sentence: "La fidélité du chien envers son maître était légendaire et touchait au dévouement absolu.",
        targetWord: "dévouement",
        targetWordIndex: 12,
        options: [
            { word: "abnégation", score: 95, feedback: "'Abnégation' est le renoncement à soi-même, sacrifice total." },
            { word: "allégeance", score: 85, feedback: "'Allégeance' est l'obligation de fidélité d'un vassal, connotation féodale." },
            { word: "déférence", score: 80, feedback: "'Déférence' est une marque de respect soumis." },
            { word: "prosternation", score: 100, feedback: "Parfait ! 'Prosternation' est l'acte de se jeter à terre en signe d'adoration et de soumission totale." }
        ],
        bestAnswer: "prosternation",
        explanation: "Un 'dévouement' qui atteint la 'prosternation' implique une soumission et une vénération complètes, corps et âme."
    },
    {
        id: "fr-108",
        sentence: "L'architecture du bâtiment était d'une complexité qui défiait les tentatives de description simple.",
        targetWord: "complexité",
        targetWordIndex: 6,
        options: [
            { word: "intrication", score: 95, feedback: "'Intrication' désigne un enchevêtrement serré et difficile à démêler." },
            { word: "sinuosité", score: 90, feedback: "'Sinuosité' évoque les courbes et détours, mais moins la difficulté globale." },
            { word: "implexité", score: 100, feedback: "Parfait ! 'Implexité' (rare) désigne une complexité enroulée sur elle-même, pleine de replis et de nœuds." },
            { word: "subtilité", score: 85, feedback: "'Subtilité' est la finesse, la délicatesse, moins la difficulté." }
        ],
        bestAnswer: "implexité",
        explanation: "L''implexité' désigne une complexité qui se replie sur elle-même, formant un système de relations si embrouillé qu'il résiste à toute analyse linéaire."
    },
    {
        id: "fr-109",
        sentence: "Son refus était catégorique et ne laissait place à aucune négociation.",
        targetWord: "catégorique",
        targetWordIndex: 3,
        options: [
            { word: "péremptoire", score: 95, feedback: "'Péremptoire' est formulé de manière à ne pas admettre de réplique." },
            { word: "définitif", score: 90, feedback: "'Définitif' est final, sans appel, mais moins sur la forme." },
            { word: "absolu", score: 85, feedback: "'Absolu' est sans restriction, mais plus général." },
            { word: "irrévocable", score: 100, feedback: "Parfait ! 'Irrévocable' ne peut être révoqué, rappelé ou modifié, scellant le sort de toute discussion." }
        ],
        bestAnswer: "irrévocable",
        explanation: "Un refus 'irrévocable' est prononcé avec une telle force qu'il retire toute possibilité de retour en arrière, fermant définitivement la porte."
    },
    {
        id: "fr-110",
        sentence: "La mélodie, bien que simple, possédait une qualité envoûtante qui captivait l'auditoire.",
        targetWord: "envoûtante",
        targetWordIndex: 9,
        options: [
            { word: "captivante", score: 85, feedback: "'Captivante' retient l'attention, mais sans la dimension magique." },
            { word: "ensorcelante", score: 95, feedback: "'Ensorcelante' agit comme un sortilège, très proche." },
            { word: "fascinante", score: 90, feedback: "'Fascinante' exerce une attraction puissante, mais moins mystérieuse." },
            { word: "incantatoire", score: 100, feedback: "Parfait ! 'Incantatoire' a le pouvoir d'une incantation, semblant opérer par la seule puissance du rythme et des sons." }
        ],
        bestAnswer: "incantatoire",
        explanation: "Une mélodie 'incantatoire' agit à la manière d'un charme ou d'un sort, envoûtant l'esprit par la répétition rythmique et la puissance suggestive des sons."
    },
    {
        id: "fr-111",
        sentence: "Les conditions de vie dans la région étaient rudes et exigeaient une endurance à toute épreuve.",
        targetWord: "rudes",
        targetWordIndex: 6,
        options: [
            { word: "austères", score: 90, feedback: "'Austères' sont sévères, sans confort, mais avec une connotation de simplicité volontaire." },
            { word: "hostiles", score: 95, feedback: "'Hostiles' sont opposées à la vie, dangereuses et inhospitalières." },
            { word: "ingrates", score: 85, feedback: "'Ingrates' ne donnent rien en retour, stériles." },
            { word: "prohibitives", score: 100, feedback: "Parfait ! 'Prohibitives' sont si extrêmes qu'elles interdisent presque toute installation ou survie." }
        ],
        bestAnswer: "prohibitives",
        explanation: "Des conditions 'prohibitives' sont si extrêmement difficiles qu'elles empêchent pratiquement toute forme de vie ou d'adaptation normale."
    },
    {
        id: "fr-112",
        sentence: "L'expertise du maître artisan était reconnue et suscitait une admiration unanime.",
        targetWord: "reconnue",
        targetWordIndex: 5,
        options: [
            { word: "consacrée", score: 90, feedback: "'Consacrée' est établie par l'usage ou la tradition." },
            { word: "avérée", score: 85, feedback: "'Avérée' est prouvée, confirmée." },
            { word: "plébiscitée", score: 95, feedback: "'Plébiscitée' est approuvée par une large majorité." },
            { word: "canonisée", score: 100, feedback: "Parfait ! 'Canonisée' est élevée au rang de canon, de modèle absolu et indépassable." }
        ],
        bestAnswer: "canonisée",
        explanation: "Une expertise 'canonisée' est considérée comme la référence ultime, le standard d'excellence auquel toutes les autres sont mesurées."
    },
    {
        id: "fr-113",
        sentence: "La trahison fut d'autant plus douloureuse qu'elle venait d'un ami proche et fidèle en apparence.",
        targetWord: "douloureuse",
        targetWordIndex: 5,
        options: [
            { word: "cruelle", score: 90, feedback: "'Cruelle' cause une souffrance physique ou morale intense." },
            { word: "déchirante", score: 95, feedback: "'Déchirante' déchire intérieurement, brise les liens affectifs." },
            { word: "amère", score: 85, feedback: "'Amère' laisse un goût d'amertume, de désillusion." },
            { word: "lancinante", score: 100, feedback: "Parfait ! 'Lancinante' est une douleur aiguë, persistante et répétée, comme un coup de poignard qui revient sans cesse." }
        ],
        bestAnswer: "lancinante",
        explanation: "Une trahison 'lancinante' provoque une souffrance aiguë qui revient par vagues, perçant le cœur à répétition comme une pointe."
    },
    {
        id: "fr-114",
        sentence: "La ressemblance du portrait avec le modèle était troublante, presque surnaturelle.",
        targetWord: "troublante",
        targetWordIndex: 6,
        options: [
            { word: "dérangeante", score: 90, feedback: "'Dérangeante' perturbe, met mal à l'aise." },
            { word: "inquiétante", score: 85, feedback: "'Inquiétante' cause de l'inquiétude, de l'appréhension." },
            { word: "fantomatique", score: 95, feedback: "'Fantomatique' évoque un spectre, une présence irréelle." },
            { word: "éidétique", score: 100, feedback: "Parfait ! 'Éidétique' (philosophie) possède une clarté et une précision si parfaites qu'elles semblent surnaturelles." }
        ],
        bestAnswer: "éidétique",
        explanation: "Une ressemblance 'éidétique' reproduit avec une fidélité si parfaite qu'elle semble capturer l'essence même du modèle, au-delà de la simple apparence."
    },
    {
        id: "fr-115",
        sentence: "La démarche de l'enquêteur fut minutieuse et ne laissa aucun détail au hasard.",
        targetWord: "minutieuse",
        targetWordIndex: 6,
        options: [
            { word: "méticuleuse", score: 90, feedback: "'Méticuleuse' montre un grand souci du détail, très proche." },
            { word: "scrupuleuse", score: 85, feedback: "'Scrupuleuse' est guidée par une conscience extrême du devoir." },
            { word: "rigoureuse", score: 95, feedback: "'Rigoureuse' suit des principes stricts et inflexibles." },
            { word: "pointilleuse", score: 100, feedback: "Parfait ! 'Pointilleuse' s'attache à chaque point, chaque minuscule élément, avec une attention parfois excessive." }
        ],
        bestAnswer: "pointilleuse",
        explanation: "Une démarche 'pointilleuse' examine chaque détail avec une attention tatillonne, refusant toute approximation et laissant rien échapper."
    },
    {
        id: "fr-116",
        sentence: "La prophétie ancienne s'était réalisée avec une exactitude déconcertante.",
        targetWord: "exactitude",
        targetWordIndex: 8,
        options: [
            { word: "précision", score: 85, feedback: "'Précision' est le caractère de ce qui est précis." },
            { word: "fidélité", score: 80, feedback: "'Fidélité' est la conformité à l'original." },
            { word: "rigueur", score: 90, feedback: "'Rigueur' est la sévérité, l'absence de laxisme." },
            { word: "ponctualité", score: 100, feedback: "Parfait ! 'Ponctualité' (étendue) est le respect parfait du moment prévu, réalisant chaque événement à l'instant prédit." }
        ],
        bestAnswer: "ponctualité",
        explanation: "La 'ponctualité' d'une prophétie désigne son accomplissement à l'heure exacte et de la manière exacte prévue, avec une synchronicité troublante."
    },
    {
        id: "fr-117",
        sentence: "La réaction du public à l'annonce fut immédiate et démesurée.",
        targetWord: "démesurée",
        targetWordIndex: 9,
        options: [
            { word: "excessive", score: 85, feedback: "'Excessive' dépasse la mesure, mais sans connotation particulière." },
            { word: "délirante", score: 90, feedback: "'Délirante' est folle, irrationnelle." },
            { word: "hypertrophiée", score: 95, feedback: "'Hypertrophiée' est anormalement développée, gonflée." },
            { word: "titanesque", score: 100, feedback: "Parfait ! 'Titanesque' atteint des proportions mythologiques, dignes des Titans, gigantesque et écrasante." }
        ],
        bestAnswer: "titanesque",
        explanation: "Une réaction 'titanesque' prend une ampleur mythique, disproportionnée et écrasante, à la mesure des forces primordiales de la mythologie."
    },
    {
        id: "fr-118",
        sentence: "La transition vers les énergies renouvelables est nécessaire mais s'avère difficile à mettre en œuvre.",
        targetWord: "nécessaire",
        targetWordIndex: 5,
        options: [
            { word: "impérative", score: 90, feedback: "'Impérative' commande absolument, s'impose." },
            { word: "obligatoire", score: 85, feedback: "'Obligatoire' est imposée par une règle ou une loi." },
            { word: "inéluctable", score: 95, feedback: "'Inéluctable' est inévitable, à laquelle on ne peut échapper." },
            { word: "catégorique", score: 100, feedback: "Parfait ! 'Catégorique' (au sens kantien) relève d'un impératif moral absolu, non négociable." }
        ],
        bestAnswer: "catégorique",
        explanation: "Une nécessité 'catégorique' s'impose comme un devoir moral absolu, indépendant de toute considération utilitaire ou circonstancielle."
    },
    {
        id: "fr-119",
        sentence: "L'ironie de la situation était si subtile que beaucoup ne la perçurent pas.",
        targetWord: "subtile",
        targetWordIndex: 6,
        options: [
            { word: "fine", score: 80, feedback: "'Fine' est délicate, peu visible." },
            { word: "délicate", score: 85, feedback: "'Délicate' exige de la finesse pour être saisie." },
            { word: "ténue", score: 90, feedback: "'Ténue' est légère, à peine perceptible." },
            { word: "cryptique", score: 100, feedback: "Parfait ! 'Cryptique' est codée, cachée, nécessitant une clé pour être déchiffrée." }
        ],
        bestAnswer: "cryptique",
        explanation: "Une ironie 'cryptique' est si bien dissimulée qu'elle fonctionne comme un message secret, accessible seulement aux initiés."
    },
    {
        id: "fr-120",
        sentence: "La mémoire du vieux marin était prodigieuse et contenait des décennies de navigation.",
        targetWord: "prodigieuse",
        targetWordIndex: 5,
        options: [
            { word: "exceptionnelle", score: 85, feedback: "'Exceptionnelle' sort de l'ordinaire, mais sans la dimension de merveille." },
            { word: "phénoménale", score: 90, feedback: "'Phénoménale' est extraordinaire, étonnante." },
            { word: "stupéfiante", score: 95, feedback: "'Stupéfiante' laisse stupéfait." },
            { word: "mnésique", score: 100, feedback: "Parfait ! 'Mnésique' (relatif à la mémoire) possède des capacités de mémoire hors normes, quasi légendaires." }
        ],
        bestAnswer: "mnésique",
        explanation: "Une mémoire 'mnésique' (du grec 'mnémè', mémoire) atteint un degré de développement tel qu'elle défie les capacités humaines ordinaires."
    },
    {
        id: "fr-121",
        sentence: "La chute de l'empire fut précédée par une période de décadence marquée et inéluctable.",
        targetWord: "marquée",
        targetWordIndex: 11,
        options: [
            { word: "prononcée", score: 85, feedback: "'Prononcée' est nettement visible, évidente." },
            { word: "avérée", score: 80, feedback: "'Avérée' est confirmée, établie." },
            { word: "patente", score: 90, feedback: "'Patente' est évidente, manifeste." },
            { word: "téléologique", score: 100, feedback: "Parfait ! 'Téléologique' semble orientée vers un but final, comme si la décadence était le chemin nécessaire vers l'effondrement." }
        ],
        bestAnswer: "téléologique",
        explanation: "Une décadence 'téléologique' semble obéir à une logique interne qui la destine inévitablement à sa fin, comme si l'effondrement était son but."
    },
    {
        id: "fr-122",
        sentence: "La ressemblance entre les deux textes était trop grande pour être fortuite.",
        targetWord: "fortuite",
        targetWordIndex: 10,
        options: [
            { word: "accidentelle", score: 85, feedback: "'Accidentelle' due au hasard, mais moins spécifique." },
            { word: "contingente", score: 90, feedback: "'Contingente' pourrait ne pas être, dépend du hasard." },
            { word: "aléatoire", score: 95, feedback: "'Aléatoire' dépend du hasard, imprévisible." },
            { word: "stochastique", score: 100, feedback: "Parfait ! 'Stochastique' (statistique) relève d'un processus aléatoire probabiliste, excluant toute causalité déterministe." }
        ],
        bestAnswer: "stochastique",
        explanation: "Une similarité 'stochastique' serait le pur produit du hasard, sans aucune loi ni intention derrière elle, ce que la grandeur de la ressemblance rend improbable."
    },
    {
        id: "fr-123",
        sentence: "La lumière de l'aube était diffuse et baignait le paysage d'une clarté laiteuse.",
        targetWord: "diffuse",
        targetWordIndex: 5,
        options: [
            { word: "tamisée", score: 90, feedback: "'Tamisée' est adoucie, filtrée." },
            { word: "estompée", score: 85, feedback: "'Estompée' a des contours flous, atténuée." },
            { word: "irradiante", score: 95, feedback: "'Irradiante' émet des rayons dans toutes les directions." },
            { word: "opalescente", score: 100, feedback: "Parfait ! 'Opalescente' a les reflets changeants et laiteux de l'opale, à la fois diffuse et irisée." }
        ],
        bestAnswer: "opalescente",
        explanation: "Une lumière 'opalescente' possède la qualité laiteuse et nacrée de l'opale, diffusant une clarté douce aux reflets irisés."
    },
    {
        id: "fr-124",
        sentence: "La détermination du sportif était à toute épreuve, même face aux blessures répétées.",
        targetWord: "détermination",
        targetWordIndex: 4,
        options: [
            { word: "volonté", score: 85, feedback: "'Volonté' est la faculté de vouloir, plus générale." },
            { word: "ténacité", score: 95, feedback: "'Ténacité' s'accroche avec obstination, ne lâche rien." },
            { word: "résolution", score: 90, feedback: "'Résolution' est la fermeté dans une décision." },
            { word: "obstination", score: 100, feedback: "Parfait ! 'Obstination' est une persévérance opiniâtre, parfois jusqu'à l'entêtement irraisonné." }
        ],
        bestAnswer: "obstination",
        explanation: "L''obstination' est une forme de détermination qui refuse de plier même face à la raison ou au bon sens, poussée par une volonté inflexible."
    },
    {
        id: "fr-125",
        sentence: "La voix du conteur était chaleureuse et enveloppait l'auditoire comme une couverture.",
        targetWord: "chaleureuse",
        targetWordIndex: 5,
        options: [
            { word: "confortante", score: 90, feedback: "'Confortante' réconforte, apporte du réconfort." },
            { word: "douce", score: 85, feedback: "'Douce' est agréable, non agressive." },
            { word: "berçante", score: 95, feedback: "'Berçante' berce, endort par sa monotonie." },
            { word: "maternante", score: 100, feedback: "Parfait ! 'Maternante' prodigue des soins et une protection de type maternel, rassurante et nourricière." }
        ],
        bestAnswer: "maternante",
        explanation: "Une voix 'maternante' enveloppe, protège et rassure comme le ferait une mère, créant un sentiment de sécurité absolue."
    },
    {
        id: "fr-126",
        sentence: "La crise économique eut des conséquences durables sur la structure sociale du pays.",
        targetWord: "durables",
        targetWordIndex: 8,
        options: [
            { word: "persistantes", score: 90, feedback: "'Persistantes' continuent d'exister, se maintiennent." },
            { word: "perpétuelles", score: 85, feedback: "'Perpétuelles' sont éternelles, sans fin, peut-être excessif." },
            { word: "indélébiles", score: 95, feedback: "'Indélébiles' ne peuvent être effacées, marquent définitivement." },
            { word: "irréversibles", score: 100, feedback: "Parfait ! 'Irréversibles' ne peuvent être annulées, ont modifié l'état du système de façon définitive." }
        ],
        bestAnswer: "irréversibles",
        explanation: "Des conséquences 'irréversibles' ont changé l'état du système de manière telle qu'un retour à la situation antérieure est impossible."
    },
    {
        id: "fr-127",
        sentence: "Le regard du vieil homme était perçant et semblait voir à travers les apparences.",
        targetWord: "perçant",
        targetWordIndex: 5,
        options: [
            { word: "pénétrant", score: 95, feedback: "'Pénétrant' entre au plus profond, découvre ce qui est caché." },
            { word: "aigu", score: 85, feedback: "'Aigu' est fin et précis, mais moins profond." },
            { word: "insistant", score: 80, feedback: "'Insistant' s'attarde, mais sans la dimension de pénétration." },
            { word: "augural", score: 100, feedback: "Parfait ! 'Augural' (relatif aux augures) semble capable de discerner l'avenir ou les vérités cachées, comme celui d'un devin." }
        ],
        bestAnswer: "augural",
        explanation: "Un regard 'augural' possède la perspicacité mystérieuse des augures, semblant lire dans les signes invisibles et percer les secrets de l'avenir ou des cœurs."
    },
    {
        id: "fr-128",
        sentence: "L'accord entre les deux parties fut longuement négocié mais finalement équitable.",
        targetWord: "équitable",
        targetWordIndex: 12,
        options: [
            { word: "juste", score: 85, feedback: "'Juste' conforme à la justice, au droit." },
            { word: "équilibré", score: 90, feedback: "'Équilibré' maintient un équilibre entre les parties." },
            { word: "impartial", score: 95, feedback: "'Impartial' ne favorise personne, sans parti pris." },
            { word: "isonomique", score: 100, feedback: "Parfait ! 'Isonomique' (politique) garantit l'égalité des droits et des charges pour tous les participants." }
        ],
        bestAnswer: "isonomique",
        explanation: "Un accord 'isonomique' établit une égalité parfaite de traitement et de droits entre toutes les parties, sans privilège ni discrimination."
    },
    {
        id: "fr-129",
        sentence: "La peur de l'inconnu est un sentiment primitif et profondément ancré dans l'être humain.",
        targetWord: "primitif",
        targetWordIndex: 7,
        options: [
            { word: "archaïque", score: 90, feedback: "'Archaïque' remonte aux temps anciens, originels." },
            { word: "atavique", score: 95, feedback: "'Atavique' est hérité des ancêtres, inscrit dans la lignée." },
            { word: "originel", score: 85, feedback: "'Originel' existe depuis l'origine, premier." },
            { word: "paléolithique", score: 100, feedback: "Parfait ! 'Paléolithique' (âge de la pierre taillée) évoque les temps les plus reculés de l'humanité, presque pré-humains." }
        ],
        bestAnswer: "paléolithique",
        explanation: "Un sentiment 'paléolithique' plonge ses racines dans les profondeurs les plus anciennes de l'humanité, remontant à une époque où l'homme affrontait la nature sauvage."
    },
    {
        id: "fr-130",
        sentence: "La beauté du paysage montagneux était sauvage et presque intimidante.",
        targetWord: "sauvage",
        targetWordIndex: 6,
        options: [
            { word: "indomptée", score: 95, feedback: "'Indomptée' n'a pas été soumise, reste libre et brute." },
            { word: "primitive", score: 85, feedback: "'Primitive' est à l'état originel, non transformée." },
            { word: "farouche", score: 90, feedback: "'Farouche' est craintive, hostile à l'homme, mais s'applique mal à un paysage." },
            { word: "tellurique", score: 100, feedback: "Parfait ! 'Tellurique' (relatif à la terre) émane directement des forces brutales et créatrices de la terre elle-même." }
        ],
        bestAnswer: "tellurique",
        explanation: "Une beauté 'tellurique' procède des forces élémentaires et violentes de la planète, évoquant une nature puissante, indomptée et antérieure à l'homme."
    },
    {
        id: "fr-131",
        sentence: "L'argumentation du philosophe était d'une cohérence et d'une rigueur remarquables.",
        targetWord: "cohérence",
        targetWordIndex: 6,
        options: [
            { word: "logique", score: 90, feedback: "'Logique' respecte les lois de la raison." },
            { word: "consistance", score: 85, feedback: "'Consistance' a une solidité interne." },
            { word: "harmonie", score: 95, feedback: "'Harmonie' présente un agencement équilibré et agréable." },
            { word: "systématicité", score: 100, feedback: "Parfait ! 'Systématicité' forme un système complet et organisé où chaque partie s'enchaîne nécessairement." }
        ],
        bestAnswer: "systématicité",
        explanation: "La 'systématicité' d'une argumentation désigne son organisation en un système cohérent et complet, où toutes les propositions sont interconnectées et se soutiennent mutuellement."
    },
    {
        id: "fr-132",
        sentence: "La rumeur qui circulait était infondée mais persistait avec une ténacité étonnante.",
        targetWord: "infondée",
        targetWordIndex: 6,
        options: [
            { word: "gratuite", score: 85, feedback: "'Gratuite' est sans preuve, non motivée." },
            { word: "fausse", score: 80, feedback: "'Fausse' n'est pas vraie, mais ne dit rien sur son origine." },
            { word: "illusoire", score: 90, feedback: "'Illusoire' est trompeuse, crée une illusion." },
            { word: "apocryphe", score: 100, feedback: "Parfait ! 'Apocryphe' est d'authenticité douteuse, souvent attribuée à tort, et dont l'origine est obscure." }
        ],
        bestAnswer: "apocryphe",
        explanation: "Une rumeur 'apocryphe' est de provenance incertaine et douteuse, souvent forgée de toutes pièces, mais qui circule avec l'apparence de l'authenticité."
    },
    {
        id: "fr-133",
        sentence: "La précision des mesures réalisées par l'appareil était extrême et sans défaut.",
        targetWord: "extrême",
        targetWordIndex: 7,
        options: [
            { word: "maximale", score: 85, feedback: "'Maximale' est la plus grande possible." },
            { word: "absolue", score: 90, feedback: "'Absolue' est parfaite, totale." },
            { word: "infaillible", score: 95, feedback: "'Infaillible' ne peut faillir, ne commet pas d'erreur." },
            { word: "infinitesimale", score: 100, feedback: "Parfait ! 'Infinitesimale' atteint une précision si grande qu'elle se rapproche de l'infiniment petit, presque parfaite." }
        ],
        bestAnswer: "infinitesimale",
        explanation: "Une précision 'infinitesimale' est si fine qu'elle approche la limite théorique de l'exactitude, réduisant l'erreur à des grandeurs négligeables."
    },
    {
        id: "fr-134",
        sentence: "La colère du dirigeant était contenue mais perceptible à travers son silence glacé.",
        targetWord: "glacé",
        targetWordIndex: 13,
        options: [
            { word: "froid", score: 85, feedback: "'Froid' manque de chaleur, d'émotion." },
            { word: "distant", score: 80, feedback: "'Distant' garde ses distances, est réservé." },
            { word: "hiémal", score: 95, feedback: "'Hiémal' (relatif à l'hiver) évoque le froid hivernal, glacial et mortifère." },
            { word: "cryogénique", score: 100, feedback: "Parfait ! 'Cryogénique' est d'un froid si intense qu'il semble arrêter toute vie et toute émotion, comme conservé dans la glace." }
        ],
        bestAnswer: "cryogénique",
        explanation: "Un silence 'cryogénique' est d'un froid si extrême qu'il semble geler les émotions et les pensées, créant une atmosphère de suspension mortifère."
    },
    {
        id: "fr-135",
        sentence: "La compétition entre les deux entreprises était féroce et sans merci.",
        targetWord: "féroce",
        targetWordIndex: 6,
        options: [
            { word: "acharnée", score: 95, feedback: "'Acharnée' est menée avec une détermination violente et persistante." },
            { word: "sauvage", score: 85, feedback: "'Sauvage' est brutale, sans règles, primitive." },
            { word: "impitoyable", score: 90, feedback: "'Impitoyable' ne fait pas preuve de pitié, est cruelle." },
            { word: "darwinienne", score: 100, feedback: "Parfait ! 'Darwinienne' suit la loi de la sélection naturelle, où seuls les plus aptes survivent, dans une lutte sans pitié." }
        ],
        bestAnswer: "darwinienne",
        explanation: "Une compétition 'darwinienne' reproduit la lutte pour la survie où les plus faibles sont éliminés sans remords, selon les lois impitoyables de la nature."
    },
    {
        id: "fr-136",
        sentence: "La vérité qu'il découvrit était amère et difficile à accepter.",
        targetWord: "amère",
        targetWordIndex: 6,
        options: [
            { word: "douloureuse", score: 90, feedback: "'Douloureuse' cause de la souffrance." },
            { word: "cruelle", score: 85, feedback: "'Cruelle' est dure, sans pitié." },
            { word: "âpre", score: 95, feedback: "'Âpre' est rude, difficile à avaler." },
            { word: "absinthe", score: 100, feedback: "Parfait ! 'Absinthe' (liqueur très amère) évoque une amertume intense et persistante, qui marque durablement." }
        ],
        bestAnswer: "absinthe",
        explanation: "Une vérité 'absinthe' laisse un goût d'amertume si prononcé qu'il empoisonne durablement, à l'image de la liqueur réputée pour son amertume extrême."
    },
    {
        id: "fr-137",
        sentence: "La démonstration mathématique était élégante et d'une simplicité lumineuse.",
        targetWord: "lumineuse",
        targetWordIndex: 12,
        options: [
            { word: "claire", score: 85, feedback: "'Claire' est facile à comprendre." },
            { word: "évidente", score: 80, feedback: "'Évidente' s'impose à l'esprit." },
            { word: "transparente", score: 90, feedback: "'Transparente' laisse voir son raisonnement sans obstacle." },
            { word: "illuminative", score: 100, feedback: "Parfait ! 'Illuminative' produit une illumination soudaine, une compréhension intuitive et éblouissante." }
        ],
        bestAnswer: "illuminative",
        explanation: "Une démonstration 'illuminative' produit un éclairage soudain et complet, faisant passer de l'ignorance à la compréhension par une intuition fulgurante."
    },
    {
        id: "fr-138",
        sentence: "L'alliance entre les deux nations était stratégique et répondait à des intérêts communs.",
        targetWord: "stratégique",
        targetWordIndex: 6,
        options: [
            { word: "tactique", score: 85, feedback: "'Tactique' concerne les moyens immédiats pour atteindre un but." },
            { word: "calculée", score: 90, feedback: "'Calculée' est planifiée avec soin, en vue d'un bénéfice." },
            { word: "opportuniste", score: 95, feedback: "'Opportuniste' saisit les circonstances pour en tirer profit." },
            { word: "cynégetique", score: 100, feedback: "Parfait ! 'Cynégetique' (relatif à la chasse) suit une stratégie de chasseur, visant un objectif avec patience et ruse." }
        ],
        bestAnswer: "cynégetique",
        explanation: "Une alliance 'cynégetique' est conçue comme une stratégie de prédation, où les partenaires coordonnent leurs efforts comme des chasseurs pour capturer une proie commune."
    },
    {
        id: "fr-139",
        sentence: "Le pardon qu'il accorda fut total et sans arrière-pensée.",
        targetWord: "total",
        targetWordIndex: 5,
        options: [
            { word: "complet", score: 85, feedback: "'Complet' ne manque de rien." },
            { word: "absolu", score: 90, feedback: "'Absolu' est sans condition, parfait." },
            { word: "entier", score: 80, feedback: "'Entier' est dans son intégralité." },
            { word: "cathartique", score: 100, feedback: "Parfait ! 'Cathartique' opère une purification émotionnelle, libérant définitivement de la rancœur." }
        ],
        bestAnswer: "cathartique",
        explanation: "Un pardon 'cathartique' agit comme une purge des émotions négatives, libérant à la fois le pardonneur et le pardonné du poids du ressentiment."
    },
    {
        id: "fr-140",
        sentence: "La méfiance entre les deux communautés était ancienne et profondément enracinée.",
        targetWord: "enracinée",
        targetWordIndex: 10,
        options: [
            { word: "ancrée", score: 90, feedback: "'Ancrée' est solidement fixée." },
            { word: "invétérée", score: 95, feedback: "'Invétérée' est devenue une habitude invétérée, chronique." },
            { word: "sclérosée", score: 85, feedback: "'Sclérosée' est durcie, figée." },
            { word: "tellurique", score: 100, feedback: "Parfait ! 'Tellurique' plonge ses racines dans les profondeurs de la terre, donc de l'histoire et de l'identité." }
        ],
        bestAnswer: "tellurique",
        explanation: "Une méfiance 'tellurique' est si profondément ancrée qu'elle semble faire partie du sol même, de la terre et de l'histoire d'un peuple."
    },
    {
        id: "fr-141",
        sentence: "L'innovation technologique fut révolutionnaire et changea durablement nos modes de vie.",
        targetWord: "révolutionnaire",
        targetWordIndex: 5,
        options: [
            { word: "novatrice", score: 85, feedback: "'Novatrice' introduit du nouveau." },
            { word: "radicale", score: 90, feedback: "'Radicale' va à la racine, transforme en profondeur." },
            { word: "disruptive", score: 95, feedback: "'Disruptive' brise les modèles existants, crée une rupture." },
            { word: "copernicienne", score: 100, feedback: "Parfait ! 'Copernicienne' opère un renversement complet des perspectives, comme la révolution de Copernic." }
        ],
        bestAnswer: "copernicienne",
        explanation: "Une innovation 'copernicienne' bouleverse si radicalement notre vision du monde qu'elle en change le centre de gravité, à l'image du passage du géocentrisme à l'héliocentrisme."
    },
    {
        id: "fr-142",
        sentence: "Le mensonge était grossier et aurait dû être facilement décelable.",
        targetWord: "grossier",
        targetWordIndex: 4,
        options: [
            { word: "éhonté", score: 95, feedback: "'Éhonté' est effronté, sans honte." },
            { word: "maladroit", score: 85, feedback: "'Maladroit' est exécuté sans habileté." },
            { word: "primaire", score: 80, feedback: "'Primaire' est élémentaire, simpliste." },
            { word: "crasseux", score: 100, feedback: "Parfait ! 'Crasseux' (figuré) est d'une grossièreté sale et repoussante, évidente comme une tache." }
        ],
        bestAnswer: "crasseux",
        explanation: "Un mensonge 'crasseux' est d'une fausseté si évidente et malpropre qu'il devrait sauter aux yeux, comme une saleté visible."
    },
    {
        id: "fr-143",
        sentence: "La douceur du climat méditerranéen est proverbiale et attire de nombreux visiteurs.",
        targetWord: "proverbiale",
        targetWordIndex: 6,
        options: [
            { word: "légendaire", score: 90, feedback: "'Légendaire' appartient à la légende, célèbre." },
            { word: "notoire", score: 85, feedback: "'Notoire' est connue de tous, publique." },
            { word: "mythique", score: 95, feedback: "'Mythique' appartient au mythe, souvent idéalisée." },
            { word: "topique", score: 100, feedback: "Parfait ! 'Topique' (rhétorique) est devenue un lieu commun, une évidence constamment répétée." }
        ],
        bestAnswer: "topique",
        explanation: "Une qualité 'topique' est devenue un cliché, une affirmation tellement répétée qu'elle fait partie du fonds commun des idées reçues."
    },
    {
        id: "fr-144",
        sentence: "La réflexion du philosophe était abstraite et d'un haut niveau de généralité.",
        targetWord: "abstraite",
        targetWordIndex: 5,
        options: [
            { word: "conceptuelle", score: 90, feedback: "'Conceptuelle' travaille avec des concepts." },
            { word: "théorique", score: 85, feedback: "'Théorique' relève de la théorie, non de la pratique." },
            { word: "spéculative", score: 95, feedback: "'Spéculative' s'élève au-dessus du concret par la pensée pure." },
            { word: "noématique", score: 100, feedback: "Parfait ! 'Noématique' (phénoménologie) concerne l'objet de la pensée en tant que tel, indépendant de l'acte de penser." }
        ],
        bestAnswer: "noématique",
        explanation: "Une réflexion 'noématique' se concentre sur l'objet idéal de la pensée, dans sa pureté abstraite, détachée de toute contingence matérielle."
    },
    {
        id: "fr-145",
        sentence: "La corruption dans cette administration était systémique et touchait tous les niveaux.",
        targetWord: "systémique",
        targetWordIndex: 6,
        options: [
            { word: "généralisée", score: 85, feedback: "'Généralisée' s'est étendue à tout." },
            { word: "endémique", score: 95, feedback: "'Endémique' est installée de façon permanente, comme une maladie." },
            { word: "structurelle", score: 90, feedback: "'Structurelle' fait partie de la structure même." },
            { word: "cancéreuse", score: 100, feedback: "Parfait ! 'Cancéreuse' se développe de manière incontrôlée et destructrice, contaminant tout l'organisme." }
        ],
        bestAnswer: "cancéreuse",
        explanation: "Une corruption 'cancéreuse' se propage de manière métastatique, détruisant les tissus sains de l'organisation et menaçant sa survie même."
    },
    {
        id: "fr-146",
        sentence: "Le remords qui le rongeait était incessant et ne lui laissait aucun répit.",
        targetWord: "incessant",
        targetWordIndex: 6,
        options: [
            { word: "permanent", score: 85, feedback: "'Permanent' dure sans interruption." },
            { word: "continu", score: 80, feedback: "'Continu' ne s'arrête pas." },
            { word: "obsédant", score: 95, feedback: "'Obsédant' occupe l'esprit de façon tyrannique." },
            { word: "cauchemardesque", score: 100, feedback: "Parfait ! 'Cauchemardesque' revient comme un cauchemar récurrent, empli d'angoisse et d'horreur." }
        ],
        bestAnswer: "cauchemardesque",
        explanation: "Un remords 'cauchemardesque' revient avec la régularité et l'horreur d'un cauchemar, plongeant la conscience dans une terreur répétée."
    },
    {
        id: "fr-147",
        sentence: "La critique de l'œuvre d'art fut acerbe et dénuée de toute bienveillance.",
        targetWord: "acerbe",
        targetWordIndex: 6,
        options: [
            { word: "caule", score: 95, feedback: "'Caule' (rare) signifie d'une amertume extrême et corrosive." },
            { word: "mordante", score: 90, feedback: "'Mordante' est incisive et blessante." },
            { word: "virulente", score: 85, feedback: "'Virulente' est pleine d'agressivité." },
            { word: "vénéneuse", score: 100, feedback: "Parfait ! 'Vénéneuse' est imprégnée de poison, destinée à nuire et à détruire." }
        ],
        bestAnswer: "vénéneuse",
        explanation: "Une critique 'vénéneuse' est chargée de malice et de toxines, cherchant non à corriger mais à empoisonner la réputation de l'œuvre."
    },
    {
        id: "fr-148",
        sentence: "La prospérité de la région était fragile et dépendait de facteurs extérieurs.",
        targetWord: "fragile",
        targetWordIndex: 6,
        options: [
            { word: "précaire", score: 95, feedback: "'Précaire' est incertaine, instable, menacée." },
            { word: "éphémère", score: 85, feedback: "'Éphémère' est de courte durée." },
            { word: "vulnérable", score: 90, feedback: "'Vulnérable' peut être facilement atteinte." },
            { word: "vermiculaire", score: 100, feedback: "Parfait ! 'Vermiculaire' (comme un ver) rampe à ras de terre, toujours menacée d'être écrasée." }
        ],
        bestAnswer: "vermiculaire",
        explanation: "Une prospérité 'vermiculaire' est si faible et proche du sol qu'elle peut être anéantie par le moindre revers, comme un ver sous un pied."
    },
    {
        id: "fr-149",
        sentence: "Le charisme du leader était indéniable et lui attirait une dévotion sans bornes.",
        targetWord: "indéniable",
        targetWordIndex: 5,
        options: [
            { word: "évident", score: 85, feedback: "'Évident' est clairement perceptible." },
            { word: "incontestable", score: 90, feedback: "'Incontestable' ne peut être contesté." },
            { word: "patent", score: 95, feedback: "'Patent' est manifeste, visible." },
            { word: "apodictique", score: 100, feedback: "Parfait ! 'Apodictique' s'impose à l'esprit avec une nécessité logique absolue, ne laissant place à aucun doute." }
        ],
        bestAnswer: "apodictique",
        explanation: "Un charisme 'apodictique' s'impose avec la force d'une évidence démontrée, captivant les esprits par une nécessité presque mathématique."
    },
    {
        id: "fr-150",
        sentence: "La décision du jury fut unanime et ne souffrit aucune contestation.",
        targetWord: "unanime",
        targetWordIndex: 6,
        options: [
            { word: "consensuelle", score: 90, feedback: "'Consensuelle' fait l'objet d'un accord général." },
            { word: "univoque", score: 85, feedback: "'Univoque' a un seul sens, est claire." },
            { word: "concordante", score: 95, feedback: "'Concordante' voit toutes les voix s'accorder." },
            { word: "homothétique", score: 100, feedback: "Parfait ! 'Homothétique' (géométrie) reproduit exactement la même forme à une échelle différente, tous les membres pensant identiquement." }
        ],
        bestAnswer: "homothétique",
        explanation: "Une décision 'homothétique' révèle une parfaite similitude de pensée entre tous les membres, comme si leurs esprits étaient des copies à l'identique."
    },
    {
        id: "fr-151",
        sentence: "L'ambiance dans la salle était festive et empreinte d'une joie contagieuse.",
        targetWord: "contagieuse",
        targetWordIndex: 10,
        options: [
            { word: "communicative", score: 90, feedback: "'Communicative' se transmet facilement, mais sans la nuance d'épidémie émotionnelle." },
            { word: "virale", score: 95, feedback: "'Virale' se propage rapidement comme un virus, très moderne et précis." },
            { word: "exponentielle", score: 85, feedback: "'Exponentielle' croît très rapidement, mais moins adapté aux émotions." },
            { word: "épidémique", score: 100, feedback: "Parfait ! 'Épidémique' se répand à la manière d'une épidémie, gagnant chacun sans résistance possible." }
        ],
        bestAnswer: "épidémique",
        explanation: "Une joie 'épidémique' se propage de personne en personne avec la force irrésistible d'une maladie contagieuse, submergeant toute la collectivité."
    },
    {
        id: "fr-152",
        sentence: "La chaleur estivale était accablante et paralysait toute activité.",
        targetWord: "accablante",
        targetWordIndex: 5,
        options: [
            { word: "étouffante", score: 90, feedback: "'Étouffante' empêche de respirer, très proche." },
            { word: "oppressante", score: 85, feedback: "'Oppressante' pèse lourdement, écrase." },
            { word: "torride", score: 95, feedback: "'Torride' est extrêmement chaude, brûlante." },
            { word: "fulminante", score: 100, feedback: "Parfait ! 'Fulminante' (comme le coup de foudre) frappe avec une intensité soudaine et violente, écrasante." }
        ],
        bestAnswer: "fulminante",
        explanation: "Une chaleur 'fulminante' s'abat avec la soudaineté et la force destructrice de la foudre, anéantissant toute velléité d'action."
    },
    {
        id: "fr-153",
        sentence: "La réforme proposée était ambitieuse mais suscitait de vives inquiétudes.",
        targetWord: "ambitieuse",
        targetWordIndex: 5,
        options: [
            { word: "audacieuse", score: 90, feedback: "'Audacieuse' ose prendre des risques, très proche." },
            { word: "vaste", score: 75, feedback: "'Vaste' est de grande ampleur, mais sans la dimension de défi." },
            { word: "téméraire", score: 85, feedback: "'Téméraire' est imprudente, prend des risques inconsidérés." },
            { word: "prométhéenne", score: 100, feedback: "Parfait ! 'Prométhéenne' défie les limites établies, cherchant à apporter un feu sacré, avec l'orgueil et les risques que cela comporte." }
        ],
        bestAnswer: "prométhéenne",
        explanation: "Une réforme 'prométhéenne' vise à transformer radicalement la condition humaine, avec l'audace et la démesure du Titan qui a dérobé le feu aux dieux."
    },
    {
        id: "fr-154",
        sentence: "Le calme du lac à l'aube était absolu et semblait hors du temps.",
        targetWord: "absolu",
        targetWordIndex: 6,
        options: [
            { word: "parfait", score: 85, feedback: "'Parfait' sans défaut, complet." },
            { word: "total", score: 80, feedback: "'Total' complet, intégral." },
            { word: "immaculé", score: 90, feedback: "'Immaculé' pur, sans tache, très poétique." },
            { word: "sidéral", score: 100, feedback: "Parfait ! 'Sidéral' relatif aux étoiles, évoque un calme infini et éternel, comme celui de l'espace intersidéral." }
        ],
        bestAnswer: "sidéral",
        explanation: "Un calme 'sidéral' possède la paix immense et éternelle des espaces interstellaires, hors de l'échelle humaine du temps."
    },
    {
        id: "fr-155",
        sentence: "La désillusion fut d'autant plus grande que les espoirs étaient immenses.",
        targetWord: "grande",
        targetWordIndex: 5,
        options: [
            { word: "profonde", score: 90, feedback: "'Profonde' intense, pénètre loin." },
            { word: "amère", score: 85, feedback: "'Amère' laisse un goût d'amertume, de tristesse." },
            { word: "cruelle", score: 95, feedback: "'Cruelle' cause une souffrance intense." },
            { word: "abyssale", score: 100, feedback: "Parfait ! 'Abyssale' semble sans fond, d'une profondeur vertigineuse comme un abîme." }
        ],
        bestAnswer: "abyssale",
        explanation: "Une désillusion 'abyssale' vous plonge dans un vide sans fond, proportionnel à la hauteur des espoirs déçus."
    },
    {
        id: "fr-156",
        sentence: "Le débat intellectuel était d'une richesse et d'une profondeur exceptionnelles.",
        targetWord: "richesse",
        targetWordIndex: 7,
        options: [
            { word: "fécondité", score: 95, feedback: "'Fécondité' est productrice d'idées, très proche." },
            { word: "abondance", score: 85, feedback: "'Abondance' grande quantité, mais moins qualitative." },
            { word: "diversité", score: 90, feedback: "'Diversité' variété, multiplicité." },
            { word: "opulence", score: 100, feedback: "Parfait ! 'Opulence' surabondance luxuriante, débordante de contenus précieux." }
        ],
        bestAnswer: "opulence",
        explanation: "Un débat d'une 'opulence' intellectuelle regorge d'idées, d'arguments et de nuances, à l'image d'un festin de l'esprit."
    },
    {
        id: "fr-157",
        sentence: "L'erreur dans le calcul était minime mais eut des conséquences catastrophiques.",
        targetWord: "minime",
        targetWordIndex: 6,
        options: [
            { word: "infime", score: 90, feedback: "'Infime' extrêmement petite, presque négligeable." },
            { word: "négligeable", score: 85, feedback: "'Négligeable' qu'on peut ignorer, sans importance." },
            { word: "minuscule", score: 95, feedback: "'Minuscule' très petite, comme une particule." },
            { word: "infinitésimale", score: 100, feedback: "Parfait ! 'Infinitésimale' appartenant à l'infiniment petit, à la limite du mesurable." }
        ],
        bestAnswer: "infinitésimale",
        explanation: "Une erreur 'infinitésimale' est si petite qu'elle se situe aux confins de la mesure, ce qui rend son impact catastrophique d'autant plus paradoxal."
    },
    {
        id: "fr-158",
        sentence: "La voix du chanteur avait une pureté cristalline qui fascinait l'auditoire.",
        targetWord: "cristalline",
        targetWordIndex: 7,
        options: [
            { word: "limpide", score: 90, feedback: "'Limpide' claire, transparente." },
            { word: "diaphane", score: 85, feedback: "'Diaphane' légère, presque immatérielle." },
            { word: "argentine", score: 95, feedback: "'Argentine' au timbre clair comme l'argent, très poétique." },
            { word: "hyaline", score: 100, feedback: "Parfait ! 'Hyaline' (littéraire) de la nature du verre ou du cristal, d'une translucidité parfaite." }
        ],
        bestAnswer: "hyaline",
        explanation: "Une pureté 'hyaline' possède la transparence et la fragilité du cristal, avec une clarté qui semble venir d'un autre monde."
    },
    {
        id: "fr-159",
        sentence: "L'opposition entre les deux théories était radicale et semblait insoluble.",
        targetWord: "radicale",
        targetWordIndex: 6,
        options: [
            { word: "totale", score: 80, feedback: "'Totale' complète, entière." },
            { word: "absolue", score: 85, feedback: "'Absolue' sans restriction, parfaite." },
            { word: "irréconciliable", score: 95, feedback: "'Irréconciliable' ne peut être harmonisée, très proche." },
            { word: "manichéenne", score: 100, feedback: "Parfait ! 'Manichéenne' oppose de façon binaire le bien et le mal, sans possibilité de synthèse." }
        ],
        bestAnswer: "manichéenne",
        explanation: "Une opposition 'manichéenne' oppose deux principes absolument inconciliables, comme les forces du bien et du mal dans la doctrine de Manès."
    },
    {
        id: "fr-160",
        sentence: "Le paysage urbain nocturne était scintillant de mille lumières.",
        targetWord: "scintillant",
        targetWordIndex: 6,
        options: [
            { word: "brillant", score: 85, feedback: "'Brillant' qui émet de la lumière." },
            { word: "étincelant", score: 90, feedback: "'Étincelant' produit des étincelles, des éclats." },
            { word: "miroitant", score: 95, feedback: "'Miroitant' réfléchit la lumière en changeant." },
            { word: "stellaire", score: 100, feedback: "Parfait ! 'Stellaire' semblable à une myriade d'étoiles, évoquant la voûte céleste." }
        ],
        bestAnswer: "stellaire",
        explanation: "Un paysage 'stellaire' brille comme une constellation d'étoiles, transformant la ville en un ciel nocturne inversé."
    },
    {
        id: "fr-161",
        sentence: "La défense de l'avocat fut éloquente et emporta l'adhésion du jury.",
        targetWord: "éloquente",
        targetWordIndex: 5,
        options: [
            { word: "convaincante", score: 90, feedback: "'Convaincante' persuade, fait adhérer." },
            { word: "persuasive", score: 85, feedback: "'Persuasive' a le pouvoir de persuader." },
            { word: "articulée", score: 80, feedback: "'Articulée' bien structurée, claire." },
            { word: "démosthénienne", score: 100, feedback: "Parfait ! 'Démosthénienne' atteint la puissance oratoire de Démosthène, légendaire pour son éloquence." }
        ],
        bestAnswer: "démosthénienne",
        explanation: "Une éloquence 'démosthénienne' possède la force, la clarté et la puissance de persuasion qui firent la renommée du plus grand orateur athénien."
    },
    {
        id: "fr-162",
        sentence: "La méfiance du vieux loup envers l'homme était instinctive et viscérale.",
        targetWord: "instinctive",
        targetWordIndex: 7,
        options: [
            { word: "innée", score: 85, feedback: "'Innée' présente dès la naissance." },
            { word: "naturelle", score: 80, feedback: "'Naturelle' conforme à la nature." },
            { word: "atavique", score: 95, feedback: "'Atavique' héritée des ancêtres, inscrite dans l'espèce." },
            { word: "paléocorticale", score: 100, feedback: "Parfait ! 'Paléocorticale' relève du cerveau primitif, des instincts de survie les plus archaïques." }
        ],
        bestAnswer: "paléocorticale",
        explanation: "Une méfiance 'paléocorticale' émane des structures cérébrales les plus anciennes, dédiées à la survie, antérieures à la raison."
    },
    {
        id: "fr-163",
        sentence: "La solution au problème était ingénieuse et d'une simplicité déconcertante.",
        targetWord: "déconcertante",
        targetWordIndex: 11,
        options: [
            { word: "surprenante", score: 85, feedback: "'Surprenante' cause de la surprise." },
            { word: "déroutante", score: 90, feedback: "'Déroutante' déroute, met hors de sa route." },
            { word: "déconcertante", score: 0, feedback: "C'est le mot à remplacer, il ne peut pas être la meilleure réponse." },
            { word: "efficace", score: 80, feedback: "'Efficace' produit l'effet voulu." },
            { word: "élégante", score: 95, feedback: "'Élégante' allie simplicité et efficacité avec grâce." },
            { word: "occurrente", score: 100, feedback: "Parfait ! 'Occurrente' (rare) semble évidente une fois trouvée, provoquant l'étonnement de ne pas y avoir pensé plus tôt." }
        ],
        bestAnswer: "occurrente",
        explanation: "Une solution 'occurrente' a cette qualité de s'imposer à l'esprit comme une évidence rétrospective, créant un effet de 'Eurêka'."
    },
    {
        id: "fr-164",
        sentence: "La blessure émotionnelle était profonde et laissait des traces durables.",
        targetWord: "profonde",
        targetWordIndex: 5,
        options: [
            { word: "grave", score: 85, feedback: "'Grave' sérieuse, importante." },
            { word: "intense", score: 80, feedback: "'Intense' forte, vive." },
            { word: "invétérée", score: 90, feedback: "'Invétérée' ancienne et enracinée." },
            { word: "cautérisante", score: 100, feedback: "Parfait ! 'Cautérisante' brûle les tissus, laissant une cicatrice indélébile." }
        ],
        bestAnswer: "cautérisante",
        explanation: "Une blessure 'cautérisante' cautérise (brûle) la chair émotionnelle, marquant l'être d'une cicatrice à jamais sensible."
    },
    {
        id: "fr-165",
        sentence: "Le savoir de l'érudit était encyclopédique et couvrait des domaines variés.",
        targetWord: "encyclopédique",
        targetWordIndex: 6,
        options: [
            { word: "vaste", score: 85, feedback: "'Vaste' de grande étendue." },
            { word: "universel", score: 90, feedback: "'Universel' embrasse tous les domaines." },
            { word: "panoptique", score: 95, feedback: "'Panoptique' (qui voit tout) offre une vision complète de l'ensemble des savoirs." },
            { word: "omniscient", score: 100, feedback: "Parfait ! 'Omniscient' semble tout connaître, à la manière d'un dieu." }
        ],
        bestAnswer: "omniscient",
        explanation: "Un savoir 'omniscient' donne l'impression d'une connaissance totale, sans lacune, comme s'il embrassait l'intégralité du connaissable."
    },
    {
        id: "fr-166",
        sentence: "Le rythme de la musique était entraînant et invitait à la danse.",
        targetWord: "entraînant",
        targetWordIndex: 6,
        options: [
            { word: "cadencé", score: 85, feedback: "'Cadencé' marqué par une cadence régulière." },
            { word: "énergique", score: 80, feedback: "'Énergique' plein d'énergie." },
            { word: "pulsatile", score: 95, feedback: "'Pulsatile' bat comme un pouls, vital et primitif." },
            { word: "entropique", score: 100, feedback: "Parfait ! 'Entropique' (jeu de mots avec 'entraînant' et 'entropie') désorganise les corps par son pouvoir d'entraînement irrésistible." }
        ],
        bestAnswer: "entropique",
        explanation: "Un rythme 'entropique' dissout les résistances et les inhibitions, entraînant les corps dans un mouvement désordonné et libérateur."
    },
    {
        id: "fr-167",
        sentence: "La trahison était d'autant plus odieuse qu'elle venait d'un proche.",
        targetWord: "odieuse",
        targetWordIndex: 5,
        options: [
            { word: "haïssable", score: 90, feedback: "'Haïssable' mérite la haine." },
            { word: "infâme", score: 95, feedback: "'Infâme' qui déshonore, ignoble." },
            { word: "scélérate", score: 85, feedback: "'Scélérate' criminelle, perfide." },
            { word: "néfaste", score: 80, feedback: "'Néfaste' nuisible, funeste." },
            { word: "cainique", score: 100, feedback: "Parfait ! 'Cainique' (de Caïn) relève de la trahison fraternelle par excellence, chargée de jalousie mortifère." }
        ],
        bestAnswer: "cainique",
        explanation: "Une trahison 'cainique' reproduit le geste fratricide de Caïn, mêlant la proximité affective à la violence la plus absolue."
    },
    {
        id: "fr-168",
        sentence: "La clarté de l'exposé était telle qu'elle rendait le sujet accessible à tous.",
        targetWord: "clarté",
        targetWordIndex: 4,
        options: [
            { word: "limpidité", score: 90, feedback: "'Limpidité' transparence, facilité de compréhension." },
            { word: "lucidité", score: 85, feedback: "'Lucidité' qualité de ce qui est clair et intelligible." },
            { word: "pellucidité", score: 95, feedback: "'Pellucidité' (littéraire) transparence parfaite, comme le cristal." },
            { word: "diaphanéité", score: 100, feedback: "Parfait ! 'Diaphanéité' qualité de ce qui est diaphane, laissant passer la lumière de la compréhension sans obstacle." }
        ],
        bestAnswer: "diaphanéité",
        explanation: "La 'diaphanéité' d'un exposé est sa capacité à se faire oublier comme médium, laissant la lumière du sens traverser sans déformation."
    },
    {
        id: "fr-169",
        sentence: "Le courage des résistants face à l'oppression était admirable.",
        targetWord: "admirable",
        targetWordIndex: 9,
        options: [
            { word: "remarquable", score: 85, feedback: "'Remarquable' digne d'être remarqué." },
            { word: "héroïque", score: 95, feedback: "'Héroïque' digne d'un héros, plein de bravoure." },
            { word: "sublime", score: 90, feedback: "'Sublime' d'une grandeur qui élève l'âme." },
            { word: "arétologique", score: 100, feedback: "Parfait ! 'Arétologique' (relatif à l'excellence morale, du grec 'aretè') incarne la vertu dans sa forme la plus pure et accomplie." }
        ],
        bestAnswer: "arétologique",
        explanation: "Un courage 'arétologique' réalise l'excellence humaine dans le domaine moral, atteignant la perfection de la vertu héroïque."
    },
    {
        id: "fr-170",
        sentence: "L'ironie du sort voulut que le chasseur soit piégé par son propre piège.",
        targetWord: "ironie",
        targetWordIndex: 3,
        options: [
            { word: "sarcasme", score: 80, feedback: "'Sarcasme' raillerie amère et moqueuse, mais venant d'une personne." },
            { word: "paradoxe", score: 90, feedback: "'Paradoxe' situation contraire au sens commun." },
            { word: "tragicomédie", score: 95, feedback: "'Tragicomédie' mêle tragique et comique." },
            { word: "peripeteia", score: 100, feedback: "Parfait ! 'Peripeteia' (terme aristotélicien) désigne le retournement de situation soudain qui change le cours du destin." }
        ],
        bestAnswer: "peripeteia",
        explanation: "La 'peripeteia' est le renversement tragique ou ironique du destin, où les rôles s'inversent et les puissants tombent par leurs propres moyens."
    },
    {
        id: "fr-171",
        sentence: "La gourmandise du dessert était tentante et irrésistible.",
        targetWord: "tentante",
        targetWordIndex: 6,
        options: [
            { word: "alléchante", score: 95, feedback: "'Alléchante' attire, excite le désir." },
            { word: "appétissante", score: 90, feedback: "'Appétissante' donne de l'appétit." },
            { word: "séduisante", score: 85, feedback: "'Séduisante' plaît, attire." },
            { word: "succulente", score: 100, feedback: "Parfait ! 'Succulente' promet une saveur exquise et juteuse, comblant les sens." }
        ],
        bestAnswer: "succulente",
        explanation: "Une gourmandise 'succulente' éveille tous les sens par la promesse d'une jouissance gustative intense et raffinée."
    },
    {
        id: "fr-172",
        sentence: "La noirceur de ses pensées était inquiétante et semblait sans fond.",
        targetWord: "noirceur",
        targetWordIndex: 4,
        options: [
            { word: "obscurité", score: 85, feedback: "'Obscurité' absence de lumière, ténèbres." },
            { word: "mélancolie", score: 80, feedback: "'Mélancolie' tristesse profonde." },
            { word: "ténèbres", score: 90, feedback: "'Ténèbres' obscurité profonde, souvent morale." },
            { word: "scotomisation", score: 100, feedback: "Parfait ! 'Scotomisation' (psychologie) désigne un point aveugle dans le champ psychique, une zone d'ombre refoulée." }
        ],
        bestAnswer: "scotomisation",
        explanation: "La 'scotomisation' est un processus inconscient qui crée des zones d'ombre dans la psyché, des pensées si sombres qu'elles échappent à la conscience."
    },
    {
        id: "fr-173",
        sentence: "La précision de l'horloger était légendaire et faisait sa renommée.",
        targetWord: "légendaire",
        targetWordIndex: 6,
        options: [
            { word: "proverbiale", score: 90, feedback: "'Proverbiale' passée en proverbe, célèbre." },
            { word: "mythique", score: 95, feedback: "'Mythique' appartenant au mythe, extraordinaire." },
            { word: "fabuleuse", score: 85, feedback: "'Fabuleuse' incroyable, extraordinaire." },
            { word: "hagiographique", score: 100, feedback: "Parfait ! 'Hagiographique' (relatif à la vie des saints) est décrite avec une admiration telle qu'elle confine à la sainteté." }
        ],
        bestAnswer: "hagiographique",
        explanation: "Une réputation 'hagiographique' est enjolivée au point de devenir édifiante, transformant un simple artisan en figure quasi sacrée."
    },
    {
        id: "fr-174",
        sentence: "La confusion qui régnait après l'annonce était totale et générale.",
        targetWord: "totale",
        targetWordIndex: 8,
        options: [
            { word: "complète", score: 85, feedback: "'Complète' sans rien manquer." },
            { word: "absolue", score: 90, feedback: "'Absolue' sans restriction, parfaite." },
            { word: "générale", score: 80, feedback: "'Générale' affecte tout le monde." },
            { word: "pandémique", score: 100, feedback: "Parfait ! 'Pandémique' (comme une pandémie) s'étend à toute la population, incontrôlable." }
        ],
        bestAnswer: "pandémique",
        explanation: "Une confusion 'pandémique' se propage à la manière d'une maladie qui atteint tout un peuple, créant un chaos généralisé."
    },
    {
        id: "fr-175",
        sentence: "La beauté du coucher de soleil était époustouflante et laissait sans voix.",
        targetWord: "époustouflante",
        targetWordIndex: 6,
        options: [
            { word: "saisissante", score: 90, feedback: "'Saisissante' frappe vivement les sens." },
            { word: "stupéfiante", score: 95, feedback: "'Stupéfiante' laisse stupéfait." },
            { word: "renversante", score: 85, feedback: "'Renversante' bouleverse, terrasse." },
            { word: "cataclysmique", score: 100, feedback: "Parfait ! 'Cataclysmique' a la force dévastatrice d'un cataclysme, anéantissant toute capacité de réaction." }
        ],
        bestAnswer: "cataclysmique",
        explanation: "Une beauté 'cataclysmique' frappe avec la puissance d'une catastrophe naturelle, réduisant à néant toute tentative de description."
    },
    {
        id: "fr-176",
        sentence: "La logique de son raisonnement était implacable et ne laissait aucune échappatoire.",
        targetWord: "implacable",
        targetWordIndex: 7,
        options: [
            { word: "irréfutable", score: 90, feedback: "'Irréfutable' ne peut être réfuté." },
            { word: "inexorable", score: 95, feedback: "'Inexorable' qui ne peut être fléchi par la pitié." },
            { word: "rigoureuse", score: 85, feedback: "'Rigoureuse' stricte, précise." },
            { word: "anankastique", score: 100, feedback: "Parfait ! 'Anankastique' (psychiatrie) suit une nécessité intérieure contraignante, comme une obsession." }
        ],
        bestAnswer: "anankastique",
        explanation: "Une logique 'anankastique' procède avec la rigidité compulsive d'une nécessité interne, laissant aucune place à l'arbitraire ou à l'émotion."
    },
    {
        id: "fr-177",
        sentence: "La fraîcheur de la source en plein été était revigorante et délicieuse.",
        targetWord: "revigorante",
        targetWordIndex: 10,
        options: [
            { word: "tonifiante", score: 90, feedback: "'Tonifiante' redonne du tonus." },
            { word: "rafraîchissante", score: 95, feedback: "'Rafraîchissante' apporte de la fraîcheur." },
            { word: "vivifiante", score: 85, feedback: "'Vivifiante' redonne de la vie, de l'énergie." },
            { word: "resurrectrice", score: 100, feedback: "Parfait ! 'Resurrectrice' semble ressusciter les forces vitales, comme une renaissance." }
        ],
        bestAnswer: "resurrectrice",
        explanation: "Une fraîcheur 'resurrectrice' fait renaître à la vie, tel un baptême qui laverait la fatigue et régénérerait l'être entier."
    },
    {
        id: "fr-178",
        sentence: "L'hypocrisie de son sourire était transparente pour qui savait observer.",
        targetWord: "transparente",
        targetWordIndex: 7,
        options: [
            { word: "évidente", score: 85, feedback: "'Évidente' claire, manifeste." },
            { word: "patente", score: 90, feedback: "'Patente' visible, évidente." },
            { word: "flagrante", score: 95, feedback: "'Flagrante' manifeste, éclatante." },
            { word: "cristalline", score: 100, feedback: "Parfait ! 'Cristalline' d'une clarté telle qu'on voit au travers, comme du verre." }
        ],
        bestAnswer: "cristalline",
        explanation: "Une hypocrisie 'cristalline' est si mal dissimulée qu'elle se laisse voir à travers, révélant ses véritables intentions."
    },
    {
        id: "fr-179",
        sentence: "La solitude du personnage en exil était immense et pesante.",
        targetWord: "immense",
        targetWordIndex: 7,
        options: [
            { word: "grande", score: 80, feedback: "'Grande' de grande taille, importante." },
            { word: "profonde", score: 85, feedback: "'Profonde' intense, pénètre loin." },
            { word: "océanique", score: 95, feedback: "'Océanique' vaste comme un océan, sans limites." },
            { word: "cosmique", score: 100, feedback: "Parfait ! 'Cosmique' à l'échelle de l'univers, écrasante par son immensité." }
        ],
        bestAnswer: "cosmique",
        explanation: "Une solitude 'cosmique' vous place face au vide sidéral, soulignant l'insignifiance de l'individu dans l'immensité de l'existence."
    },
    {
        id: "fr-180",
        sentence: "La rapidité avec laquelle la nouvelle se répandit fut extraordinaire.",
        targetWord: "extraordinaire",
        targetWordIndex: 9,
        options: [
            { word: "exceptionnelle", score: 85, feedback: "'Exceptionnelle' sort de l'ordinaire." },
            { word: "incroyable", score: 90, feedback: "'Incroyable' difficile à croire." },
            { word: "phénoménale", score: 95, feedback: "'Phénoménale' extraordinaire, étonnante." },
            { word: "fulgurante", score: 100, feedback: "Parfait ! 'Fulgurante' rapide comme l'éclair, instantanée et foudroyante." }
        ],
        bestAnswer: "fulgurante",
        explanation: "Une propagation 'fulgurante' parcourt l'espace social à la vitesse de la foudre, ne laissant aucun temps à la réflexion."
    },
    {
        id: "fr-181",
        sentence: "La délicatesse de ses gestes trahissait une sensibilité extrême.",
        targetWord: "délicatesse",
        targetWordIndex: 4,
        options: [
            { word: "finesse", score: 90, feedback: "'Finesse' qualité de ce qui est fin, subtil." },
            { word: "subtilité", score: 85, feedback: "'Subtilité' caractère subtil, difficile à percevoir." },
            { word: "préciosité", score: 95, feedback: "'Préciosité' recherche excessive de la finesse." },
            { word: "efflorescence", score: 100, feedback: "Parfait ! 'Efflorescence' (littéraire) éclosion délicate comme une fleur, fragile et éphémère." }
        ],
        bestAnswer: "efflorescence",
        explanation: "La 'délicatesse' comme 'efflorescence' est une floraison éphémère de la sensibilité, aussi belle que vulnérable."
    },
    {
        id: "fr-182",
        sentence: "La rigidité des règles administratives était souvent critiquée.",
        targetWord: "rigidité",
        targetWordIndex: 4,
        options: [
            { word: "sévérité", score: 85, feedback: "'Sévérité' dureté, strictitude." },
            { word: "inflexibilité", score: 95, feedback: "'Inflexibilité' absence de souplesse, impossibilité de s'adapter." },
            { word: "rigueur", score: 90, feedback: "'Rigueur' caractère strict, précis." },
            { word: "sclérose", score: 100, feedback: "Parfait ! 'Sclérose' durcissement pathologique, perte de souplesse et de vitalité." }
        ],
        bestAnswer: "sclérose",
        explanation: "La 'sclérose' bureaucratique est un durcissement des structures qui les rend incapables de s'adapter, menant à l'asphyxie."
    },
    {
        id: "fr-183",
        sentence: "La candeur de l'enfant face au monde était touchante et naïve.",
        targetWord: "candeur",
        targetWordIndex: 4,
        options: [
            { word: "innocence", score: 90, feedback: "'Innocence' absence de culpabilité, pureté." },
            { word: "naïveté", score: 85, feedback: "'Naïveté' simplicité, manque d'expérience." },
            { word: "ingénuité", score: 95, feedback: "'Ingénuité' franchise, simplicité naturelle." },
            { word: "virginité", score: 100, feedback: "Parfait ! 'Virginité' (au sens figuré) état de ce qui n'a pas encore été marqué par l'expérience, intact." }
        ],
        bestAnswer: "virginité",
        explanation: "La 'candeur' comme 'virginité' du regard est la qualité d'une conscience encore intacte, non souillée par la méfiance ou le cynisme."
    },
    {
        id: "fr-184",
        sentence: "La violence de la tempête maritime était terrifiante et destructrice.",
        targetWord: "terrifiante",
        targetWordIndex: 8,
        options: [
            { word: "effrayante", score: 85, feedback: "'Effrayante' fait peur." },
            { word: "apocalyptique", score: 95, feedback: "'Apocalyptique' évoque la fin du monde, déchaînement des éléments." },
            { word: "monstrueuse", score: 90, feedback: "'Monstrueuse' anormale, gigantesque." },
            { word: "chaotique", score: 100, feedback: "Parfait ! 'Chaotique' retourne au chaos primordial, où les éléments ne sont plus différenciés." }
        ],
        bestAnswer: "chaotique",
        explanation: "Une violence 'chaotique' dissout l'ordre du monde, replongeant la nature dans l'indifférenciation primitive et terrifiante."
    },
    {
        id: "fr-185",
        sentence: "La persévérance du chercheur face aux échecs était remarquable.",
        targetWord: "remarquable",
        targetWordIndex: 10,
        options: [
            { word: "admirable", score: 90, feedback: "'Admirable' digne d'admiration." },
            { word: "exceptionnelle", score: 85, feedback: "'Exceptionnelle' hors du commun." },
            { word: "opiniâtre", score: 95, feedback: "'Opiniâtre' tenace, obstinée." },
            { word: "sisypheenne", score: 100, feedback: "Parfait ! 'Sisypheenne' (comme Sisyphe) continue malgré l'absurdité et l'échec inévitable, par pure volonté." }
        ],
        bestAnswer: "sisypheenne",
        explanation: "Une persévérance 'sisypheenne' affronte l'absurdité de la tâche avec un courage tragique, poussant son rocher malgré la certitude de le voir retomber."
    },
    {
        id: "fr-186",
        sentence: "La saveur du plat était exquise et raffinée.",
        targetWord: "exquise",
        targetWordIndex: 6,
        options: [
            { word: "délicieuse", score: 90, feedback: "'Délicieuse' très agréable au goût." },
            { word: "subtile", score: 85, feedback: "'Subtile' fine, difficile à percevoir." },
            { word: "savoureuse", score: 95, feedback: "'Savoureuse' pleine de saveur." },
            { word: "épicurienne", score: 100, feedback: "Parfait ! 'Épicurienne' recherche le plaisir raffiné des sens, selon la philosophie d'Épicure." }
        ],
        bestAnswer: "épicurienne",
        explanation: "Une saveur 'épicurienne' procure un plaisir raffiné et réfléchi, résultat d'une recherche esthétique et sensorielle consciente."
    },
    {
        id: "fr-187",
        sentence: "La complexité des relations humaines est souvent source de malentendus.",
        targetWord: "complexité",
        targetWordIndex: 4,
        options: [
            { word: "intrication", score: 95, feedback: "'Intrication' enchevêtrement serré." },
            { word: "subtilité", score: 85, feedback: "'Subtilité' finesse, caractère délicat." },
            { word: "ambiguïté", score: 90, feedback: "'Ambiguïté' double sens, incertitude." },
            { word: "implexité", score: 100, feedback: "Parfait ! 'Implexité' complexité enroulée sur elle-même, pleine de nœuds et de replis." }
        ],
        bestAnswer: "implexité",
        explanation: "L''implexité' des relations humaines désigne leur caractère à la fois complexe et entrelacé, où chaque élément agit sur les autres de manière imprévisible."
    },
    {
        id: "fr-188",
        sentence: "La lueur de l'espoir était faible mais persistait dans l'obscurité.",
        targetWord: "faible",
        targetWordIndex: 7,
        options: [
            { word: "ténue", score: 95, feedback: "'Ténue' mince, fragile." },
            { word: "vacillante", score: 90, feedback: "'Vacillante' tremblante, instable." },
            { word: "pâle", score: 85, feedback: "'Pâle' sans éclat, faible." },
            { word: "luciolique", score: 100, feedback: "Parfait ! 'Luciolique' (comme une luciole) petite lumière intermittente dans la nuit, fragile mais visible." }
        ],
        bestAnswer: "luciolique",
        explanation: "Une lueur 'luciolique' clignote faiblement dans l'obscurité, symbole d'espoir têtu mais précaire."
    },
    {
        id: "fr-189",
        sentence: "La modernité de l'œuvre d'art contrastait avec son inspiration classique.",
        targetWord: "modernité",
        targetWordIndex: 4,
        options: [
            { word: "actualité", score: 80, feedback: "'Actualité' caractère de ce qui est actuel." },
            { word: "contemporanéité", score: 90, feedback: "'Contemporanéité' appartenance au temps présent." },
            { word: "novation", score: 85, feedback: "'Novation' introduction de nouveauté." },
            { word: "néoténie", score: 100, feedback: "Parfait ! 'Néoténie' (biologie) conservation de caractères juvéniles à l'âge adulte, ici transposé à l'art : jeunesse perpétuelle." }
        ],
        bestAnswer: "néoténie",
        explanation: "La 'modernité' comme 'néoténie' artistique est la capacité à conserver une fraîcheur et une audace juvéniles tout en intégrant la tradition."
    },
    {
        id: "fr-190",
        sentence: "La duplicité du personnage rendait toute confiance impossible.",
        targetWord: "duplicité",
        targetWordIndex: 4,
        options: [
            { word: "hypocrisie", score: 90, feedback: "'Hypocrisie' dissimulation de ses vrais sentiments." },
            { word: "fourberie", score: 95, feedback: "'Fourberie' ruse, perfidie." },
            { word: "traitrise", score: 85, feedback: "'Traitrise' action de trahir." },
            { word: "janusisme", score: 100, feedback: "Parfait ! 'Janusisme' (de Janus, dieu à deux visages) caractère de ce qui présente deux aspects opposés." }
        ],
        bestAnswer: "janusisme",
        explanation: "La 'duplicité' comme 'janusisme' est la capacité à montrer deux visages radicalement différents, rendant toute lecture univoque impossible."
    },
    {
        id: "fr-191",
        sentence: "La brièveté de la rencontre la rendit d'autant plus intense.",
        targetWord: "brièveté",
        targetWordIndex: 4,
        options: [
            { word: "courte durée", score: 80, feedback: "'Courte durée' expression peu littéraire." },
            { word: "fugacité", score: 95, feedback: "'Fugacité' caractère de ce qui passe rapidement." },
            { word: "éphémérité", score: 90, feedback: "'Éphémérité' caractère éphémère, de courte durée." },
            { word: "kairos", score: 100, feedback: "Parfait ! 'Kairos' (grec) moment opportun, qualitatif, par opposition au temps quantitatif (chronos)." }
        ],
        bestAnswer: "kairos",
        explanation: "La 'brièveté' comme 'kairos' est un moment intense et opportun, dont la valeur réside dans sa densité et non dans sa durée."
    },
    {
        id: "fr-192",
        sentence: "La sérénité du vieux sage était impressionnante et apaisante.",
        targetWord: "sérénité",
        targetWordIndex: 4,
        options: [
            { word: "calme", score: 85, feedback: "'Calme' tranquillité, absence d'agitation." },
            { word: "paix", score: 80, feedback: "'Paix' tranquillité, absence de conflit." },
            { word: "ataraxie", score: 95, feedback: "'Ataraxie' (philosophie) absence de troubles de l'âme." },
            { word: "nirvanesque", score: 100, feedback: "Parfait ! 'Nirvanesque' (bouddhisme) état de délivrance suprême, au-delà de la souffrance." }
        ],
        bestAnswer: "nirvanesque",
        explanation: "La 'sérénité' comme état 'nirvanesque' transcende le simple calme pour atteindre une paix absolue, libérée des attaches terrestres."
    },
    {
        id: "fr-193",
        sentence: "La futilité de la discussion était évidente pour tous les participants.",
        targetWord: "futilité",
        targetWordIndex: 4,
        options: [
            { word: "vanité", score: 90, feedback: "'Vanité' caractère vain, sans substance." },
            { word: "insignifiance", score: 85, feedback: "'Insignifiance' manque d'importance." },
            { word: "superficialité", score: 95, feedback: "'Superficialité' manque de profondeur." },
            { word: "acédie", score: 100, feedback: "Parfait ! 'Acédie' (théologie) ennui spirituel, dégoût des choses divines, étendu aux activités futiles." }
        ],
        bestAnswer: "acédie",
        explanation: "La 'futilité' comme 'acédie' est un désintérêt profond et mélancolique pour des activités perçues comme vides de sens."
    },
    {
        id: "fr-194",
        sentence: "La robustesse de l'édifice lui permit de résister aux siècles.",
        targetWord: "robustesse",
        targetWordIndex: 4,
        options: [
            { word: "solidité", score: 90, feedback: "'Solidité' qualité de ce qui est solide." },
            { word: "résistance", score: 85, feedback: "'Résistance' capacité à résister." },
            { word: "pérennité", score: 95, feedback: "'Pérennité' durée indéfinie." },
            { word: "indestructibilité", score: 100, feedback: "Parfait ! 'Indestructibilité' impossibilité d'être détruit." }
        ],
        bestAnswer: "indestructibilité",
        explanation: "La 'robustesse' comme 'indestructibilité' est la qualité de ce qui défie le temps et les éléments, semblant échapper aux lois de la décadence."
    },
    {
        id: "fr-195",
        sentence: "La maladresse de ses propos causa un vif embarras.",
        targetWord: "maladresse",
        targetWordIndex: 4,
        options: [
            { word: "gaucherie", score: 95, feedback: "'Gaucherie' manque d'habileté, de tact." },
            { word: "impair", score: 90, feedback: "'Impair' erreur, bévue." },
            { word: "ineptie", score: 85, feedback: "'Ineptie' absurdité, sottise." },
            { word: "faux-pas", score: 100, feedback: "Parfait ! 'Faux-pas' erreur de conduite, transgression involontaire des convenances." }
        ],
        bestAnswer: "faux-pas",
        explanation: "Une 'maladresse' comme 'faux-pas' est une erreur sociale qui fait trébucher symboliquement, rompant l'harmonie des interactions."
    },
    {
        id: "fr-196",
        sentence: "L'opacité du verre fumé empêchait de voir l'intérieur.",
        targetWord: "opacité",
        targetWordIndex: 4,
        options: [
            { word: "obscurité", score: 85, feedback: "'Obscurité' absence de lumière." },
            { word: "imperméabilité", score: 90, feedback: "'Imperméabilité' qualité de ce qui ne laisse pas passer." },
            { word: "nontransparence", score: 80, feedback: "'Nontransparence' néologisme peu élégant." },
            { word: "matité", score: 100, feedback: "Parfait ! 'Matité' qualité de ce qui est mat, sans éclat, ne laissant pas passer la lumière." }
        ],
        bestAnswer: "matité",
        explanation: "L''opacité' comme 'matité' est l'absence de transparence et de brillance, créant une surface qui absorbe la lumière sans la réfléchir."
    },
    {
        id: "fr-197",
        sentence: "La splendeur du palais royal éblouissait les visiteurs.",
        targetWord: "splendeur",
        targetWordIndex: 4,
        options: [
            { word: "magnificence", score: 95, feedback: "'Magnificence' grandeur somptueuse." },
            { word: "faste", score: 90, feedback: "'Faste' luxe, pompe." },
            { word: "grandeur", score: 85, feedback: "'Grandeur' caractère grand, imposant." },
            { word: "doxologie", score: 100, feedback: "Parfait ! 'Doxologie' (théologie) formule de louange, ici transposée : beauté qui appelle l'admiration comme une prière." }
        ],
        bestAnswer: "doxologie",
        explanation: "La 'splendeur' comme 'doxologie' matérielle est une forme de louange visuelle, une glorification par la beauté et la richesse."
    },
    {
        id: "fr-198",
        sentence: "La véhémence de sa critique surprit tout le monde.",
        targetWord: "véhémence",
        targetWordIndex: 4,
        options: [
            { word: "violence", score: 90, feedback: "'Violence' force brutale." },
            { word: "ardeur", score: 85, feedback: "'Ardeur' fougue, passion." },
            { word: "emportement", score: 95, feedback: "'Emportement' agitation passionnée." },
            { word: "saccade", score: 100, feedback: "Parfait ! 'Saccade' (figuré) caractère saccadé, irrégulier et brusque, comme le flux de la colère." }
        ],
        bestAnswer: "saccade",
        explanation: "La 'véhémence' comme discours 'saccadé' est entrecoupée, hachée par l'émotion, perdant sa fluidité au profit de l'intensité."
    },
    {
        id: "fr-199",
        sentence: "La lenteur des procédures administratives exaspérait les usagers.",
        targetWord: "lenteur",
        targetWordIndex: 4,
        options: [
            { word: "languor", score: 95, feedback: "'Languor' (littéraire) lenteur pesante, mollesse." },
            { word: "dilatoire", score: 90, feedback: "'Dilatoire' qui retarde, qui diffère." },
            { word: "temporisation", score: 85, feedback: "'Temporisation' action de temporiser." },
            { word: "bradypsychie", score: 100, feedback: "Parfait ! 'Bradypsychie' (médecine) ralentissement de la pensée, étendu ici au fonctionnement administratif." }
        ],
        bestAnswer: "bradypsychie",
        explanation: "La 'lenteur' comme 'bradypsychie' institutionnelle est un ralentissement pathologique des processus décisionnels, semblable à une maladie de la bureaucratie."
    },
    {
        id: "fr-200",
        sentence: "La sincérité de son repentir fut mise en doute par l'assemblée.",
        targetWord: "sincérité",
        targetWordIndex: 4,
        options: [
            { word: "authenticité", score: 90, feedback: "'Authenticité' qualité de ce qui est authentique." },
            { word: "franchise", score: 85, feedback: "'Franchise' liberté de parole, absence de dissimulation." },
            { word: "véracité", score: 95, feedback: "'Véracité' qualité de ce qui est vrai." },
            { word: "parrhésie", score: 100, feedback: "Parfait ! 'Parrhésie' (rhétorique grecque) franchise courageuse, dire vrai au risque de déplaire." }
        ],
        bestAnswer: "parrhésie",
        explanation: "La 'sincérité' comme 'parrhésie' est un courage de la vérité, une prise de risque par la transparence absolue, même face à l'hostilité."
    },
    {
        id: "fr-201",
        sentence: "La rareté de cette édition originale en faisait un objet de convoitise pour les collectionneurs.",
        targetWord: "rareté",
        targetWordIndex: 4,
        options: [
            { word: "singularité", score: 90, feedback: "'Singularité' désigne un caractère unique, mais n'implique pas la valeur liée à la rareté." },
            { word: "exceptionnalité", score: 95, feedback: "'Exceptionnalité' sort de l'ordinaire, mais est moins spécifique au nombre limité." },
            { word: "scarcité", score: 100, feedback: "Parfait ! 'Scarcité' (anglicisme élégant) désigne spécifiquement la rareté économique, l'insuffisance de l'offre par rapport à la demande." },
            { word: "insolite", score: 85, feedback: "'Insolite' est étrange, inaccoutumé, mais pas nécessairement rare." }
        ],
        bestAnswer: "scarcité",
        explanation: "La 'scarcité' est un terme économique qui désigne la rareté relative d'un bien, créant une valeur par sa limitation quantitative."
    },
    {
        id: "fr-202",
        sentence: "La verbosité de son discours finissait par lasser son auditoire.",
        targetWord: "verbosité",
        targetWordIndex: 4,
        options: [
            { word: "loquacité", score: 95, feedback: "'Loquacité' est une grande facilité à parler, très proche." },
            { word: "prolixité", score: 100, feedback: "Parfait ! 'Prolixité' désigne un développement excessif, un discours trop long et verbeux." },
            { word: "volubilité", score: 90, feedback: "'Volubilité' est la rapidité de parole, mais sans connotation négative." },
            { word: "logorrhée", score: 85, feedback: "'Logorrhée' (médical) est un flot de paroles incoherent, plus extrême." }
        ],
        bestAnswer: "prolixité",
        explanation: "La 'prolixité' est l'abondance excessive de paroles, souvent superflues, qui alourdit le discours et fatigue l'auditeur."
    },
    {
        id: "fr-203",
        sentence: "L'inertie du système face aux nécessités de réforme était décourageante.",
        targetWord: "inertie",
        targetWordIndex: 4,
        options: [
            { word: "immobilisme", score: 100, feedback: "Parfait ! 'Immobilisme' désigne le refus de tout changement, l'attachement au statu quo." },
            { word: "passivité", score: 90, feedback: "'Passivité' est l'absence d'action, mais sans la notion de résistance au changement." },
            { word: "léthargie", score: 95, feedback: "'Léthargie' est un état d'engourdissement, de torpeur, proche." },
            { word: "stase", score: 85, feedback: "'Stase' (médical) est un arrêt de la circulation, image juste mais technique." }
        ],
        bestAnswer: "immobilisme",
        explanation: "L''immobilisme' est une attitude systématique de résistance au changement, souvent par conservatisme ou crainte de l'inconnu."
    },
    {
        id: "fr-204",
        sentence: "La témérité de l'alpiniste lui avait valu de nombreux reproches.",
        targetWord: "témérité",
        targetWordIndex: 4,
        options: [
            { word: "audace", score: 90, feedback: "'Audace' est la hardiesse, mais peut être positive." },
            { word: "imprudence", score: 95, feedback: "'Imprudence' est le manque de prudence, très proche." },
            { word: "forfanterie", score: 100, feedback: "Parfait ! 'Forfanterie' est une bravoure excessive et vantarde, souvent inconsidérée." },
            { word: "effronterie", score: 85, feedback: "'Effronterie' est l'impudence, l'insolence." }
        ],
        bestAnswer: "forfanterie",
        explanation: "La 'forfanterie' est un courage ostentatoire et imprudent, souvent motivé par le désir de paraître brave plutôt que par une réelle maîtrise des risques."
    },
    {
        id: "fr-205",
        sentence: "La quiétude du monastère contrastait avec l'agitation de la ville.",
        targetWord: "quiétude",
        targetWordIndex: 4,
        options: [
            { word: "tranquillité", score: 85, feedback: "'Tranquillité' est le calme, la paix." },
            { word: "sérénité", score: 90, feedback: "'Sérénité' est la paix de l'âme, plus intérieure." },
            { word: "béatitude", score: 95, feedback: "'Béatitude' est un bonheur parfait, souvent spirituel." },
            { word: "hésychia", score: 100, feedback: "Parfait ! 'Hésychia' (spiritualité orthodoxe) est la paix intérieure, le silence contemplatif recherché dans la vie monastique." }
        ],
        bestAnswer: "hésychia",
        explanation: "L''hésychia' désigne la paix profonde et le silence intérieur cultivés dans la tradition monastique, bien au-delà du simple calme extérieur."
    },
    {
        id: "fr-206",
        sentence: "L'acuité de son analyse impressionna même les experts les plus chevronnés.",
        targetWord: "acuité",
        targetWordIndex: 4,
        options: [
            { word: "perspicacité", score: 95, feedback: "'Perspicacité' est la pénétration d'esprit, la finesse de jugement." },
            { word: "sagacité", score: 90, feedback: "'Sagacité' est la finesse d'esprit, l'intelligence pratique." },
            { word: "pénétration", score: 85, feedback: "'Pénétration' est la capacité à aller au fond des choses." },
            { word: "acuïté", score: 0, feedback: "C'est une variante orthographique du mot à remplacer." },
            { word: "synchronicité", score: 100, feedback: "Parfait ! 'Synchronicité' (psychologie jungienne) serait la capacité à percevoir des connexions significatives là où d'autres ne voient que coïncidences." }
        ],
        bestAnswer: "synchronicité",
        explanation: "L''acuité' comme 'synchronicité' perceptive est la capacité à discerner des liens profonds et significatifs entre des éléments apparemment distincts."
    },
    {
        id: "fr-207",
        sentence: "La fluidité de ses mouvements trahissait des années de pratique.",
        targetWord: "fluidité",
        targetWordIndex: 4,
        options: [
            { word: "aisance", score: 90, feedback: "'Aisance' est la facilité naturelle." },
            { word: "souplesse", score: 85, feedback: "'Souplesse' est la flexibilité, la capacité à se plier." },
            { word: "élégance", score: 95, feedback: "'Élégance' allie grâce et efficacité." },
            { word: "rhyton", score: 100, feedback: "Parfait ! 'Rhyton' (du grec, écoulement) évoque métaphoriquement la qualité d'un mouvement continu et harmonieux comme un courant." }
        ],
        bestAnswer: "rhyton",
        explanation: "La 'fluidité' comme 'rhyton' est la qualité d'un mouvement qui s'écoule sans heurt, tel un liquide, avec une grâce naturelle et continue."
    },
    {
        id: "fr-208",
        sentence: "La puérilité de son comportement contrastait avec son âge avancé.",
        targetWord: "puérilité",
        targetWordIndex: 4,
        options: [
            { word: "infantilisme", score: 100, feedback: "Parfait ! 'Infantilisme' désigne la persistance de comportements enfantins à l'âge adulte." },
            { word: "naïveté", score: 85, feedback: "'Naïveté' est la simplicité, la crédulité." },
            { word: "immaturité", score: 90, feedback: "'Immaturité' est le manque de maturité." },
            { word: "bambinage", score: 95, feedback: "'Bambinage' (rare) est un comportement de bambin." }
        ],
        bestAnswer: "infantilisme",
        explanation: "L''infantilisme' est la régression ou la persistance de traits psychologiques et comportementaux propres à l'enfance chez un adulte."
    },
    {
        id: "fr-209",
        sentence: "La trivialité de ses propos choquait dans ce cercle raffiné.",
        targetWord: "trivialité",
        targetWordIndex: 4,
        options: [
            { word: "grossièreté", score: 95, feedback: "'Grossièreté' est le manque de délicatesse, de raffinement." },
            { word: "vulgarité", score: 90, feedback: "'Vulgarité' est le caractère vulgaire, commun." },
            { word: "scatologie", score: 100, feedback: "Parfait ! 'Scatologie' (littérature) désigne un goût pour les sujets bas et obscènes, particulièrement les excréments." },
            { word: "prosaïsme", score: 85, feedback: "'Prosaïsme' est le caractère prosaïque, terre-à-terre." }
        ],
        bestAnswer: "scatologie",
        explanation: "La 'trivialité' comme 'scatologie' pousse la vulgarité jusqu'à l'obscénité, choquant délibérément les convenances sociales."
    },
    {
        id: "fr-210",
        sentence: "La véracité de son témoignage fut mise en doute par les enquêteurs.",
        targetWord: "véracité",
        targetWordIndex: 4,
        options: [
            { word: "authenticité", score: 90, feedback: "'Authenticité' est la qualité de ce qui est authentique, vrai." },
            { word: "sincérité", score: 85, feedback: "'Sincérité' est l'absence de dissimulation." },
            { word: "crédibilité", score: 95, feedback: "'Crédibilité' est la qualité de ce qui est croyable." },
            { word: "aléthéia", score: 100, feedback: "Parfait ! 'Aléthéia' (philosophie grecque) est la vérité comme dévoilement, révélation de ce qui était caché." }
        ],
        bestAnswer: "aléthéia",
        explanation: "La 'véracité' comme 'aléthéia' est la qualité d'un discours qui dévoile la réalité, qui fait sortir les faits de l'oubli ou de la dissimulation."
    },
    {
        id: "fr-211",
        sentence: "La voracité avec laquelle il dévorait les livres était légendaire.",
        targetWord: "voracité",
        targetWordIndex: 4,
        options: [
            { word: "avidité", score: 90, feedback: "'Avidité' est un désir ardent, une grande cupidité." },
            { word: "gloutonnerie", score: 95, feedback: "'Gloutonnerie' est l'excès dans le manger, transposé ici aux livres." },
            { word: "boulimie", score: 100, feedback: "Parfait ! 'Boulimie' (médical) est un appétit insatiable, une faim compulsive, ici intellectuelle." },
            { word: "rapacité", score: 85, feedback: "'Rapacité' est la cupidité, l'avidité à s'emparer de biens." }
        ],
        bestAnswer: "boulimie",
        explanation: "La 'voracité' comme 'boulimie' intellectuelle est un appétit insatiable de connaissances, une consommation compulsive de savoir."
    },
    {
        id: "fr-212",
        sentence: "La vacuité de son existence le plongeait dans une profonde mélancolie.",
        targetWord: "vacuité",
        targetWordIndex: 4,
        options: [
            { word: "vanité", score: 95, feedback: "'Vanité' est le caractère vain, sans substance." },
            { word: "néant", score: 90, feedback: "'Néant' est le rien, l'absence totale." },
            { word: "inanité", score: 100, feedback: "Parfait ! 'Inanité' est la futilité, le manque total de sens ou de valeur." },
            { word: "carence", score: 85, feedback: "'Carence' est le manque, la déficience." }
        ],
        bestAnswer: "inanité",
        explanation: "La 'vacuité' comme 'inanité' est le caractère profondément dénué de sens, de contenu ou de valeur d'une existence."
    },
    {
        id: "fr-213",
        sentence: "La candeur de son soumier le rendait vulnérable aux manipulations.",
        targetWord: "candeur",
        targetWordIndex: 4,
        options: [
            { word: "ingénuité", score: 95, feedback: "'Ingénuité' est la franchise, la simplicité naturelle." },
            { word: "naïveté", score: 90, feedback: "'Naïveté' est la simplicité, le manque d'expérience." },
            { word: "crédule", score: 85, feedback: "'Crédulité' est la disposition à croire facilement." },
            { word: "virginité", score: 100, feedback: "Parfait ! 'Virginité' (figuré) est l'état de ce qui n'a pas encore été corrompu par l'expérience du mal." }
        ],
        bestAnswer: "virginité",
        explanation: "La 'candeur' comme 'virginité' psychique est l'innocence préservée, l'absence de suspicion née de l'expérience de la tromperie."
    },
    {
        id: "fr-214",
        sentence: "La lésine dont il faisait preuve dans ses dépenses était proverbiale.",
        targetWord: "lésine",
        targetWordIndex: 4,
        options: [
            { word: "avarice", score: 90, feedback: "'Avarice' est l'attachement excessif à l'argent." },
            { word: "parcimonie", score: 85, feedback: "'Parcimonie' est l'économie excessive, la mesquinerie." },
            { word: "pingrerie", score: 95, feedback: "'Pingrerie' est la ladrerie, l'avarice sordide." },
            { word: "chicane", score: 100, feedback: "Parfait ! 'Chicane' (vieilli) désigne une économie sordide et chicanière sur les plus petits détails." }
        ],
        bestAnswer: "chicane",
        explanation: "La 'lésine' comme 'chicane' est une économie mesquine et tatillonne, qui discute et marchande sur les moindres dépenses."
    },
    {
        id: "fr-215",
        sentence: "La truculence de ses récits captivait son auditoire.",
        targetWord: "truculence",
        targetWordIndex: 4,
        options: [
            { word: "verve", score: 90, feedback: "'Verve' est l'enthousiasme, l'inspiration dans le discours." },
            { word: "exubérance", score: 95, feedback: "'Exubérance' est la surabondance, la vitalité débordante." },
            { word: "pittoresque", score: 85, feedback: "'Pittoresque' est le caractère coloré, évocateur." },
            { word: "rabelaisien", score: 100, feedback: "Parfait ! 'Rabelaisien' (de Rabelais) désigne un style ample, jovial, grivois et plein de vie." }
        ],
        bestAnswer: "rabelaisien",
        explanation: "La 'truculence' comme style 'rabelaisien' est une verve populaire, grasse, joyeuse et exubérante, à la manière de Rabelais."
    },
    {
        id: "fr-216",
        sentence: "La mansuétude du juge surprit l'accusé, habitué à plus de sévérité.",
        targetWord: "mansuétude",
        targetWordIndex: 4,
        options: [
            { word: "clémence", score: 95, feedback: "'Clémence' est l'indulgence, la disposition à pardonner." },
            { word: "indulgence", score: 90, feedback: "'Indulgence' est la tendance à excuser les fautes." },
            { word: "magnanimité", score: 100, feedback: "Parfait ! 'Magnanimité' est la grandeur d'âme qui pousse à pardonner les offenses." },
            { word: "longanimité", score: 85, feedback: "'Longanimité' est la patience à supporter les offenses." }
        ],
        bestAnswer: "magnanimité",
        explanation: "La 'mansuétude' comme 'magnanimité' est une générosité d'âme qui pardonne par noblesse plutôt que par faiblesse."
    },
    {
        id: "fr-217",
        sentence: "La truanderie régnait en maître dans ce quartier mal famé.",
        targetWord: "truanderie",
        targetWordIndex: 4,
        options: [
            { word: "délinquance", score: 90, feedback: "'Délinquance' est la criminalité, les infractions." },
            { word: "criminalité", score: 85, feedback: "'Criminalité' est l'ensemble des crimes." },
            { word: "banditisme", score: 95, feedback: "'Banditisme' est le fait de vivre en bande criminelle." },
            { word: "apachisme", score: 100, feedback: "Parfait ! 'Apachisme' (historique) désigne la mentalité et les mœurs des Apaches, terme pour désigner les voyous parisiens du début du XXe siècle." }
        ],
        bestAnswer: "apachisme",
        explanation: "La 'truanderie' comme 'apachisme' est une culture criminelle structurée, avec ses codes, son langage et sa hiérarchie propres."
    },
    {
        id: "fr-218",
        sentence: "La félonie de son ancien ami lui causa une peine immense.",
        targetWord: "félonie",
        targetWordIndex: 4,
        options: [
            { word: "trahison", score: 90, feedback: "'Trahison' est l'action de trahir." },
            { word: "perfidie", score: 95, feedback: "'Perfidie' est la déloyauté, la méchanceté sournoise." },
            { word: "forfaiture", score: 100, feedback: "Parfait ! 'Forfaiture' (juridique) est la violation grave d'un devoir, particulièrement par un homme public." },
            { word: "déloyauté", score: 85, feedback: "'Déloyauté' est le manque de loyauté." }
        ],
        bestAnswer: "forfaiture",
        explanation: "La 'félonie' comme 'forfaiture' est une trahison qui constitue une faute grave contre l'honneur ou le devoir, particulièrement odieuse."
    },
    {
        id: "fr-219",
        sentence: "La sibyllinité de ses propos laissait planer un doute sur leurs véritables intentions.",
        targetWord: "sibyllinité",
        targetWordIndex: 4,
        options: [
            { word: "obscurité", score: 85, feedback: "'Obscurité' est le manque de clarté." },
            { word: "ambiguïté", score: 90, feedback: "'Ambiguïté' est le double sens, l'incertitude." },
            { word: "énigme", score: 95, feedback: "'Énigme' est une chose difficile à comprendre." },
            { word: "oracularité", score: 100, feedback: "Parfait ! 'Oracularité' (rare) est le caractère obscur et mystérieux des oracles, laissant place à l'interprétation." }
        ],
        bestAnswer: "oracularité",
        explanation: "La 'sibyllinité' comme 'oracularité' est le caractère délibérément obscur et énigmatique d'un discours, à la manière des oracles antiques."
    },
    {
        id: "fr-220",
        sentence: "La salubrité des conditions de vie était garantie par des inspections régulières.",
        targetWord: "salubrité",
        targetWordIndex: 4,
        options: [
            { word: "hygiène", score: 90, feedback: "'Hygiène' est l'ensemble des pratiques visant à préserver la santé." },
            { word: "propreté", score: 85, feedback: "'Propreté' est l'état de ce qui est propre." },
            { word: "salubrité", score: 0, feedback: "C'est le mot à remplacer." },
            { word: "asepsie", score: 95, feedback: "'Asepsie' (médical) est l'absence de germes pathogènes." },
            { word: "eugénisme", score: 100, feedback: "Parfait ! 'Eugénisme' (biologie) serait ici utilisé de manière métaphorique pour désigner des conditions favorables à une vie saine." }
        ],
        bestAnswer: "eugénisme",
        explanation: "La 'salubrité' comme 'eugénisme' environnemental est l'ensemble des conditions qui favorisent le développement sain et optimal des habitants."
    },
    {
        id: "fr-221",
        sentence: "La sagacité du détective lui permit de résoudre l'affaire en un temps record.",
        targetWord: "sagacité",
        targetWordIndex: 4,
        options: [
            { word: "perspicacité", score: 95, feedback: "'Perspicacité' est la pénétration d'esprit, la finesse de jugement." },
            { word: "acuité", score: 90, feedback: "'Acuité' est la finesse, la pénétration." },
            { word: "clairvoyance", score: 85, feedback: "'Clairvoyance' est la capacité à voir clairement." },
            { word: "méticulosité", score: 100, feedback: "Parfait ! 'Méticulosité' est le souci extrême du détail, l'attention scrupuleuse aux indices." }
        ],
        bestAnswer: "méticulosité",
        explanation: "La 'sagacité' comme 'méticulosité' est la capacité à observer et analyser les moindres détails avec une attention infaillible."
    },
    {
        id: "fr-222",
        sentence: "La superfluité de ses arguments affaiblissait sa démonstration.",
        targetWord: "superfluité",
        targetWordIndex: 4,
        options: [
            { word: "redondance", score: 95, feedback: "'Redondance' est la répétition inutile." },
            { word: "profusion", score: 85, feedback: "'Profusion' est l'abondance excessive." },
            { word: "prolixité", score: 90, feedback: "'Prolixité' est la longueur excessive." },
            { word: "parasitage", score: 100, feedback: "Parfait ! 'Parasitage' (informatique) désigne des éléments qui perturbent sans contribuer, par analogie." }
        ],
        bestAnswer: "parasitage",
        explanation: "La 'superfluité' comme 'parasitage' argumentatif est la présence d'éléments qui encombrent le raisonnement sans y contribuer utilement."
    },
    {
        id: "fr-223",
        sentence: "La véhémence de sa réplique coupa court à toute discussion.",
        targetWord: "véhémence",
        targetWordIndex: 4,
        options: [
            { word: "violence", score: 90, feedback: "'Violence' est la force brutale." },
            { word: "ardeur", score: 85, feedback: "'Ardeur' est la fougue, la passion." },
            { word: "emportement", score: 95, feedback: "'Emportement' est l'agitation passionnée." },
            { word: "fulgurance", score: 100, feedback: "Parfait ! 'Fulgurance' est la rapidité foudroyante, l'intensité soudaine." }
        ],
        bestAnswer: "fulgurance",
        explanation: "La 'véhémence' comme 'fulgurance' est une réaction d'une intensité et d'une rapidité foudroyantes, laissant l'interlocuteur sans voix."
    },
    {
        id: "fr-224",
        sentence: "La témérité de l'explorateur le conduisit à découvrir des terres inconnues.",
        targetWord: "témérité",
        targetWordIndex: 4,
        options: [
            { word: "audace", score: 90, feedback: "'Audace' est la hardiesse, le courage." },
            { word: "intrépidité", score: 95, feedback: "'Intrépidité' est l'absence de peur." },
            { word: "hardiesse", score: 85, feedback: "'Hardiesse' est la bravoure, l'absence de crainte." },
            { word: "palingénésie", score: 100, feedback: "Parfait ! 'Palingénésie' (philosophie) serait ici métaphore d'une audace créatrice, capable de faire renaître le monde." }
        ],
        bestAnswer: "palingénésie",
        explanation: "La 'témérité' comme 'palingénésie' exploratoire est une audace qui vise à faire renaître la connaissance par la découverte de nouveaux mondes."
    },
    {
        id: "fr-225",
        sentence: "La vacillation de la flamme créait des ombres mouvantes sur les murs.",
        targetWord: "vacillation",
        targetWordIndex: 4,
        options: [
            { word: "tremblement", score: 85, feedback: "'Tremblement' est le mouvement d'oscillation rapide." },
            { word: "oscillation", score: 90, feedback: "'Oscillation' est le balancement, le va-et-vient." },
            { word: "palpitation", score: 95, feedback: "'Palpitation' est le battement rapide, comme un cœur." },
            { word: "clignotement", score: 100, feedback: "Parfait ! 'Clignotement' est l'action de s'allumer et de s'éteindre rapidement." }
        ],
        bestAnswer: "clignotement",
        explanation: "La 'vacillation' comme 'clignotement' est une fluctuation intermittente de la lumière, créant un effet visuel instable et mystérieux."
    },
    {
        id: "fr-226",
        sentence: "La vélocité du coureur lui permit de remporter la course facilement.",
        targetWord: "vélocité",
        targetWordIndex: 4,
        options: [
            { word: "rapidité", score: 85, feedback: "'Rapidité' est la qualité de ce qui est rapide." },
            { word: "vitesse", score: 90, feedback: "'Vitesse' est la rapidité du mouvement." },
            { word: "célérité", score: 95, feedback: "'Célérité' est la rapidité, la promptitude." },
            { word: "tachyon", score: 100, feedback: "Parfait ! 'Tachyon' (physique) serait une particule hypothétique plus rapide que la lumière, métaphore d'une vitesse extrême." }
        ],
        bestAnswer: "tachyon",
        explanation: "La 'vélocité' comme 'tachyon' est une vitesse qui semble défier les limites physiques habituelles, presque surnaturelle."
    },
    {
        id: "fr-227",
        sentence: "La vénalité de certains fonctionnaires compromettait l'intégrité de l'institution.",
        targetWord: "vénalité",
        targetWordIndex: 4,
        options: [
            { word: "corruption", score: 95, feedback: "'Corruption' est l'action de corrompre, de se laisser acheter." },
            { word: "cupidité", score: 90, feedback: "'Cupidité' est l'avarice, le désir excessif de richesses." },
            { word: "concussion", score: 100, feedback: "Parfait ! 'Concussion' (juridique) est le détournement de fonds publics ou la corruption d'un fonctionnaire." },
            { word: "trafic", score: 85, feedback: "'Trafic d'influence' est le commerce d'influence." }
        ],
        bestAnswer: "concussion",
        explanation: "La 'vénalité' comme 'concussion' est la corruption active d'un fonctionnaire qui trafique son pouvoir contre de l'argent."
    },
    {
        id: "fr-228",
        sentence: "La véracité de la rumeur fut confirmée par des sources fiables.",
        targetWord: "véracité",
        targetWordIndex: 4,
        options: [
            { word: "authenticité", score: 90, feedback: "'Authenticité' est la qualité de ce qui est authentique." },
            { word: "exactitude", score: 85, feedback: "'Exactitude' est la conformité à la vérité." },
            { word: "fidélité", score: 95, feedback: "'Fidélité' est la conformité à l'original." },
            { word: "epistémè", score: 100, feedback: "Parfait ! 'Epistémè' (philosophie) est la connaissance vraie, scientifiquement établie." }
        ],
        bestAnswer: "epistémè",
        explanation: "La 'véracité' comme 'epistémè' est le statut de vérité d'une information qui a été éprouvée et validée selon des critères rigoureux."
    },
    {
        id: "fr-229",
        sentence: "La versatilité de son humeur le rendait imprévisible.",
        targetWord: "versatilité",
        targetWordIndex: 4,
        options: [
            { word: "instabilité", score: 90, feedback: "'Instabilité' est le manque de stabilité." },
            { word: "inconstance", score: 95, feedback: "'Inconstance' est le changement fréquent d'opinion ou de sentiment." },
            { word: "caprice", score: 85, feedback: "'Caprice' est un désir subit et changeant." },
            { word: "polymorphie", score: 100, feedback: "Parfait ! 'Polymorphie' (biologie) est la capacité à prendre plusieurs formes, ici psychologique." }
        ],
        bestAnswer: "polymorphie",
        explanation: "La 'versatilité' comme 'polymorphie' affective est la capacité à changer rapidement d'état émotionnel, adoptant des 'formes' psychiques différentes."
    },
    {
        id: "fr-230",
        sentence: "La véstusté du bâtiment nécessitait des travaux de rénovation importants.",
        targetWord: "véstusté",
        targetWordIndex: 4,
        options: [
            { word: "vétusté", score: 0, feedback: "Variante orthographique du mot à remplacer." },
            { word: "ancienneté", score: 85, feedback: "'Ancienneté' est le grand âge." },
            { word: "délabrement", score: 95, feedback: "'Délabrement' est l'état de ce qui est en ruine." },
            { word: "caducité", score: 100, feedback: "Parfait ! 'Caducité' (juridique) est l'état de ce qui est périmé, tombé en désuétude." },
            { word: "sénescence", score: 90, feedback: "'Sénescence' (biologie) est le vieillissement, la dégénérescence due à l'âge." }
        ],
        bestAnswer: "caducité",
        explanation: "La 'véstusté' comme 'caducité' est l'état d'un bâtiment qui a non seulement vieilli, mais dont la structure ou la fonction est devenue obsolète."
    },
    {
        id: "fr-231",
        sentence: "La vétille à laquelle il s'accrochait montrait son manque de vision d'ensemble.",
        targetWord: "vétille",
        targetWordIndex: 4,
        options: [
            { word: "détail", score: 85, feedback: "'Détail' est un élément secondaire." },
            { word: "bagatelle", score: 90, feedback: "'Bagatelle' est une chose sans importance." },
            { word: "futilité", score: 95, feedback: "'Futilité' est le manque de sérieux, la frivolité." },
            { word: "chinoiserie", score: 100, feedback: "Parfait ! 'Chinoiserie' (figuré) est une complication inutile et pointilleuse, souvent bureaucratique." }
        ],
        bestAnswer: "chinoiserie",
        explanation: "Une 'vétille' comme 'chinoiserie' est un détail procédurier ou formel excessivement complexe et dénué d'importance réelle."
    },
    {
        id: "fr-232",
        sentence: "La viabilité du projet fut remise en question après l'étude de marché.",
        targetWord: "viabilité",
        targetWordIndex: 4,
        options: [
            { word: "faisabilité", score: 95, feedback: "'Faisabilité' est la possibilité de réalisation." },
            { word: "réalisme", score: 90, feedback: "'Réalisme' est le caractère réaliste, praticable." },
            { word: "practicabilité", score: 85, feedback: "'Practicabilité' est la possibilité de mettre en pratique." },
            { word: "autopoïèse", score: 100, feedback: "Parfait ! 'Autopoïèse' (biologie/systémique) est la capacité d'un système à se maintenir et se reproduire lui-même." }
        ],
        bestAnswer: "autopoïèse",
        explanation: "La 'viabilité' comme 'autopoïèse' est la capacité d'un projet à générer ses propres conditions de pérennité et de développement."
    },
    {
        id: "fr-233",
        sentence: "La vicariance des fonctions cérébrales permet parfois une récupération après lésion.",
        targetWord: "vicariance",
        targetWordIndex: 4,
        options: [
            { word: "compensation", score: 90, feedback: "'Compensation' est l'action de compenser, de contrebalancer." },
            { word: "substitution", score: 95, feedback: "'Substitution' est le remplacement d'une chose par une autre." },
            { word: "suppléance", score: 85, feedback: "'Suppléance' est l'action de suppléer, de remplacer temporairement." },
            { word: "neuroplasticité", score: 100, feedback: "Parfait ! 'Neuroplasticité' (neurosciences) est la capacité du cerveau à se réorganiser en créant de nouvelles connexions." }
        ],
        bestAnswer: "neuroplasticité",
        explanation: "La 'vicariance' comme 'neuroplasticité' est la capacité d'adaptation du système nerveux qui permet à une zone de prendre en charge des fonctions normalement dévolues à une autre."
    },
    {
        id: "fr-234",
        sentence: "La vicissitude des saisons rythmait la vie des anciennes sociétés agraires.",
        targetWord: "vicissitude",
        targetWordIndex: 4,
        options: [
            { word: "alternance", score: 90, feedback: "'Alternance' est la succession régulière." },
            { word: "variation", score: 85, feedback: "'Variation' est le changement, la modification." },
            { word: "mutation", score: 95, feedback: "'Mutation' est la transformation, le changement profond." },
            { word: "métamorphose", score: 100, feedback: "Parfait ! 'Métamorphose' est la transformation complète, souvent cyclique comme les saisons." }
        ],
        bestAnswer: "métamorphose",
        explanation: "Les 'vicissitudes' comme 'métamorphoses' saisonnières sont des transformations naturelles et cycliques qui structurent le temps et les activités humaines."
    },
    {
        id: "fr-235",
        sentence: "La vilité de son comportement le fit exclure de la communauté.",
        targetWord: "vilité",
        targetWordIndex: 4,
        options: [
            { word: "bassesse", score: 95, feedback: "'Bassesse' est la lâcheté, le manque de noblesse." },
            { word: "méchanceté", score: 90, feedback: "'Méchanceté' est la disposition à faire le mal." },
            { word: "ignominie", score: 100, feedback: "Parfait ! 'Ignominie' est le déshonneur public, la honte qui en résulte." },
            { word: "turpitude", score: 85, feedback: "'Turpitude' est la dépravation morale." }
        ],
        bestAnswer: "ignominie",
        explanation: "La 'vilité' comme 'ignominie' est une bassesse morale si profonde qu'elle entraîne le mépris public et l'exclusion sociale."
    },
    {
        id: "fr-236",
        sentence: "La vinosité de ce vin rouge rappelait les grands crus de Bourgogne.",
        targetWord: "vinosité",
        targetWordIndex: 4,
        options: [
            { word: "corps", score: 90, feedback: "'Corps' est la consistance, la structure en bouche." },
            { word: "charpente", score: 85, feedback: "'Charpente' est la structure, l'ossature du vin." },
            { word: "puissance", score: 95, feedback: "'Puissance' est la force, l'intensité." },
            { word: "gras", score: 100, feedback: "Parfait ! 'Gras' (œnologie) désigne la sensation de rondeur et de moelleux en bouche, liée à une certaine viscosité." }
        ],
        bestAnswer: "gras",
        explanation: "La 'vinosité' comme 'gras' est la sensation en bouche d'un vin riche, charnu, avec une texture presque huileuse qui enveloppe le palais."
    },
    {
        id: "fr-237",
        sentence: "La virtuosité du pianiste éblouit le public tout entier.",
        targetWord: "virtuosité",
        targetWordIndex: 4,
        options: [
            { word: "maîtrise", score: 90, feedback: "'Maîtrise' est la parfaite connaissance, la domination." },
            { word: "technicité", score: 95, feedback: "'Technicité' est la compétence technique." },
            { word: "brillant", score: 85, feedback: "'Brillant' est l'éclat, la splendeur." },
            { word: "thaumaturgie", score: 100, feedback: "Parfait ! 'Thaumaturgie' (religion) est l'art de faire des miracles, transposé ici à la performance artistique." }
        ],
        bestAnswer: "thaumaturgie",
        explanation: "La 'virtuosité' comme 'thaumaturgie' musicale est une maîtrise si parfaite qu'elle semble relever du miracle, défiant les limites humaines."
    },
    {
        id: "fr-238",
        sentence: "La virulence de l'épidémie nécessita des mesures sanitaires exceptionnelles.",
        targetWord: "virulence",
        targetWordIndex: 4,
        options: [
            { word: "agressivité", score: 90, feedback: "'Agressivité' est la tendance à attaquer." },
            { word: "nocivité", score: 85, feedback: "'Nocivité' est le caractère nuisible." },
            { word: "pathogénicité", score: 95, feedback: "'Pathogénicité' (médical) est la capacité à provoquer une maladie." },
            { word: "contagiosité", score: 100, feedback: "Parfait ! 'Contagiosité' est la facilité avec laquelle une maladie se transmet." }
        ],
        bestAnswer: "contagiosité",
        explanation: "La 'virulence' comme 'contagiosité' est la combinaison de la sévérité de la maladie et de sa capacité à se propager rapidement."
    },
    {
        id: "fr-239",
        sentence: "La viscéralité de sa réaction montrait à quel point il était touché.",
        targetWord: "viscéralité",
        targetWordIndex: 4,
        options: [
            { word: "intensité", score: 85, feedback: "'Intensité' est la force, la puissance." },
            { word: "profondeur", score: 90, feedback: "'Profondeur' est le caractère profond, intime." },
            { word: "primitivité", score: 95, feedback: "'Primitivité' est le caractère primaire, élémentaire." },
            { word: "entrailles", score: 100, feedback: "Parfait ! 'Entrailles' (figuré) désigne une réaction qui vient des profondeurs de l'être, des tripes." }
        ],
        bestAnswer: "entrailles",
        explanation: "La 'viscéralité' comme réaction des 'entrailles' est une réponse émotionnelle primitive, instinctive, qui semble provenir des organes vitaux."
    },
    {
        id: "fr-240",
        sentence: "La viscosité du liquide rendait son écoulement très lent.",
        targetWord: "viscosité",
        targetWordIndex: 4,
        options: [
            { word: "épaisseur", score: 90, feedback: "'Épaisseur' est la consistance dense." },
            { word: "consistance", score: 85, feedback: "'Consistance' est la texture, la fermeté." },
            { word: "glutinosité", score: 95, feedback: "'Glutinosité' est la qualité de ce qui est gluant, visqueux." },
            { word: "rhéologie", score: 100, feedback: "Parfait ! 'Rhéologie' (physique) est l'étude de la déformation et de l'écoulement de la matière, ici la propriété même." }
        ],
        bestAnswer: "rhéologie",
        explanation: "La 'viscosité' comme propriété 'rhéologique' est la mesure de la résistance d'un fluide à l'écoulement, son internal friction."
    },
    {
        id: "fr-241",
        sentence: "La visibilité réduite par le brouillard obligea les automobilistes à ralentir.",
        targetWord: "visibilité",
        targetWordIndex: 4,
        options: [
            { word: "clarté", score: 85, feedback: "'Clarté' est la qualité de ce qui est clair, lumineux." },
            { word: "transparence", score: 90, feedback: "'Transparence' est la qualité de ce qui est transparent." },
            { word: "luminosité", score: 95, feedback: "'Luminosité' est l'éclat, la quantité de lumière." },
            { word: "diaphanéité", score: 100, feedback: "Parfait ! 'Diaphanéité' est la qualité de ce qui est diaphane, qui laisse passer la lumière." }
        ],
        bestAnswer: "diaphanéité",
        explanation: "La 'visibilité' comme 'diaphanéité' atmosphérique est la qualité de l'air à laisser passer la lumière et permettre la vision à distance."
    },
    {
        id: "fr-242",
        sentence: "La vivacité d'esprit de la centenaire étonnait son entourage.",
        targetWord: "vivacité",
        targetWordIndex: 4,
        options: [
            { word: "rapidité", score: 90, feedback: "'Rapidité' est la vitesse de réaction." },
            { word: "acuité", score: 95, feedback: "'Acuité' est la finesse, la pénétration." },
            { word: "pétillance", score: 85, feedback: "'Pétillance' est l'éclat, la gaité." },
            { word: "juvenescence", score: 100, feedback: "Parfait ! 'Juvenescence' est le rajeunissement, le maintien de qualités juvéniles avec l'âge." }
        ],
        bestAnswer: "juvenescence",
        explanation: "La 'vivacité' comme 'juvenescence' intellectuelle est la conservation remarquable des facultés mentales et de la curiosité propres à la jeunesse."
    },
    {
        id: "fr-243",
        sentence: "La vocifération de la foule en colère couvrait la voix du speaker.",
        targetWord: "vocifération",
        targetWordIndex: 4,
        options: [
            { word: "cris", score: 85, feedback: "'Cris' sont des sons aigus et forts." },
            { word: "hurlements", score: 90, feedback: "'Hurlements' sont des cris prolongés et perçants." },
            { word: "clameur", score: 95, feedback: "'Clameur' est un bruit confus de voix nombreuses." },
            { word: "stridence", score: 100, feedback: "Parfait ! 'Stridence' est un son aigu et perçant, désagréable à l'oreille." }
        ],
        bestAnswer: "stridence",
        explanation: "Les 'vociférations' comme 'stridence' collective sont un bruit de foule particulièrement aigu et agressif, qui blesse l'oreille."
    },
    {
        id: "fr-244",
        sentence: "La volatilité des prix sur ce marché décourageait les investisseurs.",
        targetWord: "volatilité",
        targetWordIndex: 4,
        options: [
            { word: "instabilité", score: 95, feedback: "'Instabilité' est le manque de stabilité, les variations fréquentes." },
            { word: "fluctuation", score: 90, feedback: "'Fluctuation' est la variation, l'oscillation." },
            { word: "incertitude", score: 85, feedback: "'Incertitude' est le manque de certitude, de prévisibilité." },
            { word: "aleatorité", score: 100, feedback: "Parfait ! 'Aleatorité' (mathématiques) est le caractère aléatoire, imprévisible." }
        ],
        bestAnswer: "aleatorité",
        explanation: "La 'volatilité' comme 'aleatorité' des prix est leur variation imprévisible et apparemment aléatoire, rendant les prévisions impossibles."
    },
    {
        id: "fr-245",
        sentence: "La volupté avec laquelle il dégustait le miel était presque sensuelle.",
        targetWord: "volupté",
        targetWordIndex: 4,
        options: [
            { word: "plaisir", score: 85, feedback: "'Plaisir' est la satisfaction agréable." },
            { word: "jouissance", score: 95, feedback: "'Jouissance' est le plaisir intense, souvent charnel." },
            { word: "délectation", score: 90, feedback: "'Délectation' est le plaisir raffiné, savouré." },
            { word: "hédoné", score: 100, feedback: "Parfait ! 'Hédoné' (philosophie grecque) est le plaisir comme principe de vie, recherche du plaisir sensuel." }
        ],
        bestAnswer: "hédoné",
        explanation: "La 'volupté' comme 'hédoné' est la recherche et la savouration consciente du plaisir des sens, érigée en art de vivre."
    },
    {
        id: "fr-246",
        sentence: "La voracité du feu dévora la forêt en quelques heures.",
        targetWord: "voracité",
        targetWordIndex: 4,
        options: [
            { word: "avidité", score: 90, feedback: "'Avidité' est le désir ardent." },
            { word: "rapacité", score: 95, feedback: "'Rapacité' est la cupidité, l'avidité à dévorer." },
            { word: "insatiabilité", score: 85, feedback: "'Insatiabilité' est l'impossibilité d'être rassasié." },
            { word: "pyromanie", score: 100, feedback: "Parfait ! 'Pyromanie' (psychiatrie) serait ici l'aspect compulsif et dévorant du feu, comme s'il avait une volonté propre." }
        ],
        bestAnswer: "pyromanie",
        explanation: "La 'voracité' comme 'pyromanie' attribue au feu une volonté destructrice et insatiable, comme s'il était animé d'une pulsion morbide."
    },
    {
        id: "fr-247",
        sentence: "La vulnérabilité du nouveau-né nécessitait une protection constante.",
        targetWord: "vulnérabilité",
        targetWordIndex: 4,
        options: [
            { word: "fragilité", score: 90, feedback: "'Fragilité' est la qualité de ce qui est fragile, délicat." },
            { word: "faiblesse", score: 85, feedback: "'Faiblesse' est le manque de force." },
            { word: "délicatesse", score: 95, feedback: "'Délicatesse' est la finesse, la sensibilité." },
            { word: "néoténie", score: 100, feedback: "Parfait ! 'Néoténie' (biologie) est la persistance de caractéristiques infantiles, ici l'état de dépendance totale." }
        ],
        bestAnswer: "néoténie",
        explanation: "La 'vulnérabilité' comme 'néoténie' humaine est la longue période de dépendance et d'immaturité du nouveau-né, nécessitant des soins prolongés."
    },
    {
        id: "fr-248",
        sentence: "La xénophilie de cette société l'ouvrait aux influences étrangères.",
        targetWord: "xénophilie",
        targetWordIndex: 4,
        options: [
            { word: "ouverture", score: 85, feedback: "'Ouverture' est la disposition à accueillir." },
            { word: "cosmopolitisme", score: 95, feedback: "'Cosmopolitisme' est l'attachement à plusieurs cultures, la citoyenneté du monde." },
            { word: "philoxénie", score: 100, feedback: "Parfait ! 'Philoxénie' (grec) est l'hospitalité envers les étrangers, vertu antique." },
            { word: "multiculturalisme", score: 90, feedback: "'Multiculturalisme' est la coexistence de plusieurs cultures." }
        ],
        bestAnswer: "philoxénie",
        explanation: "La 'xénophilie' comme 'philoxénie' est une vertu active d'hospitalité et d'accueil des étrangers, considérée comme un devoir sacré dans l'Antiquité."
    },
    {
        id: "fr-249",
        sentence: "La xérophilie de cette plante lui permettait de survivre en milieu aride.",
        targetWord: "xérophilie",
        targetWordIndex: 4,
        options: [
            { word: "résistance", score: 85, feedback: "'Résistance' est la capacité à résister." },
            { word: "adaptation", score: 90, feedback: "'Adaptation' est l'ajustement aux conditions." },
            { word: "aridophilie", score: 95, feedback: "'Aridophilie' est l'amour des milieux arides." },
            { word: "sclérophyllie", score: 100, feedback: "Parfait ! 'Sclérophyllie' (botanique) est l'adaptation des plantes aux milieux secs par des feuilles coriaces." }
        ],
        bestAnswer: "sclérophyllie",
        explanation: "La 'xérophilie' comme 'sclérophyllie' est une adaptation morphologique spécifique des plantes pour réduire la perte d'eau en milieu sec."
    },
    {
        id: "fr-250",
        sentence: "La zénitude affichée par le maître face à la crise impressionna ses disciples.",
        targetWord: "zénitude",
        targetWordIndex: 4,
        options: [
            { word: "sérénité", score: 90, feedback: "'Sérénité' est la paix de l'âme, le calme." },
            { word: "impassibilité", score: 95, feedback: "'Impassibilité' est l'absence d'émotion apparente." },
            { word: "ataraxie", score: 100, feedback: "Parfait ! 'Ataraxie' (philosophie stoïcienne) est l'absence de troubles de l'âme, la paix intérieure parfaite." },
            { word: "flegme", score: 85, feedback: "'Flegme' est le calme, la froideur d'humeur." }
        ],
        bestAnswer: "ataraxie",
        explanation: "La 'zénitude' comme 'ataraxie' est un état de tranquillité absolue de l'âme, imperméable aux agitations extérieures, idéal philosophique antique."
    },
    {
        id: "fr-251",
        sentence: "L'âpreté du débat politique révélait des clivages profonds dans la société.",
        targetWord: "âpreté",
        targetWordIndex: 4,
        options: [
            { word: "rudesse", score: 90, feedback: "'Rudesse' évoque la dureté, mais sans la dimension de conflit intense." },
            { word: "acrimonie", score: 95, feedback: "'Acrimonie' implique une amertume et une agressivité dans les échanges." },
            { word: "violence", score: 85, feedback: "'Violence' est plus générale et peut être physique ou verbale." },
            { word: "causticité", score: 100, feedback: "Parfait ! 'Causticité' décrit un langage brûlant, mordant, qui corrode et blesse." }
        ],
        bestAnswer: "causticité",
        explanation: "L''âpreté' d'un débat comme 'causticité' est une agressivité verbale qui brûle comme un acide, révélant des antagonismes profonds."
    },
    {
        id: "fr-252",
        sentence: "La crudité de ses propos choqua l'assistance par son manque de retenue.",
        targetWord: "crudité",
        targetWordIndex: 4,
        options: [
            { word: "grossièreté", score: 90, feedback: "'Grossièreté' est un manque de délicatesse, mais moins spécifique." },
            { word: "obscénité", score: 95, feedback: "'Obscénité' est un caractère choquant par allusion sexuelle." },
            { word: "scatologie", score: 100, feedback: "Parfait ! 'Scatologie' est un goût pour les sujets bas et excrémentiels, poussant la vulgarité à l'extrême." },
            { word: "rusticité", score: 85, feedback: "'Rusticité' est un manque de raffinement, mais pas nécessairement choquant." }
        ],
        bestAnswer: "scatologie",
        explanation: "La 'crudité' comme 'scatologie' est une vulgarité qui franchit délibérément les tabous, choquant par son absence totale de pudeur."
    },
    {
        id: "fr-253",
        sentence: "La désinvolture avec laquelle il traitait ses obligations finit par agacer.",
        targetWord: "désinvolture",
        targetWordIndex: 4,
        options: [
            { word: "négligence", score: 90, feedback: "'Négligence' est un manque de soin, d'attention." },
            { word: "insouciance", score: 95, feedback: "'Insouciance' est une absence de souci, souvent légère." },
            { word: "décontraction", score: 85, feedback: "'Décontraction' est un relâchement, une absence de tension." },
            { word: "cavalierie", score: 100, feedback: "Parfait ! 'Cavalierie' (au sens figuré) est une attitude hautaine et méprisante envers les convenances." }
        ],
        bestAnswer: "cavalierie",
        explanation: "La 'désinvolture' comme 'cavalierie' est un mépris affiché pour les règles et obligations, avec une arrogance de supériorité."
    },
    {
        id: "fr-254",
        sentence: "L'effronterie du jeune homme face à l'autorité lui valut une sévère réprimande.",
        targetWord: "effronterie",
        targetWordIndex: 4,
        options: [
            { word: "audace", score: 85, feedback: "'Audace' peut être positive, courageuse." },
            { word: "insolence", score: 95, feedback: "'Insolence' est un manque de respect provocateur." },
            { word: "témérité", score: 90, feedback: "'Témérité' est une hardiesse imprudente." },
            { word: "cynisme", score: 100, feedback: "Parfait ! 'Cynisme' est un mépris affiché des conventions et de l'autorité, avec provocation." }
        ],
        bestAnswer: "cynisme",
        explanation: "L''effronterie' comme 'cynisme' est une attitude qui défie délibérément l'autorité en affichant un mépris total pour ses prérogatives."
    },
    {
        id: "fr-255",
        sentence: "L'emphase de son discours le rendait parfois difficile à suivre.",
        targetWord: "emphase",
        targetWordIndex: 4,
        options: [
            { word: "grandiloquence", score: 95, feedback: "'Grandiloquence' est un style pompeux et ampoulé." },
            { word: "exagération", score: 90, feedback: "'Exagération' est une amplification excessive." },
            { word: "rhétorique", score: 85, feedback: "'Rhétorique' est l'art de bien parler, neutre." },
            { word: "baroquisme", score: 100, feedback: "Parfait ! 'Baroquisme' est un style excessif, chargé d'ornements, comme l'art baroque." }
        ],
        bestAnswer: "baroquisme",
        explanation: "L''emphase' comme 'baroquisme' oratoire est un enrichissement excessif du discours, où la forme étouffe le fond."
    },
    {
        id: "fr-256",
        sentence: "L'épaisseur du brouillard rendait la navigation périlleuse.",
        targetWord: "épaisseur",
        targetWordIndex: 4,
        options: [
            { word: "densité", score: 95, feedback: "'Densité' est la masse par unité de volume, très proche." },
            { word: "opacité", score: 90, feedback: "'Opacité' est l'impermeabilité à la lumière." },
            { word: "consistance", score: 85, feedback: "'Consistance' est la texture, la fermeté." },
            { word: "impénétrabilité", score: 100, feedback: "Parfait ! 'Impénétrabilité' est la qualité de ce qui ne peut être traversé, absolument dense." }
        ],
        bestAnswer: "impénétrabilité",
        explanation: "L''épaisseur' comme 'impénétrabilité' décrit un brouillard si dense qu'il forme un écran total, interdisant toute visibilité."
    },
    {
        id: "fr-257",
        sentence: "L'étanchéité de la nouvelle membrane était garantie contre toutes les infiltrations.",
        targetWord: "étanchéité",
        targetWordIndex: 4,
        options: [
            { word: "imperméabilité", score: 95, feedback: "'Imperméabilité' est la qualité de ne pas laisser passer les liquides." },
            { word: "herméticité", score: 100, feedback: "Parfait ! 'Herméticité' est une étanchéité parfaite, absolue, comme un récipient scellé." },
            { word: "résistance", score: 85, feedback: "'Résistance' est la capacité à résister à une force." },
            { word: "inviolabilité", score: 90, feedback: "'Inviolabilité' est le caractère de ce qui ne peut être violé, pénétré." }
        ],
        bestAnswer: "herméticité",
        explanation: "L''étanchéité' comme 'herméticité' est une fermeture si parfaite qu'aucune molécule, même gazeuse, ne peut la traverser."
    },
    {
        id: "fr-258",
        sentence: "La frugalité de son régime alimentaire surprenait dans un monde d'abondance.",
        targetWord: "frugalité",
        targetWordIndex: 4,
        options: [
            { word: "sobriété", score: 90, feedback: "'Sobriété' est la modération, la retenue." },
            { word: "austérité", score: 95, feedback: "'Austérité' est une sévérité, une rigueur volontaire." },
            { word: "ascétisme", score: 100, feedback: "Parfait ! 'Ascétisme' est une discipline de vie qui recherche la privation pour des raisons spirituelles ou morales." },
            { word: "parcimonie", score: 85, feedback: "'Parcimonie' est une économie excessive, souvent mesquine." }
        ],
        bestAnswer: "ascétisme",
        explanation: "La 'frugalité' comme 'ascétisme' alimentaire est une pratique volontaire de simplicité extrême, visant à maîtriser les désirs corporels."
    },
    {
        id: "fr-259",
        sentence: "La gaucherie de ses premières tentatives fit place à une habileté croissante.",
        targetWord: "gaucherie",
        targetWordIndex: 4,
        options: [
            { word: "maladresse", score: 95, feedback: "'Maladresse' est un manque d'adresse, d'habileté." },
            { word: "inexpérience", score: 90, feedback: "'Inexpérience' est le manque d'expérience." },
            { word: "balbutiement", score: 85, feedback: "'Balbutiement' est un début hésitant, comme dans le langage." },
            { word: "apraxie", score: 100, feedback: "Parfait ! 'Apraxie' (neurologie) est la difficulté à exécuter des mouvements coordonnés, transposée ici à l'apprentissage." }
        ],
        bestAnswer: "apraxie",
        explanation: "La 'gaucherie' comme 'apraxie' débutante est une difficulté initiale à coordonner ses gestes, due à l'absence d'automatismes."
    },
    {
        id: "fr-260",
        sentence: "L'hilarité que provoquait le clown contrastait avec la gravité de la situation.",
        targetWord: "hilarité",
        targetWordIndex: 4,
        options: [
            { word: "gaieté", score: 85, feedback: "'Gaieté' est un état de joie, d'entrain." },
            { word: "humeur", score: 80, feedback: "'Bonne humeur' est une disposition joyeuse." },
            { word: "hilarité", score: 0, feedback: "C'est le mot à remplacer." },
            { word: "fou rire", score: 90, feedback: "'Fou rire' est un rire incontrôlable." },
            { word: "catharsis", score: 100, feedback: "Parfait ! 'Catharsis' (Aristote) est la purgation des émotions par le rire ou la pitié, libératrice." }
        ],
        bestAnswer: "catharsis",
        explanation: "L''hilarité' comme 'catharsis' est un rire libérateur qui purge les tensions, permettant de supporter une réalité trop grave."
    },
    {
        id: "fr-261",
        sentence: "L'immensité de la tâche à accomplir les découragea un instant.",
        targetWord: "immensité",
        targetWordIndex: 4,
        options: [
            { word: "ampleur", score: 90, feedback: "'Ampleur' est l'étendue, l'importance." },
            { word: "étendue", score: 85, feedback: "'Étendue' est la dimension, la superficie." },
            { word: "magnitude", score: 95, feedback: "'Magnitude' est la grandeur, l'importance (scientifique)." },
            { word: "titanisme", score: 100, feedback: "Parfait ! 'Titanisme' est un caractère surhumain, cyclopéen, qui semble exiger des forces divines." }
        ],
        bestAnswer: "titanisme",
        explanation: "L''immensité' comme 'titanisme' d'une tâche est une dimension qui dépasse les capacités humaines, exigeant un effort surhumain."
    },
    {
        id: "fr-262",
        sentence: "L'intangibilité des principes constitutionnels fut réaffirmée par la cour.",
        targetWord: "intangibilité",
        targetWordIndex: 4,
        options: [
            { word: "inviolabilité", score: 95, feedback: "'Inviolabilité' est le caractère de ce qui ne peut être violé." },
            { word: "inaltérabilité", score: 90, feedback: "'Inaltérabilité' est le caractère de ce qui ne peut être altéré." },
            { word: "sacralité", score: 100, feedback: "Parfait ! 'Sacralité' est le caractère sacré, intangible, qui inspire un respect religieux." },
            { word: "pérennité", score: 85, feedback: "'Pérennité' est la durée indéfinie." }
        ],
        bestAnswer: "sacralité",
        explanation: "L''intangibilité' comme 'sacralité' constitutionnelle est le caractère inviolable et sacré des principes fondamentaux, au-dessus du débat politique."
    },
    {
        id: "fr-263",
        sentence: "L'intrépidité des explorateurs face à l'inconnu force l'admiration.",
        targetWord: "intrépidité",
        targetWordIndex: 4,
        options: [
            { word: "courage", score: 85, feedback: "'Courage' est la bravoure, la force face au danger." },
            { word: "audace", score: 90, feedback: "'Audace' est la hardiesse, la prise de risque." },
            { word: "bravoure", score: 95, feedback: "'Bravoure' est la vaillance, le courage manifesté." },
            { word: "héroïsme", score: 100, feedback: "Parfait ! 'Héroïsme' est un courage exceptionnel, digne des héros, allant au-delà de la simple bravoure." }
        ],
        bestAnswer: "héroïsme",
        explanation: "L''intrépidité' comme 'héroïsme' est une bravoure qui transcende la peur, poussant à affronter l'inconnu avec une détermination surhumaine."
    },
    {
        id: "fr-264",
        sentence: "L'invariabilité des lois physiques est un postulat fondamental de la science.",
        targetWord: "invariabilité",
        targetWordIndex: 4,
        options: [
            { word: "constance", score: 90, feedback: "'Constance' est la stabilité, la régularité." },
            { word: "immutabilité", score: 95, feedback: "'Immutabilité' est le caractère de ce qui ne change pas." },
            { word: "fixité", score: 85, feedback: "'Fixité' est la qualité de ce qui est fixe, stable." },
            { word: "éternité", score: 100, feedback: "Parfait ! 'Éternité' suggère une permanence absolue, hors du temps, valable en tout lieu et à toute époque." }
        ],
        bestAnswer: "éternité",
        explanation: "L''invariabilité' comme 'éternité' des lois physiques est leur permanence absolue dans le temps et l'espace, condition de la scientificité."
    },
    {
        id: "fr-265",
        sentence: "L'irréalité du paysage créait une impression de rêve éveillé.",
        targetWord: "irréalité",
        targetWordIndex: 4,
        options: [
            { word: "étrangeté", score: 85, feedback: "'Étrangeté' est le caractère étrange, insolite." },
            { word: "surréalité", score: 100, feedback: "Parfait ! 'Surréalité' est une réalité supérieure, onirique, qui transcende le réel ordinaire." },
            { word: "fantasmagorie", score: 95, feedback: "'Fantasmagorie' est un spectacle illusoire, fait d'apparitions fantastiques." },
            { word: "chimère", score: 90, feedback: "'Chimère' est une construction imaginaire, une illusion." }
        ],
        bestAnswer: "surréalité",
        explanation: "L''irréalité' comme 'surréalité' est une qualité du réel qui semble obéir à la logique du rêve, créant un sentiment de dépaysement absolu."
    },
    {
        id: "fr-266",
        sentence: "La jactance du parvenu agaçait son entourage par son caractère ostentatoire.",
        targetWord: "jactance",
        targetWordIndex: 4,
        options: [
            { word: "vanterie", score: 90, feedback: "'Vanterie' est l'action de se vanter." },
            { word: "fanfaronnade", score: 95, feedback: "'Fanfaronnade' est une vantardise bruyante et provocante." },
            { word: "forfanterie", score: 100, feedback: "Parfait ! 'Forfanterie' est une bravoure vantarde et excessive, souvent pour cacher une insécurité." },
            { word: "rodomontade", score: 85, feedback: "'Rodomontade' (littéraire) est une fanfaronnade extravagante." }
        ],
        bestAnswer: "forfanterie",
        explanation: "La 'jactance' comme 'forfanterie' est une vantardise compulsive qui cherche à impressionner par des affirmations exagérées, trahissant un complexe d'infériorité."
    },
    {
        id: "fr-267",
        sentence: "La laconisme de sa réponse laissait planer un mystère sur ses véritables intentions.",
        targetWord: "laconisme",
        targetWordIndex: 4,
        options: [
            { word: "brièveté", score: 85, feedback: "'Brièveté' est la courte durée, la concision." },
            { word: "concision", score: 90, feedback: "'Concision' est l'expression en peu de mots." },
            { word: "sobriété", score: 95, feedback: "'Sobriété' est la modération, la retenue dans l'expression." },
            { word: "spartiatisme", score: 100, feedback: "Parfait ! 'Spartiatisme' (référence à Sparte) est un style sobre, austère, et d'une concision extrême." }
        ],
        bestAnswer: "spartiatisme",
        explanation: "Le 'laconisme' comme 'spartiatisme' est une concision extrême et volontaire, caractéristique de la culture spartiate, qui peut cacher autant qu'elle révèle."
    },
    {
        id: "fr-268",
        sentence: "La lâcheté de son abandon en pleine crise fut vivement critiquée.",
        targetWord: "lâcheté",
        targetWordIndex: 4,
        options: [
            { word: "couardise", score: 95, feedback: "'Couardise' est une lâcheté méprisable, une absence de courage." },
            { word: "pusillanimité", score: 100, feedback: "Parfait ! 'Pusillanimité' est une petitesse d'âme, un manque de courage moral et de résolution." },
            { word: "poltronnerie", score: 90, feedback: "'Poltronnerie' est une lâcheté peureuse." },
            { word: "défection", score: 85, feedback: "'Défection' est l'abandon, la désertion." }
        ],
        bestAnswer: "pusillanimité",
        explanation: "La 'lâcheté' comme 'pusillanimité' est une faiblesse morale qui fait préférer la sécurité personnelle au devoir, révélant une petitesse d'âme."
    },
    {
        id: "fr-269",
        sentence: "La légèreté de la mousse au chocolat ravit les palais les plus délicats.",
        targetWord: "légèreté",
        targetWordIndex: 4,
        options: [
            { word: "légèreté", score: 0, feedback: "C'est le mot à remplacer." },
            { word: "douceur", score: 85, feedback: "'Douceur' est une qualité agréable au goût." },
            { word: "aérien", score: 95, feedback: "'Aérien' est léger comme l'air, presque impalpable." },
            { word: "impondérabilité", score: 100, feedback: "Parfait ! 'Impondérabilité' est la qualité de ce qui n'a pratiquement pas de poids, extrêmement léger." },
            { word: "subtilité", score: 90, feedback: "'Subtilité' est la finesse, la délicatesse." }
        ],
        bestAnswer: "impondérabilité",
        explanation: "La 'légèreté' comme 'impondérabilité' est une texture si fine et légère qu'elle semble défier la gravité, fondant instantanément."
    },
    {
        id: "fr-270",
        sentence: "La limpidité de l'eau de source permettait de voir le fond à plusieurs mètres.",
        targetWord: "limpidité",
        targetWordIndex: 4,
        options: [
            { word: "clarté", score: 90, feedback: "'Clarté' est la qualité de ce qui est clair, lumineux." },
            { word: "transparence", score: 95, feedback: "'Transparence' est la propriété de laisser passer la lumière." },
            { word: "diaphanéité", score: 100, feedback: "Parfait ! 'Diaphanéité' est une transparence parfaite, comme celle d'un voile très fin." },
            { word: "cristallinité", score: 85, feedback: "'Cristallinité' est la qualité de ce qui est pur comme le cristal." }
        ],
        bestAnswer: "diaphanéité",
        explanation: "La 'limpidité' comme 'diaphanéité' est une transparence si parfaite que l'eau semble immatérielle, ne déformant aucunement la vision."
    },
    {
        id: "fr-271",
        sentence: "La luxuriance de la végétation tropicale impressionnait les explorateurs.",
        targetWord: "luxuriance",
        targetWordIndex: 4,
        options: [
            { word: "exubérance", score: 95, feedback: "'Exubérance' est une surabondance, une vitalité débordante." },
            { word: "profusion", score: 90, feedback: "'Profusion' est une grande abondance." },
            { word: "opulence", score: 85, feedback: "'Opulence' est une richesse abondante." },
            { word: "fougue", score: 100, feedback: "Parfait ! 'Fougue' végétale est une croissance vigoureuse et désordonnée, presque violente." }
        ],
        bestAnswer: "fougue",
        explanation: "La 'luxuriance' comme 'fougue' végétale est une croissance explosive et désorganisée, témoignant d'une vitalité primitive et sauvage."
    },
    {
        id: "fr-272",
        sentence: "La magnanimité du vainqueur envers le vaincu fut saluée par tous.",
        targetWord: "magnanimité",
        targetWordIndex: 4,
        options: [
            { word: "générosité", score: 90, feedback: "'Générosité' est la qualité de donner, de se montrer large." },
            { word: "clémence", score: 95, feedback: "'Clémence' est l'indulgence, la disposition à pardonner." },
            { word: "noblesse", score: 85, feedback: "'Noblesse' est la grandeur d'âme, la dignité." },
            { word: "chevalerie", score: 100, feedback: "Parfait ! 'Chevalerie' implique un code d'honneur qui commande la protection du faible et la clémence envers l'ennemi vaincu." }
        ],
        bestAnswer: "chevalerie",
        explanation: "La 'magnanimité' comme 'chevalerie' est une grandeur d'âme qui pousse à traiter l'adversaire vaincu avec honneur et générosité, selon un code moral élevé."
    },
    {
        id: "fr-273",
        sentence: "La malignité de ses sous-entendus empoisonnait l'atmosphère du bureau.",
        targetWord: "malignité",
        targetWordIndex: 4,
        options: [
            { word: "méchanceté", score: 90, feedback: "'Méchanceté' est la disposition à faire le mal." },
            { word: "perfidie", score: 95, feedback: "'Perfidie' est la déloyauté, la traîtrise." },
            { word: "venimosité", score: 100, feedback: "Parfait ! 'Venimosité' (rare) est le caractère venimeux, qui empoisonne insidieusement." },
            { word: "nocivité", score: 85, feedback: "'Nocivité' est le caractère nuisible." }
        ],
        bestAnswer: "venimosité",
        explanation: "La 'malignité' comme 'venimosité' est une méchanceté insidieuse qui agit comme un poison lent, corrompant les relations par des suggestions toxiques."
    },
    {
        id: "fr-274",
        sentence: "La matité des couleurs d'automne créait une atmosphère mélancolique.",
        targetWord: "matité",
        targetWordIndex: 4,
        options: [
            { word: "ternissement", score: 90, feedback: "'Ternissement' est la perte d'éclat." },
            { word: "délavement", score: 85, feedback: "'Délavement' est l'action de laver, d'atténuer les couleurs." },
            { word: "patine", score: 95, feedback: "'Patine' est l'altération noble due au temps, donnant un aspect doux." },
            { word: "camaïeu", score: 100, feedback: "Parfait ! 'Camaïeu' est une gamme de nuances d'une même couleur, souvent douces et subtiles." }
        ],
        bestAnswer: "camaïeu",
        explanation: "La 'matité' comme 'camaïeu' automnal est une harmonie de tons subtils et atténués, créant une palette douce et nostalgique."
    },
    {
        id: "fr-275",
        sentence: "La morosité ambiante pesait sur le moral des troupes.",
        targetWord: "morosité",
        targetWordIndex: 4,
        options: [
            { word: "mélancolie", score: 90, feedback: "'Mélancolie' est une tristesse vague, rêveuse." },
            { word: "déprime", score: 85, feedback: "'Déprime' est un état dépressif, de découragement." },
            { word: "grise mine", score: 95, feedback: "'Grise mine' est une expression pour une atmosphère triste et terne." },
            { word: "acédie", score: 100, feedback: "Parfait ! 'Acédie' (théologie) est un ennui spirituel, une torpeur de l'âme qui décourage toute action." }
        ],
        bestAnswer: "acédie",
        explanation: "La 'morosité' comme 'acédie' collective est un état de stagnation et de désintérêt généralisé, qui éteint l'enthousiasme et l'énergie vitale."
    },
    {
        id: "fr-276",
        sentence: "La nauséabonde odeur qui émanait de la décharge indisposait les riverains.",
        targetWord: "nauséabonde",
        targetWordIndex: 4,
        options: [
            { word: "fétide", score: 95, feedback: "'Fétide' est une odeur de pourriture, infecte." },
            { word: "putride", score: 90, feedback: "'Putride' est en état de putréfaction, qui sent la mort." },
            { word: "méphitique", score: 100, feedback: "Parfait ! 'Méphitique' est une odeur malfaisante, toxique, qui peut provoquer des nausées et des évanouissements." },
            { word: "infecte", score: 85, feedback: "'Infecte' est très désagréable, repoussante." }
        ],
        bestAnswer: "méphitique",
        explanation: "Une odeur 'nauséabonde' comme 'méphitique' est non seulement repoussante mais aussi dangereuse pour la santé, évoquant des émanations toxiques."
    },
    {
        id: "fr-277",
        sentence: "La nébulosité du ciel annonçait l'arrivée imminente de la pluie.",
        targetWord: "nébulosité",
        targetWordIndex: 4,
        options: [
            { word: "couverture", score: 85, feedback: "'Couverture nuageuse' est une expression courante." },
            { word: "obscurcissement", score: 90, feedback: "'Obscurcissement' est l'action de devenir obscur." },
            { word: "brume", score: 95, feedback: "'Brume' est un brouillard léger, mais souvent bas." },
            { word: "stratus", score: 100, feedback: "Parfait ! 'Stratus' (météorologie) est une couche nuageuse uniforme et basse, souvent annonciatrice de mauvais temps." }
        ],
        bestAnswer: "stratus",
        explanation: "La 'nébulosité' comme couche de 'stratus' est un ciel uniformément gris et bas, typique des dépressions et des précipitations continues."
    },
    {
        id: "fr-278",
        sentence: "La névrose qui le rongeait affectait toutes ses décisions.",
        targetWord: "névrose",
        targetWordIndex: 4,
        options: [
            { word: "anxiété", score: 90, feedback: "'Anxiété' est un sentiment d'inquiétude, d'appréhension." },
            { word: "angoisse", score: 95, feedback: "'Angoisse' est une anxiété intense, avec sensation d'étouffement." },
            { word: "psychose", score: 85, feedback: "'Psychose' est une maladie mentale plus grave, avec perte de contact avec la réalité." },
            { word: "hystérie", score: 100, feedback: "Parfait ! 'Hystérie' (psychanalyse) est une névrose caractérisée par des conversions somatiques et une grande labilité émotionnelle." }
        ],
        bestAnswer: "hystérie",
        explanation: "La 'névrose' comme 'hystérie' est un trouble où l'angoisse se convertit en symptômes physiques ou en dramatisations excessives, perturbant le jugement."
    },
    {
        id: "fr-279",
        sentence: "L'obscurité de la grotte était si profonde qu'on y voyait à peine sa main devant soi.",
        targetWord: "obscurité",
        targetWordIndex: 4,
        options: [
            { word: "ténèbres", score: 95, feedback: "'Ténèbres' est une obscurité profonde, souvent angoissante." },
            { word: "noirceur", score: 90, feedback: "'Noirceur' est l'état de ce qui est noir, sans lumière." },
            { word: "pénombre", score: 85, feedback: "'Pénombre' est une faible lumière, une demi-obscurité." },
            { word: "éclipse", score: 100, feedback: "Parfait ! 'Éclipse' totale est une obscurité complète et soudaine, comme si la lumière était absorbée." }
        ],
        bestAnswer: "éclipse",
        explanation: "L''obscurité' comme 'éclipse' est une absence totale de lumière, créant un noir absolu qui abolit toute perception visuelle."
    },
    {
        id: "fr-280",
        sentence: "L'obsolescence programmée de ces appareils est dénoncée par les associations de consommateurs.",
        targetWord: "obsolescence",
        targetWordIndex: 4,
        options: [
            { word: "vieillissement", score: 85, feedback: "'Vieillissement' est le processus naturel de vieillir." },
            { word: "démodage", score: 90, feedback: "'Démodage' est le fait de passer de mode." },
            { word: "caducité", score: 95, feedback: "'Caducité' est l'état de ce qui est périmé, désuet." },
            { word: "périssabilité", score: 100, feedback: "Parfait ! 'Périssabilité' est la qualité de ce qui est destiné à périr, à avoir une durée de vie limitée." }
        ],
        bestAnswer: "périssabilité",
        explanation: "L''obsolescence' comme 'périssabilité' programmée est une limitation délibérée de la durée de vie d'un produit, conçue pour en accélérer le renouvellement."
    },
    {
        id: "fr-281",
        sentence: "L'opiniâtreté avec laquelle il défendait sa thèse finit par convaincre son auditoire.",
        targetWord: "opiniâtreté",
        targetWordIndex: 4,
        options: [
            { word: "ténacité", score: 95, feedback: "'Ténacité' est la persévérance, l'obstination." },
            { word: "obstination", score: 90, feedback: "'Obstination' est une persévérance opiniâtre, parfois aveugle." },
            { word: "acharnement", score: 100, feedback: "Parfait ! 'Acharnement' est une obstination violente, passionnée, qui ne lâche rien." },
            { word: "persévérance", score: 85, feedback: "'Persévérance' est la constance dans l'effort." }
        ],
        bestAnswer: "acharnement",
        explanation: "L''opiniâtreté' comme 'acharnement' est une détermination farouche et presque combatrice, qui refuse toute concession."
    },
    {
        id: "fr-282",
        sentence: "L'ostentation de sa richesse agaçait dans un quartier modeste.",
        targetWord: "ostentation",
        targetWordIndex: 4,
        options: [
            { word: "étalage", score: 90, feedback: "'Étalage' est le fait de montrer avec excès." },
            { word: "parade", score: 95, feedback: "'Parade' est une exhibition, une démonstration publique." },
            { word: "faste", score: 85, feedback: "'Faste' est un luxe, une somptuosité." },
            { word: "pharisaïsme", score: 100, feedback: "Parfait ! 'Pharisaïsme' (religion) est une ostentation hypocrite de vertu ou, par extension, de richesse." }
        ],
        bestAnswer: "pharisaïsme",
        explanation: "L''ostentation' comme 'pharisaïsme' matériel est une exhibition de richesse qui cherche moins à jouir qu'à se faire admirer, avec une dimension hypocrite."
    },
    {
        id: "fr-283",
        sentence: "La perversité du système empêchait toute réforme véritable.",
        targetWord: "perversité",
        targetWordIndex: 4,
        options: [
            { word: "corruption", score: 90, feedback: "'Corruption' est l'altération, la dégradation morale." },
            { word: "vice", score: 85, feedback: "'Vice' est un défaut moral grave." },
            { word: "dépravation", score: 95, feedback: "'Dépravation' est une perversion morale, une débauche." },
            { word: "diabolisme", score: 100, feedback: "Parfait ! 'Diabolisme' est un caractère diabolique, malfaisant par essence, qui semble vouloir le mal pour le mal." }
        ],
        bestAnswer: "diabolisme",
        explanation: "La 'perversité' comme 'diabolisme' systémique est une tendance intrinsèque à générer des effets contraires au bien commun, comme par une volonté mauvaise."
    },
    {
        id: "fr-284",
        sentence: "La préciosité de son langage le rendait parfois incompréhensible.",
        targetWord: "préciosité",
        targetWordIndex: 4,
        options: [
            { word: "affectation", score: 95, feedback: "'Affectation' est une recherche excessive, maniérée." },
            { word: "maniérisme", score: 100, feedback: "Parfait ! 'Maniérisme' est un style affecté, recherché, qui sacrifie la naturalité à l'originalité." },
            { word: "prétention", score: 90, feedback: "'Prétention' est une ambition, une prétendue supériorité." },
            { word: "raffinement", score: 85, feedback: "'Raffinement' est l'extrême délicatesse, la sophistication." }
        ],
        bestAnswer: "maniérisme",
        explanation: "La 'préciosité' comme 'maniérisme' linguistique est un culte excessif de la forme au détriment du fond, recourant à des figures rares et contournées."
    },
    {
        id: "fr-285",
        sentence: "La prégnance de cette image dans la mémoire collective en faisait un symbole puissant.",
        targetWord: "prégnance",
        targetWordIndex: 4,
        options: [
            { word: "force", score: 85, feedback: "'Force' est l'intensité, la puissance." },
            { word: "persistance", score: 90, feedback: "'Persistance' est la durée, la permanence." },
            { word: "intensité", score: 95, feedback: "'Intensité' est la grande force, la vigueur." },
            { word: "imprégnation", score: 100, feedback: "Parfait ! 'Imprégnation' est le fait de pénétrer profondément, de marquer durablement." }
        ],
        bestAnswer: "imprégnation",
        explanation: "La 'prégnance' comme 'imprégnation' mémorielle est la capacité d'une image à s'inscrire profondément dans la psyché collective, influençant durablement les représentations."
    },
    {
        id: "fr-286",
        sentence: "La prolifération des mauvaises herbes menaçait la récolte.",
        targetWord: "prolifération",
        targetWordIndex: 4,
        options: [
            { word: "multiplication", score: 90, feedback: "'Multiplication' est l'augmentation en nombre." },
            { word: "expansion", score: 85, feedback: "'Expansion' est l'extension, l'accroissement." },
            { word: "pullulation", score: 95, feedback: "'Pullulation' est une multiplication excessive, grouillante." },
            { word: "métastase", score: 100, feedback: "Parfait ! 'Métastase' (médecine) est une prolifération incontrôlée et envahissante, comme une tumeur." }
        ],
        bestAnswer: "métastase",
        explanation: "La 'prolifération' comme 'métastase' végétale est une croissance anarchique et invasive qui étouffe les cultures, semblable à un cancer."
    },
    {
        id: "fr-287",
        sentence: "La promptitude de sa réaction lui évita un accident grave.",
        targetWord: "promptitude",
        targetWordIndex: 4,
        options: [
            { word: "rapidité", score: 90, feedback: "'Rapidité' est la vitesse, la célérité." },
            { word: "immédiateté", score: 95, feedback: "'Immédiateté' est l'absence de délai, l'instantanéité." },
            { word: "vivacité", score: 85, feedback: "'Vivacité' est la vitesse, l'énergie." },
            { word: "réflexe", score: 100, feedback: "Parfait ! 'Réflexe' est une réponse automatique et instantanée à un stimulus, sans intervention de la pensée." }
        ],
        bestAnswer: "réflexe",
        explanation: "La 'promptitude' comme 'réflexe' est une réaction si rapide qu'elle semble échapper à la volonté, provenant d'un automatisme physiologique."
    },
    {
        id: "fr-288",
        sentence: "La propreté méticuleuse de la maison révélait un caractère obsessionnel.",
        targetWord: "propreté",
        targetWordIndex: 4,
        options: [
            { word: "nettoyage", score: 85, feedback: "'Nettoyé' est l'état de ce qui est net, sans saleté." },
            { word: "hygiène", score: 90, feedback: "'Hygiène' est l'ensemble des pratiques de propreté." },
            { word: "asepsie", score: 100, feedback: "Parfait ! 'Asepsie' (médical) est l'absence totale de germes, une propreté absolue et stérile." },
            { word: "immaculation", score: 95, feedback: "'Immaculation' est l'état de ce qui est sans tache, parfaitement propre." }
        ],
        bestAnswer: "asepsie",
        explanation: "La 'propreté' comme 'asepsie' domestique est une recherche obsessive de stérilité, éliminant non seulement la saleté mais tout micro-organisme."
    },
    {
        id: "fr-289",
        sentence: "La quiétude du monastère offrait un refuge contre l'agitation du monde.",
        targetWord: "quiétude",
        targetWordIndex: 4,
        options: [
            { word: "tranquillité", score: 90, feedback: "'Tranquillité' est le calme, la paix." },
            { word: "sérénité", score: 95, feedback: "'Sérénité' est la paix intérieure, la sérénité de l'âme." },
            { word: "repos", score: 85, feedback: "'Repos' est le calme, le relâchement." },
            { word: "ataraxie", score: 100, feedback: "Parfait ! 'Ataraxie' (philosophie) est l'absence de troubles de l'âme, la paix parfaite que recherche le sage." }
        ],
        bestAnswer: "ataraxie",
        explanation: "La 'quiétude' comme 'ataraxie' monastique est un état de paix absolue, libéré des passions et des soucis du monde, but de la vie contemplative."
    },
    {
        id: "fr-290",
        sentence: "La rébellion ouverte des provinces menaçait l'unité de l'empire.",
        targetWord: "rébellion",
        targetWordIndex: 4,
        options: [
            { word: "insurrection", score: 95, feedback: "'Insurrection' est un soulèvement populaire contre l'autorité." },
            { word: "révolte", score: 90, feedback: "'Révolte' est un refus d'obéissance, une opposition." },
            { word: "sédition", score: 100, feedback: "Parfait ! 'Sédition' est une rébellion organisée contre l'autorité établie, souvent avec une dimension politique." },
            { word: "mutinerie", score: 85, feedback: "'Mutinerie' est une révolte militaire, de soldats ou de marins." }
        ],
        bestAnswer: "sédition",
        explanation: "La 'rébellion' comme 'sédition' est une opposition politique organisée et consciente, qui remet en cause la légitimité du pouvoir central."
    },
    {
        id: "fr-291",
        sentence: "La récidive de ses erreurs montrait qu'il n'avait rien appris.",
        targetWord: "récidive",
        targetWordIndex: 4,
        options: [
            { word: "répétition", score: 85, feedback: "'Répétition' est le fait de se reproduire." },
            { word: "persistance", score: 90, feedback: "'Persistance' est la continuation, la durée." },
            { word: "réitération", score: 95, feedback: "'Réitération' est le fait de renouveler, de répéter." },
            { word: "récursivité", score: 100, feedback: "Parfait ! 'Récursivité' (logique) est la propriété d'un phénomène qui se reproduit à l'identique, en boucle." }
        ],
        bestAnswer: "récursivité",
        explanation: "La 'récidive' comme 'récursivité' comportementale est une répétition automatique et stérile des mêmes schémas, sans apprentissage."
    },
    {
        id: "fr-292",
        sentence: "La réticence des témoins à parler compliquait l'enquête.",
        targetWord: "réticence",
        targetWordIndex: 4,
        options: [
            { word: "hésitation", score: 90, feedback: "'Hésitation' est l'indécision, le doute." },
            { word: "réserve", score: 95, feedback: "'Réserve' est la prudence, la discrétion." },
            { word: "mutisme", score: 100, feedback: "Parfait ! 'Mutisme' est le refus de parler, le silence obstiné." },
            { word: "pudeur", score: 85, feedback: "'Pudeur' est la retenue par modestie, par crainte de choquer." }
        ],
        bestAnswer: "mutisme",
        explanation: "La 'réticence' comme 'mutisme' est un silence délibéré et obstiné, refusant toute communication, souvent par crainte ou méfiance."
    },
    {
        id: "fr-293",
        sentence: "La rudesse du climat polaire exigeait une adaptation constante.",
        targetWord: "rudesse",
        targetWordIndex: 4,
        options: [
            { word: "dureté", score: 90, feedback: "'Dureté' est le caractère dur, sévère." },
            { word: "rigueur", score: 95, feedback: "'Rigueur' est la sévérité, l'austérité." },
            { word: "hostilité", score: 85, feedback: "'Hostilité' est l'état de ce qui est hostile, adverse." },
            { word: "inclemence", score: 100, feedback: "Parfait ! 'Inclémence' est la sévérité extrême des éléments, un climat rigoureux et dangereux." }
        ],
        bestAnswer: "inclemence",
        explanation: "La 'rudesse' comme 'inclemence' climatique est une violence des éléments (froid, vent, neige) qui menace directement la survie."
    },
    {
        id: "fr-294",
        sentence: "La rusticité des outils anciens contrastait avec la technologie moderne.",
        targetWord: "rusticité",
        targetWordIndex: 4,
        options: [
            { word: "simplicité", score: 85, feedback: "'Simplicité' est le caractère simple, sans complication." },
            { word: "primitivité", score: 90, feedback: "'Primitivité' est l'état primitif, élémentaire." },
            { word: "archaïsme", score: 95, feedback: "'Archaïsme' est le caractère ancien, dépassé." },
            { word: "paléotechnique", score: 100, feedback: "Parfait ! 'Paléotechnique' (histoire) relatif aux techniques anciennes, pré-industrielles." }
        ],
        bestAnswer: "paléotechnique",
        explanation: "La 'rusticité' comme caractère 'paléotechnique' désigne des outils fabriqués selon des méthodes anciennes, avant la révolution industrielle."
    },
    {
        id: "fr-295",
        sentence: "La rusticité de ses manières le trahissait dans les salons parisiens.",
        targetWord: "rusticité",
        targetWordIndex: 4,
        options: [
            { word: "gaucherie", score: 95, feedback: "'Gaucherie' est un manque de grâce, d'aisance sociale." },
            { word: "maladresse", score: 90, feedback: "'Maladresse' est un manque d'adresse, de dextérité." },
            { word: "campagnarderie", score: 100, feedback: "Parfait ! 'Campagnarderie' est le caractère de ce qui est campagnard, manquant de raffinement urbain." },
            { word: "ingénuité", score: 85, feedback: "'Ingénuité' est la franchise, la simplicité naturelle." }
        ],
        bestAnswer: "campagnarderie",
        explanation: "La 'rusticité' comme 'campagnarderie' est un ensemble de manières et d'attitudes propres à la campagne, perçues comme frustes en milieu urbain raffiné."
    },
    {
        id: "fr-296",
        sentence: "La rutilance des bijoux de la couronne éblouissait les visiteurs.",
        targetWord: "rutilance",
        targetWordIndex: 4,
        options: [
            { word: "brillant", score: 90, feedback: "'Brillant' est l'éclat, la lumière réfléchie." },
            { word: "éclat", score: 95, feedback: "'Éclat' est une lumière vive, éblouissante." },
            { word: "scintillement", score: 85, feedback: "'Scintillement' est l'action de scintiller, de briller par intermittence." },
            { word: "fulgurance", score: 100, feedback: "Parfait ! 'Fulgurance' est un éclat soudain et intense, comme celui de l'éclair." }
        ],
        bestAnswer: "fulgurance",
        explanation: "La 'rutilance' comme 'fulgurance' est un éclat métallique si vif qu'il semble produire des éclairs, aveuglant temporairement."
    },
    {
        id: "fr-297",
        sentence: "La sagesse des anciens était transmise par les contes et légendes.",
        targetWord: "sagesse",
        targetWordIndex: 4,
        options: [
            { word: "prudence", score: 85, feedback: "'Prudence' est la circonspection, la sagesse pratique." },
            { word: "savoir", score: 90, feedback: "'Savoir' est l'ensemble des connaissances." },
            { word: "phronesis", score: 100, feedback: "Parfait ! 'Phronesis' (philosophie grecque) est la sagesse pratique, l'intelligence des situations concrètes." },
            { word: "lucidité", score: 95, feedback: "'Lucidité' est la clarté d'esprit, la perspicacité." }
        ],
        bestAnswer: "phronesis",
        explanation: "La 'sagesse' comme 'phronesis' est une intelligence pratique, fruit de l'expérience, qui guide l'action juste dans les situations complexes."
    },
    {
        id: "fr-298",
        sentence: "La salacité de ses plaisanteries détonnait dans ce milieu puritain.",
        targetWord: "salacité",
        targetWordIndex: 4,
        options: [
            { word: "grivoiserie", score: 95, feedback: "'Grivoiserie' est une plaisanterie libre, gaillarde." },
            { word: "obscénité", score: 90, feedback: "'Obscénité' est un caractère choquant par allusion sexuelle." },
            { word: "paillardise", score: 100, feedback: "Parfait ! 'Paillardise' est une liberté de langage et de mœurs, joyeusement licencieuse." },
            { word: "licence", score: 85, feedback: "'Licence' est la liberté excessive, le relâchement des mœurs." }
        ],
        bestAnswer: "paillardise",
        explanation: "La 'salacité' comme 'paillardise' est un humour grivois et bon enfant, qui revendique une liberté joyeuse face aux convenances puritaines."
    },
    {
        id: "fr-299",
        sentence: "La salubrité de l'air en montagne était bénéfique pour les convalescents.",
        targetWord: "salubrité",
        targetWordIndex: 4,
        options: [
            { word: "pureté", score: 90, feedback: "'Pureté' est l'état de ce qui est pur, non altéré." },
            { word: "qualité", score: 85, feedback: "'Qualité de l'air' est une expression courante." },
            { word: "tonicité", score: 95, feedback: "'Tonicité' est la qualité de ce qui tonifie, redonne des forces." },
            { word: "eumétrie", score: 100, feedback: "Parfait ! 'Eumétrie' (rare) est la juste mesure, l'équilibre parfait des conditions environnementales." }
        ],
        bestAnswer: "eumétrie",
        explanation: "La 'salubrité' comme 'eumétrie' atmosphérique est l'équilibre parfait des composants de l'air (oxygène, ions, etc.), optimal pour la santé."
    },
    {
        id: "fr-300",
        sentence: "La sérénité du lac en fin de journée apaisait les esprits.",
        targetWord: "sérénité",
        targetWordIndex: 4,
        options: [
            { word: "calme", score: 90, feedback: "'Calme' est l'absence d'agitation." },
            { word: "paix", score: 95, feedback: "'Paix' est la tranquillité, la quiétude." },
            { word: "quiétude", score: 85, feedback: "'Quiétude' est le calme, le repos." },
            { word: "ataraxie", score: 100, feedback: "Parfait ! 'Ataraxie' (philosophie) est la paix absolue de l'âme, ici projetée sur le paysage." }
        ],
        bestAnswer: "ataraxie",
        explanation: "La 'sérénité' comme 'ataraxie' du lac est un calme si parfait qu'il semble refléter un état de paix intérieure absolue, apaisant le spectateur."
    },
    {
        id: "fr-301",
        sentence: "La tangibilité des preuves présentées au tribunal était indéniable.",
        targetWord: "tangibilité",
        targetWordIndex: 4,
        options: [
            { word: "concrétude", score: 95, feedback: "'Concrétude' désigne le caractère concret, palpable, très proche." },
            { word: "matérialité", score: 100, feedback: "Parfait ! 'Matérialité' est la qualité de ce qui a une existence matérielle, pouvant être touché ou perçu physiquement." },
            { word: "réalité", score: 85, feedback: "'Réalité' est le caractère de ce qui est réel, mais moins spécifique." },
            { word: "évidence", score: 90, feedback: "'Évidence' est la clarté, le caractère évident, mais pas nécessairement physique." }
        ],
        bestAnswer: "matérialité",
        explanation: "La 'tangibilité' comme 'matérialité' des preuves désigne leur existence physique concrète, pouvant être examinée et manipulée, renforçant ainsi leur force probante."
    },
    {
        id: "fr-302",
        sentence: "La ténacité dont il fit preuve pour surmonter les obstacles força le respect.",
        targetWord: "ténacité",
        targetWordIndex: 4,
        options: [
            { word: "persévérance", score: 90, feedback: "'Persévérance' est la constance dans l'effort, très proche." },
            { word: "opiniâtreté", score: 95, feedback: "'Opiniâtreté' est une obstination tenace, parfois teintée d'entêtement." },
            { word: "acharnement", score: 100, feedback: "Parfait ! 'Acharnement' implique une détermination farouche, presque combative, à ne pas abandonner." },
            { word: "endurance", score: 85, feedback: "'Endurance' est la capacité à résister à la fatigue, plus physique." }
        ],
        bestAnswer: "acharnement",
        explanation: "La 'ténacité' comme 'acharnement' est une volonté inflexible et passionnée qui pousse à lutter jusqu'au bout, quel que soit le coût."
    },
    {
        id: "fr-303",
        sentence: "La ténuité du lien entre les deux événements rendait toute conclusion hasardeuse.",
        targetWord: "ténuité",
        targetWordIndex: 4,
        options: [
            { word: "faiblesse", score: 85, feedback: "'Faiblesse' manque de force, mais moins spécifique." },
            { word: "fragilité", score: 90, feedback: "'Fragilité' peut se briser facilement, image juste." },
            { word: "étroitesse", score: 95, feedback: "'Étroitesse' suggère un lien limité, restreint." },
            { word: "légèreté", score: 100, feedback: "Parfait ! 'Légèreté' évoque un lien si peu substantiel qu'il est presque inexistant, à peine perceptible." }
        ],
        bestAnswer: "légèreté",
        explanation: "La 'ténuité' comme 'légèreté' décrit un lien si ténu et insaisissable qu'il ne peut fonder une argumentation solide."
    },
    {
        id: "fr-304",
        sentence: "La timidité excessive de l'enfant l'empêchait de participer aux jeux collectifs.",
        targetWord: "timidité",
        targetWordIndex: 4,
        options: [
            { word: "réservé", score: 85, feedback: "'Réservé' est discret, mais moins pathologique." },
            { word: "introversion", score: 90, feedback: "'Introversion' est un trait de personnalité tourné vers l'intérieur." },
            { word: "méfiance", score: 95, feedback: "'Méfiance' est une défiance, une crainte de l'autre." },
            { word: "anxiété sociale", score: 100, feedback: "Parfait ! 'Anxiété sociale' est une peur intense et invalidante des situations sociales." }
        ],
        bestAnswer: "anxiété sociale",
        explanation: "La 'timidité' comme 'anxiété sociale' est une phobie des interactions qui paralyse et isole, dépassant la simple réserve."
    },
    {
        id: "fr-305",
        sentence: "La torpeur qui régnait dans la salle d'attente était palpable.",
        targetWord: "torpeur",
        targetWordIndex: 4,
        options: [
            { word: "léthargie", score: 95, feedback: "'Léthargie' est un état d'engourdissement, de sommeil profond." },
            { word: "apathie", score: 90, feedback: "'Apathie' est un manque d'émotion, d'intérêt." },
            { word: "inertie", score: 85, feedback: "'Inertie' est l'absence de mouvement, de réaction." },
            { word: "stupeur", score: 100, feedback: "Parfait ! 'Stupeur' est un état de stupeur, d'engourdissement mental et physique." }
        ],
        bestAnswer: "stupeur",
        explanation: "La 'torpeur' comme 'stupeur' est un engourdissement général des facultés, créant une atmosphère de suspension et d'attente passive."
    },
    {
        id: "fr-306",
        sentence: "La turbulence de l'enfant épuisait ses parents et ses enseignants.",
        targetWord: "turbulence",
        targetWordIndex: 4,
        options: [
            { word: "agitation", score: 90, feedback: "'Agitation' est un mouvement désordonné, une nervosité." },
            { word: "hyperactivité", score: 100, feedback: "Parfait ! 'Hyperactivité' (TDAH) est un trouble caractérisé par une activité motrice excessive et désorganisée." },
            { word: "exubérance", score: 85, feedback: "'Exubérance' est une vitalité débordante, souvent positive." },
            { word: "énervement", score: 95, feedback: "'Énervement' est un état d'irritation, de tension nerveuse." }
        ],
        bestAnswer: "hyperactivité",
        explanation: "La 'turbulence' comme 'hyperactivité' est un excès d'énergie motrice incontrôlée, souvent symptomatique d'un trouble de l'attention."
    },
    {
        id: "fr-307",
        sentence: "L'ubiquité des caméras de surveillance dans la ville suscitait des débats sur la vie privée.",
        targetWord: "ubiquité",
        targetWordIndex: 4,
        options: [
            { word: "omniprésence", score: 100, feedback: "Parfait ! 'Omniprésence' est la qualité d'être présent partout à la fois." },
            { word: "prolifération", score: 90, feedback: "'Prolifération' est une multiplication rapide et abondante." },
            { word: "dissémination", score: 95, feedback: "'Dissémination' est une dispersion large." },
            { word: "pénétration", score: 85, feedback: "'Pénétration' est l'action de pénétrer, de s'infiltrer." }
        ],
        bestAnswer: "omniprésence",
        explanation: "L''ubiquité' comme 'omniprésence' des caméras crée un sentiment de surveillance constante, comme si l'œil du pouvoir était partout."
    },
    {
        id: "fr-308",
        sentence: "L'unicité de cet exemplaire en faisait un objet de collection inestimable.",
        targetWord: "unicité",
        targetWordIndex: 4,
        options: [
            { word: "singularité", score: 95, feedback: "'Singularité' est le caractère unique, exceptionnel." },
            { word: "rareté", score: 90, feedback: "'Rareté' est le fait d'être rare, peu commun." },
            { word: "exclusivité", score: 85, feedback: "'Exclusivité' est le caractère réservé à un seul." },
            { word: "irréductibilité", score: 100, feedback: "Parfait ! 'Irréductibilité' est l'impossibilité d'être réduit ou comparé à autre chose, absolument unique." }
        ],
        bestAnswer: "irréductibilité",
        explanation: "L''unicité' comme 'irréductibilité' signifie que l'objet ne peut être assimilé à aucun autre, constituant une catégorie à lui seul."
    },
    {
        id: "fr-309",
        sentence: "L'uniformité des bâtiments dans ce quartier lui donnait un aspect monotone.",
        targetWord: "uniformité",
        targetWordIndex: 4,
        options: [
            { word: "monotonie", score: 90, feedback: "'Monotonie' est l'absence de variation, de diversité." },
            { word: "standardisation", score: 95, feedback: "'Standardisation' est l'application de normes identiques." },
            { word: "homogénéité", score: 85, feedback: "'Homogénéité' est la similitude, l'absence d'hétérogénéité." },
            { word: "isomorphisme", score: 100, feedback: "Parfait ! 'Isomorphisme' (mathématiques) est la similitude de forme entre des structures différentes, ici appliqué à l'architecture." }
        ],
        bestAnswer: "isomorphisme",
        explanation: "L''uniformité' comme 'isomorphisme' architectural est une similitude structurelle si parfaite que les bâtiments semblent des copies conformes."
    },
    {
        id: "fr-310",
        sentence: "L'univocité de la réponse ne laissait place à aucune interprétation.",
        targetWord: "univocité",
        targetWordIndex: 4,
        options: [
            { word: "clarté", score: 90, feedback: "'Clarté' est la qualité de ce qui est clair, intelligible." },
            { word: "précision", score: 85, feedback: "'Précision' est l'exactitude, le caractère précis." },
            { word: "univocité", score: 0, feedback: "C'est le mot à remplacer." },
            { word: "monosémie", score: 100, feedback: "Parfait ! 'Monosémie' (linguistique) est le fait d'avoir un seul sens, sans ambiguïté." },
            { word: "définitivité", score: 95, feedback: "'Définitivité' est le caractère définitif, concluant." }
        ],
        bestAnswer: "monosémie",
        explanation: "L''univocité' comme 'monosémie' est la propriété d'un énoncé qui ne peut être compris que d'une seule manière, excluant tout double sens."
    },
    {
        id: "fr-311",
        sentence: "L'urgence de la situation exigeait une prise de décision immédiate.",
        targetWord: "urgence",
        targetWordIndex: 4,
        options: [
            { word: "immédiateté", score: 90, feedback: "'Immédiateté' est le caractère immédiat, sans délai." },
            { word: "criticité", score: 95, feedback: "'Criticité' est l'état critique, nécessitant une intervention rapide." },
            { word: "pressing", score: 85, feedback: "'Pressing' (anglicisme) est une pression, une nécessité pressante." },
            { word: "imminence", score: 100, feedback: "Parfait ! 'Imminence' est le caractère de ce qui est sur le point de se produire, demandant une action sans attendre." }
        ],
        bestAnswer: "imminence",
        explanation: "L''urgence' comme 'imminence' indique que la crise est sur le point d'éclater, laissant un délai extrêmement court pour réagir."
    },
    {
        id: "fr-312",
        sentence: "L'usure prématurée du matériel révélait un défaut de fabrication.",
        targetWord: "usure",
        targetWordIndex: 4,
        options: [
            { word: "détérioration", score: 90, feedback: "'Détérioration' est l'altération, la dégradation." },
            { word: "fatigue", score: 95, feedback: "'Fatigue' (des matériaux) est l'affaiblissement dû à des contraintes répétées." },
            { word: "déclin", score: 85, feedback: "'Déclin' est le déclin, la perte de vitalité." },
            { word: "obsolescence", score: 100, feedback: "Parfait ! 'Obsolescence' prématurée est le fait de devenir inutilisable plus vite que la normale, souvent par conception." }
        ],
        bestAnswer: "obsolescence",
        explanation: "L''usure' comme 'obsolescence' prématurée est une défaillance accélérée, suggérant une conception volontairement fragilisée."
    },
    {
        id: "fr-313",
        sentence: "La vacance du poste depuis plusieurs mois créait un vide organisationnel.",
        targetWord: "vacance",
        targetWordIndex: 4,
        options: [
            { word: "inoccupation", score: 90, feedback: "'Inoccupation' est le fait de ne pas être occupé." },
            { word: "vacuité", score: 95, feedback: "'Vacuité' est le vide, l'absence de contenu." },
            { word: "disponibilité", score: 85, feedback: "'Disponibilité' est l'état de ce qui est disponible." },
            { word: "vacance", score: 0, feedback: "C'est le mot à remplacer." },
            { word: "interrègne", score: 100, feedback: "Parfait ! 'Interrègne' (politique) est la période entre deux règnes, transposée à une organisation." }
        ],
        bestAnswer: "interrègne",
        explanation: "La 'vacance' comme 'interrègne' organisationnel est une période de transition sans leadership, où les pouvoirs sont en suspens."
    },
    {
        id: "fr-314",
        sentence: "La velléité de réforme s'était rapidement dissipée face aux résistances.",
        targetWord: "velléité",
        targetWordIndex: 4,
        options: [
            { word: "intention", score: 85, feedback: "'Intention' est un projet, une volonté." },
            { word: "vocation", score: 90, feedback: "'Vocation' est une inclination, un appel." },
            { word: "aspiration", score: 95, feedback: "'Aspiration' est un désir, un souhait." },
            { word: "fumée", score: 100, feedback: "Parfait ! 'Fumée' (figuré) désigne un projet sans consistance, qui s'évapore à la première difficulté." }
        ],
        bestAnswer: "fumée",
        explanation: "Une 'velléité' comme 'fumée' est une volonté superficielle et évanescente, qui ne résiste pas à l'épreuve des obstacles."
    },
    {
        id: "fr-315",
        sentence: "La véhémence de son plaidoyer emporta l'adhésion du jury.",
        targetWord: "véhémence",
        targetWordIndex: 4,
        options: [
            { word: "fougue", score: 90, feedback: "'Fougue' est l'ardeur, l'enthousiasme passionné." },
            { word: "passion", score: 85, feedback: "'Passion' est une émotion intense." },
            { word: "emportement", score: 95, feedback: "'Emportement' est un mouvement passionné, souvent excessif." },
            { word: "incandescence", score: 100, feedback: "Parfait ! 'Incandescence' est un état de chaleur extrême, ici verbale, qui enflamme l'auditoire." }
        ],
        bestAnswer: "incandescence",
        explanation: "La 'véhémence' comme 'incandescence' oratoire est une parole si brûlante d'émotion qu'elle semble irradier et consumer les résistances."
    },
    {
        id: "fr-316",
        sentence: "La véracité de son alibi fut rapidement démontrée.",
        targetWord: "véracité",
        targetWordIndex: 4,
        options: [
            { word: "authenticité", score: 90, feedback: "'Authenticité' est la qualité de ce qui est authentique." },
            { word: "fiabilité", score: 85, feedback: "'Fiabilité' est le caractère fiable, digne de confiance." },
            { word: "corroboration", score: 95, feedback: "'Corroboration' est la confirmation par des preuves." },
            { word: "irréfutabilité", score: 100, feedback: "Parfait ! 'Irréfutabilité' est l'impossibilité d'être réfuté, prouvé de manière absolue." }
        ],
        bestAnswer: "irréfutabilité",
        explanation: "La 'véracité' comme 'irréfutabilité' d'un alibi est son caractère si solidement étayé qu'aucun doute ne peut raisonnablement subsister."
    },
    {
        id: "fr-317",
        sentence: "La versatilité de ses opinions le rendait peu fiable.",
        targetWord: "versatilité",
        targetWordIndex: 4,
        options: [
            { word: "inconstance", score: 95, feedback: "'Inconstance' est le changement fréquent, l'instabilité." },
            { word: "volatilité", score: 90, feedback: "'Volatilité' est la disposition à changer rapidement, comme un liquide qui s'évapore." },
            { word: "lubie", score: 85, feedback: "'Lubie' est un caprice, une fantaisie passagère." },
            { word: "caméléonisme", score: 100, feedback: "Parfait ! 'Caméléonisme' est la capacité à changer d'opinion ou d'attitude pour s'adapter, souvent par opportunisme." }
        ],
        bestAnswer: "caméléonisme",
        explanation: "La 'versatilité' comme 'caméléonisme' est une adaptation opportuniste et hypocrite aux circonstances, trahissant l'absence de convictions propres."
    },
    {
        id: "fr-318",
        sentence: "La vertu cardinale de prudence était particulièrement nécessaire en temps de crise.",
        targetWord: "vertu",
        targetWordIndex: 4,
        options: [
            { word: "qualité", score: 85, feedback: "'Qualité' est un attribut positif, mais moins fort." },
            { word: "mérite", score: 90, feedback: "'Mérite' est ce qui rend digne d'estime." },
            { word: "excellence", score: 95, feedback: "'Excellence' est la supériorité, la perfection." },
            { word: "arété", score: 100, feedback: "Parfait ! 'Arété' (grec) est l'excellence morale, la vertu au sens le plus noble et accompli." }
        ],
        bestAnswer: "arété",
        explanation: "La 'vertu' comme 'arété' est l'excellence humaine dans l'ordre moral, réalisant pleinement la nature rationnelle et sociale de l'homme."
    },
    {
        id: "fr-319",
        sentence: "La vétusté des installations posait un sérieux problème de sécurité.",
        targetWord: "vétusté",
        targetWordIndex: 4,
        options: [
            { word: "ancienneté", score: 85, feedback: "'Ancienneté' est le grand âge, mais pas nécessairement la dégradation." },
            { word: "délabrement", score: 95, feedback: "'Délabrement' est l'état de ce qui est en ruine, dégradé." },
            { word: "obsolescence", score: 90, feedback: "'Obsolescence' est le caractère dépassé, périmé." },
            { word: "caducité", score: 100, feedback: "Parfait ! 'Caducité' est l'état de ce qui est tombé en désuétude, usé par le temps et devenu dangereux." }
        ],
        bestAnswer: "caducité",
        explanation: "La 'vétusté' comme 'caducité' désigne un état d'usure tel que les installations ne répondent plus aux normes et présentent des risques."
    },
    {
        id: "fr-320",
        sentence: "La viabilité économique du projet fut longuement débattue.",
        targetWord: "viabilité",
        targetWordIndex: 4,
        options: [
            { word: "faisabilité", score: 90, feedback: "'Faisabilité' est la possibilité de réalisation." },
            { word: "rentabilité", score: 95, feedback: "'Rentabilité' est la capacité à générer des profits." },
            { word: "durabilité", score: 85, feedback: "'Durabilité' est la capacité à durer." },
            { word: "pérennité", score: 100, feedback: "Parfait ! 'Pérennité' est la capacité à se maintenir durablement, sur le long terme." }
        ],
        bestAnswer: "pérennité",
        explanation: "La 'viabilité' comme 'pérennité' économique est la capacité d'un projet à assurer sa propre survie et développement dans la durée."
    },
    {
        id: "fr-321",
        sentence: "La vicariance cognitive permet au cerveau de compenser certaines lésions.",
        targetWord: "vicariance",
        targetWordIndex: 4,
        options: [
            { word: "compensation", score: 90, feedback: "'Compensation' est l'action de compenser, de contrebalancer." },
            { word: "substitution", score: 95, feedback: "'Substitution' est le remplacement d'une fonction par une autre." },
            { word: "plasticité", score: 100, feedback: "Parfait ! 'Plasticité' cérébrale est la capacité du cerveau à se réorganiser en créant de nouvelles connexions." },
            { word: "redondance", score: 85, feedback: "'Redondance' est la présence d'éléments en double." }
        ],
        bestAnswer: "plasticité",
        explanation: "La 'vicariance' comme 'plasticité' cérébrale est la propriété du système nerveux de réaffecter des zones à de nouvelles fonctions après une lésion."
    },
    {
        id: "fr-322",
        sentence: "La vigueur de sa protestation surprit les autorités.",
        targetWord: "vigueur",
        targetWordIndex: 4,
        options: [
            { word: "énergie", score: 85, feedback: "'Énergie' est la force, la puissance." },
            { word: "véhémence", score: 95, feedback: "'Véhémence' est la violence, l'intensité passionnée." },
            { word: "ardeur", score: 90, feedback: "'Ardeur' est la fougue, l'enthousiasme." },
            { word: "tempétuosité", score: 100, feedback: "Parfait ! 'Tempétuosité' est un caractère violent et tumultueux, comme une tempête." }
        ],
        bestAnswer: "tempétuosité",
        explanation: "La 'vigueur' comme 'tempétuosité' d'une protestation est une force explosive et désordonnée, semblable à un phénomène naturel déchaîné."
    },
    {
        id: "fr-323",
        sentence: "La vilenie de son acte le rendit indigne de toute confiance.",
        targetWord: "vilenie",
        targetWordIndex: 4,
        options: [
            { word: "bassesse", score: 95, feedback: "'Bassesse' est la lâcheté, le manque de noblesse." },
            { word: "infamie", score: 100, feedback: "Parfait ! 'Infamie' est la honte publique, le déshonneur extrême." },
            { word: "méchanceté", score: 90, feedback: "'Méchanceté' est la disposition à faire le mal." },
            { word: "scélératesse", score: 85, feedback: "'Scélératesse' est la perversité, la méchanceté criminelle." }
        ],
        bestAnswer: "infamie",
        explanation: "La 'vilenie' comme 'infamie' est un acte si ignoble qu'il entraîne la réprobation générale et une perte définitive de considération."
    },
    {
        id: "fr-324",
        sentence: "La virulence de la souche bactérienne inquiétait les épidémiologistes.",
        targetWord: "virulence",
        targetWordIndex: 4,
        options: [
            { word: "agressivité", score: 90, feedback: "'Agressivité' est la tendance à attaquer, à nuire." },
            { word: "pathogénicité", score: 95, feedback: "'Pathogénicité' est la capacité à provoquer une maladie." },
            { word: "contagiosité", score: 85, feedback: "'Contagiosité' est la facilité de transmission." },
            { word: "léthalité", score: 100, feedback: "Parfait ! 'Légalité' est la capacité à causer la mort, le taux de mortalité." }
        ],
        bestAnswer: "léthalité",
        explanation: "La 'virulence' comme 'légalité' d'une souche bactérienne mesure sa dangerosité en termes de mortalité, au-delà de sa simple contagiosité."
    },
    {
        id: "fr-325",
        sentence: "La viscéralité de sa réaction trahissait une blessure ancienne.",
        targetWord: "viscéralité",
        targetWordIndex: 4,
        options: [
            { word: "intensité", score: 85, feedback: "'Intensité' est la force, la puissance." },
            { word: "profondeur", score: 90, feedback: "'Profondeur' est le caractère profond, intime." },
            { word: "primitivité", score: 95, feedback: "'Primitivité' est le caractère primaire, élémentaire." },
            { word: "entrailles", score: 100, feedback: "Parfait ! 'Entrailles' (figuré) désigne une émotion qui semble venir des profondeurs organiques, viscérale." }
        ],
        bestAnswer: "entrailles",
        explanation: "La 'viscéralité' comme réaction des 'entrailles' est une réponse émotionnelle brute, non médiatisée par la raison, émanant des instincts les plus archaïques."
    },
    {
        id: "fr-326",
        sentence: "La viscosité du miel frais rendait son écoulement lent et épais.",
        targetWord: "viscosité",
        targetWordIndex: 4,
        options: [
            { word: "épaisseur", score: 90, feedback: "'Épaisseur' est la consistance dense." },
            { word: "consistance", score: 85, feedback: "'Consistance' est la texture, la fermeté." },
            { word: "ténacité", score: 95, feedback: "'Ténacité' (des fluides) est la résistance à l'écoulement." },
            { word: "glu", score: 100, feedback: "Parfait ! 'Glu' est une substance collante et épaisse, image très concrète." }
        ],
        bestAnswer: "glu",
        explanation: "La 'viscosité' comme 'glu' décrit une consistance à la fois épaisse et adhérente, qui retient et ralentit le mouvement."
    },
    {
        id: "fr-327",
        sentence: "La visualisation des données complexes fut facilitée par un graphique approprié.",
        targetWord: "visualisation",
        targetWordIndex: 4,
        options: [
            { word: "représentation", score: 90, feedback: "'Représentation' est l'action de représenter, de figurer." },
            { word: "illustration", score: 85, feedback: "'Illustration' est l'action d'illustrer, d'éclairer." },
            { word: "figuration", score: 95, feedback: "'Figuration' est le fait de donner une forme visible." },
            { word: "iconisation", score: 100, feedback: "Parfait ! 'Iconisation' est la transformation en icône, en image symbolique et parlante." }
        ],
        bestAnswer: "iconisation",
        explanation: "La 'visualisation' comme 'iconisation' des données est leur conversion en une image synthétique et signifiante, permettant une compréhension intuitive."
    },
    {
        id: "fr-328",
        sentence: "La vitalité de ce quartier ancien contrastait avec son aspect décati.",
        targetWord: "vitalité",
        targetWordIndex: 4,
        options: [
            { word: "énergie", score: 85, feedback: "'Énergie' est la force, la vigueur." },
            { word: "animation", score: 90, feedback: "'Animation' est le mouvement, la vie." },
            { word: "dynamisme", score: 95, feedback: "'Dynamisme' est l'activité, l'entrain." },
            { word: "pulsation", score: 100, feedback: "Parfait ! 'Pulsation' est un battement rythmique, comme un cœur, signe de vie intense." }
        ],
        bestAnswer: "pulsation",
        explanation: "La 'vitalité' comme 'pulsation' urbaine est un rythme de vie palpable, qui bat au rythme des activités et des interactions sociales."
    },
    {
        id: "fr-329",
        sentence: "La vivacité de son esprit lui permettait de résoudre les problèmes rapidement.",
        targetWord: "vivacité",
        targetWordIndex: 4,
        options: [
            { word: "rapidité", score: 85, feedback: "'Rapidité' est la vitesse." },
            { word: "acuité", score: 90, feedback: "'Acuité' est la finesse, la pénétration." },
            { word: "promptitude", score: 95, feedback: "'Promptitude' est la rapidité de réaction." },
            { word: "sagacité", score: 100, feedback: "Parfait ! 'Sagacité' est la perspicacité, la finesse de jugement alliée à la rapidité." }
        ],
        bestAnswer: "sagacité",
        explanation: "La 'vivacité' comme 'sagacité' d'esprit est une intelligence à la fois rapide et pénétrante, qui discerne immédiatement les solutions."
    },
    {
        id: "fr-330",
        sentence: "La volatilité des opinions publiques rendait tout pronostic hasardeux.",
        targetWord: "volatilité",
        targetWordIndex: 4,
        options: [
            { word: "instabilité", score: 90, feedback: "'Instabilité' est le manque de stabilité." },
            { word: "versatilité", score: 95, feedback: "'Versatilité' est le changement fréquent." },
            { word: "fluctuation", score: 85, feedback: "'Fluctuation' est la variation, l'oscillation." },
            { word: "évanescence", score: 100, feedback: "Parfait ! 'Évanescence' est le caractère de ce qui s'évapore rapidement, comme une fragrance." }
        ],
        bestAnswer: "évanescence",
        explanation: "La 'volatilité' comme 'évanescence' des opinions est leur tendance à se dissiper et à se transformer avec une rapidité déconcertante."
    },
    {
        id: "fr-331",
        sentence: "La volupté de ce sofa moelleux invitait à la détente.",
        targetWord: "volupté",
        targetWordIndex: 4,
        options: [
            { word: "délicatesse", score: 85, feedback: "'Délicatesse' est la finesse, la douceur." },
            { word: "luxe", score: 90, feedback: "'Luxe' est le superflu agréable, le raffinement." },
            { word: "confort", score: 95, feedback: "'Confort' est le bien-être matériel." },
            { word: "volupté", score: 0, feedback: "C'est le mot à remplacer." },
            { word: "sybaritisme", score: 100, feedback: "Parfait ! 'Sybaritisme' est la recherche du plaisir sensuel et du luxe, du nom de la ville de Sybaris." }
        ],
        bestAnswer: "sybaritisme",
        explanation: "La 'volupté' comme 'sybaritisme' désigne un hédonisme raffiné qui recherche le plaisir dans la sensation physique immédiate et le confort extrême."
    },
    {
        id: "fr-332",
        sentence: "La voracité des médias pour ce scandale était sans limite.",
        targetWord: "voracité",
        targetWordIndex: 4,
        options: [
            { word: "avidité", score: 90, feedback: "'Avidité' est un désir ardent, insatiable." },
            { word: "rapacité", score: 95, feedback: "'Rapacité' est la cupidité, l'avidité à s'emparer." },
            { word: "boulimie", score: 100, feedback: "Parfait ! 'Boulimie' médiatique est un appétit compulsif pour l'information, une consommation insatiable." },
            { word: "gloutonnerie", score: 85, feedback: "'Gloutonnerie' est l'excès dans le manger, transposé ici." }
        ],
        bestAnswer: "boulimie",
        explanation: "La 'voracité' comme 'boulimie' médiatique est une consommation frénétique et insatiable d'informations, souvent au détriment de l'analyse."
    },
    {
        id: "fr-333",
        sentence: "La vulgarité de ses manières le disqualifiait pour ce poste de représentation.",
        targetWord: "vulgarité",
        targetWordIndex: 4,
        options: [
            { word: "grossièreté", score: 90, feedback: "'Grossièreté' est le manque de délicatesse, de raffinement." },
            { word: "rusticité", score: 85, feedback: "'Rusticité' est le caractère rustique, campagnard." },
            { word: "trivialité", score: 95, feedback: "'Trivialité' est le caractère commun, bas, sans élévation." },
            { word: "plébéianisme", score: 100, feedback: "Parfait ! 'Plébéianisme' (péjoratif) désigne les manières et goûts du peuple, considérés comme grossiers par les élites." }
        ],
        bestAnswer: "plébéianisme",
        explanation: "La 'vulgarité' comme 'plébéianisme' est un ensemble de comportements et de goûts perçus comme caractéristiques des classes populaires, et donc indignes d'un poste élevé."
    },
    {
        id: "fr-334",
        sentence: "La vulnérabilité de l'écosystème face au changement climatique est alarmante.",
        targetWord: "vulnérabilité",
        targetWordIndex: 4,
        options: [
            { word: "fragilité", score: 90, feedback: "'Fragilité' est la qualité de ce qui est fragile, délicat." },
            { word: "sensibilité", score: 85, feedback: "'Sensibilité' est la capacité à être affecté." },
            { word: "précarité", score: 95, feedback: "'Précarité' est l'état de ce qui est précaire, instable." },
            { word: "irrémédiabilité", score: 100, feedback: "Parfait ! 'Irrémediabilité' est le caractère de ce qui ne peut être réparé ou restauré, une vulnérabilité définitive." }
        ],
        bestAnswer: "irrémédiabilité",
        explanation: "La 'vulnérabilité' comme 'irrémediabilité' d'un écosystème signifie que les dommages subis sont irréversibles, condamnant le système à une dégradation sans retour."
    },
    {
        id: "fr-335",
        sentence: "La xénophobie latente dans certaines franges de la population inquiétait les autorités.",
        targetWord: "xénophobie",
        targetWordIndex: 4,
        options: [
            { word: "hostilité", score: 85, feedback: "'Hostilité envers les étrangers' est plus générale." },
            { word: "rejet", score: 90, feedback: "'Rejet' est le refus, l'exclusion." },
            { word: "racisme", score: 95, feedback: "'Racisme' est une doctrine ou attitude de supériorité raciale." },
            { word: "allophobie", score: 100, feedback: "Parfait ! 'Allophobie' est la peur ou l'aversion envers ce qui est différent, envers l'autre." }
        ],
        bestAnswer: "allophobie",
        explanation: "La 'xénophobie' comme 'allophobie' est une peur irrationnelle de l'altérité, qui peut se manifester par des attitudes de rejet et d'agression."
    },
    {
        id: "fr-336",
        sentence: "La zénitude qu'il affichait en toutes circonstances énervait prodigieusement ses collègues.",
        targetWord: "zénitude",
        targetWordIndex: 4,
        options: [
            { word: "calme", score: 85, feedback: "'Calme' est l'absence d'agitation." },
            { word: "sérénité", score: 90, feedback: "'Sérénité' est la paix de l'âme." },
            { word: "impassibilité", score: 95, feedback: "'Impassibilité' est l'absence d'émotion apparente." },
            { word: "ataraxie", score: 100, feedback: "Parfait ! 'Ataraxie' (philosophie stoïcienne) est l'absence de troubles de l'âme, souvent considérée comme un idéal." }
        ],
        bestAnswer: "ataraxie",
        explanation: "La 'zénitude' comme 'ataraxie' est un détachement philosophique face aux événements, pouvant être perçu comme de l'indifférence ou de la supériorité."
    },
    {
        id: "fr-337",
        sentence: "Le zèle excessif du nouvel employé finissait par agacer ses pairs.",
        targetWord: "zèle",
        targetWordIndex: 5,
        options: [
            { word: "ardeur", score: 90, feedback: "'Ardeur' est la fougue, l'enthousiasme." },
            { word: "empressement", score: 95, feedback: "'Empressement' est un zèle actif et démonstratif." },
            { word: "dévouement", score: 85, feedback: "'Dévouement' est le sacrifice, l'abnégation." },
            { word: "béatitude", score: 100, feedback: "Parfait ! 'Béatitude' (ironique) est un état de satisfaction extrême, ici dans l'exécution zélée des tâches, presque mystique." }
        ],
        bestAnswer: "béatitude",
        explanation: "Le 'zèle' comme 'béatitude' professionnelle est un enthousiasme si intense et manifeste qu'il en devient suspect ou irritant pour l'entourage."
    },
    {
        id: "fr-338",
        sentence: "L'aberration de son raisonnement sautait aux yeux des experts.",
        targetWord: "aberration",
        targetWordIndex: 4,
        options: [
            { word: "erreur", score: 85, feedback: "'Erreur' est une faute, une inexactitude." },
            { word: "absurdité", score: 90, feedback: "'Absurdité' est le caractère absurde, contraire à la raison." },
            { word: "anomalie", score: 95, feedback: "'Anomalie' est une irrégularité, une déviation." },
            { word: "paralogisme", score: 100, feedback: "Parfait ! 'Paralogisme' est un raisonnement faux mais ayant l'apparence de la vérité, souvent involontaire." }
        ],
        bestAnswer: "paralogisme",
        explanation: "Une 'aberration' comme 'paralogisme' est un raisonnement qui viole les règles de la logique tout en paraissant cohérent, induisant en erreur."
    },
    {
        id: "fr-339",
        sentence: "L'abnégation des soignants durant la pandémie fut universellement saluée.",
        targetWord: "abnégation",
        targetWordIndex: 4,
        options: [
            { word: "dévouement", score: 90, feedback: "'Dévouement' est le sacrifice, l'attachement désintéressé." },
            { word: "altruisme", score: 95, feedback: "'Altruisme' est le souci désintéressé du bien d'autrui." },
            { word: "abnégation", score: 0, feedback: "C'est le mot à remplacer." },
            { word: "oblativité", score: 100, feedback: "Parfait ! 'Oblativité' (psychologie) est la tendance à se donner aux autres, à faire don de soi." },
            { word: "sacrifice", score: 85, feedback: "'Sacrifice' est l'action de se sacrifier, de renoncer à quelque chose." }
        ],
        bestAnswer: "oblativité",
        explanation: "L''abnégation' comme 'oblativité' est une disposition à se donner totalement à autrui, faisant du don de soi une vocation."
    },
    {
        id: "fr-340",
        sentence: "L'abondance de la récolte cette année permit de compenser les pertes précédentes.",
        targetWord: "abondance",
        targetWordIndex: 4,
        options: [
            { word: "profusion", score: 95, feedback: "'Profusion' est une grande abondance, une surabondance." },
            { word: "copieuse", score: 90, feedback: "'Copieuse' est abondante, généreuse." },
            { word: "exubérance", score: 85, feedback: "'Exubérance' est une vitalité débordante, ici appliquée aux végétaux." },
            { word: "cornucopia", score: 100, feedback: "Parfait ! 'Cornucopia' (mythologie) est la corne d'abondance, symbole d'une profusion inépuisable." }
        ],
        bestAnswer: "cornucopia",
        explanation: "L''abondance' comme 'cornucopia' est une profusion si généreuse qu'elle évoque le mythe de la corne d'abondance, source intarissable de richesses."
    },
    {
        id: "fr-341",
        sentence: "L'aberration climatique de cette saison dérouta les météorologues.",
        targetWord: "aberration",
        targetWordIndex: 4,
        options: [
            { word: "anomalie", score: 90, feedback: "'Anomalie' est une irrégularité, une déviation." },
            { word: "irrégularité", score: 85, feedback: "'Irégularité' est le manque de régularité." },
            { word: "déviation", score: 95, feedback: "'Déviation' est un écart par rapport à la norme." },
            { word: "singularité", score: 100, feedback: "Parfait ! 'Singularité' est un événement unique, exceptionnel, qui sort radicalement des modèles établis." }
        ],
        bestAnswer: "singularité",
        explanation: "Une 'aberration' comme 'singularité' climatique est un événement tellement hors norme qu'il semble défier les lois de la météorologie."
    },
    {
        id: "fr-342",
        sentence: "L'abjection de son comportement lui aliéna toute sympathie.",
        targetWord: "abjection",
        targetWordIndex: 4,
        options: [
            { word: "bassesse", score: 95, feedback: "'Bassesse' est la lâcheté, le manque de dignité." },
            { word: "vilenie", score: 90, feedback: "'Vilenie' est la méchanceté, la cruauté." },
            { word: "ignominie", score: 100, feedback: "Parfait ! 'Ignominie' est le déshonneur public, la honte extrême." },
            { word: "turpitude", score: 85, feedback: "'Turpitude' est la dépravation morale." }
        ],
        bestAnswer: "ignominie",
        explanation: "L''abjection' comme 'ignominie' est une dégradation morale si profonde qu'elle provoque le mépris et le rejet de la communauté."
    },
    {
        id: "fr-343",
        sentence: "L'abnégation maternelle est souvent citée comme un exemple de don de soi.",
        targetWord: "abnégation",
        targetWordIndex: 4,
        options: [
            { word: "sacrifice", score: 90, feedback: "'Sacrifice' est l'action de se sacrifier." },
            { word: "dévouement", score: 95, feedback: "'Dévouement' est l'attachement désintéressé." },
            { word: "abnégation", score: 0, feedback: "C'est le mot à remplacer." },
            { word: "maternage", score: 100, feedback: "Parfait ! 'Maternage' (anthropologie) désigne l'ensemble des comportements de soin et de protection de la mère envers son enfant." },
            { word: "altruisme", score: 85, feedback: "'Altruisme' est le souci désintéressé du bien d'autrui." }
        ],
        bestAnswer: "maternage",
        explanation: "L''abnégation' comme 'maternage' est un ensemble de comportements biologiques et culturels par lesquels la mère assure la survie et le développement de l'enfant."
    },
    {
        id: "fr-344",
        sentence: "L'absence de réaction de sa part était plus inquiétante qu'une colère ouverte.",
        targetWord: "absence",
        targetWordIndex: 4,
        options: [
            { word: "mutisme", score: 95, feedback: "'Mutisme' est le refus de parler, le silence." },
            { word: "passivité", score: 90, feedback: "'Passivité' est l'absence d'action, de réaction." },
            { word: "indifférence", score: 85, feedback: "'Indifférence' est le manque d'intérêt, de sentiment." },
            { word: "aphasie", score: 100, feedback: "Parfait ! 'Aphasie' (neurologie) est la perte de la capacité à communiquer, ici transposée au plan émotionnel." }
        ],
        bestAnswer: "aphasie",
        explanation: "L''absence' de réaction comme 'aphasie' émotionnelle est une incapacité à exprimer ou même à éprouver des émotions, signe d'un profond trouble."
    },
    {
        id: "fr-345",
        sentence: "L'abstraction de ses propos les rendait difficiles à saisir pour le profane.",
        targetWord: "abstraction",
        targetWordIndex: 4,
        options: [
            { word: "généralité", score: 85, feedback: "'Généralité' est le caractère général, vague." },
            { word: "théoricité", score: 90, feedback: "'Théoricité' est le caractère théorique, spéculatif." },
            { word: "conceptualité", score: 95, feedback: "'Conceptualité' est le travail sur les concepts." },
            { word: "idéalité", score: 100, feedback: "Parfait ! 'Idéalité' (philosophie) est le caractère de ce qui appartient au monde des idées, non au monde concret." }
        ],
        bestAnswer: "idéalité",
        explanation: "L''abstraction' comme 'idéalité' est une pensée qui évolue dans le registre des idées pures, coupée des réalités sensibles."
    },
    {
        id: "fr-346",
        sentence: "La dérive du navire, d'abord imperceptible, devint peu à peu une déviation alarmante de sa route.",
        targetWord: "imperceptible",
        targetWordIndex: 6,
        options: [
            { word: "insidieuse", score: 100, feedback: "Parfait ! 'Insidieuse' agit de façon cachée et progressive, sans qu'on s'en aperçoive au début, ce qui correspond à la logique de la phrase." },
            { word: "ténue", score: 85, feedback: "'Ténue' est faible, mais décrit moins bien un processus de début qui échappe à la perception." },
            { word: "infime", score: 80, feedback: "'Infime' est extrêmement petite, ce qui est juste, mais n'implique pas la notion de progression sournoise." },
            { word: "larvée", score: 95, feedback: "'Larvée' (comme une maladie) existe à l'état latent avant de se déclarer, très proche et pertinent." }
        ],
        bestAnswer: "insidieuse",
        explanation: "Une dérive 'insidieuse' commence de manière si discrète et progressive qu'elle échappe à la vigilance, pour ne se révéler que lorsqu'elle est déjà devenue significative."
    },
    {
        id: "fr-347",
        sentence: "Son accueil fut d'une affabilité si étudiée qu'elle en paraissait presque factice.",
        targetWord: "affabilité",
        targetWordIndex: 7,
        options: [
            { word: "cordialité", score: 80, feedback: "'Cordialité' est une chaleur sincère, ce qui est contraire à l'idée de 'étudiée' et 'factice'." },
            { word: "urbanité", score: 95, feedback: "'Urbanité' est une politesse raffinée et mondaine, qui peut être de convention, donc très proche." },
            { word: "complaisance", score: 90, feedback: "'Complaisance' est l'empressement à plaire, parfois exagéré, convient bien." },
            { word: "obséquiosité", score: 100, feedback: "Parfait ! 'Obséquiosité' est une politesse empressée et servile, manifestement exagérée et donc peu sincère." }
        ],
        bestAnswer: "obséquiosité",
        explanation: "Une 'obséquiosité' est une démonstration excessive de politesse et de déférence, souvent perçue comme servile et manquant d'authenticité, ce qui correspond à l'impression de factice."
    },
    {
        id: "fr-348",
        sentence: "Le témoignage du seul survivant fut d'une importance capitale pour reconstituer les faits.",
        targetWord: "capitale",
        targetWordIndex: 10,
        options: [
            { word: "décisive", score: 95, feedback: "'Décisive' a déterminé le cours de l'enquête, excellent." },
            { word: "primordiale", score: 90, feedback: "'Primordiale' est de premier ordre, essentielle." },
            { word: "suprême", score: 85, feedback: "'Suprême' est la plus haute, mais un peu solennel." },
            { word: "archimédienne", score: 100, feedback: "Parfait ! 'Archimédienne' (comme le point d'Archimède) désigne l'élément unique à partir duquel tout peut être soulevé ou compris." }
        ],
        bestAnswer: "archimédienne",
        explanation: "Une importance 'archimédienne' est celle d'un point de levier unique et essentiel permettant de comprendre ou de résoudre l'ensemble d'une situation complexe."
    },
    {
        id: "fr-349",
        sentence: "La lumière de la bougie projetait des ombres mouvantes et difformes sur les murs de la cave.",
        targetWord: "difformes",
        targetWordIndex: 11,
        options: [
            { word: "informes", score: 90, feedback: "'Informes' sans forme définie, correct." },
            { word: "monstrueuses", score: 95, feedback: "'Monstrueuses' évoque des formes horribles et contre-nature, très fort." },
            { word: "chaotiques", score: 85, feedback: "'Chaotiques' désordonnées, sans ordre apparent." },
            { word: "grotiques", score: 100, feedback: "Parfait ! 'Grotiques' (néologisme évoquant les grottes) suggère des formes tortueuses, irrégulières et inquiétantes propres aux cavernes." }
        ],
        bestAnswer: "grotiques",
        explanation: "Des ombres 'grotiques' évoquent les formes étranges et tourmentées que l'on pourrait imaginer dans le clair-obscur angoissant d'une grotte ou d'une cave."
    },
    {
        id: "fr-350",
        sentence: "Son argumentation, bien que structurée, péchait par une généralisation excessive.",
        targetWord: "péchait",
        targetWordIndex: 8,
        options: [
            { word: "faiblissait", score: 80, feedback: "'Faiblissait' perdait de sa force, mais moins spécifique." },
            { word: "défaillait", score: 90, feedback: "'Défaillait' présentait une faille, une insuffisance." },
            { word: "pâtissait", score: 95, feedback: "'Pâtissait' (figuré) souffrait de, était entachée par, littéraire et juste." },
            { word: "pénalisait", score: 100, feedback: "Parfait ! 'Était pénalisée par' met l'accent sur le handicap majeur que constitue cette généralisation dans l'économie de l'argument." }
        ],
        bestAnswer: "pénalisait",
        explanation: "Une argumentation 'est pénalisée par' un défaut lorsque ce dernier constitue un obstacle rédhibitoire à sa validité ou sa force persuasive, en en faisant une faiblogique majeure."
    },
    {
        id: "fr-351",
        sentence: "L'atmosphère de la vieille bibliothèque était feutrée, propice à la concentration.",
        targetWord: "feutrée",
        targetWordIndex: 6,
        options: [
            { word: "étouffée", score: 85, feedback: "'Étouffée' assourdie, mais avec une connotation négative d'oppression." },
            { word: "sourde", score: 90, feedback: "'Sourde' où les sons sont amortis, très proche." },
            { word: "cotonneuse", score: 95, feedback: "'Cotonneuse' évoque un silence doux et enveloppant comme du coton, image très juste." },
            { word: "hypogée", score: 100, feedback: "Parfait ! 'Hypogée' (souterrain) évoque le silence absolu et le recueillement des espaces enfouis, comme une tombe ou une crypte, ici de manière positive." }
        ],
        bestAnswer: "hypogée",
        explanation: "Une atmosphère 'hypogée' possède le silence sépulcral, la quiétude et la coupure du monde extérieur caractéristiques des lieux souterrains, idéale pour l'étude."
    },
    {
        id: "fr-352",
        sentence: "La nouvelle politique agricole fut accueillie avec une défiance marquée par le syndicat.",
        targetWord: "défiance",
        targetWordIndex: 9,
        options: [
            { word: "méfiance", score: 85, feedback: "'Méfiance' est une suspicion, une crainte de tromperie, synonyme proche." },
            { word: "incrédulité", score: 90, feedback: "'Incrédulité' est le refus de croire, souvent face à quelque chose d'inattendu." },
            { word: "réprobation", score: 95, feedback: "'Réprobation' est une désapprobation forte, souvent morale." },
            { word: "hostilité", score: 100, feedback: "Parfait ! 'Hostilité' est une opposition active et agressive, plus forte qu'une simple méfiance." }
        ],
        bestAnswer: "hostilité",
        explanation: "Une 'hostilité' est une attitude d'opposition déclarée et souvent combative, dépassant la simple suspicion pour exprimer un rejet franc."
    },
    {
        id: "fr-353",
        sentence: "Le peintre capta avec une justesse remarquable la lumière particulière de l'heure bleue.",
        targetWord: "justesse",
        targetWordIndex: 6,
        options: [
            { word: "fidélité", score: 90, feedback: "'Fidélité' est la conformité à l'original, très bon." },
            { word: "exactitude", score: 85, feedback: "'Exactitude' est la qualité de ce qui est exact, précis." },
            { word: "pertinence", score: 95, feedback: "'Pertinence' est la qualité de ce qui est adapté et convient parfaitement au sujet." },
            { word: "acuité", score: 100, feedback: "Parfait ! 'Acuité' (de la perception) est une finesse et une précision extrêmes dans la saisie d'une nuance subtile." }
        ],
        bestAnswer: "acuité",
        explanation: "Une 'acuité' dans la captation artistique désigne une perception et une restitution d'une extrême finesse, parvenant à saisir l'essence même d'un phénomène insaisissable comme une lumière."
    },
    {
        id: "fr-354",
        sentence: "Les relations entre les deux départements étaient entachées d'une rivalité stérile.",
        targetWord: "stérile",
        targetWordIndex: 12,
        options: [
            { word: "inutile", score: 85, feedback: "'Inutile' qui ne sert à rien, mais moins fort." },
            { word: "stérile", score: 0, feedback: "C'est le mot à remplacer." },
            { word: "inféconde", score: 95, feedback: "'Inféconde' (littéraire) qui ne produit rien, synonyme élégant." },
            { word: "vaine", score: 90, feedback: "'Vaine' sans effet, sans résultat." },
            { word: "bysantinisme", score: 100, feedback: "Parfait ! 'Byzantinisme' désigne des querelles oiseuses et interminables sur des points de détail, sans issue productive." }
        ],
        bestAnswer: "bysantinisme",
        explanation: "Un 'bysantinisme' est une dispute ou une rivalité qui se perd dans des arguties sans fin et sans portée réelle, épuisant les forces sans aucun profit."
    },
    {
        id: "fr-355",
        sentence: "Son style d'écriture était caractérisé par une concision qui allait à l'essentiel.",
        targetWord: "concision",
        targetWordIndex: 8,
        options: [
            { word: "brièveté", score: 85, feedback: "'Brièveté' est la courte durée ou longueur, mais pas forcément qualitative." },
            { word: "sobriété", score: 90, feedback: "'Sobriété' est la retenue, l'absence d'ornements inutiles." },
            { word: "laconisme", score: 95, feedback: "'Laconisme' est une expression qui use de très peu de mots, concis et parfois énigmatique." },
            { word: "parcimonie", score: 100, feedback: "Parfait ! 'Parcimonie' (stylistique) est l'économie extrême des moyens verbaux pour un maximum d'effet, éliminant tout superflu." }
        ],
        bestAnswer: "parcimonie",
        explanation: "La 'parcimonie' stylistique est l'art d'exprimer beaucoup avec très peu, suivant le principe du rasoir d'Occam : la solution la plus simple est souvent la meilleure."
    },
    {
        id: "fr-356",
        sentence: "Le vieux rempart présentait une brèche béante par laquelle l'ennemi avait forcé l'entrée.",
        targetWord: "béante",
        targetWordIndex: 8,
        options: [
            { word: "large", score: 80, feedback: "'Large' décrit la dimension, mais sans l'idée de vide menaçant." },
            { word: "grande", score: 75, feedback: "'Grande' est très général." },
            { word: "gouffre", score: 100, feedback: "Parfait ! 'En forme de gouffre' évoque une ouverture profonde, sombre et inquiétante, comme un abîme dans la muraille." },
            { word: "caverneuse", score: 95, feedback: "'Caverneuse' suggère une ouverture large et profonde comme une caverne, image forte." }
        ],
        bestAnswer: "gouffre",
        explanation: "Une brèche 'en forme de gouffre' est une rupture si vaste et profonde qu'elle semble ouvrir sur le néant, symbolisant la vulnérabilité totale de la forteresse."
    },
    {
        id: "fr-357",
        sentence: "La justesse de son intuition se vérifia de manière éclatante par la suite.",
        targetWord: "éclatante",
        targetWordIndex: 11,
        options: [
            { word: "manifeste", score: 90, feedback: "'Manifeste' évidente, claire." },
            { word: "patente", score: 85, feedback: "'Patente' évidente et incontestable." },
            { word: "fulgurante", score: 95, feedback: "'Fulgurante' comme l'éclair, soudaine et brillante." },
            { word: "solaire", score: 100, feedback: "Parfait ! 'Solaire' d'une clarté et d'une évidence absolues, comme la lumière du soleil qui ne laisse aucune place à l'ombre du doute." }
        ],
        bestAnswer: "solaire",
        explanation: "Une vérification 'solaire' est d'une évidence si lumineuse et incontestable qu'elle dissipe instantanément toute obscurité ou scepticisme."
    },
    {
        id: "fr-358",
        sentence: "Les fondations du projet semblaient solides, mais reposaient sur des financements aléatoires.",
        targetWord: "aléatoires",
        targetWordIndex: 13,
        options: [
            { word: "incertains", score: 90, feedback: "'Incertains' non assurés, mais moins technique." },
            { word: "hasardeux", score: 95, feedback: "'Hasardeux' dépendant du hasard, risqué." },
            { word: "contingents", score: 85, feedback: "'Contingents' pourraient ne pas être, mais terme philosophique." },
            { word: "erratiques", score: 100, feedback: "Parfait ! 'Erratiques' sont imprévisibles, irréguliers et inconstants, comme le parcours d'un astre erratique." }
        ],
        bestAnswer: "erratiques",
        explanation: "Des financements 'erratiques' sont par nature instables et imprévisibles, rendant toute planification à long terme périlleuse, à l'image d'une trajectoire sans loi."
    },
    {
        id: "fr-359",
        sentence: "Il fit preuve d'une constance à toute épreuve dans son soutien, malgré les difficultés.",
        targetWord: "constance",
        targetWordIndex: 6,
        options: [
            { word: "fidélité", score: 90, feedback: "'Fidélité' est la loyauté, l'attachement constant." },
            { word: "persévérance", score: 95, feedback: "'Persévérance' est la continuation de l'effort malgré les obstacles." },
            { word: "ténacité", score: 85, feedback: "'Ténacité' s'accroche avec obstination." },
            { word: "pérennité", score: 100, feedback: "Parfait ! 'Pérennité' est la qualité de ce qui dure indéfiniment, une constance qui défie le temps et les épreuves." }
        ],
        bestAnswer: "pérennité",
        explanation: "Une 'pérennité' dans le soutien est un engagement inaltérable et durable, qui persiste aussi longtemps que nécessaire, voire indéfiniment."
    },
    {
        id: "fr-360",
        sentence: "La saveur du plat était subtile, un équilibre délicat d'épices et d'herbes.",
        targetWord: "subtile",
        targetWordIndex: 6,
        options: [
            { word: "fine", score: 85, feedback: "'Fine' délicate, difficile à percevoir." },
            { word: "complexe", score: 90, feedback: "'Complexe' composée de plusieurs notes, mais pas nécessairement subtile." },
            { word: "nuancée", score: 95, feedback: "'Nuancée' présente des variations légères et délicates." },
            { word: "évanescente", score: 100, feedback: "Parfait ! 'Évanescente' est si légère et fugace qu'elle semble s'échapper dès qu'on la perçoit, défiant l'analyse." }
        ],
        bestAnswer: "évanescente",
        explanation: "Une saveur 'évanescente' est une sensation gustative à peine saisissable, qui se dérobe à la perception pour ne laisser qu'une impression subtile et mémorable."
    },
    {
        id: "fr-361",
        sentence: "L'argument avancé n'était qu'un leurre destiné à détourner l'attention du vrai problème.",
        targetWord: "leurre",
        targetWordIndex: 8,
        options: [
            { word: "piège", score: 90, feedback: "'Piège' est destiné à prendre au piège, très proche." },
            { word: "feinte", score: 95, feedback: "'Feinte' est une manœuvre pour tromper l'adversaire." },
            { word: "diversion", score: 85, feedback: "'Diversion' détourne l'attention, mais est plus une tactique qu'un objet." },
            { word: "leucochroïque", score: 100, feedback: "Parfait ! 'Leucochroïque' (rare, qui a l'apparence de la blancheur/innocence) désigne un argument qui se pare des apparences de la vérité pour mieux tromper." }
        ],
        bestAnswer: "leucochroïque",
        explanation: "Un argument 'leucochroïque' utilise une fausse clarté ou une apparente innocence pour servir d'appât et masquer une intention manipulatrice."
    },
    {
        id: "fr-362",
        sentence: "La cohésion de l'équipe, jadis exemplaire, montrait des signes évidents d'effritement.",
        targetWord: "effritement",
        targetWordIndex: 14,
        options: [
            { word: "désagrégation", score: 95, feedback: "'Désagrégation' est la séparation des parties d'un tout." },
            { word: "déliquescence", score: 100, feedback: "Parfait ! 'Déliquescence' est un processus de dissolution progressive et interne, comme un solide qui fond, image très forte pour un groupe." },
            { word: "affaiblissement", score: 85, feedback: "'Affaiblissement' perte de force, mais moins spécifique." },
            { word: "érosion", score: 90, feedback: "'Érosion' usure lente et continue, métaphore géologique juste." }
        ],
        bestAnswer: "déliquescence",
        explanation: "La 'déliquescence' d'un groupe est un pourrissement interne et progressif qui fait perdre sa solidité et sa forme, aboutissant à sa dissolution."
    },
    {
        id: "fr-363",
        sentence: "Sa réputation d'intégrité était si bien établie qu'elle faisait autorité en la matière.",
        targetWord: "autorité",
        targetWordIndex: 14,
        options: [
            { word: "référence", score: 95, feedback: "'Faisait référence' était la norme, le modèle." },
            { word: "foi", score: 85, feedback: "'Faisait foi' était considérée comme vraie et incontestable." },
            { word: "canon", score: 100, feedback: "Parfait ! 'Faisait canon' était érigée en règle absolue, en norme indépassable, comme un texte sacré." },
            { word: "loi", score: 90, feedback: "'Faisait loi' s'imposait à tous." }
        ],
        bestAnswer: "canon",
        explanation: "Une réputation qui 'fait canon' est tellement exemplaire qu'elle définit la norme d'excellence dans son domaine, servant de étalon invariable."
    },
    {
        id: "fr-364",
        sentence: "La propagation de l'idée dans la population fut d'une rapidité foudroyante.",
        targetWord: "foudroyante",
        targetWordIndex: 11,
        options: [
            { word: "fulgurante", score: 95, feedback: "'Fulgurante' rapide comme l'éclair, synonyme quasi exact." },
            { word: "instantanée", score: 85, feedback: "'Instantanée' immédiate, mais peut manquer la force de l'image." },
            { word: "expéditive", score: 80, feedback: "'Expéditive' réglée rapidement, moins pour une propagation." },
            { word: "météorique", score: 100, feedback: "Parfait ! 'Météorique' évoque la course brillante et ultra-rapide d'un météore dans le ciel, avec l'idée d'un impact soudain et visible par tous." }
        ],
        bestAnswer: "météorique",
        explanation: "Une propagation 'météorique' est extrêmement rapide, spectaculaire et frappe les esprits, à l'image d'un bolide traversant le ciel."
    },
    {
        id: "fr-365",
        sentence: "Le sens de son discours était à double fond, nécessitant une exégèse approfondie.",
        targetWord: "exégèse",
        targetWordIndex: 12,
        options: [
            { word: "analyse", score: 85, feedback: "'Analyse' est un examen méthodique, général." },
            { word: "interprétation", score: 90, feedback: "'Interprétation' est l'action d'expliquer, de donner un sens." },
            { word: "herméneutique", score: 100, feedback: "Parfait ! 'Herméneutique' est la science et l'art de l'interprétation des textes, surtout anciens ou sacrés, notion très précise." },
            { word: "déchiffrement", score: 95, feedback: "'Déchiffrement' décode un message crypté, très proche." }
        ],
        bestAnswer: "herméneutique",
        explanation: "L''herméneutique' est la discipline qui vise à découvrir le sens profond, souvent caché, d'un discours ou d'un texte, en dépassant le sens littéral."
    },
    {
        id: "fr-366",
        sentence: "La quiétude du lieu était seulement troublée par le murmure lointain d'un ruisseau.",
        targetWord: "troublée",
        targetWordIndex: 6,
        options: [
            { word: "altérée", score: 90, feedback: "'Altérée' modifiée, souvent en mal." },
            { word: "rompue", score: 85, feedback: "'Rompu' interrompue, cassée." },
            { word: "veloutée", score: 100, feedback: "Parfait ! 'Veloutée' (de manière oxymorique) est adoucie, rendue plus douce et plus profonde par une présence sonore minime, comme un velours sur le silence." },
            { word: "entamée", score: 95, feedback: "'Entamée' légèrement diminuée, ébréchée." }
        ],
        bestAnswer: "veloutée",
        explanation: "Un silence 'velouté' par un murmure est un silence qui n'est pas brisé, mais au contraire enrichi et rendu plus sensible par une présence sonore infime et douce."
    },
    {
        id: "fr-367",
        sentence: "Sa maîtrise de l'outil numérique était si complète qu'elle frisait la virtuosité.",
        targetWord: "frisait",
        targetWordIndex: 11,
        options: [
            { word: "tendait vers", score: 85, feedback: "'Tendait vers' s'approchait de, correct mais faible." },
            { word: "confinait à", score: 95, feedback: "'Confinait à' était à la limite de, presque identique à." },
            { word: "caressait", score: 100, feedback: "Parfait ! 'Caressait' (l'idée de) évoque un rapport intime et presque sensuel avec la limite, l'effleurant sans forcément la franchir." },
            { word: "jouxtait", score: 90, feedback: "'Jouxtait' était mitoyen de, image spatiale intéressante." }
        ],
        bestAnswer: "caressait",
        explanation: "Une maîtrise qui 'caresse la virtuosité' est d'une excellence telle qu'elle en touche les frontières, flirtant avec le génie sans peut-être totalement y entrer."
    },
    {
        id: "fr-368",
        sentence: "Les motifs de son acte demeuraient obscurs, enveloppés d'un mystère impénétrable.",
        targetWord: "impénétrable",
        targetWordIndex: 14,
        options: [
            { word: "insondable", score: 95, feedback: "'Insondable' qu'on ne peut sonder, dont on ne trouve pas le fond." },
            { word: "hermétique", score: 90, feedback: "'Hermétique' totalement fermé à la compréhension." },
            { word: "abscons", score: 85, feedback: "'Abscons' obscur et difficile d'accès." },
            { word: "abyssal", score: 100, feedback: "Parfait ! 'Abyssal' (comme les abysses) est d'une profondeur et d'une obscurité si grandes qu'elles interdisent toute exploration ou compréhension." }
        ],
        bestAnswer: "abyssal",
        explanation: "Un mystère 'abyssal' est plongé dans des profondeurs si grandes et si obscures qu'il semble échapper définitivement à la lumière de l'entendement."
    },
    {
        id: "fr-369",
        sentence: "La transition entre les deux mouvements de la symphonie était d'une fluidité parfaite.",
        targetWord: "fluidité",
        targetWordIndex: 12,
        options: [
            { word: "continuité", score: 90, feedback: "'Continuité' absence d'interruption." },
            { word: "souplesse", score: 85, feedback: "'Souplesse' flexibilité, facilité à passer de l'un à l'autre." },
            { word: "lissage", score: 95, feedback: "'Lissage' (technique) action de rendre lisse, sans aspérité." },
            { word: "glissement", score: 100, feedback: "Parfait ! 'Glissement' évoque un passage insensible et naturel, comme une pente douce, sans rupture perceptible." }
        ],
        bestAnswer: "glissement",
        explanation: "Une transition par 'glissement' est si habilement réalisée qu'elle est presque imperceptible, les deux parties s'enchâssant sans heurt."
    },
    {
        id: "fr-370",
        sentence: "L'ampleur des dégâts après le passage de l'ouragan était proprement apocalyptique.",
        targetWord: "apocalyptique",
        targetWordIndex: 12,
        options: [
            { word: "cataclysmique", score: 95, feedback: "'Cataclysmique' relatif à un cataclysme, bouleversement violent." },
            { word: "dévastateur", score: 90, feedback: "'Dévastateur' qui cause une dévastation." },
            { word: "titanesque", score: 85, feedback: "'Titanesque' de dimensions gigantesques, mais moins lié à la destruction." },
            { word: "eschatologique", score: 100, feedback: "Parfait ! 'Eschatologique' (théologie) relatif à la fin des temps, aux derniers jours, évoquant une destruction totale et définitive." }
        ],
        bestAnswer: "eschatologique",
        explanation: "Un désastre 'eschatologique' donne l'impression d'assister à la fin du monde, une destruction si radicale qu'elle semble annoncer la fin d'un cycle."
    },
    {
        id: "fr-371",
        sentence: "Son refus était muet mais éloquent, exprimé par un simple regard détourné.",
        targetWord: "éloquent",
        targetWordIndex: 6,
        options: [
            { word: "expressif", score: 90, feedback: "'Expressif' qui exprime bien, mais moins fort." },
            { word: "parlant", score: 95, feedback: "'Parlant' qui en dit long, très proche." },
            { word: "significatif", score: 85, feedback: "'Significatif' qui a un sens, qui signifie." },
            { word: "sémaphorique", score: 100, feedback: "Parfait ! 'Sémaphorique' (comme un sémaphore) transmet un message clair et codé par un signe non verbal, ici le regard." }
        ],
        bestAnswer: "sémaphorique",
        explanation: "Un refus 'sémaphorique' est communiqué par un signal non verbal parfaitement clair et compris de tous, aussi efficace que des mots."
    },
    {
        id: "fr-372",
        sentence: "La teneur du rapport était technique et aride, rebutante pour le non-initié.",
        targetWord: "aride",
        targetWordIndex: 9,
        options: [
            { word: "austère", score: 90, feedback: "'Austère' sévère, sans agrément." },
            { word: "rébarbative", score: 95, feedback: "'Réfarbative' rebute, décourage par son aspect rebutant." },
            { word: "desséchante", score: 100, feedback: "Parfait ! 'Desséchante' épuise l'esprit comme un terrain aride épuise la végétation, en extrayant toute saveur et tout intérêt." },
            { word: "abstraite", score: 85, feedback: "'Abstraite' détachée du concret, mais pas nécessairement rebutante." }
        ],
        bestAnswer: "desséchante",
        explanation: "Un texte 'desséchant' est si dépourvu de vie, de relief et d'attrait qu'il assèche l'intérêt du lecteur, le laissant sans ressource."
    },
    {
        id: "fr-373",
        sentence: "L'alliance entre ces deux factions, jadis inconcevable, scellait un rapprochement historique.",
        targetWord: "inconcevable",
        targetWordIndex: 10,
        options: [
            { word: "impensable", score: 90, feedback: "'Impossible à penser', synonyme direct." },
            { word: "inimaginable", score: 85, feedback: "'Inimaginable' qu'on ne peut imaginer." },
            { word: "hétérodoxe", score: 95, feedback: "'Hétérodoxe' contraire à la doctrine ou aux conventions établies." },
            { word: "antinomique", score: 100, feedback: "Parfait ! 'Antinomique' relève de deux principes ou lois qui s'opposent et semblent inconciliables par nature." }
        ],
        bestAnswer: "antinomique",
        explanation: "Une alliance 'antinomique' unit des forces dont les principes fondamentaux sont normalement en contradiction absolue, rendant leur union contre-nature."
    },
    {
        id: "fr-374",
        sentence: "La clarté de son exposé tenait à sa structure rigoureuse et à ses exemples pertinents.",
        targetWord: "rigoureuse",
        targetWordIndex: 12,
        options: [
            { word: "logique", score: 90, feedback: "'Logique' conforme à la logique." },
            { word: "ferme", score: 85, feedback: "'Ferme' solide, inébranlable." },
            { word: "strict", score: 95, feedback: "'Strict' qui suit des règles précises sans écart." },
            { word: "carrée", score: 100, feedback: "Parfait ! 'Carrée' (familier dans ce sens) est d'une solidité et d'une clarté géométrique, sans bavure ni approximation." }
        ],
        bestAnswer: "carrée",
        explanation: "Une structure 'carrée' est d'une solidité et d'une netteté parfaites, comme les angles d'un carré, garantissant une compréhension aisée et sans ambiguïté."
    },
    {
        id: "fr-375",
        sentence: "L'écho de ses paroles dans la salle vide produisait un effet spectral.",
        targetWord: "spectral",
        targetWordIndex: 13,
        options: [
            { word: "fantomatique", score: 95, feedback: "'Fantomatique' évoque un fantôme, une présence irréelle." },
            { word: "inquiétant", score: 85, feedback: "'Inquiétant' qui cause de l'inquiétude." },
            { word: "lunaire", score: 90, feedback: "'Lunaire' désertique et étrange, comme la lune." },
            { word: "ectoplasmique", score: 100, feedback: "Parfait ! 'Ectoplasmique' (relatif à l'ectoplasme, substance des fantômes) évoque une matérialité vague et effrayante, propre au surnaturel." }
        ],
        bestAnswer: "ectoplasmique",
        explanation: "Un effet 'ectoplasmique' donne l'impression d'une présence immatérielle et vaguement menaçante, comme celle d'un esprit matérialisé sous une forme floue."
    },
    {
        id: "fr-376",
        sentence: "Son influence sur le cours des événements fut marginale, mais néanmoins réelle.",
        targetWord: "marginale",
        targetWordIndex: 9,
        options: [
            { word: "minime", score: 90, feedback: "'Minime' très petite." },
            { word: "secondaire", score: 85, feedback: "'Secondaire' de second ordre, peu importante." },
            { word: "périphérique", score: 95, feedback: "'Périphérique' située à la périphérie, en bordure de l'essentiel." },
            { word: "tangentielle", score: 100, feedback: "Parfait ! 'Tangentielle' (géométrie) qui touche seulement en un point sans pénétrer, influence qui effleure le cours principal sans vraiment l'infléchir." }
        ],
        bestAnswer: "tangentielle",
        explanation: "Une influence 'tangentielle' est une influence de surface, qui ne fait qu'effleurer le cœur du sujet ou le cours des événements sans le modifier en profondeur."
    },
    {
        id: "fr-377",
        sentence: "Le témoin décrivit la scène avec une précision clinique, sans la moindre émotion.",
        targetWord: "clinique",
        targetWordIndex: 10,
        options: [
            { word: "chirurgicale", score: 95, feedback: "'Chirurgicale' extrêmement précise et froide, comme une opération." },
            { word: "méticuleuse", score: 90, feedback: "'Méticuleuse' très attentive aux détails." },
            { word: "photographique", score: 85, feedback: "'Photographique' qui reproduit fidèlement, mais n'implique pas l'absence d'émotion." },
            { word: "autopsique", score: 100, feedback: "Parfait ! 'Autopsique' (comme une autopsie) est une observation froide, méthodique et détaillée d'une chose ou d'une scène considérée comme un cadavre." }
        ],
        bestAnswer: "autopsique",
        explanation: "Une description 'autopsique' dissèque la réalité avec le détachement froid et méthodique d'un médecin légiste, excluant toute implication affective."
    },
    {
        id: "fr-378",
        sentence: "La pérennité de l'institution était assurée par des statuts solides et une tradition ancrée.",
        targetWord: "ancrée",
        targetWordIndex: 15,
        options: [
            { word: "enracinée", score: 95, feedback: "'Enracinée' solidement fixée, comme une plante." },
            { word: "établie", score: 85, feedback: "'Établie' installée, mais moins forte." },
            { word: "invétérée", score: 90, feedback: "'Invétérée' devenue une habitude invétérée." },
            { word: "tellurique", score: 100, feedback: "Parfait ! 'Tellurique' (de la terre) plonge ses racines si profondément dans le sol de l'histoire et de la culture qu'elle en semble une force naturelle." }
        ],
        bestAnswer: "tellurique",
        explanation: "Une tradition 'tellurique' tire sa force et sa permanence de son lien organique et indissoluble avec le territoire et l'histoire d'un peuple."
    },
    {
        id: "fr-379",
        sentence: "Le parallèle qu'il établissait entre les deux époques était suggestif mais forcé.",
        targetWord: "suggestif",
        targetWordIndex: 11,
        options: [
            { word: "évocateur", score: 90, feedback: "'Évocateur' fait penser à, appelle à l'esprit." },
            { word: "intrigant", score: 85, feedback: "'Intrigant' qui éveille la curiosité." },
            { word: "fécond", score: 95, feedback: "'Fécond' fertile, qui peut produire des idées." },
            { word: "heuristicque", score: 100, feedback: "Parfait ! 'Heuristique' (méthodologie) est un raisonnement qui sert à découvrir, à ouvrir des pistes de recherche, même s'il n'est pas entièrement démontré." }
        ],
        bestAnswer: "heuristicque",
        explanation: "Un parallèle 'heuristique' est intéressant non pour sa vérité absolue, mais pour sa capacité à générer de nouvelles questions et hypothèses, à ouvrir des perspectives."
    },
    {
        id: "fr-380",
        sentence: "Le paysage, sous la bruine, était estompé dans des tons de gris et de bleu pâle.",
        targetWord: "estompé",
        targetWordIndex: 8,
        options: [
            { word: "flou", score: 85, feedback: "'Flou' manque de netteté." },
            { word: "vaporeux", score: 95, feedback: "'Vaporeux' léger comme la vapeur, éthéré." },
            { word: "sfumato", score: 100, feedback: "Parfait ! 'Sfumato' (technique picturale de Léonard de Vinci) désigne un fondu des contours et des couleurs, créant une impression de brume et de mystère." },
            { word: "atténué", score: 90, feedback: "'Atténué' rendu moins vif, moins fort." }
        ],
        bestAnswer: "sfumato",
        explanation: "Un paysage en 'sfumato' est caractérisé par la dissolution des contours et la fusion subtile des couleurs, créant une atmosphère poétique et mélancolique."
    },
    {
        id: "fr-381",
        sentence: "L'adhésion du public à cette théorie farfelue reposait sur un besoin viscéral de croire.",
        targetWord: "viscéral",
        targetWordIndex: 15,
        options: [
            { word: "profond", score: 85, feedback: "'Profond' intense, mais moins charnel." },
            { word: "instinctif", score: 90, feedback: "'Instinctif' qui relève de l'instinct." },
            { word: "primordial", score: 95, feedback: "'Primordial' essentiel, fondamental." },
            { word: "entraillé", score: 100, feedback: "Parfait ! 'Entraillé' (littéraire) vient des entrailles, du plus profond des organes, évoquant une nécessité biologique et émotionnelle." }
        ],
        bestAnswer: "entraillé",
        explanation: "Un besoin 'entraillé' est un besoin si fondamental qu'il semble provenir des organes vitaux, dictant une croyance irrationnelle mais impérieuse."
    },
    {
        id: "fr-382",
        sentence: "La résolution du problème technique exigeait une approche novatrice, hors des sentiers battus.",
        targetWord: "novatrice",
        targetWordIndex: 11,
        options: [
            { word: "innovante", score: 90, feedback: "'Innovante' qui introduit des nouveautés." },
            { word: "créative", score: 85, feedback: "'Créative' qui fait preuve de créativité." },
            { word: "rupturiste", score: 95, feedback: "'Rupturiste' qui provoque une rupture avec l'existant." },
            { word: "héroïque", score: 100, feedback: "Parfait ! 'Héroïque' (au sens de la quête) exige un courage et une ingéniosité exceptionnels, comme pour accomplir un exploit." }
        ],
        bestAnswer: "héroïque",
        explanation: "Une approche 'héroïque' face à un problème est une tentative audacieuse et risquée, qui repousse les limites connues pour trouver une solution inédite."
    },
    {
        id: "fr-383",
        sentence: "La justesse de son coup d'œil pour évaluer les distances impressionnait tous les archers.",
        targetWord: "justesse",
        targetWordIndex: 4,
        options: [
            { word: "précision", score: 90, feedback: "'Précision' qualité de ce qui est précis." },
            { word: "exactitude", score: 85, feedback: "'Exactitude' conformité à la vérité, à la réalité." },
            { word: "infaillibilité", score: 95, feedback: "'Infaillibilité' qualité de ce qui ne peut faillir." },
            { word: "acribie", score: 100, feedback: "Parfait ! 'Acribie' (du grec) est une exactitude méticuleuse, un souci extrême du détail et de la précision." }
        ],
        bestAnswer: "acribie",
        explanation: "L''acribie' d'un coup d'œil est une capacité à percevoir et à évaluer avec une minutie et une exactitude extrêmes, fruit d'une longue pratique."
    },
    {
        id: "fr-384",
        sentence: "Les relations entre les deux voisins étaient empreintes d'une courtoisie de surface.",
        targetWord: "empreintes",
        targetWordIndex: 7,
        options: [
            { word: "teintées", score: 90, feedback: "'Teintées' légèrement colorées par." },
            { word: "marquées", score: 85, feedback: "'Marquées' caractérisées par." },
            { word: "revêtues", score: 95, feedback: "'Revêtues' couvertes, parées de (suggère un habit)." },
            { word: "vernissées", score: 100, feedback: "Parfait ! 'Vernissées' (comme de la céramique) recouvertes d'une couche brillante et lisse qui cache la matière brute en dessous, purement décorative." }
        ],
        bestAnswer: "vernissées",
        explanation: "Des relations 'vernissées' présentent un extérieur poli et brillant de politesse, masquant souvent des tensions ou une indifférence réelle."
    },
    {
        id: "fr-385",
        sentence: "La chute du héros, après une ascension fulgurante, fut d'autant plus brutale.",
        targetWord: "fulgurante",
        targetWordIndex: 11,
        options: [
            { word: "rapide", score: 80, feedback: "'Rapide' vite, mais sans l'image." },
            { word: "éclair", score: 95, feedback: "'Éclair' (en attribut) très rapide et brillante." },
            { word: "météorique", score: 100, feedback: "Parfait ! 'Météorique' évoque une ascension aussi rapide, brillante et spectaculaire que celle d'une étoile filante, annonçant souvent une chute tout aussi rapide." },
            { word: "vertigineuse", score: 90, feedback: "'Vertigineuse' très rapide et impressionnante." }
        ],
        bestAnswer: "météorique",
        explanation: "Une ascension 'météorique' est une réussite exceptionnellement rapide et visible, mais souvent éphémère, laissant présager un déclin tout aussi soudain."
    },
    {
        id: "fr-386",
        sentence: "L'argument, bien que spécieux, parvint à en convaincre plus d'un.",
        targetWord: "spécieux",
        targetWordIndex: 6,
        options: [
            { word: "fallacieux", score: 95, feedback: "'Fallacieux' trompeur, erroné." },
            { word: "sophistique", score: 90, feedback: "'Sophistique' utilisant des raisonnements spécieux." },
            { word: "trompeur", score: 85, feedback: "'Trompeur' qui induit en erreur." },
            { word: "captieux", score: 100, feedback: "Parfait ! 'Captieux' est insidieusement trompeur en jouant sur les mots et les apparences pour séduire et piéger l'esprit." }
        ],
        bestAnswer: "captieux",
        explanation: "Un argument 'captieux' est formulé de manière à paraître séduisant et plausible tout en étant fondamentalement faux, exploitant les faiblesses du raisonnement."
    },
    {
        id: "fr-387",
        sentence: "La mélopée du vieux marin, répétitive et lancinante, berçait l'équipage.",
        targetWord: "lancinante",
        targetWordIndex: 12,
        options: [
            { word: "obsédante", score: 95, feedback: "'Obsédante' qui obsède, revient sans cesse à l'esprit." },
            { word: "monotone", score: 85, feedback: "'Monotone' sans variation, peut être neutre." },
            { word: "persistante", score: 90, feedback: "'Persistante' qui dure, se maintient." },
            { word: "taoïque", score: 100, feedback: "Parfait ! 'Taoïque' (inventé sur 'tao', le chemin, et le rythme) évoque un rythme répétitif et hypnotique comme une litanie ou un mantra." }
        ],
        bestAnswer: "taoïque",
        explanation: "Une mélopée 'taoïque' possède un rythme répétitif et circulaire qui endort la conscience et entraîne l'esprit dans un état de transe douce."
    },
    {
        id: "fr-388",
        sentence: "La frontière entre la légitime défense et la vengeance était, dans ce cas, ténue.",
        targetWord: "ténue",
        targetWordIndex: 15,
        options: [
            { word: "floue", score: 90, feedback: "'Floue' imprécise, sans contours nets." },
            { word: "fragile", score: 85, feedback: "'Fragile' peut se rompre facilement." },
            { word: "équivoque", score: 95, feedback: "'Équivoque' ambiguë, à double sens." },
            { word: "diaphane", score: 100, feedback: "Parfait ! 'Diaphane' est si mince et transparente qu'elle en devient presque invisible, rendant la distinction presque impossible." }
        ],
        bestAnswer: "diaphane",
        explanation: "Une frontière 'diaphane' est si peu substantielle et si transparente qu'elle n'offre plus de séparation réelle, permettant le passage insensible d'un état à l'autre."
    },
    {
        id: "fr-389",
        sentence: "La prospérité de la cité était ostensible, affichée dans l'architecture somptueuse de ses monuments.",
        targetWord: "ostensible",
        targetWordIndex: 6,
        options: [
            { word: "visible", score: 85, feedback: "'Visible' qu'on peut voir, mais sans intention." },
            { word: "manifeste", score: 90, feedback: "'Manifeste' évidente, clairement apparente." },
            { word: "étalée", score: 95, feedback: "'Étalée' exhibée, montrée avec ostentation." },
            { word: "prosopopée", score: 100, feedback: "Parfait ! 'Prosopopée' (rhétorique) donnerait ici l'idée que la ville elle-même, par ses monuments, prend la parole pour clamer sa richesse." }
        ],
        bestAnswer: "prosopopée",
        explanation: "Une prospérité mise en 'prosopopée' est une richesse qui se donne en spectacle à travers son décor, comme si la ville elle-même proclamait sa puissance."
    },
    {
        id: "fr-390",
        sentence: "L'ironie de la situation était qu'il critiquait précisément ce qu'il avait lui-même instauré.",
        targetWord: "instauré",
        targetWordIndex: 17,
        options: [
            { word: "établi", score: 90, feedback: "'Établi' mis en place." },
            { word: "fondé", score: 85, feedback: "'Fondé' créé, institué." },
            { word: "promulgué", score: 95, feedback: "'Promulgué' rendu public par autorité (loi, décret)." },
            { word: "édicté", score: 100, feedback: "Parfait ! 'Édicté' proclamé par un édit, donc par sa propre autorité, renforçant l'absurdité de la critique." }
        ],
        bestAnswer: "édicté",
        explanation: "Avoir 'édicté' une règle implique l'avoir imposée par son propre pouvoir, rendant sa critique ultérieure particulièrement incohérente et hypocrite."
    },
    {
        id: "fr-391",
        sentence: "La réplique de l'accusé fut cinglante et réduisit son interlocuteur au silence.",
        targetWord: "cinglante",
        targetWordIndex: 6,
        options: [
            { word: "acérée", score: 90, feedback: "'Acérée' tranchante, fine." },
            { word: "mordante", score: 95, feedback: "'Mordante' sarcastique et blessante." },
            { word: "foudroyante", score: 100, feedback: "Parfait ! 'Foudroyante' frappe avec la soudaineté et la force de la foudre, anéantissant toute possibilité de réplique." },
            { word: "incisive", score: 85, feedback: "'Incisive' qui pénètre comme un coup de couteau." }
        ],
        bestAnswer: "foudroyante",
        explanation: "Une réplique 'foudroyante' est si rapide, pertinente et écrasante qu'elle laisse l'adversaire sans voix, comme assommé."
    },
    {
        id: "fr-392",
        sentence: "L'engouement pour cette mode fut bref, aussi éphémère qu'une floraison printanière.",
        targetWord: "éphémère",
        targetWordIndex: 10,
        options: [
            { word: "fugace", score: 95, feedback: "'Fugace' de très courte durée, qui passe vite." },
            { word: "passager", score: 85, feedback: "'Passager' qui ne dure pas." },
            { word: "momentané", score: 90, feedback: "'Momentané' qui ne dure qu'un moment." },
            { word: "périssable", score: 100, feedback: "Parfait ! 'Périssable' est destiné à périr rapidement, comme une denrée fraîche, notion de déchet intégrée." }
        ],
        bestAnswer: "périssable",
        explanation: "Un engouement 'périssable' est, par nature, voué à une obsolescence rapide, conçu pour être consommé puis jeté, à l'image de nombreux phénomènes de mode."
    },
    {
        id: "fr-393",
        sentence: "La synthèse qu'il proposa brillait par sa clarté et son efficacité pédagogique.",
        targetWord: "brillait",
        targetWordIndex: 6,
        options: [
            { word: "excellait", score: 95, feedback: "'Excellait' était excellente en, se distinguait." },
            { word: "se distinguait", score: 90, feedback: "'Se distinguait' se faisait remarquer." },
            { word: "rayonnait", score: 100, feedback: "Parfait ! 'Rayonnait' émettait de la lumière, de l'intelligence, influençant et éclairant son auditoire par sa qualité." },
            { word: "triomphait", score: 85, feedback: "'Triomphait' remportait un succès, peut-être trop fort." }
        ],
        bestAnswer: "rayonnait",
        explanation: "Une synthèse qui 'rayonne' diffuse la compréhension par sa clarté intrinsèque, éclairant les esprits de ceux qui l'écoutent ou la lisent."
    },
    {
        id: "fr-394",
        sentence: "L'obstacle semblait infranchissable, mais ils décidèrent de tenter l'impossible.",
        targetWord: "infranchissable",
        targetWordIndex: 5,
        options: [
            { word: "insurmontable", score: 95, feedback: "'Insurmontable' qu'on ne peut surmonter." },
            { word: "insoluble", score: 85, feedback: "'Insoluble' qu'on ne peut résoudre (pour un problème)." },
            { word: "rébarbatif", score: 90, feedback: "'Réfarbatif' rebutant, décourageant." },
            { word: "herculéen", score: 100, feedback: "Parfait ! 'Herculéen' (comme les travaux d'Hercule) exige une force ou une ingéniosité surhumaine pour être vaincu." }
        ],
        bestAnswer: "herculéen",
        explanation: "Un obstacle 'herculéen' est d'une difficulté mythique, semblant requérir des capacités au-delà de l'humain pour être surmonté."
    },
    {
        id: "fr-395",
        sentence: "La quiétude du lieu n'était qu'apparente, cachant une activité fébrile en sous-sol.",
        targetWord: "fébrile",
        targetWordIndex: 16,
        options: [
            { word: "frénétique", score: 95, feedback: "'Frénétique' désordonnée et excessive." },
            { word: "intense", score: 85, feedback: "'Intense' forte, vive." },
            { word: "trépidante", score: 90, feedback: "'Trépidante' très active, agitée." },
            { word: "pygmée", score: 100, feedback: "Parfait ! 'Pygmée' (par opposition apparente) serait ici ironique pour une activité intense mais cachée, comme un peuple invisible agitant le monde de surface." }
        ],
        bestAnswer: "pygmée",
        explanation: "Une activité 'pygmée', par une inversion ironique, désigne une agitation intense mais invisible, menée dans l'ombre par des acteurs discrets mais nombreux."
    },
    {
        id: "fr-396",
        sentence: "La véracité de l'anecdote, bien que plaisante, était sujette à caution.",
        targetWord: "caution",
        targetWordIndex: 14,
        options: [
            { word: "doute", score: 90, feedback: "'Sujette à doute' pouvait être mise en doute." },
            { word: "suspicion", score: 95, feedback: "'Sujette à suspicion' était suspecte." },
            { word: "contestation", score: 85, feedback: "'Sujette à contestation' pouvait être contestée." },
            { word: "aléthomètre", score: 100, feedback: "Parfait ! 'Aléthomètre' (instrument mesurant la vérité) serait ici 'ne résistait pas à l'aléthomètre', c'est-à-dire à un examen rigoureux de sa véracité." }
        ],
        bestAnswer: "aléthomètre",
        explanation: "Une histoire qui ne résiste pas à l'''aléthomètre'' est une histoire dont la vérité s'effrite dès qu'on l'examine avec les outils de la critique factuelle."
    },
    {
        id: "fr-397",
        sentence: "L'impact de ses paroles fut immédiat et profond, suscitant une réflexion générale.",
        targetWord: "profond",
        targetWordIndex: 9,
        options: [
            { word: "intense", score: 85, feedback: "'Intense' fort, puissant." },
            { word: "durable", score: 90, feedback: "'Durable' qui dure longtemps." },
            { word: "marquant", score: 95, feedback: "'Marquant' qui laisse une marque, une impression." },
            { word: "sismique", score: 100, feedback: "Parfait ! 'Sismique' (comme un séisme) ébranle les fondements des convictions, provoquant un bouleversement intérieur." }
        ],
        bestAnswer: "sismique",
        explanation: "Un impact 'sismique' est un choc qui modifie durablement le paysage mental, fissurant les certitudes et remodelant les perspectives."
    },
    {
        id: "fr-398",
        sentence: "La résilience de la communauté après la catastrophe força l'admiration.",
        targetWord: "résilience",
        targetWordIndex: 4,
        options: [
            { word: "capacité de rebond", score: 85, feedback: "Expression courante mais peu littéraire." },
            { word: "endurance", score: 90, feedback: "'Endurance' capacité à supporter la souffrance." },
            { word: "ténacité", score: 95, feedback: "'Ténacité' obstination à ne pas abandonner." },
            { word: "phénix", score: 100, feedback: "Parfait ! 'Capacité de phénix' est la faculté de renaître de ses cendres, plus forte et belle après l'épreuve." }
        ],
        bestAnswer: "phénix",
        explanation: "La 'capacité de phénix' d'une communauté est son aptitude à transformer une destruction totale en une renaissance, en tirant une force nouvelle de l'épreuve."
    },
    {
        id: "fr-399",
        sentence: "La trame du roman était d'une complexité vertigineuse, mêlant plusieurs époques et destins.",
        targetWord: "vertigineuse",
        targetWordIndex: 10,
        options: [
            { word: "étourdissante", score: 95, feedback: "'Étourdissante' qui étourdit, donne le vertige." },
            { word: "prodigieuse", score: 90, feedback: "'Prodigieuse' extraordinaire, merveilleuse." },
            { word: "insondable", score: 85, feedback: "'Insondable' qu'on ne peut sonder, dont on ne trouve pas le fond." },
            { word: "kaleidoscopique", score: 100, feedback: "Parfait ! 'Kaleidoscopique' présente une multiplicité de facettes et de configurations changeantes, à l'image d'un kaléidoscope." }
        ],
        bestAnswer: "kaleidoscopique",
        explanation: "Une complexité 'kaleidoscopique' offre au lecteur une myriade de perspectives et de combinaisons narratives qui se recomposent sans cesse, défiant une lecture linéaire."
    },
    {
        id: "fr-400",
        sentence: "L'unanimité du vote en faveur de la motion reflétait un consensus rare dans cette assemblée.",
        targetWord: "unanimité",
        targetWordIndex: 4,
        options: [
            { word: "accord", score: 85, feedback: "'Accord' général, mais moins fort." },
            { word: "consentement", score: 90, feedback: "'Consentement' fait de consentir, d'acquiescer." },
            { word: "concorde", score: 95, feedback: "'Concorde' harmonie, union des cœurs et des opinions." },
            { word: "homologie", score: 100, feedback: "Parfait ! 'Homologie' (biologie, mathématiques) est une similitude de structure profonde, ici une identité parfaite de volonté." }
        ],
        bestAnswer: "homologie",
        explanation: "Une 'homologie' des votes désigne une concordance parfaite et structurelle des décisions, comme si tous les membres partageaient le même schéma de pensée."
    }
];
