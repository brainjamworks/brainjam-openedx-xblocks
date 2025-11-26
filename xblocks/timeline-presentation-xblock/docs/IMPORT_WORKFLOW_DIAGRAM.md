# Timeline Event Import Workflow

## Visual Workflow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER CLICKS "IMPORT JSON"                     │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                     IMPORT MODAL OPENS                           │
│                                                                  │
│  ┌────────────┐                    ┌────────────┐              │
│  │ File Upload│                    │ Paste JSON │              │
│  └─────┬──────┘                    └─────┬──────┘              │
│        │                                  │                      │
│        └──────────────┬───────────────────┘                      │
└───────────────────────┼──────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                  PARSE & VALIDATE JSON                           │
│                                                                  │
│  ┌──────────────────────────────────────────────────────┐      │
│  │ parseStorylineJSON(jsonText)                         │      │
│  │  • Check for "events" array                          │      │
│  │  • Validate each event has required fields           │      │
│  │  • Return { data, error }                            │      │
│  └──────────────────────────────────────────────────────┘      │
└───────────────┬──────────────────────┬───────────────────────────┘
                │                      │
                │                      │
         ┌──────▼──────┐      ┌────────▼─────────┐
         │   ERROR?    │      │   SUCCESS?       │
         │             │      │                  │
         │  Display    │      │  Continue to     │
         │  error msg  │      │  conversion      │
         └─────────────┘      └────────┬─────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────┐
│              CONVERT STORYLINE EVENTS TO TIMELINE EVENTS         │
│                                                                  │
│  For each event:                                                │
│  ┌──────────────────────────────────────────────────────┐      │
│  │ convertStorylineEvent(storylineEvent, index)         │      │
│  │                                                      │      │
│  │  1. Skip if audio_play event                        │      │
│  │  2. Map animation type:                             │      │
│  │     • "appear" → "fade"                              │      │
│  │     • "entrance" → "slide" + direction "right"       │      │
│  │  3. Infer element type:                             │      │
│  │     • "appear"/"fade" → "text"                       │      │
│  │     • others → "shape"                               │      │
│  │  4. Generate grid position:                         │      │
│  │     • column = index % 4                            │      │
│  │     • row = floor(index / 4)                        │      │
│  │     • x = 20 + (column × 20)                        │      │
│  │     • y = 20 + (row × 15)                           │      │
│  │  5. Create element with defaults:                   │      │
│  │     • content: "Element N"                          │      │
│  │     • color: text=#000, shape=#4A90E2              │      │
│  │     • fontSize: 16                                  │      │
│  │                                                      │      │
│  │  Return: TimelineEvent object                       │      │
│  └──────────────────────────────────────────────────────┘      │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      CREATE IMPORT PREVIEW                       │
│                                                                  │
│  ┌──────────────────────────────────────────────────────┐      │
│  │ ImportPreview {                                      │      │
│  │   totalEvents: number of converted events            │      │
│  │   sampleEvents: first 5 events                       │      │
│  │   warnings: [                                        │      │
│  │     "Skipped N audio events"                         │      │
│  │   ]                                                  │      │
│  │ }                                                    │      │
│  └──────────────────────────────────────────────────────┘      │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                       DISPLAY PREVIEW                            │
│                                                                  │
│  ┌────────────────────────────────────────────────────┐        │
│  │ ✓ SUCCESS                                          │        │
│  │                                                    │        │
│  │ Ready to import: 27 events                        │        │
│  │                                                    │        │
│  │ ⚠ Warning: Skipped 1 audio event(s)               │        │
│  │                                                    │        │
│  │ Sample Events (first 5):                          │        │
│  │  #1  0:00 - text (fade) "Element 1"               │        │
│  │  #2  0:00 - text (fade) "Element 2"               │        │
│  │  #3  0:00 - shape (slide) "Element 3"             │        │
│  │  #4  7:15 - shape (slide) "Element 4"             │        │
│  │  #5  7:30 - shape (slide) "Element 5"             │        │
│  │  ... and 22 more events                           │        │
│  │                                                    │        │
│  │ ⚠ Warning: Importing will replace all 0 existing  │        │
│  │           event(s).                               │        │
│  │                                                    │        │
│  │  [Cancel]  [Replace All Events (27 events)]       │        │
│  └────────────────────────────────────────────────────┘        │
└───────────────┬──────────────────────┬───────────────────────────┘
                │                      │
         ┌──────▼──────┐      ┌────────▼─────────┐
         │   CANCEL    │      │  CONFIRM IMPORT  │
         │             │      │                  │
         │  Close      │      │  Replace events  │
         │  modal      │      │  and close modal │
         └─────────────┘      └────────┬─────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                    EVENTS UPDATED IN XBLOCK                      │
