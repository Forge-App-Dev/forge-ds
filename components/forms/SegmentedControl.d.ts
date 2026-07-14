import * as React from "react";
import { CSSProperties } from "react";

export interface SegmentedOption {
  value: string;
  label: string;
}

/**
 * Single choice among 2–3 mutually-exclusive options (kg/lb, semana/mês). The
 * Forge alternative to a radio group (ADR-0008), with real group semantics:
 * `role="radiogroup"` + options `role="radio"`, one `aria-checked`, arrow-key
 * navigation. Reuses the pill/track look.
 */
export interface SegmentedControlProps {
  /** Options as `{ value, label }` objects or plain strings (used as both). */
  options: Array<SegmentedOption | string>;
  /** Value of the currently selected option. */
  value?: string;
  /** Called with the newly selected value. */
  onChange?: (value: string) => void;
  /** Optional uppercase label above the control. */
  label?: string;
  /** Fill color of the active segment (token ref or hex). Default `var(--forge-accent-fill)`. */
  color?: string;
  /** Disables the whole group and dims it. Default `false`. */
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const SegmentedControl: React.ForwardRefExoticComponent<
  SegmentedControlProps & React.RefAttributes<HTMLElement>
>;
