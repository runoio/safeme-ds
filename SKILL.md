---
name: safeme-design
description: Use this skill to generate well-branded interfaces and assets for SafeMe (personal-safety app by a licensed security agency; operates 24/7 in Poland and the UK), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, approved copy, pricing, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Facts, pricing, site map, approved copy:** `guidelines/content-and-facts.md` — **read this before writing any SafeMe copy.** Never invent prices, claims or coverage.
- **Coverage:** 24/7 in **Poland and the United Kingdom** (safeme.pl / safeme.uk).
- **Two core actions:** **Obserwacja** (route monitoring) and **Pomoc** (one-tap help) — capitalized as proper nouns.
- **Colors:** brand red `#FF1616` (logo/accent), action red `#ED3745` (SOS/emergency only), dark blue `#0E1353` (trust, text, primary), action blue `#5BADFF` (safe/info). Cool grey neutrals. Tokens in `tokens/colors.css`.
- **Type:** Montserrat (headings, 600–800), Inter (body). `tokens/typography.css`.
- **Voice (Polish):** calm, protective, professional; "Ty"/"my"; no emoji in product UI. See README "Content Fundamentals".
- **Logo:** `components/brand/Logo.jsx` (inline) or `assets/*.svg`. Sygnet = the "E" chevron mark.
- **Signature element:** `SOSButton` — the circular red emergency button.
- **Icons:** Lucide (substitution — no official set provided).
- **Components:** `components/core` (Button, IconButton, Input, Switch, Badge, StatusPill, Card), `components/brand` (Logo, SOSButton), `components/marketing` (HeroEyebrow, HeroTitle, HeroTrust, MockupHalo).
- **Patterns:** `guidelines/hero-pattern.md`, `guidelines/mockup-halo.md`.
- **Templates:** `templates/web-hero/` — ready dark hero section.
- **UI kit:** `ui_kits/app` — mobile app screens (home, route monitoring, emergency assistant).
