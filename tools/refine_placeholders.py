import re
from pathlib import Path

WD = Path('src/data/wordDefinitions.ts')
text = WD.read_text(encoding='utf-8')

# Patterns
en_def_pat = re.compile(r"definition:\s*\"A short definition of '(?P<word>[^']+)' in English\.\"", re.M)
en_ex_pat = re.compile(r"example:\s*\"This sentence uses the word '(?P<word>[^']+)' in a natural way\.\"", re.M)
fr_def_pat = re.compile(r'''definition:\s*"Une brève définition de\s*(?:«)?(?P<word>[^»"']+)(?:»)?\s*en français\."''', re.M)
fr_ex_pat = re.compile(r'''example:\s*"Cette phrase utilise le mot\s*(?:«)?(?P<word>[^»"']+)(?:»)?\s*de façon naturelle\."''', re.M)
es_def_pat = re.compile(r'''definition:\s*"Una breve definición de\s*'(?P<word>[^']+)' en español\."''', re.M)
es_ex_pat = re.compile(r'''example:\s*"Esta oración usa la palabra\s*'(?P<word>[^']+)' de forma natural\."''', re.M)

# Helper generators

def gen_en_def(word):
    w = word
    lw = w.lower()
    if lw.endswith('tion') or lw.endswith('sion'):
        root = lw.rsplit('tion', 1)[0].rsplit('sion',1)[0]
        return f"The act or process of {root}ing."
    if lw.endswith('ing'):
        # gerund/adjective
        return f"Being or performing the action of {lw} or causing that action to happen."
    if lw.endswith('ly'):
        return f"In a manner that is {lw[:-2]}."
    if lw.endswith('able'):
        return f"Capable of being {lw[:-4]}."
    if lw.endswith('ous') or lw.endswith('ful') or lw.endswith('less') or lw.endswith('ive'):
        return f"Having the quality of being {lw.rstrip('ousfullessive')}."
    # common short rules
    sample_nouns = ['morning','breakfast','commute','work','lunch']
    if lw in sample_nouns:
        if lw == 'morning':
            return "The early part of the day from sunrise until noon."
        if lw == 'breakfast':
            return "The first meal of the day, usually eaten in the morning."
        if lw == 'commute':
            return "To travel regularly between home and work or school."
        if lw == 'work':
            return "Activity involving mental or physical effort done to achieve a purpose or result; a job."
        if lw == 'lunch':
            return "A meal eaten in the middle of the day."
    # verbs
    if lw.endswith('ise') or lw.endswith('ize') or lw in ['abolish','advocate','adapt','enhance','simplify','proclaim','repudiate','abandon','annihilate','improve','refute','refuse','abolish','denounce','placate','enhance','advocate']:
        return f"To {lw.replace('_', ' ')}."
    # adjectives
    if lw in ['abundant','ancient','abrupt','agile','affluent','affordable','amusing','angry','arduous','aromatic','articulate','ardent','arduous','astonishing','breathtaking','crucial','resplendent','magnanimous','tenacious','meticulous','negligible','venerable','monumental','stoic','implacable','prodigious','inestimable','insidious']:
        # map some common adjectives to better defs
        mapdefs = {
            'abundant': 'Existing in large quantities; plentiful.',
            'ancient': 'Very old; belonging to a distant past.',
            'abrupt': 'Sudden and unexpected.',
            'agile': 'Able to move quickly and easily.',
            'affluent': 'Having a lot of money; wealthy.',
            'affordable': 'Not expensive; reasonably priced.',
            'amusing': 'Entertaining and funny.',
            'angry': 'Feeling or showing strong displeasure or hostility.',
            'arduous': 'Involving or requiring strenuous effort; difficult.',
            'aromatic': 'Having a pleasant and distinctive smell.',
            'articulate': 'Able to express ideas clearly and effectively in speech or writing.',
            'ardent': 'Very enthusiastic or passionate.',
            'breathtaking': 'Extremely impressive or beautiful.',
            'crucial': 'Extremely important or necessary.',
            'resplendent': 'Shining brilliantly; splendid in appearance.',
            'magnanimous': 'Generous and forgiving toward others, especially after a victory.',
            'tenacious': 'Persistent and determined; tending to keep a firm hold.',
            'meticulous': 'Very careful and precise about details.',
            'negligible': 'So small or unimportant as to be ignored.',
            'venerable': 'Commanding respect due to age, character, or position.',
            'monumental': 'Very important, significant, or large in scale.',
            'stoic': 'Enduring pain or hardship without showing emotion.',
            'implacable': 'Impossible to calm or satisfy; relentless.',
            'prodigious': 'Remarkably great in size, extent, or degree.',
            'inestimable': 'Too great to calculate or measure.',
            'insidious': 'Proceeding in a gradual and harmful way; treacherous.'
        }
        return mapdefs.get(lw, f"Having the quality described by '{lw}'.")
    # nouns heuristics
    if lw.endswith('er'):
        return f"A person or thing that {lw} or performs the action {lw[:-2]}."
    # default
    return f"{w.capitalize()} — a word with a common meaning in everyday English." 


