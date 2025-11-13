/**
 * Draggable Term Component
 *
 * A term that can be dragged from the left column to a description on the right.
 * Shows visual feedback for matched/correct/incorrect states.
 */

import React from 'react';
import { useDrag } from 'react-dnd';

const ITEM_TYPE = 'TERM';

interface DraggableTermProps {
  id: string;
  term: string;
  isMatched: boolean;
  isCorrect?: boolean;
  disabled?: boolean;
}

export const DraggableTerm: React.FC<DraggableTermProps> = ({
  id,
  term,
  isMatched,
  isCorrect,
  disabled
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { id, term },
    canDrag: !disabled,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }), [id, term, disabled]);

  // Determine CSS classes based on state
  const getClassName = () => {
    const classes = ['draggable-term'];

    if (isDragging) {
      classes.push('dragging');
    }

    if (isMatched) {
      classes.push('matched');
      if (isCorrect !== undefined) {
        classes.push(isCorrect ? 'correct' : 'incorrect');
      }
    }

    if (disabled) {
      classes.push('disabled');
    }

    return classes.join(' ');
  };

  return (
    <div
      ref={drag}
      className={getClassName()}
      data-id={id}
      data-type="term"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'grab'
      }}
    >
      <div className="term-content">
        {term}
      </div>
      {isMatched && (
        <div className="match-indicator">
          {isCorrect ? '✓' : '✗'}
        </div>
      )}
    </div>
  );
};

export { ITEM_TYPE };
