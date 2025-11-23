# React Problem XBlock Template

This template provides a **production-ready foundation** for building **gradable problem XBlocks** with React for OpenEdX. It extends the react-xblock-template with complete grading and assessment integration.

## 🎯 What This Template Solves

This template includes everything from react-xblock-template PLUS:

✅ **All react-xblock-template patterns** - jQuery unwrapping, CSS loading, IntlProvider, etc.
✅ **ScorableXBlockMixin integration** - Proper grading interface implementation
✅ **Grade publishing** - `runtime.publish()` pattern for OpenEdX grading cascade
✅ **Attempt tracking** - Configurable attempt limits with client/server validation
✅ **Problem metadata** - `has_score`, `icon_class`, and proper field scopes
✅ **Submission workflow** - Complete validate → grade → store → publish → feedback flow
✅ **Feedback modes** - Configurable immediate or on-submit feedback
✅ **Security patterns** - Input validation, sanitization, server-side checking
✅ **Multi-part examples** - Commented code for complex problem types
✅ **Partial credit examples** - Commented code for nuanced grading strategies

## 📚 Architecture Overview

### Grading Workflow

When a student submits an answer, this template implements the complete OpenEdX grading workflow:

```
Student submits → Validate input → Grade answer → Store state →
runtime.publish("grade") → OpenEdX signal chain → Database update →
Progress page update → Return feedback
```

For detailed architectural information, see [GRADING_ARCHITECTURE.md](./GRADING_ARCHITECTURE.md).

### Key Grading Components

**Python (Backend)**:
- `ScorableXBlockMixin` - Provides `calculate_score()` and `get_score()` methods
- `has_score = True` - Marks XBlock as gradable (appears in Progress)
- `icon_class = "problem"` - Displays problem icon in LMS
- `runtime.publish(self, "grade", {...})` - Triggers OpenEdX grading cascade
- Field scopes: `Scope.settings`, `Scope.content`, `Scope.user_state`

**TypeScript (Frontend)**:
- `SubmissionResult` interface - Standardized feedback format
- `xblockPost()` helper - CSRF-protected submission
- Attempt tracking UI - Visual feedback on remaining attempts
- Conditional feedback - Based on `feedbackMode` configuration

## 🚀 Quick Start

### 1. Copy the Template

```bash
cd brainjam-openedx-xblocks
cp -r react-problem-xblock-template my-problem-xblock
cd my-problem-xblock
```

### 2. Find and Replace Placeholders

Same as react-xblock-template, replace these throughout all files:

| Placeholder | Example | Where Used |
|-------------|---------|------------|
| `SORT_INTO_BINS` | `QUIZ_TIMER` | Python constants, JS function names |
| `sort_into_bins` | `quiz_timer` | Python module names, file names |
| `SortIntoBins` | `QuizTimer` | Python class names, React components |
| `{xblock-name}` | `quiz-timer` | Package names, URLs, display names |

### 3. Rename Directories

```bash
mv sort_into_bins quiz_timer  # Use your actual XBlock name
```

### 4. Install Dependencies

```bash
cd frontend
npm install
```

### 5. Customize Problem Logic

Edit `sort_into_bins/sort_into_bins.py`:

```python
def _check_answer(self, student_answer, correct_answer):
    """
    IMPLEMENTATION: Your grading logic here

    This example does simple string comparison.
    Customize for your problem type:
    - Numeric problems: parse and compare numbers
    - Multiple choice: check against option list
    - Code problems: run test cases
    """
    return student_answer.strip().lower() == correct_answer.strip().lower()
```

### 6. Build Frontend

```bash
npm run build
```

### 7. Deploy to Tutor

```bash
./deploy-dev.sh
```

### 8. Enable in OpenEdX

1. Open Studio: http://apps.local.openedx.io:2001
2. Settings → Advanced Settings → Add `'quiz_timer'` to **Advanced Module List**
3. In a unit, click **Advanced** → Your XBlock name
4. **Important**: XBlock must be in a graded subsection to appear in Progress page

