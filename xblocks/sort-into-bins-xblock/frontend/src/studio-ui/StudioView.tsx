import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Alert from '@openedx/paragon/dist/Alert';
import { xblockPost } from '../common/api';
import type { StudioViewProps, BinDefinition, SortableItem } from '../common/types';
import { BinsStep } from './wizard/BinsStep';
import { ItemsStep } from './wizard/ItemsStep';
import { SettingsStep } from './wizard/SettingsStep';
import './styles/minimal-paragon.scss';

type WizardStep = 'bins' | 'items' | 'settings';

export const StudioView: React.FC<StudioViewProps> = ({
  runtime,
  fields,
}) => {
  const [currentStep, setCurrentStep] = useState<WizardStep>('bins');
  const [bins, setBins] = useState<BinDefinition[]>(fields.bins);
  const [items, setItems] = useState<SortableItem[]>(fields.items);
  const [settings, setSettings] = useState({
    display_name: fields.display_name,
    problem_title: fields.problem_title,
    instructions: fields.instructions,
    explanation: fields.explanation,
    weight: fields.weight,
    max_attempts: fields.max_attempts,
    grading_mode: fields.grading_mode,
    show_correct_answers: fields.show_correct_answers,
    show_feedback_mode: fields.show_feedback_mode || 'on_submit',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ type: 'success' | 'danger'; text: string } | null>(null);

  const handleSave = async () => {
    // Validation
    if (!settings.display_name.trim()) {
      setSaveMessage({ type: 'danger', text: 'Display name is required' });
      setCurrentStep('settings');
      return;
    }

    if (bins.length === 0) {
      setSaveMessage({ type: 'danger', text: 'At least one bin is required' });
      setCurrentStep('bins');
      return;
    }

    if (items.length === 0) {
      setSaveMessage({ type: 'danger', text: 'At least one item is required' });
      setCurrentStep('items');
      return;
    }

    setIsSaving(true);
    setSaveMessage(null);

    if (runtime.notify) {
      runtime.notify('save', { state: 'start' });
    }

    try {
      const result = await xblockPost(runtime, 'save_data', {
        display_name: settings.display_name,
        problem_title: settings.problem_title,
        instructions: settings.instructions,
        explanation: settings.explanation,
        weight: settings.weight,
        max_attempts: settings.max_attempts,
        grading_mode: settings.grading_mode,
        show_correct_answers: settings.show_correct_answers,
        show_feedback_mode: settings.show_feedback_mode,
        bins,
        items,
      });

      if (result.success) {
        setSaveMessage({ type: 'success', text: 'Changes saved successfully!' });
        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      } else {
        setSaveMessage({ type: 'danger', text: result.error || 'Failed to save changes' });
        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      }
    } catch (error) {
      setSaveMessage({ type: 'danger', text: 'An error occurred while saving' });
      console.error('Save error:', error);
      if (runtime.notify) {
        runtime.notify('save', { state: 'end' });
      }
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    if (runtime.notify) {
      runtime.notify('cancel', {});
    }
  };

  const steps = [
    { id: 'bins' as WizardStep, label: '1. Bins', icon: '📦' },
    { id: 'items' as WizardStep, label: '2. Items', icon: '🎯' },
    { id: 'settings' as WizardStep, label: '3. Settings', icon: '⚙️' },
  ];

  return (
    <div className="sort-into-bins-studio-view">
      <div className="studio-header">
        <h2>Sort Into Bins - Problem Editor</h2>
        <p className="text-muted">
          Create a problem where students drag items into categorized bins
        </p>
      </div>

      {saveMessage && (
        <Alert
          variant={saveMessage.type}
          dismissible
          onClose={() => setSaveMessage(null)}
        >
          {saveMessage.text}
        </Alert>
      )}

      <div className="wizard-navigation">
        {steps.map((step) => (
          <button
            key={step.id}
            type="button"
            className={`wizard-nav-button ${currentStep === step.id ? 'active' : ''}`}
            onClick={() => setCurrentStep(step.id)}
          >
            <span className="wizard-nav-icon">{step.icon}</span>
            <span className="wizard-nav-label">{step.label}</span>
          </button>
        ))}
      </div>

      <div className="wizard-content">
        {currentStep === 'bins' && (
          <BinsStep bins={bins} onChange={setBins} />
        )}
        {currentStep === 'items' && (
          <ItemsStep items={items} bins={bins} onChange={setItems} />
        )}
        {currentStep === 'settings' && (
          <SettingsStep settings={settings} onChange={setSettings} />
        )}
      </div>

      <div className="studio-actions">
        <Button variant="outline-secondary" onClick={handleCancel} disabled={isSaving}>
          Cancel
        </Button>

        {currentStep !== 'settings' && (
          <Button
            variant="primary"
            onClick={() => {
              const currentIndex = steps.findIndex(s => s.id === currentStep);
              if (currentIndex < steps.length - 1) {
                setCurrentStep(steps[currentIndex + 1].id);
              }
            }}
          >
            Next Step
          </Button>
        )}

        <Button variant="primary" onClick={handleSave} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </div>
  );
};
