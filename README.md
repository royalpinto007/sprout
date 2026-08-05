# Sprout

A design-forward demo site for a concept **wellness / habit app**, built to a
production bar. Soft and calm — pastel blobs on mist white, rounded Nunito body,
a warm Fraunces display, and a fully CSS-composed phone mockup showing a real
habit-tracker UI.

**Live:** [sprout.signalizeai.org](https://sprout.signalizeai.org)

![Sprout](https://sprout.signalizeai.org/og.png)

## Highlights

- **Static-first, no-JS-complete.** Every page is server-rendered by Astro and
  reads identically with JavaScript disabled; the nav is the only island.
- **Five pages:** home, features (with an FAQ), pricing (three tiers + FAQ),
  stories, and a 404.
- **App-store energy without assets.** The phone mockup — device frame, progress
  ring, streaks, and check-ins — is composed entirely in CSS/HTML from the data
  model, so there are no screenshots to ship.
- **Native disclosure FAQs** via `<details>`, so they work with zero JS.
- **Gentle motion.** A floating phone, soft blurred blobs, CSS entrance
  animations visible without JS, reveals gated behind `.js`, and full
  `prefers-reduced-motion` support.

## Stack

Astro 7 (SSG + islands) · React 19 island · TypeScript · Tailwind v4 ·
Lenis smooth scroll · Vitest · oxlint · Prettier · Cloudflare Pages.

## Develop

```bash
npm install
npm run dev
```

## Checks

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

## License

MIT © 2026 Royal Simpson Pinto. Sprout is a design concept, not a shipping app.
