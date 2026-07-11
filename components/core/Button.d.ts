import { CSSProperties } from "react";

/**
 * Primary action button — filled, accent-colored. The one button every
 * screen uses for its main call to action (start workout, save, sign in).
 */
export interface ButtonProps {
  title: string;
  onClick?: () => void;
  /** CSS color value for the fill. Defaults to the Forge accent red. */
  color?: string;
  /** Literal hex of `color`, used only to compute readable text contrast (onColor()). */
  resolvedColor?: string;
  disabled?: boolean;
  /** Compact 36px variant used inline (e.g. "Ajustar" in a header). */
  small?: boolean;
  style?: CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
