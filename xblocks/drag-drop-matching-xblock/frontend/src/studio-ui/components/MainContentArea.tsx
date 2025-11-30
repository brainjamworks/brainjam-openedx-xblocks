/**
 * MainContentArea Component
 *
 * Displays the main editor content:
 * - Question/Instructions textarea
 * - Matching pairs list with drag-and-drop reordering (@dnd-kit)
 * - Add/Edit/Delete pair actions
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import ActionRow from '@openedx/paragon/dist/ActionRow';
import { Add, Edit, Delete } from '@openedx/paragon/icons';
import type { MatchingPair } from '../../common/types';
import DraggableList, { SortableItem } from '../../generic/DraggableList';

interface MainContentAreaProps {
  questionText: string;
  pairs: MatchingPair[];
  onQuestionTextChange: (value: string) => void;
  onAddPair: () => void;
  onEditPair: (index: number) => void;
  onDeletePair: (index: number) => void;
  onReorder: (newPairs: MatchingPair[]) => void;
}

/**
 * Truncate text for preview
 */
const truncate = (text: string, maxLength: number = 60): string => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const MainContentArea: React.FC<MainContentAreaProps> = ({
  questionText,
  pairs,
  onQuestionTextChange,
  onAddPair,
  onEditPair,
  onDeletePair,
  onReorder,
}) => {
  return (
    <div className="main-content-area">
      {/* Instructions */}
      <Form.Group className="mb-4">
        <div className="h4 mb-3">Instructions</div>
        <Form.Control
          as="textarea"
          rows={3}
          value={questionText}
          onChange={(e) => onQuestionTextChange(e.target.value)}
          placeholder="Enter the question or instructions for students"
        />
      </Form.Group>

      {/* Header with counter + Add button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="h4">Matching Pairs ({pairs.length} / 20)</div>
        <Button
          variant="primary"
          iconBefore={Add}
          onClick={onAddPair}
          disabled={pairs.length >= 20}
        >
          Add New Pair
        </Button>
      </div>

      {/* Empty state */}
      {pairs.length === 0 && (
        <div className="text-center p-5 bg-light rounded mb-4">
          <p className="mb-3">No matching pairs yet. Click "Add New Pair" to create your first pair.</p>
        </div>
      )}

      {/* Pairs list with @dnd-kit drag-and-drop */}
      <DraggableList
        itemList={pairs}
        setState={onReorder}
        updateOrder={() => onReorder}
      >
        {pairs.map((pair, index) => (
          <SortableItem
            key={pair.id}
            id={pair.id}
            actions={
              <>
                <span className="font-weight-bold">Pair {index + 1}</span>
                <ActionRow.Spacer />
                <Button variant="link" size="sm" onClick={() => onEditPair(index)} iconBefore={Edit}>
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => onDeletePair(index)}
                  disabled={pairs.length === 1}
                  size="sm"
                  iconBefore={Delete}
                >
                  Delete
                </Button>
              </>
            }
            actionStyle={{
              borderRadius: '8px 8px 0 0',
              padding: '0.5rem 1rem',
              background: '#FBFAF9',
              borderBottom: 'solid 1px #E1DDDB',
            }}
            componentStyle={{ marginBottom: '1rem' }}
          >
            <div className="p-3">
              <div className="mb-2">
                <strong>Term:</strong> {pair.term || '(No term)'}
              </div>
              <div>
                <strong>Description:</strong> {truncate(pair.description, 100)}
              </div>
            </div>
          </SortableItem>
        ))}
      </DraggableList>
    </div>
  );
};
