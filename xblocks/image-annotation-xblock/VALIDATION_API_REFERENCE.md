# Image Annotation XBlock - Validation API Reference

## Quick Reference for Frontend Integration

---

## Handler Endpoints

### 1. `submit_placement` (Immediate Feedback)

**Purpose**: Validate a single label placement and get immediate feedback

**Endpoint**: `POST /handler/submit_placement`

**Request Body**:
```json
{
  "labelId": "label_A",
  "position": {
    "x": 150.5,
    "y": 200.75
  },
  "zoneId": "zone_1"  // Optional: null if not snapped
}
```

**Response**:
```json
{
  "success": true,
  "correct": true,
  "message": "Correct placement!",
  "score": 0.5,
  "maxScore": 1.0,
  "percentage": 50.0,
  "attemptsRemaining": 2,
  "validationResult": {
    "correct": true,
    "zone_id": "zone_1",
    "expected_zone": "zone_1",
    "distance": 5.2,
    "message": "Correct placement!"
  }
}
```

**Error Response**:
```json
{
  "success": false,
  "error": "Missing labelId or position"
}
```

---

### 2. `submit_all_placements` (Batch Submission)

**Purpose**: Submit all placements at once for comprehensive feedback

**Endpoint**: `POST /handler/submit_all_placements`

**Request Body**:
```json
{
  "placements": {
    "label_A": {
      "position": {"x": 150.5, "y": 200.75},
      "zoneId": "zone_1"
    },
    "label_B": {
      "position": {"x": 300.0, "y": 150.0},
      "zoneId": null
    },
    "label_C": {
      "position": {"x": 450.5, "y": 100.0},
      "zoneId": "zone_3"
    }
  }
}
```

**Response**:
```json
{
  "success": true,
  "results": {
    "label_A": {
      "correct": true,
      "position": {"x": 150.5, "y": 200.75},
      "zone_id": "zone_1",
      "expected_zone": "zone_1",
      "distance": 5.2,
      "message": "Correct placement!"
    },
    "label_B": {
      "correct": false,
      "position": {"x": 300.0, "y": 150.0},
      "zone_id": null,
      "expected_zone": "zone_2",
      "distance": 85.3,
      "message": "Too far from correct zone. Expected zone: zone_2."
    },
    "label_C": {
      "correct": true,
      "position": {"x": 450.5, "y": 100.0},
      "zone_id": "zone_3",
      "expected_zone": "zone_3",
      "distance": 3.1,
      "message": "Correct placement!"
    }
  },
  "score": 0.67,
  "maxScore": 1.0,
  "percentage": 66.67,
  "allCorrect": false,
  "feedbackMessage": "You correctly placed 2 out of 3 labels. Keep trying!",
  "explanation": "",
  "attemptsRemaining": 2,
  "validationResults": {
    "label_A": {...},
    "label_B": {...},
    "label_C": {...}
  }
}
```

**Error Responses**:
```json
{
  "success": false,
  "error": "Invalid placements format"
}
```

```json
{
  "success": false,
  "error": "Maximum attempts (3) exceeded"
}
```

---

### 3. `get_correct_placements` (Show Answer)

**Purpose**: Get correct positions for all labels

**Endpoint**: `POST /handler/get_correct_placements`

**Request Body**:
```json
{}
```

**Response**:
```json
{
  "success": true,
  "correctPlacements": {
    "label_A": {
      "zone_id": "zone_1",
      "position": {
        "x": 150,
        "y": 200
      }
    },
    "label_B": {
      "zone_id": "zone_2",
      "position": {
        "x": 300,
        "y": 150
      }
    },
    "label_C": {
      "zone_id": "zone_3",
      "position": {
        "x": 450,
        "y": 100
      }
    }
  }
}
```

---

## Validation Result Object

