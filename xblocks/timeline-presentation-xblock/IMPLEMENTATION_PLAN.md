# Timeline XBlock - Complete Implementation Roadmap

## Phase 1: Complete & Test Current Implementation (This Week)

### Task 1.1: Verify Current Fixes Work (30 min)
**What:** Thoroughly test the audio duration fixes
**Steps:**
1. Upload test audio file in Studio
2. Verify console shows: `[Timeline] Audio duration loaded: X.Xs`
3. Verify Timeline Events tab is accessible
4. Save XBlock and close editor
5. Reopen editor - verify duration loads automatically
6. Check Timeline Events tab - should work immediately

**Success Criteria:**
- ✅ No "Loading audio duration..." message
- ✅ Timeline tab accessible after upload
- ✅ Duration persists after save/reopen

---

### Task 1.2: Generate Lutein's Method Audio (1 hour)
**What:** Create audio narration using ElevenLabs
**Input:** `/Users/brainjam/brainjam-openedx-xblocks/xblocks/timeline-presentation-xblock/assets/lutein-transcript.txt`

**Steps:**
1. Sign into ElevenLabs
2. Select voice (professional, clear)
3. Paste transcript text
4. Generate audio (MP3 format)
5. Download as `lutein-audio.mp3`
6. Note actual duration (should be ~30 seconds)

**Success Criteria:**
- ✅ Clear, professional audio
- ✅ Duration matches timeline events (~30s)
- ✅ MP3 format compatible with HTML5 audio

---

### Task 1.3: Upload Assets to XBlock (15 min)
**What:** Upload Lutein diagram and audio to Timeline XBlock

**Steps:**
1. Open Studio → Timeline Presentation XBlock
2. Assets tab → Upload `lutein-diagram.png`
3. Assets tab → Upload `lutein-audio.mp3`
4. Verify both show in preview
5. Note audio duration displayed

**Files:**
- Image: `/Users/brainjam/brainjam-openedx-xblocks/xblocks/timeline-presentation-xblock/assets/lutein-diagram.png`
- Audio: Generated in Task 1.2

---

### Task 1.4: Load Timeline Events Data (30 min)
**What:** Import the 28 timeline events from extracted Storyline data
**Input:** `/Users/brainjam/brainjam-openedx-xblocks/xblocks/timeline-presentation-xblock/assets/lutein-timeline.json`

**Steps:**
1. Read the JSON file to understand event structure
2. For now: Manually add 2-3 test events in Timeline Events tab
3. Configure event properties:
   - Timestamp (when it appears)
   - Animation type (fade, slide, etc.)
   - Element (text, arrow, line)
   - Position on canvas
4. Test event creation/editing UI
5. Save and verify events persist

**Note:** Full 28-event import will need a "Import JSON" feature (Task 2.3)

---

### Task 1.5: Test Student View Playback (30 min)
**What:** Verify timeline presentation plays correctly for students

**Steps:**
1. Save XBlock in Studio
2. View in LMS student view
3. Click Play button
4. Verify:
   - Audio plays
   - Elements appear at correct times
   - Animations look smooth
   - Timeline syncs with audio
5. Test pause/resume
6. Test replay functionality

**Success Criteria:**
- ✅ Audio and visuals sync perfectly
- ✅ All controls work (play/pause/replay)
- ✅ Animations are smooth (60fps)
- ✅ No console errors

---

## Phase 2: Enhanced Timeline Editor (Week 2-3)

### Task 2.1: Integrate WaveSurfer Waveform (Week 2 - Day 1-2, 8 hours)

**Why:** Visual waveform is dramatically better UX than basic timeline track

#### 2.1.1: Install Dependencies (15 min)
```bash
cd frontend
npm install @wavesurfer/react wavesurfer.js
npm install --save-dev @types/wavesurfer.js
```

#### 2.1.2: Create WaveSurfer Timeline Component (2 hours)
**File:** `frontend/src/studio-ui/components/WaveformTimeline.tsx`

**Features:**
- Waveform visualization of audio
- Regions plugin for timeline events
- Click to add event marker
- Drag to adjust event timing
- Color-coded event types

**Implementation:**
```typescript
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions';

// Render waveform
// Add region for each timeline event
// Handle region drag → update event timestamp
// Handle region click → open event editor
```

