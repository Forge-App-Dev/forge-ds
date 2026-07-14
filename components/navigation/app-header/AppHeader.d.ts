import { CSSProperties, ForwardRefExoticComponent, RefAttributes } from "react";

/**
 * Global app header — brand mark + wordmark (accent "F") on the left;
 * back-to-modules and logout icon buttons on the right.
 * @startingPoint section="Navigation" subtitle="Global header with brand mark + logout" viewport="700x100"
 */
export interface AppHeaderProps {
  /** Brand identity — wordmark `name` (default "Forge", first letter accent) + `markSrc` image. */
  brand?: { name?: string; markSrc?: string };
  /** Legacy shorthand for the mark image (assets/forge-mark.png); prefer `brand`. */
  markSrc?: string;
  /** True when inside a module (Treino/Nutrição/Perfil) — shows back-to-modules icon. */
  inModule?: boolean;
  onBackToModules?: () => void;
  onLogout?: () => void;
  className?: string;
  style?: CSSProperties;
}

export const AppHeader: ForwardRefExoticComponent<AppHeaderProps & RefAttributes<HTMLDivElement>>;
