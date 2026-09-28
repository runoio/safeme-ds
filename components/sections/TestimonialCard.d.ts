import React from 'react';

export interface TestimonialCardProps {
  /** Verbatim quote. */
  quote: string;
  /** First name only. */
  author: string;
  /** Quote marks: pl „…” / en “…”. @default 'pl' */
  lang?: 'pl' | 'en';
  /** @default 5 */
  rating?: number;
  style?: React.CSSProperties;
}

/** Review card for the Opinie / Reviews section. */
export function TestimonialCard(props: TestimonialCardProps): JSX.Element;
