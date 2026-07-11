import { CSSProperties, ReactNode } from "react";

/**
 * Body of a screen inside a module — ModuleShell/AppHeader already own the
 * safe area, so this just handles scroll + standard screen padding (20px h)
 * + max-width centering (480).
 * @startingPoint section="Layout" subtitle="Screen body wrapper for use inside a module" viewport="700x260"
 */
export interface ScreenBodyProps {
  children?: ReactNode;
  scroll?: boolean;
  style?: CSSProperties;
}

export function ScreenBody(props: ScreenBodyProps): JSX.Element;
