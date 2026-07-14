import { CSSProperties } from "react";

/**
 * 1px hairline separator — horizontal or vertical — drawn with
 * `var(--forge-divider)`. Depth by border/color, never shadow (ADR-0028).
 * @startingPoint section="Core" subtitle="Hairline separator (horizontal/vertical)" viewport="700x160"
 */
export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  /** Optional spacing along the flow axis — px number or a CSS length string. */
  margin?: number | string;
  color?: string;
  style?: CSSProperties;
}

export function Divider(props: DividerProps): JSX.Element;
