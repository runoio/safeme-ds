import React from 'react';

/**
 * SafeMe Button — primary action control.
 * Variants: primary (dark blue), safe (action blue), danger (action red),
 * outline, ghost. Sizes: sm, md, lg. Pill-shaped by brand convention.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { fontSize: '0.875rem', padding: '0 16px', height: 36, gap: 6 },
    md: { fontSize: '1rem', padding: '0 22px', height: 46, gap: 8 },
    lg: { fontSize: '1.0625rem', padding: '0 30px', height: 56, gap: 10 },
  };
  const variants = {
    primary: { background: 'var(--blue-800)', color: 'var(--neutral-0)', border: '1px solid var(--blue-800)' },
    safe: { background: 'var(--blue-action-700)', color: 'var(--neutral-0)', border: '1px solid var(--blue-action-700)' },
    danger: { background: 'var(--action-red-500)', color: 'var(--neutral-0)', border: '1px solid var(--action-red-500)' },
    outline: { background: 'transparent', color: 'var(--blue-800)', border: '1.5px solid var(--border-default)' },
    ghost: { background: 'transparent', color: 'var(--blue-800)', border: '1px solid transparent' },
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;

  return (
    <button
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        width: fullWidth ? '100%' : 'auto',
        fontFamily: 'var(--font-head)',
        fontWeight: 'var(--fw-semibold)',
        fontSize: s.fontSize,
        lineHeight: 1,
        letterSpacing: 'var(--ls-normal)',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard)',
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
