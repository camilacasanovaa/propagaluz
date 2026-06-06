# Open questions

Things still unresolved. Each carries enough context to be picked up cold in any future session.

Resolved questions live in `DECISIONS.md`.

## Legal and structural
1. **Where to register the foundation.** Spain (EU non-profit framework, faster, donor base of Spanish-speakers in Madrid) versus the United States (501c3 unlocks tax-deductible donations from US donors, harder to register). Possible to register one and operate cross-border. Working hypothesis: **register in Spain first** — Madrid is operational base, donor base is local, Andrés Casanova Vegas (the adult-of-record) is Spanish-resident. Add a US fiscal sponsor later if US donor pipeline justifies it. **Next step:** consult a Spanish foundation-law specialist.
2. **Funds movement Spain → Venezuela.** Cleanest path: channel through **Entreculturas** (Fe y Alegría's Spanish affiliate) for the Fe y Alegría side — they handle the cross-border legal/tax routing themselves. For CECODAP, direct transfer Spain → Venezuela requires banking research (sanctions compliance, FX, intermediary banks).
3. **GDPR and donor privacy.** Required before any donation form goes live. Standard Spanish foundation privacy policy template exists; specialist review needed.
4. **Annual reporting / audit cadence.** Required for both Spanish foundation registration and for donor trust. Even a v1 should publish an annual report.

## Partnerships (pending outreach)
5. **Entreculturas conversation.** Reach out to Madrid office (Calle Maldonado 1, planta 1; madrid@entreculturas.org; 915 771 817). The ask: a formal partnership permitting propagaluz to channel funds and reference Fe y Alegría by name/logo. **Andrés should be present** for the initial conversation given Camila is a minor.
6. **CECODAP conversation.** Reach out via cecodap.org. Same shape: formal partnership, funding a specific deliverable (a publication, a training module, a children's-rights program). Less established a procedure than Entreculturas; expect more bespoke conversation.
7. **Identify a specific Fe y Alegría program / region to fund.** Generic "money to Fe y Alegría" is operationally fine but narratively flat. **Strong candidate: a Fe y Alegría school in Carabobo state** — closes the loop with the family's home and El Carabobeño's geography. If their school presence in Carabobo is sparse, the next-best is a Caracas school in an underserved parish.
8. **Identify a specific CECODAP deliverable to fund.** A publication of *Ediciones El Papagayo*? A teacher-training module? A children's-voice program? Pick one with a name and a measurable outcome.

## Brand and visual system
9. **The current logo file.** Camila needs to save the source PNG/SVG at `~/Documents/PROJECTS/propagaluz/assets/logo/propagaluz-v1.png` (or SVG). If a Figma/Illustrator file exists, save the source at `assets/logo/source/`. Full critique in `assets/logo/CRITIQUE.md`.
10. **Lovelo license check.** Wordmark is set in Lovelo Black by Renick Bell. Free for personal use; **commercial/foundation use needs the license terms verified** before site goes live. If the license is restrictive, two options: (a) reach out to Renick Bell for permission/licensing, (b) commission a redrawn proprietary version that propagaluz owns outright.
11. **Logo system extensions** (per `assets/logo/CRITIQUE.md`): horizontal lockup, standalone icon (probably the beam alone), dark-mode behavior, saturated secondary yellow for fragile contexts.
12. **Spanish vs English on the site.** Recommendation: **Spanish primary on propagaluz.org**, English mirror with a language toggle. Both written natively, never machine-translated. Camila to confirm.
13. **Visual direction round (broader than logo).** Once the manifesto draft is approved, run three parallel directions exploring different aesthetic stances on the same brief. Camila chooses; the chosen direction is written into `DESIGN.md`. Tools: Lazyweb refs once token is available; otherwise `~/.claude/skills/open-design/design-systems/` and `ui-ux-pro-max`.

## Content
14. **Manifesto v3 approved.** Closed.
15. **About page v0 — pending Camila's review.** Drafted in both languages at `content/about.es.md` / `content/about.en.md`. Holds full family DNA in editorial register.
16. **Family photographs.** Camila to source from family archive: photographs of Eladio, Eduardo (alone and with Diana), Marisol if available, El Carabobeño mastheads or pages, any surviving images of *El Bolígrafo* or *Propagaluz* the newspapers. File at `assets/photography/family/`. Will be slotted into the About page during the build phase.
17. **Camila's brother.** She mentioned he has helped from the start. Decide whether to acknowledge him on the About page or elsewhere (or not at all in public copy).

## Operational — sending the outreach emails
18. **Domain — propagaluz.com — registered.** Closed.
19. **Email infrastructure.** Set up `camila@propagaluz.com` and `andres@propagaluz.com` before sending outreach. Google Workspace (~6€/user/month) is the cleanest path. Many registrars include a free mailbox.
20. **CECODAP contact email.** Not obvious from their site. Try the *Contacto* form, their LinkedIn, or DM their Instagram for the right partnership-inquiry address. See `content/outreach/README.md` for the path.
21. **Andrés reviews the drafts.** Both outreach emails name Andrés as legal officer in copy. He should read both before they go out and approve the framing + his contact details.
22. **Send Entreculturas first; wait one week; then send CECODAP.** Sequence reasoning in `content/outreach/README.md`.

## Visual + assets
23. **Image inbox is live.** Camila drops anything she has into `assets/photography/inbox/`. Curated subfolders also exist: `family/`, `camila/`, `letter/`. The inbox is the no-think dump location; subfolders are for when she wants to organize.
24. **Handwritten founder's letter (Camila to write).** Shape and instructions in `DESIGN.md §The handwritten letter`. Output to `assets/photography/letter/letter-final.jpg` when ready.
25. **GT Sectra licensing.** Aspirational typeface for body/editorial. Commercial Type license cost needs to be checked before commit. Free fallback in v1 is Source Serif 4 (Google Fonts).
26. **Lovelo license check — still open.** Wordmark uses Lovelo Black. Free for personal use; commercial/foundation use needs confirmation from Renick Bell before public launch.
27. **Peer study — Max Strong Project.** They are a peer foundation (Venezuelan-American, diaspora-bridge model, similar founder profile). Worth a short research note in `research/peers/maxstrong.md` once visual direction is locked. Operational moves to study: recurring donation flow, story-driven program pages, the "I'm Eleven" personal callouts.

## Site (architecture done · build pending)
28. **Real email address — `camila@propagaluz.com`.** Locked in. Closed.
29. **Sensitive photo decisions.** Locked: both held from v1 (1997 inauguration and 2016 protest). Closed.
30. **Camila's portrait.** Site can launch without one, but the *Hoy* section is richer with the founder's face. Camila to add to `assets/photography/camila/` when ready. Not blocking launch.
31. **Build phase — when to start.** Architecture, visual system, copy, partner outreach, and asset structure all done. Next operational step is scaffolding the Next.js project in `web/` and shipping a v1 deploy to Vercel. **Awaiting Camila's go.**
32. **Donation infrastructure provider (Mode A) — Resend.** Locked in. Closed.
33. **Foundation registration timeline.** Mode A → Mode B switch depends on Spain non-profit registration. Specialist consultation still pending (item #1). The longer this takes, the longer the site lives in Mode A.
34. **Andrés's own propagaluz email address.** When set up, the contact page splits and the outreach drafts gain a real CC address.
15. **About page draft.** After manifesto, write the origin story. Three sober paragraphs: Eladio, Eduardo, Camila. Photographs from family archive if available.
16. **Site architecture.** Pages: Home, Manifesto, About (the legacy), Where the money goes (partners), Donate, Contact, Press. Eventually a journal/blog for foundation updates. Decide after manifesto lands.

## Family-archive items pending
17. **Photographs of Eladio and Eduardo** — Camila can source from family. File at `assets/photography/family/`.
18. **Founding dates of El Bolígrafo and Propagaluz** — Camila to ask family.
19. **Surviving issues / mastheads of El Bolígrafo or Propagaluz** — Camila to ask family. Even a single photographed page would be transformative for the About story.