import * as React from "react";

/**
 * A single set-logging row: weight × reps × check — the most-touched control in
 * a training app, formalized as a PRODUCT primitive. Composes two Steppers
 * (weight + reps, with the TalkBack rule already inside) plus a check toggle
 * that marks the set done (row dims + check fills).
 */
export interface SetLoggerProps {
  /** Set number shown as a leading badge. */
  set?: number;
  /** Weight value (controlled). Default `0`. */
  weight?: number;
  /** Reps value (controlled). Default `0`. */
  reps?: number;
  /** Weight unit. Default `"kg"`. */
  unit?: string;
  /** Called with the next weight. */
  onWeightChange?: (weight: number) => void;
  /** Called with the next reps. */
  onRepsChange?: (reps: number) => void;
  /** Whether the set is marked done. Default `false`. */
  done?: boolean;
  /** Called when the check toggle is pressed. */
  onToggleDone?: () => void;
  /** Weight increment. Default `2.5`. */
  weightStep?: number;
  /** Reps increment. Default `1`. */
  repsStep?: number;
  /** Accent for the checked state. */
  accent?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SetLogger: React.ForwardRefExoticComponent<
  SetLoggerProps & React.RefAttributes<HTMLDivElement>
>;
