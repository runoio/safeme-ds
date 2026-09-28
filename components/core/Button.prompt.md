**Button** — the primary pill-shaped action control. Use `primary` (dark blue) for the main path, `safe` (action blue) for reassuring/informational actions, `danger` (action red) for destructive or emergency actions, and `outline`/`ghost` for secondary paths.

```jsx
<Button variant="primary" size="lg" onClick={start}>Rozpocznij obserwację</Button>
<Button variant="safe" iconLeft={<MapPin size={18} />}>Wybierz trasę</Button>
<Button variant="outline">Anuluj</Button>
```

Props: `variant` (primary | safe | danger | outline | ghost), `size` (sm | md | lg), `fullWidth`, `disabled`, `iconLeft`, `iconRight`.
