import React from "react";

// useDialogA11y — shared modal accessibility for Panel / FullScreen / VideoModal.
// When active: locks body scroll, closes on Escape, and traps Tab focus inside
// the dialog (moving focus into it on open and restoring it on close). Returns
// a ref to attach to the dialog container.
//
// Usage:
//   const ref = useDialogA11y(visible, onClose);
//   <div ref={ref} role="dialog" aria-modal="true" ...>
export function useDialogA11y(active, onClose) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!active) return;
    const node = ref.current;
    const prevFocus = typeof document !== "undefined" ? document.activeElement : null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      node
        ? Array.from(
            node.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
          ).filter((el) => !el.disabled && el.offsetParent !== null)
        : [];

    // move focus into the dialog
    const first = focusables()[0];
    if (first) first.focus();
    else if (node) node.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose && onClose();
        return;
      }
      if (e.key === "Tab") {
        const items = focusables();
        if (items.length === 0) {
          e.preventDefault();
          return;
        }
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = prevOverflow;
      if (prevFocus && prevFocus.focus) prevFocus.focus();
    };
  }, [active, onClose]);

  return ref;
}