## 📁 Template Structure

```
react-problem-xblock-template/
├── README.md                      # This file
├── GRADING_ARCHITECTURE.md        # Detailed grading documentation
├── setup.py                       # Python package setup
├── sort_into_bins/                 # Python package (RENAME THIS)
│   ├── __init__.py
│   ├── sort_into_bins.py          # ✅ ScorableXBlockMixin included
│   │                             # ✅ runtime.publish() pattern
│   │                             # ✅ Complete submission workflow
│   ├── static/                   # Bootstrap loaders (DON'T CHANGE)
│   │   ├── student.js
│   │   └── studio.js
│   └── public/                   # Build output (auto-generated)
│       ├── student-ui.js
│       ├── student-ui.css
│       ├── studio-ui.js
│       └── studio-ui.css
├── frontend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── src/
│       ├── common/
│       │   ├── api.ts            # CSRF-protected fetch helper
│       │   └── types.ts          # ✅ Problem-specific types
│       │                         # ✅ SubmissionResult interface
│       ├── student-ui/
│       │   ├── index.tsx
│       │   ├── StudentView.tsx   # ✅ Problem submission UI
│       │   │                     # ✅ Attempt tracking
│       │   │                     # ✅ Feedback display
│       │   └── styles/
│       │       └── minimal-paragon.scss
│       └── studio-ui/
│           ├── index.tsx
│           ├── StudioView.tsx    # ✅ Problem configuration UI
│           │                     # ✅ Grading settings
│           └── styles/
│               └── minimal-paragon.scss
├── deploy-dev.sh
└── .gitignore
```

## 🏗️ What's Architectural vs Implementation

### ✅ ARCHITECTURAL (DON'T CHANGE - Required for Grading)

These patterns are **required** for gradable XBlocks to work in OpenEdX:

#### 1. ScorableXBlockMixin and Properties

```python
from xblock.core import XBlock
from xblock.scorable import ScorableXBlockMixin

class MyProblem(ScorableXBlockMixin, XBlock):
    # REQUIRED: Marks XBlock as gradable
    has_score = True

    # REQUIRED: Display as problem (not "other")
    icon_class = "problem"
```

**Why**: Without `ScorableXBlockMixin`, grading methods won't exist. Without `has_score = True`, XBlock won't appear in Progress page.

#### 2. Field Scopes

```python
# ARCHITECTURAL: Choose correct scope for each field
weight = Float(default=1.0, scope=Scope.settings)        # Course author config
question_text = String(scope=Scope.content)              # Problem definition
student_answer = String(scope=Scope.user_state)          # Per-student data
```

**Why**: Wrong scopes cause data to be shared incorrectly (e.g., all students seeing same answer).

#### 3. Grading Methods

```python
def calculate_score(self):
    """ARCHITECTURAL: Required by ScorableXBlockMixin"""
    # IMPLEMENTATION: Your scoring logic
    earned = self._check_answer(...)  # Your logic here
    return Score(raw_earned=earned, raw_possible=self.weight)

def get_score(self):
    """ARCHITECTURAL: Required by ScorableXBlockMixin"""
    return self.calculate_score()
```

**Why**: OpenEdX calls these methods to determine grades for Progress page.

#### 4. Grade Publishing

```python
@XBlock.json_handler
def submit_answer(self, data, suffix=''):
    # ... grading logic ...

    # ARCHITECTURAL: CRITICAL - This triggers OpenEdX grading cascade
    self.runtime.publish(self, "grade", {
        "value": earned_score,      # Points earned
        "max_value": self.weight    # Points possible
    })

    # ARCHITECTURAL: CRITICAL - This updates LMS UI
    self.runtime.publish(self, 'completion', {
        'completion': 1.0 if self.student_answer else 0.0
    })
```

