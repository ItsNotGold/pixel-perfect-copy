const fs = require('fs');
const path = require('path');

const files = [
    'src/data/exercises/precisionSwap/en.ts',
    'src/data/exercises/precisionSwap/fr.ts',
    'src/data/exercises/precisionSwap/es.ts'
];

const basePath = '/Users/echao/Documents/Verb/pixel-perfect-copy';

files.forEach(file => {
    console.log(`\nAuditing ${file}...`);
    const content = fs.readFileSync(path.join(basePath, file), 'utf8');

    // Simple regex to extract id, sentence, targetWord, targetWordIndex
    // This assumes the format is consistent as seen in the files.
    const blocks = content.split(/\{[\s\n]*id:/).slice(1);

    blocks.forEach(block => {
        const idMatch = block.match(/"([^"]+)"/);
        const sentenceMatch = block.match(/sentence:\s*"([^"]+)"/);
        const targetWordMatch = block.match(/targetWord:\s*"([^"]+)"/);
        const indexMatch = block.match(/targetWordIndex:\s*(\d+)/);

        if (idMatch && sentenceMatch && targetWordMatch && indexMatch) {
            const id = idMatch[1];
            const sentence = sentenceMatch[1];
            const targetWord = targetWordMatch[1];
            const index = parseInt(indexMatch[1]);

            const words = sentence.split(' ');
            const actualWord = words[index];

            // Clean actualWord from trailing punctuation like . , ! ?
            const cleanedActual = actualWord ? actualWord.replace(/[.,!?]$/, '') : null;

            if (cleanedActual !== targetWord) {
                console.log(`Error in ${id}:`);
                console.log(`  Sentence: "${sentence}"`);
                console.log(`  Index ${index} points to "${cleanedActual}" instead of "${targetWord}"`);

                // Try to find the correct index
                const correctIndex = words.findIndex((w, i) => w.replace(/[.,!?]$/, '') === targetWord);
                if (correctIndex !== -1) {
                    console.log(`  Suggested Index: ${correctIndex}`);
                } else {
                    console.log(`  Could not find "${targetWord}" in sentence.`);
                }
            }
        }
    });
});
