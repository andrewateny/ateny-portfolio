import { Facebook, Instagram, Linkedin } from "lucide-react";
import type { ReactNode } from "react";

// TODO: replace # with your real profile URLs
const links: { label: string; href: string; icon: ReactNode; color: string; hover: string }[] = [
  {
    label: "Facebook",
    href: "#",
    color: "#1877F2",
    hover: "hover:bg-[#1877F2]",
    icon: <Facebook className="h-4 w-4" fill="currentColor" />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/211980373801",
    color: "#25D366",
    hover: "hover:bg-[#25D366]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M19.11 4.91A10.05 10.05 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.85-7.02ZM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.83c0 4.54-3.7 8.23-8.26 8.23Zm4.52-6.16c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14 0-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.37 1 2.54.13.16 1.74 2.65 4.21 3.71.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.18-.47-.31Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    color: "#E1306C",
    hover: "",
    icon: <Instagram className="h-4 w-4" />,
  },
  {
    label: "LinkedIn",
    href: "#",
    color: "#0A66C2",
    hover: "hover:bg-[#0A66C2]",
    icon: <Linkedin className="h-4 w-4" fill="currentColor" />,
  },
];

export function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          style={{ color: l.color }}
          className={`group grid ${dim} place-items-center rounded-full border border-border/60 bg-card/60 backdrop-blur transition-all hover:scale-110 hover:text-white hover:border-transparent hover:shadow-[var(--shadow-glow)] ${
            l.label === "Instagram"
              ? "hover:bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)]"
              : l.hover
          }`}
        >
          {l.icon}
        </a>
      ))}
    </div>
  );
}