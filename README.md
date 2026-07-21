# N. Abhiram — Portfolio

A dark, glassmorphic, Apple-inspired portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Stack

- **React 18 + TypeScript** — component structure in `src/components`
- **Vite** — dev server & build
- **Tailwind CSS** — theming via `tailwind.config.js` (colors, fonts, radius all pulled from the brief)
- **Framer Motion** — page-load stagger, scroll reveals, project card transitions
- **lucide-react** + **react-icons** — icon set
- **@emailjs/browser** — contact form (needs your own EmailJS keys, see below)
- Native `<canvas>` particle field for the ambient background (kept dependency-free instead of pulling in three.js for a subtle effect — swap in `three` if you want a fuller 3D scene)

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
```

## Things to fill in with your own details

1. **GitHub stats** — open `src/components/Certifications.tsx` and set:
   ```ts
   const GITHUB_USERNAME = 'your-github-username'
   ```
   This pulls repo count, followers, and your 5 latest repos live from the public GitHub API — no key needed.

2. **LeetCode stats** — LeetCode has no public CORS-enabled API, so the numbers in `Certifications.tsx` are placeholders. Either hardcode your real stats, or stand up a small serverless function that proxies LeetCode's GraphQL endpoint and fetch from that instead.

3. **Contact form / EmailJS** — open `src/components/Contact.tsx` and fill in:
   ```ts
   const EMAILJS_SERVICE_ID = 'your_service_id'
   const EMAILJS_TEMPLATE_ID = 'your_template_id'
   const EMAILJS_PUBLIC_KEY = 'your_public_key'
   ```
   Get these from your [EmailJS dashboard](https://www.emailjs.com/). Until they're set, the form falls back to opening the visitor's email client with a pre-filled message.

4. **Resume PDF** — drop your real PDF at `public/resume.pdf`. `src/components/Resume.tsx` already links the download button to it.

5. **Real links** — update the GitHub/LinkedIn/email/LeetCode URLs in `src/components/Hero.tsx`, and the `demoUrl` / `repoUrl` fields in `src/data/projects.ts`.

6. **OG image** — add a real `public/og-image.png` (1200×630) to replace the placeholder reference in `index.html`.

## Deploying to Vercel

```bash
npm run build
```
Then either connect the repo in the Vercel dashboard (it auto-detects Vite) or run `vercel` from the project root. Build command: `npm run build`, output directory: `dist`.

## Structure

```
src/
  components/     # one component per section + shared UI (Navbar, Loader, Reveal, CountUp, etc.)
  data/           # skills.ts, projects.ts — edit content here without touching component code
  hooks/          # useTypedText.ts — the hero typing effect
  App.tsx
  main.tsx
  index.css       # Tailwind directives + custom CSS (glass, gradients, cursor, etc.)
```
