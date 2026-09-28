import React from 'react';

export interface CompareRow { label: string; other: React.ReactNode; safeme: React.ReactNode; }
export interface CompareTableProps {
  /** [alternative, 'SafeMe'] — second column is highlighted. */
  columns: [string, string];
  rows: CompareRow[];
  style?: React.CSSProperties;
}

/** Comparison table (About: 'Why SafeMe and not the emergency number?'). */
export function CompareTable(props: CompareTableProps): JSX.Element;
