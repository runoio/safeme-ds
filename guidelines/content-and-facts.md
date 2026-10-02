# SafeMe — content & product facts

Single source of truth for copy, pricing, and site structure. Updated 28.07.2026 from the client's content documents (`uploads/SafeMe_*.docx`, `*.xlsx`); re-synced 28.09.2026 against `runoio/safeme-site` main (`lib/i18n.ts`) — the code is the source of truth and matches production. **Use these values verbatim — never invent claims, prices, or coverage.**

## Company

SFM SOFT Sp. z o.o., ul. Jana Kazimierza 64/128, 01-248 Warszawa
KRS: 0001024285 · NIP: 5273046788 · REGON: 524692469

**Contacts PL:** biuro@safeme.pl (general) · b2b@safeme.pl (B2B sales) · marketing@safeme.pl (media, partnerships, influencers) · support@safeme.pl (app & account issues)
**Contacts UK:** office@safeme.uk (general) · b2b@safeme.uk · support@safeme.uk

**Social:** Instagram / TikTok — PL `@safeme.official`, UK `@safeme.uk`. Shared: Facebook, LinkedIn (`/company/safemeapp`), YouTube.

**Naming by market:** PL „Asystent Bezpieczeństwa” ↔ UK “Safety Assistant”; Obserwacja ↔ Observation; Pomoc ↔ Help.

**B2B demo booking:** https://calendly.com/karolbedynski_safeme/safeme-asystent-bezpieczenstwa-24-7-prezentacja

## Coverage — IMPORTANT

SafeMe operates **24/7 in Poland and the United Kingdom**. Earlier copy said "cała Polska" only; UK is now live. Match coverage to the page's market:
- PL pages: "na terenie Polski i Wielkiej Brytanii" (or "całej Polski" where the context is strictly domestic).
- Never claim coverage beyond PL + UK.

## The two core actions

The product has exactly two user actions, always capitalized as proper nouns in copy:
- **Obserwacja** (Observation) — the user sets destination + transport mode; the Safety Assistant monitors the route and reacts if anything deviates from plan.
- **Pomoc** (Help) — one tap in a threatening situation; the Assistant assesses, advises, and dispatches services if needed.

Both are **unlimited** in every plan.

## Pricing

**Poland (PLN, gross)** — annual price = monthly × 10 (2 months free)

| Plan | People | Monthly | Per person | Annual | Yearly saving |
|---|---|---|---|---|---|
| Personal | 1 | 19,99 zł | 19,99 zł | 199,90 zł | 39,98 zł |
| Family | 3 | 53,97 zł | 17,99 zł | 539,70 zł | 107,94 zł |
| Family+ | 5 | 89,95 zł | 17,99 zł | 899,50 zł | 179,90 zł |

**United Kingdom (GBP)**

| Plan | People | Monthly | Per person | Annual | Yearly saving |
|---|---|---|---|---|---|
| Personal | 1 | £7.99 | £7.99 | £79.90 | £15.98 |
| Family | 3 | £20.97 | £6.99 | £209.70 | £41.94 |
| Family+ | 5 | £34.95 | £6.99 | £349.50 | £69.90 |

**Plan names (live site):** Personal · Family · Family+. „Family” carries the „Najpopularniejszy” / “Most popular” badge. Billing toggle: „Miesięcznie / Rocznie — 2 miesiące gratis” · “Monthly / Annual — 2 months free”. CTA per card: „Wybieram {plan}” / “Choose {plan}”.
**Carrier billing (PL only):** „Dolicz do rachunku” — Play, Plus, T-Mobile, Orange.
**Free trial:** first 7 days free, every plan.
**Voucher:** 360 days of protection for **199,90 zł** — "płacisz jak za 10 miesięcy, a korzystasz przez cały rok".

**B2B (per employee / month, invoiced; rule 100+ = −20%, 200+ = −30% of retail, synced 02.10.2026 from safeme-site `lib/i18n.ts`):** PL 100+ 15,99 zł / os. (cena detaliczna 19,99 zł) · 200+ 13,99 zł / os. (oszczędność 30%) · 300+ oferta indywidualna. UK 100+ £6.39 (retail £7.99) · 200+ £5.59 (save 30%) · 300+ custom offer. No onboarding costs, no upfront fees; unlimited Help + Observations per licence. Employer has no access to employees' location or usage.
**Cafeteria platforms:** Pluxee · Motivizer · Worksmile · Nais.
**Awards:** Innovation of the Year 2025 (Gold, Service + main prize) · Orzeł Innowacji 2025 · Mobile Trends Awards (nagroda główna, kategoria „Mobile w służbie bezpieczeństwa”).
**B2B contact person:** Karol Bedyński, Head of Partnerships, co-founder.
**Videos (YouTube ids):** t2u1c61gDxI How it works · 30 seconds · 4h3pY5HJ78k When I use SafeMe · bQXmvbEu5mg What is the safety gap? · aElGkelznvM One tap safety assistant.

