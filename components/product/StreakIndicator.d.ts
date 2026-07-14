import * as React from "react";

/**
 * Training streak — a week of dots (completed day = accent, empty = dimmer)
 * plus the running count ("X dias"). A PRODUCT component meant to sit alongside
 * the WeekStrip. The whole block is one labeled image for screen readers.
 */
export interface StreakIndicatorProps {
  /** This week's completion, one boolean per day (ideally 7, seg→dom). */
  days?: boolean[];
  /** True streak length in days. Falls back to the count of completed days. */
  count?: number;
  /** Accent for completed dots / icon (module color / sibling app). */
  accent?: string;
  /** Override the computed accessible label. */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const StreakIndicator: React.ForwardRefExoticComponent<
  StreakIndicatorProps & React.RefAttributes<HTMLDivElement>
>;
