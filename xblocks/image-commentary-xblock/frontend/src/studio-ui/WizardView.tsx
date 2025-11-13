/**
 * Wizard View - Main orchestrator for 3-step wizard interface
 *
 * Uses Paragon Stepper component for linear progression:
 * Step 1: Basic Settings (display name)
 * Step 2: Image Configuration (upload/select image)
 * Step 3: Add Markers (create and edit markers)
 *
 * Handles validation, navigation, and final save to backend.
 */

import React, { useState, useRef } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Stepper from '@openedx/paragon/dist/Stepper';
import Alert from '@openedx/paragon/dist/Alert';
import { xblockPost, XBlockRuntime } from '../common/api';
import type { StudioViewFields, Marker } from '../common/types';
import { Step1BasicSettings } from './wizard/Step1BasicSettings';
import { Step2ImageConfig } from './wizard/Step2ImageConfig';
import { Step3Markers } from './wizard/Step3Markers';

interface WizardViewProps {
  runtime: XBlockRuntime;
  fields: StudioViewFields;
  imageUrl: string; // Controlled from parent
  uploading: boolean;
  onImageUpload: (data: any) => void;
  onOpenAssetPicker: () => void;
}

type StepKey = 'step1' | 'step2' | 'step3';

export const WizardView: React.FC<WizardViewProps> = ({
  runtime,
  fields,
  imageUrl,
  uploading,
  onImageUpload,
  onOpenAssetPicker
}) => {
  // =========================================================================
  // STATE - Configuration Fields
  // =========================================================================

  const [displayName, setDisplayName] = useState(fields.display_name);
  const [markers, setMarkers] = useState<Marker[]>(fields.markers);

  // =========================================================================
  // STATE - Wizard Navigation
  // =========================================================================

  const [activeStep, setActiveStep] = useState<StepKey>('step1');
  const [visitedSteps, setVisitedSteps] = useState<Set<StepKey>>(new Set(['step1']));
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [editingMarkerIndex, setEditingMarkerIndex] = useState<number>(-1);

  // Ref to trigger save from inline editor via sticky footer button
  const saveMarkerRef = useRef<(() => void) | null>(null);

  // =========================================================================
  // VALIDATION
  // =========================================================================

  const validateStep1 = (): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];
    if (!displayName.trim()) errors.push('Display name is required');
    return { valid: errors.length === 0, errors };
  };

  const validateStep2 = (): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];
    if (!imageUrl) errors.push('Please select an image');
    return { valid: errors.length === 0, errors };
  };

  const validateStep3 = (): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];
    if (markers.length === 0) errors.push('At least one marker is recommended');
    const unlabeledMarkers = markers.filter(m => !m.label.trim());
    if (unlabeledMarkers.length > 0) errors.push('All markers must have labels');
    return { valid: errors.length === 0, errors };
  };

  // =========================================================================
  // NAVIGATION HANDLERS
  // =========================================================================

  const handleNext = () => {
    // Validate current step before proceeding
    let validation = { valid: true, errors: [] as string[] };

    if (activeStep === 'step1') {
      validation = validateStep1();
      if (validation.valid) {
        setActiveStep('step2');
        setVisitedSteps(new Set([...visitedSteps, 'step2']));
      }
    } else if (activeStep === 'step2') {
      validation = validateStep2();
      if (validation.valid) {
        setActiveStep('step3');
        setVisitedSteps(new Set([...visitedSteps, 'step3']));
      }
    }

    // Show validation errors
    if (!validation.valid) {
      setMessage({ type: 'error', text: validation.errors.join('. ') });
      // Clear message after 5 seconds
      setTimeout(() => setMessage(null), 5000);
    } else {
      setMessage(null);
    }
  };

  const handleBack = () => {
    setMessage(null);
    if (activeStep === 'step2') setActiveStep('step1');
    else if (activeStep === 'step3') setActiveStep('step2');
  };

  const handleNavigateToStep = (step: StepKey) => {
    // Allow navigation to visited steps
    if (visitedSteps.has(step)) {
      setActiveStep(step);
      setMessage(null);
    }
  };

  // =========================================================================
  // SAVE HANDLER
  // =========================================================================

  const handleSaveAll = async () => {
    setSaving(true);
    setMessage(null);

    try {
      // Final validation
      const validation1 = validateStep1();
      const validation2 = validateStep2();
      // Note: Step 3 validation is optional (markers can be empty for content XBlock)

      if (!validation1.valid || !validation2.valid) {
        const allErrors = [...validation1.errors, ...validation2.errors];
        setMessage({ type: 'error', text: allErrors.join('. ') });
        setSaving(false);
        return;
      }

      // Notify Studio
      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      // Submit to backend
      const result = await xblockPost(runtime, 'save_data', {
        display_name: displayName.trim(),
        image_url: imageUrl,
        markers: markers,
        course_id: fields.course_id,
      });

      if (result.success) {
        setMessage({ type: 'success', text: 'Changes saved successfully!' });
        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to save' });
        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      }
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'An error occurred while saving' });
      if (runtime.notify) {
        runtime.notify('save', { state: 'end' });
      }
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (runtime.notify) {
      runtime.notify('cancel', {});
    }
  };

  // =========================================================================
  // MARKER EDITING HANDLERS
  // =========================================================================

  /**
   * Save marker from inline editor
   */
  const handleSaveMarker = (updatedMarker: Marker) => {
    const newMarkers = [...markers];
    newMarkers[editingMarkerIndex] = updatedMarker;
    setMarkers(newMarkers);

    // Exit editing mode
    setEditingMarkerIndex(-1);
  };

  /**
   * Cancel editing
   */
  const handleCancelEditMarker = () => {
    // If this was a new unsaved marker with no label, remove it
    const marker = markers[editingMarkerIndex];
    if (editingMarkerIndex !== -1 && !marker.label) {
      setMarkers(markers.filter((_, i) => i !== editingMarkerIndex));
    }

    setEditingMarkerIndex(-1);
  };

  // =========================================================================
  // RENDER
  // =========================================================================

  return (
    <div className="image-commentary-wizard-view">
      {/* Global Messages */}
      {message && (
        <Alert
          variant={message.type === 'success' ? 'success' : 'danger'}
          dismissible
          onClose={() => setMessage(null)}
          className="mb-3"
        >
          {message.text}
        </Alert>
      )}

      <Stepper activeKey={activeStep}>
        {/* Progress Header */}
        <Stepper.Header />

        {/* Step 1: Basic Settings */}
        <Stepper.Step
          eventKey="step1"
          title="Basic Settings"
          description="Configure display name"
          index={0}
          onClick={visitedSteps.has('step1') ? () => handleNavigateToStep('step1') : undefined}
        >
          <Step1BasicSettings
            displayName={displayName}
            onDisplayNameChange={setDisplayName}
          />
        </Stepper.Step>

        {/* Step 2: Image Configuration */}
        <Stepper.Step
          eventKey="step2"
          title="Select Image"
          description="Upload or choose an image"
          index={1}
          onClick={visitedSteps.has('step2') ? () => handleNavigateToStep('step2') : undefined}
        >
          <Step2ImageConfig
            imageUrl={imageUrl}
            uploading={uploading}
            onImageUpload={onImageUpload}
            onOpenAssetPicker={onOpenAssetPicker}
          />
        </Stepper.Step>

        {/* Step 3: Add Markers */}
        <Stepper.Step
          eventKey="step3"
          title="Add Markers"
          description="Create commentary markers"
          index={2}
          onClick={visitedSteps.has('step3') ? () => handleNavigateToStep('step3') : undefined}
        >
          <Step3Markers
            imageUrl={imageUrl}
            markers={markers}
            onMarkersChange={setMarkers}
            editingIndex={editingMarkerIndex}
            onEditingIndexChange={setEditingMarkerIndex}
            onSaveMarker={handleSaveMarker}
            onCancelEdit={handleCancelEditMarker}
            saveMarkerRef={saveMarkerRef}
          />
        </Stepper.Step>

      </Stepper>

      {/* Sticky footer - OUTSIDE Stepper */}
      <div className="image-commentary-sticky-actions d-flex justify-content-end">
        {editingMarkerIndex !== -1 ? (
          /* Show Save/Cancel when editing marker */
          <>
            <Button variant="tertiary" onClick={handleCancelEditMarker} className="mr-2">
              Cancel
            </Button>
            <Button variant="primary" onClick={() => {
              // Trigger save via ref (MarkerInlineEditor handles validation)
              if (saveMarkerRef.current) {
                saveMarkerRef.current();
              }
            }}>
              Save Marker
            </Button>
          </>
        ) : (
          /* Show navigation buttons when not editing */
          <>
            {activeStep !== 'step1' && (
              <Button variant="outline-primary" onClick={handleBack} disabled={saving} className="mr-2">
                Back
              </Button>
            )}
            <div style={{ flexGrow: 1 }} />
            <Button variant="tertiary" onClick={handleCancel} disabled={saving} className="mr-2">
              Cancel
            </Button>
            {activeStep !== 'step3' ? (
              <Button variant="primary" onClick={handleNext} disabled={saving || uploading}>
                Next
              </Button>
            ) : (
              <Button variant="primary" onClick={handleSaveAll} disabled={saving}>
                {saving ? 'Saving...' : 'Save All Changes'}
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
