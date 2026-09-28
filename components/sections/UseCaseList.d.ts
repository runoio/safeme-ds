import React from 'react';

export interface UseCaseItem { text: string; icon?: React.ReactNode; }
export interface UseCaseGroup { title?: string; /** danger = red-tinted chips. */ tone?: 'safe' | 'danger'; items: (string | UseCaseItem)[]; }
export interface UseCaseListProps {
  /** e.g. On the move · People and moments · Needs extra care */
  groups: UseCaseGroup[];
  style?: React.CSSProperties;
}

/** Grouped use-case check lists. */
export function UseCaseList(props: UseCaseListProps): JSX.Element;
