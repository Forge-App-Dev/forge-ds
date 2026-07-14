import { CSSProperties, ReactNode, ForwardRefExoticComponent, RefAttributes } from "react";

/**
 * In-screen tabs for switching a view within a screen (e.g. Semana/Mês).
 * Distinct from ModuleTabBar (app-level bottom nav). Accent underline on the
 * selected tab; WAI-ARIA tabs keyboard (arrows + Home/End, roving tabindex).
 * @startingPoint section="Navigation" subtitle="In-screen tabs with accent indicator" viewport="700x240"
 */
export interface TabsProps {
  tabs: { id: string; label: string }[];
  /** Id of the selected tab. */
  active: string;
  onChange?: (id: string) => void;
  /** Indicator/underline color. */
  accent?: string;
  /** Prefix for the generated tab/panel ids (make unique when multiple on a page). */
  idBase?: string;
  /** Panel content for the active tab — wired as role="tabpanel". */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Tabs: ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>;