#### 2.1.3: Replace TimelineTrack with WaveSurfer (1 hour)
**File:** `frontend/src/studio-ui/StudioView.tsx`

**Changes:**
- Import `WaveformTimeline` instead of `TimelineTrack`
- Pass audio URL, events, duration
- Handle event updates from waveform

#### 2.1.4: Style Integration (1 hour)
**File:** `frontend/src/studio-ui/styles/minimal-paragon.scss`

**Add:**
- Waveform container styling
- Region marker colors (by animation type)
- Hover states
- Timeline ruler

#### 2.1.5: Test & Debug (3 hours)
- Test waveform renders correctly
- Test region creation/editing
- Test sync with audio playback
- Fix any timing issues
- Optimize performance

**Success Criteria:**
- ✅ Beautiful waveform visualization
- ✅ Can see all events on timeline
- ✅ Can drag events to adjust timing
- ✅ Waveform syncs during playback
- ✅ Performance is smooth

---

### Task 2.2: Visual Event Editor (Week 2 - Day 3-4, 8 hours)

**What:** Click-based interface for adding/editing timeline events

#### 2.2.1: Event Properties Panel (3 hours)
**File:** `frontend/src/studio-ui/components/EventPropertiesPanel.tsx`

**Features:**
- Event type selector (fade, slide, scale, draw)
- Element type selector (text, arrow, line, shape)
- Position inputs (x, y as percentage)
- Duration slider
- Animation direction (for slides)
- Color picker (for lines/arrows)
- Preview thumbnail

**UI Pattern:**
- Opens when event is selected
- Shows on right side of timeline
- Live preview of changes
- Save/Cancel buttons

#### 2.2.2: Click-to-Add Event (2 hours)
**Enhancement to WaveformTimeline.tsx**

**Features:**
- Click on waveform → Create new event at that time
- Modal opens with event properties
- Default values pre-filled
- Save adds to timeline

#### 2.2.3: Event List View (2 hours)
**File:** `frontend/src/studio-ui/components/EventListView.tsx`

**Features:**
- Table showing all events
- Columns: Time, Type, Element, Duration
- Click row → Edit in properties panel
- Delete button per row
- Drag to reorder (optional)

#### 2.2.4: Integration & Testing (1 hour)
- Wire up all components
- Test event creation flow
- Test event editing flow
- Test deletion

**Success Criteria:**
- ✅ Can add event by clicking waveform
- ✅ Properties panel shows all options
- ✅ Changes update immediately
- ✅ Event list stays in sync

---

### Task 2.3: JSON Import/Export (Week 2 - Day 5, 4 hours)

**What:** Import the full 28-event Lutein timeline from JSON

#### 2.3.1: Import Button & Handler (2 hours)
**File:** `frontend/src/studio-ui/components/TimelineEventEditor.tsx`

**Features:**
- "Import JSON" button
- File upload or paste JSON
- Validate JSON structure
- Map Storyline format → Our format
- Preview imported events
- Confirm to replace existing events

**Mapping Logic:**
```typescript
// Convert Storyline timeline format to our TimelineEvent format
// Handle coordinates (Storyline uses pixels, we use percentages)
// Map animation types
// Validate all required fields
```

#### 2.3.2: Export Button (1 hour)
**Feature:**
- "Export JSON" button
- Download timeline_events as JSON file
- Useful for backup and sharing

#### 2.3.3: Import Lutein Data (1 hour)
**Steps:**
1. Click "Import JSON"
2. Upload `lutein-timeline.json`
3. Review 28 events in preview
4. Confirm import
5. Verify all events appear on waveform
6. Test playback with all events

**Success Criteria:**
- ✅ All 28 Lutein events imported
- ✅ Events positioned correctly
- ✅ Animations map correctly
- ✅ Playback looks professional

---

## Phase 3: Canvas Drawing Tools (Week 3 - Optional)

### Task 3.1: Drawing Mode UI (Week 3 - Day 1-2, 6 hours)

**What:** Click to draw lines/arrows directly on canvas

#### 3.1.1: Drawing Toolbar (2 hours)
**File:** `frontend/src/studio-ui/components/DrawingToolbar.tsx`

**Tools:**
- Line tool
- Arrow tool
- Rectangle tool
- Circle tool
- Text tool
- Color picker
- Stroke width slider

