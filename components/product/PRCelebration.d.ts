import { CSSProperties } from "react";

/**
 * The personal-record moment — a PRODUCT component (knows the training domain
 * and carries brand copy). It is the system's ONE sanctioned emotional motion:
 * the trophy scales/fades in once via `.forge-anim-celebrate`, disabled under
 * prefers-reduced-motion. `role="status"` + aria-live announces it.
 */
export interface PRCelebrationProps {
  /** Headline. Default `"Novo recorde!"`. */
  title?: string;
  /** Exercise name that set the record. */
  exercise?: string;
  /** The record value (string or number). */
  value?: React.ReactNode;
  /** Unit after the value (e.g. "kg"). */
  unit?: string;
  /** The previous mark it beat (shown as "anterior: …"). */
  previous?: React.ReactNode;
  /** Called from the continue button; the button only renders when provided. */
  onContinue?: () => void;
  /** Continue button label. Default `"Continuar"`. */
  continueLabel?: string;
  /** Accent for the ring/trophy (sibling apps / module color). */
  accent?: string;
  style?: CSSProperties;
}

export function PRCelebration(props: PRCelebrationProps): JSX.Element;
