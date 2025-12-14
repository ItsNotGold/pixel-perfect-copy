import { MainLayout } from "@/components/layout/MainLayout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProgress } from "@/hooks/useProgress";
import { exercises } from "@/data/exercises";

const timeframeOptions = [
  { key: "all", label: "All time" },
  { key: "90", label: "90 days" },
  { key: "30", label: "30 days" },
  { key: "7", label: "1 week" },
  { key: "1", label: "1 day" },
];

function ScoreChart({ points = [] }: { points: { t: string; v: number }[] }) {
  const w = 600;
  const h = 160;
  if (!points.length) return <div className="text-sm text-muted-foreground">No data for this timeframe.</div>;

  const vals = points.map((p) => p.v);
  const max = Math.max(...vals, 100);
  const min = Math.min(...vals, 0);
  const range = max - min || 1;

  const pointsStr = points.map((p, i) => {
    const x = (i / (points.length - 1 || 1)) * w;
    const y = h - ((p.v - min) / range) * h;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} className="rounded-md bg-muted p-2">
      <polyline points={pointsStr} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ExerciseStats() {
  const { id } = useParams();
  const { getExerciseAttempts } = useProgress();
  const [timeframe, setTimeframe] = useState<"all" | "90" | "30" | "7" | "1">("all");
  const [attempts, setAttempts] = useState<any[]>([]);
  const exercise = exercises.find((e) => e.id === id);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if (!id) return;
      const res = await getExerciseAttempts(id, timeframe);
      if (mounted) setAttempts(res || []);
    };
    load();
    return () => { mounted = false };
  }, [id, timeframe]);

  const count = attempts.length;
  const mean = count ? Math.round((attempts.reduce((s, a) => s + (a.score / a.max_score) * 100, 0) / count)) : 0;

  const points = attempts.map((a) => ({ t: a.completed_at, v: Math.round((a.score / a.max_score) * 100) }));

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="font-display text-2xl mb-4">{exercise?.title || id} — Stats</h1>

        <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl glass p-4 text-center">
            <div className="text-2xl font-bold">{count}</div>
            <div className="text-sm text-muted-foreground">Attempts</div>
          </div>
          <div className="rounded-xl glass p-4 text-center">
            <div className="text-2xl font-bold">{mean}%</div>
            <div className="text-sm text-muted-foreground">Mean score</div>
          </div>
          <div className="rounded-xl glass p-4">
            <div className="text-sm text-muted-foreground mb-2">Timeframe</div>
            <div className="flex gap-2 flex-wrap">
              {timeframeOptions.map((o) => (
                <button key={o.key} onClick={() => setTimeframe(o.key as any)} className={`rounded-md px-3 py-1 text-sm ${timeframe === o.key ? 'bg-primary text-primary-foreground' : 'bg-muted/50'}`}>
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl glass p-6 mb-6">
          <ScoreChart points={points} />
        </div>

        <div className="rounded-2xl glass p-6">
          <h2 className="mb-4 font-medium">Attempts</h2>
          {attempts.length === 0 ? (
            <div className="text-sm text-muted-foreground">No attempts for this timeframe.</div>
          ) : (
            <div className="space-y-2">
              {attempts.map((a) => (
                <div key={a.id} className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">{new Date(a.completed_at).toLocaleString()}</div>
                  <div className="font-medium">{Math.round((a.score / a.max_score) * 100)}%</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