#### 3.1.2: Canvas Interaction (3 hours)
**File:** `frontend/src/studio-ui/components/InteractiveCanvas.tsx`

**Features:**
- Click and drag to draw line
- Preview while drawing
- Finish → Create timeline event with SVG path
- Auto-calculate animation timing
- Position saved as percentages

#### 3.1.3: SVG Path Generation (1 hour)
**Logic:**
- Convert mouse coordinates to SVG path
- Store as path data string
- Calculate bounding box
- Generate percentage-based coordinates

**Success Criteria:**
- ✅ Can draw lines on canvas
- ✅ Drawing creates timeline event automatically
- ✅ SVG paths render correctly in playback

---

### Task 3.2: Transcript Support (Week 3 - Day 3, 4 hours)

**What:** Highlight transcript text during playback

#### 3.2.1: Transcript Editor (2 hours)
**File:** `frontend/src/studio-ui/components/TranscriptEditor.tsx`

**Features:**
- Paste transcript text
- Auto-segment by sentences
- Assign timestamps to segments
- Manual adjustment of timing
- Preview sync with audio

#### 3.2.2: Transcript Display in Student View (2 hours)
**File:** `frontend/src/student-ui/components/TranscriptDisplay.tsx`

**Features:**
- Show transcript below player
- Highlight current segment
- Auto-scroll to current position
- Click segment → Jump to that time

**Success Criteria:**
- ✅ Transcript syncs with audio
- ✅ Current phrase highlighted
- ✅ Accessible (screen reader compatible)

---

### Task 3.3: Mobile Optimization (Week 3 - Day 4-5, 6 hours)

**What:** Ensure timeline works great on tablets/phones

#### 3.3.1: Responsive Canvas (2 hours)
**Changes:**
- Canvas scales to viewport width
- Elements scale proportionally
- Touch-friendly controls
- Larger tap targets

#### 3.3.2: Mobile Timeline Editor (2 hours)
**Simplified UI for mobile:**
- Vertical timeline on small screens
- Accordion panels for properties
- Simplified event editor
- Swipe gestures

#### 3.3.3: Performance Testing (2 hours)
**Devices to test:**
- iPad
- iPhone
- Android tablet
- Android phone

**Optimize:**
- Animation frame rate
- Asset loading
- Memory usage

**Success Criteria:**
- ✅ Smooth playback on mobile
- ✅ Timeline editor usable on tablet
- ✅ Touch controls work perfectly

---

## Phase 4: Polish & Production Ready (Week 4)

### Task 4.1: Accessibility Audit (2 days, 8 hours)

#### 4.1.1: Keyboard Navigation (3 hours)
- Tab through all controls
- Space/Enter to activate
- Arrow keys for timeline scrubbing
- Escape to close modals
- Focus indicators visible

#### 4.1.2: Screen Reader Support (3 hours)
- ARIA labels on all controls
- ARIA live regions for status updates
- Descriptive button text
- Announce timeline events
- Test with NVDA/JAWS

#### 4.1.3: WCAG 2.1 AA Compliance (2 hours)
- Color contrast ratios
- Text size minimum 14px
- Alt text for images
- Captions for audio (transcript)
- Error messages clear

**Success Criteria:**
- ✅ Passes axe DevTools audit
- ✅ Keyboard-only navigation works
- ✅ Screen reader announces all interactions

---

### Task 4.2: Error Handling & Edge Cases (2 days, 8 hours)

#### 4.2.1: Graceful Degradation (3 hours)
**Handle:**
- Audio file fails to load → Show helpful error
- Image file fails to load → Show placeholder
- Network timeout → Retry with exponential backoff
- Large files → Show upload progress
- Browser doesn't support audio → Fallback message

#### 4.2.2: Validation & Constraints (3 hours)
**Add validation:**
- Event timestamp can't exceed audio duration
- Element positions must be 0-100%
- Duration must be positive
- Required fields must be filled
- Warn before deleting events

#### 4.2.3: Loading States (2 hours)
**Add spinners/skeletons for:**
- Audio loading
- Image loading
- Duration calculation
- Save operations
- Event import

**Success Criteria:**
- ✅ No unhandled errors in console
- ✅ User always knows what's happening
- ✅ Helpful error messages

---

### Task 4.3: Documentation (1 day, 4 hours)

#### 4.3.1: Authoring Guide (2 hours)
**Create:** `AUTHORING_GUIDE.md`

