/**
 * ListView Component
 *
 * Displays list of all tabs with actions:
 * - Edit - Opens tab editor
 * - Delete - Removes tab
 * - Move Up/Down - Changes tab order
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Add from '@openedx/paragon/icons/es5/Add';
import Edit from '@openedx/paragon/icons/es5/Edit';
import Delete from '@openedx/paragon/icons/es5/Delete';
import DragIndicator from '@openedx/paragon/icons/es5/DragIndicator';

/**
 * Single tab structure
 */
interface Tab {
  label: string;
  content: string;
}

/**
 * Props for ListView
 */
interface ListViewProps {
  tabs: Tab[];
  onAddTab: () => void;
  onEditTab: (index: number) => void;
  onDeleteTab: (index: number) => void;
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
  tabs,
  onAddTab,
  onEditTab,
  onDeleteTab,
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
    <div className="tabs-list-view">
      {/* Header with tab counter and Add button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Tabs ({tabs.length} / 5)</h3>
        <Button
          variant="primary"
          iconBefore={Add}
          onClick={onAddTab}
          disabled={tabs.length >= 5}
        >
          Add New Tab
        </Button>
      </div>

      {/* Empty state */}
      {tabs.length === 0 && (
        <div className="text-center p-5 bg-light rounded">
          <p className="mb-3">No tabs yet. Click "Add New Tab" to create your first tab.</p>
        </div>
      )}

      {/* Tab list */}
      <div className="card-list">
        {tabs.map((tab, index) => (
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

            {/* Tab content */}
            <div className="card-content">
              <div className="card-main">
                <span className="card-label">Tab {index + 1}:</span>
                <span className="card-title">{tab.label || '(Untitled)'}</span>
              </div>
              <div className="card-back-preview">
                {truncate(stripHtml(tab.content), 120)}
              </div>
            </div>

            {/* Action buttons */}
            <div className="card-actions">
              <Button
                variant="link"
                onClick={() => onEditTab(index)}
                size="sm"
              >
                Edit
              </Button>
              <Button
                variant="link"
                onClick={() => onDeleteTab(index)}
                disabled={tabs.length === 1}
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
