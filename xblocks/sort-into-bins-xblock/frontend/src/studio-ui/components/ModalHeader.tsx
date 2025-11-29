/**
 * ModalHeader Component (Updated to use exact MFE EditorContainer pattern)
 *
 * Modal header for drag-drop-matching editor.
 * Uses EXACT MFE ModalDialog.Header with TitleHeader and IconButton.
 *
 * Pattern: frontend-app-authoring/EditorContainer/index.tsx
 */

import React from 'react';
import ModalDialog from '@openedx/paragon/dist/Modal/ModalDialog';
import IconButton from '@openedx/paragon/dist/IconButton';
import Icon from '@openedx/paragon/dist/Icon';
import { Close } from '@openedx/paragon/icons';
import { TitleHeader } from './TitleHeader';

interface ModalHeaderProps {
  title: string;
  subtitle?: string;
  onClose: () => void;
  onTitleChange?: (newTitle: string) => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  subtitle,
  onClose,
  onTitleChange,
}) => {
  return (
    <ModalDialog.Header className="shadow-sm zindex-10">
      <div className="d-flex flex-row justify-content-between">
        <h2 className="h3 col pl-0">
          <TitleHeader
            title={title}
            subtitle={subtitle}
            onTitleChange={onTitleChange}
          />
        </h2>
        <IconButton
          src={Close}
          iconAs={Icon}
          onClick={onClose}
          alt="Close"
        />
      </div>
    </ModalDialog.Header>
  );
};
