# Forge Design System

[![CI](https://github.com/Forge-App-Dev/forge-ds/actions/workflows/ci.yml/badge.svg)](https://github.com/Forge-App-Dev/forge-ds/actions/workflows/ci.yml)

> **📋 Plano tático de prontidão (readiness):** parecer + backlog de correções em [`docs/plan/`](docs/plan/README.md). Fonte única de estado: [`docs/plan/plan.json`](docs/plan/plan.json); dashboard navegável gerado em `docs/plan/index.html`. **Continuando o trabalho? Leia [`docs/plan/README.md`](docs/plan/README.md) primeiro.**

**Forge** is a strength-training + nutrition mobile app family, built with React Native / Expo. This design system is reverse-engineered from the real app codebase and its written design-system spec, so agents can prototype and extend the Forge product line with the correct look, feel, and component vocabulary.

## Sources

- `Forge-App-Dev/forge-app` — GitHub repo, the current native (Expo/React Native) rewrite of the app. Explore it directly for the fullest, most current picture: https://github.com/Forge-App-Dev/forge-app
  - `src/theme/tokens.js` — color/type/spacing tokens (ported into `tokens/` here)
  - `src/components/` — UI primitives (`ui.jsx`, `icons.jsx`, `Ring.jsx`, `AppHeader.jsx`, `ModuleTabBar.jsx`, `meters.jsx`, `LoginScreen.jsx`, `LoadingScreen.jsx`, `QtyInput.jsx`, `TargetsCard.jsx`, `MiniChart.jsx`)
  - `src/screens/` — the Treino (workout) and Nutrição (nutrition) module screens
  - The repo's own README notes it's an **evolution of a PWA** (`mateusutz/Ciclo7`, referenced but not attached here) — that older repo may have more mature/complete screens if you need deeper reference.
- `uploads/FORGE_DESIGN_SYSTEM.md` (mirrored at `reference/FORGE_DESIGN_SYSTEM.md`) — the team's own written design-system spec (in Portuguese), describing tokens, components, interaction patterns and the "sibling app" theming rule. This is the conceptual/family-wide reference (PWA + sibling apps, CSS/JS terms).
- `uploads/FORGE_DESIGN_SYSTEM_RN.md` (mirrored at `reference/FORGE_DESIGN_SYSTEM_RN.md`) — the **React Native translation** of that spec, dedicated to `forge-app` specifically. Where the two differ on a detail, this RN doc wins for forge-app. It's also where the **modal decision rule** (§4 below) and known implementation pitfalls (§6) come from.

If you have access, explore the GitHub repo further (especially `src/screens/treino/` and `src/screens/nutricao/`, which contain several more screens than were built out into this system's UI kit) to extend this system with higher fidelity.

## Product context

Forge is **mobile-first** (max 480px width, centered, bottom nav, generous tap targets) and **dark-theme only** (graphite/near-black). The app is organized into modules chosen from a home screen:

- **Treino** (Workout) — accent red `#EF4444`. Scheduled workouts, exercise library, session logging, progress charts.
- **Nutrição** (Nutrition) — accent green `#10B981`. Daily meal plan, calorie/macro targets, food database (Brazilian TACO table).
- **Perfil** (Profile) — account, body data, goals.

The design system explicitly supports a **family of sibling apps**: new apps reuse the exact same components, radii, type and spacing, changing only the brand mark, the accent color, and the copy (system strings via `content.js`). Forge is **dark-only** — white-labeling swaps accent + brand + copy over the single dark theme; there is no light/dark surface flip. See `docs/white-label.md`.

## Content fundamentals

- **Language:** Portuguese (Brazil), informal "você" register — direct, warm, a little playful, never corporate. Copy addresses the user directly ("Sem treino programado pra hoje. Recuperação também é treino.").
- **Tone:** encouraging coach, not a clinical tracker. Empty/rest states are reframed positively rather than left blank — e.g. a rest day shows "Descanso" with the line "Recuperação também é treino" (recovery is training too) instead of just "no workout."
- **Casing:** sentence case for body copy and buttons; **UPPERCASE** reserved for the Barlow Condensed display type (titles, tags, labels) — never uppercase in Inter body text except tiny tracked labels.
- **Second person, no "I/we" corporate voice:** instructions and hints speak to "você" — e.g. "Escolha qualquer treino pra fazer hoje. Isso não muda a sua agenda."
- **No emoji.** The brand's only iconography is its Feather-style line icons — never emoji as UI decoration.
- **Precision with a human touch:** numeric content (kcal, macros, reps) is exact and calculator-like, but always paired with a plain-language caption (e.g. "Estimativa por Mifflin-St Jeor... valores de referência, não prescrição — para um plano individual, procure um profissional.").
- **Safety-conscious microcopy:** destructive actions get explicit confirmation copy ("Descartar treino?"), and any calculated targets are captioned as estimates, not medical advice.

## Visual foundations

- **Color:** dark graphite base (`bg #0B0F19`, `surface #161E2E`, `surfaceRaised #1B2536`, `panel #121215`) with a single vivid **accent red** (`#EF4444`) carrying almost all brand energy — buttons, active tab, focus rings, the "F" in the wordmark. Each module gets its own accent tint layered on the same dark base (Nutrição = green). Semantic colors are separate from brand accent: success green, warning amber, danger/muted-red for destructive actions (distinct from the brand accent red). Macro colors (protein/carb/fat) are a fixed three-color trio, never reused for anything else.
- **Type:** two families only. **Barlow Condensed** (600/700/800) for all display/heading text — always uppercase, always with a touch of letter-spacing, giving the "stamped metal" feel that matches the anvil mark. **Inter** (400–800) for everything else. Weights are selected by exact family (e.g. `Inter_700Bold`), never combined with a separate `font-weight` — a legacy of React Native/Android font rendering, preserved here as a discipline (always pick the right weight token, don't fake it with CSS `font-weight` on a lighter family).
- **Spacing & layout:** everything lives in a centered 480px-max column. Screen padding 18–22px, card padding 16–18px, list gaps 8–12px. Minimum tap target ~44px.
- **Corners:** cards 14px, panels/modals 18px, inputs 10px, buttons 11px, chips 7–8px, pills fully round (999px). Radii step up with the size/importance of the container — never uniform.
- **Cards:** flat `surface` fill, 1px `border` hairline, 14px radius, **no drop shadow** — depth comes from color/border contrast against the near-black background, not elevation shadows. A 4px colored stripe along the left edge marks "belongs to X" (a workout's accent, a module's color).
- **Overlays:** two patterns only, chosen by **flow size**:
  - **Panel** — centered, dark scrim (`rgba(10,10,12,0.82)`), tap-outside-to-close, ≤440px wide, ≤80% viewport height. The **default, lighter choice** — use for quick choices/selectors (pick a food or exercise), confirmations, replicate-day, short forms. When unsure, use Panel.
  - **FullScreen** — own header (✕ left, uppercase Barlow title center, optional right action like a HeaderAction), scrollable body, optional fixed footer for the primary/destructive action. Use for a **long form or multi-section build flow**: planning/adjusting a day, creating/editing a meal, building/editing a workout, creating/editing an exercise.
  - No bottom sheets, no toasts. (History note: Panel was originally a bottom "Sheet", renamed to a centered panel in v1.2.0.)
  - **Platform note:** on native, Android's `Modal` doesn't blur what's behind it, so both modals sit on a solid dark scrim/background rather than a blur — an accepted, known difference from the PWA sibling (which does blur). Don't "fix" the solid scrim into a blur here.
- **Backgrounds:** solid color only — no gradients, no photography, no full-bleed imagery, no patterns/textures/grain. The one signature graphic motif is the **Ring** (circular progress: background track + accent arc), used for workout completion %, calorie rings, and the loading spinner.
- **Motion:** minimal and functional — a linear-spinning Ring arc and a soft scale/opacity pulse (1↔0.86 / 1↔0.62, ~700ms ease) on the loading screen, animated ellipsis dots, and simple opacity/width transitions on presses and progress fills. No bounce, no spring, no decorative looping animation on regular content. Always respects reduced-motion preference.
- **Hover/press states:** buttons/pressables dim to ~0.85 opacity on press; disabled state drops to ~0.5 opacity. No color-shift or scale-shrink press states (aside from the loading pulse, which is decorative, not interactive feedback).
- **Borders:** thin (1–1.5px) hairlines in `border`/`borderInput`, slightly lighter than the surface they sit on — this, not shadow, is what separates a card/input from the background.
- **Transparency & blur:** the only translucency is the dark scrim behind a Panel (`rgba(10,10,12,0.82)`) — no frosted-glass/backdrop-blur anywhere else.
- **Destructive actions:** never a single tap. A `ConfirmButton` arms on first tap (2.5s window, danger-colored outline) and commits on the second.

## Iconography

- **Style:** Feather-style inline SVG — ~2px stroke, rounded caps/joins, no fills (except the solid Play triangle). Consistent 24×24 viewBox, sized 16–30px depending on context.
- **No icon font, no PNG icon set, no emoji, no unicode glyphs as icons** (aside from a plain "✕"/"▾"/"▴" text character used for close/expand affordances in a couple of legacy spots).
- All icons are consolidated here into a single `Icon` component (`components/icons/Icon.jsx`) that renders-by-name — see the "Intentional additions" note below for why.
- The brand mark — a red anvil + hammer — ships as `assets/forge-mark.svg` (vector, primary) with `assets/forge-mark.png` kept as a raster fallback; it appears at 26px (header), 40px (login), and 56px (loading, inside the spinning ring).

### Intentional additions

- **`Icon`** — the source app defines ~25 separate icon components (`DumbbellIcon`, `FlameIcon`, …, one function per glyph in `icons.jsx`). This system consolidates them into one `Icon` component with a `name` prop for easier reuse in a design tool context. Same paths, same visual style — nothing invented.

## Components

Grouped by concern in `components/<group>/` (each a self-contained `.jsx`; the original primitives also ship `.d.ts` + `.prompt.md`):

- **core/** — `Button`, `Pill`, `ConfirmButton`, `Card`, `HeaderAction`, `Divider`
- **typography/** — `Title`, `Text`, `Label`, `SectionLabel`
- **layout/** — `Screen`, `ScreenBody`
- **forms/** — `TextField`, `QtyInput`, `Switch`, `Stepper`, `ListItem`, `SearchField`, `Select`, `Checkbox`, `PasswordField`, `SegmentedControl`, `Slider`, `FilterChip`
- **overlays/** — `Panel`, `FullScreen`, `VideoModal`
- **navigation/** — `AppHeader`, `ModuleHeader`, `ModuleTabBar`, `Tabs`, `Accordion`, `WeekStrip`
- **feedback/** — `Ring` (+ indeterminate/segments variants), `MacroMeter` (+ compact variant), `MetaBar` (+ segmented variant), `MiniChart` (+ bar/area variants), `Chart`, `ProgressBar` (generic base), `MacroRing`, `InlineAlert`, `EmptyState`, `ErrorState`, `Skeleton`/`SkeletonText`, `Spinner`, `StatBadge`, `Badge`, `Avatar`, `Timeline`, `LoadingScreen`
- **dashboard/** — `StatCard`, `QuickAction`
- **onboarding/** — `Pager`, `PageDots`
- **product/** — `PRCelebration`, `RestTimer`, `SetLogger`, `TargetsCard`, `CoachNote`, `OfflineBanner`, `StreakIndicator`
- **media/** — `ImagePicker`
- **icons/** — `Icon`

The primitives (core/typography/layout/forms/overlays/navigation/feedback) map to the source codebase (`src/components/ui.jsx`, `Ring.jsx`, `AppHeader.jsx`, `ModuleTabBar.jsx`, `meters.jsx`, `MiniChart.jsx`, `QtyInput.jsx`, `icons.jsx`) or to the primitives the audit flagged as missing (forms, states) — built here on the token + accessibility foundation, not invented visually. `Title`/`Label`/`SectionLabel` are the RN doc's text primitives (§3), and `components/shared/color.js` exports the shared `onColor()` contrast helper both `Button` and `Pill` import.

The **product/** layer is deliberately separate: those components know the Forge domain (a personal record, a rest between sets, a logged set) and carry copy, so they **compose** primitives rather than living among them — primitives stay domain-free and white-label-safe. `dashboard/` and `onboarding/` are still neutral primitives (a stat cell, a carousel), just grouped by where the product needs them (PF-02 / PF-01).

## UI kit

- **`ui_kits/forge-app/`** — interactive click-through recreation: Login → Module Chooser → Treino (Hoje) / Nutrição (Hoje) / Perfil, plus the four FullScreen build/edit flows (`DayPlannerScreen`, `MealForm`, `WorkoutEditorScreen`, `ExerciseForm`) reachable from those screens' "Ajustar"/"Continuar treino"/pencil-icon triggers — demonstrating the modal decision rule (§4) in practice. See its own `README.md` for exact scope.

## Foundations (Design System tab)

Specimen cards under `guidelines/`, grouped as **Colors** (surfaces, text, brand/semantic, category palette, macro colors), **Type** (display/title, body), **Spacing** (radius scale, spacing-in-use), and **Brand** (mark at all sizes, loading motif). The same folder also holds **Components** review cards (form controls, loading/error states, dashboard tiles, onboarding pager, product/training) — the surface Mateus reviews on GitHub Pages.

## Index

- `styles.css` — root stylesheet, imports everything under `tokens/`
- `reference/FORGE_DESIGN_SYSTEM_RN.md` — the RN-specific translation of the spec (modal decision rule, RN pitfalls)
- `tokens/tokens.json` — **single source of truth** for tokens (W3C DTCG format); the CSS below is generated from it
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/motion.css`, `tokens/base.css` — design tokens (CSS custom properties, generated from `tokens.json`) + reset/a11y utilities
- `assets/forge-mark.svg` — brand mark (anvil + hammer, red), vector; `assets/forge-mark.png` — raster fallback
- `components/` — 64 components across 12 groups (see above); primitives + a `product/` layer
- `guidelines/` — 31 specimen & review cards (foundations + component review surfaces)
- `ui_kits/forge-app/` — the click-through product recreation
- `reference/FORGE_DESIGN_SYSTEM.md` — mirrored copy of the team's own spec doc
- `SKILL.md` — portable skill file for use in Claude Code

## Known implementation pitfalls (don't repeat)

Carried over from the RN doc's own "armadilhas conhecidas" — worth knowing even outside RN:

- **Never combine a custom font family with a separate `font-weight`.** Each weight is its own font family (e.g. `Inter_700Bold`); layering a CSS `font-weight` on top can silently fall back to the system font (an Android-specific bug the team hit repeatedly). This repo's CSS tokens follow the same discipline — pick the right weight token rather than fake it with `font-weight`.
- **Accent stripe on cards is a flex child, not an absolutely-positioned overlay.** Implement it as a `width:4` flex-row sibling of the content (`Card.jsx` here already does this) — `position:absolute; height:100%` looks fine on a fixed-height mock but falls short on any card whose height is content-driven.
- Always set an explicit `color` on text/icons inside a pressable — don't rely on inheritance.

## Caveats

- **Fonts:** Barlow Condensed and Inter are loaded from Google Fonts (`tokens/typography.css`) — these are the exact fonts specified by the source, not substitutes, so no font files needed copying.
- **No production logo file beyond the app icon mark** was found in the repo — the anvil + hammer mark (`forge-mark.svg`, with `.png` fallback) is used everywhere a "logo" appears, matching the source app exactly.
- The source app itself is mid-development (see its own README phase checklist) — several screens referenced in code (session logging, full nutrition tabs, progress charts, profile) exist in the repo but were not all rebuilt pixel-for-pixel here; the UI kit covers the home flow and each module's primary "Hoje" (Today) screen as the representative sample.
