/**
 * LabelItem Component
 *
 * Display component for a single label in the list view.
 * Shows label properties with edit/delete actions.
 *
 * Pattern: Paragon list item with action buttons
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import { Icon } from '@openedx/paragon/icons';
import { Edit, Delete } from '@openedx/paragon/icons';
import type { LabelDefinition } from '../../common/types';

interface LabelItemProps {
  label: LabelDefinition;
  onEdit: (labelId: string) => void;
  onDelete: (labelId: string) => void;
}

export const LabelItem: React.FC<LabelItemProps> = ({
  label,
  onEdit,
  onDelete,
}) => {
  // Format label type for display
  const typeDisplay = {
    'normal': 'Badge',
    'dot': 'Dot Marker',
    'cross': 'Cross Marker',
  }[label.type] || label.type;

  return (
    <div className="label-item border rounded p-3 mb-2 d-flex justify-content-between align-items-center">
      <div className="label-item-info flex-grow-1">
        <div className="d-flex align-items-center mb-1">
          <strong className="mr-2">"{label.label}"</strong>
          <span className="badge badge-secondary">{typeDisplay}</span>
        </div>
        <div className="text-muted small">
          <span className="mr-3">ID: {label.id}</span>
          <span className="mr-3">Size: {label.width}×{label.height}px</span>
          <span>Position: ({label.startX}, {label.startY})</span>
        </div>
      </div>

      <div className="label-item-actions d-flex gap-2">
        <Button
          variant="link"
          size="sm"
          onClick={() => onEdit(label.id)}
          iconBefore={Edit}
        >
          Edit
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => onDelete(label.id)}
          iconBefore={Delete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
