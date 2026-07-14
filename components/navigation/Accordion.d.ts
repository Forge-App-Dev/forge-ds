import { CSSProperties, ReactNode } from "react";

/**
 * Single expandable disclosure item — header button with ▾ chevron over a
 * collapsible region. Uncontrolled (`defaultOpen`) or controlled (`open` +
 * `onToggle`). Animates on a duration token; respects reduced-motion.
 * @startingPoint section="Navigation" subtitle="Expandable disclosure item with chevron" viewport="700x260"
 */
export interface AccordionProps {
  /** Header content (the always-visible summary). */
  title: ReactNode;
  /** Collapsible body content. */
  children?: ReactNode;
  /** Controlled open state. Omit for uncontrolled. */
  open?: boolean;
  /** Initial open state when uncontrolled. */
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  /** Prefix for the generated header/panel ids (make unique per instance). */
  idBase?: string;
  style?: CSSProperties;
}

export function Accordion(props: AccordionProps): JSX.Element;
