import React from "react";
import { useDialogA11y } from "../../shared/useDialogA11y.js";

// Full-screen flow (edit a plan, build a workout) — own header with close (X)
// + title + optional right action, scrollable body, optional fixed footer for
// save/delete. Accessible dialog: role="dialog" + aria-modal, labelled by
// title, Escape to close, focus trapped, scroll locked. Footer respects the
// bottom safe-area inset. Pass `onBeforeClose` to guard unsaved changes — if it
// returns false, the close is cancelled (e.g. "descartar alterações?").
export const FullScreen = React.forwardRef(function FullScreen({ visible = true, onClose, onBeforeClose, title, right, children, footer, className, style }, ref) {
  const requestClose = React.useCallback(() => {
    if (onBeforeClose && onBeforeClose() === false) return;
    onClose && onClose();
  }, [onBeforeClose, onClose]);

  const hookRef = useDialogA11y(visible, requestClose);
  const setRefs = (node) => {
    hookRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
  };
  const rid = React.useId ? React.useId() : "forge-fs";
  const titleId = `${rid}-title`;
  if (!visible) return null;
  return (
    <div
      ref={setRefs}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      tabIndex={-1}
      className={className}
      style={{ position: "fixed", inset: 0, backgroundColor: "var(--forge-bg)", display: "flex", flexDirection: "column", zIndex: "var(--forge-z-fullscreen)", ...style }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 18px",
          paddingTop: "max(14px, env(safe-area-inset-top))",
          borderBottom: "var(--forge-border-w) solid var(--forge-divider)",
        }}
      >
        <button
          className="forge-focusable forge-tap-min"
          onClick={requestClose}
          aria-label="Fechar"
          style={{ background: "none", border: "none", color: "var(--forge-text-muted)", fontSize: 18, cursor: "pointer", marginLeft: -6 }}
        >
          ✕
        </button>
        <div
          id={titleId}
          style={{
            flex: 1,
            fontFamily: "var(--forge-font-title)",
            fontWeight: 700,
            fontSize: "var(--forge-text-panel-title)",
            color: "var(--forge-text)",
            textTransform: "uppercase",
            letterSpacing: "var(--forge-tracking-title)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </div>
        {right || null}
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: 18 }}>{children}</div>
      {footer ? (
        <div style={{ borderTop: "var(--forge-border-w) solid var(--forge-divider)", padding: "12px 18px 16px", paddingBottom: "max(16px, env(safe-area-inset-bottom))", backgroundColor: "var(--forge-bg)" }}>{footer}</div>
      ) : null}
    </div>
  );
});
