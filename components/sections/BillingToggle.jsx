import React from 'react';

/** Monthly / annual toggle — site .pricing-toggle. Active = navy pill. */
export function BillingToggle({ options = [], value, onChange, style = {}, ...rest }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', ...style }} {...rest}>
      <div role="tablist" style={{ display: 'inline-flex', background: 'var(--neutral-50)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-pill)', padding: 'var(--space-1)' }}>
        {options.map((o) => {
          const on = o.value === value;
          return <button key={o.value} type="button" role="tab" aria-selected={on} onClick={() => onChange && onChange(o.value)} style={{ padding: '0.6rem 1.25rem', border: 'none', borderRadius: 'var(--radius-pill)', background: on ? 'var(--blue-800)' : 'transparent', color: on ? 'var(--text-inverse)' : 'var(--text-body)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--text-sm)', cursor: 'pointer' }}>{o.note ? `${o.label} — ${o.note}` : o.label}</button>;
        })}
      </div>
    </div>
  );
}
