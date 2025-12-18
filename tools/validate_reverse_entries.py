import re
from pathlib import Path

master = Path('src/data/exercises/reverseDefinitions.master.ts').read_text(encoding='utf-8')
wd = Path('src/data/wordDefinitions.ts').read_text(encoding='utf-8')

# extract answers per language
# extract all question objects with their language via their id (e.g., id: "en-1")
q_pattern = re.compile(r"id:\s*\"(en|fr|es)-\d+\"[\s\S]*?answer:\s*\"(.*?)\"", re.M)
matches = q_pattern.findall(master)
answers = {'en':[], 'fr':[], 'es':[]}
for lang, ans in matches:
    answers[lang].append(ans)

# helper to check entry

def has_entry(lang, token):
    # find lang block
    marker = f"{lang}: {{"
    i = wd.find(marker)
    if i==-1:
        return False
    # find block braces
    brace_idx = wd.find('{', i)
    depth = 0
    end_idx = -1
    for j in range(brace_idx, len(wd)):
        c = wd[j]
        if c=='{': depth +=1
        elif c=='}':
            depth -=1
            if depth==0:
                end_idx = j
                break
    block = wd[brace_idx+1:end_idx]
    # search for token
    m = re.search(r'"'+re.escape(token)+r'"\s*:\s*\{', block)
    if not m:
        return False
    # capture definition and example
    # naive search for definition: "definition": "..."
    m2 = re.search(r'"'+re.escape(token)+r'"\s*:\s*\{([\s\S]*?)\n\s*\},', block)
    if not m2:
        return False
    content = m2.group(1)
    def_m = re.search(r'definition:\s*"([\s\S]*?)"\s*,', content)
    ex_m = re.search(r'example:\s*"([\s\S]*?)"\s*$', content)
    # example may be not at line end; try more flexible
    if not ex_m:
        ex_m = re.search(r'example:\s*"([\s\S]*?)"\s*,', content)
    if not def_m or not ex_m:
        return False
    definition = def_m.group(1).strip()
    example = ex_m.group(1).strip()
    return bool(definition) and bool(example)

all_good = True
for lang, toks in answers.items():
    for t in toks:
        ok = has_entry(lang,t)
        print(lang, t, 'OK' if ok else 'MISSING')
        if not ok:
            all_good = False

if all_good:
    print('All Reverse Definitions tokens have non-empty entries')
else:
    print('Some tokens missing or empty')
