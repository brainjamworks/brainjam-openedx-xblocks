/**
 * Studio View Component for Image Hotspot XBlock
 *
 * Main container that orchestrates between MainContentArea and EditHotspotView.
 * Uses MFE modal pattern with view mode switching.
 */

import React, { useState, useEffect, useRef } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Alert from '@openedx/paragon/dist/Alert';
import ModalDialog from '@openedx/paragon/dist/Modal/ModalDialog';
import { StandardModal } from '@openedx/paragon';
import { xblockPost, XBlockRuntime } from '../common/api';
import type { StudioViewFields, CourseAsset, ListAssetsResponse, Hotspot } from '../common/types';
import { EditHotspotView } from './EditHotspotView';
import { ModalHeader } from './components/ModalHeader';
import { ModalFooter } from './components/ModalFooter';
import { EditorLayout } from './components/EditorLayout';
import { MainContentArea } from './components/MainContentArea';
import { SettingsSidebar } from './components/SettingsSidebar';

interface StudioViewProps {
  runtime: XBlockRuntime;
  fields: StudioViewFields;
}

/**
 * View modes
 */
type ViewMode = 'list' | 'edit-hotspot';

/**
 * Helper to get CSRF token from cookies
 */
function getCSRFToken(): string {
  const name = 'csrftoken';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return '';
}

