/**
 * VisualEditor - Visual Canvas Editor for Drop Zones
 *
 * Provides visual editing interface for positioning drop zones on image:
 * - List view of all zones
 * - Visual canvas for positioning each zone
 * - Form for zone properties (correct answer, description, visible)
 * - Click and drag to create/resize zones
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import Card from '@openedx/paragon/dist/Card';
import { DropZoneCanvas } from './DropZoneCanvas';
import type { LabelDefinition, DropZone } from '../../common/types';

export interface VisualEditorProps {
  backgroundImageUrl: string;
  backgroundImageWidth: number;
  backgroundImageHeight: number;
  labels: LabelDefinition[];
  zones: DropZone[];
  onLabelsChange?: (labels: LabelDefinition[]) => void;
  onZonesChange?: (zones: DropZone[]) => void;
}

export const VisualEditor: React.FC<VisualEditorProps> = ({
  backgroundImageUrl,
  backgroundImageWidth,
  backgroundImageHeight,
  labels,
  zones,
  onLabelsChange,
  onZonesChange,
}) => {
  const [editingZoneIndex, setEditingZoneIndex] = useState<number | null>(null);
  const [tempZone, setTempZone] = useState<DropZone | null>(null);

  // Check for prerequisites
  if (!backgroundImageUrl) {
    return (
      <Alert variant="warning">
        Please configure a background image in the Image tab first.
      </Alert>
    );
  }

  if (labels.length === 0) {
    return (
      <Alert variant="warning">
        Please create labels in the Labels tab first before adding drop zones.
      </Alert>
    );
  }

  /**
   * Start editing a zone
   */
  const handleEditZone = (index: number) => {
    setEditingZoneIndex(index);
    setTempZone({ ...zones[index] });
  };

  /**
   * Start creating a new zone
   */
  const handleAddZone = () => {
    const newZone: DropZone = {
      id: `zone_${Date.now()}`,
      x: 50, // Center of image (percentage)
      y: 50,
      radius: 10, // 10% radius
      correctAnswer: labels[0].id, // Default to first label
      description: '',
      visible: true,
    };
    setTempZone(newZone);
    setEditingZoneIndex(zones.length); // New zone index
  };

  /**
   * Update zone coordinates from canvas
   */
  const handleCoordinatesChange = (coordinates: number[]) => {
    if (!tempZone) return;
    const [x, y, radius] = coordinates;
    setTempZone({
      ...tempZone,
      x,
      y,
      radius,
    });
  };

  /**
   * Save edited/new zone
   */
  const handleSaveZone = () => {
    if (!tempZone || !onZonesChange) return;

    // Validation
    if (!tempZone.correctAnswer) {
      alert('Please select a correct answer label');
      return;
    }

    if (tempZone.radius === 0) {
      alert('Please draw a zone on the canvas (click and drag)');
      return;
    }

    const newZones = [...zones];
    if (editingZoneIndex !== null && editingZoneIndex < zones.length) {
      // Update existing
      newZones[editingZoneIndex] = tempZone;
    } else {
      // Add new
      newZones.push(tempZone);
    }

    onZonesChange(newZones);
    setEditingZoneIndex(null);
    setTempZone(null);
  };

  /**
   * Cancel editing
   */
  const handleCancelEdit = () => {
    setEditingZoneIndex(null);
    setTempZone(null);
  };

  /**
   * Delete zone
   */
  const handleDeleteZone = (index: number) => {
    if (!onZonesChange) return;
    const zone = zones[index];
    if (confirm(`Are you sure you want to delete zone "${zone.id}"?`)) {
      const newZones = zones.filter((_, i) => i !== index);
      onZonesChange(newZones);
    }
  };

  // Editing mode
  if (tempZone !== null) {
    return (
      <div className="visual-editor">
        <h4>
          {editingZoneIndex !== null && editingZoneIndex < zones.length
            ? `Edit Zone: ${tempZone.id}`
            : 'Add New Drop Zone'}
        </h4>

        <div className="row">
          {/* Canvas - Left side */}
          <div className="col-md-8">
            <div className="mb-3">
              <h5>Position Zone on Image</h5>
              <p className="text-muted small">
                Click and drag on the image to create or resize the drop zone
              </p>
              <DropZoneCanvas
                imageUrl={backgroundImageUrl}
                zone={tempZone}
                onChange={handleCoordinatesChange}
              />
            </div>
          </div>

          {/* Properties - Right side */}
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <h5>Zone Properties</h5>

                <Form.Group className="mb-3">
                  <Form.Label>Zone ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={tempZone.id}
                    disabled
                    readOnly
                  />
                  <Form.Text>Auto-generated identifier</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Correct Answer</Form.Label>
                  <Form.Control
                    as="select"
                    value={tempZone.correctAnswer}
                    onChange={(e) => setTempZone({ ...tempZone, correctAnswer: e.target.value })}
                  >
                    {labels.map(label => (
                      <option key={label.id} value={label.id}>
                        {label.label}
                      </option>
                    ))}
                  </Form.Control>
                  <Form.Text>Which label should be dropped here</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description (Optional)</Form.Label>
                  <Form.Control
                    type="text"
                    value={tempZone.description || ''}
                    onChange={(e) => setTempZone({ ...tempZone, description: e.target.value })}
                    placeholder="e.g., Heart location"
                  />
                  <Form.Text>Human-readable description</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id="zone-visible-edit"
                    label="Show in visual editor"
                    checked={tempZone.visible ?? true}
                    onChange={(e) => setTempZone({ ...tempZone, visible: e.target.checked })}
                  />
                </Form.Group>

                <div className="mb-3">
                  <strong>Position:</strong>
                  <div className="small text-muted">
                    Center: ({Math.round(tempZone.x)}px, {Math.round(tempZone.y)}px)
                    <br />
                    Radius: {Math.round(tempZone.radius)}px
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={handleSaveZone}>
                    {editingZoneIndex !== null && editingZoneIndex < zones.length
                      ? 'Update Zone'
                      : 'Add Zone'}
                  </Button>
                  <Button variant="tertiary" onClick={handleCancelEdit}>
                    Cancel
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // List mode
  return (
    <div className="visual-editor">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Drop Zones ({zones.length})</h4>
        <Button variant="primary" onClick={handleAddZone}>
          Add Drop Zone
        </Button>
      </div>

      {zones.length === 0 ? (
        <Alert variant="info">
          No drop zones configured. Click "Add Drop Zone" to create your first zone and position it visually on the image.
        </Alert>
      ) : (
        <div className="row">
          {zones.map((zone, index) => {
            const label = labels.find(l => l.id === zone.correctAnswer);
            return (
              <div key={zone.id} className="col-md-6 col-lg-4 mb-3">
                <Card>
                  <Card.Body>
                    <h5 className="h6">{zone.id}</h5>
                    <div className="small mb-2">
                      <strong>Correct Answer:</strong> {label?.label || zone.correctAnswer}
                      <br />
                      <strong>Position:</strong> ({Math.round(zone.x)}px, {Math.round(zone.y)}px)
                      <br />
                      <strong>Radius:</strong> {Math.round(zone.radius)}px
                      {zone.description && (
                        <>
                          <br />
                          <strong>Description:</strong> {zone.description}
                        </>
                      )}
                    </div>
                    <div className="d-flex gap-2">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => handleEditZone(index)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDeleteZone(index)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
