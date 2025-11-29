/**
 * Studio View Component for Sort Into Bins XBlock
 *
 * Main container that orchestrates between ListView and EditViews (Bin/Item).
 * Uses MFE modal pattern with view mode switching.
 */

import React, { useState, useEffect, useRef } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import ModalDialog from '@openedx/paragon/dist/Modal/ModalDialog';
import { xblockPost } from '../common/api';
import type { StudioViewProps, BinDefinition, SortableItem } from '../common/types';
import { EditBinView } from './EditBinView';
import { EditItemView } from './EditItemView';
import { ModalHeader } from './components/ModalHeader';
import { ModalFooter } from './components/ModalFooter';
import { EditorLayout } from './components/EditorLayout';
import { MainContentArea } from './components/MainContentArea';
import { SettingsSidebar } from './components/SettingsSidebar';
import './styles/minimal-paragon.scss';

/**
 * View modes
 */
type ViewMode = 'list' | 'edit-bin' | 'edit-item';

export const StudioView: React.FC<StudioViewProps> = ({
  runtime,
  fields
}) => {
  // =======================================================================
  // STATE - Form Fields
  // =======================================================================

  const [displayName, setDisplayName] = useState(fields.display_name);
  const [instructions, setInstructions] = useState(fields.instructions);
  const [explanation, setExplanation] = useState(fields.explanation);
  const [bins, setBins] = useState<BinDefinition[]>(fields.bins);
  const [items, setItems] = useState<SortableItem[]>(fields.items);
  const [weight, setWeight] = useState(fields.weight);
  const [maxAttempts, setMaxAttempts] = useState(fields.max_attempts);
  const [unlimited, setUnlimited] = useState(fields.max_attempts === 0);
  const [randomizeItems, setRandomizeItems] = useState(fields.randomize_items);
  const [feedbackMode, setFeedbackMode] = useState(fields.show_feedback_mode);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(fields.show_correct_answers);

  // =======================================================================
  // STATE - UI
  // =======================================================================

  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingType, setEditingType] = useState<'bin' | 'item' | null>(null);
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Ref to edit view's save function
  const editViewSaveRef = useRef<(() => void) | null>(null);

  // =======================================================================
  // EFFECTS - Disable Legacy CSS
  // =======================================================================

  useEffect(() => {
    const legacySheets = [
      '/static/studio/liverpool-dental-legacy/css/studio-main-v1.css',
      '/static/studio/liverpool-dental-legacy/css/course-unit-mfe-iframe-bundle.css'
    ];

    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      if (legacySheets.some(path => link.href.includes(path))) {
        link.disabled = true;
      }
    });
  }, []);

  // =======================================================================
  // HANDLERS - Bins
  // =======================================================================

  const handleAddBin = () => {
    if (bins.length >= 10) {
      setMessage({ type: 'error', text: 'Maximum 10 bins allowed' });
      return;
    }

    const newBin: BinDefinition = {
      id: `bin_${Date.now()}`,
      label: '',
      description: '',
      max_capacity: 0,
    };

    setBins([...bins, newBin]);
    setEditingIndex(bins.length);
    setEditingType('bin');
    setViewMode('edit-bin');
  };

  const handleEditBin = (index: number) => {
    setEditingIndex(index);
    setEditingType('bin');
    setViewMode('edit-bin');
  };

  const handleSaveBin = (updatedBin: BinDefinition) => {
    const newBins = [...bins];
    newBins[editingIndex] = updatedBin;
    setBins(newBins);

    setViewMode('list');
    setEditingIndex(-1);
    setEditingType(null);
    setMessage({ type: 'success', text: 'Bin saved' });
  };

  const handleDeleteBin = (index: number) => {
    if (bins.length === 1) {
      setMessage({ type: 'error', text: 'At least one bin is required' });
      return;
    }

    const binToDelete = bins[index];
    const itemsUsingBin = items.filter(item => item.correct_bin_id === binToDelete.id);

    if (itemsUsingBin.length > 0) {
      if (!confirm(`This bin is referenced by ${itemsUsingBin.length} item(s). Delete anyway?`)) {
        return;
      }
    }

    setBins(bins.filter((_, i) => i !== index));
    setMessage({ type: 'success', text: 'Bin deleted' });
  };

  const handleBinsReorder = (newBins: BinDefinition[]) => {
    setBins(newBins);
  };

  // =======================================================================
  // HANDLERS - Items
  // =======================================================================

  const handleAddItem = () => {
    if (items.length >= 50) {
      setMessage({ type: 'error', text: 'Maximum 50 items allowed' });
      return;
    }

    if (bins.length === 0) {
      setMessage({ type: 'error', text: 'Please create at least one bin first' });
      return;
    }

    const newItem: SortableItem = {
      id: `item_${Date.now()}`,
      type: 'text',
      content: '',
      correct_bin_id: bins[0].id,
    };

    setItems([...items, newItem]);
    setEditingIndex(items.length);
    setEditingType('item');
    setViewMode('edit-item');
  };

  const handleEditItem = (index: number) => {
    setEditingIndex(index);
    setEditingType('item');
    setViewMode('edit-item');
  };

  const handleSaveItem = (updatedItem: SortableItem) => {
    const newItems = [...items];
    newItems[editingIndex] = updatedItem;
    setItems(newItems);

    setViewMode('list');
    setEditingIndex(-1);
    setEditingType(null);
    setMessage({ type: 'success', text: 'Item saved' });
  };

  const handleDeleteItem = (index: number) => {
    if (items.length === 1) {
      setMessage({ type: 'error', text: 'At least one item is required' });
      return;
    }

    setItems(items.filter((_, i) => i !== index));
    setMessage({ type: 'success', text: 'Item deleted' });
  };

  const handleItemsReorder = (newItems: SortableItem[]) => {
    setItems(newItems);
  };

  // =======================================================================
  // HANDLERS - Edit View Navigation
  // =======================================================================

  const handleCancelEdit = () => {
    // If editing new unsaved bin/item, remove it
    if (editingType === 'bin') {
      const bin = bins[editingIndex];
      if (!bin.label && !bin.description) {
        setBins(bins.filter((_, i) => i !== editingIndex));
      }
    } else if (editingType === 'item') {
      const item = items[editingIndex];
      if (!item.content) {
        setItems(items.filter((_, i) => i !== editingIndex));
      }
    }

    setViewMode('list');
    setEditingIndex(-1);
    setEditingType(null);
  };

  // =======================================================================
  // HANDLERS - Save/Cancel All
  // =======================================================================

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

      if (bins.length === 0) {
        setMessage({ type: 'error', text: 'At least one bin is required' });
        setSaving(false);
        return;
      }

      if (items.length === 0) {
        setMessage({ type: 'error', text: 'At least one item is required' });
        setSaving(false);
        return;
      }

      // Validate each bin
      for (let i = 0; i < bins.length; i++) {
        const bin = bins[i];
        if (!bin.label.trim()) {
          setMessage({ type: 'error', text: `Bin ${i + 1}: Label is required` });
          setSaving(false);
          return;
        }
      }

      // Validate each item
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (!item.content.trim()) {
          setMessage({ type: 'error', text: `Item ${i + 1}: Content is required` });
          setSaving(false);
          return;
        }
      }

      // Notify Studio save starting
      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      // POST to backend
      const result = await xblockPost(runtime, 'save_data', {
        display_name: displayName,
        instructions,
        randomize_items: randomizeItems,
        explanation,
        bins,
        items,
        weight,
        max_attempts: unlimited ? 0 : maxAttempts,
        grading_mode: 'partial_credit',
        show_correct_answers: showCorrectAnswers,
        show_feedback_mode: feedbackMode,
      });

      if (result.success) {
        setMessage({ type: 'success', text: 'Changes saved successfully!' });

        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to save changes.' });

        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      }
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'An error occurred while saving.' });

      if (runtime.notify) {
        runtime.notify('save', { state: 'end' });
      }
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (runtime.notify) {
      runtime.notify('cancel', {});
    }
  };

  // Trigger edit view save
  const handleSaveEditView = () => {
    if (editViewSaveRef.current) {
      editViewSaveRef.current();
    }
  };

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <div className="modal-container-fullscreen">
      <ModalHeader
        title={displayName || "Sort Into Bins"}
        onClose={handleCancel}
        onTitleChange={setDisplayName}
      />

      <ModalDialog.Body className="pb-0">
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

        {viewMode === 'list' ? (
          <EditorLayout
            mainContent={
              <MainContentArea
                instructions={instructions}
                explanation={explanation}
                bins={bins}
                items={items}
                onInstructionsChange={setInstructions}
                onExplanationChange={setExplanation}
                onBinsReorder={handleBinsReorder}
                onItemsReorder={handleItemsReorder}
                onAddBin={handleAddBin}
                onEditBin={handleEditBin}
                onDeleteBin={handleDeleteBin}
                onAddItem={handleAddItem}
                onEditItem={handleEditItem}
                onDeleteItem={handleDeleteItem}
              />
            }
            sidebar={
              <SettingsSidebar
                weight={weight}
                maxAttempts={maxAttempts}
                unlimited={unlimited}
                randomizeItems={randomizeItems}
                feedbackMode={feedbackMode}
                showCorrectAnswers={showCorrectAnswers}
                onWeightChange={setWeight}
                onMaxAttemptsChange={setMaxAttempts}
                onUnlimitedChange={setUnlimited}
                onRandomizeChange={setRandomizeItems}
                onFeedbackModeChange={setFeedbackMode}
                onShowCorrectAnswersChange={setShowCorrectAnswers}
              />
            }
          />
        ) : viewMode === 'edit-bin' ? (
          <EditBinView
            bin={bins[editingIndex]}
            onSave={handleSaveBin}
            onCancel={handleCancelEdit}
            saveRef={editViewSaveRef}
          />
        ) : (
          <EditItemView
            item={items[editingIndex]}
            bins={bins}
            onSave={handleSaveItem}
            onCancel={handleCancelEdit}
            saveRef={editViewSaveRef}
          />
        )}
      </ModalDialog.Body>

      <ModalFooter
        viewMode={viewMode === 'list' ? 'list' : 'edit'}
        editingType={editingType}
        onSave={handleSave}
        onCancel={handleCancel}
        saveDisabled={saving || bins.length === 0 || items.length === 0}
        onSavePair={handleSaveEditView}
        onBackToList={handleCancelEdit}
        savePairDisabled={false}
      />
    </div>
  );
};
