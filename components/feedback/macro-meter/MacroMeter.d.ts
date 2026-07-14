import * as React from "react";

/**
 * Labeled progress bar for a single macronutrient — colored dot + label +
 * "value / target" readout above a track/fill bar.
 * @startingPoint section="Feedback" subtitle="Macro progress bar (protein/carb/fat)" viewport="700x140"
 */
export interface MacroMeterProps {
  label: string;
  /** Use the fixed macro colors: var(--forge-macro-protein), var(--forge-macro-carb), var(--forge-macro-fat). */
  color: string;
  value: number;
  target: number;
  unit?: string;
  /** Drops the label row — dot + thin bar + short value readout only, for dense rows (e.g. inside a food-item line). */
  compact?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const MacroMeter: React.ForwardRefExoticComponent<
  MacroMeterProps & React.RefAttributes<HTMLDivElement>
>;
