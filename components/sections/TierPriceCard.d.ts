import React from 'react';

export interface TierPriceCardProps {
  /** e.g. '100+' */
  tier: string;
  /** e.g. '£6.39' or 'custom offer' */
  price: string;
  /** e.g. '/ user' */
  unit?: string;
  /** e.g. 'retail price: £7.99' */
  note?: string;
  /** Featured frame (same as PricingCard popular). @default false */
  highlight?: boolean;
  /** Badge text on the highlighted tier, e.g. 'Best value'. */
  badge?: string;
  style?: React.CSSProperties;
}

/** B2B volume pricing tier. */
export function TierPriceCard(props: TierPriceCardProps): JSX.Element;
