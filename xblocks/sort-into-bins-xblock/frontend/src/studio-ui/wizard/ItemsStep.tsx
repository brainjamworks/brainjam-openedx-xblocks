import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Card from '@openedx/paragon/dist/Card';
import type { SortableItem, BinDefinition } from '../../common/types';

interface ItemsStepProps {
  items: SortableItem[];
  bins: BinDefinition[];
  onChange: (items: SortableItem[]) => void;
}

export const ItemsStep: React.FC<ItemsStepProps> = ({ items, bins, onChange }) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<SortableItem>({
    id: '',
    type: 'text',
    content: '',
    correct_bin_id: '',
  });

  const handleAdd = () => {
    setEditForm({
      id: `item${Date.now()}`,
      type: 'text',
      content: '',
      correct_bin_id: bins[0]?.id || '',
    });
    setEditingIndex(-1);
  };

  const handleEdit = (index: number) => {
    setEditForm({ ...items[index] });
    setEditingIndex(index);
  };

  const handleSave = () => {
    if (!editForm.content.trim()) {
      alert('Item content is required');
      return;
    }

    if (!editForm.correct_bin_id) {
      alert('Please select the correct bin for this item');
      return;
    }

    if (editingIndex === -1) {
      onChange([...items, editForm]);
    } else {
      const newItems = [...items];
      newItems[editingIndex!] = editForm;
      onChange(newItems);
    }

    setEditingIndex(null);
  };

  const handleDelete = (index: number) => {
    if (confirm('Delete this item?')) {
      onChange(items.filter((_, i) => i !== index));
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  if (bins.length === 0) {
    return (
      <div className="items-step">
        <div className="alert alert-warning">
          Please define at least one bin before adding items.
        </div>
      </div>
    );
  }

  return (
    <div className="items-step">
      <div className="step-header">
        <h3>Define Items</h3>
        <p>Create the items that students will sort into bins</p>
      </div>

      {items.length === 0 && editingIndex === null && (
        <div className="empty-state">
          <p>No items defined yet. Click "Add Item" to create your first item.</p>
        </div>
      )}

      {items.map((item, index) => (
        <Card key={item.id} className="item-card mb-3">
          <Card.Section>
            {editingIndex === index ? (
              <div className="item-edit-form">
                <Form.Group className="mb-2">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    as="select"
                    value={editForm.type}
                    onChange={(e) => setEditForm({ ...editForm, type: e.target.value as any })}
                  >
                    <option value="text">Text</option>
                    <option value="image">Image (URL)</option>
                    <option value="html">HTML</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Content *</Form.Label>
                  {editForm.type === 'html' ? (
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={editForm.content}
                      onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                      placeholder="HTML content"
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      value={editForm.content}
                      onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                      placeholder={editForm.type === 'image' ? 'Image URL' : 'Text content'}
                    />
                  )}
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Correct Bin *</Form.Label>
                  <Form.Control
                    as="select"
                    value={editForm.correct_bin_id}
                    onChange={(e) => setEditForm({ ...editForm, correct_bin_id: e.target.value })}
                  >
                    {bins.map((bin) => (
                      <option key={bin.id} value={bin.id}>{bin.label}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <div className="form-actions">
                  <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
                  <Button variant="outline-secondary" size="sm" onClick={handleCancel}>Cancel</Button>
                </div>
              </div>
            ) : (
              <div className="item-display">
                <div className="item-info">
                  <div className="item-type-badge">{item.type}</div>
                  <div className="item-content">
                    {item.type === 'text' && <span>{item.content}</span>}
                    {item.type === 'image' && <img src={item.content} alt="Item" style={{ maxWidth: '100px' }} />}
                    {item.type === 'html' && <div dangerouslySetInnerHTML={{ __html: item.content }} />}
                  </div>
                  <small className="text-muted">
                    Correct bin: {bins.find(b => b.id === item.correct_bin_id)?.label || 'Unknown'}
                  </small>
                </div>
                <div className="item-actions">
                  <Button variant="outline-primary" size="sm" onClick={() => handleEdit(index)}>Edit</Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(index)}>Delete</Button>
                </div>
              </div>
            )}
          </Card.Section>
        </Card>
      ))}

      {editingIndex === -1 && (
        <Card className="item-card mb-3">
          <Card.Section>
            <div className="item-edit-form">
              <Form.Group className="mb-2">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  value={editForm.type}
                  onChange={(e) => setEditForm({ ...editForm, type: e.target.value as any })}
                >
                  <option value="text">Text</option>
                  <option value="image">Image (URL)</option>
                  <option value="html">HTML</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Content *</Form.Label>
                {editForm.type === 'html' ? (
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={editForm.content}
                    onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                    placeholder="HTML content"
                  />
                ) : (
                  <Form.Control
                    type="text"
                    value={editForm.content}
                    onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                    placeholder={editForm.type === 'image' ? 'Image URL' : 'Text content'}
                  />
                )}
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Correct Bin *</Form.Label>
                <Form.Control
                  as="select"
                  value={editForm.correct_bin_id}
                  onChange={(e) => setEditForm({ ...editForm, correct_bin_id: e.target.value })}
                >
                  {bins.map((bin) => (
                    <option key={bin.id} value={bin.id}>{bin.label}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <div className="form-actions">
                <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
                <Button variant="outline-secondary" size="sm" onClick={handleCancel}>Cancel</Button>
              </div>
            </div>
          </Card.Section>
        </Card>
      )}

      {editingIndex === null && (
        <Button variant="outline-primary" onClick={handleAdd}>+ Add Item</Button>
      )}
    </div>
  );
};