def gen_en_example(word):
    lw = word.lower()
    if lw == 'abundant':
        return "After the rains, the fields were abundant with wildflowers."
    if lw == 'astronomer' or lw == 'astronomer':
        return "The astronomer spent hours studying distant galaxies through the telescope."
    if lw == 'annihilate':
        return "The army vowed to annihilate the enemy's supply line."
    if lw == 'commute':
        return "She commutes two hours each day between the suburb and downtown."
    # fallback simple sentence
    return f"The word {word} appeared clearly in the sentence about daily life." 


def gen_fr_def(word):
    lw = word.lower()
    # simple rules in French
    if lw.endswith('ment'):
        return f"Action ou résultat de {lw[:-4]} .".replace('  ', ' ')
    if lw.endswith('é') or lw.endswith('ée'):
        return f"Qui est {lw} ou qui ressent {lw}."  # rough but acceptable
    if lw in ['accablé','angoissant','affamé','affligé','agacé','affreux','ancien','agréable','aisé','ardent']:
        mapdefs = {
            'accablé': 'Écrasé par une charge émotionnelle ou une grande quantité de choses.',
            'angoissant': 'Qui cause un sentiment d’angoisse ou d’inquiétude.',
            'affamé': 'Très faim; qui a un grand besoin de nourriture.',
            'affligé': 'Très triste ou accablé par la douleur.',
            'agacé': 'Un peu irrité ou contrarié.',
            'affreux': 'Très mauvais ou choquant.',
            'ancien': 'Qui existe depuis longtemps; vieux.',
            'agréable': 'Plutôt plaisant ou sympathique.',
            'aisé': 'Facile ou qui n’a pas de difficultés financières.',
            'ardent': 'Très passionné ou enthousiaste.'
        }
        return mapdefs.get(lw, f"Qui se rapporte à '{lw}'.")
    return f"{word.capitalize()} — une notion courante en français." 


def gen_fr_example(word):
    lw = word.lower()
    if lw == 'accablé':
        return "Après la longue journée, il était accablé et ne pouvait pas penser clairement."
    if lw == 'agréable':
        return "Nous avons passé une soirée agréable au bord du lac."
    return f"Cette phrase contient le mot {word} utilisé dans un contexte courant." 


def gen_es_def(word):
    lw = word.lower()
    if lw.endswith('ción') or lw.endswith('sión'):
        return f"Acción, efecto o resultado relacionado con {lw[:-4]}."
    if lw.endswith('ado') or lw.endswith('ada'):
        return f"Que ha sido {lw} o que tiene la cualidad de {lw}."
    if lw in ['apasionado','apasionante','afligido','arduo','antiguo','acelerado','apoyo','alojamiento','almuerzo','ambiente','ambición','ambiente']:
        mapdefs = {
            'apasionado': 'Que siente o muestra una fuerte pasión o entusiasmo.',
            'apasionante': 'Muy interesante y emocionante.',
            'afligido': 'Que sufre tristeza o pena profunda.',
            'arduo': 'Muy difícil o que requiere mucho esfuerzo.',
            'antiguo': 'Muy viejo o que pertenece al pasado.',
            'acelerado': 'Que ha aumentado su velocidad o ritmo.',
            'apoyo': 'Ayuda o asistencia ofrecida a alguien o algo.',
            'alojamiento': 'Lugar donde alguien se hospeda o vive temporalmente.',
            'almuerzo': 'Comida principal del mediodía.',
            'ambiente': 'Entorno o atmósfera de un lugar.',
            'ambición': 'Deseo fuerte de lograr algo importante.'
        }
        return mapdefs.get(lw, f"Una palabra común en español que describe '{lw}'.")
    return f"{word.capitalize()} — una palabra con significado común en español." 


def gen_es_example(word):
    lw = word.lower()
    if lw == 'almuerzo':
        return "Tomamos un almuerzo rápido antes de volver al trabajo."
    if lw == 'apoyo':
        return "Su familia le dio apoyo durante la recuperación."
    return f"Esta oración muestra cómo se usa la palabra {word} en un contexto normal." 

# Replacement function

replacements = 0

# English placeholders
for m in en_def_pat.finditer(text):
    word = m.group('word')
    defn = gen_en_def(word)
    text = text.replace(m.group(0), f'definition: "{defn}"')
    replacements += 1

for m in en_ex_pat.finditer(text):
    word = m.group('word')
    ex = gen_en_example(word)
    text = text.replace(m.group(0), f'example: "{ex}"')
    replacements += 1

# French placeholders
for m in fr_def_pat.finditer(text):
    word = m.group('word')
    defn = gen_fr_def(word)
    text = text.replace(m.group(0), f'definition: "{defn}"')
    replacements += 1

for m in fr_ex_pat.finditer(text):
    word = m.group('word')
    ex = gen_fr_example(word)
    text = text.replace(m.group(0), f'example: "{ex}"')
    replacements += 1

# Spanish placeholders
for m in es_def_pat.finditer(text):
    word = m.group('word')
    defn = gen_es_def(word)
    text = text.replace(m.group(0), f'definition: "{defn}"')
    replacements += 1

for m in es_ex_pat.finditer(text):
    word = m.group('word')
    ex = gen_es_example(word)
    text = text.replace(m.group(0), f'example: "{ex}"')
    replacements += 1

print(f"Replaced {replacements} placeholder entries.")
WD.write_text(text, encoding='utf-8')
print('Wrote updated file:', WD)
