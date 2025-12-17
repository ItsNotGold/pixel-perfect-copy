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
    // compute best percent per exercise from ALL attempts to avoid missing older high scores
    const bestFromAttempts: Record<string, number> = {};
    try {
      const { data: allAttempts } = await supabase
        .from("exercise_attempts")
        .select("exercise_id, score, max_score")
        .eq("user_id", user.id);
      for (const a of (allAttempts || [])) {
        const id = a.exercise_id;
        const percent = a.max_score && a.max_score > 0 ? Math.round((a.score / a.max_score) * 100) : 0;
        bestFromAttempts[id] = Math.max(bestFromAttempts[id] || 0, percent);
      }
    } catch (err) {
      // Fallback to recent attempts when an error occurs
      const attempts = recentAttempts || [];
      for (const a of attempts) {
        const id = a.exercise_id;
        const percent = a.max_score && a.max_score > 0 ? Math.round((a.score / a.max_score) * 100) : 0;
        bestFromAttempts[id] = Math.max(bestFromAttempts[id] || 0, percent);
      }
    }
    const aggregated: Record<string, any> = {};
    for (const p of rawProgress) {
      const id = p.exercise_id;
      // Ensure best score considers recent attempts (even when there's only a single row)
      const candidateBest = Math.max(p.best_score || 0, bestFromAttempts[id] || 0);
      if (!aggregated[id]) {
        aggregated[id] = { ...p, best_score: candidateBest, times_completed: p.times_completed || 0 };
      } else {
        // take max best_score across languages, sum times_completed
        aggregated[id].best_score = Math.max(aggregated[id].best_score || 0, p.best_score || 0, bestFromAttempts[id] || 0);
        aggregated[id].times_completed = (aggregated[id].times_completed || 0) + (p.times_completed || 0);
        if (!aggregated[id].last_completed_at || new Date(p.last_completed_at) > new Date(aggregated[id].last_completed_at)) {
          aggregated[id].last_completed_at = p.last_completed_at;
        }
      }
    }

    // Also include exercises that have attempts but no user_progress row yet
    for (const [exId, b] of Object.entries(bestFromAttempts)) {
      if (!aggregated[exId]) {
        aggregated[exId] = { exercise_id: exId, best_score: b, times_completed: 0 };
      }
    }

    const result = {
      exerciseProgress: Object.values(aggregated),
      streaks: streakResult.data,
      achievements: achievementsResult.data || [],
      recentAttempts,
      todaysCompletedCount,
      totalExercises,
      daysFullyCompleted,
    };

    // attempt to award any achievements based on current progress (idempotent)
    try {
      await awardAchievements(result);
    } catch (err) {
      // ignore errors during passive award
    }

    return result;
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

      // Award achievements based on the newly computed progress (per-exercise thresholds, total, days, streaks)
      try {
        await awardAchievements(progress);
      } catch (err) {
        console.error("Error awarding achievements:", err);
      }
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

  // Award achievements based on the user's current progress
  const awardAchievements = useCallback(async (progress: any) => {
    if (!user) return;

    // Build a set of achievement types to attempt awarding
    const toAward: string[] = [];

    // Per-exercise achievements
    const exerciseBest: Record<string, number> = {};
    for (const p of progress.exerciseProgress || []) {
      exerciseBest[p.exercise_id] = p.best_score || 0;
    }

    for (const [exerciseId, best] of Object.entries(exerciseBest)) {
      if (best >= 60) toAward.push(`exercise:${exerciseId}:bronze`);
      if (best >= 80) toAward.push(`exercise:${exerciseId}:silver`);
      if (best >= 95) toAward.push(`exercise:${exerciseId}:gold`);
    }

    // Total score achievements (percent of max)
    const totalMax = (progress.totalExercises || exercises.length) * 100;
    const totalSum = (progress.exerciseProgress || []).reduce((s: number, p: any) => s + (p.best_score || 0), 0);
    const totalPct = totalMax > 0 ? totalSum / totalMax : 0;
    if (totalPct >= 0.25) toAward.push("total:bronze");
    if (totalPct >= 0.6) toAward.push("total:silver");
    if (totalPct >= 0.9) toAward.push("total:gold");

    // Days fully completed
    const days = progress.daysFullyCompleted || 0;
    if (days >= 1) toAward.push("days:1");
    if (days >= 7) toAward.push("days:7");
    if (days >= 30) toAward.push("days:30");

    // Streak achievements
    const streak = progress.streaks?.current_streak || 0;
    if (streak >= 3) toAward.push("streak:3");
    if (streak >= 7) toAward.push("streak:7");
    if (streak >= 30) toAward.push("streak:30");

    // Insert achievements (only when not already unlocked)
    for (const achievement of toAward) {
      try {
        const { data: exists } = await supabase.from("achievements").select("id, created_at").eq("user_id", user.id).eq("achievement_type", achievement).maybeSingle();
        if (exists) continue;

        const { data: inserted } = await supabase.from("achievements").insert([{ user_id: user.id, achievement_type: achievement }]).select().single();

        const names: Record<string, string> = {};
        names["total:gold"] = "Total Score — Gold";
        names["total:silver"] = "Total Score — Silver";
        names["total:bronze"] = "Total Score — Bronze";

        if (!settings || settings.notifications?.achievementAlerts) {
          // only notify when the achievement was just inserted
          if (inserted) {
            toast.success("Achievement Unlocked!", { description: names[achievement] || achievement });
          }
        }
      } catch (e) {
        // insertion failed, ignore
      }
    }
  }, [user, settings]);

  // Backwards-compatible wrapper used elsewhere
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
        const { data: exists } = await supabase.from("achievements").select("id, created_at").eq("user_id", user.id).eq("achievement_type", achievement).maybeSingle();
        if (exists) continue;
        const { data: inserted } = await supabase.from("achievements").insert([{ user_id: user.id, achievement_type: achievement }]).select().single();
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
          if (inserted) {
            toast.success("Achievement Unlocked!", {
              description: achievementNames[achievement],
            });
          }
        }
      } catch {
        // Achievement already exists or failed, ignore
      }
    }
  }, [user, settings]);

  return { saveAttempt, getProgress, getExerciseAttempts };
}
