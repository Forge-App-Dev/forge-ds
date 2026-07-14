import * as React from "react";

/**
 * Small count/dot indicator for tabs, icons and rows. Numeric pill (`count`)
 * or bare `dot`; `accent` or `neutral` variant.
 * @startingPoint section="Feedback" subtitle="Count / dot badge for tabs and icons" viewport="700x140"
 */
export interface BadgeProps {
  /** The number to show (numeric-pill shape). Ignored when `dot`. */
  count?: number | string;
  /** Render a bare dot with no number. */
  dot?: boolean;
  variant?: "accent" | "neutral";
  /** Accessible name — required for a `dot` that is the only signal; overrides the count's name. */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Badge: React.ForwardRefExoticComponent<
  BadgeProps & React.RefAttributes<HTMLSpanElement>
>;
