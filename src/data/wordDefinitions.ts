export interface WordDefinition {
    definition_en: string;
    example_en: string;
    definition_fr: string;
    example_fr: string;
    definition_es: string;
    example_es: string;
}

/**
 * Shared dictionary for all exercise words.
 * Manually populated to ensure consistency across languages.
 */
export const WORD_DEFINITIONS: Record<string, WordDefinition> = {
    // A
    "abdicate": {
        definition_en: "To formally give up a position of power or responsibility.",
        example_en: "The king decided to abdicate the throne.",
        definition_fr: "Renoncer officiellement à un pouvoir ou à une fonction.",
        example_fr: "Le roi a décidé d'abdiquer.",
        definition_es: "Renunciar oficialmente a un cargo o poder.",
        example_es: "El rey decidió abdicar el trono."
    },
    "abdiquer": {
        definition_en: "To formally give up a position of power or responsibility.",
        example_en: "The leader chose to abdicate his role.",
        definition_fr: "Renoncer officiellement à un pouvoir ou à une fonction.",
        example_fr: "Le souverain a choisi d'abdiquer ses fonctions.",
        definition_es: "Renunciar oficialmente a un cargo o poder.",
        example_es: "El líder decidió abdicar de su puesto."
    },
    "abolir": {
        definition_en: "To formally end or cancel a system or law.",
        example_en: "They voted to abolish the old law.",
        definition_fr: "Mettre fin officiellement à une loi ou un système.",
        example_fr: "Ils ont voté pour abolir l'ancienne loi.",
        definition_es: "Poner fin oficialmente a una ley o sistema.",
        example_es: "Votaron para abolir la antigua ley."
    },
    "abolish": {
        definition_en: "To formally end or cancel a system or law.",
        example_en: "The government decided to abolish slavery.",
        definition_fr: "Mettre fin officiellement à une loi ou un système.",
        example_fr: "Le gouvernement a décidé d'abolir l'esclavage.",
        definition_es: "Poner fin oficialmente a una ley o sistema.",
        example_es: "El gobierno decidió abolir la esclavitud."
    },
    "abridge": {
        definition_en: "To shorten a piece of writing without losing the sense.",
        example_en: "The editor had to abridge the long manuscript.",
        definition_fr: "Raccourcir un texte tout en conservant l'essentiel.",
        example_fr: "L'éditeur a dû abréger le long manuscrit.",
        definition_es: "Acortar un texto manteniendo lo esencial.",
        example_es: "El editor tuvo que abreviar el largo manuscrito."
    },
    "abrupt": {
        definition_en: "Sudden and unexpected.",
        example_en: "The car came to an abrupt stop.",
        definition_fr: "Soudain et inattendu.",
        example_fr: "La voiture s'est arrêtée de façon abrupte.",
        definition_es: "Repentino e inesperado.",
        example_es: "El coche se detuvo de forma abrupta."
    },
    "achievement": {
        definition_en: "A thing done successfully with effort, skill, or courage.",
        example_en: "Winning the marathon was a great achievement.",
        definition_fr: "Une chose accomplie avec succès grâce à des efforts.",
        example_fr: "Gagner le marathon était un grand accomplissement.",
        definition_es: "Algo logrado con éxito mediante esfuerzo y habilidad.",
        example_es: "Ganar el maratón fue un gran logro."
    },
    "action": {
        definition_en: "The process of doing something, typically to achieve an aim.",
        example_en: "We need to take immediate action.",
        definition_fr: "Le processus de faire quelque chose pour atteindre un but.",
        example_fr: "Nous devons passer à l'action immédiatement.",
        definition_es: "El proceso de hacer algo para lograr un objetivo.",
        example_es: "Necesitamos tomar medidas inmediatas."
    },
    "adaptation": {
        definition_en: "The process of changing to fit new conditions.",
        example_en: "Adaptation to new technology is essential.",
        definition_fr: "Le processus de changement pour s'adapter à de nouvelles conditions.",
        example_fr: "L'adaptation aux nouvelles technologies est essentielle.",
        definition_es: "El proceso de cambiar para ajustarse a nuevas condiciones.",
        example_es: "La adaptación a las nuevas tecnologías es esencial."
    },
    "aesthetic": {
        definition_en: "Concerned with beauty or the appreciation of beauty.",
        example_en: "The building has a modern, minimalist aesthetic.",
        definition_fr: "Relatif à la beauté ou à l'appréciation du beau.",
        example_fr: "Le bâtiment a une esthétique moderne et minimaliste.",
        definition_es: "Relativo a la belleza o al aprecio de lo bello.",
        example_es: "El edificio tiene una estética moderna y minimalista."
    },
    "affable": {
        definition_en: "Friendly, good-natured, or easy to talk to.",
        example_en: "He was an affable companion on the journey.",
        definition_fr: "Aimable, sociable et facile à aborder.",
        example_fr: "C'était un compagnon affable pendant le voyage.",
        definition_es: "Amable, sociable y de trato fácil.",
        example_es: "Era un compañero afable durante el viaje."
    },
    "affect": {
        definition_en: "To have an influence on someone or something.",
        example_en: "The weather will affect our plans.",
        definition_fr: "Avoir une influence sur quelqu'un ou quelque chose.",
        example_fr: "Le temps affectera nos plans.",
        definition_es: "Tener influencia sobre alguien o algo.",
        example_es: "El clima afectará nuestros planes."
    },
    "ambition": {
        definition_en: "A strong desire to do or achieve something.",
        example_en: "Her ambition is to become a successful doctor.",
        definition_fr: "Un désir fort de faire ou d'accomplir quelque chose.",
        example_fr: "Son ambition est de devenir un médecin accompli.",
        definition_es: "Un fuerte deseo de hacer o lograr algo.",
        example_es: "Su ambición es convertirse en una doctora exitosa."
    },
    "ancient": {
        definition_en: "Belonging to the very distant past.",
        example_en: "They visited the ancient ruins in Greece.",
        definition_fr: "Appartenant à un passé très lointain.",
        example_fr: "Ils ont visité les ruines antiques en Grèce.",
        definition_es: "Perteneciente al pasado muy lejano.",
        example_es: "Visitaron las ruinas antiguas en Grecia."
    },
    "animosity": {
        definition_en: "Strong hostility or friction between people.",
        example_en: "There was visible animosity between the two teams.",
        definition_fr: "Forte hostilité ou aversion envers quelqu'un.",
        example_fr: "Il y avait une animosité visible entre les deux équipes.",
        definition_es: "Fuerte hostilidad o fricción entre personas.",
        example_es: "Había una animosidad visible entre los dos equipos."
    },
    "anonymity": {
        definition_en: "The state of being unknown or not identified.",
        example_en: "She preferred the anonymity of a large city.",
        definition_fr: "L'état d'être inconnu ou non identifié.",
        example_fr: "Elle préférait l'anonymat d'une grande ville.",
        definition_es: "El estado de ser desconocido o no estar identificado.",
        example_es: "Prefería el anonimato de una gran ciudad."
    },
    "anonymous": {
        definition_en: "Not identified by name; of unknown authorship.",
        example_en: "The museum received an anonymous donation.",
        definition_fr: "Dont on ignore le nom ou qui ne le fait pas connaître.",
        example_fr: "Le musée a reçu un don anonyme.",
        definition_es: "De nombre desconocido o que no se da a conocer.",
        example_es: "El museo recibió una donación anónima."
    },
    "antonym": {
        definition_en: "A word opposite in meaning to another.",
        example_en: "'Hot' is an antonym of 'cold'.",
        definition_fr: "Mot qui a un sens opposé à un autre.",
        example_fr: "« Chaud » est l'antonyme de « froid ».",
        definition_es: "Palabra que tiene un significado opuesto a otra.",
        example_es: "'Caliente' es el antónimo de 'frío'."
    },
    "articulate": {
        definition_en: "Having or showing the ability to speak fluently and coherently.",
        example_en: "She is a highly articulate speaker.",
        definition_fr: "S'exprimer de manière claire, nette et facile.",
        example_fr: "C'est une conférencière très articulée.",
        definition_es: "Capacidad de expresarse de manera clara y coherente.",
        example_es: "Es una oradora muy articulada."
    },
    "astronomer": {
        definition_en: "An expert in or student of astronomy.",
        example_en: "The astronomer pointed the telescope at the stars.",
        definition_fr: "Spécialiste de l'astronomie.",
        example_fr: "L'astronome a pointé le télescope vers les étoiles.",
        definition_es: "Especialista en la ciencia de los astros.",
        example_es: "El astrónomo apuntó el telescopio a las estrellas."
    },
    "astute": {
        definition_en: "Having or showing an ability to accurately assess situations.",
        example_en: "He made an astute observation about the market.",
        definition_fr: "Qui fait preuve de finesse, d'habileté et de perspicacité.",
        example_fr: "Il a fait une observation astucieuse sur le marché.",
        definition_es: "Que muestra agudeza y perspicacia.",
        example_es: "Hizo una observación astuta sobre el mercado."
    },
    "aversion": {
        definition_en: "A strong dislike or disinclination.",
        example_en: "He has a strong aversion to snakes.",
        definition_fr: "Fort dégoût ou répulsion pour quelque chose.",
        example_fr: "Il a une forte aversion pour les serpents.",
        definition_es: "Fuerte desagrado o repulsa.",
        example_es: "Tiene una fuerte aversión a las serpientes."
    },

    // B
    "benefactor": {
        definition_en: "A person who gives money or other help to a person or cause.",
        example_en: "The library was built thanks to a generous benefactor.",
        definition_fr: "Personne qui aide financièrement une personne ou une cause.",
        example_fr: "La bibliothèque a été construite grâce à un généreux bienfaiteur.",
        definition_es: "Persona que ayuda económicamente a otra o a una causa.",
        example_es: "La biblioteca fue construida gracias a un generoso benefactor."
    },
    "best": {
        definition_en: "Of the most excellent or desirable type or quality.",
        example_en: "This is the best cake I have ever tasted.",
        definition_fr: "De la qualité la plus excellente ou désirable.",
        example_fr: "C'est le meilleur gâteau que j'aie jamais goûté.",
        definition_es: "De la calidad más excelente o deseable.",
        example_es: "Este es el mejor pastel que he probado."
    },
    "brisk": {
        definition_en: "Quick and active; lively.",
        example_en: "They went for a brisk walk in the park.",
        definition_fr: "Rapide et actif; vif.",
        example_fr: "Ils ont fait une marche vive dans le parc.",
        definition_es: "Rápido y activo; animado.",
        example_es: "Dieron un paseo enérgico por el parque."
    },

    // C
    "canonize": {
        definition_en: "To officially declare a dead person to be a saint.",
        example_en: "The church decided to canonize the brave woman.",
        definition_fr: "Déclarer officiellement qu'une personne décédée est un saint.",
        example_fr: "L'église a décidé de canoniser la femme courageuse.",
        definition_es: "Declarar oficialmente que una persona fallecida es un santo.",
        example_es: "La iglesia decidió canonizar a la valiente mujer."
    },
    "challenge": {
        definition_en: "A call to take part in a contest or competition.",
        example_en: "Climbing the mountain was a huge challenge.",
        definition_fr: "Un appel à participer à un concours ou une compétition.",
        example_fr: "Gravir la montagne était un immense défi.",
        definition_es: "Un llamado a participar en un concurso o competencia.",
        example_es: "Escalar la montaña fue un gran desafío."
    },
    "chaos": {
        definition_en: "Complete disorder and confusion.",
        example_en: "The sudden power outage caused chaos in the building.",
        definition_fr: "Désordre complet et confusion totale.",
        example_fr: "La coupure de courant soudaine a causé le chaos dans l'immeuble.",
        definition_es: "Desorden completo y confusión total.",
        example_es: "El apagón repentino causó el caos en el edificio."
    },
    "chilly": {
        definition_en: "Uncomfortably cool.",
        example_en: "It was a chilly evening, so we wore sweaters.",
        definition_fr: "D'un froid désagréable.",
        example_fr: "C'était une soirée fraîche, nous avons donc mis des pulls.",
        definition_es: "Desagradablemente frío.",
        example_es: "Era una tarde fría, así que nos pusimos suéteres."
    },
    "clarity": {
        definition_en: "The quality of being clear and easy to understand.",
        example_en: "The instructions lacked clarity.",
        definition_fr: "La qualité d'être clair et facile à comprendre.",
        example_fr: "Les instructions manquaient de clarté.",
        definition_es: "La cualidad de ser claro y fácil de entender.",
        example_es: "A las instrucciones les faltaba claridad."
    },
    "claustrophobia": {
        definition_en: "Extreme fear of confined places.",
        example_en: "He suffers from claustrophobia in elevators.",
        definition_fr: "Peur extrême des espaces clos.",
        example_fr: "Il souffre de claustrophobie dans les ascenseurs.",
        definition_es: "Miedo extremo a los espacios cerrados.",
        example_es: "Sufre de claustrofobia en los ascensores."
    },
    "cold": {
        definition_en: "At a low temperature.",
        example_en: "The water in the lake was very cold.",
        definition_fr: "À basse température.",
        example_fr: "L'eau du lac était très froide.",
        definition_es: "A baja temperatura.",
        example_es: "El agua del lago estaba muy fría."
    },
    "compelling": {
        definition_en: "Evoking interest, attention, or admiration in a powerful way.",
        example_en: "The lawyer presented a compelling argument.",
        definition_fr: "Qui suscite l'intérêt ou l'admiration de manière puissante.",
        example_fr: "L'avocat a présenté un argument convaincant.",
        definition_es: "Que suscita interés o admiración de manera poderosa.",
        example_es: "El abogado presentó un argumento convincente."
    },
    "concise": {
        definition_en: "Giving a lot of information clearly and in a few words.",
        example_en: "The summary was brief and concise.",
        definition_fr: "Exprimer beaucoup de choses en peu de mots.",
        example_fr: "Le résumé était bref et concis.",
        definition_es: "Expresar mucho en pocas palabras.",
        example_es: "El resumen fue breve y conciso."
    },
    "confidence": {
        definition_en: "The feeling or belief that one can rely on someone or something.",
        example_en: "She walked into the room with confidence.",
        definition_fr: "Le sentiment ou la croyance que l'on peut compter sur quelqu'un.",
        example_fr: "Elle est entrée dans la pièce avec assurance.",
        definition_es: "El sentimiento o creencia de que se puede confiar en alguien.",
        example_es: "Entró en la habitación con confianza."
    },
    "connection": {
        definition_en: "A relationship in which a person, thing, or idea is linked.",
        example_en: "There is a strong connection between exercise and health.",
        definition_fr: "Une relation dans laquelle une personne ou une idée est liée.",
        example_fr: "Il y a un lien fort entre l'exercice et la santé.",
        definition_es: "Relación en la que una persona o idea está vinculada.",
        example_es: "Existe una fuerte conexión entre el ejercicio y la salud."
    },
    "connectivity": {
        definition_en: "The state or extent of being connected.",
        example_en: "The island has very poor internet connectivity.",
        definition_fr: "L'état ou la mesure d'être connecté.",
        example_fr: "L'île a une très mauvaise connectivité internet.",
        definition_es: "El estado o la medida de estar conectado.",
        example_es: "La isla tiene una conectividad a internet muy pobre."
    },
    "cool": {
        definition_en: "Fairly cold; not warm or hot.",
        example_en: "It was a lovely cool morning.",
        definition_fr: "Assez froid; ni chaud ni brûlant.",
        example_fr: "C'était une belle matinée fraîche.",
        definition_es: "Bastante frío; ni cálido ni caliente.",
        example_es: "Era una hermosa mañana fresca."
    },
    "courageous": {
        definition_en: "Not deterred by danger or pain; brave.",
        example_en: "The firefighters made a courageous rescue.",
        definition_fr: "Qui ne craint pas le danger ou la douleur; brave.",
        example_fr: "Les pompiers ont effectué un sauvetage courageux.",
        definition_es: "Que no se deja intimidar por el peligro o el dolor; valiente.",
        example_es: "Los bomberos realizaron un rescate valiente."
    },

    // D
    "dehumanize": {
        definition_en: "To deprive of human qualities, personality, or dignity.",
        example_en: "Slavery was a system that sought to dehumanize people.",
        definition_fr: "Priver de ses qualités humaines ou de sa dignité.",
        example_fr: "L'esclavage était un système qui cherchait à déshumaniser les gens.",
        definition_es: "Privar de cualidades humanas o de su dignidad.",
        example_es: "La esclavitud era un sistema que buscaba deshumanizar a las personas."
    },
    "denounce": {
        definition_en: "To publicly declare to be wrong or evil.",
        example_en: "World leaders gathered to denounce the attack.",
        definition_fr: "Déclarer publiquement que quelque chose est mal ou injuste.",
        example_fr: "Les dirigeants mondiaux se sont réunis pour dénoncer l'attaque.",
        definition_es: "Declarar públicamente que algo es malo o injusto.",
        example_es: "Los líderes mundiales se reunieron para denunciar el ataque."
    },
    "determination": {
        definition_en: "Firmness of purpose; resoluteness.",
        example_en: "She succeeded through pure determination.",
        definition_fr: "Fermeté d'intention; résolution.",
        example_fr: "Elle a réussi par pure détermination.",
        definition_es: "Firmeza de propósito; resolución.",
        example_es: "Tuvo éxito por pura determinación."
    },
    "discipline": {
        definition_en: "The practice of training people to obey rules.",
        example_en: "The team showed great discipline on the field.",
        definition_fr: "La pratique de former les gens à obéir aux règles.",
        example_fr: "L'équipe a fait preuve d'une grande discipline sur le terrain.",
        definition_es: "La práctica de entrenar a las personas para obedecer reglas.",
        example_es: "El equipo mostró gran disciplina en el campo."
    },
    "disprove": {
        definition_en: "To prove that something is false.",
        example_en: "The experiments served to disprove the original theory.",
        definition_fr: "Démontrer que quelque chose est faux.",
        example_fr: "Les expériences ont servi à réfuter la théorie d'origine.",
        definition_es: "Demostrar que algo es falso.",
        example_es: "Los experimentos sirvieron para refutar la teoría original."
    },

    // E
    "efficiency": {
        definition_en: "The state or quality of being efficient.",
        example_en: "We aim to improve the efficiency of the factory.",
        definition_fr: "L'état ou la qualité d'être efficace.",
        example_fr: "Nous visons à améliorer l'efficacité de l'usine.",
        definition_es: "El estado o la calidad de ser eficiente.",
        example_es: "Nuestro objetivo es mejorar la eficiencia de la fábrica."
    },
    "elation": {
        definition_en: "Great happiness and exhilaration.",
        example_en: "They were filled with elation after the victory.",
        definition_fr: "Grande joie et exaltation.",
        example_fr: "Ils étaient remplis d'allégresse après la victoire.",
        definition_es: "Gran felicidad y exaltación.",
        example_es: "Estaban llenos de júbilo tras la victoria."
    },
    "empathy": {
        definition_en: "The ability to understand and share the feelings of another.",
        example_en: "To be a good nurse, you need to have empathy.",
        definition_fr: "Capacité de comprendre et partager les sentiments d'autrui.",
        example_fr: "Pour être une bonne infirmière, il faut avoir de l'empathie.",
        definition_es: "Capacidad de entender y compartir los sentimientos de otro.",
        example_es: "Para ser una buena enfermera, hay que tener empatía."
    },
    "enhance": {
        definition_en: "To intensify, increase, or further improve the quality of.",
        example_en: "The new lighting will enhance the room.",
        definition_fr: "Améliorer ou augmenter la qualité de quelque chose.",
        example_fr: "Le nouvel éclairage mettra en valeur la pièce.",
        definition_es: "Mejorar o aumentar la calidad de algo.",
        example_es: "La nueva iluminación realzará la habitación."
    },
    "ennui": {
        definition_en: "Dissatisfaction arising from a lack of occupation or excitement.",
        example_en: "He stared out the window with a look of ennui.",
        definition_fr: "Sentiment de lassitude et de mécontentement dû à l'inaction.",
        example_fr: "Il regardait par la fenêtre avec un sentiment d'ennui.",
        definition_es: "Descontento causado por falta de ocupación o emoción.",
        example_es: "Miraba por la ventana con expresión de tedio."
    },
    "entrepreneur": {
        definition_en: "A person who organizes and operates a business.",
        example_en: "He is a successful tech entrepreneur.",
        definition_fr: "Personne qui crée ou dirige une entreprise avec risques.",
        example_fr: "C'est un entrepreneur technologique accompli.",
        definition_es: "Persona que crea o dirige una empresa con riesgos.",
        example_es: "Es un emprendedor tecnológico exitoso."
    },
    "ephemeral": {
        definition_en: "Lasting for a very short time.",
        example_en: "Fame can be ephemeral.",
        definition_fr: "Qui ne dure que très peu de temps.",
        example_fr: "La gloire peut être éphémère.",
        definition_es: "Que dura muy poco tiempo.",
        example_es: "La fama puede ser efímera."
    },
    "epidemic": {
        definition_en: "A widespread occurrence of an infectious disease.",
        example_en: "The flu epidemic spread quickly through the city.",
        definition_fr: "Apparition massive d'une maladie infectieuse.",
        example_fr: "L'épidémie de grippe s'est propagée rapidement dans la ville.",
        definition_es: "Aparición masiva de una enfermedad infecciosa.",
        example_es: "La epidemia de gripe se extendió rápidamente por la ciudad."
    },
    "epigram": {
        definition_en: "A pithy saying or remark expressing an idea in a clever way.",
        example_en: "His speech was full of witty epigrams.",
        definition_fr: "Parole qui exprime une idée de façon piquante.",
        example_fr: "Son discours était plein d'épigrammes pleine d'esprit.",
        definition_es: "Frase breve que expresa un pensamiento de forma ingeniosa.",
        example_es: "Su discurso estuvo lleno de epigramas ingeniosos."
    },
    "escéptico": {
        definition_en: "A person who doubts or questions all accepted opinions.",
        example_en: "The scientist remained a skeptic about the new results.",
        definition_fr: "Personne qui a tendance à douter de tout.",
        example_fr: "Le scientifique est resté sceptique face aux nouveaux résultats.",
        definition_es: "Persona que duda o cuestiona todas las opiniones aceptadas.",
        example_es: "El científico siguió siendo escéptico sobre los nuevos resultados."
    },

    // F
    "fair": {
        definition_en: "Reasonable; right or just.",
        example_en: "The judge made a fair decision.",
        definition_fr: "Raisonnable; juste.",
        example_fr: "Le juge a pris une décision équitable.",
        definition_es: "Razonable; justo.",
        example_es: "El juez tomó una decisión justa."
    },
    "fallacy": {
        definition_en: "A mistaken belief, especially one based on unsound argument.",
        example_en: "The idea that technology solves everything is a fallacy.",
        definition_fr: "Une croyance fausse ou un raisonnement trompeur.",
        example_fr: "L'idée que la technologie résout tout est une erreur.",
        definition_es: "Una creencia falsa o razonamiento engañoso.",
        example_es: "La idea de que la tecnología lo resuelve todo es una falacia."
    },
    "fine": {
        definition_en: "Of high quality.",
        example_en: "This is a fine example of modern art.",
        definition_fr: "De haute qualité.",
        example_fr: "C'est un bel exemple d'art moderne.",
        definition_es: "De alta calidad.",
        example_es: "Este es un buen ejemplo de arte moderno."
    },
    "frozen": {
        definition_en: "Turned into ice.",
        example_en: "The lake was completely frozen.",
        definition_fr: "Transformé en glace.",
        example_fr: "Le lac était complètement gelé.",
        definition_es: "Convertido en hielo.",
        example_es: "El lago estaba completamente congelado."
    },

    // G
    "glacial": {
        definition_en: "Extremely cold; suggestive of a glacier.",
        example_en: "The wind blowing off the lake was glacial.",
        definition_fr: "D'un froid extrême, comme celui d'un glacier.",
        example_fr: "Le vent soufflant du lac était glacial.",
        definition_es: "De un frío extremo, como el de un glaciar.",
        example_es: "El viento que soplaba del lago era glacial."
    },
    "good": {
        definition_en: "To be desired or approved of.",
        example_en: "The bread at this bakery is very good.",
        definition_fr: "Désirable ou approuvé.",
        example_fr: "Le pain de cette boulangerie est très bon.",
        definition_es: "Deseable o aprobado.",
        example_es: "El pan de esta panadería es muy bueno."
    },
    "growth": {
        definition_en: "The process of increasing in physical size or importance.",
        example_en: "The company has seen steady growth this year.",
        definition_fr: "Le processus d'augmentation de la taille ou de l'importance.",
        example_fr: "L'entreprise a connu une croissance constante cette année.",
        definition_es: "El proceso de aumentar en tamaño o importancia.",
        example_es: "La empresa ha experimentado un crecimiento constante este año."
    },

    // H
    "hasty": {
        definition_en: "Done or acting with excessive speed or urgency.",
        example_en: "Don't make a hasty decision.",
        definition_fr: "Fait avec une rapidité excessive.",
        example_fr: "Ne prenez pas de décision hâtive.",
        definition_es: "Hecho con excesiva rapidez.",
        example_es: "No tomes una decisión apresurada."
    },

    // I
    "iconoclast": {
        definition_en: "A person who attacks cherished beliefs or institutions.",
        example_en: "As an iconoclast, he always challenged traditional ideas.",
        definition_fr: "Personne qui rejette les traditions ou les idées reçues.",
        example_fr: "En tant qu'iconoclaste, il remettait toujours en question les idées traditionnelles.",
        definition_es: "Persona que rechaza las tradiciones o ideas establecidas.",
        example_es: "Como iconoclasta, siempre cuestionaba las ideas tradicionales."
    },
    "imperceptible": {
        definition_en: "So slight, gradual, or subtle as not to be perceived.",
        example_en: "The change in temperature was almost imperceptible.",
        definition_fr: "Si léger ou subtil qu'on ne peut pas le percevoir.",
        example_fr: "Le changement de température était presque imperceptible.",
        definition_es: "Tan ligero o sutil que no se puede percibir.",
        example_es: "El cambio de temperatura fue casi imperceptible."
    },
    "instantaneous": {
        definition_en: "Occurring or done in an instant.",
        example_en: "The response from the computer was instantaneous.",
        definition_fr: "Qui se produit ou se fait en un instant.",
        example_fr: "La réponse de l'ordinateur a été instantanée.",
        definition_es: "Que ocurre o se hace en un instante.",
        example_es: "La respuesta del ordenador fue instantánea."
    },
    "integrity": {
        definition_en: "The quality of being honest and having strong moral principles.",
        example_en: "He is a man of great integrity.",
        definition_fr: "Qualité d'une personne honnête et fidèle à ses principes.",
        example_fr: "C'est un homme d'une grande intégrité.",
        definition_es: "Calidad de una persona honesta y fiel a sus principios.",
        example_es: "Es un hombre de gran integridad."
    },
    "invincible": {
        definition_en: "Too powerful to be defeated.",
        example_en: "The team felt invincible after their victory.",
        definition_fr: "Trop puissant pour être vaincu.",
        example_fr: "L'équipe s'est sentie invincible après sa victoire.",
        definition_es: "Demasiado poderoso para ser vencido.",
        example_es: "El equipo se sintió invencible tras su victoria."
    },
    "irreverent": {
        definition_en: "Showing a lack of respect for things generally taken seriously.",
        example_en: "The comedian's irreverent jokes were a hit.",
        definition_fr: "Manquant de respect pour ce qui est considéré comme sérieux.",
        example_fr: "Les blagues irrévérencieuses de l'humoriste ont eu du succès.",
        definition_es: "Que falta el respeto a lo que se considera serio.",
        example_es: "Los chistes irreverentes del comediante fueron un éxito."
    },

    // J
    "júbilo": {
        definition_en: "Great happiness and triumph.",
        example_en: "The news was received with jubilation.",
        definition_fr: "Grande joie et triomphe.",
        example_fr: "La nouvelle a été accueillie avec une grande allégresse.",
        definition_es: "Gran alegría y triunfo.",
        example_es: "La noticia fue recibida con gran júbilo."
    },

    // L
    "large": {
        definition_en: "Of considerable size.",
        example_en: "They live in a large house in the country.",
        definition_fr: "D'une taille considérable.",
        example_fr: "Ils vivent dans une grande maison à la campagne.",
        definition_es: "De un tamaño considerable.",
        example_es: "Viven en una casa grande en el campo."
    },
    "little": {
        definition_en: "Small in size, amount, or degree.",
        example_en: "She has a little dog.",
        definition_fr: "Petit par la taille ou la quantité.",
        example_fr: "Elle a un petit chien.",
        definition_es: "Pequeño en tamaño o cantidad.",
        example_es: "Ella tiene un perro pequeño."
    },
    "lucid": {
        definition_en: "Expressed clearly; easy to understand.",
        example_en: "He gave a lucid description of the engine.",
        definition_fr: "Exprimé clairement; facile à comprendre.",
        example_fr: "Il a donné une description lucide du moteur.",
        definition_es: "Expresado claramente; fácil de entender.",
        example_es: "Dio una descripción lúcida del motor."
    },

    // M
    "manifesto": {
        definition_en: "A public declaration of policy and aims.",
        example_en: "The political party published its manifesto yesterday.",
        definition_fr: "Déclaration publique de principes et d'intentions.",
        example_fr: "Le parti politique a publié son manifeste hier.",
        definition_es: "Declaración pública de principios e intenciones.",
        example_es: "El partido político publicó su manifiesto ayer."
    },
    "minimizar": {
        definition_en: "To represent something as being smaller than it actually is.",
        example_en: "He tried to minimize the impact of the error.",
        definition_fr: "Rendre quelque chose moins important qu'il ne l'est.",
        example_fr: "Il a essayé de minimiser l'impact de l'erreur.",
        definition_es: "Hacer que algo parezca de menor importancia de lo que es.",
        example_es: "Intentó minimizar el impacto del error."
    },
    "minimum": {
        definition_en: "The least amount or quantity possible.",
        example_en: "There is a minimum age requirement for the movie.",
        definition_fr: "La plus petite quantité ou valeur possible.",
        example_fr: "Il y a un âge minimum requis pour le film.",
        definition_es: "La cantidad o valor más pequeño posible.",
        example_es: "Hay un requisito de edad mínima para la película."
    },
    "minor": {
        definition_en: "Lesser in importance, seriousness, or significance.",
        example_en: "She suffered only minor injuries.",
        definition_fr: "Moindre en importance ou en gravité.",
        example_fr: "Elle n'a subi que des blessures mineures.",
        definition_es: "De menor importancia o gravedad.",
        example_es: "Solo sufrió heridas menores."
    },
    "minuscule": {
        definition_en: "Extremely small; tiny.",
        example_en: "The font on the map was minuscule.",
        definition_fr: "Extrêmement petit; minuscule.",
        example_fr: "La police sur la carte était minuscule.",
        definition_es: "Extremadamente pequeño; minúsculo.",
        example_es: "La letra del mapa era minúscula."
    },
    "monologue": {
        definition_en: "A long speech by one person in a play.",
        example_en: "The actor delivered a powerful monologue.",
        definition_fr: "Long discours d'une personne dans une pièce.",
        example_fr: "L'acteur a prononcé un monologue puissant.",
        definition_es: "Largo discurso de una persona en una obra.",
        example_es: "El actor pronunció un monólogo poderoso."
    },
    "monstrous": {
        definition_en: "Ugly or frightening appearance; giant in size.",
        example_en: "A monstrous storm was approaching.",
        definition_fr: "Qui a l'aspect laid ou effrayant d'un monstre; géant.",
        example_fr: "Une tempête monstrueuse approchait.",
        definition_es: "Aspecto feo o aterrador; de tamaño gigante.",
        example_es: "Se acercaba una tormenta monstruosa."
    },
    "mood": {
        definition_en: "A temporary state of mind or feeling.",
        example_en: "He was in a good mood after the news.",
        definition_fr: "État d'esprit temporaire.",
        example_fr: "Il était de bonne humeur après la nouvelle.",
        definition_es: "Estado de ánimo temporal.",
        example_es: "Estaba de buen humor tras la noticia."
    },

    // N
    "nice": {
        definition_en: "Pleasant; agreeable; satisfactory.",
        example_en: "We had a nice time at the party.",
        definition_fr: "Agréable; satisfaisant.",
        example_fr: "Nous avons passé un bon moment à la fête.",
        definition_es: "Agradable; satisfactorio.",
        example_es: "Lo pasamos bien en la fiesta."
    },
    "nimble": {
        definition_en: "Quick and light in movement or action.",
        example_en: "She were nimble fingers to play the piano.",
        definition_fr: "Agile et léger dans le mouvement.",
        example_fr: "Elle a des doigts agiles pour jouer du piano.",
        definition_es: "Rápido y ligero en movimiento.",
        example_es: "Tiene dedos ágiles para tocar el piano."
    },

    // O
    "okay": {
        definition_en: "Satisfactory; all right.",
        example_en: "The food was okay, but not great.",
        definition_fr: "Satisfaisant; correct.",
        example_fr: "La nourriture était correcte, mais pas géniale.",
        definition_es: "Satisfactorio; aceptable.",
        example_es: "La comida estaba bien, pero no era genial."
    },
    "old": {
        definition_en: "Having lived for a long time.",
        example_en: "They found an old book in the attic.",
        definition_fr: "Ayant vécu pendant longtemps.",
        example_fr: "Ils ont trouvé un vieux livre dans le grenier.",
        definition_es: "Haber vivido por mucho tiempo.",
        example_es: "Encontraron un libro viejo en el desván."
    },
    "omnipresente": {
        definition_en: "Present everywhere at the same time.",
        example_en: "The influence of the internet is now ubiquitous.",
        definition_fr: "Présent partout en même temps.",
        example_fr: "L'influence d'Internet est désormais omniprésente.",
        definition_es: "Presente en todas partes al mismo tiempo.",
        example_es: "La influencia de internet es ahora omnipresente."
    },

    // P
    "patriot": {
        definition_en: "A person who vigorously supports their country.",
        example_en: "He was celebrated as a true patriot.",
        definition_fr: "Personne qui aime et soutient son pays.",
        example_fr: "Il a été célébré comme un véritable patriote.",
        definition_es: "Persona que ama y apoya a su país.",
        example_es: "Fue celebrado como un verdadero patriota."
    },
    "placate": {
        definition_en: "To make someone less angry or hostile.",
        example_en: "They tried to placate the crying child with a toy.",
        definition_fr: "Calmer la colère ou l'hostilité de quelqu'un.",
        example_fr: "Ils ont essayé d'apaiser l'enfant en pleurs avec un jouet.",
        definition_es: "Calmar la ira o la hostilidad de alguien.",
        example_es: "Intentaron aplacar al niño que lloraba con un juguete."
    },
    "pleasant": {
        definition_en: "Giving a sense of happy satisfaction or enjoyment.",
        example_en: "We had a pleasant evening by the lake.",
        definition_fr: "Donnant un sentiment de satisfaction ou de plaisir.",
        example_fr: "Nous avons passé une soirée agréable au bord du lac.",
        definition_es: "Que da una sensación de satisfacción o disfrute.",
        example_es: "Pasamos una tarde agradable junto al lago."
    },
    "polyglot": {
        definition_en: "Knowing or using several languages.",
        example_en: "Being a polyglot is useful in international business.",
        definition_fr: "Personne qui parle plusieurs langues.",
        example_fr: "Être polyglotte est utile dans le commerce international.",
        definition_es: "Persona que sabe hablar varios idiomas.",
        example_es: "Ser políglota es útil en los negocios internacionales."
    },
    "proclaim": {
        definition_en: "To announce officially or publicly.",
        example_en: "The king will proclaim the new law tomorrow.",
        definition_fr: "Annoncer officiellement ou publiquement.",
        example_fr: "Le roi proclamera la nouvelle loi demain.",
        definition_es: "Anunciar oficial o públicamente.",
        example_es: "El rey proclamará la nueva ley mañana."
    },
    "proliferate": {
        definition_en: "To increase rapidly in number; multiply.",
        example_en: "Digital devices continue to proliferate.",
        definition_fr: "Se multiplier ou augmenter très rapidement.",
        example_fr: "Les appareils numériques continuent de proliférer.",
        definition_es: "Aumentar rápidamente en número; multiplicarse.",
        example_es: "Los dispositivos digitales siguen proliferando."
    },
    "psychology": {
        definition_en: "The scientific study of the human mind and its functions.",
        example_en: "She studied psychology at the university.",
        definition_fr: "L'étude scientifique de l'esprit humain et de ses fonctions.",
        example_fr: "Elle a étudié la psychologie à l'université.",
        definition_es: "El estudio científico de la mente humana y sus funciones.",
        example_es: "Estudió psicología en la universidad."
    },

    // Q
    "quixotic": {
        definition_en: "Exceedingly idealistic; unrealistic and impractical.",
        example_en: "His quixotic quest for world peace was admired.",
        definition_fr: "Excessivement idéaliste; irréaliste et impraticable.",
        example_fr: "Sa quête chimérique de la paix mondiale était admirée.",
        definition_es: "Excesivamente idealista; irreal y poco práctico.",
        example_es: "Su búsqueda quijotesca de la paz mundial fue admirada."
    },

    // R
    "ravenous": {
        definition_en: "Extremely hungry.",
        example_en: "I was ravenous after the long hike.",
        definition_fr: "Qui a extrêmement faim.",
        example_fr: "J'étais affamé après la longue randonnée.",
        definition_es: "Que tiene mucha hambre.",
        example_es: "Estaba hambriento tras la larga caminata."
    },
    "repudiate": {
        definition_en: "To refuse to accept or be associated with.",
        example_en: "The company was quick to repudiate the false claims.",
        definition_fr: "Rejeter ou nier officiellement quelque chose.",
        example_fr: "L'entreprise s'est empressée de répudier les fausses allégations.",
        definition_es: "Negarse a aceptar o ser asociado con algo.",
        example_es: "La empresa se apresuró a repudiar las afirmaciones falsas."
    },
    "rhetoric": {
        definition_en: "The art of effective or persuasive speaking.",
        example_en: "The politician was a master of rhetoric.",
        definition_fr: "L'art de parler de manière persuasive.",
        example_fr: "Le politicien était un maître en rhétorique.",
        definition_es: "El arte de hablar de manera persuasiva.",
        example_es: "El político era un maestro de la retórica."
    },

    // S
    "serendipitous": {
        definition_en: "Occurring by chance in a happy or beneficial way.",
        example_en: "The discovery of gravity was serendipitous.",
        definition_fr: "Qui arrive par hasard de manière heureuse.",
        example_fr: "La découverte de la gravité a été fortuite.",
        definition_es: "Que sucede de casualidad de manera afortunada.",
        example_es: "El descubrimiento de la gravedad fue fortuito."
    },
    "short": {
        definition_en: "Of a small distance from one end to the other.",
        example_en: "He took a short break from work.",
        definition_fr: "D'une petite distance d'une extrémité à l'autre.",
        example_fr: "Il a fait une courte pause.",
        definition_es: "De corta distancia de un extremo a otro.",
        example_es: "Se tomó un breve descanso del trabajo."
    },
    "simplify": {
        definition_en: "To make something easier to understand.",
        example_en: "We need to simplify the complex instructions.",
        definition_fr: "Rendre quelque chose plus facile à comprendre.",
        example_fr: "Nous devons simplifier les instructions complexes.",
        definition_es: "Hacer algo más fácil de entender.",
        example_es: "Necesitamos simplificar las instrucciones complejas."
    },
    "skeptic": {
        definition_en: "A person inclined to question or doubt all accepted opinions.",
        example_en: "The doctor remains a skeptic about the new treatment.",
        definition_fr: "Personne qui a tendance à douter de tout.",
        example_fr: "Le médecin reste sceptique quant au nouveau traitement.",
        definition_es: "Persona inclinada a dudar de todas las opiniones aceptadas.",
        example_es: "El médico sigue siendo escéptico sobre el nuevo tratamiento."
    },
    "small": {
        definition_en: "Less than normal in size, amount, or degree.",
        example_en: "The house was small but cozy.",
        definition_fr: "Plus petit que la normale par la taille ou la quantité.",
        example_fr: "La maison était petite mais chaleureuse.",
        definition_es: "Menor de lo normal en tamaño o cantidad.",
        example_es: "La casa era pequeña pero acogedora."
    },
    "sublime": {
        definition_en: "Of such excellence as to inspire great admiration.",
        example_en: "The performance of the choir was sublime.",
        definition_fr: "D'une excellence telle qu'elle inspire une grande admiration.",
        example_fr: "La performance de la chorale était sublime.",
        definition_es: "De tal excelencia que inspira gran admiración.",
        example_es: "La actuación del coro fue sublime."
    },

    // T
    "tall": {
        definition_en: "Of great or more than average height.",
        example_en: "He is a very tall man.",
        definition_fr: "D'une hauteur supérieure à la moyenne.",
        example_fr: "C'est un homme très grand.",
        definition_es: "De altura superior a la media.",
        example_es: "Es un hombre muy alto."
    },
    "teenager": {
        definition_en: "A person aged between 13 and 19 years.",
        example_en: "Social media is very popular among teenagers.",
        definition_fr: "Jeune personne âgée de 13 à 19 ans.",
        example_fr: "Les réseaux sociaux sont très populaires chez les adolescents.",
        definition_es: "Persona de entre 13 y 19 años.",
        example_es: "Las redes sociales son muy populares entre los adolescentes."
    },
    "tidy": {
        definition_en: "Arranged neatly and in order.",
        example_en: "She keeps her room very tidy.",
        definition_fr: "Rangée avec soin et en ordre.",
        example_fr: "Elle garde sa chambre très bien rangée.",
        definition_es: "Ordenado cuidadosamente y en orden.",
        example_es: "Mantiene su habitación muy ordenada."
    },

    // U
    "ubiquitous": {
        definition_en: "Present, appearing, or found everywhere.",
        example_en: "Smartphones are ubiquitous in modern society.",
        definition_fr: "Présent partout en même temps.",
        example_fr: "Les smartphones sont omniprésents dans la société moderne.",
        definition_es: "Presente en todas partes al mismo tiempo.",
        example_es: "Los teléfonos inteligentes son ubicuos en la sociedad moderna."
    },
    "undermine": {
        definition_en: "To lessen the effectiveness, power, or ability of.",
        example_en: "The scandal began to undermine his reputation.",
        definition_fr: "Affaiblir progressivement l'efficacité ou le pouvoir de quelqu'un.",
        example_fr: "Le scandale a commencé à miner sa réputation.",
        definition_es: "Debilitar progresivamente la eficacia o el poder de alguien.",
        example_es: "El escándalo empezó a socavar su reputación."
    },
    "understate": {
        definition_en: "To represent something as being smaller than it is.",
        example_en: "He tended to understate the complexity of the task.",
        definition_fr: "Présenter quelque chose de manière atténuée.",
        example_fr: "Il avait tendance à minimiser la complexité de la tâche.",
        definition_es: "Presentar algo de forma atenuada de lo que es.",
        example_es: "Tendía a subestimar la complejidad de la tarea."
    },
    "used": {
        definition_en: "Having already been used; not new.",
        example_en: "They bought a used car to save money.",
        definition_fr: "Ayant déjà été utilisé; pas neuf.",
        example_fr: "Ils ont acheté une voiture d'occasion pour économiser de l'argent.",
        definition_es: "Haber sido ya utilizado; no nuevo.",
        example_es: "Compraron un coche usado para ahorrar dinero."
    },

    // V
    "venerable": {
        definition_en: "Accorded a great deal of respect, especially because of age.",
        example_en: "The venerable professor retired after fifty years.",
        definition_fr: "Qui mérite un grand respect, en raison de son âge.",
        example_fr: "Le vénérable professeur a pris sa retraite après cinquante ans.",
        definition_es: "Que merece un gran respeto por su edad.",
        example_es: "El venerable profesor se jubiló tras cincuenta años."
    },
    "vivacious": {
        definition_en: "Attractively lively and animated.",
        example_en: "She has a vivacious personality.",
        definition_fr: "D'un tempérament vif et plein de vie.",
        example_fr: "Elle a une personnalité pleine de vie.",
        definition_es: "De un temperamento vivo y lleno de vida.",
        example_es: "Tiene una personalidad vivaz."
    },

    // W
    "wide": {
        definition_en: "To a great or specified extent from side to side.",
        example_en: "The river is very wide at this point.",
        definition_fr: "D'une grande mesure d'un côté à l'autre.",
        example_fr: "La rivière est très large à cet endroit.",
        definition_es: "De gran medida de un lado a otro.",
        example_es: "El río es muy ancho en este punto."
    },
    "worn": {
        definition_en: "Damaged and shabby as a result of much use.",
        example_en: "The carpet was old and worn.",
        definition_fr: "Endommagé par un usage prolongé.",
        example_fr: "Le tapis était vieux et usé.",
        definition_es: "Dañado por el uso prolongado.",
        example_es: "La alfombra estaba vieja y gastada."
    },
    // Synonyms & Incorporation
    "joyful": {
        definition_en: "Feeling, expressing, or causing great pleasure and happiness.",
        example_en: "It was a joyful occasion for the whole family.",
        definition_fr: "Ressentir ou causer un grand plaisir et du bonheur.",
        example_fr: "C'était une occasion joyeuse pour toute la famille.",
        definition_es: "Sentir o causar gran placer y felicidad.",
        example_es: "Fue una ocasión alegre para toda la familia."
    },
    "jubilant": {
        definition_en: "Feeling or expressing great happiness and triumph.",
        example_en: "The jubilant fans flooded the field.",
        definition_fr: "Exprimer une grande joie et un triomphe.",
        example_fr: "Les fans jubilants ont envahi le terrain.",
        definition_es: "Sentir o expresar gran felicidad y triunfo.",
        example_es: "Los fanáticos jubilosos inundaron el campo."
    },
    "melancholy": {
        definition_en: "A feeling of pensive sadness.",
        example_en: "The music had a touch of melancholy.",
        definition_fr: "Sentiment de tristesse vague et de lassitude.",
        example_fr: "La musique avait une touche de mélancolie.",
        definition_es: "Sentimiento de tristeza vaga y desasosiego.",
        example_es: "La música tenía un toque de melancolía."
    },
    "colossal": {
        definition_en: "Extremely large.",
        example_en: "The project was a colossal undertaking.",
        definition_fr: "Extrêmement grand.",
        example_fr: "Le projet était une entreprise colossale.",
        definition_es: "Extremadamente grande.",
        example_es: "El proyecto fue una tarea colosal."
    },
    "erudite": {
        definition_en: "Having or showing great knowledge or learning.",
        example_en: "He was an erudite scholar of ancient history.",
        definition_fr: "Qui a une grande culture et de vastes connaissances.",
        example_fr: "C'était un érudit de l'histoire ancienne.",
        definition_es: "Que tiene gran cultura y conocimientos.",
        example_es: "Era un erudito de la historia antigua."
    },
    "resplendent": {
        definition_en: "Attractive and impressive through being richly colorful or shining.",
        example_en: "She looked resplendent in her evening gown.",
        definition_fr: "Éclatant de beauté ou de lumière.",
        example_fr: "Elle était resplendissante dans sa robe de soirée.",
        definition_es: "Brillante y magnífico con gran colorido o luz.",
        example_es: "Se veía resplandeciente con su vestido de noche."
    },
    "formidable": {
        definition_en: "Inspiring fear or respect through being powerful or intense.",
        example_en: "The team faced a formidable opponent.",
        definition_fr: "Qui inspire la crainte ou le respect par sa force.",
        example_fr: "L'équipe a affronté un adversaire formidable.",
        definition_es: "Que inspira temor o respeto por su fuerza.",
        example_es: "El equipo se enfrentó a un oponente formidable."
    },
    "facile": {
        definition_en: "Appearing neat and comprehensive only by ignoring the true complexities of an issue.",
        example_en: "The politician offered a facile solution.",
        definition_fr: "Qui semble simple en ignorant la complexité réelle.",
        example_fr: "Le politicien a proposé une solution facile.",
        definition_es: "Que parece sencillo al ignorar la complejidad real.",
        example_es: "El político ofreció una solución fácil."
    },
    "frigid": {
        definition_en: "Very cold in temperature.",
        example_en: "The arctic air was frigid.",
        definition_fr: "D'un froid glacial.",
        example_fr: "L'air arctique était glacial.",
        definition_es: "De una temperatura muy fría.",
        example_es: "El aire ártico era gélido."
    },
    "scorching": {
        definition_en: "Very hot.",
        example_en: "It was a scorching day in the desert.",
        definition_fr: "Très chaud; brûlant.",
        example_fr: "C'était une journée brûlante dans le désert.",
        definition_es: "Muy caliente.",
        example_es: "Fue un día abrasador en el desierto."
    },
    "impeccable": {
        definition_en: "In accordance with the highest standards; faultless.",
        example_en: "Her English was impeccable.",
        definition_fr: "D'une perfection absolue; sans faute.",
        example_fr: "Son français était impeccable.",
        definition_es: "De una perfección absoluta; impecable.",
        example_es: "Su español era impecable."
    },
    "abysmal": {
        definition_en: "Extremely bad; appalling.",
        example_en: "The quality of the service was abysmal.",
        definition_fr: "Extrêmement mauvais; épouvantable.",
        example_fr: "La qualité du service était abyssale.",
        definition_es: "Extremadamente malo; espantoso.",
        example_es: "La calidad del servicio fue abismal."
    },
    "paramount": {
        definition_en: "More important than anything else; supreme.",
        example_en: "Safety is of paramount importance.",
        definition_fr: "Plus important que tout; souverain.",
        example_fr: "La sécurité est d'une importance primordiale.",
        definition_es: "Más importante que todo; supremo.",
        example_es: "La seguridad es de importancia primordial."
    },
    "riveting": {
        definition_en: "Completely engrossing; compelling.",
        example_en: "The book was absolutely riveting.",
        definition_fr: "Absolument passionnant; captivant.",
        example_fr: "Le livre était absolument captivant.",
        definition_es: "Totalmente absorbente; fascinante.",
        example_es: "El libro era absolutamente fascinante."
    },
    "tranquil": {
        definition_en: "Free from disturbance; calm.",
        example_en: "The lake was tranquil in the morning.",
        definition_fr: "Exempt de toute perturbation; calme.",
        example_fr: "Le lac était tranquille le matin.",
        definition_es: "Libre de perturbaciones; tranquilo.",
        example_es: "El lago estaba tranquilo por la mañana."
    },
    "prosperous": {
        definition_en: "Successful in material terms; flourishing.",
        example_en: "The town became prosperous after the factory opened.",
        definition_fr: "Qui réussit sur le plan matériel; florissant.",
        example_fr: "La ville est devenue prospère après l'ouverture de l'usine.",
        definition_es: "Exitoso en términos materiales; próspero.",
        example_es: "La ciudad se volvió próspera tras la apertura de la fábrica."
    },
    "intrepid": {
        definition_en: "Fearless; adventurous.",
        example_en: "An intrepid explorer mapped the region.",
        definition_fr: "Qui ne craint pas le danger; intrépide.",
        example_fr: "Un explorateur intrépide a cartographié la région.",
        definition_es: "Que no teme al peligro; intrépido.",
        example_es: "Un explorador intrépido cartografió la región."
    },
    "incandescent": {
        definition_en: "Emitting light as a result of being heated.",
        example_en: "The old bulbs were incandescent.",
        definition_fr: "Qui émet de la lumière sous l'effet de la chaleur.",
        example_fr: "Les vieilles ampoules étaient à incandescence.",
        definition_es: "Que emite luz por el efecto del calor.",
        example_es: "Las bombillas viejas eran incandescentes."
    },
    "innovation": {
        definition_en: "A new method, idea, or product.",
        example_en: "The company is known for its innovation.",
        definition_fr: "Une nouvelle méthode, idée ou produit.",
        example_fr: "L'entreprise est connue pour son innovation.",
        definition_es: "Un nuevo método, idea o producto.",
        example_es: "La empresa es conocida por su innovación."
    },
    "resilience": {
        definition_en: "The capacity to recover quickly from difficulties.",
        example_en: "Children often show great resilience.",
        definition_fr: "Capacité à surmonter les chocs et les difficultés.",
        example_fr: "Les enfants font souvent preuve d'une grande résilience.",
        definition_es: "Capacidad para superar choques y dificultades.",
        example_es: "Los niños suelen mostrar una gran resiliencia."
    }
};
