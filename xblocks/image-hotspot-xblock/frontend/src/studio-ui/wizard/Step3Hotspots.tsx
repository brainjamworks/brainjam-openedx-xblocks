/**
 * Step 3: Add Hotspots
 *
 * Manages the list of hotspots with inline editing.
 * - List view: shows all hotspots with Edit/Delete actions
 * - Edit mode: shows inline editor for one hotspot
 *
 * Note: Points field removed - all hotspots have equal weight
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Card from '@openedx/paragon/dist/Card';
import Badge from '@openedx/paragon/dist/Badge';
import Alert from '@openedx/paragon/dist/Alert';
import Add from '@openedx/paragon/icons/es5/Add';
import type { Hotspot } from '../../common/types';
import { HotspotInlineEditor } from './HotspotInlineEditor';

interface Step3Props {
  imageUrl: string;
  hotspots: Hotspot[];
  onHotspotsChange: (hotspots: Hotspot[]) => void;
  editingIndex: number;
  onEditingIndexChange: (index: number) => void;
  onSaveHotspot: (hotspot: Hotspot) => void;
  onCancelEdit: () => void;
  saveHotspotRef?: React.MutableRefObject<(() => void) | null>;
}

export const Step3Hotspots: React.FC<Step3Props> = ({
  imageUrl,
  hotspots,
  onHotspotsChange,
  editingIndex,
  onEditingIndexChange,
  onSaveHotspot,
  onCancelEdit,
  saveHotspotRef
}) => {
  const isEditing = editingIndex !== -1;

  /**
   * Add new hotspot - creates default center hotspot and opens editor
   */
  const handleAddHotspot = () => {
    const newHotspot: Hotspot = {
      id: `hotspot_${Date.now()}`,
      label: '',
      shape: 'circle',
      coordinates: [50, 50, 10], // Center at 50%, 50% with 10% radius
      correct: true,
      points: 1, // Dummy value, not used in grading anymore
      feedback: ''
    };

    // Add to hotspots array
    const newHotspots = [...hotspots, newHotspot];
    onHotspotsChange(newHotspots);

    // Open editor for new hotspot
    onEditingIndexChange(newHotspots.length - 1);
  };

  /**
   * Edit existing hotspot
   */
  const handleEditHotspot = (index: number) => {
    onEditingIndexChange(index);
  };

  /**
   * Delete hotspot with confirmation
   */
  const handleDeleteHotspot = (index: number) => {
    if (!confirm(`Are you sure you want to delete "${hotspots[index].label || 'Hotspot ' + (index + 1)}"?`)) {
      return;
    }

    onHotspotsChange(hotspots.filter((_, i) => i !== index));
  };

  /**
   * Note: Save/Cancel handlers are now passed as props from WizardView
   * so they can be called from the sticky footer
   */

  /**
   * Truncate text for preview
   */
  const truncate = (text: string, maxLength: number = 100): string => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="wizard-step-content">
      {/* Show inline editor if editing */}
      {isEditing ? (
        <Card>
          <Card.Section>
            <HotspotInlineEditor
              hotspot={hotspots[editingIndex]}
              hotspotIndex={editingIndex}
              totalHotspots={hotspots.length}
              imageUrl={imageUrl}
              onSave={onSaveHotspot}
              onCancel={onCancelEdit}
              saveRef={saveHotspotRef}
            />
          </Card.Section>
        </Card>
      ) : (
        /* Show list view if not editing */
        <Card>
          <Card.Section>
            {/* Simple header matching reference design */}
            <div className="hotspot-list-header">
              <h4 className="hotspot-list-title">
                Hotspots ({hotspots.length})
              </h4>
              <Button
                variant="primary"
                iconBefore={Add}
                onClick={handleAddHotspot}
                size="lg"
              >
                Add Hotspot
              </Button>
            </div>
            {/* Image Preview */}
            {imageUrl && (
              <div className="mb-3 p-2 bg-light rounded">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={imageUrl}
                    alt="Hotspot image thumbnail"
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      border: '1px solid #dee2e6'
                    }}
                  />
                  <div className="flex-grow-1">
                    <small className="text-muted d-block">Selected Image</small>
                    <small className="text-muted" style={{ fontSize: '0.75rem', wordBreak: 'break-all' }}>
                      {truncate(imageUrl, 60)}
                    </small>
                  </div>
                </div>
              </div>
            )}

            {/* Hotspot List */}
            {hotspots.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-muted mb-3" style={{ fontSize: '1.1rem' }}>No hotspots defined yet.</p>
                <p className="text-muted small mb-4">
                  Create clickable regions on your image that students can click.
                </p>
                <Button
                  variant="primary"
                  iconBefore={Add}
                  onClick={handleAddHotspot}
                  size="lg"
                >
                  Add Your First Hotspot
                </Button>
              </div>
            ) : (
              <div className="hotspot-list">
                {hotspots.map((hotspot, index) => (
                  <div
                    key={hotspot.id}
                    className="hotspot-card"
                    style={{
                      border: '1px solid #dee2e6',
                      borderRadius: '4px',
                      padding: '1rem',
                      marginBottom: '0.75rem',
                      backgroundColor: '#fff',
                      transition: 'box-shadow 0.2s'
                    }}
                  >
                    <div className="d-flex align-items-start justify-content-between">
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center mb-2">
                          <span style={{ fontWeight: 600, marginRight: '0.5rem' }}>
                            {index + 1}. {hotspot.label || '(Unlabeled)'}
                          </span>
                          <Badge
                            variant={hotspot.correct ? 'success' : 'danger'}
                            style={{ fontSize: '0.75rem' }}
                          >
                            {hotspot.correct ? 'Correct' : 'Incorrect'}
                          </Badge>
                        </div>

                        {hotspot.feedback && (
                          <div style={{ fontSize: '0.875rem', color: '#666', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                            "{truncate(hotspot.feedback, 120)}"
                          </div>
                        )}

                        <div style={{ fontSize: '0.75rem', color: '#999' }}>
                          Position: ({hotspot.coordinates[0].toFixed(1)}%, {hotspot.coordinates[1].toFixed(1)}%)
                          • Radius: {hotspot.coordinates[2].toFixed(1)}%
                        </div>
                      </div>

                      <div className="d-flex gap-2" style={{ marginLeft: '1rem' }}>
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() => handleEditHotspot(index)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() => handleDeleteHotspot(index)}
                          className="text-danger"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Info about equal weighting */}
            {hotspots.length > 0 && (
              <Alert variant="info" className="mt-3" style={{ fontSize: '0.875rem' }}>
                <strong>Points Distribution:</strong> Each correct hotspot will be worth equal points.
                For example, if your problem is worth 10 points and you have 5 correct hotspots,
                each correct click will earn 2 points.
              </Alert>
            )}
          </Card.Section>
        </Card>
      )}
    </div>
  );
};
