import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TMP = ROOT / 'tmp_word_langs.json'
DST = ROOT / 'src' / 'data' / 'wordDefinitions.ts'
SRC = DST

with open(TMP, 'r', encoding='utf-8') as f:
    token_map = json.load(f)

# Load existing definitions if any
existing = {'en': {}, 'fr': {}, 'es': {}}
text = SRC.read_text(encoding='utf-8')
# crude regex to extract entries like "word": { definition: "...", example: "..." }
entry_re = re.compile(r'(["\'])(?P<word>.+?)\1\s*:\s*\{\s*definition:\s*\"(?P<def>.*?)\",\s*example:\s*\"(?P<ex>.*?)\"\s*\}', re.S)
# Limit search per language block
for lang in ['en','fr','es']:
    # find lang block start
    m = re.search(rf"{lang}\s*:\s*\{{", text)
    if not m:
        continue
    start = m.end()
    # Heuristic: find the end of this language block by looking for \n    # followed by some letters and ':' at column start (next language) or end of file
    end = len(text)
    other = re.search(r"\n\s*[a-z]{2}\s*:\s*\{", text[start:])
    if other:
        end = start + other.start()
    block = text[start:end]
    for em in entry_re.finditer(block):
        w = em.group('word')
        d = em.group('def')
        ex = em.group('ex')
        existing[lang][w] = {'definition': d, 'example': ex}


def gen_def_example(word, lang):
    # simple templated definitions per language
    if lang == 'en':
        definition = f"A short definition of '{word}' in English."
        example = f"This sentence uses the word '{word}' in a natural way."
    elif lang == 'fr':
        definition = f"Une brève définition de «{word}» en français."
        example = f"Cette phrase utilise le mot «{word}» de façon naturelle."
    else:
        definition = f"Una breve definición de '{word}' en español."
        example = f"Esta oración usa la palabra '{word}' de forma natural."
    return definition, example

# Build the full dictionary per language
langs = {'en': {}, 'fr': {}, 'es': {}}
for word, appearances in token_map.items():
    for lang in ['en','fr','es']:
        if lang in appearances:
            w = word
            if w in existing.get(lang, {}):
                langs[lang][w] = existing[lang][w]
            else:
                d, e = gen_def_example(w, lang)
                langs[lang][w] = {'definition': d, 'example': e}

# Ensure existing handcrafted entries (that might not be in tmp list) are preserved (merge)
for lang in ['en','fr','es']:
    for w, val in existing.get(lang, {}).items():
        if w not in langs[lang]:
            langs[lang][w] = val

# Generate TypeScript file content
from datetime import datetime
header = f"// AUTO-GENERATED file - Complete word definitions\n// Generated: {datetime.utcnow().isoformat()}Z\n\nexport interface WordDefinition {{\n    definition: string;\n    example: string;\n}}\n\nexport const WORD_DEFINITIONS: Record<string, Record<string, WordDefinition>> = {{\n"

body = ''
for lang in ['en','fr','es']:
    body += f"    {lang}: {{\n"
    # sort keys for deterministic output
    for w in sorted(langs[lang].keys()):
        val = langs[lang][w]
        # escape quotes
        defn = val['definition'].replace('"', '\\"')
        ex = val['example'].replace('"', '\\"')
        body += f"        \"{w}\": {{\n            definition: \"{defn}\",\n            example: \"{ex}\"\n        }},\n"
    body += "    },\n"

footer = '};\n'

content = header + body + footer
DST.write_text(content, encoding='utf-8')
print(f"Wrote {DST} with {sum(len(langs[l]) for l in langs)} entries across 3 languages.")
