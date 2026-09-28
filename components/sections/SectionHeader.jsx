import React from 'react';

/** Section opener — site .eyebrow + .section-block > h2 + .section-lead. */
export function SectionHeader({ eyebrow, title, subtitle, align = 'left', onDark = false, style = {}, ...rest }) {
  const center = align === 'center';
  return (
    <header style={{ display: 'flex', flexDirection: 'column', alignItems: center ? 'center' : 'flex-start', textAlign: center ? 'center' : 'left', maxWidth: center ? '44rem' : 'none', margin: center ? '0 auto' : 0, ...style }} {...rest}>
      {eyebrow && <span style={{ display: 'inline-flex', textTransform: 'uppercase', letterSpacing: 'var(--ls-caps)', color: onDark ? 'var(--accent-safe)' : 'var(--text-link)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>{eyebrow}</span>}
      <h2 style={{ margin: '0 0 var(--space-4)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-section)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)', color: onDark ? 'var(--text-inverse)' : 'var(--text-strong)', textWrap: 'balance' }}>{title}</h2>
      {subtitle && <p style={{ margin: '0 0 var(--space-6)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)', color: onDark ? 'rgba(255,255,255,0.85)' : 'var(--text-body)', textWrap: 'pretty' }}>{subtitle}</p>}
    </header>
  );
}
