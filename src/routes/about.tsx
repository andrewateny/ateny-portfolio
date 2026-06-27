import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BentoCard } from "@/components/BentoCard";
import { Compass, Target, Layers } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Andrew Ateny Magok" },
      { name: "description", content: "Dual-degree student pursuing CS and Electronics & Instrumentation, building at the intersection of software and hardware." },
      { property: "og:title", content: "About — Andrew Ateny Magok" },
      { property: "og:description", content: "A holistic, full-stack perspective on engineering." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Bridging abstract software and concrete hardware.">
        I'm Andrew Ateny Magok — a dual-degree student pursuing a B.S. in Computer Science at
        Starford International University alongside a B.S. in Applied and Industrial Sciences
        (Electronics & Instrumentation) at the University of Juba.
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <BentoCard>
            <Compass className="mb-3 h-5 w-5 text-primary-glow" />
            <h3 className="font-display font-semibold">The mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Master both the digital logic that processes data and the physical systems that capture it.
            </p>
          </BentoCard>
          <BentoCard delay={0.05}>
            <Layers className="mb-3 h-5 w-5 text-primary-glow" />
            <h3 className="font-display font-semibold">The perspective</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A holistic, full-stack view of engineering — from optimized algorithms to precise
              circuit interfaces.
            </p>
          </BentoCard>
          <BentoCard delay={0.1}>
            <Target className="mb-3 h-5 w-5 text-primary-glow" />
            <h3 className="font-display font-semibold">The intersection</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              I thrive where software meets hardware: IoT, smart automation, robotics, and embedded systems.
            </p>
          </BentoCard>
        </div>
        <div className="mt-12 rounded-3xl border border-border/60 bg-card/60 p-8 backdrop-blur sm:p-12">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">My academic journey</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Degree 01</p>
              <h3 className="mt-2 font-display text-lg font-semibold">B.S. Computer Science</h3>
              <p className="text-sm text-muted-foreground">Starford International University</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Degree 02</p>
              <h3 className="mt-2 font-display text-lg font-semibold">B.S. Applied & Industrial Sciences</h3>
              <p className="text-sm text-muted-foreground">Electronics & Instrumentation · University of Juba</p>
            </div>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            This unique combination allows me to approach engineering challenges with a holistic,
            full-stack perspective — from writing optimized algorithms to designing precise
            electronic circuit interfaces. I'm always open to collaborating on innovative
            technical projects that demand both a coder's logic and an engineer's precision.
          </p>
        </div>
      </section>
    </>
  );
}
