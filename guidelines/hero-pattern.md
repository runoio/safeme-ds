# Hero pattern (web)

The standard hero treatment used across safeme.pl / safeme.uk (service pages) and segment landing pages. Reference implementation: `safeme-site` (`app/components/HeroBits.tsx` + `.title-accent`, `.hero-trust` in `app/globals.css`; LP originals: `.lp-accent`, `.lp-trust`).

## Anatomy (top to bottom)

1. **Eyebrow** — uppercase micro-label (Montserrat, `--text-xs`, tracking 0.08–0.12em). On dark hero: white at 70% opacity or `--accent-safe`; names the context ("SafeMe", "SafeMe dla firm", "Voucher").
2. **H1 with brand accent** — see rules below.
3. **Subtitle** — Inter, `--text-lg`, max-width ~36rem, `--lh-relaxed`; on dark hero white at 80%.
4. **Primary CTA** — store badges or a single button (navy/trust primary).
5. **Note** (optional) — `--text-sm`, italic, white 65%, **in the same row as the store badges** on every page (not a separate line). e.g. "Testuj 7 dni za darmo."
6. **Trust line** (dark heroes only) — see rules below.

## H1 rules

- Montserrat **extrabold (800)**, `line-height: 1.08`, `letter-spacing: -0.02em`.
- Size: `clamp(2.25rem, 4vw, 3.5rem)` on service pages, `clamp(2rem, 6.5vw, 3.25rem)` on LPs.
- **Brand accent**: exactly ONE meaningful fragment of the H1 colored brand red `#FF1616` (`--safeme-red`). The fragment must carry the value proposition ("Bezpieczeństwa", "benefit", "360 dni bezpieczeństwa", "7 dni za darmo") — never a random word, never more than one fragment per page.
- Works on both navy/gradient and white backgrounds.
- IMPORTANT: this is a deliberate typographic exception to the "red = SOS only" rule. Action red `#ED3745` remains reserved for SOS/emergency UI in the product; the H1 accent always uses brand red `#FF1616`.

## Trust line rules

- A horizontal list of exactly **3 short claims** with check icons.
- Icons: Lucide-style check, 16px, `--blue-action-500` (#5BADFF — "safe/info" blue, NOT red). Text: `--text-sm`, white at 75% on dark backgrounds.
- Use only on dark heroes (navy gradient); skip on light page headers.
- Claims are context-specific per page, not copy-pasted:
  - home PL (live): "Człowiek, nie bot · Dostępność 24/7 · Koncesjonowana agencja ochrony"
  - home UK (live): "Available 24/7 · Licensed security agency · A human on the other side"
  - about: "Dostępność 24/7 · Polska i Wielka Brytania · Koncesjonowana agencja ochrony"
  - B2B: "Ochrona 24/7, także po pracy · Wdrożenie bez działu IT · Certyfikat Safe Employer"
  - voucher: "360 dni ochrony · Idealny na prezent · Aktywacja w kilka minut"
- Never make claims that are not literally true (coverage, licensing). Coverage is **Poland and the United Kingdom** — see `guidelines/content-and-facts.md`.

## Implementation notes

- Content-driven: hero data carries optional `titleAccent: string` (must be a substring of `title`) and `trust: string[]`. Rendering splits the title around the accent — no HTML in content files.
- Shared components (safeme-site): `<HeroTitle title accent />`, `<HeroTrust items />`.
- In this design system: `components/marketing/` — `HeroEyebrow`, `HeroTitle`, `HeroTrust`.
- Keep the accent fragment identical in both languages semantically (PL "Bezpieczeństwa" ↔ EN "Safety").

## Do / Don't

- DO put the accent on the word the page is selling.
- DO keep trust claims verifiable and page-specific.
- DON'T accent more than one fragment or whole titles.
- DON'T use action red `#ED3745` for the accent or check icons.
- DON'T show a white trust line on light backgrounds.