## Site structure

Service pages (with navigation) — PL / EN:

| Page | PL | EN |
|---|---|---|
| Home | safeme.pl | safeme.uk |
| O aplikacji | /o-aplikacji | /about |
| Dla firm | /dla-firm | /offer |
| Voucher | /voucher | /voucher |
| Kontakt | /kontakt | /contact |
| FAQ | /faq | /faq |
| Pobierz aplikację | /pobierz-aplikacje | /download-app |
| Regulamin aplikacji | /regulamin-aplikacji | /app-terms-of-service |
| Polityka prywatności (app) | /polityka-prywatnosci-aplikacja | /privacy-policy-app |
| Polityka prywatności (www) | /polityka-prywatnosci | /privacy-policy-www |
| Usuń konto | /usun-konto | — (PL only) |
| SAFEME2 (info i cena) | /info-i-cena-dv | — (PL only) |

Thank-you pages (noindex, no nav in content, site layout):

| After | PL | EN |
|---|---|---|
| Voucher purchase (Stripe) | /dziekujemy-voucher | /thank-you-voucher |
| Meeting booked (Calendly) | /dziekujemy-spotkanie | /thank-you-meeting |

Landing pages (no navigation, separate template):

| LP | PL | EN |
|---|---|---|
| Zdrowie / Health | /zdrowie | /health |
| Nastolatki / Teens | /nastolatki | /teens |
| Seniorzy / Seniors | /seniorzy | /seniors |
| Randki / Dating | /randki | /dating |
| Praca / Commute | /praca | /commute |
| Taxi | /taxi | /taxi |
| Prezent / Gift | /bezpieczenstwo-bliskich | /safety-for-loved-ones |

Total: 12 service pages (10 bilingual + 2 PL-only), 4 thank-you pages, 7 landing pages — each bilingual, with automatic redirect from a foreign slug to its counterpart.

## Approved page copy

### Home (safeme.pl) — live 27.09.2026
- **Eyebrow:** Asystent Bezpieczeństwa 24/7
- **H1:** Prawdziwa osoba czuwa nad Twoją drogą do domu.
- **Sub:** Powiedz aplikacji, dokąd idziesz. Przeszkolony Asystent Bezpieczeństwa na żywo śledzi Twoją trasę, we dnie i w nocy. Gdy coś wygląda podejrzanie, kontaktuje się z Tobą. Jeśli nie odpowiesz, wysyła pomoc na Twoją lokalizację.
- **CTA:** store badges — note „Testuj 7 dni za darmo.”
- **Trust line:** Człowiek, nie bot · Dostępność 24/7 · Koncesjonowana agencja ochrony
- **Sections (order):** Jak to działa (3 kroki: Ustaw trasę → Asystent Bezpieczeństwa czuwa nad trasą → Gdy coś jest nie tak, reaguje; + 30 s video) · Kim jest Asystent Bezpieczeństwa (stats: 30 sekund · 24/7 · Człowiek, nie bot) · Wezwij pomoc · Pakiety · Safety gap (scale: Czujesz niepokój → Coś się dzieje → 112) · Opinie · Benefit pracowniczy · closing CTA
- **Stat claim:** „30 sekund — średni czas do pierwszego kontaktu od zgłoszenia”.

**Master copy = repo `runoio/safeme-site` main, `lib/i18n.ts`** (matches production, verified with screenshots 28.09.2026).

### Home (safeme.uk) — from code
- **Eyebrow:** Safety Assistant 24/7
- **H1:** A real person watching your journey home. — accent "real person"
- **Sub:** Tell the app where you're going. A trained Safety Assistant follows your route live, day and night. If something looks wrong, they get in touch. If you can't answer, they send help to where you are.
- **Note:** Try it free for 7 days. (italic, same row as store badges)
- **Trust:** A person, not a bot · On duty 24/7 · Licensed security agency
- **Steps:** "Three steps. / One person looking out for you." — Set your route · A Safety Assistant watches over it · If something's off, they act
- **Help callout:** "Feel unsafe right now? One tap." — accent "One tap"; button "Call for help"
- **Safety gap (UK):** "For the moments before it's a 999 call." — scale ends at **999**, not 112. Pill "The safety gap · SafeMe".
- **Reviews:** UK-specific names (Charlotte, Sophie, Ryan, Emma, Chloe, Grace) — never reuse PL names on UK.
- **No carrier billing on UK** (Polish operators only).
- **Annual per person (UK):** Personal £79.90 · Family/Family+ £69.90 / yr.

