import React from 'react';

export interface HeroTrustProps {
  /** Exactly 3 short, page-specific, literally-true claims. */
  items: string[];
  style?: React.CSSProperties;
}

/** Trust line with check icons for dark heroes. */
export function HeroTrust(props: HeroTrustProps): JSX.Element;
