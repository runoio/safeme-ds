# Mockup halo (pulsing glow behind phone mockups)

Animated "guardian pulse" behind phone mockups: a breathing blue glow plus expanding ripple rings. Communicates the brand promise (someone is watching over you — calm, active protection) without using alarm colors. Reference implementation: `safeme-site` (`.mockup-float/.mockup-halo/.mockup-ring` in `app/globals.css`, used on the home "How it works" mockup); LP original: `.lp-halo/.lp-ring`.

In this design system: `components/marketing/MockupHalo.jsx`.

## Anatomy

Wrapper `position: relative` around the mockup `<img>`; the image sits at `z-index: 1` with a navy drop-shadow. Behind it, three absolutely-positioned spans (all `aria-hidden`):

1. **Halo** — radial gradient (NOT a flat fill): action blue `#5BADFF` at 0.35 in the center → 0.12 at 65% → transparent, `blur(32px)`, inset ~6%. Animated with a slow "breath": scale 0.92 → 1.04, opacity 0.75 → 1, `5s ease-in-out infinite alternate`.
2. **Ripple rings ×2** — circular borders expanding from the center and fading out: scale 0.7 → 1.7, opacity 0.55 → 0, `4.5s ease-out infinite` (ease-out = the wave dissipates naturally). Second ring delayed by exactly half the period (2.25s) for an even rhythm.
3. **Alternating wave weight** — first ring 3px at 0.5 alpha (bold wave), delayed ring 1.5px at 0.4 alpha (subtle wave). The thick/thin alternation reads as a heartbeat, not a radar.

## Rules

- Color is always action blue `#5BADFF` ("safe/info"). NEVER red — a red pulse reads as an alarm and is reserved for SOS UI in the product.
- Use behind phone mockups / app visuals only; one instance per viewport. It is an accent, not wallpaper.
- Keep the motion slow (≥4s cycles). Faster pulses read as urgency/danger.
- `prefers-reduced-motion: reduce`: stop all animations AND hide the rings (`opacity: 0`) — a frozen mid-fade ring looks like a rendering artifact. The static halo may stay.
- Works on light and navy backgrounds (alpha-based).

## Tuning knobs

- Intensity: halo center alpha (default 0.35) → `intensity`.
- Tempo: ring cycle duration (default 4.5s; delay = half of it) → `tempo`.
- Reach: ripple end scale (default 1.7) → `reach`.
