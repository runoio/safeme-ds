import React from 'react';

export interface HelpCalloutProps {
  eyebrow?: string;
  title: string;
  /** Fragment of title rendered brand red. */
  titleAccent?: string;
  body?: string;
  /** @default 'Wezwij pomoc' */
  ctaLabel?: string;
  onCta?: () => void;
  href?: string;
  style?: React.CSSProperties;
}

/** Dark 'Wezwij pomoc' panel with red Help CTA and SOS glyph. */
export function HelpCallout(props: HelpCalloutProps): JSX.Element;
