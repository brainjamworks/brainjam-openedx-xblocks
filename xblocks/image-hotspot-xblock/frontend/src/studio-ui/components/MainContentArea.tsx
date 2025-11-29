/**
 * MainContentArea Component
 *
 * Main editor content for image hotspot configuration.
 *
 * Features:
 * - Image upload section (dropzone + preview + asset picker)
 * - Hotspots section with counter and "Add Hotspot" button
 * - HotspotList component with drag-drop reordering
 * - Empty states and validation alerts
 *
 * Pattern: Based on MainContentArea from sort-into-bins
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import Alert from '@openedx/paragon/dist/Alert';
import Icon from '@openedx/paragon/dist/Icon';
import Form from '@openedx/paragon/dist/Form';
import { Add } from '@openedx/paragon/icons';
import { ImageUploadWidget } from './ImageUploadWidget';
import { HotspotList } from './HotspotList';
import type { Hotspot } from '../../common/types';

interface MainContentAreaProps {
  questionText: string;
  imageUrl: string;
  uploading: boolean;
  hotspots: Hotspot[];
  onQuestionTextChange: (value: string) => void;
  onImageUpload: (data: any) => void;
  onOpenAssetPicker: () => void;
  onAddHotspot: () => void;
  onEditHotspot: (index: number) => void;
  onDeleteHotspot: (index: number) => void;
  onReorder: (newHotspots: Hotspot[]) => void;
}

export const MainContentArea: React.FC<MainContentAreaProps> = ({
  questionText,
  imageUrl,
  uploading,
  hotspots,
  onQuestionTextChange,
  onImageUpload,
  onOpenAssetPicker,
  onAddHotspot,
  onEditHotspot,
  onDeleteHotspot,
  onReorder,
}) => {
  // Safety: Ensure hotspots is always an array
  const safeHotspots = hotspots || [];

  return (
    <div className="mainContentArea pr-4">
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

      {/* Image Upload Section */}
      <div className="mb-4">
        <div className="h4 mb-3">Image Configuration</div>
        <ImageUploadWidget
          imageUrl={imageUrl}
          uploading={uploading}
          onImageUpload={onImageUpload}
          onOpenAssetPicker={onOpenAssetPicker}
        />
      </div>

      {/* Hotspots Section */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="h4">
            Hotspots ({safeHotspots.length})
          </div>
          <Button
            variant="primary"
            iconBefore={Add}
            onClick={onAddHotspot}
            disabled={!imageUrl}
          >
            Add Hotspot
          </Button>
        </div>

        {/* Empty state */}
        {safeHotspots.length === 0 ? (
          <Alert variant="info">
            <strong>No hotspots yet.</strong> Click "Add Hotspot" to create clickable regions on your image.
            {!imageUrl && ' Please select an image first.'}
          </Alert>
        ) : (
          <HotspotList
            hotspots={safeHotspots}
            onEditHotspot={onEditHotspot}
            onDeleteHotspot={onDeleteHotspot}
            onReorder={onReorder}
          />
        )}

        {/* Validation reminder */}
        {imageUrl && safeHotspots.length > 0 && !safeHotspots.some(h => h.correct) && (
          <Alert variant="warning" className="mt-3">
            <strong>Warning:</strong> At least one hotspot must be marked as correct.
          </Alert>
        )}
      </div>
    </div>
  );
};
