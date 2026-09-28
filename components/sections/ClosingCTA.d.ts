import React from 'react';

export interface ClosingCTAProps {
  title: string;
  note?: string;
  /** @default 'pl' */
  lang?: 'pl' | 'en';
  appStoreUrl?: string;
  googlePlayUrl?: string;
  /** Replaces the default StoreBadges. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Closing download CTA on navy gradient. */
export function ClosingCTA(props: ClosingCTAProps): JSX.Element;
