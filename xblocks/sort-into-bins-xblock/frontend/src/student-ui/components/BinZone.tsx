import React from 'react';
import { useDrop } from 'react-dnd';
import type {
  BinDefinition,
  SortableItem,
  BinCapacityStatus,
  DragItem,
  SubmissionResult,
} from '../../common/types';
import { DraggableItem } from './DraggableItem';

interface BinZoneProps {
  bin: BinDefinition;
  items: SortableItem[];
  allItems: SortableItem[];
  capacity: BinCapacityStatus;
  onItemPlacement: (itemId: string, binId: string | null) => void;
  itemCorrectness: Record<string, boolean | undefined>;
  showAnswer: boolean;
  correctAnswers: Record<string, string> | null;
  disabled?: boolean;
}

export const BinZone: React.FC<BinZoneProps> = ({
  bin,
  items,
  allItems,
  capacity,
  onItemPlacement,
  itemCorrectness,
  showAnswer,
  correctAnswers,
  disabled = false,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop<
    DragItem,
    unknown,
    { isOver: boolean; canDrop: boolean }
  >(() => ({
    accept: 'SORTABLE_ITEM',
    drop: (draggedItem: DragItem) => {
      if (!disabled) {
        onItemPlacement(draggedItem.item.id, bin.id);
      }
    },
    canDrop: () => !capacity.isFull && !disabled,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }), [disabled, capacity.isFull, onItemPlacement, bin.id]);

  const getBinClassName = () => {
    const classes = ['bin-zone'];

    if (isOver && canDrop) classes.push('bin-drag-over');
    if (isOver && !canDrop) classes.push('bin-drag-over-full');
    if (capacity.isFull) classes.push('bin-full');
    if (capacity.isNearFull) classes.push('bin-near-full');

    return classes.join(' ');
  };

  const getCapacityText = () => {
    if (capacity.max === 0) return 'Unlimited';
    return `${capacity.current} / ${capacity.max}`;
  };

  return (
    <div ref={drop} className={getBinClassName()}>
      {/* Bin header */}
      <div className="bin-header">
        <h4 className="bin-label">{bin.label}</h4>
        {bin.description && (
          <p className="bin-description">{bin.description}</p>
        )}
      </div>

      {/* Items in bin */}
      <div className="bin-items">
        {items.length === 0 ? (
          <div className="bin-empty-state">
            {isOver && canDrop ? 'Drop here' : 'Drag items here'}
          </div>
        ) : (
          items.map((item) => {
            // Get correctness for this item (tri-state: undefined, true, false)
            const isCorrect = itemCorrectness[item.id];

            return (
              <DraggableItem
                key={item.id}
                item={item}
                onRemove={() => onItemPlacement(item.id, null)}
                showRemoveButton={!disabled}
                isCorrect={isCorrect}
                disabled={disabled}
              />
            );
          })
        )}
      </div>

      {/* Show Answer indicator */}
      {showAnswer && correctAnswers && (
        <div className="bin-answer-indicator">
          <strong>Correct answers:</strong>
          {Object.entries(correctAnswers)
            .filter(([_, correctBinId]) => correctBinId === bin.id)
            .map(([itemId]) => {
              const item = allItems.find((i) => i.id === itemId);
              return item ? (
                <div key={itemId} className="answer-item-label">
                  {item.type === 'text' ? item.content : `Item ${itemId}`}
                </div>
              ) : null;
            })}
        </div>
      )}
    </div>
  );
};
