import React from "react";

// Feather-style inline SVG icons — ~2px stroke, rounded caps/joins.
// Ported 1:1 from src/components/icons.jsx (mateusutz/forge-app).
// Each entry is a FUNCTION returning JSX (not a bare JSX value) — the JSX
// must be created lazily inside a render call, not evaluated once at
// module-load time.
const PATHS = {
  dumbbell: () => (
    <g>
      <line x1="4" y1="9" x2="4" y2="15" />
      <line x1="7" y1="7" x2="7" y2="17" />
      <line x1="17" y1="7" x2="17" y2="17" />
      <line x1="20" y1="9" x2="20" y2="15" />
      <line x1="7" y1="12" x2="17" y2="12" />
    </g>
  ),
  flame: () => <path d="M12 2C12 2 6 8 6 14a6 6 0 0 0 12 0c0-2-1-3.5-2-5 0 1.5-1 2.5-2 2.5 0-3-2-6.5-2-9.5z" />,
  user: () => (
    <g>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </g>
  ),
  arrow: () => (
    <g>
      <line x1="5" y1="12" x2="19" y2="12" />
      <path d="M13 6l6 6-6 6" />
    </g>
  ),
  list: () => (
    <g>
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </g>
  ),
  book: () => (
    <g>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </g>
  ),
  chart: () => (
    <g>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </g>
  ),
  calendar: () => (
    <g>
      <path d="M3 4h18v18H3z" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </g>
  ),
  grid: () => <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />,
  logout: () => (
    <g>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </g>
  ),
  moon: () => <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
  swap: () => (
    <g>
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </g>
  ),
  plus: () => (
    <g>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </g>
  ),
  timer: () => (
    <g>
      <circle cx="12" cy="13" r="8" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="10" y1="2" x2="14" y2="2" />
    </g>
  ),
  play: () => <path d="M6 4l14 8-14 8z" />,
  pause: () => (
    <g>
      <line x1="8" y1="5" x2="8" y2="19" />
      <line x1="16" y1="5" x2="16" y2="19" />
    </g>
  ),
  refresh: () => (
    <g>
      <path d="M23 4v6h-6" />
      <path d="M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
      <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
    </g>
  ),
  check: () => <path d="M20 6L9 17l-5-5" />,
  info: () => (
    <g>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </g>
  ),
  pencil: () => <path d="M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />,
  x: () => (
    <g>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </g>
  ),
  warn: () => (
    <g>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </g>
  ),
  up: () => <polyline points="18 15 12 9 6 15" />,
  down: () => <polyline points="6 9 12 15 18 9" />,
  trophy: () => (
    <g>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </g>
  ),
};

export function Icon({ name, color = "currentColor", size = 24, strokeWidth = 2 }) {
  const render = PATHS[name];
  if (!render) return null;
  const filled = name === "play";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : "none"} stroke={color} strokeWidth={filled ? 1 : strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {render()}
    </svg>
  );
}

export const ICON_NAMES = Object.keys(PATHS);
