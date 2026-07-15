import * as React from "react";

/**
 * Selectable chip (canonical). Outlined when inactive, filled with `color` when
 * active (drives `aria-pressed`). Optional leading icon, size (sm/md), disabled,
 * and a result `count` badge. Absorve o papel do antigo FilterChip (deprecado).
 * Prop de rótulo canônica = `label` (`title` é alias deprecado). Ver ADR-0082.
 */
export interface PillProps {
  /** Chip text (prop canônica). */
  label?: React.ReactNode;
  /** @deprecated Use `label`. Alias retrocompatível. */
  title?: React.ReactNode;
  /** Selected state — drives fill and `aria-pressed`. Default `false`. */
  active?: boolean;
  onClick?: () => void;
  /** Fill/border color when active (token ref or hex). Default `var(--forge-accent-fill)`. */
  color?: string;
  size?: "sm" | "md";
  /** Optional leading icon (an `ICON_NAMES` glyph). */
  icon?: string;
  /** Optional result count shown as a small badge. */
  count?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Pill: React.ForwardRefExoticComponent<
  PillProps & React.RefAttributes<HTMLButtonElement>
>;
