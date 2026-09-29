import React from 'react';

/** Text + media in one card. Optional gapScale = [left, middle, right] draws the safety-gap bar under the title. Media is always a vertical 9:16 VideoCard. — site .content-section--split. tone 'dark' = hero gradient panel, 'light' = white card. */
export function SplitPanel({ title, text, media, tone = 'dark', mediaWidth = 260, gapScale, highlight, style = {}, ...rest }) {
  const dark = tone === 'dark';
  const paras = String(text || '').split(/\n\n+/);
  const strong = dark ? 'var(--text-inverse)' : 'var(--text-strong)';
  const emph = (p) => { if (!highlight || !p.includes(highlight)) return p; const [a, b] = p.split(highlight); return <>{a}<strong style={{ color: strong, fontWeight: 'var(--fw-semibold)' }}>{highlight}</strong>{b}</>; };
  const lbl = { fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 12, lineHeight: 1.2, letterSpacing: '0.08em', textTransform: 'uppercase', paddingBottom: 10 };
  const muted = dark ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)';
  return (
    <section style={{ display: 'grid', gridTemplateColumns: media ? `repeat(auto-fit, minmax(min(100%, ${mediaWidth}px), 1fr))` : '1fr', gap: 'var(--space-8)', alignItems: 'center', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)', background: dark ? 'var(--gradient-hero)' : 'var(--surface-card)', border: dark ? 'none' : '1px solid var(--border-subtle)', boxShadow: dark ? 'none' : 'var(--shadow-xs)', color: dark ? 'var(--text-inverse)' : 'var(--text-body)', ...style }} {...rest}>
      <div style={{ flex: 1 }}>
        <h2 style={{ margin: '0 0 var(--space-4)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-section)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)', color: dark ? 'inherit' : 'var(--text-strong)' }}>{title}</h2>
        {gapScale && (
          <div aria-hidden="true" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr 1fr', alignItems: 'end', margin: 'var(--space-6) 0 var(--space-6)' }}>
            <div style={{ ...lbl, color: muted }}>{gapScale[0]}</div>
            <div style={{ ...lbl, color: dark ? 'var(--blue-action-300)' : 'var(--blue-action-700)', textAlign: 'center' }}>{gapScale[1]}</div>
            <div style={{ ...lbl, color: muted, textAlign: 'right' }}>{gapScale[2]}</div>
            <span style={{ height: 10, borderRadius: '999px 0 0 999px', background: dark ? 'rgba(255,255,255,0.25)' : 'var(--neutral-200)' }}></span>
            <span style={{ height: 10, background: 'linear-gradient(90deg, var(--blue-action-600), var(--blue-action-300))', boxShadow: '0 0 24px rgba(91,173,255,0.6)' }}></span>
            <span style={{ height: 10, borderRadius: '0 999px 999px 0', background: 'var(--action-red-500)' }}></span>
          </div>
        )}
        {paras.map((p, i) => <p key={i} style={{ margin: i ? 'var(--space-4) 0 0' : 0, fontFamily: 'var(--font-body)', lineHeight: 'var(--lh-relaxed)', color: dark ? 'rgba(255,255,255,0.85)' : 'var(--text-body)' }}>{emph(p)}</p>)}
      </div>
      {media && <div style={{ maxWidth: mediaWidth, width: '100%', justifySelf: 'center' }}>{media}</div>}
    </section>
  );
}
