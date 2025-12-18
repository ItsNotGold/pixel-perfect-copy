import re
from pathlib import Path

WD = Path('src/data/wordDefinitions.ts')
text = WD.read_text(encoding='utf-8')

# High-priority mappings for Reverse Definitions (EN/FR/ES)
MAPPINGS = {
    'en': {
        'elation': {
            'definition': 'A feeling of triumphant joy or intense happiness, often following a success or good news.',
            'example': 'She felt elation after learning she had passed the exam with top marks.'
        },
        'articulate': {
            'definition': 'Able to express thoughts and ideas clearly and effectively in speech or writing.',
            'example': 'He is very articulate and explained the process step by step.'
        },
        'skeptic': {
            'definition': 'A person inclined to question or doubt accepted opinions and claims until they are supported by evidence.',
            'example': 'As a skeptic, she demanded to see the data before accepting the claim.'
        },
        'ubiquitous': {
            'definition': 'Present, appearing, or found everywhere or very commonly.',
            'example': 'Smartphones are ubiquitous in modern cities.'
        },
        'understate': {
            'definition': 'To describe something as smaller, less important, or less serious than it really is.',
            'example': 'He tended to understate his role in the project despite doing most of the work.'
        },
        'mood': {
            'definition': 'A temporary emotional state that affects how a person feels and behaves.',
            'example': 'Her mood improved after a short walk in the park.'
        },
        'empathy': {
            'definition': 'The ability to understand and share the feelings of another person.',
            'example': 'Her empathy helped her comfort friends going through difficult times.'
        },
        'quixotic': {
            'definition': 'Unrealistic and impractical in pursuit of ideals; extravagantly chivalrous or romantic.',
            'example': 'His quixotic plans to change the world were admired but difficult to implement.'
        },
        'concise': {
            'definition': 'Expressing ideas clearly using few words; brief and to the point.',
            'example': 'Please keep your answers concise in the meeting notes.'
        },
        'aversion': {
            'definition': 'A strong dislike or reluctance to do or experience something.',
            'example': 'She has an aversion to loud noises and avoids crowded places.'
        },
        'integrity': {
            'definition': 'The quality of being honest and having strong moral principles that one refuses to compromise.',
            'example': 'He showed integrity by admitting his mistake and correcting it.'
        },
        'simplify': {
            'definition': 'To make something less complicated or easier to understand or do.',
            'example': 'We should simplify the instructions so new users can follow them easily.'
        },
        'patriot': {
            'definition': 'A person who strongly supports and defends their country and its interests.',
            'example': 'Many patriots volunteered to help during the national crisis.'
        },
        'psychology': {
            'definition': 'The scientific study of the mind, behavior, and mental processes.',
            'example': 'She studied psychology to better understand human behavior.'
        },
        'ravenous': {
            'definition': 'Extremely hungry; having a strong appetite after a period without food.',
            'example': 'After the hike he was ravenous and ate two sandwiches.'
        },
        'disprove': {
            'definition': 'To show that a belief, statement, or theory is false or incorrect using evidence or argument.',
            'example': 'Researchers worked to disprove the earlier hypothesis with new experiments.'
        },
        'polyglot': {
            'definition': 'A person who knows and can use several languages.',
            'example': 'As a polyglot, she quickly switched between English, French, and Spanish.'
        },
        'serendipitous': {
            'definition': 'Occurring or discovered by chance in a happy or beneficial way.',
            'example': 'Their meeting was serendipitous and led to a successful collaboration.'
        },
        'abolish': {
            'definition': 'To officially end or stop a law, system, or practice so it is no longer used.',
            'example': 'The committee recommended abolish-ing outdated regulations to modernize the code.'
        },
        'monologue': {
            'definition': 'A long speech by a single person, especially in a play, film, or as part of a performance.',
            'example': 'The actor performed a powerful monologue that moved the audience.'
        },
        'minimum': {
            'definition': 'The smallest amount, number, or degree that is possible or allowed.',
            'example': 'You must be at least the minimum age to enter the competition.'
        },
        'proclaim': {
            'definition': 'To announce something publicly and officially, often with strong emphasis.',
            'example': 'The mayor will proclaim the new park open this weekend.'
        },
        'ephemeral': {
            'definition': 'Lasting for only a very short time; fleeting and not permanent.',
            'example': 'Her fame proved ephemeral after the viral video faded from public attention.'
        },
        'rhetoric': {
            'definition': 'The art of using language effectively to inform, persuade, or motivate an audience.',
            'example': 'The speech relied more on rhetoric than on concrete policies.'
        },
        'dehumanize': {
            'definition': 'To treat people so as to deny their human qualities and make them seem like objects or things.',
            'example': 'Propaganda can dehumanize groups and lead to widespread prejudice.'
        },
        'entrepreneur': {
            'definition': 'Someone who starts, organizes, and manages a business, taking financial risks in hope of profit.',
            'example': 'The young entrepreneur launched a successful tech startup.'
        },
        'irreverent': {
            'definition': 'Showing a lack of respect for people, traditions, or established ideas, often in a playful way.',
            'example': 'Her irreverent humor poked fun at the judges without being mean-spirited.'
        },
        'repudiate': {
            'definition': 'To refuse to accept or support something; to reject an idea or claim as untrue or unjust.',
            'example': 'He publicly repudiated the allegations made against him.'
        },
        'teenager': {
            'definition': 'A person aged between 13 and 19 years; someone in the period of adolescence.',
            'example': 'As a teenager, she spent most weekends practicing with the team.'
        },
        'enhance': {
            'definition': 'To improve the quality, value, or extent of something; to make it better.',
            'example': 'They used filters to enhance the clarity of the photograph.'
        },
        'ardent': {
            'definition': 'Very enthusiastic or passionate about a cause or activity.',
            'example': 'He was an ardent supporter of environmental conservation.'
        },
        'fallacy': {
            'definition': 'A mistaken belief or error in reasoning that seems plausible but is logically incorrect.',
            'example': 'Believing that one event caused another without evidence is a common fallacy.'
        },
        'annihilate': {
            'definition': 'To destroy completely so that nothing remains useful or recognizable.',
            'example': 'The old building was annihilated to make room for the new highway.'
        },
        'astronomer': {
            'definition': 'A scientist who studies celestial objects, space, and the physical universe beyond Earth.',
            'example': 'The astronomer charted the positions of newly discovered comets.'
        },
        'invincible': {
            'definition': 'Too powerful to be defeated or overcome; impossible to beat.',
            'example': 'After winning the championship, the team felt almost invincible.'
        },
        'abdicate': {
            'definition': 'To formally give up a position of power or responsibility, especially a throne or authority.',
            'example': 'The monarch decided to abdicate in favor of his heir.'
        },
        'anonymity': {
            'definition': 'The condition of being unnamed or unidentifiable, so that a person\'s identity is not known.',
            'example': 'Users could post comments with anonymity to protect their privacy.'
        },
        'antonym': {
            'definition': 'A word that has the opposite meaning of another word.',
            'example': '"Hot" and "cold" are antonyms.'
        },
        'claustrophobia': {
            'definition': 'An extreme fear or anxiety about being in confined or enclosed spaces.',
            'example': 'He avoided elevators because of his claustrophobia.'
        },
        'canonize': {
            'definition': 'To officially declare someone a saint in certain religious traditions.',
            'example': 'The church decided to canonize the missionary for his lifetime of service.'
        },
        'epigram': {
            'definition': 'A short, clever, and often humorous saying or poem that expresses an idea sharply.',
            'example': 'The writer opened the essay with a witty epigram.'
        },
        'manifesto': {
            'definition': 'A public written statement declaring the intentions, motives, or views of an individual or group.',
            'example': 'The party released a manifesto promising educational reform.'
        },
        'undermine': {
            'definition': 'To weaken or damage someone\'s position, authority, or chances of success gradually or secretly.',
            'example': 'The constant criticism began to undermine her confidence at work.'
        },
        'aesthetic': {
            'definition': 'Concerning the appreciation of beauty or artistic taste; relating to what is visually pleasing.',
            'example': 'The designer focused on creating an aesthetic that felt modern and warm.'
        },
        'epidemic': {
            'definition': 'A sudden increase in the number of cases of a disease above what is normally expected in a region.',
            'example': 'Public health officials responded quickly to the flu epidemic.'
        },
        'lucid': {
            'definition': 'Clear and easy to understand; showing mental clarity.',
            'example': 'She gave a lucid summary of the research findings.'
        },
        'abridge': {
            'definition': 'To shorten a text while keeping the core meaning intact.',
            'example': 'The editor decided to abridge the long article for publication.'
        },
        'affable': {
            'definition': 'Friendly, pleasant, and easy to talk to.',
            'example': 'He was affable with every guest at the reception.'
        },
        'minuscule': {
            'definition': 'Extremely small in size or amount; tiny.',
            'example': 'There was only a minuscule chance of rain during the picnic.'
        },
        'advocate': {
            'definition': 'To publicly support or argue in favor of a cause, policy, or group.',
            'example': 'She advocates for access to affordable healthcare.'
        },
        'ennui': {
            'definition': 'A feeling of listlessness and dissatisfaction caused by lack of occupation or excitement.',
            'example': 'Months of inactivity left him with a deep sense of ennui.'
        },
        'placate': {
            'definition': 'To calm someone by giving them what they want or by satisfying their demands.',
            'example': 'To placate the client, they offered a full refund and an apology.'
        },
        'iconoclast': {
            'definition': 'A person who attacks or rejects established beliefs, traditions, or institutions.',
            'example': 'The artist was an iconoclast who challenged conventional styles.'
        },
        'denounce': {
            'definition': 'To publicly accuse or condemn something as wrong or evil.',
            'example': 'Many leaders denounced the corrupt practices after the investigation.'
        },
        'vivacious': {
            'definition': 'Full of energy and enthusiasm; lively in spirit and behavior.',
            'example': 'Her vivacious personality made her popular at social events.'
        },
        'benefactor': {
            'definition': 'A person who gives money or help to a person or cause, especially in a generous way.',
            'example': 'The scholarship was funded by a generous benefactor.'
        },
        'pliant': {
            'definition': 'Easily influenced or bent; adaptable to change or persuasion.',
            'example': 'Children are often pliant and quick to adopt new routines.'
        },
        'chaos': {
            'definition': 'A state of complete disorder and confusion with little or no organization.',
            'example': 'The sudden storm threw the city into chaos for several hours.'
        },
        'proliferate': {
            'definition': 'To increase or spread rapidly in number or amount.',
            'example': 'Smart devices continued to proliferate throughout the decade.'
        }
    },
    'fr': {
        # French mappings to be added below
    },
    'es': {
        # Spanish mappings to be added below
    }
}

