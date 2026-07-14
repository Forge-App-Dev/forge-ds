import React, { CSSProperties, ReactNode } from "react";

/**
 * Isolated screen with its own safe-area padding — used OUTSIDE the module
 * shell (boot, login). Scrollable by default; centers content at 480px max.
 * Fills the dynamic viewport (100dvh, 100vh fallback) and pads all four
 * safe-area insets, including the bottom (OP-113).
 * For a screen inside a module (where ModuleShell already owns safe area),
 * use ScreenBody instead.
 * `style` applies to the centered inner content wrapper; the ref points at the
 * outer full-viewport root element.
 * @startingPoint section="Layout" subtitle="Standalone screen wrapper with safe-area padding" viewport="700x260"
 */
export interface ScreenProps {
  children?: ReactNode;
  scroll?: boolean;
  className?: string;
  style?: CSSProperties;
}

export declare const Screen: React.ForwardRefExoticComponent<
  ScreenProps & React.RefAttributes<HTMLDivElement>
>;
