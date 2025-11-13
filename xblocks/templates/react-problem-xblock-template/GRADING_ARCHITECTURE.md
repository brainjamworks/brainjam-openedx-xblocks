# XBlock Grading Architecture

This document provides quick reference for implementing gradable XBlocks in OpenEdX.

For comprehensive details on OpenEdX grading architecture, see:
**[docs/XBLOCK_GRADING_COMPREHENSIVE_REPORT.md](../../../docs/XBLOCK_GRADING_COMPREHENSIVE_REPORT.md)**

## Quick Reference

### Minimum Requirements for Gradable XBlocks

```python
from xblock.core import XBlock
from xblock.scorable import ScorableXBlockMixin
from xblock.fields import Float, Integer, String, Scope

class MyProblem(ScorableXBlockMixin, XBlock):
    """
    REQUIRED for grading:
    1. Inherit from ScorableXBlockMixin
    2. Set has_score = True
    3. Set icon_class = "problem"
    4. Implement calculate_score() and get_score()
    5. Call runtime.publish(self, "grade", {...})
    """

    # REQUIRED: Marks as gradable
    has_score = True
    icon_class = "problem"

    # REQUIRED: Grading fields
    weight = Float(default=1.0, scope=Scope.settings)

    # REQUIRED: Implement scoring methods
    def calculate_score(self):
        # Your logic here
        return Score(raw_earned=earned, raw_possible=self.weight)

    def get_score(self):
        return self.calculate_score()

    # REQUIRED: Publish grade events
    @XBlock.json_handler
    def submit_answer(self, data, suffix=''):
        # Grade the answer
        # ...

        # CRITICAL: Publish grade event
        self.runtime.publish(self, "grade", {
            "value": earned_score,
            "max_value": self.weight
        })

        # CRITICAL: Publish completion event
        self.runtime.publish(self, "completion", {
            "completion": 1.0
        })
```

## Grading Workflow

### Complete Submission Flow

```
1. Student submits answer (frontend → backend)
   ↓
2. Validate input (server-side)
   ↓
3. Check attempt limits (server-side)
   ↓
4. Grade answer
   ↓
5. Store state in XBlock fields
   ↓
6. Publish grade event: runtime.publish(self, "grade", {...})
   ↓
7. OpenEdX signal chain executes:
   - SCORE_PUBLISHED
   - PROBLEM_WEIGHTED_SCORE_CHANGED
   - recalculate_subsection_grade_v3 (Celery)
   - SUBSECTION_SCORE_CHANGED
   - Course grade recalculated
   ↓
8. Database updated (courseware_studentmodule)
   ↓
9. Progress page displays grade
   ↓
10. Return feedback to student
```

### Key Events

| Event | When | Purpose |
|-------|------|---------|
| `runtime.publish("grade", {...})` | After grading | Triggers OpenEdX grading cascade |
| `runtime.publish("completion", {...})` | After first attempt | Updates progress tracking |
| `SCORE_PUBLISHED` | Auto after publish | Internal OpenEdX signal |
| `recalculate_subsection_grade_v3` | Async (Celery) | Updates subsection grade |

## Field Scopes

**Critical**: Use correct scope for each field type.

| Scope | Purpose | Examples | Shared Across |
|-------|---------|----------|---------------|
| `Scope.settings` | Course author config | `weight`, `max_attempts` | All students in course |
| `Scope.content` | Problem definition | `question_text`, `correct_answer` | All students (read-only) |
| `Scope.user_state` | Per-student data | `student_answer`, `attempts_count` | Individual student only |

**Common mistake**: Using `Scope.content` for student answers → all students see same answer!

## Critical Patterns

### 1. runtime.publish() Pattern

```python
# ALWAYS after grading:
self.runtime.publish(self, "grade", {
    "value": earned_score,      # Points earned
    "max_value": self.weight    # Points possible (NOT max_attempts!)
})

# Common mistakes:
# ❌ self.runtime.publish(self, "grade", earned_score)
# ❌ "max_value": self.max_attempts  # Wrong field!
# ❌ Forgetting to call entirely
```

### 2. Server-Side Validation

