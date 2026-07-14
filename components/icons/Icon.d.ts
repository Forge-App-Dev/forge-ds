import * as React from "react";

/**
 * Feather-style inline SVG icon glyph — ~2px stroke, rounded caps. This is
 * an **intentional addition**: the source app defines ~25 individual icon
 * components (DumbbellIcon, FlameIcon, …); this consolidates them into one
 * lookup-by-name wrapper for easier reuse. Same paths, same visual style.
 */
export interface IconProps {
  /** dumbbell | flame | user | arrow | list | book | chart | calendar | grid |
   *  logout | moon | swap | plus | timer | play | pause | refresh | check |
   *  info | pencil | x | warn | up | down | trophy */
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  /** Accessible name; when set the svg becomes `role="img"`, else aria-hidden. */
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon: React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;
export const ICON_NAMES: string[];
