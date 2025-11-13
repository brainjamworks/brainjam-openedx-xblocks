/**
 * ListView Component
 *
 * Displays list of all flashcards with actions:
 * - Edit - Opens card editor
 * - Delete - Removes card
 * - Move Up/Down - Changes card order
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Add from '@openedx/paragon/icons/es5/Add';
import Edit from '@openedx/paragon/icons/es5/Edit';
import Delete from '@openedx/paragon/icons/es5/Delete';
import DragIndicator from '@openedx/paragon/icons/es5/DragIndicator';

/**
 * Single flashcard structure
 */
interface FlashCard {
  front_title: string;
  front_subtitle: string;
  back_text: string;
}

/**
 * Props for ListView
 */
interface ListViewProps {
  cards: FlashCard[];
  onAddCard: () => void;
  onEditCard: (index: number) => void;
  onDeleteCard: (index: number) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  onReorder: (fromIndex: number, toIndex: number) => void;
}

/**
 * Truncate text for preview
 */
const truncate = (text: string, maxLength: number = 60): string => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Strip HTML tags for preview (simple version)
 */
const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, '');
};

/**
 * ListView component
 */
export const ListView: React.FC<ListViewProps> = ({
  cards,
  onAddCard,
  onEditCard,
  onDeleteCard,
  onMoveUp,
  onMoveDown,
  onReorder
}) => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault(); // Required to allow drop
    setDragOverIndex(index);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();

    if (draggedIndex !== null && draggedIndex !== dropIndex) {
      onReorder(draggedIndex, dropIndex);
    }

    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="flashcards-list-view">
      {/* Header with card counter and Add button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Flashcards ({cards.length} / 100)</h3>
        <Button
          variant="primary"
          iconBefore={Add}
          onClick={onAddCard}
          disabled={cards.length >= 100}
        >
          Add New Card
        </Button>
      </div>

      {/* Empty state */}
      {cards.length === 0 && (
        <div className="text-center p-5 bg-light rounded">
          <p className="mb-3">No flashcards yet. Click "Add New Card" to create your first card.</p>
        </div>
      )}

      {/* Card list */}
      <div className="card-list">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card-list-item ${draggedIndex === index ? 'dragging' : ''} ${dragOverIndex === index ? 'drag-over' : ''}`}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
          >
            {/* Drag handle */}
            <div className="card-drag-handle">
              <DragIndicator />
            </div>

            {/* Card content */}
            <div className="card-content">
              <div className="card-main">
                <span className="card-label">Card {index + 1}:</span>
                <span className="card-title">{card.front_title || '(Untitled)'}</span>
              </div>
              {card.front_subtitle && (
                <div className="card-subtitle">
                  {truncate(card.front_subtitle, 100)}
                </div>
              )}
              <div className="card-back-preview">
                {truncate(stripHtml(card.back_text), 120)}
              </div>
            </div>

            {/* Action buttons */}
            <div className="card-actions">
              <Button
                variant="link"
                onClick={() => onEditCard(index)}
                size="sm"
              >
                Edit
              </Button>
              <Button
                variant="link"
                onClick={() => onDeleteCard(index)}
                disabled={cards.length === 1}
                size="sm"
                className="text-danger"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
