import { ReactNode } from "react";

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
  children?: ReactNode;
  /** Continuously-spinning loading variant — ignores `progress`/`segments`. */
  indeterminate?: boolean;
  /** Multiple stacked segments on one ring (e.g. protein+carb+fat at once) instead of a single progress arc — each `{ value: 0..1, color }`. */
  segments?: { value: number; color: string }[];
}

export function Ring(props: RingProps): JSX.Element;
