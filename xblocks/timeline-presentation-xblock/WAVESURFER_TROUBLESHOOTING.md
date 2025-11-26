# WaveSurfer Integration - Troubleshooting Guide

## Common Issues and Solutions

### 1. Waveform Not Displaying

**Symptom**: Empty gray box instead of waveform

**Possible Causes & Solutions**:

```
A. Audio file not loaded
   ✓ Check: Is audioUrl set in StudioView state?
   ✓ Fix: Upload audio file in Assets tab first
   ✓ Debug: Check browser console for fetch errors

B. CORS issues with audio file
   ✓ Check: Browser console for CORS errors
   ✓ Fix: Ensure OpenEdx serves audio with correct headers
   ✓ Workaround: Use audio from same domain

C. WaveSurfer initialization failed
   ✓ Check: Browser console for WaveSurfer errors
   ✓ Fix: Verify wavesurfer.js bundle loaded
   ✓ Debug: Add console.log in useEffect initialization

D. Container ref not set
   ✓ Check: Is waveformRef.current null?
   ✓ Fix: Ensure component mounted before init
   ✓ Debug: Add console.log(waveformRef.current) before create
```

**Debug Steps**:
```typescript
// Add to WaveformTimeline.tsx useEffect:
console.log('[Debug] Audio URL:', audioUrl);
console.log('[Debug] Container ref:', waveformRef.current);
console.log('[Debug] WaveSurfer version:', WaveSurfer.VERSION);
```

---

### 2. Event Markers Not Appearing

**Symptom**: Waveform loads but no markers visible

**Possible Causes & Solutions**:

```
A. Events array empty
   ✓ Check: console.log(events) in component
   ✓ Fix: Add events via TimelineEventEditor
   ✓ Verify: Events have valid timestamps

B. Regions plugin not loaded
   ✓ Check: console.log(regionsPluginRef.current)
   ✓ Fix: Verify RegionsPlugin import
   ✓ Debug: Check if plugin registered correctly

C. Timing issue (regions created before ready)
   ✓ Check: Is isReady state true?
   ✓ Fix: useEffect depends on [events, isReady]
   ✓ Debug: Log when regions are created

D. Timestamp out of bounds
   ✓ Check: event.timestamp <= audioDuration
   ✓ Fix: Clamp timestamps to [0, duration]
   ✓ Verify: Check for NaN or negative values
```

**Debug Steps**:
```typescript
// Add to regions useEffect:
console.log('[Debug] Creating regions for', events.length, 'events');
console.log('[Debug] Is ready:', isReady);
console.log('[Debug] Regions plugin:', regionsPluginRef.current);
events.forEach(event => {
  console.log(`[Debug] Event ${event.id}: ${event.timestamp}s`);
});
```

---

### 3. Drag Not Working

**Symptom**: Cannot drag event markers

**Possible Causes & Solutions**:

```
A. Region drag disabled
   ✓ Check: Region config has drag: true
   ✓ Fix: Verify addRegion({ drag: true })
   ✓ Code: See WaveformTimeline.tsx line ~130

B. CSS cursor not changing
   ✓ Check: Cursor changes to 'grab' on hover?
   ✓ Fix: Check minimal-paragon.scss styles
   ✓ Verify: No CSS override preventing cursor change

C. Event handler not registered
   ✓ Check: region.on('update-end') is called
   ✓ Fix: Verify event listener in component
   ✓ Debug: Add console.log in update-end handler

D. Parent element capturing events
   ✓ Check: Any z-index issues?
   ✓ Fix: Ensure waveform-container has correct stacking
   ✓ Verify: No overlapping elements
```

**Debug Steps**:
```typescript
// Add to region creation:
region.on('update-start', () => console.log('[Debug] Drag started'));
region.on('update', () => console.log('[Debug] Dragging...'));
region.on('update-end', () => console.log('[Debug] Drag ended at', region.start));
```

---

### 4. Click-to-Add Not Working

**Symptom**: Clicking waveform doesn't create events

**Possible Causes & Solutions**:

```
A. onAddEvent handler not provided
   ✓ Check: WaveformTimeline has onAddEvent prop
   ✓ Fix: Verify StudioView passes handleWaveformAddEvent
   ✓ Code: See StudioView.tsx line ~503

B. WaveSurfer click event not firing
   ✓ Check: wavesurfer.on('click') registered
   ✓ Fix: Verify event listener in useEffect
   ✓ Debug: Add console.log in click handler

C. Region click capturing events
   ✓ Check: Clicking empty waveform vs clicking marker
   ✓ Fix: Regions should handle their own clicks
   ✓ Verify: Event propagation correct

D. Cursor style preventing clicks
   ✓ Check: Is cursor: crosshair applied?
   ✓ Fix: Verify CSS doesn't block pointer-events
   ✓ Debug: Test with cursor: pointer temporarily
```

