import fs from 'fs';
import path from 'path';

const exerciseFiles = [
    'src/data/exercises/precisionSwap/en.ts',
    'src/data/exercises/precisionSwap/fr.ts',
    'src/data/exercises/precisionSwap/es.ts',
    'src/data/exercises/reverseDefinitions.master.ts',
    'src/data/exercises/synonymSpeedChain.master.ts',
    'src/data/exercises/wordIncorporation.master.ts'
];

const wordsByLang = {
    en: new Set(),
    fr: new Set(),
    es: new Set()
};

function extractWords(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    // Simple regex to find words in quotes that likely represent vocabulary
    // This isn't perfect but helps me find the majority of them.
    // Better: match "word": "...", "targetWord": "...", "answer": "...", "commonSynonyms": [...], "rareSynonyms": [...], "words": [...]

    // Precision Swap and others
    const wordMatches = content.match(/word":\s*"([^"]+)"/g);
    if (wordMatches) wordMatches.forEach(m => {
        const w = m.match(/"([^"]+)"$/)[1].toLowerCase();
        addWord(filePath, w);
    });

    const targetWordMatches = content.match(/targetWord":\s*"([^"]+)"/g);
    if (targetWordMatches) targetWordMatches.forEach(m => {
        const w = m.match(/"([^"]+)"$/)[1].toLowerCase();
        addWord(filePath, w);
    });

    const answerMatches = content.match(/answer":\s*"([^"]+)"/g);
    if (answerMatches) answerMatches.forEach(m => {
        const w = m.match(/"([^"]+)"$/)[1].toLowerCase();
        addWord(filePath, w);
    });

    const synonymMatches = content.match(/Synonyms":\s*\[([^\]]+)\]/g);
    if (synonymMatches) synonymMatches.forEach(m => {
        const inner = m.match(/\[([^\]]+)\]/)[1];
        const ws = inner.split(',').map(s => s.trim().replace(/"/g, '').toLowerCase());
        ws.forEach(w => addWord(filePath, w));
    });

    const incWordsMatches = content.match(/words":\s*\[([^\]]+)\]/g);
    if (incWordsMatches) incWordsMatches.forEach(m => {
        const inner = m.match(/\[([^\]]+)\]/)[1];
        const ws = inner.split(',').map(s => s.trim().replace(/"/g, '').toLowerCase());
        ws.forEach(w => addWord(filePath, w));
    });
}

function addWord(filePath, word) {
    if (!word || word.length < 2) return;
    if (filePath.includes('/en.ts') || filePath.includes('en: {')) wordsByLang.en.add(word);
    else if (filePath.includes('/fr.ts') || filePath.includes('fr: {')) wordsByLang.fr.add(word);
    else if (filePath.includes('/es.ts') || filePath.includes('es: {')) wordsByLang.es.add(word);
    else {
        // Master files often have blocks by language
        // This is a bit harder to regex perfectly without a parser, but let's try a heuristic
    }
}

// Re-run with a more granular approach for master files
function processMasterFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const languages = ['en', 'fr', 'es'];

    languages.forEach(lang => {
        const start = content.indexOf(`${lang}: {`);
        if (start === -1) return;

        // Find the closure of this block (simple brace counting)
        let end = start;
        let braceCount = 0;
        let foundFirst = false;
        for (let i = start; i < content.length; i++) {
            if (content[i] === '{') {
                braceCount++;
                foundFirst = true;
            } else if (content[i] === '}') {
                braceCount--;
            }
            if (foundFirst && braceCount === 0) {
                end = i;
                break;
            }
        }

        const langBlock = content.slice(start, end);

        // Extract from block
        const matches = [
            ...langBlock.matchAll(/"word":\s*"([^"]+)"/g),
            ...langBlock.matchAll(/"targetWord":\s*"([^"]+)"/g),
            ...langBlock.matchAll(/"answer":\s*"([^"]+)"/g)
        ];
        matches.forEach(m => wordsByLang[lang].add(m[1].toLowerCase()));

        const listMatches = [
            ...langBlock.matchAll(/Synonyms":\s*\[([^\]]+)\]/g),
            ...langBlock.matchAll(/"words":\s*\[([^\]]+)\]/g)
        ];
        listMatches.forEach(m => {
            const ws = m[1].split(',').map(s => s.trim().replace(/"/g, '').toLowerCase());
            ws.forEach(w => wordsByLang[lang].add(w));
        });
    });
}

exerciseFiles.forEach(file => {
    if (file.endsWith('.master.ts')) {
        processMasterFile(file);
    } else {
        extractWords(file);
    }
});

console.log('--- EN WORDS ---');
console.log(JSON.stringify(Array.from(wordsByLang.en).sort()));
console.log('--- FR WORDS ---');
console.log(JSON.stringify(Array.from(wordsByLang.fr).sort()));
console.log('--- ES WORDS ---');
console.log(JSON.stringify(Array.from(wordsByLang.es).sort()));
