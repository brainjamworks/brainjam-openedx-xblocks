/**
 * EditView Component
 *
 * Form to edit content block section.
 * Includes TinyMCE rich text editor for section content.
 */

import React, { useState, useEffect } from 'react';
import Form from '@openedx/paragon/dist/Form';
import { TinyMCEEditor } from './TinyMCEEditor';
import { XBlockRuntime } from '../common/api';

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
  baseAssetUrl?: string | null;
  runtime: XBlockRuntime;
  courseId: string;
}

/**
 * EditView component
 */
export const EditView: React.FC<EditViewProps> = ({
  section,
  sectionIndex,
  totalSections,
  onSave,
  onCancel,
  baseAssetUrl,
  runtime,
  courseId
}) => {
  // Local state for form fields - renamed for clarity to avoid confusion with parent's title field
  const [sectionTitle, setSectionTitle] = useState(section.title);
  const [sectionContent, setSectionContent] = useState(section.content);

  // Validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  /**
   * Auto-update parent when section title or content changes
   */
  useEffect(() => {
    onSave({ title: sectionTitle, content: sectionContent });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionTitle, sectionContent]);

  /**
   * Validate form fields (for display only, not blocking)
   */
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // Section title is optional, only validate length if provided
    if (sectionTitle.trim() && sectionTitle.length > 100) {
      newErrors.title = 'Section title must be 100 characters or less';
    }

    if (!sectionContent.trim()) {
      newErrors.content = 'Section content is required';
    }

    setErrors(newErrors);
  };

  /**
   * Validate on changes
   */
  useEffect(() => {
    validate();
  }, [sectionTitle, sectionContent]);

  return (
    <div className="accordion-edit-view">
      {/* Form */}
      <Form>
        {/* Section Title Section */}
        <div className="form-section mb-5">
          <h4 className="section-label mb-3">Section Title</h4>

          <Form.Group className="mb-4">
            <Form.Label>Section Title (Optional)</Form.Label>
            <Form.Control
              type="text"
              value={sectionTitle}
              onChange={(e) => setSectionTitle(e.target.value)}
              placeholder="Optional H4 heading for this content section"
              isInvalid={!!errors.title}
              maxLength={100}
            />
            {errors.title && (
              <div className="invalid-feedback d-block">
                {errors.title}
              </div>
            )}
            <Form.Text className="text-muted">
              {sectionTitle.length} / 100 characters
            </Form.Text>
          </Form.Group>
        </div>

        {/* Section Content Section */}
        <div className="form-section mb-5">
          <h4 className="section-label mb-3">Section Content</h4>

          <Form.Group>
            <Form.Label>Content *</Form.Label>
            <TinyMCEEditor
              value={sectionContent}
              onChange={setSectionContent}
              placeholder="Enter the content for this section"
              height="435px"
              baseAssetUrl={baseAssetUrl}
              runtime={runtime}
              courseId={courseId}
            />
            {errors.content && (
              <div className="invalid-feedback d-block mt-2">
                {errors.content}
              </div>
            )}
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};
