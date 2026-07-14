import React from "react";
import { Button } from "../core/Button.jsx";
import { PageDots } from "./PageDots.jsx";
import { content } from "../shared/content.js";

// Pager — the onboarding carousel (PF-01, OP-022 + pattern OP-062). One slide
// at a time, with the onboarding rules baked in so screens don't reinvent them:
//   - at most 3 slides (a warning fires in dev if you pass more);
//   - "Pular" is always visible (until the last slide, where the single CTA IS
//     the exit) — never trap the user;
//   - the last slide shows ONE primary CTA (doneLabel), replacing "Próximo".
//
// Self-contained/uncontrolled: it tracks the current slide internally (start at
// `initialPage`) and reports movement via `onPageChange`. `onSkip` fires from
// "Pular"; `onDone` fires from the final CTA. Keyboard: ←/→ move between
// slides. Accessible: a live region announces "Slide X de N" on change and
// inactive slides are aria-hidden, so a screen reader reads only the current
// one. `accent` themes the dots + CTA (e.g. a sibling-app color).
export function Pager({
  pages = [],
  initialPage = 0,
  onPageChange,
  onSkip,
  onDone,
  skipLabel = content.pager.skipLabel,
  nextLabel = content.pager.nextLabel,
  doneLabel = content.pager.doneLabel,
  accent,
  style,
}) {
  const count = pages.length;
  if (count > 3 && typeof console !== "undefined") {
    console.warn(`Pager: onboarding deve ter no máximo 3 telas (recebeu ${count}) — ver OP-062.`);
  }
  const [page, setPage] = React.useState(Math.min(Math.max(initialPage, 0), Math.max(count - 1, 0)));
  const isLast = page >= count - 1;

  const go = (next) => {
    const clamped = Math.min(Math.max(next, 0), count - 1);
    if (clamped !== page) { setPage(clamped); if (onPageChange) onPageChange(clamped); }
  };

  return (
    <section
      aria-roledescription="carrossel"
      aria-label="Introdução"
      tabIndex={0}
      className="forge-focusable"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); go(page + 1); }
        else if (e.key === "ArrowLeft") { e.preventDefault(); go(page - 1); }
      }}
      style={{ display: "flex", flexDirection: "column", height: "100%", ...style }}
    >
      <span className="forge-sr-only" role="status" aria-live="polite">{`Slide ${page + 1} de ${count}`}</span>

      <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
        {pages.map((slide, i) => (
          <div
            key={i}
            aria-hidden={i === page ? undefined : "true"}
            style={{ display: i === page ? "flex" : "none", flex: 1, minHeight: 0, flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "var(--forge-space-10)" }}
          >
            {slide}
          </div>
        ))}
      </div>

      <footer style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--forge-space-8)", padding: "var(--forge-space-8) var(--forge-space-10)" }}>
        <div style={{ minWidth: 64 }}>
          {!isLast ? <Button variant="ghost" size="md" title={skipLabel} onClick={onSkip} /> : null}
        </div>
        <PageDots count={count} active={page} accent={accent} />
        <div style={{ minWidth: 64, display: "flex", justifyContent: "flex-end" }}>
          {isLast
            ? <Button variant="primary" size="md" color={accent} title={doneLabel} onClick={onDone} />
            : <Button variant="primary" size="md" color={accent} title={nextLabel} icon="chevron-right" iconPosition="right" onClick={() => go(page + 1)} />}
        </div>
      </footer>
    </section>
  );
}
