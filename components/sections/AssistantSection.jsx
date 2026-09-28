import React from 'react';
import { StatRow } from './StatRow.jsx';

/** 'Who is your Safety Assistant' — site .assistant-card: round photo with halo + badge │ text │ KPI column. */
export function AssistantSection({ image, imageAlt = '', title, body, stats = [], style = {}, ...rest }) {
  const [wide, setWide] = React.useState(true);
  const ref = React.useRef(null);
  React.useEffect(() => { const el = ref.current; if (!el || !window.ResizeObserver) return; const ro = new ResizeObserver(([e]) => setWide(e.contentRect.width >= 860)); ro.observe(el); return () => ro.disconnect(); }, []);
  const div = wide ? { borderRight: '1px solid var(--border-subtle)' } : { borderBottom: '1px solid var(--border-subtle)' };
  return (
    <section ref={ref} style={{ display: 'flex', flexDirection: wide ? 'row' : 'column', alignItems: 'stretch', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--surface-card)', ...style }} {...rest}>
      <div style={{ ...div, flex: wide ? '0 0 260px' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-8)' }}>
        <div style={{ position: 'relative', width: 180, height: 180 }}>
          <span aria-hidden="true" style={{ position: 'absolute', inset: '-14%', borderRadius: '50%', background: 'radial-gradient(closest-side, rgba(91,173,255,0.35), rgba(91,173,255,0.12) 65%, transparent)', filter: 'blur(24px)' }}></span>
          <span aria-hidden="true" style={{ position: 'absolute', inset: -10, borderRadius: '50%', border: '3px solid rgba(91,173,255,0.35)' }}></span>
          {image ? <img src={image} alt={imageAlt} style={{ position: 'relative', zIndex: 1, width: 180, height: 180, borderRadius: '50%', objectFit: 'cover', display: 'block' }} /> : <span style={{ position: 'relative', zIndex: 1, display: 'block', width: 180, height: 180, borderRadius: '50%', background: 'var(--surface-sunken)' }}></span>}
          <span aria-hidden="true" style={{ position: 'absolute', zIndex: 2, bottom: -4, right: -4, width: 48, height: 48, borderRadius: '50%', background: 'var(--blue-action-700)', color: 'var(--text-inverse)', border: '4px solid var(--surface-card)', display: 'grid', placeItems: 'center' }}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
          </span>
        </div>
      </div>
      <div style={{ ...div, flex: wide ? 1.3 : 'none', padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ margin: '0 0 var(--space-4)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-section)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)', color: 'var(--text-strong)' }}>{title}</h2>
        {body && <p style={{ margin: 0, fontFamily: 'var(--font-body)', lineHeight: 'var(--lh-relaxed)', color: 'var(--text-body)' }}>{body}</p>}
      </div>
      {stats.length > 0 && <StatRow stats={stats} direction="column" style={{ flex: wide ? '0 0 300px' : 'none' }} />}
    </section>
  );
}
