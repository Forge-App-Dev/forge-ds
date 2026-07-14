import { CSSProperties, ReactNode } from "react";

/**
 * Labeled text input — uppercase small-caps label above a surfaceRaised field.
 * Supports `error`/`helper` messages, `required`, `disabled`, and mobile
 * keyboard hints (`inputMode`, `autoComplete`, `enterKeyHint`) passed straight
 * through to the field (OP-115).
 */
export interface TextFieldProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  /** Inline error message (role="alert"); also sets aria-invalid. */
  error?: string;
  /** Non-error helper text below the field. */
  helper?: string;
  required?: boolean;
  disabled?: boolean;
  /** `inputmode` hint for the on-screen keyboard (e.g. "email", "numeric"). */
  inputMode?: string;
  /** `autocomplete` token (e.g. "email", "current-password"). */
  autoComplete?: string;
  /** `enterkeyhint` for the Enter key label (e.g. "go", "search", "done"). */
  enterKeyHint?: string;
  /** Adornment rendered inside the single-line field (e.g. an eye toggle). */
  trailing?: ReactNode;
  style?: CSSProperties;
}

export function TextField(props: TextFieldProps): JSX.Element;
