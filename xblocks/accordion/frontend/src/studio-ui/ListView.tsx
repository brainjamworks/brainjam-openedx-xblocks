/**
 * ListView Component
 *
 * Displays list of all sections with actions:
 * - Edit - Opens section editor
 * - Delete - Removes section
 * - Move Up/Down - Changes section order
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Add from '@openedx/paragon/icons/es5/Add';
import Edit from '@openedx/paragon/icons/es5/Edit';
import Delete from '@openedx/paragon/icons/es5/Delete';
import DragIndicator from '@openedx/paragon/icons/es5/DragIndicator';

/**
 * Single section structure
 */
interface Section {
  title: string;
  content: string;
}

/**
 * Props for ListView
 */
interface ListViewProps {
  sections: Section[];
  onAddSection: () => void;
  onEditSection: (index: number) => void;
  onDeleteSection: (index: number) => void;
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
  sections,
  onAddSection,
  onEditSection,
  onDeleteSection,
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
    <div className="accordion-list-view">
      {/* Header with section counter and Add button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Sections ({sections.length} / 10)</h3>
        <Button
          variant="primary"
          iconBefore={Add}
          onClick={onAddSection}
          disabled={sections.length >= 10}
        >
          Add New Section
        </Button>
      </div>

      {/* Empty state */}
      {sections.length === 0 && (
        <div className="text-center p-5 bg-light rounded">
          <p className="mb-3">No sections yet. Click "Add New Section" to create your first section.</p>
        </div>
      )}

      {/* Section list */}
      <div className="card-list">
        {sections.map((section, index) => (
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

            {/* Section content */}
            <div className="card-content">
              <div className="card-main">
                <span className="card-label">Section {index + 1}:</span>
                <span className="card-title">{section.title || '(Untitled)'}</span>
              </div>
              <div className="card-back-preview">
                {truncate(stripHtml(section.content), 120)}
              </div>
            </div>

            {/* Action buttons */}
            <div className="card-actions">
              <Button
                variant="link"
                onClick={() => onEditSection(index)}
                size="sm"
              >
                Edit
              </Button>
              <Button
                variant="link"
                onClick={() => onDeleteSection(index)}
                disabled={sections.length === 1}
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
