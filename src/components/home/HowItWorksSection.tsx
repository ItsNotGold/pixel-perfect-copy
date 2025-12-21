import { CheckCircle2, Lightbulb, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Choose an Exercise",
    description: "Pick from 5 carefully designed exercises targeting different communication skills.",
  },
  {
    icon: Lightbulb,
    title: "Practice Daily",
    description: "Complete quick 2-5 minute sessions. Consistency beats intensity for lasting improvement.",
  },
  {
    icon: CheckCircle2,
    title: "Get Instant Feedback",
    description: "Receive scores, tips, and AI-powered suggestions to improve your performance.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Watch your skills grow with detailed analytics, streaks, and mastery levels.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl text-foreground sm:text-4xl">
            How VerbFlow Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, effective approach to building communication excellence
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group relative rounded-2xl glass p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-fade-up opacity-0 relative"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full gradient-hero text-sm font-bold text-primary-foreground shadow-glow">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mb-2 font-display text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
