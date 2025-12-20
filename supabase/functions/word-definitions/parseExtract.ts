export function parseExtractToDefsAndExamples(extract: string) {
  const lines = extract.split(/\r?\n/);
  const definitions: string[] = [];
  const examples: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Definition lines in Wiktionary extracts often start with '# ' (one hash)
    const defMatch = line.match(/^#\s+(.*)$/);
    if (defMatch) {
      const clean = defMatch[1].replace(/^[:\d\.\)\s]+/, "").trim();
      if (clean.length > 0) definitions.push(clean);

      // collect immediate example lines that follow and start with '#:' or '# ' with a leading ':'
      let j = i + 1;
      while (j < lines.length) {
        const next = lines[j].trim();
        const exMatch = next.match(/^#:\s+(.*)$/);
        if (exMatch) {
          const e = exMatch[1].trim();
          if (e.length > 0) examples.push(e);
          j++;
          continue;
        }
        // break on next definition or header
        if (/^#\s+/.test(next) || /^==+/.test(next) || next === "") break;
        j++;
      }
    }

    // Sometimes examples are present as lines starting with '#:\s' separated from defs
    const exLine = line.match(/^#:\s+(.*)$/);
    if (exLine) {
      const e = exLine[1].trim();
      if (e.length > 0) examples.push(e);
    }
  }

  const dedup = (arr: string[]) => Array.from(new Set(arr.map(s => s.trim())).values());
  return { definitions: dedup(definitions), examples: dedup(examples) };
}
