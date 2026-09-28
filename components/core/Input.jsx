import React from 'react';

/**
 * Input — labelled text field with optional leading icon and helper/error text.
 */
export function Input({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  iconLeft = null,
  helper = '',
  error = '',
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const invalid = !!error;
  const borderColor = invalid
    ? 'var(--action-red-500)'
    : focused
    ? 'var(--blue-action-500)'
    : 'var(--border-default)';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style }}>
      {label && (
        <span style={{ fontSize: '0.875rem', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>
          {label}
        </span>
      )}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          height: 48,
          padding: '0 14px',
          background: disabled ? 'var(--neutral-100)' : 'var(--neutral-0)',
          border: `1.5px solid ${borderColor}`,
          borderRadius: 'var(--radius-md)',
          boxShadow: focused && !invalid ? `0 0 0 3px var(--focus-ring)` : 'none',
          transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
        }}
      >
        {iconLeft && <span style={{ color: 'var(--text-muted)', display: 'inline-flex' }}>{iconLeft}</span>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-strong)',
          }}
          {...rest}
        />
      </span>
      {(helper || error) && (
        <span style={{ fontSize: '0.8125rem', color: invalid ? 'var(--action-red-500)' : 'var(--text-muted)' }}>
          {error || helper}
        </span>
      )}
    </label>
  );
}
