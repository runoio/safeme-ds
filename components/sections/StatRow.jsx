import React from 'react';

/** KPI tiles — site .assistant-stat. direction 'column' (inside AssistantSection) or 'row'. */
export function StatRow({ stats = [], direction = 'row', onDark = false, style = {}, ...rest }) {
  const col = direction === 'column';
  const line = onDark ? 'rgba(255,255,255,0.18)' : 'var(--border-subtle)';
  return (
    <dl style={{ margin: 0, display: 'flex', flexDirection: col ? 'column' : 'row', flexWrap: col ? 'nowrap' : 'wrap', ...style }} {...rest}>
      {stats.map((s, i) => (
        <div key={i} style={{ flex: col ? 1 : '1 1 160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-1)', padding: 'var(--space-6)', textAlign: 'center', borderBottom: col && i < stats.length - 1 ? `1px solid ${line}` : 'none', borderLeft: !col && i > 0 ? `1px solid ${line}` : 'none' }}>
          <dt style={{ fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-extrabold)', fontSize: 'var(--text-h3)', lineHeight: 'var(--lh-snug)', color: onDark ? 'var(--text-inverse)' : 'var(--text-strong)' }}>{s.value}</dt>
          <dd style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', lineHeight: 'var(--lh-normal)', color: onDark ? 'rgba(255,255,255,0.72)' : 'var(--text-muted)' }}>{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}