**Why**: Without `runtime.publish("grade")`, grades won't appear in Progress page or gradebook. This triggers the signal chain that updates courseware_studentmodule table.

#### 5. Security Pattern

```python
# ARCHITECTURAL: Always validate and sanitize
def submit_answer(self, data, suffix=''):
    # 1. Validate input exists
    if not answer:
        return {'success': False, 'error': 'Answer required'}

    # 2. Check attempts server-side (don't trust client)
    if self.max_attempts > 0 and self.attempts_count >= self.max_attempts:
        return {'success': False, 'error': 'Maximum attempts exceeded'}

    # 3. Sanitize HTML input
    from bleach import clean
    clean_answer = clean(answer, tags=[], strip=True)

    # 4. Grade and store
    # 5. Publish grade event
```

**Why**: Client-side validation can be bypassed. Always validate on server.

#### 6. All react-xblock-template Patterns

This template inherits all architectural requirements from react-xblock-template:
- CSS loading with `frag.add_css_url()`
- jQuery unwrapping in bootstrap loaders
- IntlProvider wrapper for Form/Alert components
- Save notification pattern (`runtime.notify('save')`)
- See [react-xblock-template README](../react-xblock-template/README.md)

### ✏️ IMPLEMENTATION (CUSTOMIZE FOR YOUR PROBLEM)

These are unique to each problem type:

#### 1. Answer Checking Logic

```python
def _check_answer(self, student_answer, correct_answer):
    """
    IMPLEMENTATION: Customize for your problem type

    Examples:
    - Text: case-insensitive comparison
    - Numeric: tolerance-based comparison
    - Multiple choice: exact match against options
    - Code: run test cases
    """
    # Simple example - customize this!
    return student_answer.strip().lower() == correct_answer.strip().lower()
```

#### 2. Scoring Strategy

```python
# IMPLEMENTATION: Choose your grading approach

# Option 1: All-or-nothing (default in template)
earned = self.weight if is_correct else 0.0

# Option 2: Partial credit (example in comments)
# percentage_correct = calculate_percentage(student_answer, correct_answer)
# earned = self.weight * percentage_correct

# Option 3: Multi-part weighted (example in comments)
# earned = sum(part.points for part in parts if part.is_correct)
```

#### 3. Feedback Messages

```python
def _get_feedback(self, is_correct, student_answer):
    """IMPLEMENTATION: Customize feedback for your problem"""
    if is_correct:
        return "Excellent work! That's the correct answer."
    else:
        # Provide helpful hints based on the answer
        if student_answer.lower() == "common_mistake":
            return "Close! Remember to consider..."
        return "Not quite. Try again."
```

#### 4. React UI Components

Customize `StudentView.tsx` and `StudioView.tsx` for your problem type:
- Input types (text, numeric, multiple choice, etc.)
- Question display formatting
- Feedback presentation
- Studio configuration options

## 🎨 Problem Type Examples

### Example 1: Numeric Problem with Tolerance

```python
def _check_answer(self, student_answer, correct_answer):
    """Numeric comparison with tolerance"""
    try:
        student_num = float(student_answer)
        correct_num = float(correct_answer)
        tolerance = 0.01  # 1% tolerance
        return abs(student_num - correct_num) / correct_num <= tolerance
    except (ValueError, ZeroDivisionError):
        return False
```

### Example 2: Multiple Choice

```python
# In your XBlock class:
choices = List(
    default=["Option A", "Option B", "Option C"],
    scope=Scope.content
)
correct_choice_index = Integer(default=0, scope=Scope.content)

def _check_answer(self, student_answer, correct_answer):
    """Multiple choice - check index"""
    try:
        return int(student_answer) == self.correct_choice_index
    except ValueError:
        return False
```

### Example 3: Multi-Part Problem

See commented examples in `sort_into_bins.py` and `types.ts` for complete multi-part implementation patterns.

## 🔧 Configuration Options

