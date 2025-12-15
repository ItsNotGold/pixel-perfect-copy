import { useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { useSettings } from "@/hooks/useSettings";
import type { Json } from "@/integrations/supabase/types";
import { exercises } from "@/data/exercises";

export interface ExerciseAttempt {
  exerciseId: string;
  score: number;
  maxScore: number;
  answers?: Record<string, unknown>;
  language?: string;
}

export function useProgress() {
  const { user } = useAuth();
  const { language } = useLanguage();
  const { settings } = useSettings();

  const getExerciseAttempts = useCallback(async (exerciseId: string, timeframeDays: number | 'all' = 'all') => {
    if (!user) return [] as any[];

    let query = supabase.from("exercise_attempts").select("*").eq("user_id", user.id).eq("exercise_id", exerciseId).order("completed_at", { ascending: false });

    if (timeframeDays !== 'all') {
      const from = new Date();
      from.setDate(from.getDate() - timeframeDays);
      query = query.gte("completed_at", from.toISOString());
    }

    const { data } = await query;
    const rows = data || [];
    // normalize percent for each attempt to make UI calculations consistent
    return rows.map((r: any) => ({
      ...r,
      percent: r.max_score && r.max_score > 0 ? Math.round((r.score / r.max_score) * 100) : 0,
    }));
  }, [user]);

  const getProgress = useCallback(async () => {
    if (!user) return null;

    const totalExercises = exercises.length;

    // fetch user records
    const [progressResult, streakResult, achievementsResult, attemptsResult, lastYearAttempts] = await Promise.all([
      supabase.from("user_progress").select("*").eq("user_id", user.id),
      supabase.from("user_streaks").select("*").eq("user_id", user.id).maybeSingle(),
      supabase.from("achievements").select("*").eq("user_id", user.id),
      supabase.from("exercise_attempts").select("*").eq("user_id", user.id).order("completed_at", { ascending: false }).limit(50),
      supabase.from("exercise_attempts").select("*").eq("user_id", user.id).gte("completed_at", new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString()),
    ]);

    const recentAttempts = attemptsResult.data || [];

    // compute today's completed distinct exercises (local day)
    const today = new Date();
    const localStart = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString();
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).toISOString();

    const { data: todaysData } = await supabase.from("exercise_attempts").select("*").eq("user_id", user.id).gte("completed_at", localStart).lt("completed_at", tomorrow);
    const todaysExerciseIds = new Set((todaysData || []).map((a: any) => a.exercise_id));
    const todaysCompletedCount = todaysExerciseIds.size;

    // days fully completed in the past year
    const attempts365 = lastYearAttempts.data || [];
    const dayMap: Record<string, Set<string>> = {};
    for (const a of attempts365) {
      const d = new Date(a.completed_at);
      const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      if (!dayMap[key]) dayMap[key] = new Set();
      dayMap[key].add(a.exercise_id);
    }

    const daysFullyCompleted = Object.values(dayMap).filter((s) => s.size >= totalExercises).length;

    // aggregate progress rows across languages so each exercise is represented once
    const rawProgress = progressResult.data || [];
    // compute best percent per exercise from recent attempts to help normalize legacy user_progress values
    const attempts = recentAttempts || [];
    const bestFromAttempts: Record<string, number> = {};
    for (const a of attempts) {
      const id = a.exercise_id;
      const percent = a.max_score && a.max_score > 0 ? Math.round((a.score / a.max_score) * 100) : 0;
      bestFromAttempts[id] = Math.max(bestFromAttempts[id] || 0, percent);
    }
    const aggregated: Record<string, any> = {};
    for (const p of rawProgress) {
      const id = p.exercise_id;
      if (!aggregated[id]) {
        aggregated[id] = { ...p };
      } else {
        // take max best_score across languages, sum times_completed
        aggregated[id].best_score = Math.max(aggregated[id].best_score || 0, p.best_score || 0, bestFromAttempts[id] || 0);
        aggregated[id].times_completed = (aggregated[id].times_completed || 0) + (p.times_completed || 0);
        if (!aggregated[id].last_completed_at || new Date(p.last_completed_at) > new Date(aggregated[id].last_completed_at)) {
          aggregated[id].last_completed_at = p.last_completed_at;
        }
      }
    }

    return {
      exerciseProgress: Object.values(aggregated),
      streaks: streakResult.data,
      achievements: achievementsResult.data || [],
      recentAttempts,
      todaysCompletedCount,
      totalExercises,
      daysFullyCompleted,
    };
  }, [user]);

  const saveAttempt = useCallback(async (attempt: ExerciseAttempt) => {
    if (!user) return;

    const lang = attempt.language || language;

    try {
      // Save the attempt
      const { data: inserted } = await supabase.from("exercise_attempts").insert([{
        user_id: user.id,
        exercise_id: attempt.exerciseId,
        score: attempt.score,
        max_score: attempt.maxScore,
        answers: (attempt.answers || {}) as Json,
        completed_at: new Date().toISOString(),
        language: lang,
      }]).select().single();

      // compute percent for this attempt
      const percent = attempt.maxScore && attempt.maxScore > 0 ? Math.round((attempt.score / attempt.maxScore) * 100) : 0;

      // Update user progress (per language)
      const { data: existingProgress } = await supabase
        .from("user_progress")
        .select("*")
        .eq("user_id", user.id)
        .eq("exercise_id", attempt.exerciseId)
        .eq("language", lang)
        .maybeSingle();

      if (existingProgress) {
        await supabase
          .from("user_progress")
          .update({
            best_score: Math.max(existingProgress.best_score || 0, percent),
            times_completed: (existingProgress.times_completed || 0) + 1,
            last_completed_at: new Date().toISOString(),
          })
          .eq("id", existingProgress.id);
      } else {
        await supabase.from("user_progress").insert([{
          user_id: user.id,
          exercise_id: attempt.exerciseId,
          best_score: percent,
          times_completed: 1,
          last_completed_at: new Date().toISOString(),
          language: lang,
        }]);
      }

      // Update streaks
      const today = new Date().toISOString().split("T")[0];
      const { data: streakData } = await supabase
        .from("user_streaks")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (streakData) {
        const lastActivity = streakData.last_activity_date;
        const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
        
        let newStreak = streakData.current_streak;
        if (lastActivity === yesterday) {
          newStreak = streakData.current_streak + 1;
        } else if (lastActivity !== today) {
          newStreak = 1;
        }

        await supabase
          .from("user_streaks")
          .update({
            current_streak: newStreak,
            longest_streak: Math.max(streakData.longest_streak, newStreak),
            last_activity_date: today,
            total_exercises_completed: streakData.total_exercises_completed + 1,
          })
          .eq("user_id", user.id);

        // Check for achievements
        checkAchievements(newStreak, streakData.total_exercises_completed + 1);
      } else {
        // create streak row for new users
        await supabase.from("user_streaks").insert([{ user_id: user.id, current_streak: 1, longest_streak: 1, last_activity_date: today, total_exercises_completed: 1 }]);
        checkAchievements(1, 1);
      }

      // Return inserted attempt and updated progress so callers can refresh UI
      const progress = await getProgress();
      try {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("progress-updated", { detail: { userId: user.id } }));
        }
      } catch {
        // ignore
      }
      return { success: true, attempt: inserted || null, progress };
    } catch (error) {
      console.error("Error saving progress:", error);
      return { success: false, error };
    }
  }, [user]);

  const checkAchievements = useCallback(async (streak: number, totalCompleted: number) => {
    if (!user) return;
    const achievements: string[] = [];

    if (totalCompleted === 1) achievements.push("first_exercise");
    if (totalCompleted === 10) achievements.push("ten_exercises");
    if (totalCompleted === 50) achievements.push("fifty_exercises");
    if (totalCompleted === 100) achievements.push("hundred_exercises");
    if (streak === 3) achievements.push("streak_3");
    if (streak === 7) achievements.push("streak_7");
    if (streak === 30) achievements.push("streak_30");

    for (const achievement of achievements) {
      try {
        await supabase.from("achievements").insert([{
          user_id: user.id,
          achievement_type: achievement,
        }]);
        
        const achievementNames: Record<string, string> = {
          first_exercise: "First Steps",
          ten_exercises: "Getting Started",
          fifty_exercises: "Dedicated Learner",
          hundred_exercises: "Century Club",
          streak_3: "3-Day Streak",
          streak_7: "Week Warrior",
          streak_30: "Monthly Master",
        };

        if (!settings || settings.notifications?.achievementAlerts) {
          toast.success("Achievement Unlocked!", {
            description: achievementNames[achievement],
          });
        }
      } catch {
        // Achievement already exists, ignore
      }
    }
  }, [user, settings]);

  return { saveAttempt, getProgress, getExerciseAttempts };
}
