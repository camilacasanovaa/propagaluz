# Propagaluz · Design

The visual system. Tokens, type, photography, motion, layout. Built on the manifesto's voice and the founder's choice of references.

## Direction · One sentence

**Cinematic warmth from charity:water meeting hand-touched intimacy from Max Strong, anchored on the buttery yellow already inside the logo.**

Reference saves: `assets/refs/charitywater-home.png`, `assets/refs/maxstrong-fullpage.png`.

## What we take from each reference

### From charity:water
- **Photography is the protagonist.** Hero sections lead with a single, large, real photograph of a child or a moment, not a graphic.
- **Emotional directness without pity.** Children pictured in dignity, sunlit, full-color, eyes up. The opposite of the silhouette-against-a-sunset charity trope.
- **Big, generous scale.** Whitespace as a feature. One headline, one image, one CTA above the fold — never a cluttered grid.
- **Editorial type for hero copy.** Serif headlines that feel like they came from a printed page.
- **The donation widget lives right under the headline.** No hunting. The action is reachable from first glance.

### From Max Strong
- **Card-block layout** below the hero. Each section is its own rounded, colored card — cream, ink-black, yellow, occasional red — instead of a continuous scroll of white text.
- **Trust signals in the chrome.** Pills in the top-right area carry: *EST. 2026 · MADRID · CARACAS* (and eventually the registration number once we have one).
- **Hand-touched accents.** Camila's actual handwriting appears across the brand: as a signature, as section headlines occasionally, as the founder's letter (see §Letter).
- **Personal voice — short, alive, direct.** Section headlines are sentences, not categories. Microcopy reads like a person wrote it.
- **Strategic note:** Max Strong is a Venezuelan-American pediatric-cancer foundation (Caracas · Miami). They are a **peer** of propagaluz — same diaspora model, similar founder profile. Worth a closer study of their operational moves (recurring donations, story-driven program pages, the "I'm Eleven" personal callouts).

## Palette

| Token | Hex | Use |
|---|---|---|
| **paper** | `#F5EFD8` | Default page background. The warm cream from both refs. |
| **ink** | `#1A1A1A` | Body type, headlines, primary UI. Slightly warm black, not pure black. |
| **luz** | `#F9DC6B` | The buttery yellow from the logo beam. Primary CTA color, accent highlights, the literal beam. **System color, not just mark color.** |
| **carabobo** | `#9F2B1F` | Deep brick red. Secondary accent for emphasis, errors, occasional pull-quotes. Named for the family's home state and the editorial heritage of the paper. |
| **kraft** | `#E3D8B8` | Section backgrounds when paper is too light. The "letter paper" warmth one shade deeper. |
| **shadow** | `#1A1A1A @ 0.08` | The card drop shadow that gives the Max-Strong-style block layout its dimension. |

Five colors. Restraint. Test all combinations against WCAG AA before finalizing copy. Dark mode comes in v2 — light is primary per the visual direction round.

## Typography

| Role | Typeface | Weight | Source |
|---|---|---|---|
| **Wordmark + display** | Lovelo Black | Black (900) | Existing logo. Renick Bell. **License check pending** (see OPEN_QUESTIONS). |
| **Editorial headlines + body** | GT Sectra | Regular / Medium / Bold | Commercial Type, paid. **The aspirational pick.** Reads as editorial-serious-with-personality. Pairs cleanly with Lovelo's geometric weight. |
| **Body fallback (v1 / free)** | Source Serif 4 | Regular / Semibold | Google Fonts. Free. Use until budget permits GT Sectra. |
| **UI / small text fallback** | Inter | Regular / Medium | Google Fonts. Free. For dense data, footnotes, donation amounts. |
| **Handwriting** | Camila's actual hand | n/a | **Never a script font.** Where handwriting appears (signature, letter, occasional section openers), it is photographed/scanned from Camila's real writing and used as an image asset. |

**Scale (rem):** 0.875 · 1 · 1.125 · 1.5 · 2 · 3 · 4.5 · 6.5. Big headlines breathe.

**Line-height:** 1.6 for body; 1.1–1.2 for display.

## Photography direction

Real, never stock. Sun-lit, warm, never pitying. Children pictured as protagonists — eyes up, present, alive.

**For v1**, the foundation has no beneficiary photography of its own yet. We use what we do have:
- **Camila's portrait** — one strong photo of the founder. Sourced from her own existing photos.
- **Family photographs** — Eladio, Eduardo (Opa), the newsroom, El Carabobeño mastheads. Sourced from family archive.
- **The handwritten letter** — photographed in good warm light, the paper texture visible. The letter becomes hero imagery.
- **Texture and place** — Madrid streetscapes, Valencia archive shots, a printed Spanish-language page on a desk. Atmospheric anchors when human subjects are unavailable.

