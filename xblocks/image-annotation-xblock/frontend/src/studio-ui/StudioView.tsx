/**
 * Studio View Component for Image Annotation XBlock
 *
 * MFE Pattern: Modal-based editor with EditorLayout (two-column)
 * - List View: Shows labels and zones with add/edit actions
 * - Edit Label View: Form for creating/editing labels
 * - Edit Zone View: Visual canvas for positioning zones
 */

import React, { useState, useEffect, useRef } from 'react';
import Alert from '@openedx/paragon/dist/Alert';
import Button from '@openedx/paragon/dist/Button';
import ModalDialog from '@openedx/paragon/dist/Modal/ModalDialog';
import { StandardModal } from '@openedx/paragon';
import { xblockPost } from '../common/api';
import type { StudioViewProps, LabelDefinition, DropZone, CourseAsset, ListAssetsResponse } from '../common/types';
import {
  EditorLayout,
  ModalHeader,
  ModalFooter,
  MainContentArea,
  SettingsSidebar,
  EditLabelView,
  EditZoneView,
} from './components';

/**
 * View modes for the modal editor
 */
type ViewMode = 'list' | 'edit-label' | 'edit-zone';

export const StudioView: React.FC<StudioViewProps> = ({
  runtime,
  url,
  displayName: initialDisplayName,
  questionText: initialQuestionText,
  backgroundImageUrl: initialBackgroundImageUrl,
  backgroundImageWidth: initialBackgroundImageWidth,
  backgroundImageHeight: initialBackgroundImageHeight,
  labels: initialLabels,
  dropZones: initialDropZones,
  weight: initialWeight,
  maxAttempts: initialMaxAttempts,
  showFeedbackMode: initialShowFeedbackMode,
  gradingMode: initialGradingMode,
  snapEnabled: initialSnapEnabled,
  showCorrectOnSubmit: initialShowCorrectOnSubmit,
  courseId,
}) => {
  // =======================================================================
  // STATE MANAGEMENT - MFE Pattern
  // =======================================================================

  // View mode state - controls which view is displayed
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingLabelId, setEditingLabelId] = useState<string | null>(null);
  const [editingZoneId, setEditingZoneId] = useState<string | null>(null);

  // Ref to save function in edit views (called by ModalFooter)
  const saveEditViewRef = useRef<(() => void) | null>(null);

  // State management for all form fields
  const [displayName, setDisplayName] = useState(initialDisplayName);
  const [questionText, setQuestionText] = useState(initialQuestionText);
  const [explanation, setExplanation] = useState(''); // Add to types if needed
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(initialBackgroundImageUrl);
  const [backgroundImageWidth, setBackgroundImageWidth] = useState(initialBackgroundImageWidth);
  const [backgroundImageHeight, setBackgroundImageHeight] = useState(initialBackgroundImageHeight);
  const [labels, setLabels] = useState<LabelDefinition[]>(initialLabels);
  const [dropZones, setDropZones] = useState<DropZone[]>(initialDropZones);
  const [weight, setWeight] = useState(initialWeight);
  const [maxAttempts, setMaxAttempts] = useState(initialMaxAttempts);
  const [showFeedbackMode, setShowFeedbackMode] = useState(initialShowFeedbackMode);
  const [gradingMode, setGradingMode] = useState(initialGradingMode);
  const [snapEnabled, setSnapEnabled] = useState(initialSnapEnabled);
  const [showCorrectOnSubmit, setShowCorrectOnSubmit] = useState(initialShowCorrectOnSubmit);

  // UI state
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Asset picker state
  const [showAssetPicker, setShowAssetPicker] = useState(false);
  const [loadingAssets, setLoadingAssets] = useState(false);
  const [courseAssets, setCourseAssets] = useState<CourseAsset[]>([]);

  // =======================================================================
  // EFFECTS - Disable Legacy CSS
  // =======================================================================

  /**
   * Disable legacy Liverpool Studio CSS that interferes with Paragon
   * NOTE: We provide essential modal structure CSS in studio-editor.scss
   */
  useEffect(() => {
    const legacySheets = [
      '/static/studio/liverpool-dental-legacy/css/studio-main-v1.css',
      '/static/studio/liverpool-dental-legacy/css/course-unit-mfe-iframe-bundle.css'
    ];

    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      if (legacySheets.some(path => link.href.includes(path))) {
        (link as HTMLLinkElement).disabled = true;
      }
    });
  }, []);

  /**
   * Validate form data before saving
   */
  const validateForm = (): { valid: boolean; error?: string } => {
    if (!displayName.trim()) {
      return { valid: false, error: 'Display name is required' };
    }

    // Allow empty configuration for initial setup (like image-hotspot)
    // Only validate content if it's been provided

    if (backgroundImageUrl.trim()) {
      // If image URL is provided, validate dimensions
      if (backgroundImageWidth < 100 || backgroundImageWidth > 2000) {
        return { valid: false, error: 'Background image width must be between 100 and 2000 pixels' };
      }

      if (backgroundImageHeight < 100 || backgroundImageHeight > 2000) {
        return { valid: false, error: 'Background image height must be between 100 and 2000 pixels' };
      }
    }

    // If zones exist, validate they have corresponding labels
    if (dropZones.length > 0 && labels.length === 0) {
      return { valid: false, error: 'Drop zones require at least one label to be defined' };
    }

    // Validate that all zones reference valid labels
    for (const zone of dropZones) {
      const labelExists = labels.some(l => l.id === zone.correctAnswer);
      if (!labelExists) {
        return { valid: false, error: `Zone "${zone.id}" references non-existent label "${zone.correctAnswer}"` };
      }
    }

    return { valid: true };
  };

  /**
   * Save all changes to XBlock
   */
  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      // Validate form
      const validation = validateForm();
      if (!validation.valid) {
        setMessage({ type: 'error', text: validation.error! });
        setSaving(false);
        return;
      }

      // Notify Studio that save is starting
      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      // Prepare data for backend
      const data = {
        display_name: displayName,
        question_text: questionText,
        explanation: explanation,
        background_image_url: backgroundImageUrl,
        background_image_width: backgroundImageWidth,
        background_image_height: backgroundImageHeight,
        draggable_labels: labels,
        drop_zones: dropZones,
        weight: weight,
        max_attempts: maxAttempts,
        show_feedback_mode: showFeedbackMode,
        grading_mode: gradingMode,
        snap_enabled: snapEnabled,
        show_correct_on_submit: showCorrectOnSubmit,
      };

      // Call save_data handler
      const result = await xblockPost(runtime, 'save_data', data);

      if (result.success) {
        setMessage({ type: 'success', text: 'Changes saved successfully!' });

        // Notify Studio that save completed
        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to save changes.' });

        // Notify save ended even on error
        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      }
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'An error occurred while saving.' });

      // Notify save ended on exception
      if (runtime.notify) {
        runtime.notify('save', { state: 'end' });
      }
    } finally {
      setSaving(false);
    }
  };

  /**
   * Cancel handler - closes Studio modal without saving
   */
  const handleCancel = () => {
    if (runtime.notify) {
      runtime.notify('cancel', {});
    }
  };

  // =======================================================================
  // HANDLERS - Asset Picker
  // =======================================================================

  const handleOpenAssetPicker = async () => {
    setShowAssetPicker(true);
    setLoadingAssets(true);

    try {
      const result = await xblockPost<ListAssetsResponse>(runtime, 'list_course_assets', {});

      if (result.success && result.assets) {
        setCourseAssets(result.assets);
      }
    } catch (error) {
      console.error('Asset list error:', error);
    } finally {
      setLoadingAssets(false);
    }
  };

  const handleSelectAsset = (asset: CourseAsset) => {
    setBackgroundImageUrl(asset.url);
    setShowAssetPicker(false);

    // Auto-detect dimensions when asset is selected
    const img = new Image();
    img.onload = () => {
      setBackgroundImageWidth(img.naturalWidth);
      setBackgroundImageHeight(img.naturalHeight);
    };
    img.src = asset.url;
  };

  // =======================================================================
  // HANDLERS - View Mode & CRUD Operations
  // =======================================================================

  /**
   * Switch to list view (main view)
   */
  const handleBackToList = () => {
    setViewMode('list');
    setEditingLabelId(null);
    setEditingZoneId(null);
    saveEditViewRef.current = null;
  };

  /**
   * Add a new label (switch to edit view with null ID)
   */
  const handleAddLabel = () => {
    setEditingLabelId(null);
    setViewMode('edit-label');
  };

  /**
   * Edit an existing label
   */
  const handleEditLabel = (labelId: string) => {
    setEditingLabelId(labelId);
    setViewMode('edit-label');
  };

  /**
   * Delete a label
   */
  const handleDeleteLabel = (labelId: string) => {
    setLabels(prev => prev.filter(l => l.id !== labelId));
    // Also remove any zones that reference this label
    setDropZones(prev => prev.filter(z => z.correctAnswer !== labelId));
  };

  /**
   * Add a new zone (switch to edit view with null ID)
   */
  const handleAddZone = () => {
    setEditingZoneId(null);
    setViewMode('edit-zone');
  };

  /**
   * Edit an existing zone
   */
  const handleEditZone = (zoneId: string) => {
    setEditingZoneId(zoneId);
    setViewMode('edit-zone');
  };

  /**
   * Delete a zone
   */
  const handleDeleteZone = (zoneId: string) => {
    setDropZones(prev => prev.filter(z => z.id !== zoneId));
  };

  /**
   * Save handler for edit views (called by ModalFooter)
   * Delegates to the save function set by the current edit view
   */
  const handleSaveEditView = () => {
    if (saveEditViewRef.current) {
      saveEditViewRef.current();
    }
  };

  /**
   * Save a label (create or update)
   * Called by EditLabelView when saving
   */
  const handleSaveLabel = (label: LabelDefinition) => {
    if (editingLabelId) {
      // Update existing label
      setLabels(prev => prev.map(l => l.id === editingLabelId ? label : l));
    } else {
      // Add new label
      setLabels(prev => [...prev, label]);
    }
    // Return to list view
    handleBackToList();
  };

  /**
   * Save a zone (create or update)
   * Called by EditZoneView when saving
   */
  const handleSaveZone = (zone: DropZone) => {
    if (editingZoneId) {
      // Update existing zone
      setDropZones(prev => prev.map(z => z.id === editingZoneId ? zone : z));
    } else {
      // Add new zone
      setDropZones(prev => [...prev, zone]);
    }
    // Return to list view
    handleBackToList();
  };

  return (
    <div className="modal-container-fullscreen">
      {/* Modal Header - Title + Close Button */}
      <ModalHeader
        title={displayName}
        onClose={handleCancel}
        onTitleChange={setDisplayName}
      />

      <ModalDialog.Body className="pb-0">
        {/* Alert messages */}
        {message && (
          <Alert
            variant={message.type === 'success' ? 'success' : 'danger'}
            dismissible
            onClose={() => setMessage(null)}
          >
            {message.text}
          </Alert>
        )}

        {/* Conditional Layout - EditorLayout for list view, full-width for edit views */}
        {viewMode === 'list' ? (
          <EditorLayout
            mainContent={
              <MainContentArea
                questionText={questionText}
                explanation={explanation}
                onQuestionTextChange={setQuestionText}
                onExplanationChange={setExplanation}
                runtime={runtime}
                courseId={courseId}
                backgroundImageUrl={backgroundImageUrl}
                backgroundImageWidth={backgroundImageWidth}
                backgroundImageHeight={backgroundImageHeight}
                onBackgroundImageUrlChange={setBackgroundImageUrl}
                onBackgroundImageWidthChange={setBackgroundImageWidth}
                onBackgroundImageHeightChange={setBackgroundImageHeight}
                onOpenAssetPicker={handleOpenAssetPicker}
                labels={labels}
                onAddLabel={handleAddLabel}
                onEditLabel={handleEditLabel}
                onDeleteLabel={handleDeleteLabel}
                zones={dropZones}
                onAddZone={handleAddZone}
                onEditZone={handleEditZone}
                onDeleteZone={handleDeleteZone}
              />
            }
            sidebar={
              <SettingsSidebar
                weight={weight}
                maxAttempts={maxAttempts}
                onWeightChange={setWeight}
                onMaxAttemptsChange={setMaxAttempts}
                showFeedbackMode={showFeedbackMode}
                gradingMode={gradingMode}
                snapEnabled={snapEnabled}
                showCorrectOnSubmit={showCorrectOnSubmit}
                onShowFeedbackModeChange={setShowFeedbackMode}
                onGradingModeChange={setGradingMode}
                onSnapEnabledChange={setSnapEnabled}
                onShowCorrectOnSubmitChange={setShowCorrectOnSubmit}
              />
            }
          />
        ) : viewMode === 'edit-label' ? (
          <EditLabelView
            labelId={editingLabelId}
            labels={labels}
            onSave={handleSaveLabel}
            saveRef={saveEditViewRef}
          />
        ) : (
          <EditZoneView
            zoneId={editingZoneId}
            zones={dropZones}
            labels={labels}
            backgroundImageUrl={backgroundImageUrl}
            backgroundImageWidth={backgroundImageWidth}
            backgroundImageHeight={backgroundImageHeight}
            onSave={handleSaveZone}
            saveRef={saveEditViewRef}
          />
        )}
      </ModalDialog.Body>

      {/* Modal Footer - Save/Cancel buttons */}
      <ModalFooter
        viewMode={viewMode === 'list' ? 'list' : 'edit'}
        editingType={viewMode === 'edit-label' ? 'label' : viewMode === 'edit-zone' ? 'zone' : undefined}
        onSave={handleSave}
        onCancel={handleCancel}
        saveDisabled={saving || (viewMode === 'list' && (labels.length === 0 || dropZones.length === 0))}
        onSavePair={handleSaveEditView}
        onBackToList={handleBackToList}
        savePairDisabled={false}
      />

      {/* Asset Picker Modal */}
      <StandardModal
        title="Choose Course Image"
        isOpen={showAssetPicker}
        onClose={() => setShowAssetPicker(false)}
        size="lg"
        isOverflowVisible={false}
        footerNode={
          <Button variant="tertiary" onClick={() => setShowAssetPicker(false)}>
            Close
          </Button>
        }
      >
        {loadingAssets ? (
          <p>Loading images...</p>
        ) : courseAssets.length === 0 ? (
          <p>No images found in course. Upload an image first.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
            {courseAssets.map((asset) => (
              <div
                key={asset.url}
                onClick={() => handleSelectAsset(asset)}
                style={{
                  cursor: 'pointer',
                  border: backgroundImageUrl === asset.url ? '2px solid #0075b4' : '1px solid #ccc',
                  borderRadius: '4px',
                  padding: '0.5rem',
                  textAlign: 'center'
                }}
              >
                <img
                  src={asset.url}
                  alt={asset.display_name}
                  style={{
                    width: '100%',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    marginBottom: '0.5rem'
                  }}
                />
                <div style={{ fontSize: '12px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {asset.display_name}
                </div>
              </div>
            ))}
          </div>
        )}
      </StandardModal>
    </div>
  );
};

// Export as default for compatibility
export default StudioView;
