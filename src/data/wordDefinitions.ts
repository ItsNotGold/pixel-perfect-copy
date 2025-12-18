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
