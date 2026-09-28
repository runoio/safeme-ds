import React from 'react';

export interface Carrier { name: string; /** Logo URL; falls back to the name as text. */ logo?: string; }
export interface CarrierBillingProps {
  /** @default 'Dolicz do rachunku' */
  title?: string;
  body?: string;
  /** Play, Plus, T-Mobile, Orange */
  carriers: Carrier[];
  style?: React.CSSProperties;
}

/** Carrier-billing strip under Pakiety (PL market only). */
export function CarrierBilling(props: CarrierBillingProps): JSX.Element;
