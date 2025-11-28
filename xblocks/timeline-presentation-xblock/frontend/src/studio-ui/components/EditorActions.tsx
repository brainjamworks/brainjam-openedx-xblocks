/**
 * EditorActions Component
 *
 * Bottom action bar spanning all three columns.
 * Provides Save and Cancel buttons for the entire editor.
 *
 * Features:
 * - Pill-style buttons
 * - Liverpool design tokens
 * - Sticky footer bar
 * - Clean, minimal design
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import Icon from '@openedx/paragon/dist/Icon';
import { Save, Close } from '@openedx/paragon/icons';
import '../styles/editor-actions.scss';

interface EditorActionsProps {
  onSave: () => void;
  onCancel: () => void;
  hasUnsavedChanges?: boolean;
}

export const EditorActions: React.FC<EditorActionsProps> = ({
  onSave,
  onCancel,
  hasUnsavedChanges = false,
}) => {
  return (
    <div className="editor-actions">
      <div className="editor-actions-content">
        {hasUnsavedChanges && (
          <span className="editor-actions-indicator">
            Unsaved changes
          </span>
        )}
        <div className="editor-actions-buttons">
          <Button
            variant="tertiary"
            size="sm"
            onClick={onCancel}
            className="editor-actions-btn editor-actions-btn-cancel"
            iconBefore={Close}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={onSave}
            className="editor-actions-btn editor-actions-btn-save"
            iconBefore={Save}
          >
            Save Timeline
          </Button>
        </div>
      </div>
    </div>
  );
};
