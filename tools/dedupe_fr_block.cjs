const fs = require('fs');
const path = 'src/data/wordDefinitions.ts';
let s = fs.readFileSync(path, 'utf8');
const frStart = s.indexOf('\n    fr: {');
if (frStart === -1) { console.error('fr block not found'); process.exit(1); }
let i = frStart + '\n    fr: {'.length;
let depth = 1;
for (; i < s.length; i++) {
  if (s[i] === '{') depth++;
  else if (s[i] === '}') { depth--; if (depth === 0) break; }
}
const frBlock = s.slice(frStart + '\n    fr: {'.length, i);
// Match entries like "word": { ... }, including nested braces
const entryRegex = /"([^"]+)":\s*\{([\s\S]*?)\},?/g;
let m; const entries = [];
while ((m = entryRegex.exec(frBlock)) !== null) {
  const key = m[1];
  const body = m[0];
  entries.push({key, body, index: m.index});
}
// find last occurrence index for each key
const lastIndex = {};
entries.forEach((e, idx) => { lastIndex[e.key] = idx; });
// build map keeping only last occurrence, and maintain order by last index
const uniqueKeys = Object.keys(lastIndex).sort((a,b)=> lastIndex[a]-lastIndex[b]);
const newBlockParts = uniqueKeys.map(k=> entries[lastIndex[k]].body + '\n');
const newBlock = '\n' + newBlockParts.join('') + '\n';
// replace in original file
const newContent = s.slice(0, frStart + '\n    fr: {'.length) + newBlock + s.slice(i);
fs.writeFileSync(path, newContent, 'utf8');
console.log('Deduped fr block. Kept', uniqueKeys.length, 'entries.');
