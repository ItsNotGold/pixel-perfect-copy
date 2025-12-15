import { useEffect, useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, Link } from "react-router-dom";
import { Crown } from "lucide-react";

export default function ManageAccount() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    setEmail(user.email || "");
    setDisplayName(user.user_metadata?.display_name || "");
  }, [user, navigate]);

  const save = async () => {
    if (!user) return;
    setLoading(true);
    try {
      if (displayName) {
        const { error } = await supabase.from("profiles").upsert({ user_id: user.id, display_name: displayName });
        if (error) throw error;
      }

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
