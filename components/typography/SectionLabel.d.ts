import { CSSProperties, ReactNode } from "react";

/**
 * Label pre-set with the section-heading margin used above grouped list
 * content — e.g. "Sua semana" above the week list, "Café da manhã" above a meal.
 */
export interface SectionLabelProps {
  children?: ReactNode;
  style?: CSSProperties;
}

export function SectionLabel(props: SectionLabelProps): JSX.Element;
