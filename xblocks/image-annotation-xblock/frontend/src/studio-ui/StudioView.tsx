/**
 * Studio View Component for Image Annotation XBlock
 *
 * Provides a tabbed interface for configuring the XBlock:
 * - Configuration: Basic settings, grading, snap settings
 * - Content: Question text and explanation
 * - Image: Background image configuration
 * - Labels: Manage draggable labels
 * - Drop Zones: Visual canvas editor for positioning zones
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Tabs from '@openedx/paragon/dist/Tabs';
import Tab from '@openedx/paragon/dist/Tabs/Tab';
import Alert from '@openedx/paragon/dist/Alert';
import { xblockPost } from '../common/api';
import type { StudioViewProps, LabelDefinition, DropZone } from '../common/types';
import {
  ConfigurationTab,
  ContentTab,
  ImageTab,
  LabelsTab,
  VisualEditor,
} from './components';

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
  const [activeTab, setActiveTab] = useState('configuration');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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

  return (
    <div className="image-annotation-studio-view">
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

      {/* Tabbed Interface */}
      <Tabs
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key as string)}
        id="studio-tabs"
      >
        {/* Configuration Tab */}
        <Tab eventKey="configuration" title="Configuration">
          <div className="p-3">
            <ConfigurationTab
              displayName={displayName}
              weight={weight}
              maxAttempts={maxAttempts}
              gradingMode={gradingMode}
              showFeedbackMode={showFeedbackMode}
              snapEnabled={snapEnabled}
              showCorrectOnSubmit={showCorrectOnSubmit}
              onDisplayNameChange={setDisplayName}
              onWeightChange={setWeight}
              onMaxAttemptsChange={setMaxAttempts}
              onGradingModeChange={setGradingMode}
              onShowFeedbackModeChange={setShowFeedbackMode}
              onSnapEnabledChange={setSnapEnabled}
              onShowCorrectOnSubmitChange={setShowCorrectOnSubmit}
            />
          </div>
        </Tab>

        {/* Content Tab */}
        <Tab eventKey="content" title="Content">
          <div className="p-3">
            <ContentTab
              questionText={questionText}
              explanation={explanation}
              onQuestionTextChange={setQuestionText}
              onExplanationChange={setExplanation}
            />
          </div>
        </Tab>

        {/* Image Tab */}
        <Tab eventKey="image" title="Image">
          <div className="p-3">
            <ImageTab
              runtime={runtime}
              courseId={courseId}
              backgroundImageUrl={backgroundImageUrl}
              backgroundImageWidth={backgroundImageWidth}
              backgroundImageHeight={backgroundImageHeight}
              onBackgroundImageUrlChange={setBackgroundImageUrl}
              onBackgroundImageWidthChange={setBackgroundImageWidth}
              onBackgroundImageHeightChange={setBackgroundImageHeight}
            />
          </div>
        </Tab>

        {/* Labels Tab */}
        <Tab eventKey="labels" title="Labels">
          <div className="p-3">
            <LabelsTab
              labels={labels}
              onLabelsChange={setLabels}
            />
          </div>
        </Tab>

        {/* Visual Editor Tab - Zone positioning */}
        <Tab eventKey="visual" title="Drop Zones">
          <div className="p-3">
            <VisualEditor
              backgroundImageUrl={backgroundImageUrl}
              backgroundImageWidth={backgroundImageWidth}
              backgroundImageHeight={backgroundImageHeight}
              labels={labels}
              zones={dropZones}
              onLabelsChange={setLabels}
              onZonesChange={setDropZones}
            />
          </div>
        </Tab>
      </Tabs>

      {/* Save/Cancel buttons - fixed at bottom */}
      <div className="image-annotation-sticky-actions d-flex justify-content-end border-top pt-3 mt-4">
        <Button
          variant="tertiary"
          onClick={handleCancel}
          disabled={saving}
          className="mr-2"
        >
          Close Without Saving
        </Button>
        <Button
          variant="primary"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save All Changes'}
        </Button>
      </div>
    </div>
  );
};

// Export as default for compatibility
export default StudioView;
