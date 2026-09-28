import React from 'react';

/** FAQ — site .faq-list: one white card, items split by hairlines, small grey + that rotates. First item open. */
export function FAQAccordion({ items = [], defaultOpen = 0, allowMultiple = true, style = {}, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen == null ? [] : [defaultOpen]);
  const toggle = (i) => setOpen((o) => o.includes(i) ? o.filter((x) => x !== i) : allowMultiple ? [...o, i] : [i]);
  return (
    <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)', padding: '0 var(--space-6)', ...style }} {...rest}>
      {items.map((it, i) => { const on = open.includes(i); return (
        <div key={i} style={{ padding: 'var(--space-2) 0', borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
          <button type="button" aria-expanded={on} onClick={() => toggle(i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', padding: 'var(--space-3) 0', background: 'none', border: 0, cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--text-base)', color: 'var(--text-strong)' }}>
            {it.q}
            <span aria-hidden="true" style={{ display: 'grid', placeItems: 'center', width: 24, height: 24, flex: 'none', borderRadius: 'var(--radius-pill)', background: 'var(--neutral-100)', color: 'var(--neutral-500)', transform: on ? 'rotate(45deg)' : 'none', transition: 'transform var(--dur-base) var(--ease-standard)' }}><svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"><path d="M9 3h2v6h6v2h-6v6H9v-6H3V9h6z" /></svg></span>
          </button>
          {on && <p style={{ margin: 0, padding: '0 var(--space-10) var(--space-4) 0', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)', color: 'var(--neutral-600)' }}>{it.a}</p>}
        </div>
      ); })}
    </div>
  );
}