# French mappings for the corresponding French tokens (manual translations)
FR_MAP = {
    'allégresse': ('Un sentiment intense de joie ou de triomphe.', 'Elle éprouva une allégresse profonde en recevant la bonne nouvelle.'),
    'articulé': ('Qui s\'exprime clairement et précisément à l\'oral ou à l\'écrit.', 'Le conférencier était très articulé et ses propos étaient faciles à suivre.'),
    'sceptique': ('Personne qui doute et remet en question les affirmations sans preuve.', 'En tant que sceptique, il a demandé des preuves solides avant de croire l\'article.'),
    'omniprésent': ('Présent ou apparent partout à la fois.', 'Les smartphones semblent omniprésents dans nos villes.'),
    'minimiser': ('Rendre quelque chose moins important ou sérieux qu\'il ne l\'est réellement.', 'Elle a tendance à minimiser ses réussites.'),
    'humeur': ('État émotionnel temporaire qui influence les sentiments et le comportement.', 'Son humeur s\'est améliorée après une promenade.'),
    'empathie': ('Capacité à comprendre et partager les sentiments d\'autrui.', 'Son empathie lui a permis de réconforter les personnes en deuil.'),
    'chimérique': ('Extrêmement idéaliste ou irréaliste, souvent impossible à réaliser.', 'Leur projet était chimérique et difficilement réalisable.'),
    'concis': ('Qui exprime l\'essentiel en peu de mots; bref et précis.', 'Rédigez un résumé concis des points principaux.'),
    'aversion': ('Forte répugnance ou dégoût envers quelque chose.', 'Elle a une aversion profonde pour le bruit.'),
    'intégrité': ('Honnêteté et principes moraux solides.', 'Son intégrité lui a valu le respect de tous.'),
    'simplifier': ('Rendre plus clair ou moins complexe.', 'Nous devons simplifier la procédure pour les nouveaux utilisateurs.'),
    'patriote': ('Personne qui aime et défend son pays.', 'C\'est un patriote qui participe activement aux cérémonies locales.'),
    'psychologie': ('Étude scientifique de l\'esprit et du comportement humain.', 'Elle étudie la psychologie pour comprendre les comportements.'),
    'affamé': ('Qui ressent une faim intense.', 'Après la randonnée, il était affamé et a mangé tout son repas.'),
    'réfuter': ('Montrer qu\'une idée ou une affirmation est fausse à l\'aide d\'arguments ou de preuves.', 'Les chercheurs ont réfuté l\'hypothèse avec de nouvelles données.'),
    'polyglotte': ('Personne qui connaît et utilise plusieurs langues.', 'En tant que polyglotte, elle parlait couramment trois langues.'),
    'fortuit': ('Qui arrive par chance et sans planification.', 'La rencontre fut fortuite et bénéfique.'),
    'abolir': ('Mettre fin officiellement à une loi, une pratique ou une institution.', 'Ils ont voté pour abolir la règle obsolète.'),
    'monologue': ('Discours long prononcé par une seule personne.', 'Le comédien a livré un monologue poignant.'),
    'minimum': ('La quantité la plus petite autorisée ou nécessaire.', 'Il faut atteindre le minimum requis pour être admissible.'),
    'proclamer': ('Annoncer publiquement de manière officielle.', 'Le maire proclamera l\'ouverture du parc.'),
    'éphémère': ('Qui dure très peu de temps; passager.', 'La beauté du lever de soleil est souvent éphémère.'),
    'rhétorique': ('Art d\'utiliser la langue pour persuader ou émouvoir.', 'Sa rhétorique captivante a convaincu le public.'),
    'déshumaniser': ('Traiter des personnes comme si elles n\'étaient pas humaines.', 'La propagande peut déshumaniser des groupes entiers.'),
    'entrepreneur': ('Personne qui crée et gère une entreprise en acceptant les risques.', 'L\'entrepreneur a lancé une start-up technologique florissante.'),
    'irrévérencieux': ('Manque de respect envers les personnes ou les traditions.', 'Son ton irrévérencieux a surpris les invités.'),
    'répudier': ('Refuser d\'accepter ou de reconnaître quelque chose comme vrai ou légitime.', 'Il a répudié publiquement les accusations.'),
    'adolescent': ('Jeune personne âgée de 13 à 19 ans; période de transition vers l\'âge adulte.', 'En tant qu\'adolescent, il aimait passer du temps au club scolaire.'),
    'améliorer': ('Rendre quelque chose meilleur ou plus efficace.', 'Ils cherchent toujours à améliorer la qualité du service.'),
    'fervent': ('Très enthousiaste et dévoué à une cause ou activité.', 'C\'est un fervent défenseur des droits de l\'enfant.'),
    'sophisme': ('Argument qui semble logique mais qui contient une erreur de raisonnement.', 'Le sophisme a trompé certains lecteurs du débat.'),
    'anéantir': ('Détruire complètement de sorte qu\'il n\'en reste rien d\'utile.', 'La tempête a presque anéanti le village.'),
    'astronome': ('Scientifique qui étudie les astres et l\'espace.', 'L\'astronome a découvert une nouvelle comète.'),
    'invincible': ('Impossible à vaincre ou à surmonter.', 'L\'équipe semblait invincible après la série de victoires.'),
    'abdiquer': ('Renoncer officiellement à un pouvoir ou un poste, notamment la couronne.', 'Le roi a choisi d\'abdiquer.'),
    'anonymat': ('État de ne pas être identifié; identité inconnue.', 'Les témoins ont demandé l\'anonymat pour leur sécurité.'),
    'antonyme': ('Mot qui a le sens opposé d\'un autre mot.', '"Chaud" est l\'antonyme de "froid".'),
    'claustrophobie': ('Peur intense des espaces clos ou confinés.', 'Il évitait les ascenseurs à cause de sa claustrophobie.'),
    'canoniser': ('Déclarer officiellement quelqu\'un saint dans certaines traditions religieuses.', 'On a canonisé la missionnaire pour son dévouement.'),
    'epigramme': ('Bref mot ou vers spirituel exprimant une idée de façon frappante.', 'L\'auteur a commencé le chapitre par une epigramme.'),
    'manifeste': ('Déclaration écrite présentant les idées et objectifs d\'un groupe ou d\'une personne.', 'Le parti a publié son manifeste avant les élections.'),
    'saper': ('Affaiblir progressivement ou discrètement une position, une autorité ou des efforts.', 'Les critiques constantes ont fini par saper sa confiance.'),
    'esthétique': ('Relatif à l\'appréciation du beau ou au goût artistique.', 'L\'entrée du musée a une esthétique moderne et soignée.'),
    'épidémie': ('Augmentation rapide du nombre de cas d\'une maladie dans une région.', 'Les autorités sanitaires ont réagi à l\'épidémie de grippe.'),
    'lucide': ('Clair et facile à comprendre; esprit net et cohérent.', 'Elle a donné une explication lucide des résultats.'),
    'abréger': ('Raccourcir un texte tout en conservant l\'idée principale.', 'L\'éditeur a abrégé l\'article pour la version imprimée.'),
    'affable': ('Aimable et facile à approcher; cordial.', 'Il était affable avec tous les invités.'),
    'minuscule': ('Extrêmement petit en taille ou en quantité.', 'Il y avait une chance minuscule de pluie.'),
    'plaider': ('Soutenir publiquement une cause ou une politique.', 'Elle plaide pour un meilleur accès aux soins.'),
    'ennui': ('Sentiment d\'ennui et d\'insatisfaction dû à l\'inactivité.', 'Des mois d\'inactivité lui ont causé un profond ennui.'),
    'apaiser': ('Calmer ou satisfaire quelqu\'un pour réduire la colère ou la tension.', 'Ils ont offert un remboursement pour apaiser le client.'),
    'iconoclaste': ('Personne qui rejette ou critique les croyances et institutions établies.', 'L\'artiste iconoclaste remettait en question les styles traditionnels.'),
    'dénoncer': ('Accuser publiquement ou condamner quelque chose comme mal ou injuste.', 'De nombreux responsables ont dénoncé la corruption.'),
    'vivace': ('Plein d\'énergie et d\'entrain; animé.', 'Sa personnalité vivace la rendait populaire.'),
    'bienfaiteur': ('Personne qui donne de l\'argent ou de l\'aide à une cause ou une personne.', 'La bourse a été financée par un généreux bienfaiteur.'),
    'malleable': ('Facile à influencer ou à modeler; adaptable.' , 'Les enfants sont souvent malléables et adoptent vite de nouvelles routines.'),
    'chaos': ('État de désordre complet et de confusion.', 'La tempête a plongé la ville dans le chaos.'),
    'se multiplier': ('Augmenter rapidement en nombre ou en quantité.', 'Les appareils intelligents se sont multipliés dans la décennie.'),
}

