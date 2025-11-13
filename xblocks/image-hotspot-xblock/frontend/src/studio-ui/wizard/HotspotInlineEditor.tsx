/**
 * Hotspot Inline Editor
 *
 * Inline editing component for creating/editing a single hotspot.
 * Used within Step 3 of the wizard.
 *
 * Simplified from EditView:
 * - No points field (equal weight system)
 * - Inline display (not modal)
 * - Compact layout
 */

import React, { useState, useEffect } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import type { Hotspot } from '../../common/types';
import { HotspotCanvas } from '../components/HotspotCanvas';

interface HotspotInlineEditorProps {
  hotspot: Hotspot;
  hotspotIndex: number; // -1 for new hotspot
  totalHotspots: number;
  imageUrl: string;
  onSave: (hotspot: Hotspot) => void;
  onCancel: () => void;
  saveRef?: React.MutableRefObject<(() => void) | null>;
}

export const HotspotInlineEditor: React.FC<HotspotInlineEditorProps> = ({
  hotspot,
  hotspotIndex,
  totalHotspots,
  imageUrl,
  onSave,
  onCancel,
  saveRef
}) => {
  // Local state for hotspot properties
  const [label, setLabel] = useState(hotspot.label);
  const [correct, setCorrect] = useState(hotspot.correct);
  const [feedback, setFeedback] = useState(hotspot.feedback);
  const [coordinates, setCoordinates] = useState(hotspot.coordinates);

  // Validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isNewHotspot = hotspotIndex === -1;

  /**
   * Validate form fields
   */
  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!label.trim()) {
      newErrors.label = 'Hotspot label is required';
    } else if (label.length > 100) {
      newErrors.label = 'Label must be 100 characters or less';
    }

    if (coordinates[2] <= 0) {
      newErrors.coordinates = 'Hotspot radius must be greater than 0. Use the visual editor to set the size.';
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
        ...hotspot,
        label,
        correct,
        feedback,
        coordinates
      });
    }
  };

  /**
   * Expose handleSave via ref so parent can trigger save from sticky footer
   */
  useEffect(() => {
    if (saveRef) {
      saveRef.current = handleSave;
    }
    return () => {
      if (saveRef) {
        saveRef.current = null;
      }
    };
  }, [saveRef, label, correct, feedback, coordinates]);

  /**
   * Handle coordinates change from canvas
   */
  const handleCoordinatesChange = (newCoordinates: number[]) => {
    setCoordinates(newCoordinates);
    // Clear coordinates error if radius is now valid
    if (newCoordinates[2] > 0 && errors.coordinates) {
      setErrors({ ...errors, coordinates: '' });
    }
  };

  return (
    <div className="hotspot-inline-editor">
      {/* Header */}
      <div className="inline-editor-header mb-3">
        <h5 className="mb-1">
          {isNewHotspot ? 'New Hotspot' : `Editing Hotspot ${hotspotIndex + 1}`}
        </h5>
        <p className="text-muted small mb-0">
          Click and drag on the image to position the hotspot, then configure its properties below.
        </p>
      </div>

      {/* Visual Editor */}
      <div className="visual-editor-section mb-3">
        <Alert variant="info" className="mb-2" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
          <strong>Tip:</strong> Click and drag on the image to {isNewHotspot ? 'create' : 'reposition'} the hotspot.
        </Alert>

        <HotspotCanvas
          imageUrl={imageUrl}
          hotspot={{
            id: hotspot.id,
            label,
            shape: 'circle',
            coordinates,
            correct,
            points: 1, // Dummy value, not used anymore
            feedback
          }}
          onChange={handleCoordinatesChange}
        />

        {errors.coordinates && (
          <div className="invalid-feedback d-block mt-2">
            {errors.coordinates}
          </div>
        )}
      </div>

      {/* Properties Form */}
      <div className="hotspot-properties-section">
        <Form>
          {/* Label */}
          <Form.Group className="mb-3">
            <Form.Label>Label *</Form.Label>
            <Form.Control
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g., 'Canine tooth', 'Liver', 'Capital city'"
              isInvalid={!!errors.label}
              maxLength={100}
            />
            {errors.label ? (
              <div className="invalid-feedback d-block">
                {errors.label}
              </div>
            ) : (
              <Form.Text className="text-muted">
                {label.length} / 100 characters
              </Form.Text>
            )}
          </Form.Group>

          {/* Correctness */}
          <Form.Group className="mb-3">
            <Form.Label>Correctness</Form.Label>
            <div>
              <Form.Check
                type="radio"
                id={`correct-yes-${hotspot.id}`}
                label="Correct answer"
                checked={correct}
                onChange={() => setCorrect(true)}
                inline
              />
              <Form.Check
                type="radio"
                id={`correct-no-${hotspot.id}`}
                label="Incorrect answer"
                checked={!correct}
                onChange={() => setCorrect(false)}
                inline
              />
            </div>
            <Form.Text className="text-muted">
              Is clicking this hotspot a correct response?
            </Form.Text>
          </Form.Group>

          {/* Feedback */}
          <Form.Group className="mb-3">
            <Form.Label>Feedback (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Feedback shown to students when they click this hotspot..."
              maxLength={500}
            />
            <Form.Text className="text-muted">
              {feedback.length} / 500 characters. Shown based on Feedback Mode setting.
            </Form.Text>
          </Form.Group>

          {/* Coordinate Display (Read-only info) */}
          <div className="mb-3 p-2 bg-light rounded" style={{ fontSize: '0.875rem' }}>
            <strong className="small">Position:</strong> ({coordinates[0].toFixed(2)}%, {coordinates[1].toFixed(2)}%)
            {' • '}
            <strong className="small">Radius:</strong> {coordinates[2].toFixed(2)}%
          </div>

          {/* Action Buttons moved to sticky footer in WizardView */}
        </Form>
      </div>
    </div>
  );
};
