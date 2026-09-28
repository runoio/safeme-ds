import React from 'react';

/**
 * HeroTitle — H1 with exactly one brand-red accent fragment.
 * `accent` must be a substring of `title`; the title is split around it so
 * content files never carry HTML. Brand red #FF1616 is used deliberately here
 * (action red #ED3745 stays reserved for SOS/emergency UI).
 */
export function HeroTitle({ title = '', accent = '', size = 'service', onDark = true, as: Tag = 'h1', style = {}, ...rest }) {
  const fontSize = size === 'lp' ? 'clamp(2rem, 6.5vw, 3.25rem)' : 'clamp(2.25rem, 4vw, 3.5rem)';
  const i = accent ? title.indexOf(accent) : -1;
  const before = i >= 0 ? title.slice(0, i) : title;
  const after = i >= 0 ? title.slice(i + accent.length) : '';
  return (
    <Tag
      style={{
        margin: 0,
        fontFamily: 'var(--font-head)',
        fontWeight: 'var(--fw-extrabold)',
        fontSize,
        lineHeight: 1.08,
        letterSpacing: 'var(--ls-tight)',
        color: onDark ? 'var(--neutral-0)' : 'var(--text-strong)',
        textWrap: 'pretty',
        ...style,
      }}
      {...rest}
    >
      {before}
      {i >= 0 && <span style={{ color: 'var(--safeme-red)' }}>{accent}</span>}
      {after}
    </Tag>
  );
}
