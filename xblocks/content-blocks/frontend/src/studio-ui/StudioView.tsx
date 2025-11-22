/**
 * Content Blocks Studio View Component
 *
 * Single-section editor for content blocks.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import { xblockPost, XBlockRuntime } from '../common/api';
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
    title: string;
    sections: Section[];
  };
  baseAssetUrl?: string | null;
  courseId?: string | null;
}

/**
 * Studio editor component for content blocks
 */
export const StudioView: React.FC<StudioViewProps> = ({
  runtime,
  fields,
  baseAssetUrl,
  courseId
}) => {
  // State management for form fields
  const [displayName, setDisplayName] = useState(fields.display_name);
  const [title, setTitle] = useState(fields.title || '');
  const [section, setSection] = useState<Section>(fields.sections[0] || { title: '', content: '' });

  // UI state
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  /**
   * Update section when EditView changes it
   */
  const handleSaveSection = (updatedSection: Section) => {
    setSection(updatedSection);
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

      if (!section.content.trim()) {
        setMessage({ type: 'error', text: 'Section content is required' });
        setSaving(false);
        return;
      }

      // ARCHITECTURAL: Notify Studio that save is starting
      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      // ARCHITECTURAL: Use xblockPost helper for CSRF-protected requests
      const result = await xblockPost(runtime, 'save_data', {
        display_name: displayName,
        title: title,
        sections: [section],
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

        {/* Optional Title field */}
        <Form.Group className="mb-4">
          <Form.Label>Title (Optional)</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Optional H3 heading displayed above content"
          />
          <Form.Text className="text-muted">
            H3 heading displayed above all content. Leave empty to hide.
          </Form.Text>
        </Form.Group>

        {/* Render EditView directly */}
        <EditView
          section={section}
          sectionIndex={0}
          totalSections={1}
          onSave={handleSaveSection}
          onCancel={handleCancel}
          baseAssetUrl={baseAssetUrl}
          runtime={runtime}
          courseId={courseId || ''}
        />

        {/* ARCHITECTURAL: Save/Cancel buttons */}
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
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </Form>
    </div>
  );
};
