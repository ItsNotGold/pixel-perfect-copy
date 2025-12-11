import { MainLayout } from "@/components/layout/MainLayout";
import { exercises } from "@/data/exercises";
import { Trophy, Flame, Target, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Progress() {
  // Mock data - in a real app this would come from a database
  const stats = {
    totalScore: 1250,
    currentStreak: 5,
    exercisesCompleted: 23,
    daysActive: 12,
  };

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
            <div className="text-3xl font-bold text-foreground">{stats.totalScore}</div>
            <div className="text-sm text-muted-foreground">Total Score</div>
          </div>

          <div className="rounded-2xl glass p-6 text-center">
            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <Flame className="h-6 w-6 text-accent" />
            </div>
            <div className="text-3xl font-bold text-foreground">{stats.currentStreak}</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </div>

          <div className="rounded-2xl glass p-6 text-center">
            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
              <Target className="h-6 w-6 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-foreground">{stats.exercisesCompleted}</div>
            <div className="text-sm text-muted-foreground">Exercises Done</div>
          </div>

          <div className="rounded-2xl glass p-6 text-center">
            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
              <Calendar className="h-6 w-6 text-violet-500" />
            </div>
            <div className="text-3xl font-bold text-foreground">{stats.daysActive}</div>
            <div className="text-sm text-muted-foreground">Days Active</div>
          </div>
        </div>

        {/* Exercise Progress */}
        <div className="rounded-2xl glass p-6 animate-scale-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="mb-6 font-display text-xl text-foreground">Exercise Progress</h2>
          
          <div className="space-y-4">
            {exercises.map((exercise, index) => {
              const Icon = exercise.icon;
              // Mock progress data
              const progress = index === 2 ? 45 : Math.floor(Math.random() * 30);
              const isActive = index === 2;

              return (
                <div
                  key={exercise.id}
                  className={cn(
                    "flex items-center gap-4 rounded-xl p-4 transition-all duration-200",
                    isActive ? "bg-primary/5 border border-primary/20" : "hover:bg-muted/50"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br",
                      exercise.color
                    )}
                  >
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-foreground truncate">
                        {exercise.shortTitle}
                      </span>
                      <span className="text-sm text-muted-foreground">{progress}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-500 bg-gradient-to-r",
                          exercise.color
                        )}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
