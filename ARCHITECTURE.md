# Propagaluz · Site Architecture

The shape of `propagaluz.com`. Pages, routes, content blocks, navigation, user journeys, v1 vs v2 scope. Built on Next.js 15 on Vercel. Bilingual: Spanish primary, English mirror.

## Site purpose · one paragraph

A small, focused site that does three things in this order: **make the reader feel the mission, hand them the family's spine, and let them give.** Built on the manifesto, the handwritten founder's letter, and the family archive. Charity:water's emotional directness in the hero; Max Strong's card-block warmth below the fold; the buttery yellow from the logo as the system color.

## Audiences and intents

| Visitor | Primary question | Primary action |
|---|---|---|
| **Cold donor (most common)** | What is this, why care, who's behind it? | Read manifesto → see family → donate. |
| **Warm donor (Camila's network)** | How do I give? | Quick donate, ~30 seconds. |
| **Partner organization** (Entreculturas, CECODAP, future others) | Are these people credible? What do they want? | Read /origen → Contact. |
| **Press / journalist** | What's the story? | Read /origen → reach out for press kit (v2). |
| **Curious / casual** | Who are these people? | Scroll homepage, leave maybe-impressed. |

The homepage must do honest work for all five — particularly the cold donor, who is the median visitor.

---

## Route map · v1

Spanish at root, English mirrored at `/en/...`. Honors the *Spanish-primary, English-native-second* decision.

| Spanish | English | Purpose |
|---|---|---|
| `/` | `/en` | Home — the foundation in one scroll. |
| `/origen` | `/en/origin` | The full family story + the handwritten letter. |
| `/manifiesto` | `/en/manifesto` | The manifesto, on its own page. |
| `/donar` | `/en/donate` | Donation page (waitlist pre-registration, live post-registration). |
| `/contacto` | `/en/contact` | Contact, partnership inquiries. |
| `/privacidad` | `/en/privacy` | Privacy policy (required for donation forms + GDPR). |
| `/aviso-legal` | `/en/legal` | Spanish *aviso legal* (required by Spanish law for foundations). |

Seven routes per language. Fourteen total. Tight.

---

## Page-by-page · v1

### `/` — Home

One scroll. Whole story.

**1. Hero**
- Single large photograph. **v1 candidate: `Eduardo-Aleman-en-la-rotativa.jpg`** — Eduardo at the rotary press. The family vocation as a single image. (Other candidates in `assets/photography/inbox/INBOX-NOTES.md`.)
- Headline drawn from the manifesto: *"Una palabra puesta en su sitio enciende algo."*
- One-line subhead: *"Acompañamos la educación de los niños venezolanos. Desde Madrid. Hacia Venezuela."*
- **Donation widget** beneath the headline (charity:water pattern): monthly / once toggle, three amount pills (25 € / 50 € / 100 €), custom amount input, yellow **Donar** CTA. In **Mode A (pre-registration)**: replaced with a waitlist signup — *"Recibe noticia cuando podamos recibir donaciones."*
- **Trust pills** top-right of the hero (Max Strong pattern): `EST. 2026 · MADRID · CARACAS` (and later, registration number).

**2. The handwritten letter** *(slot — populated once Camila writes it)*
- The letter as a centered image, scanned in good light.
- Caption: *"Una carta de Camila Casanova, fundadora."*
- Below: a small "leer versión transcrita" toggle that expands the typeset version inline, for accessibility + translation.

**3. Manifesto preview**
- Title: *"Manifiesto"*
- Three or four selected paragraphs from `content/manifesto.es.md` — the *"Existimos por..."* litany plus one *"Creemos que..."* stanza.
- Link: *"Leer el manifiesto completo →"* → `/manifiesto`.

**4. Origin teaser**
- Title: *"Una herencia"*
- One short paragraph teasing the family thread (one beat on Eladio, one on Opa, one on today).
- One photo inline: **`Eduardo-Aleman-Eladio-Aleman-y-el-cronista-de-Valencia-Alfonso-Marin.jpg`** — both grandfathers in one frame.
- Link: *"Conoce el origen →"* → `/origen`.

**5. How it works** (three cards, ink-on-paper or paper-on-kraft)
- **Recogemos.** Donations from outside Venezuela.
- **Acompañamos.** Las llevamos a las manos del trabajo.
- **Sostenemos.** Llegan a un niño venezolano.

**6. Transparency promise**
- Title: *"Lo que prometemos lo cumplimos."*
- One paragraph: every donation tracked, annual report published, the donor and the recipient see the same number.
- (v2: link to the published annual report when it exists.)

**7. Footer**
- Quick links: Origen · Manifiesto · Donar · Contacto.
- Legal: Aviso legal · Política de privacidad.
- Language switcher: ES | EN.
- Tagline: *"Propagaluz · Spread light"*.
- Copyright + year.

---

### `/origen` — Origin

The deep page where the family lives.

**1. Hero**
- The **handwritten letter from Camila**, when ready, as the hero element. Centered, paper texture visible, photographed in daylight.
- Caption: *"Una carta de Camila Casanova, fundadora."*
- (Until the letter is ready: hero is the three-generation press photo with the title "Origen" overlaid.)

**2. The typeset origin**
- Below the letter, the typeset text of `content/about.es.md` — the four-paragraph first-person origin story.
- Photographs slotted inline:
  - Near the Eladio paragraph: the three-generation group shot.
  - Near the Eduardo paragraph: **Eduardo at his desk** (the intimate desk shot).
  - Near the "Hoy" paragraph: paper texture or yellow-beam graphic (or, when ready, a portrait of Camila).

**3. The closing**
- A small repetition of *"El medio cambia. El trabajo sigue."* in editorial type.
- Donation CTA: *"Apóyalo →"* linking to `/donar`.

---

### `/manifiesto` — Manifesto

The manifesto on its own surface. Linkable. Shareable. Readable.

- Centered single-column, narrow editorial width (~65 characters per line).
- Full text of `content/manifesto.es.md`, generously spaced.
- Small return-to-home link at top.
- Donation CTA at bottom.

No photographs, no decoration. The manifesto stands alone — its own gesture.

---

### `/donar` — Donation

The frictionless action page. Two modes, depending on legal status.

**Mode A · Pre-registration (the current default)**
- Headline: *"Estamos en proceso de registro."*
- Short paragraph: the foundation is being registered in Spain. As soon as registration is complete, donations open formally.
- Email capture: *"Recibe noticia cuando abramos."* (Email + first name, both optional).
- Soft CTA: *"Mientras tanto, lee el manifiesto."*

**Mode B · Live (post-registration)**
- Stripe Checkout embedded.
- Toggle: monthly / once.
- Amount pills: 25 € / 50 € / 100 € / custom.
- Payment.
- Confirmation page with a thank-you message in Camila's voice.
- Optional: a checkbox to receive an annual report by email.

---

### `/contacto` — Contact

One column. Restrained.

- **General:** `hola@propagaluz.com` *(or whatever email address is set up — pending confirmation from Camila)*.
- **Partnerships:** `andres@propagaluz.com`.
- **Press:** `prensa@propagaluz.com` (v2).
- Social handles when applicable.
- A short, warm note thanking the visitor for writing.

---

### `/privacidad` and `/aviso-legal`

Plain editorial pages. Required by Spanish law (*aviso legal*) and EU GDPR (privacy policy). Boilerplate adapted to propagaluz's specifics; a lawyer reviews before public launch.

---

## Navigation pattern

**Desktop header** (sticky on scroll, semi-transparent over the hero photograph):
- Logo top-left (links to `/`).
- Origen — Manifiesto — Donar — *language toggle (ES | EN)*.
- "Donar" rendered as a yellow pill button, not a text link.

**Mobile**: hamburger menu opens from the right. **Sticky yellow "Donar" pill at the bottom of the viewport** (charity:water pattern). Always reachable.

**Footer**: as in homepage section 7.

## Global elements

- **Donation CTA component** — header (button), homepage hero (widget), bottom of `/manifiesto`, bottom of `/origen`, mobile sticky footer.
- **Language switcher** — header, every page.
- **Cookie banner** — minimal, GDPR-compliant. Loaded on first visit. Remembered. Refusal works. (No tracking until consent.)
- **Skip-to-content link** — accessibility.

## The three main user journeys

1. **The cold donor (median visitor)**: lands on `/` → reads the headline + manifesto preview → scrolls to the letter → scrolls to the origin teaser → reads "Lo que prometemos lo cumplimos" → clicks Donar. **Goal:** ~90 seconds from landing to clicked-donate-button.
2. **The press / partner**: lands on `/` → scans → clicks Origen → reads the full story → clicks Contacto → emails.
3. **The warm donor**: lands on `/` → clicks Donar in the header → completes donation. **Goal:** ~30 seconds from landing to receipt.

---

## Technical implementation notes

For the build phase.

- **Framework**: Next.js 15 (App Router), TypeScript, Tailwind, shadcn/ui for primitives, lucide-react for icons.
- **Hosting**: Vercel. `propagaluz.com` already registered.
- **i18n**: Next.js routing-based — `/...` for Spanish (root), `/en/...` for English. Content lives in markdown at `content/` with `.es.md` / `.en.md` suffixes; routes load the right locale. No translation libraries needed for static content (per the *neither is a translation* rule).
- **Donation infrastructure**:
  - **Pre-registration (Mode A):** email capture via Resend / Loops / ConvertKit. Pick one in the build phase.
  - **Post-registration (Mode B):** Stripe Checkout (hosted) — fastest path to live donations. Custom Stripe Elements later if we need more design control.
- **Forms**: react-hook-form + zod for validation.
- **Motion**: Motion.dev as the default. GSAP-react reserved for a possible scroll-pinned hero in v2.
- **Analytics**: **Plausible** or **Fathom** (privacy-friendly, GDPR-compliant, no cookie banner needed for the analytics itself). Avoid GA4.
- **Monitoring**: Sentry once there's traffic worth monitoring. PostHog if we want product-level event tracking (later).
- **Image optimization**: Vercel's built-in `next/image`. Original assets in the repo at `assets/photography/`; the production site references optimized versions.
- **SEO**:
  - Structured data for an `Organization` (name, logo, founder, address, contact).
  - OG images per page (per Spanish + English).
  - Sitemap auto-generated.
  - Robots.txt allowing everything until we have a reason to restrict.
- **Accessibility**: WCAG 2.2 AA minimum. Run `mcd-accessibility-audit` and `a11y-auditing-wcag` before launch.
- **Performance**: target Lighthouse 95+ on all four metrics. Image lazy-loading. Font preloading for Lovelo + Source Serif 4.

## v1 scope · what ships now

The minimum for a real foundation website:

- Homepage with hero, manifesto preview, origin teaser, "how it works" cards, transparency promise, footer.
- Origen page with typeset story + family photos.
- Manifesto page.
- Donar page in **Mode A** (waitlist).
- Contacto page.
- Privacy and legal pages.
- Header, footer, language switch, mobile nav, mobile sticky donate.
- Spanish primary + English mirror, native both.
- The four publicly-usable family photographs from `inbox/` (see `INBOX-NOTES.md`).
- Working analytics (Plausible).
- Working cookie banner (GDPR-compliant).

**Out of scope for v1:** the handwritten letter (waiting on Camila), the live donation flow (waiting on registration), partner names anywhere (waiting on signed agreements), beneficiary photography (waiting on partners + consent), the protest photo, the 1997 inauguration photo (cropping decision pending).

## v2 scope · the second wave (post-launch)

Added in order as material lands:

1. **Handwritten letter slot populated** as soon as Camila photographs the final version.
2. **Live donation flow** the day Spanish foundation registration completes.
3. **Partner cards** on the homepage + inside Origen once Entreculturas + CECODAP agreements are signed.
4. **Beneficiary photography** from partners (with consent).
5. **Press kit page** when there's press interest.
6. **Annual report page** at the end of the first fiscal year (when there's a report to publish).
7. **Updates / journal** if Camila wants a public news cadence.
8. **Events page** when there are events.

---

## What I need from Camila to start the build

1. **The email address** that you set up. I have `hola@propagaluz.com` and `andres@propagaluz.com` as placeholders in the contact page and footer; tell me what the real addresses are so they go in correctly the first time.
2. **A portrait of yourself** in `assets/photography/camila/` when you're ready. Not blocking — the site can launch without it, but it makes the "Hoy" / today section richer.
3. **Decisions on the two sensitive photographs** (1997 inauguration and 2016 protest — see `INBOX-NOTES.md`). Crop, hold, or use? I lean toward *crop the inauguration, hold the protest for v1*.

Everything else — the manifesto, the typeset origin, the family photos, the visual system, the partner outreach — is already on disk. The next operational step is the **build phase**: scaffolding the Next.js project in `web/`, wiring the home and origen pages, then deploying to Vercel.