│                                                                  │
│  ┌────────────────────────────────────────────────────┐        │
│  │ Timeline Events (27)                               │        │
│  │                                                    │        │
│  │  #1  0:00 - text • fade • 750ms                   │        │
│  │      "Element 1"                                   │        │
│  │  #2  0:00 - text • fade • 750ms                   │        │
│  │      "Element 2"                                   │        │
│  │  #3  0:00 - shape • slide (right) • 750ms         │        │
│  │      "Element 3"                                   │        │
│  │  ...                                               │        │
│  │                                                    │        │
│  │  [Import JSON]  [Export JSON]  [Add Event]        │        │
│  └────────────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow: Storyline → Timeline Event

### Example Transformation

```
INPUT (Storyline Event):
┌──────────────────────────────┐
│ {                            │
│   "time": 7.25,              │
│   "duration": 750,           │
│   "animation": "entrance",   │
│   "element": "6CtHZ4o4awA"   │
│ }                            │
└──────────────────────────────┘
         │
         │ convertStorylineEvent(event, 6)
         ▼
┌──────────────────────────────────────┐
│ Map animation:                       │
│   "entrance" → "slide" ✓             │
│   + direction: "right" ✓             │
├──────────────────────────────────────┤
│ Infer element type:                  │
│   "entrance" → "shape" ✓             │
├──────────────────────────────────────┤
│ Generate position:                   │
│   index=6, column=2, row=1           │
│   x = 20 + (2 × 20) = 60% ✓         │
│   y = 20 + (1 × 15) = 35% ✓         │
├──────────────────────────────────────┤
│ Create defaults:                     │
│   content: "Element 7" ✓             │
│   color: "#4A90E2" (blue) ✓         │
│   fontSize: 16 ✓                     │
└──────────────────────────────────────┘
         │
         ▼
OUTPUT (Timeline Event):
┌──────────────────────────────────────┐
│ {                                    │
│   "id": "imported-6CtHZ4o4awA-6",   │
│   "timestamp": 7.25,                │
│   "animationDuration": 750,         │
│   "animation": "slide",             │
│   "animationDirection": "right",    │
│   "elementType": "shape",           │
│   "position": {                     │
│     "x": 60,                        │
│     "y": 35                         │
│   },                                │
│   "content": "Element 7",           │
│   "color": "#4A90E2",               │
│   "fontSize": 16                    │
│ }                                   │
└──────────────────────────────────────┘
```

---

## Position Grid Layout

### 4-Column Grid System

```
     Column 0  Column 1  Column 2  Column 3
     (20%)     (40%)     (60%)     (80%)
      │         │         │         │
Row 0 ├─────────┼─────────┼─────────┤  (20%)
(20%) │ Event 0 │ Event 1 │ Event 2 │ Event 3
      │         │         │         │
Row 1 ├─────────┼─────────┼─────────┤  (35%)
(35%) │ Event 4 │ Event 5 │ Event 6 │ Event 7
      │         │         │         │
Row 2 ├─────────┼─────────┼─────────┤  (50%)
(50%) │ Event 8 │ Event 9 │ Event10 │ Event11
      │         │         │         │
Row 3 ├─────────┼─────────┼─────────┤  (65%)
(65%) │ Event12 │ Event13 │ Event14 │ Event15
      │         │         │         │
```

**Calculation:**
- `column = event_index % 4`
- `row = floor(event_index / 4)`
- `x = 20 + (column × 20)`
- `y = 20 + (row × 15)`

---

