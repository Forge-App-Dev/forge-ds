import * as React from "react";
import { CSSProperties } from "react";

/**
 * On/off toggle (e.g. kg/lb preference, enable a meal). Renders `role="switch"`
 * + `aria-checked`, keyboard-focusable. Pass `label` for a tappable row with the
 * switch on the right (the common form layout), or omit it for a bare switch.
 */
export interface SwitchProps {
  /** Current on/off state. Default `false`. */
  checked?: boolean;
  /** Called with the next boolean when toggled. */
  onChange?: (checked: boolean) => void;
  /** Optional label; renders a full tappable row with the label on the left. */
  label?: string;
  /** Disables interaction and dims the control. Default `false`. */
  disabled?: boolean;
  /** Fallback id used when `React.useId` is unavailable. */
  id?: string;
  className?: string;
  style?: CSSProperties;
}

export const Switch: React.ForwardRefExoticComponent<
  SwitchProps & React.RefAttributes<HTMLElement>
>;
