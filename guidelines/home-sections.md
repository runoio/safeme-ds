# Site sections → components

Styled from the code in `trupek123/safeme-site` (synced 27.09.2026). Layout rules from the site: page max-width 1120px, section gap `--space-12`, cards `--radius-lg` + `--shadow-xs`, big panels `--radius-xl`.

**Source of truth: repo `trupek123/safeme-site` main** (28.09.2026). It is newer than the live safeme.uk build. PL and EN use the same page structure. Copy lives in `content-and-facts.md`; components in `components/sections/`.

## Home (/)
| Section | Components |
|---|---|
| Hero — phone mockup with halo | HeroEyebrow · HeroTitle (accent "real person" / "Prawdziwa osoba") · StoreBadges + note in one row · HeroTrust · MockupHalo |
| How it works — 3 steps + video | SectionHeader · HowItWorksSteps (list) · steps link · VideoCard |
| Who is your Safety Assistant | AssistantSection |
| Call for help | HelpCallout (accent "One tap" / "jedno kliknięcie") |
| Packages (+ PL: Dolicz do rachunku) | SectionHeader · BillingToggle · PricingCard ×3 · CarrierBilling (PL) |
| Safety gap | SectionHeader · SafetyGapScale |
| Reviews | CardCarousel of TestimonialCard |
| Employee benefit | BenefitBanner |
| Closing | ClosingCTA |

## How it works (/about, /o-aplikacji)
| Section | Components |
|---|---|
| Hero (photo) | HeroEyebrow · HeroTitle (accent "SafeMe") · StoreBadges · note · HeroTrust |
| Step by step | SectionHeader · HowItWorksSteps variant="timeline" ×2 (tone safe / danger) |
| Who is your Safety Assistant | AssistantSection |
| When to use the app | SectionHeader · VideoCard (left, red play) + UseCaseList (3 categories, last tone="danger") |
| Why not just share my location with a friend? | SectionHeader (eyebrow) · CompareTable + VideoCard |
| Why SafeMe and not the emergency number? | SplitPanel tone="dark" + VideoCard onDark |
| What makes us different (6) | CardCarousel of numbered cards |
| Packages | BillingToggle · PricingCard ×3 |
| Good questions | FAQAccordion |
| Closing | ClosingCTA |

## For business (/offer)
| Section | Components |
|---|---|
| Hero — CTA "Book a meeting" | HeroTitle · Button · HeroTrust |
| What is SafeMe for business | SectionHeader + image (Safe Employer certificate) |
| How the app works | FeatureCard ×3 |
| When employees use the app | UseCaseList (1 group, no title) |
| We also protect outside work | SectionHeader |
| What the company gains (5) | FeatureCard badgeIcon grid |
| Onboarding process (5) | HowItWorksSteps variant="cards" (in CardCarousel) |
| Cafeteria platforms | LogoStrip (Pluxee · Motivizer · Worksmile · Nais) |
| Pricing (100+ / 200+ / 300+) | TierPriceCard ×3 (200+ highlight) |
| Awards | AwardCard ×3 |
| Reviews (B2B) | TestimonialCard, author = "Name, Role of Company" |
| FAQ | FAQAccordion |
| Closing | ContactPersonCTA (Karol Bedyński, Calendly) |

## Voucher (/voucher)
Hero (Buy the voucher) · A perfect gift + voucher front/back images · How to use (HowItWorksSteps ×3) · What is SafeMe (+ mockup) · FAQAccordion · ClosingCTA with two buttons (Buy the voucher · Download the app) as children.

## FAQ (/faq)
HeroTitle (light) · FAQAccordion · "See us in action" VideoCard ×4 · closing → Contact us.

## Rules

### Consistency rules (28.09.2026 audit — apply on the site too)
1. **Contrast.** White text/glyphs never sit on `--blue-action-500` (#5BADFF, 2.4:1). Filled blue CTAs, badges and icon circles use `--blue-action-700` (#006DDB, 4.9:1). #5BADFF stays for borders, rings, halos and text on navy.
2. **Eyebrows.** On light backgrounds `--text-link` (#006DDB); on navy `--accent-safe` (#5BADFF). One class, two contexts — not `.eyebrow` vs `.section-heading`.
3. **Reds.** `--safeme-red` #FF1616 = logo and headline accents only. `--action-red-500` #ED3745 = everything Help/SOS/alarm: Help button, play button, 112/999 dot, danger timeline. `--action-red-600` only for red text on tints.
4. **Radii.** Cards inside a grid/row = `--radius-lg` (16). Full-width panels and sections (hero, assistant card, FAQ list, compare table, safety-gap diagram, dark panels, CTAs) = `--radius-xl` (24).
5. **Heading scale.** Two H2 sizes only: `--text-section` (every section H2) and `--text-closing` (final CTA). Card titles `--text-h4`.
6. **Pricing.** Consumer packages and B2B tiers share one card language (PricingCard / TierPriceCard).
7. **Video.** Play button is always action red — never override `playColor`.
8. **Hero note** sits in the store-badge row, italic, on every page.
9. **UK launch blockers:** decide carrier-billing section for UK (code note D5); switch store buttons to `StoreBadges variant="official" lang="en"`.

- Buttons: navy default, action blue for the single highlighted option, white on dark panels.
- Max 2 dark panels per page (HelpCallout / ContactPersonCTA / ClosingCTA). Section gap `--space-20`.
- Red only in HelpCallout and the emergency-number dot of SafetyGapScale (112 PL / 999 UK).
- StatRow, TierPriceCard, SafetyGapScale carry claims — values only from `content-and-facts.md`.
- Videos are vertical (9:16 YouTube Shorts): VideoCard defaults to `orientation="vertical"`, max 360px wide; thumbnail `i.ytimg.com/vi/<id>/oar2.jpg`. Pair one video beside text, or 3–4 in a row as a gallery.
- **StoreBadges**: `variant="official"` renders Apple's and Google's official artwork (Apple: developer.apple.com badge SVG, English only; Google: Play badge CDN, PL/EN). For a Polish Apple badge download it from Apple Marketing Tools into `assets/store/` and pass `appleSrc`. Use it for paid campaigns, ads and anywhere store brand rules apply; `custom` (site style) is fine on our own pages. Don't recolour or redraw the official badges; keep them the same visual height.
- **Media**: use the local files in `assets/` (photos, awards, partners, operators, mockups) — never hot-link safeme.pl/.uk URLs.
- **Links**: always `--text-link` (#006DDB). `--blue-action-600` is for fills/gradients only, never text on white.
- **Play button**: always brand red (`VideoCard` default); don't pass `playColor`.
- CarrierBilling is PL-only. HelpCallout is on both markets.
