/**
 * Wizard View - Main orchestrator for 4-step wizard interface
 *
 * Uses Paragon Stepper component for linear progression:
 * Step 1: Basic Settings
 * Step 2: Image Configuration
 * Step 3: Add Hotspots
 * Step 4: Review
 *
 * Handles validation, navigation, and final save to backend.
 */

import React, { useState, useRef } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Stepper from '@openedx/paragon/dist/Stepper';
import Alert from '@openedx/paragon/dist/Alert';
import { xblockPost, XBlockRuntime } from '../common/api';
import type { StudioViewFields, Hotspot } from '../common/types';
import { Step1BasicSettings } from './wizard/Step1BasicSettings';
import { Step2ImageConfig } from './wizard/Step2ImageConfig';
import { Step3Hotspots } from './wizard/Step3Hotspots';
import { Step4Review } from './wizard/Step4Review';

interface WizardViewProps {
  runtime: XBlockRuntime;
  fields: StudioViewFields;
  imageUrl: string; // Controlled from parent
  uploading: boolean;
  onImageUpload: (data: any) => void;
  onOpenAssetPicker: () => void;
}

type StepKey = 'step1' | 'step2' | 'step3' | 'step4';

export const WizardView: React.FC<WizardViewProps> = ({
  runtime,
  fields,
  imageUrl, // Use imageUrl from parent (controlled)
  uploading,
  onImageUpload,
  onOpenAssetPicker
}) => {
  // =========================================================================
  // STATE - Configuration Fields
  // =========================================================================

  const [displayName, setDisplayName] = useState(fields.display_name);
  const [questionText, setQuestionText] = useState(fields.question_text);
  const [gradingMode, setGradingMode] = useState(fields.grading_mode);
  const [maxAttempts, setMaxAttempts] = useState(fields.max_attempts);
  const [showFeedbackMode, setShowFeedbackMode] = useState(fields.show_feedback_mode);
  const [weight, setWeight] = useState(fields.weight);
  const [hotspots, setHotspots] = useState<Hotspot[]>(fields.hotspots);

  // =========================================================================
  // STATE - Wizard Navigation
  // =========================================================================

  const [activeStep, setActiveStep] = useState<StepKey>('step1');
  const [visitedSteps, setVisitedSteps] = useState<Set<StepKey>>(new Set(['step1']));
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [editingHotspotIndex, setEditingHotspotIndex] = useState<number>(-1);

  // Ref to trigger save from inline editor via sticky footer button
  const saveHotspotRef = useRef<(() => void) | null>(null);

  // =========================================================================
  // VALIDATION
  // =========================================================================

  const validateStep1 = (): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];
    if (!displayName.trim()) errors.push('Display name is required');
    if (!questionText.trim()) errors.push('Question text is required');
    return { valid: errors.length === 0, errors };
  };

  const validateStep2 = (): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];
    if (!imageUrl) errors.push('Please select an image');
    return { valid: errors.length === 0, errors };
  };

  const validateStep3 = (): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];
    if (hotspots.length === 0) errors.push('At least one hotspot is required');
    const correctHotspots = hotspots.filter(h => h.correct);
    if (correctHotspots.length === 0) errors.push('At least one correct hotspot is required');
    const unlabeledHotspots = hotspots.filter(h => !h.label.trim());
    if (unlabeledHotspots.length > 0) errors.push('All hotspots must have labels');
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
    } else if (activeStep === 'step3') {
      validation = validateStep3();
      if (validation.valid) {
        setActiveStep('step4');
        setVisitedSteps(new Set([...visitedSteps, 'step4']));
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
    else if (activeStep === 'step4') setActiveStep('step3');
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
      const validation3 = validateStep3();

      if (!validation1.valid || !validation2.valid || !validation3.valid) {
        const allErrors = [...validation1.errors, ...validation2.errors, ...validation3.errors];
        setMessage({ type: 'error', text: allErrors.join('. ') });
        setSaving(false);
        return;
      }

      // Notify Studio
      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      // Strip points field from hotspots before saving (equal weight system)
      const hotspotsToSave = hotspots.map(h => {
        const { points, ...hotspotWithoutPoints } = h;
        return hotspotWithoutPoints;
      });

      // Submit to backend
      const result = await xblockPost(runtime, 'save_data', {
        display_name: displayName.trim(),
        question_text: questionText.trim(),
        image_url: imageUrl,
        hotspots: hotspotsToSave,
        grading_mode: gradingMode,
        weight: weight,
        max_attempts: maxAttempts,
        show_feedback_mode: showFeedbackMode
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
  // HOTSPOT EDITING HANDLERS
  // =========================================================================

  /**
   * Save hotspot from inline editor
   */
  const handleSaveHotspot = (updatedHotspot: Hotspot) => {
    const newHotspots = [...hotspots];
    newHotspots[editingHotspotIndex] = updatedHotspot;
    setHotspots(newHotspots);

    // Exit editing mode
    setEditingHotspotIndex(-1);
  };

  /**
   * Cancel editing
   */
  const handleCancelEditHotspot = () => {
    // If this was a new unsaved hotspot with no label, remove it
    const hotspot = hotspots[editingHotspotIndex];
    if (editingHotspotIndex !== -1 && !hotspot.label && hotspot.coordinates[2] === 10) {
      setHotspots(hotspots.filter((_, i) => i !== editingHotspotIndex));
    }

    setEditingHotspotIndex(-1);
  };

  // =========================================================================
  // NOTE: Image URL is managed by parent StudioView
  // No local handlers needed - onImageUpload and onOpenAssetPicker
  // will update parent's state which flows back down as props
  // =========================================================================

  // =========================================================================
  // RENDER
  // =========================================================================

  return (
    <div className="image-hotspot-wizard-view">
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
          description="Configure problem information"
          index={0}
          onClick={visitedSteps.has('step1') ? () => handleNavigateToStep('step1') : undefined}
        >
          <Step1BasicSettings
            displayName={displayName}
            questionText={questionText}
            gradingMode={gradingMode}
            maxAttempts={maxAttempts}
            showFeedbackMode={showFeedbackMode}
            onDisplayNameChange={setDisplayName}
            onQuestionTextChange={setQuestionText}
            onGradingModeChange={setGradingMode}
            onMaxAttemptsChange={setMaxAttempts}
            onShowFeedbackModeChange={setShowFeedbackMode}
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
            onImageUpload={(data) => {
              onImageUpload(data);
              // Note: imageUrl will be updated by parent component
            }}
            onOpenAssetPicker={onOpenAssetPicker}
          />
        </Stepper.Step>


        {/* Step 3: Add Hotspots */}
        <Stepper.Step
          eventKey="step3"
          title="Add Hotspots"
          description="Create clickable regions"
          index={2}
          onClick={visitedSteps.has('step3') ? () => handleNavigateToStep('step3') : undefined}
        >
          <Step3Hotspots
            imageUrl={imageUrl}
            hotspots={hotspots}
            onHotspotsChange={setHotspots}
            editingIndex={editingHotspotIndex}
            onEditingIndexChange={setEditingHotspotIndex}
            onSaveHotspot={handleSaveHotspot}
            onCancelEdit={handleCancelEditHotspot}
            saveHotspotRef={saveHotspotRef}
          />
        </Stepper.Step>


        {/* Step 4: Review */}
        <Stepper.Step
          eventKey="step4"
          title="Review"
          description="Review and save"
          index={3}
          onClick={visitedSteps.has('step4') ? () => handleNavigateToStep('step4') : undefined}
        >
          <Step4Review
            displayName={displayName}
            questionText={questionText}
            gradingMode={gradingMode}
            maxAttempts={maxAttempts}
            showFeedbackMode={showFeedbackMode}
            weight={weight}
            imageUrl={imageUrl}
            hotspots={hotspots}
            onNavigateToStep={handleNavigateToStep}
          />
        </Stepper.Step>

      </Stepper>

      {/* Sticky footer - OUTSIDE Stepper (matches drag-drop pattern) */}
      <div className="image-hotspot-sticky-actions d-flex justify-content-end">
        {editingHotspotIndex !== -1 ? (
          /* Show Save/Cancel when editing hotspot */
          <>
            <Button variant="tertiary" onClick={handleCancelEditHotspot} className="mr-2">
              Cancel
            </Button>
            <Button variant="primary" onClick={() => {
              // Trigger save via ref (HotspotInlineEditor handles validation)
              if (saveHotspotRef.current) {
                saveHotspotRef.current();
              }
            }}>
              Save Hotspot
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
            {activeStep !== 'step4' ? (
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
