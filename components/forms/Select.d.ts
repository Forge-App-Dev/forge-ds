import * as React from "react";
import { CSSProperties } from "react";

/** One option in a Select's list. */
export interface SelectOption {
  value: string | number;
  label: string;
  subtitle?: string;
}

/**
 * Choose one option from a list. Instead of a floating dropdown (which the
 * system avoids), the field-like trigger opens a `Panel` of options — the
 * canonical Forge choose-from-a-list pattern, fully keyboard/AT accessible via
 * Panel's dialog semantics and ListItem rows.
 */
export interface SelectProps {
  /** Currently selected option value. */
  value?: string | number;
  /** Options to choose from. Default `[]`. */
  options?: SelectOption[];
  /** Called with the chosen option's value. */
  onChange?: (value: string | number) => void;
  /** Field label shown above the trigger. */
  label?: string;
  /** Text shown when nothing is selected. Default `"Selecionar"`. */
  placeholder?: string;
  /** Panel title; falls back to `label`, then `placeholder`. */
  title?: string;
  /** Disables the trigger. Default `false`. */
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const Select: React.ForwardRefExoticComponent<
  SelectProps & React.RefAttributes<HTMLElement>
>;
