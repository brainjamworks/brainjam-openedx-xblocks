import React from 'react';
import Form from '@openedx/paragon/dist/Form';
import Card from '@openedx/paragon/dist/Card';

interface SettingsStepProps {
  settings: {
    display_name: string;
    problem_title: string;
    instructions: string;
    explanation: string;
    weight: number;
    max_attempts: number;
    grading_mode: 'all_or_nothing' | 'partial_credit';
    show_correct_answers: 'never' | 'after_attempts' | 'always';
    show_feedback_mode: 'immediate' | 'on_submit';
  };
  onChange: (settings: any) => void;
}

export const SettingsStep: React.FC<SettingsStepProps> = ({ settings, onChange }) => {
  const handleChange = (field: string, value: any) => {
    onChange({ ...settings, [field]: value });
  };

  return (
    <div className="settings-step">
      <div className="step-header">
        <h3>Problem Settings</h3>
        <p>Configure problem details and grading options</p>
      </div>

      <Card className="mb-3">
        <Card.Header title="Basic Information" />
        <Card.Section>
          <Form.Group className="mb-3">
            <Form.Label>Display Name *</Form.Label>
            <Form.Control
              type="text"
              value={settings.display_name}
              onChange={(e) => handleChange('display_name', e.target.value)}
              placeholder="e.g., Animal Classification"
            />
            <Form.Text>The name shown in the course outline</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Problem Title *</Form.Label>
            <Form.Control
              type="text"
              value={settings.problem_title}
              onChange={(e) => handleChange('problem_title', e.target.value)}
              placeholder="e.g., Sort animals into their categories"
            />
            <Form.Text>The title shown to students at the top of the problem</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Instructions</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={settings.instructions}
              onChange={(e) => handleChange('instructions', e.target.value)}
              placeholder="Instructions for students (HTML supported)"
            />
            <Form.Text>Instructions shown to students (supports HTML)</Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Explanation (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={settings.explanation}
              onChange={(e) => handleChange('explanation', e.target.value)}
              placeholder="Explanation shown after submission"
            />
            <Form.Text>Shown to students after they submit (supports HTML)</Form.Text>
          </Form.Group>
        </Card.Section>
      </Card>

      <Card className="mb-3">
        <Card.Header title="Grading Settings" />
        <Card.Section>
          <Form.Group className="mb-3">
            <Form.Label>Weight (Points)</Form.Label>
            <Form.Control
              type="number"
              min="0"
              step="0.1"
              value={settings.weight}
              onChange={(e) => handleChange('weight', parseFloat(e.target.value) || 0)}
            />
            <Form.Text>Maximum points for this problem</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Maximum Attempts</Form.Label>
            <Form.Control
              type="number"
              min="0"
              value={settings.max_attempts}
              onChange={(e) => handleChange('max_attempts', parseInt(e.target.value) || 0)}
            />
            <Form.Text>Number of attempts allowed (0 = unlimited)</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Grading Mode</Form.Label>
            <Form.Control
              as="select"
              value={settings.grading_mode}
              onChange={(e) => handleChange('grading_mode', e.target.value)}
            >
              <option value="partial_credit">Partial Credit</option>
              <option value="all_or_nothing">All or Nothing</option>
            </Form.Control>
            <Form.Text>
              <strong>Partial Credit:</strong> Points based on number of correctly placed items<br />
              <strong>All or Nothing:</strong> Full points only if all items are correct
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Show Correct Answers</Form.Label>
            <Form.Control
              as="select"
              value={settings.show_correct_answers}
              onChange={(e) => handleChange('show_correct_answers', e.target.value)}
            >
              <option value="never">Never</option>
              <option value="after_attempts">After Max Attempts</option>
              <option value="always">Always</option>
            </Form.Control>
            <Form.Text>When to show students the correct answers</Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Feedback Mode</Form.Label>
            <Form.Control
              as="select"
              value={settings.show_feedback_mode}
              onChange={(e) => handleChange('show_feedback_mode', e.target.value)}
            >
              <option value="on_submit">On Submit</option>
              <option value="immediate">Immediate Feedback</option>
            </Form.Control>
            <Form.Text>
              <strong>On Submit:</strong> Show feedback after clicking Submit button<br />
              <strong>Immediate:</strong> Show correctness feedback as items are placed
            </Form.Text>
          </Form.Group>
        </Card.Section>
      </Card>
    </div>
  );
};
