import * as React from "react";

/**
 * Inline banner for persistent, context-relevant notices — the treatment
 * seen on the amber "Lembrete do programa" reminder in Treino. This system
 * has no toast/snackbar pattern; notices stay in the flow of the screen.
 */
export interface InlineAlertProps {
  kind?: "info" | "success" | "warning" | "danger";
  /** Bold lead-in inside the body text, colored to match `kind` (e.g. "Lembrete do programa."). */
  title?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const InlineAlert: React.ForwardRefExoticComponent<
  InlineAlertProps & React.RefAttributes<HTMLDivElement>
>;
