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
    const parsed = (data || []).map((r: any) => ({
      ...r,
      score: typeof r.score === 'string' ? parseFloat(r.score) : r.score,
      max_score: typeof r.max_score === 'string' ? parseFloat(r.max_score) : r.max_score,
      percent: Math.round(((typeof r.score === 'string' ? parseFloat(r.score) : r.score) / (typeof r.max_score === 'string' ? parseFloat(r.max_score) : r.max_score || 1)) * 100),
    }));
    return parsed;
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

    const recentAttempts = (attemptsResult.data || []).map((r: any) => ({
      ...r,
      score: typeof r.score === 'string' ? parseFloat(r.score) : r.score,
      max_score: typeof r.max_score === 'string' ? parseFloat(r.max_score) : r.max_score,
    }));

    // compute today's completed distinct exercises (local day)
    const today = new Date();
    const localStart = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString();
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).toISOString();

    const { data: todaysData } = await supabase.from("exercise_attempts").select("*").eq("user_id", user.id).gte("completed_at", localStart).lt("completed_at", tomorrow);
    const todaysExerciseIds = new Set((todaysData || []).map((a: any) => a.exercise_id));
    const todaysCompletedCount = todaysExerciseIds.size;

    // days fully completed in the past year
    const attempts365 = (lastYearAttempts.data || []).map((r: any) => ({
      ...r,
      score: typeof r.score === 'string' ? parseFloat(r.score) : r.score,
      max_score: typeof r.max_score === 'string' ? parseFloat(r.max_score) : r.max_score,
    }));
    const dayMap: Record<string, Set<string>> = {};
    for (const a of attempts365) {
      const d = new Date(a.completed_at);
      const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      if (!dayMap[key]) dayMap[key] = new Set();
      dayMap[key].add(a.exercise_id);
    }

    const daysFullyCompleted = Object.values(dayMap).filter((s) => s.size >= totalExercises).length;

    // Aggregate user_progress rows by exercise_id to present consistent counts across languages
    const rawProgressRows = progressResult.data || [];
    const progressMap: Record<string, any> = {};
    for (const p of rawProgressRows) {
      const existing = progressMap[p.exercise_id] || { exercise_id: p.exercise_id, times_completed: 0, best_score: 0, last_completed_at: null, languages: [] };
      existing.times_completed = (existing.times_completed || 0) + (p.times_completed || 0);
      existing.best_score = Math.max(existing.best_score || 0, (p.best_score || 0));
      if (!existing.last_completed_at || new Date(p.last_completed_at) > new Date(existing.last_completed_at)) {
        existing.last_completed_at = p.last_completed_at;
      }
      existing.languages = Array.from(new Set([...(existing.languages || []), p.language]));
      progressMap[p.exercise_id] = existing;
    }

    // Also inspect raw attempts to ensure best_score and times_completed are correct (repair legacy/scale issues)
    const { data: allAttemptsData } = await supabase.from("exercise_attempts").select("*").eq("user_id", user.id);
    const attemptsAll = (allAttemptsData || []).map((r: any) => ({
      ...r,
      score: typeof r.score === 'string' ? parseFloat(r.score) : r.score,
      max_score: typeof r.max_score === 'string' ? parseFloat(r.max_score) : r.max_score,
    }));

    const attemptsCountMap: Record<string, number> = {};
    const bestPercentMap: Record<string, number> = {};
    for (const a of attemptsAll) {
      attemptsCountMap[a.exercise_id] = (attemptsCountMap[a.exercise_id] || 0) + 1;
      const percent = Math.round(((a.score || 0) / (a.max_score || 1)) * 100);
      bestPercentMap[a.exercise_id] = Math.max(bestPercentMap[a.exercise_id] || 0, percent);
    }

    for (const [exerciseId, counts] of Object.entries(attemptsCountMap)) {
      const existing = progressMap[exerciseId] || { exercise_id: exerciseId, times_completed: 0, best_score: 0, last_completed_at: null, languages: [] };
      existing.times_completed = Math.max(existing.times_completed || 0, counts);
      existing.best_score = Math.max(existing.best_score || 0, bestPercentMap[exerciseId] || 0);
      progressMap[exerciseId] = existing;
    }

    const exerciseProgress = Object.values(progressMap);

    return {
      exerciseProgress,
      streaks: streakResult.data,
      achievements: achievementsResult.data || [],
      recentAttempts,
      todaysCompletedCount,
      totalExercises,
      daysFullyCompleted,
    };
  }, [user]);

  const saveAttempt = useCallback(async (attempt: ExerciseAttempt) => {
    if (!user) return { success: false, error: 'not-signed-in' };

    const lang = attempt.language || language;

    try {
      // Insert attempt row
      const { data: inserted, error: insertErr } = await supabase.from('exercise_attempts').insert([{
        user_id: user.id,
        exercise_id: attempt.exerciseId,
        score: attempt.score,
        max_score: attempt.maxScore,
        answers: (attempt.answers || {}) as Json,
        completed_at: new Date().toISOString(),
        language: lang,
      }]).select().single();

      if (insertErr) {
        console.error('Failed to insert attempt', insertErr);
        return { success: false, error: insertErr };
      }

      // Update or create user_progress with percent-normalized best_score
      const { data: existingProgress } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('exercise_id', attempt.exerciseId)
        .eq('language', lang)
        .maybeSingle();

      const attemptPercent = Math.round(((attempt.score || 0) / (attempt.maxScore || 1)) * 100);

      if (existingProgress) {
        await supabase.from('user_progress').update({
          best_score: Math.max(existingProgress.best_score || 0, attemptPercent),
          times_completed: (existingProgress.times_completed || 0) + 1,
          last_completed_at: new Date().toISOString(),
        }).eq('id', existingProgress.id);
      } else {
        await supabase.from('user_progress').insert([{ user_id: user.id, exercise_id: attempt.exerciseId, best_score: attemptPercent, times_completed: 1, last_completed_at: new Date().toISOString(), language: lang }]);
      }

      // Update streaks
      const today = new Date().toISOString().split('T')[0];
      const { data: streakData } = await supabase.from('user_streaks').select('*').eq('user_id', user.id).maybeSingle();

      if (streakData) {
        const lastActivity = streakData.last_activity_date;
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        let newStreak = streakData.current_streak;
        if (lastActivity === yesterday) newStreak = streakData.current_streak + 1;
        else if (lastActivity !== today) newStreak = 1;

        await supabase.from('user_streaks').update({
          current_streak: newStreak,
          longest_streak: Math.max(streakData.longest_streak, newStreak),
          last_activity_date: today,
          total_exercises_completed: streakData.total_exercises_completed + 1,
        }).eq('user_id', user.id);

        checkAchievements(newStreak, streakData.total_exercises_completed + 1);
      } else {
        await supabase.from('user_streaks').insert([{ user_id: user.id, current_streak: 1, longest_streak: 1, last_activity_date: today, total_exercises_completed: 1 }]);
        checkAchievements(1, 1);
      }

      const progress = await getProgress();
      try { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('progress-updated', { detail: { userId: user.id } })); } catch {}

      return { success: true, attempt: inserted || null, progress };
    } catch (error) {
      console.error('Error saving progress:', error);
      return { success: false, error };
    }
  }, [user, language]);


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
