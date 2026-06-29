import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Code2,
  CircuitBoard,
  Radio,
  Mail,
  Phone,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { BentoCard } from "@/components/BentoCard";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { SocialLinks } from "@/components/SocialLinks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andrew Ateny Magok — Software Engineer & Instrumentation Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Andrew Ateny Magok — dual-degree student bridging software architecture and electronics instrumentation.",
      },
      { property: "og:title", content: "Andrew Ateny Magok — Portfolio" },
      {
        property: "og:description",
        content: "Bridging software architecture and physical hardware.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute top-40 right-0 h-[400px] w-[400px] rounded-full bg-primary-glow/20 blur-[120px]" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-glow" />
              </span>
              Available for collaborations
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            >
              Andrew Ateny{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                Magok
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              Software Engineer & Systems Instrumentation Specialist — bridging
              abstract software architecture with the physical hardware that captures the world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
              >
                View skills <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:border-primary/60 hover:text-primary-glow"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>

          {/* Hero side card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl border border-border/60 bg-card/60 p-6 backdrop-blur-xl"
          >
            <div className="absolute -inset-px -z-10 rounded-3xl bg-[image:var(--gradient-primary)] opacity-30 blur-xl" />
            <div className="flex flex-col items-center text-center">
              <ProfileAvatar size="lg" />
              <p className="mt-5 font-display text-base font-semibold">Andrew Ateny Magok</p>
              <p className="text-xs text-muted-foreground">CS · Electronics & Instrumentation</p>
              <div className="mt-4">
                <SocialLinks size="sm" />
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm">
              <Row label="University" value="Starford International" />
              <Row label="University" value="University of Juba" />
              <Row label="Focus" value="IoT · Embedded · Automation" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Overview</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Where digital logic meets physical systems
          </h2>
        </div>
        <div className="grid auto-rows-[minmax(160px,auto)] grid-cols-1 gap-4 md:grid-cols-4">
          <BentoCard className="md:col-span-2 md:row-span-2">
            <Sparkles className="mb-4 h-6 w-6 text-primary-glow" />
            <h3 className="font-display text-xl font-semibold">A holistic, full-stack perspective</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              From writing optimized algorithms to designing precise electronic circuit interfaces,
              I approach engineering with both a coder's logic and an engineer's precision.
              My mission: master the digital logic that processes data and the physical systems that capture it.
            </p>
          </BentoCard>

          <BentoCard delay={0.05}>
            <Code2 className="mb-3 h-5 w-5 text-primary-glow" />
            <h3 className="font-display font-semibold">Software Engineering</h3>
            <p className="mt-1 text-xs text-muted-foreground">OOP · DSA · System design</p>
          </BentoCard>

          <BentoCard delay={0.1}>
            <CircuitBoard className="mb-3 h-5 w-5 text-primary-glow" />
            <h3 className="font-display font-semibold">Electronics</h3>
            <p className="mt-1 text-xs text-muted-foreground">Sensors · Circuits · Signals</p>
          </BentoCard>

          <BentoCard delay={0.15}>
            <Cpu className="mb-3 h-5 w-5 text-primary-glow" />
            <h3 className="font-display font-semibold">Embedded Systems</h3>
            <p className="mt-1 text-xs text-muted-foreground">MCUs · Real-time DAQ</p>
          </BentoCard>

          <BentoCard delay={0.2}>
            <Radio className="mb-3 h-5 w-5 text-primary-glow" />
            <h3 className="font-display font-semibold">Industrial Automation</h3>
            <p className="mt-1 text-xs text-muted-foreground">Process control · Diagnostics</p>
          </BentoCard>

          <BentoCard className="md:col-span-2" delay={0.1}>
            <GraduationCap className="mb-3 h-5 w-5 text-primary-glow" />
            <h3 className="font-display font-semibold">Dual-degree journey</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              B.S. Computer Science · Starford International University
              <br />
              B.S. Applied & Industrial Sciences (Electronics & Instrumentation) · University of Juba
            </p>
          </BentoCard>

          <BentoCard className="md:col-span-2" delay={0.15} glow>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">Get in touch</p>
            <h3 className="mt-2 font-display text-lg font-semibold">Let's build something precise.</h3>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="mailto:andrewateny@gmail.com" className="flex items-center gap-2 hover:text-primary-glow">
                <Mail className="h-4 w-4" /> andrewateny@gmail.com
              </a>
              <a href="tel:+211980373801" className="flex items-center gap-2 hover:text-primary-glow">
                <Phone className="h-4 w-4" /> +211 980 373 801
              </a>
            </div>
          </BentoCard>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-t border-border/40 pt-3 first:border-0 first:pt-0">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="truncate text-right font-medium">{value}</span>
    </div>
  );
}
