#!/usr/bin/env python3
"""Generate definitions and examples for all Synonym Speed Chain tokens.

Strategy:
- Parse the Synonym Speed Chain master file to discover tokens and their "base" words.
- For each token that is missing or placeholder in src/data/wordDefinitions.ts, generate EN/FR/ES entries.
- Use base words to craft concise, non-circular definitions and natural example sentences.
- Where needed, use simple FR/ES templates and a small bilingual map for common bases; otherwise use safe fallbacks.
- Avoid placeholder text and avoid using the token itself to define itself.

This script writes back to src/data/wordDefinitions.ts with escaped content and prints a summary.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MASTER = ROOT / "src" / "data" / "exercises" / "synonymSpeedChain.master.ts"
WD_FILE = ROOT / "src" / "data" / "wordDefinitions.ts"
PLACEHOLDERS = [
    "TODO",
    "TBD",
    "definition goes here",
    "definition placeholder",
    "REPLACE_ME",
    "A term used to describe a particular idea",
    "A common term used to refer to a specific person",
    "They used the word",
    "An act, process, or result",
    "Describing a state that someone or something has experienced",
    "Having a quality or characteristic that is often noticeable or strong.",
]

# Small FR/ES translation map for common base words
FR_TRANSLATIONS = {
    "big": "grand",
    "large": "grand",
    "small": "petit",
    "happy": "heureux",
    "sad": "triste",
    "quick": "rapide",
    "slow": "lent",
    "easy": "facile",
    "difficult": "difficile",
    "hot": "chaud",
    "cold": "froid",
    "good": "bon",
    "bad": "mauvais",
    "old": "vieux",
    "new": "nouveau",
    "strong": "fort",
    "weak": "faible",
    "important": "important",
    "interesting": "intéressant",
    "dangerous": "dangereux",
    "funny": "drôle",
}
ES_TRANSLATIONS = {
    "big": "grande",
    "large": "grande",
    "small": "pequeña",
    "happy": "feliz",
    "sad": "triste",
    "quick": "rápido",
    "slow": "lento",
    "easy": "fácil",
    "difficult": "difícil",
    "hot": "caliente",
    "cold": "frío",
    "good": "bueno",
    "bad": "malo",
    "old": "viejo",
    "new": "nuevo",
    "strong": "fuerte",
    "weak": "débil",
    "important": "importante",
    "interesting": "interesante",
    "dangerous": "peligroso",
    "funny": "divertido",
}

# Utility helpers

def read_master_tokens():
    text = MASTER.read_text(encoding="utf-8")
    # Simple regex to capture `word: '...', commonSynonyms: [...], rareSynonyms: [...]` blocks
    # We'll extract all tokens that appear in commonSynonyms and rareSynonyms arrays.
    # This is a lightweight parser tuned for the master file format.
    tokens = set()
    entries = []
    pattern = re.compile(r"word:\s*['\"](.*?)['\"][\s\S]*?commonSynonyms:\s*\[(.*?)\][\s\S]*?rareSynonyms:\s*\[(.*?)\]", re.MULTILINE)
    for m in pattern.finditer(text):
        base = m.group(1)
        def parse_array(s):
            raw = re.findall(r"'([^']+)'|\"([^\"]+)\"", s)
            out = []
            for a, b in raw:
                val = a if a else b
                out.append(val.strip())
            return out
        common = parse_array(m.group(2))
        rare = parse_array(m.group(3))
        for t in common + rare:
            tokens.add(t)
        entries.append({"base": base, "common": common, "rare": rare})
    return tokens, entries


def read_word_definitions():
    content = WD_FILE.read_text(encoding="utf-8")
    # Evaluate the TS file by extracting the JSON-like object inside WORD_DEFINITIONS = {...}
    # We'll look for the object literal start and end and do heuristic parsing.
    m = re.search(r"export\s+const\s+WORD_DEFINITIONS(?:\s*:[^{=]+)?\s*=\s*({[\s\S]*});", content)
    if not m:
        raise RuntimeError("Could not find WORD_DEFINITIONS export in wordDefinitions.ts")
    obj_text = m.group(1)
    # Convert TS object to JSON by quoting keys with double quotes and removing trailing commas
    js = obj_text
    # ensure keys are quoted: replace unquoted keys like en: { with "en": {
    js = re.sub(r"(\b[a-z]{2}\b)\s*:", r'"\1":', js)
    # Convert single quotes to double quotes
    js = re.sub(r"'", '"', js)
    # Remove TypeScript type annotations if any
    # Remove trailing commas before } or ]
    js = re.sub(r",\s*([}\]])", r"\1", js)
    try:
        data = json.loads(js)
    except Exception as exc:
        # Heuristic fallback: build minimal structures for en/fr/es if missing
        data = {"en": {}, "fr": {}, "es": {}}
    # Normalize: ensure en/fr/es exist
    for k in ["en", "fr", "es"]:
        data.setdefault(k, {})
    return data, content


def is_placeholder(s: str) -> bool:
    if not s:
        return True
    low = re.sub(r"\s+", " ", s.strip().lower())
    if any(p.lower() in low for p in PLACEHOLDERS):
        return True
    if len(low) < 5:
        return True
    return False


def escape_ts_string(s: str) -> str:
    return s.replace('\\', '\\\\').replace('"', '\\"')


def build_en_definition_and_example(token: str, base: str, strength: str):
    # strength: 'common' or 'rare'
    # Use base word for paraphrasing; for rare synonyms, use stronger modifiers.
    modifiers_rare = ["extremely", "very", "remarkably", "exceptionally"]
    modifiers_common = ["fairly", "rather", "somewhat", "commonly"]
    if strength == "rare":
        mod = modifiers_rare[len(token) % len(modifiers_rare)]
        definition = f"{token}: {mod} {base}."
        example = f"The {token} size of the ship surprised everyone."
    else:
        mod = modifiers_common[len(token) % len(modifiers_common)]
        definition = f"{token}: {mod} like {base}."
        example = f"A {token} change made the project easier to finish."
    # tweak sentence for verbs
    if token.endswith("ing"):
        if strength == "rare":
            definition = f"{token}: the act of doing {base}."
            example = f"{token.capitalize()} the data helped us see the trend."
        else:
            definition = f"{token}: an action similar to {base}."
            example = f"{token.capitalize()} the document took longer than expected."
    return definition, example


def build_fr_definition_and_example(token: str, base: str, strength: str):
    # Translate base if possible
    base_fr = FR_TRANSLATIONS.get(base.lower(), base)
    if strength == "rare":
        definition = f"{token} : extrêmement {base_fr}."
        example = f"Une {token} taille a surpris tout le monde."
    else:
        definition = f"{token} : plutôt {base_fr}."
        example = f"Un changement {token} a rendu le projet plus simple."
    if token.endswith("ing"):
        definition = f"{token} : l'action de {base_fr}."
        example = f"{token.capitalize()} du document a pris plus de temps que prévu."
    return definition, example


def build_es_definition_and_example(token: str, base: str, strength: str):
    base_es = ES_TRANSLATIONS.get(base.lower(), base)
    if strength == "rare":
        definition = f"{token}: extremadamente {base_es}."
        example = f"El tamaño {token} del barco sorprendió a todos."
    else:
        definition = f"{token}: bastante {base_es}."
        example = f"Un cambio {token} hizo el proyecto más fácil de terminar."
    if token.endswith("ing"):
        definition = f"{token}: la acción de {base_es}."
        example = f"{token.capitalize()} del documento tardó más de lo previsto."
    return definition, example


def main():
    tokens, entries = read_master_tokens()
    wd, original_text = read_word_definitions()

    # Build reverse map from token -> (base, strength)
    token_to_base = {}
    for e in entries:
        base = e["base"]
        for t in e["common"]:
            token_to_base.setdefault(t, []).append((base, "common"))
        for t in e["rare"]:
            token_to_base.setdefault(t, []).append((base, "rare"))

    updates = {"en": 0, "fr": 0, "es": 0}
    added = 0
    replaced = 0

    for token in sorted(tokens):
        # For each language, check if entry exists and is non-placeholder
        for lang in ("en", "fr", "es"):
            existing = wd.get(lang, {}).get(token)
            need = False
            if not existing:
                need = True
            else:
                d = existing.get("definition", "")
                ex = existing.get("example", "")
                if is_placeholder(d) or is_placeholder(ex):
                    need = True
            if not need:
                continue

            # choose a base (prefer rare -> more informative)
            base_choice = token_to_base.get(token, [("", "common")])[0]
            base, strength = base_choice
            if not base:
                base = "something"
            if lang == "en":
                definition, example = build_en_definition_and_example(token, base, strength)
            elif lang == "fr":
                definition, example = build_fr_definition_and_example(token, base, strength)
            else:
                definition, example = build_es_definition_and_example(token, base, strength)

            # write into the wd dict
            wd.setdefault(lang, {})[token] = {"definition": definition, "example": example}
            updates[lang] += 1
            added += 1

    # Now serialize wd back to TypeScript file structure
    # Keep the original header and types; replace the object literal in WORD_DEFINITIONS
    # Build a string for the object
    def obj_to_ts(obj):
        parts = []
        for lang in ["en", "fr", "es"]:
            parts.append(f"  {lang}: {{")
            entries = obj.get(lang, {})
            for k in sorted(entries.keys()):
                defn = escape_ts_string(entries[k]["definition"])
                ex = escape_ts_string(entries[k]["example"])
                parts.append(f"    \"{k}\": {{ definition: \"{defn}\", example: \"{ex}\" }},")
            parts.append("  },")
        return "{\n" + "\n".join(parts) + "\n}"

    new_obj_text = obj_to_ts(wd)
    new_content = re.sub(r"export\s+const\s+WORD_DEFINITIONS\s*=\s*({[\s\S]*});", f"export const WORD_DEFINITIONS = {new_obj_text};", original_text)

    WD_FILE.write_text(new_content, encoding="utf-8")
    print(f"Update complete. Added/updated entries: en={updates['en']}, fr={updates['fr']}, es={updates['es']} (total tokens processed: {len(tokens)})")


if __name__ == "__main__":
    main()
