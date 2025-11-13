/**
 * Step 1: Basic Settings
 *
 * Collects core configuration for the image hotspot problem:
 * - Display name
 * - Question text
 * - Grading mode
 * - Max attempts
 * - Feedback mode
 */

import React from 'react';
import Form from '@openedx/paragon/dist/Form';
import Card from '@openedx/paragon/dist/Card';

interface Step1Props {
  displayName: string;
  questionText: string;
  gradingMode: string;
  maxAttempts: number;
  showFeedbackMode: string;
  onDisplayNameChange: (value: string) => void;
  onQuestionTextChange: (value: string) => void;
  onGradingModeChange: (value: string) => void;
  onMaxAttemptsChange: (value: number) => void;
  onShowFeedbackModeChange: (value: string) => void;
}

export const Step1BasicSettings: React.FC<Step1Props> = ({
  displayName,
  questionText,
  gradingMode,
  maxAttempts,
  showFeedbackMode,
  onDisplayNameChange,
  onQuestionTextChange,
  onGradingModeChange,
  onMaxAttemptsChange,
  onShowFeedbackModeChange
}) => {
  return (
    <div className="wizard-step-content">
      <Card className="mb-3">
        <Card.Header>
          <h4 className="h6 mb-0">Problem Information</h4>
        </Card.Header>
        <Card.Section>
          <Form.Group className="mb-3">
            <Form.Label>Display Name *</Form.Label>
            <Form.Control
              type="text"
              value={displayName}
              onChange={(e) => onDisplayNameChange(e.target.value)}
              placeholder="e.g., Image Hotspot Question 1"
              required
            />
            <Form.Text className="text-muted">
              Internal name shown in Studio (not visible to students)
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Question Text *</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={questionText}
              onChange={(e) => onQuestionTextChange(e.target.value)}
              placeholder="Enter the question prompt students will see..."
              required
            />
            <Form.Text className="text-muted">
              The question presented to students. HTML is supported.
            </Form.Text>
          </Form.Group>
        </Card.Section>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <h4 className="h6 mb-0">Grading Configuration</h4>
        </Card.Header>
        <Card.Section>
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Grading Mode</Form.Label>
                <Form.Control
                  as="select"
                  value={gradingMode}
                  onChange={(e) => onGradingModeChange(e.target.value)}
                >
                  <option value="partial_credit">Partial Credit</option>
                  <option value="all_or_nothing">All or Nothing</option>
                  <option value="first_correct">First Correct</option>
                </Form.Control>
                <Form.Text className="text-muted">
                  <strong>Partial Credit:</strong> Points divided equally among correct hotspots<br />
                  <strong>All or Nothing:</strong> Full points only if all correct clicked<br />
                  <strong>First Correct:</strong> Full points for first correct click
                </Form.Text>
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Max Attempts</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  value={maxAttempts}
                  onChange={(e) => onMaxAttemptsChange(parseInt(e.target.value) || 0)}
                />
                <Form.Text className="text-muted">
                  Maximum submission attempts (0 = unlimited)
                </Form.Text>
              </Form.Group>
            </div>
          </div>

          <Form.Group>
            <Form.Label>Feedback Mode</Form.Label>
            <Form.Control
              as="select"
              value={showFeedbackMode}
              onChange={(e) => onShowFeedbackModeChange(e.target.value)}
            >
              <option value="on_submit">On Submit</option>
              <option value="immediate">Immediate</option>
            </Form.Control>
            <Form.Text className="text-muted">
              <strong>On Submit:</strong> Show feedback after clicking Submit button<br />
              <strong>Immediate:</strong> Show feedback instantly when hotspot is clicked
            </Form.Text>
          </Form.Group>
        </Card.Section>
      </Card>
    </div>
  );
};
