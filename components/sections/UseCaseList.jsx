import React from 'react';

const Dot = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>;
/** 'When to use the app' — site .use-case-categories: small caps label + chips with 36px icon circles.
 *  Group tone 'danger' tints chips red (Needs extra care). Items: string or { text, icon }. */
export function UseCaseList({ groups = [], style = {}, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', ...style }} {...rest}>
      {groups.map((g, i) => { const danger = g.tone === 'danger'; return (
        <div key={i}>
          {g.title && <span style={{ display: 'block', textTransform: 'uppercase', letterSpacing: 'var(--ls-caps)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-xs)', color: danger ? 'var(--action-red-600)' : 'var(--text-link)', marginBottom: 'var(--space-4)' }}>{g.title}</span>}
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 'var(--space-3)' }}>
            {g.items.map((it, j) => { const item = typeof it === 'string' ? { text: it } : it; return (
              <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-4) var(--space-5)', background: danger ? 'var(--red-50)' : 'var(--surface-card)', border: `1px solid ${danger ? 'var(--action-red-100)' : 'var(--border-subtle)'}`, borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)', color: 'var(--text-body)', fontFamily: 'var(--font-body)', flex: '1 1 240px', maxWidth: 320 }}>
                <span style={{ display: 'grid', placeItems: 'center', width: 36, height: 36, flex: 'none', borderRadius: 'var(--radius-pill)', background: danger ? 'var(--action-red-500)' : 'var(--blue-action-100)', color: danger ? 'var(--text-inverse)' : 'var(--blue-800)' }}>{item.icon || <Dot />}</span>
                <span>{item.text}</span>
              </li>
            ); })}
          </ul>
        </div>
      ); })}
    </div>
  );
}
