/**
 * ModalFooter Component (Updated to use exact MFE EditorContainer pattern)
 *
 * Modal footer for drag-drop-matching editor.
 * Uses EXACT MFE ModalDialog.Footer with ActionRow.
 * Conditionally renders buttons based on viewMode.
 *
 * Pattern: frontend-app-authoring/EditorContainer/index.tsx
 */

import React from 'react';
import ModalDialog from '@openedx/paragon/dist/Modal/ModalDialog';
import Button from '@openedx/paragon/dist/Button';
import ActionRow from '@openedx/paragon/dist/ActionRow';

interface ModalFooterProps {
  viewMode: 'list' | 'edit';

  // List mode handlers
  onSave: () => void;
  onCancel: () => void;
  saveDisabled?: boolean;

  // Edit mode handlers
  onSavePair?: () => void;
  onBackToList?: () => void;
  savePairDisabled?: boolean;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  viewMode,
  onSave,
  onCancel,
  saveDisabled = false,
  onSavePair,
  onBackToList,
  savePairDisabled = false,
}) => {
  return (
    <ModalDialog.Footer className="shadow-sm">
      <ActionRow>
        {viewMode === 'list' ? (
          <>
            <Button variant="tertiary" onClick={onCancel}>
              Cancel
            </Button>
            <Button onClick={onSave} disabled={saveDisabled}>
              Save Changes
            </Button>
          </>
        ) : (
          <>
            <Button variant="tertiary" onClick={onBackToList}>
              Back to List
            </Button>
            <Button onClick={onSavePair} disabled={savePairDisabled}>
              Save Pair
            </Button>
          </>
        )}
      </ActionRow>
    </ModalDialog.Footer>
  );
};
