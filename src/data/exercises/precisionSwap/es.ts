import { SwapChallenge } from "../../types";

export const esQuestions: SwapChallenge[] = [
    {
        id: "es-1",
        sentence: "El debate reveló diferencias fundamentales en sus aproximaciones filosóficas.",
        targetWord: "fundamentales",
        targetWordIndex: 4,
        options: [
            { word: "irreconciliables", score: 100, feedback: "¡Perfecto! Las diferencias 'irreconciliables' son tan profundas que no admiten acuerdo ni armonía." },
            { word: "básicas", score: 70, feedback: "'Básicas' significa esenciales, pero carece de la implicación de conflicto irremediable." },
            { word: "radicales", score: 85, feedback: "'Radicales' implica algo completo, a menudo extremo, pero no necesariamente imposible de conciliar." },
            { word: "antagónicas", score: 90, feedback: "'Antagónicas' sugiere oposición directa, pero puede referirse más a la actitud que a la naturaleza esencial de las diferencias." }
        ],
        bestAnswer: "irreconciliables",
        explanation: "'Irreconciliables' describe diferencias tan esenciales y opuestas que imposibilitan cualquier compromiso o síntesis entre posturas filosóficas."
    },
    {
        id: "es-2",
        sentence: "Su desempeño en el campeonato fue consistentemente excelente bajo presión extrema.",
        targetWord: "excelente",
        targetWordIndex: 7,
        options: [
            { word: "soberbio", score: 95, feedback: "'Soberbio' denota una calidad suprema y a menudo un aire de superioridad." },
            { word: "inigualable", score: 90, feedback: "'Inigualable' significa que no tiene igual, enfatizando la superioridad pero sin connotar necesariamente trascendencia." },
            { word: "cimero", score: 100, feedback: "¡Perfecto! 'Cimero' significa que está en la cima o punto más alto, superando los niveles ordinarios de excelencia." },
            { word: "exemplar", score: 85, feedback: "'Exemplar' sirve como modelo deseable, pero puede no implicar superioridad absoluta." }
        ],
        bestAnswer: "cimero",
        explanation: "Un desempeño 'cimero' alcanza la cumbre más elevada, trascendiendo los estándares normales de excelencia para ubicarse en un plano superior."
    },
    {
        id: "es-3",
        sentence: "El contraexamen del abogado reveló contradicciones en el testimonio del testigo.",
        targetWord: "contradicciones",
        targetWordIndex: 8,
        options: [
            { word: "inconsistencias", score: 90, feedback: "'Inconsistencias' denota falta de uniformidad o coherencia, lo cual encaja bien." },
            { word: "discrepancias", score: 85, feedback: "'Discrepancias' sugiere diferencias entre afirmaciones o datos." },
            { word: "antinomias", score: 100, feedback: "¡Perfecto! 'Antinomias' son contradicciones entre dos principios o conclusiones igualmente lógicos y defendibles." },
            { word: "paradojas", score: 80, feedback: "'Paradojas' son situaciones o ideas que parecen contradecir la lógica, pero no siempre invalidan un testimonio." }
        ],
        bestAnswer: "antinomias",
        explanation: "Las 'antinomias' en un testimonio apuntan a conflictos lógicos irresolubles entre declaraciones, indicando una falla profunda en la coherencia interna."
    },
    {
        id: "es-4",
        sentence: "La última obra de la artista representa un alejamiento significativo de su estilo anterior.",
        targetWord: "significativo",
        targetWordIndex: 7,
        options: [
            { word: "trascendental", score: 100, feedback: "¡Perfecto! Un cambio 'trascendental' es tan profundo que marca un antes y un después, definiendo una nueva etapa." },
            { word: "notorio", score: 80, feedback: "'Notorio' es fácil de notar, pero no necesariamente implica una transformación histórica." },
            { word: "sustancial", score: 85, feedback: "'Sustancial' es considerable en importancia o magnitud." },
            { word: "radical", score: 90, feedback: "'Radical' implica un cambio total y extremo, pero 'trascendental' añade la dimensión histórica o definitoria." }
        ],
        bestAnswer: "trascendental",
        explanation: "Un alejamiento 'trascendental' define una nueva era en la trayectoria de un artista, un punto de inflexión que redefine todo lo posterior."
    },
    {
        id: "es-5",
        sentence: "Las instrucciones eran confusas y difíciles de seguir para la mayoría de los usuarios.",
        targetWord: "confusas",
        targetWordIndex: 3,
        options: [
            { word: "enigmáticas", score: 90, feedback: "'Enigmáticas' son misteriosas y difíciles de interpretar." },
            { word: "ilógicas", score: 75, feedback: "'Ilógicas' carecen de lógica, lo cual es una causa posible de confusión, pero no la describe directamente." },
            { word: "ininteligibles", score: 100, feedback: "¡Perfecto! 'Ininteligibles' son imposibles de entender, independientemente del esfuerzo." },
            { word: "enrevesadas", score: 95, feedback: "'Enrevesadas' son innecesariamente complicadas y retorcidas, lo cual causa confusión." }
        ],
        bestAnswer: "ininteligibles",
        explanation: "Instrucciones 'ininteligibles' carecen de claridad al punto de ser impenetrables para el entendimiento, haciendo que seguirlas sea una tarea imposible."
    },
    {
        id: "es-6",
        sentence: "La relación entre las dos variables era compleja y no inmediatamente aparente.",
        targetWord: "compleja",
        targetWordIndex: 6,
        options: [
            { word: "intrincada", score: 90, feedback: "'Intrincada' implica muchos elementos entrelazados de manera enmarañada." },
            { word: "abarrocada", score: 100, feedback: "¡Perfecto! 'Abarrocada' sugiere una complejidad recargada, ornamentada y casi excesiva, como el estilo barroco." },
            { word: "sofisticada", score: 85, feedback: "'Sofisticada' implica refinamiento y complejidad tecnológica o intelectual." },
            { word: "enmarañada", score: 95, feedback: "'Enmarañada' sugiere una maraña de hilos, difícil de desenredar." }
        ],
        bestAnswer: "abarrocada",
        explanation: "Una relación 'abarrocada' entre variables posee una complejidad recargada y multiestratificada, donde las interconexiones son numerosas y ornamentadas."
    },
    {
        id: "es-7",
        sentence: "El protagonista de la novela experimenta una transformación significativa a lo largo de la historia.",
        targetWord: "significativa",
        targetWordIndex: 6,
        options: [
            { word: "prodigiosa", score: 90, feedback: "'Prodigiosa' es maravillosa y extraordinaria, pero puede referirse más al resultado que al proceso interior." },
            { word: "catártica", score: 95, feedback: "'Catártica' produce una purificación emocional, lo cual es un tipo profundo de transformación." },
            { word: "metanoica", score: 100, feedback: "¡Perfecto! 'Metanoica' (relacionada con 'metanoia') describe una transformación profunda del corazón, la mente y el espíritu." },
            { word: "sustancial", score: 80, feedback: "'Sustancial' es considerable en importancia, pero es un término más general." }
        ],
        bestAnswer: "metanoica",
        explanation: "Una transformación 'metanoica' implica un cambio radical en la cosmovisión, los valores y la dirección espiritual de una persona."
    },
    {
        id: "es-8",
        sentence: "El acuerdo contenía lagunas que podían ser explotadas por cualquiera de las partes.",
        targetWord: "lagunas",
        targetWordIndex: 5,
        options: [
            { word: "ambigüedades", score: 85, feedback: "'Ambigüedades' permiten múltiples interpretaciones, pero no son necesariamente vacíos explotables." },
            { word: "lacras", score: 90, feedback: "'Lacras' son defectos o vicios que dañan la integridad de algo." },
            { word: "intersticios", score: 100, feedback: "¡Perfecto! 'Intersticios' son rendijas o espacios diminutos entre las partes de un todo, que pueden ser aprovechados." },
            { word: "omisiones", score: 88, feedback: "'Omisiones' son cosas que se han dejado fuera, creando vacíos." }
        ],
        bestAnswer: "intersticios",
        explanation: "Los 'intersticios' en un acuerdo son los pequeños espacios no regulados entre sus cláusulas, que permiten maniobras y explotación legal."
    },
    {
        id: "es-9",
        sentence: "El análisis del crítico sobre la película fue sorprendentemente superficial y pasó por alto temas importantes.",
        targetWord: "superficial",
        targetWordIndex: 7,
        options: [
            { word: "ligero", score: 75, feedback: "'Ligero' carece de peso o profundidad, pero también puede tener una connotación positiva de agilidad." },
            { word: "acéfalo", score: 85, feedback: "'Acéfalo' literalmente significa sin cabeza, usado figuradamente para algo falto de dirección o sentido." },
            { word: "frívolo", score: 90, feedback: "'Frívolo' carece de seriedad y profundidad, tratando asuntos importantes con ligereza." },
            { word: "conjectural", score: 100, feedback: "¡Perfecto! 'Conjectural' (conjetural) se basa en suposiciones no verificadas, careciendo del fundamento que da profundidad." }
        ],
        bestAnswer: "conjectural",
        explanation: "Un análisis 'conjectural' se construye sobre suposiciones e inferencias, no sobre un examen profundo de la evidencia, resultando necesariamente superficial."
    },
    {
        id: "es-10",
        sentence: "La victoria del equipo fue particularmente satisfactoria porque era totalmente inesperada.",
        targetWord: "satisfactoria",
        targetWordIndex: 5,
        options: [
            { word: "gratificante", score: 85, feedback: "'Gratificante' produce satisfacción o placer." },
            { word: "reivindicativa", score: 95, feedback: "'Reivindicativa' sirve para defender o restablecer una reputación o posición, dando un significado adicional." },
            { word: "catártica", score: 100, feedback: "¡Perfecto! 'Catártica' proporciona una liberación emocional intensa, especialmente tras una tensión o expectativa." },
            { word: "placentera", score: 80, feedback: "'Placentera' es agradable, pero es un término más suave y menos específico." }
        ],
        bestAnswer: "catártica",
        explanation: "Una victoria 'catártica' libera emociones reprimidas (como la duda o la ansiedad) y produce una sensación de purificación psicológica, especialmente cuando es inesperada."
    },
    {
        id: "es-11",
        sentence: "La metodología del investigador fue cuidadosa y sistemática en su enfoque.",
        targetWord: "cuidadosa",
        targetWordIndex: 5,
        options: [
            { word: "meticulosa", score: 90, feedback: "'Meticulosa' muestra una gran atención al detalle." },
            { word: "escrupulosa", score: 95, feedback: "'Escrupulosa' implica un cuidado extremo, a menudo guiado por principios éticos o de integridad." },
            { word: "minuciosa", score: 88, feedback: "'Minuciosa' examina o trata todos los detalles con mucho cuidado." },
            { word: "puntillosa", score: 100, feedback: "¡Perfecto! 'Puntillosa' es excesivamente cuidadosa con detalles pequeños y normas, a veces hasta el extremo." }
        ],
        bestAnswer: "puntillosa",
        explanation: "Una metodología 'puntillosa' se caracteriza por una adhesión rigurosa y casi fastidiosa a los protocolos y detalles, asegurando una precisión extrema."
    },
    {
        id: "es-12",
        sentence: "El pronóstico económico se basó en supuestos excesivamente optimistas sobre el crecimiento.",
        targetWord: "optimistas",
        targetWordIndex: 9,
        options: [
            { word: "benevolentes", score: 70, feedback: "'Benevolentes' significa bienintencionados, lo cual no es lo mismo que optimistas." },
            { word: "ilusionados", score: 80, feedback: "'Ilusionados' están llenos de esperanza, pero es un término más coloquial y personal." },
            { word: "pánfilos", score: 100, feedback: "¡Perfecto! 'Pánfilos' (de 'panglossiano') denota un optimismo irracional e ingenuo, que cree que todo sucede para bien." },
            { word: "confiados", score: 85, feedback: "'Confiados' tienen fe en un resultado positivo, pero no necesariamente de manera excesiva o irreal." }
        ],
        bestAnswer: "pánfilos",
        explanation: "Supuestos 'pánfilos' reflejan un optimismo cándido e infundado que ignora obstáculos potenciales, llamado así por el personaje Pangloss de Voltaire."
    },
    {
        id: "es-13",
        sentence: "El discurso del político estuvo plagado de promesas vacías y compromisos vagos.",
        targetWord: "vacías",
        targetWordIndex: 6,
        options: [
            { word: "vanas", score: 90, feedback: "'Vanas' son inútiles y sin efecto, pero no siempre implican engaño deliberado." },
            { word: "fútiles", score: 85, feedback: "'Fútiles' no producen el resultado deseado, enfocándose en la ineficacia." },
            { word: "especiosas", score: 100, feedback: "¡Perfecto! 'Especiosas' parecen atractivas y válidas en la superficie, pero son falsas o engañosas." },
            { word: "huecas", score: 88, feedback: "'Huecas' carecen de contenido sólido o significado verdadero." }
        ],
        bestAnswer: "especiosas",
        explanation: "Promesas 'especiosas' están diseñadas para impresionar y parecer plausibles, pero su verdadero propósito es el engaño, ocultando la falta de intención real de cumplirlas."
    },
    {
        id: "es-14",
        sentence: "La respuesta de la empresa a la crisis fue inmediata y exhaustiva.",
        targetWord: "inmediata",
        targetWordIndex: 7,
        options: [
            { word: "instantánea", score: 90, feedback: "'Instantánea' ocurre en un instante, sin demora perceptible." },
            { word: "pronta", score: 85, feedback: "'Pronta' se realiza sin dilación." },
            { word: "solícita", score: 95, feedback: "'Solícita' muestra interés y diligencia en atender algo, añadiendo una capa de actitud positiva." },
            { word: "perentoria", score: 100, feedback: "¡Perfecto! 'Perentoria' es urgente, decisiva y que no admite dilación, a menudo con un tono de autoridad." }
        ],
        bestAnswer: "perentoria",
        explanation: "Una respuesta 'perentoria' actúa con urgencia decisiva y autoridad, tratando la crisis con la prioridad máxima y sin aceptar excusas para la demora."
    },
    {
        id: "es-15",
        sentence: "La cordillera presentaba una barrera formidable para los primeros exploradores.",
        targetWord: "formidable",
        targetWordIndex: 5,
        options: [
            { word: "abrumadora", score: 90, feedback: "'Abrumadora' aplasta por su magnitud o intensidad." },
            { word: "infranqueable", score: 100, feedback: "¡Perfecto! 'Infranqueable' es imposible de atravesar o superar." },
            { word: "temible", score: 85, feedback: "'Temible' inspira miedo o respeto, pero no necesariamente imposibilidad." },
            { word: "cicrópea", score: 95, feedback: "'Cicrópea' (como los muros de Ciclope) sugiere una construcción masiva y aparentemente indestructible." }
        ],
        bestAnswer: "infranqueable",
        explanation: "Una barrera 'infranqueable' se presenta como un obstáculo absoluto que desafía cualquier intento de cruzarla, representando el límite de lo posible para su época."
    },
    {
        id: "es-16",
        sentence: "Su interpretación de los datos fue creativa pero no estaba respaldada por la evidencia.",
        targetWord: "creativa",
        targetWordIndex: 5,
        options: [
            { word: "ingeniosa", score: 90, feedback: "'Ingeniosa' es inteligente y original, pero a menudo implica un resultado exitoso." },
            { word: "imaginativa", score: 85, feedback: "'Imaginativa' surge de la imaginación, lo cual encaja, pero es un término más neutral." },
            { word: "especulativa", score: 95, feedback: "'Especulativa' se aventura en el terreno de la conjetura y la hipótesis no probada." },
            { word: "conjectural", score: 100, feedback: "¡Perfecto! 'Conjectural' se basa en suposiciones e inferencias, no en pruebas concretas." }
        ],
        bestAnswer: "conjectural",
        explanation: "Una interpretación 'conjectural' es, por definición, un ejercicio de especulación intelectual que carece del fundamento probatorio necesario para ser considerada válida."
    },
    {
        id: "es-17",
        sentence: "El conflicto entre los dos departamentos fue dañino para toda la organización.",
        targetWord: "dañino",
        targetWordIndex: 7,
        options: [
            { word: "lesivo", score: 90, feedback: "'Lesivo' causa daño o perjuicio, especialmente a derechos o intereses." },
            { word: "nocivo", score: 88, feedback: "'Nocivo' es perjudicial para la salud o el bienestar." },
            { word: "pernicioso", score: 95, feedback: "'Pernicioso' causa daño de manera gradual, insidiosa y a menudo mortal." },
            { word: "laceral", score: 100, feedback: "¡Perfecto! 'Laceral' (que lacer) desgarra y hiere profundamente, causando un daño que va más allá de lo superficial." }
        ],
        bestAnswer: "laceral",
        explanation: "Un conflicto 'laceral' desgarra el tejido mismo de la organización, infligiendo heridas profundas en la moral, la cooperación y la cultura institucional."
    },
    {
        id: "es-18",
        sentence: "La solución al problema de ingeniería fue simple y brillantemente efectiva.",
        targetWord: "simple",
        targetWordIndex: 8,
        options: [
            { word: "elegante", score: 95, feedback: "'Elegante' logra el máximo efecto con los mínimos elementos, combinando simplicidad y eficacia." },
            { word: "parca", score: 85, feedback: "'Parca' es escasa o austera, pero puede carecer de la connotación de brillantez." },
            { word: "lapidaria", score: 100, feedback: "¡Perfecto! 'Lapidaria' (como una inscripción en piedra) es concisa, definitiva y contundente en su eficacia." },
            { word: "austera", score: 80, feedback: "'Austera' carece de adornos, pero no necesariamente implica efectividad brillante." }
        ],
        bestAnswer: "lapidaria",
        explanation: "Una solución 'lapidaria' posee la contundencia, claridad y permanencia de una inscripción tallada en piedra: simple, definitiva e inmejorable."
    },
    {
        id: "es-19",
        sentence: "El relato del historiador sobre el período fue detallado y minuciosamente investigado.",
        targetWord: "detallado",
        targetWordIndex: 6,
        options: [
            { word: "pormenorizado", score: 90, feedback: "'Pormenorizado' incluye todos los detalles pequeños y particulares." },
            { word: "exhaustivo", score: 95, feedback: "'Exhaustivo' agota todas las posibilidades y fuentes, dejando nada fuera." },
            { word: "magistral", score: 88, feedback: "'Magistral' muestra una maestría excepcional, pero es más subjetivo." },
            { word: "canónico", score: 100, feedback: "¡Perfecto! 'Canónico' se considera la versión autorizada y definitiva, la que establece el estándar de referencia." }
        ],
        bestAnswer: "canónico",
        explanation: "Un relato 'canónico' se convierte en la versión autorizada y aceptada sobre un período, sintetizando la investigación minuciosa en una narrativa definitiva."
    },
    {
        id: "es-20",
        sentence: "La conexión entre los dos eventos era obvia para todos los que estudiaron la cronología.",
        targetWord: "obvia",
        targetWordIndex: 6,
        options: [
            { word: "patente", score: 90, feedback: "'Patente' es evidente y clara a la vista o al entendimiento." },
            { word: "manifiesta", score: 85, feedback: "'Manifiesta' se muestra claramente, sin necesidad de interpretación." },
            { word: "palmarla", score: 75, feedback: "'Palmarla' es muy evidente (coloquial), pero no es apropiada para un contexto formal." },
            { word: "irrefragable", score: 100, feedback: "¡Perfecto! 'Irrefragable' es imposible de refutar o contradecir, basada en una lógica incontrovertible." }
        ],
        bestAnswer: "irrefragable",
        explanation: "Una conexión 'irrefragable' se establece mediante una evidencia o razonamiento tan sólido que su veracidad no puede ser cuestionada racionalmente."
    },
    {
        id: "es-21",
        sentence: "La visión del CEO para la empresa era ambiciosa y de gran alcance.",
        targetWord: "ambiciosa",
        targetWordIndex: 6,
        options: [
            { word: "atávica", score: 70, feedback: "'Atávica' pertenece a instintos primitivos, lo cual no aplica aquí." },
            { word: "quimérica", score: 95, feedback: "'Quimérica' es extravagante, ilusoria y utópica, como los sueños imposibles." },
            { word: "prodigiosa", score: 88, feedback: "'Prodigiosa' es maravillosa y extraordinaria, pero no específicamente ambiciosa." },
            { word: "titanomaquia", score: 100, feedback: "¡Perfecto! 'Titanomaquia' (lucha de titanes) implica una ambición descomunal y colosal, digna de una épica." }
        ],
        bestAnswer: "titanomaquia",
        explanation: "Una visión 'titanomaquia' implica una ambición tan monumental que busca desafiar y reordenar el mismo orden establecido, emulando la lucha de los titanes griegos."
    },
    {
        id: "es-22",
        sentence: "El error en el cálculo fue pequeño pero tuvo consecuencias significativas.",
        targetWord: "pequeño",
        targetWordIndex: 6,
        options: [
            { word: "ínfimo", score: 90, feedback: "'Ínfimo' es extremadamente pequeño en cantidad o grado." },
            { word: "despreciable", score: 85, feedback: "'Despreciable' es tan pequeño que merece ser ignorado, lo cual contradice las consecuencias." },
            { word: "marginal", score: 95, feedback: "'Marginal' se encuentra en el límite o borde, donde pequeños cambios tienen grandes efectos." },
            { word: "sutil", score: 100, feedback: "¡Perfecto! 'Sutil' es tan leve y delicado que casi pasa inadvertido, pero su efecto puede ser profundo y penetrante." }
        ],
        bestAnswer: "sutil",
        explanation: "Un error 'sutil' es imperceptible a simple vista, pero su naturaleza insidiosa le permite propagarse y amplificar sus efectos de manera desproporcionada."
    },
    {
        id: "es-23",
        sentence: "El acuerdo entre las naciones era frágil y podía romperse fácilmente.",
        targetWord: "frágil",
        targetWordIndex: 6,
        options: [
            { word: "quebradizo", score: 85, feedback: "'Quebradizo' se rompe con facilidad, pero es más aplicable a objetos materiales." },
            { word: "lábil", score: 90, feedback: "'Lábil' es inestable y propenso a cambiar o desvanecerse." },
            { word: "precario", score: 95, feedback: "'Precario' es inestable e inseguro, mantenido en condiciones peligrosas." },
            { word: "efímero", score: 100, feedback: "¡Perfecto! 'Efímero' está destinado a durar un tiempo muy corto, careciendo de la solidez para perdurar." }
        ],
        bestAnswer: "efímero",
        explanation: "Un acuerdo 'efímero' lleva la semilla de su propia caducidad desde el principio, siendo tan temporal que su ruptura es casi una certeza."
    },
    {
        id: "es-24",
        sentence: "La teoría del científico era controvertida pero estaba respaldada por evidencia convincente.",
        targetWord: "controvertida",
        targetWordIndex: 6,
        options: [
            { word: "polémica", score: 90, feedback: "'Polémica' provoca discusión y disputa." },
            { word: "herética", score: 100, feedback: "¡Perfecto! 'Herética' desafía abiertamente las doctrinas establecidas o ortodoxias, explicando la controversia." },
            { word: "incendiaria", score: 95, feedback: "'Incendiaria' está diseñada para provocar fuertes reacciones y conflictos." },
            { word: "discutible", score: 80, feedback: "'Discutible' es cuestionable, pero es un término más débil." }
        ],
        bestAnswer: "herética",
        explanation: "Una teoría 'herética' no solo es controvertida, sino que se posiciona en abierta oposición a las creencias dominantes, desafiando el paradigma establecido."
    },
    {
        id: "es-25",
        sentence: "La explicación del profesor hizo que el concepto complejo fuera fácil de entender.",
        targetWord: "fácil",
        targetWordIndex: 11,
        options: [
            { word: "accesible", score: 85, feedback: "'Accesible' puede ser alcanzado o comprendido por muchos." },
            { word: "inteligible", score: 90, feedback: "'Inteligible' puede ser comprendido." },
            { word: "cristalina", score: 100, feedback: "¡Perfecto! 'Cristalina' posee una claridad absoluta y transparente, como el agua más pura." },
            { word: " diáfana", score: 95, feedback: "'Diáfana' es translúcida y clara, permitiendo el paso de la luz y la comprensión." }
        ],
        bestAnswer: "cristalina",
        explanation: "Una explicación 'cristalina' disipa toda opacidad y confusión, permitiendo que la verdad del concepto se vea con una claridad absoluta y sin distorsión."
    },
    {
        id: "es-26",
        sentence: "Los cambios en la política fueron menores y no afectaron el resultado general.",
        targetWord: "menores",
        targetWordIndex: 5,
        options: [
            { word: "insustanciales", score: 90, feedback: "'Insustanciales' carecen de importancia o solidez." },
            { word: "intrascendentes", score: 100, feedback: "¡Perfecto! 'Intrascendentes' no tienen trascendencia ni consecuencias importantes." },
            { word: "fútiles", score: 85, feedback: "'Fútiles' son inútiles para producir un resultado, pero pueden tener consecuencias no deseadas." },
            { word: "banales", score: 80, feedback: "'Banales' son comunes y carentes de originalidad, pero no específicamente sin efecto." }
        ],
        bestAnswer: "intrascendentes",
        explanation: "Cambios 'intrascendentes' son, por definición, tan irrelevantes que no alteran el curso de los eventos ni dejan huella en el resultado final."
    },
    {
        id: "es-27",
        sentence: "El éxito de la empresa se debió a una combinación de innovación y buen momento.",
        targetWord: "buen",
        targetWordIndex: 14,
        options: [
            { word: "oportuno", score: 100, feedback: "¡Perfecto! 'Oportuno' ocurre en el momento más favorable o propicio." },
            { word: "dichoso", score: 85, feedback: "'Dichoso' es afortunado o feliz, pero menos específico sobre el tiempo." },
            { word: "providencial", score: 95, feedback: "'Providencial' parece venir de la providencia o la suerte divina, siendo especialmente oportuno." },
            { word: "feliz", score: 80, feedback: "'Feliz' es afortunado, pero es un término más general." }
        ],
        bestAnswer: "oportuno",
        explanation: "El momento 'oportuno' es aquel punto único en el tiempo donde las condiciones se alinean perfectamente para maximizar el impacto de una acción, como una innovación."
    },
    {
        id: "es-28",
        sentence: "El estilo del escritor era claro y directo, sin florituras innecesarias.",
        targetWord: "claro",
        targetWordIndex: 5,
        options: [
            { word: "lúcido", score: 90, feedback: "'Lúcido' se expresa con claridad y coherencia." },
            { word: "perspicuo", score: 100, feedback: "¡Perfecto! 'Perspicuo' es tan claro y comprensible que su significado se aprehende de inmediato." },
            { word: "nítido", score: 88, feedback: "'Nítido' es limpio y definido, sin borrones." },
            { word: "transparente", score: 85, feedback: "'Transparente' permite ver a través, pero puede ser menos común para describir estilo." }
        ],
        bestAnswer: "perspicuo",
        explanation: "Un estilo 'perspicuo' elimina toda ambigüedad y ornamentación superflua, logrando que el pensamiento del autor sea inmediatamente accesible al lector."
    },
    {
        id: "es-29",
        sentence: "El problema requería una solución creativa que nadie hubiera considerado antes.",
        targetWord: "creativa",
        targetWordIndex: 6,
        options: [
            { word: "innovadora", score: 90, feedback: "'Innovadora' introduce algo nuevo." },
            { word: "ingeniosa", score: 95, feedback: "'Ingeniosa' muestra inteligencia y originalidad en la invención." },
            { word: "heurística", score: 100, feedback: "¡Perfecto! 'Heurística' emplea un método de descubrimiento que guía la investigación hacia soluciones nuevas." },
            { word: "original", score: 85, feedback: "'Original' es nuevo y no copiado." }
        ],
        bestAnswer: "heurística",
        explanation: "Una solución 'heurística' se descubre mediante la exploración sistemática de posibilidades y el aprendizaje a través de la experiencia, no mediante la aplicación de fórmulas conocidas."
    },
    {
        id: "es-30",
        sentence: "El debate reveló diferencias profundas y fundamentales entre sus cosmovisiones.",
        targetWord: "profundas",
        targetWordIndex: 6,
        options: [
            { word: "abismales", score: 100, feedback: "¡Perfecto! 'Abismales' son tan profundas como un abismo, insondables e imposibles de medir." },
            { word: "hondas", score: 85, feedback: "'Hondas' son de gran profundidad." },
            { word: "raigales", score: 95, feedback: "'Raigales' están arraigadas en lo más esencial, como las raíces." },
            { word: "insondables", score: 90, feedback: "'Insondables' son imposibles de medir o comprender en su totalidad." }
        ],
        bestAnswer: "abismales",
        explanation: "Diferencias 'abismales' separan a las cosmovisiones con una distancia tan vasta e infranqueable como la de un abismo oceánico."
    },
    {
        id: "es-31",
        sentence: "Su reacción ante la noticia fue mesurada y reflexiva, considerando todas las implicaciones.",
        targetWord: "mesurada",
        targetWordIndex: 5,
        options: [
            { word: "prudente", score: 90, feedback: "'Prudente' actúa con cautela y buen juicio." },
            { word: "sobria", score: 95, feedback: "'Sobria' es moderada, seria y carente de excesos emocionales." },
            { word: "circunspección", score: 100, feedback: "¡Perfecto! 'Circunspección' implica una cautela deliberada y una consideración atenta de todas las circunstancias." },
            { word: "parca", score: 85, feedback: "'Parca' es escasa o austera en palabras o gestos." }
        ],
        bestAnswer: "circunspección",
        explanation: "La 'circunspección' denota una actitud de vigilancia y evaluación cuidadosa de todos los factores antes de actuar o hablar, siendo la antítesis de la impulsividad."
    },
    {
        id: "es-32",
        sentence: "La arquitectura del edificio era grandiosa y pretendía inspirar asombro.",
        targetWord: "grandiosa",
        targetWordIndex: 5,
        options: [
            { word: "colosal", score: 95, feedback: "'Colosal' es de tamaño o escala gigantescos." },
            { word: "fastuosa", score: 90, feedback: "'Fastuosa' es suntuosa y lujosa, con gran pompa." },
            { word: "epopéyica", score: 100, feedback: "¡Perfecto! 'Epopéyica' es digna de una epopeya, evocando hazañas heroicas y una escala sobrehumana." },
            { word: "imponente", score: 88, feedback: "'Imponente' inspira respeto o admiración por su apariencia." }
        ],
        bestAnswer: "epopéyica",
        explanation: "Una arquitectura 'epopéyica' trasciende lo meramente grande para narrar visualmente una historia de ambición y poder, aspirando a la inmortalidad de las epopeyas."
    },
    {
        id: "es-33",
        sentence: "La paz alcanzada después de la guerra era inestable y llena de tensiones no resueltas.",
        targetWord: "inestable",
        targetWordIndex: 6,
        options: [
            { word: "volátil", score: 95, feedback: "'Volátil' puede cambiar de manera rápida e impredecible." },
            { word: "lábil", score: 90, feedback: "'Lábil' es propensa a cambiar o deslizarse." },
            { word: "quebradiza", score: 85, feedback: "'Quebradiza' se rompe fácilmente." },
            { word: "anfractuosa", score: 100, feedback: "¡Perfecto! 'Anfractuosa' es llena de grietas, hendiduras y superficies irregulares, sugiriendo una paz llena de fracturas ocultas." }
        ],
        bestAnswer: "anfractuosa",
        explanation: "Una paz 'anfractuosa' está marcada por profundas grietas y fracturas estructurales bajo una superficie aparentemente unida, listas para provocar su colapso."
    },
    {
        id: "es-34",
        sentence: "Su conocimiento del tema era amplio pero no especialmente profundo.",
        targetWord: "amplio",
        targetWordIndex: 6,
        options: [
            { word: "extenso", score: 90, feedback: "'Extenso' cubre un área grande." },
            { word: "vasto", score: 95, feedback: "'Vasto' es de gran extensión." },
            { word: "enciclopédico", score: 100, feedback: "¡Perfecto! 'Enciclopédico' cubre una amplia gama de temas, como una enciclopedia, pero puede ser superficial en cada uno." },
            { word: "general", score: 80, feedback: "'General' se refiere a todo un grupo o área, pero es menos preciso." }
        ],
        bestAnswer: "enciclopédico",
        explanation: "Un conocimiento 'enciclopédico' abarca una multitud de áreas diferentes, priorizando la amplitud de cobertura sobre la profundidad de comprensión en cada una."
    },
    {
        id: "es-35",
        sentence: "El argumento del filósofo era sutil y fácil de pasar por alto para el lector casual.",
        targetWord: "sutil",
        targetWordIndex: 6,
        options: [
            { word: "tenue", score: 85, feedback: "'Tenue' es débil y poco intenso." },
            { word: "delicado", score: 90, feedback: "'Delicado' requiere un manejo cuidadoso." },
            { word: "insidioso", score: 95, feedback: "'Insidioso' actúa de manera gradual y engañosa." },
            { word: "arqueado", score: 100, feedback: "¡Perfecto! 'Arqueado' (en sentido figurado, como un arco) está curvado o desviado de lo obvio, requiriendo una mirada indirecta para percibirlo." }
        ],
        bestAnswer: "arqueado",
        explanation: "Un argumento 'arqueado' no sigue una línea recta de razonamiento; se curva y se desvía, requiriendo que el lector siga su trayectoria indirecta para captar su punto."
    },
    {
        id: "es-36",
        sentence: "La influencia de su mentor fue decisiva en la formación de su pensamiento.",
        targetWord: "decisiva",
        targetWordIndex: 6,
        options: [
            { word: "crucial", score: 90, feedback: "'Crucial' es de importancia crítica." },
            { word: "determinante", score: 95, feedback: "'Determinante' decide o fija el resultado." },
            { word: "axial", score: 100, feedback: "¡Perfecto! 'Axial' sirve como eje o pilar central alrededor del cual gira todo lo demás." },
            { word: "pivotal", score: 92, feedback: "'Pivotal' es de importancia crucial, similar a 'axial'." }
        ],
        bestAnswer: "axial",
        explanation: "Una influencia 'axial' constituye el eje fundamental, el punto de referencia central que define la orientación y el desarrollo de todo un sistema de pensamiento."
    },
    {
        id: "es-37",
        sentence: "El silencio en la sala era absoluto y cargado de expectación.",
        targetWord: "absoluto",
        targetWordIndex: 5,
        options: [
            { word: "total", score: 85, feedback: "'Total' es completo." },
            { word: "perfecto", score: 80, feedback: "'Perfecto' no tiene defectos." },
            { word: "estricto", score: 70, feedback: "'Estricto' es severo en la aplicación de reglas, no aplicable aquí." },
            { word: "categórico", score: 100, feedback: "¡Perfecto! 'Categórico' es absoluto, sin excepciones ni condiciones, y a menudo con un tono de autoridad final." }
        ],
        bestAnswer: "categórico",
        explanation: "Un silencio 'categórico' es una afirmación no verbal definitiva e incondicional, que impone su presencia total y excluye cualquier otro sonido o significado."
    },
    {
        id: "es-38",
        sentence: "Su desprecio por la autoridad establecida era evidente en cada gesto.",
        targetWord: "evidente",
        targetWordIndex: 6,
        options: [
            { word: "notorio", score: 90, feedback: "'Notorio' es conocido públicamente." },
            { word: "palpable", score: 95, feedback: "'Palpable' es tan intenso que casi puede sentirse físicamente." },
            { word: "flagrante", score: 100, feedback: "¡Perfecto! 'Flagrante' es tan obvio y escandaloso que no puede ocultarse, como un fuego ardiente." },
            { word: "visible", score: 85, feedback: "'Visible' puede verse." }
        ],
        bestAnswer: "flagrante",
        explanation: "Un desprecio 'flagrante' se manifiesta de manera tan abierta y desafiante que constituye en sí mismo un acto de rebeldía, sin intento de disimulo."
    },
    {
        id: "es-39",
        sentence: "La tradición local era rica y llena de rituales complejos.",
        targetWord: "rica",
        targetWordIndex: 5,
        options: [
            { word: "fecunda", score: 90, feedback: "'Fecunda' es fértil y productiva." },
            { word: "abundante", score: 85, feedback: "'Abundante' existe en grandes cantidades." },
            { word: "ubérrima", score: 95, feedback: "'Ubérrima' es extremadamente fértil y productiva." },
            { word: "multívoca", score: 100, feedback: "¡Perfecto! 'Multívoca' tiene múltiples significados, voces o capas de interpretación, como una tradición compleja." }
        ],
        bestAnswer: "multívoca",
        explanation: "Una tradición 'multívoca' es rica no solo en cantidad de elementos, sino en la densidad y diversidad de significados que pueden leerse en sus rituales y símbolos."
    },
    {
        id: "es-40",
        sentence: "La decisión del tribunal fue justa y equitativa para todas las partes.",
        targetWord: "justa",
        targetWordIndex: 6,
        options: [
            { word: "imparcial", score: 90, feedback: "'Imparcial' no favorece a un lado sobre otro." },
            { word: "recta", score: 85, feedback: "'Recta' sigue una línea moral directa." },
            { word: "salomónica", score: 100, feedback: "¡Perfecto! 'Salomónica' muestra la sabiduría y equidad del rey Salomón, especialmente en decisiones difíciles que buscan la justicia profunda." },
            { word: "ecuánime", score: 95, feedback: "'Ecuánime' mantiene un equilibrio y serenidad en el juicio." }
        ],
        bestAnswer: "salomónica",
        explanation: "Una decisión 'salomónica' resuelve un conflicto complejo con una sabiduría que trasciende la aplicación mecánica de la ley, buscando una justicia superior y a menudo creativa."
    },
    {
        id: "es-41",
        sentence: "La resistencia del material a la fatiga era excepcionalmente alta.",
        targetWord: "alta",
        targetWordIndex: 9,
        options: [
            { word: "elevada", score: 85, feedback: "'Elevada' significa que está a gran altura o nivel." },
            { word: "sobresaliente", score: 90, feedback: "'Sobresaliente' destaca por encima de lo normal." },
            { word: "prodigiosa", score: 95, feedback: "'Prodigiosa' es extraordinaria y maravillosa." },
            { word: "titanica", score: 100, feedback: "¡Perfecto! 'Titanica' posee una fuerza colosal y sobrehumana, como la de los titanes de la mitología." }
        ],
        bestAnswer: "titanica",
        explanation: "Una resistencia 'titanica' sugiere una capacidad sobrehumana para soportar fuerzas destructivas, evocando la fuerza primordial y casi indestructible de los titanes."
    },
    {
        id: "es-42",
        sentence: "Su memoria para los detalles era asombrosa y a menudo inquietante.",
        targetWord: "asombrosa",
        targetWordIndex: 6,
        options: [
            { word: "pasmosa", score: 90, feedback: "'Pasmosa' deja sin habla por la sorpresa." },
            { word: "portentosa", score: 95, feedback: "'Portentosa' es prodigiosa y anuncia algo extraordinario." },
            { word: "hipermnésica", score: 100, feedback: "¡Perfecto! 'Hipermnésica' se refiere a una memoria anormalmente vívida y detallada, a veces patológica." },
            { word: "admirable", score: 85, feedback: "'Admirable' merece admiración." }
        ],
        bestAnswer: "hipermnésica",
        explanation: "Una memoria 'hipermnésica' trasciende lo meramente asombroso para entrar en el ámbito de lo extraordinario y a veces inquietante, recordando detalles con una precisión casi anormal."
    },
    {
        id: "es-43",
        sentence: "La trama de la novela era intrincada y llena de giros inesperados.",
        targetWord: "intrincada",
        targetWordIndex: 6,
        options: [
            { word: "enmarañada", score: 95, feedback: "'Enmarañada' es como una maraña, difícil de desenredar." },
            { word: "laberíntica", score: 100, feedback: "¡Perfecto! 'Laberíntica' es como un laberinto, con múltiples caminos, giros y callejones sin salida." },
            { word: "compleja", score: 90, feedback: "'Compleja' está compuesta de muchas partes interrelacionadas." },
            { word: "retorcida", score: 92, feedback: "'Retorcida' tiene giros y vueltas, a menudo con intención engañosa." }
        ],
        bestAnswer: "laberíntica",
        explanation: "Una trama 'laberíntica' atrapa al lector en un recorrido por pasajes narrativos complejos, donde la dirección se pierde y los giros son tanto geográficos como argumentales."
    },
    {
        id: "es-44",
        sentence: "Su dedicación al proyecto era incansable, trabajando noches enteras.",
        targetWord: "incansable",
        targetWordIndex: 6,
        options: [
            { word: "infatigable", score: 95, feedback: "'Infatigable' no se cansa." },
            { word: "tenaz", score: 90, feedback: "'Tenaz' se aferra con persistencia a un propósito." },
            { word: "abnegada", score: 92, feedback: "'Abnegada' implica sacrificio personal por un deber o causa." },
            { word: "sisífica", score: 100, feedback: "¡Perfecto! 'Sisífica' denota un trabajo arduo, repetitivo y aparentemente interminable, como el castigo de Sísifo." }
        ],
        bestAnswer: "sisífica",
        explanation: "Una dedicación 'sisífica' implica empujar una roca cuesta arriba una y otra vez, simbolizando un esfuerzo monumental y aparentemente sin fin, sostenido por pura voluntad."
    },
    {
        id: "es-45",
        sentence: "La luz en el atardecer era hermosa y de tonos cálidos.",
        targetWord: "hermosa",
        targetWordIndex: 6,
        options: [
            { word: "bella", score: 85, feedback: "'Bella' agrada a los sentidos." },
            { word: "espléndida", score: 90, feedback: "'Espléndida' es magnífica y brillante." },
            { word: "pintoresca", score: 88, feedback: "'Pintoresca' es digna de ser pintada, como un cuadro." },
            { word: "crepuscular", score: 100, feedback: "¡Perfecto! 'Crepuscular' pertenece específicamente al crepúsculo, al atardecer, capturando su belleza única y melancólica." }
        ],
        bestAnswer: "crepuscular",
        explanation: "La luz 'crepuscular' posee la cualidad etérea, efímera y emocionalmente cargada propia del límite entre el día y la noche, más que una belleza genérica."
    },
    {
        id: "es-46",
        sentence: "La lógica de su argumento era impecable y no dejaba espacio para la refutación.",
        targetWord: "impecable",
        targetWordIndex: 6,
        options: [
            { word: "irreprochable", score: 90, feedback: "'Irreprochable' no tiene defectos que puedan criticarse." },
            { word: "flawless", score: 85, feedback: "'Flawless' (inglés) es sin defectos, pero no es una palabra española." },
            { word: "irrefutable", score: 95, feedback: "'Irrefutable' no puede ser refutado." },
            { word: "apodíctica", score: 100, feedback: "¡Perfecto! 'Apodíctica' (en lógica) es necesariamente verdadera, demostrativa y absolutamente convincente." }
        ],
        bestAnswer: "apodíctica",
        explanation: "Una lógica 'apodíctica' se construye sobre premisas necesarias y demostraciones rigurosas, de modo que su conclusión se sigue con una certeza incuestionable."
    },
    {
        id: "es-47",
        sentence: "El ambiente en la reunión era tenso y cargado de hostilidad no expresada.",
        targetWord: "tenso",
        targetWordIndex: 5,
        options: [
            { word: "enrarecido", score: 95, feedback: "'Enrarecido' se ha vuelto denso, pesado y difícil de respirar, metafóricamente." },
            { word: "cargado", score: 90, feedback: "'Cargado' está lleno de una energía eléctrica o emocional intensa." },
            { word: "áspero", score: 85, feedback: "'Áspero' es áspero al tacto o al trato." },
            { word: "opresivo", score: 100, feedback: "¡Perfecto! 'Opresivo' oprime y sofoca, como una presión física, reflejando una hostilidad que aplasta psicológicamente." }
        ],
        bestAnswer: "opresivo",
        explanation: "Un ambiente 'opresivo' ejerce una presión psicológica tan intensa que se siente como una fuerza física, sofocando la expresión y cargando el aire con amenaza."
    },
    {
        id: "es-48",
        sentence: "Su habilidad para resolver problemas bajo presión era notable.",
        targetWord: "notable",
        targetWordIndex: 10,
        options: [
            { word: "destacable", score: 85, feedback: "'Destacable' merece ser destacado." },
            { word: "sobresaliente", score: 90, feedback: "'Sobresaliente' sobresale por encima de lo normal." },
            { word: "prodigiosa", score: 95, feedback: "'Prodigiosa' es extraordinaria y maravillosa." },
            { word: "estrábica", score: 100, feedback: "¡Perfecto! 'Estrábica' (en sentido figurado) ve soluciones donde otros no las ven, como si tuviera una visión desviada o única." }
        ],
        bestAnswer: "estrábica",
        explanation: "Una habilidad 'estrábica' para resolver problemas implica una perspectiva única, desviada de la norma, que detecta conexiones y soluciones invisibles para la visión convencional, especialmente bajo presión."
    },
    {
        id: "es-49",
        sentence: "La similitud entre los dos casos era sorprendente y sugería un patrón común.",
        targetWord: "sorprendente",
        targetWordIndex: 6,
        options: [
            { word: "asombrosa", score: 90, feedback: "'Asombrosa' causa gran sorpresa." },
            { word: "pasmosa", score: 92, feedback: "'Pasmosa' deja atónito." },
            { word: "flagrante", score: 95, feedback: "'Flagrante' es evidente y llamativo." },
            { word: "estupefaciente", score: 100, feedback: "¡Perfecto! 'Estupefaciente' causa estupor, una sorpresa tan grande que paraliza la capacidad de reacción o pensamiento." }
        ],
        bestAnswer: "estupefaciente",
        explanation: "Una similitud 'estupefaciente' es tan chocante e inesperada que deja a uno sin habla, forzando una reevaluación inmediata de las suposiciones previas."
    },
    {
        id: "es-50",
        sentence: "El fundamento de su teoría era débil y se basaba en supuestos no verificados.",
        targetWord: "débil",
        targetWordIndex: 6,
        options: [
            { word: "frágil", score: 90, feedback: "'Frágil' se rompe fácilmente." },
            { word: "endeble", score: 95, feedback: "'Endeble' es flojo y sin fuerza." },
            { word: "quebradizo", score: 85, feedback: "'Quebradizo' se quiebra con facilidad." },
            { word: "larvaria", score: 100, feedback: "¡Perfecto! 'Larvaria' se encuentra en una etapa temprana, subdesarrollada e incompleta, como una larva antes de convertirse en algo sólido." }
        ],
        bestAnswer: "larvaria",
        explanation: "Un fundamento 'larvaria' está en un estado embrionario e inmaduro, careciendo de la estructura y el desarrollo necesarios para sostenerse por sí mismo."
    },
    {
        id: "es-51",
        sentence: "El análisis de mercado era incompleto y omitía tendencias cruciales del sector.",
        targetWord: "incompleto",
        targetWordIndex: 4,
        options: [
            { word: "parcial", score: 85, feedback: "'Parcial' significa que cubre solo una parte, pero puede ser intencionalmente selectivo, no necesariamente deficiente." },
            { word: "fragmentario", score: 90, feedback: "'Fragmentario' está compuesto de piezas sueltas, lo cual describe bien la falta de totalidad." },
            { word: "lacunoso", score: 100, feedback: "¡Perfecto! 'Lacunoso' está lleno de lagunas o vacíos, describiendo específicamente un análisis con omisiones importantes." },
            { word: "insuficiente", score: 80, feedback: "'Insuficiente' no alcanza lo necesario, pero es un término más general que no capta la idea de 'omisión'." }
        ],
        bestAnswer: "lacunoso",
        explanation: "'Lacunoso' (del latín 'lacuna', hueco) describe un análisis plagado de vacíos informativos, donde faltan datos o tendencias esenciales."
    },
    {
        id: "es-52",
        sentence: "Su discurso en la conferencia fue fluido y convincente, cautivando a la audiencia.",
        targetWord: "convincente",
        targetWordIndex: 8,
        options: [
            { word: "persuasivo", score: 90, feedback: "'Persuasivo' busca convencer y a menudo lo logra, pero es un término más común." },
            { word: "cogente", score: 95, feedback: "'Cogente' se refiere a un argumento lógico y convincente por su fuerza." },
            { word: "subyugante", score: 100, feedback: "¡Perfecto! 'Subyugante' no solo convence, sino que domina y cautiva por completo la voluntad o atención del oyente." },
            { word: "efectivo", score: 80, feedback: "'Efectivo' logra su objetivo, pero es un término amplio y menos específico para describir el impacto retórico." }
        ],
        bestAnswer: "subyugante",
        explanation: "Un discurso 'subyugante' ejerce un poder casi hipnótico, sometiendo la atención y el juicio de la audiencia mediante una combinación de elocuencia y fuerza argumental."
    },
    {
        id: "es-53",
        sentence: "La restauración del manuscrito antiguo fue un proceso delicado y largo.",
        targetWord: "delicado",
        targetWordIndex: 8,
        options: [
            { word: "sutil", score: 85, feedback: "'Sutil' implica fineza, pero se usa más para diferencias o operaciones que requieren agudeza, no necesariamente cuidado físico." },
            { word: "minucioso", score: 90, feedback: "'Minucioso' implica atención extrema al detalle, lo cual es parte del proceso, pero no capta la fragilidad del objeto." },
            { word: "quírúrgico", score: 95, feedback: "'Quirúrgico' sugiere precisión extrema y metódica, como en una cirugía." },
            { word: "filigrana", score: 100, feedback: "¡Perfecto! 'Filigrana' (como el arte de trabajar metales delicados) describe un trabajo que requiere una precisión artesanal extrema sobre material frágil." }
        ],
        bestAnswer: "filigrana",
        explanation: "Un trabajo de 'filigrana' implica una manipulación exquisita y paciente de materiales delicadísimos, analogía perfecta para restaurar un manuscrito antiguo."
    },
    {
        id: "es-54",
        sentence: "La novela presenta una crítica mordaz de la hipocresía social de la época.",
        targetWord: "mordaz",
        targetWordIndex: 5,
        options: [
            { word: "ácida", score: 90, feedback: "'Ácida' es corrosiva y cáustica, muy cercana en significado." },
            { word: "incisiva", score: 95, feedback: "'Incisiva' corta y penetra hasta lo profundo, como un bisturí." },
            { word: "corrosiva", score: 92, feedback: "'Corrosiva' desgasta y destruye lentamente, una metáfora potente." },
            { word: "sardónica", score: 100, feedback: "¡Perfecto! 'Sardónica' combina la mordacidad con un tono de burla, desprecio y escepticismo amargo, típico de una crítica social profunda." }
        ],
        bestAnswer: "sardónica",
        explanation: "Una crítica 'sardónica' muerde con desdén burlón y un humor negro, revelando la hipocresía no solo con ira, sino con un desprecio intelectualmente superior."
    },
    {
        id: "es-55",
        sentence: "El puente colgante inspiraba una mezcla de admiración y temor por su altura.",
        targetWord: "temor",
        targetWordIndex: 9,
        options: [
            { word: "pavor", score: 90, feedback: "'Pavor' es miedo intenso, pero puede ser demasiado fuerte para una mezcla que incluye admiración." },
            { word: "inquietud", score: 80, feedback: "'Inquietud' es malestar o desasosiego, un sentimiento más vago y menos específico." },
            { word: "vértigo", score: 100, feedback: "¡Perfecto! 'Vértigo' es el mareo o temor provocado específicamente por la altura, capturando la reacción física y emocional ante el vacío." },
            { word: "recelo", score: 75, feedback: "'Recelo' es desconfianza o sospecha, que no se ajusta al contexto de una estructura arquitectónica." }
        ],
        bestAnswer: "vértigo",
        explanation: "El 'vértigo' es la sensación específica de mareo y terror provocada por las alturas, una respuesta visceral perfecta para un puente colgante."
    },
    {
        id: "es-56",
        sentence: "Su conocimiento de las leyes era amplio pero poco profundo.",
        targetWord: "poco profundo",
        targetWordIndex: 9,
        options: [
            { word: "superficial", score: 90, feedback: "'Superficial' es la traducción directa, pero es un término común." },
            { word: "epidérmico", score: 95, feedback: "'Epidérmico' se queda en la piel, una metáfora vívida para la falta de profundidad." },
            { word: "ligero", score: 80, feedback: "'Ligero' puede significar no profundo, pero también carente de peso o seriedad." },
            { word: "diletante", score: 100, feedback: "¡Perfecto! 'Diletante' implica un conocimiento amateur, cultivado por interés o placer pero sin la profundidad del experto." }
        ],
        bestAnswer: "diletante",
        explanation: "Un conocimiento 'diletante' es extenso pero carece de rigor y profundidad especializada, propio de quien aborda un campo por curiosidad más que por dominio profesional."
    },
    {
        id: "es-57",
        sentence: "La noticia del descubrimiento científico se difundió rápidamente por todo el mundo.",
        targetWord: "rápidamente",
        targetWordIndex: 8,
        options: [
            { word: "velozmente", score: 85, feedback: "'Velozmente' es sinónimo directo, pero no añade matices." },
            { word: "fulminantemente", score: 95, feedback: "'Fulminantemente' sugiere una velocidad instantánea y abrumadora, como un rayo." },
            { word: "incesantemente", score: 70, feedback: "'Incesantemente' significa sin parar, pero no necesariamente con rapidez." },
            { word: "virulentamente", score: 100, feedback: "¡Perfecto! 'Virulentamente' se propaga con la rapidez y fuerza contagiosa de un virus, una metáfora poderosa para la difusión de información." }
        ],
        bestAnswer: "virulentamente",
        explanation: "Una noticia que se difunde 'virulentamente' infecta el tejido social global con una velocidad epidemiológica, superando todas las barreras."
    },
    {
        id: "es-58",
        sentence: "La relación entre los dos socios se volvió amarga después del conflicto de intereses.",
        targetWord: "amarga",
        targetWordIndex: 8,
        options: [
            { word: "áspera", score: 85, feedback: "'Áspera' implica rudeza y dificultad en el trato, pero no necesariamente el resentimiento de lo 'amargo'." },
            { word: "tensa", score: 80, feedback: "'Tensa' describe una situación cargada, pero es un estado más que un sabor emocional." },
            { word: "acre", score: 100, feedback: "¡Perfecto! 'Acre' es un sabor áspero y desagradable, y figuradamente describe un sentimiento cargado de resentimiento y hostilidad punzante." },
            { word: "deteriorada", score: 75, feedback: "'Deteriorada' indica que empeoró, pero es un término genérico que no describe la cualidad emocional." }
        ],
        bestAnswer: "acre",
        explanation: "Una relación 'acre' está impregnada de la aspereza y el resentimiento que deja un conflicto, donde cada interacción tiene un regusto desagradable y punzante."
    },
    {
        id: "es-59",
        sentence: "El autor es conocido por su prosa precisa y libre de adornos innecesarios.",
        targetWord: "precisa",
        targetWordIndex: 7,
        options: [
            { word: "exacta", score: 90, feedback: "'Exacta' significa correcta y sin error, pero puede no implicar la economía de lenguaje de 'precisa'." },
            { word: "conciso", score: 85, feedback: "'Conciso' va al grano sin redundancias, pero es un atributo diferente (brevedad) que puede coexistir con la precisión." },
            { word: "lapidaria", score: 95, feedback: "'Lapidaria' es concisa y contundente, como una inscripción en piedra, muy cercano." },
            { word: "taciturna", score: 100, feedback: "¡Perfecto! 'Taciturna' (por extensión) es una prosa que dice mucho con muy poco, con una elocuencia contenida y austera." }
        ],
        bestAnswer: "taciturna",
        explanation: "Una prosa 'taciturna' comunica con una elocuencia minimalista y sobria, donde cada palabra es esencial y el significado profundo se insinúa más que se declara."
    },
    {
        id: "es-60",
        sentence: "La evidencia presentada en el juicio era indirecta y circunstancial.",
        targetWord: "indirecta",
        targetWordIndex: 6,
        options: [
            { word: "mediata", score: 90, feedback: "'Mediata' no es directa, implica un intermediario, lo cual encaja en lógica." },
            { word: "tangencial", score: 95, feedback: "'Tangencial' roza el asunto principal sin abordarlo de frente." },
            { word: "oblicua", score: 100, feedback: "¡Perfecto! 'Oblicua' se acerca de lado, de manera indirecta y a veces evasiva, perfecto para evidencia que no apunta directamente al hecho." },
            { word: "difusa", score: 80, feedback: "'Difusa' está esparcida y no es clara, pero no necesariamente implica un abordaje indirecto." }
        ],
        bestAnswer: "oblicua",
        explanation: "Una evidencia 'oblicua' no prueba el hecho central de manera recta, sino que lo sugiere a través de inferencias y circunstancias laterales."
    },
    {
        id: "es-61",
        sentence: "Su actitud hacia el nuevo proyecto fue de escepticismo total.",
        targetWord: "total",
        targetWordIndex: 9,
        options: [
            { word: "absoluto", score: 90, feedback: "'Absoluto' es sin reservas, pero es un término muy común." },
            { word: "irreductible", score: 95, feedback: "'Irreductible' no puede ser reducido o cambiado, sugiriendo un escepticismo arraigado." },
            { word: "pírrico", score: 70, feedback: "'Pírrico' se refiere a una victoria costosa, no aplica aquí." },
            { word: "acendrado", score: 100, feedback: "¡Perfecto! 'Acendrado' (purificado, sin mezcla) describe un escepticismo puro, sin contaminación de esperanza o credulidad." }
        ],
        bestAnswer: "acendrado",
        explanation: "Un escepticismo 'acendrado' es de una pureza radical, libre de cualquier atisbo de fe o aceptación, representando la negación más refinada."
    },
    {
        id: "es-62",
        sentence: "El aroma del café recién molido era fuerte e invadía toda la casa.",
        targetWord: "fuerte",
        targetWordIndex: 7,
        options: [
            { word: "intenso", score: 90, feedback: "'Intenso' es de gran fuerza, pero es un término general." },
            { word: "penetrante", score: 95, feedback: "'Penetrante' sugiere que se introduce por todas partes, lo cual encaja con 'invadía'." },
            { word: "pujante", score: 80, feedback: "'Pujante' es vigoroso, pero se aplica más a fuerzas vivas o economías." },
            { word: "ubérrimo", score: 100, feedback: "¡Perfecto! 'Ubérrimo' es excesivamente fértil y rico; aplicado a un aroma, sugiere una riqueza y potencia casi abrumadoras." }
        ],
        bestAnswer: "ubérrimo",
        explanation: "Un aroma 'ubérrimo' es tan potente y generoso en sus notas que satura el espacio de manera casi tangible, como una cosecha abundante para los sentidos."
    },
    {
        id: "es-63",
        sentence: "Las negociaciones diplomáticas fueron lentas y plagadas de obstáculos.",
        targetWord: "lentas",
        targetWordIndex: 6,
        options: [
            { word: "pausadas", score: 85, feedback: "'Pausadas' pueden ser deliberadamente lentas, pero no conlleva la connotación negativa de dificultad." },
            { word: "tardías", score: 75, feedback: "'Tardías' implican retraso respecto a un plazo, no necesariamente un proceso lento en sí." },
            { word: "glaciales", score: 100, feedback: "¡Perfecto! 'Glaciales' son extremadamente lentas, como el movimiento de un glaciar, y además sugieren frialdad en la relación." },
            { word: "morosas", score: 90, feedback: "'Morosas' son lentas por negligencia o desidia, lo cual podría ser, pero no siempre es el caso en diplomacia." }
        ],
        bestAnswer: "glaciales",
        explanation: "Unas negociaciones 'glaciales' avanzan con una lentitud geológica y en un clima de frialdad política, donde cada avance es un esfuerzo monumental."
    },
    {
        id: "es-64",
        sentence: "Su interpretación del papel fue emocionalmente poderosa y conmovedora.",
        targetWord: "poderosa",
        targetWordIndex: 7,
        options: [
            { word: "intensa", score: 90, feedback: "'Intensa' es de gran fuerza, pero es un adjetivo más amplio." },
            { word: "arrebatadora", score: 95, feedback: "'Arrebatadora' captura y transporta al espectador, muy adecuado." },
            { word: "vehemente", score: 88, feedback: "'Vehemente' es apasionada y llena de fervor, pero puede no enfatizar el impacto en el público." },
            { word: "estremecedora", score: 100, feedback: "¡Perfecto! 'Estremecedora' literalmente hace temblar, provocando una sacudida emocional profunda en quien la observa." }
        ],
        bestAnswer: "estremecedora",
        explanation: "Una interpretación 'estremecedora' sacude los cimientos emocionales del espectador, dejando una impresión duradera a través de su fuerza visceral."
    },
    {
        id: "es-65",
        sentence: "La estrategia de la empresa era flexible y se adaptaba a los cambios del mercado.",
        targetWord: "flexible",
        targetWordIndex: 6,
        options: [
            { word: "adaptable", score: 90, feedback: "'Adaptable' es la cualidad descrita, pero es un término funcional y menos sugerente." },
            { word: "elástica", score: 95, feedback: "'Elástica' puede estirarse y volver a su forma, una buena metáfora de resiliencia." },
            { word: "versátil", score: 88, feedback: "'Versátil' sirve para muchos propósitos, lo cual es cercano." },
            { word: "proteica", score: 100, feedback: "¡Perfecto! 'Proteica' (como el dios Proteo) cambia de forma constantemente, denotando una capacidad de transformación activa y esencial." }
        ],
        bestAnswer: "proteica",
        explanation: "Una estrategia 'proteica' no solo se adapta, sino que se transforma de manera fundamental según lo exijan las circunstancias, siendo inherentemente cambiante."
    },
    {
        id: "es-66",
        sentence: "El científico mantuvo una actitud neutral ante los resultados contradictorios.",
        targetWord: "neutral",
        targetWordIndex: 7,
        options: [
            { word: "imparcial", score: 90, feedback: "'Imparcial' no toma partido, muy cercano, pero a menudo se aplica a jueces o árbitros." },
            { word: "objetiva", score: 85, feedback: "'Objetiva' se basa en hechos, pero es una cualidad de la observación, no necesariamente una actitud." },
            { word: "ecua", score: 95, feedback: "'Ecua' (de ecuánime) mantiene equilibrio y serenidad de juicio." },
            { word: "atesorada", score: 100, feedback: "¡Perfecto! 'Atesorada' (en un sentido figurado arcaico: 'en el tesoro', equilibrada) sugiere una neutralidad perfectamente balanceada, como una balanza en reposo." }
        ],
        bestAnswer: "atesorada",
        explanation: "Una actitud 'atesorada' (del latín 'ad tesaurum', hacia el tesoro) representa el ideal de equilibrio y justo medio, manteniendo la ecuanimidad ante la incertidumbre."
    },
    {
        id: "es-67",
        sentence: "La luz de la luna llena era clara y bañaba el paisaje con un tono plateado.",
        targetWord: "clara",
        targetWordIndex: 6,
        options: [
            { word: "nítida", score: 90, feedback: "'Nítida' es limpia y bien definida, aplicable a la luz." },
            { word: "pura", score: 85, feedback: "'Pura' está libre de contaminación, pero es menos específica para la luz." },
            { word: "cándida", score: 95, feedback: "'Cándida' es blanca y brillante, con una connotación de inocencia o pureza." },
            { word: "selénica", score: 100, feedback: "¡Perfecto! 'Selénica' (perteneciente a la luna, Selene) describe específicamente la cualidad única, fría y plateada de la luz lunar." }
        ],
        bestAnswer: "selénica",
        explanation: "La luz 'selénica' posee la cualidad etérea, fría y poética atribuida a la diosa lunar, transformando el paisaje con su brillo distintivo."
    },
    {
        id: "es-68",
        sentence: "La derrota del equipo fue humillante y dejó una marca en su reputación.",
        targetWord: "humillante",
        targetWordIndex: 6,
        options: [
            { word: "vergonzosa", score: 90, feedback: "'Vergonzosa' causa vergüenza, pero 'humillante' implica una pérdida de dignidad más profunda." },
            { word: "ignominiosa", score: 95, feedback: "'Ignominiosa' conlleva deshonra pública y pérdida del buen nombre." },
            { word: "bochornosa", score: 88, feedback: "'Bochornosa' es extremadamente vergonzosa, a menudo por lo ridículo." },
            { word: "oprobiosa", score: 100, feedback: "¡Perfecto! 'Oprobiosa' está cargada de oprobio, es decir, de desprecio y reproche público generalizado, manchando la reputación." }
        ],
        bestAnswer: "oprobiosa",
        explanation: "Una derrota 'oprobiosa' arrastra el nombre del perdedor por el fango del descrédito público, imponiendo una marca de deshonra difícil de borrar."
    },
    {
        id: "es-69",
        sentence: "Su memoria del evento era vaga y llena de inconsistencias.",
        targetWord: "vaga",
        targetWordIndex: 6,
        options: [
            { word: "difusa", score: 90, feedback: "'Difusa' está desdibujada y poco clara, muy adecuado." },
            { word: "evanescente", score: 95, feedback: "'Evanescente' se desvanece como el humo, sugiriendo un recuerdo que escapa." },
            { word: "borrosa", score: 85, feedback: "'Borrosa' no es nítida, como una imagen mal enfocada." },
            { word: "lacunar", score: 100, feedback: "¡Perfecto! 'Lacunar' (relativo a lagunas) describe una memoria llena de huecos y vacíos, donde faltan fragmentos enteros." }
        ],
        bestAnswer: "lacunar",
        explanation: "Una memoria 'lacunar' es como un archivo dañado, donde la información no solo es difusa, sino que existen lagunas estructurales en el recuerdo."
    },
    {
        id: "es-70",
        sentence: "La influencia de la filosofía oriental en su pensamiento era sutil pero significativa.",
        targetWord: "sutil",
        targetWordIndex: 8,
        options: [
            { word: "tenue", score: 85, feedback: "'Tenue' es débil, pero puede implicar una presencia mínima, no necesariamente una influencia profunda pero discreta." },
            { word: "delicada", score: 90, feedback: "'Delicada' requiere atención para percibirse, lo cual encaja." },
            { word: "insidiosa", score: 95, feedback: "'Insidiosa' actúa de manera gradual y oculta, a menudo con connotación negativa, pero puede aplicar a una influencia." },
            { word: "quintaesenciada", score: 100, feedback: "¡Perfecto! 'Quintaesenciada' es la forma más pura, refinada y concentrada de algo, operando en un nivel profundo y esencial, no superficial." }
        ],
        bestAnswer: "quintaesenciada",
        explanation: "Una influencia 'quintaesenciada' es la esencia misma destilada, operando de manera tan fundamental y refinada que impregna el pensamiento sin anunciarse ruidosamente."
    },
    {
        id: "es-71",
        sentence: "El acuerdo comercial fue beneficioso para ambas naciones.",
        targetWord: "beneficioso",
        targetWordIndex: 6,
        options: [
            { word: "ventajoso", score: 90, feedback: "'Ventajoso' reporta ventajas, es un sinónimo cercano." },
            { word: "lucrativo", score: 85, feedback: "'Lucrativo' genera ganancias económicas, pero puede no cubrir todos los tipos de beneficio (político, estratégico)." },
            { word: "provechoso", score: 88, feedback: "'Provechoso' es útil y trae provecho." },
            { word: "simbiótico", score: 100, feedback: "¡Perfecto! 'Simbiótico' implica una relación de beneficio mutuo tan íntima que ambas partes prosperan interdependientemente." }
        ],
        bestAnswer: "simbiótico",
        explanation: "Un acuerdo 'simbiótico' crea una interdependencia positiva donde el éxito de una nación refuerza y nutre el de la otra, más allá del simple intercambio ventajoso."
    },
    {
        id: "es-72",
        sentence: "La estructura del argumento era lógica y bien organizada.",
        targetWord: "lógica",
        targetWordIndex: 6,
        options: [
            { word: "racional", score: 90, feedback: "'Racional' se basa en la razón, muy similar." },
            { word: "coherente", score: 92, feedback: "'Coherente' tiene sus partes conectadas sin contradicción." },
            { word: "consistente", score: 88, feedback: "'Consistente' no tiene incongruencias internas." },
            { word: "silogística", score: 100, feedback: "¡Perfecto! 'Silogística' se construye mediante silogismos, la forma más pura y estructurada de razonamiento deductivo en lógica formal." }
        ],
        bestAnswer: "silogística",
        explanation: "Una estructura 'silogística' avanza paso a paso mediante la conexión inexorable de premisas y conclusiones, representando el ideal de organización lógica."
    },
    {
        id: "es-73",
        sentence: "La reacción del público ante el escándalo fue de indignación generalizada.",
        targetWord: "indignación",
        targetWordIndex: 9,
        options: [
            { word: "enojo", score: 80, feedback: "'Enojo' es ira, pero 'indignación' añade un componente moral de injusticia percibida." },
            { word: "cólera", score: 85, feedback: "'Cólera' es ira violenta, pero aún falta el matiz moral." },
            { word: "irritación", score: 70, feedback: "'Irritación' es un enfado menor, demasiado suave para un escándalo." },
            { word: "conmiseración", score: 100, feedback: "¡Perfecto! 'Conmiseración' (en su sentido más fuerte, próximo a 'indignación compasiva') es una reacción moral profunda ante una ofensa percibida contra la justicia o decencia." }
        ],
        bestAnswer: "conmiseración",
        explanation: "La 'conmiseración' pública es una tempestad moral, una indignación colectiva que nace de la percepción de una afrenta a los valores compartidos."
    },
    {
        id: "es-74",
        sentence: "El diseño del nuevo edificio era atrevido y rompía con la tradición arquitectónica local.",
        targetWord: "atrevido",
        targetWordIndex: 6,
        options: [
            { word: "audaz", score: 95, feedback: "'Audaz' es osado y valiente, casi sinónimo." },
            { word: "transgresor", score: 100, feedback: "¡Perfecto! 'Transgresor' no solo es atrevido, sino que cruza deliberadamente los límites establecidos, violando normas o convenciones." },
            { word: "innovador", score: 90, feedback: "'Innovador' introduce novedades, pero no necesariamente con el espíritu de desafío de 'atrevido'." },
            { word: "revolucionario", score: 92, feedback: "'Revolucionario' busca un cambio radical, pero puede ser un término más amplio." }
        ],
        bestAnswer: "transgresor",
        explanation: "Un diseño 'transgresor' es un acto de desafío arquitectónico, que conscientemente infringe las reglas no escritas del contexto para afirmar una nueva visión."
    },
    {
        id: "es-75",
        sentence: "La solución al enigma fue ingeniosa y requirió un pensamiento lateral.",
        targetWord: "ingeniosa",
        targetWordIndex: 6,
        options: [
            { word: "aguda", score: 85, feedback: "'Aguda' es penetrante e inteligente, pero menos específica para soluciones creativas." },
            { word: "creativa", score: 90, feedback: "'Creativa' implica originalidad, pero 'ingeniosa' añade el matiz de inteligencia práctica." },
            { word: "astuta", score: 88, feedback: "'Astuta' es sagaz y perspicaz, a veces con connotación de engaño." },
            { word: "eurekática", score: 100, feedback: "¡Perfecto! 'Eurekática' (relativo al '¡Eureka!') describe el momento de súbita iluminación y descubrimiento que caracteriza a las soluciones más brillantes." }
        ],
        bestAnswer: "eurekática",
        explanation: "Una solución 'eurekática' surge de un chispazo de genialidad intuitiva, ese momento en que las piezas del rompecabezas mental encajan de repente."
    },
    {
        id: "es-76",
        sentence: "La tela del vestido era suave al tacto y de gran calidad.",
        targetWord: "suave",
        targetWordIndex: 6,
        options: [
            { word: "tersa", score: 90, feedback: "'Tersa' es lisa y sin arrugas, pero no necesariamente suave en textura." },
            { word: "sedosa", score: 95, feedback: "'Sedosa' tiene la suavidad y brillo de la seda, una comparación muy específica." },
            { word: "mullida", score: 80, feedback: "'Mullida' es blanda y esponjosa, como un cojín, no necesariamente para una tela fina." },
            { word: "afelpada", score: 100, feedback: "¡Perfecto! 'Afelpada' tiene la suavidad aterciopelada y cálida del fieltro o terciopelo, indicando una textura lujosa." }
        ],
        bestAnswer: "afelpada",
        explanation: "Una tela 'afelpada' invita al tacto con su superficie densa y suave, prometiendo confort y una sensación de lujo táctil."
    },
    {
        id: "es-77",
        sentence: "Su análisis de la situación política era cínico y carente de esperanza.",
        targetWord: "cínico",
        targetWordIndex: 7,
        options: [
            { word: "escéptico", score: 85, feedback: "'Escéptico' duda, pero no implica necesariamente la misantropía o descreimiento total del cinismo." },
            { word: "descreído", score: 90, feedback: "'Descreído' ha perdido la fe, generalmente en lo religioso, pero puede extenderse a lo social." },
            { word: "misántropo", score: 95, feedback: "'Misántropo' desprecia a la humanidad, lo cual está cerca del cinismo político." },
            { word: "tremendista", score: 100, feedback: "¡Perfecto! 'Tremendista' exagera lo sombrío y catastrófico, pintando la situación con los tintes más negros posibles, combinando cinismo y pesimismo." }
        ],
        bestAnswer: "tremendista",
        explanation: "Un análisis 'tremendista' no solo es cínico, sino que deliberadamente enfatiza lo peor, presentando un panorama tan desesperanzador que raya en lo grotesco."
    },
    {
        id: "es-78",
        sentence: "La voz del cantante era potente y llenaba el auditorio sin necesidad de micrófono.",
        targetWord: "potente",
        targetWordIndex: 7,
        options: [
            { word: "fuerte", score: 85, feedback: "'Fuerte' es la palabra general, pero menos evocadora." },
            { word: "poderosa", score: 90, feedback: "'Poderosa' implica fuerza y capacidad de impacto." },
            { word: "estentórea", score: 95, feedback: "'Estentórea' es muy fuerte y resonante, como la voz del heraldo Estentor." },
            { word: "atronadora", score: 100, feedback: "¡Perfecto! 'Atronadora' es tan potente que parece un trueno, capaz de saturar el espacio con su vibración." }
        ],
        bestAnswer: "atronadora",
        explanation: "Una voz 'atronadora' posee un volumen y una resonancia que impactan físicamente, como una fuerza de la naturaleza que domina el ambiente acústico."
    },
    {
        id: "es-79",
        sentence: "El vínculo entre los gemelos era extraño y casi telepático.",
        targetWord: "extraño",
        targetWordIndex: 6,
        options: [
            { word: "raro", score: 80, feedback: "'Raro' es poco común, pero es un término simple." },
            { word: "insólito", score: 90, feedback: "'Insólito' no es habitual, pero puede no captar la cualidad misteriosa." },
            { word: "singular", score: 88, feedback: "'Singular' es único y particular." },
            { word: "numinal", score: 100, feedback: "¡Perfecto! 'Numinal' pertenece al ámbito de lo espiritual, misterioso y que trasciende la comprensión racional, como un vínculo telepático." }
        ],
        bestAnswer: "numinal",
        explanation: "Un vínculo 'numinal' opera en un plano que escapa a los sentidos ordinarios, sugiriendo una conexión de naturaleza casi espiritual o mística."
    },
    {
        id: "es-80",
        sentence: "La demanda legal era complicada y requería un experto en la materia.",
        targetWord: "complicada",
        targetWordIndex: 5,
        options: [
            { word: "compleja", score: 90, feedback: "'Compleja' tiene muchas partes interrelacionadas." },
            { word: "enredada", score: 92, feedback: "'Enredada' sugiere que los elementos están enmarañados, dificultando su deslinde." },
            { word: "intrincada", score: 95, feedback: "'Intrincada' es enrevesada y de difícil comprensión." },
            { word: "farragosa", score: 100, feedback: "¡Perfecto! 'Farragosa' es confusa, desordenada y excesivamente complicada, como un laberinto de trámites y argumentos legales." }
        ],
        bestAnswer: "farragosa",
        explanation: "Una demanda 'farragosa' es un embrollo procedural y argumental tan denso que se vuelve casi impenetrable para el no iniciado."
    },
    {
        id: "es-81",
        sentence: "Su sonrisa era cálida y hacía sentir a todos bienvenidos.",
        targetWord: "cálida",
        targetWordIndex: 6,
        options: [
            { word: "afable", score: 90, feedback: "'Afable' es amable y de trato fácil, pero describe más una actitud que una cualidad de la sonrisa misma." },
            { word: "cordial", score: 88, feedback: "'Cordial' es afectuoso y sincero." },
            { word: "acogedora", score: 95, feedback: "'Acogedora' invita a quedarse, muy cercano al efecto descrito." },
            { word: "hedónica", score: 100, feedback: "¡Perfecto! 'Hedónica' (relacionada con el placer) es una sonrisa que transmite y promete felicidad, generando bienestar en quien la recibe." }
        ],
        bestAnswer: "hedónica",
        explanation: "Una sonrisa 'hedónica' es un contagio positivo, una expresión que comunica y suscita placer inmediato, creando una atmósfera de bienvenida."
    },
    {
        id: "es-82",
        sentence: "El silencio en la biblioteca era total y solo se interrumpía por el pasar de las páginas.",
        targetWord: "total",
        targetWordIndex: 5,
        options: [
            { word: "absoluto", score: 90, feedback: "'Absoluto' es completo, pero es un término común." },
            { word: "perfecto", score: 85, feedback: "'Perfecto' implica que no tiene defectos, pero para un silencio es menos idiomático." },
            { word: "sepulcral", score: 95, feedback: "'Sepulcral' es como el de una tumba, profundo y un tanto inquietante." },
            { word: "olímpico", score: 100, feedback: "¡Perfecto! 'Olímpico' (como el de los dioses del Olimpo) denota una calma majestuosa, impasible y sobrehumana." }
        ],
        bestAnswer: "olímpico",
        explanation: "Un silencio 'olímpico' tiene la cualidad serena y distante de lo divino, un manto de quietud que envuelve el espacio con majestuosidad."
    },
    {
        id: "es-83",
        sentence: "La resistencia de los manifestantes fue feroz y prolongada.",
        targetWord: "feroz",
        targetWordIndex: 6,
        options: [
            { word: "intensa", score: 85, feedback: "'Intensa' es de gran fuerza, pero 'feroz' añade un matiz de fiereza salvaje." },
            { word: "encarnizada", score: 95, feedback: "'Encarnizada' es brutal, sangrienta y sin cuartel." },
            { word: "tenaz", score: 90, feedback: "'Tenaz' se aferra con persistencia, pero puede no conllevar la violencia implícita en 'feroz'." },
            { word: "estoica", score: 100, feedback: "¡Perfecto! 'Estoica' implica una resistencia serena ante el sufrimiento, indoblegable por principios, no solo por fiereza." }
        ],
        bestAnswer: "estoica",
        explanation: "Una resistencia 'estoica' se sostiene no solo con fuerza, sino con una entereza filosófica que acepta el dolor sin rendirse, elevando la protesta a un acto de principio."
    },
    {
        id: "es-84",
        sentence: "El sabor del chocolate era amargo, con un alto porcentaje de cacao.",
        targetWord: "amargo",
        targetWordIndex: 6,
        options: [
            { word: "áspero", score: 80, feedback: "'Áspero' se refiere más a textura que a sabor." },
            { word: "acre", score: 90, feedback: "'Acre' es áspero y picante al paladar, no exactamente amargo." },
            { word: "tánico", score: 95, feedback: "'Tánico' es la astringencia y amargor propio de los taninos, presente en el cacao y el vino." },
            { word: "absinto", score: 100, feedback: "¡Perfecto! 'Absinto' (como el licor) evoca un amargor complejo, herbal y profundamente aromático, asociado con lo refinado." }
        ],
        bestAnswer: "absinto",
        explanation: "Un sabor 'absinto' es un amargor cultivado y sofisticado, que contiene matices verdes y aromáticos, lejos de la simple acritud."
    },
    {
        id: "es-85",
        sentence: "La atmósfera en la sala de espera era opresiva y nadie se atrevía a hablar.",
        targetWord: "opresiva",
        targetWordIndex: 6,
        options: [
            { word: "asfixiante", score: 95, feedback: "'Asfixiante' impide respirar, metáfora poderosa para la presión psicológica." },
            { word: "agobiante", score: 90, feedback: "'Agobiante' abruma y oprime con peso." },
            { word: "densa", score: 88, feedback: "'Densa' es espesa, aplicable metafóricamente al ambiente." },
            { word: "kafkiana", score: 100, feedback: "¡Perfecto! 'Kafkiana' describe una atmósfera de absurdo burocrático, alienación y presión psicológica indefinible pero palpable, como en las obras de Kafka." }
        ],
        bestAnswer: "kafkiana",
        explanation: "Una atmósfera 'kafkiana' es más que opresiva; es irracional, burocráticamente absurda y genera una parálisis existencial que silencia a las personas."
    },
    {
        id: "es-86",
        sentence: "Su dedicación al arte era absoluta y lo consumía por completo.",
        targetWord: "absoluta",
        targetWordIndex: 6,
        options: [
            { word: "total", score: 85, feedback: "'Total' es completa, pero 'absoluta' tiene una connotación más intensa de exclusividad." },
            { word: "inquebrantable", score: 92, feedback: "'Inquebrantable' no puede ser rota, sugiere fidelidad pero no necesariamente consumo total." },
            { word: "devota", score: 95, feedback: "'Devota' es de dedicación religiosa, aplicable metafóricamente al arte." },
            { word: "panvocacional", score: 100, feedback: "¡Perfecto! 'Panvocacional' (de 'pan' todo y 'vocación') describe una dedicación que es la vocación total de una persona, abarcando y definiendo su vida entera." }
        ],
        bestAnswer: "panvocacional",
        explanation: "Una dedicación 'panvocacional' no es una parte de la vida; es el eje central que organiza y consume todas las energías y el significado de la existencia."
    },
    {
        id: "es-87",
        sentence: "El error en la traducción era sutil pero cambiaba por completo el sentido del texto.",
        targetWord: "sutil",
        targetWordIndex: 6,
        options: [
            { word: "leve", score: 85, feedback: "'Leve' es de poca importancia, lo cual contradice que cambie por completo el sentido." },
            { word: "imperceptible", score: 90, feedback: "'Imperceptible' no se puede percibir, pero si cambia el sentido, de algún modo se percibe." },
            { word: "ínfimo", score: 88, feedback: "'Ínfimo' es muy pequeño, pero nuevamente, el efecto descrito es grande." },
            { word: "puntual", score: 100, feedback: "¡Perfecto! 'Puntual' (en el sentido de 'relativo a un punto') es un error localizado en un punto específico, mínimo en extensión pero de consecuencias maximales." }
        ],
        bestAnswer: "puntual",
        explanation: "Un error 'puntual' es una falla microscópica en un lugar crítico, cuyo impacto se amplifica a través de todo el sistema de significado del texto."
    },
    {
        id: "es-88",
        sentence: "La belleza del paisaje montañoso era salvaje y no tocada por el hombre.",
        targetWord: "salvaje",
        targetWordIndex: 7,
        options: [
            { word: "agreste", score: 95, feedback: "'Agreste' es rústico y propio del campo, a menudo sin cultivar." },
            { word: "indómito", score: 100, feedback: "¡Perfecto! 'Indómito' no ha sido domado ni sometido, conservando su estado primigenio y libre." },
            { word: "áspero", score: 85, feedback: "'Áspero' se refiere a rugosidad, no necesariamente a la ausencia de intervención humana." },
            { word: "virgin", score: 70, feedback: "'Virgin' (inglés) no es una palabra española; la forma correcta sería 'virgen'." }
        ],
        bestAnswer: "indómito",
        explanation: "Una belleza 'indómita' desafía la domesticación, presentándose en su estado natural más puro, con una fuerza que parece resistir eternamente la huella humana."
    },
    {
        id: "es-89",
        sentence: "Su respuesta a la acusación fue evasiva y no abordó los puntos clave.",
        targetWord: "evasiva",
        targetWordIndex: 6,
        options: [
            { word: "elusiva", score: 95, feedback: "'Elusiva' esquiva y dificulta la captura, muy similar." },
            { word: "ambiguo", score: 85, feedback: "'Ambiguo' tiene más de un significado, lo cual puede ser una estrategia evasiva, pero no es lo mismo." },
            { word: "reticente", score: 90, feedback: "'Reticente' es poco comunicativo, pero puede no ser activamente evasivo." },
            { word: "anfibológica", score: 100, feedback: "¡Perfecto! 'Anfibológica' (que contiene anfibología) usa deliberadamente construcciones gramaticales ambiguas para evadir una respuesta clara." }
        ],
        bestAnswer: "anfibológica",
        explanation: "Una respuesta 'anfibológica' es una obra maestra de la evasión lingüística, donde la sintaxis se retuerce para no comprometerse con una afirmación concreta."
    },
    {
        id: "es-90",
        sentence: "El ritmo de la música era monótono y repetitivo, induciendo casi un trance.",
        targetWord: "monótono",
        targetWordIndex: 6,
        options: [
            { word: "uniforme", score: 85, feedback: "'Uniforme' es constante, pero no necesariamente aburrido o hipnótico." },
            { word: "incesante", score: 90, feedback: "'Incesante' no cesa, lo cual es parte de la repetición." },
            { word: "tedioso", score: 88, feedback: "'Tedioso' causa aburrimiento, pero puede no tener el efecto hipnótico descrito." },
            { word: "ostinato", score: 100, feedback: "¡Perfecto! 'Ostinato' (término musical) es un motivo rítmico o melódico que se repite obstinadamente, creando una base hipnótica." }
        ],
        bestAnswer: "ostinato",
        explanation: "Un ritmo 'ostinato' es una figura obstinada y persistente en la música, diseñada para establecer un patrón hipnótico que arrastra al oyente."
    },
    {
        id: "es-91",
        sentence: "La lealtad de su asistente era inquebrantable, incluso en las situaciones más difíciles.",
        targetWord: "inquebrantable",
        targetWordIndex: 7,
        options: [
            { word: "firme", score: 85, feedback: "'Firme' es sólida, pero 'inquebrantable' sugiere una prueba extrema." },
            { word: "absoluta", score: 90, feedback: "'Absoluta' es completa, pero no implica necesariamente resistencia a ser quebrada." },
            { word: "incondicional", score: 95, feedback: "'Incondicional' no pone condiciones, es muy cercano." },
            { word: "bélica", score: 100, feedback: "¡Perfecto! 'Bélica' (como la lealtad de un guerrero a su señor) implica una lealtad forjada en la adversidad, probada en combate y sellada con honor." }
        ],
        bestAnswer: "bélica",
        explanation: "Una lealtad 'bélica' es la de un compañero de armas, una fidelidad que se ha endurecido en el crisol del conflicto y no conoce la rendición."
    },
    {
        id: "es-92",
        sentence: "La interpretación del actor del villano era convincente y aterradora.",
        targetWord: "convincente",
        targetWordIndex: 8,
        options: [
            { word: "creíble", score: 90, feedback: "'Creíble' parece real, lo cual es esencial para una buena actuación." },
            { word: "verosímil", score: 92, feedback: "'Verosímil' tiene apariencia de verdad." },
            { word: "pavorosa", score: 95, feedback: "'Pavorosa' inspira pavor, capturando el efecto 'aterrador'." },
            { word: "escalofriante", score: 100, feedback: "¡Perfecto! 'Escalofriante' hace que uno sienta un escalofrío, combinando la credibilidad con un terror físico visceral." }
        ],
        bestAnswer: "escalofriante",
        explanation: "Una interpretación 'escalofriante' no solo convence intelectualmente, sino que activa una respuesta fisiológica de miedo, logrando el pináculo del terror actoral."
    },
    {
        id: "es-93",
        sentence: "La diferencia entre las dos versiones del relato era mínima pero crucial.",
        targetWord: "mínima",
        targetWordIndex: 8,
        options: [
            { word: "pequeña", score: 85, feedback: "'Pequeña' es de poca magnitud, pero es un término muy general." },
            { word: "insignificante", score: 70, feedback: "'Insignificante' carece de importancia, lo contrario a 'crucial'." },
            { word: "sutil", score: 95, feedback: "'Sutil' es tan leve que es difícil de detectar, pero su efecto puede ser grande." },
            { word: "umbral", score: 100, feedback: "¡Perfecto! 'Umbral' (como sustantivo usado adjetivamente) se refiere a la diferencia que se encuentra justo en el límite entre dos estados, siendo pequeña pero decisiva." }
        ],
        bestAnswer: "umbral",
        explanation: "Una diferencia 'umbral' es la que marca el punto de inflexión, la mínima variación que separa una conclusión de otra, siendo por tanto la más crucial."
    },
    {
        id: "es-94",
        sentence: "El humor del escritor era seco e irónico, típico de la región.",
        targetWord: "seco",
        targetWordIndex: 6,
        options: [
            { word: "áspero", score: 85, feedback: "'Áspero' es rudo, pero no específicamente irónico." },
            { word: "lacónico", score: 90, feedback: "'Lacónico' es parco en palabras, lo cual puede acompañar a un humor seco." },
            { word: "cáustico", score: 95, feedback: "'Cáustico' quema con sarcasmo, muy cercano." },
            { word: "sardónico", score: 100, feedback: "¡Perfecto! 'Sardónico' es un humor ácido, burlón y descreído, que a menudo se expresa con sequedad deliberada." }
        ],
        bestAnswer: "sardónico",
        explanation: "Un humor 'sardónico' es la combinación perfecta de sequedad expresiva y ironía mordaz, donde la broma es tan sutil que duele."
    },
    {
        id: "es-95",
        sentence: "La estructura de la organización era rígida y jerárquica.",
        targetWord: "rígida",
        targetWordIndex: 6,
        options: [
            { word: "estricta", score: 90, feedback: "'Estricta' hace cumplir las reglas al pie de la letra." },
            { word: "inflexible", score: 95, feedback: "'Inflexible' no se dobla ni adapta, muy adecuado." },
            { word: "férrea", score: 100, feedback: "¡Perfecto! 'Férrea' es de hierro, sugiriendo una rigidez absoluta, duradera y que impone disciplina férrea." },
            { word: "vertical", score: 88, feedback: "'Vertical' describe bien la jerarquía, pero no necesariamente la rigidez." }
        ],
        bestAnswer: "férrea",
        explanation: "Una estructura 'férrea' está forjada en una disciplina inflexible, donde las cadenas de mando son tan duras como el metal y no admiten desviación."
    },
    {
        id: "es-96",
        sentence: "Su mirada era penetrante y parecía leer los pensamientos.",
        targetWord: "penetrante",
        targetWordIndex: 6,
        options: [
            { word: "aguda", score: 90, feedback: "'Aguda' es perspicaz, pero se aplica más a la inteligencia que a la mirada física." },
            { word: "intensa", score: 85, feedback: "'Intensa' es de gran fuerza, pero no específicamente que atraviesa." },
            { word: "escudriñadora", score: 95, feedback: "'Escudriñadora' examina minuciosamente, muy cercano." },
            { word: "augural", score: 100, feedback: "¡Perfecto! 'Augural' (como la mirada de un augur) parece ver más allá de lo visible, adivinar o predecir, sugiriendo una penetración casi sobrenatural." }
        ],
        bestAnswer: "augural",
        explanation: "Una mirada 'augural' no solo penetra la superficie, sino que parece acceder a estratos más profundos de la verdad o el futuro, inspirando una inquietud reverencial."
    },
    {
        id: "es-97",
        sentence: "El fracaso del proyecto fue costoso en términos financieros y de reputación.",
        targetWord: "costoso",
        targetWordIndex: 6,
        options: [
            { word: "caro", score: 85, feedback: "'Caro' implica un precio alto, pero es un término común." },
            { word: "oneroso", score: 90, feedback: "'Oneroso' es gravoso y que implica una carga pesada." },
            { word: "ruinoso", score: 95, feedback: "'Ruinoso' lleva a la ruina, aplicable a finanzas y reputación." },
            { word: "faraónico", score: 100, feedback: "¡Perfecto! 'Faraónico' (como las obras de los faraones) implica un costo descomunal, monumental y a menudo vanidoso, cuyo fracaso es espectacular." }
        ],
        bestAnswer: "faraónico",
        explanation: "Un fracaso 'faraónico' es el de una empresa de ambición desmedida, cuyo costo exorbitante hace que su caída sea tan monumental como su aspiración."
    },
    {
        id: "es-98",
        sentence: "La conexión emocional entre los personajes de la obra era palpable y conmovedora.",
        targetWord: "palpable",
        targetWordIndex: 9,
        options: [
            { word: "evidente", score: 85, feedback: "'Evidente' es obvia, pero 'palpable' sugiere que casi puede sentirse físicamente." },
            { word: "tangible", score: 95, feedback: "'Tangible' puede tocarse, metáfora muy potente para una emoción." },
            { word: "notoria", score: 80, feedback: "'Notoria' es conocida, pero menos vívida." },
            { word: "táctil", score: 100, feedback: "¡Perfecto! 'Táctil' apela específicamente al sentido del tacto, describiendo una conexión tan real que parece ofrecerse al contacto físico." }
        ],
        bestAnswer: "táctil",
        explanation: "Una conexión 'táctil' trasciende lo metafórico; es una proximidad emocional tan intensa que se experimenta como una sensación física inmediata."
    },
    {
        id: "es-99",
        sentence: "La propuesta del arquitecto era innovadora y sostenible.",
        targetWord: "innovadora",
        targetWordIndex: 6,
        options: [
            { word: "revolucionaria", score: 90, feedback: "'Revolucionaria' cambia las reglas del juego, pero puede ser más radical que 'innovadora'." },
            { word: "vanguardista", score: 95, feedback: "'Vanguardista' está a la vanguardia, a la cabeza de las nuevas tendencias." },
            { word: "pionera", score: 92, feedback: "'Pionera' abre nuevos caminos, es la primera en algo." },
            { word: "prospectiva", score: 100, feedback: "¡Perfecto! 'Prospectiva' no solo es innovadora para el presente, sino que anticipa y se adapta a las necesidades y tecnologías del futuro." }
        ],
        bestAnswer: "prospectiva",
        explanation: "Una propuesta 'prospectiva' integra la innovación con una visión de futuro, diseñando soluciones que serán relevantes y sostenibles en el mañana."
    },
    {
        id: "es-100",
        sentence: "La despedida fue emotiva y cargada de nostalgia por los tiempos pasados.",
        targetWord: "emotiva",
        targetWordIndex: 5,
        options: [
            { word: "sentimental", score: 90, feedback: "'Sentimental' apela a los sentimientos, a menudo con un matiz de ternura." },
            { word: "conmovedora", score: 95, feedback: "'Conmovedora' emociona profundamente." },
            { word: "lacrimógena", score: 88, feedback: "'Lacrimógena' induce al llanto, pero puede tener una connotación de manipulación." },
            { word: "elegíaca", score: 100, feedback: "¡Perfecto! 'Elegíaca' (como una elegía) combina la emoción con un lamento poético por lo que se ha perdido o está por perderse, perfecto para una despedida nostálgica." }
        ],
        bestAnswer: "elegíaca",
        explanation: "Una despedida 'elegíaca' es un ritual de duelo por el tiempo que termina, teñido de una tristeza hermosa y reflexiva que honra lo vivido."
    },
    {
        id: "es-101",
        sentence: "El argumento del ensayo era coherente pero carecía de un fundamento empírico sólido.",
        targetWord: "coherente",
        targetWordIndex: 6,
        options: [
            { word: "consistente", score: 90, feedback: "'Consistente' no tiene contradicciones internas, pero es un término lógico más que retórico." },
            { word: "articulado", score: 95, feedback: "'Articulado' tiene sus partes bien conectadas y expresadas, enfatizando la estructura." },
            { word: "congruente", score: 88, feedback: "'Congruente' es apropiado y lógico, similar a coherente." },
            { word: "sintético", score: 100, feedback: "¡Perfecto! 'Sintético' logra coherencia al unir diversas ideas en un todo armonioso, aunque pueda faltarle base fáctica." }
        ],
        bestAnswer: "sintético",
        explanation: "Un argumento 'sintético' posee coherencia interna al fusionar conceptos en una estructura lógica unificada, independientemente de su respaldo empírico."
    },
    {
        id: "es-102",
        sentence: "La quietud del amanecer en el lago era total, rompiéndose solo con el salto de un pez.",
        targetWord: "total",
        targetWordIndex: 6,
        options: [
            { word: "absoluta", score: 90, feedback: "'Absoluta' es completa, pero es un término muy utilizado." },
            { word: "perfecta", score: 85, feedback: "'Perfecta' implica una cualidad ideal, pero no necesariamente exhaustiva." },
            { word: "omnímoda", score: 100, feedback: "¡Perfecto! 'Omnímoda' se extiende sobre todo, abarcando y dominando cada rincón del espacio y sensación." },
            { word: "plena", score: 88, feedback: "'Plena' está llena y completa, pero es menos enfática." }
        ],
        bestAnswer: "omnímoda",
        explanation: "Una quietud 'omnímoda' es un dominio completo y sin fisuras del silencio y la calma, que todo lo envuelve hasta el momento de su ruptura."
    },
    {
        id: "es-103",
        sentence: "Su gestión de la crisis fue enérgica y dejó claro quién estaba al mando.",
        targetWord: "enérgica",
        targetWordIndex: 6,
        options: [
            { word: "vigorosa", score: 90, feedback: "'Vigorosa' muestra fuerza y vitalidad, pero puede aplicarse a cosas no humanas." },
            { word: "contundente", score: 95, feedback: "'Contundente' es decisiva y aplastante, dejando poco espacio a la duda." },
            { word: "vehemente", score: 85, feedback: "'Vehemente' es apasionada y ardiente, pero puede carecer de la eficacia decisiva." },
            { word: "perentoria", score: 100, feedback: "¡Perfecto! 'Perentoria' combina energía con autoridad imperiosa y urgencia, imponiendo su voluntad de manera incuestionable." }
        ],
        bestAnswer: "perentoria",
        explanation: "Una gestión 'perentoria' actúa con una energía autoritaria que brota de la convicción de mando, sofocando la disidencia e incertidumbre."
    },
    {
        id: "es-104",
        sentence: "La analogía que utilizó para explicar el concepto físico era sugerente pero imperfecta.",
        targetWord: "sugerente",
        targetWordIndex: 9,
        options: [
            { word: "evocadora", score: 92, feedback: "'Evocadora' trae otras imágenes a la mente, pero no necesariamente guía hacia la comprensión." },
            { word: "ilustrativa", score: 88, feedback: "'Ilustrativa' sirve para aclarar, pero puede no ser poética o abierta." },
            { word: "fértil", score: 100, feedback: "¡Perfecto! 'Fértil' es productiva y generativa; invita a explorar múltiples conexiones y significados, más allá de una correspondencia exacta." },
            { word: "potente", score: 85, feedback: "'Potente' tiene gran fuerza, pero es inespecífica sobre el tipo de efecto." }
        ],
        bestAnswer: "fértil",
        explanation: "Una analogía 'fértil' es rica en implicaciones y posibilidades interpretativas, estimulando la comprensión incluso a través de su imprecisión."
    },
    {
        id: "es-105",
        sentence: "El declive de la ciudad industrial era lento pero aparentemente irreversible.",
        targetWord: "lento",
        targetWordIndex: 6,
        options: [
            { word: "gradual", score: 90, feedback: "'Gradual' ocurre por grados, pero no conlleva la pesadez fatalista de 'lento' en este contexto." },
            { word: "pausado", score: 85, feedback: "'Pausado' es con pausas, lo cual puede no aplicar a un proceso continuo de decadencia." },
            { word: "insidioso", score: 95, feedback: "'Insidioso' avanza de manera traicionera y oculta, muy apropiado para un declive que se instala." },
            { word: "secular", score: 100, feedback: "¡Perfecto! 'Secular' (en su sentido de 'seculum', siglo) se desarrolla a lo largo de una era, con una lentitud casi geológica e histórica." }
        ],
        bestAnswer: "secular",
        explanation: "Un declive 'secular' es un proceso de larguísima duración, cuyos efectos se acumulan imperceptiblemente a lo largo de generaciones, dando una sensación de inevitabilidad histórica."
    },
    {
        id: "es-106",
        sentence: "La exigencia del director hacia la orquesta era extrema y muchos músicos no podían cumplirla.",
        targetWord: "extrema",
        targetWordIndex: 6,
        options: [
            { word: "excesiva", score: 90, feedback: "'Excesiva' va más allá de lo razonable, pero es un juicio subjetivo." },
            { word: "desmedida", score: 92, feedback: "'Desmedida' carece de medida, implica falta de límite." },
            { word: "prodigiosa", score: 85, feedback: "'Prodigiosa' es extraordinaria, pero en un sentido maravilloso, no necesariamente exigente." },
            { word: "titanomaquia", score: 100, feedback: "¡Perfecto! 'Titanomaquia' (lucha de titanes) implica una exigencia sobrehumana, digna de una contienda épica entre fuerzas colosales." }
        ],
        bestAnswer: "titanomaquia",
        explanation: "Una exigencia 'titanomaquia' trasciende lo humano, desafiando a los ejecutantes a emular la fuerza y perfección de lo divino o lo titánico."
    },
    {
        id: "es-107",
        sentence: "La simpatía del candidato era natural y le granjeaba el favor de la gente.",
        targetWord: "natural",
        targetWordIndex: 6,
        options: [
            { word: "espontánea", score: 95, feedback: "'Espontánea' surge sin esfuerzo, muy cercano, pero puede ser momentánea." },
            { word: "sincera", score: 90, feedback: "'Sincera' es genuina, pero se enfoca en la honestidad más que en la cualidad innata." },
            { word: "congénita", score: 100, feedback: "¡Perfecto! 'Congénita' es innata, nace con la persona, describiendo una simpatía que es parte esencial de su carácter." },
            { word: "cálida", score: 85, feedback: "'Cálida' es acogedora, pero es una cualidad resultante, no la fuente." }
        ],
        bestAnswer: "congénita",
        explanation: "Una simpatía 'congénita' es un don del carácter, una predisposición innata a generar agrado que no puede ser completamente fabricada o aprendida."
    },
    {
        id: "es-108",
        sentence: "La división dentro del partido político era profunda y amenazaba con una escisión.",
        targetWord: "profunda",
        targetWordIndex: 6,
        options: [
            { word: "honda", score: 85, feedback: "'Honda' es de gran profundidad, pero es un término común." },
            { word: "insalvable", score: 95, feedback: "'Insalvable' no puede ser salvada o superada, lo cual explica la amenaza de escisión." },
            { word: "abismal", score: 92, feedback: "'Abismal' es como un abismo, muy profunda, pero quizás demasiado metafórica." },
            { word: "estructural", score: 100, feedback: "¡Perfecto! 'Estructural' afecta a la arquitectura misma del partido, a sus cimientos ideológicos y de poder, no es una mera grieta superficial." }
        ],
        bestAnswer: "estructural",
        explanation: "Una división 'estructural' se origina en las mismas bases de la organización, haciendo que el conflicto no sea accidental sino constitutivo y, por tanto, muy difícil de reparar."
    },
    {
        id: "es-109",
        sentence: "El perfume de la flor era dulce y embriagador, impregnando el jardín.",
        targetWord: "dulce",
        targetWordIndex: 7,
        options: [
            { word: "azucarado", score: 80, feedback: "'Azucarado' es excesivamente dulce, con connotación negativa de artificialidad." },
            { word: "meloso", score: 90, feedback: "'Meloso' tiene la dulzura densa de la miel, muy apropiado." },
            { word: "fragante", score: 85, feedback: "'Fragante' huele bien, pero es un término general que no especifica el tipo de olor." },
            { word: "nectarino", score: 100, feedback: "¡Perfecto! 'Nectarino' (como el néctar) evoca la dulzura divina, pura y embriagadora de las flores, alimento de los dioses." }
        ],
        bestAnswer: "nectarino",
        explanation: "Un aroma 'nectarino' posee la dulzura perfecta, rica y celestial del néctar, prometiendo un placer sensorial casi mítico."
    },
    {
        id: "es-110",
        sentence: "Su dominio del violín era técnicamente impecable, aunque algunos críticos lo encontraban frío.",
        targetWord: "impecable",
        targetWordIndex: 8,
        options: [
            { word: "perfecto", score: 90, feedback: "'Perfecto' no tiene fallos, pero es un término absoluto y menos matizado." },
            { word: "intachable", score: 92, feedback: "'Intachable' no ofrece motivo para crítica, especialmente en lo moral, aplicado por analogía." },
            { word: "depurado", score: 95, feedback: "'Depurado' ha sido purgado de imperfecciones, sugiriendo un trabajo de refinamiento." },
            { word: "acroamático", score: 100, feedback: "¡Perfecto! 'Acroamático' (destinado a ser escuchado por iniciados) denota una técnica tan elevada y pura que quizás solo es plenamente apreciada por los expertos, explicando la frialdad para otros." }
        ],
        bestAnswer: "acroamático",
        explanation: "Un dominio 'acroamático' alcanza una perfección técnica tan abstracta y elevada que puede resultar hermética o carente de calor emocional para el oyente no especializado."
    },
    {
        id: "es-111",
        sentence: "La trama de la película de espías era enrevesada y difícil de seguir.",
        targetWord: "enrevesada",
        targetWordIndex: 9,
        options: [
            { word: "complicada", score: 85, feedback: "'Complicada' tiene muchas partes, pero es un término genérico." },
            { word: "intrincada", score: 90, feedback: "'Intrincada' es enmarañada y con muchos vericuetos." },
            { word: "laberíntica", score: 95, feedback: "'Laberíntica' es como un laberinto, fácil de perderse." },
            { word: "arabescada", score: 100, feedback: "¡Perfecto! 'Arabescada' (como los arabescos) tiene una complejidad ornamentada, retorcida y decorativa que distrae y confunde, no solo funcional." }
        ],
        bestAnswer: "arabescada",
        explanation: "Una trama 'arabescada' se caracteriza por giros y adornos narrativos superfluos que, aunque bellos en su complejidad, obscurecen la línea argumental principal."
    },
    {
        id: "es-112",
        sentence: "La influencia de su maestro en su pensamiento era omnipresente pero difícil de precisar.",
        targetWord: "omnipresente",
        targetWordIndex: 7,
        options: [
            { word: "ubicua", score: 95, feedback: "'Ubicua' está presente en todas partes, es un sinónimo casi exacto." },
            { word: "pervasiva", score: 100, feedback: "¡Perfecto! 'Pervasiva' se filtra y extiende por todos los intersticios del pensamiento, de manera sutil y penetrante, no solo está presente." },
            { word: "constante", score: 85, feedback: "'Constante' es continua, pero no necesariamente está en todos los aspectos." },
            { word: "imperante", score: 88, feedback: "'Imperante' domina, pero puede ser más visible y menos difusa." }
        ],
        bestAnswer: "pervasiva",
        explanation: "Una influencia 'pervasiva' impregna la totalidad de un sistema de pensamiento como un gas, siendo detectada en cada idea sin que su fuente sea siempre identificable."
    },
    {
        id: "es-113",
        sentence: "El fracaso de la misión fue doloroso, pero proporcionó lecciones invaluables.",
        targetWord: "doloroso",
        targetWordIndex: 6,
        options: [
            { word: "penoso", score: 90, feedback: "'Penoso' causa pena o sufrimiento, pero puede ser menos intenso." },
            { word: "lacerante", score: 95, feedback: "'Lacerante' desgarra y hiere profundamente, como una herida." },
            { word: "amargo", score: 88, feedback: "'Amargo' deja un regusto desagradable, más metafórico que físico." },
            { word: "catártico", score: 100, feedback: "¡Perfecto! 'Catártico', aunque implica purificación, reconoce el dolor intenso que es requisito previo para la liberación y el aprendizaje profundo." }
        ],
        bestAnswer: "catártico",
        explanation: "Un fracaso 'catártico' es aquel cuyo dolor, aunque agudo, sirve para purgar errores y abrir paso a una comprensión renovada y más sabia."
    },
    {
        id: "es-114",
        sentence: "El ritmo de vida en la metrópoli era frenético y agotador.",
        targetWord: "frenético",
        targetWordIndex: 8,
        options: [
            { word: "acelerado", score: 90, feedback: "'Acelerado' es rápido, pero carece del matiz de descontrol o locura." },
            { word: "veloz", score: 85, feedback: "'Veloz' solo denota rapidez." },
            { word: "alocado", score: 92, feedback: "'Alocado' implica falta de cordura, pero puede ser muy informal." },
            { word: "dionisíaco", score: 100, feedback: "¡Perfecto! 'Dionisíaco' (relativo a Dionisio, dios del éxtasis) sugiere un ritmo caótico, orgiástico y agotador que trasciende la mera velocidad." }
        ],
        bestAnswer: "dionisíaco",
        explanation: "Un ritmo de vida 'dionisíaco' es una espiral de actividad desbordante y caótica, que consume energía en un éxtasis agotador de productividad y estímulos."
    },
    {
        id: "es-115",
        sentence: "La luz del faro en la noche tormentosa era intermitente pero confortante.",
        targetWord: "intermitente",
        targetWordIndex: 10,
        options: [
            { word: "parpadeante", score: 95, feedback: "'Parpadeante' se enciende y apaga rápidamente, muy descriptivo." },
            { word: "alternante", score: 85, feedback: "'Alternante' se sucede de forma alternativa, pero es un término más técnico y frío." },
            { word: "cíclica", score: 88, feedback: "'Cíclica' se repite en ciclos, pero no especifica la brevedad de los intervalos." },
            { word: "estróbica", score: 100, feedback: "¡Perfecto! 'Estróbica' (como un estroboscopio) emite destellos cortos y regulares, capturando la cualidad mecánica y guiadora de la luz del faro." }
        ],
        bestAnswer: "estróbica",
        explanation: "Una luz 'estróbica' corta la oscuridad con destellos precisos y rítmicos, creando un patrón de presencia y ausencia que es a la vez señal de advertencia y compañía."
    },
    {
        id: "es-116",
        sentence: "La interpretación del actor del personaje histórico fue respetuosa con los hechos conocidos.",
        targetWord: "respetuosa",
        targetWordIndex: 10,
        options: [
            { word: "fiel", score: 92, feedback: "'Fiel' se ajusta a la verdad, pero puede no conllevar el matiz de deferencia." },
            { word: "ajustada", score: 88, feedback: "'Ajustada' se ciñe a los parámetros, es más neutral." },
            { word: "rigurosa", score: 95, feedback: "'Rigurosa' es estricta y meticulosa en el seguimiento de las fuentes." },
            { word: "piadosa", score: 100, feedback: "¡Perfecto! 'Piadosa' (en sentido secular) muestra un cuidado reverencial hacia la figura histórica, evitando la especulación sensacionalista." }
        ],
        bestAnswer: "piadosa",
        explanation: "Una interpretación 'piadosa' trata la memoria histórica con un respeto casi sagrado, privilegiando la integridad del personaje sobre el drama o la simplificación."
    },
    {
        id: "es-117",
        sentence: "La diferencia entre las dos teorías era conceptual y no meramente terminológica.",
        targetWord: "conceptual",
        targetWordIndex: 8,
        options: [
            { word: "fundamental", score: 90, feedback: "'Fundamental' afecta a los cimientos, pero puede ser más amplio." },
            { word: "esencial", score: 88, feedback: "'Esencial' se refiere a la esencia, cercano pero menos específico de lo 'conceptual'." },
            { word: "sustantiva", score: 95, feedback: "'Sustantiva' es de sustancia, no de forma, muy apropiado." },
            { word: "epistémica", score: 100, feedback: "¡Perfecto! 'Epistémica' pertenece al ámbito del conocimiento y los marcos de pensamiento, describiendo una diferencia en los paradigmas mismos, no en las palabras." }
        ],
        bestAnswer: "epistémica",
        explanation: "Una diferencia 'epistémica' radica en las bases mismas de cómo se concibe y valida el conocimiento, separando visiones del mundo irreconciliables en su raíz."
    },
    {
        id: "es-118",
        sentence: "El impacto del meteorito fue violento y dejó un cráter visible desde el aire.",
        targetWord: "violent",
        targetWordIndex: 6,
        options: [
            { word: "brutal", score: 95, feedback: "'Brutal' es salvajemente violento, sin contención." },
            { word: "catastrófico", score: 90, feedback: "'Catastrófico' causa una catástrofe, lo cual es cierto, pero se enfoca en el resultado más que en la naturaleza del impacto." },
            { word: "devastador", score: 92, feedback: "'Devastador' arrasa con todo, también enfocado en el efecto." },
            { word: "hiperbólico", score: 100, feedback: "¡Perfecto! 'Hiperbólico' (en su sentido retórico de exageración, y por analogía con la 'hipervelocidad') sugiere una violencia de escala y magnitud que desafía la comprensión normal." }
        ],
        bestAnswer: "hiperbólico",
        explanation: "Un impacto 'hiperbólico' posee una violencia de tal magnitud que se sitúa fuera de los parámetros comunes, propia de eventos cósmicos que remodelan planetas."
    },
    {
        id: "es-119",
        sentence: "La relación entre los dos fenómenos era oscura y los científicos debatían su causalidad.",
        targetWord: "oscura",
        targetWordIndex: 8,
        options: [
            { word: "confusa", score: 85, feedback: "'Confusa' no es clara, pero es un término general." },
            { word: "ambigua", score: 90, feedback: "'Ambigua' admite más de una interpretación." },
            { word: "enigmática", score: 95, feedback: "'Enigmática' es misteriosa y parece contener un acertijo." },
            { word: "esotérica", score: 100, feedback: "¡Perfecto! 'Esotérica' es accesible solo para iniciados, describiendo una relación tan compleja y especializada que solo unos pocos pueden pretender descifrarla." }
        ],
        bestAnswer: "esotérica",
        explanation: "Una relación 'esotérica' en ciencia está velada por capas de complejidad y conocimiento especializado, haciendo que su naturaleza sea opaca para el no experto."
    },
    {
        id: "es-120",
        sentence: "Su elogio del competidor fue generoso y habló mucho de su carácter.",
        targetWord: "generoso",
        targetWordIndex: 6,
        options: [
            { word: "magnánimo", score: 100, feedback: "¡Perfecto! 'Magnánimo' muestra grandeza de ánimo al elogiar a un rival, trascendiendo el interés personal para reconocer el mérito ajeno." },
            { word: "bondadoso", score: 85, feedback: "'Bondadoso' es de buen corazón, pero es más general y menos enfático en el contexto de rivalidad." },
            { word: "desinteresado", score: 90, feedback: "'Desinteresado' carece de interés propio, pero puede no captar la nobleza activa del elogio." },
            { word: "laudatorio", score: 88, feedback: "'Laudatorio' está lleno de alabanzas, pero no necesariamente implica generosidad hacia un rival." }
        ],
        bestAnswer: "magnánimo",
        explanation: "Un elogio 'magnánimo' es un acto de nobleza competitiva, donde la admiración por el otro prevalece sobre el instinto de menosprecio, revelando una sólida integridad."
    },
    {
        id: "es-121",
        sentence: "La transición hacia una economía digital es inevitable y ya está en marcha.",
        targetWord: "inevitable",
        targetWordIndex: 8,
        options: [
            { word: "imparable", score: 92, feedback: "'Imparable' no puede ser detenida, lo cual es cierto, pero se enfoca en la resistencia." },
            { word: "irreversible", score: 95, feedback: "'Irreversible' no puede volver atrás, enfatizando el cambio de estado." },
            { word: "inexorable", score: 100, feedback: "¡Perfecto! 'Inexorable' es implacable, que no se puede evitar con súplicas o razones, como una fuerza del destino o de la historia." },
            { word: "segura", score: 80, feedback: "'Segura' es cierta, pero es un término débil y poco evocador." }
        ],
        bestAnswer: "inexorable",
        explanation: "Una transición 'inexorable' avanza con la fría e implacable lógica del progreso tecnológico, indiferente a los deseos o resistencias que encuentre."
    },
    {
        id: "es-122",
        sentence: "La textura de la escultura era rugosa, invitando al tacto.",
        targetWord: "rugosa",
        targetWordIndex: 6,
        options: [
            { word: "áspera", score: 90, feedback: "'Áspera' es áspera al tacto, pero puede ser desagradable, mientras que 'rugosa' puede ser interesante." },
            { word: "tactil", score: 85, feedback: "'Tactil' invita al tacto, pero describe el efecto, no la textura en sí." },
            { word: "granulada", score: 95, feedback: "'Granulada' tiene granos, una rugosidad específica." },
            { word: "strigilada", score: 100, feedback: "¡Perfecto! 'Strigilada' (con estrías o surcos, como las dejadas por un estrígilo) denota una rugosidad con un patrón, artística e intencional." }
        ],
        bestAnswer: "strigilada",
        explanation: "Una textura 'strigilada' presenta una rugosidad canalizada y rítmica, creada deliberadamente para interactuar con la luz y la mano, más allá de la simple aspereza."
    },
    {
        id: "es-123",
        sentence: "Su negativa a participar en el proyecto fue firme y sin ambages.",
        targetWord: "firme",
        targetWordIndex: 6,
        options: [
            { word: "rotunda", score: 95, feedback: "'Rotunda' es categórica y redonda, sin dejar resquicios." },
            { word: "decidida", score: 88, feedback: "'Decidida' muestra determinación, pero puede no ser tan terminante." },
            { word: "inflexible", score: 92, feedback: "'Inflexible' no cede, enfatizando la rigidez." },
            { word: "apodíctica", score: 100, feedback: "¡Perfecto! 'Apodíctica' (en lógica, necesariamente verdadera) describe una negativa expresada con tal seguridad y contundencia que se presenta como un axioma incuestionable." }
        ],
        bestAnswer: "apodíctica",
        explanation: "Una negativa 'apodíctica' se enuncia no como una preferencia, sino como una verdad lógica evidente por sí misma, cerrando cualquier posibilidad de discusión."
    },
    {
        id: "es-124",
        sentence: "La atmósfera en la vieja biblioteca era silenciosa y propicia para la concentración.",
        targetWord: "propicia",
        targetWordIndex: 10,
        options: [
            { word: "favorable", score: 90, feedback: "'Favorable' es beneficiosa, pero es un término común." },
            { word: "idónea", score: 92, feedback: "'Idónea' es la más adecuada para un fin." },
            { word: "conducente", score: 95, feedback: "'Conducente' conduce o lleva hacia un fin, como la concentración." },
            { word: "eleusina", score: 100, feedback: "¡Perfecto! 'Eleusina' (como los misterios de Eleusis) sugiere un ambiente solemne, sagrado y misteriosamente fértil para el trabajo intelectual profundo." }
        ],
        bestAnswer: "eleusina",
        explanation: "Una atmósfera 'eleusina' posee el silencio reverencial y la carga de potencial revelación de un lugar de culto, ideal para la inmersión mental."
    },
    {
        id: "es-125",
        sentence: "El daño al ecosistema marino fue extenso y sus efectos perdurarán décadas.",
        targetWord: "extenso",
        targetWordIndex: 7,
        options: [
            { word: "amplio", score: 85, feedback: "'Amplio' abarca un área grande, pero es menos dramático." },
            { word: "vastísimo", score: 90, feedback: "'Vastísimo' es muy vasto, superlativo adecuado." },
            { word: "generalizado", score: 95, feedback: "'Generalizado' se ha extendido por todas partes, implicando una afectación completa." },
            { word: "pan-oceánico", score: 100, feedback: "¡Perfecto! 'Pan-oceánico' (que abarca todo el océano) describe un daño de escala global, que trasciende regiones específicas." }
        ],
        bestAnswer: "pan-oceánico",
        explanation: "Un daño 'pan-oceánico' es de una magnitud tal que compromete la salud y el equilibrio de los sistemas marinos a escala planetaria."
    },
    {
        id: "es-126",
        sentence: "Su sonrisa al recibir la noticia fue irónica y escondía su verdadera decepción.",
        targetWord: "irónica",
        targetWordIndex: 8,
        options: [
            { word: "burlona", score: 90, feedback: "'Burlona' se mofa, pero puede ser más abiertamente hostil que irónica." },
            { word: "sardónica", score: 95, feedback: "'Sardónica' es de burla amarga y despreciativa, muy cercana." },
            { word: "cínica", score: 88, feedback: "'Cínica' muestra desconfianza en los motivos humanos, pero no siempre implica ocultamiento." },
            { word: "eirónica", score: 100, feedback: "¡Perfecto! 'Eirónica' (de 'eironeia', la disimulación socrática) es una sonrisa que deliberadamente oculta el verdadero sentimiento bajo una apariencia de aprobación o simpleza." }
        ],
        bestAnswer: "eirónica",
        explanation: "Una sonrisa 'eirónica' es un instrumento de ocultamiento retórico, que permite al que sonríe mantener una distancia crítica entre su sentimiento real y la percepción ajena."
    },
    {
        id: "es-127",
        sentence: "La calidad del sonido del antiguo vinilo era cálida, a diferencia de la frialdad digital.",
        targetWord: "cálida",
        targetWordIndex: 9,
        options: [
            { word: "austral", score: 70, feedback: "'Austral' se refiere al sur, no aplica aquí." },
            { word: "análoga", score: 85, feedback: "'Análoga' describe la tecnología, no la cualidad perceptual del sonido." },
            { word: "orgánica", score: 95, feedback: "'Orgánica' sugiere un sonido natural, no mecánico, con imperfecciones que lo humanizan." },
            { word: "vibrátil", score: 100, feedback: "¡Perfecto! 'Vibrátil' está lleno de vibraciones ricas y armónicas, que dan una sensación de presencia y cuerpo 'cálido' al sonido." }
        ],
        bestAnswer: "vibrátil",
        explanation: "Un sonido 'vibrátil' resuena con una complejidad de armónicos y sutiles distorsiones que lo percibimos como cálido, vivo y con textura, frente a la precisión estéril."
    },
    {
        id: "es-128",
        sentence: "La descripción del paisaje en la novela era vívida y transportaba al lector.",
        targetWord: "vívida",
        targetWordIndex: 7,
        options: [
            { word: "viva", score: 90, feedback: "'Viva' da sensación de vida, pero es más general." },
            { word: "gráfica", score: 88, feedback: "'Gráfica' es detallada y explícita, pero puede carecer de la cualidad evocadora." },
            { word: "plástica", score: 95, feedback: "'Plástica' tiene relieve y forma, como una escultura, muy visual." },
            { word: "hipnagógica", score: 100, feedback: "¡Perfecto! 'Hipnagógica' (del estado entre la vigilia y el sueño) describe una descripción tan vívida que induce una experiencia casi alucinatoria o de sueño lúcido." }
        ],
        bestAnswer: "hipnagógica",
        explanation: "Una descripción 'hipnagógica' borra los límites entre la página y la percepción, sumergiendo al lector en una realidad alternativa con la inmediatez de un sueño."
    },
    {
        id: "es-129",
        sentence: "La crítica hacia su trabajo fue despiadada y lo sumió en la duda.",
        targetWord: "despiadada",
        targetWordIndex: 7,
        options: [
            { word: "cruel", score: 92, feedback: "'Cruel' inflige sufrimiento, pero puede ser más emocional que intelectual." },
            { word: "implacable", score: 95, feedback: "'Implacable' no da tregua, persiguiendo cada fallo." },
            { word: "sangrienta", score: 85, feedback: "'Sangrienta' es metafóricamente violenta, pero es muy coloquial." },
            { word: "anatemática", score: 100, feedback: "¡Perfecto! 'Anatemática' (como un anatema) es una condena formal y absoluta, que excluye y estigmatiza el trabajo, no solo lo critica." }
        ],
        bestAnswer: "anatemática",
        explanation: "Una crítica 'anatemática' es una excomunión intelectual, diseñada no para corregir sino para destruir la credibilidad y el valor de la obra en la comunidad."
    },
    {
        id: "es-130",
        sentence: "La simplicidad del diseño japonés era elegante y funcional.",
        targetWord: "elegante",
        targetWordIndex: 9,
        options: [
            { word: "refinada", score: 92, feedback: "'Refinada' es culta y sin vulgaridad, muy cercano." },
            { word: "sobria", score: 90, feedback: "'Sobria' es moderada y sin excesos, parte de la elegancia." },
            { word: "estilizada", score: 88, feedback: "'Estilizada' sigue un estilo determinado, pero no necesariamente es elegante." },
            { word: "sabi", score: 100, feedback: "¡Perfecto! 'Sabi' (concepto estético japonés) encuentra la belleza elegante en la simplicidad austera, la imperfección sutil y el paso del tiempo." }
        ],
        bestAnswer: "sabi",
        explanation: "La elegancia 'sabi' es una belleza tranquila y melancólica que reside en lo modesto, lo rústico y lo atemporal, más que en el ornamento o la novedad."
    },
    {
        id: "es-131",
        sentence: "El muro que dividía las propiedades era alto e infranqueable.",
        targetWord: "alto",
        targetWordIndex: 6,
        options: [
            { word: "elevado", score: 85, feedback: "'Elevado' está a gran altura, pero es un sinónimo directo." },
            { word: "colosal", score: 95, feedback: "'Colosal' es de tamaño gigantesco, implicando una escala sobrehumana." },
            { word: "imponente", score: 90, feedback: "'Imponente' inspira respeto o temor por su apariencia." },
            { word: "babilónico", score: 100, feedback: "¡Perfecto! 'Babilónico' (como los muros de Babilonia) evoca una construcción monumental, legendaria en su altura y propósito de separación." }
        ],
        bestAnswer: "babilónico",
        explanation: "Un muro 'babilónico' es una barrera arquitectónica de proporciones míticas, diseñada no solo para separar, sino para afirmar poder y crear una división absoluta."
    },
    {
        id: "es-132",
        sentence: "Su reacción a la provocación fue comedida, demostrando un gran autocontrol.",
        targetWord: "comedida",
        targetWordIndex: 6,
        options: [
            { word: "moderada", score: 90, feedback: "'Moderada' evita los extremos, pero puede ser pasiva." },
            { word: "contenida", score: 95, feedback: "'Contenida' reprime una reacción más fuerte, lo cual implica autocontrol." },
            { word: "prudente", score: 88, feedback: "'Prudente' actúa con cautela, pero no específicamente ante una provocación." },
            { word: "estoica", score: 100, feedback: "¡Perfecto! 'Estoica' muestra una serenidad impasible frente a la adversidad, fruto de una disciplina filosófica sobre las emociones." }
        ],
        bestAnswer: "estoica",
        explanation: "Una reacción 'estoica' es el producto de un entrenamiento interior que desactiva las pasiones, respondiendo a la ofensa con ecuanimidad racional."
    },
    {
        id: "es-133",
        sentence: "El parecido entre el retrato y el modelo era asombroso.",
        targetWord: "asombroso",
        targetWordIndex: 8,
        options: [
            { word: "sorprendente", score: 90, feedback: "'Sorprendente' causa sorpresa, pero es un término más leve." },
            { word: "pasmoso", score: 92, feedback: "'Pasmoso' deja pasmado, muy cercano." },
            { word: "verosímil", score: 85, feedback: "'Verosímil' parece verdadero, pero no necesariamente hasta el asombro." },
            { word: "espejeante", score: 100, feedback: "¡Perfecto! 'Espejeante' (que refleja como un espejo) sugiere una fidelidad tan exacta que el retrato se convierte en un doble especular del modelo." }
        ],
        bestAnswer: "espejeante",
        explanation: "Un parecido 'espejeante' trasciende la semejanza para alcanzar una identidad casi óptica, donde la representación y lo representado se confunden."
    },
    {
        id: "es-134",
        sentence: "La lluvia sobre el tejado de zinc producía un sonido monótono y arrullador.",
        targetWord: "monótono",
        targetWordIndex: 10,
        options: [
            { word: "constante", score: 88, feedback: "'Constante' no varía, pero no implica necesariamente efecto hipnótico." },
            { word: "uniforme", score: 85, feedback: "'Uniforme' es siempre igual, similar a constante." },
            { word: "incesante", score: 90, feedback: "'Incesante' no cesa, enfatizando la continuidad." },
            { word: "martilleante", score: 100, feedback: "¡Perfecto! 'Martilleante' repite con la regularidad rítmica de un martilleo, creando una monotonía que puede ser tanto monótona como arrulladora." }
        ],
        bestAnswer: "martilleante",
        explanation: "Un sonido 'martilleante' establece un ritmo percusivo y persistente que, por su misma regularidad, puede inducir un estado de trance o somnolencia."
    },
    {
        id: "es-135",
        sentence: "La traición de su aliado más cercano fue dolorosa e inesperada.",
        targetWord: "dolorosa",
        targetWordIndex: 7,
        options: [
            { word: "doliente", score: 80, feedback: "'Doliente' es el que siente dolor, no lo que lo causa." },
            { word: "lacerante", score: 95, feedback: "'Lacerante' hiere profundamente, como un corte." },
            { word: "punzante", score: 92, feedback: "'Punzante' es un dolor agudo y penetrante." },
            { word: "ulcerosa", score: 100, feedback: "¡Perfecto! 'Ulcerosa' (como una úlcera) describe un dolor corrosivo que carcome desde dentro, lento y profundamente destructivo, como la traición de un cercano." }
        ],
        bestAnswer: "ulcerosa",
        explanation: "Una traición 'ulcerosa' no es un golpe limpio, sino una herida que se encona, minando la confianza y el bienestar desde los cimientos de la relación."
    },
    {
        id: "es-136",
        sentence: "El contraste entre la riqueza y la pobreza en la ciudad era marcado y chocante.",
        targetWord: "marcado",
        targetWordIndex: 10,
        options: [
            { word: "notorio", score: 90, feedback: "'Notorio' es evidente y conocido, pero puede no implicar el efecto emocional de 'chocante'." },
            { word: "pronunciado", score: 92, feedback: "'Pronunciado' es muy acentuado, una diferencia grande." },
            { word: "abismal", score: 95, feedback: "'Abismal' es como un abismo, enorme y profundo." },
            { word: "maniqueo", score: 100, feedback: "¡Perfecto! 'Maniqueo' presenta un contraste absoluto entre el bien y el mal, lo blanco y lo negro, sin matices, resultando por ello especialmente chocante y moralmente cargado." }
        ],
        bestAnswer: "maniqueo",
        explanation: "Un contraste 'maniqueo' divide la realidad en dos campos opuestos e irreconciliables, haciendo que la proximidad de la riqueza y la pobreza no sea solo económica, sino éticamente escandalosa."
    },
    {
        id: "es-137",
        sentence: "El aroma a pan recién horneado que salía de la tienda era irresistible.",
        targetWord: "irresistible",
        targetWordIndex: 12,
        options: [
            { word: "tentador", score: 95, feedback: "'Tentador' tienta y atrae fuertemente, muy adecuado." },
            { word: "embriagador", score: 92, feedback: "'Embriagador' marea por su intensidad, pero puede aplicarse a olores menos agradables." },
            { word: "seductor", score: 90, feedback: "'Seductor' atrae con arte, pero es más común para personas o ideas." },
            { word: "pancrático", score: 100, feedback: "¡Perfecto! 'Pancrático' (que tiene todo el poder) ejerce un dominio total sobre los sentidos y la voluntad, haciendo que la resistencia sea imposible." }
        ],
        bestAnswer: "pancrático",
        explanation: "Un aroma 'pancrático' es un señor absoluto del olfato, un estímulo sensorial que anula el libre albedrío y obliga a la rendición placentera."
    },
    {
        id: "es-138",
        sentence: "La defensa del abogado en el juicio fue sólida y basada en pruebas forenses.",
        targetWord: "sólida",
        targetWordIndex: 7,
        options: [
            { word: "firme", score: 90, feedback: "'Firme' es fuerte y que no cede, pero es menos específica en construcción." },
            { word: "robusta", score: 92, feedback: "'Robusta' es fuerte y resistente, buena metáfora." },
            { word: "consistente", score: 95, feedback: "'Consistente' no tiene contradicciones internas y es coherente." },
            { word: "inexpugnable", score: 100, feedback: "¡Perfecto! 'Inexpugnable' (que no puede ser tomado por asalto) describe una defensa construida como una fortaleza, imposible de derribar por la acusación." }
        ],
        bestAnswer: "inexpugnable",
        explanation: "Una defensa 'inexpugnable' es una estructura argumental tan bien fortificada con pruebas y lógica que se presenta como impenetrable para cualquier contraargumento."
    },
    {
        id: "es-139",
        sentence: "La moda de esa década era extravagante y llena de color.",
        targetWord: "extravagante",
        targetWordIndex: 7,
        options: [
            { word: "estrafalaria", score: 95, feedback: "'Estrafalaria' es chocante y ridícula por lo extravagante, a menudo con tono despectivo." },
            { word: "excéntrica", score: 92, feedback: "'Excéntrica' se aparta de la norma, pero puede ser más sofisticada." },
            { word: "ostentosa", score: 88, feedback: "'Ostentosa' hace alarde de riqueza, que puede ser parte de lo extravagante." },
            { word: "barroca", score: 100, feedback: "¡Perfecto! 'Barroca' denota un estilo recargado, exuberante y teatral, donde el exceso y el ornamento son la norma, perfecto para describir moda." }
        ],
        bestAnswer: "barroca",
        explanation: "Una moda 'barroca' rechaza la simplicidad en favor de la abundancia decorativa, los contrastes fuertes y una expresión teatral de la individualidad a través del vestir."
    },
    {
        id: "es-140",
        sentence: "La conexión del poeta con la naturaleza era profunda y fuente de su inspiración.",
        targetWord: "profunda",
        targetWordIndex: 7,
        options: [
            { word: "íntima", score: 95, feedback: "'Íntima' es muy cercana y personal, casi privada." },
            { word: "radical", score: 85, feedback: "'Radical' va a la raíz, pero es un término más filosófico." },
            { word: "cimera", score: 80, feedback: "'Cimera' es de la cima, lo contrario de profunda." },
            { word: "panteísta", score: 100, feedback: "¡Perfecto! 'Panteísta' (relativo al panteísmo) describe una conexión tan profunda que disuelve los límites entre el yo y el universo natural, viendo lo divino en todo." }
        ],
        bestAnswer: "panteísta",
        explanation: "Una conexión 'panteísta' es una identificación mística con la totalidad de la naturaleza, donde cada elemento del mundo exterior se convierte en parte del alma y la voz del poeta."
    },
    {
        id: "es-141",
        sentence: "La implementación del nuevo software fue problemática y causó retrasos.",
        targetWord: "problemática",
        targetWordIndex: 7,
        options: [
            { word: "complicada", score: 90, feedback: "'Complicada' tiene dificultades, pero es un término neutro." },
            { word: "accidentada", score: 95, feedback: "'Accidentada' estuvo llena de contratiempos e imprevistos." },
            { word: "tortuosa", score: 92, feedback: "'Tortuosa' es sinuosa y llena de obstáculos, una buena metáfora." },
            { word: "sísifa", score: 100, feedback: "¡Perfecto! 'Sísifa' (como el trabajo de Sísifo) describe una implementación donde cada avance parece revertirse, un esfuerzo repetitivo y frustrante que no culmina." }
        ],
        bestAnswer: "sísifa",
        explanation: "Una implementación 'sísifa' es un ciclo de avances aparentes seguidos de retrocesos, haciendo que el progreso sea una ilusión y el esfuerzo, una condena."
    },
    {
        id: "es-142",
        sentence: "La respuesta del oráculo en la tragedia era ambigua y abierta a interpretación.",
        targetWord: "ambigua",
        targetWordIndex: 7,
        options: [
            { word: "cryptica", score: 95, feedback: "'Críptica' es enigmática y difícil de descifrar." },
            { word: "equívoca", score: 90, feedback: "'Equívoca' tiene más de un significado posible." },
            { word: "velada", score: 88, feedback: "'Velada' está cubierta por un velo, no es clara." },
            { word: "anfibológica", score: 100, feedback: "¡Perfecto! 'Anfibológica' contiene una ambigüedad sintáctica deliberada, donde la estructura de la frase permite (y quizás pretende) dos lecturas opuestas." }
        ],
        bestAnswer: "anfibológica",
        explanation: "Una respuesta 'anfibológica' es una trampa lingüística tendida por el oráculo, cuyo poder reside precisamente en que el consultante oye en ella la confirmación de sus propios temores o deseos."
    },
    {
        id: "es-143",
        sentence: "La cooperación entre los dos equipos de investigación fue fructífera y produjo hallazgos importantes.",
        targetWord: "fructífera",
        targetWordIndex: 10,
        options: [
            { word: "productiva", score: 92, feedback: "'Productiva' genera productos o resultados, es un sinónimo funcional." },
            { word: "fértil", score: 95, feedback: "'Fértil' es generativa y con potencial de crecimiento, muy cercano." },
            { word: "exitosa", score: 88, feedback: "'Exitosa' tuvo éxito, pero puede no enfatizar el proceso colaborativo." },
            { word: "sinérgica", score: 100, feedback: "¡Perfecto! 'Sinérgica' produce un resultado mayor que la suma de las partes individuales, capturando la esencia de una cooperación ideal." }
        ],
        bestAnswer: "sinérgica",
        explanation: "Una cooperación 'sinérgica' crea un espacio intelectual donde las ideas se combinan y potencian mutuamente, generando un conocimiento nuevo e inaccesible para cada equipo por separado."
    },
    {
        id: "es-144",
        sentence: "El peso de la responsabilidad sobre sus hombros era enorme y constante.",
        targetWord: "enorme",
        targetWordIndex: 8,
        options: [
            { word: "inmenso", score: 90, feedback: "'Inmenso' es muy grande, pero es un término común." },
            { word: "colosal", score: 92, feedback: "'Colosal' es de tamaño descomunal, como una estatua colosal." },
            { word: "agobiante", score: 95, feedback: "'Agobiante' abruma y oprime, describiendo el efecto psicológico." },
            { word: "atlas", score: 100, feedback: "¡Perfecto! 'Atlas' (como el titán que carga el mundo) evoca la imagen arquetípica de un peso cósmico y eterno sobre los hombros." }
        ],
        bestAnswer: "atlas",
        explanation: "Un peso 'atlas' es una carga de proporciones míticas, un destino de soportar algo esencial para el orden del mundo, combinando magnitud física con significado existencial."
    },
    {
        id: "es-145",
        sentence: "La luz del atardecer se filtraba entre las nubes de manera dramática.",
        targetWord: "dramática",
        targetWordIndex: 12,
        options: [
            { word: "espectacular", score: 92, feedback: "'Espectacular' es impresionante y llama la atención." },
            { word: "teatral", score: 95, feedback: "'Teatral' es propia del teatro, exagerada y efectista." },
            { word: "vívida", score: 88, feedback: "'Vívida' es intensa y llena de vida, pero no necesariamente dramática." },
            { word: "rembrandtesca", score: 100, feedback: "¡Perfecto! 'Rembrandtesca' (como la pintura de Rembrandt) describe un juego de luces y sombras contrastado, emotivo y cargado de significado, no solo belleza." }
        ],
        bestAnswer: "rembrandtesca",
        explanation: "Una luz 'rembrandtesca' utiliza el claroscuro para crear drama visual, donde los rayos de sol no solo iluminan, sino que revelan, ocultan y cargan la escena de pathos."
    },
    {
        id: "es-146",
        sentence: "Su desprecio por las convenciones sociales era absoluto y deliberado.",
        targetWord: "absoluto",
        targetWordIndex: 7,
        options: [
            { word: "total", score: 85, feedback: "'Total' es completo, pero menos enfático." },
            { word: "radical", score: 95, feedback: "'Radical' va a la raíz, rechazando los fundamentos mismos." },
            { word: "categórico", score: 92, feedback: "'Categórico' es afirmado sin condiciones ni excepciones." },
            { word: "nietzscheano", score: 100, feedback: "¡Perfecto! 'Nietzscheano' implica un desprecio activo y transgresor por los valores establecidos, en un intento de crear nuevos valores más allá del bien y el mal convencionales." }
        ],
        bestAnswer: "nietzscheano",
        explanation: "Un desprecio 'nietzscheano' no es mera rebeldía; es un proyecto filosófico de deconstrucción de la moral de rebaño, afirmando la voluntad individual frente a la tradición."
    },
    {
        id: "es-147",
        sentence: "La textura del terciopelo era suave y lujosa al tacto.",
        targetWord: "suave",
        targetWordIndex: 6,
        options: [
            { word: "tersa", score: 85, feedback: "'Tersa' es lisa y sin arrugas, pero no necesariamente suave (el vidrio es terso pero no suave)." },
            { word: "sedosa", score: 95, feedback: "'Sedosa' tiene la suavidad brillante de la seda, muy cercano." },
            { word: "mullida", score: 80, feedback: "'Mullida' es blanda y esponjosa, como un edredón, no como terciopelo." },
            { word: "afelpada", score: 100, feedback: "¡Perfecto! 'Afelpada' tiene la suavidad densa, aterciopelada y cálida específica del fieltro o, precisamente, del terciopelo." }
        ],
        bestAnswer: "afelpada",
        explanation: "Una textura 'afelpada' posee una suavidad profunda y tupida, donde la mano se hunde en una superficie densa de fibras cortas y uniformes, sinónimo de lujo táctil."
    },
    {
        id: "es-148",
        sentence: "El error en el manuscrito antiguo era antiguo y se había copiado repetidamente.",
        targetWord: "antiguo",
        targetWordIndex: 6,
        options: [
            { word: "viejo", score: 80, feedback: "'Viejo' es de edad avanzada, pero es un término simple." },
            { word: "arcano", score: 90, feedback: "'Arcano' es misterioso y secreto, pero no necesariamente viejo." },
            { word: "prístino", score: 85, feedback: "'Prístino' es original y puro, lo contrario de un error." },
            { word: "eutiquiano", score: 100, feedback: "¡Perfecto! 'Eutiquiano' (relativo a Eutiquio, un monje copista) denota un error de copia que data de los primeros manuscritos y se perpetúa a través de la tradición." }
        ],
        bestAnswer: "eutiquiano",
        explanation: "Un error 'eutiquiano' es una variante textual antigua, introducida por un copista temprano y luego reproducida mecánicamente por generaciones de escribas, volviéndose parte de la tradición."
    },
    {
        id: "es-149",
        sentence: "La fama del artista era efímera, eclipsada rápidamente por nuevas tendencias.",
        targetWord: "efímera",
        targetWordIndex: 7,
        options: [
            { word: "breve", score: 90, feedback: "'Breve' es de corta duración, pero carece del matiz poético y trágico." },
            { word: "pasajera", score: 92, feedback: "'Pasajera' dura poco y pasa, muy adecuado." },
            { word: "fugaz", score: 95, feedback: "'Fugaz' huye rápidamente, como un instante." },
            { word: "caduca", score: 100, feedback: "¡Perfecto! 'Caduca' está destinada a decaer y morir, como una hoja en otoño, sugiriendo un ciclo natural e inevitable de olvido." }
        ],
        bestAnswer: "caduca",
        explanation: "Una fama 'caduca' lleva consigo la semilla de su propia obsolescencia, siendo tan perecedera como las modas que la sostienen."
    },
    {
        id: "es-150",
        sentence: "La estrategia del general era astuta y tomó al enemigo por sorpresa.",
        targetWord: "astuta",
        targetWordIndex: 7,
        options: [
            { word: "sagaz", score: 92, feedback: "'Sagaz' es perspicaz y de juicio rápido." },
            { word: "ingeniosa", score: 90, feedback: "'Ingeniosa' es creativa e inteligente, pero puede no implicar el engaño táctico." },
            { word: "maquiavélica", score: 95, feedback: "'Maquiavélica' es inteligente y despiadada, priorizando el resultado sobre la moral." },
            { word: "metis", score: 100, feedback: "¡Perfecto! 'Metis' (la astucia práctica y flexible de la mitología griega) denota una inteligencia adaptativa, tramposa y efectiva para superar a un rival más fuerte." }
        ],
        bestAnswer: "metis",
        explanation: "Una estrategia 'metis' emplea la astucia, el engaño y el conocimiento profundo del contexto para volver las propias debilidades del enemigo en su contra, logrando victorias improbables."
    },
    {
        id: "es-151",
        sentence: "La erosión de las normas éticas en la empresa fue gradual pero inexorable.",
        targetWord: "gradual",
        targetWordIndex: 7,
        options: [
            { word: "progresiva", score: 90, feedback: "'Progresiva' avanza por pasos, pero puede tener connotación positiva de mejora, no aplicable aquí." },
            { word: "insidiosa", score: 95, feedback: "'Insidiosa' avanza de manera traicionera y oculta, muy adecuado para describir erosión moral." },
            { word: "paulatina", score: 85, feedback: "'Paulatina' es lenta y por etapas, sinónimo cercano pero menos literario." },
            { word: "secular", score: 100, feedback: "¡Perfecto! 'Secular' (en sentido de 'seculum', siglo) ocurre a lo largo de un período prolongado, dando una dimensión histórica a la decadencia." }
        ],
        bestAnswer: "secular",
        explanation: "Un proceso 'secular' se mide en escalas de tiempo que trascienden lo personal, sugiriendo que la corrosión ética es un fenómeno generacional, no un mero accidente."
    },
    {
        id: "es-152",
        sentence: "Su análisis de la crisis geopolítica fue lúcido y anticipó eventos futuros.",
        targetWord: "lúcido",
        targetWordIndex: 7,
        options: [
            { word: "clarividente", score: 100, feedback: "¡Perfecto! 'Clarividente' implica una lucidez que traspasa el presente, viendo con claridad lo que está por venir." },
            { word: "perspicaz", score: 92, feedback: "'Perspicaz' es agudo y penetrante, pero no necesariamente predictivo." },
            { word: "inteligente", score: 80, feedback: "'Inteligente' es un término muy general que no capta la cualidad visionaria." },
            { word: "previsor", score: 88, feedback: "'Previsor' anticipa el futuro, pero por preparación, no necesariamente por lucidez analítica." }
        ],
        bestAnswer: "clarividente",
        explanation: "Un análisis 'clarividente' posee la rara capacidad de iluminar las tinieblas del futuro, deduciendo lo que aún no ha ocurrido a partir de una comprensión excepcional del presente."
    },
    {
        id: "es-153",
        sentence: "La resistencia del material a la corrosión era notable incluso en condiciones extremas.",
        targetWord: "notable",
        targetWordIndex: 8,
        options: [
            { word: "sobresaliente", score: 90, feedback: "'Sobresaliente' destaca por encima de lo normal, pero es un término común." },
            { word: "excepcional", score: 92, feedback: "'Excepcional' está fuera de lo común, muy cercano." },
            { word: "prodigiosa", score: 95, feedback: "'Prodigiosa' es extraordinaria hasta el punto de parecer maravillosa." },
            { word: "apoteósica", score: 100, feedback: "¡Perfecto! 'Apoteósica' (digna de una apoteosis, elevación a la categoría de dios) sugiere una resistencia tan heroica que trasciende los límites materiales." }
        ],
        bestAnswer: "apoteósica",
        explanation: "Una resistencia 'apoteósica' eleva las propiedades del material a un plano casi mítico, desafiando y venciendo fuerzas que normalmente destruirían cualquier cosa."
    },
    {
        id: "es-154",
        sentence: "La relación entre maestro y discípulo era intensa y a veces tormentosa.",
        targetWord: "intensa",
        targetWordIndex: 7,
        options: [
            { word: "vehemente", score: 95, feedback: "'Vehemente' es apasionada y ardiente, capturando la fuerza emocional." },
            { word: "fogosa", score: 90, feedback: "'Fogosa' es llena de fuego y pasión, pero puede ser más informal." },
            { word: "obsesiva", score: 85, feedback: "'Obsesiva' implica fijación enfermiza, lo cual puede ser parte pero no define toda la relación." },
            { word: "daimónica", score: 100, feedback: "¡Perfecto! 'Daimónica' (relacionada con el daimon, espíritu interior) describe una intensidad que brota de una conexión profunda, creativa y a veces conflictiva con las fuerzas internas de ambos." }
        ],
        bestAnswer: "daimónica",
        explanation: "Una relación 'daimónica' está animada por fuerzas interiores poderosas y a veces contradictorias, donde la enseñanza y el aprendizaje se vuelven un campo de batalla y fusión de espíritus."
    },
    {
        id: "es-155",
        sentence: "El estilo de su escritura era conciso y evitaba cualquier adorno innecesario.",
        targetWord: "conciso",
        targetWordIndex: 7,
        options: [
            { word: "breve", score: 85, feedback: "'Breve' es corto en extensión, pero puede serlo por falta de contenido, no por elección estilística." },
            { word: "lacónico", score: 95, feedback: "'Lacónico' expresa mucho con pocas palabras, con un matiz de sequedad o reticencia." },
            { word: "escultórico", score: 100, feedback: "¡Perfecto! 'Escultórico' sugiere que la prosa ha sido tallada como una escultura, eliminando todo material sobrante hasta dejar solo la forma esencial." },
            { word: "parco", score: 88, feedback: "'Parco' es moderado o escaso en el uso de palabras, pero puede implicar falta de generosidad." }
        ],
        bestAnswer: "escultórico",
        explanation: "Un estilo 'escultórico' es el resultado de un proceso de tallado intelectual, donde cada palabra es un golpe de cincel que revela la figura perfecta oculta en el bloque del pensamiento."
    },
    {
        id: "es-156",
        sentence: "La aceptación de su teoría por la comunidad científica fue renuente y llena de reservas.",
        targetWord: "renuente",
        targetWordIndex: 7,
        options: [
            { word: "reticente", score: 92, feedback: "'Reticente' muestra desgana o reserva al hablar o actuar." },
            { word: "tímida", score: 80, feedback: "'Tímida' es falta de confianza, pero no capta la resistencia activa." },
            { word: "reacia", score: 90, feedback: "'Reacia' muestra desgana o oposición a hacer algo." },
            { word: "a regañadientes", score: 100, feedback: "¡Perfecto! 'A regañadientes' (usado como adjetivo compuesto) implica una aceptación concedida con quejas, protestas internas y evidente desagrado." }
        ],
        bestAnswer: "a regañadientes",
        explanation: "Una aceptación 'a regañadientes' es aquella que se otorga contra la voluntad propia, fruto de la presión de la evidencia pero sin convicción ni entusiasmo."
    },
    {
        id: "es-157",
        sentence: "La luz de la vela en la habitación oscura era tenue pero acogedora.",
        targetWord: "tenue",
        targetWordIndex: 10,
        options: [
            { word: "débil", score: 85, feedback: "'Débil' carece de fuerza, pero tiene connotación negativa que no encaja con 'acogedora'." },
            { word: "tímida", score: 90, feedback: "'Tímida' es vacilante y poco atrevida, una personificación adecuada." },
            { word: "parva", score: 88, feedback: "'Parva' es escasa o insuficiente, pero es más cuantitativa." },
            { word: "umbral", score: 100, feedback: "¡Perfecto! 'Umbral' (como sustantivo usado adjetivamente) es la luz que marca el límite entre la visibilidad y la oscuridad, creando un espacio íntimo y protector." }
        ],
        bestAnswer: "umbral",
        explanation: "Una luz 'umbral' define el espacio seguro y habitable frente a la oscuridad circundante, siendo por naturaleza íntima, limitada y, por tanto, acogedora."
    },
    {
        id: "es-158",
        sentence: "Su conocimiento de los clásicos griegos era enciclopédico y a menudo pedante.",
        targetWord: "enciclopédico",
        targetWordIndex: 7,
        options: [
            { word: "vastísimo", score: 90, feedback: "'Vastísimo' es muy extenso, pero no implica el afán catalogador de 'enciclopédico'." },
            { word: "omnímodo", score: 92, feedback: "'Omnímodo' lo abarca todo, pero en poder o extensión, no necesariamente en conocimiento organizado." },
            { word: "pancrático", score: 95, feedback: "'Pancrático' tiene poder total, pero se aplica más al dominio que al saber." },
            { word: "alejandrino", score: 100, feedback: "¡Perfecto! 'Alejandrino' (como la biblioteca de Alejandría) evoca un saber que aspira a contener y clasificar todo el conocimiento, a veces de manera ostentosa y académica." }
        ],
        bestAnswer: "alejandrino",
        explanation: "Un conocimiento 'alejandrino' es una biblioteca mental, un archivo monumental que prioriza la acumulación y catalogación del saber, con el riesgo de volverse erudición árida."
    },
    {
        id: "es-159",
        sentence: "La reacción del mercado a la nueva regulación fue inmediata y desproporcionada.",
        targetWord: "desproporcionada",
        targetWordIndex: 11,
        options: [
            { word: "exagerada", score: 92, feedback: "'Exagerada' aumenta más de lo debido, pero es un término común." },
            { word: "desmesurada", score: 95, feedback: "'Desmesurada' carece de medida, es excesiva." },
            { word: "hiperbólica", score: 100, feedback: "¡Perfecto! 'Hiperbólica' (como la figura retórica) denota una exageración tan extrema que distorsiona la realidad, propia de los pánicos bursátiles." },
            { word: "catastrófica", score: 88, feedback: "'Catastrófica' implica un desastre, lo cual puede ser resultado, pero no describe la cualidad de la reacción misma." }
        ],
        bestAnswer: "hiperbólica",
        explanation: "Una reacción 'hiperbólica' del mercado amplifica el impacto de un evento hasta niveles irracionales, donde el miedo o la codicia crean una realidad financiera distorsionada."
    },
    {
        id: "es-160",
        sentence: "La belleza del gesto altruista era conmovedora y restauraba la fe en la humanidad.",
        targetWord: "conmovedora",
        targetWordIndex: 8,
        options: [
            { word: "emocionante", score: 90, feedback: "'Emocionante' despierta emociones, pero es menos específico." },
            { word: "enternecedora", score: 92, feedback: "'Enternecedora' ablanda el corazón, provocando ternura." },
            { word: "cármica", score: 100, feedback: "¡Perfecto! 'Cármica' (relacionado con el karma) sugiere una belleza que conmueve porque parece responder a un orden moral profundo, restaurando un equilibrio ético." },
            { word: "patética", score: 70, feedback: "'Patética' en español moderno tiene connotación negativa de lastimoso o ridículo." }
        ],
        bestAnswer: "cármica",
        explanation: "Una belleza 'cármica' actúa en un nivel trascendente, conmoviéndonos no solo estéticamente, sino porque parece confirmar la existencia de una justicia o bondad fundamental en el universo."
    },
    {
        id: "es-161",
        sentence: "La interpretación de los datos por el equipo rival era sesgada y tendenciosa.",
        targetWord: "sesgada",
        targetWordIndex: 8,
        options: [
            { word: "parcial", score: 92, feedback: "'Parcial' toma partido, pero puede ser inconsciente." },
            { word: "partidista", score: 90, feedback: "'Partidista' defiende los intereses de un grupo, similar a parcial." },
            { word: "interesada", score: 95, feedback: "'Interesada' persigue un interés particular, lo cual implica sesgo." },
            { word: "eisegética", score: 100, feedback: "¡Perfecto! 'Eisegética' (opuesto a exegética) introduce en los datos ideas preconcebidas, forzando la interpretación para que encaje con una conclusión predeterminada." }
        ],
        bestAnswer: "eisegética",
        explanation: "Una interpretación 'eisegética' no extrae significado de los datos, sino que les impone un significado externo, violando el principio básico del análisis objetivo."
    },
    {
        id: "es-162",
        sentence: "El impacto cultural de la serie de televisión fue masivo y global.",
        targetWord: "masivo",
        targetWordIndex: 8,
        options: [
            { word: "enorme", score: 85, feedback: "'Enorme' es muy grande, pero es un término genérico." },
            { word: "colosal", score: 90, feedback: "'Colosal' es de tamaño gigantesco, buena metáfora." },
            { word: "avalancha", score: 95, feedback: "'Avalancha' (usado como adjetivo) sugiere un impacto arrollador y repentino." },
            { word: "tsunámico", score: 100, feedback: "¡Perfecto! 'Tsunámico' describe una onda de impacto cultural que barre continentes, reorganizando el paisaje mediático y social a su paso." }
        ],
        bestAnswer: "tsunámico",
        explanation: "Un impacto 'tsunámico' no es solo grande; es una fuerza imparable que borra lo anterior y redefine las costas de la cultura popular a escala planetaria."
    },
    {
        id: "es-163",
        sentence: "Su compromiso con la causa ambiental era genuino y sin fisuras.",
        targetWord: "genuino",
        targetWordIndex: 8,
        options: [
            { word: "sincero", score: 92, feedback: "'Sincero' es honesto y sin engaño, muy cercano." },
            { word: "auténtico", score: 90, feedback: "'Auténtico' es real y no falso, sinónimo común." },
            { word: "verdadero", score: 85, feedback: "'Verdadero' se ajusta a la verdad, pero es menos aplicado a sentimientos." },
            { word: "alético", score: 100, feedback: "¡Perfecto! 'Alético' (del griego 'aletheia', verdad desocultada) denota una autenticidad que es un desvelamiento, una esencia que se manifiesta sin máscaras." }
        ],
        bestAnswer: "alético",
        explanation: "Un compromiso 'alético' es una verdad existencial que se revela en la acción, donde la persona y la causa se vuelven indistinguibles, sin espacio para la pose o el cálculo."
    },
    {
        id: "es-164",
        sentence: "El error en el protocolo de seguridad era crítico y ponía en riesgo a todos.",
        targetWord: "crítico",
        targetWordIndex: 7,
        options: [
            { word: "grave", score: 90, feedback: "'Grave' es serio e importante, pero es un término general." },
            { word: "letal", score: 95, feedback: "'Letal' puede causar la muerte, lo cual es extremo pero posible en seguridad." },
            { word: "decisivo", score: 85, feedback: "'Decisivo' determina un resultado, pero no necesariamente un riesgo." },
            { word: "existencial", score: 100, feedback: "¡Perfecto! 'Existencial' amenaza la propia existencia o supervivencia del sistema, llevando el riesgo al nivel máximo posible." }
        ],
        bestAnswer: "existencial",
        explanation: "Un error 'existencial' es aquel que, si se materializa, aniquila la función esencial del sistema, dejando solo consecuencias catastróficas."
    },
    {
        id: "es-165",
        sentence: "La rivalidad entre los dos estudios de arquitectura era legendaria y feroz.",
        targetWord: "legendaria",
        targetWordIndex: 8,
        options: [
            { word: "famosa", score: 85, feedback: "'Famosa' es conocida por muchos, pero carece de la dimensión mítica." },
            { word: "proverbial", score: 95, feedback: "'Proverbial' se ha convertido en proverbio o dicho popular, indicando que es ampliamente citada como ejemplo." },
            { word: "mítica", score: 92, feedback: "'Mítica' pertenece al mito, exagerada y heroica." },
            { word: "homérica", score: 100, feedback: "¡Perfecto! 'Homérica' (como las batallas de la Ilíada) eleva la rivalidad a la categoría de epopeya, con contendientes heroicos y una enemistad histórica." }
        ],
        bestAnswer: "homérica",
        explanation: "Una rivalidad 'homérica' trasciende la competencia profesional para entrar en el reino de la leyenda, donde cada enfrentamiento es una batalla cantada por la posteridad."
    },
    {
        id: "es-166",
        sentence: "La transparencia del agua en el arroyo era absoluta, pudiéndose ver el fondo con claridad.",
        targetWord: "absoluta",
        targetWordIndex: 7,
        options: [
            { word: "total", score: 85, feedback: "'Total' es completa, pero es un término menos poético." },
            { word: "perfecta", score: 90, feedback: "'Perfecta' no tiene defectos, aplicable." },
            { word: "cristalina", score: 95, feedback: "'Cristalina' es clara como el cristal, muy descriptivo." },
            { word: "diafanótica", score: 100, feedback: "¡Perfecto! 'Diafanótica' (que deja pasar la luz sin distorsión) describe una transparencia tan pura que el medio parece no existir, fundiendo visión y objeto." }
        ],
        bestAnswer: "diafanótica",
        explanation: "Una transparencia 'diafanótica' es la cualidad de lo que es completamente permeable a la mirada, donde el agua no es un velo, sino un espacio de pura visualidad."
    },
    {
        id: "es-167",
        sentence: "Su desdén por las críticas era olímpico y no se inmutaba ante los ataques.",
        targetWord: "olímpico",
        targetWordIndex: 7,
        options: [
            { word: "supremo", score: 90, feedback: "'Supremo' es el más alto, pero no capta la indiferencia serena." },
            { word: "imperturbable", score: 95, feedback: "'Imperturbable' no se altera, describiendo bien la actitud." },
            { word: "soberano", score: 92, feedback: "'Soberano' ejerce autoridad, lo cual puede ser parte del desdén." },
            { word: "estóico", score: 100, feedback: "¡Perfecto! 'Estóico' (de la filosofía estoica) implica una indiferencia racional hacia lo externo, considerando las críticas como irrelevantes para la virtud propia." }
        ],
        bestAnswer: "estóico",
        explanation: "Un desdén 'estóico' no es arrogancia, sino el fruto de una disciplina filosófica que sitúa el valor en lo interno y considera las opiniones ajenas como indiferentes."
    },
    {
        id: "es-168",
        sentence: "La complejidad de la ecuación matemática era abrumadora incluso para expertos.",
        targetWord: "abrumadora",
        targetWordIndex: 7,
        options: [
            { word: "apabullante", score: 92, feedback: "'Apabullante' deja sin aliento por su magnitud, muy similar." },
            { word: "descomunal", score: 90, feedback: "'Descomunal' es de tamaño monstruoso, buena metáfora." },
            { word: "intimidante", score: 88, feedback: "'Intimidante' asusta, lo cual puede ser un efecto." },
            { word: "fractálica", score: 100, feedback: "¡Perfecto! 'Fractálica' (como un fractal) sugiere una complejidad que se reproduce a diferentes escalas, donde cada simplificación revela nuevos niveles de dificultad." }
        ],
        bestAnswer: "fractálica",
        explanation: "Una complejidad 'fractálica' es intrínsecamente infinita, donde el intento de comprensión se enfrenta a capas de detalle que siempre escapan al dominio total."
    },
    {
        id: "es-169",
        sentence: "La adhesión del público a la nueva moda fue rápida y contagiosa.",
        targetWord: "contagiosa",
        targetWordIndex: 11,
        options: [
            { word: "epidémica", score: 95, feedback: "'Epidémica' se propaga como una enfermedad, metáfora potente para modas." },
            { word: "virulenta", score: 90, feedback: "'Virulenta' es muy infecciosa y agresiva, también adecuada." },
            { word: "imparable", score: 85, feedback: "'Imparable' no puede ser detenida, pero no describe el mecanismo de propagación." },
            { word: "memética", score: 100, feedback: "¡Perfecto! 'Memética' (como los memes) se propaga por imitación cultural, replicándose de mente en mente como un virus de ideas." }
        ],
        bestAnswer: "memética",
        explanation: "Una adhesión 'memética' sigue las leyes de la difusión cultural, donde la moda no se elige racionalmente, sino que se 'atrapa' del entorno social y se replica."
    },
    {
        id: "es-170",
        sentence: "La separación entre las dos versiones del texto era sutil pero crucial para la interpretación.",
        targetWord: "sutil",
        targetWordIndex: 8,
        options: [
            { word: "leve", score: 85, feedback: "'Leve' es de poca importancia, lo cual contradice 'crucial'." },
            { word: "tenue", score: 90, feedback: "'Tenue' es débil y poco intensa, adecuada para una diferencia pequeña." },
            { word: "imperceptible", score: 92, feedback: "'Imperceptible' no se puede percibir, pero si es crucial, de algún modo se percibe." },
            { word: "dialéctica", score: 100, feedback: "¡Perfecto! 'Dialéctica' (en sentido hegeliano) describe una diferencia que, aunque pequeña en apariencia, genera una oposición fundamental que cambia todo el significado." }
        ],
        bestAnswer: "dialéctica",
        explanation: "Una separación 'dialéctica' es una mínima contradicción semántica que, al ser reconocida, obliga a una síntesis superior y transforma completamente la comprensión del texto."
    },
    {
        id: "es-171",
        sentence: "El ritmo de la respiración durante el sueño profundo era regular y pausado.",
        targetWord: "regular",
        targetWordIndex: 9,
        options: [
            { word: "constante", score: 90, feedback: "'Constante' no varía, pero puede ser rápido o lento." },
            { word: "uniforme", score: 92, feedback: "'Uniforme' es siempre igual, similar a constante." },
            { word: "metrónomo", score: 100, feedback: "¡Perfecto! 'Metrónomo' (como el instrumento) denota una regularidad mecánica y perfectamente rítmica, propia de estados orgánicos profundos." },
            { word: "invariable", score: 88, feedback: "'Invariable' no cambia, pero es menos descriptivo." }
        ],
        bestAnswer: "metrónomo",
        explanation: "Un ritmo 'metrónomo' es la regularidad biológica en su estado más puro, una cadencia que marca el tiempo interno del cuerpo en reposo absoluto."
    },
    {
        id: "es-172",
        sentence: "La argumentación del fiscal en el juicio fue incisiva y dejó pocas dudas.",
        targetWord: "incisiva",
        targetWordIndex: 8,
        options: [
            { word: "aguda", score: 92, feedback: "'Aguda' es penetrante y perspicaz." },
            { word: "cortante", score: 90, feedback: "'Cortante' corta como un cuchillo, metáfora vívida." },
            { word: "contundente", score: 95, feedback: "'Contundente' aplasta las objeciones, combinando fuerza y precisión." },
            { word: "estilete", score: 100, feedback: "¡Perfecto! 'Estilete' (un puñal fino) describe una argumentación que hiere con precisión quirúrgica, encontrando y explotando los puntos débiles más pequeños." }
        ],
        bestAnswer: "estilete",
        explanation: "Una argumentación 'estilete' no golpea con fuerza bruta, sino que se introduce en las fisuras lógicas del caso contrario con elegancia mortal."
    },
    {
        id: "es-173",
        sentence: "La popularidad del movimiento artístico fue efímera, como un fuego fatuo.",
        targetWord: "efímera",
        targetWordIndex: 7,
        options: [
            { word: "breve", score: 88, feedback: "'Breve' es de corta duración, pero carece de la poética melancolía." },
            { word: "fugaz", score: 95, feedback: "'Fugaz' huye rápidamente, evoca lo instantáneo." },
            { word: "transitoria", score: 90, feedback: "'Transitoria' pasa, no es permanente." },
            { word: "fatuosa", score: 100, feedback: "¡Perfecto! 'Fatuosa' (como el fuego fatuo) es ilusoria, engañosa y de breve duración, brillando solo para desvanecerse sin dejar huella sólida." }
        ],
        bestAnswer: "fatuosa",
        explanation: "Una popularidad 'fatuosa' es un espectro, un brillo que atrae en la oscuridad pero que no corresponde a ninguna sustancia, apagándose cuando se intenta asirla."
    },
    {
        id: "es-174",
        sentence: "La precisión del reloj suizo era proverbial y se usaba como estándar.",
        targetWord: "proverbial",
        targetWordIndex: 7,
        options: [
            { word: "legendaria", score: 92, feedback: "'Legendaria' es famosa y exagerada en las leyendas." },
            { word: "notoria", score: 85, feedback: "'Notoria' es conocida, pero sin el matiz de ejemplo clásico." },
            { word: "axiomática", score: 100, feedback: "¡Perfecto! 'Axiomática' es tan evidente y aceptada que se considera un axioma, una verdad que no necesita demostración y sirve de base." },
            { word: "consabida", score: 88, feedback: "'Consabida' es sabida por todos, similar a notoria." }
        ],
        bestAnswer: "axiomática",
        explanation: "Una precisión 'axiomática' se ha convertido en el punto de referencia incuestionable, el dato conocido que fundamenta toda comparación posterior."
    },
    {
        id: "es-175",
        sentence: "La hostilidad entre las dos facciones era palpable y envenenaba el ambiente.",
        targetWord: "palpable",
        targetWordIndex: 8,
        options: [
            { word: "tangible", score: 95, feedback: "'Tangible' puede tocarse, metáfora muy fuerte para una emoción." },
            { word: "visible", score: 85, feedback: "'Visible' puede verse, pero es menos intenso." },
            { word: "ostensible", score: 90, feedback: "'Ostensible' se muestra abiertamente." },
            { word: "táctil", score: 100, feedback: "¡Perfecto! 'Táctil' apela específicamente al sentido del tacto, describiendo una hostilidad tan densa que parece ofrecer resistencia física." }
        ],
        bestAnswer: "táctil",
        explanation: "Una hostilidad 'táctil' es una presencia casi material en el aire, una presión que se siente sobre la piel y dificulta la respiración y el movimiento."
    },
    {
        id: "es-176",
        sentence: "La transformación del personaje a lo largo de la novela era radical y convincente.",
        targetWord: "radical",
        targetWordIndex: 8,
        options: [
            { word: "profunda", score: 90, feedback: "'Profunda' afecta lo esencial, pero puede ser gradual." },
            { word: "total", score: 85, feedback: "'Total' es completa, pero no implica cambio de naturaleza." },
            { word: "metamórfica", score: 100, feedback: "¡Perfecto! 'Metamórfica' implica un cambio de forma o naturaleza, como una metamorfosis, donde el personaje deviene algo cualitativamente diferente." },
            { word: "extrema", score: 88, feedback: "'Extrema' llega al límite, pero es un término vago." }
        ],
        bestAnswer: "metamórfica",
        explanation: "Una transformación 'metamórfica' es un renacimiento narrativo, un proceso donde la identidad del personaje se disuelve y reconfigura en una nueva forma de ser."
    },
    {
        id: "es-177",
        sentence: "La ignorancia del público sobre el tema era supina y preocupante.",
        targetWord: "supina",
        targetWordIndex: 7,
        options: [
            { word: "grande", score: 75, feedback: "'Grande' es un término muy simple e inespecífico." },
            { word: "abismal", score: 95, feedback: "'Abismal' es profunda como un abismo, muy gráfico." },
            { word: "crasa", score: 100, feedback: "¡Perfecto! 'Crasa' denota ignorancia grosera, culpable por su magnitud y por resultar de la indiferencia o negligencia." },
            { word: "extensa", score: 80, feedback: "'Extensa' se aplica a área, no a calidad de ignorancia." }
        ],
        bestAnswer: "crasa",
        explanation: "Una ignorancia 'crasa' es activa en su pasividad, un no-saber que desprecia el saber, volviéndose no solo ausencia de conocimiento, sino un vicio intelectual."
    },
    {
        id: "es-178",
        sentence: "La fluidez con la que hablaba cuatro idiomas era envidiable y fruto de años de estudio.",
        targetWord: "envidiable",
        targetWordIndex: 9,
        options: [
            { word: "admirable", score: 92, feedback: "'Admirable' merece admiración, pero no capta el deseo posesivo." },
            { word: "asombrosa", score: 90, feedback: "'Asombrosa' causa sorpresa, pero es neutra." },
            { word: "codiciada", score: 95, feedback: "'Codiciada' es deseada intensamente por otros, cercano a envidiable." },
            { word: "iresa", score: 100, feedback: "¡Perfecto! 'Iresa' (adjetivo poco común derivado de 'envidia') describe específicamente una cualidad tan destacada que inevitablemente provoca el sentimiento de envidia en los demás." }
        ],
        bestAnswer: "iresa",
        explanation: "Una habilidad 'iresa' es un logro que funciona como un espejo de las propias carencias ajenas, despertando no solo admiración, sino el deseo doloroso de poseerla."
    },
    {
        id: "es-179",
        sentence: "La desconexión entre su discurso y sus acciones era flagrante y minaba su credibilidad.",
        targetWord: "flagrante",
        targetWordIndex: 9,
        options: [
            { word: "evidente", score: 90, feedback: "'Evidente' es obvia, pero 'flagrante' añade el matiz de escándalo." },
            { word: "palmaria", score: 92, feedback: "'Palmaria' es tan clara que se ve con la palma de la mano, muy expresivo." },
            { word: "notoria", score: 88, feedback: "'Notoria' es conocida, similar a evidente." },
            { word: "cínica", score: 100, feedback: "¡Perfecto! 'Cínica' implica que la desconexión es tan descarada que parece despreciar la inteligencia de los demás, añadiendo una capa de desfachatez moral." }
        ],
        bestAnswer: "cínica",
        explanation: "Una desconexión 'cínica' no es un mero error; es una demostración de que los principios declarados son solo instrumental, destruyendo la credibilidad al revelar el cálculo detrás de las palabras."
    },
    {
        id: "es-180",
        sentence: "La adaptación cinematográfica de la novela fue fiel en espíritu aunque cambiara detalles.",
        targetWord: "fiel",
        targetWordIndex: 8,
        options: [
            { word: "leal", score: 88, feedback: "'Leal' mantiene fidelidad, pero se aplica más a personas." },
            { word: "ajustada", score: 85, feedback: "'Ajustada' se ciñe al original, pero es termino técnico." },
            { word: "respetuosa", score: 90, feedback: "'Respetuosa' muestra consideración, pero puede no captar la esencia." },
            { word: "isomórfica", score: 100, feedback: "¡Perfecto! 'Isomórfica' (que tiene la misma forma) describe una adaptación que preserva la estructura profunda y las relaciones esenciales, aunque cambie los elementos superficiales." }
        ],
        bestAnswer: "isomórfica",
        explanation: "Una adaptación 'isomórfica' busca un mapeo estructural con el original, donde la verdad de la obra no está en sus detalles, sino en el patrón de relaciones que los une."
    },
    {
        id: "es-181",
        sentence: "La oscuridad en la cueva era completa, sin un solo rayo de luz.",
        targetWord: "completa",
        targetWordIndex: 6,
        options: [
            { word: "absoluta", score: 95, feedback: "'Absoluta' es total y sin excepciones, muy cercano." },
            { word: "total", score: 90, feedback: "'Total' es entera, pero es un término menos enfático." },
            { word: "perfecta", score: 85, feedback: "'Perfecta' implica cualidad ideal, no necesariamente exhaustividad." },
            { word: "ctónica", score: 100, feedback: "¡Perfecto! 'Ctónica' (perteneciente a las profundidades de la tierra) evoca la oscuridad primordial, esencial y abisal de los reinos subterráneos." }
        ],
        bestAnswer: "ctónica",
        explanation: "Una oscuridad 'ctónica' es la negrura constitutiva del mundo inferior, una ausencia de luz que no es falta, sino una presencia sustancial y antigua."
    },
    {
        id: "es-182",
        sentence: "La eficacia del nuevo tratamiento médico era prometedora según los estudios preliminares.",
        targetWord: "prometedora",
        targetWordIndex: 9,
        options: [
            { word: "alentadora", score: 92, feedback: "'Alentadora' da esperanza y ánimo, similar." },
            { word: "esperanzadora", score: 90, feedback: "'Esperanzadora' infunde esperanza." },
            { word: "propicia", score: 85, feedback: "'Propicia' es favorable, pero menos específica para resultados futuros." },
            { word: "proleptica", score: 100, feedback: "¡Perfecto! 'Proleptica' (que anticipa) describe una eficacia que, aunque aún no confirmada, permite anticipar con buenas razones un resultado positivo futuro." }
        ],
        bestAnswer: "proleptica",
        explanation: "Una eficacia 'proleptica' es una promesa científica, una evidencia temprana que justifica saltar hacia adelante en el tiempo y actuar como si el éxito futuro ya estuviera garantizado."
    },
    {
        id: "es-183",
        sentence: "La dualidad en la personalidad del protagonista era fascinante y perturbadora.",
        targetWord: "fascinante",
        targetWordIndex: 8,
        options: [
            { word: "cautivadora", score: 92, feedback: "'Cautivadora' atrapa la atención, pero puede ser positiva sin mezcla." },
            { word: "inquietante", score: 88, feedback: "'Inquietante' perturba, pero no capta el hechizo." },
            { word: "seductora", score: 90, feedback: "'Seductora' atrae con arte, pero puede ser demasiado suave." },
            { word: "esquizomorfa", score: 100, feedback: "¡Perfecto! 'Esquizomorfa' (con forma de escisión) describe una fascinación que nace precisamente de la división interna, de la coexistencia de dos seres en uno." }
        ],
        bestAnswer: "esquizomorfa",
        explanation: "Una dualidad 'esquizomorfa' ejerce una atracción morbosa porque desafía la unidad del yo, presentando un personaje que es un campo de batalla psicológico visible."
    },
    {
        id: "es-184",
        sentence: "La caída de la antigua civilización fue repentina y aún desconcertaba a los historiadores.",
        targetWord: "repentina",
        targetWordIndex: 8,
        options: [
            { word: "brusca", score: 92, feedback: "'Brusca' es súbita y áspera, muy adecuada." },
            { word: "inesperada", score: 90, feedback: "'Inesperada' no se esperaba, pero puede no ser rápida." },
            { word: "fulminante", score: 95, feedback: "'Fulminante' ocurre como un rayo, instantánea y destructiva." },
            { word: "catastrófica", score: 100, feedback: "¡Perfecto! 'Catastrófica' (del griego 'catastrophé', vuelco) implica un cambio súbito y total en el orden, un colapso sistémico que redefine todo." }
        ],
        bestAnswer: "catastrófica",
        explanation: "Una caída 'catastrófica' no es un declive, sino un evento singular de ruptura histórica, donde las estructuras sociales se vuelven del revés en un período brevísimo."
    },
    {
        id: "es-185",
        sentence: "La simetría del rostro era perfecta y daba una impresión de belleza clásica.",
        targetWord: "perfecta",
        targetWordIndex: 7,
        options: [
            { word: "ideal", score: 92, feedback: "'Ideal' corresponde a un modelo perfecto, muy cercano." },
            { word: "absoluta", score: 90, feedback: "'Absoluta' es completa y sin defectos." },
            { word: "canónica", score: 95, feedback: "'Canónica' se ajusta a los cánones o reglas establecidas de belleza." },
            { word: "eidética", score: 100, feedback: "¡Perfecto! 'Eidética' (relativo a la eidos, forma esencial) sugiere una simetría que no es casual, sino la encarnación de la forma pura y arquetípica." }
        ],
        bestAnswer: "eidética",
        explanation: "Una simetría 'eidética' parece materializar el concepto platónico de belleza, presentando un rostro que es menos un individuo que la manifestación de una idea."
    },
    {
        id: "es-186",
        sentence: "La confusión en las instrucciones del montaje era total y frustrante.",
        targetWord: "total",
        targetWordIndex: 7,
        options: [
            { word: "absoluta", score: 92, feedback: "'Absoluta' es completa, sin resquicio de claridad." },
            { word: "completa", score: 90, feedback: "'Completa' abarca todo, sinónimo común." },
            { word: "extrema", score: 85, feedback: "'Extrema' llega al límite, pero es menos idiomático." },
            { word: "babilónica", score: 100, feedback: "¡Perfecto! 'Babilónica' (como la confusión de lenguas en Babel) describe un caos comunicativo tan profundo que impide cualquier acción coordinada o comprensión." }
        ],
        bestAnswer: "babilónica",
        explanation: "Una confusión 'babilónica' es un colapso total del lenguaje como herramienta, donde las palabras pierden su significado común y generan un ruido infranqueable."
    },
    {
        id: "es-187",
        sentence: "La relevancia del descubrimiento para la medicina era inmensa y abría nuevas puertas.",
        targetWord: "inmensa",
        targetWordIndex: 9,
        options: [
            { word: "enorme", score: 90, feedback: "'Enorme' es muy grande, pero es un término general." },
            { word: "colosal", score: 92, feedback: "'Colosal' es de tamaño descomunal, buena metáfora." },
            { word: "trascendental", score: 95, feedback: "'Trascendental' tiene gran importancia y consecuencias profundas." },
            { word: "copernicana", score: 100, feedback: "¡Perfecto! 'Copernicana' (como el giro copernicano) implica un cambio de paradigma, una reorientación fundamental de todo un campo del conocimiento." }
        ],
        bestAnswer: "copernicana",
        explanation: "Una relevancia 'copernicana' no añade conocimiento; lo revoluciona, desplazando el centro de gravedad de una disciplina y haciendo que todo lo anterior se vea de manera nueva."
    },
    {
        id: "es-188",
        sentence: "La vulnerabilidad que mostraba en sus poemas era conmovedora y humana.",
        targetWord: "conmovedora",
        targetWordIndex: 9,
        options: [
            { word: "emocionante", score: 90, feedback: "'Emocionante' despierta emociones, pero puede ser cualquier emoción." },
            { word: "enternecedora", score: 92, feedback: "'Enternecedora' ablanda el corazón, provocando ternura." },
            { word: "patética", score: 70, feedback: "'Patética' en español moderno tiene connotación negativa." },
            { word: "kenótica", score: 100, feedback: "¡Perfecto! 'Kenótica' (del griego 'kenosis', vaciamiento) describe una vulnerabilidad que es un acto de despojo voluntario, un vaciarse de defensas que conmueve por su riesgo y verdad." }
        ],
        bestAnswer: "kenótica",
        explanation: "Una vulnerabilidad 'kenótica' es una exposición deliberada del núcleo desprotegido del ser, un acto de entrega poética que invita a la compasión y al reconocimiento compartido de la fragilidad."
    },
    {
        id: "es-189",
        sentence: "La obstinación del anciano en mantener sus costumbres era proverbial en el pueblo.",
        targetWord: "proverbial",
        targetWordIndex: 8,
        options: [
            { word: "legendaria", score: 92, feedback: "'Legendaria' es famosa y exagerada en las historias." },
            { word: "notoria", score: 88, feedback: "'Notoria' es conocida, pero sin el matiz de ejemplo típico." },
            { word: "incesante", score: 80, feedback: "'Incesante' no cesa, pero no habla de su fama." },
            { word: "terca", score: 100, feedback: "¡Perfecto! 'Terca' (entendida aquí como la cualidad proverbial) es una obstinación tan característica y extrema que se ha convertido en el ejemplo por antonomasia para los vecinos." }
        ],
        bestAnswer: "terca",
        explanation: "Una obstinación 'terca' (en su uso proverbial) ha trascendido al individuo para convertirse en un arquetipo local, un rasgo tan identificativo que define al personaje en la memoria colectiva."
    },
    {
        id: "es-190",
        sentence: "La interconexión de los problemas globales era compleja y requería soluciones integradas.",
        targetWord: "compleja",
        targetWordIndex: 8,
        options: [
            { word: "intrincada", score: 92, feedback: "'Intrincada' es enmarañada y con muchos vericuetos." },
            { word: "enredada", score: 90, feedback: "'Enredada' sugiere que los elementos se han enredado entre sí." },
            { word: "multicausal", score: 95, feedback: "'Multicausal' tiene muchas causas, lo cual es parte de la complejidad." },
            { word: "rizomática", score: 100, feedback: "¡Perfecto! 'Rizomática' (como un rizoma) describe una interconexión no jerárquica, donde cualquier punto puede conectarse con cualquier otro, formando una red sin centro." }
        ],
        bestAnswer: "rizomática",
        explanation: "Una interconexión 'rizomática' es una red de problemas donde no hay una raíz única, sino que cada crisis alimenta y es alimentada por las otras en una madeja imposible de desenredar linealmente."
    },
    {
        id: "es-191",
        sentence: "La sonrisa del niño era inocente y llena de alegría despreocupada.",
        targetWord: "inocente",
        targetWordIndex: 7,
        options: [
            { word: "cándida", score: 95, feedback: "'Cándida' es pura, blanca y libre de malicia, muy cercano." },
            { word: "ingenuo", score: 90, feedback: "'Ingenuo' es falto de experiencia o malicia, pero puede tener connotación negativa de credulidad." },
            { word: "pura", score: 92, feedback: "'Pura' está libre de culpa o maldad." },
            { word: "adánica", score: 100, feedback: "¡Perfecto! 'Adánica' (como Adán antes de la caída) evoca una inocencia primordial, anterior al conocimiento del bien y del mal, y por tanto a la preocupación." }
        ],
        bestAnswer: "adánica",
        explanation: "Una sonrisa 'adánica' es un destello del paraíso perdido, una expresión de alegría que ignora por completo la posibilidad del dolor, el mal o la pérdida."
    },
    {
        id: "es-192",
        sentence: "La degradación de la calidad del aire en la ciudad era progresiva y alarmante.",
        targetWord: "progresiva",
        targetWordIndex: 8,
        options: [
            { word: "gradual", score: 92, feedback: "'Gradual' avanza por grados, sinónimo cercano." },
            { word: "continua", score: 88, feedback: "'Continua' no se interrumpe, pero no implica necesariamente empeoramiento." },
            { word: "acumulativa", score: 95, feedback: "'Acumulativa' se va sumando, lo cual es preciso para contaminantes." },
            { word: "insidiosa", score: 100, feedback: "¡Perfecto! 'Insidiosa' avanza de manera traicionera y apenas perceptible día a día, pero con efectos alarmantes a largo plazo." }
        ],
        bestAnswer: "insidiosa",
        explanation: "Una degradación 'insidiosa' es un envenenamiento lento, cuyos efectos solo se notan cuando el daño ya es severo, haciendo que la alarma llegue tarde."
    },
    {
        id: "es-193",
        sentence: "La ironía de la situación era amarga y no escapaba a ninguno de los presentes.",
        targetWord: "amarga",
        targetWordIndex: 8,
        options: [
            { word: "ácida", score: 92, feedback: "'Ácida' es mordaz y corrosiva, muy adecuada para ironía." },
            { word: "dolorosa", score: 90, feedback: "'Dolorosa' causa dolor, pero puede no ser irónica." },
            { word: "cínica", score: 95, feedback: "'Cínica' muestra descreimiento, a menudo con ironía." },
            { word: "sardónica", score: 100, feedback: "¡Perfecto! 'Sardónica' combina ironía con un regusto de burla amarga y desprecio, capturando lo desagradable de la situación." }
        ],
        bestAnswer: "sardónica",
        explanation: "Una ironía 'sardónica' es la que hace reír con disgusto, donde lo cómico y lo trágico se mezclan en una sonrisa torcida que reconoce lo absurdo y cruel del destino."
    },
    {
        id: "es-194",
        sentence: "La flexibilidad del nuevo material era sorprendente, permitiéndose doblar sin romper.",
        targetWord: "sorprendente",
        targetWordIndex: 7,
        options: [
            { word: "asombrosa", score: 92, feedback: "'Asombrosa' causa asombro, muy similar." },
            { word: "increíble", score: 90, feedback: "'Increíble' difícil de creer, pero es un coloquialismo." },
            { word: "prodigiosa", score: 95, feedback: "'Prodigiosa' es extraordinaria y maravillosa." },
            { word: "elástica", score: 100, feedback: "¡Perfecto! 'Elástica' no solo es flexible, sino que puede recuperar su forma original, una propiedad física específica y valiosa." }
        ],
        bestAnswer: "elástica",
        explanation: "Una flexibilidad 'elástica' implica resiliencia, la capacidad de sufrir deformación y volver al estado original, una propiedad más valiosa y específica que la simple flexibilidad."
    },
    {
        id: "es-195",
        sentence: "La divergencia entre sus recuerdos del evento era llamativa y sugería que uno mentía.",
        targetWord: "llamativa",
        targetWordIndex: 9,
        options: [
            { word: "notable", score: 90, feedback: "'Notable' es digna de nota, pero puede no llamar la atención activamente." },
            { word: "evidente", score: 92, feedback: "'Evidente' es clara y manifiesta." },
            { word: "flagrante", score: 95, feedback: "'Flagrante' es tan obvia que salta a la vista, con un matiz de escándalo." },
            { word: "abismal", score: 100, feedback: "¡Perfecto! 'Abismal' (como un abismo) describe una divergencia tan grande que parece imposible que se refieran al mismo evento, haciendo inevitable la conclusión de que hay mentira." }
        ],
        bestAnswer: "abismal",
        explanation: "Una divergencia 'abismal' es un vacío de coincidencia, una distancia entre versiones tan insalvable que no puede ser atribuida al error, sino a la falsedad deliberada."
    },
    {
        id: "es-196",
        sentence: "La solemnidad de la ceremonia de graduación era apropiada para la ocasión.",
        targetWord: "apropiada",
        targetWordIndex: 9,
        options: [
            { word: "adecuada", score: 92, feedback: "'Adecuada' es la que conviene, sinónimo directo." },
            { word: "pertinente", score: 90, feedback: "'Pertinente' viene al caso, es relevante." },
            { word: "conveniente", score: 88, feedback: "'Conveniente' es útil o favorable, pero menos relacionado con el decoro." },
            { word: "protocolaria", score: 100, feedback: "¡Perfecto! 'Protocolaria' sigue el protocolo, las reglas establecidas para actos formales, asegurando que la solemnidad sea correcta y oficial." }
        ],
        bestAnswer: "protocolaria",
        explanation: "Una solemnidad 'protocolaria' es una formalidad regulada, donde cada gesto y símbolo está prescrito por la tradición institucional, garantizando la dignidad apropiada."
    },
    {
        id: "es-197",
        sentence: "La persistencia del rumor a pesar de las desmentidas oficiales era inexplicable.",
        targetWord: "inexplicable",
        targetWordIndex: 10,
        options: [
            { word: "incomprensible", score: 92, feedback: "'Incomprensible' no se puede comprender, muy cercano." },
            { word: "desconcertante", score: 95, feedback: "'Desconcertante' desconcierta y deja perplejo." },
            { word: "misteriosa", score: 90, feedback: "'Misteriosa' envuelta en misterio." },
            { word: "zombi", score: 100, feedback: "¡Perfecto! 'Zombi' (aplicado a un rumor) describe algo que, aunque debería estar muerto (desmentido), sigue caminando y propagándose de manera irracional." }
        ],
        bestAnswer: "zombi",
        explanation: "Un rumor 'zombi' es un cadáver informativo que se niega a morir, alimentado por los sesgos cognitivos y las redes sociales, inmune a los hechos y a la lógica."
    },
    {
        id: "es-198",
        sentence: "La profundidad del pozo era aterradora, y su fondo no era visible.",
        targetWord: "aterradora",
        targetWordIndex: 8,
        options: [
            { word: "espantosa", score: 92, feedback: "'Espantosa' causa espanto, miedo intenso." },
            { word: "horripilante", score: 95, feedback: "'Horripilante' eriza el pelo, muy gráfico." },
            { word: "temible", score: 90, feedback: "'Temible' inspira temor." },
            { word: "ctonofóbica", score: 100, feedback: "¡Perfecto! 'Ctonofóbica' (que provoca miedo a las profundidades de la tierra) apela al terror ancestral a lo subterráneo, a lo desconocido bajo nuestros pies." }
        ],
        bestAnswer: "ctonofóbica",
        explanation: "Una profundidad 'ctonofóbica' activa un miedo atávico a ser tragado por la tierra, a lo que yace en la oscuridad absoluta más allá del alcance de la luz y la razón."
    },
    {
        id: "es-199",
        sentence: "La consistencia de su argumento a lo largo del debate era impresionante y lo hizo ganar.",
        targetWord: "impresionante",
        targetWordIndex: 10,
        options: [
            { word: "notable", score: 90, feedback: "'Notable' es digna de nota, pero menos enfática." },
            { word: "sobresaliente", score: 92, feedback: "'Sobresaliente' destaca por encima de lo normal." },
            { word: "admirable", score: 95, feedback: "'Admirable' merece admiración." },
            { word: "férrea", score: 100, feedback: "¡Perfecto! 'Férrea' (de hierro) describe una consistencia inflexible, sólida e inquebrantable que resiste todos los embates." }
        ],
        bestAnswer: "férrea",
        explanation: "Una consistencia 'férrea' es una fortaleza lógica que no cede ni se oxida bajo la presión del contraargumento, manteniendo su forma perfecta de principio a fin."
    },
    {
        id: "es-200",
        sentence: "La ingenuidad de su plan era tan evidente que todos vieron sus fallas de inmediato.",
        targetWord: "evidente",
        targetWordIndex: 9,
        options: [
            { word: "clara", score: 90, feedback: "'Clara' es fácil de ver o entender, sinónimo común." },
            { word: "manifiesta", score: 92, feedback: "'Manifiesta' se muestra claramente." },
            { word: "patente", score: 95, feedback: "'Patente' es evidente y obvia." },
            { word: "prístina", score: 100, feedback: "¡Perfecto! 'Prístina' (en su sentido original de 'primero' o 'original') describe una ingenuidad tan pura y no contaminada por la experiencia que resulta transparente para cualquiera." }
        ],
        bestAnswer: "prístina",
        explanation: "Una ingenuidad 'prístina' es la falta de sofisticación en su estado más virginal, tan evidente que resulta conmovedora y a la vez fácil de explotar."
    },
    {
        id: "es-201",
        sentence: "La coherencia de su discurso ideológico era inquebrantable, incluso ante evidencia contraria.",
        targetWord: "inquebrantable",
        targetWordIndex: 9,
        options: [
            { word: "férrea", score: 95, feedback: "'Férrea' es fuerte como el hierro, pero sugiere rigidez más que resistencia activa a ser quebrado." },
            { word: "inflexible", score: 90, feedback: "'Inflexible' no se dobla, pero no necesariamente resiste intentos de quebrarla." },
            { word: "indomable", score: 92, feedback: "'Indomable' no puede ser dominado, lo cual es cercano." },
            { word: "adamantina", score: 100, feedback: "¡Perfecto! 'Adamantina' (del diamante o material mítico indestructible) sugiere una dureza y resistencia absolutas a cualquier fractura." }
        ],
        bestAnswer: "adamantina",
        explanation: "Una coherencia 'adamantina' posee la dureza legendaria del diamante, resistiendo no solo el cambio, sino cualquier intento de fractura lógica o moral."
    },
    {
        id: "es-202",
        sentence: "La exuberancia del jardín tropical era abrumadora para los sentidos.",
        targetWord: "abrumadora",
        targetWordIndex: 9,
        options: [
            { word: "opresiva", score: 85, feedback: "'Opresiva' oprime y sofoca, lo cual puede ser negativo, mientras que la exuberancia puede ser positiva." },
            { word: "desbordante", score: 95, feedback: "'Desbordante' se sale de los límites, capturando el exceso de vida." },
            { word: "avalancha", score: 92, feedback: "'Avalancha' (como adjetivo) sugiere una llegada masiva y arrolladora." },
            { word: "dionisíaca", score: 100, feedback: "¡Perfecto! 'Dionisíaca' (relativa a Dionisio, dios de la fertilidad y el éxtasis) describe una exuberancia orgiástica, vital y que abruma los sentidos con su fertilidad descontrolada." }
        ],
        bestAnswer: "dionisíaca",
        explanation: "Una exuberancia 'dionisíaca' es un festival de vida y crecimiento que celebra el exceso mismo, abrumando al observador con una profusión casi sagrada de formas y colores."
    },
    {
        id: "es-204",
        sentence: "La renuencia de los inversores a asumir riesgos en la economía actual era comprensible.",
        targetWord: "comprensible",
        targetWordIndex: 11,
        options: [
            { word: "entendible", score: 90, feedback: "'Entendible' puede ser comprendida, pero es un término más coloquial." },
            { word: "lógica", score: 92, feedback: "'Lógica' sigue la lógica, lo cual es cierto pero menos empático." },
            { word: "razonable", score: 95, feedback: "'Razonable' está basada en la razón, lo cual justifica la renuencia." },
            { word: "euménica", score: 100, feedback: "¡Perfecto! 'Euménica' (benévola, indulgente) sugiere que la renuencia no solo es lógica, sino que merece una comprensión benevolente y compasiva dadas las circunstancias." }
        ],
        bestAnswer: "euménica",
        explanation: "Una renuencia 'euménica' es aquella que, al ser examinada, inspira no solo entendimiento racional, sino una aprobación casi misericordiosa por su prudencia en tiempos difíciles."
    },
    {
        id: "es-205",
        sentence: "La opacidad de sus motivos reales hacía imposible confiar plenamente en él.",
        targetWord: "opacidad",
        targetWordIndex: 5,
        options: [
            { word: "oscuridad", score: 88, feedback: "'Oscuridad' es falta de luz, pero aplicada a motivos es menos idiomática." },
            { word: "impenetrabilidad", score: 95, feedback: "'Impenetrabilidad' no puede ser penetrada o comprendida, muy adecuado." },
            { word: "hermetismo", score: 100, feedback: "¡Perfecto! 'Hermetismo' (como el sellado hermético) sugiere una clausura absoluta e intencional, diseñada para que nada entre ni salga." },
            { word: "nebulosidad", score: 90, feedback: "'Nebulosidad' es como una neblina, difusa pero quizás no deliberada." }
        ],
        bestAnswer: "hermetismo",
        explanation: "El 'hermetismo' de los motivos es un sellado activo de la intención, una decisión de no ser transparente que por sí misma destruye la confianza."
    },
    {
        id: "es-206",
        sentence: "La sutileza de los matices en su pintura solo era apreciable tras una mirada prolongada.",
        targetWord: "sutileza",
        targetWordIndex: 5,
        options: [
            { word: "delicadeza", score: 92, feedback: "'Delicadeza' es cualidad de fino y delicado, pero puede referirse a fragilidad." },
            { word: "fineza", score: 90, feedback: "'Fineza' es calidad de fino, similar a delicadeza." },
            { word: "tenuidad", score: 95, feedback: "'Tenuidad' es cualidad de tenue, muy sutil." },
            { word: "sfumato", score: 100, feedback: "¡Perfecto! 'Sfumato' (técnica pictórica de transiciones suaves) describe específicamente la sutileza en la gradación de colores y tonos, que requiere contemplación." }
        ],
        bestAnswer: "sfumato",
        explanation: "La 'sfumato' es la sublimación de la sutileza en arte, donde los contornos se disuelven en transiciones imperceptibles que revelan su profundidad solo con el tiempo."
    },
    {
        id: "es-207",
        sentence: "La incongruencia entre su estilo de vida austero y su defensa del lujo era llamativa.",
        targetWord: "llamativa",
        targetWordIndex: 12,
        options: [
            { word: "notoria", score: 92, feedback: "'Notoria' es conocida y evidente." },
            { word: "chocante", score: 95, feedback: "'Chocante' produce impacto y sorpresa desagradable, muy adecuado para una incongruencia." },
            { word: "evidente", score: 90, feedback: "'Evidente' es clara y manifiesta." },
            { word: "flagrante", score: 100, feedback: "¡Perfecto! 'Flagrante' (que arde) es tan evidente y escandalosa que parece gritar, haciendo inevitable notar la hipocresía." }
        ],
        bestAnswer: "flagrante",
        explanation: "Una incongruencia 'flagrante' es una contradicción que se exhibe con desfachatez, desafiando la coherencia básica y pidiendo a gritos ser señalada."
    },
    {
        id: "es-208",
        sentence: "La pericia del artesano con el vidrio soplado era admirable y heredada de generaciones.",
        targetWord: "admirable",
        targetWordIndex: 10,
        options: [
            { word: "encomiable", score: 92, feedback: "'Encomiable' merece elogio, muy cercano." },
            { word: "destacable", score: 88, feedback: "'Destacable' merece ser destacado." },
            { word: "sobresaliente", score: 90, feedback: "'Sobresaliente' está por encima de lo normal." },
            { word: "virtuosa", score: 100, feedback: "¡Perfecto! 'Virtuosa' denota una habilidad técnica tan excelsa que roza la perfección artística, a menudo asociada con maestría heredada." }
        ],
        bestAnswer: "virtuosa",
        explanation: "Una pericia 'virtuosa' es la culminación de la técnica y la tradición, donde la habilidad se ejercita con una maestría que trasciende lo utilitario para convertirse en arte."
    },
    {
        id: "es-209",
        sentence: "La ambigüedad deliberada en el comunicado oficial dejaba abiertas múltiples interpretaciones.",
        targetWord: "deliberada",
        targetWordIndex: 6,
        options: [
            { word: "intencionada", score: 95, feedback: "'Intencionada' es hecha con intención, sinónimo cercano." },
            { word: "calculada", score: 92, feedback: "'Calculada' implica premeditación y cuidado." },
            { word: "premeditada", score: 90, feedback: "'Premeditada' pensada de antemano." },
            { word: "estratégica", score: 100, feedback: "¡Perfecto! 'Estratégica' implica que la ambigüedad es una herramienta para lograr un fin político o diplomático, manteniendo opciones abiertas." }
        ],
        bestAnswer: "estratégica",
        explanation: "Una ambigüedad 'estratégica' es un arma del discurso oficial, diseñada para decir sin comprometerse, permitiendo negaciones posteriores o adaptaciones tácticas."
    },
    {
        id: "es-210",
        sentence: "La fascinación que ejercía el personaje carismático era casi magnética.",
        targetWord: "magnética",
        targetWordIndex: 11,
        options: [
            { word: "atractiva", score: 90, feedback: "'Atractiva' atrae, pero es un término general." },
            { word: "cautivadora", score: 95, feedback: "'Cautivadora' captura la atención y el interés." },
            { word: "irresistible", score: 92, feedback: "'Irresistible' no puede resistirse, muy fuerte." },
            { word: "telúrica", score: 100, feedback: "¡Perfecto! 'Telúrica' (de la tierra, en sentido de fuerza primaria) sugiere una fascinación que actúa como una fuerza de la naturaleza, elemental e inconsciente." }
        ],
        bestAnswer: "telúrica",
        explanation: "Una fascinación 'telúrica' es una atracción que parece operar por gravedad, una fuerza primitiva que arrastra a las personas sin que puedan (o quieran) explicar por qué."
    },
    {
        id: "es-211",
        sentence: "La previsión del economista sobre la recesión resultó acertada y le dio gran credibilidad.",
        targetWord: "acertada",
        targetWordIndex: 10,
        options: [
            { word: "correcta", score: 90, feedback: "'Correcta' es exacta y sin error, pero es un término simple." },
            { word: "certera", score: 95, feedback: "'Certera' da en el blanco, implica precisión." },
            { word: "exacta", score: 92, feedback: "'Exacta' se ajusta perfectamente a la realidad." },
            { word: "profética", score: 100, feedback: "¡Perfecto! 'Profética' no solo fue acertada, sino que anticipó el futuro con una claridad visionaria, otorgando un estatus casi augural." }
        ],
        bestAnswer: "profética",
        explanation: "Una previsión 'profética' trasciende la mera exactitud para adquirir el aura de un oráculo, transformando al analista en una voz de autoridad sobre lo por venir."
    },
    {
        id: "es-212",
        sentence: "La ligereza de la tela de seda era ideal para el calor del verano.",
        targetWord: "ligereza",
        targetWordIndex: 5,
        options: [
            { word: "levedad", score: 95, feedback: "'Levedad' es cualidad de leve, muy ligero, término poético." },
            { word: "sutileza", score: 85, feedback: "'Sutileza' es cualidad de sutil, pero se aplica más a ideas o diferencias." },
            { word: "delgadez", score: 88, feedback: "'Delgadez' se refiere a poco grosor, no necesariamente a poco peso." },
            { word: "eterea", score: 100, feedback: "¡Perfecto! 'Etherea' (como el éter) sugiere una ligereza tan extrema que la tela parece casi inmaterial, hecha de aire." }
        ],
        bestAnswer: "eterea",
        explanation: "Una ligereza 'eterea' es la cualidad de lo que apenas tiene presencia física, flotando sobre la piel como una nube, perfecta para el calor."
    },
    {
        id: "es-213",
        sentence: "La tozudez con la que defendía su postura errónea era exasperante.",
        targetWord: "exasperante",
        targetWordIndex: 12,
        options: [
            { word: "irritante", score: 92, feedback: "'Irritante' molesta y enoja." },
            { word: "frustrante", score: 90, feedback: "'Frustrante' causa frustración al impedir un avance." },
            { word: "enervante", score: 95, feedback: "'Enervante' debilita y saca de quicio." },
            { word: "sisífica", score: 100, feedback: "¡Perfecto! 'Sisífica' (como el trabajo de Sísifo) describe una tozudez tan inútil y repetitiva que exaspera por su absoluta falta de progreso." }
        ],
        bestAnswer: "sisífica",
        explanation: "Una tozudez 'sisífica' es un esfuerzo obstinado que, por definición, nunca alcanzará su objetivo, haciendo que la persistencia sea vista como un castigo para quienes observan."
    },
    {
        id: "es-214",
        sentence: "La fluidez del diálogo en la obra de teatro era natural y creíble.",
        targetWord: "natural",
        targetWordIndex: 9,
        options: [
            { word: "espontánea", score: 95, feedback: "'Espontánea' surge sin esfuerzo, lo cual es clave para un diálogo creíble." },
            { word: "suelta", score: 88, feedback: "'Suelta' es ágil, pero puede referirse más al estilo que a la verosimilitud." },
            { word: "verosímil", score: 90, feedback: "'Verosímil' parece verdadero, pero es un resultado, no una cualidad del flujo." },
            { word: "coloquial", score: 100, feedback: "¡Perfecto! 'Coloquial' imita el flujo y las características del habla cotidiana, que es la base máxima de naturalidad en un diálogo." }
        ],
        bestAnswer: "coloquial",
        explanation: "La fluidez 'coloquial' captura los ritmos, interrupciones y giros del habla real, haciendo que los personajes suenen a personas, no a portavoces de un guion."
    },
    {
        id: "es-215",
        sentence: "La magnitud del desastre natural superaba cualquier preparativo previo.",
        targetWord: "magnitud",
        targetWordIndex: 5,
        options: [
            { word: "envergadura", score: 95, feedback: "'Envergadura' es la extensión o alcance de algo, muy adecuado." },
            { word: "dimensión", score: 90, feedback: "'Dimensión' es el tamaño en una dirección, pero puede ser menos impactante." },
            { word: "escala", score: 92, feedback: "'Escala' implica comparación con un estándar, útil para desastres." },
            { word: "cataclismo", score: 100, feedback: "¡Perfecto! 'Cataclismo' (como sustantivo usado adjetivamente) no solo describe la magnitud, sino que la califica como un evento transformador y destructivo de primer orden." }
        ],
        bestAnswer: "cataclismo",
        explanation: "La magnitud 'cataclismo' es la que redefine el paisaje físico y humano, un evento de tal poder que vuelve insignificantes las medidas de precaución ordinarias."
    },
    {
        id: "es-216",
        sentence: "La parsimonia con la que el viejo maestro realizaba cada movimiento era pedagógica.",
        targetWord: "parsimonia",
        targetWordIndex: 5,
        options: [
            { word: "lentitud", score: 85, feedback: "'Lentitud' es cualidad de lento, pero carece de la connotación de deliberación y cuidado." },
            { word: "pausa", score: 88, feedback: "'Pausa' es una interrupción, no un ritmo constante." },
            { word: "deliberación", score: 95, feedback: "'Deliberación' implica actuar con reflexión y prudencia, muy cercano." },
            { word: "ritual", score: 100, feedback: "¡Perfecto! 'Ritual' sugiere que la parsimonia no es meramente lenta, sino que sigue un ceremonial preciso, con cada movimiento cargado de significado pedagógico." }
        ],
        bestAnswer: "ritual",
        explanation: "La parsimonia 'ritual' es una lentitud sacramental, donde el tiempo se expande para permitir que cada gesto sea observado, absorbido y convertido en enseñanza."
    },
    {
        id: "es-217",
        sentence: "La analogía entre el estado y un barco era recurrente en su discurso político.",
        targetWord: "recurrente",
        targetWordIndex: 10,
        options: [
            { word: "frecuente", score: 90, feedback: "'Frecuente' ocurre a menudo, pero es un término estadístico." },
            { word: "habitual", score: 92, feedback: "'Habitual' es lo que se hace por costumbre." },
            { word: "persistente", score: 95, feedback: "'Persistente' continúa a lo largo del tiempo, insistiendo." },
            { word: "leitmotiv", score: 100, feedback: "¡Perfecto! 'Leitmotiv' (tema musical recurrente) describe una analogía que funciona como un motivo conductor, reapareciendo para estructurar y dar coherencia al discurso." }
        ],
        bestAnswer: "leitmotiv",
        explanation: "Una analogía 'leitmotiv' es más que recurrente; es un elemento estructural que, cada vez que aparece, refuerza una idea central y teje la narrativa política."
    },
    {
        id: "es-218",
        sentence: "La hosquedad del guardia de seguridad disuadía a cualquiera de hacer preguntas.",
        targetWord: "hosquedad",
        targetWordIndex: 5,
        options: [
            { word: "aspereza", score: 95, feedback: "'Aspereza' es rudeza en el trato, muy adecuado." },
            { word: "brusquedad", score: 92, feedback: "'Brusquedad' es falta de delicadeza, abrupta." },
            { word: "severidad", score: 90, feedback: "'Severidad' es rigor y dureza, pero puede ser justa." },
            { word: "cerrazón", score: 100, feedback: "¡Perfecto! 'Cerrazón' implica una actitud no solo áspera, sino cerrada, inaccesible y hostil a la comunicación." }
        ],
        bestAnswer: "cerrazón",
        explanation: "La hosquedad 'cerrazón' es un muro anímico, una actitud que comunica sin palabras que cualquier intento de interacción será rechazado violentamente."
    },
    {
        id: "es-219",
        sentence: "La idoneidad del candidato para el puesto era indiscutible según su currículum.",
        targetWord: "indiscutible",
        targetWordIndex: 9,
        options: [
            { word: "incuestionable", score: 95, feedback: "'Incuestionable' no puede ser cuestionado, sinónimo casi exacto." },
            { word: "indudable", score: 92, feedback: "'Indudable' no deja lugar a dudas." },
            { word: "manifiesta", score: 88, feedback: "'Manifiesta' es evidente, pero puede ser discutida." },
            { word: "axiomática", score: 100, feedback: "¡Perfecto! 'Axiomática' es tan evidente que se acepta como un axioma, un punto de partida incuestionable para cualquier deliberación." }
        ],
        bestAnswer: "axiomática",
        explanation: "Una idoneidad 'axiomática' es un hecho tan establecido que cualquier discusión sobre el candidato debe partir necesariamente de esa base, sin perder tiempo en cuestionarla."
    },
    {
        id: "es-220",
        sentence: "La profusión de detalles en el informe lo hacía exhaustivo pero difícil de digerir.",
        targetWord: "profusión",
        targetWordIndex: 5,
        options: [
            { word: "abundancia", score: 90, feedback: "'Abundancia' es gran cantidad, pero es un término neutro." },
            { word: "prodigalidad", score: 95, feedback: "'Prodigalidad' da o gasta con generosidad, a veces excesiva." },
            { word: "multitud", score: 85, feedback: "'Multitud' es un gran número, pero se aplica más a personas." },
            { word: "barroquismo", score: 100, feedback: "¡Perfecto! 'Barroquismo' (estilo barroco) sugiere una profusión ornamentada, recargada y a veces excesiva de detalles, que puede complicar la comprensión." }
        ],
        bestAnswer: "barroquismo",
        explanation: "Un 'barroquismo' de detalles es una acumulación no solo cuantitativa, sino cualitativamente compleja, donde el exceso decorativo amenaza con oscurecer el contenido esencial."
    },
    {
        id: "es-221",
        sentence: "La esterilidad del debate político, centrado en ataques personales, era deprimente.",
        targetWord: "esterilidad",
        targetWordIndex: 5,
        options: [
            { word: "inutilidad", score: 90, feedback: "'Inutilidad' carece de utilidad, pero no capta la falta de productividad intelectual." },
            { word: "infecundidad", score: 95, feedback: "'Infecundidad' es incapacidad para producir frutos, muy adecuado para un debate." },
            { word: "pobreza", score: 88, feedback: "'Pobreza' es carencia, pero es muy amplio." },
            { word: "aletargamiento", score: 100, feedback: "¡Perfecto! 'Aletargamiento' (estado de letargo) describe una esterilidad que proviene de la inercia, la falta de ideas nuevas y el abandono del verdadero conflicto de ideas." }
        ],
        bestAnswer: "aletargamiento",
        explanation: "La esterilidad 'aletargamiento' es la de un debate que ha caído en un sueño profundo, donde los contendientes solo repiten gestos vacíos por inercia, sin generar nada nuevo."
    },
    {
        id: "es-222",
        sentence: "La nitidez de la imagen satelital permitía distinguir objetos de menos de un metro.",
        targetWord: "nitidez",
        targetWordIndex: 5,
        options: [
            { word: "claridad", score: 92, feedback: "'Claridad' es cualidad de claro, sinónimo común." },
            { word: "definición", score: 95, feedback: "'Definición' (en fotografía) se refiere a la precisión de los bordes, muy técnica." },
            { word: "precisión", score: 88, feedback: "'Precisión' es exactitud, pero más aplicada a mediciones." },
            { word: "resolución", score: 100, feedback: "¡Perfecto! 'Resolución' (en imágenes digitales) es la medida técnica de la capacidad para distinguir detalles, directamente relacionada con distinguir objetos pequeños." }
        ],
        bestAnswer: "resolución",
        explanation: "La 'resolución' es la propiedad cuantificable que determina el nivel de detalle de una imagen digital; alta resolución es sinónimo de alta nitidez para distinguir elementos pequeños."
    },
    {
        id: "es-223",
        sentence: "La reticencia de los testigos a declarar complicaba enormemente la investigación.",
        targetWord: "reticencia",
        targetWordIndex: 5,
        options: [
            { word: "renuencia", score: 92, feedback: "'Renuencia' es desgana o resistencia a hacer algo, muy cercano." },
            { word: "vacilación", score: 88, feedback: "'Vacilación' es duda o indecisión." },
            { word: "resistencia", score: 90, feedback: "'Resistencia' se opone activamente, que puede ser más fuerte." },
            { word: "mutismo", score: 100, feedback: "¡Perfecto! 'Mutismo' es la negativa absoluta a hablar, un silencio obstinado que bloquea cualquier avance." }
        ],
        bestAnswer: "mutismo",
        explanation: "La reticencia 'mutismo' es el extremo del no-decir, una opción por el silencio que actúa como un muro infranqueable para quien busca información."
    },
    {
        id: "es-224",
        sentence: "La versatilidad del actor le permitía transitar con soltura entre la comedia y el drama.",
        targetWord: "versatilidad",
        targetWordIndex: 5,
        options: [
            { word: "adaptabilidad", score: 92, feedback: "'Adaptabilidad' es capacidad de adaptarse, pero puede ser más reactiva." },
            { word: "polivalencia", score: 95, feedback: "'Polivalencia' tiene múltiples valencias o capacidades, término muy adecuado." },
            { word: "flexibilidad", score: 90, feedback: "'Flexibilidad' se dobla fácilmente, pero es más general." },
            { word: "proteísmo", score: 100, feedback: "¡Perfecto! 'Proteísmo' (como el dios Proteo) implica la capacidad de cambiar de forma a voluntad, de encarnar identidades radicalmente diferentes." }
        ],
        bestAnswer: "proteísmo",
        explanation: "El 'proteísmo' actoral es la habilidad de la metamorfosis constante, donde el actor no interpreta personajes, sino que se transforma en ellos desde la esencia."
    },
    {
        id: "es-225",
        sentence: "La impunidad con la que operaba la organización criminal era escandalosa.",
        targetWord: "impunidad",
        targetWordIndex: 5,
        options: [
            { word: "inmunidad", score: 90, feedback: "'Inmunidad' está libre de castigo, pero puede tener connotación legal o biológica." },
            { word: "desafuero", score: 95, feedback: "'Desafuero' es acción contra la ley, pero se usa más como sustantivo de acto." },
            { word: "licencia", score: 88, feedback: "'Licencia' es permiso, pero puede ser abuso de libertad." },
            { word: "carte blanche", score: 100, feedback: "¡Perfecto! 'Carte blanche' (en francés, carta blanca) implica tener libertad total para actuar sin temor a consecuencias, a menudo por connivencia o poder." }
        ],
        bestAnswer: "carte blanche",
        explanation: "La impunidad 'carte blanche' es un permiso tácito o explícito para violar la ley, una garantía de que no habrá rendición de cuentas, lo cual es especialmente escandaloso."
    },
    {
        id: "es-226",
        sentence: "La efusividad de su saludo contrastaba con la frialdad del entorno.",
        targetWord: "efusividad",
        targetWordIndex: 5,
        options: [
            { word: "calidez", score: 92, feedback: "'Calidez' es cualidad de cálido, afectuoso." },
            { word: "expansividad", score: 95, feedback: "'Expansividad' tiende a expandirse y manifestarse con exuberancia." },
            { word: "cordialidad", score: 90, feedback: "'Cordialidad' es afecto sincero." },
            { word: "effusio", score: 100, feedback: "¡Perfecto! 'Effusio' (del latín, derramamiento) describe una efusividad que se derrama sin contención, un exceso de expresión emocional." }
        ],
        bestAnswer: "effusio",
        explanation: "La efusividad 'effusio' es un torrente afectivo, un desbordamiento de gestos y palabras que busca llenar el espacio y compensar la frialdad circundante."
    },
    {
        id: "es-227",
        sentence: "La precariedad del empleo en el sector gig economy era fuente de constante ansiedad.",
        targetWord: "precariedad",
        targetWordIndex: 5,
        options: [
            { word: "inestabilidad", score: 95, feedback: "'Inestabilidad' falta de estabilidad, lo cual es central en la precariedad." },
            { word: "vulnerabilidad", score: 92, feedback: "'Vulnerabilidad' puede ser herida o afectada, pero es más general." },
            { word: "fragilidad", score: 90, feedback: "'Fragilidad' se rompe fácilmente, metáfora adecuada." },
            { word: "miseria", score: 100, feedback: "¡Perfecto! 'Miseria' (en sentido económico) añade a la precariedad la idea de ingresos bajos y condiciones de vida difíciles, fuente directa de ansiedad." }
        ],
        bestAnswer: "miseria",
        explanation: "La precariedad 'miseria' es la inseguridad laboral combinada con la pobreza, una condición que amenaza no solo el empleo, sino la subsistencia misma."
    },
    {
        id: "es-228",
        sentence: "La inmutabilidad de las leyes físicas fundamentales es un pilar de la ciencia.",
        targetWord: "inmutabilidad",
        targetWordIndex: 5,
        options: [
            { word: "constancia", score: 92, feedback: "'Constancia' permanece invariable, pero puede ser temporal." },
            { word: "permanencia", score: 95, feedback: "'Permanencia' dura de manera indefinida." },
            { word: "invariancia", score: 100, feedback: "¡Perfecto! 'Invariancia' (en física y matemáticas) es la propiedad de no cambiar bajo ciertas transformaciones, un concepto técnico y fundamental." },
            { word: "fijeza", score: 88, feedback: "'Fijeza' está fijo, pero es menos usado en contexto científico." }
        ],
        bestAnswer: "invariancia",
        explanation: "La 'invariancia' es un principio científico profundo: ciertas cantidades o leyes no cambian aunque cambie el sistema de referencia, siendo la base de teorías como la relatividad."
    },
    {
        id: "es-229",
        sentence: "La sagacidad del detective para encontrar pistas donde otros no veían nada era legendaria.",
        targetWord: "sagacidad",
        targetWordIndex: 5,
        options: [
            { word: "perspicacia", score: 95, feedback: "'Perspicacia' es agudeza mental para comprender, muy cercano." },
            { word: "astucia", score: 92, feedback: "'Astucia' es habilidad para engañar o para lograr un fin, puede tener connotación negativa." },
            { word: "inteligencia", score: 90, feedback: "'Inteligencia' es capacidad de entender, pero es más general." },
            { word: "lupiniana", score: 100, feedback: "¡Perfecto! 'Lupiniana' (como el detective Arsène Lupin) combina sagacidad, ingenio y un toque de brillantez excéntrica, elevándola a categoría legendaria." }
        ],
        bestAnswer: "lupiniana",
        explanation: "Una sagacidad 'lupiniana' es la del genio deductivo que opera con estilo y flair, transformando la investigación en un arte y al detective en un mito."
    },
    {
        id: "es-230",
        sentence: "La frugalidad de su dieta, basada en vegetales y granos, era extrema pero saludable.",
        targetWord: "frugalidad",
        targetWordIndex: 5,
        options: [
            { word: "austenidad", score: 90, feedback: "'Austenidad' es severidad y rigor, pero puede aplicarse a muchos ámbitos." },
            { word: "sobriedad", score: 95, feedback: "'Sobriedad' es moderación, especialmente en comida y bebida." },
            { word: "parquedad", score: 92, feedback: "'Parquedad' es economía y escasez, muy adecuado para comida." },
            { word: "pitagórica", score: 100, feedback: "¡Perfecto! 'Pitagórica' (seguidores de Pitágoras) evoca una frugalidad basada en principios filosóficos, que busca pureza y salud a través de la dieta." }
        ],
        bestAnswer: "pitagórica",
        explanation: "La frugalidad 'pitagórica' es una elección de vida disciplinada, donde la simplicidad en la alimentación está al servicio de la claridad mental y la armonía corporal."
    },
    {
        id: "es-231",
        sentence: "La laxitud de la normativa permitía interpretaciones peligrosamente amplias.",
        targetWord: "laxitud",
        targetWordIndex: 5,
        options: [
            { word: "flexibilidad", score: 90, feedback: "'Flexibilidad' puede doblarse, pero no necesariamente es negativa." },
            { word: "permisividad", score: 95, feedback: "'Permisividad' permite o tolera conductas, a menudo con connotación negativa." },
            { word: "relajamiento", score: 92, feedback: "'Relajamiento' aflojamiento de reglas, muy adecuado." },
            { word: "ambigüedad", score: 100, feedback: "¡Perfecto! 'Ambigüedad' sugiere que la laxitud no está en la aplicación, sino en la redacción misma, permitiendo interpretaciones contradictorias y peligrosas." }
        ],
        bestAnswer: "ambigüedad",
        explanation: "La laxitud 'ambigüedad' es un defecto de diseño en la norma, donde la vaguedad del lenguaje abre la puerta a abusos y evasiones, no solo a una aplicación laxa."
    },
    {
        id: "es-232",
        sentence: "La vehemencia de su defensa de los derechos animales conmovía incluso a los escépticos.",
        targetWord: "vehemencia",
        targetWordIndex: 5,
        options: [
            { word: "pasión", score: 95, feedback: "'Pasión' es emoción intensa, muy cercano." },
            { word: "ardor", score: 92, feedback: "'Ardor' es calor y entusiasmo intenso." },
            { word: "fogosidad", score: 90, feedback: "'Fogosidad' es cualidad de fogoso, lleno de fuego." },
            { word: "apasionamiento", score: 100, feedback: "¡Perfecto! 'Apasionamiento' es la cualidad de estar apasionado, implicando una entrega total y contagiosa de la persona a la causa." }
        ],
        bestAnswer: "apasionamiento",
        explanation: "La vehemencia 'apasionamiento' es una fuerza que no solo convence con argumentos, sino que arrastra con la fuerza de una convicción vivida con toda el alma."
    },
    {
        id: "es-233",
        sentence: "La disparidad de ingresos entre los directivos y los empleados rasos era obscena.",
        targetWord: "disparidad",
        targetWordIndex: 5,
        options: [
            { word: "diferencia", score: 85, feedback: "'Diferencia' es la cualidad de ser diferente, pero es un término neutro." },
            { word: "desigualdad", score: 95, feedback: "'Desigualdad' falta de igualdad, término cargado socialmente." },
            { word: "brecha", score: 92, feedback: "'Brecha' es una abertura o diferencia grande, metáfora potente." },
            { word: "abismo", score: 100, feedback: "¡Perfecto! 'Abismo' (como sustantivo usado adjetivamente) describe una disparidad tan vasta que parece imposible de salvar, lo cual la hace moralmente obscena." }
        ],
        bestAnswer: "abismo",
        explanation: "Una disparidad 'abismo' es una fractura social cuantitativa que se traduce en una distancia cualitativa, separando a las personas en categorías casi de especies diferentes."
    },
    {
        id: "es-234",
        sentence: "La ductilidad del nuevo material metálico permitía moldearlo en formas complejas.",
        targetWord: "ductilidad",
        targetWordIndex: 5,
        options: [
            { word: "maleabilidad", score: 100, feedback: "¡Perfecto! 'Maleabilidad' (en ciencia de materiales) es específicamente la propiedad de ser deformable por compresión sin romperse, ideal para moldear." },
            { word: "flexibilidad", score: 90, feedback: "'Flexibilidad' se dobla fácilmente, pero en ingeniería es distinto de ductilidad." },
            { word: "plasticidad", score: 95, feedback: "'Plasticidad' es capacidad de deformación permanente, muy cercano técnicamente." },
            { word: "dócil", score: 88, feedback: "'Dócil' es fácil de manejar, pero es un término general." }
        ],
        bestAnswer: "maleabilidad",
        explanation: "La 'maleabilidad' es la propiedad física específica que permite a un material ser extendido en láminas o moldes bajo presión, crucial para la fabricación de formas complejas."
    },
    {
        id: "es-235",
        sentence: "La provisionalidad de los acuerdos alcanzados dejaba una sensación de incertidumbre.",
        targetWord: "provisionalidad",
        targetWordIndex: 5,
        options: [
            { word: "temporalidad", score: 95, feedback: "'Temporalidad' es cualidad de temporal, duradero por un tiempo limitado." },
            { word: "interinidad", score: 92, feedback: "'Interinidad' es el carácter de interino, provisional." },
            { word: "transitoriedad", score: 100, feedback: "¡Perfecto! 'Transitoriedad' enfatiza que los acuerdos están de paso, son efímeros por naturaleza, lo cual genera incertidumbre sobre el futuro." },
            { word: "precariedad", score: 90, feedback: "'Precariedad' es inestabilidad e inseguridad, resultado de la provisionalidad." }
        ],
        bestAnswer: "transitoriedad",
        explanation: "La provisionalidad 'transitoriedad' es el estado de lo que está destinado a pasar, un mero paréntesis que, por definición, anuncia su propio fin y la incertidumbre que lo seguirá."
    },
    {
        id: "es-236",
        sentence: "La pertinacia de la lluvia durante toda la semana arruinó los planes de vacaciones.",
        targetWord: "pertinacia",
        targetWordIndex: 5,
        options: [
            { word: "persistencia", score: 95, feedback: "'Persistencia' continúa firme a lo largo del tiempo." },
            { word: "tenacidad", score: 92, feedback: "'Tenacidad' se aferra con firmeza, a menudo para algo positivo." },
            { word: "incesancia", score: 100, feedback: "¡Perfecto! 'Incesancia' es cualidad de incesante, que no cesa ni un momento, lo cual es especialmente frustrante para planes arruinados." },
            { word: "continuidad", score: 88, feedback: "'Continuidad' es prolongación sin interrupción." }
        ],
        bestAnswer: "incesancia",
        explanation: "La pertinacia 'incesancia' es una persistencia monótona y agotadora, una repetición sin variación que niega cualquier esperanza de cambio o alivio."
    },
    {
        id: "es-237",
        sentence: "La tersura de la superficie del lago al amanecer era como un espejo perfecto.",
        targetWord: "tersura",
        targetWordIndex: 5,
        options: [
            { word: "lisura", score: 90, feedback: "'Lisura' es cualidad de liso, sin asperezas." },
            { word: "suavidad", score: 92, feedback: "'Suavidad' es agradable al tacto, pero puede no ser perfectamente plana." },
            { word: "plani", score: 100, feedback: "¡Perfecto! 'Plani' (de plano, llano) denota una tersura geométrica, una planitud absoluta que refleja como un espejo." },
            { word: "calma", score: 85, feedback: "'Calma' es ausencia de viento o agitación, la causa de la tersura, no la cualidad misma." }
        ],
        bestAnswer: "plani",
        explanation: "La tersura 'plani' es la cualidad de una superficie sin la más mínima ondulación, una planaridad tan perfecta que convierte el agua en un plano reflectante ideal."
    },
    {
        id: "es-238",
        sentence: "La minuciosidad del inventario, que incluía cada clip y grapa, era obsesiva.",
        targetWord: "minuciosidad",
        targetWordIndex: 5,
        options: [
            { word: "meticulosidad", score: 95, feedback: "'Meticulosidad' es extremo cuidado en los detalles." },
            { word: "exhaustividad", score: 92, feedback: "'Exhaustividad' es completa, que no omite nada." },
            { word: "puntillosidad", score: 100, feedback: "¡Perfecto! 'Puntillosidad' es meticulosidad excesiva, que se fija hasta en los puntos más pequeños, con un matiz de rigidez obsesiva." },
            { word: "diligencia", score: 88, feedback: "'Diligencia' es cuidado y esmero, pero no necesariamente extremo." }
        ],
        bestAnswer: "puntillosidad",
        explanation: "La minuciosidad 'puntillosidad' es una atención al detalle que cruza la frontera de lo útil para adentrarse en lo ritualístico y compulsivo."
    },
    {
        id: "es-239",
        sentence: "La virulencia del ataque en los medios contra su persona no tenía precedentes.",
        targetWord: "virulencia",
        targetWordIndex: 5,
        options: [
            { word: "violencia", score: 90, feedback: "'Violencia' es uso de fuerza, pero en medios es metafórico." },
            { word: "agresividad", score: 92, feedback: "'Agresividad' es tendencia a atacar." },
            { word: "saña", score: 95, feedback: "'Saña' es crueldad y ensañamiento." },
            { word: "toxicidad", score: 100, feedback: "¡Perfecto! 'Toxicidad' (en lenguaje mediático) implica que el ataque no solo es agresivo, sino que envenena el ambiente y daña la reputación de manera persistente." }
        ],
        bestAnswer: "toxicidad",
        explanation: "La virulencia 'toxicidad' en los medios es un ataque diseñado para contaminar la percepción pública, dejando un residuo venenoso que perdura más allá del ciclo de noticias."
    },
    {
        id: "es-240",
        sentence: "La gratitud que expresó por el gesto modesto fue conmovedora y sincera.",
        targetWord: "conmovedora",
        targetWordIndex: 12,
        options: [
            { word: "emocionante", score: 90, feedback: "'Emocionante' despierta emociones, pero puede ser menos profundo." },
            { word: "enternecedora", score: 95, feedback: "'Enternecedora' ablanda el corazón, provocando ternura." },
            { word: "sentida", score: 92, feedback: "'Sentida' es profunda y sincera." },
            { word: "catártica", score: 100, feedback: "¡Perfecto! 'Catártica' (que purifica emociones) describe una gratitud que, al expresarse, libera y transforma la emoción tanto del que agradece como del que observa." }
        ],
        bestAnswer: "catártica",
        explanation: "Una gratitud 'catártica' es un acto de reconocimiento que limpia el alma de deudas emocionales, conmoviendo porque restaura un equilibrio fundamental en la relación humana."
    },
    {
        id: "es-241",
        sentence: "La incredulidad inicial ante el anuncio revolucionario pronto se tornó en asombro.",
        targetWord: "incredulidad",
        targetWordIndex: 5,
        options: [
            { word: "escepticismo", score: 95, feedback: "'Escepticismo' es duda sistemática, muy cercano." },
            { word: "desconfianza", score: 90, feedback: "'Desconfianza' falta de confianza, pero puede ser más general." },
            { word: "duda", score: 88, feedback: "'Duda' es incertidumbre, menos fuerte." },
            { word: "pasmo", score: 100, feedback: "¡Perfecto! 'Pasmo' es un estado de suspensión de la facultad de creer, un asombro paralizante ante algo que parece imposible." }
        ],
        bestAnswer: "pasmo",
        explanation: "La incredulidad 'pasmo' es el primer impacto de lo extraordinario, un cortocircuito mental donde la información nueva es tan abrumadora que la mente se niega temporalmente a procesarla."
    },
    {
        id: "es-242",
        sentence: "La sinuosidad del camino de montaña hacía el viaje lento pero pintoresco.",
        targetWord: "sinuosidad",
        targetWordIndex: 5,
        options: [
            { word: "curvatura", score: 90, feedback: "'Curvatura' es cualidad de curvo, pero es más técnica." },
            { word: "recorrido", score: 85, feedback: "'Recorrido' es el trayecto, no su forma." },
            { word: "serpenteo", score: 95, feedback: "'Serpenteo' se mueve como una serpiente, muy gráfico." },
            { word: "labyrinthos", score: 100, feedback: "¡Perfecto! 'Labyrinthos' (laberinto, en sentido figurado) describe una sinuosidad tan compleja y retorcida que el camino parece enredarse sobre sí mismo." }
        ],
        bestAnswer: "labyrinthos",
        explanation: "La sinuosidad 'labyrinthos' es un trazado que desafía la orientación, donde cada curva parece llevar de vuelta al punto anterior, creando un viaje que es a la vez frustrante y fascinante."
    },
    {
        id: "es-243",
        sentence: "La parquedad de sus palabras contrastaba con la riqueza de sus ideas.",
        targetWord: "parquedad",
        targetWordIndex: 5,
        options: [
            { word: "concisión", score: 95, feedback: "'Concisión' expresa mucho en pocas palabras, lo cual es positivo y puede aplicar aquí." },
            { word: "laconismo", score: 100, feedback: "¡Perfecto! 'Laconismo' (de los espartanos) es la cualidad de expresarse con extrema brevedad, a menudo con un aire de sabiduría contenida." },
            { word: "brevedad", score: 90, feedback: "'Brevedad' es corta duración o extensión." },
            { word: "economía", score: 92, feedback: "'Economía' (de lenguaje) usa solo lo necesario." }
        ],
        bestAnswer: "laconismo",
        explanation: "El 'laconismo' es una estética del silencio elocuente, donde la fuerza de las ideas no se diluye en palabras, sino que se concentra en lo esencial, dejando mucho sin decir."
    },
    {
        id: "es-244",
        sentence: "La candidez de su pregunta en medio del tenso debate desarmó a todos.",
        targetWord: "candidez",
        targetWordIndex: 5,
        options: [
            { word: "ingenuidad", score: 95, feedback: "'Ingenuidad' es falta de malicia o experiencia." },
            { word: "inocencia", score: 92, feedback: "'Inocencia' es pureza y falta de culpa." },
            { word: "sencillez", score: 90, feedback: "'Sencillez' es falta de complicación." },
            { word: "niaiserie", score: 100, feedback: "¡Perfecto! 'Niaiserie' (del francés, tontería ingenua) describe una candidez tan pura y quizás un tanto simple que corta la tensión al recordar a todos un mundo más inocente." }
        ],
        bestAnswer: "niaiserie",
        explanation: "La candidez 'niaiserie' es una ingenuidad que roza lo infantil, una pregunta tan ajena al cálculo adulto que desarma porque no puede ser contestada con las herramientas de la discusión sofisticada."
    },
    {
        id: "es-245",
        sentence: "La ubicuidad del logo de la marca en la ciudad era testimonio de su dominio del mercado.",
        targetWord: "ubicuidad",
        targetWordIndex: 5,
        options: [
            { word: "omnipresencia", score: 100, feedback: "¡Perfecto! 'Omnipresencia' (estar en todas partes) es el término preciso para describir la presencia constante e ineludible de una marca en el espacio público." },
            { word: "pervasividad", score: 95, feedback: "'Pervasividad' se filtra por todas partes, muy cercano." },
            { word: "propagación", score: 90, feedback: "'Propagación' es acción de extenderse." },
            { word: "saturación", score: 92, feedback: "'Saturación' llena hasta el máximo, lo cual puede ser un efecto de la ubicuidad." }
        ],
        bestAnswer: "omnipresencia",
        explanation: "La 'omnipresencia' de una marca es una estrategia de colonización visual, donde el logo se convierte en un elemento permanente del paisaje urbano, símbolo de un poder económico total."
    },
    {
        id: "es-246",
        sentence: "La laxitud de los músculos después del masaje producía una agradable sensación de bienestar.",
        targetWord: "laxitud",
        targetWordIndex: 5,
        options: [
            { word: "relajación", score: 95, feedback: "'Relajación' es distensión, aflojamiento, lo cual es el efecto deseado." },
            { word: "flojedad", score: 88, feedback: "'Flojedad' es falta de firmeza, puede tener connotación negativa." },
            { word: "blandura", score: 85, feedback: "'Blandura' es suavidad, pero no específicamente muscular." },
            { word: "atonia", score: 100, feedback: "¡Perfecto! 'Atonia' (en medicina) es la falta de tono muscular, un estado de relajación completa que es fisiológicamente placentero." }
        ],
        bestAnswer: "atonia",
        explanation: "La laxitud 'atonia' es un estado fisiológico de reposo muscular profundo, donde la tensión se disipa por completo, produciendo una sensación de paz corporal."
    },
    {
        id: "es-247",
        sentence: "La novedad del enfoque metodológico despertó tanto entusiasmo como escepticismo.",
        targetWord: "novedad",
        targetWordIndex: 5,
        options: [
            { word: "originalidad", score: 95, feedback: "'Originalidad' es cualidad de original, nuevo y único." },
            { word: "innovación", score: 100, feedback: "¡Perfecto! 'Innovación' implica no solo novedad, sino una mejora o cambio significativo en los métodos establecidos, lo cual justifica las reacciones polarizadas." },
            { word: "actualidad", score: 80, feedback: "'Actualidad' es cualidad de actual, pero no necesariamente nuevo." },
            { word: "frescura", score: 88, feedback: "'Frescura' es cualidad de fresco, nuevo, pero es más informal." }
        ],
        bestAnswer: "innovación",
        explanation: "La novedad 'innovación' es un cambio disruptivo en las herramientas del conocimiento, que por definición desafía lo establecido y genera tanto esperanza como resistencia."
    },
    {
        id: "es-248",
        sentence: "La templanza con la que enfrentó la adversidad era un ejemplo para todos.",
        targetWord: "templanza",
        targetWordIndex: 5,
        options: [
            { word: "serenidad", score: 95, feedback: "'Serenidad' es tranquilidad y paz interior." },
            { word: "ecuanimidad", score: 100, feedback: "¡Perfecto! 'Ecuanimidad' es estabilidad emocional y equilibrio, especialmente ante el éxito o el fracaso, una virtud estoica por excelencia." },
            { word: "calma", score: 90, feedback: "'Calma' es ausencia de agitación." },
            { word: "paciencia", score: 92, feedback: "'Paciencia' es capacidad de sufrir sin quejarse." }
        ],
        bestAnswer: "ecuanimidad",
        explanation: "La templanza 'ecuanimidad' es el fruto de una sabiduría práctica que acepta los altibajos de la fortuna sin exaltarse ni deprimirse, manteniendo un rumbo interior constante."
    },
    {
        id: "es-249",
        sentence: "La puntualidad británica del tren era proverbial y nunca se retrasaba.",
        targetWord: "proverbial",
        targetWordIndex: 7,
        options: [
            { word: "legendaria", score: 92, feedback: "'Legendaria' es famosa y exagerada en las leyendas." },
            { word: "notoria", score: 90, feedback: "'Notoria' es conocida." },
            { word: "célebre", score: 88, feedback: "'Célebre' es famoso." },
            { word: "axiomática", score: 100, feedback: "¡Perfecto! 'Axiomática' es tan conocida y aceptada que se da por sentada como una verdad incuestionable, parte del folclore nacional." }
        ],
        bestAnswer: "axiomática",
        explanation: "Una puntualidad 'axiomática' es un estereotipo cultural tan arraigado que se convierte en un hecho social autoevidente, una expectativa que define la experiencia misma."
    },
    {
        id: "es-250",
        sentence: "La liviandad de la acusación, basada en rumores, la hacía fácil de desestimar.",
        targetWord: "liviandad",
        targetWordIndex: 5,
        options: [
            { word: "levedad", score: 95, feedback: "'Levedad' es poca gravedad o importancia." },
            { word: "superficialidad", score: 92, feedback: "'Superficialidad' falta de profundidad." },
            { word: "insustancialidad", score: 100, feedback: "¡Perfecto! 'Insustancialidad' falta de sustancia, de base sólida, lo cual es fatal para una acusación que pretende ser tomada en serio." },
            { word: "frivolidad", score: 90, feedback: "'Frivolidad' falta de seriedad." }
        ],
        bestAnswer: "insustancialidad",
        explanation: "La liviandad 'insustancialidad' es una acusación hueca, construida sobre el aire de los rumores, que se desvanece ante el más mínimo examen de los hechos."
    },
    {
        id: "es-251",
        sentence: "La rigidez de las normas del antiguo monasterio era absoluta y no admitía excepciones.",
        targetWord: "absoluta",
        targetWordIndex: 8,
        options: [
            { word: "total", score: 85, feedback: "'Total' significa completa, pero es un término más común y menos enfático que 'absoluta'." },
            { word: "inflexible", score: 90, feedback: "'Inflexible' describe la cualidad de no doblarse, pero es redundante con 'rigidez'." },
            { word: "dogmática", score: 95, feedback: "'Dogmática' implica que las normas se basan en doctrinas incuestionables, lo cual es cercano." },
            { word: "talmúdica", score: 100, feedback: "¡Perfecto! 'Talmúdica' sugiere una adherencia estricta y minuciosa a cada letra de la ley, como en el Talmud, sin espacio para interpretación." }
        ],
        bestAnswer: "talmúdica",
        explanation: "Una rigidez 'talmúdica' va más allá de ser absoluta; implica una observancia escrupulosa y literal de cada precepto, donde la excepción es herejía."
    },
    {
        id: "es-252",
        sentence: "La ligereza de su tono al tratar un tema tan serio resultaba inapropiada.",
        targetWord: "ligereza",
        targetWordIndex: 5,
        options: [
            { word: "superficialidad", score: 95, feedback: "'Superficialidad' implica falta de profundidad, lo cual es inapropiado para temas serios." },
            { word: "frivolidad", score: 92, feedback: "'Frivolidad' es falta de seriedad, muy cercano al significado." },
            { word: "levedad", score: 85, feedback: "'Levedad' se refiere a poco peso, pero no necesariamente a falta de seriedad." },
            { word: "festividad", score: 100, feedback: "¡Perfecto! 'Festividad' sugiere un tono de celebración o jolgorio, que es especialmente chocante e inapropiado para un tema serio." }
        ],
        bestAnswer: "festividad",
        explanation: "La 'festividad' es una alegría despreocupada que, aplicada a un tema grave, muestra una insensibilidad moral o una desconexión total del contexto."
    },
    {
        id: "es-253",
        sentence: "La amplitud de miras del nuevo director prometía cambios innovadores para la institución.",
        targetWord: "amplitud",
        targetWordIndex: 5,
        options: [
            { word: "apertura", score: 90, feedback: "'Apertura' sugiere receptividad, pero no necesariamente un horizonte intelectual amplio." },
            { word: "generosidad", score: 85, feedback: "'Generosidad' se asocia más a dar o ser magnánimo, no a visión." },
            { word: "vastitud", score: 95, feedback: "'Vastitud' implica gran extensión, adecuado para 'miras'." },
            { word: "cosmopolitismo", score: 100, feedback: "¡Perfecto! 'Cosmopolitismo' denota una mentalidad abierta, global y sofisticada, ideal para un director que trae innovación." }
        ],
        bestAnswer: "cosmopolitismo",
        explanation: "El 'cosmopolitismo' de miras es una amplitud que trasciende lo local, incorporando influencias y perspectivas diversas para inspirar cambios verdaderamente innovadores."
    },
    {
        id: "es-254",
        sentence: "La premura con la que tuvieron que evacuar el edificio causó pánico entre los ocupantes.",
        targetWord: "premura",
        targetWordIndex: 5,
        options: [
            { word: "urgencia", score: 95, feedback: "'Urgencia' implica necesidad inmediata, lo cual encaja bien con una evacuación." },
            { word: "prisa", score: 90, feedback: "'Prisa' es rapidez, pero puede ser voluntaria, mientras que 'premura' sugiere presión externa." },
            { word: "celeridad", score: 92, feedback: "'Celeridad' es velocidad, pero es un término más neutral." },
            { word: "apremio", score: 100, feedback: "¡Perfecto! 'Apremio' combina urgencia con una presión casi angustiosa, lo cual explica mejor el pánico resultante." }
        ],
        bestAnswer: "apremio",
        explanation: "El 'apremio' es una premura impuesta por circunstancias apremiantes, que sofoca la capacidad de razonar y fácilmente desencadena el pánico colectivo."
    },
    {
        id: "es-255",
        sentence: "La languidez del verano tropical invitaba a la siesta y a la inactividad.",
        targetWord: "languidez",
        targetWordIndex: 5,
        options: [
            { word: "modorra", score: 95, feedback: "'Modorra' es somnolencia y aletargamiento, muy cercano a la invitación a la siesta." },
            { word: "calma", score: 85, feedback: "'Calma' es ausencia de agitación, pero no necesariamente induce a la inactividad." },
            { word: "paz", score: 80, feedback: "'Paz' es tranquilidad, pero tiene connotaciones positivas que pueden no captar el agobio del calor." },
            { word: "modorra", score: 100, feedback: "¡Perfecto! 'Modorra' es un estado de somnolencia y pesadez provocado por el calor, que invita directamente a la siesta y la inactividad." }
        ],
        bestAnswer: "modorra",
        explanation: "La 'modorra' es la languidez física y mental inducida por el calor extremo, un estado que anula la voluntad y hace de la inactividad una necesidad fisiológica."
    },
    {
        id: "es-256",
        sentence: "La sutileza de la ironía en su comentario pasó desapercibida para muchos.",
        targetWord: "sutileza",
        targetWordIndex: 5,
        options: [
            { word: "delicadeza", score: 90, feedback: "'Delicadeza' se refiere a finura, pero no necesariamente al carácter oculto de la ironía." },
            { word: "fineza", score: 88, feedback: "'Fineza' es cualidad de fino, similar a delicadeza." },
            { word: "ligereza", score: 85, feedback: "'Ligereza' implica levedad, que no es lo mismo que sutil." },
            { word: "subrepticiedad", score: 100, feedback: "¡Perfecto! 'Subrepticiedad' implica cualidad de subrepticio, es decir, hecho con sigilo o disimulo, por lo que pasa desapercibido." }
        ],
        bestAnswer: "subrepticiedad",
        explanation: "La 'subrepticiedad' es la cualidad de lo que se introduce o expresa de manera tan hábil y discreta que elude la percepción casual, como la mejor ironía."
    },
    {
        id: "es-257",
        sentence: "La prolijidad de sus apuntes de investigación era envidiable; cada detalle estaba perfectamente organizado.",
        targetWord: "prolijidad",
        targetWordIndex: 5,
        options: [
            { word: "meticulosidad", score: 95, feedback: "'Meticulosidad' implica extremo cuidado y atención al detalle, muy cercano." },
            { word: "orden", score: 85, feedback: "'Orden' es disposición organizada, pero es un término más general y menos específico." },
            { word: "pulcritud", score: 92, feedback: "'Pulcritud' sugiere limpieza y esmero, adecuado para apuntes." },
            { word: "acuciosidad", score: 100, feedback: "¡Perfecto! 'Acuciosidad' es diligencia y esmero extremos, con un matiz de minuciosidad casi obsesiva, ideal para la investigación." }
        ],
        bestAnswer: "acuciosidad",
        explanation: "La 'acuciosidad' es una meticulosidad aplicada con fervor casi devoto, donde la organización perfecta es el resultado de una dedicación incansable a los detalles."
    },
    {
        id: "es-258",
        sentence: "La vastedad del desierto a primera luz del amanecer era sobrecogedora.",
        targetWord: "vastedad",
        targetWordIndex: 5,
        options: [
            { word: "inmensidad", score: 95, feedback: "'Inmensidad' es cualidad de inmenso, muy grande, casi sinónimo." },
            { word: "extensión", score: 90, feedback: "'Extensión' se refiere a la superficie que abarca, pero es menos poético." },
            { word: "amplitud", score: 88, feedback: "'Amplitud' es anchura o extensión, similar a extensión." },
            { word: "oceánica", score: 100, feedback: "¡Perfecto! 'Oceánica' compara el desierto con un océano, sugiriendo una vastedad monótona, infinita y que sobrecoge por su escala." }
        ],
        bestAnswer: "oceánica",
        explanation: "Una vastedad 'oceánica' evoca la sensación de estar ante un horizonte sin límites, un vacío geográfico que inspira tanto admiración como temor existencial."
    },
    {
        id: "es-259",
        sentence: "La fiabilidad de su testimonio era crucial para el caso, pues era el único testigo.",
        targetWord: "fiabilidad",
        targetWordIndex: 5,
        options: [
            { word: "credibilidad", score: 95, feedback: "'Credibilidad' es la cualidad de ser creíble, esencial para un testigo." },
            { word: "veracidad", score: 92, feedback: "'Veracidad' es apego a la verdad, pero se refiere más al contenido que a la persona." },
            { word: "solvencia", score: 80, feedback: "'Solvencia' se usa para finanzas o argumentos, no para testigos." },
            { word: "irrecusabilidad", score: 100, feedback: "¡Perfecto! 'Irrecusabilidad' significa que no puede ser rechazado o impugnado, lo cual es crucial para un testigo único." }
        ],
        bestAnswer: "irrecusabilidad",
        explanation: "La 'irrecusabilidad' de un testimonio es su cualidad de estar por encima de toda objeción razonable, haciendo que sea aceptado como prueba definitiva."
    },
    {
        id: "es-260",
        sentence: "La ferocidad del debate en el parlamento llegó a niveles sin precedentes.",
        targetWord: "ferocidad",
        targetWordIndex: 5,
        options: [
            { word: "intensidad", score: 90, feedback: "'Intensidad' es gran fuerza, pero no capta la violencia verbal o el salvajismo." },
            { word: "vehemencia", score: 95, feedback: "'Vehemencia' es ardor y pasión, muy cercano a ferocidad en un debate." },
            { word: "rudeza", score: 85, feedback: "'Rudeza' es falta de educación, pero puede ser menos extrema." },
            { word: "saña", score: 100, feedback: "¡Perfecto! 'Saña' implica ensañamiento, crueldad y violencia en el ataque, superando la mera intensidad." }
        ],
        bestAnswer: "saña",
        explanation: "La 'saña' en un debate es ferocidad mezclada con deseo de dañar al oponente, donde los argumentos se convierten en armas para aniquilar, no solo para persuadir."
    },
    {
        id: "es-261",
        sentence: "La opulencia de la decoración del palacio era un claro reflejo del poder del monarca.",
        targetWord: "opulencia",
        targetWordIndex: 5,
        options: [
            { word: "riqueza", score: 90, feedback: "'Riqueza' significa abundancia de bienes, pero es más general y menos descriptiva." },
            { word: "suntuosidad", score: 95, feedback: "'Suntuosidad' implica lujo excesivo y ostentoso, muy adecuado para un palacio." },
            { word: "abundancia", score: 85, feedback: "'Abundancia' es gran cantidad, pero no necesariamente de cosas lujosas." },
            { word: "fastuosidad", score: 100, feedback: "¡Perfecto! 'Fastuosidad' es ostentación y pompa magníficas, especialmente en ceremonias o decoración, perfecta para mostrar poder real." }
        ],
        bestAnswer: "fastuosidad",
        explanation: "La 'fastuosidad' es una opulencia teatral y calculada, diseñada para impresionar y afirmar la superioridad a través de la exhibición de riqueza."
    },
    {
        id: "es-262",
        sentence: "La celeridad con la que se propagó la noticia falsa alarmó a las autoridades.",
        targetWord: "celeridad",
        targetWordIndex: 5,
        options: [
            { word: "rapidez", score: 90, feedback: "'Rapidez' es velocidad, pero es un término más común y menos técnico." },
            { word: "velocidad", score: 88, feedback: "'Velocidad' es similar a rapidez, también común." },
            { word: "prontitud", score: 85, feedback: "'Prontitud' es brevedad en el tiempo, pero se aplica más a respuestas." },
            { word: "virulencia", score: 100, feedback: "¡Perfecto! 'Virulencia' aplicada a la propagación sugiere una celeridad contagiosa y dañina, como un virus, lo cual es alarmante." }
        ],
        bestAnswer: "virulencia",
        explanation: "La 'virulencia' en la propagación de una noticia indica no solo velocidad, sino un mecanismo infeccioso que evade los controles y se aprovecha de las redes sociales."
    },
    {
        id: "es-263",
        sentence: "La aversión que sentía por la hipocresía lo llevó a una vida de extremada sinceridad.",
        targetWord: "aversión",
        targetWordIndex: 5,
        options: [
            { word: "repugnancia", score: 95, feedback: "'Repugnancia' es un sentimiento de fuerte rechazo, a menudo físico, muy cercano." },
            { word: "odio", score: 90, feedback: "'Odio' es un sentimiento más intenso y activo, que puede incluir deseo de dañar." },
            { word: "rechazo", score: 85, feedback: "'Rechazo' es negación o repulsión, pero puede ser menos emocional." },
            { word: "alloofness", score: 70, feedback: "'Alloofness' (del inglés) no es una palabra española; significa distanciamiento." }
        ],
        bestAnswer: "repugnancia",
        explanation: "La 'repugnancia' es una aversión visceral, una reacción casi física ante algo que se considera moralmente repulsivo, como la hipocresía."
    },
    {
        id: "es-264",
        sentence: "La perspicacia del joven detective para resolver el enigma dejó atónitos a sus superiores.",
        targetWord: "perspicacia",
        targetWordIndex: 5,
        options: [
            { word: "agudeza", score: 95, feedback: "'Agudeza' es penetración mental, capacidad para percibir detalles finos." },
            { word: "inteligencia", score: 90, feedback: "'Inteligencia' es capacidad de entender, pero es más general." },
            { word: "sagacidad", score: 92, feedback: "'Sagacidad' es astucia y perspicacia, casi sinónimo." },
            { word: "lucidez", score: 100, feedback: "¡Perfecto! 'Lucidez' es claridad mental excepcional, un momento de visión penetrante que resuelve lo aparentemente insoluble." }
        ],
        bestAnswer: "lucidez",
        explanation: "La 'lucidez' es un destello de perspicacia que ilumina de repente la solución, una claridad mental tan brillante que deja atónitos a los demás."
    },
    {
        id: "es-265",
        sentence: "La parquedad en el uso de recursos era una filosofía central en la comunidad ecológica.",
        targetWord: "parquedad",
        targetWordIndex: 5,
        options: [
            { word: "economía", score: 92, feedback: "'Economía' implica uso cuidadoso y eficiente, adecuado para recursos." },
            { word: "frugalidad", score: 95, feedback: "'Frugalidad' es moderación en el consumo, especialmente de comida, pero extensible a recursos." },
            { word: "austenidad", score: 90, feedback: "'Austenidad' es severidad y rigor, puede aplicarse a estilo de vida." },
            { word: "sobriedad", score: 100, feedback: "¡Perfecto! 'Sobriedad' en este contexto significa moderación y ausencia de excesos, una filosofía consciente de no derrochar." }
        ],
        bestAnswer: "sobriedad",
        explanation: "La 'sobriedad' es una virtud ecológica que valora la suficiencia y rechaza el despilfarro, aplicando la moderación a todos los aspectos del consumo."
    },
    {
        id: "es-266",
        sentence: "La sagacidad del lobo viejo para evitar las trampas de los cazadores era proverbial.",
        targetWord: "sagacidad",
        targetWordIndex: 5,
        options: [
            { word: "astucia", score: 95, feedback: "'Astucia' es habilidad para engañar o evitar el engaño, muy propia de un animal experimentado." },
            { word: "inteligencia", score: 85, feedback: "'Inteligencia' es más general y menos específica para situaciones de supervivencia." },
            { word: "perspicacia", score: 90, feedback: "'Perspicacia' es agudeza mental, pero se aplica más a humanos en contextos intelectuales." },
            { word: "maal", score: 70, feedback: "'Maal' no es una palabra española." }
        ],
        bestAnswer: "astucia",
        explanation: "La 'astucia' es la sabiduría práctica de quien conoce los peligros y sabe evitarlos mediante tretas y experiencia, como un lobo viejo."
    },
    {
        id: "es-267",
        sentence: "La lisura de la superficie de mármol pulido era tal que reflejaba como un espejo.",
        targetWord: "lisura",
        targetWordIndex: 5,
        options: [
            { word: "suavidad", score: 90, feedback: "'Suavidad' es agradable al tacto, pero no implica necesariamente planitud perfecta para reflejar." },
            { word: "tersura", score: 95, feedback: "'Tersura' es calidad de terso, liso y sin asperezas, muy cercano." },
            { word: "plani", score: 100, feedback: "¡Perfecto! 'Plani' (de plano) denota una lisura geométrica, una planitud absoluta que es condición para el reflejo perfecto." },
            { word: "pulimento", score: 85, feedback: "'Pulimento' es el acto de pulir, no la cualidad resultante." }
        ],
        bestAnswer: "plani",
        explanation: "La 'plani' es una lisura que ha sido lograda mediante un pulido que elimina toda irregularidad microscópica, creando una superficie ópticamente plana."
    },
    {
        id: "es-268",
        sentence: "La certidumbre de que su teoría era correcta lo llevó a ignorar evidencia contradictoria.",
        targetWord: "certidumbre",
        targetWordIndex: 5,
        options: [
            { word: "certeza", score: 95, feedback: "'Certeza' es convicción firme y segura, casi sinónimo." },
            { word: "convicción", score: 92, feedback: "'Convicción' es creencia firme, pero puede basarse en fe más que en hechos." },
            { word: "seguridad", score: 90, feedback: "'Seguridad' es falta de duda, pero es un término más general." },
            { word: "dogmatismo", score: 100, feedback: "¡Perfecto! 'Dogmatismo' es adhesión inquebrantable a una creencia, al punto de rechazar cualquier evidencia que la cuestione." }
        ],
        bestAnswer: "dogmatismo",
        explanation: "El 'dogmatismo' es una certidumbre que se ha vuelto ideológica, cerrando la mente a la posibilidad de error y bloqueando el proceso científico de revisión."
    },
    {
        id: "es-269",
        sentence: "La benevolencia del anciano hacia todos los seres vivos era conmovedora.",
        targetWord: "benevolencia",
        targetWordIndex: 5,
        options: [
            { word: "bondad", score: 95, feedback: "'Bondad' es cualidad de bueno, deseo de hacer el bien." },
            { word: "generosidad", score: 90, feedback: "'Generosidad' es disposición a dar, pero no necesariamente abarca a todos los seres vivos." },
            { word: "compasión", score: 92, feedback: "'Compasión' es empatía ante el sufrimiento, muy cercano." },
            { word: "filantropía", score: 100, feedback: "¡Perfecto! 'Filantropía' es amor a la humanidad, pero en un sentido amplio puede extenderse a todos los seres vivos, mostrando una benevolencia universal." }
        ],
        bestAnswer: "filantropía",
        explanation: "La 'filantropía' en su sentido más amplio es una benevolencia activa y reflexiva hacia todos los seres, fruto de una profunda empatía y sentido ético."
    },
    {
        id: "es-270",
        sentence: "La magnanimidad del vencedor al perdonar a sus enemigos fue alabada por todos.",
        targetWord: "magnanimidad",
        targetWordIndex: 5,
        options: [
            { word: "generosidad", score: 92, feedback: "'Generosidad' es disposición a dar, pero no capta la grandeza de ánimo frente al enemigo vencido." },
            { word: "clemencia", score: 95, feedback: "'Clemencia' es misericordia o indulgencia, especialmente de quien tiene poder para castigar." },
            { word: "nobleza", score: 90, feedback: "'Nobleza' es cualidad de noble, pero puede referirse a linaje o carácter elevado." },
            { word: "grandeza", score: 100, feedback: "¡Perfecto! 'Grandeza' (de ánimo) implica una elevación moral que permite superar el rencor y actuar con generosidad extraordinaria." }
        ],
        bestAnswer: "grandeza",
        explanation: "La 'grandeza' de ánimo es la cima de la magnanimidad, donde el poder se ejerce con misericordia y la victoria se corona con perdón, no con venganza."
    },
    {
        id: "es-271",
        sentence: "La precocidad del niño pianista, que a los cinco años componía sinfonías, asombraba al mundo.",
        targetWord: "precocidad",
        targetWordIndex: 5,
        options: [
            { word: "tempranidad", score: 85, feedback: "'Tempranidad' es cualidad de temprano, pero no se usa comúnmente para talentos." },
            { word: "prematuridad", score: 90, feedback: "'Prematuridad' se refiere a algo que ocurre antes de tiempo, a menudo con connotación negativa." },
            { word: "prodigiosidad", score: 95, feedback: "'Prodigiosidad' es cualidad de prodigio, que implica rareza y asombro." },
            { word: "Wunderkind", score: 100, feedback: "¡Perfecto! 'Wunderkind' (del alemán, niño prodigio) captura la idea de precocidad extraordinaria y genialidad temprana en las artes." }
        ],
        bestAnswer: "Wunderkind",
        explanation: "Un 'Wunderkind' es la encarnación misma de la precocidad, un niño cuyo talento desproporcionado desafía las expectativas normales del desarrollo."
    },
    {
        id: "es-272",
        sentence: "La impavidez del bombero al entrar en el edificio en llamas era heroica.",
        targetWord: "impavidez",
        targetWordIndex: 5,
        options: [
            { word: "valentía", score: 95, feedback: "'Valentía' es coraje, disposición a enfrentar el peligro." },
            { word: "calma", score: 90, feedback: "'Calma' es serenidad, pero no necesariamente ante un peligro extremo." },
            { word: "serenidad", score: 92, feedback: "'Serenidad' es tranquilidad de ánimo, similar a calma." },
            { word: "intrepidez", score: 100, feedback: "¡Perfecto! 'Intrepidez' es falta de temor ante el peligro, una valentía audaz y resuelta." }
        ],
        bestAnswer: "intrepidez",
        explanation: "La 'intrepidez' es impavidez en acción, un valor temerario que no vacila incluso ante la amenaza más directa e inmediata."
    },
    {
        id: "es-273",
        sentence: "La índole de su carácter, marcadamente introvertido, lo llevaba a evitar las multitudes.",
        targetWord: "índole",
        targetWordIndex: 5,
        options: [
            { word: "naturaleza", score: 95, feedback: "'Naturaleza' es esencia o cualidad innata, muy cercano." },
            { word: "carácter", score: 85, feedback: "'Carácter' es sinónimo, pero sería redundante en la oración." },
            { word: "temperamento", score: 90, feedback: "'Temperamento' se refiere a la manera de ser, especialmente en lo emocional." },
            { word: "condición", score: 100, feedback: "¡Perfecto! 'Condición' en sentido filosófico denota la cualidad esencial y definitoria de un ser." }
        ],
        bestAnswer: "condición",
        explanation: "La 'condición' es la propiedad fundamental que define a alguien, en este caso, una introversión tan radical que determina su comportamiento social."
    },
    {
        id: "es-274",
        sentence: "La pericia del cirujano durante la operación de alta complejidad era admirable.",
        targetWord: "pericia",
        targetWordIndex: 5,
        options: [
            { word: "habilidad", score: 92, feedback: "'Habilidad' es destreza, pero puede ser innata o aprendida." },
            { word: "destreza", score: 95, feedback: "'Destreza' es habilidad manual o mental, muy adecuada para un cirujano." },
            { word: "maestría", score: 100, feedback: "¡Perfecto! 'Maestría' implica un nivel superior de pericia, fruto de experiencia y conocimiento profundo." },
            { word: "competencia", score: 85, feedback: "'Competencia' es capacidad para hacer algo, pero es un término más general." }
        ],
        bestAnswer: "maestría",
        explanation: "La 'maestría' es la pericia llevada al nivel del arte, donde cada movimiento es preciso, seguro y parece casi intuitivo."
    },
    {
        id: "es-275",
        sentence: "La sordidez de los negocios en los que estaba involucrado manchó su reputación para siempre.",
        targetWord: "sordidez",
        targetWordIndex: 5,
        options: [
            { word: "bajeza", score: 95, feedback: "'Bajeza' implica falta de nobleza o dignidad, muy cercano." },
            { word: "vilipendio", score: 90, feedback: "'Vilipendio' es desprecio o menosprecio, no la cualidad de los negocios." },
            { word: "corrupción", score: 92, feedback: "'Corrupción' es perversión o soborno, que puede ser parte de la sordidez." },
            { word: "turpitud", score: 100, feedback: "¡Perfecto! 'Turpitud' es vileza moral extrema, una sordidez que mancha irreversiblemente." }
        ],
        bestAnswer: "turpitud",
        explanation: "La 'turpitud' es una sordidez moral tan profunda que contamina todo lo que toca, dejando una marca indeleble en la reputación."
    },
    {
        id: "es-276",
        sentence: "La prolijidad del bordado, con cada puntada perfectamente alineada, demostraba horas de trabajo.",
        targetWord: "prolijidad",
        targetWordIndex: 5,
        options: [
            { word: "minuciosidad", score: 95, feedback: "'Minuciosidad' es atención extrema a los detalles, adecuado para bordado." },
            { word: "esmero", score: 92, feedback: "'Esmero' es cuidado y diligencia, pero es más general." },
            { word: "pulcritud", score: 90, feedback: "'Pulcritud' es limpieza y perfección en la ejecución." },
            { word: "primor", score: 100, feedback: "¡Perfecto! 'Primor' es delicadeza y esmero exquisitos en el trabajo manual, como en un bordado fino." }
        ],
        bestAnswer: "primor",
        explanation: "El 'primor' es la prolijidad elevada a virtud artesanal, donde la perfección técnica se busca no por obligación, sino por amor al trabajo bien hecho."
    },
    {
        id: "es-277",
        sentence: "La lozanía de las plantas después de la lluvia primaveral era un espectáculo de vida.",
        targetWord: "lozanía",
        targetWordIndex: 5,
        options: [
            { word: "frescura", score: 95, feedback: "'Frescura' es cualidad de fresco, lozano, muy cercano." },
            { word: "verdor", score: 90, feedback: "'Verdor' se refiere al color verde, pero no necesariamente a la vitalidad." },
            { word: "vigor", score: 92, feedback: "'Vigor' es fuerza y energía, aplicable a plantas." },
            { word: "pujanza", score: 100, feedback: "¡Perfecto! 'Pujanza' es vigor y fuerza en crecimiento, una lozanía dinámica y exuberante." }
        ],
        bestAnswer: "pujanza",
        explanation: "La 'pujanza' es lozanía en pleno proceso de crecimiento, una vitalidad que se expresa en brotes nuevos y hojas turgentes, celebrando la vida."
    },
    {
        id: "es-278",
        sentence: "La índole del problema, más ético que legal, requería una solución diferente.",
        targetWord: "índole",
        targetWordIndex: 5,
        options: [
            { word: "naturaleza", score: 95, feedback: "'Naturaleza' es esencia o carácter, casi sinónimo." },
            { word: "carácter", score: 90, feedback: "'Carácter' es cualidad distintiva, similar." },
            { word: "condición", score: 92, feedback: "'Condición' es estado o propiedad, adecuado." },
            { word: "jaez", score: 100, feedback: "¡Perfecto! 'Jaez' (en desuso) significa calidad, condición o naturaleza, y da un matiz literario y preciso." }
        ],
        bestAnswer: "jaez",
        explanation: "El 'jaez' de un problema es su cualidad intrínseca, aquello que lo define y determina el tipo de solución que merece, aquí ética más que legal."
    },
    {
        id: "es-279",
        sentence: "La parquedad de sus gestos, limitados a lo esencial, contrastaba con su elocuencia verbal.",
        targetWord: "parquedad",
        targetWordIndex: 5,
        options: [
            { word: "economía", score: 95, feedback: "'Economía' en gestos significa uso restringido y eficiente, muy cercano." },
            { word: "restricción", score: 90, feedback: "'Restricción' es limitación, pero puede ser impuesta desde fuera." },
            { word: "moderación", score: 92, feedback: "'Moderación' es templanza, evitar excesos." },
            { word: "laconismo", score: 100, feedback: "¡Perfecto! 'Laconismo' aplicado a gestos implica una extrema brevedad y contención, que habla por sí misma." }
        ],
        bestAnswer: "laconismo",
        explanation: "El 'laconismo' gestual es un lenguaje corporal deliberadamente minimalista, donde cada movimiento tiene peso y significado, contrastando con la abundancia verbal."
    },
    {
        id: "es-280",
        sentence: "La vileza del crimen cometido contra indefensos conmocionó a la nación entera.",
        targetWord: "vileza",
        targetWordIndex: 5,
        options: [
            { word: "bajeza", score: 95, feedback: "'Bajeza' es falta de nobleza, acto despreciable." },
            { word: "crueldad", score: 92, feedback: "'Crueldad' es placer en causar sufrimiento, que puede ser parte de la vileza." },
            { word: "infamia", score: 100, feedback: "¡Perfecto! 'Infamia' es mala fama por un acto vil, pero también denota la cualidad moralmente repugnante del acto en sí." },
            { word: "maldad", score: 90, feedback: "'Maldad' es cualidad de malo, pero es más general." }
        ],
        bestAnswer: "infamia",
        explanation: "La 'infamia' es una vileza que trasciende lo individual para convertirse en un símbolo de degradación moral colectiva, conmocionando a toda una sociedad."
    },
    {
        id: "es-281",
        sentence: "La premura del mensaje indicaba que la situación era extremadamente urgente.",
        targetWord: "premura",
        targetWordIndex: 5,
        options: [
            { word: "urgencia", score: 95, feedback: "'Urgencia' es necesidad inmediata, casi sinónimo." },
            { word: "prisa", score: 90, feedback: "'Prisa' es rapidez, pero puede no transmitir la gravedad de la situación." },
            { word: "apremio", score: 100, feedback: "¡Perfecto! 'Apremio' es urgencia extrema que presiona y no admite demora." },
            { word: "celeridad", score: 85, feedback: "'Celeridad' es velocidad, pero se refiere más al ritmo que a la necesidad." }
        ],
        bestAnswer: "apremio",
        explanation: "El 'apremio' es una premura que genera presión y ansiedad, indicando que cualquier retraso podría tener consecuencias catastróficas."
    },
    {
        id: "es-282",
        sentence: "La perspicacia de su análisis de mercado le permitió anticipar la crisis financiera.",
        targetWord: "perspicacia",
        targetWordIndex: 5,
        options: [
            { word: "agudeza", score: 95, feedback: "'Agudeza' es penetración mental, capacidad para ver lo que otros no ven." },
            { word: "sagacidad", score: 92, feedback: "'Sagacidad' es astucia y perspicacia, muy cercano." },
            { word: "inteligencia", score: 90, feedback: "'Inteligencia' es capacidad de entender, pero es más general." },
            { word: "clarividencia", score: 100, feedback: "¡Perfecto! 'Clarividencia' implica una perspicacia tan aguda que parece ver el futuro, anticipando eventos como una crisis." }
        ],
        bestAnswer: "clarividencia",
        explanation: "La 'clarividencia' en el análisis es la habilidad de discernir patrones ocultos y tendencias emergentes, permitiendo predicciones extraordinariamente acertadas."
    },
    {
        id: "es-283",
        sentence: "La laxitud de las medidas de seguridad en el aeropuerto era preocupante.",
        targetWord: "laxitud",
        targetWordIndex: 5,
        options: [
            { word: "relajación", score: 95, feedback: "'Relajación' es aflojamiento o disminución de rigor, muy adecuado." },
            { word: "permisividad", score: 92, feedback: "'Permisividad' es tolerancia excesiva, que puede llevar a laxitud." },
            { word: "negligencia", score: 90, feedback: "'Negligencia' es descuido, pero implica falta de atención más que política deliberada." },
            { word: "laissez-faire", score: 100, feedback: "¡Perfecto! 'Laissez-faire' (del francés) implica una política de no intervención o deja hacer, que en seguridad es temerariamente laxa." }
        ],
        bestAnswer: "laissez-faire",
        explanation: "Un enfoque 'laissez-faire' en seguridad es una laxitud por principio, una decisión consciente de no regular o controlar, lo cual es profundamente preocupante en un aeropuerto."
    },
    {
        id: "es-284",
        sentence: "La lozanía de su semblante, a pesar de sus ochenta años, sorprendía a todos.",
        targetWord: "lozanía",
        targetWordIndex: 5,
        options: [
            { word: "frescura", score: 95, feedback: "'Frescura' es aspecto juvenil y saludable, muy cercano." },
            { word: "vitalidad", score: 92, feedback: "'Vitalidad' es energía y vigor, aplicable al semblante." },
            { word: "pujanza", score: 90, feedback: "'Pujanza' es fuerza en crecimiento, menos aplicable a una persona mayor." },
            { word: "verdor", score: 100, feedback: "¡Perfecto! 'Verdor' aplicado metafóricamente a una persona sugiere una lozanía inesperada y casi milagrosa, como la juventud en la vejez." }
        ],
        bestAnswer: "verdor",
        explanation: "El 'verdor' en un rostro anciano es una metáfora poderosa de vitalidad persistente, como si la primavera de la vida resistiera el paso del tiempo."
    },
    {
        id: "es-285",
        sentence: "La índole de su investigación, puramente teórica, no buscaba aplicaciones prácticas inmediatas.",
        targetWord: "índole",
        targetWordIndex: 5,
        options: [
            { word: "naturaleza", score: 95, feedback: "'Naturaleza' es carácter esencial, casi sinónimo." },
            { word: "carácter", score: 90, feedback: "'Carácter' es cualidad distintiva, similar." },
            { word: "condición", score: 92, feedback: "'Condición' es propiedad o atributo." },
            { word: "cuño", score: 100, feedback: "¡Perfecto! 'Cuño' (sello, marca) implica que la investigación lleva la marca distintiva de lo teórico, definiendo su propósito." }
        ],
        bestAnswer: "cuño",
        explanation: "El 'cuño' de una investigación es su orientación fundamental, el sello que la identifica como teórica, abstracta y desinteresada en la aplicación inmediata."
    },
    {
        id: "es-286",
        sentence: "La vileza de sus intenciones, ocultas tras una sonrisa, solo se reveló demasiado tarde.",
        targetWord: "vileza",
        targetWordIndex: 5,
        options: [
            { word: "bajeza", score: 95, feedback: "'Bajeza' es falta de nobleza, despreciable." },
            { word: "maldad", score: 92, feedback: "'Maldad' es cualidad de malo, pero puede ser más evidente." },
            { word: "ruindad", score: 100, feedback: "¡Perfecto! 'Ruindad' es vileza mezclada con mezquindad y traición, especialmente cuando está oculta bajo una apariencia amable." },
            { word: "infamia", score: 90, feedback: "'Infamia' es fama de vil, pero se refiere más a la reputación." }
        ],
        bestAnswer: "ruindad",
        explanation: "La 'ruindad' es una vileza cobarde que se esconde detrás de una máscara de cordialidad, haciendo que su revelación sea doblemente traumática."
    },
    {
        id: "es-287",
        sentence: "La parquedad de recursos naturales en la región obligaba a una gestión extremadamente cuidadosa.",
        targetWord: "parquedad",
        targetWordIndex: 5,
        options: [
            { word: "escasez", score: 95, feedback: "'Escasez' es insuficiencia, falta de abundancia." },
            { word: "limitación", score: 90, feedback: "'Limitación' es restricción, pero puede ser cuantitativa o cualitativa." },
            { word: "penuria", score: 92, feedback: "'Penuria' es extrema pobreza o escasez, más fuerte." },
            { word: "exigüidad", score: 100, feedback: "¡Perfecto! 'Exigüidad' es cualidad de exiguo, es decir, muy escaso o insuficiente, requiriendo máxima eficiencia en la gestión." }
        ],
        bestAnswer: "exigüidad",
        explanation: "La 'exigüidad' es una parquedad crítica, donde los recursos son tan limitados que su gestión se convierte en una cuestión de supervivencia."
    },
    {
        id: "es-288",
        sentence: "La premura del tiempo disponible para completar el proyecto generaba una gran ansiedad.",
        targetWord: "premura",
        targetWordIndex: 5,
        options: [
            { word: "escasez", score: 90, feedback: "'Escasez' se aplica a cantidad, no directamente al tiempo." },
            { word: "limitación", score: 92, feedback: "'Limitación' es restricción, adecuado para tiempo." },
            { word: "urgencia", score: 95, feedback: "'Urgencia' es necesidad apremiante, muy cercano." },
            { word: "estrechez", score: 100, feedback: "¡Perfecto! 'Estrechez' (de tiempo) sugiere que el margen es tan ajustado que genera presión y ansiedad." }
        ],
        bestAnswer: "estrechez",
        explanation: "La 'estrechez' de tiempo es una premura que constriñe, que no deja espacio para errores o imprevistos, creando una ansiedad constante."
    },
    {
        id: "es-289",
        sentence: "La perspicacia de sus observaciones sobre la naturaleza humana era asombrosa.",
        targetWord: "perspicacia",
        targetWordIndex: 5,
        options: [
            { word: "agudeza", score: 95, feedback: "'Agudeza' es penetración mental, capacidad para percibir detalles finos." },
            { word: "sagacidad", score: 92, feedback: "'Sagacidad' es astucia y perspicacia, casi sinónimo." },
            { word: "discernimiento", score: 100, feedback: "¡Perfecto! 'Discernimiento' es la facultad de distinguir y juzgar con claridad, especialmente en temas complejos como la naturaleza humana." },
            { word: "inteligencia", score: 90, feedback: "'Inteligencia' es capacidad de entender, pero es más general." }
        ],
        bestAnswer: "discernimiento",
        explanation: "El 'discernimiento' es una perspicacia que va más allá de la mera observación; implica juicio ético y comprensión profunda de motivaciones y contradicciones humanas."
    },
    {
        id: "es-290",
        sentence: "La laxitud en la aplicación de la ley generaba una sensación de impunidad.",
        targetWord: "laxitud",
        targetWordIndex: 5,
        options: [
            { word: "relajación", score: 95, feedback: "'Relajación' es aflojamiento de normas, muy adecuado." },
            { word: "permisividad", score: 92, feedback: "'Permisividad' es tolerancia excesiva, que puede causar laxitud." },
            { word: "negligencia", score: 90, feedback: "'Negligencia' es descuido, pero puede no ser intencional." },
            { word: "dejadez", score: 100, feedback: "¡Perfecto! 'Dejadez' implica abandono y falta de rigor en el cumplimiento del deber, lo cual alimenta directamente la impunidad." }
        ],
        bestAnswer: "dejadez",
        explanation: "La 'dejadez' es una laxitud por indolencia o desinterés, un fracaso del sistema en hacer cumplir sus propias reglas, erosionando la fe en la justicia."
    },
    {
        id: "es-291",
        sentence: "La lozanía del césped después del riego era un testimonio del cuidado del jardinero.",
        targetWord: "lozanía",
        targetWordIndex: 5,
        options: [
            { word: "frescura", score: 95, feedback: "'Frescura' es cualidad de fresco, lozano, muy cercano." },
            { word: "verdor", score: 92, feedback: "'Verdor' es color verde intenso, signo de salud en las plantas." },
            { word: "vigor", score: 90, feedback: "'Vigor' es fuerza y energía, aplicable." },
            { word: "frondosidad", score: 100, feedback: "¡Perfecto! 'Frondosidad' es abundancia y lozanía de hojas, un indicador visible de cuidado y salud excelentes." }
        ],
        bestAnswer: "frondosidad",
        explanation: "La 'frondosidad' es una lozanía exuberante y tangible, donde la densidad y el brillo del follaje celebran la dedicación del cuidador."
    },
    {
        id: "es-292",
        sentence: "La índole de sus objeciones, más emocionales que racionales, dificultaba el diálogo.",
        targetWord: "índole",
        targetWordIndex: 5,
        options: [
            { word: "naturaleza", score: 95, feedback: "'Naturaleza' es esencia o carácter, casi sinónimo." },
            { word: "carácter", score: 90, feedback: "'Carácter' es cualidad distintiva, similar." },
            { word: "condición", score: 92, feedback: "'Condición' es propiedad o atributo." },
            { word: "cuña", score: 100, feedback: "¡Perfecto! 'Cuña' (en sentido figurado, como 'cuño') implica que las objeciones llevan la marca de lo emocional, definiendo su esencia problemática." }
        ],
        bestAnswer: "cuña",
        explanation: "La 'cuña' de una objeción es su raíz, el material del que está hecha; si es emocional, resiste la lógica y hace el diálogo casi imposible."
    },
    {
        id: "es-293",
        sentence: "La vileza del acto de vandalismo contra el monumento histórico indignó a la comunidad.",
        targetWord: "vileza",
        targetWordIndex: 5,
        options: [
            { word: "bajeza", score: 95, feedback: "'Bajeza' es falta de nobleza, acto despreciable." },
            { word: "maldad", score: 92, feedback: "'Maldad' es cualidad de malo, pero puede ser más abstracta." },
            { word: "infamia", score: 100, feedback: "¡Perfecto! 'Infamia' es notoria maldad que ofende el sentido colectivo, como atacar un símbolo histórico compartido." },
            { word: "ruindad", score: 90, feedback: "'Ruindad' es vileza mezclada con mezquindad, quizás menos adecuada para un acto público." }
        ],
        bestAnswer: "infamia",
        explanation: "La 'infamia' es una vileza que se comete contra la memoria colectiva, un ataque a símbolos que define a una comunidad, generando indignación generalizada."
    },
    {
        id: "es-294",
        sentence: "La parquedad de detalles en su relato dejaba muchas preguntas sin respuesta.",
        targetWord: "parquedad",
        targetWordIndex: 5,
        options: [
            { word: "escasez", score: 95, feedback: "'Escasez' es insuficiencia, falta de detalles." },
            { word: "limitación", score: 90, feedback: "'Limitación' es restricción, pero puede ser intencional o no." },
            { word: "economía", score: 92, feedback: "'Economía' (narrativa) es uso restringido de elementos, a veces deliberado." },
            { word: "sobriedad", score: 100, feedback: "¡Perfecto! 'Sobriedad' narrativa es una parquedad estilística que omite detalles para crear misterio o sugerir más de lo que dice." }
        ],
        bestAnswer: "sobriedad",
        explanation: "La 'sobriedad' en un relato es una economía deliberada de palabras, donde lo no dicho es tan importante como lo dicho, generando incógnitas intencionales."
    },
    {
        id: "es-295",
        sentence: "La premura con la que juzgó la situación lo llevó a tomar una decisión errónea.",
        targetWord: "premura",
        targetWordIndex: 5,
        options: [
            { word: "prisa", score: 95, feedback: "'Prisa' es rapidez, a menudo innecesaria o contraproducente." },
            { word: "urgencia", score: 90, feedback: "'Urgencia' implica necesidad inmediata, pero aquí parece haber sido percibida erróneamente." },
            { word: "precipitación", score: 100, feedback: "¡Perfecto! 'Precipitación' es prisa excesiva y temeraria, que lleva a juicios apresurados y decisiones equivocadas." },
            { word: "celeridad", score: 85, feedback: "'Celeridad' es velocidad, pero sin la connotación negativa de imprudencia." }
        ],
        bestAnswer: "precipitación",
        explanation: "La 'precipitación' es una premura irreflexiva, un saltar a conclusiones sin la debida ponderación, que casi garantiza el error."
    },
    {
        id: "es-296",
        sentence: "La perspicacia de su mirada parecía atravesar las paredes y ver lo oculto.",
        targetWord: "perspicacia",
        targetWordIndex: 5,
        options: [
            { word: "agudeza", score: 95, feedback: "'Agudeza' es penetración mental, capacidad de ver más allá de lo evidente." },
            { word: "sagacidad", score: 92, feedback: "'Sagacidad' es astucia y perspicacia, casi sinónimo." },
            { word: "penetración", score: 100, feedback: "¡Perfecto! 'Penetración' es la cualidad de una mirada o intelecto que atraviesa las apariencias para alcanzar la verdad oculta." },
            { word: "inteligencia", score: 90, feedback: "'Inteligencia' es capacidad de entender, pero es más general." }
        ],
        bestAnswer: "penetración",
        explanation: "La 'penetración' es una perspicacia activa y casi física, una facultad que disuelve los velos de la ilusión para revelar lo que yace debajo."
    },
    {
        id: "es-297",
        sentence: "La laxitud moral de la época permitía comportamientos que hoy se considerarían escandalosos.",
        targetWord: "laxitud",
        targetWordIndex: 5,
        options: [
            { word: "relajación", score: 95, feedback: "'Relajación' es aflojamiento de normas morales, muy adecuado." },
            { word: "permisividad", score: 92, feedback: "'Permisividad' es tolerancia excesiva, que caracteriza épocas laxas." },
            { word: "degradación", score: 90, feedback: "'Degradación' implica declive y corrupción, que puede ser resultado pero no es sinónimo." },
            { word: "licenciosidad", score: 100, feedback: "¡Perfecto! 'Licenciosidad' es laxitud moral extrema, libertinaje y desenfreno en el comportamiento." }
        ],
        bestAnswer: "licenciosidad",
        explanation: "La 'licenciosidad' es una laxitud moral institucionalizada, donde los límites éticos se han dilatado tanto que lo escandaloso se vuelve norma."
    },
    {
        id: "es-298",
        sentence: "La lozanía de su entusiasmo por el proyecto contagió a todo el equipo.",
        targetWord: "lozanía",
        targetWordIndex: 5,
        options: [
            { word: "frescura", score: 95, feedback: "'Frescura' es cualidad de fresco, nuevo y vigoroso." },
            { word: "vigor", score: 92, feedback: "'Vigor' es fuerza y energía, aplicable al entusiasmo." },
            { word: "pujanza", score: 90, feedback: "'Pujanza' es fuerza en crecimiento, a veces más aplicada a cosas que a personas." },
            { word: "vehemencia", score: 100, feedback: "¡Perfecto! 'Vehemencia' es entusiasmo intenso y apasionado, que se comunica fácilmente a los demás." }
        ],
        bestAnswer: "vehemencia",
        explanation: "La 'vehemencia' es una lozanía emocional ardiente, un entusiasmo tan poderoso que actúa como un virus positivo, infectando e inspirando a todo un grupo."
    },
    {
        id: "es-299",
        sentence: "La índole técnica del manual lo hacía incomprensible para los no iniciados.",
        targetWord: "índole",
        targetWordIndex: 5,
        options: [
            { word: "naturaleza", score: 95, feedback: "'Naturaleza' es esencia o carácter, casi sinónimo." },
            { word: "carácter", score: 90, feedback: "'Carácter' es cualidad distintiva, similar." },
            { word: "condición", score: 92, feedback: "'Condición' es propiedad o atributo." },
            { word: "jaez", score: 100, feedback: "¡Perfecto! 'Jaez' (calidad, condición) en un contexto técnico implica un nivel de especialización que excluye a los legos." }
        ],
        bestAnswer: "jaez",
        explanation: "El 'jaez' técnico de un documento es su nivel de especialización, un lenguaje y una estructura pensados solo para expertos, creando una barrera para los demás."
    },
    {
        id: "es-300",
        sentence: "La vileza de la traición, cometida por su mejor amigo, lo dejó sumido en una profunda depresión.",
        targetWord: "vileza",
        targetWordIndex: 5,
        options: [
            { word: "bajeza", score: 95, feedback: "'Bajeza' es falta de nobleza, acto despreciable, especialmente hiriente viniendo de un amigo." },
            { word: "maldad", score: 92, feedback: "'Maldad' es cualidad de malo, pero puede ser impersonal." },
            { word: "alevosía", score: 100, feedback: "¡Perfecto! 'Alevosía' es vileza en la traición, actuar a traición y con ventaja, agravando el daño moral." },
            { word: "infamia", score: 90, feedback: "'Infamia' es notoria maldad, pero se enfoca más en la reputación." }
        ],
        bestAnswer: "alevosía",
        explanation: "La 'alevosía' es una vileza que aprovecha la confianza y la proximidad para infligir el daño máximo, un golpe bajo que deja cicatrices psicológicas profundas."
    },
    {
        id: "es-301",
        sentence: "La reticencia de los testigos a colaborar con la investigación obstaculizaba significativamente el caso.",
        targetWord: "reticencia",
        targetWordIndex: 5,
        options: [
            { word: "renuencia", score: 90, feedback: "'Renuencia' implica resistencia o desgana, pero 'reticencia' sugiere específicamente una reserva o silencio cauteloso." },
            { word: "vacilación", score: 85, feedback: "'Vacilación' es duda o indecisión, que podría preceder a la reticencia pero no es lo mismo." },
            { word: "mutismo", score: 95, feedback: "'Mutismo' es negativa a hablar, muy cercano, pero puede ser más absoluto y patológico." },
            { word: "parquedad", score: 100, feedback: "¡Perfecto! 'Parquedad' en el hablar es economía extrema de palabras, una forma de reticencia que deliberadamente da poca información." }
        ],
        bestAnswer: "parquedad",
        explanation: "La 'parquedad' como reticencia es una estrategia calculada de comunicación mínima, que protege al testigo mientras frustra la investigación al retener datos cruciales."
    },
    {
        id: "es-302",
        sentence: "La sagacidad del comerciante para detectar oportunidades en el mercado era proverbial.",
        targetWord: "sagacidad",
        targetWordIndex: 5,
        options: [
            { word: "perspicacia", score: 95, feedback: "'Perspicacia' es agudeza mental para comprender, muy cercana a la sagacidad comercial." },
            { word: "astucia", score: 92, feedback: "'Astucia' implica habilidad para engañar o lograr fines, a veces con connotación negativa." },
            { word: "inteligencia", score: 88, feedback: "'Inteligencia' es capacidad de entender, pero es más general y menos específica para oportunidades de mercado." },
            { word: "olfato", score: 100, feedback: "¡Perfecto! 'Olfacto' (en sentido figurado) denota una sagacidad casi instintiva para detectar oportunidades, como el olfato de un animal para la presa." }
        ],
        bestAnswer: "olfato",
        explanation: "El 'olfato' comercial es una habilidad intuitiva y aguda para percibir tendencias y oportunidades antes que los demás, combinando experiencia con instinto."
    },
    {
        id: "es-303",
        sentence: "La vehemencia de su defensa de las tradiciones culturales generaba tanto admiración como controversia.",
        targetWord: "vehemencia",
        targetWordIndex: 5,
        options: [
            { word: "pasión", score: 95, feedback: "'Pasión' es emoción intensa, similar, pero 'vehemencia' añade un matiz de fuerza y ardor en la expresión." },
            { word: "fervor", score: 92, feedback: "'Fervor' es entusiasmo ardiente, a menudo religioso o ideológico." },
            { word: "ardor", score: 90, feedback: "'Ardor' es calor y vehemencia, muy cercano." },
            { word: "ímpetu", score: 100, feedback: "¡Perfecto! 'Ímpetu' combina vehemencia con un impulso vigoroso y a veces irreflexivo, lo cual explica tanto la admiración como la controversia." }
        ],
        bestAnswer: "ímpetu",
        explanation: "El 'ímpetu' es una vehemencia que actúa como fuerza motriz, impulsando la defensa de las tradiciones con tal energía que inevitablemente provoca reacciones encontradas."
    },
    {
        id: "es-304",
        sentence: "La opacidad de las intenciones del gobierno en el manejo de la crisis generaba desconfianza pública.",
        targetWord: "opacidad",
        targetWordIndex: 5,
        options: [
            { word: "oscuridad", score: 85, feedback: "'Oscuridad' es falta de luz, metafóricamente falta de claridad, pero es menos idiomático para intenciones." },
            { word: "hermetismo", score: 95, feedback: "'Hermetismo' implica sellado completo, secreto absoluto, muy adecuado para intenciones gubernamentales." },
            { word: "ambigüedad", score: 90, feedback: "'Ambigüedad' permite múltiples interpretaciones, pero la opacidad puede ser un bloqueo total a la información." },
            { word: "velo", score: 100, feedback: "¡Perfecto! 'Velo' (como sustantivo usado metafóricamente) sugiere una opacidad deliberada, un cubrimiento que oculta las intenciones reales." }
        ],
        bestAnswer: "velo",
        explanation: "El 'velo' sobre las intenciones es una opacidad activamente mantenida, una política de no transparencia que alimenta la desconfianza al negar el derecho a saber."
    },
    {
        id: "es-305",
        sentence: "La meticulosidad del relojero suizo era legendaria; cada pieza era examinada con lupa.",
        targetWord: "meticulosidad",
        targetWordIndex: 5,
        options: [
            { word: "minuciosidad", score: 95, feedback: "'Minuciosidad' es atención extrema a los detalles, casi sinónimo." },
            { word: "esmero", score: 92, feedback: "'Esmero' es cuidado y diligencia, pero puede no alcanzar el nivel obsesivo de la meticulosidad." },
            { word: "puntillosidad", score: 90, feedback: "'Puntillosidad' es meticulosidad excesiva, a veces hasta lo ridículo." },
            { word: "acuciosidad", score: 100, feedback: "¡Perfecto! 'Acuciosidad' es diligencia escrupulosa y constante, una meticulosidad sostenida por un sentido del deber casi moral." }
        ],
        bestAnswer: "acuciosidad",
        explanation: "La 'acuciosidad' es una meticulosidad alimentada por la consciencia profesional, donde cada detalle es una responsabilidad ética, no solo técnica."
    },
    {
        id: "es-306",
        sentence: "La avidez con la que el joven académico devoraba los textos clásicos impresionaba a sus profesores.",
        targetWord: "avidez",
        targetWordIndex: 5,
        options: [
            { word: "ansia", score: 95, feedback: "'Ansia' es deseo vehemente, similar, pero puede tener connotación de angustia." },
            { word: "hambre", score: 92, feedback: "'Hambre' (metafórica) es deseo intenso, muy gráfico." },
            { word: "voracidad", score: 100, feedback: "¡Perfecto! 'Voracidad' aplicada a la lectura sugiere una avidez que consume rápidamente y en grandes cantidades, como un depredador." },
            { word: "codicia", score: 85, feedback: "'Codicia' es deseo excesivo de riqueza, no aplicable al conocimiento." }
        ],
        bestAnswer: "voracidad",
        explanation: "La 'voracidad' intelectual es una avidez insaciable y expansiva, un apetito por el conocimiento que no se sacia sino que crece con lo consumido."
    },
    {
        id: "es-307",
        sentence: "La parsimonia con la que se desarrollaban los acontecimientos en la aldea contrastaba con el frenesí de la ciudad.",
        targetWord: "parsimonia",
        targetWordIndex: 5,
        options: [
            { word: "lentitud", score: 90, feedback: "'Lentitud' es cualidad de lento, pero carece del matiz de tranquilidad o deliberación." },
            { word: "pausa", score: 85, feedback: "'Pausa' es una interrupción, no un ritmo constante." },
            { word: "morosidad", score: 95, feedback: "'Morosidad' es lentitud excesiva, a veces por negligencia." },
            { word: "sosegamiento", score: 100, feedback: "¡Perfecto! 'Sosegamiento' es estado de sosiego, calma y tranquilidad, que explica el ritmo pausado de la vida aldeana." }
        ],
        bestAnswer: "sosegamiento",
        explanation: "El 'sosegamiento' es una parsimonia que brota de la paz interior y la armonía con el entorno, un ritmo de vida conscientemente alejado del frenesí."
    },
    {
        id: "es-308",
        sentence: "La perplejidad del científico ante los resultados anómalos del experimento era palpable.",
        targetWord: "perplejidad",
        targetWordIndex: 5,
        options: [
            { word: "confusión", score: 90, feedback: "'Confusión' es desorden mental, pero la perplejidad implica más sorpresa e incapacidad para comprender." },
            { word: "desconcierto", score: 95, feedback: "'Desconcierto' es turbación o desorientación, muy cercano." },
            { word: "asombro", score: 88, feedback: "'Asombro' es sorpresa grande, pero puede ser positiva." },
            { word: "estupefacción", score: 100, feedback: "¡Perfecto! 'Estupefacción' es perplejidad extrema que deja atónito, paralizando temporalmente la capacidad de reacción." }
        ],
        bestAnswer: "estupefacción",
        explanation: "La 'estupefacción' es una perplejidad que suspende las facultades, una confrontación con lo inexplicable que desafía los marcos establecidos del conocimiento."
    },
    {
        id: "es-309",
        sentence: "La exuberancia verbal del poeta barroco a menudo oscurecía el significado central de sus versos.",
        targetWord: "exuberancia",
        targetWordIndex: 5,
        options: [
            { word: "abundancia", score: 90, feedback: "'Abundancia' es gran cantidad, pero no necesariamente con la vitalidad y exceso de 'exuberancia'." },
            { word: "profusión", score: 95, feedback: "'Profusión' es abundancia excesiva, muy adecuado para el estilo barroco." },
            { word: "prodigalidad", score: 92, feedback: "'Prodigalidad' es generosidad derrochadora, aplicable al lenguaje." },
            { word: "fecundidad", score: 100, feedback: "¡Perfecto! 'Fecundidad' verbal es una exuberancia creativa y generativa que produce más de lo necesario, a riesgo de ahogar el núcleo del mensaje." }
        ],
        bestAnswer: "fecundidad",
        explanation: "La 'fecundidad' poética es una exuberancia que nace de una imaginación hiperactiva, donde las palabras se multiplican hasta amenazar la claridad del pensamiento original."
    },
    {
        id: "es-310",
        sentence: "La tenacidad con la que la activista defendía su causa le granjeó el respeto incluso de sus detractores.",
        targetWord: "tenacidad",
        targetWordIndex: 5,
        options: [
            { word: "persistencia", score: 95, feedback: "'Persistencia' es firmeza constante en un propósito, casi sinónimo." },
            { word: "constancia", score: 92, feedback: "'Constancia' es perseverancia y firmeza, similar." },
            { word: "tesón", score: 100, feedback: "¡Perfecto! 'Tesón' es tenacidad obstinada y vigorosa, que no cede ante dificultades y obliga al respeto." },
            { word: "obstinación", score: 88, feedback: "'Obstinación' es terquedad, a menudo con connotación negativa de irracionalidad." }
        ],
        bestAnswer: "tesón",
        explanation: "El 'tesón' es una tenacidad que se fortalece con la resistencia, una cualidad que, cuando se ejerce por una causa justa, convierte la obstinación en virtud admirable."
    },
    {
        id: "es-311",
        sentence: "La languidez de la tarde estival invitaba a la ensoñación y a la melancolía.",
        targetWord: "languidez",
        targetWordIndex: 5,
        options: [
            { word: "modorra", score: 95, feedback: "'Modorra' es somnolencia y aletargamiento, pero puede ser más física que emocional." },
            { word: "lasitud", score: 100, feedback: "¡Perfecto! 'Lasitud' es languidez física y mental acompañada de una sensación de debilidad o desgano, que predispone a la ensoñación melancólica." },
            { word: "calma", score: 85, feedback: "'Calma' es tranquilidad, pero no necesariamente induce a estados contemplativos." },
            { word: "sopor", score: 90, feedback: "'Sopor' es somnolencia profunda, casi sueño, que puede ser demasiado extremo." }
        ],
        bestAnswer: "lasitud",
        explanation: "La 'lasitud' es una languidez que relaja tanto el cuerpo como la mente, abriendo la puerta a la introspección y a los sentimientos nostálgicos."
    },
    {
        id: "es-312",
        sentence: "La sagacidad política del antiguo estadista le permitió navegar por épocas de gran turbulencia.",
        targetWord: "sagacidad",
        targetWordIndex: 5,
        options: [
            { word: "perspicacia", score: 95, feedback: "'Perspicacia' es agudeza mental para comprender situaciones complejas, esencial en política." },
            { word: "astucia", score: 92, feedback: "'Astucia' es habilidad para engañar o lograr fines, a veces necesaria en política." },
            { word: "prudencia", score: 88, feedback: "'Prudencia' es cautela y sensatez, importante pero no es lo mismo que sagacidad." },
            { word: "realpolitik", score: 100, feedback: "¡Perfecto! 'Realpolitik' (del alemán) es una sagacidad política pragmática que prioriza los resultados y la viabilidad sobre la ideología, ideal para tiempos turbulentos." }
        ],
        bestAnswer: "realpolitik",
        explanation: "La 'Realpolitik' es la aplicación práctica de la sagacidad política, un enfoque que evalúa fríamente el poder y las circunstancias para tomar decisiones que aseguren la estabilidad."
    },
    {
        id: "es-313",
        sentence: "La vehemencia de la discusión en el consejo de administración amenazaba con paralizar la toma de decisiones.",
        targetWord: "vehemencia",
        targetWordIndex: 5,
        options: [
            { word: "intensidad", score: 90, feedback: "'Intensidad' es gran fuerza, pero no capta la pasión conflictiva de la vehemencia." },
            { word: "acaloramiento", score: 95, feedback: "'Acaloramiento' es excitación y vehemencia en la discusión, a menudo con enojo." },
            { word: "fogosidad", score: 92, feedback: "'Fogosidad' es ardor y pasión, similar." },
            { word: "exacerbación", score: 100, feedback: "¡Perfecto! 'Exacerbación' es aumento extremo de la vehemencia, llevando la discusión a un punto de conflicto que bloquea la acción." }
        ],
        bestAnswer: "exacerbación",
        explanation: "La 'exacerbación' es una vehemencia que ha cruzado el umbral de lo productivo, donde las pasiones individuales anulan la capacidad colectiva para decidir."
    },
    {
        id: "es-314",
        sentence: "La opacidad del lenguaje jurídico en el contrato dificultaba su comprensión para los legos.",
        targetWord: "opacidad",
        targetWordIndex: 5,
        options: [
            { word: "oscuridad", score: 90, feedback: "'Oscuridad' es falta de claridad, pero 'opacidad' sugiere una cualidad inherente que impide el paso de la luz (o la comprensión)." },
            { word: "hermetismo", score: 95, feedback: "'Hermetismo' implica un sellado completo, muy adecuado para jerga especializada." },
            { word: "densidad", score: 92, feedback: "'Densidad' se refiere a la concentración de información, que puede causar opacidad." },
            { word: "tecnicismo", score: 100, feedback: "¡Perfecto! 'Tecnicismo' es el uso excesivo de términos técnicos, una opacidad deliberada del lenguaje que excluye a los no iniciados." }
        ],
        bestAnswer: "tecnicismo",
        explanation: "El 'tecnicismo' es una opacidad construida mediante el uso de un vocabulario especializado, creando una barrera lingüística que protege el saber experto y margina al profano."
    },
    {
        id: "es-315",
        sentence: "La meticulosidad del proceso de restauración de la pintura garantizaba que cada pincelada original fuera respetada.",
        targetWord: "meticulosidad",
        targetWordIndex: 5,
        options: [
            { word: "minuciosidad", score: 95, feedback: "'Minuciosidad' es atención extrema a los detalles, esencial en restauración." },
            { word: "escrúpulo", score: 100, feedback: "¡Perfecto! 'Escrúpulo' implica una meticulosidad guiada por principios éticos y de integridad, crucial al tratar obras de arte." },
            { word: "puntillosidad", score: 90, feedback: "'Puntillosidad' es meticulosidad excesiva, a veces hasta lo molesto." },
            { word: "diligencia", score: 88, feedback: "'Diligencia' es cuidado y esmero, pero puede ser menos específica." }
        ],
        bestAnswer: "escrúpulo",
        explanation: "El 'escrúpulo' en restauración es una meticulosidad moral, un compromiso con la verdad material de la obra que prioriza la preservación sobre la interpretación."
    },
    {
        id: "es-316",
        sentence: "La avidez de conocimientos del autodidacta lo llevó a construir una biblioteca personal impresionante.",
        targetWord: "avidez",
        targetWordIndex: 5,
        options: [
            { word: "ansia", score: 95, feedback: "'Ansia' es deseo vehemente, similar, pero puede tener connotación de angustia." },
            { word: "sed", score: 100, feedback: "¡Perfecto! 'Sed' (de conocimiento) es una metáfora potente para una avidez insaciable y profunda, que impulsa a acumular libros como agua." },
            { word: "voracidad", score: 92, feedback: "'Voracidad' sugiere consumo rápido, pero un autodidacta puede ser más reflexivo." },
            { word: "codicia", score: 85, feedback: "'Codicia' es deseo excesivo de posesiones, generalmente materialistas." }
        ],
        bestAnswer: "sed",
        explanation: "La 'sed' de conocimiento es una avidez que nace de una necesidad intelectual primordial, una hambre que solo se calma (temporalmente) con la acumulación y estudio de libros."
    },
    {
        id: "es-317",
        sentence: "La parsimonia del ritual religioso, con sus gestos medidos y pausados, inspiraba recogimiento.",
        targetWord: "parsimonia",
        targetWordIndex: 5,
        options: [
            { word: "lentitud", score: 85, feedback: "'Lentitud' es cualidad de lento, pero sin la solemnidad y propósito del ritual." },
            { word: "solemnidad", score: 95, feedback: "'Solemnidad' es gravedad y ceremonia, que puede acompañar a la parsimonia ritual." },
            { word: "pausa", score: 80, feedback: "'Pausa' es una interrupción, no el ritmo constante de un ritual." },
            { word: "ritualidad", score: 100, feedback: "¡Perfecto! 'Ritualidad' es la cualidad de ritual, donde la parsimonia es parte esencial de su estructura ceremonial y su poder de inspirar recogimiento." }
        ],
        bestAnswer: "ritualidad",
        explanation: "La 'ritualidad' es la esencia performativa de un ritual, donde la parsimonia calculada de cada gesto crea un espacio temporal sagrado, facilitando la introspección."
    },
    {
        id: "es-318",
        sentence: "La perplejidad inicial del público ante la obra de vanguardia dio paso a un intenso debate crítico.",
        targetWord: "perplejidad",
        targetWordIndex: 5,
        options: [
            { word: "desconcierto", score: 95, feedback: "'Desconcierto' es turbación y desorientación, reacción común ante lo vanguardista." },
            { word: "confusión", score: 90, feedback: "'Confusión' es desorden mental, pero la perplejidad puede ser más productiva intelectualmente." },
            { word: "estupor", score: 92, feedback: "'Estupor' es asombro paralizante, a veces demasiado fuerte." },
            { word: "desasosiego", score: 100, feedback: "¡Perfecto! 'Desasosiego' es inquietud e intranquilidad, una perplejidad activa que motiva la búsqueda de sentido y genera debate." }
        ],
        bestAnswer: "desasosiego",
        explanation: "El 'desasosiego' es una perplejidad inquieta, una perturbación intelectual que rechaza la complacencia y empuja a la audiencia a interrogarla y discutirla."
    },
    {
        id: "es-319",
        sentence: "La exuberancia decorativa del salón de baile, con sus dorados y espejos, era casi agobiante.",
        targetWord: "exuberancia",
        targetWordIndex: 5,
        options: [
            { word: "profusión", score: 95, feedback: "'Profusión' es abundancia excesiva, muy adecuada para decoración recargada." },
            { word: "fastuosidad", score: 100, feedback: "¡Perfecto! 'Fastuosidad' es esplendor suntuoso y ostentoso, una exuberancia deliberada para mostrar riqueza y poder, que puede agobiar." },
            { word: "abigarramiento", score: 92, feedback: "'Abigarramiento' es mezcla excesiva y desordenada de colores o elementos, cercano." },
            { word: "riqueza", score: 85, feedback: "'Riqueza' es abundancia de adornos, pero es un término más neutro." }
        ],
        bestAnswer: "fastuosidad",
        explanation: "La 'fastuosidad' es una exuberancia diseñada para impresionar y dominar, donde el exceso ornamental busca abrumar los sentidos y afirmar status."
    },
    {
        id: "es-320",
        sentence: "La tenacidad de la resistencia popular ante el régimen autoritario finalmente logró erosionar su base de poder.",
        targetWord: "tenacidad",
        targetWordIndex: 5,
        options: [
            { word: "persistencia", score: 95, feedback: "'Persistencia' es firmeza constante, clave en movimientos de resistencia." },
            { word: "constancia", score: 92, feedback: "'Constancia' es perseverancia en el esfuerzo." },
            { word: "tesón", score: 100, feedback: "¡Perfecto! 'Tesón' es tenacidad infatigable y obstinada, la cualidad necesaria para una resistencia que debe soportar represión y desgaste." },
            { word: "obstinación", score: 88, feedback: "'Obstinación' es terquedad, a menudo irracional, mientras que la resistencia popular es estratégica." }
        ],
        bestAnswer: "tesón",
        explanation: "El 'tesón' de una resistencia popular es la cualidad colectiva de aferrarse a la lucha con una determinación que se fortalece con cada adversidad, desgastando lentamente al opresor."
    },
    {
        id: "es-321",
        sentence: "La languidez de la voz del cantante de blues transmitía una profunda tristeza existencial.",
        targetWord: "languidez",
        targetWordIndex: 5,
        options: [
            { word: "lasitud", score: 95, feedback: "'Lasitud' es languidez física y mental, aplicable a una voz cargada de cansancio vital." },
            { word: "morbidez", score: 90, feedback: "'Morbidez' puede sugerir suavidad o enfermedad, no necesariamente tristeza." },
            { word: "debilidad", score: 85, feedback: "'Debilidad' es falta de fuerza, pero la languidez en el blues es expresiva, no deficiente." },
            { word: "spleen", score: 100, feedback: "¡Perfecto! 'Spleen' (del francés, melancolía profunda) es una languidez del alma que el blues transforma en arte." }
        ],
        bestAnswer: "spleen",
        explanation: "El 'spleen' es una languidez espiritual, un cansancio del mundo que, en el blues, se convierte en la materia prima de una expresión estética conmovedora."
    },
    {
        id: "es-322",
        sentence: "La sagacidad del estratega militar se evidenció en su capacidad de anticipar todos los movimientos del enemigo.",
        targetWord: "sagacidad",
        targetWordIndex: 5,
        options: [
            { word: "perspicacia", score: 95, feedback: "'Perspicacia' es agudeza para comprender y prever, esencial en estrategia." },
            { word: "astucia", score: 92, feedback: "'Astucia' es habilidad para engañar, importante en guerra." },
            { word: "previsión", score: 90, feedback: "'Previsión' es anticipación, resultado de la sagacidad." },
            { word: "stratagema", score: 100, feedback: "¡Perfecto! 'Stratagema' (del griego, arte del general) implica una sagacidad práctica que se manifiesta en planes y tretas para superar al enemigo." }
        ],
        bestAnswer: "stratagema",
        explanation: "La 'stratagema' es la sagacidad militar puesta en acción, la capacidad de diseñar y ejecutar planes que confunden y superan al adversario mediante la anticipación inteligente."
    },
    {
        id: "es-323",
        sentence: "La vehemencia de la corriente del río en primavera hacía peligroso cualquier intento de cruzarlo.",
        targetWord: "vehemencia",
        targetWordIndex: 5,
        options: [
            { word: "fuerza", score: 90, feedback: "'Fuerza' es capacidad para ejercer poder, pero 'vehemencia' añade la idea de ímpetu violento e impetuoso." },
            { word: "impetuosidad", score: 95, feedback: "'Impetuosidad' es ímpetu violento y arrebatado, muy adecuado para una corriente." },
            { word: "violencia", score: 92, feedback: "'Violencia' es fuerza intensa y destructiva, aplicable." },
            { word: "torrencialidad", score: 100, feedback: "¡Perfecto! 'Torrencialidad' es cualidad de torrencial, es decir, con la vehemencia y abundancia de un torrente, especialmente peligrosa en un río." }
        ],
        bestAnswer: "torrencialidad",
        explanation: "La 'torrencialidad' es una vehemencia hidrológica, la fuerza concentrada y tumultuosa del agua que, en época de deshielo, convierte un río en una barrera infranqueable."
    },
    {
        id: "es-324",
        sentence: "La opacidad del cristal esmerilado garantizaba la privacidad en la sala de interrogatorios.",
        targetWord: "opacidad",
        targetWordIndex: 5,
        options: [
            { word: "traslucidez", score: 70, feedback: "'Traslucidez' es lo contrario: permite pasar la luz difusamente." },
            { word: "mate", score: 100, feedback: "¡Perfecto! 'Mate' (acabado) describe una superficie que no refleja la luz de manera especular, siendo opaca y difusa, ideal para privacidad." },
            { word: "brillo", score: 60, feedback: "'Brillo' implica reflexión de la luz, lo opuesto a opacidad." },
            { word: "translucidez", score: 75, feedback: "'Translucidez' permite el paso de la luz pero no la visión clara, no es totalmente opaco." }
        ],
        bestAnswer: "mate",
        explanation: "El acabado 'mate' en un cristal es una opacidad técnica que dispersa la luz, bloqueando la visión mientras permite la iluminación, equilibrando privacidad y luminosidad."
    },
    {
        id: "es-325",
        sentence: "La meticulosidad del bibliófilo en la catalogación de su colección era obsesiva pero encomiable.",
        targetWord: "meticulosidad",
        targetWordIndex: 5,
        options: [
            { word: "minuciosidad", score: 95, feedback: "'Minuciosidad' es atención extrema a los detalles, esencial en catalogación." },
            { word: "puntillosidad", score: 92, feedback: "'Puntillosidad' es meticulosidad excesiva, a veces hasta lo ridículo." },
            { word: "escrúpulo", score: 100, feedback: "¡Perfecto! 'Escrúpulo' en un bibliófilo es una meticulosidad guiada por un respeto casi reverencial hacia los libros y su orden." },
            { word: "diligencia", score: 88, feedback: "'Diligencia' es cuidado y esmero, pero menos específico." }
        ],
        bestAnswer: "escrúpulo",
        explanation: "El 'escrúpulo' bibliófilo es una meticulosidad que trata cada libro como un individuo único, cuyo lugar en el sistema debe reflejar su valor y relaciones con precisión absoluta."
    },
    {
        id: "es-326",
        sentence: "La avidez del coleccionista por adquirir la primera edición del libro lo llevó a subastas internacionales.",
        targetWord: "avidez",
        targetWordIndex: 5,
        options: [
            { word: "ansia", score: 95, feedback: "'Ansia' es deseo vehemente, similar, pero 'avidez' sugiere un deseo más activo y posesivo." },
            { word: "codicia", score: 92, feedback: "'Codicia' es deseo excesivo de poseer, a menudo con connotación negativa." },
            { word: "voracidad", score: 100, feedback: "¡Perfecto! 'Voracidad' aplicada al coleccionismo sugiere una avidez insaciable y depredadora, que busca y consume objetos raros." },
            { word: "afán", score: 90, feedback: "'Afán' es deseo vehemente, pero puede ser más general." }
        ],
        bestAnswer: "voracidad",
        explanation: "La 'voracidad' del coleccionista es una avidez que se alimenta de la rareza, una compulsión por poseer lo único que transforma la búsqueda en una caza global."
    },
    {
        id: "es-327",
        sentence: "La parsimonia del crecimiento del bonsái, medido en milímetros por año, requería una paciencia extraordinaria.",
        targetWord: "parsimonia",
        targetWordIndex: 5,
        options: [
            { word: "lentitud", score: 90, feedback: "'Lentitud' es cualidad de lento, pero la parsimonia en el bonsái es un ritmo controlado y estético." },
            { word: "pausa", score: 85, feedback: "'Pausa' es una interrupción, no un ritmo constante." },
            { word: "gradualidad", score: 95, feedback: "'Gradualidad' es progresión por grados, muy adecuada para crecimiento lento." },
            { word: "minimalismo", score: 100, feedback: "¡Perfecto! 'Minimalismo' (aplicado al crecimiento) sugiere una parsimonia deliberada y estilizada, donde lo poco y lento es una virtud artística." }
        ],
        bestAnswer: "minimalismo",
        explanation: "El 'minimalismo' en el crecimiento del bonsái es una parsimonia elevada a principio estético, donde la lentitud extrema es parte de la belleza y la disciplina del arte."
    },
    {
        id: "es-328",
        sentence: "La perplejidad del niño ante el complejo mecanismo del reloj antiguo era conmovedora.",
        targetWord: "perplejidad",
        targetWordIndex: 5,
        options: [
            { word: "asombro", score: 95, feedback: "'Asombro' es sorpresa mezclada con admiración, común en un niño ante algo complejo." },
            { word: "desconcierto", score: 92, feedback: "'Desconcierto' es turbación, similar." },
            { word: "fascinación", score: 90, feedback: "'Fascinación' es atracción poderosa, que puede incluir perplejidad." },
            { word: "puerilidad", score: 100, feedback: "¡Perfecto! 'Puerilidad' (en su sentido de propio de niño) describe una perplejidad inocente y sincera, conmovedora por su falta de pretensión." }
        ],
        bestAnswer: "puerilidad",
        explanation: "La 'puerilidad' de la perplejidad es su cualidad infantil, una mezcla de curiosidad, desconcierto y maravilla que conmueve por su pureza y apertura ante lo misterioso."
    },
    {
        id: "es-329",
        sentence: "La exuberancia de la vegetación en la selva lluviosa creaba un dosel tan denso que apenas llegaba la luz al suelo.",
        targetWord: "exuberancia",
        targetWordIndex: 5,
        options: [
            { word: "profusión", score: 95, feedback: "'Profusión' es abundancia excesiva, muy adecuada para la vegetación selvática." },
            { word: "lujuriosidad", score: 100, feedback: "¡Perfecto! 'Lujuriosidad' (de la vegetación) es una exuberancia salvaje, descontrolada y vital, que compite ferozmente por la luz." },
            { word: "frondosidad", score: 92, feedback: "'Frondosidad' es abundancia de hojas y ramas, cercano." },
            { word: "espesura", score: 90, feedback: "'Espesura' es densidad, resultado de la exuberancia." }
        ],
        bestAnswer: "lujuriosidad",
        explanation: "La 'lujuriosidad' de la selva es una exuberancia competitiva y casi agresiva, donde las plantas crecen en una lucha darwiniana por la luz, creando una capa impenetrable."
    },
    {
        id: "es-330",
        sentence: "La tenacidad de la tradición oral en la comunidad aseguró la preservación de historias ancestrales.",
        targetWord: "tenacidad",
        targetWordIndex: 5,
        options: [
            { word: "persistencia", score: 95, feedback: "'Persistencia' es continuidad en el tiempo, esencial para tradiciones." },
            { word: "constancia", score: 92, feedback: "'Constancia' es firmeza y perseverancia." },
            { word: "resiliencia", score: 100, feedback: "¡Perfecto! 'Resiliencia' es la capacidad de resistir y adaptarse, una tenacidad dinámica que permite a la tradición oral sobrevivir a cambios y amenazas." },
            { word: "obstinación", score: 88, feedback: "'Obstinación' es terquedad, que puede ser rígida y contraproducente para la adaptación." }
        ],
        bestAnswer: "resiliencia",
        explanation: "La 'resiliencia' de una tradición oral es una tenacidad flexible, una capacidad de perdurar no por inmutabilidad, sino por su habilidad para transformarse y ser relevante para cada nueva generación."
    },
    {
        id: "es-331",
        sentence: "La languidez del mercado bursátil durante el verano reflejaba la renuencia general de los inversores a asumir riesgos.",
        targetWord: "languidez",
        targetWordIndex: 5,
        options: [
            { word: "modorra", score: 95, feedback: "'Modorra' es estado de sopor e inactividad, metáfora perfecta para un mercado lento." },
            { word: "estancamiento", score: 92, feedback: "'Estancamiento' es falta de crecimiento o movimiento." },
            { word: "letargo", score: 100, feedback: "¡Perfecto! 'Letargo' es un estado de sopor e inactividad profunda, como el sueño, que describe perfectamente un mercado sin dinamismo." },
            { word: "calma", score: 85, feedback: "'Calma' es tranquilidad, pero en finanzas puede ser positiva (mercado estable)." }
        ],
        bestAnswer: "letargo",
        explanation: "El 'letargo' bursátil es una languidez generalizada, un estado de mínima actividad donde la cautela y la inercia dominan, reflejando un consenso de aversión al riesgo."
    },
    {
        id: "es-332",
        sentence: "La sagacidad del periodista de investigación para desentrañar la red de corrupción le valió un premio prestigioso.",
        targetWord: "sagacidad",
        targetWordIndex: 5,
        options: [
            { word: "perspicacia", score: 95, feedback: "'Perspicacia' es agudeza para descubrir verdades ocultas, esencial en periodismo." },
            { word: "instinto", score: 92, feedback: "'Instinto' es intuición natural, importante para seguir pistas." },
            { word: "olfato", score: 100, feedback: "¡Perfecto! 'Olfacto' periodístico es una sagacidad casi animal para detectar el engaño y seguir el rastro de la corrupción." },
            { word: "astucia", score: 90, feedback: "'Astucia' es habilidad para engañar, pero el periodista busca revelar, no engañar." }
        ],
        bestAnswer: "olfato",
        explanation: "El 'olfato' del periodista de investigación es una sagacidad entrenada para percibir lo que huele mal en los discursos oficiales, guiándolo a través del laberinto de la corrupción."
    },
    {
        id: "es-333",
        sentence: "La vehemencia del rechazo popular al proyecto de ley obligó al gobierno a retirarlo.",
        targetWord: "vehemencia",
        targetWordIndex: 5,
        options: [
            { word: "intensidad", score: 90, feedback: "'Intensidad' es gran fuerza, pero 'vehemencia' añade el matiz de pasión y fuerza emocional." },
            { word: "firmeza", score: 88, feedback: "'Firmeza' es resolución, pero puede ser tranquila." },
            { word: "contundencia", score: 95, feedback: "'Contundencia' es fuerza decisiva y aplastante, muy adecuada para un rechazo que obliga a retroceder." },
            { word: "virulencia", score: 100, feedback: "¡Perfecto! 'Virulencia' es vehemencia agresiva y contagiosa, como una reacción popular que se extiende rápidamente y es imposible de ignorar." }
        ],
        bestAnswer: "virulencia",
        explanation: "La 'virulencia' del rechazo popular es una vehemencia que se propaga como un incendio, una fuerza colectiva tan intensa y generalizada que deja al gobierno sin opción más que ceder."
    },
    {
        id: "es-334",
        sentence: "La opacidad de la niebla matutina reducía la visibilidad en la carretera a unos pocos metros.",
        targetWord: "opacidad",
        targetWordIndex: 5,
        options: [
            { word: "densidad", score: 95, feedback: "'Densidad' es concentración de partículas, lo que causa la opacidad de la niebla." },
            { word: "espesura", score: 92, feedback: "'Espesura' es grosor o densidad, aplicable a niebla." },
            { word: "bruma", score: 90, feedback: "'Bruma' es niebla ligera, pero es el fenómeno, no su cualidad." },
            { word: "ceguera", score: 100, feedback: "¡Perfecto! 'Ceguera' (metafórica) describe una opacidad tan absoluta que priva del sentido de la vista, una limitación peligrosa en la carretera." }
        ],
        bestAnswer: "ceguera",
        explanation: "La 'ceguera' inducida por la niebla es una opacidad ambiental que anula la capacidad de ver, transformando el paisaje familiar en un espacio amenazante y desconocido."
    },
    {
        id: "es-335",
        sentence: "La meticulosidad del archivista en la preservación de documentos históricos era un servicio invaluable para la posteridad.",
        targetWord: "meticulosidad",
        targetWordIndex: 5,
        options: [
            { word: "minuciosidad", score: 95, feedback: "'Minuciosidad' es atención extrema a los detalles, fundamental en archivos." },
            { word: "escrúpulo", score: 100, feedback: "¡Perfecto! 'Escrúpulo' en un archivista es una meticulosidad guiada por un sentido de responsabilidad histórica, tratando cada documento como un fragmento irrecuperable de la memoria colectiva." },
            { word: "puntillosidad", score: 90, feedback: "'Puntillosidad' es meticulosidad excesiva, a veces criticable." },
            { word: "cuidado", score: 85, feedback: "'Cuidado' es atención, pero es un término más general." }
        ],
        bestAnswer: "escrúpulo",
        explanation: "El 'escrúpulo' del archivista es una meticulosidad que reconoce el valor del tiempo, sabiendo que su trabajo hoy determina lo que las generaciones futuras podrán conocer del pasado."
    },
    {
        id: "es-336",
        sentence: "La avidez del biólogo por descubrir nuevas especies lo llevó a expediciones en los lugares más remotos del planeta.",
        targetWord: "avidez",
        targetWordIndex: 5,
        options: [
            { word: "ansia", score: 95, feedback: "'Ansia' es deseo vehemente, similar, pero 'avidez' sugiere un apetito más activo y sostenido." },
            { word: "sed", score: 92, feedback: "'Sed' (de conocimiento) es una metáfora fuerte para el deseo de descubrir." },
            { word: "voracidad", score: 100, feedback: "¡Perfecto! 'Voracidad' científica es una avidez insaciable por catalogar la biodiversidad, que impulsa a explorar los últimos rincones inexplorados." },
            { word: "codicia", score: 85, feedback: "'Codicia' es deseo de posesión, no aplicable al conocimiento científico desinteresado." }
        ],
        bestAnswer: "voracidad",
        explanation: "La 'voracidad' del biólogo explorador es una avidez que se alimenta de lo desconocido, un impulso por nombrar y comprender la vida en todas sus formas antes de que desaparezca."
    },
    {
        id: "es-337",
        sentence: "La parsimonia del proceso de decantación del vino añejo era parte esencial de su ritual de disfrute.",
        targetWord: "parsimonia",
        targetWordIndex: 5,
        options: [
            { word: "lentitud", score: 90, feedback: "'Lentitud' es cualidad de lento, pero la parsimonia en la decantación es un ritmo deliberado y ceremonial." },
            { word: "pausa", score: 85, feedback: "'Pausa' es una interrupción, mientras que la decantación es un flujo continuo pero lento." },
            { word: "ritual", score: 95, feedback: "'Ritual' (como cualidad) implica que la parsimonia es parte de una ceremonia con significado cultural." },
            { word: "ceremonial", score: 100, feedback: "¡Perfecto! 'Ceremonial' describe una parsimonia que sigue un protocolo establecido, donde la lentitud misma es un acto de respeto y anticipación." }
        ],
        bestAnswer: "ceremonial",
        explanation: "El 'ceremonial' de la decantación es una parsimonia performativa, donde cada movimiento lento sirve para oxigenar el vino y, simultáneamente, para elevar la experiencia sensorial a un acto cultural."
    },
    {
        id: "es-338",
        sentence: "La perplejidad del matemático ante la aparente contradicción en la prueba lo llevó a revisarla docenas de veces.",
        targetWord: "perplejidad",
        targetWordIndex: 5,
        options: [
            { word: "confusión", score: 90, feedback: "'Confusión' es desorden mental, pero la perplejidad del matemático es más una crisis lógica que emocional." },
            { word: "desconcierto", score: 95, feedback: "'Desconcierto' es turbación ante algo inesperado, muy adecuado en matemáticas." },
            { word: "dilema", score: 92, feedback: "'Dilema' es situación con opciones conflictivas, que puede causar perplejidad." },
            { word: "aporía", score: 100, feedback: "¡Perfecto! 'Aporía' (en lógica) es una perplejidad profunda causada por una contradicción aparente en el razonamiento, que exige una revisión exhaustiva." }
        ],
        bestAnswer: "aporía",
        explanation: "La 'aporía' es una perplejidad constitutiva de la investigación racional, un punto de contradicción que, en lugar de desanimar, impulsa al matemático a buscar el error oculto y refinar la prueba."
    },
    {
        id: "es-339",
        sentence: "La exuberancia de la imaginación del escritor de ciencia ficción poblaba sus novelas de mundos y criaturas fantásticas.",
        targetWord: "exuberancia",
        targetWordIndex: 5,
        options: [
            { word: "fecundidad", score: 100, feedback: "¡Perfecto! 'Fecundidad' imaginativa es una exuberancia creativa que genera una proliferación constante de ideas, personajes y escenarios." },
            { word: "profusión", score: 95, feedback: "'Profusión' es abundancia, pero 'fecundidad' enfatiza la capacidad generativa." },
            { word: "fertilidad", score: 92, feedback: "'Fertilidad' es capacidad de producir, similar a fecundidad." },
            { word: "riqueza", score: 90, feedback: "'Riqueza' es abundancia de ideas, pero es menos dinámica." }
        ],
        bestAnswer: "fecundidad",
        explanation: "La 'fecundidad' imaginativa es una exuberancia que no se contenta con lo dado, sino que inventa, combina y extrapola, creando universos literarios completos y autónomos."
    },
    {
        id: "es-340",
        sentence: "La tenacidad de la costumbre de cenar en familia, incluso en la era digital, hablaba de su valor social perdurable.",
        targetWord: "tenacidad",
        targetWordIndex: 5,
        options: [
            { word: "persistencia", score: 95, feedback: "'Persistencia' es continuidad en el tiempo, esencial para tradiciones familiares." },
            { word: "resiliencia", score: 100, feedback: "¡Perfecto! 'Resiliencia' es la capacidad de resistir y adaptarse a cambios (como la era digital), manteniendo el núcleo de la costumbre." },
            { word: "constancia", score: 92, feedback: "'Constancia' es firmeza y perseverancia." },
            { word: "vigencia", score: 90, feedback: "'Vigencia' es estado de estar en vigor, resultado de la tenacidad." }
        ],
        bestAnswer: "resiliencia",
        explanation: "La 'resiliencia' de una costumbre familiar es una tenacidad adaptativa, una capacidad de reinventar su forma (quizás negociando con las pantallas) mientras preserva su esencia de conexión humana."
    },
    {
        id: "es-341",
        sentence: "La languidez del aire en el caluroso día de verano hacía que cualquier movimiento requiriera un esfuerzo sobrehumano.",
        targetWord: "languidez",
        targetWordIndex: 5,
        options: [
            { word: "pesadez", score: 95, feedback: "'Pesadez' es cualidad de pesado, muy adecuado para un aire denso y caliente." },
            { word: "lasitud", score: 92, feedback: "'Lasitud' es estado de debilidad y fatiga, que el aire puede provocar." },
            { word: "sopor", score: 90, feedback: "'Sopor' es somnolencia, un efecto posible." },
            { word: "bochorno", score: 100, feedback: "¡Perfecto! 'Bochorno' es calor húmedo y sofocante, una languidez atmosférica que agobia el cuerpo y la voluntad." }
        ],
        bestAnswer: "bochorno",
        explanation: "El 'bochorno' es una languidez climática que oprime, un calor húmedo que se adhiere a la piel y parece robar el aliento, multiplicando la percepción del esfuerzo."
    },
    {
        id: "es-342",
        sentence: "La sagacidad del programador para encontrar y corregir un error crítico en el código evitó un desastre mayor.",
        targetWord: "sagacidad",
        targetWordIndex: 5,
        options: [
            { word: "perspicacia", score: 95, feedback: "'Perspicacia' es agudeza para detectar problemas ocultos, clave en programación." },
            { word: "astucia", score: 90, feedback: "'Astucia' es habilidad para engañar o resolver, pero puede no aplicar." },
            { word: "olfato", score: 100, feedback: "¡Perfecto! 'Olfacto' para los bugs es una sagacidad intuitiva para rastrear la fuente de un error en un laberinto lógico." },
            { word: "ingenio", score: 92, feedback: "'Ingenio' es habilidad para inventar o resolver, también aplicable." }
        ],
        bestAnswer: "olfato",
        explanation: "El 'olfato' del programador es una sagacidad entrenada para detectar la anomalía sutil en medio de la normalidad del código, una habilidad que combina lógica, experiencia y hasta intuición."
    },
    {
        id: "es-343",
        sentence: "La vehemencia del apoyo de los aficionados al equipo local creaba una atmósfera eléctrica en el estadio.",
        targetWord: "vehemencia",
        targetWordIndex: 5,
        options: [
            { word: "intensidad", score: 90, feedback: "'Intensidad' es gran fuerza, pero 'vehemencia' añade pasión y entusiasmo desbordante." },
            { word: "fervor", score: 95, feedback: "'Fervor' es entusiasmo ardiente, muy propio de los aficionados." },
            { word: "ardor", score: 92, feedback: "'Ardor' es vehemencia y pasión." },
            { word: "frenesí", score: 100, feedback: "¡Perfecto! 'Frenesí' es vehemencia extrema y descontrolada, un estado colectivo de excitación que carga el ambiente de electricidad emocional." }
        ],
        bestAnswer: "frenesí",
        explanation: "El 'frenesí' de la afición es una vehemencia que trasciende el apoyo individual para convertirse en una fuerza psicológica colectiva, capaz de alterar la percepción y el rendimiento en el campo."
    },
    {
        id: "es-344",
        sentence: "La opacidad de la capa de hollín en las ventanas de la fábrica antigua impedía ver el interior.",
        targetWord: "opacidad",
        targetWordIndex: 5,
        options: [
            { word: "suciedad", score: 90, feedback: "'Suciedad' es falta de limpieza, pero no especifica el efecto visual." },
            { word: "mugre", score: 92, feedback: "'Mugre' es suciedad grasa y adherente, que puede causar opacidad." },
            { word: "patina", score: 100, feedback: "¡Perfecto! 'Pátina' es una capa delgada que se forma con el tiempo (a menudo de suciedad u oxidación), que oscurece y da carácter, pero aquí produce opacidad." },
            { word: "tizne", score: 95, feedback: "'Tizne' es hollín, la sustancia misma que causa la opacidad." }
        ],
        bestAnswer: "patina",
        explanation: "La 'pátina' de hollín es una opacidad acumulada por el tiempo, una capa de historia industrial que vela el interior y habla de un pasado de actividad constante."
    },
    {
        id: "es-345",
        sentence: "La meticulosidad del joyero al engastar cada diamante en la tiara real garantizaba su perfección y durabilidad.",
        targetWord: "meticulosidad",
        targetWordIndex: 5,
        options: [
            { word: "minuciosidad", score: 95, feedback: "'Minuciosidad' es atención extrema a los detalles, esencial en joyería fina." },
            { word: "esmero", score: 92, feedback: "'Esmero' es cuidado y diligencia, muy adecuado." },
            { word: "primor", score: 100, feedback: "¡Perfecto! 'Primor' es delicadeza y esmero exquisitos en el trabajo manual, donde la meticulosidad se convierte en arte." },
            { word: "perfección", score: 90, feedback: "'Perfección' es el resultado, no el proceso meticuloso." }
        ],
        bestAnswer: "primor",
        explanation: "El 'primor' en joyería es una meticulosidad elevada a nivel artesanal supremo, donde cada gesto es preciso, paciente y orientado a crear un objeto de belleza y valor eternos."
    },
    {
        id: "es-346",
        sentence: "La avidez del arqueólogo por desenterrar los secretos de la civilización perdida lo mantuvo en la excavación durante décadas.",
        targetWord: "avidez",
        targetWordIndex: 5,
        options: [
            { word: "ansia", score: 95, feedback: "'Ansia' es deseo vehemente, similar, pero 'avidez' sugiere un apetito más constante y profundo." },
            { word: "sed", score: 92, feedback: "'Sed' (de conocimiento histórico) es una metáfora fuerte para el deseo de reconstruir el pasado." },
            { word: "voracidad", score: 100, feedback: "¡Perfecto! 'Voracidad' arqueológica es una avidez que consume tiempo y esfuerzo en grandes cantidades, impulsada por la promesa de revelar lo oculto." },
            { word: "codicia", score: 85, feedback: "'Codicia' es deseo de posesión, no aplicable al conocimiento desinteresado." }
        ],
        bestAnswer: "voracidad",
        explanation: "La 'voracidad' del arqueólogo es una avidez paciente pero insaciable, una dedicación de por vida a descifrar las capas del tiempo, capa a capa, hallazgo a hallazgo."
    },
    {
        id: "es-347",
        sentence: "La parsimonia del cambio de las estaciones en el clima templado ofrecía un ritmo predecible y reconfortante.",
        targetWord: "parsimonia",
        targetWordIndex: 5,
        options: [
            { word: "lentitud", score: 90, feedback: "'Lentitud' es cualidad de lento, pero la parsimonia estacional es un ritmo natural y majestuoso." },
            { word: "gradualidad", score: 95, feedback: "'Gradualidad' es progresión por grados, perfecta para describir la transición suave entre estaciones." },
            { word: "pausa", score: 85, feedback: "'Pausa' es una interrupción, no una transición continua." },
            { word: "ciclicidad", score: 100, feedback: "¡Perfecto! 'Ciclicidad' es cualidad de cíclico, que implica una parsimonia repetitiva y predecible, base de la seguridad y el consuelo que ofrecen las estaciones." }
        ],
        bestAnswer: "ciclicidad",
        explanation: "La 'ciclicidad' de las estaciones es una parsimonia cósmica, un ritmo lento pero seguro que estructura el tiempo humano y ofrece la promesa reconfortante del retorno y la renovación."
    },
    {
        id: "es-348",
        sentence: "La perplejidad del lingüista ante la gramática única del idioma recién descubierto prometía revolucionar la teoría del lenguaje.",
        targetWord: "perplejidad",
        targetWordIndex: 5,
        options: [
            { word: "desconcierto", score: 95, feedback: "'Desconcierto' es turbación ante algo inesperado, reacción lógica ante una gramática única." },
            { word: "asombro", score: 92, feedback: "'Asombro' es sorpresa grande, que puede acompañar a la perplejidad." },
            { word: "deslumbramiento", score: 90, feedback: "'Deslumbramiento' es admiración extrema, no necesariamente perplejidad." },
            { word: "epifanía", score: 100, feedback: "¡Perfecto! 'Epifanía' (en sentido intelectual) es una perplejidad reveladora, un momento de confusión que contiene la semilla de una comprensión nueva y transformadora." }
        ],
        bestAnswer: "epifanía",
        explanation: "La 'epifanía' del lingüista es una perplejidad fértil, un encuentro con lo inexplicable que desafía los paradigmas existentes y promete abrir nuevos caminos en la comprensión del lenguaje humano."
    },
    {
        id: "es-349",
        sentence: "La exuberancia de colores en el mercado callejero creaba un mosaico vibrante y caótico de la vida local.",
        targetWord: "exuberancia",
        targetWordIndex: 5,
        options: [
            { word: "profusión", score: 95, feedback: "'Profusión' es abundancia excesiva, muy adecuada para describir colores en un mercado." },
            { word: "abigarramiento", score: 100, feedback: "¡Perfecto! 'Abigarramiento' es mezcla excesiva y desordenada de colores, una exuberancia visual que es a la vez vibrante y caótica." },
            { word: "riot", score: 90, feedback: "'Riot' (del inglés, alboroto de color) no es una palabra española estándar." },
            { word: "cromatismo", score: 92, feedback: "'Cromatismo' es el uso o efecto del color, pero no implica necesariamente exuberancia." }
        ],
        bestAnswer: "abigarramiento",
        explanation: "El 'abigarramiento' es una exuberancia visual no planificada, el resultado de la superposición de múltiples elementos coloridos que compiten por la atención, reflejando el bullicio y la diversidad de la vida callejera."
    },
    {
        id: "es-350",
        sentence: "La tenacidad de la memoria del anciano, que recordaba con precisión eventos de su infancia, asombraba a sus nietos.",
        targetWord: "tenacidad",
        targetWordIndex: 5,
        options: [
            { word: "persistencia", score: 95, feedback: "'Persistencia' es continuidad en el tiempo, clave para la memoria a largo plazo." },
            { word: "fidelidad", score: 92, feedback: "'Fidelidad' es exactitud y lealtad, aplicable a la precisión de los recuerdos." },
            { word: "longevidad", score: 90, feedback: "'Longevidad' es larga duración de la vida, no específicamente de la memoria." },
            { word: "perseverancia", score: 100, feedback: "¡Perfecto! 'Perseverancia' es tenacidad mantenida a lo largo del tiempo, una cualidad de la memoria que resiste el desgaste de las décadas." }
        ],
        bestAnswer: "perseverancia",
        explanation: "La 'perseverancia' de la memoria es una tenacidad activa, una capacidad de la mente para aferrarse a ciertos recuerdos con una claridad que desafía el paso del tiempo, convirtiéndolos en reliquias personales intactas."
    },
    {
        id: "es-351",
        sentence: "El carácter del protagonista era complejo y multifacético, difícil de categorizar.",
        targetWord: "complejo",
        targetWordIndex: 4,
        options: [
            { word: "intrincado", score: 85, feedback: "'Intrincado' sugiere enredo y complicación, pero no necesariamente la riqueza psicológica de 'complejo'." },
            { word: "abigarrado", score: 90, feedback: "'Abigarrado' implica mezcla heterogénea y abrumadora, cercano a la idea de multifacético." },
            { word: "sibarítico", score: 70, feedback: "'Sibarítico' se refiere a gustos refinados y lujosos, no aplica a la psicología del personaje." },
            { word: "proteico", score: 100, feedback: "¡Perfecto! 'Proteico' (como el dios Proteo) denota capacidad de cambio constante, siendo múltiple e inaprensible." }
        ],
        bestAnswer: "proteico",
        explanation: "Un carácter 'proteico' cambia de forma constantemente, presentando facetas contradictorias que desafían cualquier clasificación simple."
    },
    {
        id: "es-352",
        sentence: "La solución al problema matemático era elegante en su simplicidad.",
        targetWord: "elegante",
        targetWordIndex: 7,
        options: [
            { word: "pulcra", score: 85, feedback: "'Pulcra' implica limpieza y orden, pero no capta la eficiencia intelectual de lo 'elegante' en matemáticas." },
            { word: "sobria", score: 80, feedback: "'Sobria' es moderada y sin excesos, pero puede carecer del matiz de belleza intelectual." },
            { word: "conciso", score: 90, feedback: "'Conciso' va al grano, pero no necesariamente con la gracia estética de lo elegante." },
            { word: "lapidaria", score: 100, feedback: "¡Perfecto! 'Lapidaria' (como una inscripción en piedra) combina simplicidad, contundencia y belleza definitiva." }
        ],
        bestAnswer: "lapidaria",
        explanation: "Una solución 'lapidaria' es tan perfecta y definitiva que parece tallada en piedra, logrando máxima eficacia con mínimos elementos."
    },
    {
        id: "es-353",
        sentence: "Su reacción ante la crítica fue desmedida y fuera de toda proporción.",
        targetWord: "desmedida",
        targetWordIndex: 6,
        options: [
            { word: "excesiva", score: 90, feedback: "'Excesiva' es sinónimo directo, pero menos expresiva." },
            { word: "hiperbólica", score: 95, feedback: "'Hiperbólica' implica exageración tan extrema que distorsiona la realidad." },
            { word: "desaforada", score: 100, feedback: "¡Perfecto! 'Desaforada' significa sin freno ni medida, violando las normas de lo razonable." },
            { word: "desproporcionada", score: 88, feedback: "'Desproporcionada' es la descripción literal, pero es menos literaria." }
        ],
        bestAnswer: "desaforada",
        explanation: "Una reacción 'desaforada' rompe todos los límites de lo aceptable, mostrando una falta de control absoluta frente a un estímulo."
    },
    {
        id: "es-354",
        sentence: "El aroma del bosque después de la lluvia era fresco y revitalizante.",
        targetWord: "fresco",
        targetWordIndex: 9,
        options: [
            { word: "lozano", score: 90, feedback: "'Lozano' implica vigor y salud, aplicable metafóricamente a un aroma." },
            { word: "vívido", score: 85, feedback: "'Vívido' sugiere intensidad y viveza, pero no específicamente cualidad refrescante." },
            { word: "prístino", score: 100, feedback: "¡Perfecto! 'Prístino' denota pureza original e inalterada, como la del bosque tras la lluvia." },
            { word: "renovado", score: 80, feedback: "'Renovado' implica cambio a mejor, pero es menos poético." }
        ],
        bestAnswer: "prístino",
        explanation: "Un aroma 'prístino' posee la pureza y frescura de lo nunca contaminado, restaurado por el agua de lluvia a su estado originario."
    },
    {
        id: "es-355",
        sentence: "El análisis del sociólogo sobre las dinámicas de poder era penetrante y revelador.",
        targetWord: "penetrante",
        targetWordIndex: 9,
        options: [
            { word: "agudo", score: 90, feedback: "'Agudo' es perspicaz, pero puede referirse más a la inteligencia que al efecto del análisis." },
            { word: "incisivo", score: 95, feedback: "'Incisivo' corta y separa capas superficiales para llegar a lo esencial." },
            { word: "calado", score: 100, feedback: "¡Perfecto! 'Calado' (como un barco que hunde su quilla) penetra en profundidad, tocando los estratos fundamentales." },
            { word: "perspicaz", score: 88, feedback: "'Perspicaz' denota claridad de visión, pero no tanto la acción de penetrar." }
        ],
        bestAnswer: "calado",
        explanation: "Un análisis 'calado' alcanza los estratos más profundos de la realidad social, desvelando conexiones ocultas y estructuras subyacentes."
    },
    {
        id: "es-356",
        sentence: "La atmósfera en la reunión era densa y cargada de tensiones no resueltas.",
        targetWord: "densa",
        targetWordIndex: 5,
        options: [
            { word: "pesada", score: 85, feedback: "'Pesada' sugiere opresión física, pero 'densa' implica espesura psicológica." },
            { word: "espesa", score: 90, feedback: "'Espesa' es similar a densa, metáfora adecuada para una atmósfera emocional." },
            { word: "irrespirable", score: 95, feedback: "'Irrespirable' añade la imposibilidad de alivio, intensificando la carga emocional." },
            { word: "opalina", score: 100, feedback: "¡Perfecto! 'Opalina' (como el ópalo) describe algo translúcido pero turbio, donde las tensiones se ven pero no se definen claramente." }
        ],
        bestAnswer: "opalina",
        explanation: "Una atmósfera 'opalina' es densa pero no opaca; permite ver las tensiones difusas que flotan en el ambiente sin poder aislarlas claramente."
    },
    {
        id: "es-357",
        sentence: "Su habilidad para conciliar posturas opuestas era notable y muy valorada.",
        targetWord: "notable",
        targetWordIndex: 9,
        options: [
            { word: "destacable", score: 85, feedback: "'Destacable' merece ser destacado, pero es un término más funcional." },
            { word: "insigne", score: 90, feedback: "'Insigne' implica fama y renombre, puede ser demasiado fuerte." },
            { word: "proverbial", score: 95, feedback: "'Proverbial' sugiere que se ha convertido en ejemplo conocido por muchos." },
            { word: "conciliábulos", score: 100, feedback: "¡Perfecto! 'Conciliábulos' (del latín 'concilium') denota habilidad para crear acuerdos mediante diálogo y negociación." }
        ],
        bestAnswer: "conciliábulos",
        explanation: "Una habilidad 'conciliábulos' es la capacidad de tejer consensos entre partes divergentes, creando puentes donde parecía haber abismos."
    },
    {
        id: "es-358",
        sentence: "La transformación del barrio marginal fue total y sorprendente.",
        targetWord: "total",
        targetWordIndex: 7,
        options: [
            { word: "absoluta", score: 90, feedback: "'Absoluta' significa completa, pero 'total' enfatiza la integralidad del cambio." },
            { word: "integral", score: 95, feedback: "'Integral' implica que todos los aspectos fueron transformados." },
            { word: "radical", score: 88, feedback: "'Radical' va a la raíz, pero no necesariamente abarca todo." },
            { word: "metanoica", score: 100, feedback: "¡Perfecto! 'Metanoica' (de 'metanoia') implica una transformación tan profunda que cambia la esencia misma." }
        ],
        bestAnswer: "metanoica",
        explanation: "Una transformación 'metanoica' no renueva solo lo superficial, sino la identidad y dinámica fundamental de un lugar o comunidad."
    },
    {
        id: "es-359",
        sentence: "El argumento del filósofo era sutil y requería una lectura atenta.",
        targetWord: "sutil",
        targetWordIndex: 6,
        options: [
            { word: "delicado", score: 85, feedback: "'Delicado' requiere cuidado, pero no específicamente agudeza intelectual." },
            { word: "tenue", score: 80, feedback: "'Tenue' es débil, lo opuesto a la fuerza persuasiva de un buen argumento." },
            { word: "matizado", score: 95, feedback: "'Matizado' tiene gradaciones y refinamientos, muy cercano." },
            { word: "arqueado", score: 100, feedback: "¡Perfecto! 'Arqueado' (en sentido figurado) describe un argumento que sigue una línea curva e indirecta, requiriendo seguir su trayectoria." }
        ],
        bestAnswer: "arqueado",
        explanation: "Un argumento 'arqueado' no va de A a B directamente; describe una curva elegante que revela conexiones inesperadas entre ideas."
    },
    {
        id: "es-360",
        sentence: "La respuesta del experto fue evasiva y no aclaró las dudas.",
        targetWord: "evasiva",
        targetWordIndex: 6,
        options: [
            { word: "elusiva", score: 95, feedback: "'Elusiva' esquiva la captura, muy similar pero más poética." },
            { word: "ambiguo", score: 85, feedback: "'Ambiguo' tiene más de un significado, pero no necesariamente intenta evadir." },
            { word: "reticente", score: 90, feedback: "'Reticente' es poco comunicativo, pero puede no ser activamente evasivo." },
            { word: "anfibológica", score: 100, feedback: "¡Perfecto! 'Anfibológica' usa ambigüedad sintáctica deliberada para no comprometerse con una respuesta clara." }
        ],
        bestAnswer: "anfibológica",
        explanation: "Una respuesta 'anfibológica' está construida con tal ambigüedad gramatical que permite múltiples interpretaciones, protegiendo al que responde."
    },
    {
        id: "es-361",
        sentence: "La belleza del paisaje desértico era austera y sobrecogedora.",
        targetWord: "austera",
        targetWordIndex: 7,
        options: [
            { word: "sobria", score: 90, feedback: "'Sobria' es moderada y sin adornos, cercana a austera." },
            { word: "ascética", score: 95, feedback: "'Ascética' implica renuncia voluntaria a lo superfluo, buscando lo esencial." },
            { word: "parca", score: 85, feedback: "'Parca' es escasa, pero puede carecer de la dimensión espiritual." },
            { word: "déspota", score: 100, feedback: "¡Perfecto! 'Déspota' (en sentido estético) impone su belleza mediante la imposición de lo esencial, sin concesiones." }
        ],
        bestAnswer: "déspota",
        explanation: "Una belleza 'déspota' gobierna mediante la fuerza pura de lo esencial, eliminando todo ornamento para imponer su verdad desnuda y poderosa."
    },
    {
        id: "es-362",
        sentence: "La conexión entre los dos fenómenos era difícil de establecer con certeza.",
        targetWord: "difícil",
        targetWordIndex: 7,
        options: [
            { word: "complicada", score: 85, feedback: "'Complicada' tiene muchas partes, pero no necesariamente es incierta." },
            { word: "espinosa", score: 90, feedback: "'Espinosa' presenta obstáculos y riesgos, como pincharse." },
            { word: "esquiva", score: 95, feedback: "'Esquiva' huye, no se deja atrapar fácilmente." },
            { word: "proteica", score: 100, feedback: "¡Perfecto! 'Proteica' cambia de forma constantemente, haciendo imposible fijar una conexión estable." }
        ],
        bestAnswer: "proteica",
        explanation: "Una conexión 'proteica' se transforma y adapta cada vez que intentamos estudiarla, desafiando cualquier intento de establecer una relación causal fija."
    },
    {
        id: "es-363",
        sentence: "Su dominio del piano era absoluto y emocionalmente arrebatador.",
        targetWord: "absoluto",
        targetWordIndex: 6,
        options: [
            { word: "total", score: 85, feedback: "'Total' es completo, pero menos enfático." },
            { word: "omnímodo", score: 95, feedback: "'Omnímodo' abarca todo sin excepción, dominio completo." },
            { word: "soberano", score: 100, feedback: "¡Perfecto! 'Soberano' ejerce autoridad suprema, combinando dominio técnico con expresión emocional poderosa." },
            { word: "perfecto", score: 80, feedback: "'Perfecto' no tiene defectos, pero puede ser frío." }
        ],
        bestAnswer: "soberano",
        explanation: "Un dominio 'soberano' del instrumento significa que el intérprete no lo toca, sino que lo gobierna con autoridad artística total."
    },
    {
        id: "es-364",
        sentence: "La explicación del científico era clara y accesible para el público general.",
        targetWord: "clara",
        targetWordIndex: 7,
        options: [
            { word: "nítida", score: 90, feedback: "'Nítida' es limpia y bien definida, aplicable a explicaciones." },
            { word: "transparente", score: 92, feedback: "'Transparente' permite ver a través, sin obstáculos para la comprensión." },
            { word: "cristalina", score: 95, feedback: "'Cristalina' posee una claridad perfecta, sin impurezas conceptuales." },
            { word: "perspicua", score: 100, feedback: "¡Perfecto! 'Perspicua' (del latín 'perspicuus') es tan clara que se entiende de inmediato, sin esfuerzo." }
        ],
        bestAnswer: "perspicua",
        explanation: "Una explicación 'perspicua' disipa cualquier sombra de duda, haciendo que conceptos complejos se vuelvan inmediatamente comprensibles."
    },
    {
        id: "es-365",
        sentence: "La rivalidad entre los dos equipos era feroz y llena de historia.",
        targetWord: "feroz",
        targetWordIndex: 8,
        options: [
            { word: "encarnizada", score: 95, feedback: "'Encarnizada' implica lucha cuerpo a cuerpo, intensa y sin cuartel." },
            { word: "salvaje", score: 85, feedback: "'Salvaje' es primitiva y descontrolada, pero puede carecer de la dimensión histórica." },
            { word: "atroz", score: 90, feedback: "'Atroz' es cruel y espantosa, quizás demasiado fuerte." },
            { word: "homérica", score: 100, feedback: "¡Perfecto! 'Homérica' eleva la rivalidad a categoría épica, digna de ser cantada como las batallas de la Ilíada." }
        ],
        bestAnswer: "homérica",
        explanation: "Una rivalidad 'homérica' trasciende lo deportivo para convertirse en un conflicto legendario, cargado de hazañas y rencores históricos."
    },
    {
        id: "es-366",
        sentence: "La textura de la tela era áspera al tacto pero resistente.",
        targetWord: "áspera",
        targetWordIndex: 6,
        options: [
            { word: "rugosa", score: 90, feedback: "'Rugosa' tiene irregularidades en superficie, pero no necesariamente es áspera." },
            { word: "escabrosa", score: 95, feedback: "'Escabrosa' es áspera y difícil de tratar, literal y figuradamente." },
            { word: "rasposa", score: 100, feedback: "¡Perfecto! 'Rasposa' produce una sensación de roce incómodo, casi de rasguño." },
            { word: "tosca", score: 85, feedback: "'Tosca' es burda y sin pulir, pero puede referirse más a la fabricación que al tacto." }
        ],
        bestAnswer: "rasposa",
        explanation: "Una textura 'rasposa' irrita la piel con su aspereza, sugiriendo durabilidad pero a costa de la comodidad táctil."
    },
    {
        id: "es-367",
        sentence: "La influencia de su mentor en su carrera fue decisiva y formativa.",
        targetWord: "decisiva",
        targetWordIndex: 9,
        options: [
            { word: "crucial", score: 90, feedback: "'Crucial' es de importancia crítica, pero puede no implicar el aspecto formativo." },
            { word: "determinante", score: 95, feedback: "'Determinante' fija el rumbo, muy adecuado." },
            { word: "axial", score: 100, feedback: "¡Perfecto! 'Axial' sirve como eje central alrededor del cual gira todo el desarrollo posterior." },
            { word: "pivotal", score: 92, feedback: "'Pivotal' es punto de giro crucial, similar a axial." }
        ],
        bestAnswer: "axial",
        explanation: "Una influencia 'axial' constituye el punto de referencia fundamental que orienta y da sentido a todas las decisiones profesionales posteriores."
    },
    {
        id: "es-368",
        sentence: "El silencio en la sala era profundo y lleno de significado.",
        targetWord: "profundo",
        targetWordIndex: 5,
        options: [
            { word: "hondo", score: 85, feedback: "'Hondo' es sinónimo, pero menos literario." },
            { word: "insondable", score: 95, feedback: "'Insondable' es tan profundo que no puede medirse, cargado de misterio." },
            { word: "abismal", score: 90, feedback: "'Abismal' sugiere profundidad como un abismo, pero puede ser más aterrador." },
            { word: "elocuente", score: 100, feedback: "¡Perfecto! 'Eloquente' dice mucho sin palabras, siendo un silencio cargado de significado." }
        ],
        bestAnswer: "elocuente",
        explanation: "Un silencio 'elocuente' comunica más que cualquier discurso, siendo profundo no en su quietud, sino en su capacidad de expresión muda."
    },
    {
        id: "es-369",
        sentence: "La propuesta del arquitecto era innovadora y respetuosa con el entorno.",
        targetWord: "innovadora",
        targetWordIndex: 6,
        options: [
            { word: "revolucionaria", score: 90, feedback: "'Revolucionaria' cambia las reglas, pero puede no ser respetuosa." },
            { word: "vanguardista", score: 92, feedback: "'Vanguardista' está a la cabeza de las tendencias." },
            { word: "pionera", score: 88, feedback: "'Pionera' abre nuevos caminos." },
            { word: "biomimética", score: 100, feedback: "¡Perfecto! 'Biomimética' se inspira en la naturaleza para crear soluciones innovadoras que armonizan con el entorno." }
        ],
        bestAnswer: "biomimética",
        explanation: "Una propuesta 'biomimética' innova no contra la naturaleza, sino aprendiendo de ella, creando diseños que se integran perfectamente en su entorno."
    },
    {
        id: "es-370",
        sentence: "Su memoria para los rostros era prodigiosa y nunca olvidaba a alguien.",
        targetWord: "prodigiosa",
        targetWordIndex: 6,
        options: [
            { word: "asombrosa", score: 85, feedback: "'Asombrosa' causa sorpresa, pero 'prodigiosa' implica cualidad casi sobrenatural." },
            { word: "portentosa", score: 95, feedback: "'Portentosa' es extraordinaria y anuncia algo fuera de lo común." },
            { word: "fenomenal", score: 90, feedback: "'Fenomenal' es excepcional, pero es un término más coloquial." },
            { word: "eidética", score: 100, feedback: "¡Perfecto! 'Eidética' (memoria fotográfica) describe la capacidad de recordar imágenes con precisión absoluta." }
        ],
        bestAnswer: "eidética",
        explanation: "Una memoria 'eidética' almacena y recupera imágenes mentales con fidelidad fotográfica, haciendo del reconocimiento de rostros algo instantáneo y preciso."
    },
    {
        id: "es-371",
        sentence: "La crítica hacia su obra fue despiadada y le afectó profundamente.",
        targetWord: "despiadada",
        targetWordIndex: 6,
        options: [
            { word: "cruel", score: 90, feedback: "'Cruel' inflige sufrimiento, pero puede ser más emocional que intelectual." },
            { word: "implacable", score: 95, feedback: "'Implacable' no da tregua ni muestra misericordia." },
            { word: "sangrienta", score: 80, feedback: "'Sangrienta' es metáfora muy violenta, quizás excesiva." },
            { word: "anatemática", score: 100, feedback: "¡Perfecto! 'Anatemática' es una condena formal y absoluta que excluye de la comunidad intelectual." }
        ],
        bestAnswer: "anatemática",
        explanation: "Una crítica 'anatemática' no busca corregir, sino excomulgar la obra del canon, un ataque frontal a su valor artístico fundamental."
    },
    {
        id: "es-372",
        sentence: "La luz del atardecer era dorada y bañaba todo con un tono cálido.",
        targetWord: "dorada",
        targetWordIndex: 6,
        options: [
            { word: "áurea", score: 100, feedback: "¡Perfecto! 'Áurea' (de oro) evoca no solo el color, sino la cualidad preciosa y mítica de la luz." },
            { word: "amarillenta", score: 70, feedback: "'Amarillenta' tiene connotación negativa de desgaste o enfermedad." },
            { word: "fulva", score: 95, feedback: "'Fulva' es un amarillo rojizo intenso, muy poético para atardeceres." },
            { word: "cobriza", score: 85, feedback: "'Cobriza' es más rojiza, adecuada para otros momentos del día." }
        ],
        bestAnswer: "áurea",
        explanation: "La luz 'áurea' posee la cualidad divina y transformadora del oro, transfigurando el paisaje en algo precioso y efímero."
    },
    {
        id: "es-373",
        sentence: "Su interpretación del papel fue sutil y llena de matices.",
        targetWord: "sutil",
        targetWordIndex: 6,
        options: [
            { word: "delicada", score: 90, feedback: "'Delicada' requiere sensibilidad, pero puede carecer de profundidad." },
            { word: "matizada", score: 95, feedback: "'Matizada' tiene gradaciones y refinamientos, muy cercano." },
            { word: "tenue", score: 75, feedback: "'Tenue' es débil, lo opuesto a una interpretación impactante." },
            { word: "sfumato", score: 100, feedback: "¡Perfecto! 'Sfumato' (técnica pictórica) describe transiciones suaves entre emociones, creando profundidad mediante lo sutil." }
        ],
        bestAnswer: "sfumato",
        explanation: "Una interpretación 'sfumato' funde las emociones del personaje sin bordes definidos, creando una complejidad psicológica que se revela gradualmente."
    },
    {
        id: "es-374",
        sentence: "La estructura del argumento era sólida y bien construida.",
        targetWord: "sólida",
        targetWordIndex: 6,
        options: [
            { word: "robusta", score: 90, feedback: "'Robusta' es fuerte y resistente, buena metáfora." },
            { word: "firme", score: 85, feedback: "'Firme' no cede, pero es menos específica." },
            { word: "consistente", score: 95, feedback: "'Consistente' no tiene contradicciones internas, esencial para un argumento." },
            { word: "inexpugnable", score: 100, feedback: "¡Perfecto! 'Inexpugnable' (que no puede ser tomado) describe una estructura argumental impenetrable a los contraataques." }
        ],
        bestAnswer: "inexpugnable",
        explanation: "Un argumento 'inexpugnable' está fortificado lógicamente, siendo imposible de refutar mediante objeciones racionales."
    },
    {
        id: "es-375",
        sentence: "La conexión entre los dos eventos era tenue pero sugerente.",
        targetWord: "tenue",
        targetWordIndex: 8,
        options: [
            { word: "débil", score: 85, feedback: "'Débil' carece de fuerza, pero no implica la cualidad sugestiva." },
            { word: "frágil", score: 80, feedback: "'Frígil' se rompe fácilmente, no aplicable a conexiones." },
            { word: "evanescente", score: 95, feedback: "'Evanescente' se desvanece como el humo, pero deja rastro de posibilidad." },
            { word: "larvaria", score: 100, feedback: "¡Perfecto! 'Larvaria' está en estado embrionario, apenas insinuada pero con potencial de desarrollo." }
        ],
        bestAnswer: "larvaria",
        explanation: "Una conexión 'larvaria' existe como mera posibilidad, un vínculo incipiente que invita a explorar su potencial significado."
    },
    {
        id: "es-376",
        sentence: "Su conocimiento de la literatura clásica era enciclopédico.",
        targetWord: "enciclopédico",
        targetWordIndex: 9,
        options: [
            { word: "vastísimo", score: 90, feedback: "'Vastísimo' es muy extenso, pero no implica organización sistemática." },
            { word: "omnímodo", score: 92, feedback: "'Omnímodo' lo abarca todo, pero puede ser más sobre poder que sobre saber." },
            { word: "pancrático", score: 85, feedback: "'Pancrático' tiene poder total, no aplicable directamente al conocimiento." },
            { word: "alejandrino", score: 100, feedback: "¡Perfecto! 'Alejandrino' (como la Biblioteca de Alejandría) evoca un saber que aspira a contener todo el conocimiento organizado." }
        ],
        bestAnswer: "alejandrino",
        explanation: "Un conocimiento 'alejandrino' es una biblioteca mental sistemática, donde la erudición se valora por su exhaustividad y catalogación."
    },
    {
        id: "es-377",
        sentence: "La reacción del público fue entusiasta y llena de energía.",
        targetWord: "entusiasta",
        targetWordIndex: 6,
        options: [
            { word: "vehemente", score: 95, feedback: "'Vehemente' es apasionada y ardiente, cercano a entusiasta." },
            { word: "ferviente", score: 92, feedback: "'Ferviente' tiene ardor y pasión intensa." },
            { word: "exultante", score: 100, feedback: "¡Perfecto! 'Exultante' muestra alegría triunfal y energía desbordante." },
            { word: "animado", score: 85, feedback: "'Animado' está lleno de vida, pero es un término más suave." }
        ],
        bestAnswer: "exultante",
        explanation: "Una reacción 'exultante' es entusiasmo en su máxima expresión, una celebración colectiva que libera energía acumulada."
    },
    {
        id: "es-378",
        sentence: "El error en el cálculo fue mínimo pero tuvo consecuencias catastróficas.",
        targetWord: "mínimo",
        targetWordIndex: 6,
        options: [
            { word: "ínfimo", score: 90, feedback: "'Ínfimo' es extremadamente pequeño, pero no enfatiza su apariencia insignificante." },
            { word: "insignificante", score: 85, feedback: "'Insignificante' carece de importancia, lo que contradice las consecuencias." },
            { word: "imperceptible", score: 95, feedback: "'Imperceptible' no se puede detectar, explicando cómo pasó desapercibido." },
            { word: "umbral", score: 100, feedback: "¡Perfecto! 'Umbral' (error de umbral) es mínimo pero crucial, pues se encuentra justo en el límite donde pequeños cambios producen efectos desproporcionados." }
        ],
        bestAnswer: "umbral",
        explanation: "Un error 'umbral' opera en el punto de inflexión de un sistema, donde la mínima desviación desencadena consecuencias exponenciales."
    },
    {
        id: "es-379",
        sentence: "La descripción del paisaje en la novela era vívida y transportaba al lector.",
        targetWord: "vívida",
        targetWordIndex: 7,
        options: [
            { word: "gráfica", score: 90, feedback: "'Gráfica' es detallada y explícita, pero puede carecer de la cualidad sensorial." },
            { word: "plástica", score: 95, feedback: "'Plástica' tiene relieve y forma tridimensional, muy visual." },
            { word: "cromática", score: 85, feedback: "'Cromática' enfatiza el color, pero puede olvidar otros sentidos." },
            { word: "sinestésica", score: 100, feedback: "¡Perfecto! 'Sinestésica' apela a múltiples sentidos simultáneamente, creando una experiencia inmersiva total." }
        ],
        bestAnswer: "sinestésica",
        explanation: "Una descripción 'sinestésica' no solo se ve, sino que se huele, se toca y se siente, transportando al lector mediante la activación multisensorial."
    },
    {
        id: "es-380",
        sentence: "Su actitud hacia el cambio era flexible y adaptable.",
        targetWord: "flexible",
        targetWordIndex: 8,
        options: [
            { word: "elástica", score: 90, feedback: "'Elástica' puede estirarse y volver, pero 'flexible' se dobla sin romperse." },
            { word: "maleable", score: 95, feedback: "'Maleable' se adapta tomando nueva forma, más permanente que flexible." },
            { word: "versátil", score: 92, feedback: "'Versátil' sirve para muchos propósitos, cercano." },
            { word: "proteica", score: 100, feedback: "¡Perfecto! 'Proteica' cambia de forma esencial según lo exijan las circunstancias." }
        ],
        bestAnswer: "proteica",
        explanation: "Una actitud 'proteica' no solo se adapta superficialmente, sino que se transforma fundamentalmente para enfrentar cada nuevo desafío."
    },
    {
        id: "es-381",
        sentence: "La similitud entre las dos teorías era sorprendente y sugería influencia mutua.",
        targetWord: "sorprendente",
        targetWordIndex: 6,
        options: [
            { word: "asombrosa", score: 90, feedback: "'Asombrosa' causa gran sorpresa, similar." },
            { word: "pasmosa", score: 92, feedback: "'Pasmosa' deja atónito." },
            { word: "estupefaciente", score: 95, feedback: "'Estupefaciente' paraliza la capacidad de reacción por la sorpresa." },
            { word: "análoga", score: 100, feedback: "¡Perfecto! 'Análoga' implica similitud estructural profunda, no casual, que sugiere conexión esencial." }
        ],
        bestAnswer: "análoga",
        explanation: "Una similitud 'análoga' revela patrones estructurales comunes, indicando que las teorías comparten una lógica subyacente más allá de coincidencias superficiales."
    },
    {
        id: "es-382",
        sentence: "La arquitectura del edificio era monumental y pretendía impresionar.",
        targetWord: "monumental",
        targetWordIndex: 5,
        options: [
            { word: "colosal", score: 95, feedback: "'Colosal' es de tamaño gigantesco, pero 'monumental' añade intención conmemorativa." },
            { word: "imponente", score: 90, feedback: "'Imponente' inspira respeto, pero puede ser menos grandioso." },
            { word: "cicrópea", score: 100, feedback: "¡Perfecto! 'Cicrópea' (como los muros ciclópeos) sugiere construcción con bloques gigantes, monumental y sobrehumana." },
            { word: "grandilocuente", score: 85, feedback: "'Grandilocuente' se aplica más al lenguaje que a la arquitectura." }
        ],
        bestAnswer: "cicrópea",
        explanation: "Una arquitectura 'cicrópea' utiliza la escala descomunal para expresar poder eterno, como las construcciones megalíticas que desafían el tiempo."
    },
    {
        id: "es-383",
        sentence: "Su análisis de la situación política era cínico pero realista.",
        targetWord: "cínico",
        targetWordIndex: 7,
        options: [
            { word: "escéptico", score: 85, feedback: "'Escéptico' duda, pero no necesariamente desprecia las motivaciones humanas." },
            { word: "descreído", score: 90, feedback: "'Descreído' ha perdido la fe en la bondad humana." },
            { word: "misántropo", score: 95, feedback: "'Misántropo' desprecia a la humanidad, cercano al cinismo político." },
            { word: "maquiavélico", score: 100, feedback: "¡Perfecto! 'Maquiavélico' analiza la política desde el realismo del poder, priorizando la efectividad sobre la moral." }
        ],
        bestAnswer: "maquiavélico",
        explanation: "Un análisis 'maquiavélico' es cínico en el sentido de que asume que los actores políticos buscan principalmente poder, siendo realista sobre los mecanismos del mismo."
    },
    {
        id: "es-384",
        sentence: "La transición entre los movimientos de la sinfonía era suave y natural.",
        targetWord: "suave",
        targetWordIndex: 8,
        options: [
            { word: "fluida", score: 95, feedback: "'Fluida' se mueve sin interrupciones, muy musical." },
            { word: "tierna", score: 75, feedback: "'Tierna' implica dulzura emocional, no necesariamente transición técnica." },
            { word: "gradual", score: 90, feedback: "'Gradual' es por grados, adecuado para transiciones." },
            { word: "glissando", score: 100, feedback: "¡Perfecto! 'Glissando' (término musical) describe un deslizamiento continuo entre notas, transición perfectamente suave." }
        ],
        bestAnswer: "glissando",
        explanation: "Una transición 'glissando' en música conecta dos puntos sin saltos perceptibles, creando una sensación de continuidad orgánica y natural."
    },
    {
        id: "es-385",
        sentence: "La resistencia del material a las altas temperaturas era excepcional.",
        targetWord: "excepcional",
        targetWordIndex: 10,
        options: [
            { word: "sobresaliente", score: 90, feedback: "'Sobresaliente' destaca por encima de lo normal." },
            { word: "notable", score: 85, feedback: "'Notable' es digna de atención, pero menos enfática." },
            { word: "prodigiosa", score: 95, feedback: "'Prodigiosa' es extraordinaria hasta lo maravilloso." },
            { word: "piroclástica", score: 100, feedback: "¡Perfecto! 'Piroclástica' (resistente al fuego) describe específicamente capacidad para soportar temperaturas extremas." }
        ],
        bestAnswer: "piroclástica",
        explanation: "Una resistencia 'piroclástica' permite al material sobrevivir en condiciones de calor volcánico, superando los límites ordinarios."
    },
    {
        id: "es-386",
        sentence: "Su argumento en el debate fue convincente y bien estructurado.",
        targetWord: "convincente",
        targetWordIndex: 8,
        options: [
            { word: "persuasivo", score: 90, feedback: "'Persuasivo' busca convencer y a menudo lo logra." },
            { word: "contundente", score: 95, feedback: "'Contundente' aplasta las objeciones con fuerza lógica." },
            { word: "irrefutable", score: 92, feedback: "'Irrefutable' no puede ser refutado, pero puede ser menos persuasivo emocionalmente." },
            { word: "apodíctica", score: 100, feedback: "¡Perfecto! 'Apodíctica' (en lógica) es necesariamente verdadero, combinando estructura sólida y fuerza convincente absoluta." }
        ],
        bestAnswer: "apodíctica",
        explanation: "Un argumento 'apodíctica' se construye sobre premisas incuestionables y deducciones rigurosas, siendo convincente por necesidad lógica."
    },
    {
        id: "es-387",
        sentence: "La belleza del gesto altruista era conmovedora y ejemplar.",
        targetWord: "conmovedora",
        targetWordIndex: 8,
        options: [
            { word: "emocionante", score: 85, feedback: "'Emocionante' despierta emociones, pero puede ser cualquier emoción." },
            { word: "enternecedora", score: 95, feedback: "'Enternecedora' ablanda el corazón, provocando ternura y admiración." },
            { word: "patética", score: 70, feedback: "'Patética' en español moderno tiene connotación negativa." },
            { word: "catártica", score: 100, feedback: "¡Perfecto! 'Catártica' purifica las emociones a través de la compasión y admiración, siendo ejemplar." }
        ],
        bestAnswer: "catártica",
        explanation: "Una belleza 'catártica' conmueve hasta producir una purificación emocional, transformando al testigo mediante el ejemplo moral."
    },
    {
        id: "es-388",
        sentence: "La conexión entre los dos personajes era inmediata y poderosa.",
        targetWord: "inmediata",
        targetWordIndex: 8,
        options: [
            { word: "instantánea", score: 95, feedback: "'Instantánea' ocurre en un instante, sin demora." },
            { word: "repentina", score: 85, feedback: "'Repentina' es súbita, pero puede no implicar la fuerza emocional." },
            { word: "fulminante", score: 100, feedback: "¡Perfecto! 'Fulminante' es como un rayo: instantáneo, poderoso y eléctrico." },
            { word: "precipitada", score: 80, feedback: "'Precipitada' implica falta de reflexión, que puede ser negativo." }
        ],
        bestAnswer: "fulminante",
        explanation: "Una conexión 'fulminante' se establece en un momento, con la fuerza de una descarga eléctrica que cambia irreversiblemente a quienes la experimentan."
    },
    {
        id: "es-389",
        sentence: "El estilo del escritor era conciso y directo, sin digresiones.",
        targetWord: "conciso",
        targetWordIndex: 7,
        options: [
            { word: "lacónico", score: 95, feedback: "'Lacónico' expresa mucho con pocas palabras, con un matiz de sequedad." },
            { word: "breve", score: 85, feedback: "'Breve' es corto en extensión, pero puede serlo por falta de contenido." },
            { word: "escultórico", score: 100, feedback: "¡Perfecto! 'Escultórico' sugiere que la prosa ha sido tallada, eliminando todo material sobrante hasta dejar la forma esencial." },
            { word: "parco", score: 90, feedback: "'Parco' es moderado en palabras, pero puede implicar falta de generosidad." }
        ],
        bestAnswer: "escultórico",
        explanation: "Un estilo 'escultórico' es el resultado de un proceso de eliminación, donde cada palabra restante es esencial y carga con todo el peso del significado."
    },
    {
        id: "es-390",
        sentence: "La divergencia entre sus versiones de los hechos era absoluta.",
        targetWord: "absoluta",
        targetWordIndex: 9,
        options: [
            { word: "total", score: 85, feedback: "'Total' es completa, pero menos enfática." },
            { word: "completa", score: 80, feedback: "'Completa' abarca todo, similar a total." },
            { word: "irreconciliable", score: 95, feedback: "'Irreconciliable' no puede armonizarse, enfatizando el conflicto." },
            { word: "antinómica", score: 100, feedback: "¡Perfecto! 'Antinómica' presenta una contradicción lógica irresoluble entre dos versiones igualmente defendibles." }
        ],
        bestAnswer: "antinómica",
        explanation: "Una divergencia 'antinómica' es tan fundamental que las versiones se anulan mutuamente en el plano lógico, sin posibilidad de síntesis."
    },
    {
        id: "es-391",
        sentence: "Su dedicación al trabajo era inquebrantable y admirable.",
        targetWord: "inquebrantable",
        targetWordIndex: 6,
        options: [
            { word: "férrea", score: 95, feedback: "'Férrea' es fuerte como el hierro, metáfora poderosa para la dedicación." },
            { word: "inflexible", score: 90, feedback: "'Inflexible' no cede, pero puede tener connotación negativa." },
            { word: "indomable", score: 92, feedback: "'Indomable' no puede ser dominado, sugiere fuerza interior." },
            { word: "sisífica", score: 100, feedback: "¡Perfecto! 'Sisífica' implica dedicación incansable frente a tareas repetitivas y aparentemente interminables." }
        ],
        bestAnswer: "sisífica",
        explanation: "Una dedicación 'sisífica' persevera incluso cuando el trabajo parece no tener fin ni reconocimiento, movida por un sentido del deber profundo."
    },
    {
        id: "es-392",
        sentence: "La luz en la catedral gótica era tenue y misteriosa.",
        targetWord: "tenue",
        targetWordIndex: 8,
        options: [
            { word: "débil", score: 85, feedback: "'Débil' carece de fuerza, pero puede tener connotación negativa." },
            { word: "parca", score: 90, feedback: "'Parca' es escasa, adecuada para luz limitada." },
            { word: "mortecina", score: 95, feedback: "'Mortecina' es luz débil y que parece morir, muy atmosférica." },
            { word: "vitral", score: 100, feedback: "¡Perfecto! 'Vitral' (como la luz que pasa por vidrieras) es tenue, coloreada y cargada de significado religioso." }
        ],
        bestAnswer: "vitral",
        explanation: "La luz 'vitral' en una catedral es tenue pero transformada por el color, creando un ambiente de misterio sagrado y belleza trascendente."
    },
    {
        id: "es-393",
        sentence: "La interpretación del actor del personaje histórico fue respetuosa y bien investigada.",
        targetWord: "respetuosa",
        targetWordIndex: 10,
        options: [
            { word: "reverente", score: 95, feedback: "'Reverente' muestra profundo respeto, casi veneración." },
            { word: "cuidadosa", score: 85, feedback: "'Cuidadosa' implica atención, pero no necesariamente respeto." },
            { word: "fiel", score: 90, feedback: "'Fiel' se ajusta a la verdad histórica." },
            { word: "piadosa", score: 100, feedback: "¡Perfecto! 'Piadosa' (en sentido secular) muestra un respeto casi religioso hacia la memoria del personaje." }
        ],
        bestAnswer: "piadosa",
        explanation: "Una interpretación 'piadosa' trata la figura histórica con la reverencia debida, evitando la especulación sensacionalista en favor de la integridad."
    },
    {
        id: "es-394",
        sentence: "La complejidad de la trama policíaca era abrumadora pero fascinante.",
        targetWord: "abrumadora",
        targetWordIndex: 7,
        options: [
            { word: "apabullante", score: 92, feedback: "'Apabullante' deja sin aliento por su magnitud." },
            { word: "descomunal", score: 90, feedback: "'Descomunal' es de tamaño monstruoso, buena metáfora." },
            { word: "intrincada", score: 95, feedback: "'Intrincada' es enrevesada y con muchos vericuetos." },
            { word: "laberíntica", score: 100, feedback: "¡Perfecto! 'Laberíntica' es como un laberinto, donde es fácil perderse pero fascina intentar encontrar la salida." }
        ],
        bestAnswer: "laberíntica",
        explanation: "Una trama 'laberíntica' ofrece múltiples caminos y callejones sin salida, abrumando al lector pero manteniendo su interés mediante el desafío intelectual."
    },
    {
        id: "es-395",
        sentence: "Su conocimiento de las leyes del mercado era profundo y práctico.",
        targetWord: "profundo",
        targetWordIndex: 9,
        options: [
            { word: "hondo", score: 85, feedback: "'Hondo' es sinónimo, pero menos usado en contexto académico." },
            { word: "sesudo", score: 90, feedback: "'Sesudo' implica reflexión profunda y seriedad intelectual." },
            { word: "raigal", score: 95, feedback: "'Raigal' está arraigado en lo fundamental, como las raíces." },
            { word: "estratosférico", score: 100, feedback: "¡Perfecto! 'Estratosférico' (en sentido figurado) alcanza capas de comprensión superiores, combinando profundidad teórica y aplicación práctica." }
        ],
        bestAnswer: "estratosférico",
        explanation: "Un conocimiento 'estratosférico' trasciende lo superficial para operar en las capas más altas de comprensión, donde la teoría y la práctica se fusionan."
    },
    {
        id: "es-396",
        sentence: "La ironía de la situación era amarga y no escapaba a nadie.",
        targetWord: "amarga",
        targetWordIndex: 8,
        options: [
            { word: "ácida", score: 95, feedback: "'Ácida' es corrosiva y mordaz, muy adecuada para ironía." },
            { word: "dolorosa", score: 85, feedback: "'Dolorosa' causa dolor, pero puede no ser irónica." },
            { word: "cínica", score: 90, feedback: "'Cínica' muestra descreimiento, a menudo con ironía." },
            { word: "sardónica", score: 100, feedback: "¡Perfecto! 'Sardónica' combina ironía con un regusto de burla amarga y desprecio." }
        ],
        bestAnswer: "sardónica",
        explanation: "Una ironía 'sardónica' hace reír con disgusto, donde lo cómico se mezcla con lo trágico en una sonrisa torcida ante el destino."
    },
    {
        id: "es-397",
        sentence: "La adaptación cinematográfica de la novela fue fiel en espíritu pero libre en detalles.",
        targetWord: "fiel",
        targetWordIndex: 8,
        options: [
            { word: "leal", score: 85, feedback: "'Leal' mantiene fidelidad, pero se aplica más a personas." },
            { word: "ajustada", score: 80, feedback: "'Ajustada' se ciñe al original, contradice 'libre en detalles'." },
            { word: "respetuosa", score: 90, feedback: "'Respetuosa' muestra consideración por el original." },
            { word: "isomórfica", score: 100, feedback: "¡Perfecto! 'Isomórfica' preserva la estructura profunda y relaciones esenciales, aunque cambie elementos superficiales." }
        ],
        bestAnswer: "isomórfica",
        explanation: "Una adaptación 'isomórfica' busca equivalencia estructural con el original, manteniendo su esencia narrativa mientras transforma su expresión concreta."
    },
    {
        id: "es-398",
        sentence: "La resistencia de la comunidad ante la adversidad era admirable y conmovedora.",
        targetWord: "admirable",
        targetWordIndex: 9,
        options: [
            { word: "encomiable", score: 92, feedback: "'Encomiable' merece elogio, muy cercano." },
            { word: "loable", score: 90, feedback: "'Loable' es digno de alabanza." },
            { word: "ejemplar", score: 95, feedback: "'Ejemplar' sirve de modelo para otros." },
            { word: "estoica", score: 100, feedback: "¡Perfecto! 'Estoica' muestra fortaleza serena frente al sufrimiento, digna de admiración." }
        ],
        bestAnswer: "estoica",
        explanation: "Una resistencia 'estoica' enfrenta la adversidad con dignidad impasible, transformando el sufrimiento en un acto de virtud colectiva."
    },
    {
        id: "es-399",
        sentence: "La oscuridad en la cueva era total y aterradora.",
        targetWord: "total",
        targetWordIndex: 6,
        options: [
            { word: "absoluta", score: 95, feedback: "'Absoluta' es sin excepciones, muy cercano." },
            { word: "completa", score: 85, feedback: "'Completa' abarca todo, pero es menos enfática." },
            { word: "perfecta", score: 80, feedback: "'Perfecta' implica cualidad ideal, no necesariamente exhaustividad." },
            { word: "ctónica", score: 100, feedback: "¡Perfecto! 'Ctónica' (de las profundidades de la tierra) evoca la oscuridad primordial y amenazante del subsuelo." }
        ],
        bestAnswer: "ctónica",
        explanation: "Una oscuridad 'ctónica' es la negrura constitutiva del mundo inferior, tan absoluta que activa miedos ancestrales a lo subterráneo."
    },
    {
        id: "es-400",
        sentence: "Su percepción de los detalles era aguda y siempre notaba lo que otros pasaban por alto.",
        targetWord: "aguda",
        targetWordIndex: 6,
        options: [
            { word: "penetrante", score: 95, feedback: "'Penetrante' atraviesa las apariencias para ver lo esencial." },
            { word: "perspicaz", score: 92, feedback: "'Perspicaz' denota claridad de visión intelectual." },
            { word: "sutil", score: 90, feedback: "'Sutil' percibe diferencias mínimas, pero puede ser menos activa." },
            { word: "linces", score: 100, feedback: "¡Perfecto! 'Linces' (vista de lince) describe una agudeza visual excepcional, metafóricamente aplicada a la percepción." }
        ],
        bestAnswer: "linces",
        explanation: "Una percepción 'linces' posee la agudeza proverbial del lince, captando detalles imperceptibles para la mirada común y revelando significados ocultos."
    }
];
