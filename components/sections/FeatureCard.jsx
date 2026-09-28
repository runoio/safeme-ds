import React from 'react';

/** Icon + title + body — site .features article / .highlight-card with .feature-icon.
 *  tone: brand (tinted blue circle, navy glyph) · safe (Obserwacja, blue fill) · help (Pomoc, red fill). */
export function FeatureCard({ icon, title, body, tone = 'brand', badgeIcon = false, style = {}, ...rest }) {
  const t = { brand: ['var(--blue-action-100)', 'var(--blue-800)'], safe: ['var(--blue-action-700)', 'var(--text-inverse)'], help: ['var(--action-red-500)', 'var(--text-inverse)'] }[tone] || ['var(--blue-action-100)', 'var(--blue-800)'];
  const ic = icon && <span style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: 'var(--radius-pill)', background: t[0], color: t[1], marginBottom: badgeIcon ? 0 : 'var(--space-4)', ...(badgeIcon ? { position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%,-50%)' } : {}) }}>{icon}</span>;
  return (
    <article style={{ position: 'relative', padding: badgeIcon ? 'calc(var(--space-6) + 22px) var(--space-6) var(--space-6)' : 'var(--space-6)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)', flex: '1 1 260px', maxWidth: 360, textAlign: badgeIcon ? 'center' : 'left', ...style }} {...rest}>
      {ic}
      <h3 style={{ margin: 0, fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-snug)', color: 'var(--text-strong)' }}>{title}</h3>
      <p style={{ margin: 'var(--space-4) 0 0', fontFamily: 'var(--font-body)', color: 'var(--text-muted)', lineHeight: 1.75 }}>{body}</p>
    </article>
  );
}
