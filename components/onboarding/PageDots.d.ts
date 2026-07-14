import { CSSProperties } from "react";

/**
 * Position indicator for a Pager/carousel: the active dot grows into an accent
 * pill, the rest stay small and dimmer. Presentational only — marked
 * `aria-hidden` because the Pager owns the spoken "slide X de N" announcement.
 */
export interface PageDotsProps {
  /** Total number of dots. Default `0`. */
  count?: number;
  /** Index of the active dot. Default `0`. */
  active?: number;
  /** Accent color for the active dot (e.g. a module color). */
  accent?: string;
  style?: CSSProperties;
}

export function PageDots(props: PageDotsProps): JSX.Element;
