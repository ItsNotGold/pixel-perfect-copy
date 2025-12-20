import { useEffect, useState } from "react";
import { fetchWordDefinitions, WordDefinitionsResponse } from "@/lib/wordDefinitionsService";

// Simple in-memory cache to avoid repeat requests during a session
const CACHE: Map<string, { data: WordDefinitionsResponse; fetchedAt: number }> = new Map();
const STALE_MS = 1000 * 60 * 60 * 24; // 24h

export function useWordDefinitions(word: string | null) {
  const [data, setData] = useState<WordDefinitionsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    if (!word) {
      setData(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    const key = word.toLowerCase().trim();
    const cached = CACHE.get(key);
    if (cached && (Date.now() - cached.fetchedAt) < STALE_MS) {
      setData(cached.data);
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    fetchWordDefinitions(word)
      .then((res) => {
        CACHE.set(key, { data: res, fetchedAt: Date.now() });
        if (!mounted) return;
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err instanceof Error ? err : new Error(String(err)));
        setIsLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [word]);

  return { data, isLoading, error } as const;
}
