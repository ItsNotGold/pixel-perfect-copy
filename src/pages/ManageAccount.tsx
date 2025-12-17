import { useEffect, useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, Link } from "react-router-dom";
import { Crown } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";
import { achievementDefs, parseAchievementId, highestLevelFromTypes } from "@/data/achievements";

export default function ManageAccount() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { settings, save: saveSettings } = useSettings();
  const [selectedBadges, setSelectedBadges] = useState<string[]>(settings.profile?.selectedBadges || []);
  const [bio, setBio] = useState(settings.profile?.bio || "");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [unlockedMap, setUnlockedMap] = useState<Record<string, any>>({});

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    setEmail(user.email || "");
    setDisplayName(user.user_metadata?.display_name || "");
    (async () => {
      try {
        const { data: profile } = await supabase.from('profiles').select('avatar_url').eq('user_id', user.id).single();
        setAvatarUrl(profile?.avatar_url || '');

        const { data } = await supabase.from('achievements').select('achievement_type, created_at').eq('user_id', user.id);
        const map: Record<string, any> = {};
        (data || []).forEach((d: any) => map[d.achievement_type] = { created_at: d.created_at });
        setUnlockedMap(map);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [user, navigate]);

  // keep local selected badges & bio in sync when settings load
  useEffect(() => {
    setSelectedBadges(settings.profile?.selectedBadges || []);
    setBio(settings.profile?.bio || "");
  }, [settings]);

  const save = async () => {
    if (!user) return;
    setLoading(true);
    try {
      if (displayName) {
        const { error } = await supabase.from("profiles").upsert({ user_id: user.id, display_name: displayName });
        if (error) throw error;
      }

      // save avatar URL to profiles
      if (avatarUrl !== undefined) {
        const { error: avatarError } = await supabase.from('profiles').upsert({ user_id: user.id, avatar_url: avatarUrl });
        if (avatarError) throw avatarError;
      }

      // save selected badges & bio into user_settings.profile
      const nextSettings = { ...(settings || {}), profile: { ...(settings?.profile || {}), selectedBadges, bio } };
      await saveSettings(nextSettings);

      if (email || password) {
        const { error } = await supabase.auth.updateUser({ email: email || undefined, password: password || undefined });
        if (error) throw error;
      }

      toast({ title: "Account updated" });
    } catch (err) {
      console.error(err);
      toast({ title: "Failed to update account" });
    } finally {
      setLoading(false);
    }
  };

  const toggleBadge = (id: string) => {
    setSelectedBadges((prev) => {
      if (prev.includes(id)) return prev.filter((p) => p !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const deleteAccount = async () => {
    if (!user) return;
    if (!confirm("Delete your account and associated settings? This cannot be undone.")) return;
    setLoading(true);
    try {
      // delete profile & settings rows then sign out
      await supabase.from("profiles").delete().eq("user_id", user.id);
      await (supabase.from("user_settings" as any) as any).delete().eq("user_id", user.id);
      await supabase.auth.signOut();
      toast({ title: "Account removed" });
      navigate("/");
    } catch (err) {
      console.error(err);
      toast({ title: "Failed to delete account" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="mb-4 font-display text-3xl">Manage Account</h1>

        <div className="rounded-2xl glass p-6 space-y-4">
          <div>
            <label className="text-sm text-muted-foreground">Display name</label>
            <Input value={displayName} onChange={(e) => setDisplayName(e.currentTarget.value)} />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">Avatar URL</label>
            <Input value={avatarUrl} onChange={(e) => setAvatarUrl(e.currentTarget.value)} placeholder="https://..." />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">Bio</label>
            <Input value={bio} onChange={(e) => setBio(e.currentTarget.value)} placeholder="A short bio" />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">Email</label>
            <Input value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">New password</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="hero" onClick={save} disabled={loading}>
              Save
            </Button>
            <Button variant="destructive" onClick={deleteAccount} disabled={loading}>
              Delete Account
            </Button>
          </div>
          <div className="mt-4">
            <h3 className="font-medium mb-2">Select up to 3 badges to show on your profile</h3>
            <div className="flex flex-wrap gap-2">
              {/* Build list of selectable badges from unlockedMap grouped per exercise */}
              {achievementDefs.filter(a => a.category !== 'exercise').map((a) => (
                unlockedMap[a.id] ? (
                  <button key={a.id} onClick={() => toggleBadge(a.id)} className={`px-3 py-1 rounded ${selectedBadges.includes(a.id) ? 'bg-primary text-primary-foreground' : 'bg-muted/20'}`}>{a.title}</button>
                ) : null
              ))}

              { /* exercise grouped badges: show only one per exercise if unlocked */ }
              {achievementDefs.filter(a => a.category === 'exercise').reduce<Record<string, string[]>>((acc, a) => {
                const ns = parseAchievementId(a.id).key as string;
                acc[ns] = acc[ns] || [];
                acc[ns].push(a.id);
                return acc;
              }, {}) && Object.entries(achievementDefs.filter(a => a.category === 'exercise').reduce<Record<string, string[]>>((acc, a) => { const ns = parseAchievementId(a.id).key as string; acc[ns] = acc[ns] || []; acc[ns].push(a.id); return acc; }, {})).map(([exerciseId, ids]) => {
                const unlockedTypes = ids.filter((id) => unlockedMap[id]);
                if (!unlockedTypes.length) return null;
                // pick highest unlocked level
                const level = highestLevelFromTypes(unlockedTypes);
                const idForStorage = `exercise:${exerciseId}:${level}`;
                const title = achievementDefs.find((d) => d.id.startsWith(`exercise:${exerciseId}`) && d.id.includes(level || ''))?.title || exerciseId;
                return (
                  <button key={exerciseId} onClick={() => toggleBadge(idForStorage)} className={`px-3 py-1 rounded ${selectedBadges.includes(idForStorage) ? 'bg-primary text-primary-foreground' : 'bg-muted/20'}`}>{title}</button>
                );
              })}
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Selected: {selectedBadges.length}/3</div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl glass p-6">
          <h2 className="font-display text-xl mb-3">Profile Preview</h2>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full overflow-hidden bg-muted">
              {avatarUrl ? <img src={avatarUrl} alt="avatar" className="h-full w-full object-cover" /> : <div className="h-full w-full flex items-center justify-center text-muted-foreground">No avatar</div>}
            </div>
            <div>
              <div className="font-medium text-foreground">{displayName || user?.email}</div>
              <div className="text-sm text-muted-foreground">{bio}</div>
              <div className="mt-2 flex items-center gap-2">
                {selectedBadges.map((id) => {
                  const p = parseAchievementId(id);
                  const level = p.level || '';
                  const color = level === 'gold' ? 'bg-yellow-300' : level === 'silver' ? 'bg-slate-300' : level === 'bronze' ? 'bg-amber-300' : 'bg-muted';
                  return <div key={id} className={`h-8 w-8 rounded-full ${color} ring-1 ring-offset-1`} title={id} />;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Link */}
        <div className="mt-6 rounded-2xl glass p-6">
          <div className="flex items-center gap-3 mb-3">
            <Crown className="h-5 w-5 text-primary" />
            <h2 className="font-display text-xl">Subscription</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Manage your subscription plan and unlock unlimited exercise attempts.
          </p>
          <Link to="/subscription">
            <Button variant="outline" className="w-full">
              Manage Subscription
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
