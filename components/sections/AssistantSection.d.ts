import React from 'react';

import { Stat } from './StatRow';
export interface AssistantSectionProps {
  image?: string;
  imageAlt?: string;
  title: string;
  body?: string;
  stats?: Stat[];
  style?: React.CSSProperties;
}

/** Photo + copy + stats block for 'Kim jest Asystent Bezpieczeństwa'. */
export function AssistantSection(props: AssistantSectionProps): JSX.Element;
