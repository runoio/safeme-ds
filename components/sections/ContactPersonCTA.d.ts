import React from 'react';

export interface ContactPersonCTAProps {
  title: string;
  photo?: string;
  /** e.g. 'Karol Bedyński' */
  name: string;
  /** e.g. 'Head of Partnerships, co-founder of SafeMe' */
  role?: string;
  /** @default 'Book a meeting' */
  ctaLabel?: string;
  /** Calendly URL */
  href?: string;
  onCta?: () => void;
  style?: React.CSSProperties;
}

/** B2B demo CTA with contact person. */
export function ContactPersonCTA(props: ContactPersonCTAProps): JSX.Element;
