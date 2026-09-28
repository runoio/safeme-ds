import React from 'react';

/**
 * Pill-shaped action button in the SafeMe palette.
 */
export interface ButtonProps {
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'safe' | 'danger' | 'outline' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * Pill-shaped action button in the SafeMe palette.
 */
export function Button(props: ButtonProps): JSX.Element;
