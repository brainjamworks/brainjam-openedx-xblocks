/**
 * ListView Component
 *
 * Displays list of all matching pairs with actions:
 * - Edit - Opens pair editor
 * - Delete - Removes pair
 * - Drag to reorder pairs
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Add from '@openedx/paragon/icons/es5/Add';
import DragIndicator from '@openedx/paragon/icons/es5/DragIndicator';

/**
 * Single matching pair structure
 */
interface MatchingPair {
  id: string;
  term: string;
  description: string;
}

/**
 * Props for ListView
 */
interface ListViewProps {
  pairs: MatchingPair[];
  questionText: string;
  randomizeItems: boolean;
  weight: number;
  maxAttempts: number;
  feedbackMode: string;
  isGraded: boolean;
  onQuestionTextChange: (value: string) => void;
  onRandomizeChange: (value: boolean) => void;
  onWeightChange: (value: number) => void;
  onMaxAttemptsChange: (value: number) => void;
  onFeedbackModeChange: (value: string) => void;
  onIsGradedChange: (value: boolean) => void;
  onAddPair: () => void;
  onEditPair: (index: number) => void;
  onDeletePair: (index: number) => void;
  onReorder: (fromIndex: number, toIndex: number) => void;
}

/**
 * Truncate text for preview
 */
const truncate = (text: string, maxLength: number = 60): string => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * ListView component
 */
export const ListView: React.FC<ListViewProps> = ({
  pairs,
  questionText,
  randomizeItems,
  weight,
  maxAttempts,
  feedbackMode,
  isGraded,
  onQuestionTextChange,
  onRandomizeChange,
  onWeightChange,
  onMaxAttemptsChange,
  onFeedbackModeChange,
  onIsGradedChange,
  onAddPair,
  onEditPair,
  onDeletePair,
  onReorder
}) => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault(); // Required to allow drop
    setDragOverIndex(index);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();

    if (draggedIndex !== null && draggedIndex !== dropIndex) {
      onReorder(draggedIndex, dropIndex);
    }

    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="drag-drop-matching-list-view">
      {/* Question Text */}
      <Form.Group className="mb-4">
        <Form.Label>Question Text</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={questionText}
          onChange={(e) => onQuestionTextChange(e.target.value)}
          placeholder="Enter the question or instructions for students"
        />
      </Form.Group>

      {/* Header with pair counter and Add button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Matching Pairs ({pairs.length} / 20)</h3>
        <Button
          variant="primary"
          iconBefore={Add}
          onClick={onAddPair}
          disabled={pairs.length >= 20}
        >
          Add New Pair
        </Button>
      </div>

      {/* Empty state */}
      {pairs.length === 0 && (
        <div className="text-center p-5 bg-light rounded mb-4">
          <p className="mb-3">No matching pairs yet. Click "Add New Pair" to create your first pair.</p>
        </div>
      )}

      {/* Pair list */}
      <div className="pair-list mb-5">
        {pairs.map((pair, index) => (
          <div
            key={pair.id}
            className={`pair-list-item ${draggedIndex === index ? 'dragging' : ''} ${dragOverIndex === index ? 'drag-over' : ''}`}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
          >
            {/* Drag handle */}
            <div className="pair-drag-handle">
              <DragIndicator />
            </div>

            {/* Pair content */}
            <div className="pair-content">
              <div className="pair-main">
                <span className="pair-label">Pair {index + 1}:</span>
                <span className="pair-term">{pair.term || '(No term)'}</span>
                <span className="pair-arrow">→</span>
                <span className="pair-description">{truncate(pair.description, 50)}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pair-actions">
              <Button
                variant="link"
                onClick={() => onEditPair(index)}
                size="sm"
              >
                Edit
              </Button>
              <Button
                variant="link"
                onClick={() => onDeletePair(index)}
                disabled={pairs.length === 1}
                size="sm"
                className="text-danger"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Settings Section */}
      <div className="settings-section">
        <h4 className="mb-3">Settings</h4>

        <div className="row">
          <div className="col-md-3">
            <Form.Group className="mb-3">
              <Form.Switch
                checked={randomizeItems}
                onChange={(e) => onRandomizeChange(e.target.checked)}
                helperText="Shuffle terms and descriptions for each student"
              >
                Randomize item order
              </Form.Switch>
            </Form.Group>
          </div>

          <div className="col-md-3">
            <Form.Group className="mb-3">
              <Form.Label>Feedback Mode</Form.Label>
              <Form.Control
                as="select"
                value={feedbackMode}
                onChange={(e) => onFeedbackModeChange(e.target.value)}
              >
                <option value="immediate">Immediate Feedback</option>
                <option value="on_submit">On Submit</option>
              </Form.Control>
              <Form.Text className="text-muted">
                When to show correctness
              </Form.Text>
            </Form.Group>
          </div>

          <div className="col-md-3">
            <Form.Group className="mb-3">
              <Form.Label>Weight (Points)</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                min="0"
                value={weight}
                onChange={(e) => onWeightChange(Number(e.target.value))}
              />
              <Form.Text className="text-muted">
                Total points for this problem
              </Form.Text>
            </Form.Group>
          </div>

          <div className="col-md-3">
            <Form.Group className="mb-3">
              <Form.Label>Max Attempts</Form.Label>
              <Form.Control
                type="number"
                min="0"
                value={maxAttempts}
                onChange={(e) => onMaxAttemptsChange(Number(e.target.value))}
              />
              <Form.Text className="text-muted">
                0 = unlimited attempts
              </Form.Text>
            </Form.Group>
          </div>
        </div>
      </div>
    </div>
  );
};
