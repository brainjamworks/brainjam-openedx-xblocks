/**
 * ModalFooter Component (Updated to use exact MFE EditorContainer pattern)
 *
 * Modal footer for image-annotation editor.
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
  editingType?: 'label' | 'zone';
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  viewMode,
  onSave,
  onCancel,
  saveDisabled = false,
  onSavePair,
  onBackToList,
  savePairDisabled = false,
  editingType,
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
              {editingType === 'label' ? 'Save Label' : editingType === 'zone' ? 'Save Zone' : 'Save'}
            </Button>
          </>
        )}
      </ActionRow>
    </ModalDialog.Footer>
  );
};
