/**
 * Daily kcal + macro targets summary card, with an "Ajustar" edit affordance.
 * Used atop the Nutrição "Hoje" screen and the targets-setup flow.
 */
export interface TargetsCardProps {
  kcal: number;
  protein: number;
  carb: number;
  fat: number;
  onEdit?: () => void;
  /** Literal hex for the "Ajustar" link color — the current module's accent. */
  accent?: string;
}

export function TargetsCard(props: TargetsCardProps): JSX.Element;
