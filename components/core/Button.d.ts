import React, { CSSProperties, ReactNode } from "react";

/**
 * Button — the system's action element, one vocabulary for every button-like
 * need (OP-006). Filled accent (primary), outlined (secondary), text-only
 * (ghost), or filled danger. Sizes sm (36) / md (44) / lg (46).
 */
export interface ButtonProps {
  /** Accessible label / visible text. Falls back to `children` when omitted. */
  title?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Visual vocabulary. Default `"primary"`. */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  /** Size preset. Default `"lg"` (via `small` back-compat when unset). */
  size?: "sm" | "md" | "lg";
  /** CSS color value for the primary fill (e.g. a module accent). */
  color?: string;
  /** An `ICON_NAMES` glyph rendered beside the label. */
  icon?: string;
  /** Where the icon sits relative to the label. Default `"left"`. */
  iconPosition?: "left" | "right";
  /** Shows an inline spinner and disables the button, preserving width. */
  loading?: boolean;
  /** Stretches the button to the container width. */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Native button type. Default `"button"`. */
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export declare const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>;
