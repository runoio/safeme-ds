import React from 'react';

/** Text + media in one card — site .content-section--split. tone 'dark' = hero gradient panel, 'light' = white card. */
export function SplitPanel({ title, text, media, tone = 'dark', mediaWidth = 260, style = {}, ...rest }) {
  const dark = tone === 'dark';
  const paras = String(text || '').split(/\n\n+/);
  return (
    <section style={{ display: 'grid', gridTemplateColumns: media ? `repeat(auto-fit, minmax(min(100%, ${mediaWidth}px), 1fr))` : '1fr', gap: 'var(--space-8)', alignItems: 'center', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)', background: dark ? 'var(--gradient-hero)' : 'var(--surface-card)', border: dark ? 'none' : '1px solid var(--border-subtle)', boxShadow: dark ? 'none' : 'var(--shadow-xs)', color: dark ? 'var(--text-inverse)' : 'var(--text-body)', ...style }} {...rest}>
      <div style={{ flex: 1 }}>
        <h2 style={{ margin: '0 0 var(--space-4)', fontFamily: 'var(--font-head)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--text-section)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)', color: dark ? 'inherit' : 'var(--text-strong)' }}>{title}</h2>
        {paras.map((p, i) => <p key={i} style={{ margin: i ? 'var(--space-4) 0 0' : 0, fontFamily: 'var(--font-body)', lineHeight: 'var(--lh-relaxed)', color: dark ? 'rgba(255,255,255,0.85)' : 'var(--text-body)' }}>{p}</p>)}
      </div>
      {media && <div style={{ maxWidth: mediaWidth, width: '100%', justifySelf: 'center' }}>{media}</div>}
    </section>
  );
}
