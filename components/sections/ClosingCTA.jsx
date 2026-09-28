import React from 'react';
import { StoreBadges } from './StoreBadges.jsx';

/** Final CTA — site .final-cta: gradient-deep, centred H2, store badges (or custom children). */
export function ClosingCTA({ title, note, lang = 'pl', appStoreUrl, googlePlayUrl, children, style = {}, ...rest }) {
  return (
    <section style={{ padding: 'var(--space-16) var(--space-6)', borderRadius: 'var(--radius-xl)', background: 'var(--gradient-deep)', color: 'var(--text-inverse)', textAlign: 'center', ...style }} {...rest}>
      <h2 style={{ margin: '0 auto', maxWidth: '40rem', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-closing)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)', color: 'inherit', textWrap: 'balance' }}>{title}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
        {children || <StoreBadges tone="dark" lang={lang} appStoreUrl={appStoreUrl} googlePlayUrl={googlePlayUrl} />}
      </div>
      {note && <p style={{ margin: 'var(--space-3) 0 0', fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.65)' }}>{note}</p>}
    </section>
  );
}
