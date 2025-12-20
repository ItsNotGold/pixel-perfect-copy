import { useQuery } from "@tanstack/react-query";
import { fetchWordDefinitions, WordDefinitionsResponse } from "@/lib/wordDefinitionsService";

export function useWordDefinitions(word: string | null) {
  return useQuery<WordDefinitionsResponse, Error>(["wordDefinitions", word], async () => {
    if (!word) throw new Error("no-word");
    return await fetchWordDefinitions(word);
  }, {
    enabled: !!word,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    retry: 1,
  });
}
