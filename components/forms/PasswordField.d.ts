import { CSSProperties } from "react";

/**
 * Password TextField with a show/hide eye toggle. Composes `TextField`, so it
 * shares the same label/error/helper/required semantics; the toggle flips the
 * input between `password` and `text` and swaps the eye/eye-off glyph.
 */
export interface PasswordFieldProps {
  /** Field label. Default `"Senha"`. */
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** Autocomplete hint. Default `"current-password"`; use `"new-password"` on signup/reset. */
  autoComplete?: string;
  /** Inline error message (role="alert"); also sets aria-invalid. */
  error?: string;
  /** Non-error helper text below the field. */
  helper?: string;
  required?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
}

export function PasswordField(props: PasswordFieldProps): JSX.Element;
