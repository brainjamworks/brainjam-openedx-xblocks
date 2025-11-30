/**
 * ItemsList Component
 *
 * Inline editor for managing sortable items with add/edit/delete/reorder functionality.
 * Supports multiple content types: text, image, and HTML.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Icon from '@openedx/paragon/dist/Icon';
import { Add, Delete, DragIndicator, Edit } from '@openedx/paragon/icons';
import type { SortableItem, BinDefinition, ItemType } from '../../common/types';

interface ItemsListProps {
  items: SortableItem[];
  bins: BinDefinition[];
  onAdd: () => void;
  onEdit: (index: number, updatedItem: SortableItem) => void;
  onDelete: (index: number) => void;
  onReorder: (fromIndex: number, toIndex: number) => void;
}

interface ItemItemProps {
  item: SortableItem;
  index: number;
  bins: BinDefinition[];
  onEdit: (updatedItem: SortableItem) => void;
  onDelete: () => void;
}

/**
 * Individual Item with inline editing
 */
const ItemItem: React.FC<ItemItemProps> = ({ item, index, bins, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [type, setType] = useState<ItemType>(item.type);
  const [content, setContent] = useState(item.content);
  const [correctBinId, setCorrectBinId] = useState(item.correct_bin_id);

  const handleSave = () => {
    onEdit({
      id: item.id,
      type,
      content,
      correct_bin_id: correctBinId,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setType(item.type);
    setContent(item.content);
    setCorrectBinId(item.correct_bin_id);
    setIsEditing(false);
  };

  const getCorrectBinLabel = () => {
    const bin = bins.find(b => b.id === item.correct_bin_id);
    return bin?.label || 'Unknown Bin';
  };

  const renderContentPreview = () => {
    switch (item.type) {
      case 'text':
        return <span className="item-content-text">{item.content}</span>;
      case 'image':
        return (
          <div className="item-content-image">
            <img src={item.content} alt="Item" style={{ maxWidth: '100px', maxHeight: '50px' }} />
            <small className="text-muted">{item.content}</small>
          </div>
        );
      case 'html':
        return (
          <div className="item-content-html">
            <code>{item.content.substring(0, 100)}{item.content.length > 100 ? '...' : ''}</code>
          </div>
        );
      default:
        return <span>{item.content}</span>;
    }
  };

  if (isEditing) {
    return (
      <div className="item-item editing">
        <div className="item-item-header">
          <Icon src={DragIndicator} className="drag-handle" />
          <span className="item-number">Item {index + 1}</span>
        </div>

        <div className="item-item-form">
          {/* Type */}
          <Form.Group className="mb-3">
            <Form.Label>Type *</Form.Label>
            <Form.Control
              as="select"
              value={type}
              onChange={(e) => setType(e.target.value as ItemType)}
            >
              <option value="text">Text</option>
              <option value="image">Image URL</option>
              <option value="html">HTML</option>
            </Form.Control>
            <Form.Text>
              {type === 'text' && 'Plain text content'}
              {type === 'image' && 'URL to an image file'}
              {type === 'html' && 'HTML markup (supports styling)'}
            </Form.Text>
          </Form.Group>

          {/* Content */}
          <Form.Group className="mb-3">
            <Form.Label>Content *</Form.Label>
            {type === 'text' || type === 'image' ? (
              <Form.Control
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={
                  type === 'text'
                    ? 'Enter text content'
                    : 'Enter image URL (e.g., https://example.com/image.png)'
                }
                autoFocus
              />
            ) : (
              <Form.Control
                as="textarea"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="<p>Enter HTML content...</p>"
              />
            )}
          </Form.Group>

          {/* Correct Bin */}
          <Form.Group className="mb-3">
            <Form.Label>Correct Bin *</Form.Label>
            <Form.Control
              as="select"
              value={correctBinId}
              onChange={(e) => setCorrectBinId(e.target.value)}
            >
              {bins.map(bin => (
                <option key={bin.id} value={bin.id}>
                  {bin.label}
                </option>
              ))}
            </Form.Control>
            <Form.Text>The bin where this item should be placed</Form.Text>
          </Form.Group>

          {/* Actions */}
          <div className="item-item-actions">
            <Button variant="link" size="sm" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="item-item">
      <div className="item-item-header">
        <Icon src={DragIndicator} className="drag-handle" />
        <div className="item-item-info">
          <div className="item-meta">
            <strong className="item-label">Item {index + 1}</strong>
            <span className="item-type-badge">{item.type}</span>
            <span className="item-bin">→ {getCorrectBinLabel()}</span>
          </div>
          <div className="item-content-preview">
            {renderContentPreview()}
          </div>
        </div>
      </div>

      <div className="item-item-actions">
        <Button
          variant="link"
          size="sm"
          onClick={() => setIsEditing(true)}
          iconBefore={Edit}
        >
          Edit
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={onDelete}
          iconBefore={Delete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

/**
 * Main ItemsList Component
 */
export const ItemsList: React.FC<ItemsListProps> = ({
  items,
  bins,
  onAdd,
  onEdit,
  onDelete,
  onReorder,
}) => {
  if (bins.length === 0) {
    return (
      <div className="items-list">
        <div className="empty-state warning">
          <p>Please create at least one bin before adding items.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="items-list">
      {items.length === 0 ? (
        <div className="empty-state">
          <p>No items yet. Add your first item to get started.</p>
        </div>
      ) : (
        <div className="items-list-items">
          {items.map((item, index) => (
            <ItemItem
              key={item.id}
              item={item}
              index={index}
              bins={bins}
              onEdit={(updatedItem) => onEdit(index, updatedItem)}
              onDelete={() => onDelete(index)}
            />
          ))}
        </div>
      )}

      <Button
        variant="outline-primary"
        size="sm"
        onClick={onAdd}
        iconBefore={Add}
        className="mt-3"
        disabled={bins.length === 0}
      >
        Add Item
      </Button>
    </div>
  );
};
