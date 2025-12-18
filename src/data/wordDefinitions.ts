export interface WordDefinition {
    definition: string;
    example: string;
}

export const WORD_DEFINITIONS: Record<string, Record<string, WordDefinition>> = {
    en: {
        // Precision Swap
        "compelling": {
            definition: "Evoking interest, attention, or admiration in a powerfully irresistible way.",
            example: "The project manager gave a compelling presentation that impressed the board."
        },
        "monstrous": {
            definition: "Having the ugly or frightening appearance of a monster; giant in size.",
            example: "The sudden storm caused monstrous waves that crashed against the harbor wall."
        },
        "venerable": {
            definition: "Accorded a great deal of respect, especially because of age, wisdom, or character.",
            example: "The old library was filled with venerable books and historic manuscripts."
        },
        "glacial": {
            definition: "Extremely cold, as if resulting from a glacier.",
            example: "After the long hike, the water from the mountain stream tasted glacial."
        },
        "imperceptible": {
            definition: "So slight, gradual, or subtle as not to be perceived.",
            example: "The detective noticed an imperceptible crack in the window that everyone else missed."
        },
        "sublime": {
            definition: "Of such excellence, grandeur, or beauty as to inspire great admiration and awe.",
            example: "The sunset over the desert was a sublime sight to behold."
        },
        "instantaneous": {
            definition: "Occurring or done in an instant or instantly.",
            example: "The athlete showed an instantaneous reaction to the starting pistol."
        },
        "ominous": {
            definition: "Giving the impression that something bad or unpleasant is going to happen.",
            example: "The empty hallway felt ominous in the middle of the night."
        },
        "piping": {
            definition: "Specifically used in 'piping hot', meaning very hot (as if water is piping from a kettle).",
            example: "The chef prepared piping hot soup that was perfect for the winter evening."
        },
        "ingenious": {
            definition: "Clever, original, and inventive.",
            example: "His ingenious strategy led the company to record profits."
        },
        "piercing": {
            definition: "Having a sharp or high-pitched sound that is easily heard.",
            example: "The child let out a piercing cry when she saw the puppy."
        },
        "sequestered": {
            definition: "Isolated and hidden away; secluded.",
            example: "They found a sequestered spot in the park to read their books away from the crowd."
        },
        "responsive": {
            definition: "Reacting quickly and positively; in computing, an interface that reacts fast to user input.",
            example: "The new software update made the application very responsive on older computers."
        },
        "commanding": {
            definition: "Having an air of authority; impressive and influential.",
            example: "He has a commanding personality that usually dominates the room."
        },
        "lucid": {
            definition: "Expressed clearly; easy to understand.",
            example: "The teacher gave a lucid explanation of the complex theorem."
        },
        "formidable": {
            definition: "Inspiring fear or respect through being impressively large, powerful, or intense.",
            example: "Writing a novel is a formidable task that requires years of dedication."
        },
        "picturesque": {
            definition: "Visually attractive, especially in a quaint or charming way.",
            example: "The valley was very picturesque in the morning mist."
        },
        "myriad": {
            definition: "A countless or extremely great number.",
            example: "The old car made myriad strange noises as it climbed the hill."
        },
        "prosperous": {
            definition: "Successful in material terms; flourishing financially.",
            example: "The company faces a prosperous future after the merger."
        },
        "flimsy": {
            definition: "Lacking in strength, substance, or credibility.",
            example: "He gave a flimsy excuse for missing the meeting."
        },
        "towering": {
            definition: "Extremely tall, especially in comparison with the surroundings.",
            example: "The mountain peak was hidden by towering clouds."
        },
        "mercurial": {
            definition: "Subject to sudden or unpredictable changes of mood or mind; also moving very quickly.",
            example: "The dancer's movements were mercurial and graceful."
        },
        "dilapidated": {
            definition: "In a state of disrepair or ruin as a result of age or neglect.",
            example: "The old bridge was finally demolished after years of sitting dilapidated."
        },
        "pin-drop": {
            definition: "Used to describe a place that is so quiet you could hear a pin drop.",
            example: "The room was pin-drop silent during the final exam."
        },
        "inclement": {
            definition: "Unpleasantly cold or wet weather.",
            example: "The inclement weather forced them to cancel the outdoor concert."
        },
        "diminutive": {
            definition: "Extremely or unusually small.",
            example: "The diminutive kitten was found shivering in the rain."
        },
        "substantial": {
            definition: "Of considerable importance, size, or worth.",
            example: "The company reported a substantial increase in year-over-year revenue."
        },
        "radiant": {
            definition: "Sending out light; shining or glowing brightly.",
            example: "The bright moonlight reflected off the lake in a radiant glow."
        },
        "eloquent": {
            definition: "Fluent or persuasive in speaking or writing.",
            example: "She has an eloquent way of explaining complicated topics."
        },
        "gale-force": {
            definition: "Relating to winds of great strength (gales).",
            example: "The gale-force wind nearly knocked him over."
        },
        "elementary": {
            definition: "Relating to the most basic aspects of a subject; straightforward.",
            example: "The task was elementary for someone with her years of experience."
        },
        "melancholy": {
            definition: "A feeling of pensive sadness, typically with no obvious cause.",
            example: "He felt melancholy after watching the emotional documentary."
        },
        "fleet-footed": {
            definition: "Able to run fast.",
            example: "The fleet-footed runner won the gold medal."
        },
        "immaculate": {
            definition: "Perfectly clean, neat, or tidy; free from flaws.",
            example: "The kitchen was immaculate after hours of scrubbing."
        },
        "elderly": {
            definition: "Showing signs of old age; a respectful term for old people.",
            example: "The elderly man told stories about his long and adventurous youth."
        },
        "unfathomable": {
            definition: "Incapable of being fully explored or understood; extremely deep.",
            example: "The dark forest was full of unfathomable mysteries."
        },
        "astute": {
            definition: "Having or showing an ability to accurately assess situations and turn this to one's advantage.",
            example: "He made an astute comment that changed the direction of the debate."
        },
        "contemporary": {
            definition: "Belonging to or occurring in the present; modern.",
            example: "The contemporary building stands out clearly in the city skyline."
        },
        "abundant": {
            definition: "Existing or available in large quantities; plentiful.",
            example: "There were abundant flowers blooming in the garden this spring."
        },
        "congested": {
            definition: "So crowded with traffic or people as to hinder freedom of movement.",
            example: "The congested traffic made him late for his important meeting."
        },
        "striking": {
            definition: "Attractively unusual or extreme; making a strong impression.",
            example: "She has a striking face that immediately attracts attention."
        },
        "impacted": {
            definition: "Pressed firmly together or packed down tightly.",
            example: "The impacted ground was difficult to dig into for the new garden."
        },
        "ethereal": {
            definition: "Extremely delicate and light in a way that seems out of this world.",
            example: "The ethereal music helped him drift into a peaceful sleep."
        },
        "scorching": {
            definition: "Very hot; burning.",
            example: "The scorching desert sun beat down on the weary travelers."
        },
        "deafening": {
            definition: "So loud as to make it impossible to hear anything else.",
            example: "The deafening explosion could be heard for miles around."
        },
        "biting": {
            definition: "Extremely cold; also sharp and cutting.",
            example: "The biting wind made the branches sway and crack."
        },
        "precocious": {
            definition: "Having developed certain abilities or inclinations at an earlier age than is usual.",
            example: "The precocious puppy learned the trick in just five minutes."
        },
        "ramshackle": {
            definition: "In a state of severe disrepair; house that is old and broken.",
            example: "The old house was ramshackle and needed expensive repairs."
        },
        "peerless": {
            definition: "Unequaled; unrivaled.",
            example: "The surgeon performed a peerless operation under intense pressure."
        },
        "excruciating": {
            definition: "Intensely painful.",
            example: "The runner felt excruciating pain in his leg during the final sprint."
        },
        "crystalline": {
            definition: "Very clear; pure as crystal.",
            example: "The crystalline water in the mountain lake was beautiful to see."
        },
        "meteoric": {
            definition: "Very rapid and successful.",
            example: "The meteoric growth of the startup surprised the cautious investors."
        },
        "incandescent": {
            definition: "Emitting light as a result of being heated; also extremely bright.",
            example: "The incandescent light from the lighthouse guided the ships home."
        },
        "balmy": {
            definition: "Pleasantly warm weather.",
            example: "The balmy breeze made the summer afternoon pleasant for everyone."
        },
        "happy": {
            definition: "Feeling or showing pleasure or contentment.",
            example: "She was happy to see her old friends again."
        },
        "sad": {
            definition: "Feeling or showing sorrow; unhappy.",
            example: "He felt sad after the movie ended."
        },
        "big": {
            definition: "Of considerable size, extent, or intensity.",
            example: "They live in a big house near the park."
        },
        "smart": {
            definition: "Having or showing a quick-witted intelligence.",
            example: "She is a smart student who always asks good questions."
        },
        "beautiful": {
            definition: "Pleasing the senses or mind aesthetically.",
            example: "The flowers in the garden are beautiful."
        },
        "angry": {
            definition: "Feeling or showing strong annoyance, displeasure, or hostility.",
            example: "He was angry because his flight was canceled."
        },
        "fast": {
            definition: "Moving or capable of moving at high speed.",
            example: "The new train is very fast."
        },
        "small": {
            definition: "Of a size that is less than normal or usual.",
            example: "The kitten is still very small."
        },
        "strong": {
            definition: "Having the power to move heavy weights or perform other physically demanding tasks.",
            example: "The athlete is very strong and can lift heavy weights."
        },
        "easy": {
            definition: "Achieved without great effort; presenting few difficulties.",
            example: "The test was surprisingly easy."
        },
        "difficult": {
            definition: "Needing much effort or skill to accomplish, deal with, or understand.",
            example: "Solving the puzzle was quite difficult."
        },
        "cold": {
            definition: "Of or at a low or relatively low temperature.",
            example: "It's very cold outside today."
        },
        "hot": {
            definition: "Having a high degree of heat or a high temperature.",
            example: "The soup is still very hot."
        },
        "good": {
            definition: "To be desired or approved of; of high quality.",
            example: "This is a good book that I highly recommend."
        },
        "bad": {
            definition: "Of poor quality or low standard; not good.",
            example: "The weather was bad all weekend."
        },
        "old": {
            definition: "Having lived for a long time; no longer young.",
            example: "The old building has a lot of history."
        },
        "new": {
            definition: "Not existing before; made, introduced, or discovered recently or now for the first time.",
            example: "I bought a new car last week."
        },
        "important": {
            definition: "Of great value; having a great effect or influence.",
            example: "It is important to drink enough water every day."
        },
        "interesting": {
            definition: "Arousing curiosity or interest; holding or catching the attention.",
            example: "The documentary was very interesting."
        },
        "scary": {
            definition: "Causing fear or alarm; frightening.",
            example: "The dark forest looked scary at night."
        },
        "funny": {
            definition: "Causing laughter or amusement; humorous.",
            example: "He told a funny story that made everyone laugh."
        },
        "quiet": {
            definition: "Making little or no noise.",
            example: "The library is usually very quiet."
        },
        "loud": {
            definition: "Producing or capable of producing much noise; easily heard.",
            example: "The music at the concert was very loud."
        },
        "rich": {
            definition: "Having a great deal of money or assets; wealthy.",
            example: "He became rich after selling his company."
        },
        "poor": {
            definition: "Lacking sufficient money to live at a standard considered comfortable or normal in a society.",
            example: "The charity helps poor families in the area."
        },
        "brave": {
            definition: "Ready to face and endure danger or pain; showing courage.",
            example: "The firefighter was very brave."
        },
        "calm": {
            definition: "Not showing or feeling nervousness, anger, or other strong emotions.",
            example: "She stayed calm during the emergency."
        },
        "bright": {
            definition: "Giving out or reflecting a lot of light; shining.",
            example: "The sun is very bright today."
        },
        "timid": {
            definition: "Showing a lack of courage or confidence; easily frightened.",
            example: "The timid dog hid behind the sofa."
        },
        "dangerous": {
            definition: "Able or likely to cause harm or injury.",
            example: "It is dangerous to walk alone at night in that area."
        },
        "clear": {
            definition: "Easy to perceive, understand, or interpret.",
            example: "The instructions were clear and easy to follow."
        },
        "dirty": {
            definition: "Covered or marked with an unclean substance.",
            example: "His shoes were dirty after playing in the mud."
        },
        "helpful": {
            definition: "Giving or ready to give help.",
            example: "The staff were very helpful and friendly."
        },
        "thin": {
            definition: "Having opposite surfaces or sides close together; of little thickness or depth.",
            example: "The paper is very thin."
        },
        "brilliant": {
            definition: "Exceptionally clever or talented.",
            example: "She came up with a brilliant solution to the problem."
        },
        "cheap": {
            definition: "Low in price, especially in relation to similar items or services.",
            example: "This store sells cheap groceries."
        },
        "friendly": {
            definition: "Kind and pleasant.",
            example: "The neighbors are very friendly."
        },
        "honest": {
            definition: "Free of deceit and untruthfulness; sincere.",
            example: "He gave an honest answer to the question."
        },
        "silent": {
            definition: "Not making or accompanied by any sound.",
            example: "The room was silent after he left."
        },
        "warm": {
            definition: "Of or at a fairly or comfortably high temperature.",
            example: "It's a warm day today."
        },
        "transparent": {
            definition: "Allowing light to pass through so that objects behind can be distinctly seen.",
            example: "The glass is perfectly transparent."
        },
        "efficient": {
            definition: "Achieving maximum productivity with minimum wasted effort or expense.",
            example: "The new system is much more efficient."
        },
        "fragile": {
            definition: "Easily broken or damaged.",
            example: "Be careful with that vase, it's very fragile."
        },
        "curious": {
            definition: "Eager to know or learn something.",
            example: "Children are naturally curious about the world."
        },
        "morning": {
            definition: "The period of time between midnight and noon, especially from sunrise to noon.",
            example: "I usually go for a run in the morning."
        },
        "breakfast": {
            definition: "The first meal of the day, typically eaten in the morning.",
            example: "I had eggs and toast for breakfast."
        },
        "commute": {
            definition: "Travel some distance between one's home and place of work on a regular basis.",
            example: "Her daily commute takes about an hour."
        },
        "work": {
            definition: "Activity involving mental or physical effort done in order to achieve a purpose or result.",
            example: "He is going to work now."
        },
        "lunch": {
            definition: "A meal eaten in the middle of the day, typically one that is lighter or less formal than an evening meal.",
            example: "We had lunch at a small cafe."
        },
        "passionate": {
            definition: "Showing or caused by strong feelings or a strong belief.",
            example: "She is passionate about music."
        },
        "creative": {
            definition: "Relating to or involving the imagination or original ideas, especially in the production of an artistic work.",
            example: "He has a very creative mind."
        },
        "relaxing": {
            definition: "Reducing tension or anxiety.",
            example: "A warm bath can be very relaxing."
        },
        "rewarding": {
            definition: "Providing satisfaction; worthwhile.",
            example: "Teaching can be a very rewarding career."
        },
        "knowledge": {
            definition: "Facts, information, and skills acquired by a person through experience or education.",
            example: "Reading books is a great way to gain knowledge."
        },
        "skills": {
            definition: "The ability to do something well; expertise.",
            example: "She has excellent communication skills."
        },
        "future": {
            definition: "The time or a period of time following the moment of speaking or writing.",
            example: "No one knows what the future holds."
        },
        "connectivity": {
            definition: "The state or quality of being connected.",
            example: "The new office has great internet connectivity."
        },
        "influence": {
            definition: "The capacity to have an effect on the character, development, or behavior of someone or something.",
            example: "Her parents had a big influence on her career choice."
        },

        // Reverse Definitions / Synonyms / Incorporation Words
        "approve": {
            definition: "To officially agree to or accept something.",
            example: "The manager approved the proposal after a careful review."
        },
        "elation": {
            definition: "A feeling of great happiness and triumph.",
            example: "She was filled with elation after winning the first prize."
        },
        "meticulous": {
            definition: "Showing great attention to detail; very careful and precise.",
            example: "He was meticulous in his preparation for the audit."
        },
        "resilient": {
            definition: "Able to withstand or recover quickly from difficult conditions.",
            example: "The community showed how resilient it was after the storm."
        },
        "unprecedented": {
            definition: "Never done or known before.",
            example: "The company achieved unprecedented success this quarter."
        },
        "ubiquitous": {
            definition: "Present, appearing, or found everywhere.",
            example: "Cell phones have become ubiquitous in modern society."
        },
        "mitigate": {
            definition: "To make less severe, serious, or painful.",
            example: "The new measures were designed to mitigate the risks."
        },
        "paradigm": {
            definition: "A typical example or pattern of something; a model.",
            example: "The new theory created a paradigm shift in the field of science."
        },
        "ephemeral": {
            definition: "Lasting for a very short time.",
            example: "The beauty of the sunset was ephemeral but unforgettable."
        },
        "ambiguity": {
            definition: "The quality of being open to more than one interpretation; inexactness.",
            example: "The wording of the law avoids any ambiguity."
        },
        "innovation": {
            definition: "The action or process of innovating; a new method, idea, or product.",
            example: "Innovation is key to staying ahead in the market."
        },
        "sustainability": {
            definition: "The ability to be maintained at a certain rate or level.",
            example: "The company's focus on sustainability has improved its reputation."
        },
        "collaboration": {
            definition: "The action of working with someone to produce or create something.",
            example: "Collaboration between departments led to a better product."
        },
        "perspective": {
            definition: "A particular attitude toward or way of regarding something; a point of view.",
            example: "Getting a new perspective can help you solve the problem."
        },
        "strategic": {
            definition: "Relating to the identification of long-term or overall aims and interests and the means of achieving them.",
            example: "The CEO made a strategic decision to expand into global markets."
        }
    },
    fr: {
        // Precision Swap
        "judicieuse": {
            definition: "Prise avec bon sens et justesse de jugement.",
            example: "La directrice a pris une décision judicieuse pour l'entreprise."
        },
        "impétueux": {
            definition: "Qui a un mouvement vif, violent et rapide.",
            example: "Le vent impétueux soufflait avec force sur la côte sauvage."
        },
        "ténue": {
            definition: "Trés mince, trés fine, ou d'une intensité trés faible.",
            example: "Une lueur ténue filtrait sous la porte de la chambre."
        },
        "transcendant": {
            definition: "Qui s'élève au-dessus d'un certain niveau ou d'une certaine norme.",
            example: "Cette oeuvre musicale a un caractère transcendant."
        },
        "séculaire": {
            definition: "Qui dure depuis un siècle, ou qui se produit tous les siècles.",
            example: "Le château séculaire domine majestueusement toute la vallée."
        },
        "astucieux": {
            definition: "Qui manifeste de l'astuce, de l'habileté et de l'ingéniosité.",
            example: "Il a trouvé un moyen astucieux de résoudre ce problème complexe."
        },
        "limpide": {
            definition: "D'une clarté parfaite, qui laisse passer la lumière sans obstacle.",
            example: "L'eau de la source était si limpide qu'on voyait le moindre caillou."
        },
        "fracassant": {
            definition: "Qui produit un bruit violent, comme si quelque chose se brisait.",
            example: "L'explosion a fait un bruit fracassant qui a réveillé tout le quartier."
        },
        "infime": {
            definition: "Extrêmement petit, situé au bas de l'échelle.",
            example: "Même une erreur infime peut avoir de lourdes conséquences ici."
        },
        "alléchante": {
            definition: "Qui tente, qui attire par une apparence agréable.",
            example: "L'odeur alléchante de la cuisine nous a ouvert l'appétit."
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
            definition: "Qui en impose par son aspect, par son grandeur, par son masse.",
            example: "Le nouveau bâtiment est vraiment imposant vu de l'extérieur."
        },
        "suave": {
            definition: "D'une douceur agréable aux sens, harmonieuse.",
            example: "Une musique suave jouait doucement en arrière-plan."
        },
        "novateur": {
            definition: "Qui introduit des nouveautés, des changements positifs.",
            example: "C'est un projet novateur qui bouscule les habitudes du secteur."
        },
        "fluet": {
            definition: "Mince, grêle, de constitution délicate.",
            example: "Le petit ruisseau au débit fluet serpentait entre les rochers."
        },
        "diluvienne": {
            definition: "Qui a le caractère d'un déluge, pluie extrêmement abondante.",
            example: "Une pluie diluvienne s'est abattue sur la ville pendant des heures."
        },
        "bienveillant": {
            definition: "Qui manifeste de la bonté, de la gentillesse et de la compréhension.",
            example: "Il a toujours eu un regard bienveillant sur mon travail."
        },
        "éblouissante": {
            definition: "Qui éblouit par son éclat, sa lumière ou sa splendeur.",
            example: "Une lumière éblouissante provenait de la scène."
        },
        "archaïque": {
            definition: "Qui est d'une époque très ancienne, qui n'est plus d'usage.",
            example: "Le vieux manuscrit était écrit dans une langue archaïque."
        },
        "imperturbable": {
            definition: "Que rien ne peut troubler, agiter ou déranger.",
            example: "Le silence imperturbable de la nuit régnait sur le village."
        },
        "panoramique": {
            definition: "Qui offre une vue étendue dans toutes les directions.",
            example: "La vue panoramique depuis le sommet était tout simplement époustouflante."
        },
        "subtil": {
            definition: "Qui a une finesse d'esprit, qui est délicat à percevoir.",
            example: "Il y a un changement subtil dans l'air ce matin."
        },
        "accablante": {
            definition: "Qui accable par sa force, son poids ou son intensité.",
            example: "La chaleur accablante nous empêchait de sortir cet après-midi."
        },
        "intrépide": {
            definition: "Qui ne craint pas le danger, qui est d'un courage exemplaire.",
            example: "Le jeune héros s'est montré intrépide face aux obstacles."
        },
        "diaphane": {
            definition: "Qui laisse passer la lumière à travers sa masse, translucide.",
            example: "La lumière diaphane de la lune filtrait à travers les nuages fins."
        },
        "tonitruant": {
            definition: "Qui fait un bruit de tonnerre, extrêmement sonore.",
            example: "Un tonnerre tonitruant a retenti juste au-dessus de nous."
        },
        "chétive": {
            definition: "De faible constitution, qui paraît fragile et malingre.",
            example: "Une fleur chétive essayait de pousser entre les pavés."
        },
        "ravissante": {
            definition: "Qui cause un ravissement, d'une grande beauté ou trés agréable.",
            example: "Cette nouvelle est tout simplement ravissante, je suis ravi !"
        },
        "fastidieux": {
            definition: "Qui cause de l'ennui par sa lenteur ou sa monotonie.",
            example: "Le nettoyage du jardin s'est avéré être une tâche fastidieuse."
        },
        "exigeant": {
            definition: "Qui demande beaucoup de soin, d'efforts ou d'attention.",
            example: "C'est un poste exigeant qui nécessite une grande rigueur."
        },
        "immaculé": {
            definition: "D'une pureté parfaite, sans aucune tache.",
            example: "La neige fraîche offrait un paysage immaculé au lever du jour."
        },
        "cinglante": {
            definition: "Qui est trés vif et piquant (comme un coup de fouet).",
            example: "L'eau cinglante de la mer nous a réveillés instantanément."
        },
        "somptueux": {
            definition: "Qui est d'une richesse magnifique, d'un luxe éclatant.",
            example: "Le dîner a été servi dans un cadre somptueux."
        },
        "lénifiante": {
            definition: "Qui calme, qui apaise la douleur ou l'inquiétude.",
            example: "Une musique lénifiante passait à la radio pour détendre les auditeurs."
        },
        "pionnier": {
            definition: "Qui est le premier à ouvrir une voie, à introduire une idée nouvelle.",
            example: "C'est un travail pionnier dans le domaine de l'intelligence artificielle."
        },
        "minuscule": {
            definition: "De taille trés réduite, trés petit.",
            example: "Un insecte minuscule se promenait sur la table."
        },
        "vigoureuse": {
            definition: "Qui a de la force, de l'énergie et de la vitalité.",
            example: "La plante a eu une croissance vigoureuse grâce à l'engrais."
        },
        "courtois": {
            definition: "Qui est d'une politesse raffinée et élégante.",
            example: "Il s'est montré trés courtois envers tous les invités."
        },
        "scintillante": {
            definition: "Qui brille par intermittence, avec des éclats de lumière.",
            example: "L'eau de mer était scintillante sous les rayons du soleil."
        },
        "délabré": {
            definition: "Qui est en trés mauvais état, qui tombe en ruine.",
            example: "Ils habitent dans un appartement délabré qui aurait besoin de travaux."
        },
        "sépulcral": {
            definition: "Qui évoque la tombe, d'un silence ou d'une tristesse lugubre.",
            example: "Le silence sépulcral de la grotte nous a un peu effrayés."
        },
        "féerique": {
            definition: "Qui appartient au monde des fées, merveilleux et magique.",
            example: "Le décor du spectacle était vraiment féerique."
        },
        "dérisoire": {
            definition: "Si petit ou insignifiant qu'il en est ridicule.",
            example: "Il a reçu une somme dérisoire pour tout son travail acharné."
        },
        "irrésistible": {
            definition: "À quoi on ne peut pas résister, trés puissant.",
            example: "Il a un charme irrésistible qui séduit tout le monde."
        },
        "orgueilleux": {
            definition: "Qui a une trés haute opinion de soi-même, fier.",
            example: "C'est un homme orgueilleux qui n'admet jamais ses erreurs."
        },
        "estompée": {
            definition: "Dont les contours ou l'intensité ont été atténués.",
            example: "La lumière estompée du soir donnait une ambiance calme aux rues."
        },
        "assourdissant": {
            definition: "Qui fait un bruit si fort qu'il empêche d'entendre.",
            example: "Le vacarme des travaux est devenu assourdissant."
        },
        "radieux": {
            definition: "Qui rayonne de joie, de lumière ou de bonheur.",
            example: "Il affichait un sourire radieux après sa victoire."
        },
        "médiéval": {
            definition: "Qui date du Moyen Âge.",
            example: "La ville possède encore des remparts médiévaux trés bien conservés."
        },
        "religieux": {
            definition: "Qui manifeste un grand respect, un silence profond (au sens figuré).",
            example: "Un silence religieux s'est installé dans la salle de conférence."
        },
        "luxuriante": {
            definition: "Qui pousse avec une abondance excessive et magnifique.",
            example: "La jungle offre une végétation luxuriante et colorée."
        },
        "insigne": {
            definition: "Remarquable par sa valeur morale ou son importance.",
            example: "Elle a accompli un geste insigne en sauvant cet enfant."
        },
        "massive": {
            definition: "Qui forme une masse importante, compacte et lourde.",
            example: "Une forte demande massive a entraîné la rupture des stocks."
        },
        "éloquent": {
            definition: "Qui a de l'éloquence, qui parle avec facilité et persuasion.",
            example: "Il a fait un discours éloquent qui a convaincu toute l'assemblée."
        }
    },
    es: {
        // Precision Swap
        "imponente": {
            definition: "Que causa una gran impresión de majestad, poder o tamaño.",
            example: "El imponente palacio se alzaba sobre la colina, dominando el paisaje."
        },
        "deslumbrante": {
            definition: "Que causa una impresión muy fuerte o deja ciego por su luz intensa.",
            example: "La luz deslumbrante del sol se reflejaba con fuerza en la nieve."
        },
        "ilegible": {
            definition: "Que no se puede leer, ya sea por estar mal escrito o deteriorado.",
            example: "El viejo pergamino era casi ilegible debido a la humedad."
        },
        "apacible": {
            definition: "Relajado, tranquilo y libre de preocupaciones o ruidos.",
            example: "Pasaron una tarde apacible junto al lago, disfrutando del silencio."
        },
        "suculenta": {
            definition: "Que es muy sabroso, jugoso y nutritivo.",
            example: "Nos sirvieron una suculenta cena que nos dejó completamente satisfechos."
        },
        "revelador": {
            definition: "Que descubre algo que estaba oculto o que da información clave.",
            example: "El detective encontró un dato revelador que cambió el curso de la investigación."
        },
        "devastadora": {
            definition: "Que causa una gran destrucción o un daño muy profundo.",
            example: "La tormenta fue devastadora y dejó a miles de personas sin hogar."
        },
        "intrépido": {
            definition: "Que no teme al peligro y actúa con gran valor y determinación.",
            example: "El intrépido explorador se adentró en la selva sin dudarlo."
        },
        "sublime": {
            definition: "De una excelencia, belleza o grandeza excepcionales que inspiran asombro.",
            example: "La interpretación de la orquesta fue absolutamente sublime."
        },
        "garrafal": {
            definition: "Que es muy grande, especialmente cuando se refiere a un error.",
            example: "Cometió un error garrafal al olvidar firmar el contrato a tiempo."
        },
        "panorámica": {
            definition: "Que permite ver una amplia extensión de terreno desde un punto alto.",
            example: "Desde la cima de la montaña teníamos una vista panorámica del valle."
        },
        "imperturbable": {
            definition: "Que no se deja alterar, conmover o perturbar por nada.",
            example: "Mantuvo un silencio imperturbable durante toda la reunión."
        },
        "alentadora": {
            definition: "Que infunde ánimo, esperanza o valor.",
            example: "Recibimos una noticia alentadora sobre el estado de salud de mi abuelo."
        },
        "agotador": {
            definition: "Que consume todas las energías y causa un gran cansancio.",
            example: "Fue un día agotador de trabajo bajo el sol intenso."
        },
        "arduo": {
            definition: "Que es muy difícil y requiere mucho esfuerzo y dedicación.",
            example: "La reconstrucción del puente será un trabajo arduo de varios meses."
        },
        "despejado": {
            definition: "Libre de nubes, obstáculos o confusiones.",
            example: "El cielo estaba completamente despejado tras la fuerte tormenta."
        },
        "gélida": {
            definition: "Que es extremadamente fría, hasta el punto de congelar.",
            example: "El agua gélida del río nos cortó la respiración al entrar."
        },
        "suntuoso": {
            definition: "Que es magnífico, lujoso y extremadamente costoso.",
            example: "Asistieron a un baile suntuoso en el salón más grande de la ciudad."
        },
        "sedante": {
            definition: "Que tiene la propiedad de calmar, tranquilizar o inducir el sueño.",
            example: "La música suave tenía un efecto sedante en el bebé inquieto."
        },
        "revolucionario": {
            definition: "Que produce un cambio profundo, radical y novedoso.",
            example: "El nuevo invento resultó ser un avance revolucionario para la medicina."
        },
        "minúsculo": {
            definition: "Que es de un tamaño extremadamente pequeño.",
            example: "Encontraron un insecto minúsculo que nunca antes habían visto."
        },
        "impetuosa": {
            definition: "Que tiene mucha fuerza, viveza o rapidez en su movimiento.",
            example: "La impetuosa brisa movía las ramas con gran energía."
        },
        "atento": {
            definition: "Que muestra cortesía, amabilidad y cuidado por los demás.",
            example: "El anfitrión fue muy atento con todos sus invitados desde que llegaron."
        },
        "fulgurante": {
            definition: "Que brilla de forma intensa, vibrante y repentina.",
            example: "Vimos un resplandor fulgurante en el horizonte durante la noche."
        },
        "ruinoso": {
            definition: "Que está en un estado de mucha decadencia o a punto de caerse.",
            example: "El viejo edificio estaba en un estado ruinoso y peligroso."
        },
        "solemne": {
            definition: "Que se celebra con gran ceremonia o que inspira un profundo respeto.",
            example: "Se guardó un minuto de silencio solemne en memoria de los caídos."
        },
        "conmovedora": {
            definition: "Que provoca una emoción fuerte de ternura, tristeza o alegría.",
            example: "La película cuenta una historia conmovedora que hizo llorar a todos."
        },
        "irrisorio": {
            definition: "Tan pequeño o insignificante que causa risa o desprecio.",
            example: "Le ofrecieron un pago irrisorio por un trabajo de ocho horas."
        },
        "irresistible": {
            definition: "A lo que no se puede oponer resistencia por su gran fuerza o atractivo.",
            example: "Había un aroma irresistible saliendo de la panadería esa mañana."
        },
        "ferviente": {
            definition: "Que muestra un entusiasmo, pasión o ardor muy intensos.",
            example: "Es un ferviente defensor de los derechos de los animales."
        },
        "vibrante": {
            definition: "Que vibra o que es muy intenso, vivo y lleno de energía.",
            example: "El amanecer pintó el cielo con colores vibrantes y hermosos."
        },
        "centenario": {
            definition: "Que tiene cien o más años de antigüedad.",
            example: "El centenario roble es el símbolo de nuestra plaza principal."
        },
        "absoluto": {
            definition: "Que es completo, total y no admite excepciones ni dudas.",
            example: "Se hizo un silencio absoluto cuando el director entró en la sala."
        },
        "impecable": {
            definition: "Que no tiene ninguna falta, error o defecto; perfecto.",
            example: "La organización del congreso fue simplemente impecable."
        },
        "frágil": {
            definition: "Que se rompe con facilidad o que es débil y delicado físicamente.",
            example: "El nido del pájaro parecía muy frágil ante el fuerte viento."
        },
        "persistente": {
            definition: "Que se mantiene constante por un largo tiempo sin detenerse.",
            example: "La lluvia persistente acabó inundando los sótanos de la zona baja."
        },
        "metódico": {
            definition: "Que sigue un método o sistema con gran orden y regularidad.",
            example: "Es un hombre muy metódico en su forma de organizar el trabajo."
        },
        "tenue": {
            definition: "Que es muy delgado, fino o que tiene poca intensidad.",
            example: "Una luz tenue se filtraba por la rendija de la puerta cerrada."
        },
        "experimentado": {
            definition: "Que tiene mucha experiencia y habilidad en una actividad.",
            example: "El experimentado marinero sabía leer las señales de la tormenta."
        },
        "sereno": {
            definition: "Que es tranquilo, apacible y libre de cualquier agitación.",
            example: "Mantuvo un semblante sereno a pesar de las malas noticias."
        },
        "exquisita": {
            definition: "De una calidad, refinamiento o sabor extraordinarios.",
            example: "La pintura en el techo de la capilla es una pieza exquisita."
        },
        "ambiguo": {
            definition: "Que puede entenderse de varias formas o que admite dudas.",
            example: "El mensaje del contrato era ambiguo y causó problemas legales."
        },
        "encarnizada": {
            definition: "Que es muy violento, feroz y se hace con mucha determinación.",
            example: "Hubo una lucha encarnizada por el control de la empresa."
        },
        "opulento": {
            definition: "Que posee una gran riqueza, abundancia y lujo excesivo.",
            example: "Viven en un barrio opulento rodeado de mansiones y parques."
        },
        "fulminante": {
            definition: "Que es muy rápido, repentino y de efecto inmediato y potente.",
            example: "El rayo tuvo un efecto fulminante en el viejo árbol del patio."
        },
        "polvoriento": {
            definition: "Que está cubierto de polvo por falta de uso o limpieza.",
            example: "Encontraron los expedientes en un rincón polvoriento del sótano."
        },
        "idílico": {
            definition: "Que es ideal, perfecto y produce una gran paz o felicidad.",
            example: "Pasaron sus vacaciones en un lugar idílico frente al mar azul."
        },
        "radiante": {
            definition: "Que brilla intensamente o que refleja una gran felicidad.",
            example: "La novia lucía radiante con su vestido blanco al caminar al altar."
        },
        "angosto": {
            definition: "Que es estrecho o que tiene poco espacio lateral.",
            example: "El pasillo de la casa antigua era demasiado angosto para dos personas."
        },
        "asfixiante": {
            definition: "Que dificulta la respiración o que produce una opresión insoportable.",
            example: "El calor dentro del coche sin aire era realmente asfixiante."
        },
        "canicular": {
            definition: "Relativo al período del año de más calor (la canícula).",
            example: "Eran los días caniculares de agosto y no se podía estar en la calle."
        },
        "milenario": {
            definition: "Que tiene mil o más años de antigüedad.",
            example: "El puente milenario sigue en uso después de tantos siglos."
        },
        "laborioso": {
            definition: "Que requiere mucho trabajo, tiempo y esfuerzo constante.",
            example: "Ha sido un proceso laborioso pero los resultados valen la pena."
        },
        "magistral": {
            definition: "Hecho con maestría, habilidad o conocimiento superior.",
            example: "Dio una conferencia magistral que dejó a todos impresionados."
        },
        "abrupto": {
            definition: "Repentino, inesperado o que tiene una pendiente muy pronunciada.",
            example: "El cambio abrupto de temperatura nos tomó por sorpresa."
        },
        "copiosa": {
            definition: "Que es muy abundante o numeroso.",
            example: "Hubo una nevada copiosa que bloqueó todas las salidas del pueblo."
        },
        "sagaz": {
            definition: "Que es astuto, inteligente y difícil de engañar.",
            example: "Es un abogado sagaz que siempre encuentra el punto débil del rival."
        }
    }
};
