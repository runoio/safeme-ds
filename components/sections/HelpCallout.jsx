import React from 'react';

/** 'Call for help' — site .sos-callout: dark panel, copy left, 152px round red button right. */
export function HelpCallout({ eyebrow, title, titleAccent, body, ctaLabel = 'Wezwij pomoc', onCta, href = '#', style = {}, ...rest }) {
  const t = titleAccent && title.includes(titleAccent) ? [title.slice(0, title.indexOf(titleAccent)), titleAccent, title.slice(title.indexOf(titleAccent) + titleAccent.length)] : [title, null, ''];
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-10)', padding: 'var(--space-12) var(--space-10)', borderRadius: 'var(--radius-xl)', background: 'var(--gradient-deep)', color: 'var(--text-inverse)', ...style }} {...rest}>
      <div style={{ flex: '1 1 320px' }}>
        {eyebrow && <span style={{ display: 'inline-flex', textTransform: 'uppercase', letterSpacing: 'var(--ls-caps)', color: 'var(--accent-safe)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>{eyebrow}</span>}
        <h2 style={{ margin: 0, fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-section)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)', color: 'inherit' }}>{t[0]}{t[1] && <span style={{ color: 'var(--safeme-red)' }}>{t[1]}</span>}{t[2]}</h2>
        {body && <p style={{ margin: 'var(--space-4) 0 0', maxWidth: '34rem', fontFamily: 'var(--font-body)', lineHeight: 'var(--lh-relaxed)', color: 'rgba(255,255,255,0.8)' }}>{body}</p>}
      </div>
      <a href={href} onClick={onCta} style={{ position: 'relative', flex: 'none', width: 152, height: 152, display: 'grid', placeItems: 'center', padding: '0 var(--space-4)', borderRadius: '50%', background: 'radial-gradient(circle at 50% 38%, var(--red-300) 0%, var(--action-red-500) 55%, var(--action-red-600) 100%)', boxShadow: 'var(--shadow-sos)', color: 'var(--text-inverse)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-base)', lineHeight: 1.2, textAlign: 'center', textDecoration: 'none', margin: '0 auto' }}>
        <span aria-hidden="true" style={{ position: 'absolute', inset: -12, borderRadius: '50%', border: '2px solid var(--action-red-500)', opacity: 0.6 }}></span>
        {ctaLabel}
      </a>
    </section>
  );
}
