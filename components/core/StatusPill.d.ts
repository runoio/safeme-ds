import React from 'react';

export interface StatusPillProps {
  children?: React.ReactNode;
  /** Status dot color. @default 'var(--app-online)' (green) */
  dotColor?: string;
  /** Show the leading dot. @default true */
  dot?: boolean;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Styles the border/text for a dark background. @default true */
  onDark?: boolean;
  style?: React.CSSProperties;
}

/** Outlined availability/status pill ("Dostępni 24/7") for dark marketing surfaces. */
export function StatusPill(props: StatusPillProps): JSX.Element;
