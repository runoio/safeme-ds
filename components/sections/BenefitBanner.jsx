import React from 'react';

/** B2B teaser — site .cta-banner: soft blue→red wash, eyebrow, H2, text, navy button. */
export function BenefitBanner({ eyebrow = 'Dla firm', title, body, ctaLabel, onCta, href = '#', note, style = {}, ...rest }) {
  return (
    <section style={{ padding: 'var(--space-10)', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(135deg, rgba(91,173,255,0.15), rgba(237,55,69,0.08))', border: '1px solid rgba(91,173,255,0.18)', boxShadow: 'var(--shadow-sm)', ...style }} {...rest}>
      {eyebrow && <span style={{ display: 'inline-flex', marginBottom: 'var(--space-4)', color: 'var(--text-link)', textTransform: 'uppercase', letterSpacing: 'var(--ls-caps)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--text-sm)' }}>{eyebrow}</span>}
      <h2 style={{ margin: 0, fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-section)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)', color: 'var(--text-strong)' }}>{title}</h2>
      {body && <p style={{ margin: 'var(--space-4) 0 0', fontFamily: 'var(--font-body)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-body)', maxWidth: '48rem' }}>{body}</p>}
      {ctaLabel && <a href={href} onClick={onCta} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: 'var(--space-6)', minHeight: 46, padding: '0.75rem 1.5rem', border: '1px solid var(--blue-800)', borderRadius: 'var(--radius-pill)', background: 'var(--blue-800)', color: 'var(--text-inverse)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-semibold)', lineHeight: 1, textDecoration: 'none' }}>{ctaLabel}</a>}
      {note && <p style={{ margin: 'var(--space-2) 0 0', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{note}</p>}
    </section>
  );
}
