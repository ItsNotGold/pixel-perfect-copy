import raw from "./exercises.content.json";
import * as Icons from "lucide-react";
import { Language } from "@/contexts/LanguageContext";

export type LucideIcon = any; // keep it flexible for now

export interface ExerciseMeta {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  goal?: string;
  mechanic?: string;
  description?: string;
  icon?: LucideIcon;
  color?: string;
  path?: string;
}

// Map icon name string to lucide-react component if available
const mapIcon = (name?: string) => {
  if (!name) return undefined;
  // Icons are exported as PascalCase names from lucide-react
  // @ts-ignore
  return (Icons as any)[name] || undefined;
};

// Exercises meta with icon components
export const exercises: ExerciseMeta[] = (raw as any).exercises.map((e: any) => ({
  ...e,
  icon: mapIcon(e.icon),
}));

import { swapChallengesMultilingual as legacySwap } from "@/data/multilingualContent/precisionSwap";
import { reverseDefinitionsMultilingual as legacyReverse } from "@/data/multilingualContent/reverseDefinitions";
import { synonymChallengesMultilingual as legacySynonym } from "@/data/multilingualContent/synonymChain";

const mergeByLang = (rawObj: any, legacyObj: Record<Language, any[]>) => {
  const result: Record<Language, any[]> = {} as any;
  const legacyKeys = Object.keys(legacyObj || {});
  const rawKeys = rawObj ? Object.keys(rawObj) : [];
  const keys = Array.from(new Set([...legacyKeys, ...rawKeys]));
  keys.forEach((k) => {
    // Prefer raw content only if it has at least as many entries as legacy; otherwise prefer legacy.
    const rawLen = rawObj && rawObj[k] ? (rawObj[k] || []).length : 0;
    const legacyLen = legacyObj && legacyObj[k] ? (legacyObj[k] || []).length : 0;

    if (rawLen > 0 && rawLen >= legacyLen) result[k as Language] = rawObj[k];
    else if (legacyLen > 0) result[k as Language] = legacyObj[k];
    else if (rawLen > 0) result[k as Language] = rawObj[k];
    else result[k as Language] = [];
  });
  return result;
};

export const precisionSwap: Record<Language, any[]> = mergeByLang((raw as any).precisionSwap, legacySwap);
export const reverseDefinitions: Record<Language, any[]> = mergeByLang((raw as any).reverseDefinitions, legacyReverse);
export const synonymChain: Record<Language, any[]> = mergeByLang((raw as any).synonymChain, legacySynonym);

// Backwards-compatible exports used elsewhere in the app
export const swapChallengesMultilingual = precisionSwap;
export const reverseDefinitionsMultilingual = reverseDefinitions;
export const synonymChallengesMultilingual = synonymChain;

export default raw;
