const fs = require('fs');
const path = require('path');

const baseDir = '/Users/echao/Documents/Verb/pixel-perfect-copy/src/data/exercises';

function extractWords(filePath, regex) {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.matchAll(regex);
    const words = new Set();
    for (const match of matches) {
        words.add(match[1].toLowerCase().trim());
    }
    return words;
}

const wordsByLang = {
    en: new Set(),
    fr: new Set(),
    es: new Set()
};

// Precision Swap
const psFiles = {
    en: 'precisionSwap/en.ts',
    fr: 'precisionSwap/fr.ts',
    es: 'precisionSwap/es.ts'
};

const psRegex = /word:\s*["']([^"']+)["']/g;

for (const [lang, file] of Object.entries(psFiles)) {
    const filePath = path.join(baseDir, file);
    if (fs.existsSync(filePath)) {
        const words = extractWords(filePath, psRegex);
        words.forEach(w => wordsByLang[lang].add(w));
    }
}

// Reverse Definitions
const rdFile = path.join(baseDir, 'reverseDefinitions.master.ts');
const rdContent = fs.readFileSync(rdFile, 'utf8');

// RD structure has blocks for en, fr, es
const langBlocks = rdContent.split(/\w+: {/).slice(1);
const langs = ['en', 'fr', 'es'];
const rdRegex = /answer:\s*["']([^"']+)["']/g;

langs.forEach((lang, i) => {
    const block = langBlocks[i];
    if (block) {
        const matches = block.matchAll(rdRegex);
        for (const match of matches) {
            wordsByLang[lang].add(match[1].toLowerCase().trim());
        }
    }
});

// Synonym Speed Chain
const scFile = path.join(baseDir, 'synonymSpeedChain.master.ts');
const scContent = fs.readFileSync(scFile, 'utf8');
const scLangBlocks = scContent.split(/\w+: {/).slice(1);
const scRegex = /synonyms:\s*\[([^\]]+)\]/g;

langs.forEach((lang, i) => {
    const block = scLangBlocks[i];
    if (block) {
        const matches = block.matchAll(scRegex);
        for (const match of matches) {
            const words = match[1].split(',').map(s => s.replace(/["']/g, '').trim().toLowerCase());
            words.forEach(w => wordsByLang[lang].add(w));
        }
    }
});

// Word Incorporation
const wiFile = path.join(baseDir, 'wordIncorporation.master.ts');
const wiContent = fs.readFileSync(wiFile, 'utf8');
const wiLangBlocks = wiContent.split(/\w+: {/).slice(1);
const wiRegex = /requiredWords:\s*\[([^\]]+)\]/g;

langs.forEach((lang, i) => {
    const block = wiLangBlocks[i];
    if (block) {
        const matches = block.matchAll(wiRegex);
        for (const match of matches) {
            const words = match[1].split(',').map(s => s.replace(/["']/g, '').trim().toLowerCase());
            words.forEach(w => wordsByLang[lang].add(w));
        }
    }
});

console.log('--- EN WORDS ---');
console.log(JSON.stringify(Array.from(wordsByLang.en).sort()));
console.log('--- FR WORDS ---');
console.log(JSON.stringify(Array.from(wordsByLang.fr).sort()));
console.log('--- ES WORDS ---');
console.log(JSON.stringify(Array.from(wordsByLang.es).sort()));