**For v2 (post-partner-agreements)**, beneficiary photography from Fe y Alegría and CECODAP — only with their permission, only with the child's consent, only with the child as protagonist of the image.

## Motion vocabulary

Restrained but felt. Motion earns its place; never decorative.

- **Hero photographs** — slow ken-burns zoom or gentle parallax on scroll. ~20 seconds full traverse.
- **The logo beam** — animates on first page load. Yellow trapezoid sweeps from left edge through the wordmark to right edge. ~600ms. Once per session.
- **Card entrances** — fade-up on scroll into view, ~400ms with subtle ease. Honors `prefers-reduced-motion`.
- **Donation widget** — the yellow CTA pulses subtly on hover. No bouncy animations.
- **Page transitions** — gentle cross-fade (~200ms). Like a page turning, not a slide.

Tool: **Motion.dev** as the React default (per studio pipeline). GSAP only if we add a cinematic scroll-pinned section later.

## Layout principles

- **One hero, one image, one headline, one CTA.** Above the fold is a poster, not a sales catalog.
- **Card blocks below the hero.** Sections sit in rounded rectangular cards (border-radius ~24px), each on a distinct background (paper / kraft / ink / luz). Drop shadow soft.
- **Generous whitespace.** Margins large. Section padding generous. The site breathes.
- **Editorial column widths.** Long-form text capped at ~65 characters per line. Wider columns for stats; narrower for prose.
- **Mobile-first sizing.** Type scales fluidly between 14px (small phone) and 19px (large desktop) for body.
- **Single column on mobile.** Cards stack. The block-card structure makes this transition natural without re-engineering.

## The handwritten letter · `assets/photography/letter/`

A featured component on the site: a letter from Camila, in her own hand, that lives somewhere prominent (hero or About page top — final placement decided when we wire the site).

### What it is
A short personal statement (150–300 words) Camila writes by hand on paper, photographs in good light, and we display as an image. Reads as: *the founder talking to you directly, not through a press release.*

### Shape — what to write about
Three beats, in any order Camila prefers:
1. **Why this exists** — the moment, the memory, the feeling. (Opa, a place, an image, a sentence she heard.)
2. **What she promises** — in her own words, plain.
3. **A direct address** — one line that speaks to the reader.

### Don'ts
- Do not copy the typeset manifesto verbatim. The letter is its own piece, in Camila's voice, with whatever she actually feels.
- Do not over-rehearse. The first or second draft is the right one — handwriting reveals when it's overworked.

### How to produce it
1. Write a rough draft on a separate page in pencil.
2. When the draft feels right, copy it cleanly in pen onto good paper (cream A5 or letter size; ideally lined paper turned over to use the back so it's blank but slightly textured).
3. Photograph in **natural daylight**, near a window, paper flat. Phone camera is fine. Multiple shots from slightly different angles.
4. Save the best to `assets/photography/letter/letter-final.jpg` (or .png if a scan).
5. Tell me when it's ready — I will build it into the site with a typeset Spanish + English fallback in alt text so screen readers and translation tools still work.

### Where it lives on the site
**Working recommendation:** the letter is the hero element of the About page (`/origen` or `/about`), with the typeset version (current `content/about.es.md`) below it as both accessibility fallback and English mirror. Subject to revision after we see the actual letter.

## What this is NOT

(Anti-patterns, surfaced once here for the visual system specifically. Brand-level anti-patterns live in `BRAND.md`.)

- Generic non-profit template energy. Stock photo hero with a sticky "donate now" button.
- Charity-graphic tropes: silhouetted children, gradient hearts, hands holding a globe, "join the movement!" CTAs.
- Glass-morphism, neumorphism, gradient blobs without purpose. Any AI-template aesthetic.
- Sad-piano-music feeling. Pity-led photography. Black-and-white drained desaturation that signals "tragedy."
- Cold corporate sans-serif everywhere. Lifeless grids. Centered alignment as the default.
- Decorative motion that does no work.

## Source files in this folder

- `assets/refs/charitywater-home.png` — viewport of the charity:water homepage, June 2026.
- `assets/refs/charitywater-fullpage.png` — full scroll.
- `assets/refs/maxstrong-home.png` — viewport of the Max Strong homepage, June 2026.
- `assets/refs/maxstrong-fullpage.png` — full scroll.

More reference captures get added here as the visual round continues.
