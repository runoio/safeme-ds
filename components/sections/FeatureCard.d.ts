import React from 'react';

export interface FeatureCardProps {
  /** 24px Lucide icon element. */
  icon?: React.ReactNode;
  title: string;
  body: string;
  /** brand = tinted circle, safe = Obserwacja blue, help = Pomoc red. @default 'brand' */
  tone?: 'brand' | 'safe' | 'help';
  /** Icon sits half above the card edge, centred (For business 'What the company gains'). @default false */
  badgeIcon?: boolean;
  style?: React.CSSProperties;
}

/** Icon + title + body tile. */
export function FeatureCard(props: FeatureCardProps): JSX.Element;
