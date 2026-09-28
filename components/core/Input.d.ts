import React from 'react';

export interface InputProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  iconLeft?: React.ReactNode;
  helper?: string;
  /** Error message; renders field in danger state when non-empty. */
  error?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Labelled text field with focus ring, optional icon, helper & error states. */
export function Input(props: InputProps): JSX.Element;
