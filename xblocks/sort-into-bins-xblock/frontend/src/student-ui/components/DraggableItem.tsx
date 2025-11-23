import React from 'react';
import { useDrag } from 'react-dnd';
import type { DragItem, SortableItem } from '../../common/types';

interface DraggableItemProps {
  item: SortableItem;
  onRemove?: () => void; // For removing from bin
  showRemoveButton?: boolean;
  isCorrect?: boolean; // Tri-state: undefined (no feedback), true (correct), false (incorrect)
  disabled?: boolean;
}

export const DraggableItem: React.FC<DraggableItemProps> = ({
  item,
  onRemove,
  showRemoveButton = false,
  isCorrect,
  disabled = false,
}) => {
  const [{ isDragging }, drag] = useDrag<DragItem, unknown, { isDragging: boolean }>(() => ({
    type: 'SORTABLE_ITEM',
    item: { id: item.id, type: 'SORTABLE_ITEM', item },
    canDrag: !disabled,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [item, disabled]);

  const renderItemContent = () => {
    switch (item.type) {
      case 'text':
        return <span className="item-text-content">{item.content}</span>;

      case 'image':
        return (
          <img
            src={item.content}
            alt="Sortable item"
            className="item-image-content"
          />
        );

      case 'html':
        return (
          <div
            className="item-html-content"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        );

      default:
        return <span>{item.content}</span>;
    }
  };

  const getItemClassName = () => {
    const classes = ['draggable-item', `item-type-${item.type}`];

    if (isDragging) classes.push('dragging');
    if (disabled) classes.push('disabled');

    // Tri-state correctness: undefined (no feedback), true (correct), false (incorrect)
    if (isCorrect === true) classes.push('item-correct');
    if (isCorrect === false) classes.push('item-incorrect');

    return classes.join(' ');
  };

  return (
    <div
      ref={drag}
      className={getItemClassName()}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'move'
      }}
    >
      <div className="item-content">
        {renderItemContent()}
      </div>

      {showRemoveButton && onRemove && (
        <button
          type="button"
          className="item-remove-button"
          onClick={onRemove}
          aria-label="Remove item from bin"
        >
          ×
        </button>
      )}

      {/* Show feedback icons only when isCorrect is not undefined */}
      {isCorrect === true && (
        <span className="item-feedback-icon correct-icon" aria-label="Correct">✓</span>
      )}

      {isCorrect === false && (
        <span className="item-feedback-icon incorrect-icon" aria-label="Incorrect">✗</span>
      )}
    </div>
  );
};