```python
# ALWAYS validate server-side:
def submit_answer(self, data, suffix=''):
    # 1. Validate input
    answer = data.get('answer', '').strip()
    if not answer:
        return {'success': False, 'error': 'Answer required'}

    # 2. Check attempts (server-side, not just client)
    if self.max_attempts > 0 and self.attempts_count >= self.max_attempts:
        return {'success': False, 'error': 'Maximum attempts exceeded'}

    # 3. Sanitize input (if HTML)
    from bleach import clean
    clean_answer = clean(answer, tags=[], strip=True)

    # 4. Grade, store, publish
```

### 3. Score Object

```python
from xblock.scorable import Score

def calculate_score(self):
    # REQUIRED return type: Score object
    return Score(
        raw_earned=earned_points,    # Points student earned
        raw_possible=self.weight     # Maximum points available
    )

    # Common mistakes:
    # ❌ return earned_points  # Wrong type
    # ❌ return (earned, possible)  # Wrong type
```

## Database Schema

### Where Grades Are Stored

1. **XBlock user_state fields** (your fields):
   - `student_answer` (Scope.user_state)
   - `current_score` (Scope.user_state)
   - Fast access for display
   - Specific to XBlock instance

2. **courseware_studentmodule table**:
   - Updated by OpenEdX after `runtime.publish()`
   - Columns: `grade`, `max_grade`, `state`, `module_state_key`
   - Used by Progress page and gradebook
   - Performance cache for grade calculations

**Important**: Both storage locations exist. XBlock fields are source of truth, courseware_studentmodule is cache.

## Common Issues

### Issue 1: Problem Not in Progress Page

**Symptoms**:
- XBlock works fine
- Students can submit
- But doesn't appear in Progress

**Causes**:
1. `has_score = True` missing
2. Not in a graded subsection
3. `weight = 0`

**Fix**:
```python
class MyProblem(ScorableXBlockMixin, XBlock):
    has_score = True  # ← Add this
    weight = Float(default=1.0)  # ← Must be > 0
```
And ensure XBlock is in a **graded** subsection in Studio.

### Issue 2: Grade Not Updating

**Symptoms**:
- Student sees feedback
- But Progress page shows 0

**Cause**: Missing or incorrect `runtime.publish()` call

**Fix**:
```python
# In submit_answer handler, after grading:
self.runtime.publish(self, "grade", {
    "value": earned_score,
    "max_value": self.weight  # ← Use weight, not max_attempts!
})
```

**Debug**:
- Check browser console for errors
- Check server logs: `docker logs tutor_dev-lms-1 | grep grade`
- Verify `runtime.publish()` is being called

### Issue 3: Icon Shows as "Other"

**Cause**: Missing `icon_class` property

**Fix**:
```python
class MyProblem(ScorableXBlockMixin, XBlock):
    icon_class = "problem"  # ← Add this
```

### Issue 4: Attempt Limit Bypassed

**Symptoms**:
- Students can submit more than max_attempts

**Cause**: Only checking client-side

**Fix** (server-side check required):
```python
def submit_answer(self, data, suffix=''):
    # Server-side check - client can't bypass
    if self.max_attempts > 0 and self.attempts_count >= self.max_attempts:
        return {
            'success': False,
            'error': 'Maximum attempts exceeded',
            'attemptsRemaining': 0
        }
```

## Testing Checklist

### Unit Tests

- [ ] `calculate_score()` returns correct Score object
- [ ] `get_score()` calls `calculate_score()`
- [ ] Correct answer earns full points
- [ ] Incorrect answer earns 0 points (or partial credit)
- [ ] Attempt limit enforced server-side
- [ ] Input validation works
- [ ] Sanitization prevents XSS

### Integration Tests

- [ ] `runtime.publish("grade")` called with correct params
- [ ] `runtime.publish("completion")` called
- [ ] State persists across page reloads
- [ ] Multiple students have separate state

### Manual Testing in OpenEdX

- [ ] XBlock appears in graded subsection
- [ ] XBlock appears in Progress page
- [ ] Icon shows as "problem" (not "other")
- [ ] Submit wrong answer → grade stays 0
- [ ] Submit correct answer → grade updates in Progress
- [ ] Attempt counter decreases correctly
- [ ] Max attempts enforced
- [ ] Feedback displays correctly
- [ ] Page refresh preserves state

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ Student View (React)                                         │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Form Input → Submit Button → xblockPost()               │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────┬───────────────────────────────────────┘
                      │ AJAX POST
                      ▼
