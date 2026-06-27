import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BentoCard } from "@/components/BentoCard";
import { Mail, Phone, Copy, Check, Send } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Andrew Ateny Magok" },
      { name: "description", content: "Get in touch with Andrew Ateny Magok by email or phone." },
      { property: "og:title", content: "Contact — Andrew Ateny Magok" },
      { property: "og:description", content: "Let's collaborate on something precise." },
    ],
  }),
  component: Contact,
});

const EMAIL = "andrewateny@gmail.com";
const PHONE = "0980373802";

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build something precise.">
        Reach me directly or drop a quick message — I read everything.
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <CopyCard icon={<Mail className="h-5 w-5 text-primary-glow" />} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
          <CopyCard icon={<Phone className="h-5 w-5 text-primary-glow" />} label="Phone" value={PHONE} href={`tel:${PHONE}`} display="0980 373 802" />
        </div>
        <ContactForm />
      </section>
    </>
  );
}

function CopyCard({ icon, label, value, href, display }: { icon: ReactNode; label: string; value: string; href: string; display?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <BentoCard>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            {icon}
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
          </div>
          <a href={href} className="mt-2 block truncate font-display text-lg font-semibold hover:text-primary-glow">
            {display ?? value}
          </a>
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="shrink-0 rounded-full border border-border bg-card/60 p-2 transition-colors hover:border-primary/60 hover:text-primary-glow"
          aria-label={`Copy ${label}`}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </BentoCard>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const body = `From: ${name} <${email}>\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio inquiry from " + name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-border/60 bg-card/60 p-6 backdrop-blur sm:p-8">
      <h2 className="font-display text-xl font-bold">Send a message</h2>
      <p className="mt-1 text-sm text-muted-foreground">Opens your mail client with the message prefilled.</p>
      <div className="mt-6 space-y-4">
        <Field label="Your name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Message</label>
          <textarea name="message" required rows={5} className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" placeholder="Tell me about your project, role, or idea..." />
        </div>
        <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]">
          {sent ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
          {sent ? "Mail client opened" : "Send message"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{label}</label>
      <input name={name} type={type} required={required} className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
    </div>
  );
}
