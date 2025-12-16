import { exercises } from "./exercises";

export interface AchievementDef {
  id: string;
  title: string;
  description: string;
  category: string;
}

const exerciseThresholds = [
  { suffix: "bronze", percent: 60 },
  { suffix: "silver", percent: 80 },
  { suffix: "gold", percent: 95 },
];

export const achievementDefs: AchievementDef[] = [
  // Per-exercise achievements
  ...exercises.flatMap((ex) =>
    exerciseThresholds.map((t) => ({
      id: `exercise:${ex.id}:${t.suffix}`,
      title: `${ex.shortTitle} — ${t.suffix.charAt(0).toUpperCase() + t.suffix.slice(1)}`,
      description: `Achieve ${t.percent}% or higher on ${ex.shortTitle}`,
      category: "exercise",
    }))
  ),

  // Total score achievements (percent of total possible)
  {
    id: "total:bronze",
    title: "Total Score — Bronze",
    description: "Reach 25% of total possible score across all exercises",
    category: "total",
  },
  {
    id: "total:silver",
    title: "Total Score — Silver",
    description: "Reach 60% of total possible score across all exercises",
    category: "total",
  },
  {
    id: "total:gold",
    title: "Total Score — Gold",
    description: "Reach 90% of total possible score across all exercises",
    category: "total",
  },

  // Days fully completed
  {
    id: "days:1",
    title: "Completed Days — 1",
    description: "Complete all exercises for one day",
    category: "days",
  },
  {
    id: "days:7",
    title: "Completed Days — 7",
    description: "Complete all exercises for 7 days",
    category: "days",
  },
  {
    id: "days:30",
    title: "Completed Days — 30",
    description: "Complete all exercises for 30 days",
    category: "days",
  },

  // Streaks (some already used but include for display)
  {
    id: "streak:3",
    title: "3-Day Streak",
    description: "Maintain a 3-day practice streak",
    category: "streak",
  },
  {
    id: "streak:7",
    title: "7-Day Streak",
    description: "Maintain a 7-day practice streak",
    category: "streak",
  },
  {
    id: "streak:30",
    title: "30-Day Streak",
    description: "Maintain a 30-day practice streak",
    category: "streak",
  },
];

export function getExerciseAchievementId(exerciseId: string, level: "bronze" | "silver" | "gold") {
  return `exercise:${exerciseId}:${level}`;
}

export const TOTAL_THRESHOLDS = { bronze: 0.25, silver: 0.6, gold: 0.9 };
export const DAYS_THRESHOLDS = { "days:1": 1, "days:7": 7, "days:30": 30 };

export default achievementDefs;
