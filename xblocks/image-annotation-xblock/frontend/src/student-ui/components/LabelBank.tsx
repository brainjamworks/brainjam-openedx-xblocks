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

  // Group unplaced labels by type
  const groupedLabels = {
    normal: unplacedLabels.filter(label => (label.type || 'normal') === 'normal'),
    dot: unplacedLabels.filter(label => label.type === 'dot'),
    cross: unplacedLabels.filter(label => label.type === 'cross')
  };

  // Type display names
  const typeNames = {
    normal: 'Badges',
    dot: 'Dot Markers',
    cross: 'Cross Markers'
  };

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <div
      ref={drop}
      className={`label-bank ${isOver ? 'drag-over' : ''}`}
    >
      <div className="label-bank-header">
        <h4 className="label-bank-title">Available Labels</h4>
        <p className="label-bank-description">
          {unplacedLabels.length > 0
            ? 'Drag these labels onto the image'
            : 'Drop labels here to remove from zones'}
        </p>
      </div>

      <div className="label-bank-items">
        {unplacedLabels.length > 0 ? (
          <>
            {/* Render each group that has labels */}
            {(['normal', 'dot', 'cross'] as const).map(type => {
              const typeLabels = groupedLabels[type];
              if (typeLabels.length === 0) return null;

              return (
                <div key={type} className="label-group">
                  <div className="group-header">{typeNames[type]}</div>
                  <div className="group-items">
                    {typeLabels.map(label => (
                      <div key={label.id} style={{ position: 'relative', width: `${label.width}px`, height: `${label.height}px`, overflow: 'visible' }}>
                        <DraggableLabel
                          label={label}
                          placement={undefined}
                          disabled={disabled}
                          scale={1}  // Don't scale labels in bank
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="label-bank-empty">
            All labels placed on image
          </div>
        )}
      </div>
    </div>
  );
};

export default LabelBank;
