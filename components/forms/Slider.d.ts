import { CSSProperties } from "react";

/**
 * Accessible single-value range slider. Exposes `role="slider"` +
 * `aria-valuemin/max/now`, keyboard arrows/PageUp-Down/Home-End, and pointer
 * drag. Track + accent fill + thumb. Respects `min`/`max`/`step`; `unit` is
 * appended to the shown value and to `aria-valuetext`.
 */
export interface SliderProps {
  /** Current value. Default `0`. */
  value?: number;
  /** Called with the next value (already clamped and snapped to `step`). */
  onChange?: (value: number) => void;
  /** Minimum value. Default `0`. */
  min?: number;
  /** Maximum value. Default `100`. */
  max?: number;
  /** Step increment. Default `1`. */
  step?: number;
  /** Unit suffix shown next to the value and in `aria-valuetext` (e.g. "kg"). */
  unit?: string;
  /** Optional uppercase label; shown with the current value on the right. */
  label?: string;
  /** Fill/thumb color (token ref or hex). Default `var(--forge-accent)`. */
  color?: string;
  /** Disables interaction and dims the control. Default `false`. */
  disabled?: boolean;
  style?: CSSProperties;
}

export function Slider(props: SliderProps): JSX.Element;
