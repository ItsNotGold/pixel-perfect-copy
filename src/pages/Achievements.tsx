import { MainLayout } from "@/components/layout/MainLayout";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { achievementDefs } from "@/data/achievements";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {achievementDefs.map((a) => {
              const isUnlocked = Boolean(unlocked[a.id]);
              const unlockedAt = unlocked[a.id]?.created_at;
              const level = a.id.includes(":gold") ? "gold" : a.id.includes(":silver") ? "silver" : a.id.includes(":bronze") ? "bronze" : null;
              const color = level === "gold" ? "from-yellow-300 to-yellow-200 text-yellow-900" : level === "silver" ? "from-slate-200 to-slate-100 text-slate-900" : level === "bronze" ? "from-amber-200 to-amber-100 text-amber-900" : "from-primary to-accent text-foreground";

              return (
                <Dialog key={a.id}>
                  <div className="flex items-center justify-center">
                    <DialogTrigger asChild>
                      <button className={`group relative flex h-28 w-28 flex-col items-center justify-center rounded-full p-2 transition-transform hover:scale-105 focus:outline-none ${isUnlocked ? 'ring-2 ring-offset-2 ring-primary/30' : 'opacity-60'}`}>
                        <div className={`absolute -inset-0.5 rounded-full bg-gradient-to-br ${color} blur-sm opacity-30`}></div>
                        <div className={`relative z-10 flex h-full w-full flex-col items-center justify-center rounded-full bg-background p-3 ${isUnlocked ? 'shadow-lg' : 'border border-muted/30'}`}>
                          <div className="text-sm font-semibold text-center px-2">{a.title}</div>
                        </div>
                      </button>
                    </DialogTrigger>
                  </div>

                  <DialogContent>
                    <DialogTitle>{a.title}</DialogTitle>
                    <DialogDescription>
                      <div className="mb-4 text-sm text-muted-foreground">{a.description}</div>
                      <div className="text-sm">
                        Status: {isUnlocked ? <span className="font-medium text-foreground">Unlocked{unlockedAt ? ` • ${new Date(unlockedAt).toLocaleDateString()}` : ''}</span> : <span className="text-muted-foreground">Locked</span>}
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
