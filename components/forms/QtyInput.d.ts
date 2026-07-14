import * as React from "react";
import { CSSProperties } from "react";

/**
 * Quantity input with a tappable, cycling unit selector (g / portion presets)
 * for logging food quantities in the Nutrição module. Uses
 * `inputMode="decimal"`, an `aria-label` on the field (no visible label), and
 * normalizes a decimal comma to a dot (OP-116, ADR-0056).
 */
export interface QtyInputProps {
  qty?: string | number;
  unit?: string;
  /** All available units for this food, e.g. ["g", "fatia", "unidade"]. */
  units?: string[];
  onChange?: (value: { qty: string; unit: string }) => void;
  className?: string;
  style?: CSSProperties;
}

export const QtyInput: React.ForwardRefExoticComponent<
  QtyInputProps & React.RefAttributes<HTMLElement>
>;
