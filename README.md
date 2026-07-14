# Asra Zia — AI Portfolio

A premium, dark-themed portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

> ⚠️ **Important:** This code was written in a sandboxed environment with no internet
> access, so `npm install` could not be run or verified here. Follow the steps below on
> your own machine — the setup is completely standard.

---

## 1. Installation

Make sure you have **Node.js 18.18+** installed, then:

```bash
cd portfolio
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 3. Build for production

```bash
npm run build
npm start
```

---

## 4. Deployment (Netlify Free)

1. Push this project to a GitHub repository.
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import an existing project**.
3. Connect your GitHub repo.
4. Netlify auto-detects Next.js. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** leave default (Netlify's Next.js runtime handles this automatically)
5. Click **Deploy**. That's it — no paid plan required.

---

## 5. Project Structure

```
app/               → Pages, layout, global styles, metadata (SEO, sitemap, 404)
components/        → All UI sections (Hero, About, Skills, Projects, etc.)
data/portfolio.ts  → ALL your content lives here — edit this file to update anything
public/            → Profile photo, resume PDF, robots.txt
```

## 6. Customization Guide

- **All text, links, projects, skills, experience, and certifications** live in
  `data/portfolio.ts`. You never need to touch component files to update content.
- **To add a new project:** add an object to the `projects` array in `data/portfolio.ts`
  following the existing shape. It will automatically appear as a card and case-study modal.
- **To swap the profile photo or resume:** replace `public/profile.jpeg` and
  `public/resume.pdf` with your own files (keep the same filenames, or update the paths
  in `data/portfolio.ts`).
- **Colors, fonts, spacing:** defined in `tailwind.config.ts` and `app/globals.css`,
  matching the design system spec (dark premium theme, purple/blue/cyan accents,
  Space Grotesk + Inter + JetBrains Mono).

## 7. Contact Form — connecting it for real

The contact form in `components/Contact.tsx` currently shows a success state on submit
but does not send anything anywhere (no backend was requested yet). To make it functional,
pick one free option:

**Option A — Formspree** (easiest)
1. Create a free form at [formspree.io](https://formspree.io)
2. Replace the `handleSubmit` function with a `fetch` POST to your Formspree endpoint.

**Option B — EmailJS**
1. Create a free account at [emailjs.com](https://emailjs.com)
2. Install it: `npm install @emailjs/browser`
3. Use their `send()` method inside `handleSubmit`.

## 8. AI Welcome Widget

The bottom-right widget (`components/AIWelcomeWidget.tsx`) uses the browser's built-in
**Web Speech API** — completely free, no API key or backend needed. It:
- Speaks the welcome greeting once per browser session (first visit)
- Shows an animated glowing avatar + typing subtitle while speaking
- Includes a mute button and a replay button, and is always visible (bottom-right)

To change the greeting or voice preference, edit `aiWidget` in `data/portfolio.ts`.
Note: voice **quality and exact voice used depend on the visitor's browser/OS** — this
is a browser limitation, not something we control from code. For a studio-quality,
lip-synced avatar video instead, a paid service (e.g. D-ID, HeyGen) would be needed —
ask if you'd like that upgraded later.

## 9. Known limitations / next steps

- Achievements/hackathons section was intentionally skipped (none provided yet) —
  add an `achievements` array to `data/portfolio.ts` and a matching section component
  whenever you have some to show.
- Blog and YouTube sections were not built yet since no content was confirmed —
  same pattern: add data + a section component when ready.
- Contact form needs Formspree/EmailJS wiring (see #7).
- Run `npm install` and `npm run build` locally before deploying to catch any
  environment-specific issues, since this couldn't be verified in this sandbox.

---

Built following the **PREMIUM AI PORTFOLIO MASTER PROMPT** spec — every project, skill,
experience entry, and certification listed here was explicitly confirmed and verified.
No placeholder or fabricated content was used.