┌─────────────────────────────────────────────────────────────┐
│ XBlock Handler (Python)                                      │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ submit_answer(data):                                     │ │
│ │   1. Validate input                                      │ │
│ │   2. Check attempts                                      │ │
│ │   3. Grade answer                                        │ │
│ │   4. Store state (user_state fields)                     │ │
│ │   5. runtime.publish("grade", {...}) ◄── CRITICAL        │ │
│ │   6. Return feedback                                     │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────┬───────────────────────────────────────┘
                      │ publish() triggers
                      ▼
┌─────────────────────────────────────────────────────────────┐
│ OpenEdX Grading System                                       │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Signal Chain:                                            │ │
│ │   SCORE_PUBLISHED                                        │ │
│ │     → PROBLEM_WEIGHTED_SCORE_CHANGED                     │ │
│ │     → recalculate_subsection_grade_v3 (Celery)           │ │
│ │     → Update courseware_studentmodule table              │ │
│ │     → SUBSECTION_SCORE_CHANGED                           │ │
│ │     → Recalculate course grade                           │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│ Progress Page Updates                                        │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Student sees updated grade                               │ │
│ │ Subsection score recalculated                            │ │
│ │ Course grade updated                                     │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## API Endpoints

### XBlock Handler URLs

```python
# Automatically available via @XBlock.json_handler:
POST /handler/{xblock_id}/submit_answer
POST /handler/{xblock_id}/save_data

# Frontend usage:
const result = await xblockPost(runtime, 'submit_answer', {
    answer: studentAnswer
});
```

### Grading Endpoints (Internal)

These are called automatically by OpenEdX after `runtime.publish()`:

- `lms.djangoapps.grades.signals.handlers.submissions_score_set_handler`
- `lms.djangoapps.grades.tasks.recalculate_subsection_grade_v3`
- `openedx.core.djangoapps.signals.signals.COURSE_GRADE_CHANGED`

**You don't call these directly** - they're triggered by the signal chain.

## Security Checklist

- [ ] All input validated server-side
- [ ] Attempt limits checked server-side
- [ ] HTML sanitized (if accepting rich text)
- [ ] CSRF protection (use xblockPost helper)
- [ ] Correct answer NEVER sent to student_view
- [ ] User input properly escaped in feedback
- [ ] No SQL injection (use XBlock fields)

## Performance Considerations

### Async Grading

If grading is slow (e.g., code execution, API calls):

```python
# Consider async grading:
from celery import task

@task
def grade_submission_async(xblock_id, answer):
    # Heavy grading logic
    # Call runtime.publish() when done
```

### Caching

OpenEdX caches grades in `courseware_studentmodule` for performance.

**Don't**:
- Query database directly for grades
- Bypass `runtime.publish()`

**Do**:
- Use `calculate_score()` for current grade
- Let OpenEdX handle caching

## Further Reading

### Primary Documentation

- **[Comprehensive Grading Report](../../../docs/XBLOCK_GRADING_COMPREHENSIVE_REPORT.md)** - Full OpenEdX grading architecture
- [XBlock Scorable API](https://github.com/openedx/XBlock/blob/master/xblock/scorable.py) - Source code
- [OpenEdX Grading System](https://github.com/openedx/edx-platform/tree/master/lms/djangoapps/grades) - LMS implementation

### Related Documentation

- [React Problem XBlock Template README](./README.md) - Template usage guide
- [Modern React XBlock Guide](../../../docs/MODERN_REACT_XBLOCK_GUIDE.md) - React patterns
- [XBlock Development Guide](../../../docs/XBLOCK_DEVELOPMENT_GUIDE.md) - General XBlock development

## Template Implementation

This template (`react-problem-xblock-template`) implements all architectural requirements:

✅ ScorableXBlockMixin inheritance
✅ has_score = True and icon_class = "problem"
✅ Correct field scopes (settings/content/user_state)
✅ calculate_score() and get_score() methods
✅ runtime.publish("grade") in submit_answer handler
✅ Server-side validation and attempt checking
✅ Security patterns (CSRF, sanitization, validation)
✅ Complete submission workflow
✅ TypeScript types for type safety
✅ Paragon UI components for consistency

**To use**: Copy template, replace placeholders, customize grading logic.

See [README.md](./README.md) for detailed usage instructions.

---

**Document Version**: 1.0.0
**Last Updated**: October 18, 2025
**Based on**: OpenEdX grading research and real-world implementations
