import React from 'react';

/** B2B final CTA — site .final-cta + .cta-contact: centred title, white button, contact person under it. */
export function ContactPersonCTA({ title, photo, name, role, ctaLabel = 'Book a meeting', href = '#', onCta, style = {}, ...rest }) {
  return (
    <section style={{ padding: 'var(--space-16) var(--space-6)', borderRadius: 'var(--radius-xl)', background: 'var(--gradient-deep)', color: 'var(--text-inverse)', textAlign: 'center', ...style }} {...rest}>
      <h2 style={{ margin: '0 auto', maxWidth: '44rem', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-section)', lineHeight: 'var(--lh-snug)', color: 'inherit', textWrap: 'pretty' }}>{title}</h2>
      <a href={href} onClick={onCta} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: 'var(--space-6)', minHeight: 46, padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-pill)', background: 'var(--neutral-0)', color: 'var(--blue-800)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-semibold)', lineHeight: 1, textDecoration: 'none' }}>{ctaLabel}</a>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-6)', textAlign: 'left' }}>
        {photo && <img src={photo} alt={name} style={{ width: 56, height: 56, borderRadius: 'var(--radius-pill)', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.4)' }} />}
        <div>
          <strong style={{ display: 'block', fontFamily: 'var(--font-head)', color: 'var(--text-inverse)' }}>{name}</strong>
          {role && <span style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)' }}>{role}</span>}
        </div>
      </div>
    </section>
  );
}
