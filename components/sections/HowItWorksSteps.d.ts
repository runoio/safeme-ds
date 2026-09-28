import React from 'react';

export interface HowItWorksStep { title: string; body: string; }
export interface HowItWorksStepsProps {
  steps: HowItWorksStep[];
  /** list = home 'How it works' · cards = numbered cards row · timeline = about 'Step by step' column. @default 'list' */
  variant?: 'list' | 'cards' | 'timeline';
  /** timeline only. @default 'safe' */
  tone?: 'safe' | 'danger';
  /** timeline column header */
  title?: string;
  /** timeline header icon (22px) */
  icon?: React.ReactNode;
  /** First number (for splitting a list across a CardCarousel). @default 1 */
  start?: number;
  style?: React.CSSProperties;
}

/** Numbered 'Jak to działa' steps. */
export function HowItWorksSteps(props: HowItWorksStepsProps): JSX.Element;
