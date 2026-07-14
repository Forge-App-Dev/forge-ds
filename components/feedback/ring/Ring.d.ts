import * as React from "react";

/**
 * Ring — the system's signature progress element (background track + accent
 * arc). Used for workout %, calorie rings, loading spinner.
 * @startingPoint section="Feedback" subtitle="Signature circular progress ring" viewport="700x220"
 */
export interface RingProps {
  size?: number;
  stroke?: number;
  /** 0..1 */
  progress?: number;
  color?: string;
  track?: string;
  children?: React.ReactNode;
  /** Continuously-spinning loading variant — ignores `progress`/`segments`. */
  indeterminate?: boolean;
  /** Multiple stacked segments on one ring (e.g. protein+carb+fat at once) instead of a single progress arc — each `{ value: 0..1, color }`. */
  segments?: { value: number; color: string }[];
  /** Accessible name for the ring (progressbar/img aria-label). */
  label?: string;
  /** Optional message announced to screen readers (polite live region) only when a determinate `progress` reaches 100% — e.g. "Série concluída". Additive; no effect on the visual or default behavior. */
  announce?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Ring: React.ForwardRefExoticComponent<
  RingProps & React.RefAttributes<HTMLDivElement>
>;
