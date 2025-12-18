import { SwapChallenge } from "../../types";

export const esQuestions: SwapChallenge[] = [
    {
        id: "es-1",
        sentence: "El gran edificio dominaba la ciudad.",
        targetWord: "gran",
        targetWordIndex: 1,
        options: [
            { word: "imponente", score: 100, feedback: "¡Perfecto! 'Imponente' describe un edificio que causa gran impresión." },
            { word: "alto", score: 40, feedback: "Simple." },
            { word: "bueno", score: 10, feedback: "Vago." },
            { word: "fuerte", score: 20, feedback: "Resistencia." }
        ],
        bestAnswer: "imponente",
        explanation: "'Imponente' resalta la majestad y el tamaño del edificio en el paisaje urbano."
    },
    {
        id: "es-2",
        sentence: "La luz brillante del sol nos cegaba.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "clara", score: 30, feedback: "Visibilidad." },
            { word: "deslumbrante", score: 100, feedback: "¡Perfecto! 'Deslumbrante' significa que deja ciego momentáneamente." },
            { word: "blanca", score: 20, feedback: "Color." },
            { word: "bella", score: 10, feedback: "Estética." }
        ],
        bestAnswer: "deslumbrante",
        explanation: "'Deslumbrante' explica por qué la luz impedía ver correctamente."
    },
    {
        id: "es-3",
        sentence: "El viejo manuscrito era difícil de leer.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "usado", score: 20, feedback: "Estado físico." },
            { word: "antiguo", score: 40, feedback: "Genérico." },
            { word: "ilegible", score: 100, feedback: "¡Perfecto! 'Ilegible' se refiere directamente a la dificultad de leer." },
            { word: "pasado", score: 10, feedback: "Tiempo." }
        ],
        bestAnswer: "ilegible",
        explanation: "'Ilegible' es el término más preciso para describir un texto que no se puede descifrar."
    },
    {
        id: "es-4",
        sentence: "El silencio tranquilo del campo era reparador.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 30, feedback: "Falta." },
            { word: "apacible", score: 100, feedback: "¡Perfecto! 'Apacible' describe una tranquilidad dulce y agradable." },
            { word: "neto", score: 10, feedback: "Claridad." }
        ],
        bestAnswer: "apacible",
        explanation: "'Apacible' refuerza la idea de un silencio que invita al descanso y la paz."
    },
    {
        id: "es-5",
        sentence: "La buena comida nos dejó satisfechos.",
        targetWord: "buena",
        targetWordIndex: 1,
        options: [
            { word: "suculenta", score: 100, feedback: "¡Perfecto! 'Suculenta' describe una comida sabrosa y sustanciosa." },
            { word: "clara", score: 10, feedback: "Lógica." },
            { word: "grande", score: 20, feedback: "Cantidad." },
            { word: "bella", score: 30, feedback: "Estética." }
        ],
        bestAnswer: "suculenta",
        explanation: "'Suculenta' añade una connotación de placer gastronómico y abundancia."
    },
    {
        id: "es-6",
        sentence: "El pequeño detalle reveló la verdad.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "revelador", score: 100, feedback: "¡Perfecto! 'Revelador' destaca que el detalle trajo a la luz lo oculto." },
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "fino", score: 30, feedback: "Textura." }
        ],
        bestAnswer: "revelador",
        explanation: "'Revelador' explica por qué ese detalle fue crucial para conocer la verdad."
    },
    {
        id: "es-7",
        sentence: "La gran tormenta azotó la costa.",
        targetWord: "gran",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 10, feedback: "Vago." },
            { word: "alta", score: 20, feedback: "Altura." },
            { word: "devastadora", score: 100, feedback: "¡Perfecto! 'Devastadora' describe una tormenta que causa gran destrucción." },
            { word: "clara", score: 30, feedback: "Visibilidad." }
        ],
        bestAnswer: "devastadora",
        explanation: "'Devastadora' enfatiza el poder destructivo del fenómeno climático."
    },
    {
        id: "es-8",
        sentence: "El tipo era muy valiente en combate.",
        targetWord: "valiente",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 20, feedback: "Vago." },
            { word: "fuerte", score: 30, feedback: "Físico." },
            { word: "intrépido", score: 100, feedback: "¡Perfecto! 'Intrépido' significa que no teme al peligro." },
            { word: "bién", score: 10, feedback: "Sintaxis." }
        ],
        bestAnswer: "intrépido",
        explanation: "'Intrépido' es un adjetivo más elevado y heroico para referirse al valor en combate."
    },
    {
        id: "es-9",
        sentence: "La bella melodía nos conmovió.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "sublime", score: 100, feedback: "¡Perfecto! 'Sublime' describe algo de una belleza o calidad excepcional." },
            { word: "buena", score: 30, feedback: "Simple." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "joven", score: 10, feedback: "Inadecuado." }
        ],
        bestAnswer: "sublime",
        explanation: "'Sublime' resalta la capacidad de la melodía para elevar el espíritu."
    },
    {
        id: "es-10",
        sentence: "El pequeño error arruinó el experimento.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Dimensión." },
            { word: "bajo", score: 20, feedback: "Posición." },
            { word: "garrafal", score: 100, feedback: "¡Perfecto! 'Garrafal' se usa para errores muy grandes o importantes." },
            { word: "fino", score: 30, feedback: "Delicadeza." }
        ],
        bestAnswer: "garrafal",
        explanation: "'Garrafal' ironiza sobre la aparente pequeñez que causó un gran daño."
    },
    {
        id: "es-11",
        sentence: "La gran vista desde la montaña era única.",
        targetWord: "gran",
        targetWordIndex: 1,
        options: [
            { word: "panorámica", score: 100, feedback: "¡Perfecto! 'Panorámica' describe una vista amplia y completa." },
            { word: "buena", score: 30, feedback: "Vago." },
            { word: "alta", score: 40, feedback: "Simple." },
            { word: "clara", score: 20, feedback: "Visibilidad." }
        ],
        bestAnswer: "panorámica",
        explanation: "'Panorámica' añade precisión sobre la extensión visual desde la altura."
    },
    {
        id: "es-12",
        sentence: "El silencio tranquilo de la noche no se rompía.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "imperturbable", score: 100, feedback: "¡Perfecto! 'Imperturbable' sugiere un silencio que nada puede alterar." },
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Falta." },
            { word: "largo", score: 30, feedback: "Tiempo." }
        ],
        bestAnswer: "imperturbable",
        explanation: "'Imperturbable' refuerza la solidez y profundidad del silencio nocturno."
    },
    {
        id: "es-13",
        sentence: "La buena noticia trajo esperanza a todos.",
        targetWord: "buena",
        targetWordIndex: 1,
        options: [
            { word: "alentadora", score: 100, feedback: "¡Perfecto! 'Alentadora' significa que infunde ánimo o esperanza." },
            { word: "clara", score: 20, feedback: "Lógica." },
            { word: "grande", score: 40, feedback: "Tamaño." },
            { word: "bella", score: 30, feedback: "Estética." }
        ],
        bestAnswer: "alentadora",
        explanation: "'Alentadora' vincula la calidad de la noticia con su efecto emocional positivo."
    },
    {
        id: "es-14",
        sentence: "El viaje largo fue muy cansado.",
        targetWord: "largo",
        targetWordIndex: 1,
        options: [
            { word: "agotador", score: 100, feedback: "¡Perfecto! 'Agotador' describe algo que consume todas las fuerzas." },
            { word: "alto", score: 10, feedback: "Dimensión vertical." },
            { word: "gran", score: 30, feedback: "Importancia." },
            { word: "fuerte", score: 20, feedback: "Potencia." }
        ],
        bestAnswer: "agotador",
        explanation: "'Agotador' especifica el tipo de cansancio extremo que causó el viaje."
    },
    {
        id: "es-15",
        sentence: "El trabajo difícil requiere mucha paciencia.",
        targetWord: "difícil",
        targetWordIndex: 1,
        options: [
            { word: "arduo", score: 100, feedback: "¡Perfecto! 'Arduo' significa muy difícil, penoso o que requiere mucho esfuerzo." },
            { word: "bueno", score: 20, feedback: "Vago." },
            { word: "fuerte", score: 30, feedback: "Materia." },
            { word: "bajo", score: 10, feedback: "Posición." }
        ],
        bestAnswer: "arduo",
        explanation: "'Arduo' es la palabra académica idónea para un trabajo que exige gran esfuerzo."
    },
    {
        id: "es-16",
        sentence: "El cielo azul no tenía ni una nube.",
        targetWord: "azul",
        targetWordIndex: 1,
        options: [
            { word: "despejado", score: 100, feedback: "¡Perfecto! 'Despejado' se usa para cielos sin nubes." },
            { word: "limpio", score: 40, feedback: "Falta de suciedad." },
            { word: "libre", score: 20, feedback: "Libertad." },
            { word: "vacio", score: 10, feedback: "Sin contenido." }
        ],
        bestAnswer: "despejado",
        explanation: "'Despejado' es el término meteorológico exacto para la descripción dada."
    },
    {
        id: "es-17",
        sentence: "El agua fría de la montaña era pura.",
        targetWord: "fría",
        targetWordIndex: 1,
        options: [
            { word: "baja", score: 20, feedback: "Escala." },
            { word: "clara", score: 40, feedback: "Transparencia." },
            { word: "gélida", score: 100, feedback: "¡Perfecto! 'Gélida' enfatiza una temperatura extremadamente baja." },
            { word: "muerta", score: 10, feedback: "Inerte." }
        ],
        bestAnswer: "gélida",
        explanation: "'Gélida' aporta intensidad a la descripción de la temperatura del agua de deshielo."
    },
    {
        id: "es-18",
        sentence: "El gran palacio estaba decorado con oro.",
        targetWord: "gran",
        targetWordIndex: 1,
        options: [
            { word: "suntuoso", score: 100, feedback: "¡Perfecto! 'Suntuoso' significa magnífico, lujoso y costoso." },
            { word: "alto", score: 20, feedback: "Dimensión vertical." },
            { word: "gordo", score: 10, feedback: "Volumen." },
            { word: "fuerte", score: 30, feedback: "Resistencia." }
        ],
        bestAnswer: "suntuoso",
        explanation: "'Suntuoso' es el adjetivo que mejor refleja el lujo extremo mencionado (oro)."
    },
    {
        id: "es-19",
        sentence: "La música suave nos ayudó a dormir.",
        targetWord: "suave",
        targetWordIndex: 1,
        options: [
            { word: "baja", score: 30, feedback: "Volumen." },
            { word: "fina", score: 20, feedback: "Textura." },
            { word: "sedante", score: 100, feedback: "¡Perfecto! 'Sedante' describe algo que calma o apacigua." },
            { word: "clara", score: 40, feedback: "Nitidez." }
        ],
        bestAnswer: "sedante",
        explanation: "'Sedante' se refiere directamente a la función de ayudar a conciliar el sueño."
    },
    {
        id: "es-20",
        sentence: "El nuevo invento cambió la industria.",
        targetWord: "nuevo",
        targetWordIndex: 1,
        options: [
            { word: "revolucionario", score: 100, feedback: "¡Perfecto! 'Revolucionario' indica un cambio radical y trascendental." },
            { word: "fresco", score: 10, feedback: "Novedad efímera." },
            { word: "joven", score: 20, feedback: "Edad." },
            { word: "claro", score: 30, feedback: "Lógica." }
        ],
        bestAnswer: "revolucionario",
        explanation: "'Revolucionario' explica por qué pudo transformar toda una industria."
    },
    {
        id: "es-21",
        sentence: "El pequeño animal se escondió rápidamente.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "minúsculo", score: 100, feedback: "¡Perfecto! 'Minúsculo' enfatiza que el tamaño es extremadamente reducido." },
            { word: "corto", score: 10, feedback: "Dimensión." },
            { word: "bajo", score: 20, feedback: "Posición." },
            { word: "fino", score: 30, feedback: "Grosor." }
        ],
        bestAnswer: "minúsculo",
        explanation: "'Minúsculo' ayuda a entender por qué el animal pudo ocultarse tan fácil."
    },
    {
        id: "es-22",
        sentence: "La fuerte brisa movía las ramas de los árboles.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "impetuosa", score: 100, feedback: "¡Perfecto! 'Impetuosa' describe una fuerza violenta y rápida." },
            { word: "gran", score: 20, feedback: "Dimensión." },
            { word: "dura", score: 30, feedback: "Tacto." },
            { word: "seca", score: 40, feedback: "Humedad." }
        ],
        bestAnswer: "impetuosa",
        explanation: "'Impetuosa' da carácter y vigor a la descripción del movimiento del viento."
    },
    {
        id: "es-23",
        sentence: "El tipo era muy educado con sus invitados.",
        targetWord: "educado",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 20, feedback: "Vago." },
            { word: "bién", score: 10, feedback: "Adverbio." },
            { word: "atento", score: 100, feedback: "¡Perfecto! 'Atento' significa que muestra cortesía y cuidado por los demás." },
            { word: "claro", score: 30, feedback: "Evidente." }
        ],
        bestAnswer: "atento",
        explanation: "'Atento' es la forma específica de cortesía que se espera de un anfitrión."
    },
    {
        id: "es-24",
        sentence: "La luz brillante de la estrella guiaba a los navegantes.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 30, feedback: "Estética." },
            { word: "clara", score: 40, feedback: "Nitidez." },
            { word: "fulgurante", score: 100, feedback: "¡Perfecto! 'Fulgurante' describe un brillo intenso y vibrante." },
            { word: "blanca", score: 20, feedback: "Color." }
        ],
        bestAnswer: "fulgurante",
        explanation: "'Fulgurante' describe un resplandor vivo y sobresaliente en el cielo nocturno."
    },
    {
        id: "es-25",
        sentence: "El viejo muro se caía a pedazos.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Genérico." },
            { word: "ruinoso", score: 100, feedback: "¡Perfecto! 'Ruinoso' describe algo que está en estado de ruina o destrucción." },
            { word: "usado", score: 20, feedback: "Uso comercial." },
            { word: "bajo", score: 10, feedback: "Altura." }
        ],
        bestAnswer: "ruinoso",
        explanation: "'Ruinoso' justifica por qué el muro se estaba desmoronando."
    },
    {
        id: "es-26",
        sentence: "El silencio tranquilo de la iglesia invitaba a rezar.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "solemne", score: 100, feedback: "¡Perfecto! 'Solemne' describe algo majestuoso y con gran respeto." },
            { word: "vacío", score: 30, feedback: "Falta de gente." },
            { word: "largo", score: 10, feedback: "Tiempo." }
        ],
        bestAnswer: "solemne",
        explanation: "'Solemne' captura la atmósfera de respeto y majestad del lugar sagrado."
    },
    {
        id: "es-27",
        sentence: "La bella historia nos hizo llorar de emoción.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 20, feedback: "Simple." },
            { word: "conmovedora", score: 100, feedback: "¡Perfecto! 'Conmovedora' significa que emociona profundamente." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "viva", score: 40, feedback: "Realidad." }
        ],
        bestAnswer: "conmovedora",
        explanation: "'Conmovedora' vincula directamente la calidad del relato con la reacción de llanto."
    },
    {
        id: "es-28",
        sentence: "El pequeño beneficio no compensaba el esfuerzo.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Dimensión." },
            { word: "bajo", score: 20, feedback: "Cuantía." },
            { word: "irrisorio", score: 100, feedback: "¡Perfecto! 'Irrisorio' significa tan pequeño que causa risa o desprecio." },
            { word: "fino", score: 30, feedback: "Estética." }
        ],
        bestAnswer: "irrisorio",
        explanation: "'Irrisorio' califica al beneficio como insignificante y poco valioso."
    },
    {
        id: "es-29",
        sentence: "La fuerte presión hizo que el dique se rompiera.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 20, feedback: "Tamaño." },
            { word: "irresistible", score: 100, feedback: "¡Perfecto! 'Irresistible' significa que no se puede resistir." },
            { word: "dura", score: 30, feedback: "Tacto." },
            { word: "larga", score: 10, feedback: "Tiempo." }
        ],
        bestAnswer: "irresistible",
        explanation: "'Irresistible' explica por qué la estructura no pudo contener la fuerza del agua."
    },
    {
        id: "es-30",
        sentence: "El tipo era muy orgulloso de sus raíces.",
        targetWord: "orgulloso",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 10, feedback: "Vago." },
            { word: "noble", score: 40, feedback: "Dignidad." },
            { word: "ferviente", score: 100, feedback: "¡Perfecto! 'Ferviente' describe algo con entusiasmo y ardor." },
            { word: "claro", score: 20, feedback: "Sin duda." }
        ],
        bestAnswer: "ferviente",
        explanation: "'Ferviente' añade un matiz de pasión y entrega a la descripción del sentimiento."
    },
    {
        id: "es-31",
        sentence: "La luz brillante del amanecer pintaba el cielo de naranja.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 30, feedback: "Estética." },
            { word: "clara", score: 40, feedback: "Luminosidad." },
            { word: "pálida", score: 10, feedback: "Falta de color." },
            { word: "vibrante", score: 100, feedback: "¡Perfecto! 'Vibrante' describe colores o luces intensos y vivos." }
        ],
        bestAnswer: "vibrante",
        explanation: "'Vibrante' se asocia con la viveza de los colores del amanecer."
    },
    {
        id: "es-32",
        sentence: "El viejo roble aguantó la tormenta.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Genérico." },
            { word: "usado", score: 10, feedback: "Uso." },
            { word: "centenario", score: 100, feedback: "¡Perfecto! 'Centenario' significa que tiene cien o más años." },
            { word: "bajo", score: 20, feedback: "Posición." }
        ],
        bestAnswer: "centenario",
        explanation: "'Centenario' aporta una precisión temporal importante para la resistencia del árbol."
    },
    {
        id: "es-33",
        sentence: "El silencio tranquilo del desierto era inquietante.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "absoluto", score: 100, feedback: "¡Perfecto! 'Absoluto' significa completo, sin excepciones." },
            { word: "vacío", score: 30, feedback: "Falta de vida." },
            { word: "neto", score: 10, feedback: "Claro." }
        ],
        bestAnswer: "absoluto",
        explanation: "'Absoluto' enfatiza la falta total de sonido que hace al desierto inquietante."
    },
    {
        id: "es-34",
        sentence: "La buena organización fue la clave del evento.",
        targetWord: "buena",
        targetWordIndex: 1,
        options: [
            { word: "impecable", score: 100, feedback: "¡Perfecto! 'Impecable' significa sin falta ni defecto alguno." },
            { word: "clara", score: 20, feedback: "Logística." },
            { word: "grande", score: 30, feedback: "Magnitud." },
            { word: "bella", score: 10, feedback: "Estética." }
        ],
        bestAnswer: "impecable",
        explanation: "'Impecable' justifica el éxito total del evento al no tener errores."
    },
    {
        id: "es-35",
        sentence: "El pequeño pájaro cantaba al alba.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "frágil", score: 100, feedback: "¡Perfecto! 'Frágil' sugiere debilidad y delicadeza física." },
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "fino", score: 40, feedback: "Configuración." }
        ],
        bestAnswer: "frágil",
        explanation: "'Frágil' aporta una nota de ternura y vulnerabilidad al ave."
    },
    {
        id: "es-36",
        sentence: "La fuerte lluvia no paró en toda la tarde.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 20, feedback: "Dimensión." },
            { word: "persistente", score: 100, feedback: "¡Perfecto! 'Persistente' significa que se mantiene constante." },
            { word: "dura", score: 30, feedback: "Textura." },
            { word: "larga", score: 40, feedback: "Tiempo." }
        ],
        bestAnswer: "persistente",
        explanation: "'Persistente' enfatiza la duración ininterrumpida de la lluvia."
    },
    {
        id: "es-37",
        sentence: "El tipo era muy puntual en sus citas.",
        targetWord: "puntual",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 20, feedback: "Vago." },
            { word: "metódico", score: 100, feedback: "¡Perfecto! 'Metódico' significa que sigue un orden o método rígido." },
            { word: "bién", score: 10, feedback: "Sintaxis." },
            { word: "fijo", score: 30, feedback: "Estático." }
        ],
        bestAnswer: "metódico",
        explanation: "'Metódico' explica el origen de su puntualidad como parte de un sistema de vida."
    },
    {
        id: "es-38",
        sentence: "La luz brillante de la linterna se agotaba.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "tenue", score: 100, feedback: "¡Perfecto! 'Tenue' significa débil o con poca intensidad." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "blanca", score: 10, feedback: "Color." },
            { word: "bella", score: 20, feedback: "Estética." }
        ],
        bestAnswer: "tenue",
        explanation: "'Tenue' describe perfectamente la luz que está a punto de apagarse."
    },
    {
        id: "es-39",
        sentence: "El viejo pescador conocía todos los secretos del mar.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 30, feedback: "Prestigio." },
            { word: "experimentado", score: 100, feedback: "¡Perfecto! 'Experimentado' significa que tiene mucha experiencia." },
            { word: "usado", score: 10, feedback: "Materialista." },
            { word: "pasado", score: 20, feedback: "Cronológico." }
        ],
        bestAnswer: "experimentado",
        explanation: "'Experimentado' une la vejez con la acumulación de conocimiento práctico."
    },
    {
        id: "es-40",
        sentence: "El silencio tranquilo de la sala permitió la meditación.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "sereno", score: 100, feedback: "¡Perfecto! 'Sereno' describe una paz profunda y sin turbación." },
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Falta." },
            { word: "neto", score: 30, feedback: "Nitidez." }
        ],
        bestAnswer: "sereno",
        explanation: "'Sereno' es el estado ideal de silencio para un acto mental como la meditación."
    },
    {
        id: "es-41",
        sentence: "La bella pintura de la capilla es una obra maestra.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 20, feedback: "Vago." },
            { word: "exquisita", score: 100, feedback: "¡Perfecto! 'Exquisita' describe algo de una calidad y refinamiento extremo." },
            { word: "clara", score: 30, feedback: "Visión." },
            { word: "viva", score: 40, feedback: "Color." }
        ],
        bestAnswer: "exquisita",
        explanation: "'Exquisita' añade un matiz de refinamiento artístico a la pintura."
    },
    {
        id: "es-42",
        sentence: "El pequeño detalle en el contrato era una trampa.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Extensión." },
            { word: "ambiguo", score: 100, feedback: "¡Perfecto! 'Ambiguo' significa que puede tener varios sentidos o interpretaciones." },
            { word: "bajo", score: 20, feedback: "Posición." },
            { word: "fino", score: 30, feedback: "Físico." }
        ],
        bestAnswer: "ambiguo",
        explanation: "'Ambiguo' explica por qué ese detalle pudo servir de trampa legal."
    },
    {
        id: "es-43",
        sentence: "La fuerte oposición impidió el cambio.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "encarnizada", score: 100, feedback: "¡Perfecto! 'Encarnizada' describe una lucha muy violenta y tenaz." },
            { word: "gran", score: 30, feedback: "Tamaño." },
            { word: "dura", score: 40, feedback: "Obstinación." },
            { word: "larga", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "encarnizada",
        explanation: "'Encarnizada' resalta la ferocidad con la que se resistieron al cambio."
    },
    {
        id: "es-44",
        sentence: "El tipo era muy rico, pero también muy avaro.",
        targetWord: "rico",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 20, feedback: "Moral." },
            { word: "opulento", score: 100, feedback: "¡Perfecto! 'Opulento' significa que posee gran riqueza y abundancia." },
            { word: "bién", score: 10, feedback: "Adverbio." },
            { word: "fijo", score: 30, feedback: "Económico." }
        ],
        bestAnswer: "opulento",
        explanation: "'Opulento' es el término más rico para referirse a una gran fortuna."
    },
    {
        id: "es-45",
        sentence: "La luz brillante del rayo asustó a los animales.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "fulminante", score: 100, feedback: "¡Perfecto! 'Fulminante' se refiere a la rapidez y poder del rayo." },
            { word: "bella", score: 10, feedback: "Afecto." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "blanca", score: 30, feedback: "Color." }
        ],
        bestAnswer: "fulminante",
        explanation: "'Fulminante' conecta la luz con el poder destructivo y súbito del rayo."
    },
    {
        id: "es-46",
        sentence: "El viejo archivo contenía datos secretos.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 50, feedback: "Tiempo." },
            { word: "polvoriento", score: 100, feedback: "¡Perfecto! 'Polvoriento' sugiere que el archivo no ha sido tocado en mucho tiempo." },
            { word: "usado", score: 20, feedback: "Uso." },
            { word: "bajo", score: 10, feedback: "Posición." }
        ],
        bestAnswer: "polvoriento",
        explanation: "'Polvoriento' ambienta el archivo como un lugar olvidado pero lleno de secretos."
    },
    {
        id: "es-47",
        sentence: "El silencio tranquilo del bosque fue roto por un disparo.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "idílico", score: 100, feedback: "¡Perfecto! 'Idílico' describe algo ideal, puro y pastoril." },
            { word: "bajo", score: 30, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Habitantes." },
            { word: "neto", score: 20, feedback: "Puro." }
        ],
        bestAnswer: "idílico",
        explanation: "'Idílico' resalta la perfección de la paz del bosque antes del impacto."
    },
    {
        id: "es-48",
        sentence: "La bella sonrisa de la niña nos alegró el día.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 20, feedback: "Simple." },
            { word: "radiante", score: 100, feedback: "¡Perfecto! 'Radiante' significa que resplandece de alegría." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "viva", score: 40, feedback: "Realidad." }
        ],
        bestAnswer: "radiante",
        explanation: "'Radiante' comunica una belleza que emana felicidad y luz."
    },
    {
        id: "es-49",
        sentence: "El pequeño espacio era suficiente para una persona.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "angosto", score: 100, feedback: "¡Perfecto! 'Angosto' significa estrecho o con poco espacio lateral." },
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "fino", score: 40, feedback: "Grosor." }
        ],
        bestAnswer: "angosto",
        explanation: "'Angosto' describe con precisión la falta de amplitud lateral del espacio."
    },
    {
        id: "es-50",
        sentence: "La fuerte tormenta de arena cubrió la ciudad.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 20, feedback: "Magnitud." },
            { word: "asfixiante", score: 100, feedback: "¡Perfecto! 'Asfixiante' describe algo que dificulta la respiración o el movimiento." },
            { word: "dura", score: 10, feedback: "Consistencia." },
            { word: "larga", score: 30, feedback: "Tiempo." }
        ],
        bestAnswer: "asfixiante",
        explanation: "'Asfixiante' comunica la sensación sofocante de una tormenta de arena."
    },
    {
        id: "es-51",
        sentence: "El sol brillante calentaba la arena.",
        targetWord: "brillant",
        targetWordIndex: 1,
        options: [
            { word: "canicular", score: 100, feedback: "¡Perfecto! 'Canicular' se refiere al calor más fuerte del verano." },
            { word: "claro", score: 30, feedback: "Brillo." },
            { word: "bello", score: 20, feedback: "Estética." },
            { word: "blanco", score: 10, feedback: "Color." }
        ],
        bestAnswer: "canicular",
        explanation: "'Canicular' es el término preciso para el calor intenso del sol de verano."
    },
    {
        id: "es-52",
        sentence: "El viejo puente romano sigue en pie.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Genérico." },
            { word: "milenario", score: 100, feedback: "¡Perfecto! 'Milenario' significa que tiene uno o más milenios." },
            { word: "usado", score: 20, feedback: "Uso." },
            { word: "bajo", score: 10, feedback: "Posición." }
        ],
        bestAnswer: "milenario",
        explanation: "'Milenario' resalta la asombrosa antigüedad y resistencia del puente."
    },
    {
        id: "es-53",
        sentence: "El silencio tranquilo del estudio favorecía el trabajo.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 30, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Falta." },
            { word: "laborioso", score: 100, feedback: "¡Perfecto! 'Laborioso' describe un silencio productivo y de esfuerzo." },
            { word: "neto", score: 20, feedback: "Claridad." }
        ],
        bestAnswer: "laborioso",
        explanation: "'Laborioso' califica la atmósfera de trabajo concentrado en el estudio."
    },
    {
        id: "es-54",
        sentence: "La buena actuación de la orquesta fue premiada.",
        targetWord: "buena",
        targetWordIndex: 1,
        options: [
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "grande", score: 10, feedback: "Tamaño." },
            { word: "bella", score: 30, feedback: "Estética." },
            { word: "magistral", score: 100, feedback: "¡Perfecto! 'Magistral' significa hecha con maestría." }
        ],
        bestAnswer: "magistral",
        explanation: "'Magistral' es el elogio técnico para una interpretación de alta calidad."
    },
    {
        id: "es-55",
        sentence: "El pequeño cambio de horario nos confundió.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "abrupto", score: 100, feedback: "¡Perfecto! 'Abrupto' significa repentino e inesperado." },
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "fino", score: 30, feedback: "Textura." }
        ],
        bestAnswer: "abrupto",
        explanation: "'Abrupto' explica por qué un cambio, aunque pequeño, causó confusión."
    },
    {
        id: "es-56",
        sentence: "La fuerte nevada bloqueó los caminos.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 20, feedback: "Dimensión." },
            { word: "copiosa", score: 100, feedback: "¡Perfecto! 'Copiosa' significa abundante y cuantiosa." },
            { word: "dura", score: 10, feedback: "Tacto." },
            { word: "larga", score: 30, feedback: "Tiempo." }
        ],
        bestAnswer: "copiosa",
        explanation: "'Copiosa' es el adjetivo preciso para una gran acumulación de nieve."
    },
    {
        id: "es-57",
        sentence: "El tipo era muy astuto en sus negocios.",
        targetWord: "astuto",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 20, feedback: "Vago." },
            { word: "fuerte", score: 10, feedback: "Físico." },
            { word: "sagaz", score: 100, feedback: "¡Perfecto! 'Sagaz' significa astuto y difícil de engañar." },
            { word: "claro", score: 30, feedback: "Evidente." }
        ],
        bestAnswer: "sagaz",
        explanation: "'Sagaz' eleva la astucia a una cualidad de inteligencia aplicada al éxito."
    },
    {
        id: "es-58",
        sentence: "La luz brillante del faro atravesaba la niebla.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 20, feedback: "Afecto." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "blanca", score: 10, feedback: "Color." },
            { word: "penetrante", score: 100, feedback: "¡Perfecto! 'Penetrante' describe una luz que puede atravesar obstáculos." }
        ],
        bestAnswer: "penetrante",
        explanation: "'Penetrante' destaca la función de la luz del faro de romper la niebla."
    },
    {
        id: "es-59",
        sentence: "El viejo edificio de correos es una joya arquitectónica.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "emblemático", score: 100, feedback: "¡Perfecto! 'Emblemático' significa que sirve de emblema o símbolo." },
            { word: "usado", score: 10, feedback: "Uso." },
            { word: "antiguo", score: 50, feedback: "Genérico." },
            { word: "pasado", score: 20, feedback: "Cronológico." }
        ],
        bestAnswer: "emblemático",
        explanation: "'Emblemático' resalta el valor simbólico y cultural del antiguo edificio."
    },
    {
        id: "es-60",
        sentence: "El silencio tranquilo de la medianoche asustaba.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "sepulcral", score: 100, feedback: "¡Perfecto! 'Sepulcral' sugiere un silencio profundo y fúnebre." },
            { word: "vacío", score: 10, feedback: "Falta." },
            { word: "neto", score: 30, feedback: "Nitidez." }
        ],
        bestAnswer: "sepulcral",
        explanation: "'Sepulcral' justifica la sensación de miedo mencionada."
    },
    {
        id: "es-61",
        sentence: "La bella pintura renacentista fue restaurada.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 10, feedback: "Simple." },
            { word: "clara", score: 20, feedback: "Visión." },
            { word: "vivida", score: 30, feedback: "Vitalidad." },
            { word: "inestimable", score: 100, feedback: "¡Perfecto! 'Inestimable' significa que no tiene precio por su gran valor." }
        ],
        bestAnswer: "inestimable",
        explanation: "'Inestimable' valora la obra por su importancia histórica y artística única."
    },
    {
        id: "es-62",
        sentence: "El pequeño insecto caminaba por la hoja.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "frágil", score: 30, feedback: "Resistencia." },
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "diminuto", score: 100, feedback: "¡Perfecto! 'Diminuto' resalta un tamaño muy reducido." },
            { word: "fino", score: 20, feedback: "Grosor." }
        ],
        bestAnswer: "diminuto",
        explanation: "'Diminuto' es la palabra ideal para describir la escala del insecto."
    },
    {
        id: "es-63",
        sentence: "La fuerte determinación del equipo les dio la victoria.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 20, feedback: "Tamaño." },
            { word: "dura", score: 10, feedback: "Tacto." },
            { word: "férrea", score: 100, feedback: "¡Perfecto! 'Férrea' significa dura como el hierro, inquebrantable." },
            { word: "larga", score: 30, feedback: "Tiempo." }
        ],
        bestAnswer: "férrea",
        explanation: "'Férrea' califica la resolución del equipo como algo imposible de romper."
    },
    {
        id: "es-64",
        sentence: "El tipo era muy cruel con sus enemigos.",
        targetWord: "cruel",
        targetWordIndex: 3,
        options: [
            { word: "malo", score: 20, feedback: "Simple." },
            { word: "duro", score: 30, feedback: "Resistencia." },
            { word: "bién", score: 10, feedback: "Sintaxis." },
            { word: "despiadado", score: 100, feedback: "¡Perfecto! 'Despiadado' significa que no tiene piedad o compasión." }
        ],
        bestAnswer: "despiadado",
        explanation: "'Despiadado' enfatiza la falta total de humanidad hacia el oponente."
    },
    {
        id: "es-65",
        sentence: "La luz brillante de la explosión se vio a kilómetros.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 10, feedback: "Afecto." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "cegadora", score: 100, feedback: "¡Perfecto! 'Cegadora' describe una luz tan intensa que impide ver." },
            { word: "blanca", score: 30, feedback: "Color." }
        ],
        bestAnswer: "cegadora",
        explanation: "'Cegadora' da cuenta de la magnitud y violencia de la explosión."
    },
    {
        id: "es-66",
        sentence: "El viejo manuscrito contenía una profecía.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 50, feedback: "Cronológico." },
            { word: "usado", score: 10, feedback: "Estado." },
            { word: "arcano", score: 100, feedback: "¡Perfecto! 'Arcano' significa secreto, recóndito o difícil de conocer." },
            { word: "bajo", score: 20, feedback: "Altura." }
        ],
        bestAnswer: "arcano",
        explanation: "'Arcano' resalta el misticismo y el secreto del texto profético."
    },
    {
        id: "es-67",
        sentence: "El silencio tranquilo del amanecer era esperanzador.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Falta." },
            { word: "sereno", score: 100, feedback: "¡Perfecto! 'Sereno' describe un estado de calma clara y apacible." },
            { word: "neto", score: 30, feedback: "Claridad." }
        ],
        bestAnswer: "sereno",
        explanation: "'Sereno' transmite la paz luminosa del comienzo del día."
    },
    {
        id: "es-68",
        sentence: "La bella arquitectura del palacio nos fascinó.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 10, feedback: "Vago." },
            { word: "clara", score: 20, feedback: "Higiene." },
            { word: "prodigiosa", score: 100, feedback: "¡Perfecto! 'Prodigiosa' significa extraordinaria, maravillosa." },
            { word: "joven", score: 30, feedback: "Edad." }
        ],
        bestAnswer: "prodigiosa",
        explanation: "'Prodigiosa' eleva la calidad técnica y estética de la construcción."
    },
    {
        id: "es-69",
        sentence: "El pequeño pueblo estaba aislado por la nieve.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "remoto", score: 100, feedback: "¡Perfecto! 'Remoto' significa distante, lejano o apartado." },
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "fino", score: 30, feedback: "Grosor." }
        ],
        bestAnswer: "remoto",
        explanation: "'Remoto' explica por qué el pueblo quedó fácilmente aislado."
    },
    {
        id: "es-70",
        sentence: "La fuerte influencia de la tecnología es innegable.",
        targetWord: "forte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 30, feedback: "Simple." },
            { word: "dura", score: 10, feedback: "Tacto." },
            { word: "larga", score: 20, feedback: "Tiempo." },
            { word: "omnipresente", score: 100, feedback: "¡Perfecto! 'Omnipresente' significa que está presente en todas partes." }
        ],
        bestAnswer: "omnipresente",
        explanation: "'Omnipresente' describe la naturaleza total de la tecnología en la vida actual."
    },
    {
        id: "es-71",
        sentence: "El tipo era muy honesto en sus respuestas.",
        targetWord: "honesto",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 20, feedback: "Vago." },
            { word: "franco", score: 40, feedback: "Directo." },
            { word: "íntegro", score: 100, feedback: "¡Perfecto! 'Íntegro' significa recto, probo e intachable." },
            { word: "bién", score: 10, feedback: "Sintaxis." }
        ],
        bestAnswer: "íntegro",
        explanation: "'Íntegro' resalta la rectitud moral indoblegable de la person."
    },
    {
        id: "es-72",
        sentence: "La luz brillante del fósforo se apagó pronto.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "bella", score: 10, feedback: "Afecto." },
            { word: "blanca", score: 20, feedback: "Color." },
            { word: "efímera", score: 100, feedback: "¡Perfecto! 'Efímera' describe algo que dura muy poco tiempo." }
        ],
        bestAnswer: "efímera",
        explanation: "'Efímera' se refiere directamente a la brevísima duración de la llama del fósforo."
    },
    {
        id: "es-73",
        sentence: "El viejo muro fronterizo fue derribado.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "anacrónico", score: 100, feedback: "¡Perfecto! 'Anacrónico' significa que no corresponde a su tiempo." },
            { word: "antiguo", score: 40, feedback: "Genérico." },
            { word: "usado", score: 10, feedback: "Uso." },
            { word: "bajo", score: 20, feedback: "Altura." }
        ],
        bestAnswer: "anacrónico",
        explanation: "'Anacrónico' justifica políticamente por qué el muro fue derribado."
    },
    {
        id: "es-74",
        sentence: "El silencio tranquilo de la noche era interrumpido por grillos.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "armonioso", score: 100, feedback: "¡Perfecto! 'Armonioso' describe una combinación agradable de sonidos/silencio." },
            { word: "vacío", score: 10, feedback: "Falta." },
            { word: "neto", score: 30, feedback: "Nitidez." }
        ],
        bestAnswer: "armonioso",
        explanation: "'Armonioso' integra el sonido de los grillos como algo agradable en la paz nocturna."
    },
    {
        id: "es-75",
        sentence: "La bella actuación de la cantante cautivó al público.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 10, feedback: "Simple." },
            { word: "clara", score: 20, feedback: "Voz." },
            { word: "embriagadora", score: 100, feedback: "¡Perfecto! 'Embriagadora' significa que fascina o seduce intensamente." },
            { word: "joven", score: 30, feedback: "Edad." }
        ],
        bestAnswer: "embriagadora",
        explanation: "'Embriagadora' describe el poder irracional de la música para fascinar."
    },
    {
        id: "es-76",
        sentence: "El pequeño regalo fue muy apreciado.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Costo." },
            { word: "simbólico", score: 100, feedback: "¡Perfecto! 'Simbólico' significa que representa algo más importante." },
            { word: "fino", score: 40, feedback: "Calidad." }
        ],
        bestAnswer: "simbólico",
        explanation: "'Simbólico' explica por qué un regalo 'pequeño' tuvo tanto valor para quien lo recibió."
    },
    {
        id: "es-77",
        sentence: "La fuerte resistencia de los materiales fue probada.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 20, feedback: "Tamaño." },
            { word: "dura", score: 10, feedback: "Tacto." },
            { word: "larga", score: 30, feedback: "Tiempo." },
            { word: "inexpugnable", score: 100, feedback: "¡Perfecto! 'Inexpugnable' significa que no se puede vencer o quebrantar." }
        ],
        bestAnswer: "inexpugnable",
        explanation: "'Inexpugnable' es el término técnico para una resistencia total."
    },
    {
        id: "es-78",
        sentence: "El tipo era muy respetado por su sabiduría.",
        targetWord: "sabiduría",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 10, feedback: "Vago." },
            { word: "claro", score: 20, feedback: "Lógico." },
            { word: "fijo", score: 30, feedback: "Invariable." },
            { word: "erudito", score: 100, feedback: "¡Perfecto! 'Erudito' significa que tiene amplios conocimientos en diversas materias." }
        ],
        bestAnswer: "erudito",
        explanation: "'Erudito' califica a la persona por la profundidad y extensión de su saber."
    },
    {
        id: "es-79",
        sentence: "La luz brillante de la luciérnaga parpadeaba.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 20, feedback: "Estética." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "fosforescente", score: 100, feedback: "¡Perfecto! 'Fosforescente' describe la luz fría y propia de ciertos seres." },
            { word: "blanca", score: 10, feedback: "Color." }
        ],
        bestAnswer: "fosforescente",
        explanation: "'Fosforescente' es el término biológico preciso para la luz de la luciérnaga."
    },
    {
        id: "es-80",
        sentence: "El viejo profesor disfrutaba de su jubilación.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "emérito", score: 100, feedback: "¡Perfecto! 'Emérito' se aplica al profesor jubilado que conserva sus honores." },
            { word: "antiguo", score: 40, feedback: "Cronología." },
            { word: "usado", score: 10, feedback: "Material." },
            { word: "pasado", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "emérito",
        explanation: "'Emérito' es el rango honorífico de un profesor con gran trayectoria tras retirarse."
    },
    {
        id: "es-81",
        sentence: "El silencio tranquilo de la alcoba permitía el descanso.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Habitantes." },
            { word: "neto", score: 30, feedback: "Nitidez." },
            { word: "sosegado", score: 100, feedback: "¡Perfecto! 'Sosegado' significa libre de agitación o turbación." }
        ],
        bestAnswer: "sosegado",
        explanation: "'Sosegado' describe la calma necesaria para un descanso profundo y reparador."
    },
    {
        id: "es-82",
        sentence: "La bella escultura de hielo se derretía.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 10, feedback: "Vago." },
            { word: "clara", score: 20, feedback: "Transparencia." },
            { word: "vulnerada", score: 30, feedback: "Dañada." },
            { word: "efímera", score: 100, feedback: "¡Perfecto! 'Efímera' resalta la corta duración de la obra de arte." }
        ],
        bestAnswer: "efímera",
        explanation: "'Efímera' apunta a la naturaleza temporal y perecedera de la escultura de hielo."
    },
    {
        id: "es-83",
        sentence: "El pequeño error de cálculo causó el desastre.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Posición." },
            { word: "ínfimo", score: 40, feedback: "Cantidad." },
            { word: "fatal", score: 100, feedback: "¡Perfecto! 'Fatal' significa que causa la muerte o una desgracia extrema." }
        ],
        bestAnswer: "fatal",
        explanation: "'Fatal' vincula la pequeñez del error con la magnitud trágica de sus consecuencias."
    },
    {
        id: "es-84",
        sentence: "La fuerte voluntad del paciente lo salvó.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 20, feedback: "Tamaño." },
            { word: "dura", score: 10, feedback: "Resistencia." },
            { word: "larga", score: 30, feedback: "Tiempo." },
            { word: "inquebrantable", score: 100, feedback: "¡Perfecto! 'Inquebrantable' significa que no se puede doblegar o torcer." }
        ],
        bestAnswer: "inquebrantable",
        explanation: "'Inquebrantable' describe una fuerza de voluntad que no se rinde ante la enfermedad."
    },
    {
        id: "es-85",
        sentence: "El tipo era muy rápido en las carreras.",
        targetWord: "rápido",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 10, feedback: "Vago." },
            { word: "fuerte", score: 20, feedback: "Potencia." },
            { word: "veloz", score: 100, feedback: "¡Perfecto! 'Veloz' significa que tiene gran velocidad para desplazarse." },
            { word: "bién", score: 30, feedback: "Sintaxis." }
        ],
        bestAnswer: "veloz",
        explanation: "'Veloz' es la cualidad atlética específica para ganar una carrera."
    },
    {
        id: "es-86",
        sentence: "La luz brillante de los focos cegaba al actor.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 20, feedback: "Estética." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "blanca", score: 10, feedback: "Color." },
            { word: "incandescente", score: 100, feedback: "¡Perfecto! 'Incandescente' describe una luz emitida por cuerpos calientes." }
        ],
        bestAnswer: "incandescente",
        explanation: "'Incandescente' aporta una descripción técnica y potente de la luz escénica."
    },
    {
        id: "es-87",
        sentence: "El viejo edificio de la escuela estaba en ruinas.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Genérico." },
            { word: "usado", score: 10, feedback: "Uso." },
            { word: "vetusto", score: 100, feedback: "¡Perfecto! 'Vetusto' significa extremadamente viejo y desgastado." },
            { word: "bajo", score: 20, feedback: "Posición." }
        ],
        bestAnswer: "vetusto",
        explanation: "'Vetusto' carga de años y fragilidad la descripción del edificio."
    },
    {
        id: "es-88",
        sentence: "El silencio tranquilo del despacho ayudaba a pensar.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "reflexivo", score: 100, feedback: "¡Perfecto! 'Reflexivo' describe un silencio que invita a la reflexión." },
            { word: "vacío", score: 30, feedback: "Falta." },
            { word: "neto", score: 10, feedback: "Puro." }
        ],
        bestAnswer: "reflexivo",
        explanation: "'Reflexivo' caracteriza el silencio por su propósito intelectual."
    },
    {
        id: "es-89",
        sentence: "La bella obra de caridad ayudó a muchos niños.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 10, feedback: "Vago." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "viva", score: 30, feedback: "Acción." },
            { word: "altruista", score: 100, feedback: "¡Perfecto! 'Altruista' significa que se hace de forma desinteresada." }
        ],
        bestAnswer: "altruista",
        explanation: "'Altruista' califica la obra por la nobleza y desinterés del motivo."
    },
    {
        id: "es-90",
        sentence: "El pequeño pájaro herido no podía volar.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "indefenso", score: 100, feedback: "¡Perfecto! 'Indefenso' significa que no tiene medios para defenderse." },
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "fino", score: 30, feedback: "Configuración." }
        ],
        bestAnswer: "indefenso",
        explanation: "'Indefenso' resalta la vulnerabilidad extrema del ave herida."
    },
    {
        id: "es-91",
        sentence: "La fuerte presión mediática obligó a su renuncia.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 30, feedback: "Magnitud." },
            { word: "asfixiante", score: 100, feedback: "¡Perfecto! 'Asfixiante' describe una presión que no deja libertad de acción." },
            { word: "dura", score: 20, feedback: "Tacto." },
            { word: "larga", score: 40, feedback: "Tiempo." }
        ],
        bestAnswer: "asfixiante",
        explanation: "'Asfixiante' ilustra el acoso insoportable de los medios sobre la persona."
    },
    {
        id: "es-92",
        sentence: "El tipo era muy hábil con las herramientas.",
        targetWord: "hábil",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 20, feedback: "Vago." },
            { word: "diestro", score: 100, feedback: "¡Perfecto! 'Diestro' significa hábil con las manos o en un arte." },
            { word: "bién", score: 10, feedback: "Sintaxis." },
            { word: "fijo", score: 30, feedback: "Habilidad mecánica." }
        ],
        bestAnswer: "diestro",
        explanation: "'Diestro' es el término que vincula la inteligencia con la habilidad manual."
    },
    {
        id: "es-93",
        sentence: "La luz brillante de la luciérnaga es mágica.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 20, feedback: "Estética." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "fosforescente", score: 40, feedback: "Técnica." },
            { word: "tenue", score: 100, feedback: "¡Perfecto! 'Tenue' captura la delicadeza de la pequeña luz." }
        ],
        bestAnswer: "tenue",
        explanation: "'Tenue' describe la intensidad real y poética de la pequeña luminiscencia del insecto."
    },
    {
        id: "es-94",
        sentence: "El viejo roble es el símbolo del pueblo.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Cronológico." },
            { word: "usado", score: 10, feedback: "Estado." },
            { word: "ancestro", score: 30, feedback: "Parentesco." },
            { word: "ancestral", score: 100, feedback: "¡Perfecto! 'Ancestral' significa relativo a los antepasados o muy remoto." }
        ],
        bestAnswer: "ancestral",
        explanation: "'Ancestral' otorga una pátina de respeto y tradición secular al árbol."
    },
    {
        id: "es-95",
        sentence: "El silencio tranquilo de la nevada era total.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 30, feedback: "Falta de gente." },
            { word: "amortiguado", score: 100, feedback: "¡Perfecto! 'Amortiguado' describe un sonido/silencio suavizado por algo." },
            { word: "neto", score: 10, feedback: "Nitidez." }
        ],
        bestAnswer: "amortiguado",
        explanation: "'Amortiguado' es el término físico exacto para el silencio que provoca la nieve."
    },
    {
        id: "es-96",
        sentence: "La bella sonrisa del bebé era contagiosa.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 20, feedback: "Sencillo." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "viva", score: 40, feedback: "Vitalidad." },
            { word: "angelical", score: 100, feedback: "¡Perfecto! 'Angelical' significa propio de los ángeles, puro e inocente." }
        ],
        bestAnswer: "angelical",
        explanation: "'Angelical' resalta la pureza y ternura sublime de la sonrisa infantil."
    },
    {
        id: "es-97",
        sentence: "El pequeño detalle en el plano era vital.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "ínfimo", score: 100, feedback: "¡Perfecto! 'Ínfimo' significa que está en el último grado, muy pequeño." },
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "fino", score: 30, feedback: "Tacto." }
        ],
        bestAnswer: "ínfimo",
        explanation: "'Ínfimo' recalca que incluso la medida más diminuta era decisiva en el plano."
    },
    {
        id: "es-98",
        sentence: "La fuerte tormenta eléctrica asustó a los niños.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 30, feedback: "Tamaño." },
            { word: "pavorosa", score: 100, feedback: "¡Perfecto! 'Pavorosa' significa que causa pavor o mucho miedo." },
            { word: "dura", score: 20, feedback: "Dureza." },
            { word: "larga", score: 10, feedback: "Tiempo." }
        ],
        bestAnswer: "pavorosa",
        explanation: "'Pavorosa' justifica la reacción de miedo extremo mencionada en la frase."
    },
    {
        id: "es-99",
        sentence: "El tipo era muy sabio, sabía todo del cosmos.",
        targetWord: "sabio",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 10, feedback: "Vago." },
            { word: "erudito", score: 50, feedback: "Extenso." },
            { word: "fijo", score: 20, feedback: "Estable." },
            { word: "omnisciente", score: 100, feedback: "¡Perfecto! 'Omnisciente' significa que conoce todo lo que se puede saber." }
        ],
        bestAnswer: "omnisciente",
        explanation: "'Omnisciente' es el término superlativo para un saber total sobre el cosmos."
    },
    {
        id: "es-100",
        sentence: "La luz brillante del láser era de color rojo.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 20, feedback: "Afecto." },
            { word: "clara", score: 40, feedback: "Nitidez." },
            { word: "blanca", score: 10, feedback: "Color." },
            { word: "concentrada", score: 100, feedback: "¡Perfecto! 'Concentrada' describe la luz dirigida a un solo punto." }
        ],
        bestAnswer: "concentrada",
        explanation: "'Concentrada' es la característica física fundamental que hace al láser preciso."
    },
    {
        id: "es-101",
        sentence: "El gran descubrimiento de la tumba cambió la arqueología.",
        targetWord: "gran",
        targetWordIndex: 1,
        options: [
            { word: "bueno", score: 10, feedback: "Vago." },
            { word: "fortuito", score: 100, feedback: "¡Perfecto! 'Fortuito' significa que sucede por casualidad." },
            { word: "claro", score: 20, feedback: "Evidente." },
            { word: "alto", score: 30, feedback: "Altura." }
        ],
        bestAnswer: "fortuito",
        explanation: "'Fortuito' explica la naturaleza accidental y afortunada del hallazgo arqueológico."
    },
    {
        id: "es-102",
        sentence: "La luz brillante de la supernova duró meses.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 20, feedback: "Estética." },
            { word: "efímera", score: 30, feedback: "Duración." },
            { word: "fabulosa", score: 40, feedback: "Incredulidad." },
            { word: "resplandeciente", score: 100, feedback: "¡Perfecto! 'Resplandeciente' describe una luz que brilla con gran intensidad." }
        ],
        bestAnswer: "resplandeciente",
        explanation: "'Resplandeciente' es el calificativo astronómico para el brillo extremo de una explosión estelar."
    },
    {
        id: "es-103",
        sentence: "El viejo manuscrito era un tesoro nacional.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "inédito", score: 100, feedback: "¡Perfecto! 'Inédito' significa que no ha sido publicado." },
            { word: "antiguo", score: 50, feedback: "Cronológico." },
            { word: "usado", score: 10, feedback: "Estado." },
            { word: "pasado", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "inédito",
        explanation: "'Inédito' añade un valor de exclusividad y novedad al tesoro nacional."
    },
    {
        id: "es-104",
        sentence: "El silencio tranquilo de la estepa era sobrecogedor.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 30, feedback: "Falta." },
            { word: "neto", score: 10, feedback: "Nitidez." },
            { word: "imponente", score: 100, feedback: "¡Perfecto! 'Imponente' describe un silencio majestuoso y dominante." }
        ],
        bestAnswer: "imponente",
        explanation: "'Imponente' vincula la paz de la estepa con su magnitud geográfica."
    },
    {
        id: "es-105",
        sentence: "La buena cocina del chef es famosa en la región.",
        targetWord: "buena",
        targetWordIndex: 1,
        options: [
            { word: "clara", score: 10, feedback: "Lógica." },
            { word: "creativa", score: 100, feedback: "¡Perfecto! 'Creativa' resalta la innovación y arte en la cocina." },
            { word: "grande", score: 20, feedback: "Cantidad." },
            { word: "bella", score: 30, feedback: "Estética." }
        ],
        bestAnswer: "creativa",
        explanation: "'Creativa' es el sello distintivo de un chef de alta gastronomía."
    },
    {
        id: "es-106",
        sentence: "El pequeño detalle en el análisis fue la clave.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "minucioso", score: 100, feedback: "¡Perfecto! 'Minucioso' significa hecho con mucho detenimiento y cuidado." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "fino", score: 30, feedback: "Grosor." }
        ],
        bestAnswer: "minucioso",
        explanation: "'Minucioso' describe el rigor del análisis que llevó al éxito."
    },
    {
        id: "es-107",
        sentence: "La gran influencia del pensador marcó una época.",
        targetWord: "gran",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 20, feedback: "Simple." },
            { word: "determinante", score: 100, feedback: "¡Perfecto! 'Determinante' significa que decide o resuelve algo." },
            { word: "clara", score: 10, feedback: "Evidente." },
            { word: "alta", score: 30, feedback: "Posición." }
        ],
        bestAnswer: "determinante",
        explanation: "'Determinante' explica por qué el pensamiento pudo 'marcar' toda una época."
    },
    {
        id: "es-108",
        sentence: "El tipo era muy discreto con sus asuntos.",
        targetWord: "discreto",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 10, feedback: "Vago." },
            { word: "claro", score: 20, feedback: "Lógico." },
            { word: "impenetrable", score: 100, feedback: "¡Perfecto! 'Impenetrable' significa que no se puede conocer o descifrar." },
            { word: "bién", score: 30, feedback: "Sintaxis." }
        ],
        bestAnswer: "impenetrable",
        explanation: "'Impenetrable' es el grado máximo de discreción y secreto personal."
    },
    {
        id: "es-109",
        sentence: "La luz brillante del neón reflejaba en el charco.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 10, feedback: "Estética." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "artificial", score: 100, feedback: "¡Perfecto! 'Artificial' resalta el origen no natural de la luz." },
            { word: "blanca", score: 30, feedback: "Color." }
        ],
        bestAnswer: "artificial",
        explanation: "'Artificial' contrasta la luz urbana con el entorno nocturno."
    },
    {
        id: "es-110",
        sentence: "El viejo edificio industrial fue convertido en lofts.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Genérico." },
            { word: "obsoleto", score: 100, feedback: "¡Perfecto! 'Obsoleto' significa que ya no sirve para su función original." },
            { word: "usado", score: 10, feedback: "Uso." },
            { word: "pasado", score: 20, feedback: "Cronología." }
        ],
        bestAnswer: "obsoleto",
        explanation: "'Obsoleto' justifica por qué el edificio cambió su uso de industrial a residencial."
    },
    {
        id: "es-111",
        sentence: "El silencio tranquilo de la nieve al caer es mágico.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "amortiguado", score: 100, feedback: "¡Perfecto! 'Amortiguado' describe la absorción del sonido por la nieve." },
            { word: "vacío", score: 10, feedback: "Falta." },
            { word: "neto", score: 30, feedback: "Nitidez." }
        ],
        bestAnswer: "amortiguado",
        explanation: "'Amortiguado' es la característica acústica única de un paisaje nevado."
    },
    {
        id: "es-112",
        sentence: "La buena organización del viaje evitó problemas.",
        targetWord: "buena",
        targetWordIndex: 1,
        options: [
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "previsora", score: 100, feedback: "¡Perfecto! 'Previsora' significa que previene posibles dificultades." },
            { word: "grande", score: 10, feedback: "Tamaño." },
            { word: "bella", score: 30, feedback: "Estética." }
        ],
        bestAnswer: "previsora",
        explanation: "'Previsora' explica directamente por qué se evitaron los problemas."
    },
    {
        id: "es-113",
        sentence: "El pequeño error en la traducción cambió el sentido.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Posición." },
            { word: "sutil", score: 100, feedback: "¡Perfecto! 'Sutil' significa que es difícil de percibir pero importante." },
            { word: "fino", score: 30, feedback: "Textura." }
        ],
        bestAnswer: "sutil",
        explanation: "'Sutil' describe un error que pasa desapercibido pero altera todo el mensaje."
    },
    {
        id: "es-114",
        sentence: "La fuerte lluvia provocó inundaciones repentinas.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 30, feedback: "Tamaño." },
            { word: "torrencial", score: 100, feedback: "¡Perfecto! 'Torrencial' describe una lluvia muy abundante y violenta." },
            { word: "dura", score: 10, feedback: "Tacto." },
            { word: "larga", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "torrencial",
        explanation: "'Torrencial' es el término meteorológico para la causa de inundaciones."
    },
    {
        id: "es-115",
        sentence: "El tipo era muy valiente ante la adversidad.",
        targetWord: "valiente",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 10, feedback: "Vago." },
            { word: "fuerte", score: 20, feedback: "Potencia." },
            { word: "estoico", score: 100, feedback: "¡Perfecto! 'Estoico' significa que soporta el dolor con fortaleza y sin quejarse." },
            { word: "bién", score: 30, feedback: "Sintaxis." }
        ],
        bestAnswer: "estoico",
        explanation: "'Estoico' califica la valentía como una actitud de resistencia serena y firme."
    },
    {
        id: "es-116",
        sentence: "La luz brillante del diamante era espectacular.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 20, feedback: "Estética." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "centelleante", score: 100, feedback: "¡Perfecto! 'Centelleante' describe un brillo que parpadea o emite destellos." },
            { word: "blanca", score: 10, feedback: "Color." }
        ],
        bestAnswer: "centelleante",
        explanation: "'Centelleante' describe el juego de luces propio de las facetas de un diamante."
    },
    {
        id: "es-117",
        sentence: "El viejo roble del jardín fue talado.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Cronológico." },
            { word: "usado", score: 10, feedback: "Uso." },
            { word: "enfermo", score: 100, feedback: "¡Perfecto! 'Enfermo' justifica por qué un árbol viejo fue talado." },
            { word: "bajo", score: 20, feedback: "Altura." }
        ],
        bestAnswer: "enfermo",
        explanation: "'Enfermo' es la razón técnica y lógica para eliminar un árbol centenario."
    },
    {
        id: "es-118",
        sentence: "El silencio tranquilo de la noche era interrumpido por sirenas.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "frágil", score: 100, feedback: "¡Perfecto! 'Frágil' sugiere un silencio que se rompe con facilidad." },
            { word: "vacío", score: 10, feedback: "Población." },
            { word: "neto", score: 30, feedback: "Nitidez." }
        ],
        bestAnswer: "frágil",
        explanation: "'Frágil' resalta la precariedad de la paz nocturna en la ciudad."
    },
    {
        id: "es-119",
        sentence: "La bella sonrisa de la modelo atraía a las marcas.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 20, feedback: "Vago." },
            { word: "fotogénica", score: 100, feedback: "¡Perfecto! 'Fotogénica' significa que sale bien o resulta atractiva en fotografías." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "joven", score: 10, feedback: "Edad." }
        ],
        bestAnswer: "fotogénica",
        explanation: "'Fotogénica' es la cualidad comercial específica de la belleza en el modelaje."
    },
    {
        id: "es-120",
        sentence: "El pequeño avance en la ciencia salvó vidas.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Posición." },
            { word: "crucial", score: 100, feedback: "¡Perfecto! 'Crucial' significa que es decisivo o fundamental." },
            { word: "fino", score: 30, feedback: "Calidad." }
        ],
        bestAnswer: "crucial",
        explanation: "'Crucial' valora el avance por su impacto, no por su magnitud física."
    },
    {
        id: "es-121",
        sentence: "La fuerte presión del gas hizo estallar la tubería.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 30, feedback: "Medida." },
            { word: "desorbitada", score: 100, feedback: "¡Perfecto! 'Desorbitada' significa excesiva, fuera de lo normal." },
            { word: "dura", score: 10, feedback: "Tacto." },
            { word: "larga", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "desorbitada",
        explanation: "'Desorbitada' describe una presión que superó los límites de seguridad."
    },
    {
        id: "es-122",
        sentence: "El tipo era muy inteligente, siempre ganaba los debates.",
        targetWord: "inteligente",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 10, feedback: "Moral." },
            { word: "astuto", score: 40, feedback: "Maña." },
            { word: "estudioso", score: 30, feedback: "Esfuerzo." },
            { word: "elocuente", score: 100, feedback: "¡Perfecto! 'Elocuente' significa que tiene la facultad de hablar bien y con fluidez." }
        ],
        bestAnswer: "elocuente",
        explanation: "'Elocuente' es la habilidad específica para triunfar en la oratoria y el debate."
    },
    {
        id: "es-123",
        sentence: "La luz brillante de la linterna revelaba las huellas.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "bella", score: 10, feedback: "Afecto." },
            { word: "rasante", score: 100, feedback: "¡Perfecto! 'Rasante' describe una luz que pasa rozando la superficie." },
            { word: "blanca", score: 20, feedback: "Color." }
        ],
        bestAnswer: "rasante",
        explanation: "'Rasante' es la técnica de iluminación para hacer visibles texturas o huellas."
    },
    {
        id: "es-124",
        sentence: "El viejo archivo de la policía fue digitalizado.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Cronología." },
            { word: "usado", score: 10, feedback: "Estado." },
            { word: "clasificado", score: 100, feedback: "¡Perfecto! 'Clasificado' añade un matiz de secreto o importancia policial." },
            { word: "pasado", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "clasificado",
        explanation: "'Clasificado' da carácter oficial y confidencial a los documentos."
    },
    {
        id: "es-125",
        sentence: "El silencio tranquilo de la siesta reinaba en el pueblo.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Población." },
            { word: "neto", score: 30, feedback: "Nitidez." },
            { word: "letárgico", score: 100, feedback: "¡Perfecto! 'Letárgico' describe un estado de somnolencia o inactividad profunda." }
        ],
        bestAnswer: "letárgico",
        explanation: "'Letárgico' captura la pesadez y calma del mediodía caluroso."
    },
    {
        id: "es-126",
        sentence: "La bella melodía del violinista conmovió al Papa.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 10, feedback: "Simple." },
            { word: "clara", score: 20, feedback: "Visión." },
            { word: "celestial", score: 100, feedback: "¡Perfecto! 'Celestial' significa propio del cielo, divino o muy bello." },
            { word: "joven", score: 30, feedback: "Edad." }
        ],
        bestAnswer: "celestial",
        explanation: "'Celestial' es el adjetivo adecuado para una música de calidad espiritual o divina."
    },
    {
        id: "es-127",
        sentence: "El pequeño defecto en la gema redujo su valor.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "imperceptible", score: 100, feedback: "¡Perfecto! 'Imperceptible' significa que casi no se puede percibir." },
            { word: "fino", score: 30, feedback: "Hebra." }
        ],
        bestAnswer: "imperceptible",
        explanation: "'Imperceptible' enfatiza que incluso lo que no se ve a simple vista afecta el valor de una gema."
    },
    {
        id: "es-128",
        sentence: "La fuerte marejada impedía la salida de los barcos.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 20, feedback: "Medida." },
            { word: "violenta", score: 100, feedback: "¡Perfecto! 'Violenta' describe una fuerza que actúa con gran ímpetu y daño." },
            { word: "dura", score: 10, feedback: "Tacto." },
            { word: "larga", score: 30, feedback: "Tiempo." }
        ],
        bestAnswer: "violenta",
        explanation: "'Violenta' describe el estado del mar de forma más dramática y peligrosa."
    },
    {
        id: "es-129",
        sentence: "El tipo era muy gracioso, siempre contaba chistes.",
        targetWord: "gracioso",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 10, feedback: "Vago." },
            { word: "claro", score: 20, feedback: "Transparente." },
            { word: "bién", score: 30, feedback: "Sintaxis." },
            { word: "hilarante", score: 100, feedback: "¡Perfecto! 'Hilarante' significa que causa mucha risa." }
        ],
        bestAnswer: "hilarante",
        explanation: "'Hilarante' es el grado máximo de comicidad que buscaba el narrador."
    },
    {
        id: "es-130",
        sentence: "La luz brillante de la mañana entraba por la ventana.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 20, feedback: "Estética." },
            { word: "clara", score: 30, feedback: "Transparencia." },
            { word: "blanca", score: 10, feedback: "Color." },
            { word: "diáfana", score: 100, feedback: "¡Perfecto! 'Diáfana' significa que deja pasar la luz o es muy claro." }
        ],
        bestAnswer: "diáfana",
        explanation: "'Diáfana' describe una iluminación limpia y purificadora propia de la mañana."
    },
    {
        id: "es-131",
        sentence: "El viejo mapa indicaba la posición de la isla.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Genérico." },
            { word: "venerable", score: 100, feedback: "¡Perfecto! 'Venerable' significa que merece respeto por su antigüedad." },
            { word: "usado", score: 10, feedback: "Desgastado." },
            { word: "pasado", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "venerable",
        explanation: "'Venerable' otorga un valor histórico y casi sagrado al documento cartográfico."
    },
    {
        id: "es-132",
        sentence: "El silencio tranquilo del bosque fue interrumpido por un grito.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Habitantes." },
            { word: "idílico", score: 100, feedback: "¡Perfecto! 'Idílico' describe una calma perfecta y pastoril." },
            { word: "neto", score: 30, feedback: "Claridad." }
        ],
        bestAnswer: "idílico",
        explanation: "'Idílico' resalta la perfección de la paz antes del choque emocional."
    },
    {
        id: "es-133",
        sentence: "La bella fachada de la catedral fascina a los turistas.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 10, feedback: "Vago." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "monumental", score: 100, feedback: "¡Perfecto! 'Monumental' resalta la grandeza y valor artístico." },
            { word: "joven", score: 30, feedback: "Edad." }
        ],
        bestAnswer: "monumental",
        explanation: "'Monumental' es el término artístico para referirse a obras de gran envergadura."
    },
    {
        id: "es-134",
        sentence: "El pequeño detalle en la partitura era fundamental.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Posición." },
            { word: "fino", score: 30, feedback: "Grosor." },
            { word: "matiz", score: 100, feedback: "¡Perfecto! 'Matiz' significa rasgo poco perceptible que da un carácter particular." }
        ],
        bestAnswer: "matiz",
        explanation: "'Matiz' es el término musical exacto para un detalle de interpretación."
    },
    {
        id: "es-135",
        sentence: "La fuerte tormenta de nieve cubrió el valle.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 20, feedback: "Tamaño." },
            { word: "implacable", score: 100, feedback: "¡Perfecto! 'Implacable' significa que no se puede aplacar o suavizar." },
            { word: "dura", score: 30, feedback: "Consistencia." },
            { word: "larga", score: 10, feedback: "Tiempo." }
        ],
        bestAnswer: "implacable",
        explanation: "'Implacable' personifica la tormenta como algo que no da tregua."
    },
    {
        id: "es-136",
        sentence: "El tipo era muy generoso con el dinero.",
        targetWord: "generoso",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 20, feedback: "Vago." },
            { word: "claro", score: 10, feedback: "Obvio." },
            { word: "bién", score: 30, feedback: "Adverbio." },
            { word: "magnánimo", score: 100, feedback: "¡Perfecto! 'Magnánimo' significa que tiene noble temperamento y gran espíritu." }
        ],
        bestAnswer: "magnánimo",
        explanation: "'Magnánimo' es la forma más elevada de describir la generosidad desinteresada."
    },
    {
        id: "es-137",
        sentence: "La luz brillante del cirujano iluminaba la herida.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 10, feedback: "Afecto." },
            { word: "puntera", score: 100, feedback: "¡Perfecto! 'Puntera' describe una luz dirigida y precisa." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "blanca", score: 20, feedback: "Color." }
        ],
        bestAnswer: "puntera",
        explanation: "'Puntera' es el adjetivo técnico para la luz focalizada en cirugía."
    },
    {
        id: "es-138",
        sentence: "El viejo edificio del hospital será demolido.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Cronología." },
            { word: "ruinoso", score: 100, feedback: "¡Perfecto! 'Ruinoso' describe el estado que justifica la demolición." },
            { word: "usado", score: 10, feedback: "Uso." },
            { word: "pasado", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "ruinoso",
        explanation: "'Ruinoso' explica por qué se ha tomado la decisión drástica de demoler."
    },
    {
        id: "es-139",
        sentence: "El silencio tranquilo del laboratorio permitía la concentración.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Población." },
            { word: "neto", score: 30, feedback: "Nitidez." },
            { word: "aséptico", score: 100, feedback: "¡Perfecto! 'Aséptico' significa libre de gérmenes o, figuradamente, neutro y frío." }
        ],
        bestAnswer: "aséptico",
        explanation: "'Aséptico' caracteriza el ambiente del laboratorio de forma técnica y profesional."
    },
    {
        id: "es-140",
        sentence: "La bella floración de los cerezos es un espectáculo.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 10, feedback: "Simple." },
            { word: "efímera", score: 100, feedback: "¡Perfecto! 'Efímera' resalta la corta duración de este proceso natural." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "viva", score: 30, feedback: "Acción." }
        ],
        bestAnswer: "efímera",
        explanation: "'Efímera' añade una nota de melancolía y valor a la belleza pasajera."
    },
    {
        id: "es-141",
        sentence: "El pequeño incidente en la frontera fue minimizado.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "despreciable", score: 100, feedback: "¡Perfecto! 'Despreciable' significa que no merece ser tenido en cuenta." },
            { word: "fino", score: 30, feedback: "Textura." }
        ],
        bestAnswer: "despreciable",
        explanation: "'Despreciable' califica al incidente como algo sin importancia política real."
    },
    {
        id: "es-142",
        sentence: "La fuerte disciplina del internado era famosa.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 30, feedback: "Tamaño." },
            { word: "dura", score: 20, feedback: "Tacto." },
            { word: "austera", score: 100, feedback: "¡Perfecto! 'Austera' describe una disciplina rigurosa y sin lujos." },
            { word: "larga", score: 10, feedback: "Tiempo." }
        ],
        bestAnswer: "austera",
        explanation: "'Austera' es el adjetivo clásico para un régimen de vida estricto y sobrio."
    },
    {
        id: "es-143",
        sentence: "El tipo era muy leal con sus amigos de infancia.",
        targetWord: "leal",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 10, feedback: "Vago." },
            { word: "fijo", score: 20, feedback: "Inmóvil." },
            { word: "bién", score: 30, feedback: "Adverbio." },
            { word: "incondicional", score: 100, feedback: "¡Perfecto! 'Incondicional' significa que no pone condiciones ni límites." }
        ],
        bestAnswer: "incondicional",
        explanation: "'Incondicional' representa el grado más alto de lealtad y apoyo."
    },
    {
        id: "es-144",
        sentence: "La luz brillante de la bengala iluminó el mar.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 10, feedback: "Afecto." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "blanca", score: 30, feedback: "Color." },
            { word: "providencial", score: 100, feedback: "¡Perfecto! 'Providencial' significa que sucede en el momento oportuno para salvar algo." }
        ],
        bestAnswer: "providencial",
        explanation: "'Providencial' resalta el carácter salvador de la luz en una situación de rescate."
    },
    {
        id: "es-145",
        sentence: "El viejo archivo contable fue destruido.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Cronología." },
            { word: "comprometedor", score: 100, feedback: "¡Perfecto! 'Comprometedor' explica por qué alguien querría destruirlo." },
            { word: "usado", score: 10, feedback: "Uso." },
            { word: "pasado", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "comprometedor",
        explanation: "'Comprometedor' aporta el motivo dramático para la destrucción del archivo."
    },
    {
        id: "es-146",
        sentence: "El silencio tranquilo del museo era perturbador.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Población." },
            { word: "neto", score: 30, feedback: "Nitidez." },
            { word: "hierático", score: 100, feedback: "¡Perfecto! 'Hierático' describe un estilo solemne, rígido y sagrado." }
        ],
        bestAnswer: "hierático",
        explanation: "'Hierático' vincula la calma del museo con la solemnidad de las obras de arte."
    },
    {
        id: "es-147",
        sentence: "La bella labor del fotógrafo fue reconocida en el concurso.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 20, feedback: "Vago." },
            { word: "estética", score: 30, feedback: "Disciplina." },
            { word: "perceptiva", score: 100, feedback: "¡Perfecto! 'Perceptiva' resalta la capacidad de ver más allá de lo evidente." },
            { word: "clara", score: 10, feedback: "Transparencia." }
        ],
        bestAnswer: "perceptiva",
        explanation: "'Perceptiva' es el elogio intelectual a la visión de un fotógrafo de arte."
    },
    {
        id: "es-148",
        sentence: "El pequeño cambio en el diseño mejoró las ventas.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Posición." },
            { word: "fino", score: 30, feedback: "Calidad." },
            { word: "sustancial", score: 100, feedback: "¡Perfecto! 'Sustancial' significa que tiene valor o importancia en sí mismo." }
        ],
        bestAnswer: "sustancial",
        explanation: "'Sustancial' explica cómo un cambio, aunque no fuera grande, fue muy efectivo."
    },
    {
        id: "es-149",
        sentence: "La fuerte nevada aisló el pueblo de montaña.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 20, feedback: "Tamaño." },
            { word: "persistente", score: 30, feedback: "Tiempo." },
            { word: "dura", score: 10, feedback: "Consistencia." },
            { word: "inclemente", score: 100, feedback: "¡Perfecto! 'Inclemente' describe un tiempo que no tiene piedad." }
        ],
        bestAnswer: "inclemente",
        explanation: "'Inclemente' añade un matiz de severidad y dureza climática extrema."
    },
    {
        id: "es-150",
        sentence: "El tipo era muy puntual, nunca llegaba tarde.",
        targetWord: "puntual",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 10, feedback: "Vago." },
            { word: "claro", score: 20, feedback: "Obvio." },
            { word: "bién", score: 30, feedback: "Adverbio." },
            { word: "riguroso", score: 100, feedback: "¡Perfecto! 'Riguroso' significa muy exacto, preciso y severo." }
        ],
        bestAnswer: "riguroso",
        explanation: "'Riguroso' describe la puntualidad como una disciplina estricta y sin excepciones."
    }
    ,
    {
        id: "es-151",
        sentence: "El gran éxito de la obra permitió su gira internacional.",
        targetWord: "gran",
        targetWordIndex: 0,
        options: [
            { word: "rotundo", score: 100, feedback: "¡Perfecto! 'Rotundo' significa completo, definitivo y que no deja lugar a dudas." },
            { word: "bueno", score: 20, feedback: "Vago." },
            { word: "alto", score: 30, feedback: "Posición." },
            { word: "claro", score: 10, feedback: "Luminosidad." }
        ],
        bestAnswer: "rotundo",
        explanation: "'Rotundo' califica al éxito como algo incuestionable y masivo."
    },
    {
        id: "es-152",
        sentence: "La luz brillante de la antorcha guiaba al grupo por la cueva.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 10, feedback: "Estética." },
            { word: "oscilante", score: 100, feedback: "¡Perfecto! 'Oscilante' describe el movimiento típico de la llama de una antorcha." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "blanca", score: 20, feedback: "Color." }
        ],
        bestAnswer: "oscilante",
        explanation: "'Oscilante' aporta realismo a la descripción de la luz manual en una caverna."
    },
    {
        id: "es-153",
        sentence: "El viejo manuscrito medieval fue restaurado con cuidado.",
        targetWord: "viejo",
        targetWordIndex: 2,
        options: [
            { word: "antiguo", score: 40, feedback: "Cronología." },
            { word: "usado", score: 10, feedback: "Estado." },
            { word: "iluminado", score: 100, feedback: "¡Perfecto! 'Iluminado' se refiere a manuscritos con adornos de oro o colores." },
            { word: "pasado", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "iluminado",
        explanation: "'Iluminado' es el término artístico específico para manuscritos medievales decorados."
    },
    {
        id: "es-154",
        sentence: "El silencio tranquilo del cementerio era respetado por todos.",
        targetWord: "tranquilo",
        targetWordIndex: 3,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Población." },
            { word: "neto", score: 30, feedback: "Nitidez." },
            { word: "solemne", score: 100, feedback: "¡Perfecto! 'Solemne' describe una calma majestuosa y cargada de respeto." }
        ],
        bestAnswer: "solemne",
        explanation: "'Solemne' es el tipo de silencio que corresponde a un lugar sagrado o de descanso."
    },
    {
        id: "es-155",
        sentence: "La buena administración de los recursos salvó la empresa.",
        targetWord: "buena",
        targetWordIndex: 1,
        options: [
            { word: "clara", score: 20, feedback: "Transparencia." },
            { word: "austera", score: 100, feedback: "¡Perfecto! 'Austera' significa con moderación estricta de gastos." },
            { word: "grande", score: 10, feedback: "Magnitud." },
            { word: "bella", score: 30, feedback: "Estética." }
        ],
        bestAnswer: "austera",
        explanation: "'Austera' explica cómo el ahorro inteligente permitió la supervivencia financiera."
    },
    {
        id: "es-156",
        sentence: "El pequeño detalle en el informe era una mentira.",
        targetWord: "pequeño",
        targetWordIndex: 2,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Posición." },
            { word: "sesgado", score: 100, feedback: "¡Perfecto! 'Sesgado' significa que presenta una visión parcial o tendenciosa." },
            { word: "fino", score: 30, feedback: "Textura." }
        ],
        bestAnswer: "sesgado",
        explanation: "'Sesgado' indica que el detalle fue manipulado para engañar."
    },
    {
        id: "es-157",
        sentence: "La gran tormenta de invierno bloqueó los puertos.",
        targetWord: "gran",
        targetWordIndex: 3,
        options: [
            { word: "buena", score: 10, feedback: "Vago." },
            { word: "alta", score: 20, feedback: "Altura." },
            { word: "clara", score: 30, feedback: "Visibilidad." },
            { word: "ciclópea", score: 100, feedback: "¡Perfecto! 'Ciclópea' describe algo de una magnitud o fuerza colosal." }
        ],
        bestAnswer: "ciclópea",
        explanation: "'Ciclópea' enfatiza el tamaño sobrehumano y destructivo de la tormenta."
    },
    {
        id: "es-158",
        sentence: "El tipo era muy sabio, pero también muy humilde.",
        targetWord: "sabio",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 10, feedback: "Moral." },
            { word: "bién", score: 20, feedback: "Sintaxis." },
            { word: "claro", score: 30, feedback: "Lógico." },
            { word: "erudito", score: 100, feedback: "¡Perfecto! 'Erudito' destaca la profundidad y extensión de sus conocimientos." }
        ],
        bestAnswer: "erudito",
        explanation: "'Erudito' califica la sabiduría como un tesoro de conocimientos vastos."
    },
    {
        id: "es-159",
        sentence: "La luz brillante del relámpago asustó al perro.",
        targetWord: "brillante",
        targetWordIndex: 2,
        options: [
            { word: "bella", score: 10, feedback: "Estética." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "fugaz", score: 100, feedback: "¡Perfecto! 'Fugaz' describe algo que dura un instante y desaparece." },
            { word: "blanca", score: 30, feedback: "Color." }
        ],
        bestAnswer: "fugaz",
        explanation: "'Fugaz' caracteriza la brevedad extrema de la luz del relámpago."
    },
    {
        id: "es-160",
        sentence: "El viejo edificio de la embajada fue renovado.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Cronología." },
            { word: "señorial", score: 100, feedback: "¡Perfecto! 'Señorial' describe un edificio con aire de nobleza o distinción." },
            { word: "usado", score: 10, feedback: "Estado." },
            { word: "pasado", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "señorial",
        explanation: "'Señorial' resalta la elegancia y prestigio arquitectónico de la embajada."
    },
    {
        id: "es-161",
        sentence: "El silencio tranquilo de la cumbre era absoluto.",
        targetWord: "tranquilo",
        targetWordIndex: 0,
        options: [
            { word: "sobrecogedor", score: 100, feedback: "¡Perfecto! 'Sobrecogedor' significa que causa una fuerte impresión de respeto o miedo." },
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Habitantes." },
            { word: "neto", score: 30, feedback: "Nitidez." }
        ],
        bestAnswer: "sobrecogedor",
        explanation: "'Sobrecogedor' describe el impacto emocional de la paz total en la altura."
    },
    {
        id: "es-162",
        sentence: "La buena pintura del artista fue vendida por millones.",
        targetWord: "buena",
        targetWordIndex: 1,
        options: [
            { word: "clara", score: 20, feedback: "Visibilidad." },
            { word: "magistral", score: 100, feedback: "¡Perfecto! 'Magistral' significa hecha con la destreza de un maestro." },
            { word: "grande", score: 10, feedback: "Tamaño." },
            { word: "bella", score: 30, feedback: "Estética." }
        ],
        bestAnswer: "magistral",
        explanation: "'Magistral' justifica técnicamente el precio exorbitante de la obra."
    },
    {
        id: "es-163",
        sentence: "El pequeño cambio en el ADN causó la mutación.",
        targetWord: "pequeño",
        targetWordIndex: 2,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Posición." },
            { word: "microscópico", score: 100, feedback: "¡Perfecto! 'Microscópico' describe la escala biológica del cambio." },
            { word: "fino", score: 30, feedback: "Textura." }
        ],
        bestAnswer: "microscópico",
        explanation: "'Microscópico' es el adjetivo científico preciso para un cambio a nivel genético."
    },
    {
        id: "es-164",
        sentence: "La fuerte resistencia de la presa fue vencida por el agua.",
        targetWord: "fuerte",
        targetWordIndex: 0,
        options: [
            { word: "tenaz", score: 100, feedback: "¡Perfecto! 'Tenaz' significa que se opone con mucha fuerza a ser separado o roto." },
            { word: "gran", score: 30, feedback: "Medida." },
            { word: "dura", score: 10, feedback: "Tacto." },
            { word: "larga", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "tenaz",
        explanation: "'Tenaz' resalta la lucha desesperada de la estructura antes de colapsar."
    },
    {
        id: "es-165",
        sentence: "El tipo era muy rico, poseía tierras por todo el país.",
        targetWord: "rico",
        targetWordIndex: 0,
        options: [
            { word: "potentado", score: 100, feedback: "¡Perfecto! 'Potentado' describe a una persona con gran riqueza y poder." },
            { word: "bueno", score: 10, feedback: "Moral." },
            { word: "bién", score: 20, feedback: "Sintaxis." },
            { word: "fijo", score: 30, feedback: "Lógico." }
        ],
        bestAnswer: "potentado",
        explanation: "'Potentado' vincula la riqueza económica con la influencia social y política."
    },
    {
        id: "es-166",
        sentence: "La luz brillante de la luciérnaga es de color verde.",
        targetWord: "brillante",
        targetWordIndex: 0,
        options: [
            { word: "lumínica", score: 100, feedback: "¡Perfecto! 'Lumínica' se refiere a la naturaleza técnica de la luz biológica." },
            { word: "bella", score: 20, feedback: "Estética." },
            { word: "clara", score: 40, feedback: "Nitidez." },
            { word: "blanca", score: 10, feedback: "Color." }
        ],
        bestAnswer: "lumínica",
        explanation: "'Lumínica' describe la pequeña emisión de energía del insecto de forma formal."
    },
    {
        id: "es-167",
        sentence: "El viejo archivo de mapas era de gran ayuda.",
        targetWord: "viejo",
        targetWordIndex: 0,
        options: [
            { word: "cartográfico", score: 100, feedback: "¡Perfecto! 'Cartográfico' se refiere directamente a la ciencia de los mapas." },
            { word: "usado", score: 10, feedback: "Estado." },
            { word: "antiguo", score: 40, feedback: "Cronología." },
            { word: "pasado", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "cartográfico",
        explanation: "'Cartográfico' es el adjetivo profesional para un archivo de mapas."
    },
    {
        id: "es-168",
        sentence: "El silencio tranquilo del retiro espiritual era reparador.",
        targetWord: "tranquilo",
        targetWordIndex: 0,
        options: [
            { word: "místico", score: 100, feedback: "¡Perfecto! 'Místico' describe un silencio con un propósito espiritual o sagrado." },
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Habitantes." },
            { word: "neto", score: 30, feedback: "Nitidez." }
        ],
        bestAnswer: "místico",
        explanation: "'Místico' caracteriza la paz del retiro por su objetivo trascendental."
    },
    {
        id: "es-169",
        sentence: "La bella voz del tenor llenó el auditorio.",
        targetWord: "bella",
        targetWordIndex: 0,
        options: [
            { word: "vibrante", score: 100, feedback: "¡Perfecto! 'Vibrante' describe una voz con mucha fuerza y emoción." },
            { word: "buena", score: 20, feedback: "Vago." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "joven", score: 10, feedback: "Edad." }
        ],
        bestAnswer: "vibrante",
        explanation: "'Vibrante' resalta la capacidad de la voz para emocionar y llenar el espacio."
    },
    {
        id: "es-170",
        sentence: "El pequeño detalle en el reloj era de oro puro.",
        targetWord: "pequeño",
        targetWordIndex: 0,
        options: [
            { word: "ornamental", score: 100, feedback: "¡Perfecto! 'Ornamental' significa que sirve de adorno o decoración." },
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "fino", score: 30, feedback: "Dureza." }
        ],
        bestAnswer: "ornamental",
        explanation: "'Ornamental' explica la función estética y lujosa del detalle de oro."
    },
    {
        id: "es-171",
        sentence: "La fuerte subida de los precios causó protestas.",
        targetWord: "fuerte",
        targetWordIndex: 0,
        options: [
            { word: "vertiginosa", score: 100, feedback: "¡Perfecto! 'Vertiginosa' describe una subida muy rápida y que causa mareo o alarma." },
            { word: "gran", score: 30, feedback: "Tamaño." },
            { word: "dura", score: 10, feedback: "Tacto." },
            { word: "larga", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "vertiginosa",
        explanation: "'Vertiginosa' ilustra la velocidad alarmante de la inflación."
    },
    {
        id: "es-172",
        sentence: "El tipo era muy leal con sus principios.",
        targetWord: "leal",
        targetWordIndex: 0,
        options: [
            { word: "consecuente", score: 100, feedback: "¡Perfecto! 'Consecuente' significa que actúa de acuerdo con sus principios." },
            { word: "bueno", score: 12, feedback: "Vago." },
            { word: "integro", score: 40, feedback: "Rectitud." },
            { word: "bién", score: 10, feedback: "Sintaxis." }
        ],
        bestAnswer: "consecuente",
        explanation: "'Consecuente' es la forma exacta de describir la coherencia entre ideas y actos."
    },
    {
        id: "es-173",
        sentence: "La luz brillante de la gema era única en el mundo.",
        targetWord: "brillante",
        targetWordIndex: 0,
        options: [
            { word: "hipnótica", score: 100, feedback: "¡Perfecto! 'Hipnótica' significa que fascina o atrae de forma irresistible." },
            { word: "bella", score: 20, feedback: "Estética." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "blanca", score: 10, feedback: "Color." }
        ],
        bestAnswer: "hipnótica",
        explanation: "'Hipnótica' describe el poder de fascination que ejerce la piedra preciosa."
    },
    {
        id: "es-174",
        sentence: "El viejo archivo de música fue salvado del fuego.",
        targetWord: "viejo",
        targetWordIndex: 0,
        options: [
            { word: "discográfico", score: 100, feedback: "¡Perfecto! 'Discográfico' se refiere a la industria de la grabación musical." },
            { word: "antiguo", score: 40, feedback: "Cronología." },
            { word: "usado", score: 10, feedback: "Estado." },
            { word: "pasado", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "discográfico",
        explanation: "'Discográfico' es el adjetivo industrial preciso para un archivo de música grabada."
    },
    {
        id: "es-175",
        sentence: "El silencio tranquilo de la noche era roto por el trueno.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Población." },
            { word: "neto", score: 30, feedback: "Nitidez." },
            { word: "tenso", score: 100, feedback: "¡Perfecto! 'Tenso' sugiere una calma que precede a algo violento." }
        ],
        bestAnswer: "tenso",
        explanation: "'Tenso' caracteriza el silencio como un estado de espera antes de la tormenta."
    },
    {
        id: "es-176",
        sentence: "La bella arquitectura moderna es funcional.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 10, feedback: "Sencillo." },
            { word: "vanguardista", score: 100, feedback: "¡Perfecto! 'Vanguardista' significa que está en la primera fila de un movimiento." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "joven", score: 30, feedback: "Edad." }
        ],
        bestAnswer: "vanguardista",
        explanation: "'Vanguardista' sitúa la obra en el frente de la innovación arquitectónica."
    },
    {
        id: "es-177",
        sentence: "El pequeño detalle en la pintura era la firma oculta.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "fino", score: 30, feedback: "Tacto." },
            { word: "velado", score: 100, feedback: "¡Perfecto! 'Velado' significa que está oculto o disimulado." }
        ],
        bestAnswer: "velado",
        explanation: "'Velado' explica por qué la firma no era evidente a primera vista."
    },
    {
        id: "es-178",
        sentence: "La fuerte explosión de alegría se oyó en la calle.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "espontánea", score: 100, feedback: "¡Perfecto! 'Espontánea' significa que surge de forma natural y sin planear." },
            { word: "gran", score: 30, feedback: "Tamaño." },
            { word: "dura", score: 10, feedback: "Consistencia." },
            { word: "larga", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "espontánea",
        explanation: "'Espontánea' resalta la autenticidad y naturalidad del sentimiento."
    },
    {
        id: "es-179",
        sentence: "El tipo era muy orgulloso, no pedía ayuda a nadie.",
        targetWord: "orgulloso",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 10, feedback: "Vago." },
            { word: "claro", score: 20, feedback: "Lógico." },
            { word: "fijo", score: 30, feedback: "Estático." },
            { word: "altivo", score: 100, feedback: "¡Perfecto! 'Altivo' significa orgulloso y con aire de superioridad." }
        ],
        bestAnswer: "altivo",
        explanation: "'Altivo' es el matiz negativo y prepotente de la soberbia."
    },
    {
        id: "es-180",
        sentence: "La luz brillante de la pantalla dañaba la vista.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 10, feedback: "Estética." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "blanca", score: 30, feedback: "Color." },
            { word: "azulada", score: 100, feedback: "¡Perfecto! 'Azulada' se refiere al espectro de luz dañino de las pantallas." }
        ],
        bestAnswer: "azulada",
        explanation: "'Azulada' es el término técnico para la luz que cansa la vista en dispositivos."
    },
    {
        id: "es-181",
        sentence: "El viejo edificio del teatro fue restaurado.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Cronología." },
            { word: "emblemático", score: 100, feedback: "¡Perfecto! 'Emblemático' significa que es un símbolo representativo." },
            { word: "usado", score: 10, feedback: "Estado." },
            { word: "pasado", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "emblemático",
        explanation: "'Emblemático' valora el teatro por su importancia cultural en la ciudad."
    },
    {
        id: "es-182",
        sentence: "El silencio tranquilo de la cripta era eterno.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "milenario", score: 100, feedback: "¡Perfecto! 'Milenario' vincula el silencio con la gran antigüedad del lugar." },
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Población." },
            { word: "neto", score: 30, feedback: "Nitidez." }
        ],
        bestAnswer: "milenario",
        explanation: "'Milenario' da una profundidad temporal inabarcable a la paz de la cripta."
    },
    {
        id: "es-183",
        sentence: "La bella pintura de la iglesia es de un autor desconocido.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 10, feedback: "Simple." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "devocional", score: 100, feedback: "¡Perfecto! 'Devocional' se refiere a obras de arte destinadas a la piedad." },
            { word: "joven", score: 30, feedback: "Edad." }
        ],
        bestAnswer: "devocional",
        explanation: "'Devocional' es el término técnico para el arte religioso con fin litúrgico."
    },
    {
        id: "es-184",
        sentence: "El pequeño detalle en el contrato era una cláusula de escape.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Posición." },
            { word: "fino", score: 30, feedback: "Tacto." },
            { word: "liberador", score: 100, feedback: "¡Perfecto! 'Liberador' describe la función salvadora de la cláusula." }
        ],
        bestAnswer: "liberador",
        explanation: "'Liberador' explica por qué ese detalle era tan importante para las partes."
    },
    {
        id: "es-185",
        sentence: "La fuerte presión del agua socavó el puente.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "insidiosa", score: 100, feedback: "¡Perfecto! 'Insidiosa' significa que causa daño de forma lenta y oculta." },
            { word: "gran", score: 30, feedback: "Tamaño." },
            { word: "dura", score: 10, feedback: "Resistencia." },
            { word: "larga", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "insidiosa",
        explanation: "'Insidiosa' describe cómo el agua destruyó la base sin ser notada pronto."
    },
    {
        id: "es-186",
        sentence: "El tipo era muy rico, pero su fortuna era de origen dudoso.",
        targetWord: "rico",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 12, feedback: "Moral." },
            { word: "claro", score: 20, feedback: "Obvio." },
            { word: "bién", score: 10, feedback: "Sintaxis." },
            { word: "acaudalado", score: 100, feedback: "¡Perfecto! 'Acaudalado' significa que tiene mucho dinero o caudales." }
        ],
        bestAnswer: "acaudalado",
        explanation: "'Acaudalado' es la forma formal y pesada de referirse a una gran fortuna."
    },
    {
        id: "es-187",
        sentence: "La luz brillante del semáforo cambió a verde.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "bella", score: 20, feedback: "Estética." },
            { word: "imperante", score: 100, feedback: "¡Perfecto! 'Imperante' significa que domina o manda en un momento dado." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "blanca", score: 10, feedback: "Color." }
        ],
        bestAnswer: "imperante",
        explanation: "'Imperante' resalta la autoridad de la luz del semáforo sobre el tráfico."
    },
    {
        id: "es-188",
        sentence: "El viejo archivo de la biblioteca fue devorado por la polilla.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "antiguo", score: 40, feedback: "Cronología." },
            { word: "usado", score: 10, feedback: "Estado." },
            { word: "bibliográfico", score: 100, feedback: "¡Perfecto! 'Bibliográfico' se refiere a todo lo relacionado con los libros." },
            { word: "pasado", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "bibliográfico",
        explanation: "'Bibliográfico' es el término técnico para un fondo de libros en una biblioteca."
    },
    {
        id: "es-189",
        sentence: "El silencio tranquilo del despacho indicaba que estaba trabajando.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "impenetrable", score: 100, feedback: "¡Perfecto! 'Impenetrable' sugiere un silencio que no deja saber qué pasa dentro." },
            { word: "vacío", score: 10, feedback: "Población." },
            { word: "neto", score: 30, feedback: "Nitidez." }
        ],
        bestAnswer: "impenetrable",
        explanation: "'Impenetrable' resalta la concentración total que aislaba el despacho."
    },
    {
        id: "es-190",
        sentence: "La bella sonrisa de la abuela nos daba paz.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buen", score: 10, feedback: "Simple." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "viva", score: 30, feedback: "Acción." },
            { word: "maternal", score: 100, feedback: "¡Perfecto! 'Maternal' describe una belleza llena de afecto y cuidado." }
        ],
        bestAnswer: "maternal",
        explanation: "'Maternal' vincula la belleza de la sonrisa con su efecto protector y tierno."
    },
    {
        id: "es-191",
        sentence: "El pequeño detalle en el plano era una puerta secreta.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "fino", score: 30, feedback: "Calidad." },
            { word: "críptico", score: 100, feedback: "¡Perfecto! 'Críptico' significa que es oscuro o difícil de entender." }
        ],
        bestAnswer: "críptico",
        explanation: "'Críptico' explica por qué el detalle era difícil de identificar como una puerta."
    },
    {
        id: "es-192",
        sentence: "La fuerte nevada de anoche rompió varios árboles.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "gran", score: 10, feedback: "Vago." },
            { word: "persistente", score: 30, feedback: "Tiempo." },
            { word: "dura", score: 20, feedback: "Resistencia." },
            { word: "abrumadora", score: 100, feedback: "¡Perfecto! 'Abrumadora' describe un peso o fuerza imposible de soportar." }
        ],
        bestAnswer: "abrumadora",
        explanation: "'Abrumadora' describe el peso excesivo de la nieve sobre las ramas."
    },
    {
        id: "es-193",
        sentence: "El tipo era muy valiente, se enfrentó al ladrón.",
        targetWord: "valiente",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 10, feedback: "Vago." },
            { word: "claro", score: 20, feedback: "Lógico." },
            { word: "decidido", score: 100, feedback: "¡Perfecto! 'Decidido' significa que actúa con resolución y sin dudar." },
            { word: "bién", score: 30, feedback: "Sintaxis." }
        ],
        bestAnswer: "decidido",
        explanation: "'Decidido' resalta la prontitud y firmeza de la reacción heroica."
    },
    {
        id: "es-194",
        sentence: "La luz brillante de la fogata iluminaba los rostros.",
        targetWord: "brillante",
        targetWordIndex: 1,
        options: [
            { word: "cálida", score: 100, feedback: "¡Perfecto! 'Cálida' describe una luz que da sensación de calor y confort." },
            { word: "bella", score: 20, feedback: "Estética." },
            { word: "clara", score: 30, feedback: "Nitidez." },
            { word: "blanca", score: 10, feedback: "Color." }
        ],
        bestAnswer: "cálida",
        explanation: "'Cálida' ambienta la escena como un momento de reunión agradable."
    },
    {
        id: "es-195",
        sentence: "El viejo edificio del mercado será restaurado pronto.",
        targetWord: "viejo",
        targetWordIndex: 1,
        options: [
            { word: "venerable", score: 100, feedback: "¡Perfecto! 'Venerable' significa que merece respeto por su historia." },
            { word: "antiguo", score: 40, feedback: "Cronología." },
            { word: "usado", score: 10, feedback: "Estado." },
            { word: "pasado", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "venerable",
        explanation: "'Venerable' otorga un valor histórico y afectivo al edificio del mercado."
    },
    {
        id: "es-196",
        sentence: "El silencio tranquilo de la noche era roto por los lobos.",
        targetWord: "tranquilo",
        targetWordIndex: 1,
        options: [
            { word: "bajo", score: 20, feedback: "Volumen." },
            { word: "vacío", score: 10, feedback: "Población." },
            { word: "neto", score: 30, feedback: "Nitidez." },
            { word: "inquietante", score: 100, feedback: "¡Perfecto! 'Inquietante' sugiere una calma que causa desasosiego." }
        ],
        bestAnswer: "inquietante",
        explanation: "'Inquietante' justifica la sensación de peligro que traen los lobos."
    },
    {
        id: "es-197",
        sentence: "La bella decoración del salón nos impresionó.",
        targetWord: "bella",
        targetWordIndex: 1,
        options: [
            { word: "buena", score: 10, feedback: "Sencillo." },
            { word: "lujosa", score: 100, feedback: "¡Perfecto! 'Lujosa' describe una decoración con gran costo y elegancia." },
            { word: "clara", score: 20, feedback: "Nitidez." },
            { word: "viva", score: 30, feedback: "Acción." }
        ],
        bestAnswer: "lujosa",
        explanation: "'Lujosa' explica por qué la decoración causó tanta impresión."
    },
    {
        id: "es-198",
        sentence: "El pequeño detalle en el vestido era una perla real.",
        targetWord: "pequeño",
        targetWordIndex: 1,
        options: [
            { word: "corto", score: 10, feedback: "Longitud." },
            { word: "bajo", score: 20, feedback: "Altura." },
            { word: "fino", score: 30, feedback: "Tacto." },
            { word: "precioso", score: 100, feedback: "¡Perfecto! 'Precioso' significa de gran valor o belleza." }
        ],
        bestAnswer: "precioso",
        explanation: "'Precioso' resalta el valor material y estético de la perla."
    },
    {
        id: "es-199",
        sentence: "La fuerte presión del aire hizo vibrar las ventanas.",
        targetWord: "fuerte",
        targetWordIndex: 1,
        options: [
            { word: "dinámica", score: 100, feedback: "¡Perfecto! 'Dinámica' se refiere a la fuerza del aire en movimiento." },
            { word: "gran", score: 30, feedback: "Tamaño." },
            { word: "dura", score: 10, feedback: "Consistencia." },
            { word: "larga", score: 20, feedback: "Tiempo." }
        ],
        bestAnswer: "dinámica",
        explanation: "'Dinámica' es el término físico para la presión ejercida por el viento."
    },
    {
        id: "es-200",
        sentence: "El tipo era muy responsable, siempre terminaba a tiempo.",
        targetWord: "responsable",
        targetWordIndex: 3,
        options: [
            { word: "bueno", score: 12, feedback: "Vago." },
            { word: "claro", score: 20, feedback: "Obvio." },
            { word: "bién", score: 10, feedback: "Sintaxis." },
            { word: "ejemplar", score: 100, feedback: "¡Perfecto! 'Ejemplar' significa que sirve de ejemplo por su perfección." }
        ],
        bestAnswer: "ejemplar",
        explanation: "'Ejemplar' es el calificativo máximo para una conducta de responsabilidad total."
    }
];
