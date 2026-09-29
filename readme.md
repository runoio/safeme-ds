# SafeMe — Design System

SafeMe is a premium **personal-safety application** built by a licensed security agency. It gives users round-the-clock support from professional **Safety Assistants** ("Asystent Bezpieczeństwa"). With one tap a user can summon help or request live monitoring of a journey; if a threat arises, the SafeMe team responds instantly and dispatches emergency services to the user's precise location.

The product's core idea is closing the **"Safety Gap"** — the grey zone between a user's intuition that something is wrong and the point where public services (112 / 999) would act. SafeMe operates proactively inside that gap with monitoring, professional human support, and real-time decisions.

**Primary markets & language:** **Poland and the United Kingdom** — the service operates 24/7 in both. PL copy is the original; safeme.uk carries the English version.

**Core actions:** the product has exactly two, always capitalized as proper nouns — **Obserwacja** (route monitoring) and **Pomoc** (one-tap help). Both unlimited in every plan.

**Core use cases:** taxi/rideshare, public-transport commutes, walking home after dark, outdoor sport at any hour, first dates from dating apps, coming home from events, children travelling solo, sudden emergencies.

**Recognition:** Innovation of the Year 2025 & Gold in "Service" (SAR); Eagle of Innovation 2025, "Social Good Solutions" (Rzeczpospolita).

## Sources provided
- Brand logos & sygnet (the stylized "E" chevron mark), delivered as SVG — now in `assets/`.
- Brand color & font spec (see below).
- Marketing copy in Polish (original) and English (client translation).
- **Website:** https://www.safeme.pl (PL) and https://safeme.uk (EN).
- **Content documents (28.07.2026):** page copy (`SafeMe_strona_glowna_tekst.docx`, `SafeMe_o_aplikacji_tekst.docx`, `SafeMe_dla_firm_tekst_strony.docx`, `SafeMe_voucher_tekst.docx`, `SafeMe_kontakt_tekst.docx`, `SafeMe_pobierz_aplikacje_tekst.docx`, `SafeMe_FAQ_tekst.docx`), pricing (`SafeMe_cennik_PL_UK.xlsx`), testimonials (`SafeMe_testimoniale_tematyczne_LP.xlsx`), thematic FAQ (`SafeMe_FAQ_tematyczne_LP.xlsx`), company data and selected YouTube videos. All distilled into `guidelines/content-and-facts.md`.
- **Landing pages:** https://lp.safeme.pl — e.g. https://lp.safeme.pl/zdrowie (source of the `StatusPill` "Dostępni 24/7" component).
- **App stores:** Android `https://play.google.com/store/apps/details?id=pl.safeme.client` · iOS `https://apps.apple.com/us/app/safeme/id6451586056`.
- No codebase, Figma file, or in-app screens were provided — component and UI-kit designs below are **original**, built to the brand spec and informed by the marketing site. Flag: if a production codebase or Figma exists, attach it so the UI kit can be reconciled against the real product.

### Product structure (from the client's content docs, 28.07.2026)
- Three value pillars: **Dostępność 24/7**, **Nie obciążamy bliskich**, **Skuteczne wsparcie**.
- Two core features: **Obserwacja** (route monitoring) and **Pomoc** (one-tap help), fronted by the **Asystent Bezpieczeństwa**.
- Subscription, 7-day free trial. **PL:** Personal 19,99 zł · Family 3 53,97 zł · Family 5 89,95 zł/mo. **UK:** Personal £7.99 · Family 3 £20.97 · Family 5 £34.95/mo. Annual = monthly × 10 (2 months free). Voucher: 360 days for 199,90 zł.
- Company: SFM SOFT Sp. z o.o., Warszawa (KRS 0001024285).
- **Full facts, pricing, site map and approved copy: `guidelines/content-and-facts.md`.**

---

## Components
Reusable primitives live in `components/`. Built for this system:

