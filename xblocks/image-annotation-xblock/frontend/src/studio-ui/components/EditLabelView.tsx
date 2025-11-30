/**
 * EditLabelView Component
 *
 * Form for creating or editing a label.
 * Provides fields for all label properties and validates input.
 *
 * Pattern: MFE editor view with form controls
 */

import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import type { LabelDefinition, LabelType } from '../../common/types';

interface EditLabelViewProps {
  labelId: string | null;
  labels: LabelDefinition[];
  onSave: (label: LabelDefinition) => void;
  saveRef: React.MutableRefObject<(() => void) | null>;
}

export const EditLabelView: React.FC<EditLabelViewProps> = ({
  labelId,
  labels,
  onSave,
  saveRef,
}) => {
  // Find existing label if editing
  const existingLabel = labelId ? labels.find(l => l.id === labelId) : null;

  // Auto-generate ID for new labels
  const generateLabelId = () => {
    if (existingLabel) return existingLabel.id;

    // Find max label number
    const labelNumbers = labels
      .map(l => {
        const match = l.id.match(/^label_(\d+)$/);
        return match ? parseInt(match[1], 10) : 0;
      })
      .filter(n => n > 0);

    const maxNum = labelNumbers.length > 0 ? Math.max(...labelNumbers) : 0;
    return `label_${maxNum + 1}`;
  };

  // Form state
  const [id] = useState(generateLabelId()); // Auto-generated, no setter needed
  const [label, setLabel] = useState(existingLabel?.label || '');
  const [type, setType] = useState<LabelType>(existingLabel?.type || 'normal');
  const [width, setWidth] = useState(existingLabel?.width || 60);
  const [height, setHeight] = useState(existingLabel?.height || 40);
  const [startX, setStartX] = useState(existingLabel?.startX || 0);
  const [startY, setStartY] = useState(existingLabel?.startY || 0);
  const [error, setError] = useState<string | null>(null);

  /**
   * Validate form and save
   */
  const handleSave = () => {
    setError(null);

    // Validation
    if (!label.trim()) {
      setError('Label text is required');
      return;
    }

    if (width < 10 || width > 200) {
      setError('Width must be between 10 and 200 pixels');
      return;
    }

    if (height < 10 || height > 200) {
      setError('Height must be between 10 and 200 pixels');
      return;
    }

    // Create label object
    const newLabel: LabelDefinition = {
      id,
      label,
      type,
      width,
      height,
      startX,
      startY,
    };

    onSave(newLabel);
  };

  // Expose save function to parent via ref
  useEffect(() => {
    saveRef.current = handleSave;
    return () => {
      saveRef.current = null;
    };
  }, [id, label, type, width, height, startX, startY, labels]);

  return (
    <div className="edit-label-view p-4">
      <h3 className="mb-4">{labelId ? 'Edit Label' : 'Add New Label'}</h3>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Form>
        {/* Auto-generated ID info */}
        <div className="mb-3 text-muted small">
          ID: <strong>{id}</strong> (auto-generated)
        </div>

        {/* Label Text */}
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            floatingLabel="Label Text"
          />
          <Form.Control.Feedback>
            Text displayed on the label (e.g., "A", "Heart", "Liver")
          </Form.Control.Feedback>
        </Form.Group>

        {/* Label Type */}
        <Form.Group className="mb-3">
          <Form.Label>Label Type</Form.Label>
          <Form.Control
            as="select"
            value={type}
            onChange={(e) => setType(e.target.value as LabelType)}
          >
            <option value="normal">Normal (Badge with text)</option>
            <option value="dot">Dot Marker (Small circle)</option>
            <option value="cross">Cross Marker (X symbol)</option>
          </Form.Control>
          <Form.Control.Feedback>
            Visual style of the label
          </Form.Control.Feedback>
        </Form.Group>

        {/* Size */}
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                min={10}
                max={200}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                floatingLabel="Width (px)"
              />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                min={10}
                max={200}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                floatingLabel="Height (px)"
              />
            </Form.Group>
          </div>
        </div>

        {/* Initial Position */}
        <Form.Group className="mb-3">
          <Form.Label>Initial Position (Label Bank)</Form.Label>
          <div className="row">
            <div className="col-md-6">
              <Form.Control
                type="number"
                min={0}
                value={startX}
                onChange={(e) => setStartX(Number(e.target.value))}
                floatingLabel="X Position"
              />
            </div>
            <div className="col-md-6">
              <Form.Control
                type="number"
                min={0}
                value={startY}
                onChange={(e) => setStartY(Number(e.target.value))}
                floatingLabel="Y Position"
              />
            </div>
          </div>
          <Form.Control.Feedback>
            Where the label appears before being dragged (in the label bank)
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
    </div>
  );
};