### Grading Settings (Configured in Studio)

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `weight` | Float | 1.0 | Maximum points available |
| `max_attempts` | Integer | 3 | Max submissions (0 = unlimited) |
| `show_feedback_mode` | String | "on_submit" | When to show feedback |

### Feedback Modes

**"on_submit" (Default)**:
- Show feedback after each submission
- Most common pattern
- Clear separation between attempt and feedback

**"immediate"**:
- Show feedback as student types
- Use carefully - can be distracting
- Good for practice/tutorial problems

## 🧪 Testing Your Problem

### 1. Test Grading Workflow

```python
# In tests/test_sort_into_bins.py
def test_correct_answer_grades_properly(self):
    xblock = create_xblock()
    result = xblock.submit_answer({'answer': 'correct'}, '')

    assert result['success'] == True
    assert result['correct'] == True
    assert result['score'] == xblock.weight

    # Verify calculate_score() returns correct value
    score = xblock.calculate_score()
    assert score.raw_earned == xblock.weight
```

### 2. Test Attempt Limits

```python
def test_max_attempts_enforced(self):
    xblock = create_xblock()
    xblock.max_attempts = 2

    # First attempt
    xblock.submit_answer({'answer': 'wrong'}, '')
    assert xblock.attempts_count == 1

    # Second attempt
    xblock.submit_answer({'answer': 'wrong'}, '')
    assert xblock.attempts_count == 2

    # Third attempt should fail
    result = xblock.submit_answer({'answer': 'correct'}, '')
    assert result['success'] == False
    assert 'maximum attempts' in result['error'].lower()
```

### 3. Test in OpenEdX

1. **Create in graded subsection**: Problem must be in graded subsection to appear in Progress
2. **Check Progress page**: Verify problem appears with correct weight
3. **Submit wrong answer**: Verify grade stays 0
4. **Submit correct answer**: Verify grade updates to full weight
5. **Check attempt counter**: Verify attempts decrease correctly

## 🔒 Security Best Practices

The template includes security patterns, but you must maintain them:

### ✅ Included in Template

- CSRF protection via `xblockPost()` helper
- Server-side attempt limit checking
- Input validation (non-empty, type checking)
- TypeScript strict mode

### ⚠️ You Must Add (if applicable)

**HTML Sanitization** (if accepting rich text):
```python
from bleach import clean

# In submit_answer handler:
clean_answer = clean(answer, tags=[], strip=True)
```

**SQL Injection** (if using custom queries):
- Use XBlock field storage (automatically protected)
- If using raw SQL, use parameterized queries

**Answer Exposure** (studio_view):
```python
# DON'T send correct_answer to student_view!
def student_view(self, context=None):
    data = {
        'questionText': self.question_text,
        # NEVER include: 'correctAnswer': self.correct_answer,
    }
```

## 📊 How Grading Integrates with OpenEdX

### Signal Chain

When you call `runtime.publish(self, "grade", {...})`:

```
1. SCORE_PUBLISHED signal fires
   ↓
2. PROBLEM_WEIGHTED_SCORE_CHANGED signal fires
   ↓
3. recalculate_subsection_grade_v3 (Celery task)
   ↓
4. courseware_studentmodule table updated (grade, max_grade columns)
   ↓
5. SUBSECTION_SCORE_CHANGED signal fires
   ↓
6. Course grade recalculated
   ↓
7. Progress page shows updated grade
```

### Database Storage

Grades are stored in two places:

1. **XBlock user_state fields** (your `current_score`):
   - Fast access for displaying to student
   - Scoped to individual XBlock instance

2. **courseware_studentmodule table**:
   - Updated by OpenEdX after `runtime.publish()`
   - Used for Progress page and gradebook
   - Columns: `grade` (earned), `max_grade` (possible)

## 🐛 Troubleshooting

### Problem Not Appearing in Progress Page

**Symptom**: XBlock works but doesn't show in Progress

