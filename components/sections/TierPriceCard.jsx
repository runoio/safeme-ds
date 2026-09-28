import React from 'react';

/** B2B volume tier — same card language as PricingCard (radius-lg, h4 name, extrabold h2 price, muted note). highlight = featured frame. */
export function TierPriceCard({ tier, price, unit, note, highlight = false, badge, style = {}, ...rest }) {
  return (
    <article style={{ position: 'relative', display: 'flex', flexDirection: 'column', padding: 'var(--space-8) var(--space-6)', background: 'var(--surface-card)', border: highlight ? '2px solid var(--blue-action-500)' : '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: highlight ? 'var(--shadow-lg)' : 'var(--shadow-xs)', flex: '1 1 240px', maxWidth: 360, ...style }} {...rest}>
      {highlight && badge && <span style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--blue-action-700)', color: 'var(--text-inverse)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: 'var(--ls-caps)', padding: 'var(--space-1) var(--space-4)', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap' }}>{badge}</span>}
      <h3 style={{ margin: '0 0 var(--space-5)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-h4)', color: 'var(--text-strong)' }}>{tier}</h3>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-1)', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-head)', fontSize: 'var(--text-h2)', fontWeight: 'var(--fw-extrabold)', color: 'var(--text-strong)', lineHeight: 1.2 }}>{price}</span>
        {unit && <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>{unit}</span>}
      </div>
      {note && <p style={{ margin: 'var(--space-1) 0 0', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-body)', color: highlight ? 'var(--blue-800)' : 'var(--text-muted)', fontWeight: highlight ? 'var(--fw-semibold)' : 'var(--fw-regular)' }}>{note}</p>}
    </article>
  );
}
