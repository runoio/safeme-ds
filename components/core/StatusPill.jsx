import React from 'react';

/**
 * StatusPill — outlined availability/status pill used on dark marketing surfaces.
 * Taken from lp.safeme.pl ("Dostępni 24/7"): transparent fill, hairline light
 * border, colored status dot, white label. Also has a light-surface variant.
 */
export function StatusPill({
  children,
  dotColor = 'var(--app-online)',
  dot = true,
  size = 'md',
  onDark = true,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { fontSize: '0.8125rem', padding: '7px 16px', gap: 8, dot: 7 },
    md: { fontSize: '0.9375rem', padding: '10px 22px', gap: 10, dot: 9 },
    lg: { fontSize: '1.0625rem', padding: '13px 28px', gap: 11, dot: 10 },
  };
  const s = sizes[size] || sizes.md;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: s.gap,
        padding: s.padding,
        background: 'transparent',
        border: `1px solid ${onDark ? 'rgba(255,255,255,0.35)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-pill)',
        color: onDark ? 'var(--neutral-0)' : 'var(--text-strong)',
        fontFamily: 'var(--font-head)',
        fontWeight: 'var(--fw-semibold)',
        fontSize: s.fontSize,
        lineHeight: 1,
        letterSpacing: 'var(--ls-normal)',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: s.dot, height: s.dot, borderRadius: '50%', background: dotColor, flex: 'none' }} />}
      {children}
    </span>
  );
}
