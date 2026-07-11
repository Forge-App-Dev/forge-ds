import { CSSProperties, ReactNode } from "react";

/**
 * Isolated screen with its own safe-area padding — used OUTSIDE the module
 * shell (boot, login). Scrollable by default; centers content at 480px max.
 * For a screen inside a module (where ModuleShell already owns safe area),
 * use ScreenBody instead.
 * @startingPoint section="Layout" subtitle="Standalone screen wrapper with safe-area padding" viewport="700x260"
 */
export interface ScreenProps {
  children?: ReactNode;
  scroll?: boolean;
  style?: CSSProperties;
}

export function Screen(props: ScreenProps): JSX.Element;
