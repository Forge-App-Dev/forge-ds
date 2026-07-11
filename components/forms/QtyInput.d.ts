import { CSSProperties } from "react";

/**
 * Quantity input with a tappable, cycling unit selector (g / portion presets)
 * for logging food quantities in the Nutrição module.
 */
export interface QtyInputProps {
  qty?: string | number;
  unit?: string;
  /** All available units for this food, e.g. ["g", "fatia", "unidade"]. */
  units?: string[];
  onChange?: (value: { qty: string; unit: string }) => void;
}

export function QtyInput(props: QtyInputProps): JSX.Element;
