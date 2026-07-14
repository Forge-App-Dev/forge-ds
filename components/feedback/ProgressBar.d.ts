import { CSSProperties } from "react";

/**
 * Generic linear progress primitive — a single fill over a track, or a stacked
 * multi-segment variant. The base bar MacroMeter/MetaBar can derive from.
 * @startingPoint section="Feedback" subtitle="Generic linear progress bar (single or segmented)" viewport="700x160"
 */
export interface ProgressBarProps {
  /** Progress as a 0..1 fraction (ignored when `segments` is set). */
  value?: number;
  /** Fill color of the single-value bar. */
  color?: string;
  /** Track (unfilled) color. */
  track?: string;
  /** Bar height in px (radius follows as height/2). */
  height?: number;
  /** Stacked contributors on one bar — each `{ value: 0..1, color }`. */
  segments?: { value: number; color: string }[];
  /** Accessible name (aria-label). */
  label?: string;
  style?: CSSProperties;
}

export function ProgressBar(props: ProgressBarProps): JSX.Element;