**Debug Steps**:
```typescript
// Add to WaveSurfer initialization:
wavesurfer.on('click', (relativeX) => {
  console.log('[Debug] Waveform clicked at', relativeX * 100, '%');
  console.log('[Debug] Timestamp:', relativeX * wavesurfer.getDuration());
});
```

---

### 5. Colors Not Matching Liverpool Theme

**Symptom**: Waveform colors are default (not Liverpool colors)

**Possible Causes & Solutions**:

```
A. Liverpool tokens not imported
   ✓ Check: @import in minimal-paragon.scss
   ✓ Fix: Verify path to liverpool-shared-tokens.scss
   ✓ Path: ../../../../../../shared-styles/styles/

B. CSS not compiled
   ✓ Check: Run npm run build:studio
   ✓ Fix: Rebuild after style changes
   ✓ Verify: Check studio-ui.css in public/

C. WaveSurfer inline styles overriding
   ✓ Check: Waveform config uses correct colors
   ✓ Fix: Update WaveSurfer.create() config
   ✓ Values: See WaveformTimeline.tsx line ~70

D. Specificity issue
   ✓ Check: Use !important if needed
   ✓ Fix: Increase CSS selector specificity
   ✓ Verify: Browser dev tools computed styles
```

**Debug Steps**:
```scss
// Temporarily add to minimal-paragon.scss:
.waveform-container {
  border: 5px solid red !important; // Should see red border
}
```

---

### 6. Performance Issues / Lag

**Symptom**: Slow rendering, choppy interactions

**Possible Causes & Solutions**:

```
A. Audio file too large
   ✓ Check: File size > 50MB?
   ✓ Fix: Compress audio to 128kbps MP3
   ✓ Limit: Recommend < 10 minutes

B. Too many regions
   ✓ Check: events.length > 50?
   ✓ Fix: Consider region pooling
   ✓ Optimize: Only render visible regions

C. Unnecessary re-renders
   ✓ Check: React DevTools Profiler
   ✓ Fix: Memoize event array
   ✓ Code: useMemo for sorted events

D. WaveSurfer redrawing constantly
   ✓ Check: Is waveform being destroyed/recreated?
   ✓ Fix: Ensure useEffect dependencies correct
   ✓ Verify: WaveSurfer instance persists
```

**Debug Steps**:
```typescript
// Add to component top:
console.log('[Debug] WaveformTimeline render');
useEffect(() => {
  console.log('[Debug] Events changed:', events.length);
}, [events]);
```

---

### 7. Bundle Size Issues

**Symptom**: studio-ui.js too large, slow loading

**Current Bundle**: 723KB (acceptable for Studio)

**If optimization needed**:

```
A. Code splitting
   ✓ Use: React.lazy() for WaveformTimeline
   ✓ Benefit: Load only when Timeline tab active
   ✓ Trade-off: Slight delay on first tab switch

B. WaveSurfer minified
   ✓ Check: Already minified in production build
   ✓ Verify: npm run build uses Vite production mode

C. Tree shaking
   ✓ Ensure: Import only needed WaveSurfer modules
   ✓ Current: Importing entire package (necessary)
   ✓ Note: Regions plugin required

D. CDN option
   ✓ Consider: Load WaveSurfer from CDN
   ✓ Benefit: Reduce bundle by ~400KB
   ✓ Trade-off: External dependency, CORS setup
```

**Code Splitting Example**:
```typescript
// In StudioView.tsx:
const WaveformTimeline = React.lazy(() =>
  import('./components/WaveformTimeline').then(m => ({ default: m.WaveformTimeline }))
);

// In Timeline tab:
<React.Suspense fallback={<div>Loading waveform...</div>}>
  <WaveformTimeline ... />
</React.Suspense>
```

---

## Browser Console Debugging

### Expected Console Messages

**On successful load**:
```
[WaveformTimeline] Waveform ready
[WaveformTimeline] Created 5 regions
```

**On event interactions**:
```
[WaveformTimeline] Region clicked: event_123456789
[WaveformTimeline] Region dragged to: 12.5
[WaveformTimeline] Clicked at 8.3 seconds
[Timeline] Event event_123 moved to 12.50s
```

