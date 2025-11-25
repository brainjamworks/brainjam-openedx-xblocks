/**
 * BinsList Component
 *
 * Inline editor for managing bins with add/edit/delete/reorder functionality.
 * Displays bins as collapsible cards with edit-in-place capability.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Icon from '@openedx/paragon/dist/Icon';
import { Add, Delete, DragIndicator } from '@openedx/paragon/icons';
import type { BinDefinition } from '../../common/types';

interface BinsListProps {
  bins: BinDefinition[];
  onAdd: () => void;
  onEdit: (index: number, updatedBin: BinDefinition) => void;
  onDelete: (index: number) => void;
  onReorder: (fromIndex: number, toIndex: number) => void;
}

interface BinItemProps {
  bin: BinDefinition;
  index: number;
  onEdit: (updatedBin: BinDefinition) => void;
  onDelete: () => void;
}

/**
 * Individual Bin Item with inline editing
 */
const BinItem: React.FC<BinItemProps> = ({ bin, index, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [label, setLabel] = useState(bin.label);
  const [description, setDescription] = useState(bin.description);
  const [maxCapacity, setMaxCapacity] = useState(bin.max_capacity);

  const handleSave = () => {
    onEdit({
      id: bin.id,
      label,
      description,
      max_capacity: maxCapacity,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setLabel(bin.label);
    setDescription(bin.description);
    setMaxCapacity(bin.max_capacity);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bin-item editing">
        <div className="bin-item-header">
          <Icon src={DragIndicator} className="drag-handle" />
          <span className="bin-number">Bin {index + 1}</span>
        </div>

        <div className="bin-item-form">
          {/* Label */}
          <Form.Group className="mb-3">
            <Form.Label>Label *</Form.Label>
            <Form.Control
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g., Category A"
              autoFocus
            />
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional description for this bin"
            />
          </Form.Group>

          {/* Max Capacity */}
          <Form.Group className="mb-3">
            <Form.Label>Maximum Capacity</Form.Label>
            <Form.Control
              type="number"
              min={0}
              value={maxCapacity}
              onChange={(e) => setMaxCapacity(parseInt(e.target.value) || 0)}
            />
            <Form.Text>Maximum items allowed (0 = unlimited)</Form.Text>
          </Form.Group>

          {/* Actions */}
          <div className="bin-item-actions">
            <Button variant="link" size="sm" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bin-item">
      <div className="bin-item-header">
        <Icon src={DragIndicator} className="drag-handle" />
        <div className="bin-item-info">
          <strong className="bin-label">{bin.label}</strong>
          {bin.description && (
            <span className="bin-description">{bin.description}</span>
          )}
          <span className="bin-capacity">
            Capacity: {bin.max_capacity === 0 ? 'Unlimited' : bin.max_capacity}
          </span>
        </div>
      </div>

      <div className="bin-item-actions">
        <Button
          variant="link"
          size="sm"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
        <Button
          variant="link"
          size="sm"
          onClick={onDelete}
          iconBefore={Delete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

/**
 * Main BinsList Component
 */
export const BinsList: React.FC<BinsListProps> = ({
  bins,
  onAdd,
  onEdit,
  onDelete,
  onReorder,
}) => {
  return (
    <div className="bins-list">
      {bins.length === 0 ? (
        <div className="empty-state">
          <p>No bins yet. Add your first bin to get started.</p>
        </div>
      ) : (
        <div className="bins-list-items">
          {bins.map((bin, index) => (
            <BinItem
              key={bin.id}
              bin={bin}
              index={index}
              onEdit={(updatedBin) => onEdit(index, updatedBin)}
              onDelete={() => onDelete(index)}
            />
          ))}
        </div>
      )}

      <Button
        variant="outline-primary"
        size="sm"
        onClick={onAdd}
        iconBefore={Add}
        className="mt-3"
      >
        Add Bin
      </Button>
    </div>
  );
};
