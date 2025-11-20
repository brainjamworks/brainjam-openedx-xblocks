/**
 * Tabs Studio View Component
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
 * Single tab structure
 */
interface Tab {
  label: string;
  content: string;
}

/**
 * Props for the studio editor component
 */
interface StudioViewProps {
  runtime: XBlockRuntime;
  fields: {
    display_name: string;
    tabs: Tab[];
  };
  baseAssetUrl?: string | null;
  courseId?: string | null;
}

/**
 * View modes
 */
type ViewMode = 'list' | 'edit';

/**
 * Studio editor component for tabs
 */
export const StudioView: React.FC<StudioViewProps> = ({
  runtime,
  fields,
  baseAssetUrl = null,
  courseId = null
}) => {
  // State management for form fields
  const [displayName, setDisplayName] = useState(fields.display_name);
  const [tabs, setTabs] = useState<Tab[]>(fields.tabs);

  // UI state
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  /**
   * Add new tab - creates empty tab and opens editor
   */
  const handleAddTab = () => {
    if (tabs.length >= 5) {
      setMessage({ type: 'error', text: 'Maximum 5 tabs allowed' });
      return;
    }

    // Add empty tab at end
    const newTabs = [
      ...tabs,
      {
        label: '',
        content: ''
      }
    ];
    setTabs(newTabs);

    // Open editor for new tab
    setEditingIndex(newTabs.length - 1);
    setViewMode('edit');
  };

  /**
   * Edit existing tab
   */
  const handleEditTab = (index: number) => {
    setEditingIndex(index);
    setViewMode('edit');
  };

  /**
   * Delete tab with confirmation
   */
  const handleDeleteTab = (index: number) => {
    if (tabs.length === 1) {
      setMessage({ type: 'error', text: 'At least one tab is required' });
      return;
    }

    // Show confirmation
    if (!confirm(`Are you sure you want to delete Tab ${index + 1}?`)) {
      return;
    }

    setTabs(tabs.filter((_, i) => i !== index));
    setMessage({ type: 'success', text: 'Tab deleted' });
  };

  /**
   * Move tab up
   */
  const handleMoveUp = (index: number) => {
    if (index === 0) return;

    const newTabs = [...tabs];
    [newTabs[index - 1], newTabs[index]] = [newTabs[index], newTabs[index - 1]];
    setTabs(newTabs);
  };

  /**
   * Move tab down
   */
  const handleMoveDown = (index: number) => {
    if (index === tabs.length - 1) return;

    const newTabs = [...tabs];
    [newTabs[index], newTabs[index + 1]] = [newTabs[index + 1], newTabs[index]];
    setTabs(newTabs);
  };

  /**
   * Reorder tab via drag and drop
   */
  const handleReorder = (fromIndex: number, toIndex: number) => {
    const newTabs = [...tabs];
    const [movedTab] = newTabs.splice(fromIndex, 1);
    newTabs.splice(toIndex, 0, movedTab);
    setTabs(newTabs);
  };

  /**
   * Save tab from EditView
   */
  const handleSaveTab = (updatedTab: Tab) => {
    const newTabs = [...tabs];
    newTabs[editingIndex] = updatedTab;
    setTabs(newTabs);

    // Return to list view
    setViewMode('list');
    setEditingIndex(-1);
    setMessage({ type: 'success', text: 'Tab saved' });
  };

  /**
   * Cancel editing - return to list
   */
  const handleCancelEdit = () => {
    // If this was a new unsaved tab, remove it
    const tab = tabs[editingIndex];
    if (editingIndex !== -1 && !tab.label && !tab.content) {
      setTabs(tabs.filter((_, i) => i !== editingIndex));
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

      // Validate each tab
      for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];

        if (!tab.label.trim()) {
          setMessage({ type: 'error', text: `Tab ${i + 1}: Label is required` });
          setSaving(false);
          return;
        }

        if (!tab.content.trim()) {
          setMessage({ type: 'error', text: `Tab ${i + 1}: Content is required` });
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
        tabs: tabs,
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
    <div className="tabs-studio-view">
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
            tabs={tabs}
            onAddTab={handleAddTab}
            onEditTab={handleEditTab}
            onDeleteTab={handleDeleteTab}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown}
            onReorder={handleReorder}
          />
        ) : (
          <EditView
            tab={tabs[editingIndex]}
            tabIndex={editingIndex}
            totalTabs={tabs.length}
            onSave={handleSaveTab}
            onCancel={handleCancelEdit}
            runtime={runtime}
            courseId={courseId || ''}
            baseAssetUrl={baseAssetUrl}
          />
        )}

        {/* ARCHITECTURAL: Save/Cancel buttons - only visible in list view */}
        {viewMode === 'list' && (
          <div className="tabs-sticky-actions d-flex justify-content-end border-top">
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
