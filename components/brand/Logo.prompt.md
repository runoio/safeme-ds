**Logo** — the SafeMe brand mark, inline SVG (no asset path needed). Use `wordmark` for the full lockup and `sygnet` for the compact "E" chevron mark (app icon, avatars, favicons). The chevrons are always brand red; `tone` sets the letter color for dark/light backgrounds.

```jsx
<Logo variant="wordmark" tone="dark" height={40} />
<Logo variant="sygnet" height={48} />
<Logo variant="wordmark" tone="light" />  {/* on dark blue surfaces */}
```
