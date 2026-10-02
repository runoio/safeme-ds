repo: runoio/safeme-ds
branch: main
source: runoio/safeme-site (app/)

## Last sync
date: 2026-10-02T13:40:00Z

### Updated in this project
- ai-guidelines/: brand-guidelines.md (AI-ready brand rules) + how-to-use.md
- SOSButton: Observation icon = navigation arrow; B2B pricing PL+UK from safeme.pl/oferta
- Photo library: 16 photos in assets/photos + guidelines/photo-library.card.html
- Print rules: awards as outlined pills, Dostępni 24/7 tag, store badges in brand colors

## Sync history
### Previous sync
date: 2026-09-29T11:04:35Z

### Updated in this project
- safeme-ds@29f4d35 verified identical to this project (all 167 files match)

### 2026-09-27T22:42:26Z (safeme-site)
- Verified main is current (no commits since f7d59ec6c104); code is newer than live safeme.uk — content guidelines now follow the code
- Section components in `components/sections/` restyled 1:1 from `app/globals.css`
- Tokens aligned: `--text-link` #006DDB, `--action-red-700`, `--success-700`
- HeroTrust check glyph and spacing matched to `HeroBits.tsx`

## Screen map
| DS component / card | Repo source |
|---|---|
| HowItWorksSteps (list) · VideoCard | app/(site)/page.tsx `.steps-list`, app/components/lp/VideoEmbed.tsx |
| HowItWorksSteps (timeline, cards) | app/components/AboutView.tsx `.how-to-use-column`, `.step-card` |
| AssistantSection · StatRow | page.tsx / AboutView.tsx `.assistant-card` |
| HelpCallout | page.tsx `.sos-callout` |
| PricingCard · BillingToggle | app/components/PricingCards.tsx |
| CarrierBilling | page.tsx `.section-subblock` + `.operator-logos` |
| SafetyGapScale | page.tsx `.safety-gap-diagram` |
| TestimonialCard | app/components/Testimonials.tsx |
| FAQAccordion | app/components/FaqList.tsx |
| UseCaseList | AboutView.tsx `.use-case-categories` |
| FeatureCard · AwardCard · TierPriceCard · LogoStrip | globals.css `.features`, `.award-logo`, `.pricing-grid`, `.partner-logos-row` |
| BenefitBanner · ClosingCTA · ContactPersonCTA | page.tsx `.cta-banner`, `.final-cta`, `.cta-contact` |
| StoreBadges · HeroTrust | app/components/StoreBadges.tsx, HeroBits.tsx |
