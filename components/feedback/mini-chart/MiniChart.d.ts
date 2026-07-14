import * as React from "react";

/**
 * Small line chart for a history series (weight over time, session progress).
 * @startingPoint section="Feedback" subtitle="Small history line chart" viewport="700x140"
 */
export interface MiniChartProps {
  /** Data points. Non-numbers/NaN are dropped; empty/absent renders a labelled "Sem dados" SVG. */
  values?: number[];
  color?: string;
  /** "line" (default, dots+line) | "bar" (columns) | "area" (line with soft fill beneath). */
  variant?: "line" | "bar" | "area";
  /** Accessible name (SVG aria-label); falls back to a per-variant default. */
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const MiniChart: React.ForwardRefExoticComponent<
  MiniChartProps & React.RefAttributes<SVGSVGElement>
>;
