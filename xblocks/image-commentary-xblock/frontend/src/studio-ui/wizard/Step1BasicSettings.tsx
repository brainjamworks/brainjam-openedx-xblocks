/**
 * Step 1: Basic Settings
 *
 * Collects core configuration for the image commentary XBlock:
 * - Display name
 */

import React from 'react';
import Form from '@openedx/paragon/dist/Form';
import Card from '@openedx/paragon/dist/Card';

interface Step1Props {
  displayName: string;
  onDisplayNameChange: (value: string) => void;
}

export const Step1BasicSettings: React.FC<Step1Props> = ({
  displayName,
  onDisplayNameChange
}) => {
  return (
    <div className="wizard-step-content">
      <Card className="mb-3">
        <Card.Header>
          <h4 className="h6 mb-0">Content Information</h4>
        </Card.Header>
        <Card.Section>
          <Form.Group>
            <Form.Label>Display Name *</Form.Label>
            <Form.Control
              type="text"
              value={displayName}
              onChange={(e) => onDisplayNameChange(e.target.value)}
              placeholder="e.g., Exam Transcript Commentary"
              required
            />
            <Form.Text className="text-muted">
              Internal name shown in Studio (not visible to students)
            </Form.Text>
          </Form.Group>
        </Card.Section>
      </Card>
    </div>
  );
};
