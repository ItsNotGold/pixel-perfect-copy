const fs = require('fs');
const s = fs.readFileSync('src/data/wordDefinitions.ts', 'utf8');
const langRegex = /([a-z]{2}):\s*\{/g;
let m;
while ((m = langRegex.exec(s)) !== null) {
  const lang = m[1];
  const start = m.index + m[0].length;
  let depth = 1;
  let i = start;
  for (; i < s.length; i++) {
    if (s[i] === '{') depth++;
    else if (s[i] === '}') {
      depth--;
      if (depth === 0) break;
    }
  }
  const block = s.slice(start, i);
  const keys = block.match(/"([^\"]+)"\s*:\s*\{/g) || [];
  const names = keys.map((k) => k.match(/"([^\"]+)"/)[1]);
  const dup = names.filter((v, i, a) => a.indexOf(v) !== i);
  if (dup.length) {
    console.log(lang, 'duplicates:', [...new Set(dup)].join(', '));
  } else {
    console.log(lang, 'no duplicates');
  }
}
