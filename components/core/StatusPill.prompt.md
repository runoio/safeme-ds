**StatusPill** — the outlined availability pill from lp.safeme.pl ("Dostępni 24/7"): transparent fill, hairline light border, green status dot, white Montserrat label. Use it above a hero headline or near a CTA to signal live 24/7 availability. Differs from `Badge` (filled, tinted, small) — StatusPill is larger and made for dark marketing surfaces.

```jsx
<StatusPill>Dostępni 24/7</StatusPill>
<StatusPill size="sm" dotColor="var(--blue-action-500)">Asystent czuwa</StatusPill>
<StatusPill onDark={false}>Dostępni 24/7</StatusPill>  {/* on light surfaces */}
```

Props: `dotColor`, `dot`, `size` (sm | md | lg), `onDark`.
