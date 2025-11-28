/**
 * Droppable Description Component
 *
 * A description box that accepts dragged terms from the left column.
 * Shows the matched term and visual feedback for correct/incorrect matches.
 */

import React from 'react';
import { useDrop } from 'react-dnd';
import { ITEM_TYPE } from './DraggableTerm';

interface DroppableDescriptionProps {
  id: string;
  description: string;
  matchedTerm?: string;
  isCorrect?: boolean;
  onDrop: (termId: string, descriptionId: string) => void;
  disabled?: boolean;
}

export const DroppableDescription: React.FC<DroppableDescriptionProps> = ({
  id,
  description,
  matchedTerm,
  isCorrect,
  onDrop,
  disabled
}) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item: { id: string; term: string }) => {
      if (!disabled) {
        onDrop(item.id, id);
      }
    },
    canDrop: () => !disabled,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }), [id, onDrop, disabled]);

  // Determine CSS classes based on state
  const getClassName = () => {
    const classes = ['droppable-description'];

    if (isOver && canDrop) {
      classes.push('hover');
    }

    if (matchedTerm) {
      classes.push('has-match');
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
      ref={drop}
      className={getClassName()}
      data-id={id}
      data-type="description"
      style={{
        backgroundColor: isOver && canDrop ? '#e3f2fd' : undefined
      }}
    >
      <div className="description-content">
        {description}
      </div>
      {matchedTerm && (
        <div className="matched-term">
          <span className="term-label">{matchedTerm}</span>
          {isCorrect !== undefined && (
            <span className="match-indicator">
              {isCorrect ? '✓' : '✗'}
            </span>
          )}
        </div>
      )}
      {!matchedTerm && (
        <div className="drop-hint">
          Drop term here
        </div>
      )}
    </div>
  );
};
