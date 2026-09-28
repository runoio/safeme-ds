import React from 'react';

export interface AwardCardProps {
  logo?: string;
  logoAlt?: string;
  /** e.g. 'Innovation of the Year 2025' */
  title: string;
  body?: string;
  style?: React.CSSProperties;
}

/** Award tile. */
export function AwardCard(props: AwardCardProps): JSX.Element;
