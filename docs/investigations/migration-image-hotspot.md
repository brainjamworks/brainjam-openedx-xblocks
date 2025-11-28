# Image Hotspot XBlock - Paragon Modal Migration Plan

**Date**: 2025-11-28
**Complexity**: MEDIUM-HIGH
**Estimated Effort**: 16-22 hours
**Source**: Explore agent analysis

See the complete migration plan in the explore agent output above.

## Quick Summary

**Current State**:
- Uses 4-step wizard with Paragon Stepper
- StandardModal wrapper (not ModalDialog)
- No three-column layout
- Visual canvas mixed with form controls

**Target State**:
- Paragon `ModalDialog` (not StandardModal)
- Three-column layout: visual editor (main) + settings (320px sidebar)
- Canvas in main content area
- Settings organized in collapsible cards

## Key Changes

1. **Modal**: Replace `StandardModal` + `Stepper` with `ModalDialog`
2. **Layout**: Three-column (visual editor + 320px sidebar)
3. **Wizard → Tabs**: Convert wizard steps to content tabs
4. **Settings Sidebar**: Extract settings to 320px sidebar with cards
5. **Canvas Integration**: Visual editor in main column

## Unique Considerations

- **Visual Editor**: HotspotCanvas needs prominent placement in main area
- **Image Upload**: Keep existing asset picker modal
- **State Management**: Consolidate wizard step state
- **Validation**: Adapt step-by-step validation to single view

## Files to Create

- `EditorModal.tsx` - Main ModalDialog wrapper
- `EditorContent.tsx` - Content orchestrator
- `EditorLayout.tsx` - Three-column layout
- `MainEditor.tsx` - Main content with tabs
- `HotspotEditor.tsx` - Image + hotspot list (merges Step2+3)
- `SettingsSidebar.tsx` - Settings panel
- `SettingsCard.tsx` - Collapsible card component

## Files to Remove

- `WizardView.tsx` - Replaced by EditorContent
- `wizard/Step1BasicSettings.tsx` - Content moved to MainEditor
- `wizard/Step2ImageConfig.tsx` - Content moved to HotspotEditor
- `wizard/Step3Hotspots.tsx` - Content moved to HotspotEditor
- `wizard/Step4Review.tsx` - Review removed

## Files to Keep

- `components/HotspotCanvas.tsx` - No changes needed
- `wizard/HotspotInlineEditor.tsx` - Reused in MainEditor
- `common/types.ts` - No changes
- `common/api.ts` - No changes

## Implementation Order

1. Phase 1: Setup & Foundation (2-3 hours)
2. Phase 2: Modal Structure (3-4 hours)
3. Phase 3: Main Content Area (5-6 hours)
4. Phase 4: Settings Sidebar (2-3 hours)
5. Phase 5: Styling Updates (2-3 hours)
6. Phase 6: Integration & Testing (2-3 hours)

**Total**: 16-22 hours
