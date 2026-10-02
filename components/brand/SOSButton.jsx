import React from 'react';

/**
 * SOSButton — the signature circular action control from the SafeMe app home.
 * Two brand variants:
 *   - 'help'    (default) → action red, label "POMOC", headset icon (Lucide "headset") — the emergency-call button.
 *   - 'observe'           → action blue, label "OBSERWACJA", navigation-arrow icon — start route monitoring.
 * A pulsing halo draws attention (on by default for 'help', off for 'observe').
 * `label`/`sublabel` override the variant defaults; press-and-hold semantics are the caller's concern.
 */
export function SOSButton({ variant = 'help', size = 200, label, sublabel, pulsing, icon = true, style = {}, ...rest }) {
  const variants = {
    help: {
      label: 'POMOC',
      bg: 'radial-gradient(circle at 50% 38%, var(--red-300) 0%, var(--action-red-500) 55%, var(--action-red-600) 100%)',
      ring: 'var(--action-red-500)',
      shadow: 'var(--shadow-sos)',
      pulse: true,
    },
    observe: {
      label: 'OBSERWACJA',
      bg: 'radial-gradient(circle at 50% 38%, var(--blue-action-300) 0%, var(--blue-action-500) 55%, var(--blue-action-600) 100%)',
      ring: 'var(--blue-action-500)',
      shadow: 'var(--shadow-observe)',
      pulse: false,
    },
  };
  const v = variants[variant] || variants.help;
  const text = label ?? v.label;
  const isPulsing = pulsing ?? v.pulse;
  const glyph = variant === 'observe'
    ? 'M3 11 21 3l-8 18-2-8-8-2z' // navigation arrow (Lucide "navigation")
    : 'M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z M21 16v2a4 4 0 0 1-4 4h-5'; // Lucide headset

  return (
    <button
      style={{
        position: 'relative',
        width: size,
        height: size,
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: Math.round(size * 0.035),
        background: v.bg,
        color: '#fff',
        boxShadow: v.shadow,
        transition: 'transform var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.96)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {isPulsing && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: -2,
            borderRadius: '50%',
            border: `2px solid ${v.ring}`,
            animation: 'safeme-sos-pulse 2s var(--ease-standard) infinite',
          }}
        />
      )}
      {icon && (
        <svg width={size * 0.26} height={size * 0.26} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d={glyph} />
        </svg>
      )}
      <span style={{ display: 'block', maxWidth: '90%', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: size * 0.092, letterSpacing: '0.02em', lineHeight: 1.05, textAlign: 'center', whiteSpace: 'nowrap' }}>
        {text}
      </span>
      {sublabel && (
        <span style={{ fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-semibold)', fontSize: size * 0.062, letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', opacity: 0.9 }}>
          {sublabel}
        </span>
      )}
      <style>{`@keyframes safeme-sos-pulse { 0% { transform: scale(1); opacity: 0.7; } 70% { transform: scale(1.18); opacity: 0; } 100% { transform: scale(1.18); opacity: 0; } }`}</style>
    </button>
  );
}
