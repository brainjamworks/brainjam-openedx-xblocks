/**
 * EditHotspotView Component
 *
 * Edit view for a single hotspot (view mode, not modal).
 * Replaces MainContentArea when editing.
 *
 * Features:
 * - Uses existing HotspotCanvas component
 * - Form fields: label, correct/incorrect radio, feedback textarea
 * - Two-column layout: Canvas left, fields right
 * - Save via ref pattern (like EditBinView)
 *
 * Pattern: View mode (like EditBinView/EditItemView from sort-into-bins)
 */

import React, { useState, useImperativeHandle, useEffect } from 'react';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import type { Hotspot } from '../common/types';
import { HotspotCanvas } from './components/HotspotCanvas';

interface EditHotspotViewProps {
  hotspot: Hotspot;
  hotspotIndex: number;
  totalHotspots: number;
  imageUrl: string;
  onSave: (updatedHotspot: Hotspot) => void;
  onCancel: () => void;
  saveRef: React.MutableRefObject<(() => void) | null>;
}

export const EditHotspotView: React.FC<EditHotspotViewProps> = ({
  hotspot,
  hotspotIndex,
  totalHotspots,
  imageUrl,
  onSave,
  onCancel,
  saveRef,
}) => {
  const [label, setLabel] = useState(hotspot.label);
  const [correct, setCorrect] = useState(hotspot.correct);
  const [feedback, setFeedback] = useState(hotspot.feedback);
  const [coordinates, setCoordinates] = useState(hotspot.coordinates);
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    // Clear previous errors
    setError(null);

    // Validation: Label is required
    if (!label.trim()) {
      setError('Hotspot label is required');
      return;
    }

    // Validation: Coordinates must be set
    if (coordinates.length === 0) {
      setError('Please position the hotspot on the image by clicking and dragging');
      return;
    }

    // All valid - save and return
    const updatedHotspot: Hotspot = {
      ...hotspot,
      label: label.trim(),
      correct,
      feedback: feedback.trim(),
      coordinates,
    };
    onSave(updatedHotspot);
  };

  // Expose save function via ref (update when dependencies change)
  useEffect(() => {
    saveRef.current = handleSave;
  }, [label, correct, feedback, coordinates]);

  return (
    <div className="editHotspotView pr-4">
      <div className="mb-4">
        <div className="h4">
          {hotspotIndex === -1
            ? 'Create New Hotspot'
            : `Edit Hotspot ${hotspotIndex + 1} of ${totalHotspots}`}
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {/* Two-column layout */}
      <div className="row">
        {/* Left column: Canvas */}
        <div className="col-md-6">
          <Form.Label>Position Hotspot on Image</Form.Label>
          <div className="mb-3" style={{ maxHeight: '400px', overflow: 'auto' }}>
            <HotspotCanvas
              imageUrl={imageUrl}
              hotspot={{ ...hotspot, coordinates }}
              onChange={setCoordinates}
            />
          </div>
          <small className="text-muted">
            Click and drag on the image to create or reposition the hotspot
          </small>
        </div>

        {/* Right column: Fields */}
        <div className="col-md-6">
          <div className="h4 mb-3">Hotspot Properties</div>

          {/* Label */}
          <Form.Group className="mb-3">
            <Form.Label>Label *</Form.Label>
            <Form.Control
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g., 'Heart', 'Correct Region'"
            />
            <Form.Control.Feedback>
              Descriptive name for this hotspot
            </Form.Control.Feedback>
          </Form.Group>

          {/* Correct/Incorrect Radio */}
          <Form.Group className="mb-3">
            <Form.Label>Correctness</Form.Label>
            <Form.RadioSet
              name="correct"
              value={correct ? 'correct' : 'incorrect'}
              onChange={(e) => setCorrect(e.target.value === 'correct')}
            >
              <Form.Radio value="correct">
                Correct answer
              </Form.Radio>
              <Form.Radio value="incorrect">
                Incorrect answer
              </Form.Radio>
            </Form.RadioSet>
            <Form.Text className="text-muted">
              Whether clicking this hotspot is correct
            </Form.Text>
          </Form.Group>

          {/* Feedback */}
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              floatingLabel="Feedback"
              placeholder="Optional feedback shown when clicked"
            />
            <Form.Control.Feedback>
              Message shown to students after clicking
            </Form.Control.Feedback>
          </Form.Group>

          {/* Coordinates Display (read-only) */}
          <div className="mt-3">
            <small className="text-muted">
              Coordinates: {coordinates.length > 0
                ? `(${coordinates[0].toFixed(1)}%, ${coordinates[1].toFixed(1)}%, r=${coordinates[2].toFixed(1)}%)`
                : 'Not set'}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
