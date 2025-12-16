import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSubscription } from "@/hooks/useSubscription";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Lock, Crown } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";

interface ExerciseGateProps {
  exerciseId: string;
  children: React.ReactNode;
}

export function ExerciseGate({ exerciseId, children }: ExerciseGateProps) {
  const { user } = useAuth();
  const { isPremium, canAttemptExercise, loading } = useSubscription();
  const navigate = useNavigate();
  const [canAccess, setCanAccess] = useState<boolean | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      if (loading) return;
      
      // Non-logged in users can try exercises
      if (!user) {
        setCanAccess(true);
        setChecking(false);
        return;
      }

      // Premium users always have access
      if (isPremium) {
        setCanAccess(true);
        setChecking(false);
        return;
      }

      // Check free tier limit
      const allowed = await canAttemptExercise(exerciseId);
      setCanAccess(allowed);
      setChecking(false);
    };

    checkAccess();
  }, [user, isPremium, loading, exerciseId, canAttemptExercise]);

  if (checking || loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </MainLayout>
    );
  }

  if (canAccess === false) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
          <div className="max-w-md text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <Lock className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="mb-3 font-display text-2xl text-foreground">Daily Limit Reached</h1>
            <p className="text-muted-foreground mb-6">
              You've used your free attempt for this exercise today. Upgrade to Premium for unlimited access to all exercises!
            </p>
            <div className="space-y-3">
              <Button
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                onClick={() => navigate("/subscription")}
              >
                <Crown className="h-4 w-4 mr-2" />
                Upgrade to Premium
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate("/")}
              >
                Try Another Exercise
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Free users can attempt each exercise once per day. Premium unlocks unlimited attempts.
            </p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return <>{children}</>;
}
