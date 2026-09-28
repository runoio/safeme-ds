import React from 'react';

export interface HeroTitleProps {
  /** Full headline text. */
  title: string;
  /** Fragment of `title` to color brand red. Must be a substring; use exactly one. */
  accent?: string;
  /** Type scale: 'service' (safeme.pl pages) or 'lp' (landing pages). @default 'service' */
  size?: 'service' | 'lp';
  /** White text for dark/gradient heroes. @default true */
  onDark?: boolean;
  /** Heading tag. @default 'h1' */
  as?: string;
  style?: React.CSSProperties;
}

/**
 * Hero H1 with a single brand-red accent fragment.
 */
export function HeroTitle(props: HeroTitleProps): JSX.Element;
