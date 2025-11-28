# Image Annotation XBlock - Paragon Modal Migration Plan

**Date**: 2025-11-28
**Complexity**: HIGH
**Estimated Effort**: 18 hours
**Source**: Explore agent analysis

See the complete migration plan in the explore agent output above.

## Quick Summary

**Current State**:
- Uses Paragon components (good)
- Tabbed interface (5 tabs)
- No ModalDialog wrapper
- Canvas editor in tab
- Settings scattered across tabs

**Target State**:
- Paragon `ModalDialog` wrapper
- Three-column layout: canvas (main) + settings (320px sidebar)
- Canvas in main content area
- Settings organized in collapsible cards
- Tabs for content organization within main area

## Key Changes

1. **Modal**: Wrap in `ModalDialog` (currently just div)
2. **Layout**: Three-column (canvas main + 320px sidebar)
3. **Canvas Position**: Move from tab to main column
4. **Tabs → Sections**: Convert 5 tabs to content sections + sidebar
5. **Settings Cards**: Organize settings in collapsible cards

## Unique Considerations

**Canvas-Heavy Editor**:
- DropZoneCanvas needs full width in main area
- Zone properties form in sidebar
- Coordinate conversion for drawing
- Mouse event handling

**Complex Drawing Tools**:
- Two drawing modes (quick-point, draw-custom)
- SVG overlay for visualization
- Real-time feedback
- Manual coordinate entry

## Files to Create

- `components/EditorModalWrapper.tsx` - Modal container
- `components/EditorLayout.tsx` - Three-column layout
- `components/SettingsCard.tsx` - Collapsible settings
- `components/WidgetTitle.tsx` - Widget headers
- `components/ZoneCanvasEditor.tsx` - Canvas only component
- `components/ZonePropertiesCard.tsx` - Properties in sidebar
- `components/EditorActions.tsx` - Save/Cancel coordination
- `styles/studio-layout.scss` - New layout styles

## Files to Modify

- `StudioView.tsx` (wrap in modal, use new layout)
- `components/ConfigurationTab.tsx` (move to sidebar)
- `components/ContentTab.tsx` (move to main area)
- `components/ImageTab.tsx` (move to main area)
- `components/LabelsTab.tsx` (move to sidebar)
- `components/VisualEditor.tsx` (refactor for new layout)
- `styles/minimal-paragon.scss` (update with layout)

## Files NOT Changing

- `components/DropZoneCanvas.tsx` - No changes needed
- `common/types.ts` - No changes
- `common/api.ts` - No changes
- `image_annotation.py` - Backend unchanged

## Implementation Order

1. Phase 1: Setup (30 min)
2. Phase 2: Modal Infrastructure (2 hours)
3. Phase 3: Three-Column Layout (3 hours)
4. Phase 4: Canvas & Properties (4 hours)
5. Phase 5: Settings Sidebar (3 hours)
6. Phase 6: Styling (2 hours)
7. Phase 7: Testing (3 hours)

**Total**: ~18 hours (spread over 3-4 weeks)

## Success Criteria

**Must Have**:
- ✅ ModalDialog wraps entire editor
- ✅ Three-column layout (main + 320px sidebar)
- ✅ Canvas in main column displays full width
- ✅ All form controls work as before
- ✅ Save/Cancel in modal footer
- ✅ Settings in collapsible cards

**Should Have**:
- ✅ Paragon typography classes
- ✅ Responsive behavior
- ✅ Consistent spacing
- ✅ Color classes
- ✅ Accessibility improved

**Nice to Have**:
- Smooth transitions
- Drag-to-reorder labels
- Quick-add zone button
- Zone preview thumbnails
- Undo/Redo functionality
