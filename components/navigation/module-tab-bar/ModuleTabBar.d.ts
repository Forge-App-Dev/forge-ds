/**
 * Module bottom tab bar — active tab tinted with the module's accent,
 * inactive tabs in textDim. One instance per module (Treino, Nutrição, Perfil).
 * @startingPoint section="Navigation" subtitle="Bottom tab bar, module-scoped accent" viewport="700x100"
 */
export interface ModuleTabBarProps {
  tabs: { id: string; label: string; /** Icon name, see Icon component. */ icon: string }[];
  active: string;
  onChange: (id: string) => void;
  /** Literal hex for the active tab's tint — the current module's accent. */
  accent?: string;
}

export function ModuleTabBar(props: ModuleTabBarProps): JSX.Element;
