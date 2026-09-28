import React from 'react';

/** Click-to-load video facade — site .video-embed. SafeMe videos are vertical Shorts (9:16). */
export function VideoCard({ thumbnail, videoId, caption, showCaption = true, href, onPlay, orientation = 'vertical', playColor = 'var(--action-red-500)', onDark = false, style = {}, ...rest }) {
  const [playing, setPlaying] = React.useState(false);
  const vertical = orientation !== 'horizontal';
  const poster = thumbnail || (videoId ? `https://i.ytimg.com/vi/${videoId}/${vertical ? 'oar2' : 'maxresdefault'}.jpg` : null);
  const click = () => { if (onPlay) onPlay(); else if (href) window.open(href, '_blank', 'noopener'); else if (videoId) setPlaying(true); };
  const fill = { position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 };
  return (
    <div style={{ position: 'relative', aspectRatio: vertical ? '9 / 16' : '16 / 9', width: '100%', maxWidth: vertical ? 340 : 480, margin: '0 auto', overflow: 'hidden', borderRadius: 'var(--radius-lg)', border: onDark ? 'none' : '1px solid var(--border-subtle)', background: 'var(--neutral-900)', boxShadow: onDark ? 'none' : 'var(--shadow-lg)', ...style }} {...rest}>
      {playing ? (
        <iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`} title={caption || 'SafeMe'} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen style={fill}></iframe>
      ) : (
        <button type="button" onClick={click} aria-label={caption || 'Odtwórz wideo'} style={{ ...fill, cursor: 'pointer', background: 'none', padding: 0 }}>
          {poster && <img src={poster} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
          <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent 55%)' }}></span>
          <span aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', display: 'grid', placeItems: 'center', width: 64, height: 64, borderRadius: 'var(--radius-pill)', background: playColor, color: 'var(--text-inverse)', boxShadow: 'var(--shadow-lg)' }}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" style={{ marginLeft: 3 }}><path d="M8 5v14l11-7z" /></svg>
          </span>
          {showCaption && caption && <span style={{ position: 'absolute', insetInline: 0, bottom: 0, padding: 'var(--space-4)', textAlign: 'left', fontFamily: 'var(--font-head)', fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-inverse)' }}>{caption}</span>}
        </button>
      )}
    </div>
  );
}
