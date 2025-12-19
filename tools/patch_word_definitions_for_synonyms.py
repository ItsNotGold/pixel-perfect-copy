#!/usr/bin/env python3
"""Patch `src/data/wordDefinitions.ts` in-place for Synonym Speed Chain tokens.

This script is a targeted replacer: for each token in the master, for each lang,
- build a generated definition+example using the same heuristics
- if an entry for the token exists in the file, replace the whole entry
- otherwise insert a new entry into the language block

This avoids depending on TS -> JSON parsing and preserves file formatting.
"""
import re
from pathlib import Path
from generate_synonym_entries_full import read_master_tokens, build_en_definition_and_example, build_fr_definition_and_example, build_es_definition_and_example

WD_FILE = Path('src/data/wordDefinitions.ts')
MASTER_TOKENS, entries = read_master_tokens()
# build token->base map

token_to_base = {}
for e in entries:
    base = e['base']
    for t in e['common']:
        token_to_base.setdefault(t, []).append((base, 'common'))
    for t in e['rare']:
        token_to_base.setdefault(t, []).append((base, 'rare'))

text = WD_FILE.read_text(encoding='utf-8')

updated = 0
inserted = 0

for token in sorted(MASTER_TOKENS):
    # choose base
    base_choice = token_to_base.get(token, [("thing","common")])[0]
    base, strength = base_choice
    # generate
    en_def, en_ex = build_en_definition_and_example(token, base, strength)
    fr_def, fr_ex = build_fr_definition_and_example(token, base, strength)
    es_def, es_ex = build_es_definition_and_example(token, base, strength)

    for lang, d, ex in [('en', en_def, en_ex), ('fr', fr_def, fr_ex), ('es', es_def, es_ex)]:
        # extract the language-specific block
        lang_marker = f"  {lang}: {{"
        i = text.find(lang_marker)
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
        if end_idx == -1:
            continue
        block = text[brace_idx+1:end_idx]
        # search/replace inside the block only
        pattern = re.compile(r'"' + re.escape(token) + r'"\s*:\s*\{[\s\S]*?\n\s*\},', re.MULTILINE)
        new_entry = f'        "{token}": {{\n            definition: "{d}",\n            example: "{ex}"\n        }},'
        m = pattern.search(block)
        if m:
            new_block = block[:m.start()] + new_entry + block[m.end():]
            text = text[:brace_idx+1] + new_block + text[end_idx:]
            updated += 1
        else:
            # insert before the end of the language block
            insertion_point = end_idx
            text = text[:insertion_point] + '\n        "' + token + '": {\n            definition: "' + d + '",\n            example: "' + ex + '"\n        },' + text[insertion_point:]
            inserted += 1

WD_FILE.write_text(text, encoding='utf-8')
print(f'Patched file: updated={updated}, inserted={inserted}')