### Structure
```typescript
interface ValidationResult {
  correct: boolean;        // Is the placement correct?
  zone_id: string | null;  // Zone the label is in (null if not snapped)
  expected_zone: string;   // Correct zone for this label
  distance: number;        // Distance to correct zone center (pixels)
  message: string;         // Human-readable feedback
}
```

### Message Examples

**Correct Placement**:
```
"Correct placement!"
```

**Incorrect Zone**:
```
"Incorrect zone. This label belongs in zone_2."
```

**Not Snapped**:
```
"Close to correct position, but not snapped to zone."
```

**Too Far**:
```
"Too far from correct zone. Expected zone: zone_1."
```

**Configuration Error**:
```
"Configuration error: Invalid zones or labels data"
"Label label_X not found in configuration"
"Expected zone zone_Y not found"
```

---

## Feedback Messages

### Overall Feedback (from `feedbackMessage`)

**100% Correct**:
```
"Excellent work! All labels are correctly placed."
```

**0% Correct**:
```
"All labels are incorrectly placed. Review the image carefully and try again."
```

**80%+ Correct**:
```
"Good job! You correctly placed 4 out of 5 labels. Review the incorrect ones."
```

**50-79% Correct**:
```
"You correctly placed 3 out of 5 labels. Keep trying!"
```

**< 50% Correct**:
```
"You correctly placed 1 out of 5 labels. Review the material and try again."
```

---

## Grading Modes

### 1. All or Nothing (`all_or_nothing`)
- Must get ALL labels correct for any points
- Score = weight if all correct, 0 otherwise
- Example: 4/5 correct = 0 points

### 2. Partial Credit (`partial_credit`)
- Proportional credit based on correct placements
- Score = (correct_count / total_count) * weight
- Example: 3/5 correct = 0.6 * weight

### 3. Positioning Only (`positioning_only`)
- Currently same as partial_credit
- Future: Could use distance-based scoring
- Example: 3/5 correct = 0.6 * weight

---

## Snap Behavior

### When Snap is Enabled (`snap_enabled: true`)

**Frontend**:
1. Detects when label is within `snap_radius` of zone
2. Snaps label to zone center
3. Sends `zoneId` in request

**Backend**:
1. Validates placement using provided `zoneId`
2. Checks if `zoneId` matches `expected_zone`
3. Returns validation result

### When Snap is Disabled (`snap_enabled: false`)

**Frontend**:
1. Label can be placed anywhere
2. No automatic snapping
3. Sends `zoneId: null`

**Backend**:
1. Checks if position is within `snap_radius` of correct zone
2. Returns correct=true only if within radius
3. Distance-based validation

---

## Distance Calculation

### Formula
```
distance = sqrt((x2 - x1)^2 + (y2 - y1)^2)
```

### Units
- Pixels (based on original image dimensions)
- Calculated from label position to zone center

### Snap Radius
- Default: 25 pixels
- Configurable in Studio
- Used for snap detection and validation

---

## Error Handling

### Client-Side Validation (Frontend)
- Ensure `labelId` is not empty
- Ensure `position` has `x` and `y` properties
- Ensure `position.x` and `position.y` are numbers
- Handle network errors gracefully

### Server-Side Validation (Backend)
- Validates all input data
- Checks attempt limits
- Handles JSON parsing errors
- Returns detailed error messages

### Common Errors

**Missing Required Fields**:
```json
{
  "success": false,
  "error": "Missing labelId or position"
}
```

**Invalid Data Format**:
```json
{
  "success": false,
  "error": "Invalid placements format"
}
```

**Attempt Limit Exceeded**:
```json
{
  "success": false,
  "error": "Maximum attempts (3) exceeded"
}
```

---

## Usage Examples

### React/TypeScript Frontend

