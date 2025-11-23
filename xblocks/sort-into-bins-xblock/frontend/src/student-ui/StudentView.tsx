import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Button from '@openedx/paragon/dist/Button';
import Alert from '@openedx/paragon/dist/Alert';
import { xblockPost } from '../common/api';
import type {
  StudentViewProps,
  StudentPlacements,
  StudentPlacement,
  SubmissionResult,
  ImmediateFeedbackResult,
  BatchSubmissionResult,
  ShowAnswerResult,
  BinDefinition,
  SortableItem,
} from '../common/types';
import { DraggableItem } from './components/DraggableItem';
import { BinZone } from './components/BinZone';
import { FeedbackDisplay } from './components/FeedbackDisplay';
import { ItemsSourceZone } from './components/ItemsSourceZone';
import './styles/minimal-paragon.scss';

export const StudentView: React.FC<StudentViewProps> = ({
  runtime,
  problemTitle,
  instructions,
  bins,
  items,
  studentPlacements: initialPlacements,
  currentScore,
  maxScore,
  attemptsRemaining,
  gradingMode,
  showCorrectAnswers,
  feedbackMode,
  lastSubmissionResult,
  isGraded,
}) => {
  // State management
  const [placements, setPlacements] = useState<StudentPlacements>(initialPlacements);
  const [localScore, setLocalScore] = useState(currentScore);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(
    lastSubmissionResult || null
  );
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [batchResult, setBatchResult] = useState<BatchSubmissionResult | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState<Record<string, string> | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Computed: When to show feedback
  const showFeedback = feedbackMode === 'immediate' || hasSubmitted;

  // Helper: Extract bin ID from placement (handles both old and new format)
  const getBinIdFromPlacement = useCallback((placement: string | StudentPlacement): string | null => {
    if (typeof placement === 'string') {
      return placement;
    }
    return placement.binId;
  }, []);

  // Helper: Check if item is correct (for immediate mode)
  const isItemCorrect = useCallback((itemId: string): boolean | undefined => {
    const placement = placements[itemId];
    if (!placement) return undefined;

    if (typeof placement === 'object' && 'correct' in placement) {
      return placement.correct;
    }
    return undefined;
  }, [placements]);

  // Calculate bin capacities
  const getBinCapacity = useCallback((binId: string) => {
    const bin = bins.find((b) => b.id === binId);
    if (!bin) return { current: 0, max: 0, isFull: false, isNearFull: false };

    const current = Object.values(placements).filter((placement) => {
      const placementBinId = getBinIdFromPlacement(placement);
      return placementBinId === binId;
    }).length;
    const max = bin.max_capacity;
    const isFull = max > 0 && current >= max;
    const isNearFull = max > 0 && current >= max - 1;

    return { current, max, isFull, isNearFull };
  }, [placements, bins, getBinIdFromPlacement]);

  // Get items in a specific bin
  const getItemsInBin = useCallback((binId: string): SortableItem[] => {
    const itemIds = Object.entries(placements)
      .filter(([_, placement]) => {
        const placementBinId = getBinIdFromPlacement(placement);
        return placementBinId === binId;
      })
      .map(([itemId]) => itemId);

    return itemIds
      .map((itemId) => items.find((item) => item.id === itemId))
      .filter((item): item is SortableItem => item !== undefined);
  }, [placements, items, getBinIdFromPlacement]);

  // Get unplaced items (in source zone)
  const getUnplacedItems = useCallback((): SortableItem[] => {
    const placedItemIds = Object.keys(placements);
    return items.filter((item) => !placedItemIds.includes(item.id));
  }, [placements, items]);

  // Handle item placement with mode branching
  const handleItemPlacement = useCallback(async (itemId: string, binId: string | null) => {
    // MODE 1: On Submit - Only update local state
    if (feedbackMode === 'on_submit') {
      setPlacements((prev) => {
        const newPlacements = { ...prev };

        if (binId === null) {
          // Remove from bin (return to source)
          delete newPlacements[itemId];
        } else {
          // Place in bin (store as object for consistency)
          newPlacements[itemId] = { binId, correct: false };
        }

        return newPlacements;
      });

      // Clear previous submission result when user makes changes
      setSubmissionResult(null);
      setBatchResult(null);
      setError(null);
      return;
    }

    // MODE 2: Immediate - Submit to server for instant feedback
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await xblockPost<ImmediateFeedbackResult>(
        runtime,
        'submit_item',
        { itemId, binId }
      );

      if (result.success) {
        // Update placements with correctness feedback
        setPlacements((prev) => {
          const newPlacements = { ...prev };

          if (binId === null) {
            // Remove from bin
            delete newPlacements[itemId];
          } else {
            // Place in bin with correctness
            newPlacements[itemId] = {
              binId,
              correct: result.correct
            };
          }

          return newPlacements;
        });

        // Update score
        setLocalScore(result.score);
      } else {
        setError(result.error || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Immediate feedback error:', err);
    } finally {
      setIsSubmitting(false);
    }
  }, [runtime, feedbackMode]);

  // Handle batch submission (on_submit mode only)
  const handleSubmit = async () => {
    // Validate all items are placed
    if (Object.keys(placements).length < items.length) {
      setError('Please place all items into bins before submitting.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const result = await xblockPost<BatchSubmissionResult>(
        runtime,
        'submit_placements',
        { placements }
      );

      if (result.success) {
        // Update placements with correctness from server
        const updatedPlacements: StudentPlacements = {};
        Object.entries(result.results).forEach(([itemId, itemResult]) => {
          updatedPlacements[itemId] = {
            binId: itemResult.binId,
            correct: itemResult.correct
          };
        });

        setPlacements(updatedPlacements);
        setLocalScore(result.score);
        setHasSubmitted(true);
        setBatchResult(result);
        setSubmissionResult(null); // Clear old format result
      } else {
        setError(result.error || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while submitting. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle reset (on_submit mode only)
  const handleReset = useCallback(() => {
    setPlacements({});
    setHasSubmitted(false);
    setBatchResult(null);
    setSubmissionResult(null);
    setShowAnswer(false);
    setCorrectAnswers(null);
    setError(null);
  }, []);

  // Handle show answer (on_submit mode only)
  const handleShowAnswer = useCallback(async () => {
    if (showAnswer) {
      // Hide answer
      setShowAnswer(false);
      setCorrectAnswers(null);
      return;
    }

    try {
      const result = await xblockPost<ShowAnswerResult>(runtime, 'show_answer', {});

      if (result.success) {
        setCorrectAnswers(result.correctAnswers);
        setShowAnswer(true);
      } else {
        setError(result.error || 'Failed to load answers.');
      }
    } catch (err) {
      setError('An error occurred while loading answers.');
      console.error('Show answer error:', err);
    }
  }, [runtime, showAnswer]);

  // Check if submission is allowed
  const canSubmit = attemptsRemaining === null || attemptsRemaining > 0;
  const allItemsPlaced = Object.keys(placements).length === items.length;

  // Calculate score display metrics (for immediate mode)
  const totalItems = items.length;
  const correctItems = Object.values(placements).filter(placement => {
    if (typeof placement === 'object' && 'correct' in placement) {
      return placement.correct === true;
    }
    return false;
  }).length;
  const percentage = maxScore > 0 ? (localScore / maxScore) * 100 : 0;
  const allCorrect = correctItems === totalItems && totalItems > 0;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="sort-into-bins-student-view">
        {/* Header */}
        <div className="problem-header">
          <h3 className="problem-title">{problemTitle}</h3>
          <div className="problem-points">
            {maxScore.toFixed(maxScore % 1 === 0 ? 0 : 1)}/{maxScore.toFixed(maxScore % 1 === 0 ? 0 : 1)} point{maxScore !== 1 ? 's' : ''} ({isGraded ? 'graded' : 'ungraded'})
          </div>
        </div>

        {/* Instructions (problem question) */}
        {instructions && (
          <div
            className="problem-question"
            dangerouslySetInnerHTML={{ __html: instructions }}
          />
        )}

        {/* Error display - shows errors OR attempts exhausted */}
        {(error || attemptsRemaining === 0) && (
          <Alert variant="danger" className="mb-3">
            {error || (attemptsRemaining === 0 ? 'Maximum attempts exceeded' : null)}
          </Alert>
        )}

        {/* Score display (immediate mode only) */}
        {feedbackMode === 'immediate' && (
          <div className={`score-display ${allCorrect ? 'score-correct' : 'score-incorrect'}`}>
            <strong>Current Score:</strong> {localScore.toFixed(2)} / {maxScore.toFixed(2)}
            {' '}({percentage.toFixed(0)}% - {correctItems} of {totalItems} correct)
          </div>
        )}

        {/* Main sorting interface */}
        <div className="sorting-interface">
          {/* Source zone (unplaced items) */}
          <ItemsSourceZone
            items={getUnplacedItems()}
            onItemPlacement={handleItemPlacement}
          />

          {/* Bins grid */}
          <div className="bins-grid">
            {bins.map((bin) => {
              const capacity = getBinCapacity(bin.id);
              const itemsInBin = getItemsInBin(bin.id);

              // Build item correctness map for this bin
              const itemCorrectness: Record<string, boolean | undefined> = {};
              itemsInBin.forEach((item) => {
                itemCorrectness[item.id] = showFeedback ? isItemCorrect(item.id) : undefined;
              });

              return (
                <BinZone
                  key={bin.id}
                  bin={bin}
                  items={itemsInBin}
                  allItems={items}
                  capacity={capacity}
                  onItemPlacement={handleItemPlacement}
                  itemCorrectness={itemCorrectness}
                  showAnswer={showAnswer}
                  correctAnswers={correctAnswers}
                  disabled={isSubmitting || (feedbackMode === 'on_submit' && hasSubmitted)}
                />
              );
            })}
          </div>
        </div>

        {/* Controls (on_submit mode only) */}
        {feedbackMode === 'on_submit' && (
          <div className="problem-controls">
            {/* Action buttons - only after submission */}
            {hasSubmitted && (
              <div className="problem-action-buttons-wrapper">
                <div className="problem-action-button-wrapper">
                  <button
                    className="problem-action-btn btn-link btn-small"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
                <div className="problem-action-button-wrapper">
                  <button
                    className="problem-action-btn btn-link btn-small"
                    onClick={handleShowAnswer}
                  >
                    {showAnswer ? 'Hide Answer' : 'Show Answer'}
                  </button>
                </div>
              </div>
            )}

            {/* Submit button container */}
            <div className="submit-attempt-container">
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={!canSubmit || !allItemsPlaced || isSubmitting || hasSubmitted}
                className="submit btn-brand"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>

              {/* Submission feedback notifications */}
              {hasSubmitted && batchResult && (
                <div className="submission-feedback">
                  {/* Correctness Notification */}
                  <div className={`notification notification-${batchResult.allCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="notification-icon">
                      {batchResult.allCorrect ? '✓' : '✗'}
                    </div>
                    <div className="notification-content">
                      <p>
                        {batchResult.allCorrect ? 'Correct' : 'Incorrect'}
                        ({batchResult.score.toFixed(2)}/{batchResult.maxScore.toFixed(2)} point{batchResult.maxScore !== 1 ? 's' : ''})
                      </p>
                    </div>
                  </div>

                  {/* Explanation Notification */}
                  {batchResult.explanation && (
                    <div className="notification notification-explanation">
                      <div className="notification-icon">📋</div>
                      <div className="notification-content">
                        <div dangerouslySetInnerHTML={{ __html: batchResult.explanation }} />
                      </div>
                    </div>
                  )}

                  {/* Answer visibility notification */}
                  {showAnswer && (
                    <div className="notification notification-answer">
                      <div className="notification-icon">ℹ</div>
                      <div className="notification-content">
                        <p>Correct answers are shown below in each category</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </DndProvider>
  );
};
