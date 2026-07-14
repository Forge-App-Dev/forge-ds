import { CSSProperties, ForwardRefExoticComponent, RefAttributes } from "react";

export interface WeekDay {
  /** Weekday label (e.g. "seg"). */
  label: string;
  /** Optional day-of-month number shown below the label. */
  sub?: string | number;
  /** Whether training was logged that day (shows a completion dot). */
  done?: boolean;
}

/**
 * Selectable strip of week days (seg→dom) — the minimum date picker the app
 * hand-draws in TreinoHoje. Active day = accent, "today" is marked (and echoed
 * in the accessible name). role="group" of buttons (not a radiogroup — ADR-0008)
 * with roving tabindex and ArrowLeft/Right/Home/End moving focus.
 */
export interface WeekStripProps {
  /** Up to 7 day entries. Defaults to seg→dom labels with no numbers. */
  days?: WeekDay[];
  /** Index of the active/selected day. */
  selected?: number;
  /** Index of the day marked as today. */
  today?: number;
  /** Called with the day index when a day is chosen. */
  onSelect?: (index: number) => void;
  /** Accent for the active day (module color / sibling app). */
  accent?: string;
  /** Accessible group label. Default `"Dias da semana"`. */
  label?: string;
  className?: string;
  style?: CSSProperties;
}

export const WeekStrip: ForwardRefExoticComponent<WeekStripProps & RefAttributes<HTMLDivElement>>;
