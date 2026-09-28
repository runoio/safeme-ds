import React from 'react';

/** Safety-gap diagram — site .safety-gap-diagram: bracket over "unease → something happens", red 112 dot at the end. */
export function SafetyGapScale({ stages = [], pillLabel = 'Safety gap · SafeMe', style = {}, ...rest }) {
  const end = stages[stages.length - 1] || { title: '112' };
  return (
    <div style={{ position: 'relative', padding: 'var(--space-12) var(--space-6) var(--space-6)', background: 'var(--neutral-100)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-xl)', ...style }} {...rest}>
      <span style={{ position: 'absolute', top: 'var(--space-5)', left: '29%', transform: 'translateX(-50%)', display: 'inline-flex', padding: '0.4rem 0.9rem', background: 'var(--blue-action-100)', color: 'var(--blue-800)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--text-xs)', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap' }}>{pillLabel}</span>
      <svg viewBox="0 0 600 150" aria-hidden="true" style={{ display: 'block', width: '100%', height: 'auto' }}>
        <path d="M46,120 V58 Q46,48 56,48 H294 Q304,48 304,58 V120" fill="none" stroke="var(--border-default)" strokeWidth="2" />
        <line x1="46" y1="120" x2="560" y2="120" stroke="var(--border-default)" strokeWidth="2" />
        <circle cx="46" cy="120" r="9" fill="var(--blue-800)" />
        <circle cx="304" cy="120" r="8" fill="var(--surface-card)" stroke="var(--blue-800)" strokeWidth="2.5" />
        <circle cx="560" cy="120" r="18" fill="var(--action-red-500)" />
        <text x="560" y="124" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="Montserrat, sans-serif">{end.short || end.title}</text>
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
        {stages.map((s, i) => { const last = i === stages.length - 1; return (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', maxWidth: 150, alignItems: last ? 'flex-end' : 'flex-start', textAlign: last ? 'right' : 'left', marginLeft: last ? 'auto' : 0 }}>
            <strong style={{ fontFamily: 'var(--font-head)', fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>{s.title}</strong>
            {s.caption && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{s.caption}</span>}
          </div>
        ); })}
      </div>
    </div>
  );
}