**Content:**
- How to upload assets
- How to create timeline events
- Animation type guide with examples
- Best practices for timing
- Tips for smooth animations
- Troubleshooting common issues

#### 4.3.2: Developer Documentation (2 hours)
**Create:** `DEVELOPER_GUIDE.md`

**Content:**
- Data model explanation
- Component architecture
- Adding new animation types
- Extending element types
- Build and deploy process
- Testing strategy

**Success Criteria:**
- ✅ Course authors can use XBlock without help
- ✅ Developers can extend functionality

---

### Task 4.4: Performance Optimization (1 day, 4 hours)

#### 4.4.1: Bundle Size Optimization (2 hours)
- Code splitting (studio vs student bundles)
- Tree shaking unused Paragon components
- Lazy load WaveSurfer only in studio
- Minimize CSS
- Optimize images

#### 4.4.2: Runtime Performance (2 hours)
- Memoize expensive calculations
- Debounce timeline scrubbing
- Optimize animation rendering
- Reduce re-renders
- Profile with React DevTools

**Target Metrics:**
- Studio bundle < 700KB gzipped
- Student bundle < 350KB gzipped
- 60fps animations
- < 500ms load time

---

## Task 4.5: Final Testing & Launch (2 days)

### Day 1: Comprehensive Testing (8 hours)
1. **Unit Tests** - Test data transformations
2. **Integration Tests** - Test XBlock handlers
3. **E2E Tests** - Test full authoring workflow
4. **Cross-browser** - Test Chrome, Firefox, Safari, Edge
5. **Performance** - Test with large timeline (50+ events)
6. **Accessibility** - Final WCAG audit
7. **Mobile** - Test on real devices

### Day 2: Deploy to Production (4 hours)
1. Create production build
2. Deploy to production OpenEdX instance
3. Create demo course with Lutein's Method
4. Train course authors on usage
5. Monitor for errors
6. Collect feedback

---

## Summary Timeline

| Phase | Duration | Effort | Deliverable |
|-------|----------|--------|-------------|
| Phase 1: Complete Current | 3-4 hours | 1 day | Working Lutein presentation |
| Phase 2: Enhanced Editor | 20 hours | 1 week | Professional timeline authoring |
| Phase 3: Advanced Features | 16 hours | 1 week | Drawing tools, transcript, mobile |
| Phase 4: Polish & Launch | 24 hours | 1 week | Production-ready XBlock |
| **Total** | **60-64 hours** | **~4 weeks** | **Complete solution** |

---

## Immediate Next Actions (This Session)

1. ✅ Verify audio duration fix works
2. Generate Lutein audio with ElevenLabs (1 hour)
3. Upload assets to XBlock (15 min)
4. Test playback with 2-3 events (30 min)
5. Decide: Continue with Phase 2 enhancements or polish current version?

---

## Key Files & Locations

### Assets
- Diagram: `/Users/brainjam/brainjam-openedx-xblocks/xblocks/timeline-presentation-xblock/assets/lutein-diagram.png`
- Transcript: `/Users/brainjam/brainjam-openedx-xblocks/xblocks/timeline-presentation-xblock/assets/lutein-transcript.txt`
- Timeline JSON: `/Users/brainjam/brainjam-openedx-xblocks/xblocks/timeline-presentation-xblock/assets/lutein-timeline.json`

### Code
- XBlock Root: `/Users/brainjam/brainjam-openedx-xblocks/xblocks/timeline-presentation-xblock/`
- Frontend: `frontend/src/`
- Python: `timeline_presentation/timeline_presentation.py`
- Deploy Script: `./deploy-dev.sh`

### Build Commands
```bash
# Build frontend
cd frontend && npm run build

# Deploy to containers
./deploy-dev.sh

# Check logs
docker logs -f tutor_dev-lms-1 | grep timeline_presentation
```

---

## Status

- ✅ Phase 1 Critical Fixes: COMPLETE (audio duration loads correctly)
- ⏳ Phase 1 Testing: IN PROGRESS (need to generate audio and test end-to-end)
- 🔜 Phase 2: NOT STARTED (WaveSurfer integration)
- 🔜 Phase 3: NOT STARTED (Drawing tools, transcript)
- 🔜 Phase 4: NOT STARTED (Polish, accessibility, launch)
