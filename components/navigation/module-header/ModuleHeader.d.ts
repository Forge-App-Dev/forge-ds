import { CSSProperties, ReactNode, ForwardRefExoticComponent, RefAttributes } from "react";

/**
 * Screen-top header — small uppercase eyebrow line + large Barlow Condensed
 * title, with an optional right-aligned action slot.
 * @startingPoint section="Navigation" subtitle="Screen title with eyebrow + right action slot" viewport="700x140"
 */
export interface ModuleHeaderProps {
  eyebrow?: string;
  title: string;
  right?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const ModuleHeader: ForwardRefExoticComponent<ModuleHeaderProps & RefAttributes<HTMLDivElement>>;
