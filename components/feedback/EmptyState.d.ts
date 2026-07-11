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
}

export function EmptyState(props: EmptyStateProps): JSX.Element;
