/**
 * Marker Inline Editor
 *
 * Inline editing component for creating/editing a single marker.
 * Used within Step 3 of the wizard.
 */

import React, { useState, useEffect } from 'react';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import type { Marker, MarkerType } from '../../common/types';
import { MarkerCanvas } from '../components/MarkerCanvas';

interface MarkerInlineEditorProps {
  marker: Marker;
  markerIndex: number;
  totalMarkers: number;
  imageUrl: string;
  onSave: (marker: Marker) => void;
  onCancel: () => void;
  saveRef?: React.MutableRefObject<(() => void) | null>;
}

export const MarkerInlineEditor: React.FC<MarkerInlineEditorProps> = ({
  marker,
  markerIndex,
  totalMarkers,
  imageUrl,
  onSave,
  onCancel,
  saveRef
}) => {
  // Local state for marker properties
  const [label, setLabel] = useState(marker.label);
  const [commentary, setCommentary] = useState(marker.commentary);
  const [type, setType] = useState<MarkerType>(marker.type);
  const [coordinates, setCoordinates] = useState<[number, number]>([marker.x, marker.y]);

  // Validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isNewMarker = markerIndex === totalMarkers - 1 && !marker.label;

  /**
   * Validate form fields
   */
  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!label.trim()) {
      newErrors.label = 'Marker label is required';
    } else if (label.length > 100) {
      newErrors.label = 'Label must be 100 characters or less';
    }

    if (commentary.length > 500) {
      newErrors.commentary = 'Commentary must be 500 characters or less';
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
        ...marker,
        label: label.trim(),
        commentary: commentary.trim(),
        type,
        x: coordinates[0],
        y: coordinates[1]
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
  }, [saveRef, label, commentary, type, coordinates]);

  /**
   * Handle coordinates change from canvas
   */
  const handleCoordinatesChange = (newCoordinates: [number, number]) => {
    setCoordinates(newCoordinates);
  };

  return (
    <div className="marker-inline-editor">
      {/* Header */}
      <div className="inline-editor-header mb-3">
        <h5 className="mb-1">
          {isNewMarker ? 'New Marker' : `Editing Marker ${markerIndex + 1}`}
        </h5>
        <p className="text-muted small mb-0">
          Click on the image to position the marker, then configure its properties below.
        </p>
      </div>

      {/* Visual Editor */}
      <div className="visual-editor-section mb-3">
        <Alert variant="info" className="tip-alert">
          <strong>Tip:</strong> Click on the image to {isNewMarker ? 'place' : 'reposition'} the marker.
        </Alert>

        <MarkerCanvas
          imageUrl={imageUrl}
          coordinates={coordinates}
          markerType={type}
          onChange={handleCoordinatesChange}
        />
      </div>

      {/* Properties Form */}
      <div className="marker-properties-section">
        <Form.Group className="mb-3">
          <Form.Label>Label *</Form.Label>
          <Form.Control
            type="text"
            value={label}
            onChange={(e) => {
              setLabel(e.target.value);
              if (errors.label) setErrors({ ...errors, label: '' });
            }}
            placeholder="e.g., Key structure, Important note"
            maxLength={100}
            isInvalid={!!errors.label}
          />
          {errors.label ? (
            <Form.Control.Feedback type="invalid">
              {errors.label}
            </Form.Control.Feedback>
          ) : (
            <Form.Text className="text-muted">
              {label.length} / 100 characters
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Commentary</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={commentary}
            onChange={(e) => {
              setCommentary(e.target.value);
              if (errors.commentary) setErrors({ ...errors, commentary: '' });
            }}
            placeholder="Detailed commentary that will appear in the popover..."
            maxLength={500}
            isInvalid={!!errors.commentary}
          />
          {errors.commentary ? (
            <Form.Control.Feedback type="invalid">
              {errors.commentary}
            </Form.Control.Feedback>
          ) : (
            <Form.Text className="text-muted">
              {commentary.length} / 500 characters
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label>Type</Form.Label>
          <div>
            <Form.Check
              type="radio"
              id="type-info"
              label="Info (Blue) - General information"
              checked={type === 'info'}
              onChange={() => setType('info')}
              className="mb-2"
            />
            <Form.Check
              type="radio"
              id="type-warning"
              label="Warning (Orange) - Important notes"
              checked={type === 'warning'}
              onChange={() => setType('warning')}
              className="mb-2"
            />
            <Form.Check
              type="radio"
              id="type-success"
              label="Success (Green) - Positive feedback"
              checked={type === 'success'}
              onChange={() => setType('success')}
              className="mb-2"
            />
            <Form.Check
              type="radio"
              id="type-danger"
              label="Danger (Red) - Critical points"
              checked={type === 'danger'}
              onChange={() => setType('danger')}
            />
          </div>
        </Form.Group>
      </div>
    </div>
  );
};
