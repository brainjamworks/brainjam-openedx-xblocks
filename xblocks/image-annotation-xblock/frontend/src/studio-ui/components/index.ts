/**
 * Studio Components Barrel Export
 *
 * Central export point for all studio UI components
 */

// Legacy components still in use
export { ContentTab } from './ContentTab';
export { ImageUploadWidget } from './ImageUploadWidget';
export { DropZoneCanvas } from './DropZoneCanvas';

// MFE Pattern Components (Phase 1)
export { EditorLayout } from './EditorLayout';
export { ModalHeader } from './ModalHeader';
export { ModalFooter } from './ModalFooter';
export { TitleHeader } from './TitleHeader';
export { CardSection } from './CardSection';
export { SettingsOption } from './SettingsOption';

// MFE Pattern Components (Phase 3)
export { MainContentArea } from './MainContentArea';
export { SettingsSidebar } from './SettingsSidebar';
export { ScoringCard } from './ScoringCard';
export { BehaviorCard } from './BehaviorCard';
export { LabelItem } from './LabelItem';
export { ZoneItem } from './ZoneItem';
export { EditLabelView } from './EditLabelView';
export { EditZoneView } from './EditZoneView';

// Re-export types for convenience
export type { ContentTabProps } from './ContentTab';
export type { ImageTabProps } from './ImageTab';
