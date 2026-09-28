import React from 'react';

export interface Stat { value: string; label: string; }
export interface StatRowProps {
  /** Only literally-true claims — see guidelines/content-and-facts.md. */
  stats: Stat[];
  /** @default 'row' */
  direction?: 'row' | 'column';
  /** @default false */
  onDark?: boolean;
  style?: React.CSSProperties;
}

/** Big-number stat row. */
export function StatRow(props: StatRowProps): JSX.Element;