export const StudioView: React.FC<StudioViewProps> = ({ runtime, fields }) => {
  // =======================================================================
  // STATE - Form Fields
  // =======================================================================

  const [displayName, setDisplayName] = useState(fields.display_name);
  const [questionText, setQuestionText] = useState(fields.question_text);
  const [imageUrl, setImageUrl] = useState(fields.image_url);
  const [hotspots, setHotspots] = useState<Hotspot[]>(fields.hotspots || []);
  const [weight, setWeight] = useState(fields.weight);
  const [maxAttempts, setMaxAttempts] = useState(fields.max_attempts);
  const [unlimited, setUnlimited] = useState(fields.max_attempts === 0);
  const [feedbackMode, setFeedbackMode] = useState(fields.show_feedback_mode);
  const [gradingMode, setGradingMode] = useState(fields.grading_mode);

  // =======================================================================
  // STATE - UI
  // =======================================================================

  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Image upload state
  const [uploading, setUploading] = useState(false);
  const [showAssetPicker, setShowAssetPicker] = useState(false);
  const [loadingAssets, setLoadingAssets] = useState(false);
  const [courseAssets, setCourseAssets] = useState<CourseAsset[]>([]);

  // Ref to EditHotspotView's save function
  const editHotspotSaveRef = useRef<(() => void) | null>(null);

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
        link.disabled = true;
      }
    });
  }, []);

  // =======================================================================
  // HANDLERS - Image Upload
  // =======================================================================

  const handleProcessUpload = async ({ fileData, requestConfig, handleError }: any) => {
    setUploading(true);

    try {
      const uploadUrl = `/assets/${fields.course_id}/`;

      const response = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'X-CSRFToken': getCSRFToken(),
          'Accept': 'application/json',
        },
        body: fileData,
      });

      let result;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        result = { error: text || 'Upload failed' };
      }

      if (response.ok && result.asset) {
        setImageUrl(result.asset.url);
        setMessage({ type: 'success', text: 'Image uploaded successfully!' });
      } else {
        const errorMsg = result.error || result.message || JSON.stringify(result) || 'Upload failed';
        const error = new Error(errorMsg);
        handleError(error);
      }
    } catch (error) {
      console.error('Upload error:', error);
      handleError(error);
    } finally {
      setUploading(false);
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
    setImageUrl(asset.url);
    setShowAssetPicker(false);
    setMessage({ type: 'success', text: 'Image selected!' });
  };

  // =======================================================================
  // HANDLERS - Hotspot CRUD
  // =======================================================================

  /**
   * Add new hotspot - creates empty hotspot and opens editor
   */
  const handleAddHotspot = () => {
    if (!imageUrl) {
      setMessage({ type: 'error', text: 'Please select an image first' });
      return;
    }

    // Add empty hotspot at end
    const newHotspot: Hotspot = {
      id: `hotspot${Date.now()}`,
      label: '',
      shape: 'circle',
      coordinates: [],
      correct: false,
      points: 1,
      feedback: '',
    };

    const newHotspots = [...hotspots, newHotspot];
    setHotspots(newHotspots);

    // Open editor for new hotspot
    setEditingIndex(newHotspots.length - 1);
    setViewMode('edit-hotspot');
  };

  /**
   * Edit existing hotspot
   */
  const handleEditHotspot = (index: number) => {
    setEditingIndex(index);
    setViewMode('edit-hotspot');
  };

  /**
   * Delete hotspot with confirmation
   */
  const handleDeleteHotspot = (index: number) => {
    if (hotspots.length === 1) {
      setMessage({ type: 'error', text: 'At least one hotspot is required' });
      return;
    }

    // Show confirmation
    if (!confirm(`Are you sure you want to delete Hotspot ${index + 1}?`)) {
      return;
    }

    setHotspots(hotspots.filter((_, i) => i !== index));
    setMessage({ type: 'success', text: 'Hotspot deleted' });
  };

  /**
   * Reorder hotspots via drag and drop
   */
  const handleReorder = (newHotspots: Hotspot[]) => {
    setHotspots(newHotspots);
  };

  /**
   * Save hotspot from EditHotspotView
   */
  const handleSaveHotspot = (updatedHotspot: Hotspot) => {
    const newHotspots = [...hotspots];
    newHotspots[editingIndex] = updatedHotspot;
    setHotspots(newHotspots);

    // Return to list view
    setViewMode('list');
    setEditingIndex(-1);
    setMessage({ type: 'success', text: 'Hotspot saved' });
  };

  /**
   * Cancel editing - return to list
   */
  const handleCancelEdit = () => {
    // If this was a new unsaved hotspot, remove it
    const hotspot = hotspots[editingIndex];
    if (editingIndex !== -1 && hotspot.coordinates.length === 0 && !hotspot.label) {
      setHotspots(hotspots.filter((_, i) => i !== editingIndex));
    }

    setViewMode('list');
    setEditingIndex(-1);
  };

  // =======================================================================
  // HANDLERS - Save/Cancel
  // =======================================================================

  /**
   * Save all changes to XBlock
   */
  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      // Client-side validation
      if (!displayName.trim()) {
        setMessage({ type: 'error', text: 'Display name is required' });
        setSaving(false);
        return;
      }

      if (!questionText.trim()) {
        setMessage({ type: 'error', text: 'Question text is required' });
        setSaving(false);
        return;
      }

      if (!imageUrl) {
        setMessage({ type: 'error', text: 'Image URL is required' });
        setSaving(false);
        return;
      }

      if (hotspots.length === 0) {
        setMessage({ type: 'error', text: 'At least one hotspot is required' });
        setSaving(false);
        return;
      }

      // Check at least one correct hotspot
      if (!hotspots.some(h => h.correct)) {
        setMessage({ type: 'error', text: 'At least one hotspot must be marked as correct' });
        setSaving(false);
        return;
      }

      // Note: Individual hotspot validation (label, coordinates) is now handled in EditHotspotView

      // ARCHITECTURAL: Notify Studio that save is starting
      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      // Strip points field before saving (not used in image hotspot)
      const hotspotsToSave = hotspots.map(h => {
        const { points, ...rest } = h;
        return rest;
      });

      // ARCHITECTURAL: Use xblockPost helper for CSRF-protected requests
      const result = await xblockPost(runtime, 'save_data', {
        display_name: displayName,
        question_text: questionText,
        image_url: imageUrl,
        hotspots: hotspotsToSave,
        grading_mode: gradingMode,
        weight,
        max_attempts: unlimited ? 0 : maxAttempts,
        show_feedback_mode: feedbackMode,
      });

      if (result.success) {
        setMessage({ type: 'success', text: 'Changes saved successfully!' });

        // ARCHITECTURAL: Notify Studio that save completed
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
   * ARCHITECTURAL: Cancel handler
   * DON'T CHANGE: This notify pattern closes the Studio modal
   */
  const handleCancel = () => {
    if (runtime.notify) {
      runtime.notify('cancel', {});
    }
  };

  return (
    <div className="modal-container-fullscreen">
      <ModalHeader
        title={displayName || "Image Hotspot"}
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

        {viewMode === 'list' ? (
          <EditorLayout
            mainContent={
              <MainContentArea
                questionText={questionText}
                imageUrl={imageUrl}
                uploading={uploading}
                hotspots={hotspots}
                onQuestionTextChange={setQuestionText}
                onImageUpload={handleProcessUpload}
                onOpenAssetPicker={handleOpenAssetPicker}
                onAddHotspot={handleAddHotspot}
                onEditHotspot={handleEditHotspot}
                onDeleteHotspot={handleDeleteHotspot}
                onReorder={handleReorder}
              />
            }
            sidebar={
              <SettingsSidebar
                weight={weight}
                maxAttempts={maxAttempts}
                unlimited={unlimited}
                feedbackMode={feedbackMode}
                gradingMode={gradingMode}
                onWeightChange={setWeight}
                onMaxAttemptsChange={setMaxAttempts}
                onUnlimitedChange={setUnlimited}
                onFeedbackModeChange={setFeedbackMode}
                onGradingModeChange={setGradingMode}
              />
            }
          />
        ) : (
          <EditHotspotView
            hotspot={hotspots[editingIndex]}
            hotspotIndex={editingIndex}
            totalHotspots={hotspots.length}
            imageUrl={imageUrl}
            onSave={handleSaveHotspot}
            onCancel={handleCancelEdit}
            saveRef={editHotspotSaveRef}
          />
        )}
      </ModalDialog.Body>

      <ModalFooter
        viewMode={viewMode}
        onSave={handleSave}
        onCancel={handleCancel}
        saveDisabled={saving || hotspots.length === 0}
        onSaveHotspot={() => editHotspotSaveRef.current?.()}
        onBackToList={handleCancelEdit}
        saveHotspotDisabled={false}
        editingType="hotspot"
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
                  border: imageUrl === asset.url ? '2px solid #0075b4' : '1px solid #ccc',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  transition: 'border-color 0.2s'
                }}
              >
                <img
                  src={asset.thumbnail_url}
                  alt={asset.filename}
                  style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '2px' }}
                />
                <small style={{ display: 'block', marginTop: '0.5rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {asset.filename}
                </small>
              </div>
            ))}
          </div>
        )}
      </StandardModal>
    </div>
  );
};
