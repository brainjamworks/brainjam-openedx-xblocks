# Problem XBlock Modal Standardization Investigation

**Date**: 2025-11-28
**Investigator**: Claude (Explore Agent)
**Purpose**: Document React problem editor design from frontend-app-authoring to standardize all problem XBlocks
**Source**: `/Users/brainjam/frontend-app-authoring/src/editors/containers/ProblemEditor/`

---

## Executive Summary

The modern OpenEdX problem editor is a React-based application using **@openedx/paragon** component library. It features:
- **Modal Size**: Paragon `ModalDialog` with `size="xl"` (not the old 95% width pattern)
- **Layout**: Three-column design with fixed 320px settings sidebar
- **Components**: Paragon Form controls, Collapsible cards, TinyMCE rich editors
- **Styling**: Paragon utility classes + custom SCSS
- **State**: Redux for state management
- **i18n**: Complete internationalization support

**Key Insight**: This is the modern standard to match, not the legacy CAPA editor.

---

## 1. LOCATION OF PROBLEM EDITOR CODE

**Root Directory:**
```
/Users/brainjam/frontend-app-authoring/src/editors/containers/ProblemEditor/
```

**Key Files Structure:**
```
ProblemEditor/
├── index.tsx                          # Main container component
├── messages.js                         # i18n messages
├── components/
│   ├── SelectTypeModal/               # Modal for selecting problem type
│   │   ├── index.tsx                  # Modal coordinator
│   │   ├── SelectTypeWrapper/         # Modal wrapper with buttons
│   │   │   └── index.tsx
│   │   └── content/
│   │       ├── ProblemTypeSelect.tsx  # Standard problem type selection
│   │       ├── AdvanceTypeSelect.tsx  # Advanced problem types
│   │       └── Preview.tsx            # Type preview component
│   └── EditProblemView/               # Main editing interface
│       ├── index.jsx                  # Layout coordinator
│       ├── index.scss                 # Layout styles
│       ├── QuestionWidget/            # Question text editor
│       ├── ExplanationWidget/         # Solution/explanation editor
│       ├── AnswerWidget/              # Answer options editor
│       │   ├── AnswersContainer.jsx   # Container for answers
│       │   ├── AnswerOption.jsx       # Individual answer row
│       │   └── components/
│       │       ├── Checker/           # Radio/checkbox for correct answer
│       │       └── Feedback/          # Feedback per answer
│       └── SettingsWidget/            # Right sidebar settings
│           ├── index.jsx              # Settings container
│           ├── SettingsOption.jsx     # Card with collapsible header
│           ├── CardSection.jsx        # Card section component
│           └── settingsComponents/    # Individual settings cards
│               ├── ScoringCard.jsx
│               ├── HintsCard.jsx
│               ├── ShowAnswerCard.jsx
│               ├── ResetCard.jsx
│               ├── TimerCard.jsx
│               ├── ToleranceCard.jsx
│               └── GroupFeedback/
└── data/
    └── mockData/problemTestData.js
```

---

## 2. MODAL STRUCTURE - HTML/REACT COMPONENTS

### 2.1 Modal Wrapper Architecture

**EditorModalWrapper** (`/src/editors/containers/EditorContainer/index.tsx`):
```tsx
export const EditorModalWrapper: React.FC<WrapperProps & { onClose: () => void }> =
  ({ children, onClose }) => {
    const intl = useIntl();
    const title = intl.formatMessage(messages.modalTitle);
    return (
      <ModalDialog isOpen size="xl" isOverflowVisible={false} onClose={onClose} title={title}>
        {children}
      </ModalDialog>
    );
  };
```

**Key Points:**
- Uses Paragon's `ModalDialog` component with `size="xl"`
- `isOverflowVisible={false}` prevents overflow
- Wrapped in i18n for internationalization

### 2.2 Modal Sections

**Header:**
```tsx
<ModalDialog.Header className="shadow-sm zindex-10">
  <div className="d-flex flex-row justify-content-between">
    <h2 className="h3 col pl-0">
      <TitleHeader isInitialized={isInitialized} />
    </h2>
    <IconButton src={Close} iconAs={Icon} onClick={handleCancel} />
  </div>
</ModalDialog.Header>
```

