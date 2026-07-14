# Forge App — UI Kit

Click-through recreation of the Forge mobile app (React Native / Expo, `Forge-App-Dev/forge-app`), rendered for web using this design system's tokens and components.

## Flow

`index.html` mounts a state machine: **Login → Module Chooser → Treino (Hoje) / Nutrição (Hoje) / Perfil**, sharing the global `AppHeader` + `ModuleTabBar` shell, plus four FullScreen build/edit flows layered on top: **DayPlannerScreen** (from Nutrição's "Ajustar"), **MealForm** (from a meal card's pencil icon), **WorkoutEditorScreen** (from Treino's "Continuar treino" or "Editar agenda"), and **ExerciseForm** (from an exercise row inside WorkoutEditorScreen, or its "+ Adicionar exercício"). Tap "Continuar com Google" or "Entrar" to sign in; tap a module card to enter; tap the grid icon in the header to go back to the module chooser.

## Files

- `index.html` — app shell, header/tab-bar wiring, screen router
- `LoginScreen.jsx` — Google + email/senha auth screen
- `ModuleChooserScreen.jsx` — Treino / Nutrição / Perfil picker
- `TreinoHojeScreen.jsx` — today's scheduled workout, week schedule, program reminder
- `NutricaoHojeScreen.jsx` — calorie ring + macro meters, expandable meal cards
- `PerfilScreen.jsx` — account/body-data/targets settings list
- `DayPlannerScreen.jsx` — FullScreen: toggle which meal slots are part of the day
- `MealForm.jsx` — FullScreen: edit a meal's name + food items (QtyInput) + destructive discard
- `WorkoutEditorScreen.jsx` — FullScreen: name a workout, list/reorder its exercises
- `ExerciseForm.jsx` — FullScreen: create/edit one exercise (muscle group pills, sets/reps, video URL)

## Source fidelity

Recreated from the real screens in `Forge-App-Dev/forge-app`: `src/components/LoginScreen.jsx`, `src/screens/ModuleChooser.jsx`, `src/screens/treino/TodayTab.jsx`, `src/screens/nutricao/HojeTab.jsx`. `PerfilScreen` and the four FullScreen forms aren't fully built out in the source app's `src/screens/` yet (see its own README phase checklist) — they're assembled here from the design system's own primitives (`FullScreen`, `TextField`, `QtyInput`, `Pill`, `ConfirmButton`) following the modal decision rule and field patterns documented in `FORGE_DESIGN_SYSTEM_RN.md` §3–4, as a best-effort extrapolation rather than a pixel copy of code that doesn't exist yet. Repeated list content (workout exercises, meal items, week days) is abbreviated to a representative sample — every component family is represented.

Not built: the Cardápio/Alimentos/Progresso tab bodies (tapping them currently no-ops) — those aren't in the source app's screens directory at all yet.
