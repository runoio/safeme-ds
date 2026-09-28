import React from 'react';

/** Award tile — site .features article + .award-logo (72px logo on top). */
export function AwardCard({ logo, logoAlt = '', title, body, style = {}, ...rest }) {
  return (
    <article style={{ padding: 'var(--space-6)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)', ...style }} {...rest}>
      {logo && <div style={{ marginBottom: 'var(--space-4)' }}><img src={logo} alt={logoAlt} style={{ height: 72, width: 'auto', maxWidth: '100%', display: 'block' }} /></div>}
      <h3 style={{ margin: 0, fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-snug)', color: 'var(--text-strong)' }}>{title}</h3>
      {body && <p style={{ margin: 'var(--space-4) 0 0', fontFamily: 'var(--font-body)', color: 'var(--text-muted)', lineHeight: 1.75 }}>{body}</p>}
    </article>
  );
}
