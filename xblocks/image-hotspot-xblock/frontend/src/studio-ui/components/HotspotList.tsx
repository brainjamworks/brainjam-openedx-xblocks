/**
 * HotspotList Component
 *
 * DraggableList wrapper for managing hotspots with drag-drop reordering.
 * Shows list of hotspots with edit/delete actions.
 *
 * Pattern: Based on BinsList/ItemsList from sort-into-bins
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import ActionRow from '@openedx/paragon/dist/ActionRow';
import DraggableList from '../../generic/DraggableList';
import SortableItem from '../../generic/DraggableList/SortableItem';
import { HotspotItem } from './HotspotItem';
import type { Hotspot } from '../../common/types';

interface HotspotListProps {
  hotspots: Hotspot[];
  onEditHotspot: (index: number) => void;
  onDeleteHotspot: (index: number) => void;
  onReorder: (newHotspots: Hotspot[]) => void;
}

export const HotspotList: React.FC<HotspotListProps> = ({
  hotspots,
  onEditHotspot,
  onDeleteHotspot,
  onReorder,
}) => {
  // Safety check - don't render if hotspots is undefined or empty
  if (!hotspots || !Array.isArray(hotspots) || hotspots.length === 0) {
    return null;
  }

  return (
    <DraggableList
      itemList={hotspots}
      setState={onReorder}
      updateOrder={() => onReorder}
    >
      {hotspots.map((hotspot, index) => (
        <SortableItem
          key={hotspot.id}
          id={hotspot.id}
          actions={
            <>
              <span className="font-weight-bold">Hotspot {index + 1}</span>
              <ActionRow.Spacer />
              <Button variant="link" onClick={() => onEditHotspot(index)} size="sm">
                Edit
              </Button>
              <Button
                variant="link"
                onClick={() => onDeleteHotspot(index)}
                disabled={hotspots.length === 1}
                size="sm"
                className="text-danger"
              >
                Delete
              </Button>
            </>
          }
          actionStyle={{
            borderRadius: '8px 8px 0 0',
            padding: '0.5rem 1rem',
            background: '#FBFAF9',
            borderBottom: 'solid 1px #E1DDDB',
          }}
          componentStyle={{ marginBottom: '1rem' }}
        >
          <HotspotItem hotspot={hotspot} index={index} />
        </SortableItem>
      ))}
    </DraggableList>
  );
};
