import React from 'react';
import type { SortableItem } from '../../common/types';
import { DraggableItem } from './DraggableItem';

interface ItemsSourceZoneProps {
  items: SortableItem[];
  onItemPlacement: (itemId: string, binId: string | null) => void;
}

export const ItemsSourceZone: React.FC<ItemsSourceZoneProps> = ({
  items,
  onItemPlacement,
}) => {
  if (items.length === 0) {
    return null; // Don't show source zone when all items are placed
  }

  return (
    <div className="items-source-zone">
      <div className="source-header">
        <h4 className="source-label">Items to Sort</h4>
        <p className="source-description">
          Drag these items into the appropriate categories
        </p>
      </div>

      <div className="source-items">
        {items.map((item) => (
          <DraggableItem
            key={item.id}
            item={item}
            showRemoveButton={false}
          />
        ))}
      </div>
    </div>
  );
};
