import React from 'react';

export interface IconButtonProps {
  /** @default 'ghost' */
  variant?: 'solid' | 'safe' | 'ghost' | 'outline';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Circular when true, rounded-square when false. @default true */
  round?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  'aria-label'?: string;
}

/** Single-icon button for toolbars, headers, and rows. */
export function IconButton(props: IconButtonProps): JSX.Element;
