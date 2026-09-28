import React from 'react';

/**
 * Numbered steps. Variants mirror safeme.uk:
 *  list     — .steps-list: vertical, dividers, 40px tinted numbers (home "How it works")
 *  cards    — .step-card: row of cards, 32px numbers (about "What makes us different", onboarding)
 *  timeline — .how-to-use-column: connected 56px outlined numbers under an icon header (about "Step by step")
 */
export function HowItWorksSteps({ steps = [], variant = 'list', tone = 'safe', title, icon, start = 1, style = {}, ...rest }) {
  const txt = { margin: 'var(--space-2) 0 0', color: 'var(--text-muted)', lineHeight: 'var(--lh-relaxed)', fontFamily: 'var(--font-body)' };
  const h = { margin: 0, fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-snug)', color: 'var(--text-strong)' };
  if (variant === 'cards') return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-6)', ...style }} {...rest}>
      {steps.map((s, i) => (
        <li key={i} style={{ padding: 'var(--space-6)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)', flex: '1 1 220px', maxWidth: 300 }}>
          <span aria-hidden="true" style={{ display: 'grid', placeItems: 'center', width: 32, height: 32, borderRadius: 'var(--radius-pill)', background: 'var(--blue-action-100)', color: 'var(--blue-800)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', marginBottom: 'var(--space-3)' }}>{i + start}</span>
          <h3 style={h}>{s.title}</h3>
          <p style={{ ...txt, fontSize: 'var(--text-sm)' }}>{s.body}</p>
        </li>
      ))}
    </ol>
  );
  if (variant === 'timeline') {
    const accent = tone === 'danger' ? 'var(--action-red-600)' : 'var(--blue-action-700)';
    const tint = tone === 'danger' ? 'var(--action-red-100)' : 'var(--blue-action-100)';
    return (
      <div style={{ display: 'flex', flexDirection: 'column', ...style }} {...rest}>
        {title && <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-8)', paddingBottom: 'var(--space-4)', borderBottom: `2px solid ${tint}` }}>
          {icon && <span style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: 'var(--radius-pill)', background: accent, color: 'var(--text-inverse)' }}>{icon}</span>}
          <h3 style={{ ...h, fontSize: 'var(--text-h3)' }}>{title}</h3>
        </div>}
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <span aria-hidden="true" style={{ position: 'absolute', left: 27, top: 28, bottom: 28, width: 2, background: tint }}></span>
          {steps.map((s, i) => (
            <li key={i} style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start', position: 'relative' }}>
              <span aria-hidden="true" style={{ display: 'grid', placeItems: 'center', width: 56, height: 56, flex: 'none', borderRadius: 'var(--radius-pill)', background: 'var(--surface-card)', border: `2px solid ${accent}`, color: accent, fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-lg)' }}>{i + start}</span>
              <div>
                <h4 style={{ ...h, fontSize: 'var(--text-base)', margin: '0 0 var(--space-2)' }}>{s.title}</h4>
                <p style={{ ...txt, margin: 0, fontSize: 'var(--text-sm)' }}>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, ...style }} {...rest}>
      {steps.map((s, i) => (
        <li key={i} style={{ display: 'flex', gap: 'var(--space-4)', padding: i === 0 ? '0 0 var(--space-5)' : 'var(--space-5) 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)' }}>
          <span aria-hidden="true" style={{ flex: 'none', display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: 'var(--radius-pill)', background: 'var(--blue-action-100)', color: 'var(--blue-800)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)' }}>{i + start}</span>
          <div>
            <h3 style={h}>{s.title}</h3>
            <p style={txt}>{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
