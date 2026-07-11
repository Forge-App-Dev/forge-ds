import { CSSProperties, ReactNode } from "react";

/**
 * Small uppercase tracked label — used for form field labels, eyebrows, and
 * tiny captions. Two sizes: `label` (11.5px) and `miniLabel` (10.5px).
 */
export interface LabelProps {
  children?: ReactNode;
  size?: "label" | "miniLabel";
  color?: string;
  style?: CSSProperties;
}

export function Label(props: LabelProps): JSX.Element;
