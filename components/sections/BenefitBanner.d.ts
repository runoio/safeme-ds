import React from 'react';

export interface BenefitBannerProps {
  /** @default 'Dla firm' */
  eyebrow?: string;
  title: string;
  body?: string;
  /** e.g. 'Poznaj ofertę dla firm' */
  ctaLabel?: string;
  onCta?: () => void;
  href?: string;
  /** Microcopy under the button. */
  note?: string;
  style?: React.CSSProperties;
}

/** B2B teaser banner. */
export function BenefitBanner(props: BenefitBannerProps): JSX.Element;
