import * as React from "react";

/** A named data series for a multi-line/-bar chart. */
export interface ChartSeries {
  /** Series name — shown in the legend and the accessible summary. */
  name?: string;
  /** The numeric data points. Non-numbers/NaN are dropped. */
  values: number[];
  /** Series color (token, e.g. "var(--forge-cat-2)"). Defaults to the palette. */
  color?: string;
}

/**
 * Full chart — the rich sibling of MiniChart (OP-053): labelled x/y axes, a
 * subtle grid, plotted points, and one or many series. Inline SVG, responsive
 * (viewBox + width 100%), token-driven color. role="img" with a descriptive
 * aria-label + <title>/<desc>; multi-series render a legend (never color-only).
 * Guards against empty / single-point input.
 * @startingPoint section="Feedback" subtitle="Full chart — axes, grid, multi-series" viewport="700x360"
 */
export interface ChartProps {
  /** number[] (single series) OR ChartSeries[] (one or many named series). */
  series?: number[] | ChartSeries[];
  /** Convenience alias for a single number[] series (used if `series` is absent). */
  values?: number[];
  /** "line" (default, dots+line) | "bar" (columns, grouped when multi) | "area". */
  variant?: "line" | "bar" | "area";
  /** X-axis category labels, one per point (e.g. week names). */
  xLabels?: string[];
  /** Number of horizontal grid lines / y-axis labels. Default `4`. */
  yTicks?: number;
  /** Chart title — rendered as the SVG <title> and used in the summary. */
  title?: string;
  /** Unit appended to the accessible summary (e.g. "kg"). */
  unit?: string;
  /** Noun for the x span in the summary ("em 5 semanas"). Default "pontos". */
  xUnit?: string;
  /** Default color for a single series (token). Default "var(--forge-accent)". */
  color?: string;
  /** Override the auto-generated accessible name. */
  ariaLabel?: string;
  /** Render each point's value above it (line variant). Default `false`. */
  showValues?: boolean;
  /** SVG viewBox height in user units. Default `200`. */
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Chart: React.ForwardRefExoticComponent<
  ChartProps & React.RefAttributes<HTMLDivElement>
>;
