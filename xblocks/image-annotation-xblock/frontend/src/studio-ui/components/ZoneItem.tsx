/**
 * ZoneItem Component
 *
 * Display component for a single drop zone in the list view.
 * Shows zone properties with edit/delete actions.
 *
 * Pattern: Paragon list item with action buttons
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import { Edit, Delete } from '@openedx/paragon/icons';
import type { DropZone } from '../../common/types';

interface ZoneItemProps {
  zone: DropZone;
  onEdit: (zoneId: string) => void;
  onDelete: (zoneId: string) => void;
}

export const ZoneItem: React.FC<ZoneItemProps> = ({
  zone,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="zone-item border rounded p-3 mb-2 d-flex justify-content-between align-items-center">
      <div className="zone-item-info flex-grow-1">
        <div className="d-flex align-items-center mb-1">
          <strong className="mr-2">"{zone.description}"</strong>
          <span className="badge badge-primary">Correct Answer: {zone.correctAnswer}</span>
        </div>
        <div className="text-muted small">
          <span className="mr-3">ID: {zone.id}</span>
          <span className="mr-3">Position: ({zone.x}, {zone.y})</span>
          <span>Radius: {zone.radius}px</span>
        </div>
      </div>

      <div className="zone-item-actions d-flex gap-2">
        <Button
          variant="link"
          size="sm"
          onClick={() => onEdit(zone.id)}
          iconBefore={Edit}
        >
          Edit
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => onDelete(zone.id)}
          iconBefore={Delete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