**Body:**
```tsx
<EditorModalBody>
  <ModalDialog.Body className="pb-0">
    {children}
  </ModalDialog.Body>
</EditorModalBody>
```

**Footer:**
```tsx
<FooterWrapper>
  <ModalDialog.Footer className="shadow-sm">
    <ActionRow>
      <Button variant="tertiary" onClick={confirmCancelIfDirty}>
        Cancel
      </Button>
      <Button onClick={onSave} disabled={disableSave}>
        Save
      </Button>
    </ActionRow>
  </ModalDialog.Footer>
</FooterWrapper>
```

---

## 3. LAYOUT PATTERNS

### 3.1 Three-Column Main Editor Layout

```
┌─────────────────────────────────────────────────────┐
│ Modal Header (Close button right aligned)           │
├────────────────────────────┬────────────────────────┤
│                            │                        │
│ Main Content Area          │  Settings Sidebar      │
│ (flex-grow-1)              │  (320px fixed)         │
│                            │                        │
│ • Question Widget          │ • Type Card            │
│ • Explanation Widget       │ • Scoring Card         │
│ • Answer Widget            │ • Hints Card           │
│   (answers container)      │ • Advanced Settings    │
│                            │                        │
├────────────────────────────┴────────────────────────┤
│ Cancel Button                      Save Button      │
└─────────────────────────────────────────────────────┘
```

**CSS for Layout:**
```scss
.editProblemView {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;

  // Main content area grows to fill space
  span:first-child {
    flex-grow: 1;
    margin-bottom: 5rem;
  }

  // Settings sidebar - fixed width
  .editProblemView-settingsColumn {
    width: 320px;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
```

### 3.2 Widget Section Pattern

Each widget follows this structure:

```jsx
<div className="mt-4 text-primary-500">
  <div className="h4">
    {/* Widget Title (e.g., "Question", "Answers", "Explanation") */}
  </div>
  <div className="small">
    {/* Helper/Description Text */}
  </div>
  {/* Widget Content Container */}
</div>
```

### 3.3 Answer Option Row Pattern

```
┌────────────────────────────────────────────────────────┐
│  [✓] ┌──────────────────────────────┐  [📝] [✗]       │
│      │ Answer text / Rich editor    │                 │
│      │ (ExpandableTextArea)         │                 │
│      │                              │                 │
│      └──────────────────────────────┘                 │
│                                                        │
│      ┌─ Feedback (Collapsible) ─────────────────────┐ │
│      │ [Selected Feedback]                          │ │
│      │ [Unselected Feedback]                        │ │
│      └──────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
```

### 3.4 Settings Card Pattern

```
┌──────────────────────────────────────────────┐
│ ▼ Setting Name                    [Summary] │  <- Trigger
├──────────────────────────────────────────────┤
│ ┌────────────────────────────────────────┐  │
│ │ Form Control 1                        │  │
│ │ Form Control 2                        │  │
│ │ Form Checkbox                         │  │
│ └────────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
```

---

## 4. DESIGN PATTERNS - TYPOGRAPHY, COLORS, SPACING

### 4.1 Typography Classes

- **`.h3`** - Modal title (20px equivalent)
- **`.h4`** - Widget titles: "Question", "Answers", "Settings"
- **`.small`** - Descriptions, hints
- **`.x-small`** - Extra small text (helper text, labels)
- **`.text-primary-500`** - Primary color text (main content)
- **`.text-gray-500`** - Gray text (secondary content)

### 4.2 Color Scheme

**Text Colors:**
- `text-primary-500` - Main text
- `text-gray-500` - Secondary text
- `text-danger-500` - Error messages
- `text-info-500` - Links

**Border Colors:**
- `border-light-400`, `border-light-700` - Borders
- `border-primary-100` - Subtle borders

**Background Colors:**
- `bg-white` - Backgrounds

### 4.3 Spacing (Bootstrap/Paragon utilities)

- `mt-3`, `mt-4` - Margin top
- `mb-3`, `mb-4`, `mb-5`, `mb-6` - Margin bottom
- `ml-4` - Margin left
- `p-4`, `py-3`, `py-4`, `px-4` - Padding
- `gap-4` - Grid gaps

