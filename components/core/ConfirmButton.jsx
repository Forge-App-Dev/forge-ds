import React from "react";

// Destructive action, confirmed in 2 taps — design-system rule: never
// delete on a single tap. First tap arms a 2.5s confirm window.
export function ConfirmButton({ title = "Excluir", confirmTitle = "Confirmar?", onConfirm, small = true, style }) {
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
    <button
      onClick={press}
      style={{
        height: small ? 34 : 44,
        borderRadius: 8,
        borderWidth: 1.5,
        borderStyle: "solid",
        borderColor: "var(--forge-danger)",
        backgroundColor: arming ? "var(--forge-danger)" : "transparent",
        color: arming ? "#fff" : "var(--forge-danger)",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 12,
        paddingInline: 12,
        cursor: "pointer",
        transition: "background-color 0.15s ease, color 0.15s ease",
        ...style,
      }}
    >
      {arming ? confirmTitle : title}
    </button>
  );
}
