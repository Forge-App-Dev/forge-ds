/**
 * Base surface card — the fundamental container of the system. 14px radius,
 * 1px border, `surface` fill. Pass `stripeColor` for the colored left accent
 * stripe used on workout/today cards.
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Adds a 4px colored stripe along the left edge (e.g. a workout's accent). */
  stripeColor?: string;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
