import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

// Stripe price IDs
export const STRIPE_PRICES = {
  monthly: "price_1SeNqJ10Hanz6cnoQsHfQV9r",
  yearly: "price_1SeNqW10Hanz6cnoo9HpAska",
};

interface SubscriptionContextType {
  isSubscribed: boolean;
  isAdmin: boolean;
  isPremium: boolean;
  planType: "free" | "monthly" | "yearly";
  subscriptionEnd: string | null;
  loading: boolean;
  checkSubscription: () => Promise<void>;
  canAttemptExercise: (exerciseId: string) => Promise<boolean>;
  getTodayAttemptCount: (exerciseId: string) => Promise<number>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [planType, setPlanType] = useState<"free" | "monthly" | "yearly">("free");
  const [subscriptionEnd, setSubscriptionEnd] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const checkSubscription = async () => {
    if (!user) {
      setIsSubscribed(false);
      setIsAdmin(false);
      setPlanType("free");
      setSubscriptionEnd(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      // Check if user is in admin list by display_name
      const { data: profile } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("user_id", user.id)
        .single();

      if (profile?.display_name) {
        const { data: adminUser } = await (supabase as any)
          .from("admin_users")
          .select("id")
          .eq("display_name", profile.display_name)
          .single();

        if (adminUser) {
          setIsAdmin(true);
          setIsSubscribed(true);
          setPlanType("monthly"); // Admins get premium access
          setLoading(false);
          return;
        }
      }

      // Check Stripe subscription via edge function
      // Use the user's access token so the edge function can identify the Supabase user
      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData?.session?.access_token;
      if (!token) {
        console.warn("No access token available for subscription check");
        setIsSubscribed(false);
        setPlanType("free");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.functions.invoke("check-subscription", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (error) {
        // If the edge function returns 401, the token might be invalid/expired — don't crash the app
        console.error("Error checking subscription:", error);
        setIsSubscribed(false);
        setPlanType("free");
      } else if (data?.subscribed) {
        setIsSubscribed(true);
        setPlanType(data.plan_type || "monthly");
        setSubscriptionEnd(data.subscription_end || null);
      } else {
        setIsSubscribed(false);
        setPlanType("free");
      }
    } catch (err) {
      console.error("Subscription check error:", err);
      setIsSubscribed(false);
      setPlanType("free");
    } finally {
      setLoading(false);
    }
  };

  const getTodayAttemptCount = async (exerciseId: string): Promise<number> => {
    if (!user) return 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString();

    const { count, error } = await supabase
      .from("exercise_attempts")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("exercise_id", exerciseId)
      .gte("completed_at", todayStr);

    if (error) {
      console.error("Error getting attempt count:", error);
      return 0;
    }

    return count || 0;
  };

  const MAX_FREE_ATTEMPTS_PER_EXERCISE = 5;

  const canAttemptExercise = async (exerciseId: string): Promise<boolean> => {
    // Premium users and admins can always attempt
    if (isSubscribed || isAdmin) return true;

    // Free users: check attempts today and allow up to MAX_FREE_ATTEMPTS_PER_EXERCISE
    const count = await getTodayAttemptCount(exerciseId);
    return count < MAX_FREE_ATTEMPTS_PER_EXERCISE;
  };

  useEffect(() => {
    checkSubscription();
  }, [user]);

  // Refresh subscription status periodically
  useEffect(() => {
    if (!user) return;

    const interval = setInterval(checkSubscription, 60000); // Every minute
    return () => clearInterval(interval);
  }, [user]);

  const isPremium = isSubscribed || isAdmin;

  return (
    <SubscriptionContext.Provider
      value={{
        isSubscribed,
        isAdmin,
        isPremium,
        planType,
        subscriptionEnd,
        loading,
        checkSubscription,
        canAttemptExercise,
        getTodayAttemptCount,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error("useSubscription must be used within a SubscriptionProvider");
  }
  return context;
}
