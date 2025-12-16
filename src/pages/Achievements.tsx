import { MainLayout } from "@/components/layout/MainLayout";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { achievementDefs } from "@/data/achievements";

export default function Achievements() {
  const { user } = useAuth();
  const [unlocked, setUnlocked] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!user) return;
      setLoading(true);
      try {
        const { data } = await supabase.from("achievements").select("achievement_type").eq("user_id", user.id);
        if (!mounted) return;
        const setData: Record<string, any> = {};
        (data || []).forEach((d: any) => setData[d.achievement_type] = true);
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
            {achievementDefs.map((a) => (
              <div key={a.id} className={`rounded-xl p-4 ${unlocked[a.id] ? 'bg-emerald-50 dark:bg-emerald-900/20' : 'bg-muted/50'}`}>
                <div className="font-medium text-foreground mb-1">{a.title}</div>
                <div className="text-sm text-muted-foreground mb-2">{a.description}</div>
                <div className="text-xs text-muted-foreground">{unlocked[a.id] ? 'Unlocked' : 'Locked'}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
