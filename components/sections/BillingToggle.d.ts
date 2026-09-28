import React from 'react';

export interface BillingOption { value: string; label: string; /** e.g. '2 miesiące gratis' */ note?: string; }
export interface BillingToggleProps {
  options: BillingOption[];
  value: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

/** Segmented monthly/annual switch. */
export function BillingToggle(props: BillingToggleProps): JSX.Element;
