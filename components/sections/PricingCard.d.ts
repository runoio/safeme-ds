import React from 'react';

export interface PricingCardProps {
  /** 'Personal' | 'Family' | 'Family+' */
  name: string;
  /** e.g. '3 osoby' */
  people?: string;
  /** Formatted price, e.g. '53,97 zł' or '£20.97' */
  price: string;
  /** @default 'mies.' — UK: 'mo.' */
  period?: string;
  /** e.g. '17,99 zł za osobę' */
  perPerson?: string;
  features?: string[];
  /** e.g. 'Wybieram Family' */
  ctaLabel: string;
  onCta?: () => void;
  href?: string;
  /** Navy frame + badge. Only one card per row. @default false */
  popular?: boolean;
  /** @default 'Najpopularniejszy' — UK: 'Most popular' */
  popularLabel?: string;
  style?: React.CSSProperties;
}

/** Plan card for the Pakiety section. */
export function PricingCard(props: PricingCardProps): JSX.Element;
