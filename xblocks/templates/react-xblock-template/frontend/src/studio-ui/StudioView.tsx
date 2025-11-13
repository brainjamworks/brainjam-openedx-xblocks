/**
 * IMPLEMENTATION: Studio View Component
 *
 * CUSTOMIZE THIS FILE for your XBlock's editor UI
 *
 * This is a minimal example with form fields and save/cancel functionality.
 * Replace with your own editor components and logic.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import { xblockPost, XBlockRuntime } from '../common/api';

/**
 * IMPLEMENTATION: Define props interface for your component
 */
interface StudioViewProps {
  runtime: XBlockRuntime;
  fields: {
    display_name: string;
    // Add more fields as needed:
    // content?: string;
    // settings?: {...};
  };
}

/**
 * IMPLEMENTATION: Your studio editor component
 *
 * This example shows a form with save/cancel functionality.
 * Replace with your actual editor:
 * - Custom form fields
 * - Rich text editors
 * - Complex configurations
 * - Preview functionality
 */
export const StudioView: React.FC<StudioViewProps> = ({
  runtime,
  fields
}) => {
  // IMPLEMENTATION: State management for form fields
  const [displayName, setDisplayName] = useState(fields.display_name);
  // Add more state for additional fields:
  // const [content, setContent] = useState(fields.content || '');

  // IMPLEMENTATION: UI state
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // IMPLEMENTATION: Save handler
  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      // IMPLEMENTATION: Add client-side validation
      if (!displayName.trim()) {
        setMessage({ type: 'error', text: 'Display name is required' });
        setSaving(false);
        return;
      }

      // ARCHITECTURAL: Notify Studio that save is starting
      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      // ARCHITECTURAL: Use xblockPost helper for CSRF-protected requests
      // IMPLEMENTATION: Update handler name and data to match your Python handler
      const result = await xblockPost(runtime, 'save_data', {
        display_name: displayName,
        // Add more fields:
        // content: content,
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

  // ARCHITECTURAL: Cancel handler
  // DON'T CHANGE: This notify pattern closes the Studio modal
  const handleCancel = () => {
    if (runtime.notify) {
      runtime.notify('cancel', {});
    }
  };

  return (
    <div className="{xblock-name}-studio-view">
      {/* IMPLEMENTATION: Success/error messages */}
      {message && (
        <Alert
          variant={message.type === 'success' ? 'success' : 'danger'}
          dismissible
          onClose={() => setMessage(null)}
        >
          {message.text}
        </Alert>
      )}

      {/* IMPLEMENTATION: Your editor form */}
      <Form>
        {/* IMPLEMENTATION: Display Name field */}
        <Form.Group>
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Enter display name"
          />
        </Form.Group>

        {/* IMPLEMENTATION: Add more form fields as needed */}
        {/*
        <Form.Group className="mt-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter content"
          />
        </Form.Group>
        */}

        {/* IMPLEMENTATION: For rich text editing, consider using TinyMCE or similar:
        <TinyMCEEditor
          value={content}
          onChange={setContent}
        />
        */}

        {/* ARCHITECTURAL: Action buttons */}
        {/* DON'T CHANGE: The Cancel/Save pattern and button order */}
        <div className="d-flex justify-content-end mt-4">
          <Button
            variant="tertiary"
            onClick={handleCancel}
            disabled={saving}
            className="mr-2"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </Form>
    </div>
  );
};
