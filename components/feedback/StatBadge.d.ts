import * as React from "react";

/**
 * Small trend/delta indicator — up/down arrow + signed value, colored by
 * whether that direction is the good outcome for this particular stat.
 */
export interface StatBadgeProps {
  /** Signed numeric change, e.g. -1.2 (down 1.2) or +3 (up 3). */
  value: number;
  unit?: string;
  /** Which direction counts as a good outcome for this stat — "down" for weight lost, "up" for reps/PRs gained. Default "down". */
  goodDirection?: "down" | "up";
  /** Absolute value below which the change reads as flat (dash "—"). Default `0.05`. */
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const StatBadge: React.ForwardRefExoticComponent<
  StatBadgeProps & React.RefAttributes<HTMLDivElement>
>;
