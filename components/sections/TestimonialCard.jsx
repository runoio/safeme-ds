import React from 'react';

/** Review card — site .testimonial-card: amber stars, locale quotes, name · rating. Quote verbatim. */
export function TestimonialCard({ quote, author, rating = 5, lang = 'pl', style = {}, ...rest }) {
  const [o, c] = lang === 'pl' ? ['„', '”'] : ['“', '”'];
  return (
    <figure style={{ margin: 0, padding: 'var(--space-6)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', ...style }} {...rest}>
      <span aria-label={`${rating} / 5`} style={{ display: 'inline-flex', gap: 2, color: 'var(--warning)' }}>
        {[0,1,2,3,4].map((i) => <svg key={i} viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" /></svg>)}
      </span>
      <blockquote style={{ margin: 0, flex: 1, fontFamily: 'var(--font-body)', color: 'var(--text-body)', lineHeight: 'var(--lh-relaxed)' }}>{o}{quote}{c}</blockquote>
      <figcaption style={{ fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>{author} <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-regular)' }}>· {Number(rating).toFixed(1)}</span></figcaption>
    </figure>
  );
}
