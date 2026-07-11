/**
 * Compact single-value progress bar — switches to warning color when the
 * value exceeds its target (e.g. daily calories going over budget).
 * @startingPoint section="Feedback" subtitle="Compact progress bar with over-target warning" viewport="700x100"
 */
export interface MetaBarProps {
  value: number;
  target: number;
  color?: string;
  /** Stacked/striped variant — several contributors sharing one bar (e.g. each meal's kcal share) instead of a single fill. When set, `value`/`color` are ignored. */
  segments?: { value: number; color: string }[];
}

export function MetaBar(props: MetaBarProps): JSX.Element;
