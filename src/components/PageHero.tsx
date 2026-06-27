import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
