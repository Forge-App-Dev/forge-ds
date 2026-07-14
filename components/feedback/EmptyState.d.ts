import * as React from "react";

/**
 * Reframed-positive empty/rest state block — never a blank void. Same
 * pattern as a rest day ("Descanso — recuperação também é treino") or an
 * empty meal list.
 */
export interface EmptyStateProps {
  /** Icon name (see Icon component). Defaults to "moon" (rest day). */
  icon?: string;
  title: string;
  subtitle?: string;
  /** Optional next-step action (e.g. a <Button small />) rendered at the end of the row. */
  action?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const EmptyState: React.ForwardRefExoticComponent<
  EmptyStateProps & React.RefAttributes<HTMLDivElement>
>;
