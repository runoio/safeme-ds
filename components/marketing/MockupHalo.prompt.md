**MockupHalo** — the "guardian pulse" behind a phone mockup: a slow breathing blue glow plus two expanding ripple rings (thick + thin, offset by half a cycle, so it reads as a heartbeat rather than a radar). Signals calm, active protection.

```jsx
<MockupHalo>
  <img src="/assets/reference-app-home.png" alt="SafeMe" width={280} />
</MockupHalo>

{/* calmer, wider */}
<MockupHalo intensity={0.25} tempo={6} reach={2}>…</MockupHalo>
```

Rules: action blue only — **never red** (a red pulse reads as an alarm and is reserved for SOS UI). One instance per viewport, behind app visuals only. Keep cycles ≥4s; faster reads as urgency. Honours `prefers-reduced-motion` automatically (animations stop, rings hide, static halo stays). Works on light and navy backgrounds.

Props: `intensity` (halo alpha, 0.35), `tempo` (seconds, 4.5), `reach` (end scale, 1.7), `color`.
