Centered modal (dark scrim + `panel` surface, 18px radius, 440px max width, 80% max height) for small choices and confirmations. Tapping the scrim closes it.

```jsx
<Panel visible={open} onClose={close} title="Treino de hoje" footer={<Button title="Pronto" onClick={close} />}>
  ...rows...
</Panel>
```

**Decision rule — Panel is the default, lighter choice.** Reach for it for: quick choices/selectors (pick a food/exercise from a list), confirmations, replicate-day, short forms (new food item). If you're unsure which modal fits, pick Panel.

For a long form or multi-section build flow, use FullScreen instead. On native the source app renders both as a platform `Modal` (Panel: transparent+fade; FullScreen: slide) with no background blur — Android doesn't blur behind a Modal, so both use a solid dark scrim/background instead (a PWA sibling may blur; that's an accepted platform difference, not a bug to fix here).
