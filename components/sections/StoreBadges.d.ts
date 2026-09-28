import React from 'react';

export interface StoreBadgesProps {
  /** @default 'pl' */
  lang?: 'pl' | 'en';
  /** PL: apps.apple.com/pl/app/safeme/id6451586056 · UK: /gb/ */
  appStoreUrl?: string;
  /** play.google.com/store/apps/details?id=pl.safeme.client */
  googlePlayUrl?: string;
  /** dark = translucent on navy, light = navy fill on white. */
  tone?: 'dark' | 'light';
  /** Alias for tone='dark'. */
  onDark?: boolean;
  /** custom = site-styled badges; official = Apple/Google official artwork (required for paid campaigns). @default 'custom' */
  variant?: 'custom' | 'official';
  /** Official badge height in px. @default 48 */
  height?: number;
  /** Override official Apple artwork, e.g. local PL badge 'assets/store/app-store-pl.svg'. */
  appleSrc?: string;
  /** Override official Google artwork. */
  googleSrc?: string;
  style?: React.CSSProperties;
}

/** Store download buttons. */
export function StoreBadges(props: StoreBadgesProps): JSX.Element;
