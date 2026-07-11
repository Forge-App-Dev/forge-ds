import { ReactNode } from "react";

/**
 * Screen-top header — small uppercase eyebrow line + large Barlow Condensed
 * title, with an optional right-aligned action slot.
 * @startingPoint section="Navigation" subtitle="Screen title with eyebrow + right action slot" viewport="700x140"
 */
export interface ModuleHeaderProps {
  eyebrow?: string;
  title: string;
  right?: ReactNode;
}

export function ModuleHeader(props: ModuleHeaderProps): JSX.Element;
