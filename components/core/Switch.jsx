import React from 'react';

/** Switch — on/off toggle. On-state uses action blue (safe). */
export function Switch({ checked = false, onChange, disabled = false, style = {}, ...rest }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{
        width: 48,
        height: 28,
        borderRadius: 'var(--radius-pill)',
        border: 'none',
        padding: 3,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: checked ? 'flex-end' : 'flex-start',
        background: checked ? 'var(--blue-action-500)' : 'var(--neutral-300)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background var(--dur-base) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: 'var(--neutral-0)',
          boxShadow: 'var(--shadow-sm)',
          transition: 'transform var(--dur-base) var(--ease-standard)',
        }}
      />
    </button>
  );
}
