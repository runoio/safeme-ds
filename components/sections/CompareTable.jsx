import React from 'react';

/** SafeMe vs alternative — two-lane timeline: alternative (muted, right-aligned) | numbered spine | SafeMe (label + strong answer). Last step marked action-red. */
export function CompareTable({ columns = [], rows = [], style = {}, ...rest }) {
  const head = { fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 'var(--text-md, 16px)', paddingBottom: 'var(--space-3)' };
  const line = (show) => ({ width: 2, flex: 1, background: show ? 'var(--border-subtle)' : 'transparent' });
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 56px minmax(0,1fr)', ...style }} {...rest}>
      <div style={{ ...head, textAlign: 'right', color: 'var(--text-muted)' }}>{columns[0]}</div>
      <div></div>
      <div style={{ ...head, color: 'var(--blue-action-700)' }}>{columns[1]}</div>
      {rows.map((r, i) => {
        const last = i === rows.length - 1;
        return (
          <React.Fragment key={i}>
            <p style={{ margin: 0, padding: 'var(--space-4) 0', textAlign: 'right', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-muted)' }}>{r.other}</p>
            <div aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={line(true)}></span>
              <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 12, lineHeight: 1, color: 'var(--text-inverse)', background: last ? 'var(--action-red-500)' : 'var(--blue-800)', borderRadius: 'var(--radius-pill)', padding: '6px 10px' }}>{i + 1}</span>
              <span style={line(!last)}></span>
            </div>
            <div style={{ padding: 'var(--space-4) 0' }}>
              <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{r.label}</div>
              <p style={{ margin: '4px 0 0', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)', fontWeight: 600, color: 'var(--text-strong)' }}>{r.safeme}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
