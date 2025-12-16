import { MainLayout } from "@/components/layout/MainLayout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";
import { exercises } from "@/data/exercises";

function AttemptChart({ attempts = [] }: { attempts: any[] }) {
  if (!attempts.length) return <div className="text-sm text-muted-foreground">No attempts yet</div>;

  const w = 560;
  const h = 200;
  const margin = { top: 12, right: 12, bottom: 36, left: 36 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const values = attempts.map((a) => (typeof a.percent === 'number' ? a.percent : Math.round((a.score / (a.max_score || 1)) * 100)));
  const n = values.length;

  const points = values.map((v, i) => {
    const x = margin.left + (n === 1 ? innerW / 2 : (i / (n - 1)) * innerW);
    const y = margin.top + (1 - v / 100) * innerH;
    return { x, y, v, i };
  });

  const yGrid = [0, 25, 50, 75, 100];

  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      {/* Y grid lines and labels */}
      {yGrid.map((g) => {
        const y = margin.top + (1 - g / 100) * innerH;
        return (
          <g key={g}>
            <line x1={margin.left} x2={margin.left + innerW} y1={y} y2={y} stroke="currentColor" strokeOpacity={0.06} />
            <text x={8} y={y + 4} fontSize={11} fill="currentColor" opacity={0.6}>{g}%</text>
          </g>
        );
      })}

      {/* X axis labels */}
      {points.map((p, idx) => (
        <text key={idx} x={p.x} y={h - 6} fontSize={11} fill="currentColor" opacity={0.7} textAnchor="middle">
          {new Date(attempts[idx].completed_at).toLocaleDateString()}
        </text>
      ))}

      {/* Line */}
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points.map((p) => `${p.x},${p.y}`).join(" ")}
      />

      {/* Points */}
      {points.map((p, idx) => (
        <g key={idx}>
          <circle cx={p.x} cy={p.y} r={4} fill="white" stroke="currentColor" strokeWidth={1} />
          <title>{`${new Date(attempts[idx].completed_at).toLocaleString()} — ${p.v}%`}</title>
        </g>
      ))}
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
          <AttemptChart attempts={attempts} />
        </div>

        <div className="space-y-2">
          {attempts.map((a) => (
            <div key={a.id} className="rounded-xl p-4 bg-muted/50 flex items-center justify-between">
              <div>
                <div className="font-medium">{new Date(a.completed_at).toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Score: {a.score}/{a.max_score}</div>
              </div>
                <div className="text-sm text-muted-foreground">{(typeof a.percent === 'number' ? a.percent : Math.round((a.score / (a.max_score || 1)) * 100))}%</div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