```typescript
// Submit single placement (immediate feedback)
const submitPlacement = async (
  labelId: string,
  position: {x: number, y: number},
  zoneId: string | null
) => {
  const response = await fetch('/handler/submit_placement', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({labelId, position, zoneId})
  });

  const result = await response.json();

  if (result.success) {
    console.log('Correct:', result.correct);
    console.log('Message:', result.message);
    console.log('Score:', result.score);
    console.log('Distance:', result.validationResult.distance);
  }
};

// Submit all placements (batch)
const submitAllPlacements = async (placements: Record<string, any>) => {
  const response = await fetch('/handler/submit_all_placements', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({placements})
  });

  const result = await response.json();

  if (result.success) {
    console.log('All correct:', result.allCorrect);
    console.log('Feedback:', result.feedbackMessage);
    console.log('Explanation:', result.explanation);

    // Check each label
    Object.entries(result.results).forEach(([labelId, data]) => {
      console.log(`${labelId}: ${data.correct ? 'Correct' : 'Incorrect'}`);
      console.log(`  Message: ${data.message}`);
      console.log(`  Distance: ${data.distance}px`);
    });
  }
};

// Get correct answers
const showAnswer = async () => {
  const response = await fetch('/handler/get_correct_placements', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({})
  });

  const result = await response.json();

  if (result.success) {
    Object.entries(result.correctPlacements).forEach(([labelId, data]) => {
      console.log(`${labelId} belongs in ${data.zone_id}`);
      console.log(`  Position: (${data.position.x}, ${data.position.y})`);
    });
  }
};
```

---

## Testing Checklist

### Unit Tests
- [ ] Distance calculation with various coordinates
- [ ] Zone finding within/outside radius
- [ ] Placement validation (correct, incorrect, unsnapped)
- [ ] All three grading modes
- [ ] Edge cases (empty data, invalid JSON, etc.)

### Integration Tests
- [ ] Submit single placement (immediate feedback)
- [ ] Submit all placements (batch)
- [ ] Get correct placements (show answer)
- [ ] Attempt limit enforcement
- [ ] Grade event publishing

### Manual Tests
- [ ] Drag label to correct zone
- [ ] Drag label to incorrect zone
- [ ] Place label without snapping
- [ ] Submit with all correct
- [ ] Submit with some incorrect
- [ ] Exceed attempt limit
- [ ] View correct answers
- [ ] Test all grading modes

---

## Performance Notes

### Response Times
- Single placement: < 50ms (typical)
- Batch submission: < 100ms (typical)
- Depends on number of labels and zones

### Scalability
- Efficient for typical use cases (< 20 labels)
- Linear time complexity O(n) for most operations
- Zone finding is O(n*m) but acceptable for small sets

### Caching
- JSON parsing happens per request (not cached)
- Consider caching parsed labels/zones if performance issues

---

## Security Considerations

### Server-Side Validation
✅ All validation happens server-side
✅ Never trust client-provided correctness
✅ Client can only send position and zone_id
✅ Server determines actual correctness

### Input Sanitization
✅ Validates all input data types
✅ Checks for missing fields
✅ Handles malformed JSON gracefully

### Attempt Limits
✅ Enforced server-side
✅ Cannot be bypassed by client
✅ Tracked in user_state scope

---

## Migration Guide

### From Old API (without zoneId)

**Old Request**:
```json
{
  "labelId": "label_A",
  "position": {"x": 150, "y": 200}
}
```

**New Request**:
```json
{
  "labelId": "label_A",
  "position": {"x": 150, "y": 200},
  "zoneId": "zone_1"  // Add this
}
```

**Backward Compatibility**:
- Old requests (without `zoneId`) still work
- Backend treats missing `zoneId` as `null`
- Validation logic handles both cases

### Frontend Changes Needed
1. Track which zone label is snapped to
2. Include `zoneId` in submission payload
3. Handle new `validationResult` in response
4. Display `message` field for feedback

---

## Support

For questions or issues:
1. Check this API reference
2. Review implementation in `image_annotation.py`
3. See comprehensive summary in `VALIDATION_IMPLEMENTATION_SUMMARY.md`
4. Test in XBlock Workbench for debugging
