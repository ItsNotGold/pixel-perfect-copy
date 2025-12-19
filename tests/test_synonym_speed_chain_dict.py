import re
from pathlib import Path


def test_synonym_speed_chain_has_definitions_and_examples():
    master = Path('src/data/exercises/synonymSpeedChain.master.ts').read_text(encoding='utf-8')
    wd = Path('src/data/wordDefinitions.ts').read_text(encoding='utf-8')

    # extract all tokens from commonSynonyms and rareSynonyms
    q_pattern = re.compile(r"commonSynonyms:\s*\[(.*?)\]|rareSynonyms:\s*\[(.*?)\]", re.S)
    matches = q_pattern.findall(master)
    all_tokens = set()
    for a, b in matches:
        s = a or b
        for tok in re.findall(r'"(.*?)"', s):
            all_tokens.add(tok)

    PLACEHOLDERS = [
        "A term used to describe a particular idea",
        "A common term used to refer to a specific person",
        "They used the word",
        "An act, process, or result",
        "Describing a state that someone or something has experienced",
        "Having a quality or characteristic that is often noticeable or strong.",
    ]

    def has_entry(lang, token):
        marker = f"{lang}: {{"
        i = wd.find(marker)
        if i == -1:
            return False
        brace_idx = wd.find('{', i)
        depth = 0
        end_idx = -1
        for j in range(brace_idx, len(wd)):
            c = wd[j]
            if c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    end_idx = j
                    break
        block = wd[brace_idx + 1:end_idx]
        m = re.search(r'"' + re.escape(token) + r'"\s*:\s*\{([\s\S]*?)\n\s*\},', block)
        if not m:
            return False
        content = m.group(1)
        def_m = re.search(r'definition:\s*"([\s\S]*?)"\s*,', content)
        ex_m = re.search(r'example:\s*"([\s\S]*?)"\s*$', content)
        if not def_m:
            return False
        if any(p in def_m.group(1) for p in PLACEHOLDERS):
            return False
        if not ex_m:
            ex_m = re.search(r'example:\s*"([\s\S]*?)"\s*,', content)
        if not ex_m:
            return False
        if any(p in ex_m.group(1) for p in PLACEHOLDERS):
            return False
        return True

    missing = []
    for lang in ['en', 'fr', 'es']:
        for t in sorted(all_tokens):
            if not has_entry(lang, t):
                missing.append((lang, t))

    assert not missing, f"Missing or placeholder entries for some tokens: {missing[:20]}"