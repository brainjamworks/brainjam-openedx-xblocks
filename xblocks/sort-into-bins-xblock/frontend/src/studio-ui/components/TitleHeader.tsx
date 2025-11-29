/**
 * TitleHeader Component (Copied from MFE EditorContainer)
 *
 * Editable title header for modal.
 * Uses Paragon IconButton with EditOutline icon.
 *
 * Pattern: frontend-app-authoring/EditorContainer/components/TitleHeader/index.jsx
 */

import React, { useState } from 'react';
import IconButton from '@openedx/paragon/dist/IconButton';
import Icon from '@openedx/paragon/dist/Icon';
import Truncate from '@openedx/paragon/dist/Truncate';
import { EditOutline } from '@openedx/paragon/icons';

interface TitleHeaderProps {
  title: string;
  subtitle?: string;
  onTitleChange?: (newTitle: string) => void;
}

export const TitleHeader: React.FC<TitleHeaderProps> = ({
  title,
  subtitle,
  onTitleChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(title);

  const handleEdit = () => {
    setIsEditing(true);
    setEditValue(title);
  };

  const handleSave = () => {
    if (onTitleChange && editValue.trim()) {
      onTitleChange(editValue.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(title);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="d-flex flex-row align-items-center mt-1">
        <input
          type="text"
          className="form-control"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          autoFocus
        />
      </div>
    );
  }

  return (
    <div className="d-flex flex-row align-items-center mt-1">
      <Truncate.Deprecated>
        {title}
      </Truncate.Deprecated>
      {subtitle && <span className="ml-2 text-gray-500">{subtitle}</span>}
      {onTitleChange && (
        <IconButton
          src={EditOutline}
          iconAs={Icon}
          alt="Edit title"
          onClick={handleEdit}
          size="sm"
          className="mx-2"
        />
      )}
    </div>
  );
};
