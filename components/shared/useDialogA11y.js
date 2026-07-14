import React from "react";

// useDialogA11y — a11y de modal compartilhada por Panel / FullScreen / VideoModal.
// Quando ativo: trava o scroll do body, fecha no Escape, e prende o Tab dentro
// do diálogo (move o foco pra dentro ao abrir, restaura ao fechar).
//
//   const ref = useDialogA11y(visible, onClose);
//   <div ref={ref} role="dialog" aria-modal="true" ...>
//
// T-37 — dois consertos:
//   1. onClose vive num REF: o efeito só depende de `active`, então um onClose
//      recriado a cada render do pai (Panel/VideoModal passam handler não
//      memoizado) NÃO reexecuta o efeito — acabou o roubo de foco / re-trava de
//      scroll a cada render do pai.
//   2. o keydown é escutado no NÓ do diálogo (não em document, capture): como o
//      foco fica preso dentro, diálogos EMPILHADOS — cada um escuta o próprio nó
//      — só respondem quando são o topo (onde o foco está); Escape fecha o de
//      cima, não o de baixo.
export function useDialogA11y(active, onClose) {
  const ref = React.useRef(null);
  const onCloseRef = React.useRef(onClose);
  React.useEffect(() => { onCloseRef.current = onClose; }, [onClose]);

  React.useEffect(() => {
    if (!active || typeof document === "undefined") return;
    const node = ref.current;
    const prevFocus = document.activeElement;
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

    const first = focusables()[0];
    if (first) first.focus();
    else if (node) node.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        const cb = onCloseRef.current;
        if (cb) cb();
        return;
      }
      if (e.key === "Tab") {
        const items = focusables();
        if (items.length === 0) { e.preventDefault(); return; }
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
        else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
      }
    };

    const target = node || document;
    target.addEventListener("keydown", onKey);
    return () => {
      target.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (prevFocus && prevFocus.focus) prevFocus.focus();
    };
  }, [active]);

  return ref;
}
