import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BentoCard } from "@/components/BentoCard";
import { Wifi, Factory, Bot, Microchip, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/focus")({
  head: () => ({
    meta: [
      { title: "Future Focus — Andrew Ateny Magok" },
      { name: "description", content: "Actively building in IoT, smart industrial automation, robotics, and embedded systems engineering." },
      { property: "og:title", content: "Future Focus — Andrew Ateny Magok" },
      { property: "og:description", content: "IoT, automation, robotics, embedded." },
    ],
  }),
  component: Focus,
});

const areas = [
  { icon: Wifi, title: "Internet of Things", desc: "Connected devices, edge sensing, and cloud-tethered telemetry." },
  { icon: Factory, title: "Smart Industrial Automation", desc: "Process control, automation frameworks, and diagnostic testing." },
  { icon: Bot, title: "Robotics", desc: "Motion, perception, and control systems built on real-time data." },
  { icon: Microchip, title: "Embedded Systems", desc: "Microcontrollers, firmware, and tight hardware-software loops." },
];

function Focus() {
  return (
    <>
      <PageHero eyebrow="Future Focus" title="Where I'm headed next.">
        I thrive in the intersection of software and hardware. These are the spaces I'm actively
        building in and seeking opportunities around.
      </PageHero>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {areas.map((a, i) => (
            <BentoCard key={a.title} delay={i * 0.05}>
              <a.icon className="mb-4 h-6 w-6 text-primary-glow" />
              <h3 className="font-display text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
            </BentoCard>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-border/60 bg-card/60 p-8 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h3 className="font-display text-xl font-bold sm:text-2xl">Open to collaboration.</h3>
            <p className="mt-1 text-sm text-muted-foreground">Innovative technical projects that demand both logic and precision.</p>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
            Reach out <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
