import { CSSProperties } from "react";

/**
 * Rounded filter/choice chip — outlined when inactive, filled with its color
 * when active. Used for scrollable filter rows (e.g. muscle group filters).
 */
export interface PillProps {
  title: string;
  onClick?: () => void;
  active?: boolean;
  /** Literal hex — used both as fill (when active) and to compute text contrast. */
  color?: string;
  style?: CSSProperties;
}

export function Pill(props: PillProps): JSX.Element;