**Causes**:
1. `has_score = True` missing
2. XBlock not in a graded subsection
3. `weight = 0` (invisible in Progress)

**Fix**:
```python
# Verify in sort_into_bins.py:
class MyProblem(ScorableXBlockMixin, XBlock):
    has_score = True  # ← Required
    weight = Float(default=1.0)  # ← Must be > 0
```

Then move XBlock to a graded subsection in Studio.

### Grade Not Updating After Submission

**Symptom**: Student sees feedback but Progress page doesn't update

**Cause**: Missing or incorrect `runtime.publish()` call

**Fix**:
```python
# In submit_answer handler:
self.runtime.publish(self, "grade", {
    "value": earned_score,      # Points earned
    "max_value": self.weight    # Points possible (not max_attempts!)
})
```

**Verify**: Check browser console and server logs for errors.

### Attempt Limit Not Working

**Symptom**: Students can submit more than max_attempts

**Cause**: Only checking client-side, or checking wrong field

**Fix** (already in template):
```python
# Server-side check REQUIRED:
if self.max_attempts > 0 and self.attempts_count >= self.max_attempts:
    return {
        'success': False,
        'error': 'Maximum attempts exceeded',
        # ...
    }
```

### Icon Shows as "Other" Instead of "Problem"

**Cause**: Missing `icon_class` property

**Fix**:
```python
class MyProblem(ScorableXBlockMixin, XBlock):
    icon_class = "problem"  # ← Required for problem icon
```

### All react-xblock-template Issues

See [react-xblock-template README](../react-xblock-template/README.md#troubleshooting) for:
- CSS not loading
- `process is not defined` error
- React Error #200
- Save notification errors

## 📖 Further Reading

- **[GRADING_ARCHITECTURE.md](./GRADING_ARCHITECTURE.md)** - Detailed grading documentation
- **[Comprehensive Grading Report](../../../docs/XBLOCK_GRADING_COMPREHENSIVE_REPORT.md)** - Complete OpenEdX grading architecture
- [React XBlock Template README](../react-xblock-template/README.md)
- [Modern React XBlock Development Guide](../../../docs/MODERN_REACT_XBLOCK_GUIDE.md)
- [Paragon Documentation](https://paragon-openedx.netlify.app/)
- [XBlock API Reference](https://edx.readthedocs.io/projects/xblock/en/latest/)

## ✅ Checklist After Using Template

- [ ] Replaced all placeholders (`SORT_INTO_BINS`, `sort_into_bins`, etc.)
- [ ] Renamed `sort_into_bins` directory
- [ ] Renamed `sort_into_bins.py` file
- [ ] Customized `_check_answer()` for problem type
- [ ] Customized feedback messages in `_get_feedback()`
- [ ] Updated `deploy-dev.sh` with correct paths
- [ ] Ran `npm install` in `frontend/`
- [ ] Ran `npm run build` successfully
- [ ] Tested deployment with `./deploy-dev.sh`
- [ ] Added to Advanced Module List in Studio
- [ ] **Placed XBlock in a GRADED subsection**
- [ ] Verified XBlock appears in Progress page
- [ ] Tested submission workflow (wrong answer → right answer)
- [ ] Verified grade updates in Progress page
- [ ] Tested attempt limits work correctly
- [ ] Added input sanitization if accepting HTML

## 🤝 Contributing

When improving this template:

1. Test with a fresh copy
2. Ensure all placeholders work with find-replace
3. Don't break architectural patterns (especially `runtime.publish()`)
4. Document any new grading patterns
5. Update this README and GRADING_ARCHITECTURE.md

---

**Template Version**: 1.0.0
**Last Updated**: October 18, 2025
**Based on**: react-xblock-template + OpenEdX grading research
**Grading Research**: See [docs/XBLOCK_GRADING_COMPREHENSIVE_REPORT.md](../../../docs/XBLOCK_GRADING_COMPREHENSIVE_REPORT.md)
