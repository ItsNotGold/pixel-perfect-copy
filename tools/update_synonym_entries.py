import re
from pathlib import Path

MASTER = Path('src/data/exercises/synonymSpeedChain.master.ts').read_text(encoding='utf-8')
WD_PATH = Path('src/data/wordDefinitions.ts')
WD = WD_PATH.read_text(encoding='utf-8')

# extract all synonyms from master
syn_pattern = re.compile(r"\[(.*?)\]")
# only within question lines; simpler: capture commonSynonyms and rareSynonyms occurrences
common_re = re.compile(r"commonSynonyms:\s*\[(.*?)\]", re.S)
rare_re = re.compile(r"rareSynonyms:\s*\[(.*?)\]", re.S)

def extract_tokens(block_re):
    toks = set()
    for m in block_re.findall(MASTER):
        inner = m
        # split by commas outside quotes
        for part in re.findall(r"\"(.*?)\"", inner):
            toks.add(part)
    return toks

common_tokens = extract_tokens(common_re)
rare_tokens = extract_tokens(rare_re)
all_tokens = sorted(common_tokens.union(rare_tokens))
print('Total synonym tokens found:', len(all_tokens))

# curated mapping for English (non-circular, concise, natural examples)
EN = {
    'joyful': ("Feeling, showing, or causing great pleasure and happiness.", "She felt joyful when she saw her old friend."),
    'glad': ("Pleased or relieved; feeling happy about something.", "I'm so glad you made it home safely."),
    'pleased': ("Feeling satisfaction or pleasure at something that has happened.", "He was pleased with his test results."),
    'content': ("Satisfied and at ease with one's situation or possessions.", "She felt content after finishing her work."),
    'cheerful': ("Noticeably happy and optimistic in manner or appearance.", "The cheerful music lifted everyone's spirits."),
    'elated': ("Extremely happy and excited; in high spirits.", "They were elated by the victory."),
    'jubilant': ("Showing great joy, satisfaction, or triumph.", "The crowd was jubilant after the announcement."),
    'blissful': ("Experiencing or marked by extreme happiness or joy.", "A blissful afternoon on the beach."),
    'ecstatic': ("Showing or feeling overwhelming happiness or joyful excitement.", "She was ecstatic about the news."),
    'euphoric': ("Experiencing intense excitement and happiness.", "He felt euphoric after crossing the finish line."),
    'unhappy': ("Not happy; feeling sad or displeased.", "He seemed unhappy about the decision."),
    'upset': ("Emotionally disturbed or distressed; troubled.", "She was upset after the argument."),
    'down': ("Feeling low in spirits or sad.", "He had been feeling a bit down all week."),
    'gloomy': ("Dark or poorly lit in a way that makes one feel sad; pessimistic.", "The weather made everyone feel gloomy."),
    'sorrowful': ("Filled with or expressing deep sadness; mournful.", "She had a sorrowful expression at the funeral."),
    'melancholy': ("A deep, pensive, and long-lasting sadness.", "A melody that evoked a sense of melancholy."),
    'despondent': ("In low spirits from loss of hope or courage.", "After losing the job, he felt despondent."),
    'forlorn': ("Pitifully sad and abandoned or lonely.", "The stray dog looked forlorn in the rain."),
    'disconsolate': ("So unhappy that nothing can console; very dejected.", "She was disconsolate after the breakup."),
    'woebegone': ("Affected by deep sorrow or distress; miserable in appearance.", "He returned home with a woebegone look on his face."),
    'large': ("Of considerable size, extent, or capacity.", "They moved into a large apartment near the park."),
    'huge': ("Extremely large in size, amount, or degree.", "The company made a huge investment.") ,
    'enormous': ("Very great in size, quantity, or extent.", "Her effort produced an enormous improvement."),
    'giant': ("Exceptionally large in size or scope.", "The ancient tree was giant compared to the saplings."),
    'massive': ("Large, heavy, and solidly built or extensive in scale.", "The storm caused massive damage along the coast."),
    'colossal': ("Extremely large or great in degree; monumental.", "They faced a colossal task ahead."),
    'mammoth': ("Huge; of very great size.", "The project required a mammoth effort."),
    'gargantuan': ("Enormously large or extensive.", "The ship had gargantuan holds for cargo."),
    'immense': ("Extremely large in area, volume, or degree.", "The valley stretched out with immense beauty."),
    'titanic': ("Of exceptional strength, size, or power; enormous.", "They made a titanic effort to finish on time."),
    'clever': ("Quick to understand, learn, or devise; mentally agile.", "She gave a clever solution to the puzzle."),
    'intelligent': ("Having or showing a high level of mental ability or understanding.", "The student produced an intelligent analysis of the text."),
    'bright': ("Showing quickness of understanding or brilliance of mind.", "He is remarkably bright for his age."),
    'sharp': ("Mentally quick and perceptive.", "Her sharp observations improved the discussion."),
    'quick': ("Performing or reacting with speed; fast.", "Be quick to respond when the opportunity arises."),
    'astute': ("Having or showing shrewdness and an ability to accurately assess situations.", "Her astute remarks impressed the judges."),
    'sagacious': ("Showing keen mental discernment and good judgment; wise.", "A sagacious leader makes informed decisions."),
    'perspicacious': ("Having a ready insight into and understanding of things.", "His perspicacious comments clarified the problem."),
    'erudite': ("Having or showing great knowledge; learned.", "An erudite scholar presented the lecture."),
    'shrewd': ("Having or showing sharp powers of judgment; astute.", "She made a shrewd investment."),
    'pretty': ("Attractive in a delicate or graceful way.", "She wore a pretty dress to the party."),
    'lovely': ("Pleasingly beautiful or appealing.", "What a lovely view from the balcony."),
    'gorgeous': ("Very beautiful or attractive.", "The sunset was simply gorgeous."),
    'attractive': ("Having qualities that arouse interest or pleasure.", "The house has an attractive garden."),
    'stunning': ("Extremely impressive or attractive.", "Her performance was absolutely stunning."),
    'resplendent': ("Shining brilliantly; characterized by a glowing splendor.", "The bride appeared resplendent in her gown."),
    'ravishing': ("Extremely attractive or delightful.", "The artist painted a ravishing landscape."),
    'exquisite': ("Extremely beautiful and delicate.", "She wore an exquisite necklace."),
    'sublime': ("Of such beauty or excellence as to inspire great admiration or awe.", "The music reached a sublime climax."),
    'pulchritudinous': ("Having great physical beauty; very attractive (formal).", "The gardens were pulchritudinous in spring."),
    # more tokens will be added as needed
}

