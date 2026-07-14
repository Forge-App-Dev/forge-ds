import React from "react";
import { Label } from "./Label.jsx";

// SectionLabel — a Label pre-set with the section-heading margin used above
// grouped list content (e.g. "Sua semana", "Café da manhã"). Composes Label
// internally (OP-112) so the base label styling lives in one place; only the
// section margins are added here. Visual is unchanged.
export function SectionLabel({ children, style }) {
  return <Label style={{ marginTop: 14, marginBottom: 8, ...style }}>{children}</Label>;
}
