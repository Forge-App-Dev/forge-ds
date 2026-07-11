Full-bleed near-black video overlay, for an exercise demo clip.

```jsx
<VideoModal visible={open} onClose={close} title="Supino Reto">
  <video src="demo.mp4" controls style={{ width: "100%", height: "100%" }} />
</VideoModal>
```

On native, wrap `react-native-youtube-iframe` rather than a raw WebView iframe — see readme "Known implementation pitfalls".
