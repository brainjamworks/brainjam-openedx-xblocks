/**
 * EditZoneView Component
 *
 * Form and visual canvas for creating or editing a drop zone.
 * Allows positioning the zone on the image and configuring properties.
 *
 * Pattern: MFE editor view with visual canvas + form controls
 */

import React, { useState, useEffect } from 'react';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import { DropZoneCanvas } from './DropZoneCanvas';
import type { DropZone, LabelDefinition } from '../../common/types';

interface EditZoneViewProps {
  zoneId: string | null;
  zones: DropZone[];
  labels: LabelDefinition[];
  backgroundImageUrl: string;
  backgroundImageWidth: number;
  backgroundImageHeight: number;
  onSave: (zone: DropZone) => void;
  saveRef: React.MutableRefObject<(() => void) | null>;
}

export const EditZoneView: React.FC<EditZoneViewProps> = ({
  zoneId,
  zones,
  labels,
  backgroundImageUrl,
  backgroundImageWidth,
  backgroundImageHeight,
  onSave,
  saveRef,
}) => {
  // Find existing zone if editing
  const existingZone = zoneId ? zones.find(z => z.id === zoneId) : null;

  // Auto-generate ID for new zones
  const generateZoneId = () => {
    if (existingZone) return existingZone.id;

    // Find max zone number
    const zoneNumbers = zones
      .map(z => {
        const match = z.id.match(/^zone_(\d+)$/);
        return match ? parseInt(match[1], 10) : 0;
      })
      .filter(n => n > 0);

    const maxNum = zoneNumbers.length > 0 ? Math.max(...zoneNumbers) : 0;
    return `zone_${maxNum + 1}`;
  };

  // Form state
  const [id] = useState(generateZoneId()); // Auto-generated, no setter needed
  const [x, setX] = useState(existingZone?.x || 100);
  const [y, setY] = useState(existingZone?.y || 100);
  const [radius, setRadius] = useState(existingZone?.radius || 30);
  const [correctAnswer, setCorrectAnswer] = useState(existingZone?.correctAnswer || (labels[0]?.id || ''));
  const [description, setDescription] = useState(existingZone?.description || '');
  const [visible, setVisible] = useState(existingZone?.visible ?? true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Validate form and save
   */
  const handleSave = () => {
    setError(null);

    // Validation
    if (!correctAnswer) {
      setError('Please select a correct answer label');
      return;
    }

    if (!description.trim()) {
      setError('Zone description is required');
      return;
    }

    // Ensure zone has been positioned on canvas (not at default position for new zones)
    if (!existingZone && x === 100 && y === 100) {
      setError('Please position the zone on the image using the canvas');
      return;
    }

    if (radius < 10 || radius > 200) {
      setError('Radius must be between 10 and 200 pixels');
      return;
    }

    // Create zone object
    const newZone: DropZone = {
      id,
      x,
      y,
      radius,
      correctAnswer,
      description,
      visible,
    };

    onSave(newZone);
  };

  /**
   * Handle zone position change from canvas
   */
  const handleCoordinatesChange = (coordinates: number[]) => {
    const [newX, newY, newRadius] = coordinates;
    setX(newX);
    setY(newY);
    setRadius(newRadius);
  };

  // Expose save function to parent via ref
  useEffect(() => {
    saveRef.current = handleSave;
    return () => {
      saveRef.current = null;
    };
  }, [id, x, y, radius, correctAnswer, description, visible, zones]);

  // Check prerequisites
  if (!backgroundImageUrl) {
    return (
      <Alert variant="warning" className="m-4">
        Please configure a background image first before creating drop zones.
      </Alert>
    );
  }

  if (labels.length === 0) {
    return (
      <Alert variant="warning" className="m-4">
        Please create labels first before creating drop zones.
      </Alert>
    );
  }

  // Create temp zone for canvas display
  const tempZone: DropZone = {
    id,
    x,
    y,
    radius,
    correctAnswer,
    description,
    visible: true, // Always show in editor
  };

  return (
    <div className="edit-zone-view">
      <div className="row">
        {/* Left Column - Visual Canvas */}
        <div className="col-md-8">
          <h3 className="mb-3">{zoneId ? 'Edit Drop Zone' : 'Add New Drop Zone'}</h3>
          <div className="mb-3">
            <strong>Position the zone on the image:</strong>
            <p className="text-muted small">Click and drag to position the zone. Drag the edge to resize.</p>
          </div>
          <DropZoneCanvas
            imageUrl={backgroundImageUrl}
            zone={tempZone}
            onChange={handleCoordinatesChange}
          />
        </div>

        {/* Right Column - Form */}
        <div className="col-md-4">
          <h4 className="mb-3">Zone Properties</h4>

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

            {/* Correct Answer */}
            <Form.Group className="mb-3">
              <Form.Label>Correct Answer</Form.Label>
              <Form.Control
                as="select"
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
              >
                {labels.map(label => (
                  <option key={label.id} value={label.id}>
                    {label.id} - {label.label}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback>
                Which label should be placed in this zone
              </Form.Control.Feedback>
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                floatingLabel="Description"
              />
              <Form.Control.Feedback>
                Human-readable description (required)
              </Form.Control.Feedback>
            </Form.Group>

            {/* Position & Radius (display only - edit via canvas) */}
            <div className="border rounded p-3 mb-3 bg-light">
              <small className="text-muted d-block mb-2">Position (set via canvas):</small>
              <div className="row">
                <div className="col-6">
                  <strong>X:</strong> {Math.round(x)}px
                </div>
                <div className="col-6">
                  <strong>Y:</strong> {Math.round(y)}px
                </div>
              </div>
              <div className="mt-2">
                <strong>Radius:</strong> {Math.round(radius)}px
              </div>
            </div>

            {/* Visible in Studio */}
            <Form.Group>
              <Form.Checkbox
                checked={visible}
                onChange={(e) => setVisible(e.target.checked)}
              >
                Show zone outline in studio (for debugging)
              </Form.Checkbox>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};
