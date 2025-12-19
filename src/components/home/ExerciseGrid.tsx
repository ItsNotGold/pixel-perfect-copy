import { Link } from "react-router-dom";
import { exercises } from "@/data/exercises";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function ExerciseGrid() {
  return (
    <section id="exercises" className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl text-foreground sm:text-4xl">
            5 Powerful Exercises
          </h2>
          <p className="text-lg text-muted-foreground">
            Each exercise targets a specific communication skill
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exercises.map((exercise, index) => {
            const Icon = exercise.icon;
            return (
              <Link
                key={exercise.id}
                to={exercise.path}
                className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-secondary"
                style={{ animationDelay: `${index * 0.08 + 0.08}s`, animationFillMode: "forwards" }}
              >
                {/* Exercise Number Badge */}
                <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                  {exercise.number}
                </div>

                {/* Icon with Gradient Background */}
                <div
                  className={cn(
                    "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",
                    exercise.color
                  )}
                >
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="mb-1 font-display text-lg text-foreground group-hover:text-primary transition-colors">
                  {exercise.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-primary/80">
                  {exercise.goal}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {exercise.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  Start Exercise
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
