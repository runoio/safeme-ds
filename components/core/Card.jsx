import React from 'react';

/** Card — rounded surface container with optional padding and elevation. */
export function Card({ elevation = 'sm', padding = 'md', style = {}, children, ...rest }) {
  const shadows = {
    none: 'none',
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
  };
  const pads = { none: 0, sm: 16, md: 20, lg: 28 };
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: shadows[elevation] ?? shadows.sm,
        padding: pads[padding] ?? pads.md,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
