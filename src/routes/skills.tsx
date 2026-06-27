import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BentoCard } from "@/components/BentoCard";
import { Code2, CircuitBoard, Cpu, Radio, Globe, Network, Brain, Wrench } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Andrew Ateny Magok" },
      { name: "description", content: "Core competencies across software engineering, electronics, hardware-software integration, and industrial automation." },
      { property: "og:title", content: "Skills — Andrew Ateny Magok" },
      { property: "og:description", content: "Software, electronics, embedded, automation." },
    ],
  }),
  component: Skills,
});

const categories = [
  { icon: Code2, title: "Software Engineering", items: ["Object-oriented programming", "Data structures & algorithms", "System design"] },
  { icon: CircuitBoard, title: "Electronics & Instrumentation", items: ["Sensor integration", "Circuit design", "Signal processing", "Calibration"] },
  { icon: Cpu, title: "Hardware-Software Integration", items: ["Embedded systems", "Microcontrollers", "Real-time data acquisition"] },
  { icon: Radio, title: "Industrial Automation", items: ["Process control systems", "Automation frameworks", "Diagnostic testing"] },
];

const extra = [
  { icon: Globe, label: "Website Design" },
  { icon: Network, label: "Networking" },
  { icon: Brain, label: "AI" },
  { icon: Wrench, label: "Software Maintenance" },
];

function Skills() {
  return (
    <>
      <PageHero eyebrow="Skills" title="Core competencies, end to end.">
        From writing optimized algorithms to designing precise electronic circuit interfaces —
        here's the toolkit I've been sharpening.
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((c, i) => (
            <BentoCard key={c.title} delay={i * 0.05}>
              <c.icon className="mb-4 h-6 w-6 text-primary-glow" />
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <ul className="mt-3 space-y-2">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary-glow" />
                    {it}
                  </li>
                ))}
              </ul>
            </BentoCard>
          ))}
        </div>
        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Also working with</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {extra.map((e) => (
              <span key={e.label} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm backdrop-blur transition-colors hover:border-primary/60 hover:text-primary-glow">
                <e.icon className="h-4 w-4" />
                {e.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
