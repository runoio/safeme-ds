import React from 'react';

/** HeroEyebrow — uppercase micro-label above the hero H1. */
export function HeroEyebrow({ children, tone = 'safe', onDark = true, style = {}, ...rest }) {
  const color = tone === 'safe'
    ? (onDark ? 'var(--accent-safe)' : 'var(--text-link)')
    : onDark ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)';
  return (
    <span
      style={{
        display: 'block',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--fw-semibold)',
        fontSize: 'var(--text-sm)',
        letterSpacing: 'var(--ls-caps)',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
