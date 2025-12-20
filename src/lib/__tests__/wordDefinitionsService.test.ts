import { describe, it, expect, vi } from 'vitest';

// When importing the module under test, we'll mock the supabase client module
vi.mock('@/integrations/supabase/client', () => {
  return {
    supabase: {
      functions: {
        invoke: vi.fn()
      }
    }
  };
});

import { fetchWordDefinitions } from '@/lib/wordDefinitionsService';
import { supabase } from '@/integrations/supabase/client';
import { WORD_DEFINITIONS } from '@/data/wordDefinitions';

const mockInvoke = (supabase as any).functions.invoke as any;

describe('fetchWordDefinitions', () => {
  it('parses string responses and returns object', async () => {
    const word = 'apple';
    const payload = { word, definitions: { english: { definitions: ['A fruit'], examples: ['I ate an apple.'] }, french: { definitions: [], examples: [] }, spanish: { definitions: [], examples: [] } } };
    mockInvoke.mockResolvedValueOnce({ data: JSON.stringify(payload) });

    const res = await fetchWordDefinitions(word);
    expect(res.word).toBe(word);
    expect(res.definitions.english.definitions[0]).toBe('A fruit');
  });

  it('falls back to local definitions when supabase returns invalid JSON', async () => {
    const word = 'nonexistentwordxyz';
    mockInvoke.mockResolvedValueOnce({ data: "this is not json" });

    const res = await fetchWordDefinitions(word);
    // fallback should be constructed from WORD_DEFINITIONS if present, else empty
    const local = (WORD_DEFINITIONS as any).en?.[word];
    if (local) {
      expect(res.definitions.english.definitions[0]).toBe(local.definition);
    } else {
      expect(res.definitions.english.definitions).toHaveLength(0);
    }
  });

  it('falls back to local when invoke throws', async () => {
    const word = 'abdicate';
    mockInvoke.mockRejectedValueOnce(new Error('network failed'));

    const res = await fetchWordDefinitions(word);
    const local = (WORD_DEFINITIONS as any).en?.[word];
    expect(res.definitions.english.definitions[0]).toBe(local.definition);
  });
});