# French curated mapping (examples in French)
FR = {
    'content': ("Satisfait et tranquille par rapport à une situation ou un résultat.", "Elle se sentait contente après le repas."),
    'joyeux': ("Qui éprouve ou manifeste de la joie; gai.", "Un ton joyeux anima la fête."),
    'ravi': ("Très content; comblé de plaisir.", "Il était ravi de sa réussite."),
    'gai': ("Plein d'entrain et de bonne humeur.", "Une musique gaie accompagna la procession."),
    'euphorique': ("Éprouvant une joie ou une excitation intenses.", "Elle était euphorique après la promotion."),
    'triste': ("Qui éprouve du chagrin ou de la peine.", "Il était triste à l'idée du départ."),
    'mélancolique': ("Tristesse douce et pensante qui dure dans le temps.", "Un air mélancolique s'entendait au piano."),
    'gloomy': ("Sombre ou pessimiste; utilisé comme emprunt pour combler le lexique.", "Le ciel gris rendait la journée gloomy."),
    'grand': ("De grande taille; important en dimension.", "Ils ont construit un bâtiment grand et moderne."),
    'immense': ("Très vaste en étendue; énorme.", "Une vallée immense s'étendait devant eux."),
    'intelligent': ("Qui a une grande capacité de compréhension et de raisonnement.", "Un étudiant intelligent apporte souvent de nouvelles idées."),
    'brillant': ("D'esprit vif ou remarquable par sa qualité.", "Sa réponse brillante impressionna tout le monde."),
    'beau': ("Plaisant à regarder; esthétiquement réussi.", "Un jardin beau et bien entretenu."),
}

# Spanish curated mapping
ES = {
    'feliz': ("Que siente alegría o satisfacción; contento.", "Estaba feliz por la buena noticia."),
    'alegre': ("Que muestra alegría o buen ánimo.", "Una canción alegre llenó la plaza."),
    'dichoso': ("Muy contento o afortunado.", "Se sentía dichoso tras el logro."),
    'triste': ("Que siente pena o desolación; afligido.", "Ella estaba triste por la despedida."),
    'melancólico': ("Que expresa una tristeza profunda y serena.", "Un poema melancólico resonó en la sala."),
    'grande': ("De tamaño considerable o mayor de lo habitual.", "Compraron una casa grande en el campo."),
    'enorme': ("Muy grande en tamaño o cantidad.", "La ciudad sufrió un enorme cambio urbano."),
    'inteligente': ("Que posee capacidad de entender y resolver problemas.", "Un estudiante inteligente explicó el experimento."),
    'hermoso': ("Atractivo y agradable a la vista; bello.", "El paisaje era hermoso al amanecer."),
}

