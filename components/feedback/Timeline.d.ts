import { CSSProperties, ReactNode } from "react";

export interface TimelineItem {
  /** Primary line (e.g. session name). */
  title?: ReactNode;
  /** Timestamp / relative time (e.g. "hoje", "seg 14/07"). */
  time?: ReactNode;
  /** Secondary description line. */
  description?: ReactNode;
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
  style?: CSSProperties;
}

export function Timeline(props: TimelineProps): JSX.Element;
