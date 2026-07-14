import { CSSProperties, ReactNode } from "react";

/**
 * Macro-distribution ring — a composed pattern over Ring that stacks
 * protein/carb/fat segments (fixed macro colors, canonical order
 * protein→carb→fat per ADR-0052) with a ready-made legend. Not a copy-domain
 * piece (no coach voice), so it lives in feedback/ next to Ring and MacroMeter.
 */
export interface MacroRingProps {
  /** Protein amount (grams by default). */
  protein?: number;
  /** Carbohydrate amount. */
  carb?: number;
  /** Fat amount. */
  fat?: number;
  /** Unit shown in the legend and accessible label. Default `"g"`. */
  unit?: string;
  /** Ring diameter in px. Default `120`. */
  size?: number;
  /** Ring stroke width in px. Default `12`. */
  stroke?: number;
  /** Content rendered inside the ring (e.g. total kcal). */
  center?: ReactNode;
  /** Show the color+label+value legend. Default `true`. */
  legend?: boolean;
  /** Override the computed accessible label on the ring. */
  label?: string;
  style?: CSSProperties;
}

export function MacroRing(props: MacroRingProps): JSX.Element;
