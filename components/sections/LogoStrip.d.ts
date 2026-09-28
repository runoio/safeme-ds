import React from 'react';

export interface LogoItem { name: string; src?: string; }
export interface LogoStripProps {
  title?: string;
  body?: string;
  /** e.g. Pluxee, Motivizer, Worksmile, Nais */
  logos: LogoItem[];
  /** @default 'center' */
  align?: 'center' | 'left';
  style?: React.CSSProperties;
}

/** Partner logo grid. */
export function LogoStrip(props: LogoStripProps): JSX.Element;