# Spanish mappings
ES_MAP = {
    'júbilo': ('Sentimiento de gran alegría y triunfo.', 'Sintió un júbilo inmenso al recibir la noticia.'),
    'articulado': ('Que se expresa con claridad y precisión.', 'El orador estuvo muy articulado durante la conferencia.'),
    'escéptico': ('Persona que duda y exige pruebas antes de aceptar afirmaciones.', 'Como escéptico, quería ver los datos antes de creerlo.'),
    'omnipresente': ('Presente en todas partes o muy extendido.', 'Los teléfonos móviles son omnipresentes en la ciudad.'),
    'minimizar': ('Hacer que algo parezca menos grave o importante de lo que es.', 'Trataron de minimizar el problema públicamente.'),
    'humor': ('Estado de ánimo temporal que influye en el comportamiento.', 'Su humor mejoró tras un paseo.'),
    'empatía': ('Capacidad de comprender y compartir los sentimientos de otra persona.', 'Su empatía la ayudó a consolar a sus amigos.'),
    'quijotesco': ('Extremadamente idealista e impracticable.', 'Su plan quijotesco sonaba noble pero poco realista.'),
    'conciso': ('Que expresa las ideas de forma breve y clara.', 'Mantén el texto conciso y directo.'),
    'aversión': ('Fuerte rechazo o disgusto hacia algo.', 'Tiene aversión a los lugares muy ruidosos.'),
    'integridad': ('Honestidad y principios morales firmes.', 'Su integridad le ganó el respeto de sus colegas.'),
    'simplificar': ('Hacer algo menos complicado o más fácil de entender.', 'Necesitamos simplificar las instrucciones para los usuarios.'),
    'patriota': ('Persona que ama y defiende su país.', 'Como patriota, participó en las celebraciones nacionales.'),
    'psicología': ('Ciencia que estudia la mente y el comportamiento.', 'Estudió psicología para comprender mejor a las personas.'),
    'famélico': ('Extremadamente hambriento o desfallecido por falta de comida.', 'Tras días sin comer, estaba famélico.'),
    'refutar': ('Demostrar que una afirmación o teoría es falsa mediante pruebas o argumentos.', 'Los científicos refutaron la hipótesis con nuevos datos.'),
    'políglota': ('Persona que habla y usa varias lenguas con fluidez.', 'Como políglota, cambió rápidamente entre idiomas.'),
    'fortuito': ('Que sucede por casualidad y con un resultado favorable.', 'Encontrarse con ella fue completamente fortuito.'),
    'abolir': ('Poner fin oficialmente a una ley, práctica o institución.', 'El congreso decidió abolir la norma.'),
    'monólogo': ('Discurso largo pronunciado por una sola persona.', 'El actor entregó un monólogo emotivo.'),
    'mínimo': ('La cantidad o grado más pequeño permitido o necesario.', 'Debes alcanzar el mínimo requerido para entrar.'),
    'proclamar': ('Anunciar algo públicamente y de forma oficial.', 'El alcalde proclamará la nueva ley esta semana.'),
    'efímero': ('Que dura muy poco tiempo; pasajero.', 'La fama del vídeo fue efímera.'),
    'retórica': ('Arte de usar el lenguaje para persuadir o impresionar a un público.', 'Su retórica impresionó a la audiencia.'),
    'deshumanizar': ('Tratar a las personas como si no tuvieran cualidades humanas.', 'La propaganda puede deshumanizar a ciertos grupos.'),
    'emprendedor': ('Persona que inicia y dirige un negocio, asumiendo riesgos.', 'El emprendedor fundó una empresa tecnológica exitosa.'),
    'irreverente': ('Que muestra falta de respeto hacia lo establecido, a menudo de forma provocadora.', 'Su humor irreverente sorprendió al público.'),
    'repudiar': ('Rechazar o negar algo de forma pública o tajante.', 'Ella repudió las acusaciones en una conferencia de prensa.'),
    'adolescente': ('Persona entre 13 y 19 años; etapa de la adolescencia.', 'Como adolescente, pasaba mucho tiempo con sus amigos.'),
    'mejorar': ('Hacer que algo sea mejor o más efectivo.', 'Decidieron mejorar la calidad del servicio.'),
    'ferviente': ('Muy entusiasmado y dedicado a una causa.', 'Es un ferviente defensor de la justicia social.'),
    'falacia': ('Creencia o razonamiento incorrecto que parece lógico.', 'Identificaron la falacia en el argumento del debatiente.'),
    'aniquilar': ('Destruir por completo de modo que no quede nada útil.', 'La explosión aniquiló la fábrica vieja.'),
    'astrónomo': ('Científico que estudia estrellas y cuerpos celestes.', 'El astrónomo descubrió un nuevo cometa.'),
    'invencible': ('Que no puede ser vencido o superado.', 'Tras la racha de victorias, el equipo parecía invencible.'),
    'abdicar': ('Renunciar formalmente a un puesto de poder, especialmente a la corona.', 'El monarca decidió abdicar en favor de su hijo.'),
    'anonimato': ('Estado de no ser identificado; ocultación de la identidad.', 'Los testigos pidieron anonimato por seguridad.'),
    'antónimo': ('Palabra que expresa el sentido opuesto a otra.', '"Frío" es el antónimo de "calor".'),
    'claustrofobia': ('Miedo intenso a los espacios cerrados o confinados.', 'Evita los espacios cerrados por su claustrofobia.'),
    'canonizar': ('Declarar oficialmente a alguien santo en ciertas tradiciones religiosas.', 'La iglesia canonizó al misionero por su servicio.'),
    'epigrama': ('Dicho breve y agudo que expresa una idea con ingenio.', 'El ensayo comenzó con un epigrama ingenioso.'),
    'manifiesto': ('Declaración pública escrita que presenta las ideas y objetivos de un grupo.', 'El partido publicó su manifiesto antes de las elecciones.'),
    'socavar': ('Debilitar gradualmente o secretamente una posición o autoridad.', 'La crítica continua socavó su confianza.'),
    'estética': ('Relativo a la apreciación de la belleza o al gusto artístico.', 'El hotel tenía una estética minimalista y elegante.'),
    'epidemia': ('Aumento rápido en el número de casos de una enfermedad en una región.', 'La epidemia provocó una movilización sanitaria inmediata.'),
    'lúcido': ('Claro y fácil de entender; pensamiento coherente.', 'Durante la entrevista, ofreció un relato lúcido de los hechos.'),
    'abbreviar': ('Acortar un texto manteniendo la idea principal.', 'Se optó por abbreviar el artículo para la revista.'),
    'afable': ('Amable y fácil de tratar; cordial.', 'El nuevo vecino resultó afable con todos.'),
    'minúsculo': ('Extremadamente pequeño en tamaño o cantidad.', 'Solo hubo una posibilidad minúscula de error.'),
    'defender': ('Apoyar públicamente una causa o idea.', 'Ella defiende la igualdad de oportunidades.'),
    'aburrimiento': ('Sentimiento de desinterés y falta de estímulo por la inactividad.', 'El aburrimiento de la cuarentena fue difícil de combatir.'),
    'aplacar': ('Calmar a alguien para reducir su enfado o inquietud.', 'Ofrecieron una compensación para aplacar al cliente.'),
    'iconoclasta': ('Persona que desafía las creencias o instituciones establecidas.', 'El escritor iconoclasta rechazó las normas tradicionales.'),
    'denunciar': ('Acosar públicamente o condenar algo como malo o injusto.', 'Las ONG denunciaron los abusos ante los tribunales.'),
    'vivaz': ('Lleno de energía y entusiasmo; animado.', 'Su actitud vivaz hizo la reunión más llevadera.'),
    'benefactor': ('Persona que dona dinero o ayuda a una causa desinteresadamente.', 'Los estudiantes agradecieron al benefactor por la beca.'),
    'maleable': ('Que se deja influir o moldear con facilidad.', 'Los jóvenes son a menudo maleables y se adaptan rápido.'),
    'caos': ('Estado de desorden y confusión generalizada.', 'El caos tras la tormenta obligó a evacuar varias zonas.'),
    'proliferar': ('Aumentar o difundirse rápidamente en número o cantidad.', 'Las plantas comenzaron a proliferar en el jardín.'),
}

