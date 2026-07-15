import * as React from "react";
import { CSSProperties } from "react";

/**
 * @deprecated Use `Pill` (que agora aceita `count` e a prop canônica `label`) —
 * ver ADR-0082. Mantido como alias funcional durante a migração.
 *
 * Selectable filter chip for the scrollable filter row under a SearchField /
 * list header (ADR-0015). Toggle semantics via `aria-pressed`; optional result
 * `count`. Outlined when inactive, filled with `color` when active. Ships as
 * `flex-shrink: 0` and never wraps — the consumer owns the horizontal scroll
 * container.
 */
export interface FilterChipProps {
  /** Chip text. */
  label: string;
  /** Selected state — drives fill and `aria-pressed`. Default `false`. */
  active?: boolean;
  /** Called when toggled. */
  onClick?: () => void;
  /** Optional result count shown as a small badge. */
  count?: number;
  /** Fill/border color when active (token ref or hex). Default `var(--forge-accent-fill)`. */
  color?: string;
  /** Optional leading icon (an `ICON_NAMES` glyph). */
  icon?: string;
  /** Disables interaction and dims the chip. Default `false`. */
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const FilterChip: React.ForwardRefExoticComponent<
  FilterChipProps & React.RefAttributes<HTMLElement>
>;
