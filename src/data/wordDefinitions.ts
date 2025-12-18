export interface WordDefinition {
    definition: string;
    example: string;
}

export const WORD_DEFINITIONS: Record<string, Record<string, WordDefinition>> = {
    en: {
        "wise": {
            definition: "Having or showing experience, knowledge, and good judgment.",
            example: "The director made a wise decision to postpone the launch."
        },
        "clear": {
            definition: "Easy to perceive, understand, or interpret.",
            example: "The instructions were clear and easy to follow."
        },
        "beautiful": {
            definition: "Pleasing the senses or mind aesthetically.",
            example: "The sunrise over the mountains was truly beautiful."
        },
        "large": {
            definition: "Of considerable size, extent, or capacity.",
            example: "They live in a large house at the end of the street."
        },
        "expedited": {
            definition: "To make an action or process happen sooner or be accomplished more quickly.",
            example: "We requested an expedited delivery for the urgent documents."
        },
        "ancestral": {
            definition: "Of, belonging to, or inherited from an ancestor or ancestors.",
            example: "The family gathered at their ancestral home for the holidays."
        },
        "monstrous": {
            definition: "Having the ugly or frightening appearance of a monster; giant in size.",
            example: "A monstrous wave crashed against the tiny boat."
        },
        "venerable": {
            definition: "Accorded a great deal of respect, especially because of age, wisdom, or character.",
            example: "The venerable professor was celebrated for his decades of research."
        },
        "glacial": {
            definition: "Extremely cold; suggestive of a glacier.",
            example: "The wind blowing off the lake was glacial."
        },
        "imperceptible": {
            definition: "So slight, gradual, or subtle as not to be perceived.",
            example: "The change in temperature was almost imperceptible."
        },
        "sublime": {
            definition: "Of such excellence, grandeur, or beauty as to inspire great admiration and awe.",
            example: "The performance of the orchestra was absolutely sublime."
        },
        "instantaneous": {
            definition: "Occurring or done in an instant or instantly.",
            example: "The athlete showed an instantaneous reaction to the starting signal."
        },
        "ominous": {
            definition: "Giving the impression that something bad or unpleasant is going to happen.",
            example: "The dark, heavy clouds looked ominous."
        },
        "ingenious": {
            definition: "Clever, original, and inventive.",
            example: "He came up with an ingenious solution to the power outage."
        },
        "sequestered": {
            definition: "Isolated and hidden away; secluded.",
            example: "The cabin was sequestered in a remote corner of the forest."
        },
        "formidable": {
            definition: "Inspiring fear or respect through being impressively large, powerful, or intense.",
            example: "The team faced a formidable opponent in the finals."
        },
        "picturesque": {
            definition: "Visually attractive, especially in a quaint or charming way.",
            example: "The village was famous for its picturesque streets and colorful houses."
        },
        "prosperous": {
            definition: "Successful in material terms; flourishing financially.",
            example: "The company enjoyed a prosperous year despite the economic downturn."
        },
        "mercurial": {
            definition: "Subject to sudden or unpredictable changes of mood or mind.",
            example: "Her mercurial temperament made her difficult to work with."
        },
        "dilapidated": {
            definition: "In a state of disrepair or ruin as a result of age or neglect.",
            example: "They bought a dilapidated farmhouse and planned to renovate it."
        },
        "inclement": {
            definition: "Unpleasantly cold or wet weather.",
            example: "The match was cancelled due to inclement weather."
        },
        "diminutive": {
            definition: "Extremely or unusually small.",
            example: "The kitten was a diminutive creature that could fit in a teacup."
        },
        "radiant": {
            definition: "Sending out light; shining or glowing brightly.",
            example: "She gave him a radiant smile that lit up the room."
        },
        "eloquent": {
            definition: "Fluent or persuasive in speaking or writing.",
            example: "His eloquent speech moved many people in the audience."
        },
        "melancholy": {
            definition: "A feeling of pensive sadness, typically with no obvious cause.",
            example: "He felt a wave of melancholy as he looked at old photographs."
        },
        "immaculate": {
            definition: "Perfectly clean, neat, or tidy; free from flaws.",
            example: "The kitchen was immaculate after a day of deep cleaning."
        },
        "astute": {
            definition: "Having or showing an ability to accurately assess situations and turn this to one's advantage.",
            example: "His astute observations helped the company avoid a major mistake."
        },
        "contemporary": {
            definition: "Living or occurring at the same time; modern.",
            example: "She enjoys reading contemporary fiction from diverse authors."
        },
        "ethereal": {
            definition: "Extremely delicate and light in a way that seems too perfect for this world.",
            example: "The ethereal music floating through the hall was very calming."
        },
        "scorching": {
            definition: "Very hot; burning.",
            example: "The scorching desert sun beat down on the travelers."
        },
        "deafening": {
            definition: "So loud as to make it impossible to hear anything else.",
            example: "The roar of the engines was deafening."
        },
        "precocious": {
            definition: "Having developed certain abilities or inclinations at an earlier age than is usual.",
            example: "The precocious child could play complex sonatas on the piano."
        },
        "peerless": {
            definition: "Unequalled; unrivalled.",
            example: "The surgeon was known for his peerless technique and precision."
        },
        "crystalline": {
            definition: "Very clear; transparent.",
            example: "The water in the mountain stream was crystalline."
        },
        "incandescent": {
            definition: "Emitting light as a result of being heated; extremely bright.",
            example: "The incandescent lights of the city could be seen for miles."
        },
        "balmy": {
            definition: "Pleasantly warm weather.",
            example: "It was a balmy summer evening, perfect for a walk."
        },
        "elation": {
            definition: "A feeling of great happiness and triumph.",
            example: "She was filled with elation after winning the first prize."
        },
        "articulate": {
            definition: "Having the ability to speak fluently and coherently.",
            example: "He find it difficult to articulate his feelings in words."
        },
        "skeptic": {
            definition: "A person inclined to question or doubt all accepted opinions.",
            example: "A skeptic might doubt the claims made by the salesman."
        },
        "ubiquitous": {
            definition: "Present, appearing, or found everywhere.",
            example: "Smartphones have become ubiquitous in modern society."
        },
        "understate": {
            definition: "To describe or represent something as being less important than it actually is.",
            example: "The report tended to understate the severity of the crisis."
        },
        "mood": {
            definition: "A temporary state of mind or feeling.",
            example: "He was in a good mood after receiving the promotion."
        },
        "empathy": {
            definition: "The ability to understand and share the feelings of another.",
            example: "She showed great empathy toward her friend who was going through a hard time."
        },
        "quixotic": {
            definition: "Exceedingly idealistic; unrealistic and impractical.",
            example: "His quixotic quest for world peace was admired but considered impossible by many."
        },
        "concise": {
            definition: "Giving a lot of information clearly and in a few words; brief but comprehensive.",
            example: "The summary was concise and easy to read."
        },
        "aversion": {
            definition: "A strong dislike or disinclination.",
            example: "He has a strong aversion to public speaking."
        },
        "integrity": {
            definition: "The quality of being honest and having strong moral principles.",
            example: "He is a man of great integrity who always keeps his word."
        },
        "simplify": {
            definition: "Make something simpler or easier to do or understand.",
            example: "We need to simplify the process to make it more efficient."
        },
        "patriot": {
            definition: "A person who vigorously supports their country and is prepared to defend it.",
            example: "He was remembered as a patriot who served his country bravely."
        },
        "psychology": {
            definition: "The scientific study of the human mind and its functions.",
            example: "She decided to study psychology at university."
        },
        "ravenous": {
            definition: "Extremely hungry.",
            example: "I was ravenous after the long hike."
        },
        "disprove": {
            definition: "Prove that something is false.",
            example: "The new evidence helped to disprove his original theory."
        },
        "polyglot": {
            definition: "Knowing or using several languages.",
            example: "A polyglot can communicate with people from many different countries."
        },
        "serendipitous": {
            definition: "Occurring or discovered by chance in a happy or beneficial way.",
            example: "Their meeting was serendipitous, leading to a long partnership."
        },
        "abolish": {
            definition: "Formally put an end to a system, practice, or institution.",
            example: "The government voted to abolish the outdated law."
        },
        "monologue": {
            definition: "A long speech by one actor in a play or movie.",
            example: "The actor delivered a powerful monologue at the end of the first act."
        },
        "minimum": {
            definition: "The least or smallest amount or quantity possible.",
            example: "The minimum age for voting is eighteen."
        },
        "proclaim": {
            definition: "Announce officially or publicly.",
            example: "The king will proclaim the new law tomorrow morning."
        },
        "ephemeral": {
            definition: "Lasting for a very short time.",
            example: "Fame can be ephemeral, so enjoy it while it lasts."
        },
        "rhetoric": {
            definition: "The art of effective or persuasive speaking or writing.",
            example: "His rhetoric was intended to inspire the crowd."
        },
        "dehumanize": {
            definition: "Deprive of human qualities, personality, or dignity.",
            example: "The propaganda aimed to dehumanize the enemy."
        },
        "entrepreneur": {
            definition: "A person who organizes and operates a business or businesses. accompanied by risk.",
            example: "As a young entrepreneur, she started her own tech company."
        },
        "irreverent": {
            definition: "Showing a lack of respect for people or things that are generally taken seriously.",
            example: "His irreverent sense of humor often poked fun at authority figures."
        },
        "repudiate": {
            definition: "Refuse to accept or be associated with.",
            example: "The minister was quick to repudiate the allegations of corruption."
        },
        "teenager": {
            definition: "A person aged between 13 and 19 years.",
            example: "Being a teenager is a time of many changes and self-discovery."
        },
        "enhance": {
            definition: "Intensify, increase, or further improve the quality, value, or extent of.",
            example: "The new lighting will enhance the beauty of the room."
        },
        "ardent": {
            definition: "Enthusiastic or passionate.",
            example: "She is an ardent supporter of environmental conservation."
        },
        "fallacy": {
            definition: "A mistaken belief, especially one based on unsound argument.",
            example: "The idea that vitamin C prevents colds is a common fallacy."
        },
        "annihilate": {
            definition: "Destroy utterly; obliterate.",
            example: "The army was sent to annihilate the enemy forces."
        },
        "astronomer": {
            definition: "An expert in or student of astronomy.",
            example: "The astronomer spent his nights observing the distant galaxies."
        },
        "invincible": {
            definition: "Too powerful to be defeated or overcome.",
            example: "The team seemed invincible after winning ten games in a row."
        },
        "abdicate": {
            definition: "Renounce one's throne or fail to fulfill a duty.",
            example: "The king decided to abdicate in favor of his son."
        },
        "anonymity": {
            definition: "The condition of being anonymous.",
            example: "The donor wished to maintain his anonymity."
        },
        "antonym": {
            definition: "A word opposite in meaning to another.",
            example: "'Hot' is the antonym of 'cold'."
        },
        "claustrophobia": {
            definition: "Extreme or irrational fear of confined places.",
            example: "He couldn't ride the elevator because of his claustrophobia."
        },
        "canonize": {
            definition: "Officially declare a dead person to be a saint.",
            example: "The church decided to canonize the woman for her lifelong service to the poor."
        },
        "epigram": {
            definition: "A pithy saying or remark expressing an idea in a clever and amusing way.",
            example: "He was famous for his witty epigrams about modern life."
        },
        "manifesto": {
            definition: "A public declaration of policy and aims, especially one issued before an election.",
            example: "The party published its manifesto detailing their plans for education reform."
        },
        "undermine": {
            definition: "Lessen the effectiveness, power, or ability of, especially gradually or insidiously.",
            example: "His constant criticism began to undermine her confidence."
        },
        "aesthetic": {
            definition: "Concerned with beauty or the appreciation of beauty.",
            example: "The building has a clean, minimalist aesthetic."
        },
        "epidemic": {
            definition: "A widespread occurrence of an infectious disease in a community at a particular time.",
            example: "The flu epidemic spread rapidly through the city."
        },
        "lucid": {
            definition: "Expressed clearly; easy to understand.",
            example: "She gave a lucid account of the events that had taken place."
        },
        "abridge": {
            definition: "Shorten a piece of writing without losing the sense.",
            example: "They decided to abridge the novel for a younger audience."
        },
        "affable": {
            definition: "Friendly, good-natured, or easy to talk to.",
            example: "The host was very affable and made everyone feel welcome."
        },
        "minuscule": {
            definition: "Extremely small; tiny.",
            example: "He noticed a minuscule crack in the glass."
        },
        "advocate": {
            definition: "A person who publicly supports or recommends a particular cause or policy.",
            example: "She is a strong advocate for children's rights."
        },
        "ennui": {
            definition: "A feeling of listlessness and dissatisfaction arising from a lack of occupation or excitement.",
            example: "He suffered from a sense of ennui during the long summer vacation."
        },
        "placate": {
            definition: "Make someone less angry or hostile.",
            example: "They tried to placate the angry protestors with promises of reform."
        },
        "iconoclast": {
            definition: "A person who attacks cherished beliefs or institutions.",
            example: "As an iconoclast, he enjoyed challenging traditional artistic norms."
        },
        "denounce": {
            definition: "Publicly declare to be wrong or evil.",
            example: "The world leaders gathered to denounce the acts of terrorism."
        },
        "vivacious": {
            definition: "Attractively lively and animated.",
            example: "Her vivacious personality made her the center of attention at every party."
        },
        "benefactor": {
            definition: "A person who gives money or other help to a person or cause.",
            example: "The library was built thanks to a generous benefactor."
        },
        "pliant": {
            definition: "Easily influenced or directed; yielding.",
            example: "The young student was pliant and followed the teacher's instructions perfectly."
        },
        "chaos": {
            definition: "Complete disorder and confusion.",
            example: "The sudden storm caused chaos in the city streets."
        },
        "proliferate": {
            definition: "Increase rapidly in numbers; multiply.",
            example: "Digital devices continue to proliferate in our daily lives."
        }
    },
    fr: {
        "judicieuse": {
            definition: "Prise avec bon sens et justesse de jugement.",
            example: "La directrice a pris une décision judicieuse pour l'entreprise."
        },
        "original": {
            definition: "Qui est au début d'une suite, qui n'est pas une copie.",
            example: "Nous avons retrouvé le manuscrit original dans les archives."
        },
        "congruent": {
            definition: "Qui convient exactement à une situation ou à un objet.",
            example: "Cette solution est congruente avec nos objectifs à long terme."
        },
        "ancestral": {
            definition: "Qui est transmis par les ancêtres depuis de longues générations.",
            example: "Ce vieux mur de pierre fait partie du patrimoine ancestral du village."
        },
        "impétueux": {
            definition: "Qui a un mouvement vif, violent et rapide.",
            example: "Le vent impétueux soufflait avec force sur la côte sauvage."
        },
        "ténue": {
            definition: "Trés mince, trés fine, ou d'une intensité trés faible.",
            example: "Une lueur ténue filtrait sous la porte de la chambre."
        },
        "séculaire": {
            definition: "Qui dure depuis un siècle, ou qui est trés ancien.",
            example: "Le château séculaire domine majestueusement toute la vallée."
        },
        "astucieux": {
            definition: "Qui manifeste de l'habileté et de l'ingéniosité.",
            example: "Il a trouvé un moyen astucieux de résoudre ce problème complexe."
        },
        "limpide": {
            definition: "D'une clarté parfaite, qui laisse passer la lumière sans obstacle.",
            example: "L'eau de la source était si limpide qu'on voyait le moindre caillou."
        },
        "infime": {
            definition: "Extrêmement petit, situé au bas de l'échelle.",
            example: "Même une erreur infime peut avoir de lourdes conséquences."
        },
        "interminable": {
            definition: "Qui n'en finit pas, ou qui paraît excessivement long.",
            example: "Le voyage nous a semblé interminable sous cette chaleur."
        },
        "laborieux": {
            definition: "Qui exige beaucoup de travail, d'efforts et de peine.",
            example: "La rédaction de ce rapport a été un travail laborieux."
        },
        "azuré": {
            definition: "D'un bleu clair et pur, comme la couleur de l'azur.",
            example: "Le ciel azuré d'été était sans le moindre nuage."
        },
        "glaciale": {
            definition: "D'un froid extrême, qui gèle.",
            example: "L'eau glaciale de la rivière nous a saisis dès les premiers pas."
        },
        "imposant": {
            definition: "Qui en impose par son aspect, sa grandeur ou sa masse.",
            example: "Le nouveau bâtiment est vraiment imposant vu de l'extérieur."
        },
        "suave": {
            definition: "D'une douceur agréable aux sens, harmonieuse.",
            example: "Une musique suave jouait doucement en arrière-plan."
        },
        "novateur": {
            definition: "Qui introduit des nouveautés ou des changements positifs.",
            example: "C'est un projet novateur qui bouscule les habitudes du secteur."
        },
        "diluvienne": {
            definition: "Qui a le caractère d'un déluge; extrêmement abondante.",
            example: "Une pluie diluvienne s'est abattue sur la ville pendant des heures."
        },
        "bienveillant": {
            definition: "Qui manifeste de la bonté et de la compréhension.",
            example: "Il a toujours eu un regard bienveillant sur mon travail."
        },
        "imperturbable": {
            definition: "Que rien ne peut troubler ou déranger.",
            example: "Le silence imperturbable de la nuit régnait sur le village."
        },
        "panoramique": {
            definition: "Qui offre une vue étendue dans toutes les directions.",
            example: "La vue panoramique depuis le sommet était époustouflante."
        },
        "subtil": {
            definition: "Qui a une finesse délicate à percevoir.",
            example: "Il y a un changement subtil dans l'air ce matin."
        },
        "intrépide": {
            definition: "Qui ne craint pas le danger; d'un courage exemplaire.",
            example: "Le jeune héros s'est montré intrépide face aux obstacles."
        },
        "diaphane": {
            definition: "Qui laisse passer la lumière, translucide.",
            example: "La lumière diaphane de la lune filtrait à travers les nuages."
        },
        "ravissante": {
            definition: "D'une grande beauté ou trés agréable.",
            example: "Cette nouvelle est tout simplement ravissante, je suis ravi !"
        },
        "fastidieux": {
            definition: "Qui cause de l'ennui par sa lenteur ou sa monotonie.",
            example: "Le nettoyage du jardin s'est avéré être une tâche fastidieuse."
        },
        "immaculé": {
            definition: "D'une pureté parfaite, sans aucune tache.",
            example: "La neige fraîche offrait un paysage immaculé au lever du jour."
        },
        "somptueux": {
            definition: "D'une richesse magnifique, d'un luxe éclatant.",
            example: "Le dîner a été servi dans un cadre somptueux."
        },
        "lénifiante": {
            definition: "Qui calme ou apaise la douleur ou l'inquiétude.",
            example: "Une musique lénifiante passait pour détendre les auditeurs."
        },
        "minuscule": {
            definition: "De taille trés réduite, trés petit.",
            example: "Un insecte minuscule se promenait sur la table."
        },
        "courtois": {
            definition: "D'une politesse raffinée et élégante.",
            example: "Il s'est montré trés courtois envers tous les invités."
        },
        "scintillante": {
            definition: "Qui brille avec des éclats de lumière intermittents.",
            example: "L'eau de mer était scintillante sous les rayons du soleil."
        },
        "délabré": {
            definition: "Qui est en trés mauvais état, qui tombe en ruine.",
            example: "Ils habitent dans un bâtiment délabré qui aurait besoin de travaux."
        },
        "sépulcral": {
            definition: "Qui évoque la tombe; d'un silence lugubre.",
            example: "Le silence sépulcral de la grotte nous a un peu effrayés."
        },
        "féerique": {
            definition: "Merveilleux et magique, comme le monde des fées.",
            example: "Le décor du spectacle était vraiment féerique."
        },
        "dérisoire": {
            definition: "Si petit qu'il en est insignifiant ou ridicule.",
            example: "Il a reçu une somme dérisoire pour tout son travail."
        },
        "irrésistible": {
            definition: "À quoi on ne peut pas résister; trés puissant.",
            example: "Il a un charme irrésistible qui séduit tout le monde."
        },
        "orgueilleux": {
            definition: "Qui a une trés haute opinion de soi-même; fier.",
            example: "C'est un homme orgueilleux qui n'admet jamais ses erreurs."
        },
        "radieux": {
            definition: "Qui rayonne de joie, de lumière ou de bonheur.",
            example: "Il affichait un sourire radieux après sa victoire."
        },
        "éloquent": {
            definition: "Qui parle avec facilité et persuasion.",
            example: "Il a fait un discours éloquent qui a convaincu l'assemblée."
        },
        "sceptique": {
            definition: "Qui doute, qui ne croit pas facilement.",
            example: "Il reste sceptique face à ces nouvelles promesses."
        },
        "intégrité": {
            definition: "Qualité d'une personne honnête et fidèle à ses principes.",
            example: "Son intégrité est reconnue par tous ses collègues."
        },
        "psychologie": {
            definition: "Étude scientifique de l'esprit et des comportements.",
            example: "Elle étudie la psychologie de l'enfant à l'université."
        },
        "entrepreneur": {
            definition: "Personne qui crée ou dirige une entreprise.",
            example: "C'est un jeune entrepreneur qui a lancé sa startup."
        },
        "allégresse": {
            definition: "Un sentiment de joie vive et légère.",
            example: "L'annonce de la paix a été accueillie avec allégresse."
        },
        "articulé": {
            definition: "Qui s'exprime de manière claire et nette.",
            example: "Il a présenté un argument bien articulé."
        },
        "omniprésent": {
            definition: "Qui est présent partout en même temps.",
            example: "La technologie est devenue omniprésente dans nos vies."
        },
        "minimiser": {
            definition: "Réduire l'importance ou la valeur de quelque chose.",
            example: "Il ne faut pas minimiser les risques de cette opération."
        },
        "humeur": {
            definition: "État d'esprit ou disposition d'esprit du moment.",
            example: "Elle est de bonne humeur ce matin."
        },
        "empathie": {
            definition: "Capacité de s'identifier à autrui et de ressentir ce qu'il ressent.",
            example: "Il a fait preuve de beaucoup d'empathie envers les victimes."
        },
        "chimérique": {
            definition: "Qui est imaginaire, sans fondement réel.",
            example: "Il poursuit des projets chimériques qui n'aboutiront jamais."
        },
        "concis": {
            definition: "Qui exprime beaucoup de choses en peu de mots.",
            example: "Son rapport était concis et trés instructif."
        },
        "aversion": {
            definition: "Fort dégoût ou répulsion pour quelque chose.",
            example: "J'ai une aversion particulière pour les mensonges."
        },
        "simplifier": {
            definition: "Rendre plus simple ou plus facile à comprendre.",
            example: "Nous devons simplifier les procédures administratives."
        },
        "patriote": {
            definition: "Personne qui aime sa patrie et cherche à la servir.",
            example: "Il se considère comme un patriote dévoué à son pays."
        },
        "affamé": {
            definition: "Qui a trés faim.",
            example: "Le randonneur était affamé après sa longue marche."
        },
        "réfuter": {
            definition: "Démontrer la fausseté d'une affirmation par des preuves.",
            example: "L'avocat a réussi à réfuter les témoignages de l'accusation."
        },
        "polyglotte": {
            definition: "Personne qui parle plusieurs langues.",
            example: "En tant que polyglotte, elle travaille comme interprète internationale."
        },
        "fortuit": {
            definition: "Qui arrive par hasard, de manière imprévue.",
            example: "Leur rencontre a été fortuite mais déterminante."
        },
        "abolir": {
            definition: "Supprimer officiellement une loi, une coutume ou une institution.",
            example: "Le pays a décidé d'abolir la peine de mort il y a longtemps."
        },
        "monologue": {
            definition: "Discours d'une personne qui se parle à elle-même.",
            example: "L'acteur commence la pièce par un long monologue."
        },
        "minimum": {
            definition: "La plus petite quantité ou valeur possible.",
            example: "Le salaire minimum a été augmenté cette année."
        },
        "proclamer": {
            definition: "Annoncer officiellement et publiquement.",
            example: "Le président va proclamer l'état d'urgence."
        },
        "éphémère": {
            definition: "Qui dure trés peu de temps.",
            example: "La beauté du coucher de soleil est éphémère mais marquante."
        },
        "rhétorique": {
            definition: "L'art de bien parler pour convaincre.",
            example: "Son discours était plein de figures de rhétorique."
        },
        "déshumaniser": {
            definition: "Faire perdre son caractère humain à quelqu'un ou quelque chose.",
            example: "La guerre tend à déshumaniser les soldats et les civils."
        },
        "irrévérencieux": {
            definition: "Qui manque de respect envers ce qui est considéré comme respectable.",
            example: "Il a eu un comportement irrévérencieux lors de la cérémonie."
        },
        "répudier": {
            definition: "Rejeter, refuser d'admettre ou de reconnaître.",
            example: "Le chef du parti a dû répudier les propos de son adjoint."
        },
        "adolescent": {
            definition: "Jeune personne dans la période entre l'enfance et l'âge adulte.",
            example: "L'adolescent rêve de parcourir le monde."
        },
        "améliorer": {
            definition: "Rendre meilleur, augmenter la qualité.",
            example: "Nous cherchons à améliorer les performances graphiques de l'application."
        },
        "fervent": {
            definition: "Qui a une ardeur, une passion vive pour quelque chose.",
            example: "C'est un fervent défenseur des droits de l'homme."
        },
        "sophisme": {
            definition: "Raisonnement qui n'est faux qu'en apparence, destiné à tromper.",
            example: "Son argument n'était qu'un sophisme pour éviter la question."
        },
        "anéantir": {
            definition: "Réduire à rien, détruire complètement.",
            example: "L'armée a réussi à anéantir les forces ennemies."
        },
        "astronome": {
            definition: "Scientifique qui étudie les astres et l'univers.",
            example: "L'astronome observe les étoiles avec son télescope."
        },
        "invincible": {
            definition: "Que l'on ne peut pas vaincre ou surmonter.",
            example: "L'équipe s'est montrée invincible tout au long du tournoi."
        },
        "abdiquer": {
            definition: "Renoncer au pouvoir suprême ou à une fonction.",
            example: "Le roi a décidé d'abdiquer en faveur de son fils."
        },
        "anonymat": {
            definition: "État d'une personne dont le nom est inconnu.",
            example: "Le donateur a souhaité garder l'anonymat pour son geste."
        },
        "antonyme": {
            definition: "Mot qui a un sens opposé à un autre.",
            example: "'Grand' est l'antonyme de 'petit'."
        },
        "claustrophobie": {
            definition: "Peur des espaces clos ou confinés.",
            example: "Sa claustrophobie l'empêche de prendre l'ascenseur."
        },
        "canoniser": {
            definition: "Mettre quelqu'un au rang des saints.",
            example: "L'Église a décidé de canoniser ce prêtre pour ses miracles."
        }
    },
    es: {
        "imponente": {
            definition: "Que causa una gran impresión o respeto por su tamaño, fuerza o majestad.",
            example: "La cordillera de los Andes es realmente imponente desde el avión."
        },
        "deslumbrante": {
            definition: "Que brilla mucho o causa una gran admiración por su belleza o lujo.",
            example: "La actriz lució un vestido deslumbrante en la alfombra roja."
        },
        "ilegible": {
            definition: "Que no se puede leer, generalmente por estar mal escrito.",
            example: "Su letra es tan difícil que el mensaje resultó ilegible."
        },
        "apacible": {
            definition: "Que es tranquilo, agradable y exento de agitación.",
            example: "Disfrutamos de un paseo apacible por la orilla del lago."
        },
        "suculenta": {
            definition: "Que es jugoso, sabroso y nutritivo.",
            example: "Nos sirvieron una cena suculenta tras el largo viaje."
        },
        "revelador": {
            definition: "Que revela o descubre algo que estaba oculto o no se sabía.",
            example: "El estudio arrojó datos reveladores sobre el cambio climático."
        },
        "devastadora": {
            definition: "Que causa una destrucción total o un daño muy grande.",
            example: "La tormenta tuvo consecuencias devastadoras para las cosechas."
        },
        "intrépido": {
            definition: "Que no teme al peligro y actúa con valentía y decisión.",
            example: "El intrépido explorador se adentró en la selva virgen."
        },
        "sublime": {
            definition: "De una elevación, belleza o excelencia extraordinarias.",
            example: "La interpretación del pianista fue sencillamente sublime."
        },
        "garrafal": {
            definition: "Que es muy grande o grave, especialmente referido a un error.",
            example: "Cometer ese fallo en la final fue un error garrafal."
        },
        "panorámica": {
            definition: "Que ofrece una visión amplia y total de un paisaje o entorno.",
            example: "Desde la terraza del hotel se tiene una vista panorámica de la ciudad."
        },
        "imperturbable": {
            definition: "Que no se altera ni se perturba ante ninguna situación.",
            example: "A pesar del ruido, él permaneció imperturbable leyendo su libro."
        },
        "alentadora": {
            definition: "Que infunde aliento, ánimo o esperanza.",
            example: "Recibimos una noticia alentadora sobre la salud de nuestro abuelo."
        },
        "agotador": {
            definition: "Que cansa mucho o agota las fuerzas por completo.",
            example: "Subir la montaña fue un ejercicio agotador pero gratificante."
        },
        "arduo": {
            definition: "Que es muy difícil, costoso y requiere mucho esfuerzo.",
            example: "La reconstrucción del puente fue un trabajo arduo de varios meses."
        },
        "despejado": {
            definition: "Que está libre de nubes, obstáculos o confusiones.",
            example: "El cielo quedó despejado tras la lluvia del mediodía."
        },
        "gélida": {
            definition: "Que es extremadamente frío, como el hielo.",
            example: "El viento soplaba de forma gélida en la cumbre de la montaña."
        },
        "suntuoso": {
            definition: "Que es magnífico, lujoso y extremadamente costoso.",
            example: "El palacio contaba con salones de un estilo suntuoso."
        },
        "sedante": {
            definition: "Que tiene la propiedad de calmar o tranquilizar físicamente.",
            example: "El médico le recetó un jarabe de efecto sedante para la tos."
        },
        "revolucionario": {
            definition: "Que produce un cambio profundo y radical en algo.",
            example: "Internet ha sido un invento revolucionario para las comunicaciones."
        },
        "minúsculo": {
            definition: "Que es de un tamaño muy pequeño, insignificante.",
            example: "Encontraron un minúsculo rastro de ADN en la escena."
        },
        "impetuosa": {
            definition: "Que actúa con mucha fuerza, viveza y rapidez.",
            example: "La corriente impetuosa del río arrastraba todo a su paso."
        },
        "atento": {
            definition: "Que pone atención en lo que hace o escucha; cortés.",
            example: "El guía fue muy atento con todos los turistas del grupo."
        },
        "fulgurante": {
            definition: "Que brilla de forma intensa y momentánea; rápido.",
            example: "Tuvo una carrera fulgurante y llegó a la fama en pocos meses."
        },
        "ruinoso": {
            definition: "Que está en estado de ruina o causa grandes pérdidas económicas.",
            example: "El negocio resultó ser ruinoso para los inversores."
        },
        "solemne": {
            definition: "Que se celebra con mucha pompa, seriedad y formalidad.",
            example: "El acto de graduación fue una ceremonia muy solemne."
        },
        "conmovedora": {
            definition: "Que causa una emoción profunda y tierna.",
            example: "La película cuenta una historia conmovedora sobre la amistad."
        },
        "irrisorio": {
            definition: "Que de tan pequeño o escaso resulta ridículo.",
            example: "Le ofrecieron un sueldo irrisorio por un trabajo de diez horas."
        },
        "irresistible": {
            definition: "A lo que no se puede resistir o que atrae con mucha fuerza.",
            example: "El postre de chocolate era sencillamente irresistible."
        },
        "ferviente": {
            definition: "Que tiene un entusiasmo o pasión muy vivos por algo.",
            example: "Es un ferviente admirador de la música clásica."
        },
        "vibrante": {
            definition: "Que vibra o que transmite mucha emoción y energía.",
            example: "El público disfrutó de un concierto vibrante y lleno de ritmo."
        },
        "centenario": {
            definition: "Que tiene cien años o más; muy antiguo.",
            example: "El roble centenario es el símbolo más querido del pueblo."
        },
        "absoluto": {
            definition: "Que es total, completo y no admite limitaciones.",
            example: "Hubo un silencio absoluto cuando el líder comenzó a hablar."
        },
        "impecable": {
            definition: "Que no tiene ninguna mancha, falta o defecto.",
            example: "Su presentación fue impecable y no recibió ninguna crítica."
        },
        "frágil": {
            definition: "Que se rompe con facilidad o que es débil y delicado.",
            example: "Este jarrón es muy frágil, hay que moverlo con cuidado."
        },
        "persistent": {
            definition: "Que dura por largo tiempo o que se mantiene firme.",
            example: "La lluvia persistente acabó por inundar el sótano."
        },
        "metódico": {
            definition: "Que sigue un método o un orden de forma estricta.",
            example: "Es un investigador metódico que no deja nada al azar."
        },
        "tenue": {
            definition: "Que es muy débil, suave o poco intenso.",
            example: "Una luz tenue iluminaba el pasillo durante la noche."
        },
        "experimentado": {
            definition: "Que tiene mucha experiencia en una labor o campo.",
            example: "Contrataron a un piloto experimentado para la nueva ruta."
        },
        "sereno": {
            definition: "Que está tranquilo y no se deja llevar por las emociones.",
            example: "A pesar de la crisis, se mantuvo sereno y tomó buenas decisiones."
        },
        "exquisita": {
            definition: "Que es de una calidad, refinamiento o sabor superior.",
            example: "La comida en este restaurante es realmente exquisita."
        },
        "ambiguo": {
            definition: "Que puede entenderse de varias formas o que es poco claro.",
            example: "Su respuesta fue tan ambigua que no supimos qué pensar."
        },
        "encarnizada": {
            definition: "Que es muy violento, cruel o hecho con mucha saña.",
            example: "Los dos equipos mantuvieron una lucha encarnizada por el título."
        },
        "opulento": {
            definition: "Que tiene mucha riqueza o que muestra un lujo excesivo.",
            example: "Vive en un barrio opulento rodeado de grandes mansiones."
        },
        "fulminante": {
            definition: "Que ocurre de forma súbita y con gran rapidez y efecto.",
            example: "Recibió un despido fulminante tras el incidente de ayer."
        },
        "polvoriento": {
            definition: "Que está cubierto de polvo o tiene mucho polvo.",
            example: "Encontramos el libro en un estante polvoriento del sótano."
        },
        "idílico": {
            definition: "Que es perfecto, hermoso y transmite una paz ideal.",
            example: "Pasamos las vacaciones en un caserío idílico en el campo."
        },
        "radiante": {
            definition: "Que brilla de forma intensa o que muestra mucha alegría.",
            example: "La novia estaba radiante mientras caminaba hacia el altar."
        },
        "angosto": {
            definition: "Que es estrecho o tiene poco espacio de sobra.",
            example: "El coche apenas podía pasar por aquel callejón tan angosto."
        },
        "asfixiante": {
            definition: "Que dificulta la respiración o produce agobio y opresión.",
            example: "Hacía un calor asfixiante dentro de la habitación sin aire."
        },
        "canicular": {
            definition: "Relativo al período de mayor calor durante el verano.",
            example: "Estamos sufriendo un calor canicular que no deja salir a la calle."
        },
        "milenario": {
            definition: "Que tiene mil años o más; que pertenece a una época remota.",
            example: "Las pirámides son un monumento milenario de la humanidad."
        },
        "laborioso": {
            definition: "Que requiere mucho trabajo, tiempo y esfuerzo constante.",
            example: "La preparación del festival fue un proceso laborioso de meses."
        },
        "magistral": {
            definition: "Hecho con la habilidad y el saber de un maestro.",
            example: "Dio una conferencia magistral que dejó a todos impresionados."
        },
        "abrupto": {
            definition: "Que es escarpado o que sucede de forma repentina e inesperada.",
            example: "Hubo un cambio abrupto en la política de la empresa."
        },
        "copiosa": {
            definition: "Que es muy abundante o numerosa.",
            example: "Tras el examen, disfrutamos de una comida copiosa para celebrar."
        },
        "sagaz": {
            definition: "Que es astuto, inteligente y difícil de engañar.",
            example: "Un detective sagaz siempre nota los detalles más pequeños."
        },
        "elocuente": {
            definition: "Que tiene la facultad de hablar con fluidez y persuasión.",
            example: "Hizo un discurso elocuente que convenció a los indecisos."
        },
        "escéptico": {
            definition: "Que duda o no cree en lo que se le dice sin pruebas.",
            example: "Soy escéptico sobre la veracidad de esos rumores en redes."
        },
        "atenuar": {
            definition: "Disminuir la intensidad, fuerza o gravedad de algo.",
            example: "Pusieron cortinas para atenuar la luz directa del sol."
        },
        "quijotesco": {
            definition: "Que es idealista y desinteresado hasta lo poco práctico.",
            example: "Persigue un sueño quijotesco de acabar con la pobreza mundial."
        },
        "aversión": {
            definition: "Sentimiento de rechazo o asco profundo hacia algo.",
            example: "Siento una gran aversion por la comida demasiado picante."
        },
        "integridad": {
            definition: "Calidad de recto, honesto e incorruptible.",
            example: "Su integridad moral es un ejemplo para toda la oficina."
        },
        "psicología": {
            definition: "Ciencia que estudia los procesos mentales y la conducta.",
            example: "La psicología nos ayuda a entender mejor nuestras emociones."
        },
        "desmentir": {
            definition: "Demostrar que algo que se ha dicho no es verdad.",
            example: "El ministro tuvo que salir a desmentir las acusaciones falsas."
        },
        "serendipia": {
            definition: "Hallazgo afortunado e inesperado que se produce por azar.",
            example: "El descubrimiento de la penicilina fue una clara serendipia."
        },
        "monólogo": {
            definition: "Discurso que mantiene una persona consigo misma o para otros.",
            example: "La obra termina con un conmovedor monólogo del protagonista."
        },
        "retórica": {
            definition: "Arte de expresarse con corrección y eficacia para conmover.",
            example: "Sus palabras tenían mucha retórica pero poco contenido real."
        },
        "deshumanizar": {
            definition: "Privar a alguien o algo de sus caracteres humanos.",
            example: "Ciertas instituciones tienden a deshumanizar a los usuarios."
        },
        "emprendedor": {
            definition: "Persona que inicia con resolución acciones dificultosas o negocios.",
            example: "Es un emprendedor nato que ya ha montado tres empresas."
        },
        "irreverente": {
            definition: "Que falta al respeto a lo que se considera sagrado o serio.",
            example: "Esa comedia tiene un tono irreverente que gusta a los jóvenes."
        },
        "repudiar": {
            definition: "Rechazar algo, no aceptarlo o no reconocerlo legalmente.",
            example: "La sociedad debe repudiar cualquier acto de violencia."
        },
        "adolescente": {
            definition: "Persona que está en la etapa entre la niñez y la edad adulta.",
            example: "A esa edad, el adolescente busca su propia identidad."
        },
        "aniquilar": {
            definition: "Destruir a alguien o algo por completo, reducir a la nada.",
            example: "La bomba atómica puede aniquilar ciudades enteras en un segundo."
        },
        "astrónomo": {
            definition: "Persona que se dedica profesionalmente a la astronomía.",
            example: "El astrónomo descubrió un nuevo planeta fuera del sistema solar."
        },
        "abdicar": {
            definition: "Renunciar un rey o príncipe a su trono o dignidad real.",
            example: "El rey decidió abdicar para dejar paso a su hija mayor."
        },
        "anonimato": {
            definition: "Estado de la persona que oculta su nombre o no es conocida.",
            example: "El autor de la carta prefirió mantenerse en el anonimato."
        },
        "antónimo": {
            definition: "Palabra que tiene un significado opuesto a otra.",
            example: "'Oscuro' es el antónimo perfecto de 'claro'."
        },
        "canonizar": {
            definition: "Declarar santo a un difunto por parte de la Iglesia.",
            example: "El proceso para canonizar al obispo duró varias décadas."
        },
        "epigrama": {
            definition: "Composición poética breve que expresa un pensamiento agudo.",
            example: "Escribió un epigrama burlón sobre la vida en la corte real."
        },
        "manifiesto": {
            definition: "Documento en el que una persona o grupo declara sus ideas.",
            example: "Los artistas publicaron un manifiesto contra la censura."
        },
        "estético": {
            definition: "Relativo al arte, a la belleza o a la percepción de la misma.",
            example: "La decoración busca un equilibrio estético y funcional."
        },
        "apaciguar": {
            definition: "Poner en paz, sosiego o calma a quien estaba excitado.",
            example: "Trató de apaciguar los ánimos antes de que la discusión fuera a más."
        },
        "iconoclasta": {
            definition: "Persona que rechaza las normas establecidas o las imágenes sagradas.",
            example: "Siempre fue un espíritu iconoclasta que desafiaba a los críticos."
        },
        "vivaz": {
            definition: "Que es vivo, alegre, con mucha energía e ingenio.",
            example: "Era un niño vivaz que no paraba de hacer preguntas curiosas."
        },
        "proliferar": {
            definition: "Multiplicarse o aumentar rápidamente el número de algo.",
            example: "Las tiendas de bajo coste han empezado a proliferar por el centro."
        },
        "penetrante": {
            definition: "Que penetra o tiene capacidad para introducirse en algo.",
            example: "La luz penetrante del faro se veía incluso a través de la niebla."
        },
        "emblemático": {
            definition: "Que sirve de emblema o es representativo de algo.",
            example: "La Torre Eiffel es el monumento más emblemático de París."
        },
        "sepulcral": {
            definition: "Propio de la sepultura o relativo a ella; triste o lúgubre.",
            example: "Un silencio sepulcral reinó en la sala tras conocer la noticia."
        },
        "inestimable": {
            definition: "Que no puede ser valorado o cuyo valor es muy grande.",
            example: "Su ayuda durante la mudanza fue de un valor inestimable."
        },
        "diminuto": {
            definition: "Extremadamente pequeño.",
            example: "Un diminuto grano de arena entró en mi ojo y me molestaba."
        },
        "férrea": {
            definition: "Que es de hierro o tiene sus propiedades; duro, firme.",
            example: "Mantenía una disciplina férrea con sus alumnos de esgrima."
        },
        "despiadado": {
            definition: "Que no siente piedad ni compasión, muy cruel.",
            example: "El dictador se mostró despiadado con quienes lo cuestionaban."
        },
        "cegadora": {
            definition: "Que priva de la vista por ser demasiado intensa.",
            example: "La luz cegadora de la nieve nos obligó a usar gafas de sol."
        },
        "arcano": {
            definition: "Secreto, recóndito o muy difícil de conocer.",
            example: "Era un saber arcano transmitido solo de maestros a discípulos."
        },
        "prodigiosa": {
            definition: "Que es extraordinario, maravilloso o fuera de lo común.",
            example: "Tiene una memoria prodigiosa para recordar fechas antiguas."
        },
        "remoto": {
            definition: "Que está muy lejos en el espacio o en el tiempo.",
            example: "Viven en un pueblo remoto al que solo se llega en mula."
        },
        "omnipresente": {
            definition: "Que está presente en todas partes al mismo tiempo.",
            example: "La publicidad es hoy en día un fenómeno omnipresente."
        },
        "íntegro": {
            definition: "Que es recto, honesto y de principios firmes.",
            example: "Es un juez íntegro cuya imparcialidad nadie pone en duda."
        },
        "efímera": {
            definition: "Que dura muy poco tiempo, pasajero.",
            example: "La fama en la tele suele ser efímera si no tienes talento real."
        },
        "anacrónico": {
            definition: "Que es propio de otra época o que no corresponde a su tiempo.",
            example: "Ese modo de pensar resulta anacrónico en el siglo veintiuno."
        },
        "armonioso": {
            definition: "Que tiene armonía, proporción y correspondencia.",
            example: "El conjunto de las voces creaba un efecto armonioso y bello."
        },
        "embriagadora": {
            definition: "Que trastorna o cautiva los sentidos como una bebida fuerte.",
            example: "La fragancia de los jazmines era sencillamente embriagadora."
        },
        "simbólico": {
            definition: "Que sirve de símbolo o representa algo de forma abstracta.",
            example: "Le entregaron una llave de oro como gesto simbólico de bienvenida."
        },
        "inexpugnable": {
            definition: "Que no se puede tomar por las armas o vencer.",
            example: "La fortaleza estaba situada en un risco inexpugnable."
        },
        "erudito": {
            definition: "Que tiene amplios conocimientos en diversas materias.",
            example: "El profesor es un erudito en historia del arte renacentista."
        },
        "fosforescente": {
            definition: "Que emite luz en la oscuridad después de haber estado expuesto.",
            example: "Las manecillas del reloj son fosforescentes para ver la hora de noche."
        },
        "emérito": {
            definition: "Jubilado que mantiene sus honores o cargos tras retirarse.",
            example: "Fue nombrado profesor emérito de la universidad tras cuarenta años."
        },
        "sosegado": {
            definition: "Tranquilo, apacible, libre de agitación o turbación.",
            example: "Lleva una vida sosegada en su pequeña casa de la playa."
        },
        "fatal": {
            definition: "Que es inevitable, desgraciado o que causa la muerte.",
            example: "Aquel error en el diseño de los frenos resultó fatal."
        },
        "inquebrantable": {
            definition: "Que no se puede romper, doblegar o torcer.",
            example: "Mantenía una fe inquebrantable en que todo saldría bien."
        },
        "veloz": {
            definition: "Que se mueve con mucha rapidez para desplazarse.",
            example: "El guepardo es el animal terrestre más veloz del mundo."
        },
        "incandescente": {
            definition: "Que emite luz propia por estar a una temperatura muy elevada.",
            example: "El metal incandescente brillaba intensamente en la forja."
        },
        "vetusto": {
            definition: "Extremadamente viejo, antiguo y a menudo deteriorado.",
            example: "Encontramos el baúl en un rincón vetusto del desván."
        },
        "reflexivo": {
            definition: "Que tiende a pensar detenidamente antes de actuar.",
            example: "Es un joven reflexivo que nunca toma decisiones a la ligera."
        },
        "altruista": {
            definition: "Que procura el bien ajeno de forma desinteresada.",
            example: "Su labor altruista en el comedor social es admirable."
        },
        "indefenso": {
            definition: "Que no tiene medios para defenderse por sí mismo.",
            example: "El animal herido estaba indefenso en mitad del bosque."
        },
        "diestro": {
            definition: "Que tiene mucha habilidad o destreza manual o física.",
            example: "Es muy diestro manejando el bisturí en microcirugía."
        },
        "ancestral": {
            definition: "Perteneciente a los antepasados o de épocas muy remotas.",
            example: "Siguen practicando ritos ancestrales que datan de siglos atrás."
        },
        "amortiguado": {
            definition: "Que ha sido suavizado o disminuido en su intensidad.",
            example: "El sonido de sus pasos llegaba amortiguado por la moqueta."
        },
        "angelical": {
            definition: "Propio de los ángeles, puro, inocente y muy bello.",
            example: "Tenía una mirada angelical que inspiraba ternura a todos."
        },
        "pavorosa": {
            definition: "Que causa pavor, mucho espanto o miedo extremo.",
            example: "La escena del incendio fue verdaderamente pavorosa."
        },
        "omnisciente": {
            definition: "Que conoce todas las cosas reales y posibles.",
            example: "En las novelas clásicas, es común encontrar un narrador omnisciente."
        },
        "concentrada": {
            definition: "Que se ha reunido en un solo punto o tiene mucha intensidad.",
            example: "La luz concentrada del láser puede cortar materiales duros."
        },
        "fortuito": {
            definition: "Que sucede de casualidad, sin haber sido planeado.",
            example: "Fue un encuentro fortuito en la parada del autobús."
        },
        "resplandeciente": {
            definition: "Que despide rayos de luz o brilla muchísimo.",
            example: "Al abrir la caja, vimos el oro resplandeciente bajo la lámpara."
        },
        "inédito": {
            definition: "Que aún no ha sido publicado o es completamente nuevo.",
            example: "Han encontrado un poema inédito del famoso escritor."
        },
        "creativa": {
            definition: "Que tiene capacidad para crear o inventar cosas nuevas.",
            example: "Es una mente creativa que siempre encuentra soluciones originales."
        },
        "minucioso": {
            definition: "Que se hace con mucho detenimiento, detalle y precisión.",
            example: "Realizó un minucioso estudio de todos los gastos mensuales."
        },
        "determinante": {
            definition: "Que decide, resuelve o establece algo de forma definitiva.",
            example: "Su voto fue determinante para la aprobación del nuevo proyecto."
        },
        "impenetrable": {
            definition: "Que no se puede atravesar o que es imposible de conocer.",
            example: "Se escondieron en una zona de bosque impenetrable por la maleza."
        },
        "artificial": {
            definition: "Hecho por el ser humano y no por la naturaleza.",
            example: "Usaron césped artificial para cubrir la terraza del piso."
        },
        "obsoleto": {
            definition: "Que ha dejado de usarse por ser antiguo o poco adecuado.",
            example: "Este sistema operativo ya es obsoleto y no recibe actualizaciones."
        },
        "previsora": {
            definition: "Que previene y se prepara para el futuro o dificultades.",
            example: "Es una persona previsora que siempre viaja con un botiquín."
        },
        "sutil": {
            definition: "Delicado, fino y difícil de percibir a simple vista.",
            example: "Hay un aroma sutil a vainilla en toda la pastelería."
        },
        "torrencial": {
            definition: "Que cae con mucha fuerza y en gran abundancia.",
            example: "La lluvia torrencial colapsó el tráfico en toda la ciudad."
        },
        "estoico": {
            definition: "Que soporta el dolor o la desgracia con fortaleza y calma.",
            example: "Se mostró estoico ante las críticas y siguió con su labor."
        },
        "centelleante": {
            definition: "Que brilla emitiendo destellos rápidos e intermitentes.",
            example: "Las estrellas centelleantes decoraban el cielo oscuro de invierno."
        },
        "enfermo": {
            definition: "Que padece una alteración de la salud o mal funcionamiento.",
            example: "El roble estaba enfermo y por eso tuvieron que talarlo."
        },
        "fotogénica": {
            definition: "Que resulta atractiva o sale muy bien en las fotografías.",
            example: "Es una ciudad muy fotogénica con sus canales y puentes."
        },
        "crucial": {
            definition: "Que es decisivo o fundamental para el desarrollo de algo.",
            example: "Este es un momento crucial para el futuro de nuestra especie."
        },
        "desorbitada": {
            definition: "Que es excesiva, desmesurada o está fuera de control.",
            example: "Pagaron una cantidad desorbitada por aquel cuadro antiguo."
        },
        "rasante": {
            definition: "Que pasa rozando una superficie o muy cerca de ella.",
            example: "El avión hizo un vuelo rasante sobre la pista de aterrizaje."
        },
        "clasificado": {
            definition: "Que ha sido ordenado por categorías o es secreto oficial.",
            example: "El documento está clasificado como secreto de seguridad nacional."
        },
        "letárgico": {
            definition: "Que padece letargo, modorra o una inactividad profunda.",
            example: "Se sentía letárgico después de la comida tan copiosa."
        },
        "celestial": {
            definition: "Relativo al cielo o que es sumamente hermoso y divino.",
            example: "La música celestial del arpa nos dejó a todos embobados."
        },
        "imperceptible": {
            definition: "Tan débil o sutil que apenas se puede percibir con los sentidos.",
            example: "El movimiento de la aguja era casi imperceptible para el ojo."
        },
        "violenta": {
            definition: "Que se hace con mucha fuerza, ímpetu o agresividad extrema.",
            example: "Hubo una explosión violenta que rompió todos los cristales."
        },
        "hilarante": {
            definition: "Que causa tal risa que no se puede parar de reír.",
            example: "Contó una anécdota hilarante sobre su primer día de trabajo."
        },
        "diáfana": {
            definition: "Limpia, clara y que deja pasar la luz sin obstáculos.",
            example: "La luz diáfana de la mañana entraba alegremente por el balcón."
        },
        "venerable": {
            definition: "Que merece respeto por su edad, virtudes o dignidad.",
            example: "Es un venerable anciano que conoce todas las leyendas del lugar."
        },
        "monumental": {
            definition: "Relativo al monumento o que es de una grandeza extraordinaria.",
            example: "El atasco en la entrada de la ciudad fue verdaderamente monumental."
        },
        "matiz": {
            definition: "Rasgo poco perceptible que da un carácter particular a algo.",
            example: "Esa palabra tiene un matiz de ironía que no todos captaron."
        },
        "implacable": {
            definition: "Que no se puede aplacar, suavizar o que no tiene piedad.",
            example: "El paso del tiempo es implacable con la belleza física."
        },
        "magnánimo": {
            definition: "Que tiene nobleza de espíritu y generosidad superior.",
            example: "Fue un gesto magnánimo perdonar la deuda a su antiguo rival."
        },
        "puntera": {
            definition: "Luz dirigida y muy precisa; o que está en la vanguardia.",
            example: "Utilizan tecnología puntera para el diagnóstico de enfermedades."
        },
        "aséptico": {
            definition: "Libre de infección o, figuradamente, neutro y sin emociones.",
            example: "Había un silencio aséptico en el pasillo del hospital moderno."
        },
        "despreciable": {
            definition: "Que no merece atención; o que es digno de desprecio moral.",
            example: "Consideraron que aquel era un incidente despreciable y sin riesgo."
        },
        "austera": {
            definition: "Severa, rigurosa y carente de adornos o lujos innecesarios.",
            example: "Lleva una vida austera dedicada por entero a sus estudios."
        },
        "incondicional": {
            definition: "Que no pone condiciones, absoluto y sin límites.",
            example: "Siempre ha contado con el apoyo incondicional de su familia."
        },
        "providencial": {
            definition: "Que sucede de forma inesperada y afortunada para salvar algo.",
            example: "Su llegada fue providencial para evitar que el fuego se extendiera."
        },
        "comprometedor": {
            definition: "Que puede poner a alguien en una situación difícil o de riesgo.",
            example: "Encontraron un documento comprometedor en el cajón del despacho."
        },
        "hierático": {
            definition: "De estilo solemne, rígido y sagrado, propio de lo antiguo.",
            example: "El busto egipcio mostraba una expresión hierática y distante."
        },
        "perceptiva": {
            definition: "Relativo a la percepción o con gran capacidad para percibir.",
            example: "Tiene una mirada perceptiva que capta los estados de ánimo ajenos."
        },
        "sustancial": {
            definition: "Que es importante, fundamental o tiene mucho valor real.",
            example: "Hubo una mejora sustancial en los beneficios de este semestre."
        },
        "inclemente": {
            definition: "Que no tiene clemencia, severo y riguroso físicamente.",
            example: "Soportamos un clima inclemente durante toda la expedición al polo."
        },
        "riguroso": {
            definition: "Que es muy exacto, preciso y severo en el cumplimiento.",
            example: "Pasó un control riguroso de seguridad antes de entrar al recinto."
        },
        "rotundo": {
            definition: "Que es claro, definitivo y no deja lugar a dudas ni precisiones.",
            example: "La respuesta del público fue un éxito rotundo para la banda."
        },
        "oscilante": {
            definition: "Que se mueve de un lado a otro o que varía constantemente.",
            example: "La llama oscilante de la vela proyectaba sombras en la pared."
        },
        "iluminado": {
            definition: "Que tiene mucha luz o, en arte, con adornos de colores u oro.",
            example: "El manuscrito iluminado es una de las joyas de la biblioteca."
        },
        "sesgado": {
            definition: "Que presenta una visión parcial, inclinada o no objetiva.",
            example: "El artículo periodístico ofrecía un enfoque sesgado de los hechos."
        },
        "ciclópea": {
            definition: "De una magnitud o fuerza colosal, propia de los cíclopes.",
            example: "Fue una tarea ciclópea reconstruir la ciudad tras el terremoto."
        },
        "fugaz": {
            definition: "Que dura un instante y desaparece muy rápidamente.",
            example: "Vimos cruzar una estrella fugaz y todos pedimos un deseo."
        },
        "señorial": {
            definition: "Que tiene aire de nobleza, distinción o solemnidad elegante.",
            example: "Vivía en una casa señorial en el centro histórico de la ciudad."
        },
        "sobrecogedor": {
            definition: "Que causa una fuerte impresión de respeto, asombro o miedo.",
            example: "El estruendo de la catarata era verdaderamente sobrecogedor."
        },
        "microscópico": {
            definition: "Tan pequeño que solo se puede ver con un microscopio.",
            example: "Detectaron un daño microscópico en la estructura del chip."
        },
        "tenaz": {
            definition: "Que se mantiene firme en sus propósitos o se resiste a romperse.",
            example: "Es un luchador tenaz que nunca se rinde ante las adversidades."
        },
        "potentado": {
            definition: "Persona que tiene una gran riqueza, poder e influencia social.",
            example: "El potentado compró toda la isla para construir su residencia."
        },
        "lumínica": {
            definition: "Relativo a la luz en su aspecto técnico o físico.",
            example: "La potencia lumínica de los nuevos ledes es muy superior."
        },
        "cartográfico": {
            definition: "Relativo a la cartografía o a la elaboración de mapas.",
            example: "Utilizaron un antiguo mapa cartográfico para localizar la mina."
        },
        "místico": {
            definition: "Relativo a la mística, a lo sagrado o al recogimiento espiritual.",
            example: "Había un silencio místico en el interior del antiguo monasterio."
        },
        "ornamental": {
            definition: "Que sirve de adorno o decoración, sin tener utilidad práctica.",
            example: "Pusieron varias plantas ornamentales para alegrar la entrada."
        },
        "vertiginosa": {
            definition: "Que causa vértigo por su gran rapidez o altura.",
            example: "La tecnología avanza a una velocidad vertiginosa cada día."
        }
    }
};
