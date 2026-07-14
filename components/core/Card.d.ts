import React from "react";

/**
 * Base surface card — the fundamental container of the system. 14px radius,
 * 1px border, `surface` fill. Pass `stripeColor` for the colored left accent
 * stripe used on workout/today cards. With `onClick` it becomes a pressable
 * card (keyboard-focusable `<button>`, press/selected states).
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Adds a 4px colored stripe along the left edge (e.g. a workout's accent). */
  stripeColor?: string;
  /** Makes the card a pressable `<button>` surface. */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Draws an accent border and exposes `aria-pressed` (choose-from-a-list). */
  selected?: boolean;
  /** Optional slot rendered above the body. */
  header?: React.ReactNode;
  /** Optional slot rendered below the body. */
  footer?: React.ReactNode;
  /** Disables the pressable card and dims it. */
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Card: React.ForwardRefExoticComponent<
  CardProps & React.RefAttributes<HTMLButtonElement | HTMLDivElement>
>;
