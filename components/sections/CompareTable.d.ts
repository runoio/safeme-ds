import React from 'react';

export interface CompareRow { label: string; other: React.ReactNode; safeme: React.ReactNode; }
export interface CompareTableProps {
  /** [alternative, 'SafeMe'] — second column is highlighted. */
  columns: [string, string];
  rows: CompareRow[];
  style?: React.CSSProperties;
}

/** Two-lane numbered timeline: alternative (muted) vs SafeMe. Pair with a vertical VideoCard on the right. */
export function CompareTable(props: CompareTableProps): JSX.Element;
