import React from 'react';

export interface VideoCardProps {
  thumbnail?: string;
  /** YouTube id — builds the poster and plays inline (youtube-nocookie). */
  videoId?: string;
  /** @default true */
  showCaption?: boolean;
  /** Play button colour — leave default (action red). Don't override per page. @default var(--action-red-500) */
  playColor?: string;
  /** Drops border/shadow on dark panels. @default false */
  onDark?: boolean;
  /** e.g. 'Jak to działa · 30 sekund' */
  caption?: string;
  /** Opens in a new tab when set; otherwise renders a button calling onPlay. */
  href?: string;
  onPlay?: () => void;
  /** SafeMe videos are YouTube Shorts — use the vertical thumbnail (i.ytimg.com/vi/<id>/oar2.jpg). @default 'vertical' */
  orientation?: 'vertical' | 'horizontal';
  style?: React.CSSProperties;
}

/** Video thumbnail with play button. */
export function VideoCard(props: VideoCardProps): JSX.Element;
