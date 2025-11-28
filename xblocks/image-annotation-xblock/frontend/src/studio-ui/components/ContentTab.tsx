/**
 * ContentTab - Content Configuration
 *
 * Provides form fields for configuring content:
 * - Question text
 * - Explanation text
 */

import React from 'react';
import Form from '@openedx/paragon/dist/Form';

export interface ContentTabProps {
  questionText: string;
  explanation: string;
  onQuestionTextChange: (value: string) => void;
  onExplanationChange: (value: string) => void;
}

export const ContentTab: React.FC<ContentTabProps> = ({
  questionText,
  explanation,
  onQuestionTextChange,
  onExplanationChange,
}) => {
  return (
    <div className="content-tab">
      <Form.Group className="mb-3">
        <Form.Label>Question Text</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          value={questionText}
          onChange={(e) => onQuestionTextChange(e.target.value)}
          placeholder="Enter the question or instructions for students"
        />
        <Form.Text>The main question or instructions displayed to students</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Explanation (Optional)</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          value={explanation}
          onChange={(e) => onExplanationChange(e.target.value)}
          placeholder="Enter explanation text shown after completion"
        />
        <Form.Text>
          Additional explanation or learning objectives shown to students after they complete the problem
        </Form.Text>
      </Form.Group>
    </div>
  );
};
