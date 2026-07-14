import React, { CSSProperties, ReactNode } from "react";

/**
 * Label pre-set with the section-heading margin used above grouped list
 * content — e.g. "Sua semana" above the week list, "Café da manhã" above a meal.
 * Composes `Label` internally (OP-112); visual unchanged. The ref is forwarded
 * to the underlying Label element.
 */
export interface SectionLabelProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export declare const SectionLabel: React.ForwardRefExoticComponent<
  SectionLabelProps & React.RefAttributes<HTMLElement>
>;
