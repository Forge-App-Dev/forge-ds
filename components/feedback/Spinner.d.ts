import * as React from "react";

/**
 * Small inline spinner — an icon-scale spinning arc for use inside a
 * button, list row, or section while content loads. For a full-screen boot
 * loading treatment, use LoadingScreen instead.
 */
export interface SpinnerProps {
  size?: number;
  stroke?: number;
  color?: string;
  /** Accessible name (aria-label). Default "Carregando". */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Spinner: React.ForwardRefExoticComponent<
  SpinnerProps & React.RefAttributes<SVGSVGElement>
>;
