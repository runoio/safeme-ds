import React from 'react';

/**
 * Logo — the SafeMe brand mark, rendered inline.
 * `variant`: 'wordmark' (full lockup) or 'sygnet' (the E chevron mark).
 * `tone`: 'dark' (black letters), 'light' (white letters), 'mono' (single color).
 * The "afeM" chevrons always render in brand red unless tone='mono'.
 * `subBrand`: optional sub-brand label locked up under the mark (e.g. 'Nieruchomości').
 */
export function Logo({ variant = 'wordmark', tone = 'dark', height, subBrand, style = {}, ...rest }) {
  const letter = tone === 'light' ? '#FFFFFF' : tone === 'mono' ? 'currentColor' : '#000000';
  const red = tone === 'mono' ? 'currentColor' : '#FF1616';

  if (subBrand) return <SubBrandLock variant={variant} tone={tone} height={height} label={subBrand} style={style} {...rest} />;

  if (variant === 'sygnet') {
    const h = height || 40;
    return (
      <svg viewBox="0 0 59.28 47.52" height={h} style={{ display: 'block', ...style }} {...rest} aria-label="SafeMe" role="img">
        <polygon points="18.71 18.22 11.96 18.22 0 47.52 16.84 47.52 24.1 29.59 42.4 29.59 47 18.22 28.71 18.22 18.71 18.22" fill={red} />
        <polygon points="19.4 0 14.37 12.31 54.23 12.31 59.28 0 19.4 0" fill={red} />
        <polygon points="21.75 47.52 40.32 47.52 45.37 35.21 26.77 35.21 21.75 47.52" fill={red} />
      </svg>
    );
  }

  const h = height || 34;
  return (
    <svg viewBox="0 0 400 78" height={h} style={{ display: 'block', ...style }} {...rest} aria-label="SafeMe" role="img">
      <path d="M0.168204 53.8747L15.1138 50.2694C14.4512 59.4446 18.5243 63.0499 23.2491 63.0499C27.648 63.0499 31.3844 60.9774 31.8298 54.857C32.3837 48.5207 26.2143 45.3472 19.9472 40.9863C13.68 36.9492 6.86981 30.6021 9.40056 18.9118C11.8227 7.31868 19.9472 0.000102162 34.6864 0.000102162C43.7015 0.000102162 55.1279 3.60542 54.6934 19.009L41.1707 22.6143C41.2902 16.3859 38.086 13.547 33.8066 13.3203C29.6249 13.1044 26.4424 15.3929 25.5626 19.9912C24.6828 24.9135 29.4076 27.4286 34.9145 30.6992C42.6153 34.9522 51.8477 40.6516 48.6544 55.7205C45.7869 69.3754 35.7942 77.4604 21.8262 77.4604C10.9429 77.4604 -1.60224 72.5381 0.168204 53.8639V53.8747Z" fill={letter} />
      <path d="M277.722 0.000102162H302.919L301.806 58.5079L324.665 0.000102177L351.819 0.000102162L335.227 77.4088H317.534L332.045 16.7553H331.382L305.206 77.4088H290.912L290.478 16.7553H289.706L278.497 77.398H261.021L277.719 0L277.722 0.000102162Z" fill={letter} />
      <path d="M178.021 30.0102L155.005 77.0305H175.805L175.827 76.9765L189.719 48.6089H238.748L247.655 29.9995H178.021V30.0102Z" fill={red} />
      <path d="M196.52 57.9994L187.005 77.4833H226.4L235.763 57.9994H196.52Z" fill={red} />
      <path d="M192.107 1.99945L183.005 20.5873H217.768H252.53L261.437 1.99945H226.772H192.107Z" fill={red} />
      <path d="M125.287 0.000102162H165.638L162.017 16.8648H139.37L136.068 32.1604H154.979L151.796 47.0134H132.886L126.51 77.3996H108.589L125.287 0.000102162Z" fill={letter} />
      <path fillRule="evenodd" clipRule="evenodd" d="M85.4969 77.3888L85.8336 63.8418H67.912L62.2965 77.3888H44.0382L78.9947 0.000102162H100.779L102.973 77.3996H85.4969V77.3888ZM87.4846 15.9689L86.1595 49.9603H73.636L87.0501 15.9689H87.4846Z" fill={letter} />
      <path d="M366.004 0.000102162L400.006 0.000102162L396.823 16.8633H375.6L372.298 32.1589H391.208L388.025 47.0227H369.115L365.813 62.437H387.037L383.952 77.4088H344.818L360.98 0.000102162H364.004H366.004Z" fill={letter} />
    </svg>
  );
}

/** Sub-brand lockup: the mark with a spread label beneath, optically matched to the mark's width. */
function SubBrandLock({ variant, tone, height, label, style, ...rest }) {
  const h = height || (variant === 'sygnet' ? 40 : 34);
  const width = variant === 'sygnet' ? h * (59.28 / 47.52) : h * (400 / 78);
  const ink = tone === 'light' ? '#FFFFFF' : tone === 'mono' ? 'currentColor' : '#000000';
  const chars = label.toUpperCase().split('');
  const spread = variant === 'wordmark' && chars.length > 2;
  const size = variant === 'sygnet' ? Math.max(8, h * 0.2) : Math.max(8, h * 0.3);
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: h * 0.18, ...style }} {...rest}>
      <Logo variant={variant} tone={tone} height={h} />
      <div style={{ width, display: 'flex', justifyContent: spread ? 'space-between' : 'center', color: ink, fontFamily: 'Montserrat, var(--font-display, sans-serif)', fontWeight: 600, fontSize: size, lineHeight: 1, textTransform: 'uppercase', letterSpacing: spread ? 0 : '0.14em' }} aria-hidden="true">
        {spread ? chars.map((c, i) => <span key={i}>{c}</span>) : label.toUpperCase()}
      </div>
    </div>
  );
}
