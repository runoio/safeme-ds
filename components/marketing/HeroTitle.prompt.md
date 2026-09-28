**HeroTitle** — the standard hero H1: Montserrat extrabold, `line-height 1.08`, tight tracking, with **exactly one** fragment in brand red `#FF1616`. The accented fragment must carry the value proposition ("Bezpieczeństwa", "benefit", "7 dni za darmo") — never a random word, never two fragments.

```jsx
<HeroTitle title="Twój Asystent Bezpieczeństwa" accent="Bezpieczeństwa" />
<HeroTitle title="Testuj 7 dni za darmo" accent="7 dni za darmo" size="lp" />
<HeroTitle title="Ochrona dla Twojego zespołu" accent="Twojego zespołu" onDark={false} />
```

Props: `title`, `accent` (substring of title), `size` (service | lp), `onDark`, `as`.
