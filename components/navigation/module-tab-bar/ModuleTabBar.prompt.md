Bottom tab bar for a module, tinted with that module's accent color.

```jsx
<ModuleTabBar
  tabs={[{ id: "hoje", label: "Hoje", icon: "dumbbell" }, { id: "treinos", label: "Treinos", icon: "list" }]}
  active="hoje"
  onChange={setTab}
  accent="#EF4444"
/>
```
