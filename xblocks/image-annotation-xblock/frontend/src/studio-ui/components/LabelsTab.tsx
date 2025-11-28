/**
 * LabelsTab - Label Management Interface
 *
 * Provides interface for managing draggable labels:
 * - List view of all labels
 * - Add new labels
 * - Edit existing labels
 * - Delete labels
 * - Configure label properties (text, position, dimensions)
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import DataTable from '@openedx/paragon/dist/DataTable';
import { StandardModal } from '@openedx/paragon';
import IconButton from '@openedx/paragon/dist/IconButton';
import { Edit, DeleteOutline } from '@openedx/paragon/icons';
import type { LabelDefinition, LabelType } from '../../common/types';

// Default values for label positioning and dimensions
const DEFAULT_LABEL_WIDTH = 60;      // pixels (for normal type)
const DEFAULT_LABEL_HEIGHT = 40;     // pixels (for normal type)
const DOT_SIZE = 12;                 // pixels (dot diameter)
const CROSS_SIZE = 20;               // pixels (cross width/height)
const TEXT_BOX_WIDTH = 80;           // pixels (for dot/cross floating text)
const TEXT_BOX_HEIGHT = 30;          // pixels (for dot/cross floating text)
const LABEL_BANK_START_X = 10;       // percentage (10% from left)
const LABEL_BANK_START_Y = 10;       // percentage (10% from top)
const LABEL_SPACING = 5;             // percentage (vertical spacing between labels)

export interface LabelsTabProps {
  labels: LabelDefinition[];
  onLabelsChange: (labels: LabelDefinition[]) => void;
}

export const LabelsTab: React.FC<LabelsTabProps> = ({
  labels,
  onLabelsChange,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [editingLabel, setEditingLabel] = useState<LabelDefinition | null>(null);
  const [editingIndex, setEditingIndex] = useState<number>(-1);

  // Form state for label editor
  const [labelText, setLabelText] = useState('');
  const [labelType, setLabelType] = useState<LabelType>('normal');

  /**
   * Open modal to add new label
   */
  const handleAddLabel = () => {
    setEditingLabel(null);
    setEditingIndex(-1);
    setLabelText('');
    setLabelType('normal');
    setShowModal(true);
  };

  /**
   * Open modal to edit existing label
   */
  const handleEditLabel = (index: number) => {
    const label = labels[index];
    setEditingLabel(label);
    setEditingIndex(index);
    setLabelText(label.label);
    setLabelType(label.type || 'normal'); // Default to 'normal' for backward compatibility
    setShowModal(true);
  };

  /**
   * Save label (add or update)
   */
  const handleSaveLabel = () => {
    if (!labelText.trim()) {
      alert('Label text is required');
      return;
    }

    // Calculate dimensions based on label type
    let width, height;
    if (editingLabel?.type === labelType) {
      // Keep existing dimensions if type hasn't changed
      width = editingLabel.width;
      height = editingLabel.height;
    } else {
      // Set dimensions based on new type
      switch (labelType) {
        case 'dot':
          // Bounding box includes dot + text box to northeast
          width = DOT_SIZE + TEXT_BOX_WIDTH;
          height = DOT_SIZE + TEXT_BOX_HEIGHT;
          break;
        case 'cross':
          // Bounding box includes cross + text box to northeast
          width = CROSS_SIZE + TEXT_BOX_WIDTH;
          height = CROSS_SIZE + TEXT_BOX_HEIGHT;
          break;
        case 'normal':
        default:
          width = DEFAULT_LABEL_WIDTH;
          height = DEFAULT_LABEL_HEIGHT;
          break;
      }
    }

    const newLabel: LabelDefinition = {
      id: editingLabel?.id || `label_${Date.now()}`,
      label: labelText,
      type: labelType,
      // Auto-calculate start position (or use existing if editing)
      startX: editingLabel?.startX ?? LABEL_BANK_START_X,
      startY: editingLabel?.startY ?? (LABEL_BANK_START_Y + (labels.length * LABEL_SPACING)),
      // Dimensions based on type
      width,
      height,
    };

    let newLabels: LabelDefinition[];
    if (editingIndex >= 0) {
      // Update existing label
      newLabels = [...labels];
      newLabels[editingIndex] = newLabel;
    } else {
      // Add new label
      newLabels = [...labels, newLabel];
    }

    onLabelsChange(newLabels);
    setShowModal(false);
  };

  /**
   * Delete label with confirmation
   */
  const handleDeleteLabel = (index: number) => {
    const label = labels[index];
    if (confirm(`Are you sure you want to delete label "${label.label}"?`)) {
      const newLabels = labels.filter((_, i) => i !== index);
      onLabelsChange(newLabels);
    }
  };

  /**
   * Close modal without saving
   */
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="labels-tab">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Labels ({labels.length})</h4>
        <Button variant="primary" onClick={handleAddLabel}>
          Add Label
        </Button>
      </div>

      {labels.length === 0 ? (
        <div className="alert alert-info">
          No labels configured. Click "Add Label" to create your first draggable label.
        </div>
      ) : (
        <DataTable
          data={labels.map((label, index) => ({
            ...label,
            index,
          }))}
          columns={[
            {
              Header: 'ID',
              accessor: 'id',
            },
            {
              Header: 'Label Text',
              accessor: 'label',
            },
            {
              Header: 'Actions',
              accessor: 'actions',
              Cell: ({ row }: any) => (
                <div className="d-flex gap-2">
                  <IconButton
                    src={Edit}
                    iconAs="svg"
                    alt="Edit"
                    onClick={() => handleEditLabel(row.original.index)}
                    size="sm"
                  />
                  <IconButton
                    src={DeleteOutline}
                    iconAs="svg"
                    alt="Delete"
                    onClick={() => handleDeleteLabel(row.original.index)}
                    variant="danger"
                    size="sm"
                  />
                </div>
              ),
            },
          ]}
        />
      )}

      {/* Label Editor Modal */}
      <StandardModal
        title={editingLabel ? 'Edit Label' : 'Add Label'}
        isOpen={showModal}
        onClose={handleCloseModal}
        size="lg"
        footerNode={
          <>
            <Button variant="tertiary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSaveLabel}>
              {editingLabel ? 'Update Label' : 'Add Label'}
            </Button>
          </>
        }
      >
        <Form.Group className="mb-3">
          <Form.Label>Label Type</Form.Label>
          <div className="d-flex gap-3">
            <Form.Check
              type="radio"
              id="type-normal"
              name="labelType"
              label="Normal Badge"
              checked={labelType === 'normal'}
              onChange={() => setLabelType('normal')}
            />
            <Form.Check
              type="radio"
              id="type-dot"
              name="labelType"
              label="Dot Marker"
              checked={labelType === 'dot'}
              onChange={() => setLabelType('dot')}
            />
            <Form.Check
              type="radio"
              id="type-cross"
              name="labelType"
              label="Cross (X)"
              checked={labelType === 'cross'}
              onChange={() => setLabelType('cross')}
            />
          </div>
          <Form.Text>
            Normal: Circular badge with text inside.
            Dot/Cross: Small marker with text floating to the northeast.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Label Text</Form.Label>
          <Form.Control
            type="text"
            value={labelText}
            onChange={(e) => setLabelText(e.target.value)}
            placeholder="e.g., A, B, C or Heart, Lungs, etc."
          />
          <Form.Text>The text displayed on the draggable label. Position will be managed visually in the Zones tab.</Form.Text>
        </Form.Group>
      </StandardModal>
    </div>
  );
};
