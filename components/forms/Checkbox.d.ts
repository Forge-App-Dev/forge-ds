import * as React from "react";
import { CSSProperties } from "react";

/**
 * Accessible boolean checkbox — `role="checkbox"` + `aria-checked`,
 * keyboard-focusable, toggled by Space/Enter. Pass `label` for a tappable row
 * (box left, label right); omit for a bare box. For accepting terms, opt-ins and
 * multi-select rows — NOT single-choice (see ADR-0008) nor immediate preferences
 * (use `Switch`).
 */
export interface CheckboxProps {
  /** Current checked state. Default `false`. */
  checked?: boolean;
  /** Partial/mixed state — renders `aria-checked="mixed"` and a dash glyph. Default `false`. */
  indeterminate?: boolean;
  /** Called with the next boolean when toggled. */
  onChange?: (checked: boolean) => void;
  /** Optional label; renders a full tappable row with the box on the left. */
  label?: string;
  /** Disables interaction and dims the control. Default `false`. */
  disabled?: boolean;
  /** Fallback id used when `React.useId` is unavailable. */
  id?: string;
  className?: string;
  style?: CSSProperties;
}

export const Checkbox: React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<HTMLElement>
>;