- **Button** (`components/core`) — pill action button; variants primary / safe / danger / outline / ghost.
- **IconButton** (`components/core`) — single-icon button; solid / safe / ghost / outline.
- **Input** (`components/core`) — labelled text field with focus ring, helper & error states.
- **Switch** (`components/core`) — on/off toggle (settings).
- **Badge** (`components/core`) — status pill; safe / danger / success / warning / brand / neutral.
- **StatusPill** (`components/core`) — outlined availability pill ("Dostępni 24/7"), from lp.safeme.pl; for dark marketing surfaces.
- **HeroEyebrow / HeroTitle / HeroTrust** (`components/marketing`) — the web hero pattern; see `guidelines/hero-pattern.md`.
- **MockupHalo** (`components/marketing`) — pulsing "guardian" glow behind phone mockups; see `guidelines/mockup-halo.md`.
- **Card** (`components/core`) — rounded white surface with tinted shadow.
- **Logo** (`components/brand`) — inline SVG brand mark; wordmark & sygnet, dark/light/mono.
- **SOSButton** (`components/brand`) — the signature circular emergency-call button.

### Sections (`components/sections`) — built from safeme.uk, see `guidelines/home-sections.md`
- **SectionHeader** — eyebrow + H2 + subtitle.
- **HowItWorksSteps** — numbered steps / numbered differentiators.
- **VideoCard** — YouTube thumbnail with play button.
- **StatRow** — big-number stats.
- **AssistantSection** — photo + copy + StatRow.
- **HelpCallout** — dark Help CTA panel (PL).
- **BillingToggle** — monthly / annual switch.
- **PricingCard** — Personal / Family / Family+.
- **CarrierBilling** — carrier billing strip (PL).
- **SafetyGapScale** — safety gap → 112 diagram.
- **TestimonialCard** — review card.
- **FeatureCard** — icon + title + body tile.
- **BenefitBanner** — B2B teaser.
- **StoreBadges** — App Store / Google Play buttons.
- **ClosingCTA** — final download CTA.
- **FAQAccordion** — question/answer accordion.
- **UseCaseList** — grouped check lists.
- **LogoStrip** — partner logos.
- **TierPriceCard** — B2B volume tier.
- **AwardCard** — award tile.
- **ContactPersonCTA** — B2B demo CTA with contact person.
- **CompareTable** — SafeMe vs alternative table.
- **CardCarousel** — scroll-snap card row (reviews, numbered cards).
- **SplitPanel** — text + media panel, dark or light.

All section components are styled 1:1 from `trupek123/safeme-site` (`app/globals.css`) — see `github.md` for the component ↔ source map.

### Intentional additions
This system had no source component inventory, so a standard set was authored, plus two brand-specific primitives the product clearly needs: **SOSButton** (the emergency-call control that defines the product) and **Logo** (inline mark for reliable rendering).

---

## CONTENT FUNDAMENTALS

**Voice:** calm, protective, professional — never alarmist. SafeMe is the steady expert beside you, not a panic siren. The tone reassures ("we'll handle the rest, watching over your safety until you arrive").

**Person:** addresses the user directly as **"you" / "Ty"** (informal second person in Polish), and speaks as **"we" / "my"** for the SafeMe team. This creates a personal, human relationship — a named assistant is "your" assistant.

**Casing:** Sentence case for UI and body. Headings use Montserrat semibold/bold. Uppercase with wide tracking is reserved for small eyebrows/labels (e.g. "24/7", status captions) — never for long strings.

**Emoji:** not used in the product UI. Emoji appear only in marketing award call-outs (🏆🥇). Keep product surfaces emoji-free.

**Numbers & claims:** "24/7", "na terenie Polski i Wielkiej Brytanii", "jednym kliknięciem", "testuj 7 dni za darmo". Concrete and reassuring, no hype. **Never invent a claim, price, or coverage area** — take them from `guidelines/content-and-facts.md`.

**Capitalization of the two actions:** **Obserwacja** and **Pomoc** are proper nouns in copy ("Zamów Obserwację trasy lub wezwij Pomoc"), not generic verbs.

**Terminology (PL → EN):**
- Asystent Bezpieczeństwa → Safety Assistant
- Obserwacja (trasy) → Observation / route monitoring
- Pomoc → Help
- Safety gap / luka → the safety gap
- Wybierz punkt docelowy → Choose your destination

