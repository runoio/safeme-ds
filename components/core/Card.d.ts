import React from 'react';

export interface CardProps {
  /** @default 'sm' */
  elevation?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  /** @default 'md' */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Rounded white surface container with tinted shadow. */
export function Card(props: CardProps): JSX.Element;
