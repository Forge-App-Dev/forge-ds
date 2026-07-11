import { CSSProperties, ReactNode } from "react";

/**
 * Barlow Condensed heading — the system's only display-type component.
 * Size maps to the type scale: logoLg (40) / screenTitle (34) / panelTitle
 * (22) / cardTitle (16, falls back to Inter 700 non-uppercase for card titles).
 */
export interface TitleProps {
  children?: ReactNode;
  size?: "logoLg" | "screenTitle" | "panelTitle" | "cardTitle";
  color?: string;
  style?: CSSProperties;
}

export function Title(props: TitleProps): JSX.Element;
