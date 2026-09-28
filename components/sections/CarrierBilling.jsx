import React from 'react';

/** 'Dolicz do rachunku' (PL only) — site .section-subblock + .operator-logos, centred grey box under Packages. */
export function CarrierBilling({ title = 'Dolicz do rachunku', body, carriers = [], style = {}, ...rest }) {
  return (
    <section style={{ marginTop: 'var(--space-10)', padding: 'var(--space-8)', background: 'var(--neutral-100)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-xl)', textAlign: 'center', ...style }} {...rest}>
      <h3 style={{ margin: '0 0 var(--space-2)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-section)', lineHeight: 'var(--lh-snug)', color: 'var(--text-strong)' }}>{title}</h3>
      {body && <p style={{ margin: '0 auto', maxWidth: '44rem', fontFamily: 'var(--font-body)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-body)' }}>{body}</p>}
      <ul style={{ listStyle: 'none', margin: 'var(--space-6) 0 0', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-4)' }}>
        {carriers.map((c, i) => <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-4) var(--space-6)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>{c.logo ? <img src={c.logo} alt={c.name} style={{ height: 28, width: 'auto', display: 'block' }} /> : c.name}</li>)}
      </ul>
    </section>
  );
}
