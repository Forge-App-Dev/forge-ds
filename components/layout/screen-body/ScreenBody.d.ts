import { CSSProperties, ReactNode } from "react";

/**
 * Body of a screen inside a module — ModuleShell/AppHeader already own the
 * safe area, so this just handles scroll + standard screen padding (20px h)
 * + max-width centering (480). Pass `footer` for a pinned bottom action bar
 * (OP-114) — the body scrolls, the footer stays put with a hairline border.
 * @startingPoint section="Layout" subtitle="Screen body wrapper for use inside a module" viewport="700x260"
 */
export interface ScreenBodyProps {
  children?: ReactNode;
  /** Optional pinned footer (action bar) below the scrolling body. */
  footer?: ReactNode;
  scroll?: boolean;
  style?: CSSProperties;
}

export function ScreenBody(props: ScreenBodyProps): JSX.Element;
