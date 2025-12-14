import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Check, Crown, Zap, Star } from "lucide-react";
import { useSubscription, STRIPE_PRICES } from "@/hooks/useSubscription";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const features = [
  "Unlimited exercise attempts",
  "Track progress across all exercises",
  "Full access to all languages",
  "AI-powered feedback",
  "Detailed analytics",
  "Priority support",
];

export default function Subscription() {
  const { user } = useAuth();
  const { isPremium, isAdmin, planType, subscriptionEnd, loading, checkSubscription } = useSubscription();
  const [checkoutLoading, setCheckoutLoading] = useState<"monthly" | "yearly" | null>(null);
  const [portalLoading, setPortalLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCheckout = async (plan: "monthly" | "yearly") => {
    if (!user) {
      navigate("/auth");
      return;
    }

    setCheckoutLoading(plan);
    try {
      const priceId = plan === "monthly" ? STRIPE_PRICES.monthly : STRIPE_PRICES.yearly;
      
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { priceId },
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      toast({
        title: "Checkout failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setCheckoutLoading(null);
    }
  };

  const handleManageSubscription = async () => {
    setPortalLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("customer-portal");

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (err) {
      console.error("Portal error:", err);
      toast({
        title: "Could not open subscription manager",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setPortalLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
            <Crown className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="mb-3 font-display text-4xl text-foreground">VerbFlow Premium</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock unlimited access to all exercises and supercharge your communication skills
          </p>
        </div>

        {/* Current Status */}
        {isPremium && (
          <div className="mb-8 rounded-2xl glass p-6 text-center animate-scale-in">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="font-display text-xl text-foreground">
                {isAdmin ? "Admin Access" : "Premium Member"}
              </span>
            </div>
            {subscriptionEnd && !isAdmin && (
              <p className="text-sm text-muted-foreground">
                Your subscription renews on {new Date(subscriptionEnd).toLocaleDateString()}
              </p>
            )}
            {isAdmin && (
              <p className="text-sm text-muted-foreground">
                You have complimentary premium access
              </p>
            )}
            {!isAdmin && (
              <Button
                variant="outline"
                className="mt-4"
                onClick={handleManageSubscription}
                disabled={portalLoading}
              >
                {portalLoading ? "Loading..." : "Manage Subscription"}
              </Button>
            )}
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 animate-slide-up">
          {/* Monthly Plan */}
          <div
            className={cn(
              "rounded-2xl glass p-8 relative overflow-hidden transition-all",
              planType === "monthly" && isPremium && "ring-2 ring-primary"
            )}
          >
            {planType === "monthly" && isPremium && (
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                Current Plan
              </div>
            )}
            <div className="mb-6">
              <h3 className="font-display text-2xl mb-2">Monthly</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$5</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className="w-full"
              variant={planType === "monthly" && isPremium ? "outline" : "default"}
              onClick={() => handleCheckout("monthly")}
              disabled={checkoutLoading === "monthly" || (isPremium && planType === "monthly")}
            >
              {checkoutLoading === "monthly" ? (
                "Processing..."
              ) : planType === "monthly" && isPremium ? (
                "Current Plan"
              ) : (
                <>
                  <Zap className="h-4 w-4 mr-2" />
                  Get Monthly
                </>
              )}
            </Button>
          </div>

          {/* Yearly Plan */}
          <div
            className={cn(
              "rounded-2xl glass p-8 relative overflow-hidden transition-all",
              planType === "yearly" && isPremium ? "ring-2 ring-primary" : "ring-2 ring-accent"
            )}
          >
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-medium">
              {planType === "yearly" && isPremium ? "Current Plan" : "Save 40%"}
            </div>
            <div className="mb-6">
              <h3 className="font-display text-2xl mb-2">Yearly</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$3</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Billed $36 annually</p>
            </div>
            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
              onClick={() => handleCheckout("yearly")}
              disabled={checkoutLoading === "yearly" || (isPremium && planType === "yearly")}
            >
              {checkoutLoading === "yearly" ? (
                "Processing..."
              ) : planType === "yearly" && isPremium ? (
                "Current Plan"
              ) : (
                <>
                  <Crown className="h-4 w-4 mr-2" />
                  Get Yearly
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Free Plan Info */}
        <div className="rounded-2xl glass p-6 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="font-display text-lg mb-2">Free Plan</h3>
          <p className="text-muted-foreground text-sm">
            On the free plan, you can try 1 attempt of each exercise per day. Upgrade to Premium for unlimited practice!
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
