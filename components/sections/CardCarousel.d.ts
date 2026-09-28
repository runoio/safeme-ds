import React from 'react';

export interface CardCarouselProps {
  /** Cards (TestimonialCard, FeatureCard, AwardCard…). */
  children: React.ReactNode;
  /** @default 320 */
  cardWidth?: number;
  /** @default 24 */
  gap?: number;
  /** @default true */
  arrows?: boolean;
  prevLabel?: string;
  nextLabel?: string;
  style?: React.CSSProperties;
}

/** Scroll-snap card row for reviews, numbered cards and onboarding steps. */
export function CardCarousel(props: CardCarouselProps): JSX.Element;
