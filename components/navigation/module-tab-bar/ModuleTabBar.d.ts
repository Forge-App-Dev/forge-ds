import { CSSProperties, ForwardRefExoticComponent, RefAttributes } from "react";

/**
 * Module bottom tab bar — active tab tinted with the module's accent,
 * inactive tabs in textDim. One instance per module (Treino, Nutrição, Perfil).
 * @startingPoint section="Navigation" subtitle="Bottom tab bar, module-scoped accent" viewport="700x100"
 */
export interface ModuleTabBarProps {
  tabs: { id: string; label: string; /** Icon name, see Icon component. */ icon: string }[];
  active: string;
  onChange: (id: string) => void;
  /** CSS color for the active tab's tint — the current module's accent. Defaults to `var(--forge-accent)`. */
  accent?: string;
  /** Accessible label for the nav landmark. */
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

export const ModuleTabBar: ForwardRefExoticComponent<ModuleTabBarProps & RefAttributes<HTMLElement>>;
