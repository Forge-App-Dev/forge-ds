import { CSSProperties } from "react";

/**
 * Numeric +/- control (sets, reps, quantity) — the most-touched control in a
 * training app. Exposes two real buttons plus a live region announcing the
 * value (deliberately NOT `role="spinbutton"`, which hides the inner buttons
 * from TalkBack). Respects min/max/step and disables the button at each bound.
 */
export interface StepperProps {
  /** Current value. Default `0`. */
  value?: number;
  /** Called with the clamped next value on +/-. */
  onChange?: (value: number) => void;
  /** Lower bound; the "−" button disables at it. Default `-Infinity`. */
  min?: number;
  /** Upper bound; the "+" button disables at it. Default `Infinity`. */
  max?: number;
  /** Increment/decrement amount. Default `1`. */
  step?: number;
  /** Unit suffix shown after the value (e.g. "kg"). Default `""`. */
  unit?: string;
  /** Name of what is being adjusted; used in the button and value aria-labels. */
  label?: string;
  /** Disables both buttons. Default `false`. */
  disabled?: boolean;
  style?: CSSProperties;
}

export function Stepper(props: StepperProps): JSX.Element;
