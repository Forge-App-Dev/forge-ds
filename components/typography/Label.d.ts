import React, { CSSProperties, ReactNode } from "react";

/**
 * Small uppercase tracked label — used for form field labels, eyebrows, and
 * tiny captions. Two sizes: `label` (11.5px) and `miniLabel` (10.5px).
 */
export interface LabelProps {
  children?: ReactNode;
  size?: "label" | "miniLabel";
  color?: string;
  /** Element to render (default "div"). Use "label" to associate a form field. */
  as?: keyof JSX.IntrinsicElements;
  /** Id of the associated control — only applied when `as="label"`. */
  htmlFor?: string;
  className?: string;
  style?: CSSProperties;
}

export declare const Label: React.ForwardRefExoticComponent<
  LabelProps & React.RefAttributes<HTMLElement>
>;
