import React from 'react';

export interface HeroEyebrowProps {
  children?: React.ReactNode;
  /** 'muted' (white 70% / grey) or 'safe' (action blue). @default 'muted' */
  tone?: 'muted' | 'safe';
  onDark?: boolean;
  style?: React.CSSProperties;
}

/** Uppercase micro-label above the hero H1. */
export function HeroEyebrow(props: HeroEyebrowProps): JSX.Element;
