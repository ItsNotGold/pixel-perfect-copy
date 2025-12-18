export interface WordDefinition {
    definition: string;
    example: string;
}

/**
 * MANUAL DICTIONARY DATA
 * All definitions and examples are curated manually.
 * Structure: Record<LanguageCode, Record<Word, WordDefinition>>
 */
export const WORD_DEFINITIONS: Record<string, Record<string, WordDefinition>> = {
    en: {
        // --- Precision Swap & General Vocabulary ---
        "wise": {
            definition: "Having or showing experience, knowledge, and good judgment.",
            example: "Choosing to save for the future was a wise decision."
        },
        "clear": {
            definition: "Easy to perceive, understand, or interpret; transparent.",
            example: "The instructions were clear and easy to follow."
        },
        "beautiful": {
            definition: "Pleasing the senses or mind aesthetically.",
            example: "The sunset over the mountain was absolutely beautiful."
        },
        "large": {
            definition: "Of considerable size, extent, or capacity.",
            example: "They live in a large house with a beautiful garden."
        },
        "penetrating": {
            definition: "Able to make its way through or into something; piercing.",
            example: "Her penetrating gaze made him feel quite uncomfortable."
        },
        "emblematic": {
            definition: "Serving as a symbol of a particular quality or concept.",
            example: "The eagle is emblematic of strength and freedom."
        },
        "sepulchral": {
            definition: "Relating to a tomb or interment; gloomy and dismal.",
            example: "A sepulchral silence filled the abandoned cathedral."
        },
        "inestimable": {
            definition: "Too great to be calculated or estimated.",
            example: "The museum's collection is of inestimable value."
        },
        "diminutive": {
            definition: "Extremely or unusually small.",
            example: "The tiny bird was a diminutive creature compared to the eagle."
        },
        "iron": {
            definition: "A strong, hard magnetic silvery-gray metal.",
            example: "The gate was made of heavy wrought iron."
        },
        "ruthless": {
            definition: "Having or showing no pity or compassion for others.",
            example: "The ruthless leader would stop at nothing to gain power."
        },
        "blinding": {
            definition: "So bright as to obscure vision.",
            example: "The snow was so white it created a blinding glare."
        },
        "arcane": {
            definition: "Understood by few; mysterious or secret.",
            example: "He spent years studying arcane rituals from ancient texts."
        },
        "prodigious": {
            definition: "Remarkably or impressively great in extent, size, or degree.",
            example: "She has a prodigious memory for historical dates and names."
        },
        "remote": {
            definition: "Far apart; distant in space, time, or relation.",
            example: "They lived in a remote village deep in the mountains."
        },
        "omnipresent": {
            definition: "Widely or constantly encountered; common or widespread.",
            example: "The fear of failure is often omnipresent in high-stakes environments."
        },
        "integrity": {
            definition: "The quality of being honest and having strong moral principles.",
            example: "She is a person of great integrity who always keeps her word."
        },
        "ephemeral": {
            definition: "Lasting for a very short time.",
            example: "The beauty of a flower is often beautiful but ephemeral."
        },
        "anachronistic": {
            definition: "Belonging or appropriate to a period other than that in which it exists.",
            example: "Using a typewriter in a modern office can seem anachronistic."
        },
        "harmonious": {
            definition: "Forming a pleasing or consistent whole; tuneful.",
            example: "The colors in the room combined to create a harmonious atmosphere."
        },
        "intoxicating": {
            definition: "Extremely exciting or exhilarating; causing a loss of control.",
            example: "The success of the play was an intoxicating experience for the actors."
        },
        "symbolic": {
            definition: "Serving as a symbol; representing something else.",
            example: "The dove is symbolic of peace and hope."
        },
        "inexpugnable": {
            definition: "Unable to be taken by assault; unconquerable.",
            example: "The fortress was built on an inexpugnable cliffside."
        },
        "erudite": {
            definition: "Having or showing great knowledge or learning.",
            example: "The erudite professor spoke at length about ancient civilizations."
        },
        "phosphorescent": {
            definition: "Emitting light without heat; glowing in the dark.",
            example: "The waves were phosphorescent, glowing as they hit the shore."
        },
        "emeritus": {
            definition: "Retired but allowed to retain their title as an honor.",
            example: "The emeritus dean still attended university ceremonies."
        },
        "placid": {
            definition: "Not easily upset or excited; calm and peaceful.",
            example: "The lake remained placid despite the incoming storm clouds."
        },
        "fatal": {
            definition: "Causing death; leading to failure or disaster.",
            example: "A fatal error in the code caused the system to crash."
        },
        "unwavering": {
            definition: "Steady or resolute; not wavering or hesitating.",
            example: "She showed unwavering support for her friend during the crisis."
        },
        "swift": {
            definition: "Moving or capable of moving with great speed.",
            example: "The hawk made a swift descent to catch its prey."
        },
        "incandescent": {
            definition: "Emitting light as a result of being heated; extremely bright.",
            example: "The incandescent bulbs provided a warm glow to the room."
        },
        "vetust": {
            definition: "Extremely old; ancient and weathered.",
            example: "The vetust building looked as if it could crumble at any moment."
        },
        "reflective": {
            definition: "Providing a reflection; relating to deep thought.",
            example: "He sat in a reflective mood, thinking about his past choices."
        },
        "altruistic": {
            definition: "Showing a disinterested and selfless concern for others.",
            example: "Her altruistic acts helped many people in the local community."
        },
        "defenseless": {
            definition: "Without defense or protection; vulnerable.",
            example: "The small animal was defenseless against the larger predator."
        },
        "adept": {
            definition: "Very skilled or proficient at something.",
            example: "She is an adept programmer who can solve complex problems quickly."
        },
        "ancestral": {
            definition: "Of, belonging to, or inherited from an ancestor.",
            example: "They visited their ancestral home in the countryside."
        },
        "muffled": {
            definition: "Not loud because of being obstructed in some way; muted.",
            example: "I heard the muffled sound of voices through the thick wall."
        },
        "angelic": {
            definition: "Relating to angels; exceptionally beautiful or kind.",
            example: "The child had an angelic face that melted everyone's hearts."
        },
        "dreadful": {
            definition: "Causing or involving great suffering, fear, or unhappiness.",
            example: "The news of the accident was absolutely dreadful."
        },
        "omniscient": {
            definition: "Knowing everything; having infinite awareness or insight.",
            example: "The narrator of the story was omniscient, knowing every character's thoughts."
        },
        "concentrated": {
            definition: "Wholly directed to one thing; intense or potent.",
            example: "The juice was too concentrated and needed to be diluted with water."
        },
        "fortuitous": {
            definition: "Happening by a lucky accident or chance rather than design.",
            example: "The discovery of the gold mine was completely fortuitous."
        },
        "resplendent": {
            definition: "Attractive and impressive through being richly colorful or shining.",
            example: "She looked resplendent in her silk evening gown."
        },
        "unpublished": {
            definition: "Not yet made public; not issued in a print or digital format.",
            example: "The author left behind several unpublished manuscripts."
        },
        "creative": {
            definition: "Relating to or involving the imagination or original ideas.",
            example: "He is a creative artist who constantly experiments with new styles."
        },
        "meticulous": {
            definition: "Showing great attention to detail; very careful and precise.",
            example: "She was meticulous in her preparations for the final exam."
        },
        "decisive": {
            definition: "Settling an issue; producing a definite result.",
            example: "The general made a decisive move that won the battle."
        },
        "impenetrable": {
            definition: "Impossible to pass through or enter; impossible to understand.",
            example: "The thick jungle was an impenetrable wall of green."
        },
        "artificial": {
            definition: "Made or produced by human beings rather than occurring naturally.",
            example: "The museum used artificial light to preserve the delicate paintings."
        },
        "obsolete": {
            definition: "No longer produced or used; out of date.",
            example: "Typewriters have become largely obsolete in the age of computers."
        },
        "farsighted": {
            definition: "Having or showing imagination or foresight; able to see far objects clearly.",
            example: "The CEO's farsighted strategy led the company to long-term success."
        },
        "subtle": {
            definition: "So delicate or precise as to be difficult to analyze or describe.",
            example: "There was a subtle change in his tone that indicated he was lying."
        },
        "torrential": {
            definition: "Falling rapidly and in copious quantities; flowing with great force.",
            example: "The torrential rain caused flooding in several parts of the city."
        },
        "stoic": {
            definition: "A person who can endure pain or hardship without showing feelings.",
            example: "He remained stoic throughout the long and difficult trial."
        },
        "scintillating": {
            definition: "Sparkling or shining brightly; brilliantly clever or exciting.",
            example: "She gave a scintillating performance that captivated the audience."
        },
        "infirm": {
            definition: "Not physically or mentally strong, especially through age or illness.",
            example: "The hospital provided care for the infirm and elderly patients."
        },
        "photogenic": {
            definition: "Looking attractive in photographs or on film.",
            example: "The coastal town with its blue doors was incredibly photogenic."
        },
        "crucial": {
            definition: "Decisive or critical, especially in the success or failure of something.",
            example: "This meeting is crucial for the future of our partnership."
        },
        "exorbitant": {
            definition: "Unreasonably high; excessive.",
            example: "The restaurant charged an exorbitant price for a simple meal."
        },
        "grazing": {
            definition: "Touching or hitting something lightly in passing; eating grass.",
            example: "The bullet left only a grazing wound on his shoulder."
        },
        "classified": {
            definition: "Arranged in classes or categories; kept secret for security.",
            example: "The agents were handling highly classified documents."
        },
        "lethargic": {
            definition: "Affected by lethargy; sluggish and apathetic.",
            example: "He felt lethargic after eating a large and heavy lunch."
        },
        "celestial": {
            definition: "Positioned in or relating to the sky, or outer space.",
            example: "The stars and planets are celestial bodies visible at night."
        },
        "imperceptible": {
            definition: "So slight, gradual, or subtle as not to be perceived.",
            example: "The increase in temperature was almost imperceptible at first."
        },
        "violent": {
            definition: "Using or involving physical force intended to hurt or kill.",
            example: "The city was rocked by several violent protests last week."
        },
        "hilarious": {
            definition: "Extremely amusing; causing laughter.",
            example: "His stand-up comedy routine was absolutely hilarious."
        },
        "diaphanous": {
            definition: "Light, delicate, and translucent.",
            example: "The curtains were made of a diaphanous, white fabric."
        },
        "venerable": {
            definition: "Accorded a great deal of respect, especially because of age.",
            example: "The venerable old oak tree had stood in the park for centuries."
        },
        "monumental": {
            definition: "Great in importance, extent, or size.",
            example: "The discovery of gravity was a monumental moment in science."
        },
        "nuance": {
            definition: "A subtle difference in or shade of meaning, expression, or color.",
            example: "The actor captured every nuance of the character's emotions."
        },
        "implacable": {
            definition: "Unable to be placated; relentless or unstoppable.",
            example: "He faced an implacable enemy who refused to surrender."
        },
        "magnanimous": {
            definition: "Generous or forgiving, especially toward a rival or less powerful person.",
            example: "It was magnanimous of him to admit his mistake publicly."
        },
        "leading": {
            definition: "Most important; guidance or direction.",
            example: "She is a leading expert in the field of renewable energy."
        },
        "aseptic": {
            definition: "Free from contamination caused by harmful bacteria or viruses.",
            example: "The surgery was performed in a strictly aseptic environment."
        },
        "negligible": {
            definition: "So small or unimportant as to be not worth considering.",
            example: "The risk of side effects from the medication is negligible."
        },
        "austere": {
            definition: "Severe or strict in manner, attitude, or appearance.",
            example: "The monastery had an austere dining hall with simple benches."
        },
        "unconditional": {
            definition: "Not subject to any conditions; absolute.",
            example: "Parents often give their children unconditional love."
        },
        "providential": {
            definition: "Occurring at a favorable time; divine or lucky.",
            example: "His arrival at that moment was truly providential."
        },
        "compromising": {
            definition: "Revealing that someone has done something wrong or embarrassing.",
            example: "The leak of the compromising photos ruined the politician's career."
        },
        "hieratic": {
            definition: "Of or concerning priests; priestly.",
            example: "The ancient text was written in a formal, hieratic style."
        },
        "perceptive": {
            definition: "Having or showing sensitive insight; observant.",
            example: "Her perceptive observation helped us solve the mystery."
        },
        "substantial": {
            definition: "Of considerable importance, size, or worth.",
            example: "They received a substantial amount of funding for the project."
        },
        "inclement": {
            definition: "Unpleasantly cold or wet weather.",
            example: "The match was postponed due to inclement weather conditions."
        },
        "rigorous": {
            definition: "Extremely thorough, exhaustive, or accurate.",
            example: "The new medicine underwent rigorous testing before being approved."
        },
        "rotund": {
            definition: "Plump or rounded in shape.",
            example: "The cherub was a rotund little figure in the painting."
        },
        "oscillating": {
            definition: "Moving or swinging back and forth at a regular speed.",
            example: "The oscillating fan kept the room cool during the summer heat."
        },
        "illuminated": {
            definition: "Lit up; decorated with lights or gold/silver.",
            example: "The illuminated manuscript was a masterpiece of medieval art."
        },
        "biased": {
            definition: "Unfairly prejudiced for or against someone or something.",
            example: "The referee's decision was seen as biased by the home team's fans."
        },
        "cyclopean": {
            definition: "Extremely massive; made of huge stones.",
            example: "The ruins were built with cyclopean walls that stood for ages."
        },
        "fugacious": {
            definition: "Tending to disappear; fleeting.",
            example: "The fugacious beauty of youth is a common theme in poetry."
        },
        "stately": {
            definition: "Having a dignified, unhurried, and grand manner.",
            example: "The stately home was surrounded by acres of beautiful gardens."
        },
        "breathtaking": {
            definition: "Astonishing or awe-inspiring in quality.",
            example: "The view from the top of the mountain was absolutely breathtaking."
        },
        "microscopic": {
            definition: "So small as to be visible only with a microscope.",
            example: "Bacteria are microscopic organisms that can be found everywhere."
        },
        "tenacious": {
            definition: "Tending to keep a firm hold of something; clinging or adhering closely.",
            example: "He was a tenacious runner who never gave up, even when tired."
        },
        "potentate": {
            definition: "A monarch or ruler, especially an autocratic one.",
            example: "The foreign potentate arrived with a massive royal entourage."
        },
        "luminous": {
            definition: "Full of or shedding light; bright or shining, especially in the dark.",
            example: "The jellyfish were luminous, lighting up the dark ocean water."
        },
        "cartographical": {
            definition: "Relating to the science or practice of drawing maps.",
            example: "The cartographical accuracy of the new atlas is impressive."
        },
        "mystical": {
            definition: "Relating to or characteristic of mysticism; inspiring awe.",
            example: "He had a mystical experience while meditating in the forest."
        },
        "ornamental": {
            definition: "Serving as an ornament; decorative.",
            example: "The garden was filled with ornamental shrubs and flowers."
        },
        "vertiginous": {
            definition: "Causing vertigo, especially by being extremely high or steep.",
            example: "The climber looked down the vertiginous cliff and felt dizzy."
        },

        // --- Reverse Definitions & Word Incorporation ---
        "psychology": {
            definition: "The scientific study of the human mind and its functions.",
            example: "Studying psychology helps us understand human behavior."
        },
        "entrepreneur": {
            definition: "A person who organizes and operates a business.",
            example: "As a young entrepreneur, she started her own tech company."
        },
        "serendipity": {
            definition: "The occurrence and development of events by chance in a happy way.",
            example: "Finding that rare book in the attic was a stroke of serendipity."
        },
        "abdicate": {
            definition: "Renounce one's throne; fail to fulfill a duty.",
            example: "The king decided to abdicate in favor of his son."
        },
        "anonymity": {
            definition: "The condition of being anonymous; unknown name.",
            example: "The whistleblower requested total anonymity for their protection."
        },
        "antonym": {
            definition: "A word opposite in meaning to another.",
            example: "'Hot' is the antonym of 'cold'."
        },
        "canonize": {
            definition: "Officially declare a dead person to be a saint.",
            example: "The church decided to canonize the nun for her lifelong service."
        },
        "epigram": {
            definition: "A pithy saying or remark expressing an idea cleverly.",
            example: "He was known for his witty epigrams about modern life."
        },
        "manifesto": {
            definition: "A public declaration of policy and aims.",
            example: "The political party released its election manifesto yesterday."
        },
        "aesthetic": {
            definition: "Concerned with beauty or the appreciation of beauty.",
            example: "The new cafe has a very modern and clean aesthetic."
        },
        "iconoclast": {
            definition: "A person who attacks cherished beliefs or institutions.",
            example: "As an iconoclast, he enjoyed challenging traditional art norms."
        },
        "proliferate": {
            definition: "Increase rapidly in numbers; multiply.",
            example: "Smartphone apps continue to proliferate at an incredible rate."
        }
    },
    fr: {
        // --- Precision Swap & General Vocabulary ---
        "wise": {
            definition: "Ayant ou montrant de l'expérience, des connaissances et un bon jugement.",
            example: "Choisir d'épargner pour l'avenir était une décision judicieuse."
        },
        "clear": {
            definition: "Facile à percevoir, à comprendre ou à interpréter ; transparent.",
            example: "Les instructions étaient claires et faciles à suivre."
        },
        "beautiful": {
            definition: "Agréable aux sens ou à l'esprit d'un point de vue esthétique.",
            example: "Le coucher de soleil sur la montagne était absolument magnifique."
        },
        "large": {
            definition: "D'une taille, d'une étendue ou d'une capacité considérable.",
            example: "Ils vivent dans une grande maison avec un beau jardin."
        },
        "penetrante": {
            definition: "Capable de se frayer un chemin à travers ou dans quelque chose ; perçant.",
            example: "Son regard pénétrant le mettait mal à l'aise."
        },
        "emblematico": {
            definition: "Servant de symbole à une qualité ou à un concept particulier.",
            example: "L'aigle est emblématique de la force et de la liberté."
        },
        "sepulcral": {
            definition: "Relatif à un tombeau ou à un enterrement ; lugubre et sombre.",
            example: "Un silence sépulcral remplissait la cathédrale abandonnée."
        },
        "inestimable": {
            definition: "Trop grand pour être calculé ou estimé.",
            example: "La collection du musée est d'une valeur inestimable."
        },
        "diminutivo": {
            definition: "Extrêmement ou inhabituellement petit.",
            example: "Le petit oiseau était une créature minuscule comparée à l'aigle."
        },
        "ferreo": {
            definition: "Un métal fort, dur, magnétique, d'un gris argenté.",
            example: "La grille était faite de fer forgé lourd."
        },
        "despiadado": {
            definition: "N'ayant ni pitié ni compassion pour les autres.",
            example: "Le chef impitoyable ne reculerait devant rien pour obtenir le pouvoir."
        },
        "cegadora": {
            definition: "Si brillant qu'il obscurcit la vision.",
            example: "La neige était si blanche qu'elle créait un éclat aveuglant."
        },
        "arcano": {
            definition: "Compris par peu de personnes ; mystérieux ou secret.",
            example: "Il a passé des années à étudier des rituels arcaniques issus de textes anciens."
        },
        "prodigioso": {
            definition: "Remarquablement ou impressionnamment grand en étendue, en taille ou en degré.",
            example: "Elle a une mémoire prodigieuse pour les dates et les noms historiques."
        },
        "remoto": {
            definition: "Éloigné ; distant dans l'espace, le temps ou la relation.",
            example: "Ils vivaient dans un village reculé, au cœur des montagnes."
        },
        "omnipresente": {
            definition: "Largement ou constamment rencontré ; commun ou répandu.",
            example: "La peur de l'échec est souvent omniprésente dans les environnements à enjeux élevés."
        },
        "integro": {
            definition: "La qualité d'être honnête et d'avoir des principes moraux solides.",
            example: "C'est une personne d'une grande intégrité qui tient toujours sa parole."
        },
        "efimera": {
            definition: "Dure pendant un temps très court.",
            example: "La beauté d'une fleur est souvent magnifique mais éphémère."
        },
        "anacronico": {
            definition: "Appartenant ou approprié à une période autre que celle dans laquelle il existe.",
            example: "Utiliser une machine à écrire dans un bureau moderne peut sembler anachronique."
        },
        "armonioso": {
            definition: "Formant un tout agréable ou cohérent ; mélodieux.",
            example: "Les couleurs de la pièce se combinaient pour créer une atmosphère harmonieuse."
        },
        "embriagadora": {
            definition: "Extrêmement excitant ou exaltant ; provoquant une perte de contrôle.",
            example: "Le succès de la pièce a été une expérience enivrante pour les acteurs."
        },
        "simbolico": {
            definition: "Servant de symbole ; représentant quelque chose d'autre.",
            example: "La colombe est symbolique de la paix et de l'espoir."
        },
        "inexpugnable": {
            definition: "Impossible à prendre d'assaut ; inconnaissable.",
            example: "La forteresse a été construite sur une falaise inexpugnable."
        },
        "erudito": {
            definition: "Ayant ou montrant de grandes connaissances ou un grand savoir.",
            example: "Le professeur érudit a parlé longuement des civilisations anciennes."
        },
        "fosforescente": {
            definition: "Émettant de la lumière sans chaleur ; brillant dans l'obscurité.",
            example: "Les vagues étaient phosphorescentes, brillant lorsqu'elles frappaient le rivage."
        },
        "emerito": {
            definition: "Retraité mais autorisé à conserver son titre à titre honorifique.",
            example: "Le doyen émérite assistait toujours aux cérémonies de l'université."
        },
        "sosegado": {
            definition: "Pas facilement contrarié ou excité ; calme et paisible.",
            example: "Le lac restait paisible malgré l'arrivée des nuages d'orage."
        },
        "fatal": {
            definition: "Provoquant la mort ; menant à l'échec ou au désastre.",
            example: "Une erreur fatale dans le code a provoqué le crash du système."
        },
        "inquebrantable": {
            definition: "Fixe ou résolu ; ne vacille pas et n'hésite pas.",
            example: "Elle a montré un soutien indéfectible à son amie pendant la crise."
        },
        "veloz": {
            definition: "Se déplaçant ou capable de se déplacer à grande vitesse.",
            example: "Le faucon a fait une descente rapide pour attraper sa proie."
        },
        "incandescente": {
            definition: "Émettant de la lumière à la suite d'un chauffage ; extrêmement brillant.",
            example: "Les ampoules à incandescence apportaient une lueur chaleureuse à la pièce."
        },
        "vetusto": {
            definition: "Très vieux ; ancien et patiné.",
            example: "Le bâtiment vétuste semblait pouvoir s'écrouler à tout moment."
        },
        "reflexivo": {
            definition: "Fournissant une réflexion ; relatif à une pensée profonde.",
            example: "Il était d'humeur réfléchie, pensant à ses choix passés."
        },
        "altruista": {
            definition: "Montrant une préoccupation désintéressée et altruiste pour les autres.",
            example: "Ses actes altruistes ont aidé de nombreuses personnes de la communauté locale."
        },
        "indefenso": {
            definition: "Sans défense ni protection ; vulnérable.",
            example: "Le petit animal était sans défense face au plus gros prédateur."
        },
        "diestro": {
            definition: "Très qualifié ou compétent dans un domaine.",
            example: "C'est une programmatrice habile qui peut résoudre rapidement des problèmes complexes."
        },
        "ancestral": {
            definition: "De l'ancêtre, appartenant à l'ancêtre ou hérité de lui.",
            example: "Ils ont visité leur maison ancestrale à la campagne."
        },
        "amortiguado": {
            definition: "Pas fort parce qu'il est obstrué d'une manière ou d'une autre ; sourd.",
            example: "J'ai entendu le son étouffé de voix à travers le mur épais."
        },
        "angelical": {
            definition: "Relatif aux anges ; exceptionnellement beau ou gentil.",
            example: "L'enfant avait un visage angélique qui faisait fondre le cœur de tout le monde."
        },
        "pavorosa": {
            definition: "Provoquant ou impliquant une grande souffrance, de la peur ou du malheur.",
            example: "La nouvelle de l'accident était absolument affreuse."
        },
        "omnisciente": {
            definition: "Connaissant tout ; ayant une conscience ou une vision infinie.",
            example: "Le narrateur de l'histoire était omniscient, connaissant les pensées de chaque personnage."
        },
        "concentrada": {
            definition: "Entièrement dirigé vers une chose ; intense ou puissant.",
            example: "Le jus était trop concentré et devait être dilué avec de l'eau."
        },
        "fortuito": {
            definition: "Se produisant par hasard ou coup de chance heureux plutôt que par dessein.",
            example: "La découverte de la mine d'or a été tout à fait fortuite."
        },
        "resplandeciente": {
            definition: "Attrayant et impressionnant par ses couleurs riches ou son éclat.",
            example: "Elle était resplendissante dans sa robe de soirée en soie."
        },
        "inedito": {
            definition: "Pas encore rendu public ; non publié sous format imprimé ou numérique.",
            example: "L'auteur a laissé plusieurs manuscrits inédits."
        },
        "creativa": {
            definition: "Relatif à ou impliquant l'imagination ou des idées originales.",
            example: "C'est un artiste créatif qui expérimente constamment de nouveaux styles."
        },
        "minucioso": {
            definition: "Montrant une grande attention aux détails ; très soigneux et précis.",
            example: "Elle a été méticuleuse dans ses préparations pour l'examen final."
        },
        "determinante": {
            definition: "Régler une question ; produire un résultat définitif.",
            example: "Le général a fait un geste décisif qui a remporté la bataille."
        },
        "impenetrable": {
            definition: "Impossible à traverser ou à entrer ; impossible à comprendre.",
            example: "La jungle épaisse était un mur de vert impénétrable."
        },
        "artificial": {
            definition: "Fabriqué ou produit par des êtres humains plutôt que de manière naturelle.",
            example: "Le musée a utilisé une lumière artificielle pour préserver les peintures délicates."
        },
        "obsoleto": {
            definition: "Plus produit ni utilisé ; démodé.",
            example: "Les machines à écrire sont devenues largement obsolètes à l'ère des ordinateurs."
        },
        "previsora": {
            definition: "Ayant ou montrant de l'imagination ou de la prévoyance ; capable de voir les objets lointains.",
            example: "La stratégie visionnaire du PDG a mené l'entreprise vers un succès à long terme."
        },
        "sutil": {
            definition: "Si délicat ou précis qu'il est difficile à analyser ou à décrire.",
            example: "Il y avait un changement subtil dans son ton qui indiquait qu'il mentait."
        },
        "torrencial": {
            definition: "Tombant rapidement et en quantités copieuses ; coulant avec force.",
            example: "La pluie torrentielle a provoqué des inondations dans plusieurs parties de la ville."
        },
        "estoico": {
            definition: "Une personne qui peut endurer la douleur ou les épreuves sans montrer ses sentiments.",
            example: "Il est resté stoïque tout au long du procès long et difficile."
        },
        "centelleante": {
            definition: "Étincelant ou brillant vivement ; brillamment intelligent ou excitant.",
            example: "Elle a donné une performance scintillante qui a captivé le public."
        },
        "enfermo": {
            definition: "Pas physiquement ou mentalement fort, surtout à cause de l'âge ou de la maladie.",
            example: "L'hôpital offrait des soins aux patients infirmes et âgés."
        },
        "fotogenica": {
            definition: "Attrayant sur les photographies ou à l'écran.",
            example: "La ville côtière avec ses portes bleues était incroyablement photogénique."
        },
        "crucial": {
            definition: "Décisif ou critique, particulièrement dans le succès ou l'échec de quelque chose.",
            example: "Cette réunion est cruciale pour l'avenir de notre partenariat."
        },
        "desorbitada": {
            definition: "Déraisonnablement élevé ; excessif.",
            example: "Le restaurant a facturé un prix exorbitant pour un repas simple."
        },
        "rasante": {
            definition: "Toucher ou frapper légèrement quelque chose en passant ; brouter.",
            example: "La balle n'a laissé qu'une éraflure sur son épaule."
        },
        "clasificado": {
            definition: "Organisé en classes ou catégories ; gardé secret pour la sécurité.",
            example: "Les agents manipulaient des documents hautement classifiés."
        },
        "letargico": {
            definition: "Affecté par la léthargie ; léthargique et apathique.",
            example: "Il se sentait léthargique après avoir mangé un déjeuner copieux et lourd."
        },
        "celestial": {
            definition: "Positionné dans le ciel ou s'y rapportant, ou dans l'espace.",
            example: "Les étoiles et les planètes sont des corps célestes visibles la nuit."
        },
        "imperceptible": {
            definition: "Si léger, progressif ou subtil qu'il ne peut être perçu.",
            example: "L'augmentation de la température était presque imperceptible au début."
        },
        "violenta": {
            definition: "Utiliser ou impliquer une force physique destinée à blesser ou à tuer.",
            example: "La ville a été secouée par plusieurs manifestations violentes la semaine dernière."
        },
        "hilarante": {
            definition: "Extrêmement amusant ; provoquant le rire.",
            example: "Son spectacle de stand-up était absolument hilarant."
        },
        "diaphane": {
            definition: "Léger, délicat et translucide.",
            example: "Les rideaux étaient faits d'un tissu blanc diaphane."
        },
        "venerable": {
            definition: "Accordé d'un grand respect, particulièrement à cause de l'âge.",
            example: "Le vénérable vieux chêne se tenait dans le parc depuis des siècles."
        },
        "monumental": {
            definition: "Grand par son importance, son étendue ou sa taille.",
            example: "La découverte de la gravité a été un moment monumental dans la science."
        },
        "matiz": {
            definition: "Une différence subtile ou une nuance de sens, d'expression ou de couleur.",
            example: "L'acteur a capturé chaque nuance des émotions du personnage."
        },
        "implacable": {
            definition: "Incapable d'être apaisé ; implacable ou imparable.",
            example: "Il faisait face à un ennemi implacable qui refusait de se rendre."
        },
        "magnanimo": {
            definition: "Généreux ou indulgent, surtout envers un rival ou une personne moins puissante.",
            example: "Il a été magnanime d'admettre son erreur publiquement."
        },
        "puntera": {
            definition: "Le plus important ; guide ou direction.",
            example: "C'est une experte de premier plan dans le domaine des énergies renouvelables."
        },
        "aseptico": {
            definition: "Exempt de contamination causée par des bactéries ou des virus nocifs.",
            example: "La chirurgie a été réalisée dans un environnement strictement aseptique."
        },
        "despreciable": {
            definition: "Si petit ou peu important qu'il ne mérite pas d'être pris en considération.",
            example: "Le risque d'effets secondaires du médicament est négligeable."
        },
        "austera": {
            definition: "Sévère ou strict dans la manière, l'attitude ou l'apparence.",
            example: "Le monastère avait un réfectoire austère avec des bancs simples."
        },
        "incondicional": {
            definition: "Non soumis à aucune condition ; absolu.",
            example: "Les parents donnent souvent à leurs enfants un amour inconditionnel."
        },
        "providencial": {
            definition: "Se produisant à un moment favorable ; divin ou chanceux.",
            example: "Son arrivée à ce moment-là a été vraiment providentielle."
        },
        "comprometedor": {
            definition: "Révéler que quelqu'un a fait quelque chose de mal ou de gênant.",
            example: "La fuite des photos compromettantes a ruiné la carrière du politicien."
        },
        "hieratico": {
            definition: "De ou concernant les prêtres ; sacerdotal.",
            example: "Le texte ancien était écrit dans un style hiératique formel."
        },
        "perceptiva": {
            definition: "Avoir ou montrer une vision sensible ; observateur.",
            example: "Son observation perspicace nous a aidés à résoudre le mystère."
        },
        "sustancial": {
            definition: "D'une importance, d'une taille ou d'une valeur considérable.",
            example: "Ils ont reçu un financement substantiel pour le projet."
        },
        "inclemente": {
            definition: "Temps froid ou humide désagréable.",
            example: "Le match a été reporté en raison de mauvaises conditions météorologiques."
        },
        "riguroso": {
            definition: "Extrêmement approfondi, exhaustif ou précis.",
            example: "Le nouveau médicament a subi des tests rigoureux avant d'être approuvé."
        },
        "rotundo": {
            definition: "Dodu ou de forme arrondie.",
            example: "Le chérubin était une petite figure ronde dans le tableau."
        },
        "oscilante": {
            definition: "Se déplaçant ou oscillant d'avant en arrière à une vitesse régulière.",
            example: "Le ventilateur oscillant a gardé la pièce fraîche pendant la chaleur de l'été."
        },
        "iluminado": {
            definition: "Éclairé ; décoré de lumières ou d'or/argent.",
            example: "Le manuscrit enluminé était un chef-d'œuvre de l'art médiéval."
        },
        "sesgado": {
            definition: "Injustement préjugé pour ou contre quelqu'un ou quelque chose.",
            example: "La décision de l'arbitre a été perçue comme biaisée par les supporters de l'équipe locale."
        },
        "ciclopea": {
            definition: "Extrêmement massif ; fait d'énormes pierres.",
            example: "Les ruines ont été construites avec des murs cyclopéens qui ont traversé les âges."
        },
        "fugaz": {
            definition: "Tendant à disparaître ; fugace.",
            example: "La beauté évanescente de la jeunesse est un thème commun en poésie."
        },
        "señorial": {
            definition: "Ayant une manière digne, sereine et grandiose.",
            example: "La demeure seigneuriale était entourée d'hectares de magnifiques jardins."
        },
        "sobrecogedor": {
            definition: "Étonnant ou impressionnant en qualité.",
            example: "La vue depuis le sommet de la montagne était absolument époustouflante."
        },
        "microscopico": {
            definition: "Si petit qu'il n'est visible qu'au microscope.",
            example: "Les bactéries sont des organismes microscopiques que l'on trouve partout."
        },
        "tenaz": {
            definition: "Ayant tendance à garder une prise ferme sur quelque chose ; s'accrocher étroitement.",
            example: "C'était un coureur tenace qui n'abandonnait jamais, même fatigué."
        },
        "potentado": {
            definition: "Un monarque ou un souverain, particulièrement autocratique.",
            example: "Le potentat étranger est arrivé avec un entourage royal massif."
        },
        "lumínica": {
            definition: "Plein de ou diffusant de la lumière ; brillant ou éclatant, surtout dans le noir.",
            example: "Les méduses étaient lumineuses, éclairant l'eau sombre de l'océan."
        },
        "cartografical": {
            definition: "Relatif à la science ou à la pratique de l'élaboration de cartes.",
            example: "La précision cartographique du nouvel atlas est impressionnante."
        },
        "mistico": {
            definition: "Relatif ou caractéristique du mysticisme ; inspirant l'effroi.",
            example: "Il a eu une expérience mystique en méditant dans la forêt."
        },
        "ornamental": {
            definition: "Servant d'ornement ; décoratif.",
            example: "Le jardin était rempli d'arbustes et de fleurs ornementaux."
        },
        "vertiginoso": {
            definition: "Provoquant le vertige, surtout en étant extrêmement haut ou raide.",
            example: "Le grimpeur a regardé vers le bas de la falaise vertigineuse et s'est senti étourdi."
        },

        // --- Reverse Definitions & Word Incorporation ---
        "psychology": {
            definition: "L'étude scientifique de l'esprit humain et de ses fonctions.",
            example: "L'étude de la psychologie nous aide à comprendre le comportement humain."
        },
        "entrepreneur": {
            definition: "Une personne qui organise et exploite une entreprise.",
            example: "En tant que jeune entrepreneuse, elle a lancé sa propre entreprise technologique."
        },
        "serendipity": {
            definition: "L'apparition et le développement d'événements par hasard d'une manière heureuse.",
            example: "Trouver ce livre rare dans le grenier a été un coup de sérendipité."
        },
        // Reverse Definitions (ES translations)
        "elation": {
            definition: "Un sentimiento de gran felicidad y triunfo.",
            example: "Sintió una enorme euforia al recibir la noticia de su ascenso."
        },
        "articulate": {
            definition: "Capaz de expresar ideas clara y eficazmente.",
            example: "Su discurso articulado convenció al consejo."
        },
        "skeptic": {
            definition: "Persona inclinada a dudar o cuestionar opiniones aceptadas.",
            example: "El escéptico solicitó más pruebas antes de aceptar la teoría."
        },
        "ubiquitous": {
            definition: "Presente o encontrado en todas partes.",
            example: "Los teléfonos inteligentes son ubicuos en la vida moderna."
        },
        "understate": {
            definition: "Presentar algo como menos importante o serio de lo que realmente es.",
            example: "Minimizó los riesgos en su informe."
        },
        "mood": {
            definition: "Un estado temporal de ánimo o sentimiento.",
            example: "Su buen humor hizo la reunión más agradable."
        },
        "empathy": {
            definition: "La capacidad de comprender y compartir los sentimientos de otro.",
            example: "Mostrar empatía puede fortalecer las relaciones."
        },
        "quixotic": {
            definition: "Extremadamente idealista; irreal e impráctico.",
            example: "Su plan quijotesco fue admirado pero poco realista."
        },
        "concise": {
            definition: "Expresado de forma breve y directa; conciso.",
            example: "Prefirió resúmenes concisos en lugar de largas disertaciones."
        },
        "aversion": {
            definition: "Un fuerte sentimiento de disgusto o rechazo.",
            example: "Tenía aversión a las fiestas ruidosas."
        },
        "simplify": {
            definition: "Hacer algo más fácil de entender o hacer.",
            example: "Simplificaron las instrucciones para nuevos usuarios."
        },
        "patriot": {
            definition: "Persona que apoya vigorosamente a su país.",
            example: "El patriota fue honrado por su servicio a la nación."
        },
        "ravenous": {
            definition: "Extremadamente hambriento o voraz.",
            example: "Tras la caminata, estaban hambrientos y comieron de inmediato."
        },
        "disprove": {
            definition: "Probar que algo es falso o incorrecto.",
            example: "La nueva evidencia ayudó a refutar la teoría anterior."
        },
        "polyglot": {
            definition: "Persona que conoce y usa varias lenguas.",
            example: "Como políglota, tradujo documentos en diferentes idiomas."
        },
        "serendipitous": {
            definition: "Que ocurre por casualidad de manera feliz o beneficiosa.",
            example: "Su encuentro en el aeropuerto fue totalmente fortuito y afortunado."
        },
        "abolish": {
            definition: "Poner fin oficialmente a un sistema, práctica o institución.",
            example: "El gobierno buscó abolir la ley obsoleta."
        },
        "monologue": {
            definition: "Un largo discurso de una sola persona en una obra o función.",
            example: "El actor pronunció un monólogo que conmovió al público."
        },
        "minimum": {
            definition: "La menor cantidad o número posible o permitido.",
            example: "Establecieron el mínimo requerido para la admisión."
        },
        "proclaim": {
            definition: "Anunciar públicamente o declarar oficialmente.",
            example: "El alcalde proclamará la nueva política en la rueda de prensa."
        },
        "ephemeral": {
            definition: "Que dura un periodo muy corto.",
            example: "La belleza de la flor fue efímera."
        },
        "rhetoric": {
            definition: "El arte del discurso persuasivo o la escritura.",
            example: "La retórica del candidato buscaba emocionar a los votantes."
        },
        "dehumanize": {
            definition: "Privar a alguien de cualidades humanas; tratar como menos que humano.",
            example: "Advirtieron que las políticas podrían deshumanizar a grupos vulnerables."
        },
        "irreverent": {
            definition: "Que muestra falta de respeto por cosas generalmente tomadas en serio.",
            example: "Su humor irreverente ofendió a algunos miembros conservadores."
        },
        "repudiate": {
            definition: "Rechazar o renegar; negar la verdad de algo.",
            example: "Ella repudió las acusaciones y mostró pruebas en su defensa."
        },
        "teenager": {
            definition: "Persona entre 13 y 19 años.",
            example: "El adolescente trabajaba los fines de semana para ahorrar dinero."
        },
        "enhance": {
            definition: "Mejorar o aumentar la calidad o valor de algo.",
            example: "Mejoraron la iluminación para realzar la exposición."
        },
        "ardent": {
            definition: "Apasionado o ferviente; mostrando sentimientos intensos.",
            example: "Era una ardiente defensora del medio ambiente."
        },
        "fallacy": {
            definition: "Una creencia errónea basada en razonamientos defectuosos.",
            example: "El argumento se sostenía en una falacia lógica."
        },
        "annihilate": {
            definition: "Destruir completamente; eliminar por completo.",
            example: "El objetivo parecía aniquilar al pequeño contingente enemigo."
        },
        "astronomer": {
            definition: "Científico que estudia los objetos celestes y el universo.",
            example: "El astrónomo publicó un estudio sobre un exoplaneta nuevo."
        },
        "invincible": {
            definition: "Demasiado fuerte para ser derrotado o superado.",
            example: "La defensa del equipo pareció invencible durante todo el torneo."
        },
        "anonymity": {
            definition: "La condición de ser anónimo; ausencia de identificación.",
            example: "El denunciante pidió anonimato para protegerse."
        },
        "antonym": {
            definition: "Una palabra que significa lo opuesto de otra.",
            example: "'Amor' es el antónimo de 'odio'."
        },
        "claustrophobia": {
            definition: "Miedo extremo a los espacios cerrados.",
            example: "La claustrofobia hizo que el ascensor fuera intolerable para ella."
        },
        "canonize": {
            definition: "Declarar oficialmente santo a alguien en ciertas tradiciones religiosas.",
            example: "El obispo canonizó al monje tras una larga investigación."
        },
        "epigram": {
            definition: "Una frase breve, ingeniosa y a menudo paradójica.",
            example: "Comenzó la charla con un epigrama que hizo sonreír a todos."
        },
        "manifesto": {
            definition: "Declaración pública de motivos o ideas (a menudo política).",
            example: "El colectivo publicó un manifiesto explicando sus objetivos."
        },
        "undermine": {
            definition: "Debilitar o socavar algo, a menudo de forma gradual o secreta.",
            example: "Las filtraciones pretendían socavar la confianza en la administración."
        },
        "aesthetic": {
            definition: "Relacionado con la belleza o la apreciación de la belleza.",
            example: "Su estética prefería líneas simples y elegantes." 
        },
        "epidemic": {
            definition: "Ocurrencia generalizada de una enfermedad infecciosa en una comunidad.",
            example: "La respuesta sanitaria se centró en controlar la epidemia." 
        },
        "lucid": {
            definition: "Expresado claramente; fácil de entender.",
            example: "Su explicación fue lúcida y aclaró el tema complejo." 
        },
        "abridge": {
            definition: "Acortar un texto preservando su contenido esencial.",
            example: "El editor decidió abreviar el artículo para la publicación." 
        },
        "affable": {
            definition: "Amable, agradable y fácil de tratar.",
            example: "El anfitrión era afable y hizo que todos se sintieran cómodos." 
        },
        "minuscule": {
            definition: "Extremadamente pequeño; minúsculo.",
            example: "Quedó una porción minúscula del presupuesto sin gastar." 
        },
        "advocate": {
            definition: "Apoyar públicamente algo; persona que defiende una causa.",
            example: "Se convirtió en una defensora de la seguridad laboral." 
        },
        "ennui": {
            definition: "Sentimiento de hastío y descontento por la falta de ocupación.",
            example: "La rutina larga lo sumió en el aburrimiento." 
        },
        "placate": {
            definition: "Calmar o aplacar a alguien, a menudo mediante concesiones.",
            example: "Pidió disculpas para apaciguar al cliente molesto." 
        },
        "iconoclast": {
            definition: "Persona que ataca creencias o instituciones arraigadas.",
            example: "El iconoclasta desafió las tradiciones en sus escritos." 
        },
        "denounce": {
            definition: "Condenar o criticar públicamente de manera severa.",
            example: "La prensa denunció las prácticas corruptas reveladas por el informe." 
        },
        "vivacious": {
            definition: "Vivaz y animado; lleno de vida.",
            example: "Su personalidad vivaz iluminó la fiesta." 
        },
        "benefactor": {
            definition: "Persona que dona dinero o ayuda a una causa u organización.",
            example: "La nueva biblioteca fue financiada por un generoso benefactor." 
        },
        "pliant": {
            definition: "Flexible o fácilmente influenciable.",
            example: "Su actitud flexible le ayudó a adaptarse rápidamente." 
        },
        "chaos": {
            definition: "Desorden y confusión completos.",
            example: "Cuando se cortó la energía, la estación cayó en el caos." 
        },
        "proliferate": {
            definition: "Multiplicarse rápidamente en número; propagarse.",
            example: "Nuevas aplicaciones proliferan constantemente en el mercado." 
        }
        // Reverse Definitions (FR translations)
        "elation": {
            definition: "Un sentiment de grande joie et de triomphe.",
            example: "Elle a ressenti une allégresse immense en apprenant sa promotion."
        },
        "articulate": {
            definition: "Capable d'exprimer ses idées clairement et efficacement.",
            example: "Son discours articulé a convaincu le jury."
        },
        "skeptic": {
            definition: "Personne qui doute ou questionne ce qu'on lui présente.",
            example: "Le sceptique a demandé des preuves supplémentaires avant de croire."
        },
        "ubiquitous": {
            definition: "Présent, apparaissant ou trouvé partout.",
            example: "Les smartphones sont devenus omniprésents dans la société moderne."
        },
        "understate": {
            definition: "Présenter quelque chose comme moins important qu'il ne l'est réellement.",
            example: "Il a minimisé les risques dans sa présentation."
        },
        "mood": {
            definition: "État d'esprit ou sentiment temporaire.",
            example: "Son humeur joyeuse a rendu la réunion agréable."
        },
        "empathy": {
            definition: "La capacité de comprendre et de partager les sentiments d'autrui.",
            example: "Faire preuve d'empathie renforce souvent les relations."
        },
        "quixotic": {
            definition: "Extrêmement idéaliste ; irréaliste et impraticable.",
            example: "Son plan chimérique n'a pas trouvé d'appui concret."
        },
        "concise": {
            definition: "Exprimé en peu de mots ; bref et précis.",
            example: "Le résumé concis a facilité la lecture du rapport."
        },
        "aversion": {
            definition: "Un fort sentiment de dégoût ou de répulsion.",
            example: "Elle éprouve une aversion pour les grandes foules."
        },
        "simplify": {
            definition: "Rendre quelque chose plus facile à comprendre.",
            example: "Nous avons simplifié les instructions pour les nouveaux utilisateurs."
        },
        "patriot": {
            definition: "Personne qui soutient vigoureusement son pays.",
            example: "Le patriote a défendu son pays avec fierté."
        },
        "ravenous": {
            definition: "Extrêmement affamé ou vorace.",
            example: "Après la randonnée, ils étaient affamés et ont dévoré le repas."
        },
        "disprove": {
            definition: "Montrer que quelque chose est faux ou incorrect.",
            example: "Les nouvelles preuves ont permis de réfuter l'hypothèse précédente."
        },
        "polyglot": {
            definition: "Personne qui parle plusieurs langues.",
            example: "Polyglotte, elle traduisait les conférences internationales."
        },
        "serendipitous": {
            definition: "Survenant par hasard d'une manière heureuse ou bénéfique.",
            example: "Leur rencontre fortuite a été extrêmement heureuse."
        },
        "abolish": {
            definition: "Mettre officiellement fin à quelque chose.",
            example: "Le gouvernement envisage d'abolir cette loi ancienne."
        },
        "monologue": {
            definition: "Un long discours prononcé par une seule personne.",
            example: "L'acteur a livré un monologue poignant qui a ému le public."
        },
        "minimum": {
            definition: "La plus petite quantité possible ou permise.",
            example: "Ils ont fixé le score minimum requis pour l'admission."
        },
        "proclaim": {
            definition: "Annoncer publiquement ou officiellement.",
            example: "Le maire a proclamé la nouvelle politique lors de la conférence."
        },
        "ephemeral": {
            definition: "Qui dure très peu de temps.",
            example: "La floraison était magnifique mais éphémère."
        },
        "rhetoric": {
            definition: "L'art de parler ou d'écrire de manière persuasive.",
            example: "La rhétorique du discours visait à inspirer l'auditoire."
        },
        "dehumanize": {
            definition: "Priver quelqu'un de qualités humaines positives ; traiter comme moins qu'humain.",
            example: "Les politiques risquaient de déshumaniser certains groupes vulnérables."
        },
        "irreverent": {
            definition: "Manquant de respect pour des choses habituellement prises au sérieux.",
            example: "Son humour irrévérencieux heurtait parfois les plus conservateurs."
        },
        "repudiate": {
            definition: "Rejeter ou renier ; refuser d'accepter comme vrai.",
            example: "Elle a nié les accusations et a présenté des preuves contraires."
        },
        "teenager": {
            definition: "Personne âgée de 13 à 19 ans.",
            example: "L'adolescent travaillait à temps partiel en terminant l'école."
        },
        "enhance": {
            definition: "Améliorer ou augmenter quelque chose, particulièrement en qualité ou valeur.",
            example: "Ils ont utilisé l'éclairage pour améliorer la scène."
        },
        "ardent": {
            definition: "Enthousiaste ou passionné ; montrant des sentiments forts.",
            example: "Elle était une ardente défenseure des causes environnementales."
        },
        "fallacy": {
            definition: "Une croyance erronée, souvent fondée sur des raisonnements douteux.",
            example: "L'argument reposait sur une fallacie qui en affaiblissait la validité."
        },
        "annihilate": {
            definition: "Détruire complètement ; anéantir.",
            example: "La mission visait à anéantir la force ennemie."
        },
        "astronomer": {
            definition: "Scientifique qui étudie les étoiles, les planètes et l'univers.",
            example: "L'astronome a publié un article sur une nouvelle exoplanète."
        },
        "invincible": {
            definition: "Trop puissant pour être vaincu ou surmonté.",
            example: "La défense de l'équipe semblait invincible lors du championnat."
        },
        "anonymity": {
            definition: "État d'être anonyme ; absence d'identification.",
            example: "Le lanceur d'alerte a demandé l'anonymat pour se protéger."
        },
        "antonym": {
            definition: "Mot ayant le sens opposé d'un autre mot.",
            example: "'Aimer' est l'antonyme de 'détester'."
        },
        "claustrophobia": {
            definition: "Peur extrême des espaces confinés.",
            example: "Sa claustrophobie rendait l'ascenseur insupportable."
        },
        "canonize": {
            definition: "Rendre officiellement quelqu'un saint dans certaines traditions religieuses.",
            example: "Le moine a été canonisé après des années d'examen."
        },
        "epigram": {
            definition: "Court dicton spirituel et souvent paradoxal.",
            example: "Il a ouvert son discours par un épigramme qui a donné le ton."
        },
        "manifesto": {
            definition: "Déclaration publique d'intentions ou de principes (souvent politique).",
            example: "Le groupe a publié un manifeste exposant ses objectifs."
        },
        "undermine": {
            definition: "Affaiblir ou nuire à quelque chose, souvent progressivement ou secrètement.",
            example: "Les fuites visaient à saper la crédibilité de l'administration."
        },
        "aesthetic": {
            definition: "Relatif à la beauté ou à l'appréciation de la beauté.",
            example: "L'esthétique du designer privilégie des lignes épurées." 
        },
        "epidemic": {
            definition: "Apparition à grande échelle d'une maladie infectieuse dans une communauté.",
            example: "La réponse sanitaire visait à contrôler l'apparition de l'épidémie." 
        },
        "lucid": {
            definition: "Exprimé clairement ; facile à comprendre.",
            example: "Son explication était lucide et a clarifié le sujet complexe." 
        },
        "abridge": {
            definition: "Raccourcir un texte tout en préservant son contenu clef.",
            example: "L'éditeur a abrégé l'article pour l'édition du magazine." 
        },
        "affable": {
            definition: "Agréable, amical et facile à aborder.",
            example: "L'hôte était affable et mettait tout le monde à l'aise." 
        },
        "minuscule": {
            definition: "Extrêmement petit ; minuscule.",
            example: "Une portion minuscule du budget est restée inutilisée." 
        },
        "advocate": {
            definition: "Recommander ou soutenir publiquement quelque chose ; personne soutenant une cause.",
            example: "Elle est devenue une avocate de la sécurité au travail." 
        },
        "ennui": {
            definition: "Sentiment d'ennui et d'insatisfaction dû au manque d'occupation.",
            example: "La longue routine monotone l'a plongé dans l'ennui." 
        },
        "placate": {
            definition: "Apaiser ou calmer quelqu'un, souvent en faisant des concessions.",
            example: "Il a présenté des excuses pour apaiser le client mécontent." 
        },
        "iconoclast": {
            definition: "Personne qui attaque ou critique des croyances ou institutions établies.",
            example: "L'iconoclaste a remis en question les traditions dans ses écrits." 
        },
        "denounce": {
            definition: "Condamner ou critiquer publiquement de manière sévère.",
            example: "La presse a dénoncé les pratiques corrompues révélées par le rapport." 
        },
        "vivacious": {
            definition: "Vif, plein d'entrain et d'animation.",
            example: "Sa personnalité vivante a illuminé la fête." 
        },
        "benefactor": {
            definition: "Personne qui donne de l'argent ou aide une cause ou organisation.",
            example: "La nouvelle bibliothèque universitaire a été financée par un généreux bienfaiteur." 
        },
        "pliant": {
            definition: "Facilement influençable ; flexible.",
            example: "Son attitude pliable l'a aidé à apprendre rapidement." 
        },
        "chaos": {
            definition: "Désordre complet et confusion.",
            example: "Quand l'électricité a sauté, la gare est devenue chaotique." 
        },
        "proliferate": {
            definition: "Se multiplier rapidement en nombre ; se répandre.",
            example: "De nouvelles applications continuent de proliférer sur le marché." 
        },
        // --- Word Incorporation Targets (FR) ---
        "appreciation": {
            definition: "Reconnaissance et appréciation des qualités positives de quelque chose ou quelqu'un.",
            example: "Elle a exprimé son appréciation par une note attentionnée après l'événement."
        },
        "mindfulness": {
            definition: "La pratique de la pleine conscience, être présent sans juger.",
            example: "La pleine conscience quotidienne l'a aidé à gérer son stress."
        },
        "positivity": {
            definition: "La tendance à se concentrer sur les aspects positifs et à maintenir un état d'esprit optimiste.",
            example: "Sa positivité a remonté le moral de l'équipe pendant la période chargée."
        },
        "relationships": {
            definition: "Les liens et les connexions entre deux personnes ou groupes.",
            example: "Les relations saines reposent sur la confiance et la communication."
        },
        "perspective": {
            definition: "Une attitude particulière ou un point de vue sur quelque chose.",
            example: "Voyager lui a donné une nouvelle perspective sur la vie."
        },

        "abdicate": {
            definition: "Renoncer à son trône ; manquer à un devoir.",
            example: "Le roi a décidé d'abdiquer en faveur de son fils."
        },
        "anonymity": {
            definition: "La condition d'être anonyme ; nom inconnu.",
            example: "Le lanceur d'alerte a demandé un anonymat total pour sa protection."
        },
        "antonym": {
            definition: "Un mot de sens opposé à un autre.",
            example: "'Chaud' est l'antonyme de 'froid'."
        },
        // --- Reverse Definitions (added missing entries) ---
        "elation": {
            definition: "A feeling of great happiness and triumph.",
            example: "She felt elation when she heard the news of her promotion."
        },
        "articulate": {
            definition: "Able to express ideas clearly and effectively in speech or writing.",
            example: "His articulate presentation convinced the board to approve the project."
        },
        "skeptic": {
            definition: "A person inclined to question or doubt accepted opinions.",
            example: "The skeptic demanded more evidence before accepting the claim."
        },
        "ubiquitous": {
            definition: "Present, appearing, or found everywhere.",
            example: "Smartphones have become ubiquitous in modern society."
        },
        "understate": {
            definition: "To present something as smaller or less important than it actually is.",
            example: "He tended to understate the risks when discussing the venture."
        },
        "mood": {
            definition: "A temporary state of mind or feeling.",
            example: "Her upbeat mood made the meeting more pleasant."
        },
        "empathy": {
            definition: "The ability to understand and share the feelings of another.",
            example: "Showing empathy can strengthen relationships and trust."
        },
        "quixotic": {
            definition: "Extremely idealistic; unrealistic and impractical.",
            example: "His quixotic plan to save the city won admiration but little support."
        },
        "concise": {
            definition: "Expressing much in few words; brief and to the point.",
            example: "The editor preferred concise summaries over long-winded reports."
        },
        "aversion": {
            definition: "A strong dislike or disinclination towards something.",
            example: "She had an aversion to loud parties and preferred quiet evenings."
        },
        "simplify": {
            definition: "To make something easier to understand or do.",
            example: "He tried to simplify the instructions for new users."
        },
        "patriot": {
            definition: "A person who vigorously supports their country.",
            example: "The patriot was honored for his service to the nation."
        },
        "ravenous": {
            definition: "Extremely hungry or voracious.",
            example: "After the hike, they were ravenous and ate quickly."
        },
        "disprove": {
            definition: "To prove that something is false or incorrect.",
            example: "New evidence helped disprove the earlier theory."
        },
        "polyglot": {
            definition: "A person who knows and is able to use several languages.",
            example: "As a polyglot, she translated documents across multiple languages."
        },
        "serendipitous": {
            definition: "Occurring or discovered by chance in a happy or beneficial way.",
            example: "Their meeting at the airport was completely serendipitous."
        },
        "abolish": {
            definition: "To formally put an end to a system, practice, or institution.",
            example: "The government moved to abolish the outdated law."
        },
        "monologue": {
            definition: "A long speech by one person, often in a play or performance.",
            example: "The actor delivered a powerful monologue that moved the audience."
        },
        "minimum": {
            definition: "The least or smallest amount or quantity possible or permissible.",
            example: "They set the minimum required score for admission."
        },
        "proclaim": {
            definition: "To announce publicly or officially.",
            example: "The mayor will proclaim the new policy at the press conference."
        },
        "ephemeral": {
            definition: "Lasting for a very short time.",
            example: "The beauty of the blooming flowers was ephemeral."
        },
        "rhetoric": {
            definition: "The art of effective or persuasive speaking or writing.",
            example: "The politician's rhetoric was aimed at inspiring voters."
        },
        "dehumanize": {
            definition: "To deprive someone of positive human qualities; to treat as less than human.",
            example: "They warned that the policies could dehumanize vulnerable populations."
        },
        "irreverent": {
            definition: "Showing a lack of respect for people or things that are usually taken seriously.",
            example: "His irreverent humor sometimes offended traditionalists."
        },
        "repudiate": {
            definition: "To reject or disown; to refuse to accept as true.",
            example: "She repudiated the allegations and provided evidence to the contrary."
        },
        "teenager": {
            definition: "A person aged between 13 and 19 years.",
            example: "The teenager worked part-time while finishing school."
        },
        "enhance": {
            definition: "To improve or augment something, especially its quality or value.",
            example: "They used lighting to enhance the appearance of the stage."
        },
        "ardent": {
            definition: "Enthusiastic or passionate; showing strong feelings.",
            example: "She was an ardent supporter of environmental causes."
        },
        "fallacy": {
            definition: "A mistaken belief, especially one based on unsound arguments.",
            example: "The argument rested on a logical fallacy that weakened its claim."
        },
        "annihilate": {
            definition: "To destroy completely; to wipe out.",
            example: "The army's objective was to annihilate the small enemy force."
        },
        "astronomer": {
            definition: "A scientist who studies celestial objects, space, and the universe.",
            example: "The astronomer published a paper on the newly discovered exoplanet."
        },
        "invincible": {
            definition: "Too powerful to be defeated or overcome.",
            example: "The team's defense seemed invincible during the championship."
        },
        "anonymity": {
            definition: "The condition of being anonymous; lacking identification.",
            example: "The whistleblower requested anonymity to protect their identity."
        },
        "antonym": {
            definition: "A word that means the opposite of another word.",
            example: "'Love' is an antonym of 'hate'."
        },
        "claustrophobia": {
            definition: "An extreme fear of enclosed spaces.",
            example: "Her claustrophobia made the crowded elevator unbearable."
        },
        "canonize": {
            definition: "To officially declare someone a saint in certain religious traditions.",
            example: "The council decided to canonize the revered monk after years of consideration."
        },
        "epigram": {
            definition: "A brief, clever, and often paradoxical saying or remark.",
            example: "He opened his talk with a witty epigram that set the tone for the lecture."
        },
        "manifesto": {
            definition: "A public declaration of intentions, motives, or views, often political in nature.",
            example: "The group published a manifesto outlining its goals and principles."
        },
        "undermine": {
            definition: "To weaken or damage something, especially gradually or secretly.",
            example: "The leaks aimed to undermine the administration's credibility."
        },
        "aesthetic": {
            definition: "Concerned with beauty or the appreciation of beauty.",
            example: "The designer's aesthetic favored simple, clean lines." 
        },
        "epidemic": {
            definition: "A widespread occurrence of an infectious disease in a community at a particular time.",
            example: "The public health response focused on controlling the epidemic outbreak." 
        },
        "lucid": {
            definition: "Expressed clearly; easy to understand.",
            example: "Her explanation was lucid and clarified the complex issue." 
        },
        "abridge": {
            definition: "To shorten a text while preserving its key content.",
            example: "The editor chose to abridge the long article for the magazine edition." 
        },
        "affable": {
            definition: "Friendly, pleasant, and easy to talk to.",
            example: "The host was affable and made every guest feel welcome." 
        },
        "minuscule": {
            definition: "Extremely small; tiny.",
            example: "Only a minuscule portion of the budget was left unspent." 
        },
        "advocate": {
            definition: "To publicly recommend or support something; a person who supports a cause.",
            example: "She became an advocate for better workplace safety." 
        },
        "ennui": {
            definition: "A feeling of listlessness and dissatisfaction from lack of occupation or excitement.",
            example: "The long, unchanging routine led him into a state of ennui." 
        },
        "placate": {
            definition: "To calm or soothe someone, often by making concessions.",
            example: "He offered an apology to placate the upset customer." 
        },
        "iconoclast": {
            definition: "A person who attacks or criticizes cherished beliefs or institutions.",
            example: "The iconoclast challenged long-held traditions in his writings." 
        },
        "denounce": {
            definition: "To publicly condemn or criticize severely.",
            example: "The press denounced the corrupt practices exposed by the report." 
        },
        "vivacious": {
            definition: "Attractively lively and animated.",
            example: "Her vivacious personality lit up the room at the party." 
        },
        "benefactor": {
            definition: "A person who gives money or other help to a cause or organization.",
            example: "The university's new library was funded by a generous benefactor." 
        },
        "pliant": {
            definition: "Easily influenced or persuaded; flexible.",
            example: "The trainee's pliant attitude made him quick to learn new methods." 
        },
        "chaos": {
            definition: "Complete disorder and confusion.",
            example: "When the power went out, the station descended into chaos." 
        },
        "proliferate": {
            definition: "To increase rapidly in number; to spread.",
            example: "New apps continue to proliferate across the marketplace." 
        },
        // --- Word Incorporation Targets ---
        "appreciation": {
            definition: "Recognition and enjoyment of the good qualities of someone or something.",
            example: "She showed her appreciation with a thoughtful note after the event."
        },
        "mindfulness": {
            definition: "The practice of being consciously aware of the present moment without judgment.",
            example: "Daily mindfulness practice helped him manage stress effectively."
        },
        "positivity": {
            definition: "The practice of focusing on the good and maintaining an optimistic outlook.",
            example: "Her positivity lifted the team's morale during the busy season."
        },
        "relationships": {
            definition: "The ways in which two or more people or groups are connected.",
            example: "Healthy relationships are built on trust and communication."
        },
        "perspective": {
            definition: "A particular attitude or way of viewing something; a point of view.",
            example: "Traveling gave her a fresh perspective on life."
        }
        "canonize": {
            definition: "Déclarer officiellement une personne décédée comme sainte.",
            example: "L'église a décidé de canoniser la religieuse pour son service de toute une vie."
        },
        "epigram": {
            definition: "Un dicton ou une remarque lapidaire exprimant une idée avec intelligence.",
            example: "Il était connu pour ses épigrammes pleins d'esprit sur la vie moderne."
        },
        "manifesto": {
            definition: "Une déclaration publique de politique et d'objectifs.",
            example: "Le parti politique a publié son manifeste électoral hier."
        },
        "aesthetic": {
            definition: "Concerné par la beauté ou l'appréciation de la beauté.",
            example: "Le nouveau café a une esthétique très moderne et épurée."
        },
        "iconoclast": {
            definition: "Une personne qui attaque les croyances ou les institutions chéries.",
            example: "En tant qu'iconoclaste, il aimait remettre en question les normes de l'art traditionnel."
        },
        "proliferate": {
            definition: "Augmenter rapidement en nombre ; multiplier.",
            example: "Les applications pour smartphones continuent de proliférer à un rythme incroyable."
        },
        // --- Word Incorporation Targets (ES) ---
        "appreciation": {
            definition: "Reconocimiento y aprecio por las cualidades positivas de algo o alguien.",
            example: "Ella expresó su apreciación con una nota considerada después del evento."
        },
        "mindfulness": {
            definition: "La práctica de la atención plena, estar presente sin juzgar.",
            example: "La atención plena diaria le ayudó a manejar su estrés."
        },
        "positivity": {
            definition: "La tendencia a centrarse en los aspectos positivos y mantener una actitud optimista.",
            example: "Su positividad levantó la moral del equipo durante el período ocupado."
        },
        "relationships": {
            definition: "Los lazos y conexiones entre dos personas o grupos.",
            example: "Las relaciones saludables se basan en la confianza y la comunicación."
        },
        "perspective": {
            definition: "Una actitud particular o punto de vista sobre algo.",
            example: "Viajar le dio una nueva perspectiva sobre la vida."
        }
    },
    es: {
        // --- Precision Swap & General Vocabulary ---
        "wise": {
            definition: "Que tiene o muestra experiencia, conocimiento y buen juicio.",
            example: "Elegir ahorrar para el futuro fue una decisión acertada."
        },
        "clear": {
            definition: "Fácil de percibir, comprender o interpretar; transparente.",
            example: "Las instrucciones eran claras y fáciles de seguir."
        },
        "beautiful": {
            definition: "Que agrada a los sentidos o a la mente estéticamente.",
            example: "La puesta de sol sobre la montaña fue absolutamente hermosa."
        },
        "large": {
            definition: "De considerable tamaño, extensión o capacidad.",
            example: "Viven en una casa grande con un hermoso jardín."
        },
        "penetrante": {
            definition: "Capaz de abrirse paso a través de algo; punzante.",
            example: "Su mirada penetrante le hizo sentir bastante incómodo."
        },
        "emblemático": {
            definition: "Que sirve de símbolo de una cualidad o concepto particular.",
            example: "El águila es emblemática de la fuerza y la libertad."
        },
        "sepulcral": {
            definition: "Relativo a un sepulcro o entierro; sombrío y lúgubre.",
            example: "Un silencio sepulcral llenó la catedral abandonada."
        },
        "inestimable": {
            definition: "Demasiado grande para ser calculado o estimado.",
            example: "La colección del museo es de un valor inestimable."
        },
        "diminutivo": {
            definition: "Extremadamente o inusualmente pequeño.",
            example: "El pajarito era una criatura diminuta comparada con el águila."
        },
        "férreo": {
            definition: "Un metal fuerte, duro y magnético de color gris plateado.",
            example: "La puerta estaba hecha de pesado hierro forjado."
        },
        "despiadado": {
            definition: "Que no tiene ni muestra piedad o compasión por los demás.",
            example: "El líder despiadado no se detendría ante nada para ganar poder."
        },
        "cegadora": {
            definition: "Tan brillante que oscurece la visión.",
            example: "La nieve era tan blanca que creaba un resplandor cegador."
        },
        "arcano": {
            definition: "Entendido por pocos; misterioso o secreto.",
            example: "Pasó años estudiando rituales arcanos de textos antiguos."
        },
        "prodigioso": {
            definition: "Notablemente grande en extensión, tamaño o grado.",
            example: "Tiene una memoria prodigiosa para fechas y nombres históricos."
        },
        "remoto": {
            definition: "Lejano; distante en el espacio, el tiempo o la relación.",
            example: "Vivían en un pueblo remoto en lo profundo de las montañas."
        },
        "omnipresente": {
            definition: "Que se encuentra en todas partes; común o extendido.",
            example: "El miedo al fracaso suele estar omnipresente en entornos de alto riesgo."
        },
        "íntegro": {
            definition: "La cualidad de ser honesto y tener principios morales firmes.",
            example: "Es una persona de gran integridad que siempre cumple su palabra."
        },
        "efímera": {
            definition: "Que dura muy poco tiempo.",
            example: "La belleza de una flor suele ser hermosa pero efímera."
        },
        "anacrónico": {
            definition: "Que pertenece a un periodo distinto de aquel en el que existe.",
            example: "Usar una máquina de escribir en una oficina moderna puede parecer anacrónico."
        },
        "armonioso": {
            definition: "Que forma un todo agradable o consistente; melodioso.",
            example: "Los colores del cuarto se combinaron para crear una atmósfera armoniosa."
        },
        "embriagadora": {
            definition: "Extremadamente emocionante; que causa una pérdida de control.",
            example: "El éxito de la obra fue una experiencia embriagadora para los actores."
        },
        "simbólico": {
            definition: "Que sirve de símbolo; que representa algo más.",
            example: "La paloma es simbólica de la paz y la esperanza."
        },
        "inexpugnable": {
            definition: "Incapaz de ser tomado por asalto; inconquistable.",
            example: "La fortaleza fue construida sobre un acantilado inexpugnable."
        },
        "erudito": {
            definition: "Que tiene grandes conocimientos o aprendizaje.",
            example: "El profesor erudito habló largo tiempo sobre civilizaciones antiguas."
        },
        "fosforescente": {
            definition: "Que emite luz sin calor; brilla en la oscuridad.",
            example: "Las olas eran fosforescentes, brillando al golpear la orilla."
        },
        "emérito": {
            definition: "Jubilado pero que se le permite mantener su título como honor.",
            example: "El decano emérito todavía asistía a las ceremonias universitarias."
        },
        "sosegado": {
            definition: "Que no se altera con facilidad; tranquilo y pacífico.",
            example: "El lago permaneció sosegado a pesar de las nubes de tormenta."
        },
        "fatal": {
            definition: "Que causa la muerte; que lleva al fracaso o al desastre.",
            example: "Un error fatal en el código causó que el sistema fallara."
        },
        "inquebrantable": {
            definition: "Firme o decidido; que no vacila ni duda.",
            example: "Mostró un apoyo inquebrantable a su amiga durante la crisis."
        },
        "veloz": {
            definition: "Que se mueve o es capaz de moverse a gran velocidad.",
            example: "El halcón hizo un descenso veloz para atrapar a su presa."
        },
        "incandescente": {
            definition: "Que emite luz por estar caliente; extremadamente brillante.",
            example: "Las bombillas incandescentes daban un brillo cálido al cuarto."
        },
        "vetusto": {
            definition: "Extremadamente viejo; antiguo y desgastado.",
            example: "El edificio vetusto parecía que podía derrumbarse en cualquier momento."
        },
        "reflexivo": {
            definition: "Que proporciona un reflejo; relativo al pensamiento profundo.",
            example: "Se sentó con un humor reflexivo, pensando en sus decisiones pasadas."
        },
        "altruista": {
            definition: "Que muestra un interés desinteresado por los demás.",
            example: "Sus actos altruistas ayudaron a mucha gente en la comunidad local."
        },
        "indefenso": {
            definition: "Sin defensa ni protección; vulnerable.",
            example: "El pequeño animal estaba indefenso ante el depredador más grande."
        },
        "diestro": {
            definition: "Muy hábil o competente en algo.",
            example: "Es una programadora diestra que resuelve problemas complejos rápido."
        },
        "ancestral": {
            definition: "De los antepasados, perteneciente a ellos o heredado.",
            example: "Visitaron su casa ancestral en el campo."
        },
        "amortiguado": {
            definition: "No fuerte por estar obstruido de alguna forma; sordo.",
            example: "Oí el sonido amortiguado de voces tras la pared gruesa."
        },
        "angelical": {
            definition: "Relativo a los ángeles; excepcionalmente bello o amable.",
            example: "El niño tenía una cara angelical que derretía el corazón de todos."
        },
        "pavorosa": {
            definition: "Que causa gran sufrimiento, miedo o infelicidad.",
            example: "La noticia del accidente fue absolutamente pavorosa."
        },
        "omnisciente": {
            definition: "Que lo sabe todo; que tiene conocimiento infinito.",
            example: "El narrador era omnisciente, sabía lo que cada personaje pensaba."
        },
        "concentrada": {
            definition: "Totalmente dirigida a una sola cosa; intensa o potente.",
            example: "El zumo estaba muy concentrado y necesitaba diluirse con agua."
        },
        "fortuito": {
            definition: "Que sucede por un accidente afortunado o azar y no por diseño.",
            example: "El descubrimiento de la mina de oro fue completamente fortuito."
        },
        "resplandeciente": {
            definition: "Atractivo e impresionante por ser muy colorido o brillante.",
            example: "Se veía resplandeciente con su vestido de seda de noche."
        },
        "inédito": {
            definition: "Todavía no publicado; no impreso ni en formato digital.",
            example: "El autor dejó tras de sí varios manuscritos inéditos."
        },
        "creativa": {
            definition: "Relativo a la imaginación o a las ideas originales.",
            example: "Es un artista creativo que experimenta con nuevos estilos siempre."
        },
        "minucioso": {
            definition: "Que presta mucha atención al detalle; muy cuidadoso y preciso.",
            example: "Fue minuciosa en sus preparativos para el examen final."
        },
        "determinante": {
            definition: "Que resuelve un asunto; que produce un resultado definitivo.",
            example: "El general hizo un movimiento determinante que ganó la batalla."
        },
        "impenetrable": {
            definition: "Imposible de atravesar o entrar; imposible de entender.",
            example: "La selva espesa era un muro verde impenetrable."
        },
        "artificial": {
            definition: "Hecho por seres humanos y no por la naturaleza.",
            example: "El museo usó luz artificial para preservar los cuadros delicados."
        },
        "obsoleto": {
            definition: "Que ya no se produce ni se usa; anticuado.",
            example: "Las máquinas de escribir están obsoletas en la era del ordenador."
        },
        "previsora": {
            definition: "Que tiene imaginación o previsión; que ve objetos lejanos.",
            example: "La estrategia previsora del CEO llevó a la empresa al éxito."
        },
        "sutil": {
            definition: "Tan delicado o preciso que es difícil de analizar o describir.",
            example: "Hubo un cambio sutil en su tono que indicaba que mentía."
        },
        "torrencial": {
            definition: "Que cae rápido y en grandes cantidades; que fluye con fuerza.",
            example: "La lluvia torrencial causó inundaciones en varias partes de la ciudad."
        },
        "estoico": {
            definition: "Persona que aguanta el dolor o la pena sin mostrar sentimientos.",
            example: "Permaneció estoico durante todo el juicio largo y difícil."
        },
        "centelleante": {
            definition: "Que brilla intensamente; muy inteligente o emocionante.",
            example: "Dio una actuación centelleante que cautivó a todo el público."
        },
        "enfermo": {
            definition: "No fuerte física o mentalmente, sobre todo por edad o enfermedad.",
            example: "El hospital cuidaba de pacientes enfermos y ancianos."
        },
        "fotogénica": {
            definition: "Que se ve atractivo en las fotos o en el cine.",
            example: "El pueblo costero con sus puertas azules era muy fotogénico."
        },
        "crucial": {
            definition: "Decisivo o crítico, sobre todo para el éxito de algo.",
            example: "Esta reunión es crucial para el futuro de nuestra asociación."
        },
        "desorbitada": {
            definition: "Irrazonablemente alto; excesivo.",
            example: "El restaurante cobró un precio desorbitado por una comida sencilla."
        },
        "rasante": {
            definition: "Que toca o golpea algo ligero al pasar; que pasta.",
            example: "La bala dejó solo una herida rasante en su hombro."
        },
        "clasificado": {
            definition: "Ordenado en clases o categorías; secreto por seguridad.",
            example: "Los agentes manejaban documentos altamente clasificados."
        },
        "letárgico": {
            definition: "Afectado por el letargo; lento y apático.",
            example: "Se sentía letárgico después de comer un almuerzo tan pesado."
        },
        "celestial": {
            definition: "Situado en el cielo o relativo a él, o al espacio exterior.",
            example: "Las estrellas y planetas son cuerpos celestiales visibles de noche."
        },
        "imperceptible": {
            definition: "Tan ligero, gradual o sutil que no se puede percibir.",
            example: "El aumento de temperatura era casi imperceptible al principio."
        },
        "violenta": {
            definition: "Que usa la fuerza física para herir o matar.",
            example: "La ciudad sufrió varias protestas violentas la semana pasada."
        },
        "hilarante": {
            definition: "Extremadamente divertido; que causa risa.",
            example: "Su rutina de comedia fue absolutamente hilarante."
        },
        "diáfana": {
            definition: "Ligero, delicado y translúcido.",
            example: "Las cortinas eran de una tela blanca y diáfana."
        },
        "venerable": {
            definition: "Que merece mucho respeto, sobre todo por la edad.",
            example: "El venerable viejo roble llevaba en el parque siglos."
        },
        "monumental": {
            definition: "Grande en importancia, extensión o tamaño.",
            example: "El descubrimiento de la gravedad fue un momento monumental."
        },
        "matiz": {
            definition: "Diferencia sutil o tono de significado, expresión o color.",
            example: "El actor captó cada matiz de las emociones del personaje."
        },
        "implacable": {
            definition: "Que no se puede aplacar; implacable o imparable.",
            example: "Se enfrentó a un enemigo implacable que no se rendía."
        },
        "magnánimo": {
            definition: "Generoso o que perdona, sobre todo con un rival o inferior.",
            example: "Fue magnánimo al admitir su error en público."
        },
        "puntera": {
            definition: "Más importante; guía o dirección.",
            example: "Es una experta puntera en el campo de las energías renovables."
        },
        "aséptico": {
            definition: "Libre de contaminación por bacterias o virus dañinos.",
            example: "La cirugía se hizo en un entorno estrictamente aséptico."
        },
        "despreciable": {
            definition: "Tan pequeño que no merece la pena considerarlo.",
            example: "El riesgo de efectos secundarios de la medicina es despreciable."
        },
        "austera": {
            definition: "Severo o estricto en el trato, actitud o apariencia.",
            example: "El monasterio tenía un comedor austero con bancos sencillos."
        },
        "incondicional": {
            definition: "No sujeto a condiciones; absoluto.",
            example: "Los padres suelen dar a sus hijos un amor incondicional."
        },
        "providencial": {
            definition: "Cualidad de lo que sucede en un momento favorable; divino.",
            example: "Su llegada en ese momento fue verdaderamente providencial."
        },
        "comprometedor": {
            definition: "Que revela que alguien ha hecho algo malo o vergonzoso.",
            example: "La filtración de las fotos comprometedoras arruinó su carrera."
        },
        "hierático": {
            definition: "De los sacerdotes; relativo a lo sagrado.",
            example: "El texto antiguo estaba escrito en un estilo formal y hierático."
        },
        "perceptiva": {
            definition: "Que tiene una visión sensible; observador.",
            example: "Su observación perceptiva nos ayudó a resolver el misterio."
        },
        "sustancial": {
            definition: "De importancia, tamaño o valor considerable.",
            example: "Recibieron una cantidad sustancial de fondos para el proyecto."
        },
        "inclemente": {
            definition: "Tiempo frío o húmedo que resulta desagradable.",
            example: "El partido se pospuso por el clima inclemente."
        },
        "riguroso": {
            definition: "Extremadamente minucioso, exhaustivo o preciso.",
            example: "La medicina pasó pruebas rigurosas antes de ser aprobada."
        },
        "rotundo": {
            definition: "Gordo o de forma redondeada.",
            example: "El querubín era una figurita rotunda en el cuadro."
        },
        "oscilante": {
            definition: "Que se mueve de un lado a otro a una velocidad regular.",
            example: "El ventilador oscilante mantuvo el cuarto fresco en verano."
        },
        "iluminado": {
            definition: "Lleno de luz; decorado con luces o con oro/plata.",
            example: "El manuscrito iluminado era una obra maestra del arte medieval."
        },
        "sesgado": {
            definition: "Injustamente inclinado a favor o en contra de algo o alguien.",
            example: "La decisión del árbitro fue vista como sesgada por el equipo local."
        },
        "ciclópea": {
            definition: "Extremadamente masivo; hecho de piedras enormes.",
            example: "Las ruinas tenían murallas ciclópeas que aguantaron siglos."
        },
        "fugaz": {
            definition: "Que tiende a desaparecer; efímero.",
            example: "La belleza fugaz de la juventud es un tema común en la poesía."
        },
        "señorial": {
            definition: "Que tiene una manera digna, pausada y grandiosa.",
            example: "La casa señorial estaba rodeada de hectáreas de jardines bellos."
        },
        "sobrecogedor": {
            definition: "Asombroso o impresionante en cuanto a su calidad.",
            example: "La vista desde arriba de la montaña era sobrecogedora."
        },
        "microscópico": {
            definition: "Tan pequeño que solo se ve con un microscopio.",
            example: "Las bacterias son organismos microscópicos que están en todo site."
        },
        "tenaz": {
            definition: "Que tiende a agarrar algo con fuerza; que se pega mucho.",
            example: "Era un corredor tenaz que no se rendía aunque estuviera cansado."
        },
        "potentado": {
            definition: "Un monarca o gobernante, sobre todo uno autocrático.",
            example: "El potentado extranjero llegó con un séquito real masivo."
        },
        "lumínica": {
            definition: "Lleno de luz; brillante, sobre todo en la oscuridad.",
            example: "Las medusas eran lumínicas, iluminando el agua oscura del mar."
        },
        "cartografical": {
            definition: "Relativo a la ciencia o práctica de dibujar mapas.",
            example: "La precisión cartográfica del nuevo atlas es impresionante."
        },
        "místico": {
            definition: "Relativo al misticismo; que inspira asombro.",
            example: "Tuvo una experiencia mística mientras meditaba en el bosque."
        },
        "ornamental": {
            definition: "Que sirve de adorno; decorativo.",
            example: "El jardín estaba lleno de arbustos y flores ornamentales."
        },
        "vertiginoso": {
            definition: "Que causa vértigo, sobre todo por ser muy alto o empinado.",
            example: "El escalador miró el precipicio vertiginoso y se mareó."
        },

        // --- Reverse Definitions & Word Incorporation ---
        "psychology": {
            definition: "El estudio científico de la mente humana y sus funciones.",
            example: "Estudiar psicología nos ayuda a entender el comportamiento humano."
        },
        "entrepreneur": {
            definition: "Una persona que organiza y opera un negocio.",
            example: "Como joven emprendedora, montó su propia empresa tecnológica."
        },
        "serendipity": {
            definition: "El hallazgo de sucesos afortunados de forma inesperada.",
            example: "Hallar ese libro raro en el desván fue pura serendipia."
        },
        "abdicate": {
            definition: "Renunciar al trono; faltar al cumplimiento de un deber.",
            example: "El rey decidió abdicar en favor de su hijo."
        },
        "anonymity": {
            definition: "La condición de ser anónimo; nombre desconocido.",
            example: "El informante pidió anonimato total por su seguridad."
        },
        "antonym": {
            definition: "Palabra con un significado opuesto al de otra.",
            example: "'Caliente' es el antónimo de 'frío'."
        },
        "canonize": {
            definition: "Declarar oficialmente a un muerto como santo.",
            example: "La iglesia decidió canonizar a la monja por su servicio."
        },
        "epigram": {
            definition: "Dicho o nota breve que expresa una idea con ingenio.",
            example: "Era conocido por sus ingeniosos epigramas sobre la vida moderna."
        },
        "manifesto": {
            definition: "Declaración pública de principios e intalciones.",
            example: "El partido político sacó ayer su manifiesto electoral."
        },
        "aesthetic": {
            definition: "Relativo a la belleza o al gusto por ella.",
            example: "La nueva cafetería tiene una estética muy moderna y limpia."
        },
        "iconoclast": {
            definition: "Persona que atenta contra creencias o instituciones queridas.",
            example: "Como iconoclasta, le gustaba desafiar las normas del arte tradicional."
        },
        "proliferate": {
            definition: "Aumentar rápido en número; multiplicarse.",
            example: "Las apps de móvil siguen proliferando a un ritmo increíble."
        }
    }
};
