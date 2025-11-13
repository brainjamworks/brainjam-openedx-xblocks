/**
 * IMPLEMENTATION: Studio View Component for Problem XBlocks
 *
 * This component provides a configuration interface for gradable problem XBlocks with:
 * - Question text editor
 * - Correct answer configuration
 * - Explanation field
 * - Grading settings (weight, max attempts)
 * - Feedback mode configuration
 *
 * Customize this component for your specific problem type.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import Card from '@openedx/paragon/dist/Card';
import { xblockPost, XBlockRuntime } from '../common/api';
import type { StudioViewFields } from '../common/types';

/**
 * IMPLEMENTATION: Props interface
 * Matches data passed from Python studio_view()
 */
interface StudioViewProps {
  runtime: XBlockRuntime;
  fields: StudioViewFields;
}

/**
 * IMPLEMENTATION: Studio configuration component
 *
 * Features:
 * - Question text input (textarea for rich text)
 * - Correct answer configuration
 * - Explanation field for feedback
 * - Weight/points configuration
 * - Max attempts setting
 * - Feedback mode selection
 */
export const StudioView: React.FC<StudioViewProps> = ({
  runtime,
  fields
}) => {
  // =======================================================================
  // STATE MANAGEMENT - Problem Configuration
  // =======================================================================

  const [displayName, setDisplayName] = useState(fields.display_name);
  const [questionText, setQuestionText] = useState(fields.question_text);
  const [correctAnswer, setCorrectAnswer] = useState(fields.correct_answer);
  const [explanation, setExplanation] = useState(fields.explanation);
  const [weight, setWeight] = useState(fields.weight);
  const [maxAttempts, setMaxAttempts] = useState(fields.max_attempts);
  const [showFeedbackMode, setShowFeedbackMode] = useState(fields.show_feedback_mode);

  // =======================================================================
  // UI STATE
  // =======================================================================

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // =======================================================================
  // HANDLERS
  // =======================================================================

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      // Client-side validation
      const errors: string[] = [];

      if (!displayName.trim()) {
        errors.push('Display name is required');
      }
      if (!questionText.trim()) {
        errors.push('Question text is required');
      }
      if (!correctAnswer.trim()) {
        errors.push('Correct answer is required');
      }
      if (weight <= 0) {
        errors.push('Weight must be greater than 0');
      }
      if (maxAttempts < 0) {
        errors.push('Max attempts cannot be negative (use 0 for unlimited)');
      }

      if (errors.length > 0) {
        setMessage({ type: 'error', text: errors.join('. ') });
        setSaving(false);
        return;
      }

      // ARCHITECTURAL: Notify Studio that save is starting
      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      // Submit to backend
      const result = await xblockPost(runtime, 'save_data', {
        display_name: displayName.trim(),
        question_text: questionText.trim(),
        correct_answer: correctAnswer.trim(),
        explanation: explanation.trim(),
        weight: weight,
        max_attempts: maxAttempts,
        show_feedback_mode: showFeedbackMode
      });

      if (result.success) {
        setMessage({ type: 'success', text: 'Changes saved successfully!' });

        // ARCHITECTURAL: Notify Studio that save completed
        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to save changes.' });

        // Notify save ended even on error
        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      }
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'An error occurred while saving.' });

      // Notify save ended on exception
      if (runtime.notify) {
        runtime.notify('save', { state: 'end' });
      }
    } finally {
      setSaving(false);
    }
  };

  // ARCHITECTURAL: Cancel handler
  // DON'T CHANGE: This notify pattern closes the Studio modal
  const handleCancel = () => {
    if (runtime.notify) {
      runtime.notify('cancel', {});
    }
  };

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <div className="{xblock-name}-studio-view problem-studio-view">
      {/* Success/error messages */}
      {message && (
        <Alert
          variant={message.type === 'success' ? 'success' : 'danger'}
          dismissible
          onClose={() => setMessage(null)}
          className="mb-3"
        >
          {message.text}
        </Alert>
      )}

      <Form>
        {/* Basic Settings Card */}
        <Card className="mb-3">
          <Card.Header title="Basic Settings" />
          <Card.Section>
            {/* Display Name */}
            <Form.Group className="mb-3">
              <Form.Label>Display Name</Form.Label>
              <Form.Control
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g., Quiz Question 1"
              />
              <Form.Text className="text-muted">
                The name students see in the courseware
              </Form.Text>
            </Form.Group>
          </Card.Section>
        </Card>

        {/* Question Content Card */}
        <Card className="mb-3">
          <Card.Header title="Question Content" />
          <Card.Section>
            {/* Question Text */}
            <Form.Group className="mb-3">
              <Form.Label>Question Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="Enter the question text..."
              />
              <Form.Text className="text-muted">
                The question presented to students. HTML is supported.
              </Form.Text>
            </Form.Group>

            {/* Correct Answer */}
            <Form.Group className="mb-3">
              <Form.Label>Correct Answer</Form.Label>
              <Form.Control
                type="text"
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
                placeholder="Enter the correct answer"
              />
              <Form.Text className="text-muted">
                The expected answer for full credit. Case-sensitive by default.
              </Form.Text>
            </Form.Group>

            {/* Explanation */}
            <Form.Group>
              <Form.Label>Explanation (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Enter an explanation shown to students after submission..."
              />
              <Form.Text className="text-muted">
                Detailed explanation or learning guidance shown in feedback
              </Form.Text>
            </Form.Group>

            {/* MULTI-PART EXAMPLE: Multiple questions configuration
            <div className="mt-4">
              <h5>Questions</h5>
              {questions.map((question, index) => (
                <Card key={question.id} className="mb-3">
                  <Card.Section>
                    <Form.Group className="mb-2">
                      <Form.Label>Question {index + 1} Text</Form.Label>
                      <Form.Control
                        type="text"
                        value={question.text}
                        onChange={(e) => updateQuestion(question.id, 'text', e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Correct Answer</Form.Label>
                      <Form.Control
                        type="text"
                        value={question.correctAnswer}
                        onChange={(e) => updateQuestion(question.id, 'correctAnswer', e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Points</Form.Label>
                      <Form.Control
                        type="number"
                        value={question.points}
                        onChange={(e) => updateQuestion(question.id, 'points', parseFloat(e.target.value))}
                      />
                    </Form.Group>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeQuestion(question.id)}
                    >
                      Remove Question
                    </Button>
                  </Card.Section>
                </Card>
              ))}
              <Button variant="outline-primary" onClick={addQuestion}>
                Add Question
              </Button>
            </div>
            */}
          </Card.Section>
        </Card>

        {/* Grading Settings Card */}
        <Card className="mb-3">
          <Card.Header title="Grading Settings" />
          <Card.Section>
            {/* Weight */}
            <Form.Group className="mb-3">
              <Form.Label>Weight (Points)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
              />
              <Form.Text className="text-muted">
                Maximum points available for this problem
              </Form.Text>
            </Form.Group>

            {/* Max Attempts */}
            <Form.Group className="mb-3">
              <Form.Label>Max Attempts</Form.Label>
              <Form.Control
                type="number"
                min="0"
                value={maxAttempts}
                onChange={(e) => setMaxAttempts(parseInt(e.target.value) || 0)}
              />
              <Form.Text className="text-muted">
                Maximum submission attempts allowed. Use 0 for unlimited.
              </Form.Text>
            </Form.Group>

            {/* Feedback Mode */}
            <Form.Group>
              <Form.Label>Feedback Mode</Form.Label>
              <Form.Control
                as="select"
                value={showFeedbackMode}
                onChange={(e) => setShowFeedbackMode(e.target.value as 'immediate' | 'on_submit')}
              >
                <option value="on_submit">On Submit (Default)</option>
                <option value="immediate">Immediate</option>
              </Form.Control>
              <Form.Text className="text-muted">
                When to show feedback to students:
                <br />
                • <strong>On Submit:</strong> Show feedback after each submission
                <br />
                • <strong>Immediate:</strong> Show feedback immediately as student types (use carefully)
              </Form.Text>
            </Form.Group>

            {/* PARTIAL CREDIT EXAMPLE: Grading strategy selection
            <Form.Group className="mt-3">
              <Form.Label>Grading Strategy</Form.Label>
              <Form.Control
                as="select"
                value={gradingStrategy}
                onChange={(e) => setGradingStrategy(e.target.value)}
              >
                <option value="all_or_nothing">All or Nothing</option>
                <option value="partial_credit">Partial Credit</option>
                <option value="weighted">Weighted Parts</option>
              </Form.Control>
              <Form.Text className="text-muted">
                How to calculate scores:
                <br />
                • <strong>All or Nothing:</strong> Full points only if completely correct
                <br />
                • <strong>Partial Credit:</strong> Points based on correctness percentage
                <br />
                • <strong>Weighted Parts:</strong> Each part worth specified points
              </Form.Text>
            </Form.Group>
            */}
          </Card.Section>
        </Card>

        {/* Action buttons */}
        <div className="d-flex justify-content-end mt-4">
          <Button
            variant="tertiary"
            onClick={handleCancel}
            disabled={saving}
            className="mr-2"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </Form>
    </div>
  );
};
