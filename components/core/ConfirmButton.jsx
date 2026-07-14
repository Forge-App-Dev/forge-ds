import React from "react";
import { content } from "../shared/content.js";

// Destructive action, confirmed in 2 taps — design-system rule: never
// delete on a single tap. First tap arms a 2.5s confirm window. The armed
// state is announced to screen readers via an aria-live region, and the
// button's accessible name updates to the confirm label. Min height is 44px
// (a11y tap target) even in the compact form.
export const ConfirmButton = React.forwardRef(function ConfirmButton({ title = content.confirmButton.title, confirmTitle = content.confirmButton.confirmTitle, onConfirm, small = true, className, style }, ref) {
  const [arming, setArming] = React.useState(false);
  const timer = React.useRef(null);
  React.useEffect(() => () => clearTimeout(timer.current), []);

  const press = () => {
    if (!arming) {
      setArming(true);
      timer.current = setTimeout(() => setArming(false), 2500);
    } else {
      clearTimeout(timer.current);
      setArming(false);
      onConfirm && onConfirm();
    }
  };

  return (
    <>
      <button
        ref={ref}
        className={["forge-focusable", className].filter(Boolean).join(" ")}
        onClick={press}
        aria-label={arming ? confirmTitle : title}
        style={{
          minHeight: "var(--forge-tap-target)",
          height: small ? 34 : 44,
          borderRadius: "var(--forge-radius-chip)",
          borderWidth: "var(--forge-border-w-strong)",
          borderStyle: "solid",
          borderColor: "var(--forge-danger)",
          backgroundColor: arming ? "var(--forge-danger-fill)" : "transparent",
          color: arming ? "var(--forge-on-dark)" : "var(--forge-danger)",
          fontFamily: "var(--forge-font-body)",
          fontWeight: 700,
          fontSize: 12,
          paddingInline: 12,
          cursor: "pointer",
          transition: "background-color var(--forge-duration-fast) var(--forge-ease-standard), color var(--forge-duration-fast) var(--forge-ease-standard)",
          ...style,
        }}
      >
        {arming ? confirmTitle : title}
      </button>
      <span role="status" aria-live="polite" className="forge-sr-only">
        {arming ? content.confirmButton.armedHint : ""}
      </span>
    </>
  );
});
