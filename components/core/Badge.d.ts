import React from 'react';

export interface BadgeProps {
  /** @default 'neutral' */
  tone?: 'neutral' | 'brand' | 'safe' | 'danger' | 'success' | 'warning';
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Small status/label pill. */
export function Badge(props: BadgeProps): JSX.Element;
