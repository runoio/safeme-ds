import React from 'react';

export interface LogoProps {
  /** @default 'wordmark' */
  variant?: 'wordmark' | 'sygnet';
  /** @default 'dark' */
  tone?: 'dark' | 'light' | 'mono';
  /** Pixel height; width scales to aspect ratio. */
  height?: number;
  /** Sub-brand label locked up beneath the mark, e.g. 'Nieruchomości'. Rendered uppercase. */
  subBrand?: string;
  style?: React.CSSProperties;
}

/** The SafeMe logo, inline SVG. */
export function Logo(props: LogoProps): JSX.Element;
