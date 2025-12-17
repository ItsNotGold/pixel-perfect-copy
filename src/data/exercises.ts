import { exercises as _ex } from "@/data/exercisesContent";

export type Exercise = typeof _ex[number];

// Re-export the array for ease of editing and backwards compatibility
export const exercises = _ex as Exercise[];
