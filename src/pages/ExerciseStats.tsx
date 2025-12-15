import { MainLayout } from "@/components/layout/MainLayout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";
import { exercises } from "@/data/exercises";

function Sparkline({ values = [] }: { values: number[] }) {
  const w = 300;
  const h = 60;
  if (!values.length) return <div className="text-sm text-muted-foreground">No attempts yet</div>;

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
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ExerciseStats() {
  const { id } = useParams();
  const { getExerciseAttempts } = useProgress();
  const { user } = useAuth();
  const [timeframe, setTimeframe] = useState<number | 'all'>(30);
  const [attempts, setAttempts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if (!id) return;
      setLoading(true);
      const res = await getExerciseAttempts(id, timeframe === 'all' ? 'all' : timeframe);
      if (mounted) {
        setAttempts(res || []);
        setLoading(false);
      }
    };
    load();
    const onUpdate = (e?: Event) => {
      const detail = (e as CustomEvent)?.detail;
      if (detail && detail.userId && detail.userId !== user?.id) return;
      load();
    };
    window.addEventListener?.("progress-updated", onUpdate as any);
    return () => { mounted = false; window.removeEventListener?.("progress-updated", onUpdate as any); };
  }, [id, timeframe]);

  const exercise = exercises.find((e) => e.id === id);
  if (!exercise) return (
    <MainLayout>
      <div className="mx-auto max-w-4xl px-6 py-12 text-center">
        <h2 className="font-display text-2xl mb-2">Exercise not found</h2>
      </div>
    </MainLayout>
  );

  const scores = attempts.map(a => typeof a.percent === 'number' ? a.percent : Math.round(((typeof a.score === 'string' ? parseFloat(a.score) : a.score) / ((typeof a.max_score === 'string' ? parseFloat(a.max_score) : a.max_score) || 1)) * 100));

  return (
    <MainLayout>
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-6">
          <h1 className="font-display text-2xl mb-1">{exercise.shortTitle} — Stats</h1>
          <p className="text-muted-foreground">Attempts: {attempts.length}</p>
        </div>

        <div className="mb-6">
          <div className="inline-flex rounded-lg bg-muted p-1">
            {(['all', 90, 30, 7, 1] as (number | 'all')[]).map((t) => (
              <button key={String(t)} onClick={() => setTimeframe(t)} className={`px-3 py-1 rounded ${t === timeframe ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
                {t === 'all' ? 'All' : `${t}d`}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl glass p-6 mb-6">
          <div className="mb-4 text-sm text-muted-foreground">Score history</div>
          <Sparkline values={scores} />
        </div>

        <div className="space-y-2">
          {attempts.map((a) => (
            <div key={a.id} className="rounded-xl p-4 bg-muted/50 flex items-center justify-between">
              <div>
                <div className="font-medium">{new Date(a.completed_at).toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Score: {a.score}/{a.max_score}</div>
              </div>
              <div className="text-sm text-muted-foreground">{Math.round((a.score / (a.max_score || 1)) * 100)}%</div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
