/**
 * EditBinView Component
 *
 * Full-screen editor for creating/editing a bin.
 * Fields: label, description, max_capacity
 * Uses ref pattern to expose save function to parent.
 */

import React, { useState, useEffect } from 'react';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import type { BinDefinition } from '../common/types';

interface EditBinViewProps {
  bin: BinDefinition;
  onSave: (updatedBin: BinDefinition) => void;
  onCancel: () => void;
  saveRef: React.MutableRefObject<(() => void) | null>;
}

export const EditBinView: React.FC<EditBinViewProps> = ({
  bin,
  onSave,
  onCancel,
  saveRef,
}) => {
  const [label, setLabel] = useState(bin.label);
  const [description, setDescription] = useState(bin.description);
  const [maxCapacity, setMaxCapacity] = useState(bin.max_capacity);
  const [error, setError] = useState<string | null>(null);

  // Expose save function to parent via ref
  useEffect(() => {
    saveRef.current = handleSave;
  }, [label, description, maxCapacity]);

  const handleSave = () => {
    // Validation
    if (!label.trim()) {
      setError('Bin label is required');
      return;
    }

    if (maxCapacity < 0) {
      setError('Capacity cannot be negative');
      return;
    }

    // Save and return
    onSave({
      id: bin.id,
      label: label.trim(),
      description: description.trim(),
      max_capacity: maxCapacity,
    });
  };

  return (
    <div className="edit-bin-view p-4">
      <div className="h4 mb-4">Edit Bin</div>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Form>
        {/* Label */}
        <Form.Group className="mb-4">
          <Form.Label>Label *</Form.Label>
          <Form.Control
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="e.g., Category A"
            autoFocus
          />
          <Form.Text>The name shown on the bin in the student view.</Form.Text>
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional description for this bin"
          />
          <Form.Text>
            Optional description shown below the bin label. Helps students understand what belongs in this bin.
          </Form.Text>
        </Form.Group>

        {/* Max Capacity */}
        <Form.Group className="mb-4">
          <Form.Label>Maximum Capacity</Form.Label>
          <Form.Control
            type="number"
            min={0}
            value={maxCapacity}
            onChange={(e) => setMaxCapacity(parseInt(e.target.value) || 0)}
          />
          <Form.Text>
            Maximum number of items allowed in this bin. Set to 0 for unlimited capacity.
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};
