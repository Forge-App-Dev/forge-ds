import React, { CSSProperties } from "react";

/**
 * Discreet outlined action button, sized for a FullScreen header (e.g. "Replicar").
 * DEPRECATED (OP-006): a thin alias for `Button variant="secondary" size="sm"`.
 * Extra props (including `className`/`style`) are forwarded to the underlying
 * Button; the ref points at Button's `<button>` element.
 */
export interface HeaderActionProps {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: CSSProperties;
}

export declare const HeaderAction: React.ForwardRefExoticComponent<
  HeaderActionProps & React.RefAttributes<HTMLButtonElement>
>;
