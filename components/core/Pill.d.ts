import React, { CSSProperties } from "react";

/**
 * Rounded filter/choice chip — outlined when inactive, filled with its color
 * when active. Used for scrollable filter rows (e.g. muscle group filters).
 * `active` is a selection boolean and is surfaced as `aria-pressed`.
 */
export interface PillProps {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  active?: boolean;
  /** Fill color when active — also used to compute readable text contrast. */
  color?: string;
  /** Size preset — `md` (40px, default) preserves the original height; `sm` is 34px. */
  size?: "sm" | "md";
  /** Optional leading icon (an `ICON_NAMES` glyph). */
  icon?: string;
  /** Disables interaction and dims the pill. Default `false`. */
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

export declare const Pill: React.ForwardRefExoticComponent<
  PillProps & React.RefAttributes<HTMLButtonElement>
>;
