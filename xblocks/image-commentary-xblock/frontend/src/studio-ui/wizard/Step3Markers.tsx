/**
 * Step 3: Add Markers
 *
 * Manages the list of markers with inline editing.
 * - List view: shows all markers with Edit/Delete actions
 * - Edit mode: shows inline editor for one marker
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import Card from '@openedx/paragon/dist/Card';
import Badge from '@openedx/paragon/dist/Badge';
import Add from '@openedx/paragon/icons/es5/Add';
import type { Marker } from '../../common/types';
import { MarkerInlineEditor } from './MarkerInlineEditor';

interface Step3Props {
  imageUrl: string;
  markers: Marker[];
  onMarkersChange: (markers: Marker[]) => void;
  editingIndex: number;
  onEditingIndexChange: (index: number) => void;
  onSaveMarker: (marker: Marker) => void;
  onCancelEdit: () => void;
  saveMarkerRef?: React.MutableRefObject<(() => void) | null>;
}

export const Step3Markers: React.FC<Step3Props> = ({
  imageUrl,
  markers,
  onMarkersChange,
  editingIndex,
  onEditingIndexChange,
  onSaveMarker,
  onCancelEdit,
  saveMarkerRef
}) => {
  const isEditing = editingIndex !== -1;

  /**
   * Add new marker - creates default center marker and opens editor
   */
  const handleAddMarker = () => {
    const newMarker: Marker = {
      id: `marker_${Date.now()}`,
      x: 50,
      y: 50,
      label: '',
      commentary: '',
      type: 'info'
    };

    // Add to markers array
    const newMarkers = [...markers, newMarker];
    onMarkersChange(newMarkers);

    // Open editor for new marker
    onEditingIndexChange(newMarkers.length - 1);
  };

  /**
   * Edit existing marker
   */
  const handleEditMarker = (index: number) => {
    onEditingIndexChange(index);
  };

  /**
   * Delete marker with confirmation
   */
  const handleDeleteMarker = (index: number) => {
    if (!confirm(`Are you sure you want to delete "${markers[index].label || 'Marker ' + (index + 1)}"?`)) {
      return;
    }

    onMarkersChange(markers.filter((_, i) => i !== index));
  };

  /**
   * Get badge variant for marker type
   */
  const getTypeBadgeVariant = (type: string): string => {
    switch (type) {
      case 'info': return 'info';
      case 'warning': return 'warning';
      case 'success': return 'success';
      case 'danger': return 'danger';
      default: return 'info';
    }
  };

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
            <MarkerInlineEditor
              marker={markers[editingIndex]}
              markerIndex={editingIndex}
              totalMarkers={markers.length}
              imageUrl={imageUrl}
              onSave={onSaveMarker}
              onCancel={onCancelEdit}
              saveRef={saveMarkerRef}
            />
          </Card.Section>
        </Card>
      ) : (
        /* Show list view if not editing */
        <Card>
          <Card.Section>
            {/* Header */}
            <div className="marker-list-header">
              <h4 className="marker-list-title">
                Markers ({markers.length})
              </h4>
              <Button
                variant="primary"
                iconBefore={Add}
                onClick={handleAddMarker}
                size="lg"
              >
                Add Marker
              </Button>
            </div>

            {/* Image Preview */}
            {imageUrl && (
              <div className="mb-3 p-2 bg-light rounded">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={imageUrl}
                    alt="Commentary image thumbnail"
                    className="image-thumbnail"
                  />
                  <div className="flex-grow-1">
                    <small className="text-muted d-block">Selected Image</small>
                    <small className="text-muted image-url-preview">
                      {truncate(imageUrl, 60)}
                    </small>
                  </div>
                </div>
              </div>
            )}

            {/* Marker List */}
            {markers.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-muted mb-3 empty-state-title">No markers defined yet.</p>
                <p className="text-muted small mb-4">
                  Create commentary markers to annotate different parts of your image.
                </p>
                <Button
                  variant="primary"
                  iconBefore={Add}
                  onClick={handleAddMarker}
                  size="lg"
                >
                  Add Your First Marker
                </Button>
              </div>
            ) : (
              <div className="marker-list">
                {markers.map((marker, index) => (
                  <div
                    key={marker.id}
                    className="marker-card"
                  >
                    <div className="d-flex align-items-start justify-content-between">
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center mb-2">
                          <span className="marker-card-title">
                            {index + 1}. {marker.label || '(Unlabeled)'}
                          </span>
                          <Badge
                            variant={getTypeBadgeVariant(marker.type)}
                            className="marker-type-badge"
                          >
                            {marker.type}
                          </Badge>
                        </div>

                        {marker.commentary && (
                          <div className="marker-commentary-preview">
                            "{truncate(marker.commentary, 120)}"
                          </div>
                        )}

                        <div className="marker-position-info">
                          Position: ({marker.x.toFixed(1)}%, {marker.y.toFixed(1)}%)
                        </div>
                      </div>

                      <div className="d-flex gap-2 marker-actions">
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() => handleEditMarker(index)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() => handleDeleteMarker(index)}
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
          </Card.Section>
        </Card>
      )}
    </div>
  );
};
