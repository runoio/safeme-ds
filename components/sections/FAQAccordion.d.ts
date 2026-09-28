import React from 'react';

export interface FAQItem { q: string; a: React.ReactNode; }
export interface FAQAccordionProps {
  items: FAQItem[];
  /** Index open on mount; null = all closed. @default 0 */
  defaultOpen?: number | null;
  /** @default true */
  allowMultiple?: boolean;
  style?: React.CSSProperties;
}

/** FAQ accordion (FAQ page, For business, Voucher). */
export function FAQAccordion(props: FAQAccordionProps): JSX.Element;
