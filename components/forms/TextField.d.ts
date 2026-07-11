import { CSSProperties } from "react";

/**
 * Labeled text input — uppercase small-caps label above a surfaceRaised field.
 */
export interface TextFieldProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  style?: CSSProperties;
}

export function TextField(props: TextFieldProps): JSX.Element;