---

## 5. FORM COMPONENTS - PARAGON

### 5.1 Core Paragon Components

**Modal Components:**
- `ModalDialog` - Modal container (`size="xl"`)
- `ModalDialog.Header` - Fixed header
- `ModalDialog.Body` - Scrolling content
- `ModalDialog.Footer` - Sticky footer

**Form Components:**
- `Form.Group` - Form field grouping
- `Form.Control` - Text inputs, numbers
- `Form.Label` - Field labels
- `Form.Checkbox` - Checkboxes
- `Form.Radio`, `Form.RadioSet` - Radio buttons
- `Form.Control.Feedback` - Help text below inputs

**Layout Components:**
- `Container`, `Row`, `Col` - Grid system
- `Stack` - Horizontal/vertical stacking
- `ActionRow` - Button alignment

**UI Components:**
- `Button` - Action buttons (`variant="primary"`, `variant="tertiary"`)
- `IconButton` - Icon buttons (close button)
- `Card`, `Card.Section` - Card containers
- `Collapsible.Advanced` - Expandable sections
- `Dropdown` - Dropdown menus
- `Tooltip`, `OverlayTrigger` - Tooltips

**Custom Components:**
- `SelectableBox.Set`, `SelectableBox` - Selectable cards
- `TinyMceWidget` - Rich HTML editor
- `ExpandableTextArea` - Expandable rich text

### 5.2 Form Pattern Example

**Settings Card with Form Controls:**
```jsx
<SettingsOption
  title={intl.formatMessage(messages.scoringSettingsTitle)}
  summary={getScoringSummary(weight, attempts, unlimited)}
  className="scoringCard"
>
  <Form.Group>
    <Form.Control
      type="number"
      min={0}
      step={0.1}
      value={scoring.weight}
      onChange={handleWeightChange}
      floatingLabel={intl.formatMessage(messages.scoringWeightInputLabel)}
    />
    <Form.Control.Feedback>
      <FormattedMessage {...messages.weightHint} />
    </Form.Control.Feedback>
  </Form.Group>

  <Form.Checkbox className="mt-3 decoration-control-label">
    Unlimited Attempts
  </Form.Checkbox>
</SettingsOption>
```

---

## 6. CSS CLASSES & STYLING

### 6.1 Key CSS Classes

**Paragon Prefixed Classes:**
- `.pgn__modal-body` - Modal body container
- `.pgn__form-checkbox`, `.pgn__form-radio` - Form controls
- `.pgn__form-label` - Form labels
- `.pgn__form-text` - Form helper text
- `.pgn__selectable_box` - Selectable card
- `.pgn__selectable_box-active` - Active state

**Custom Classes:**
- `.editProblemView` - Main container
- `.editProblemView-settingsColumn` - Settings sidebar (320px)
- `.settingsWidget` - Settings widget wrapper
- `.settingsOption` - Individual settings card
- `.answer-option` - Individual answer row
- `.answers-container` - Container for all answers

### 6.2 Main SCSS

**EditProblemView** (`/src/editors/containers/ProblemEditor/components/EditProblemView/index.scss`):
```scss
.editProblemView {
  .editProblemView-settingsColumn {
    width: 320px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .advancedEditorTopMargin {
    margin-top: 40px;
  }

  .answer-option {
    .pgn__form-checkbox,
    .pgn__form-radio {
      & + .pgn__form-label {
        min-width: 1.1rem;
      }
    }
  }
}
```

**SettingsWidget** (`SettingsWidget/index.scss`):
```scss
.settingsCardTitleSection {
  padding-bottom: 0;
}

.settingsWidget {
  margin-top: 40px;

  .pgn__form-text {
    font-size: small;
  }
}
```

**SelectableBox** (`SelectableBox/index.scss`):
```scss
.pgn__selectable_box {
  position: relative;
  height: 100%;
  padding: var(--pgn-spacing-selectable-box-padding);
  box-shadow: var(--pgn-elevation-box-shadow-level-1);
  border-radius: var(--pgn-spacing-selectable-box-border-radius);
  text-align: start;
  background: var(--pgn-color-white);

  &:focus-visible {
    outline: 1px solid var(--pgn-color-primary-700);
  }
}

.pgn__selectable_box-active {
  outline: 2px solid var(--pgn-color-primary-500);
}
```

