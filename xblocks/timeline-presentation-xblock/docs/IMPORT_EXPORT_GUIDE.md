# Timeline Event Import/Export Guide

## Quick Start

### Importing Timeline Events

1. **Open Timeline XBlock in Studio**
2. **Click "Import JSON" button** (top-right of Timeline Events section)
3. **Choose import method:**
   - **File Upload:** Click "Upload JSON File" → Select your .json file
   - **Paste JSON:** Click "Paste JSON" → Paste content → Click "Parse JSON"
4. **Review preview:**
   - Total events to import
   - First 5 events preview
   - Any warnings (e.g., skipped audio events)
5. **Click "Replace All Events"** to confirm

### Exporting Timeline Events

1. **Click "Export JSON" button** (only visible when events exist)
2. **File automatically downloads** as `timeline-events-{timestamp}.json`
3. **Use exported file** for backup or sharing

---

## Supported Formats

### Storyline Timeline JSON

The XBlock supports importing timeline events exported from Articulate Storyline:

```json
{
  "title": "Timeline Title",
  "totalDuration": 30.25,
  "events": [
    {
      "time": 7.25,
      "duration": 750,
      "animation": "entrance",
      "element": "6CtHZ4o4awA"
    },
    {
      "time": 10.0,
      "duration": 500,
      "animation": "appear",
      "element": "textElement1"
    }
  ]
}
```

### XBlock Export Format

When you export, the XBlock uses this format:

```json
{
  "title": "Timeline Events Export",
  "totalDuration": 30.25,
  "exportedAt": "2025-11-26T12:00:00.000Z",
  "events": [
    {
      "id": "event-1",
      "timestamp": 7.25,
      "animationDuration": 750,
      "animation": "slide",
      "animationDirection": "right",
      "elementType": "shape",
      "position": { "x": 40, "y": 35 },
      "content": "Element 1",
      "color": "#4A90E2",
      "fontSize": 16
    }
  ]
}
```

---

## Field Mapping Reference

| Storyline Field | XBlock Field | Notes |
|----------------|--------------|-------|
| `time` | `timestamp` | Direct copy (seconds) |
| `duration` | `animationDuration` | Direct copy (milliseconds) |
| `animation` | `animation` | Mapped (see table below) |
| `element` | `id` | Prefixed with `imported-` |
| N/A | `elementType` | Inferred from animation |
| N/A | `position` | Auto-generated (grid layout) |
| N/A | `content` | Default: `"Element N"` |

### Animation Type Mapping

| Storyline Animation | XBlock Animation | Direction | Element Type |
|--------------------|------------------|-----------|--------------|
| `appear` | `fade` | - | `text` |
| `entrance` | `slide` | `right` | `shape` |
| `fade` | `fade` | - | `text` |
| `scale` | `scale` | - | `shape` |
| `wipe` | `wipe` | - | `shape` |
| `slide` | `slide` | - | `shape` |

---

## Element Positioning

### Grid-Based Layout

Imported elements are automatically positioned on a 4-column grid:

```
Column 0: X = 20%    Row 0: Y = 20%
Column 1: X = 40%    Row 1: Y = 35%
Column 2: X = 60%    Row 2: Y = 50%
Column 3: X = 80%    Row 3: Y = 65%
```

**Example:**
- Event 0 → (20%, 20%)
- Event 1 → (40%, 20%)
- Event 4 → (20%, 35%)
- Event 7 → (80%, 35%)

### Customizing Positions

After import, you can edit any event to change its position:
1. Click **Edit** icon on the event
2. Modify **Position X** and **Position Y** fields
3. Click **Save Changes**

---

## Warnings & Limitations

### Skipped Elements

**Audio events are automatically skipped:**
```json
{
  "time": 1.0,
  "duration": 0,
  "action": "audio_play",  // ← This will be skipped
  "element": "audioElement"
}
```

You'll see a warning: `"Skipped 1 audio event(s) - not supported"`

### Element Appearance

**Original appearance is not preserved:**
- Colors default to black (text) or blue (shapes)
- Sizes default to standard values
- Shapes default to basic types

**Workaround:** Edit events after import to customize appearance.

### Destructive Import

**Import replaces all existing events** (destructive operation):
- You'll see a warning if events already exist
- Always export your current timeline before importing
- No undo available (yet)

---

## Use Cases

