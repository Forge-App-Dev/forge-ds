import { CSSProperties, ReactNode } from "react";

/**
 * Body-copy primitive (Inter) — the everyday-text component so screens stop
 * styling raw <div>s by hand. `size` maps to the type scale; `weight` and
 * `color` are props; `as` picks the element. `cardTitle` lives here (Inter
 * bold), not in Title (which is Barlow display type).
 */
export interface TextProps {
  children?: ReactNode;
  /** Type-scale size. Default `"body"`. */
  size?: "cardTitle" | "listItem" | "body" | "bodySm" | "chip";
  /** Font weight override (e.g. 600, 700). */
  weight?: number | string;
  /** Text color. Default `"var(--forge-text)"`. */
  color?: string;
  /** Rendered element. Default `"span"`. */
  as?: "span" | "div" | "p" | "label";
  style?: CSSProperties;
}

export function Text(props: TextProps): JSX.Element;
