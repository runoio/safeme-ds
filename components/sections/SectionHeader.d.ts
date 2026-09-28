import React from 'react';

export interface SectionHeaderProps {
  /** Short uppercase label, e.g. 'Jak to działa'. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** @default 'left' */
  align?: 'left' | 'center';
  /** @default false */
  onDark?: boolean;
  style?: React.CSSProperties;
}

/** Section opener: eyebrow, H2, subtitle. */
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
