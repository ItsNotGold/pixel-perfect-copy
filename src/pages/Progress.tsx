import { MainLayout } from "@/components/layout/MainLayout";
import { exercises } from "@/data/exercises";
import { Trophy, Flame, Target, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useProgress } from "@/hooks/useProgress";
import { useAuth } from "@/hooks/useAuth";

function Sparkline({ values = [] }: { values: number[] }) {
  // Render a simple sparkline SVG from 0-100 values
  const w = 100;
  const h = 28;
  if (!values.length) {
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="opacity-30">
        <polyline points={`0,${h / 2} ${w},${h / 2}`} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  const max = Math.max(...values, 100);
  const min = Math.min(...values, 0);
  const range = max - min || 1;

  const points = values.map((v, i) => {
    const x = (i / (values.length - 1 || 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Progress() {
  const { user } = useAuth();
  const { getProgress } = useProgress();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if (!user) {
        setData(null);
        setLoading(false);
        return;
      }
      setLoading(true);
      const res = await getProgress();
      if (mounted) {
        setData(res);
        setLoading(false);
      }
    };
    load();
    return () => { mounted = false };
  }, [user]);

  if (!user) {
    return (
      <MainLayout>
        <div className="mx-auto max-w-4xl px-6 py-12 text-center">
          <h2 className="font-display text-2xl mb-2">Sign in to view your progress</h2>
          <p className="text-muted-foreground">Create an account to sync your progress across devices and see your attempt history and graphs.</p>
        </div>
      </MainLayout>
    );
  }

  const exerciseProgress = (data?.exerciseProgress || []) as any[];
  const recentAttempts = (data?.recentAttempts || []) as any[];
  const streaks = data?.streaks || null;
  const achievements = data?.achievements || [];

  const totalScore = exerciseProgress.reduce((sum, p) => sum + (p.best_score || 0), 0);
  const exercisesCompleted = exerciseProgress.reduce((sum, p) => sum + (p.times_completed || 0), 0);
  const currentStreak = streaks?.current_streak || 0;
  const daysActive = Array.from(new Set(recentAttempts.map((a: any) => new Date(a.completed_at).toISOString().split("T")[0]))).length;

  return (
    <MainLayout>
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header */}
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="mb-2 font-display text-3xl text-foreground">Your Progress</h1>
          <p className="text-muted-foreground">Track your communication journey</p>
        </div>

        {/* Main Stats */}
        <div className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up">
          <div className="rounded-2xl glass p-6 text-center">
            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">{totalScore}</div>
            <div className="text-sm text-muted-foreground">Total Score</div>
          </div>

          <div className="rounded-2xl glass p-6 text-center">
            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <Flame className="h-6 w-6 text-accent" />
            </div>
            <div className="text-3xl font-bold text-foreground">{currentStreak}</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </div>

          <div className="rounded-2xl glass p-6 text-center">
            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
              <Target className="h-6 w-6 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-foreground">{exercisesCompleted}</div>
            <div className="text-sm text-muted-foreground">Exercises Done</div>
          </div>

          <div className="rounded-2xl glass p-6 text-center">
            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
              <Calendar className="h-6 w-6 text-violet-500" />
            </div>
            <div className="text-3xl font-bold text-foreground">{daysActive}</div>
            <div className="text-sm text-muted-foreground">Days Active</div>
          </div>
        </div>

        {/* Exercise Progress */}
        <div className="rounded-2xl glass p-6 animate-scale-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="mb-6 font-display text-xl text-foreground">Exercise Progress</h2>

          <div className="space-y-4">
            {exercises.map((exercise) => {
              const attempts = recentAttempts.filter((a: any) => a.exercise_id === exercise.id);
              const scores = attempts.slice(0, 10).reverse().map((a: any) => Math.round((a.score / a.max_score) * 100));
              const percent = attempts.length ? Math.max(...scores) : 0;

              return (
                <div key={exercise.id} className="flex items-center gap-4 rounded-xl p-4 hover:bg-muted/50">
                  <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br", exercise.color)}>
                    {(() => {
                      const Icon = exercise.icon as any;
                      return <Icon className="h-5 w-5 text-primary-foreground" />;
                    })()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-foreground truncate">{exercise.shortTitle}</span>
                      <span className="text-sm text-muted-foreground">{percent}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 overflow-hidden rounded-full bg-muted">
                        <div className={cn("h-full rounded-full transition-all duration-500 bg-gradient-to-r", exercise.color)} style={{ width: `${percent}%` }} />
                      </div>
                      <div className="w-28">
                        <Sparkline values={scores} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Attempts */}
        <div className="mt-6 rounded-2xl glass p-6">
          <h2 className="mb-4 font-display text-lg text-foreground">Recent Attempts</h2>
          {recentAttempts.length === 0 ? (
            <div className="text-sm text-muted-foreground">No attempts yet. Try an exercise to start tracking progress.</div>
          ) : (
            <div className="space-y-2">
              {recentAttempts.map((attempt: any) => {
                const exercise = exercises.find((e) => e.id === attempt.exercise_id);
                const pct = Math.round((attempt.score / attempt.max_score) * 100);
                return (
                  <div key={attempt.id} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium">{exercise?.shortTitle || attempt.exercise_id}</div>
                      <div className="text-xs text-muted-foreground">{new Date(attempt.completed_at).toLocaleString()}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium">{pct}%</div>
                      <div className="text-xs text-muted-foreground">{attempt.score}/{attempt.max_score}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
