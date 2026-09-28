import React from 'react';

/**
 * Horizontal scroll-snap row — site .testimonials-bleed / .features-bleed / StepsCarousel.
 * Native swipe/trackpad scroll, hidden scrollbar, optional prev/next arrows. Children = cards.
 */
export function CardCarousel({ children, cardWidth = 320, gap = 24, arrows = true, prevLabel = 'Poprzednie', nextLabel = 'Następne', style = {}, ...rest }) {
  const ref = React.useRef(null);
  const by = (d) => { const el = ref.current; if (el) el.scrollBy({ left: d * (cardWidth + gap), behavior: 'smooth' }); };
  const nav = (d, label, path) => (
    <button type="button" aria-label={label} onClick={() => by(d)} style={{ width: 44, height: 44, borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', color: 'var(--blue-800)', display: 'grid', placeItems: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-xs)' }}>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d={path} strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', ...style }} {...rest}>
      <div ref={ref} style={{ display: 'flex', gap, overflowX: 'auto', scrollSnapType: 'x mandatory', padding: 'var(--space-1) 0 var(--space-3)', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
        {React.Children.map(children, (c) => <div style={{ flex: `0 0 ${cardWidth}px`, scrollSnapAlign: 'start', display: 'flex' }}>{React.isValidElement(c) ? React.cloneElement(c, { style: { ...(c.props.style || {}), flex: 1, maxWidth: 'none' } }) : c}</div>)}
      </div>
      {arrows && <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>{nav(-1, prevLabel, 'M15 18l-6-6 6-6')}{nav(1, nextLabel, 'M9 18l6-6-6-6')}</div>}
    </div>
  );
}
