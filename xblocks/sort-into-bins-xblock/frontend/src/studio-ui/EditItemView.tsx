/**
 * EditItemView Component
 *
 * Full-screen editor for creating/editing an item.
 * Fields: type (text/image/HTML), content (adapts to type), correct_bin_id
 * Uses ref pattern to expose save function to parent.
 */

import React, { useState, useEffect } from 'react';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import type { SortableItem, BinDefinition } from '../common/types';

type ItemType = 'text' | 'image' | 'html';

interface EditItemViewProps {
  item: SortableItem;
  bins: BinDefinition[];
  onSave: (updatedItem: SortableItem) => void;
  onCancel: () => void;
  saveRef: React.MutableRefObject<(() => void) | null>;
}

export const EditItemView: React.FC<EditItemViewProps> = ({
  item,
  bins,
  onSave,
  onCancel,
  saveRef,
}) => {
  const [type, setType] = useState<ItemType>(item.type as ItemType);
  const [content, setContent] = useState(item.content);
  const [correctBinId, setCorrectBinId] = useState(item.correct_bin_id);
  const [error, setError] = useState<string | null>(null);

  // Expose save function to parent via ref
  useEffect(() => {
    saveRef.current = handleSave;
  }, [type, content, correctBinId]);

  const handleSave = () => {
    // Validation
    if (!content.trim()) {
      setError('Content is required');
      return;
    }

    if (!correctBinId) {
      setError('Please select a correct bin');
      return;
    }

    // Save and return
    onSave({
      id: item.id,
      type,
      content: content.trim(),
      correct_bin_id: correctBinId,
    });
  };

  const renderContentField = () => {
    switch (type) {
      case 'text':
        return (
          <Form.Control
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter text content"
            autoFocus
          />
        );
      case 'image':
        return (
          <>
            <Form.Control
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="https://example.com/image.png"
            />
            {content && (
              <div className="mt-2">
                <img
                  src={content}
                  alt="Preview"
                  style={{ maxWidth: '200px', maxHeight: '150px' }}
                  onError={() => setError('Invalid image URL')}
                />
              </div>
            )}
          </>
        );
      case 'html':
        return (
          <>
            <Form.Control
              as="textarea"
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="<p>Enter HTML content...</p>"
            />
            {content && (
              <div className="mt-2 p-3 border rounded">
                <div className="small text-muted mb-1">Preview:</div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            )}
          </>
        );
    }
  };

  return (
    <div className="edit-item-view p-4">
      <div className="h4 mb-4">Edit Item</div>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Form>
        {/* Type */}
        <Form.Group className="mb-4">
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
            {type === 'text' && 'Plain text content that will be displayed to students.'}
            {type === 'image' && 'URL to an image file that will be displayed to students.'}
            {type === 'html' && 'HTML markup that will be rendered to students. Supports formatting and styling.'}
          </Form.Text>
        </Form.Group>

        {/* Content */}
        <Form.Group className="mb-4">
          <Form.Label>Content *</Form.Label>
          {renderContentField()}
        </Form.Group>

        {/* Correct Bin */}
        <Form.Group className="mb-4">
          <Form.Label>Correct Bin *</Form.Label>
          <Form.Control
            as="select"
            value={correctBinId}
            onChange={(e) => setCorrectBinId(e.target.value)}
          >
            {bins.length === 0 && <option value="">No bins available</option>}
            {bins.map(bin => (
              <option key={bin.id} value={bin.id}>
                {bin.label}
              </option>
            ))}
          </Form.Control>
          <Form.Text>
            The bin where this item should be placed to be marked correct.
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};
