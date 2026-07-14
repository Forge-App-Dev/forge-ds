import React from "react";
import { Button } from "./Button.jsx";

// HeaderAction — discreet outlined action for a full-screen header (e.g.
// "Replicar"). DEPRECATED as a distinct component (OP-006): this is now just
// Button variant="secondary" size="sm". Kept as a thin alias so existing
// call sites keep working; prefer <Button variant="secondary" size="sm" /> in
// new code.
export const HeaderAction = React.forwardRef(function HeaderAction({ title, onClick, ...rest }, ref) {
  return <Button ref={ref} variant="secondary" size="sm" title={title} onClick={onClick} {...rest} />;
});
