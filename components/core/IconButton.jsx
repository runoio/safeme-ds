import React from 'react';

/**
 * IconButton — square/circular button wrapping a single icon.
 * Use inside toolbars, headers, and list rows.
 */
export function IconButton({
  variant = 'ghost',
  size = 'md',
  round = true,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const dims = { sm: 34, md: 42, lg: 52 };
  const d = dims[size] || dims.md;
  const variants = {
    solid: { background: 'var(--blue-800)', color: 'var(--neutral-0)', border: '1px solid var(--blue-800)' },
    safe: { background: 'var(--blue-action-50)', color: 'var(--text-link)', border: '1px solid var(--blue-action-100)' },
    ghost: { background: 'transparent', color: 'var(--blue-800)', border: '1px solid transparent' },
    outline: { background: 'var(--neutral-0)', color: 'var(--blue-800)', border: '1.5px solid var(--border-default)' },
  };
  const v = variants[variant] || variants.ghost;
  return (
    <button
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: d,
        height: d,
        borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.92)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
