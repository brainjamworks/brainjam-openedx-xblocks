/**
 * Accordion Studio View Component
 *
 * Main container that orchestrates between ListView and EditView.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import { xblockPost, XBlockRuntime } from '../common/api';
import { ListView } from './ListView';
import { EditView } from './EditView';

/**
 * Single section structure
 */
interface Section {
  title: string;
  content: string;
}

/**
 * Props for the studio editor component
 */
interface StudioViewProps {
  runtime: XBlockRuntime;
  fields: {
    display_name: string;
    sections: Section[];
  };
}

/**
 * View modes
 */
type ViewMode = 'list' | 'edit';

/**
 * Studio editor component for accordion
 */
export const StudioView: React.FC<StudioViewProps> = ({
  runtime,
  fields
}) => {
  // State management for form fields
  const [displayName, setDisplayName] = useState(fields.display_name);
  const [sections, setSections] = useState<Section[]>(fields.sections);

  // UI state
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  /**
   * Add new section - creates empty section and opens editor
   */
  const handleAddSection = () => {
    if (sections.length >= 10) {
      setMessage({ type: 'error', text: 'Maximum 10 sections allowed' });
      return;
    }

    // Add empty section at end
    const newSections = [
      ...sections,
      {
        title: '',
        content: ''
      }
    ];
    setSections(newSections);

    // Open editor for new section
    setEditingIndex(newSections.length - 1);
    setViewMode('edit');
  };

  /**
   * Edit existing section
   */
  const handleEditSection = (index: number) => {
    setEditingIndex(index);
    setViewMode('edit');
  };

  /**
   * Delete section with confirmation
   */
  const handleDeleteSection = (index: number) => {
    if (sections.length === 1) {
      setMessage({ type: 'error', text: 'At least one section is required' });
      return;
    }

    // Show confirmation
    if (!confirm(`Are you sure you want to delete Section ${index + 1}?`)) {
      return;
    }

    setSections(sections.filter((_, i) => i !== index));
    setMessage({ type: 'success', text: 'Section deleted' });
  };

  /**
   * Move section up
   */
  const handleMoveUp = (index: number) => {
    if (index === 0) return;

    const newSections = [...sections];
    [newSections[index - 1], newSections[index]] = [newSections[index], newSections[index - 1]];
    setSections(newSections);
  };

  /**
   * Move section down
   */
  const handleMoveDown = (index: number) => {
    if (index === sections.length - 1) return;

    const newSections = [...sections];
    [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
    setSections(newSections);
  };

  /**
   * Reorder section via drag and drop
   */
  const handleReorder = (fromIndex: number, toIndex: number) => {
    const newSections = [...sections];
    const [movedSection] = newSections.splice(fromIndex, 1);
    newSections.splice(toIndex, 0, movedSection);
    setSections(newSections);
  };

  /**
   * Save section from EditView
   */
  const handleSaveSection = (updatedSection: Section) => {
    const newSections = [...sections];
    newSections[editingIndex] = updatedSection;
    setSections(newSections);

    // Return to list view
    setViewMode('list');
    setEditingIndex(-1);
    setMessage({ type: 'success', text: 'Section saved' });
  };

  /**
   * Cancel editing - return to list
   */
  const handleCancelEdit = () => {
    // If this was a new unsaved section, remove it
    const section = sections[editingIndex];
    if (editingIndex !== -1 && !section.title && !section.content) {
      setSections(sections.filter((_, i) => i !== editingIndex));
    }

    setViewMode('list');
    setEditingIndex(-1);
  };

  /**
   * Save all changes to XBlock
   */
  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      // Client-side validation
      if (!displayName.trim()) {
        setMessage({ type: 'error', text: 'Display name is required' });
        setSaving(false);
        return;
      }

      // Validate each section
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];

        if (!section.title.trim()) {
          setMessage({ type: 'error', text: `Section ${i + 1}: Title is required` });
          setSaving(false);
          return;
        }

        if (!section.content.trim()) {
          setMessage({ type: 'error', text: `Section ${i + 1}: Content is required` });
          setSaving(false);
          return;
        }
      }

      // ARCHITECTURAL: Notify Studio that save is starting
      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      // ARCHITECTURAL: Use xblockPost helper for CSRF-protected requests
      const result = await xblockPost(runtime, 'save_data', {
        display_name: displayName,
        sections: sections,
      });

      if (result.success) {
        setMessage({ type: 'success', text: 'Changes saved successfully!' });

        // ARCHITECTURAL: Notify Studio that save completed
        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to save changes.' });

        // Notify save ended even on error
        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      }
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'An error occurred while saving.' });

      // Notify save ended on exception
      if (runtime.notify) {
        runtime.notify('save', { state: 'end' });
      }
    } finally {
      setSaving(false);
    }
  };

  /**
   * ARCHITECTURAL: Cancel handler
   * DON'T CHANGE: This notify pattern closes the Studio modal
   */
  const handleCancel = () => {
    if (runtime.notify) {
      runtime.notify('cancel', {});
    }
  };

  return (
    <div className="accordion-studio-view">
      {/* Alert messages */}
      {message && (
        <Alert
          variant={message.type === 'success' ? 'success' : 'danger'}
          dismissible
          onClose={() => setMessage(null)}
        >
          {message.text}
        </Alert>
      )}

      <Form>
        {/* Display Name field - always visible */}
        <Form.Group className="mb-4">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Enter display name"
          />
        </Form.Group>

        {/* Render ListView or EditView based on mode */}
        {viewMode === 'list' ? (
          <ListView
            sections={sections}
            onAddSection={handleAddSection}
            onEditSection={handleEditSection}
            onDeleteSection={handleDeleteSection}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown}
            onReorder={handleReorder}
          />
        ) : (
          <EditView
            section={sections[editingIndex]}
            sectionIndex={editingIndex}
            totalSections={sections.length}
            onSave={handleSaveSection}
            onCancel={handleCancelEdit}
          />
        )}

        {/* ARCHITECTURAL: Save/Cancel buttons - only visible in list view */}
        {viewMode === 'list' && (
          <div className="accordion-sticky-actions d-flex justify-content-end border-top">
            <Button
              variant="tertiary"
              onClick={handleCancel}
              disabled={saving}
              className="mr-2"
            >
              Close Without Saving
            </Button>
            <Button
              variant="primary"
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save All Changes'}
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};
