/**
 * Studio View Component for Drag and Drop Matching XBlock
 *
 * Main container that orchestrates between ListView and EditView.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import { xblockPost } from '../common/api';
import type { StudioViewProps, MatchingPair } from '../common/types';
import { ListView } from './ListView';
import { EditView } from './EditView';

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
  const [feedbackMode, setFeedbackMode] = useState(fields.show_feedback_mode);

  // UI state
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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
   * Reorder pair via drag and drop
   */
  const handleReorder = (fromIndex: number, toIndex: number) => {
    const newPairs = [...matchingPairs];
    const [movedPair] = newPairs.splice(fromIndex, 1);
    newPairs.splice(toIndex, 0, movedPair);
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
    <div className="drag-drop-matching-studio-view">
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

      <Form>
        {/* Display Name field - always visible */}
        <Form.Group className="mb-4">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Enter display name"
          />
        </Form.Group>

        {/* Render ListView or EditView based on mode */}
        {viewMode === 'list' ? (
          <ListView
            pairs={matchingPairs}
            questionText={questionText}
            randomizeItems={randomizeItems}
            weight={weight}
            maxAttempts={maxAttempts}
            feedbackMode={feedbackMode}
            onQuestionTextChange={setQuestionText}
            onRandomizeChange={setRandomizeItems}
            onWeightChange={setWeight}
            onMaxAttemptsChange={setMaxAttempts}
            onFeedbackModeChange={setFeedbackMode}
            onAddPair={handleAddPair}
            onEditPair={handleEditPair}
            onDeletePair={handleDeletePair}
            onReorder={handleReorder}
          />
        ) : (
          <EditView
            pair={matchingPairs[editingIndex]}
            pairIndex={editingIndex}
            totalPairs={matchingPairs.length}
            onSave={handleSavePair}
            onCancel={handleCancelEdit}
          />
        )}

        {/* ARCHITECTURAL: Save/Cancel buttons - only visible in list view */}
        {viewMode === 'list' && (
          <div className="drag-drop-matching-sticky-actions d-flex justify-content-end border-top pt-3">
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
        )}
      </Form>
    </div>
  );
};
