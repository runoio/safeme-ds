# SafeMe — App UI Kit

A high-fidelity, click-through recreation of the **SafeMe mobile app**, matched to the real app home screen provided by the client (`assets/reference-app-home.png`, PL & EN). The app is a **dark theme**. Screens beyond the home are informed interpretations (route monitoring, emergency assistant) — reconcile against the real app if more references become available.

## Screens
- **HomeScreen** — matches the real app: assistant header (avatar + online dot, "Dominik / Asystent Bezpieczeństwa", red sygnet), assistant intro card + carousel dots, and the two circular actions **Pomoc** (red) & **Obserwacja** (blue). Dark pill tab bar (SafeMe / Samouczek / Profil).
- **RouteSetupScreen** — "Obserwacja trasy": pick transport mode, set from/to, start monitoring.
- **ActiveMonitoringScreen** — dark live map with an animating route line, assigned assistant, ETA + progress, and always-reachable "Wezwij pomoc".
- **AssistantCallScreen** — the emergency flow after Pomoc: connecting → connected, assistant identity, quick-reply chat, and call controls.

## Flow
`index.html` mounts a phone frame and a small state machine: Home → Route setup → Active monitoring → (SOS) → Assistant. SOS from Home or Active jumps straight to the Assistant screen.

## Composition
- Chrome (`AppChrome.jsx`): `StatusBar`, `TopBar`, `TabBar`, `FauxMap`, and an `Icon` helper wrapping Lucide.
- Screens compose DS components: `Button`, `IconButton`, `Input`, `Badge`, `Card`, `SOSButton`, `Logo`.
- Each JSX file registers its exports on `window`; `index.html` loads them via Babel and mounts once all are ready.

## Icons
Lucide (CDN) — substitution flagged in the root readme (no official SafeMe icon set was provided).
