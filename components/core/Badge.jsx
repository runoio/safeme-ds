import React from 'react';

/**
 * Badge — small status/label pill.
 * Tones: neutral, brand, safe, danger, success, warning.
 */
export function Badge({ tone = 'neutral', size = 'md', dot = false, children, style = {}, ...rest }) {
  const tones = {
    neutral: { bg: 'var(--neutral-100)', fg: 'var(--neutral-700)', dot: 'var(--neutral-500)' },
    brand: { bg: 'var(--red-50)', fg: 'var(--red-700)', dot: 'var(--safeme-red)' },
    safe: { bg: 'var(--blue-action-50)', fg: 'var(--text-link)', dot: 'var(--blue-action-500)' },
    danger: { bg: 'var(--action-red-100)', fg: 'var(--action-red-600)', dot: 'var(--action-red-500)' },
    success: { bg: 'var(--success-100)', fg: 'var(--success)', dot: 'var(--success)' },
    warning: { bg: 'var(--warning-100)', fg: 'var(--warning-700)', dot: 'var(--warning)' },
  };
  const t = tones[tone] || tones.neutral;
  const pad = size === 'sm' ? '3px 9px' : '5px 12px';
  const fs = size === 'sm' ? '0.6875rem' : '0.75rem';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: pad,
        background: t.bg,
        color: t.fg,
        fontFamily: 'var(--font-head)',
        fontWeight: 'var(--fw-semibold)',
        fontSize: fs,
        letterSpacing: 'var(--ls-wide)',
        borderRadius: 'var(--radius-pill)',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: t.dot }} />}
      {children}
    </span>
  );
}
