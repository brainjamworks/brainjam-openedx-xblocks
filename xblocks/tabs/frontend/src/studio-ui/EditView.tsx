/**
 * EditView Component
 *
 * Form to create/edit individual tab.
 * Includes TinyMCE rich text editor for tab content.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import ArrowBack from '@openedx/paragon/icons/es5/ArrowBack';
import { TinyMCEEditor } from './TinyMCEEditor';
import { XBlockRuntime } from '../common/api';

/**
 * Single tab structure
 */
interface Tab {
  label: string;
  content: string;
}

/**
 * Props for EditView
 */
interface EditViewProps {
  tab: Tab;
  tabIndex: number;
  totalTabs: number;
  onSave: (tab: Tab) => void;
  onCancel: () => void;
  runtime: XBlockRuntime;
  courseId: string;
  baseAssetUrl?: string | null;
}

/**
 * EditView component
 */
export const EditView: React.FC<EditViewProps> = ({
  tab,
  tabIndex,
  totalTabs,
  onSave,
  onCancel,
  runtime,
  courseId,
  baseAssetUrl = null
}) => {
  // Local state for form fields
  const [label, setLabel] = useState(tab.label);
  const [content, setContent] = useState(tab.content);

  // Validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  /**
   * Validate form fields
   */
  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!label.trim()) {
      newErrors.label = 'Tab label is required';
    } else if (label.length > 50) {
      newErrors.label = 'Tab label must be 50 characters or less';
    }

    if (!content.trim()) {
      newErrors.content = 'Tab content is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle save
   */
  const handleSave = () => {
    if (validate()) {
      onSave({
        label: label,
        content: content
      });
    }
  };

  return (
    <div className="tabs-edit-view">
      {/* Header */}
      <div className="edit-header mb-4">
        <h3>
          {tabIndex === -1 ? 'New Tab' : `Editing Tab ${tabIndex + 1} of ${totalTabs}`}
        </h3>
      </div>

      {/* Form */}
      <Form>
        {/* Tab Label Section */}
        <div className="form-section mb-5">
          <h4 className="section-label mb-3">Tab Label</h4>

          <Form.Group className="mb-4">
            <Form.Label>Label *</Form.Label>
            <Form.Control
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="Enter tab label (e.g., 'Overview', 'Details')"
              isInvalid={!!errors.label}
              maxLength={50}
            />
            {errors.label && (
              <div className="invalid-feedback d-block">
                {errors.label}
              </div>
            )}
            <Form.Text className="text-muted">
              {label.length} / 50 characters
            </Form.Text>
          </Form.Group>
        </div>

        {/* Tab Content Section */}
        <div className="form-section mb-5">
          <h4 className="section-label mb-3">Tab Content</h4>

          <Form.Group>
            <Form.Label>Content *</Form.Label>
            <TinyMCEEditor
              value={content}
              onChange={setContent}
              placeholder="Enter the content for this tab"
              height="400px"
              runtime={runtime}
              courseId={courseId}
              baseAssetUrl={baseAssetUrl}
            />
            {errors.content && (
              <div className="invalid-feedback d-block mt-2">
                {errors.content}
              </div>
            )}
          </Form.Group>
        </div>

        {/* Action Buttons */}
        <div className="tabs-sticky-actions d-flex justify-content-end">
          <Button
            variant="tertiary"
            onClick={onCancel}
            className="mr-2"
          >
            Back to List
          </Button>
          <Button
            variant="primary"
            onClick={handleSave}
          >
            Save Tab
          </Button>
        </div>
      </Form>
    </div>
  );
};
