/**
 * Small line chart for a history series (weight over time, session progress).
 * @startingPoint section="Feedback" subtitle="Small history line chart" viewport="700x140"
 */
export interface MiniChartProps {
  values: number[];
  color?: string;
  /** "line" (default, dots+line) | "bar" (columns) | "area" (line with soft fill beneath). */
  variant?: "line" | "bar" | "area";
}

export function MiniChart(props: MiniChartProps): JSX.Element;
