/**
 * Labeled progress bar for a single macronutrient — colored dot + label +
 * "value / target" readout above a track/fill bar.
 * @startingPoint section="Feedback" subtitle="Macro progress bar (protein/carb/fat)" viewport="700x140"
 */
export interface MacroMeterProps {
  label: string;
  /** Use the fixed macro colors: protein #E5645E, carb #E0A23B, fat #4C9BD6. */
  color: string;
  value: number;
  target: number;
  unit?: string;
  /** Drops the label row — dot + thin bar + short value readout only, for dense rows (e.g. inside a food-item line). */
  compact?: boolean;
}

export function MacroMeter(props: MacroMeterProps): JSX.Element;
