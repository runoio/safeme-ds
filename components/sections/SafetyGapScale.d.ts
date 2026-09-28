import React from 'react';

export interface SafetyGapStage { title: string; caption?: string; /** Text in the red end dot (last stage). */ short?: string; }
export interface SafetyGapScaleProps {
  /** Exactly 3: unease → something happens → 112 */
  stages: SafetyGapStage[];
  /** @default 'Safety gap · SafeMe' */
  pillLabel?: string;
  style?: React.CSSProperties;
}

/** Safety-gap diagram (bracket over the gap, red 112 dot). */
export function SafetyGapScale(props: SafetyGapScaleProps): JSX.Element;
