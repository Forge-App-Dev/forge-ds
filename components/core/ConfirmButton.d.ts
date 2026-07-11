import { CSSProperties } from "react";

/**
 * Two-tap destructive confirmation button. First tap arms a 2.5s countdown
 * showing `confirmTitle`; a second tap within that window fires `onConfirm`.
 * Design-system rule: never allow single-tap deletion.
 */
export interface ConfirmButtonProps {
  title?: string;
  confirmTitle?: string;
  onConfirm?: () => void;
  small?: boolean;
  style?: CSSProperties;
}

export function ConfirmButton(props: ConfirmButtonProps): JSX.Element;