### Emergency number by market
PL = **112**, UK = **999**. Every safety-gap diagram, FAQ and copy line must use the market's number.

### About (both markets) — section order from code
Hero (photo) → Step by step (Observation / Call for Help timelines) → Who is your Safety Assistant → When to use the app (vertical video left + 3 categories) → Comparison "Why not just share my location with a friend?" (table + video) → "Why SafeMe and not the emergency number?" (dark panel + vertical video) → What makes us different (6 numbered cards, carousel) → Packages → FAQ "Good questions" → Final CTA.

### O aplikacji (/o-aplikacji) · About (/about)
- **H1:** Aplikacja SafeMe / The SafeMe app — accent "SafeMe"
- **Sub:** Całodobowe wsparcie Asystentów Bezpieczeństwa w Twoim telefonie. Jednym kliknięciem zamówisz Obserwację trasy lub wezwiesz Pomoc.
- **Trust PL:** Dostępność 24/7 · Polska i UK · Koncesjonowana agencja ochrony
- **Full page copy (all sections, PL + EN, verbatim):** `guidelines/copy-about.md`

### Dla firm (/dla-firm)
- **H1:** Bezpieczeństwo jako benefit dla Twojego zespołu
- **Sub:** Zapewnij pracownikom całodobowe wsparcie Asystentów Bezpieczeństwa - w drodze do pracy, podczas pracy w terenie i po godzinach. Realna ochrona, z której korzysta się naprawdę, a nie kolejna pozycja w pakiecie benefitów.
- **CTA:** Umów spotkanie (Calendly)

### Voucher (/voucher)
- **H1:** Voucher SafeMe - 360 dni bezpieczeństwa
- **Sub:** Podaruj sobie lub bliskiej osobie całoroczny dostęp do wsparcia Asystentów Bezpieczeństwa. Voucher zapewnia 360 dni ochrony w cenie 199,90 zł - płacisz jak za 10 miesięcy, a korzystasz przez cały rok.
- **CTA:** Kup voucher

### Pobierz aplikację (/pobierz-aplikacje)
- **H1:** Pobierz aplikację i testuj 7 dni za darmo
- **Sub:** Załóż konto w kilka minut i sprawdź, jak działa całodobowe wsparcie Asystentów Bezpieczeństwa - bez opłat i bez zobowiązań.

### Kontakt (/kontakt)
- **H1:** Skontaktuj się z nami
- **Sub:** Masz pytanie o aplikację, ofertę dla firm albo współpracę? Napisz do nas - odpowiadamy możliwie szybko.
- **Closing:** Poczuj się bezpiecznie. Pobierz aplikację i testuj przez 7 dni za darmo.

## The safety gap

The central positioning idea, phrased consistently:

> Między poczuciem zagrożenia a momentem, w którym można wezwać służby, istnieje luka — tzw. safety gap. Gdy czujesz się niepewnie, ale nic jeszcze się nie stało, numer alarmowy Ci nie pomoże, bo nie ma podstaw do interwencji. Tę lukę wypełnia Asystent Bezpieczeństwa.

Concrete triggers used in copy: ktoś idzie za Tobą · taksówka zjeżdża z trasy · wracasz do domu późną porą.

## Use cases

Taxi and ride-hailing · public transport · walking home after dark · outdoor activity (e.g. running) · meeting people met online · returning from events · children travelling alone · emergencies and any sense of threat.

B2B: lone fieldwork and client visits (estate agents, service technicians, sales reps, care workers) · returns from 2nd/3rd shift · commutes · business travel in unfamiliar cities · emergencies (collapse, accident).

## Testimonials

Real user testimonials, grouped by LP theme (Zdrowie, Nastolatki, Seniorzy, …), live in `uploads/SafeMe_testimoniale_tematyczne_LP.xlsx`. Each has a rating, body, and first-name signature; some are theme-dedicated, some shared across LPs, and a few carry an approved UK/EN variant. **Quote them verbatim — never write new ones.**

## Data & privacy claim

Dane przetwarzamy zgodnie z RODO i przechowujemy na serwerach w Unii Europejskiej. Udostępniamy je wyłącznie służbom ratowniczym i tylko w ramach aktywnego zgłoszenia.