# detect placeholder entries (common boilerplate used earlier)
PLACEHOLDERS = [
    "A term used to describe a particular idea",
    "A common term used to refer to a specific person",
    "They used the word",
    "An act, process, or result",
    "Describing a state that someone or something has experienced",
    "Having a quality or characteristic that is often noticeable or strong.",
]

# helper functions to add or replace entries only where placeholder is present or missing

def has_good_entry(lang, token):
    marker = f"{lang}: {{"
    i = WD.find(marker)
    if i == -1:
        return False
    brace_idx = WD.find('{', i)
    # find block end
    depth = 0
    end_idx = -1
    for j in range(brace_idx, len(WD)):
        if WD[j] == '{':
            depth += 1
        elif WD[j] == '}':
            depth -= 1
            if depth == 0:
                end_idx = j
                break
    block = WD[brace_idx+1:end_idx]
    # search for token
    m = re.search(r'"'+re.escape(token)+r'"\s*:\s*\{([\s\S]*?)\n\s*\},', block)
    if not m:
        return False
    content = m.group(1)
    # check definition example non-placeholder
    def_m = re.search(r'definition:\s*"([\s\S]*?)"\s*,', content)
    ex_m = re.search(r'example:\s*"([\s\S]*?)"\s*$', content)
    if not def_m:
        return False
    definition = def_m.group(1)
    if any(p in definition for p in PLACEHOLDERS):
        return False
    if not ex_m:
        # try comma terminated example
        ex_m = re.search(r'example:\s*"([\s\S]*?)"\s*,', content)
    if not ex_m:
        return False
    example = ex_m.group(1)
    if any(p in example for p in PLACEHOLDERS):
        return False
    return True

# build list of tokens to update per lang
updates = {'en':{}, 'fr':{}, 'es':{}}
for t in all_tokens:
    # lower-case normalized keys are used as-is (tokens may have accents)
    if t in EN and not has_good_entry('en', t):
        updates['en'][t] = EN[t]
    if t in FR and not has_good_entry('fr', t):
        updates['fr'][t] = FR[t]
    if t in ES and not has_good_entry('es', t):
        updates['es'][t] = ES[t]

print('Planned updates:', {k: len(v) for k,v in updates.items()})

# apply updates to WD text
new_text = WD
for lang, d in updates.items():
    if not d:
        continue
    # find language block
    start_marker = lang + ': {'
    start_idx = new_text.find(start_marker)
    if start_idx == -1:
        # append language block at end
        print('Lang block missing; adding', lang)
        insert_at = new_text.rfind('};')
        if insert_at == -1:
            insert_at = len(new_text)
        block_insert = f"\n    {lang}: {{\n"
        for w, (defn, ex) in d.items():
            block_insert += f'        "{w}": {{\n            definition: "{defn}",\n            example: "{ex}"\n        }},\n'
        block_insert += '    },\n'
        new_text = new_text[:insert_at] + block_insert + new_text[insert_at:]
        continue
    brace_idx = new_text.find('{', start_idx)
    # find end of block
    depth = 0
    end_idx = -1
    for j in range(brace_idx, len(new_text)):
        if new_text[j] == '{':
            depth += 1
        elif new_text[j] == '}':
            depth -= 1
            if depth == 0:
                end_idx = j
                break
    block = new_text[brace_idx+1:end_idx]
    # for each token, replace if exists else append
    new_block = block
    for w, (defn, ex) in d.items():
        entry_re = re.compile(r'("'+re.escape(w)+'"\s*:\s*\{[\s\S]*?\n\s*\},)')
        m = entry_re.search(new_block)
        new_entry = f'"{w}": {{\n            definition: "{defn}",\n            example: "{ex}"\n        }},'
        if m:
            new_block = new_block.replace(m.group(1), new_entry)
            print('Replaced', w, 'in', lang)
        else:
            # append
            new_block = new_block.rstrip() + '\n        ' + new_entry + '\n'
            print('Added', w, 'to', lang)
    # splice back
    new_text = new_text[:brace_idx+1] + new_block + new_text[end_idx:]

# write out file
WD_PATH.write_text(new_text, encoding='utf-8')
print('Update complete')
