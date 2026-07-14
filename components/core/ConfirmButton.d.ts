import React, { CSSProperties } from "react";

/**
 * Two-tap destructive confirmation button. First tap arms a 2.5s countdown
 * showing `confirmTitle`; a second tap within that window fires `onConfirm`.
 * Design-system rule: never allow single-tap deletion.
 * The ref is forwarded to the underlying `<button>` (the primary element of
 * the returned fragment, which also contains an aria-live status region).
 */
export interface ConfirmButtonProps {
  title?: string;
  confirmTitle?: string;
  onConfirm?: () => void;
  small?: boolean;
  className?: string;
  style?: CSSProperties;
}

export declare const ConfirmButton: React.ForwardRefExoticComponent<
  ConfirmButtonProps & React.RefAttributes<HTMLButtonElement>
>;
