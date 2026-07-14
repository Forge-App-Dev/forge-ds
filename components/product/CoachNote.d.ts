import * as React from "react";

/**
 * The coach's voice as a component — a tinted icon plus a contextual,
 * encouraging line (docs/content-guide.md voice turned into UI). A PRODUCT
 * component embodying the brand's coach persona. Deliberately NOT an InlineAlert:
 * no role/live region — it's ambient encouragement, not a status or warning.
 */
export interface CoachNoteProps {
  /** The encouraging line (on-voice pt-BR, sentence case, no emoji). */
  children?: React.ReactNode;
  /** Feather glyph shown in the chip. Default `"flame"`. */
  icon?: string;
  /** Accent for the icon + tint (module color / sibling app). */
  accent?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const CoachNote: React.ForwardRefExoticComponent<
  CoachNoteProps & React.RefAttributes<HTMLDivElement>
>;
