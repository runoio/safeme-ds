import React from 'react';

/** Partner logos — site .partner-logos-row: centred row of white chips, logos 28px tall. */
export function LogoStrip({ title, body, logos = [], align = 'center', style = {}, ...rest }) {
  const c = align === 'center';
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', textAlign: c ? 'center' : 'left', ...style }} {...rest}>
      {(title || body) && <div style={{ maxWidth: '44rem', margin: c ? '0 auto' : 0 }}>
        {title && <h2 style={{ margin: '0 0 var(--space-4)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-section)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)', color: 'var(--text-strong)' }}>{title}</h2>}
        {body && <p style={{ margin: 0, fontFamily: 'var(--font-body)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-body)' }}>{body}</p>}
      </div>}
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: c ? 'center' : 'flex-start', gap: 'var(--space-4)' }}>
        {logos.map((l, i) => <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-4) var(--space-6)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>{l.src ? <img src={l.src} alt={l.name} style={{ height: 28, width: 'auto', display: 'block' }} /> : l.name}</li>)}
      </ul>
    </section>
  );
}
