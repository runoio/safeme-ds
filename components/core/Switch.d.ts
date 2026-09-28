import React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** On/off toggle; on-state in action blue. */
export function Switch(props: SwitchProps): JSX.Element;
