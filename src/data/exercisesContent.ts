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

// Legacy content exports have been removed. Use master files in src/data/exercises/ instead.

export default raw;
