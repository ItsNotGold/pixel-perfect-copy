#!/usr/bin/env python3
from pathlib import Path
import re

WD_FILE = Path('src/data/wordDefinitions.ts')

# Handcrafted entries for speed-related synonyms
UPDATES = {
    'fast': {
        'en': {
            'definition': "Moving or functioning at a high rate, often used to indicate quick completion without implying particular skill.",
            'example': "The courier promised a fast delivery and arrived before lunchtime."
        },
        'fr': {
            'definition': "Qui se déplace ou opère à un rythme élevé, utilisé pour indiquer une exécution rapide sans connotation particulière d'habileté.",
            'example': "Le service de messagerie a assuré une livraison rapide avant midi."
        },
        'es': {
            'definition': "Que se mueve o funciona a un ritmo alto, indicando un cumplimiento rápido sin implicar una destreza especial.",
            'example': "El mensajero aseguró una entrega fast y llegó antes del mediodía."
        }
    },
    'quick': {
        'en': {
            'definition': "Accomplished in a short span of time, emphasizing brevity and promptness rather than sustained speed.",
            'example': "She gave a quick nod and moved on to the next topic before anyone could object."
        },
        'fr': {
            'definition': "Fait en peu de temps, mettant l'accent sur la brièveté et la promptitude plutôt que sur une vitesse soutenue.",
            'example': "Elle fit un signe quick et passa au point suivant sans que personne n'ait le temps de répondre."
        },
        'es': {
            'definition': "Realizado en un breve lapso, subrayando la prontitud más que la velocidad sostenida.",
            'example': "Asintió con un gesto quick y pasó al siguiente punto antes de que alguien respondiera."
        }
    },
    'rapid': {
        'en': {
            'definition': "Characterized by swift progression or acceleration over a measurable interval, frequently used in technical descriptions.",
            'example': "The rapid expansion of the software's user base required scaling the infrastructure within weeks."
        },
        'fr': {
            'definition': "Caractérisé par une progression ou une accélération marquée sur un intervalle mesurable, souvent employé dans des contextes techniques.",
            'example': "L'expansion rapide de la base d'utilisateurs a nécessité l'extension de l'infrastructure en quelques semaines."
        },
        'es': {
            'definition': "Caracterizado por una rápida progresión o aceleración en un intervalo medible; usado frecuentemente en contextos técnicos.",
            'example': "La expansión rapid de la base de usuarios obligó a escalar la infraestructura en cuestión de semanas."
        }
    },
    'swift': {
        'en': {
            'definition': "Combines speed with smooth, controlled movement, often implying skill or elegance in execution.",
            'example': "With a swift motion, the technician fixed the misaligned sensor without disturbing the rest of the machine."
        },
        'fr': {
            'definition': "Allie rapidité et mouvement contrôlé, impliquant souvent une certaine habileté ou élégance d'exécution.",
            'example': "D'un geste swift, le technicien réaligna le capteur sans perturber le reste de l'appareil."
        },
        'es': {
            'definition': "Combina rapidez con un movimiento suave y controlado, con frecuencia implicando habilidad o elegancia en la ejecución.",
            'example': "Con un movimiento swift, el técnico reajustó el sensor sin interrumpir el resto del sistema."
        }
    },
    'speedy': {
        'en': {
            'definition': "Suggests prompt completion with an emphasis on efficiency and timeliness in services or processes.",
            'example': "Their speedy response to customer inquiries improved satisfaction ratings across the board."
        },
        'fr': {
            'definition': "Désigne une exécution prompte mettant l'accent sur l'efficacité et le respect des délais, souvent en contexte de service.",
            'example': "Leur réponse speedy aux demandes des clients a amélioré la satisfaction générale."
        },
        'es': {
            'definition': "Sugiere un cumplimiento ágil con énfasis en la eficiencia y puntualidad en servicios o procesos.",
            'example': "Su respuesta speedy a las consultas redujo considerablemente el tiempo de espera."
        }
    },
    'hasty': {
        'en': {
            'definition': "Performed with undue haste that sacrifices careful thought or procedure, increasing the risk of error.",
            'example': "A hasty repair led to a larger breakdown the next day because safety checks were skipped."
        },
        'fr': {
            'definition': "Effectué avec une précipitation excessive au détriment de la réflexion ou des procédures, augmentant le risque d'erreur.",
            'example': "Une réparation hasty a provoqué une panne plus importante le lendemain, faute de contrôles."
        },
        'es': {
            'definition': "Realizado con prisa indebida que sacrifica la reflexión o los procedimientos, incrementando el riesgo de error.",
            'example': "Una reparación hasty provocó una avería mayor al día siguiente por omitir las comprobaciones."
        }
    },
    'expeditious': {
        'en': {
            'definition': "Done with deliberate efficiency and clear organization to minimize delay while preserving quality.",
            'example': "The agency took expeditious steps to process the claims after the disaster, keeping standards intact."
        },
        'fr': {
            'definition': "Réalisé avec une efficacité délibérée et une organisation claire pour minimiser les délais tout en préservant la qualité.",
            'example': "L'agence a pris des mesures expéditives pour traiter les demandes après la catastrophe, sans sacrifier la qualité."
        },
        'es': {
            'definition': "Hecho con eficiencia deliberada y organización clara para reducir retrasos manteniendo la calidad.",
            'example': "La agencia adoptó medidas expeditious para tramitar las reclamaciones sin comprometer los estándares."
        }
    },
    'fleet': {
        'en': {
            'definition': "Nimble in movement or collectively organized for rapid deployment; often used in maritime or military contexts.",
            'example': "A fleet squadron was dispatched at dawn and intercepted the vessel within hours."
        },
        'fr': {
            'definition': "Agile dans le mouvement ou organisé en groupe pour un déploiement rapide, souvent employé en contexte maritime ou militaire.",
            'example': "Une escadre fleet a été dépêchée à l'aube et a intercepté le navire en quelques heures."
        },
        'es': {
            'definition': "Ágil en el movimiento o organizado colectivamente para un despliegue rápido; término habitual en contextos marítimos o militares.",
            'example': "Una flotilla fleet partió al amanecer y alcanzó la embarcación en pocas horas."
        }
    },
    'mercurial': {
        'en': {
            'definition': "Marked by sudden, unpredictable rapidity or shifts, emphasizing volatility of motion or temperament.",
            'example': "His mercurial responses in the meeting made it difficult to plan a stable agenda."
        },
        'fr': {
            'definition': "Caractérisé par des changements rapides et imprévisibles, mettant en avant une volatilité de mouvement ou d'humeur.",
            'example': "Ses réactions mercuriales ont rendu difficile l'organisation d'un ordre du jour stable."
        },
        'es': {
            'definition': "Caracterizado por rápidos e impredecibles cambios, enfatizando la volatilidad del movimiento o del temperamento.",
            'example': "Sus reacciones mercuriales complicaron la planificación de la sesión."
        }
    },
    'brisk': {
        'en': {
            'definition': "Lively and energetic in tempo or manner, often implying healthful efficiency rather than raw speed.",
            'example': "They took a brisk walk every morning to keep their minds clear before work."
        },
        'fr': {
            'definition': "Vif et énergique dans le tempo ou la manière, impliquant souvent une efficacité saine plutôt que la simple vitesse.",
            'example': "Ils faisaient une promenade brisk chaque matin pour se réveiller avant le travail."
        },
        'es': {
            'definition': "Vivaz y enérgico en ritmo o manera, a menudo implicando eficiencia saludable más que pura rapidez.",
            'example': "Hicieron una caminata brisk todas las mañanas para despejar la mente antes de trabajar."
        }
    },
    'precipitate': {
        'en': {
            'definition': "Occurring suddenly and often without adequate consideration, typically leading to unintended consequences.",
            'example': "The precipitous policy change precipitated confusion among staff unprepared for the shift."
        },
        'fr': {
            'definition': "Survenant soudainement et souvent sans réflexion suffisante, conduisant fréquemment à des conséquences inattendues.",
            'example': "Le changement de politique précipité a semé la confusion parmi le personnel qui n'était pas prêt à la transition."
        },
        'es': {
            'definition': "Que ocurre de manera súbita y a menudo sin la debida consideración, provocando consecuencias imprevistas.",
            'example': "El cambio de política precipitado causó confusión entre los empleados que no estaban preparados."
        }
    }
}


def apply_updates():
    text = WD_FILE.read_text(encoding='utf-8')
    for lang in ['en','fr','es']:
        marker = f"  {lang}: {{"
        i = text.find(marker)
        if i == -1:
            continue
        brace_idx = text.find('{', i)
        depth = 0
        end_idx = -1
        for j in range(brace_idx, len(text)):
            c = text[j]
            if c == '{': depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    end_idx = j
                    break
        block = text[brace_idx+1:end_idx]
        for token, data in UPDATES.items():
            entry = data[lang]
            new_entry = f'        "{token}": {{\n            definition: "{entry["definition"]}",\n            example: "{entry["example"]}"\n        }},'
            pattern = re.compile(r'"' + re.escape(token) + r'"\s*:\s*\{[\s\S]*?\n\s*\},', re.MULTILINE)
            if pattern.search(block):
                block = pattern.sub(new_entry, block)
            else:
                block = block + '\n' + new_entry
        text = text[:brace_idx+1] + block + text[end_idx:]
    WD_FILE.write_text(text, encoding='utf-8')
    print('Speed entries patched')

if __name__ == '__main__':
    apply_updates()
