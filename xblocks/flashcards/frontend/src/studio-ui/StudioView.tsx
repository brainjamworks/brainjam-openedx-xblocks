/**
 * Flashcards Studio View Component
 *
 * Main container that orchestrates between ListView and EditView.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import { xblockPost, XBlockRuntime } from '../common/api';
import { ListView } from './ListView';
import { EditView } from './EditView';

/**
 * Single flashcard structure
 */
interface FlashCard {
  front_title: string;
  front_subtitle: string;
  back_text: string;
}

/**
 * Props for the studio editor component
 */
interface StudioViewProps {
  runtime: XBlockRuntime;
  fields: {
    display_name: string;
    cards: FlashCard[];
  };
}

/**
 * View modes
 */
type ViewMode = 'list' | 'edit';

/**
 * Studio editor component for flashcards
 */
export const StudioView: React.FC<StudioViewProps> = ({
  runtime,
  fields
}) => {
  // State management for form fields
  const [displayName, setDisplayName] = useState(fields.display_name);
  const [cards, setCards] = useState<FlashCard[]>(fields.cards);

  // UI state
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  /**
   * Add new card - creates empty card and opens editor
   */
  const handleAddCard = () => {
    if (cards.length >= 100) {
      setMessage({ type: 'error', text: 'Maximum 100 cards allowed' });
      return;
    }

    // Add empty card at end
    const newCards = [
      ...cards,
      {
        front_title: '',
        front_subtitle: '',
        back_text: ''
      }
    ];
    setCards(newCards);

    // Open editor for new card
    setEditingIndex(newCards.length - 1);
    setViewMode('edit');
  };

  /**
   * Edit existing card
   */
  const handleEditCard = (index: number) => {
    setEditingIndex(index);
    setViewMode('edit');
  };

  /**
   * Delete card with confirmation
   */
  const handleDeleteCard = (index: number) => {
    if (cards.length === 1) {
      setMessage({ type: 'error', text: 'At least one card is required' });
      return;
    }

    // Show confirmation
    if (!confirm(`Are you sure you want to delete Card ${index + 1}?`)) {
      return;
    }

    setCards(cards.filter((_, i) => i !== index));
    setMessage({ type: 'success', text: 'Card deleted' });
  };

  /**
   * Move card up
   */
  const handleMoveUp = (index: number) => {
    if (index === 0) return;

    const newCards = [...cards];
    [newCards[index - 1], newCards[index]] = [newCards[index], newCards[index - 1]];
    setCards(newCards);
  };

  /**
   * Move card down
   */
  const handleMoveDown = (index: number) => {
    if (index === cards.length - 1) return;

    const newCards = [...cards];
    [newCards[index], newCards[index + 1]] = [newCards[index + 1], newCards[index]];
    setCards(newCards);
  };

  /**
   * Reorder card via drag and drop
   */
  const handleReorder = (fromIndex: number, toIndex: number) => {
    const newCards = [...cards];
    const [movedCard] = newCards.splice(fromIndex, 1);
    newCards.splice(toIndex, 0, movedCard);
    setCards(newCards);
  };

  /**
   * Save card from EditView
   */
  const handleSaveCard = (updatedCard: FlashCard) => {
    const newCards = [...cards];
    newCards[editingIndex] = updatedCard;
    setCards(newCards);

    // Return to list view
    setViewMode('list');
    setEditingIndex(-1);
    setMessage({ type: 'success', text: 'Card saved' });
  };

  /**
   * Cancel editing - return to list
   */
  const handleCancelEdit = () => {
    // If this was a new unsaved card, remove it
    const card = cards[editingIndex];
    if (editingIndex !== -1 && !card.front_title && !card.front_subtitle && !card.back_text) {
      setCards(cards.filter((_, i) => i !== editingIndex));
    }

    setViewMode('list');
    setEditingIndex(-1);
  };

  /**
   * Save all changes to XBlock
   */
  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      // Client-side validation
      if (!displayName.trim()) {
        setMessage({ type: 'error', text: 'Display name is required' });
        setSaving(false);
        return;
      }

      // Validate each card
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];

        if (!card.front_title.trim()) {
          setMessage({ type: 'error', text: `Card ${i + 1}: Front title is required` });
          setSaving(false);
          return;
        }

        if (!card.back_text.trim()) {
          setMessage({ type: 'error', text: `Card ${i + 1}: Back content is required` });
          setSaving(false);
          return;
        }
      }

      // ARCHITECTURAL: Notify Studio that save is starting
      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      // ARCHITECTURAL: Use xblockPost helper for CSRF-protected requests
      const result = await xblockPost(runtime, 'save_data', {
        display_name: displayName,
        cards: cards,
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

  /**
   * ARCHITECTURAL: Cancel handler
   * DON'T CHANGE: This notify pattern closes the Studio modal
   */
  const handleCancel = () => {
    if (runtime.notify) {
      runtime.notify('cancel', {});
    }
  };

  return (
    <div className="flashcards-studio-view">
      {/* Alert messages */}
      {message && (
        <Alert
          variant={message.type === 'success' ? 'success' : 'danger'}
          dismissible
          onClose={() => setMessage(null)}
        >
          {message.text}
        </Alert>
      )}

      <Form>
        {/* Display Name field - always visible */}
        <Form.Group className="mb-4">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Enter display name"
          />
        </Form.Group>

        {/* Render ListView or EditView based on mode */}
        {viewMode === 'list' ? (
          <ListView
            cards={cards}
            onAddCard={handleAddCard}
            onEditCard={handleEditCard}
            onDeleteCard={handleDeleteCard}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown}
            onReorder={handleReorder}
          />
        ) : (
          <EditView
            card={cards[editingIndex]}
            cardIndex={editingIndex}
            totalCards={cards.length}
            onSave={handleSaveCard}
            onCancel={handleCancelEdit}
          />
        )}

        {/* ARCHITECTURAL: Save/Cancel buttons - only visible in list view */}
        {viewMode === 'list' && (
          <div className="flashcards-sticky-actions d-flex justify-content-end border-top">
            <Button
              variant="tertiary"
              onClick={handleCancel}
              disabled={saving}
              className="mr-2"
            >
              Close Without Saving
            </Button>
            <Button
              variant="primary"
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save All Changes'}
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};