**Example copy (PL):** "Asystent Bezpieczeństwa 24/7" · "Zamów Obserwację trasy lub wezwij Pomoc jednym kliknięciem." · "Poczuj się bezpiecznie. Pobierz aplikację i testuj przez 7 dni za darmo."

---

## VISUAL FOUNDATIONS

**Button colour rule:** default primary = navy `--blue-800`; the one highlighted choice in a set (featured plan, highlighted tier) = AA blue `--blue-action-700` (#006DDB — white on #5BADFF fails contrast); on dark panels = white button or translucent store badges. Brand red #FF1616 only for logo + headline accents; action red #ED3745 for Pomoc/SOS, play buttons and the 112/999 dot. Radii: cards 16, panels 24. H2: `--text-section` / `--text-closing`. Full list: `guidelines/home-sections.md` → Consistency rules.
**Links:** `--text-link` #006DDB (AA on white), not `--blue-action-600`.

**Colors.** Four brand values anchor everything:
- **Brand red `#FF1616`** — the logo mark and brand accents. Confident, urgent-but-controlled.
- **Action red `#ED3745`** — reserved almost exclusively for the **SOS / emergency** action. Its scarcity is the point: when the user sees action red, it means help.
- **Dark blue `#0E1353`** — the trust color. Primary text, dark headers/surfaces, primary buttons. Communicates security-agency seriousness.
- **Action blue `#5BADFF`** — "safe"/informational actions, active-monitoring states, links. The calm counterpart to the red.
Neutrals are a cool grey ramp tuned toward the dark blue (never pure warm grey). Backgrounds are light (`--surface-page #F6F7FB`) or full dark blue — no busy patterns.

**Type.** Headings in **Montserrat** (600–800, tight tracking on large sizes); body in **Inter** (400–600). Montserrat's geometric confidence reads as safety/infrastructure; Inter keeps dense app content legible. Display sizes up to 56px; app body 16px; minimum 12px for captions.

**Spacing.** 4px base grid (`--space-*`). Generous breathing room on the app home screen so the SOS button dominates.

**Backgrounds.** Two contexts. **The product app UI is a dark theme** — near-black `--app-bg #0A0A0C` with elevated cards on `--app-surface #1B1C20`. The marketing site is likewise dark. Light surfaces (`--surface-page #F6F7FB`) are for docs/print/light-mode contexts. The only gradient in the system is the **radial glow on the SOS button** and the assistant avatar; gradients are otherwise avoided. No stock-photo washes; if imagery is used it should be cool-toned and calm, never dramatic red-alert imagery.

**Corner radii.** Soft but not pill-everything: cards `16px` (`--radius-lg`), inputs `10px`, small chips/buttons are fully rounded pills (`--radius-pill`). The pill button shape is a brand signature echoing the rounded, friendly-yet-serious tone.

**Cards.** White surface, `1px` subtle cool-grey border **plus** a soft blue-tinted shadow (`--shadow-sm/md`). Never a colored left-border accent. Never heavy drop shadows.

**Shadows.** Cool, low-opacity, tinted with the dark blue (`rgba(14,19,83,…)`) — xs→lg. The SOS button gets a special red glow (`--shadow-sos`).

**Animation.** Purposeful and quick. Standard easing `cubic-bezier(0.2,0,0,1)`, 120–320ms. Buttons scale down slightly on press (0.97 / IconButton 0.92). The SOS button has a slow (2s) pulsing halo — signalling live readiness. Marketing surfaces add the **mockup halo**: a 5s breathing blue glow with 4.5s ripple rings behind phone mockups (`guidelines/mockup-halo.md`). All looping motion is slow and blue — fast or red pulses read as alarm. Respect `prefers-reduced-motion`.

**Hover / press.** Hover: subtle background tint shift (ghost/icon buttons) or slight lift. Press: scale-down (never color inversion). Focus: 3px `--focus-ring` (action-blue at 55%) on inputs.

**Transparency & blur.** Used sparingly — e.g. a frosted app top bar over a map, or a scrim behind a modal. Not decorative.

**Hero pattern (web).** Eyebrow → extrabold H1 with ONE brand-red accent fragment (`#FF1616`) → subtitle → CTA → 3-claim trust line with blue checks (dark heroes only). The H1 accent is a deliberate exception to "red = SOS only"; action red `#ED3745` stays reserved for emergency UI. See `guidelines/hero-pattern.md`.

**Layout rules.** Mobile-first (the product is an app). The real app home (see `assets/reference-app-home.png`) is: a top **assistant header** (avatar + online dot, centered name/role, red sygnet), an assistant intro **card carousel**, and — as the focal point — **two large circular buttons side by side: Pomoc (red, help) and Obserwacja (blue, route monitoring)**. Navigation is a dark **pill tab bar with three tabs: SafeMe · Samouczek · Profil**. Hit targets ≥ 44px.

---

## ICONOGRAPHY

No icon set was shipped with the brand assets. This system uses **[Lucide](https://lucide.dev)** (v0.544) — clean, consistent 2px-stroke line icons that match the calm/professional tone and pair well with Montserrat/Inter. **This is a substitution — flagged for the user.** If SafeMe has an official icon set, provide it and it will replace Lucide.

- Style: outline/stroke, 2px, rounded joins. Default size 18–24px in UI, 20px in icon buttons.
- Color: inherit `currentColor`; muted (`--text-muted`) for decorative, dark blue for interactive, action blue for "safe" affordances.
- Common glyphs: `MapPin`, `Navigation`, `Phone`, `MessageCircle`, `ShieldCheck`, `Bell`, `Settings`, `User`, `Car`, `Bus`.
- The **sygnet** (three red chevrons forming an "E") is the app-icon / brand glyph — use `Logo variant="sygnet"`, not a drawn substitute.
- Emoji only in marketing award callouts, never product UI. No Unicode-char icons.

Load Lucide from CDN: `<script src="https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js"></script>`.

---

## Index / Manifest
- `styles.css` — global entry (import this). `@import`s the token files.
- `assets/photos|awards|partners|operators|mockups/` — site media copied from safeme-site `public/media` (use these, never hot-link).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (radius, shadow, motion), `fonts.css` (Montserrat + Inter via Google Fonts).
- `assets/` — logos (`logo-black/white`, `-shadow` variants) and sygnet (`sygnet-black/outline/red`) as SVG.
- `components/core/` — Button, IconButton, Input, Switch, Badge, StatusPill, Card (+ `core.card.html`).
- `components/brand/` — Logo, SOSButton (+ `brand.card.html`).
- `components/marketing/` — HeroEyebrow, HeroTitle, HeroTrust, MockupHalo (+ `hero.card.html`, `mockup-halo.card.html`).
- `components/sections/` — page sections from safeme.uk (+ 7 section cards).
- `guidelines/home-sections.md` — page-by-page section → component map (safeme.uk is the source of truth).
- `guidelines/content-and-facts.md` — **company data, pricing (PL + UK), site map, approved page copy.** Read this before writing any SafeMe copy.
- `guidelines/copy-about.md` — full verbatim copy of the About page (PL + EN) from the site code.
- `guidelines/hero-pattern.md` — the web hero pattern (anatomy, H1 accent, trust line).
- `guidelines/mockup-halo.md` — the pulsing glow behind phone mockups.
- `templates/web-hero/` — "Web hero (SafeMe)" starting template for consuming projects.
- Foundation specimen cards: `guidelines/*.card.html` (Type, Colors, Spacing, Brand).
- `SKILL.md` — Agent-Skill wrapper for download/Claude Code use.

### Notes / caveats for the user
- **Fonts** are loaded via Google Fonts (Montserrat + Inter) — both match the spec exactly; no substitution. If you have licensed webfont files, drop them in and swap `tokens/fonts.css` to `@font-face`.
- **Icons** are Lucide (substitution — see Iconography).
- No production codebase/Figma was available; the UI kit is an original interpretation of the described product and should be reconciled against the real app if one exists.
