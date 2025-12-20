import { describe, it, expect } from 'vitest';
import { parseExtractToDefsAndExamples } from './parseExtract';

describe('parseExtractToDefsAndExamples', () => {
  it('extracts definitions and examples from a typical extract', () => {
    const extract = `# A definition of the word\n#: An example sentence.\n# Another meaning\n#:\tA separate example.`;
    const parsed = parseExtractToDefsAndExamples(extract);
    expect(parsed.definitions).toContain('A definition of the word');
    expect(parsed.definitions).toContain('Another meaning');
    expect(parsed.examples).toContain('An example sentence.');
    expect(parsed.examples).toContain('A separate example.');
  });

  it('handles no definitions gracefully', () => {
    const parsed = parseExtractToDefsAndExamples('Some unrelated text\n== Header ==');
    expect(parsed.definitions).toHaveLength(0);
    expect(parsed.examples).toHaveLength(0);
  });
});