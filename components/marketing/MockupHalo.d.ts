import React from 'react';

export interface MockupHaloProps {
  /** The mockup image/element the glow sits behind. */
  children?: React.ReactNode;
  /** Halo center alpha — glow intensity. @default 0.35 */
  intensity?: number;
  /** Ripple cycle duration in seconds; the second ring is delayed by half. @default 4.5 */
  tempo?: number;
  /** Ripple end scale — how far the wave travels. @default 1.7 */
  reach?: number;
  /** Glow color. Always action blue in brand use — never red. @default '#5BADFF' */
  color?: string;
  style?: React.CSSProperties;
}

/** Pulsing "guardian" glow and ripple rings behind a phone mockup. */
export function MockupHalo(props: MockupHaloProps): JSX.Element;
