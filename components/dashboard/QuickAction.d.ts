import * as React from "react";

/**
 * Icon+label shortcut for a dashboard grid: a rounded icon chip over a short
 * label, the whole thing a real button (focus, press, ≥44px target). Fills its
 * grid cell (width 100%); lay several out in a CSS grid on the consumer side.
 */
export interface QuickActionProps {
  /** Icon name shown in the chip. */
  icon: string;
  /** Short label under the icon. */
  label: string;
  /** Called on press. */
  onClick?: () => void;
  /** Tints the icon chip (e.g. a module color); omit for neutral. */
  accent?: string;
  /** Optional count shown as a small badge dot (e.g. pending items). */
  badge?: React.ReactNode;
  /** Dims and disables the action. Default `false`. */
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const QuickAction: React.ForwardRefExoticComponent<
  QuickActionProps & React.RefAttributes<HTMLButtonElement>
>;
