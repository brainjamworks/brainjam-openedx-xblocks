import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Card from '@openedx/paragon/dist/Card';
import type { BinDefinition } from '../../common/types';

interface BinsStepProps {
  bins: BinDefinition[];
  onChange: (bins: BinDefinition[]) => void;
}

export const BinsStep: React.FC<BinsStepProps> = ({ bins, onChange }) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<BinDefinition>({
    id: '',
    label: '',
    description: '',
    max_capacity: 0,
  });

  const handleAdd = () => {
    setEditForm({
      id: `bin${Date.now()}`,
      label: '',
      description: '',
      max_capacity: 0,
    });
    setEditingIndex(-1);
  };

  const handleEdit = (index: number) => {
    setEditForm({ ...bins[index] });
    setEditingIndex(index);
  };

  const handleSave = () => {
    if (!editForm.label.trim()) {
      alert('Bin label is required');
      return;
    }

    if (editingIndex === -1) {
      // Adding new bin
      onChange([...bins, editForm]);
    } else {
      // Editing existing bin
      const newBins = [...bins];
      newBins[editingIndex!] = editForm;
      onChange(newBins);
    }

    setEditingIndex(null);
  };

  const handleDelete = (index: number) => {
    if (confirm('Delete this bin?')) {
      onChange(bins.filter((_, i) => i !== index));
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  return (
    <div className="bins-step">
      <div className="step-header">
        <h3>Define Bins</h3>
        <p>Create the categories that students will sort items into</p>
      </div>

      {bins.length === 0 && editingIndex === null && (
        <div className="empty-state">
          <p>No bins defined yet. Click "Add Bin" to create your first bin.</p>
        </div>
      )}

      {bins.map((bin, index) => (
        <Card key={bin.id} className="bin-card mb-3">
          <Card.Section>
            {editingIndex === index ? (
              <div className="bin-edit-form">
                <Form.Group className="mb-2">
                  <Form.Label>Label *</Form.Label>
                  <Form.Control
                    type="text"
                    value={editForm.label}
                    onChange={(e) => setEditForm({ ...editForm, label: e.target.value })}
                    placeholder="e.g., Mammals"
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    placeholder="Optional description for students"
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Max Capacity (0 = unlimited)</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    value={editForm.max_capacity}
                    onChange={(e) => setEditForm({ ...editForm, max_capacity: parseInt(e.target.value) || 0 })}
                  />
                </Form.Group>
                <div className="form-actions">
                  <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>
                  <Button variant="outline-secondary" size="sm" onClick={handleCancel}>Cancel</Button>
                </div>
              </div>
            ) : (
              <div className="bin-display">
                <div className="bin-info">
                  <strong>{bin.label}</strong>
                  {bin.description && <p className="text-muted">{bin.description}</p>}
                  <small className="text-muted">
                    Capacity: {bin.max_capacity === 0 ? 'Unlimited' : bin.max_capacity}
                  </small>
                </div>
                <div className="bin-actions">
                  <Button variant="outline-primary" size="sm" onClick={() => handleEdit(index)}>Edit</Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(index)}>Delete</Button>
                </div>
              </div>
            )}
          </Card.Section>
        </Card>
      ))}

      {editingIndex === -1 && (
        <Card className="bin-card mb-3">
          <Card.Section>
            <div className="bin-edit-form">
              <Form.Group className="mb-2">
                <Form.Label>Label *</Form.Label>
                <Form.Control
                  type="text"
                  value={editForm.label}
                  onChange={(e) => setEditForm({ ...editForm, label: e.target.value })}
                  placeholder="e.g., Mammals"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  placeholder="Optional description for students"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Max Capacity (0 = unlimited)</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  value={editForm.max_capacity}
                  onChange={(e) => setEditForm({ ...editForm, max_capacity: parseInt(e.target.value) || 0 })}
                />
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
        <Button variant="outline-primary" onClick={handleAdd}>+ Add Bin</Button>
      )}
    </div>
  );
};