### Use Case 1: Migrate from Storyline

**Scenario:** You have a timeline created in Storyline

**Steps:**
1. Export timeline JSON from Storyline
2. Import JSON file into XBlock
3. Review imported events
4. Customize appearance as needed
5. Save XBlock

### Use Case 2: Backup Timeline Events

**Scenario:** You want to backup your timeline before making changes

**Steps:**
1. Click "Export JSON"
2. Save file to safe location
3. Make changes to timeline
4. If needed, re-import backup file

### Use Case 3: Clone Timeline to Another Unit

**Scenario:** You want to reuse a timeline in multiple units

**Steps:**
1. Export timeline from first unit
2. Create new Timeline XBlock in second unit
3. Import exported JSON file
4. Modify as needed for new context

### Use Case 4: Bulk Edit Events

**Scenario:** You want to edit events outside Studio

**Steps:**
1. Export timeline JSON
2. Edit JSON file in text editor
3. Make bulk changes (timestamps, colors, etc.)
4. Import modified JSON
5. Verify changes in Studio

---

## Troubleshooting

### Error: "Invalid JSON structure: missing 'events' array"

**Cause:** JSON file doesn't have required `events` field

**Fix:** Ensure your JSON has this structure:
```json
{
  "events": [
    // ... your events here
  ]
}
```

### Error: "Event X: missing or invalid 'time' field"

**Cause:** One of your events is missing the `time` field

**Fix:** Add `time` field to all events:
```json
{
  "time": 0.0,  // ← Required
  "duration": 750,
  "animation": "fade",
  "element": "..."
}
```

### Error: "JSON parse error: ..."

**Cause:** Malformed JSON (syntax error)

**Fix:**
1. Validate JSON at [jsonlint.com](https://jsonlint.com/)
2. Check for:
   - Missing commas
   - Unclosed brackets
   - Unescaped quotes
   - Trailing commas

### Warning: "Skipped N audio event(s)"

**Cause:** JSON contains audio playback events

**Fix:** This is expected behavior. Audio events are not supported in the current version. Visual events will still import correctly.

### Events appear in wrong positions

**Cause:** Grid-based positioning may not match your original layout

**Fix:**
1. Edit each event individually
2. Adjust X and Y position values
3. Save changes

---

## Best Practices

### Before Importing

1. **Always export current timeline first** (backup)
2. **Validate JSON file** before import
3. **Review event count** in preview
4. **Read all warnings** before confirming

### After Importing

1. **Check first/last events** to verify timeline range
2. **Preview timeline** in student view
3. **Customize element appearance** as needed
4. **Test with actual audio file**

### Working with Large Timelines

1. **Import in stages** if possible (e.g., by scene)
2. **Use meaningful content labels** (not just "Element N")
3. **Group related events** by timestamp range
4. **Export regularly** to avoid data loss

---

## Advanced Tips

### Batch Processing

You can process multiple Storyline exports programmatically:

```javascript
// Example: Add offset to all timestamps
const data = JSON.parse(jsonContent);
data.events = data.events.map(e => ({
  ...e,
  time: e.time + 5.0  // Add 5 second offset
}));
```

### Custom Element Types

Edit the JSON before import to set specific element types:

```json
{
  "time": 10.0,
  "duration": 500,
  "animation": "fade",
  "element": "myElement",
  "customType": "arrow"  // ← Won't be used (yet)
}
```

**Note:** Custom fields are ignored during import but preserved during export.

---

## FAQ

**Q: Can I import partial timelines?**
A: Not currently. Import replaces all events. Workaround: merge timelines manually or export→edit→import.

**Q: What happens to duplicate element IDs?**
A: Each import generates unique IDs with timestamps, preventing duplicates.

**Q: Can I import from other tools?**
A: Yes, if you format the JSON correctly with required fields (`time`, `duration`, `animation`, `element`).

**Q: How do I preserve exact positions?**
A: Add `position: {x: 50, y: 50}` to each event in the JSON before importing (custom field).

**Q: Is there an undo button?**
A: Not yet. Always export before importing to create a backup.

---

## Support

For issues or questions:
1. Check this guide first
2. Verify JSON format with examples
3. Test with sample data (lutein-timeline.json)
4. Report bugs with JSON file and error message

---

**Last Updated:** 2025-11-26
**Version:** 1.0.0
