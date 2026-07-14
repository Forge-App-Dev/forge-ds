import * as React from "react";

/**
 * Rest countdown between sets — a PRODUCT component composing the signature
 * Ring: the arc drains from full to empty as rest runs down, remaining time
 * (mm:ss, Barlow tabular) in the center. Self-running: counts down from
 * `duration` once mounted and running, calling `onComplete` at zero. Controls:
 * +15s, pause/resume, skip.
 */
export interface RestTimerProps {
  /** Rest length in seconds. Default `90`. */
  duration?: number;
  /** Whether the timer starts running. Default `true`. */
  running?: boolean;
  /** Called when the countdown reaches zero. */
  onComplete?: () => void;
  /** Called when the user skips the rest. */
  onSkip?: () => void;
  /** Accent for the arc (module color / sibling app). */
  accent?: string;
  /** Ring diameter in px. Default `132`. */
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const RestTimer: React.ForwardRefExoticComponent<
  RestTimerProps & React.RefAttributes<HTMLDivElement>
>;
