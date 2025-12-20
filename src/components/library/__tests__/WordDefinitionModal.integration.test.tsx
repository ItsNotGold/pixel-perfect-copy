import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, vi, beforeEach } from 'vitest';

// Mock language context to use English
vi.mock('@/contexts/LanguageContext', () => ({
  useLanguage: () => ({ language: 'en' })
}));

// Mock the supabase client so fetchWordDefinitions does a real call using it
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    functions: {
      invoke: vi.fn()
    }
  }
}));

import { WordDefinitionModal } from '@/components/library/WordDefinitionModal';

let mockInvoke: any;
beforeEach(async () => {
  const mod = await import('@/integrations/supabase/client');
  mockInvoke = (mod.supabase.functions.invoke as any);
  mockInvoke.mockReset();
});

describe('WordDefinitionModal integration', () => {
  it('calls supabase function and displays definition & example when opened', async () => {
    const word = 'apple';
    const payload = {
      word,
      definitions: {
        english: { definitions: ['A fruit'], examples: ['I ate an apple.'] },
        french: { definitions: [], examples: [] },
        spanish: { definitions: [], examples: [] }
      }
    };

    mockInvoke.mockResolvedValueOnce({ data: payload });

    render(<WordDefinitionModal word={word} onClear={() => {}} />);

    // Initially a skeleton/loading state should be shown
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Wait for the definition to be rendered
    await waitFor(() => {
      expect(screen.getByText('A fruit')).toBeInTheDocument();
      expect(screen.getByText(/"I ate an apple."/)).toBeInTheDocument();
    });

    // Ensure the supabase function was indeed called
    expect(mockInvoke).toHaveBeenCalled();
  });
});