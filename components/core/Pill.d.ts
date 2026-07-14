import { CSSProperties } from "react";

/**
 * Rounded filter/choice chip — outlined when inactive, filled with its color
 * when active. Used for scrollable filter rows (e.g. muscle group filters).
 * `active` is a selection boolean and is surfaced as `aria-pressed`.
 */
export interface PillProps {
  title: string;
  onClick?: () => void;
  active?: boolean;
  /** Literal hex or token ref — used both as fill (when active) and to compute text contrast. */
  color?: string;
  /** Size preset — `md` (40px, default) preserves the original height; `sm` is 34px. */
  size?: "sm" | "md";
  /** Optional leading icon (an `ICON_NAMES` glyph). */
  icon?: string;
  /** Disables interaction and dims the pill. Default `false`. */
  disabled?: boolean;
  style?: CSSProperties;
}

export function Pill(props: PillProps): JSX.Element;
