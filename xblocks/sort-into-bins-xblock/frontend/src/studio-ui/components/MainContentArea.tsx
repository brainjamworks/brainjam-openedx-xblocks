/**
 * MainContentArea Component
 *
 * Displays the main editor content:
 * - Instructions textarea
 * - Bins list with drag-and-drop reordering (@dnd-kit)
 * - Items list with drag-and-drop reordering (@dnd-kit)
 * - Explanation textarea
 * - Add/Edit/Delete actions
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import ActionRow from '@openedx/paragon/dist/ActionRow';
import { Add } from '@openedx/paragon/icons';
import type { BinDefinition, SortableItem } from '../../common/types';
import DraggableList, { SortableItem as SortableListItem } from '../../generic/DraggableList';

interface MainContentAreaProps {
  instructions: string;
  explanation: string;
  bins: BinDefinition[];
  items: SortableItem[];
  onInstructionsChange: (value: string) => void;
  onExplanationChange: (value: string) => void;
  onBinsReorder: (newBins: BinDefinition[]) => void;
  onItemsReorder: (newItems: SortableItem[]) => void;
  onAddBin: () => void;
  onEditBin: (index: number) => void;
  onDeleteBin: (index: number) => void;
  onAddItem: () => void;
  onEditItem: (index: number) => void;
  onDeleteItem: (index: number) => void;
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
  instructions,
  explanation,
  bins,
  items,
  onInstructionsChange,
  onExplanationChange,
  onBinsReorder,
  onItemsReorder,
  onAddBin,
  onEditBin,
  onDeleteBin,
  onAddItem,
  onEditItem,
  onDeleteItem,
}) => {
  return (
    <div className="main-content-area">
      {/* Instructions */}
      <Form.Group className="mb-4">
        <div className="h4 mb-3">Instructions</div>
        <Form.Control
          as="textarea"
          rows={3}
          value={instructions}
          onChange={(e) => onInstructionsChange(e.target.value)}
          placeholder="Drag each item into the bin where it belongs."
        />
        <Form.Text>Supports HTML. Shown to students above the sorting interface.</Form.Text>
      </Form.Group>

      {/* Bins Section */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="h4">Bins ({bins.length} / 10)</div>
          <Button
            variant="primary"
            iconBefore={Add}
            onClick={onAddBin}
            disabled={bins.length >= 10}
          >
            Add Bin
          </Button>
        </div>

        {bins.length === 0 ? (
          <div className="text-center p-5 bg-light rounded mb-4">
            <p className="mb-3">No bins yet. Click "Add Bin" to create your first bin.</p>
          </div>
        ) : (
          <DraggableList
            itemList={bins}
            setState={onBinsReorder}
            updateOrder={() => onBinsReorder}
          >
            {bins.map((bin, index) => {
              const capacityText = bin.max_capacity === 0
                ? 'Unlimited capacity'
                : `Max ${bin.max_capacity} item${bin.max_capacity === 1 ? '' : 's'}`;

              return (
                <SortableListItem
                  key={bin.id}
                  id={bin.id}
                  actions={
                    <>
                      <span className="font-weight-bold">Bin {index + 1}</span>
                      <ActionRow.Spacer />
                      <Button variant="link" onClick={() => onEditBin(index)} size="sm">
                        Edit
                      </Button>
                      <Button
                        variant="link"
                        onClick={() => onDeleteBin(index)}
                        size="sm"
                        className="text-danger"
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
                      <strong>Label:</strong> {bin.label || '(No label)'}
                    </div>
                    {bin.description && (
                      <div className="mb-2">
                        <strong>Description:</strong> {bin.description}
                      </div>
                    )}
                    <div>
                      <strong>Capacity:</strong> {capacityText}
                    </div>
                  </div>
                </SortableListItem>
              );
            })}
          </DraggableList>
        )}
      </div>

      {/* Items Section */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="h4">Items ({items.length} / 50)</div>
          <Button
            variant="primary"
            iconBefore={Add}
            onClick={onAddItem}
            disabled={items.length >= 50 || bins.length === 0}
          >
            Add Item
          </Button>
        </div>

        {bins.length === 0 ? (
          <div className="alert alert-warning">
            Please create at least one bin before adding items.
          </div>
        ) : items.length === 0 ? (
          <div className="text-center p-5 bg-light rounded mb-4">
            <p className="mb-3">No items yet. Click "Add Item" to create your first item.</p>
          </div>
        ) : (
          <DraggableList
            itemList={items}
            setState={onItemsReorder}
            updateOrder={() => onItemsReorder}
          >
            {items.map((item, index) => {
              const correctBin = bins.find(b => b.id === item.correct_bin_id);
              const correctBinLabel = correctBin?.label || 'Unknown Bin';

              const renderContentPreview = () => {
                switch (item.type) {
                  case 'text':
                    return truncate(item.content, 100);
                  case 'image':
                    return 'Image: ' + truncate(item.content, 80);
                  case 'html':
                    const preview = item.content.replace(/<[^>]*>/g, '').trim();
                    return 'HTML: ' + truncate(preview, 80);
                  default:
                    return truncate(item.content, 100);
                }
              };

              return (
                <SortableListItem
                  key={item.id}
                  id={item.id}
                  actions={
                    <>
                      <span className="font-weight-bold">Item {index + 1}</span>
                      <ActionRow.Spacer />
                      <Button variant="link" onClick={() => onEditItem(index)} size="sm">
                        Edit
                      </Button>
                      <Button
                        variant="link"
                        onClick={() => onDeleteItem(index)}
                        size="sm"
                        className="text-danger"
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
                      <strong>Content:</strong> {renderContentPreview()}
                    </div>
                    <div className="mb-2">
                      <strong>Correct Bin:</strong> {correctBinLabel}
                    </div>
                    <div>
                      <strong>Type:</strong> {item.type}
                    </div>
                  </div>
                </SortableListItem>
              );
            })}
          </DraggableList>
        )}
      </div>

      {/* Explanation */}
      <Form.Group className="mb-4">
        <div className="h4 mb-3">Explanation (Optional)</div>
        <Form.Control
          as="textarea"
          rows={3}
          value={explanation}
          onChange={(e) => onExplanationChange(e.target.value)}
          placeholder="Optional explanation shown after submission..."
        />
        <Form.Text>Supports HTML. Shown after students submit their answer.</Form.Text>
      </Form.Group>
    </div>
  );
};
