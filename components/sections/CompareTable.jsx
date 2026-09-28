import React from 'react';

/** SafeMe vs alternative — site .compare-table: rounded bordered table, SafeMe column tinted action-blue. */
export function CompareTable({ columns = [], rows = [], style = {}, ...rest }) {
  const cell = { padding: 'var(--space-4) var(--space-5)', textAlign: 'left', verticalAlign: 'top', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' };
  const head = { ...cell, fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' };
  const hi = { background: 'var(--blue-action-100)', color: 'var(--text-strong)' };
  return (
    <div style={{ overflowX: 'auto', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xs)', background: 'var(--surface-card)', ...style }} {...rest}>
      <table style={{ width: '100%', minWidth: 560, borderCollapse: 'collapse' }}>
        <thead><tr>
          <th scope="col" style={{ ...head, background: 'var(--neutral-100)' }}></th>
          <th scope="col" style={{ ...head, background: 'var(--neutral-100)' }}>{columns[0]}</th>
          <th scope="col" style={{ ...head, ...hi }}>{columns[1]}</th>
        </tr></thead>
        <tbody>
          {rows.map((r, i) => { const b = i < rows.length - 1 ? '1px solid var(--border-subtle)' : 'none'; return (
            <tr key={i}>
              <th scope="row" style={{ ...head, whiteSpace: 'nowrap', borderTop: '1px solid var(--border-subtle)' }}>{r.label}</th>
              <td style={{ ...cell, color: 'var(--text-body)', borderTop: '1px solid var(--border-subtle)' }}>{r.other}</td>
              <td style={{ ...cell, ...hi, borderTop: '1px solid var(--border-subtle)' }}>{r.safeme}</td>
            </tr>
          ); })}
        </tbody>
      </table>
    </div>
  );
}
