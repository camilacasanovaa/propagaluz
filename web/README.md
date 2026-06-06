# Propagaluz · web

The propagaluz.com site. Built on Next.js 16 (App Router), React 19, Tailwind v4, Motion.dev. Deploys to Vercel.

Architecture, content rules, and design tokens are in the parent project — start with `../ARCHITECTURE.md`, `../DESIGN.md`, `../BRAND.md`.

## Run locally

```bash
bun install
cp .env.example .env.local   # fill in Resend keys (or leave empty for dev)
bun run dev                  # → http://localhost:3000
```

## Build

```bash
bun run build                # production build
bun run start                # serve the production build locally
```

## Routes

Spanish at root, English at `/en/...`. Per the Spanish-primary / English-native-second decision.

| Spanish | English |
|---|---|
| `/` | `/en` |
| `/origen` | `/en/origin` |
| `/manifiesto` | `/en/manifesto` |
| `/donar` | `/en/donate` |
| `/contacto` | `/en/contact` |
| `/privacidad` | `/en/privacy` |
| `/aviso-legal` | `/en/legal` |

## Structure

- `src/app/(es)/` — Spanish routes (route group, not in URL).
- `src/app/en/` — English routes.
- `src/app/api/waitlist/` — Resend-backed waitlist email capture.
- `src/components/` — shared components (Header, Footer, Logo, DonationWaitlist).
- `src/components/home/` — homepage sections (Hero, ManifestoPreview, OriginTeaser, HowItWorks, Transparency).
- `src/lib/cn.ts` — Tailwind class composition helper.
- `public/family/` — cleared-for-public family photographs (mirrored from `../assets/photography/family/`).

## Design tokens

All tokens (palette, type, scale, radii, shadows) live in `src/app/globals.css` under `@theme`. Tailwind v4 reads them and exposes utility classes like `bg-paper`, `text-luz`, `font-display`, `rounded-(--radius-card)`.

## Deploy to Vercel

```bash
vercel link                  # one-time: link to a Vercel project
vercel --prod                # deploy to production
```

The `propagaluz.com` domain is registered. Add it to the Vercel project's domain settings after the first deploy.

### Required environment variables (Vercel dashboard)

- `RESEND_API_KEY`
- `RESEND_AUDIENCE_ID`

When Stripe goes live for Mode B donations, add the Stripe keys.
