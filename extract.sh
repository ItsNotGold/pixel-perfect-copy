#!/bin/bash

# EN extraction
grep -h "word: " src/data/exercises/precisionSwap/en.ts | sed -E 's/.*word: "([^"]+)".*/\1/' > en_raw.txt
grep -h "answer: " src/data/exercises/reverseDefinitions.master.ts | sed -n '23,83p' | sed -E 's/.*answer: "([^"]+)".*/\1/' >> en_raw.txt
grep -h "word: " src/data/exercises/synonymSpeedChain.master.ts | sed -n '23,79p' | sed -E 's/.*word: "([^"]+)".*/\1/' >> en_raw.txt
grep -h "commonSynonyms: " src/data/exercises/synonymSpeedChain.master.ts | sed -n '23,79p' | sed -E 's/.*\[([^\]]+)\].*/\1/' | sed 's/[" ]//g' | tr ',' '\n' >> en_raw.txt
grep -h "rareSynonyms: " src/data/exercises/synonymSpeedChain.master.ts | sed -n '23,79p' | sed -E 's/.*\[([^\]]+)\].*/\1/' | sed 's/[" ]//g' | tr ',' '\n' >> en_raw.txt
grep -h "words: " src/data/exercises/wordIncorporation.master.ts | sed -n '23,220p' | sed -E 's/.*\[([^\]]+)\].*/\1/' | sed 's/[" ]//g' | tr ',' '\n' >> en_raw.txt
cat en_raw.txt | tr '[:upper:]' '[:lower:]' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' | grep -v '^$' | sort | uniq > en_final.txt

# FR extraction
grep -h "word: " src/data/exercises/precisionSwap/fr.ts | sed -E 's/.*word: "([^"]+)".*/\1/' > fr_raw.txt
grep -h "answer: " src/data/exercises/reverseDefinitions.master.ts | sed -n '85,131p' | sed -E 's/.*answer: "([^"]+)".*/\1/' >> fr_raw.txt
grep -h "word: " src/data/exercises/synonymSpeedChain.master.ts | sed -n '87,112p' | sed -E 's/.*word: "([^"]+)".*/\1/' >> fr_raw.txt
grep -h "commonSynonyms: " src/data/exercises/synonymSpeedChain.master.ts | sed -n '87,112p' | sed -E 's/.*\[([^\]]+)\].*/\1/' | sed 's/[" ]//g' | tr ',' '\n' >> fr_raw.txt
grep -h "rareSynonyms: " src/data/exercises/synonymSpeedChain.master.ts | sed -n '87,112p' | sed -E 's/.*\[([^\]]+)\].*/\1/' | sed 's/[" ]//g' | tr ',' '\n' >> fr_raw.txt
grep -h "words: " src/data/exercises/wordIncorporation.master.ts | sed -n '222,269p' | sed -E 's/.*\[([^\]]+)\].*/\1/' | sed 's/[" ]//g' | tr ',' '\n' >> fr_raw.txt
cat fr_raw.txt | tr '[:upper:]' '[:lower:]' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' | grep -v '^$' | sort | uniq > fr_final.txt

# ES extraction
grep -h "word: " src/data/exercises/precisionSwap/es.ts | sed -E 's/.*word: "([^"]+)".*/\1/' > es_raw.txt
grep -h "answer: " src/data/exercises/reverseDefinitions.master.ts | sed -n '133,180p' | sed -E 's/.*answer: "([^"]+)".*/\1/' >> es_raw.txt
grep -h "word: " src/data/exercises/synonymSpeedChain.master.ts | sed -n '120,146p' | sed -E 's/.*word: "([^"]+)".*/\1/' >> es_raw.txt
grep -h "commonSynonyms: " src/data/exercises/synonymSpeedChain.master.ts | sed -n '120,146p' | sed -E 's/.*\[([^\]]+)\].*/\1/' | sed 's/[" ]//g' | tr ',' '\n' >> es_raw.txt
grep -h "rareSynonyms: " src/data/exercises/synonymSpeedChain.master.ts | sed -n '120,146p' | sed -E 's/.*\[([^\]]+)\].*/\1/' | sed 's/[" ]//g' | tr ',' '\n' >> es_raw.txt
grep -h "words: " src/data/exercises/wordIncorporation.master.ts | sed -n '270,392p' | sed -E 's/.*\[([^\]]+)\].*/\1/' | sed 's/[" ]//g' | tr ',' '\n' >> es_raw.txt
cat es_raw.txt | tr '[:upper:]' '[:lower:]' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' | grep -v '^$' | sort | uniq > es_final.txt

rm en_raw.txt fr_raw.txt es_raw.txt
