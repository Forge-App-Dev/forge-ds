import * as React from "react";

/**
 * Daily kcal + macro targets summary card, with an "Ajustar" edit affordance.
 * Shows NUMERIC targets (not a progress meter). Default labels come from
 * content.targetsCard (i18n/white-label seam). Used atop the Nutrição "Hoje"
 * screen and the targets-setup flow.
 */
export interface TargetsCardProps {
  kcal: number;
  protein: number;
  carb: number;
  fat: number;
  onEdit?: () => void;
  /** Accent for the "Ajustar" link — a token ref (e.g. "var(--forge-nutrition)") or a module accent. */
  accent?: string;
  /** Section title; defaults to content.targetsCard.title. */
  title?: React.ReactNode;
  /** Edit link label; defaults to content.targetsCard.editLabel. */
  editLabel?: React.ReactNode;
  /** Override the per-stat labels; merged over content.targetsCard defaults. */
  labels?: Partial<{ kcal: React.ReactNode; protein: React.ReactNode; carb: React.ReactNode; fat: React.ReactNode }>;
  className?: string;
  style?: React.CSSProperties;
}

export declare const TargetsCard: React.ForwardRefExoticComponent<
  TargetsCardProps & React.RefAttributes<HTMLDivElement>
>;
