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
  /** Override aria-valuenow with a domain value (e.g. kcal). Defaults to the 0–100 percentage. */
  valueNow?: number;
  /** Override aria-valuemin (defaults to 0). */
  valueMin?: number;
  /** Override aria-valuemax with a domain target (e.g. daily kcal). Defaults to 100. */
  valueMax?: number;
  /** Draw hairline dividers between segments (the striped meter look). */
  separators?: boolean;
  style?: CSSProperties;
}

export function ProgressBar(props: ProgressBarProps): JSX.Element;
