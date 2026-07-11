Signed trend badge — arrow + value, colored green/red by whether that direction is the desired outcome for this stat (not just up=green).

```jsx
<StatBadge value={-1.2} unit="kg" goodDirection="down" />  {/* weight loss → green */}
<StatBadge value={+5} unit=" reps" goodDirection="up" />   {/* more reps → green */}
```
