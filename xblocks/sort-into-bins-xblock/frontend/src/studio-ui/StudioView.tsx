/**
 * Sort Into Bins - Studio View Component
 *
 * Single-page editor with inline editing for bins and items.
 * Follows the pattern established by drag-drop-matching and image-hotspot.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import Card from '@openedx/paragon/dist/Card';
import { xblockPost } from '../common/api';
import type { StudioViewProps, BinDefinition, SortableItem } from '../common/types';
import { BinsList } from './components/BinsList';
import { ItemsList } from './components/ItemsList';
import './styles/minimal-paragon.scss';

export const StudioView: React.FC<StudioViewProps> = ({
  runtime,
  fields,
}) => {
  // =========================================================================
  // STATE - Form Fields
  // =========================================================================

  const [displayName, setDisplayName] = useState(fields.display_name);
  const [problemTitle, setProblemTitle] = useState(fields.problem_title);
  const [instructions, setInstructions] = useState(fields.instructions);
  const [explanation, setExplanation] = useState(fields.explanation);
  const [bins, setBins] = useState<BinDefinition[]>(fields.bins);
  const [items, setItems] = useState<SortableItem[]>(fields.items);
  const [weight, setWeight] = useState(fields.weight);
  const [maxAttempts, setMaxAttempts] = useState(fields.max_attempts);
  const [gradingMode, setGradingMode] = useState(fields.grading_mode);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(fields.show_correct_answers);
  const [feedbackMode, setFeedbackMode] = useState(fields.show_feedback_mode);

  // =========================================================================
  // STATE - UI
  // =========================================================================

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // =========================================================================
  // HANDLERS - Bins
  // =========================================================================

  const handleAddBin = () => {
    if (bins.length >= 10) {
      setMessage({ type: 'error', text: 'Maximum 10 bins allowed' });
      return;
    }

    const newBin: BinDefinition = {
      id: `bin_${Date.now()}`,
      label: `Bin ${bins.length + 1}`,
      description: '',
      max_capacity: 0, // 0 = unlimited
    };

    setBins([...bins, newBin]);
    setMessage({ type: 'success', text: 'Bin added' });
  };

  const handleEditBin = (index: number, updatedBin: BinDefinition) => {
    const newBins = [...bins];
    newBins[index] = updatedBin;
    setBins(newBins);
  };

  const handleDeleteBin = (index: number) => {
    if (bins.length === 1) {
      setMessage({ type: 'error', text: 'At least one bin is required' });
      return;
    }

    const binToDelete = bins[index];

    // Check if any items reference this bin
    const itemsUsingBin = items.filter(item => item.correct_bin_id === binToDelete.id);
    if (itemsUsingBin.length > 0) {
      if (!confirm(`This bin is referenced by ${itemsUsingBin.length} item(s). Delete anyway?`)) {
        return;
      }
    }

    setBins(bins.filter((_, i) => i !== index));
    setMessage({ type: 'success', text: 'Bin deleted' });
  };

  const handleReorderBins = (fromIndex: number, toIndex: number) => {
    const newBins = [...bins];
    const [movedBin] = newBins.splice(fromIndex, 1);
    newBins.splice(toIndex, 0, movedBin);
    setBins(newBins);
  };

  // =========================================================================
  // HANDLERS - Items
  // =========================================================================

  const handleAddItem = () => {
    if (items.length >= 50) {
      setMessage({ type: 'error', text: 'Maximum 50 items allowed' });
      return;
    }

    if (bins.length === 0) {
      setMessage({ type: 'error', text: 'Please create at least one bin first' });
      return;
    }

    const newItem: SortableItem = {
      id: `item_${Date.now()}`,
      type: 'text',
      content: `Item ${items.length + 1}`,
      correct_bin_id: bins[0].id, // Default to first bin
    };

    setItems([...items, newItem]);
    setMessage({ type: 'success', text: 'Item added' });
  };

  const handleEditItem = (index: number, updatedItem: SortableItem) => {
    const newItems = [...items];
    newItems[index] = updatedItem;
    setItems(newItems);
  };

  const handleDeleteItem = (index: number) => {
    if (items.length === 1) {
      setMessage({ type: 'error', text: 'At least one item is required' });
      return;
    }

    setItems(items.filter((_, i) => i !== index));
    setMessage({ type: 'success', text: 'Item deleted' });
  };

  const handleReorderItems = (fromIndex: number, toIndex: number) => {
    const newItems = [...items];
    const [movedItem] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, movedItem);
    setItems(newItems);
  };

  // =========================================================================
  // HANDLERS - Save/Cancel
  // =========================================================================

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

      if (!problemTitle.trim()) {
        setMessage({ type: 'error', text: 'Problem title is required' });
        setSaving(false);
        return;
      }

      if (bins.length === 0) {
        setMessage({ type: 'error', text: 'At least one bin is required' });
        setSaving(false);
        return;
      }

      if (items.length === 0) {
        setMessage({ type: 'error', text: 'At least one item is required' });
        setSaving(false);
        return;
      }

      // Validate bins
      for (let i = 0; i < bins.length; i++) {
        const bin = bins[i];
        if (!bin.label.trim()) {
          setMessage({ type: 'error', text: `Bin ${i + 1}: Label is required` });
          setSaving(false);
          return;
        }
        if (bin.max_capacity < 0) {
          setMessage({ type: 'error', text: `Bin ${i + 1}: Capacity cannot be negative` });
          setSaving(false);
          return;
        }
      }

      // Validate items
      const binIds = new Set(bins.map(b => b.id));
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (!item.content.trim()) {
          setMessage({ type: 'error', text: `Item ${i + 1}: Content is required` });
          setSaving(false);
          return;
        }
        if (!binIds.has(item.correct_bin_id)) {
          setMessage({ type: 'error', text: `Item ${i + 1}: Invalid bin assignment` });
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
        problem_title: problemTitle,
        instructions,
        explanation,
        bins,
        items,
        weight,
        max_attempts: maxAttempts,
        grading_mode: gradingMode,
        show_correct_answers: showCorrectAnswers,
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

        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      }
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'An error occurred while saving.' });

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

  // =========================================================================
  // RENDER
  // =========================================================================

  return (
    <div className="sort-into-bins-studio-view">
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
        {/* Basic Settings Card */}
        <Card className="mb-4">
          <Card.Header title="Basic Settings" />
          <Card.Section>
            {/* Display Name */}
            <Form.Group className="mb-3">
              <Form.Label>Display Name *</Form.Label>
              <Form.Control
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Sort Into Bins"
              />
              <Form.Text>The name shown in the course outline.</Form.Text>
            </Form.Group>

            {/* Problem Title */}
            <Form.Group className="mb-3">
              <Form.Label>Problem Title *</Form.Label>
              <Form.Control
                type="text"
                value={problemTitle}
                onChange={(e) => setProblemTitle(e.target.value)}
                placeholder="Sort the items into the correct bins"
              />
              <Form.Text>Title displayed at the top of the problem.</Form.Text>
            </Form.Group>

            {/* Instructions */}
            <Form.Group className="mb-3">
              <Form.Label>Instructions</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Drag each item into the bin where it belongs."
              />
              <Form.Text>Instructions shown to students (supports HTML).</Form.Text>
            </Form.Group>

            {/* Explanation */}
            <Form.Group className="mb-3">
              <Form.Label>Explanation (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Explanation shown after submission..."
              />
              <Form.Text>
                Optional explanation shown after submission (supports HTML).
              </Form.Text>
            </Form.Group>
          </Card.Section>
        </Card>

        {/* Bins Card */}
        <Card className="mb-4">
          <Card.Header title="Bins" subtitle={`${bins.length} bin(s)`} />
          <Card.Section>
            <BinsList
              bins={bins}
              onAdd={handleAddBin}
              onEdit={handleEditBin}
              onDelete={handleDeleteBin}
              onReorder={handleReorderBins}
            />
          </Card.Section>
        </Card>

        {/* Items Card */}
        <Card className="mb-4">
          <Card.Header title="Items" subtitle={`${items.length} item(s)`} />
          <Card.Section>
            <ItemsList
              items={items}
              bins={bins}
              onAdd={handleAddItem}
              onEdit={handleEditItem}
              onDelete={handleDeleteItem}
              onReorder={handleReorderItems}
            />
          </Card.Section>
        </Card>

        {/* Problem Settings Card */}
        <Card className="mb-4">
          <Card.Header title="Problem Settings" />
          <Card.Section>
            {/* Weight */}
            <Form.Group className="mb-3">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="number"
                min={0}
                step={0.1}
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
              />
              <Form.Text>
                Maximum grade for this problem (affects course grade calculation).
              </Form.Text>
            </Form.Group>

            {/* Max Attempts */}
            <Form.Group className="mb-3">
              <Form.Label>Maximum Attempts</Form.Label>
              <Form.Control
                type="number"
                min={0}
                value={maxAttempts}
                onChange={(e) => setMaxAttempts(parseInt(e.target.value) || 0)}
              />
              <Form.Text>Maximum number of submission attempts (0 = unlimited).</Form.Text>
            </Form.Group>

            {/* Grading Mode */}
            <Form.Group className="mb-3">
              <Form.Label>Grading Mode</Form.Label>
              <Form.Control
                as="select"
                value={gradingMode}
                onChange={(e) => setGradingMode(e.target.value as 'all_or_nothing' | 'partial_credit')}
              >
                <option value="partial_credit">Partial Credit</option>
                <option value="all_or_nothing">All or Nothing</option>
              </Form.Control>
              <Form.Text>
                Partial Credit: Points per correct item. All or Nothing: Must be perfect.
              </Form.Text>
            </Form.Group>

            {/* Show Correct Answers */}
            <Form.Group className="mb-3">
              <Form.Label>Show Correct Answers</Form.Label>
              <Form.Control
                as="select"
                value={showCorrectAnswers}
                onChange={(e) => setShowCorrectAnswers(e.target.value as 'never' | 'after_attempts' | 'always')}
              >
                <option value="never">Never</option>
                <option value="after_attempts">After Max Attempts</option>
                <option value="always">Always</option>
              </Form.Control>
              <Form.Text>When to show correct answers to students.</Form.Text>
            </Form.Group>

            {/* Feedback Mode */}
            <Form.Group className="mb-3">
              <Form.Label>Feedback Mode</Form.Label>
              <Form.Control
                as="select"
                value={feedbackMode}
                onChange={(e) => setFeedbackMode(e.target.value as 'immediate' | 'on_submit')}
              >
                <option value="on_submit">On Submit</option>
                <option value="immediate">Immediate</option>
              </Form.Control>
              <Form.Text>
                On Submit: Feedback after clicking Submit. Immediate: Instant feedback per item.
              </Form.Text>
            </Form.Group>
          </Card.Section>
        </Card>

        {/* ARCHITECTURAL: Save/Cancel buttons */}
        <div className="sort-into-bins-sticky-actions d-flex justify-content-end border-top pt-3">
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
      </Form>
    </div>
  );
};
