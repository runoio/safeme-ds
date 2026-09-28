import React from 'react';

const L = { pl: ['Pobierz z', 'Pobierz z'], en: ['Download on', 'Download on'] };
const Apple = () => <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.19-1.73-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.62 1.11 8.79.73 1.06 1.6 2.25 2.74 2.21 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.08 2.65-2.14.84-1.23 1.18-2.42 1.2-2.48-.03-.01-2.3-.88-2.32-3.5zM14.2 6.1c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.68-.92 2.67.97.08 1.96-.49 2.56-1.22z" /></svg>;
const Play = () => <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M3.6 2.3c-.2.2-.3.6-.3 1v17.4c0 .4.1.8.3 1l.1.1 9.7-9.7v-.2L3.7 2.2l-.1.1zM16.6 15.3l-3.2-3.2v-.2l3.2-3.2.1.1 3.8 2.2c1.1.6 1.1 1.6 0 2.2l-3.8 2.2-.1-.1zM16.7 15.2 13.4 12l-9.8 9.7c.4.4 1 .4 1.7.1l11.4-6.6M16.7 8.8 5.3 2.2c-.7-.4-1.3-.3-1.7.1l9.8 9.7 3.3-3.2z" /></svg>;
/** Store buttons — site .store-badge. tone 'dark' (on navy: translucent) or 'light' (on white: navy fill). */
/** Official artwork: Apple developer badge SVG (EN — Apple has no stable hosted PL badge; pass appleSrc with a local PL file) and Google Play badge CDN (PL/EN). */
const OFFICIAL = {
  pl: { apple: 'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg', google: 'https://play.google.com/intl/en_us/badges/static/images/badges/pl_badge_web_generic.png', appleAlt: 'Pobierz w App Store', googleAlt: 'Pobierz z Google Play' },
  en: { apple: 'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg', google: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png', appleAlt: 'Download on the App Store', googleAlt: 'Get it on Google Play' },
};
export function StoreBadges({ lang = 'pl', appStoreUrl = '#', googlePlayUrl = '#', tone, onDark, variant = 'custom', height = 48, appleSrc, googleSrc, style = {}, ...rest }) {
  const dark = tone ? tone === 'dark' : !!onDark;
  if (variant === 'official') {
    const o = OFFICIAL[lang] || OFFICIAL.pl;
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-3)', ...style }} {...rest}>
        <a href={appStoreUrl} target="_blank" rel="noopener" style={{ display: 'inline-flex' }}><img src={appleSrc || o.apple} alt={o.appleAlt} style={{ height, width: 'auto', display: 'block' }} /></a>
        {/* Google's PNG carries built-in transparent padding (~15%); scale up so the visible badge matches Apple's height. */}
        <a href={googlePlayUrl} target="_blank" rel="noopener" style={{ display: 'inline-flex', height, alignItems: 'center', overflow: 'visible' }}><img src={googleSrc || o.google} alt={o.googleAlt} style={{ height: Math.round(height * 1.45), width: 'auto', display: 'block', margin: `0 -${Math.round(height * 0.12)}px` }} /></a>
      </div>
    );
  }
  const l = L[lang] || L.pl;
  const b = (Icon, top, name, href) => (
    <a href={href} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.625rem 1rem', borderRadius: 12, border: `1px solid ${dark ? 'rgba(255,255,255,0.25)' : 'transparent'}`, background: dark ? 'rgba(255,255,255,0.1)' : 'var(--blue-800)', color: 'var(--text-inverse)', textDecoration: 'none' }}>
      <Icon />
      <span style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1, gap: '0.2rem' }}>
        <span style={{ fontSize: '0.625rem', fontWeight: 'var(--fw-medium)', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.8, fontFamily: 'var(--font-body)' }}>{top}</span>
        <span style={{ fontFamily: 'var(--font-head)', fontSize: '1.0625rem', fontWeight: 'var(--fw-semibold)' }}>{name}</span>
      </span>
    </a>
  );
  return <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-3)', ...style }} {...rest}>{b(Apple, l[0], 'App Store', appStoreUrl)}{b(Play, l[1], 'Google Play', googlePlayUrl)}</div>;
}
