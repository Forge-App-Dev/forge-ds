import * as React from "react";

export interface TimelineItem {
  /** Primary line (e.g. session name). */
  title?: React.ReactNode;
  /** Timestamp / relative time (e.g. "hoje", "seg 14/07"). */
  time?: React.ReactNode;
  /** Secondary description line. */
  description?: React.ReactNode;
  /** Feather glyph — renders a chip marker instead of a plain dot. */
  icon?: string;
  /** Marker tint (falls back to `accent`). */
  color?: string;
  /** When `false`, the dot marker is drawn hollow. */
  done?: boolean;
}

/**
 * Vertical history of events/sessions — marker + connecting line + content per
 * item. Renders a semantic ordered list (<ol>/<li>); the marker line is
 * decorative. The line is drawn between markers and omitted after the last item.
 */
export interface TimelineProps {
  items?: TimelineItem[];
  /** Default marker tint (module color / sibling app). */
  accent?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Timeline: React.ForwardRefExoticComponent<
  TimelineProps & React.RefAttributes<HTMLOListElement>
>;
