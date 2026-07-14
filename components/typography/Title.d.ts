import React, { CSSProperties, ReactNode } from "react";

/**
 * Barlow Condensed heading — the system's only display-type component.
 * Size maps to the type scale: logoLg (40) / screenTitle (34) / panelTitle
 * (22) / cardTitle (16, falls back to Inter 700 non-uppercase for card titles).
 * Pass `as` ("h1".."h3") for correct heading semantics (defaults to a div).
 */
export interface TitleProps {
  children?: ReactNode;
  size?: "logoLg" | "screenTitle" | "panelTitle" | "cardTitle";
  color?: string;
  /** Rendered element. Default `"div"`. */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
}

export declare const Title: React.ForwardRefExoticComponent<
  TitleProps & React.RefAttributes<HTMLElement>
>;
