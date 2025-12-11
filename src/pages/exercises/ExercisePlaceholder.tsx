import { useParams, Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { exercises } from "@/data/exercises";
import { ArrowLeft, Construction } from "lucide-react";

export default function ExercisePlaceholder() {
  const { exerciseId } = useParams();
  const exercise = exercises.find((e) => e.id === exerciseId);

  if (!exercise) {
    return (
      <MainLayout>
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display text-foreground">Exercise not found</h1>
            <Link to="/">
              <Button variant="hero" className="mt-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  const Icon = exercise.icon;

  return (
    <MainLayout>
      <div className="mx-auto max-w-2xl px-6 py-16 text-center">
        <div
          className={`mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${exercise.color} shadow-lg animate-float`}
        >
          <Icon className="h-10 w-10 text-primary-foreground" />
        </div>

        <h1 className="mb-4 font-display text-3xl text-foreground">{exercise.title}</h1>
        <p className="mb-2 text-lg font-medium text-primary">{exercise.goal}</p>
        <p className="mb-8 text-muted-foreground">{exercise.description}</p>

        <div className="rounded-2xl glass p-8 mb-8">
          <div className="mb-4 flex items-center justify-center gap-2 text-muted-foreground">
            <Construction className="h-5 w-5" />
            <span className="font-medium">Coming Soon</span>
          </div>
          <p className="text-sm text-muted-foreground">
            This exercise is being developed. Check back soon or try one of our other exercises!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="glass" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Link to="/exercise/precision-swap">
            <Button variant="hero" size="lg">
              Try Precision Swap
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
