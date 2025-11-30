/**
 * Studio View Component for Drag and Drop Matching XBlock
 *
 * Main container that orchestrates between MainContentArea and EditView.
 */

import React, { useState, useEffect, useRef } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import ModalDialog from '@openedx/paragon/dist/Modal/ModalDialog';
import { xblockPost } from '../common/api';
import type { StudioViewProps, MatchingPair } from '../common/types';
import { EditView } from './EditView';
import { ModalHeader } from './components/ModalHeader';
import { ModalFooter } from './components/ModalFooter';
import { EditorLayout } from './components/EditorLayout';
import { MainContentArea } from './components/MainContentArea';
import { SettingsSidebar } from './components/SettingsSidebar';

/**
 * View modes
 */
type ViewMode = 'list' | 'edit';

export const StudioView: React.FC<StudioViewProps> = ({
  runtime,
  fields
}) => {
  // State management for form fields
  const [displayName, setDisplayName] = useState(fields.display_name);
  const [questionText, setQuestionText] = useState(fields.question_text);
  const [matchingPairs, setMatchingPairs] = useState<MatchingPair[]>(fields.matching_pairs);
  const [randomizeItems, setRandomizeItems] = useState(fields.randomize_items);
  const [weight, setWeight] = useState(fields.weight);
  const [maxAttempts, setMaxAttempts] = useState(fields.max_attempts);
  const [unlimited, setUnlimited] = useState(fields.unlimited_attempts || false);
  const [feedbackMode, setFeedbackMode] = useState(fields.show_feedback_mode);

  // UI state
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Ref to EditView's save function
  const editViewSaveRef = useRef<(() => void) | null>(null);

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
  }, []); // Run once on mount

  /**
   * Add new pair - creates empty pair and opens editor
   */
  const handleAddPair = () => {
    if (matchingPairs.length >= 20) {
      setMessage({ type: 'error', text: 'Maximum 20 pairs allowed' });
      return;
    }

    // Add empty pair at end
    const newPairs = [
      ...matchingPairs,
      {
        id: `pair${Date.now()}`,
        term: '',
        description: ''
      }
    ];
    setMatchingPairs(newPairs);

    // Open editor for new pair
    setEditingIndex(newPairs.length - 1);
    setViewMode('edit');
  };

  /**
   * Edit existing pair
   */
  const handleEditPair = (index: number) => {
    setEditingIndex(index);
    setViewMode('edit');
  };

  /**
   * Delete pair with confirmation
   */
  const handleDeletePair = (index: number) => {
    if (matchingPairs.length === 1) {
      setMessage({ type: 'error', text: 'At least one matching pair is required' });
      return;
    }

    // Show confirmation
    if (!confirm(`Are you sure you want to delete Pair ${index + 1}?`)) {
      return;
    }

    setMatchingPairs(matchingPairs.filter((_, i) => i !== index));
    setMessage({ type: 'success', text: 'Pair deleted' });
  };

  /**
   * Reorder pair via drag and drop (@dnd-kit)
   */
  const handleReorder = (newPairs: MatchingPair[]) => {
    setMatchingPairs(newPairs);
  };

  /**
   * Save pair from EditView
   */
  const handleSavePair = (updatedPair: MatchingPair) => {
    const newPairs = [...matchingPairs];
    newPairs[editingIndex] = updatedPair;
    setMatchingPairs(newPairs);

    // Return to list view
    setViewMode('list');
    setEditingIndex(-1);
    setMessage({ type: 'success', text: 'Pair saved' });
  };

  /**
   * Cancel editing - return to list
   */
  const handleCancelEdit = () => {
    // If this was a new unsaved pair, remove it
    const pair = matchingPairs[editingIndex];
    if (editingIndex !== -1 && !pair.term && !pair.description) {
      setMatchingPairs(matchingPairs.filter((_, i) => i !== editingIndex));
    }

    setViewMode('list');
    setEditingIndex(-1);
  };

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

      // Validate each pair
      for (let i = 0; i < matchingPairs.length; i++) {
        const pair = matchingPairs[i];

        if (!pair.term.trim()) {
          setMessage({ type: 'error', text: `Pair ${i + 1}: Term is required` });
          setSaving(false);
          return;
        }

        if (!pair.description.trim()) {
          setMessage({ type: 'error', text: `Pair ${i + 1}: Description is required` });
          setSaving(false);
          return;
        }
      }

      // ARCHITECTURAL: Notify Studio that save is starting
      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      // ARCHITECTURAL: Use xblockPost helper for CSRF-protected requests
      const result = await xblockPost(runtime, 'save_data', {
        display_name: displayName,
        question_text: questionText,
        matching_pairs: matchingPairs,
        randomize_items: randomizeItems,
        explanation: '', // Removed explanation field
        weight,
        max_attempts: maxAttempts,
        unlimited_attempts: unlimited,
        show_feedback_mode: feedbackMode
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
        title={displayName || "Drag and Drop Matching"}
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
                pairs={matchingPairs}
                onQuestionTextChange={setQuestionText}
                onAddPair={handleAddPair}
                onEditPair={handleEditPair}
                onDeletePair={handleDeletePair}
                onReorder={handleReorder}
              />
            }
            sidebar={
              <SettingsSidebar
                weight={weight}
                maxAttempts={maxAttempts}
                unlimited={unlimited}
                randomizeItems={randomizeItems}
                feedbackMode={feedbackMode}
                onWeightChange={setWeight}
                onMaxAttemptsChange={setMaxAttempts}
                onUnlimitedChange={setUnlimited}
                onRandomizeChange={setRandomizeItems}
                onFeedbackModeChange={setFeedbackMode}
              />
            }
          />
        ) : (
          <EditView
            pair={matchingPairs[editingIndex]}
            pairIndex={editingIndex}
            totalPairs={matchingPairs.length}
            onSave={handleSavePair}
            onCancel={handleCancelEdit}
            saveRef={editViewSaveRef}
          />
        )}
      </ModalDialog.Body>

      <ModalFooter
        viewMode={viewMode}
        onSave={handleSave}
        onCancel={handleCancel}
        saveDisabled={saving || matchingPairs.length === 0}
        onSavePair={() => editViewSaveRef.current?.()}
        onBackToList={handleCancelEdit}
        savePairDisabled={false}
      />
    </div>
  );
};
