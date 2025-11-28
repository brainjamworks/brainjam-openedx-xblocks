# Sort Into Bins XBlock - Paragon Modal Migration Plan

**Date**: 2025-11-28
**Complexity**: MEDIUM
**Estimated Effort**: 8-14 hours
**Source**: Explore agent analysis

See the complete migration plan in the explore agent output above.

## Quick Summary

**Current State**:
- INCOMPLETE Studio UI (30% complete)
- Inline editing (no modal wrapper)
- Vanilla HTML form inputs (NOT using Paragon Form)
- No three-column layout

**Target State**:
- Paragon `ModalDialog` wrapper
- Three-column layout (main content + 320px sidebar)
- All Paragon `Form.*` components
- Settings in collapsible sidebar cards

## Key Changes

1. **Modal**: Add `ModalDialog` wrapper (currently missing)
2. **Form Controls**: Replace ALL vanilla HTML inputs with Paragon
3. **Layout**: Implement three-column layout
4. **Settings**: Extract to sidebar with SettingsCard components
5. **Styling**: Add Paragon imports and utilities

## Critical Gaps

**Form Components** - Currently using vanilla HTML:
```tsx
// BEFORE (vanilla HTML)
<input type="text" value={bin.label} />

// AFTER (Paragon)
<Form.Control type="text" value={bin.label} />
```

**All Fields to Convert**:
- Bin Label: `<input>` → `Form.Control`
- Bin Description: `<textarea>` → `Form.Control as="textarea"`
- Max Capacity: `<input type="number">` → `Form.Control type="number"`
- Item Content: `<textarea>` → `Form.Control`
- Item Type: `<select>` → `Form.Select`
- Correct Bin: `<select>` → `Form.Select`

## Files to Create

- `ModalWrapper.tsx`
- `EditorLayout.tsx`
- `SettingsSidebar.tsx`
- `components/SettingsCard.tsx`

## Files to Modify

- `StudioView.tsx` (major refactor - add modal, use Paragon Form)
- `components/BinsList.tsx` (replace vanilla HTML with Paragon)
- `components/ItemsList.tsx` (replace vanilla HTML with Paragon)
- `styles/minimal-paragon.scss` (add Paragon imports)

## Implementation Order

1. Step 1: Analyze components (30 min)
2. Step 2: Create modal wrapper (1 hour)
3. Step 3: Create layout component (45 min)
4. Step 4: Convert form components (2-3 hours)
5. Step 5: Move settings to sidebar (1.5 hours)
6. Step 6: Update StudioView (1.5 hours)
7. Step 7: Update styling (1 hour)
8. Step 8: Add Paragon imports (15 min)

**Total**: 8-14 hours
