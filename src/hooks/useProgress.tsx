import { useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import type { Json } from "@/integrations/supabase/types";

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

  const saveAttempt = useCallback(async (attempt: ExerciseAttempt) => {
    if (!user) return;

    const lang = attempt.language || language;

    try {
      // Save the attempt
      await supabase.from("exercise_attempts").insert([{
        user_id: user.id,
        exercise_id: attempt.exerciseId,
        score: attempt.score,
        max_score: attempt.maxScore,
        answers: (attempt.answers || {}) as Json,
        completed_at: new Date().toISOString(),
        language: lang,
      }]);

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
            best_score: Math.max(existingProgress.best_score, attempt.score),
            times_completed: existingProgress.times_completed + 1,
            last_completed_at: new Date().toISOString(),
          })
          .eq("id", existingProgress.id);
      } else {
        await supabase.from("user_progress").insert([{
          user_id: user.id,
          exercise_id: attempt.exerciseId,
          best_score: attempt.score,
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
      }
    } catch (error) {
      console.error("Error saving progress:", error);
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

        toast.success("Achievement Unlocked!", {
          description: achievementNames[achievement],
        });
      } catch {
        // Achievement already exists, ignore
      }
    }
  }, [user]);

  const getProgress = useCallback(async () => {
    if (!user) return null;
    const [progressResult, streakResult, achievementsResult] = await Promise.all([
      supabase.from("user_progress").select("*").eq("user_id", user.id),
      supabase.from("user_streaks").select("*").eq("user_id", user.id).maybeSingle(),
      supabase.from("achievements").select("*").eq("user_id", user.id),
    ]);

    // Compute today's completion and historical full-days count
    const allExercises = (await import("@/data/exercises")).exercises;
    const totalExercises = allExercises.length;

    // Local start of today and tomorrow (to keep day boundaries in user's local time)
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const startOfTomorrow = new Date(startOfToday.getTime() + 24 * 60 * 60 * 1000);

    const todayIso = startOfToday.toISOString();
    const tomorrowIso = startOfTomorrow.toISOString();

    const todayRes = await supabase
      .from("exercise_attempts")
      .select("exercise_id, completed_at")
      .eq("user_id", user.id)
      .gte("completed_at", todayIso)
      .lt("completed_at", tomorrowIso);

    const todaysUnique = new Set((todayRes.data || []).map((r: any) => r.exercise_id));

    // Fetch past year attempts to compute days where all exercises were completed
    const start365 = new Date(startOfToday.getTime() - 365 * 24 * 60 * 60 * 1000).toISOString();
    const historyRes = await supabase
      .from("exercise_attempts")
      .select("exercise_id, completed_at")
      .eq("user_id", user.id)
      .gte("completed_at", start365)
      .order("completed_at", { ascending: true });

    const attempts = historyRes.data || [];
    const daysMap: Record<string, Set<string>> = {};
    attempts.forEach((a: any) => {
      const localDate = new Date(a.completed_at).toISOString().split("T")[0];
      daysMap[localDate] = daysMap[localDate] || new Set();
      daysMap[localDate].add(a.exercise_id);
    });

    let daysFullyCompleted = 0;
    for (const d of Object.keys(daysMap)) {
      if ((daysMap[d] && daysMap[d].size) >= totalExercises) daysFullyCompleted += 1;
    }

    return {
      exerciseProgress: progressResult.data || [],
      streaks: streakResult.data,
      achievements: achievementsResult.data || [],
      todaysCompletedCount: todaysUnique.size,
      totalExercises,
      daysFullyCompleted,
    };
  }, [user]);

  const getExerciseAttempts = useCallback(async (exerciseId: string, timeframe: "all" | "90" | "30" | "7" | "1" = "all") => {
    if (!user) return [];

    let query = supabase.from("exercise_attempts").select("*").eq("user_id", user.id).eq("exercise_id", exerciseId).order("completed_at", { ascending: true });

    if (timeframe !== "all") {
      const days = parseInt(timeframe, 10);
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const since = new Date(start.getTime() - days * 24 * 60 * 60 * 1000).toISOString();
      query = query.gte("completed_at", since);
    }

    const res = await query;
    return res.data || [];
  }, [user]);

  return { saveAttempt, getProgress, getExerciseAttempts };

  return { saveAttempt, getProgress };
}
