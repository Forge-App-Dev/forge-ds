import { CSSProperties } from "react";
import { StatBadgeProps } from "../feedback/StatBadge";
import { MiniChartProps } from "../feedback/mini-chart/MiniChart";

/**
 * Dashboard metric cell: eyebrow label, big Barlow value (tabular numerals),
 * optional leading icon, optional trend (StatBadge) and sparkline (MiniChart).
 * Composes primitives and holds no product copy. Pass `onClick` to make the
 * whole cell a pressable tile (Card supplies role=button + focus + press).
 */
export interface StatCardProps {
  /** Uppercase eyebrow label above the value. */
  label: string;
  /** The metric value (string or number). */
  value: React.ReactNode;
  /** Unit shown after the value (e.g. "kg", "kcal"). */
  unit?: string;
  /** Leading icon name; tinted with `accent`. */
  icon?: string;
  /** Accent color for the left stripe and icon (e.g. a module color). */
  accent?: string;
  /** Trend indicator props, forwarded to StatBadge. */
  trend?: StatBadgeProps;
  /** Sparkline props, forwarded to MiniChart. */
  chart?: MiniChartProps;
  /** Small caption line under the value. */
  caption?: string;
  /** Makes the whole cell a pressable navigable tile. */
  onClick?: () => void;
  style?: CSSProperties;
}

export function StatCard(props: StatCardProps): JSX.Element;
