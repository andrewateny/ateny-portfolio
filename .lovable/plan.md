## Andrew Ateny Magok — Portfolio

A modern, fully responsive single-site portfolio with a Midnight Indigo dark aesthetic, Space Grotesk display + DM Sans body, and a bento-grid driven layout. Built on the existing TanStack Start stack.

### Routes
- `/` — Home: hero + bento overview + featured skills
- `/about` — Full bio, dual-degree journey, mission
- `/skills` — Categorized competencies (Software, Electronics, Hardware-Software, Automation) + tools
- `/focus` — Future focus areas (IoT, Automation, Robotics, Embedded)
- `/contact` — Email, phone, social-ready CTA + form (mailto for now, no backend)

Shared `Header` (sticky, blurred) + `Footer` in `__root.tsx`. Each route gets unique SEO `head()` (title, description, og:title/description).

### Design system (src/styles.css)
- Tokens (oklch): deep midnight bg `#0a0a1a`, surface `#141432`, elevated `#1e1e5a`, primary indigo `#4f46e5`, primary-glow lighter indigo for gradients
- Gradients: `--gradient-primary` (indigo → glow), `--gradient-surface` (radial midnight)
- Shadows: `--shadow-glow` indigo halo, `--shadow-elevated` soft depth
- Typography: Space Grotesk (headings, tracking-tight), DM Sans (body) loaded via `<link>` in `__root.tsx` head
- All colors via semantic tokens — no hardcoded hex in components

### Hero
- Asymmetric layout: name in oversized Space Grotesk with gradient text accent
- Subtitle: "Software Engineer & Systems Instrumentation Specialist"
- Two CTAs: "View skills" + "Get in touch"
- Subtle animated indigo glow orb in background (CSS only)

### Bento grid (home)
- Mixed-size cards: intro blurb (large), dual-degree badge, core competency tiles, contact quick card, focus areas
- Hover: subtle lift + glow border
- Fully responsive: 1 col mobile → 2 col tablet → 4 col desktop with row spans

### Skills page
- Four category cards (Software, Electronics, Hardware-Software, Automation) with icon + bullet list
- Secondary row: Web design, Networking, AI, Software maintenance chips

### Contact
- Email `andrewateny@gmail.com` (mailto)
- Phone `0980373802` (tel:)
- Copy-to-clipboard buttons
- Simple form (name, email, message) that opens mailto with prefilled body — no backend

### Animations
- Framer-motion fade/slide on section enter
- Hover micro-interactions on bento cards
- Restrained — not on every element

### Technical notes
- Install: `framer-motion`, `lucide-react` (likely already present)
- Font loading via `<link>` in `__root.tsx` (NOT CSS @import)
- Replace placeholder `src/routes/index.tsx`
- Add routes: `about.tsx`, `skills.tsx`, `focus.tsx`, `contact.tsx`
- Components: `Header.tsx`, `Footer.tsx`, `BentoCard.tsx`, `SectionHeading.tsx`
- Mobile-first responsive: grid uses `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` with `min-w-0` text containers
- No backend / Lovable Cloud needed