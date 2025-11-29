/**
 * EditView Component
 *
 * Form to create/edit individual matching pair.
 */

import React, { useState, useEffect } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';

/**
 * Single matching pair structure
 */
interface MatchingPair {
  id: string;
  term: string;
  description: string;
}

/**
 * Props for EditView
 */
interface EditViewProps {
  pair: MatchingPair;
  pairIndex: number;
  totalPairs: number;
  onSave: (pair: MatchingPair) => void;
  onCancel: () => void;
  saveRef?: React.MutableRefObject<(() => void) | null>;
}

/**
 * EditView component
 */
export const EditView: React.FC<EditViewProps> = ({
  pair,
  pairIndex,
  totalPairs,
  onSave,
  onCancel,
  saveRef
}) => {
  // Local state for form fields
  const [term, setTerm] = useState(pair.term);
  const [description, setDescription] = useState(pair.description);

  // Validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  /**
   * Validate form fields
   */
  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!term.trim()) {
      newErrors.term = 'Term is required';
    } else if (term.length > 100) {
      newErrors.term = 'Term must be 100 characters or less';
    }

    if (!description.trim()) {
      newErrors.description = 'Description is required';
    } else if (description.length > 200) {
      newErrors.description = 'Description must be 200 characters or less';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle save
   */
  const handleSave = () => {
    if (validate()) {
      onSave({
        id: pair.id,
        term: term.trim(),
        description: description.trim()
      });
    }
  };

  /**
   * Expose handleSave to parent via ref
   */
  useEffect(() => {
    if (saveRef) {
      saveRef.current = handleSave;
    }
  }, [term, description, saveRef]);

  return (
    <div className="drag-drop-matching-edit-view">
      {/* Header */}
      <div className="h4 mb-3">
        <h3>
          {pairIndex === -1 ? 'New Matching Pair' : `Editing Pair ${pairIndex + 1} of ${totalPairs}`}
        </h3>
      </div>

      {/* Form */}
      <Form>
        {/* Term Field */}
        <div className="form-section mb-4">
          <Form.Group>
            <Form.Label>Term *</Form.Label>
            <Form.Control
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Enter the term (e.g., Apply, Analyse, Evaluate)"
              isInvalid={!!errors.term}
              maxLength={100}
            />
            {errors.term && (
              <div className="invalid-feedback d-block">
                {errors.term}
              </div>
            )}
            <Form.Text className="text-muted">
              {term.length} / 100 characters
            </Form.Text>
          </Form.Group>
        </div>

        {/* Description Field */}
        <div className="form-section mb-5">
          <Form.Group>
            <Form.Label>Description *</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter the description that matches this term"
              isInvalid={!!errors.description}
              maxLength={200}
            />
            {errors.description && (
              <div className="invalid-feedback d-block">
                {errors.description}
              </div>
            )}
            <Form.Text className="text-muted">
              {description.length} / 200 characters
            </Form.Text>
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};
