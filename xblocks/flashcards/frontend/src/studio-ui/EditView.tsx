/**
 * EditView Component
 *
 * Form to create/edit individual flashcard.
 * Later will include TinyMCE rich text editor for back_text.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import ArrowBack from '@openedx/paragon/icons/es5/ArrowBack';
import { TinyMCEEditor } from './TinyMCEEditor';

/**
 * Single flashcard structure
 */
interface FlashCard {
  front_title: string;
  front_subtitle: string;
  back_text: string;
}

/**
 * Props for EditView
 */
interface EditViewProps {
  card: FlashCard;
  cardIndex: number;
  totalCards: number;
  onSave: (card: FlashCard) => void;
  onCancel: () => void;
}

/**
 * EditView component
 */
export const EditView: React.FC<EditViewProps> = ({
  card,
  cardIndex,
  totalCards,
  onSave,
  onCancel
}) => {
  // Local state for form fields
  const [frontTitle, setFrontTitle] = useState(card.front_title);
  const [frontSubtitle, setFrontSubtitle] = useState(card.front_subtitle);
  const [backText, setBackText] = useState(card.back_text);

  // Validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  /**
   * Validate form fields
   */
  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!frontTitle.trim()) {
      newErrors.frontTitle = 'Front title is required';
    } else if (frontTitle.length > 100) {
      newErrors.frontTitle = 'Front title must be 100 characters or less';
    }

    if (frontSubtitle.length > 100) {
      newErrors.frontSubtitle = 'Front subtitle must be 100 characters or less';
    }

    if (!backText.trim()) {
      newErrors.backText = 'Back content is required';
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
        front_title: frontTitle,
        front_subtitle: frontSubtitle,
        back_text: backText
      });
    }
  };

  return (
    <div className="flashcards-edit-view">
      {/* Header */}
      <div className="edit-header mb-4">
        <h3>
          {cardIndex === -1 ? 'New Card' : `Editing Card ${cardIndex + 1} of ${totalCards}`}
        </h3>
      </div>

      {/* Form */}
      <Form>
        {/* Front Side Section */}
        <div className="form-section mb-5">
          <h4 className="section-label mb-3">Front of Card</h4>

          <Form.Group className="mb-4">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              type="text"
              value={frontTitle}
              onChange={(e) => setFrontTitle(e.target.value)}
              placeholder="Enter the main title"
              isInvalid={!!errors.frontTitle}
              maxLength={100}
            />
            {errors.frontTitle && (
              <div className="invalid-feedback d-block">
                {errors.frontTitle}
              </div>
            )}
            <Form.Text className="text-muted">
              {frontTitle.length} / 100 characters
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Subtitle (optional)</Form.Label>
            <Form.Control
              type="text"
              value={frontSubtitle}
              onChange={(e) => setFrontSubtitle(e.target.value)}
              placeholder="Enter optional subtitle"
              isInvalid={!!errors.frontSubtitle}
              maxLength={100}
            />
            {errors.frontSubtitle && (
              <div className="invalid-feedback d-block">
                {errors.frontSubtitle}
              </div>
            )}
            <Form.Text className="text-muted">
              {frontSubtitle.length} / 100 characters
            </Form.Text>
          </Form.Group>
        </div>

        {/* Back Side Section */}
        <div className="form-section mb-5">
          <h4 className="section-label mb-3">Back of Card</h4>

          <Form.Group>
            <Form.Label>Content *</Form.Label>
            <TinyMCEEditor
              value={backText}
              onChange={setBackText}
              placeholder="Enter the content for the back of the card"
              height="400px"
            />
            {errors.backText && (
              <div className="invalid-feedback d-block mt-2">
                {errors.backText}
              </div>
            )}
          </Form.Group>
        </div>

        {/* Action Buttons */}
        <div className="flashcards-sticky-actions d-flex justify-content-end">
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
            Save Card
          </Button>
        </div>
      </Form>
    </div>
  );
};