---

## 7. COMPONENT HIERARCHY

### 7.1 Component Tree

```
EditorContainer (wraps entire modal)
├── ModalDialog.Header
│   └── TitleHeader
│       └── Close IconButton
├── ModalDialog.Body (EditorModalBody)
│   └── [Editor Content]
│       ├── SelectTypeModal (if no type selected)
│       │   └── SelectTypeWrapper
│       │       ├── ProblemTypeSelect (SelectableBox.Set)
│       │       └── Preview
│       └── EditProblemView (if type selected)
│           ├── QuestionWidget (TinyMceWidget)
│           ├── ExplanationWidget (TinyMceWidget)
│           ├── AnswerWidget
│           │   └── AnswersContainer
│           │       └── AnswerOption (repeated)
│           │           ├── Checker (Radio/Checkbox)
│           │           ├── ExpandableTextArea
│           │           └── Collapsible (feedback)
│           └── SettingsWidget
│               ├── TypeCard
│               ├── ScoringCard
│               ├── HintsCard
│               ├── ToleranceCard
│               ├── GroupFeedbackCard
│               ├── ShowAnswerCard
│               ├── ResetCard
│               ├── TimerCard
│               └── SwitchEditorCard
└── ModalDialog.Footer
    └── ActionRow (Cancel / Save buttons)
```

---

## 8. IMPLEMENTATION PATTERNS FOR CUSTOM XBLOCKS

### 8.1 Modal Structure Pattern

```tsx
import { ModalDialog } from '@openedx/paragon';

export const StudioView = ({ runtime }) => {
  return (
    <ModalDialog isOpen size="xl" onClose={handleClose}>
      <ModalDialog.Header className="shadow-sm">
        <div className="d-flex flex-row justify-content-between">
          <h2 className="h3">Editor Title</h2>
          <IconButton src={Close} onClick={handleClose} />
        </div>
      </ModalDialog.Header>

      <ModalDialog.Body className="pb-0">
        {/* Content */}
      </ModalDialog.Body>

      <ModalDialog.Footer className="shadow-sm">
        <ActionRow>
          <Button variant="tertiary" onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </ActionRow>
      </ModalDialog.Footer>
    </ModalDialog>
  );
};
```

### 8.2 Three-Column Layout Pattern

```jsx
<div className="d-flex flex-row flex-nowrap justify-content-end">
  {/* Main content - grows to fill space */}
  <span className="flex-grow-1 mb-5">
    <QuestionWidget />
    <AnswerWidget />
  </span>

  {/* Settings sidebar - fixed 320px */}
  <span style={{ width: '320px', flexGrow: 0, flexShrink: 0 }}>
    <SettingsWidget />
  </span>
</div>
```

### 8.3 Widget Title Pattern

```jsx
<div className="mt-4 text-primary-500">
  <div className="h4">Widget Title</div>
  <div className="small">Description text</div>
  {/* Widget content */}
</div>
```

### 8.4 Settings Card Pattern

```jsx
import { Card, Collapsible } from '@openedx/paragon';

const SettingsCard = ({ title, summary, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="mb-3">
      <Collapsible.Advanced open={isOpen} onToggle={setIsOpen}>
        <Collapsible.Trigger className="d-flex justify-content-between">
          <span className="h6">{title}</span>
          <span className="small text-gray-500">{summary}</span>
        </Collapsible.Trigger>
        <Collapsible.Body>
          <Card.Section>{children}</Card.Section>
        </Collapsible.Body>
      </Collapsible.Advanced>
    </Card>
  );
};
```

### 8.5 Form Control with Feedback Pattern

```jsx
<Form.Group>
  <Form.Control
    type="number"
    value={value}
    onChange={handleChange}
    floatingLabel="Label Text"
  />
  <Form.Control.Feedback>
    Help text goes here
  </Form.Control.Feedback>
</Form.Group>
```

---

## 9. KEY DEPENDENCIES

```json
{
  "@openedx/paragon": "^23.5.0",
  "@tinymce/tinymce-react": "^3.14.0",
  "@edx/frontend-platform": "^8.4.0",
  "react": "^18.3.1",
  "react-redux": "7.2.9",
  "formik": "2.4.6"
}
```

