import os
import json
import re

def extract_phrases():
    exercise_dir = "/Users/echao/Documents/Verb/pixel-perfect-copy/src/data/exercises"
    phrases = []

    # 1. Walk through precisionSwap
    ps_dir = os.path.join(exercise_dir, "precisionSwap")
    for lang_file in ["en.ts", "fr.ts", "es.ts"]:
        path = os.path.join(ps_dir, lang_file)
        if os.path.exists(path):
            with open(path, 'r') as f:
                content = f.read()
                # Simple regex to find questions/sentences in the data structure
                found = re.findall(r'question:\s*"(.*?)"', content)
                phrases.extend(found)
                found = re.findall(r'sentence:\s*"(.*?)"', content)
                phrases.extend(found)

    # 2. Walk through other master files
    for root, dirs, files in os.walk(exercise_dir):
        for file in files:
            if file.endswith(".master.ts"):
                path = os.path.join(root, file)
                with open(path, 'r') as f:
                    content = f.read()
                    # Look for topics or prompts
                    found = re.findall(r'topic:\s*"(.*?)"', content)
                    phrases.extend(found)
                    found = re.findall(r'prompt:\s*"(.*?)"', content)
                    phrases.extend(found)

    # Clean up
    phrases = [p.strip() for p in phrases if len(p.strip()) > 5]
    phrases = list(set(phrases)) # Unique
    
    output_path = "/Users/echao/Documents/Verb/pixel-perfect-copy/whisper-training/exercise_vocab.json"
    with open(output_path, 'w') as f:
        json.dump(phrases, f, indent=2)
    
    print(f"✅ Extracted {len(phrases)} unique phrases to {output_path}")

if __name__ == "__main__":
    extract_phrases()