## Export Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                   USER CLICKS "EXPORT JSON"                      │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    CREATE EXPORT DATA                            │
│                                                                  │
│  ┌──────────────────────────────────────────────────────┐      │
│  │ {                                                    │      │
│  │   "title": "Timeline Events Export",                │      │
│  │   "totalDuration": 30.25,                           │      │
│  │   "exportedAt": "2025-11-26T12:00:00.000Z",         │      │
│  │   "events": [... all 27 TimelineEvent objects ...]  │      │
│  │ }                                                    │      │
│  └──────────────────────────────────────────────────────┘      │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                  STRINGIFY JSON (PRETTY)                         │
│                                                                  │
│  JSON.stringify(exportData, null, 2)                            │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    CREATE BLOB & DOWNLOAD                        │
│                                                                  │
│  1. Create Blob (type: application/json)                        │
│  2. Create object URL                                           │
│  3. Create download link                                        │
│  4. Trigger download: timeline-events-{timestamp}.json          │
│  5. Cleanup object URL                                          │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     FILE DOWNLOADED                              │
│                                                                  │
│  ✓ timeline-events-1732631234567.json                           │
│    Size: ~4KB                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Error Handling Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                     JSON VALIDATION                              │
└───────────────┬──────────────────────┬───────────────────────────┘
                │                      │
                │                      │
    ┌───────────▼──────────┐  ┌────────▼─────────────┐
    │ Structure Check      │  │ Field Check          │
    │                      │  │                      │
    │ • Has "events" key?  │  │ • Has "time" field?  │
    │ • Is array?          │  │ • Is number?         │
    │ • Not empty?         │  │ • Has animation?     │
    └───────────┬──────────┘  └────────┬─────────────┘
                │                      │
                │                      │
        ┌───────▼──────┐       ┌───────▼──────┐
        │   PASS ✓     │       │   FAIL ✗     │
        └───────┬──────┘       └───────┬──────┘
                │                      │
                │                      │
                │              ┌───────▼──────────────────────────┐
                │              │ Display Error:                   │
                │              │ • "Invalid JSON structure..."    │
                │              │ • "Event N: missing field..."    │
                │              │ • "JSON parse error: ..."        │
                │              └──────────────────────────────────┘
                │
                ▼
    Continue to Conversion
```

---

## Round-Trip Compatibility

```
┌────────────┐     Import      ┌────────────┐     Export     ┌────────────┐
│ Storyline  │  ──────────────> │  Timeline  │  ────────────> │   Export   │
│   JSON     │                  │   Events   │                │    JSON    │
│  (28 evt)  │                  │  (27 evt)  │                │  (27 evt)  │
└────────────┘                  └────────────┘                └────────────┘
                                       │                             │
                                       │        Re-import            │
                                       │ <───────────────────────────┘
                                       │
                                       ▼
                              ┌────────────┐
                              │  Timeline  │
                              │   Events   │
                              │  (27 evt)  │
                              │            │
                              │  ✓ Match!  │
                              └────────────┘
```

**Result:** Full round-trip compatibility - no data loss!

---

## State Machine

```
                    ┌──────────────┐
                    │   IDLE       │
                    │ (No modal)   │
                    └───────┬──────┘
                            │
                            │ Click "Import JSON"
                            ▼
                    ┌──────────────┐
                    │   MODAL      │
                    │   OPEN       │
                    └───────┬──────┘
                            │
              ┌─────────────┼─────────────┐
              │                           │
      Choose File               Choose Paste
              │                           │
              ▼                           ▼
        ┌──────────┐              ┌──────────┐
        │  FILE    │              │  PASTE   │
        │ SELECTED │              │  MODE    │
        └─────┬────┘              └─────┬────┘
              │                         │
              │ Auto-parse       Click "Parse JSON"
              │                         │
              └────────┬────────────────┘
                       │
                       ▼
              ┌─────────────┐
              │  PARSING    │
              └───────┬─────┘
                      │
         ┌────────────┼────────────┐
         │                         │
    Error? ✗                  Success? ✓
         │                         │
         ▼                         ▼
   ┌──────────┐            ┌──────────┐
   │  ERROR   │            │ PREVIEW  │
   │  STATE   │            │  STATE   │
   └──────────┘            └─────┬────┘
                                 │
                    ┌────────────┼────────────┐
                    │                         │
              Click Cancel              Click Confirm
                    │                         │
                    ▼                         ▼
              ┌──────────┐            ┌──────────┐
              │  CANCEL  │            │ IMPORT   │
              │  (Close) │            │ COMPLETE │
              └──────────┘            └─────┬────┘
                                            │
                                            ▼
                                      ┌──────────┐
                                      │  IDLE    │
                                      │ (Closed) │
                                      └──────────┘
```

---

**Last Updated:** 2025-11-26
**Version:** 1.0.0