# merge mappings into MAPPINGS
for k,v in FR_MAP.items():
    MAPPINGS['fr'][k] = {'definition': v[0], 'example': v[1]}
for k,v in ES_MAP.items():
    MAPPINGS['es'][k] = {'definition': v[0], 'example': v[1]}

# Replacement helper

def replace_entry(lang, word, definition, example):
    global text
    # find the language block by locating its opening brace and matching braces
    start_marker = lang + ': {'
    start_idx = text.find(start_marker)
    if start_idx == -1:
        print('Lang block not found for', lang)
        return False
    # find the opening brace position
    brace_idx = text.find('{', start_idx)
    if brace_idx == -1:
        print('Open brace not found for', lang)
        return False
    # scan forward to find matching closing brace
    depth = 0
    end_idx = -1
    for i in range(brace_idx, len(text)):
        c = text[i]
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                end_idx = i
                break
    if end_idx == -1:
        print('Could not find end of lang block for', lang)
        return False
    block = text[brace_idx+1:end_idx]
    # find the word entry within the block
    entry_re = re.compile(r"(\"" + re.escape(word) + r"\"\s*:\s*\{)(.*?)(\n\s*\},)", re.S)
    em = entry_re.search(block)
    new_entry = f'"{word}": {{\n            definition: "{definition}",\n            example: "{example}"\n        }},'
    if not em:
        # entry not found: append new entry at the end of the language block
        print('Entry not found; adding new entry for', word, 'in', lang)
        new_block = block.rstrip() + "\n        " + new_entry + "\n"
    else:
        old = em.group(0)
        new_block = block.replace(old, new_entry)
    # splice back into text
    text = text[:brace_idx+1] + new_block + text[end_idx:]
    return True

# Apply replacements
failed = []
for lang, words in MAPPINGS.items():
    for w, v in words.items():
        ok = replace_entry(lang, w, v['definition'].replace('"','\"'), v['example'].replace('"','\"'))
        if not ok:
            failed.append((lang,w))

WD.write_text(text, encoding='utf-8')
print('Updated entries; failures:', len(failed))
if failed:
    print(failed)
