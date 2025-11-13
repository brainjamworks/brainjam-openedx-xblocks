/**
 * EditView Component
 *
 * Form to create/edit individual section.
 * Includes TinyMCE rich text editor for section content.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import ArrowBack from '@openedx/paragon/icons/es5/ArrowBack';
import { TinyMCEEditor } from './TinyMCEEditor';

/**
 * Single section structure
 */
interface Section {
  title: string;
  content: string;
}

/**
 * Props for EditView
 */
interface EditViewProps {
  section: Section;
  sectionIndex: number;
  totalSections: number;
  onSave: (section: Section) => void;
  onCancel: () => void;
}

/**
 * EditView component
 */
export const EditView: React.FC<EditViewProps> = ({
  section,
  sectionIndex,
  totalSections,
  onSave,
  onCancel
}) => {
  // Local state for form fields
  const [title, setTitle] = useState(section.title);
  const [content, setContent] = useState(section.content);

  // Validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  /**
   * Validate form fields
   */
  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) {
      newErrors.title = 'Section title is required';
    } else if (title.length > 100) {
      newErrors.title = 'Section title must be 100 characters or less';
    }

    if (!content.trim()) {
      newErrors.content = 'Section content is required';
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
        title: title,
        content: content
      });
    }
  };

  return (
    <div className="accordion-edit-view">
      {/* Header */}
      <div className="edit-header mb-4">
        <h3>
          {sectionIndex === -1 ? 'New Section' : `Editing Section ${sectionIndex + 1} of ${totalSections}`}
        </h3>
      </div>

      {/* Form */}
      <Form>
        {/* Section Title Section */}
        <div className="form-section mb-5">
          <h4 className="section-label mb-3">Section Title</h4>

          <Form.Group className="mb-4">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter section title (e.g., 'Learning Objectives', 'Key Concepts')"
              isInvalid={!!errors.title}
              maxLength={100}
            />
            {errors.title && (
              <div className="invalid-feedback d-block">
                {errors.title}
              </div>
            )}
            <Form.Text className="text-muted">
              {title.length} / 100 characters
            </Form.Text>
          </Form.Group>
        </div>

        {/* Section Content Section */}
        <div className="form-section mb-5">
          <h4 className="section-label mb-3">Section Content</h4>

          <Form.Group>
            <Form.Label>Content *</Form.Label>
            <TinyMCEEditor
              value={content}
              onChange={setContent}
              placeholder="Enter the content for this section"
              height="400px"
            />
            {errors.content && (
              <div className="invalid-feedback d-block mt-2">
                {errors.content}
              </div>
            )}
          </Form.Group>
        </div>

        {/* Action Buttons */}
        <div className="accordion-sticky-actions d-flex justify-content-end">
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
            Save Section
          </Button>
        </div>
      </Form>
    </div>
  );
};
