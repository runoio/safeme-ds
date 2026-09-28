import React from 'react';

/**
 * HeroTrust — a horizontal list of exactly 3 short, page-specific claims with
 * check icons. Dark heroes only. Check icons use action blue (never red).
 */
export function HeroTrust({ items = [], style = {}, ...rest }) {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 'var(--space-2) var(--space-5)',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        ...style,
      }}
      {...rest}
    >
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.75)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-action-500)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: 'none' }}>
            <path d="M5 13l4 4L19 7" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}
