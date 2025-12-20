import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

vi.mock('@/contexts/LanguageContext', () => ({
  useLanguage: () => ({ language: 'en' })
}));

// Mock the hook used by the component; export a mutable mock function so tests can change it
const useWordDefinitionsMock = vi.fn((word: string | null) => ({ data: null, isLoading: false, error: null }));
vi.mock('@/hooks/useWordDefinitions', () => ({
  useWordDefinitions: (word: string | null) => useWordDefinitionsMock(word)
}));

import { WordDefinitionModal } from '@/components/library/WordDefinitionModal';

describe('WordDefinitionModal', () => {
  it('shows fallback when no data', () => {
    render(<WordDefinitionModal word={'foobar'} onClear={() => {}} />);
    expect(screen.getByText(/Definition not available yet for "foobar" i/i)).toBeInTheDocument();
    expect(screen.getByText(/No example available./i)).toBeInTheDocument();
  });

  it('shows definition and example when provided', () => {
    // Override the default mock implementation
    useWordDefinitionsMock.mockImplementationOnce((word: string | null) => ({
      data: { word: word || '', definitions: { english: { definitions: ['A meaning'], examples: ['An example.'] }, french: { definitions: [], examples: [] }, spanish: { definitions: [], examples: [] } } },
      isLoading: false,
      error: null
    }));

    render(<WordDefinitionModal word={'apple'} onClear={() => {}} />);
    expect(screen.getByText('A meaning')).toBeInTheDocument();
    expect(screen.getByText(/"An example."/)).toBeInTheDocument();
  });
});