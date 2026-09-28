**SOSButton** — the two large circular actions from the SafeMe app home. `variant="help"` is the red **POMOC** emergency button (pulsing halo); `variant="observe"` is the action-blue **OBSERWACJA** button that starts route monitoring. Place them side by side as the screen's focal point; they never compete with other primary actions.

```jsx
<SOSButton variant="help" size={148} onClick={callHelp} />
<SOSButton variant="observe" size={148} onClick={startRoute} />
```

Props: `variant` (help | observe), `size`, `label`, `sublabel`, `pulsing`, `icon`.
