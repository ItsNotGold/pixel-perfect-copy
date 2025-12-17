import { MainLayout } from "@/components/layout/MainLayout";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { achievementDefs } from "@/data/achievements";

export default function Achievements() {
  const { user } = useAuth();
  const [unlocked, setUnlocked] = useState<Record<string, { created_at: string }>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!user) return;
      setLoading(true);
      try {
        const { data } = await supabase.from("achievements").select("achievement_type, created_at").eq("user_id", user.id);
        if (!mounted) return;
        const setData: Record<string, { created_at: string }> = {};
        (data || []).forEach((d: any) => setData[d.achievement_type] = { created_at: d.created_at });
        setUnlocked(setData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [user]);

  return (
    <MainLayout>
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-6">
          <h1 className="font-display text-2xl mb-1">Achievements</h1>
          <p className="text-muted-foreground">Your unlocked and available achievements</p>
        </div>

        {loading ? (
          <div className="text-muted-foreground">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievementDefs.map((a) => {
              const isUnlocked = Boolean(unlocked[a.id]);
              const unlockedAt = unlocked[a.id]?.created_at;
              const level = a.id.includes(':gold') ? 'gold' : a.id.includes(':silver') ? 'silver' : a.id.includes(':bronze') ? 'bronze' : null;
              const color = level === 'gold' ? 'bg-yellow-400 text-yellow-900' : level === 'silver' ? 'bg-slate-300 text-slate-900' : level === 'bronze' ? 'bg-amber-300 text-amber-900' : 'bg-primary/10 text-foreground';

              return (
                <div key={a.id} className={`rounded-xl p-4 ${isUnlocked ? 'bg-white dark:bg-gray-800 shadow-sm' : 'bg-muted/50'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 shrink-0 rounded-full flex items-center justify-center shadow-md ${color}`}>
                      {level === 'gold' ? '🥇' : level === 'silver' ? '🥈' : level === 'bronze' ? '🥉' : '🏅'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground truncate">{a.title}</div>
                      <div className="text-sm text-muted-foreground truncate">{a.description}</div>
                    </div>
                    <div className="ml-2 text-xs text-muted-foreground">{isUnlocked ? `Unlocked${unlockedAt ? ` • ${new Date(unlockedAt).toLocaleDateString()}` : ''}` : 'Locked'}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
