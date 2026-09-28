import React from 'react';
const Check = () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true" style={{ flex: 'none', marginTop: 3, color: 'var(--blue-action-500)' }}><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>);

/** Plan card — site .pricing-card. Featured (Family): 2px action-blue border, lifted, blue badge + blue CTA. */
export function PricingCard({ name, people, price, period = 'mies.', perPerson, features = [], ctaLabel, onCta, href = '#', popular = false, popularLabel = 'Najpopularniejszy', style = {}, ...rest }) {
  const per = String(period).replace(/^\/\s*/, '');
  return (
    <article style={{ position: 'relative', display: 'flex', flexDirection: 'column', padding: 'var(--space-8) var(--space-6)', background: 'var(--surface-card)', border: popular ? '2px solid var(--blue-action-500)' : '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: popular ? 'var(--shadow-lg)' : 'var(--shadow-xs)', transform: popular ? 'translateY(calc(-1 * var(--space-3)))' : 'none', ...style }} {...rest}>
      {popular && <span style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--blue-action-700)', color: 'var(--text-inverse)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: 'var(--ls-caps)', padding: 'var(--space-1) var(--space-4)', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap' }}>{popularLabel}</span>}
      <h3 style={{ margin: '0 0 var(--space-1)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-h4)', color: 'var(--text-strong)' }}>{name}</h3>
      {people && <p style={{ margin: '0 0 var(--space-5)', color: 'var(--text-muted)', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-body)' }}>{people}</p>}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-1)' }}>
        <span style={{ fontFamily: 'var(--font-head)', fontSize: 'var(--text-h2)', fontWeight: 'var(--fw-extrabold)', color: 'var(--text-strong)', lineHeight: 1.2 }}>{price}</span>
        {per && <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>/ {per}</span>}
      </div>
      {perPerson && <p style={{ margin: 'var(--space-1) 0 var(--space-5)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-body)', color: popular ? 'var(--blue-800)' : 'var(--text-muted)', fontWeight: popular ? 'var(--fw-semibold)' : 'var(--fw-regular)' }}>{perPerson}</p>}
      {features.length > 0 && <>
        <div aria-hidden="true" style={{ height: 1, background: 'var(--border-subtle)', marginBottom: 'var(--space-5)' }}></div>
        <ul style={{ listStyle: 'none', margin: '0 0 var(--space-6)', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', flexGrow: 1 }}>
          {features.map((f, i) => <li key={i} style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-start', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-body)', color: 'var(--text-body)' }}><Check />{f}</li>)}
        </ul>
      </>}
      <a href={href} onClick={onCta} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: 'auto', padding: '0.75rem 1.5rem', minHeight: 46, border: `1px solid ${popular ? 'var(--blue-action-700)' : 'var(--blue-800)'}`, borderRadius: 'var(--radius-pill)', background: popular ? 'var(--blue-action-700)' : 'var(--surface-card)', color: popular ? 'var(--text-inverse)' : 'var(--blue-800)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-semibold)', textDecoration: 'none' }}>{ctaLabel}</a>
    </article>
  );
}
