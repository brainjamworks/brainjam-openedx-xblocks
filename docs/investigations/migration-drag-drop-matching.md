# Drag Drop Matching XBlock - Paragon Modal Migration Plan

**Date**: 2025-11-28
**Complexity**: MEDIUM
**Estimated Effort**: 8-12 hours
**Source**: Explore agent analysis

See the complete migration plan in the explore agent output above.

## Quick Summary

**Current State**:
- Uses React with Paragon components
- No modal wrapper (inline editing)
- Single-page editor with list/edit views
- Missing three-column layout

**Target State**:
- Paragon `ModalDialog` wrapper
- Three-column layout (main content + 320px sidebar)
- Paragon Form components throughout
- Settings organized in collapsible cards

## Key Changes

1. **Modal Structure**: Wrap in `ModalDialog` with Header/Body/Footer
2. **Layout**: Implement three-column (content + 320px sidebar)
3. **Form Controls**: Convert all to Paragon `Form.*` components
4. **Settings**: Move to sidebar with `SettingsCard` components
5. **Styling**: Add Paragon utility classes

## Files to Create

- `components/ModalWrapper.tsx`
- `components/SettingsCard.tsx`
- `components/WidgetTitle.tsx`
- `SettingsSidebar.tsx`
- `EditorLayout.tsx`

## Files to Modify

- `StudioView.tsx` (major refactor)
- `ListView.tsx` (minor updates)
- `EditView.tsx` (form control updates)
- `styles/minimal-paragon.scss` (layout rewrite)

## Implementation Order

1. Phase 1: Preparation (1-2 hours)
2. Phase 2: Modal Structure (2-3 hours)
3. Phase 3: Layout Migration (2-3 hours)
4. Phase 4: Form Components (2-3 hours)
5. Phase 5: Styling (1-2 hours)
6. Phase 6: Integration (2 hours)
7. Phase 7: Testing (1-2 hours)

**Total**: 11-16 hours (realistic: 12-14 hours)
