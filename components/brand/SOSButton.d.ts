import React from 'react';

/**
 * The signature SafeMe circular action buttons from the app home.
 */
export interface SOSButtonProps {
  /** Brand variant: 'help' (red, POMOC) or 'observe' (blue, OBSERWACJA). @default 'help' */
  variant?: 'help' | 'observe';
  /** Diameter in px. @default 200 */
  size?: number;
  /** Override the variant's default label (POMOC / OBSERWACJA). */
  label?: string;
  /** Optional uppercase caption below the label. */
  sublabel?: string;
  /** Animated attention halo. Defaults on for 'help', off for 'observe'. */
  pulsing?: boolean;
  /** Show the leading icon. @default true */
  icon?: boolean;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export function SOSButton(props: SOSButtonProps): JSX.Element;
