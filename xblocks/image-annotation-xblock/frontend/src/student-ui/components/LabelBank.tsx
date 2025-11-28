/**
 * Label Bank Component
 *
 * Displays unplaced labels that can be dragged onto the image.
 * Labels return here when removed from zones or when drop fails.
 *
 * Features:
 * - Shows only labels not currently in zones
 * - Drop target to remove labels from zones
 * - Visual feedback on hover
 * - Hides when all labels are placed
 */

import React from 'react';
import { useDrop } from 'react-dnd';
import type { LabelDefinition, LabelPlacements } from '../../common/types';
import { DraggableLabel, ITEM_TYPE } from './DraggableLabel';

interface LabelBankProps {
  labels: LabelDefinition[];
  placements: LabelPlacements;
  onLabelRemove: (labelId: string) => void;
  disabled: boolean;
}

/**
 * Label Bank Component
 */
export const LabelBank: React.FC<LabelBankProps> = ({
  labels,
  placements,
  onLabelRemove,
  disabled
}) => {
  // =======================================================================
  // DRAG AND DROP - Bank as drop target
  // =======================================================================

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item: { labelId: string }) => {
      // Remove label from its zone (return to bank)
      onLabelRemove(item.labelId);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }), [onLabelRemove]);

  // =======================================================================
  // COMPUTED VALUES
  // =======================================================================

  // Get labels that are NOT currently placed in zones
  const unplacedLabels = labels.filter(label => !placements[label.id]?.inZone);

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <div
      ref={drop}
      className={`label-bank ${isOver ? 'drag-over' : ''}`}
      style={{
        padding: '16px',
        marginBottom: '24px',
        backgroundColor: isOver ? '#e3f2fd' : '#f5f5f5',
        border: '2px dashed #ccc',
        borderRadius: '8px',
        minHeight: '80px',
        transition: 'background-color 0.2s ease'
      }}
    >
      <div className="label-bank-header">
        <strong style={{ fontSize: '14px', color: '#333' }}>
          Available Labels
        </strong>
        <p style={{ fontSize: '12px', color: '#666', margin: '4px 0 0 0' }}>
          {unplacedLabels.length > 0
            ? 'Drag these labels onto the image'
            : 'Drop labels here to remove from zones'}
        </p>
      </div>

      <div
        className="label-bank-items"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '12px'
        }}
      >
        {unplacedLabels.length > 0 ? (
          unplacedLabels.map(label => (
            <div key={label.id} style={{ position: 'relative', width: `${label.width}px`, height: `${label.height}px` }}>
              <DraggableLabel
                label={label}
                placement={undefined}
                disabled={disabled}
                scale={1}  // Don't scale labels in bank
              />
            </div>
          ))
        ) : (
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              padding: '20px',
              color: '#999',
              fontStyle: 'italic',
              fontSize: '14px'
            }}
          >
            All labels placed on image
          </div>
        )}
      </div>
    </div>
  );
};

export default LabelBank;