### Error Messages to Watch For

**Audio loading errors**:
```
[WaveformTimeline] Error loading audio: <error details>
Failed to load audio waveform
```

**Initialization errors**:
```
[WaveformTimeline] Initialization error: <error details>
Failed to initialize waveform
```

**CORS errors**:
```
Access to fetch at '<audio-url>' from origin '<studio-url>' has been blocked by CORS policy
```

---

## Testing Workflow

### 1. Basic Functionality Test
```
1. Open Studio → Timeline XBlock
2. Upload test audio (short, 10-30 seconds)
3. Go to Timeline Events tab
4. Wait for waveform to load
5. Click empty area → New event should appear
6. Drag marker → Timestamp should update
7. Click marker → Console should log click
```

### 2. Visual Verification
```
1. Check waveform colors:
   - Bars: Blue-gray (#9BA4C5)
   - Progress: Navy (#212b58)
   - Cursor: Pink (#EF426F)

2. Check event markers:
   - Text: Blue dot
   - Shape: Teal dot
   - Line: Sky blue dot
   - Arrow: Pink dot

3. Check interactions:
   - Hover on waveform → Crosshair cursor
   - Hover on marker → Grab cursor
   - Drag marker → Grabbing cursor
   - Border hover → Light blue highlight
```

### 3. Edge Case Testing
```
1. No audio loaded → Show message
2. Very short audio (< 5s) → Still functional
3. Long audio (> 2 min) → Performance OK
4. Many events (> 20) → All visible, draggable
5. Overlapping events → Both interactive
6. Event at 0 seconds → Marker at start
7. Event at duration → Marker at end
```

---

## Files to Check When Debugging

### 1. Component Logic
```
/frontend/src/studio-ui/components/WaveformTimeline.tsx
- Line ~70: WaveSurfer initialization
- Line ~80: Event listeners
- Line ~130: Region creation
- Line ~145: Event handlers
```

### 2. Integration
```
/frontend/src/studio-ui/StudioView.tsx
- Line ~17: Import statement
- Line ~356: Event handlers
- Line ~503: Component usage
```

### 3. Styling
```
/frontend/src/studio-ui/styles/minimal-paragon.scss
- Line ~20: Waveform container
- Line ~85: Region overrides
- Line ~112: Cursor styles
```

### 4. Build Output
```
/timeline_presentation/public/studio-ui.js
- Verify wavesurfer bundled: grep -q "wavesurfer"
- Check size: ls -lh studio-ui.js (should be ~723KB)
```

---

## Quick Fixes Reference

### Reset Everything
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run build
cd ..
./deploy-dev.sh
```

### Rebuild Just Studio
```bash
cd frontend
npm run build:studio
cd ..
./deploy-dev.sh
```

### Check Build Artifacts
```bash
ls -lh timeline_presentation/public/
grep -c "wavesurfer" timeline_presentation/public/studio-ui.js
```

### Force Browser Refresh
```
1. Open Studio
2. Press Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
3. Or: Clear cache and hard reload
4. Or: Open in Incognito/Private window
```

---

## Getting Help

### Information to Include

When reporting issues, provide:

1. **Error message**: Full console error with stack trace
2. **Environment**: Browser, OS, OpenEdx version
3. **Steps to reproduce**: Exact sequence of actions
4. **Expected vs actual**: What should happen vs what happened
5. **Console logs**: With debug logs added (see above)
6. **Build output**: Any warnings or errors from npm run build

### Debug Mode

Enable verbose logging:

```typescript
// Add to WaveformTimeline.tsx top of component:
const DEBUG = true;
const log = (...args: any[]) => DEBUG && console.log('[WaveformDebug]', ...args);

// Replace console.log with log():
log('Waveform ready');
log('Created', events.length, 'regions');
```

---

## Performance Monitoring

### Measure Render Time
```typescript
// Add to WaveformTimeline.tsx:
useEffect(() => {
  const start = performance.now();
  // ... region creation code ...
  const end = performance.now();
  console.log(`[Perf] Region creation took ${end - start}ms`);
}, [events, isReady]);
```

### Measure Bundle Load Time
```typescript
// Add to StudioView.tsx:
const start = performance.now();
import('./components/WaveformTimeline').then(() => {
  console.log(`[Perf] WaveformTimeline loaded in ${performance.now() - start}ms`);
});
```

---

**Last Updated**: 2025-11-26
**For**: Timeline Presentation XBlock - WaveSurfer Integration