---

## 10. STANDARDIZATION GUIDE FOR PROBLEM XBLOCKS

### 10.1 What to Match

**Modal Structure:**
- ✅ Use Paragon `ModalDialog` with `size="xl"`
- ✅ Use `ModalDialog.Header`, `Body`, `Footer`
- ✅ Include close IconButton in header
- ✅ Use ActionRow for footer buttons

**Layout:**
- ✅ Three-column layout (main content + 320px sidebar)
- ✅ Main content uses `flex-grow-1`
- ✅ Settings sidebar fixed at 320px

**Typography:**
- ✅ Use `.h3` for modal title
- ✅ Use `.h4` for widget titles
- ✅ Use `.small` for descriptions
- ✅ Use Paragon text utility classes

**Components:**
- ✅ Use Paragon Form components exclusively
- ✅ Use TinyMceWidget for rich text
- ✅ Use Collapsible for expandable sections
- ✅ Use Card for grouping

**Styling:**
- ✅ Use Paragon utility classes (mt-4, mb-3, d-flex, etc.)
- ✅ Use Paragon color variables (text-primary-500, etc.)
- ✅ Follow spacing patterns (mt-4 for widget sections)

### 10.2 Implementation Checklist

For each problem XBlock:

- [ ] Replace custom modal with Paragon ModalDialog
- [ ] Implement three-column layout (content + 320px sidebar)
- [ ] Use Paragon Form components for all inputs
- [ ] Replace custom rich editors with TinyMceWidget
- [ ] Use Collapsible for expandable sections
- [ ] Apply consistent typography classes (.h4, .small)
- [ ] Use Paragon spacing utilities (mt-4, mb-3)
- [ ] Use Paragon color classes (text-primary-500)
- [ ] Implement ActionRow footer with Cancel/Save
- [ ] Add i18n support (FormattedMessage)
- [ ] Test responsive behavior
- [ ] Verify accessibility (focus states, aria labels)

---

## 11. PROBLEM XBLOCKS TO STANDARDIZE

### XBlock 1: Drag Drop Matching
**Path**: `/Users/brainjam/brainjam-openedx-xblocks/xblocks/drag-drop-matching/`
**Priority**: Medium
**Changes**: Apply modal structure, Paragon forms, three-column layout

### XBlock 2: Image Hotspot
**Path**: `/Users/brainjam/brainjam-openedx-xblocks/xblocks/image-hotspot/`
**Priority**: High
**Changes**: Modal structure, visual editor in main column, settings in sidebar

### XBlock 3: Sort Into Bins
**Path**: `/Users/brainjam/brainjam-openedx-xblocks/xblocks/sort-into-bins/`
**Priority**: Medium
**Changes**: Apply modal structure, Paragon forms, three-column layout

### XBlock 4: Image Annotation
**Path**: `/Users/brainjam/brainjam-openedx-xblocks/xblocks/image-annotation/`
**Priority**: High
**Changes**: Modal structure, canvas in main column, tools in sidebar

---

## 12. NEXT STEPS

1. **Choose XBlock** to standardize first (recommend: Drag Drop Matching - simplest)
2. **Install Paragon** in XBlock frontend: `npm install @openedx/paragon`
3. **Create base components**: ModalWrapper, WidgetTitle, SettingsCard
4. **Refactor layout** to three-column pattern
5. **Replace form controls** with Paragon components
6. **Apply styling** with Paragon utilities
7. **Test** modal appearance and behavior
8. **Repeat** for other problem XBlocks

---

## REFERENCE FILES

**Investigation Source:**
- `/Users/brainjam/frontend-app-authoring/src/editors/containers/ProblemEditor/`

**Related Docs:**
- `/Users/brainjam/brainjam-openedx-xblocks/docs/XBLOCK_FULLSCREEN_MODAL_GUIDE.md`
- `/Users/brainjam/brainjam-openedx-xblocks/docs/investigations/xblock-modal-sizing/`

**This Document:**
- `/Users/brainjam/brainjam-openedx-xblocks/docs/investigations/problem-xblock-modal-standardization.md`
