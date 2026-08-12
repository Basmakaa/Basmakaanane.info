# Basma Kaanane — Portfolio

A modern, 3D, scroll-driven portfolio built with **Next.js 14 · TypeScript ·
Tailwind CSS · Framer Motion · React Three Fiber**.

## Features

- 🧑‍🚀 **3D avatar hero** — glowing conic ring, orbiting skill tags, particle
  aura, and a mouse-tracking tilt.
- 🌌 **WebGL background** — animated starfield + floating distorted orbs that
  react to your cursor (React Three Fiber).
- 🪄 **Smooth scrolling** (Lenis) with parallax, scroll-reveal, and a
  horizontal scroll-driven Experience timeline.
- 💜 Sections: Hero → About → Experience → Featured (OptiLiftAI) → Projects →
  Recognition (Silicon Valley) → Passions → Contact.
- ♿ Respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Add your photo

Drop your headshot into `public/avatar.jpg` (square-ish, 800×800px+). The hero
frames it automatically. Until then, a stylized silhouette placeholder shows.
To use a different path/filename, edit `profile.avatar` in `lib/data.ts`.

## Editing content

**All copy lives in [`lib/data.ts`](lib/data.ts)** — name, roles, about text,
experience, projects, passions, and the recognition highlights. Update that one
file to change what the site says. A few items (Silicon Valley fellowship
wording, exact dates) are inferred from your previous site — please verify them.

## Deploy

- **Vercel** (recommended): push to GitHub, import the repo at vercel.com — zero
  config for Next.js.
- Your old static site is preserved at `public/legacy-site.html`.

## Structure

```
app/             layout, global styles, page composition
components/       Hero, Avatar3D, Navbar, About, Experience, Featured,
                 Projects, Highlights, Passions, Contact, Footer
components/three  Scene + SceneBackground (WebGL)
components/ui     SectionHeading, TiltCard, MagneticButton
lib/data.ts      ← all your content
```
