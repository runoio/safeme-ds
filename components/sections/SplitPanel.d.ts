import React from 'react';

export interface SplitPanelProps {
  title: string;
  /** Paragraphs separated by a blank line (\n\n). */
  text?: string;
  /** VideoCard (onDark) or image. */
  media?: React.ReactNode;
  /** @default 'dark' */
  tone?: 'dark' | 'light';
  /** Media column max width. @default 260 */
  mediaWidth?: number;
  style?: React.CSSProperties;
}

/** Text + media panel (About: 'Why SafeMe and not the emergency number?'). */
export function SplitPanel(props: SplitPanelProps): JSX.Element;
