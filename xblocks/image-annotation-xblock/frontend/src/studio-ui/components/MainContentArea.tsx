/**
 * MainContentArea Component
 *
 * Main content area for the list view.
 * Shows problem text, labels list, and zones list with add/edit actions.
 *
 * Pattern: MFE main content area with sections
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import { Add } from '@openedx/paragon/icons';
import { LabelItem } from './LabelItem';
import { ZoneItem } from './ZoneItem';
import { ContentTab } from './ContentTab';
import { ImageUploadWidget } from './ImageUploadWidget';
import type { LabelDefinition, DropZone, XBlockRuntime } from '../../common/types';

interface MainContentAreaProps {
  // Content
  questionText: string;
  explanation: string;
  onQuestionTextChange: (value: string) => void;
  onExplanationChange: (value: string) => void;

  // Image
  runtime: XBlockRuntime;
  courseId: string;
  backgroundImageUrl: string;
  backgroundImageWidth: number;
  backgroundImageHeight: number;
  onBackgroundImageUrlChange: (value: string) => void;
  onBackgroundImageWidthChange: (value: number) => void;
  onBackgroundImageHeightChange: (value: number) => void;
  onOpenAssetPicker: () => void;

  // Labels
  labels: LabelDefinition[];
  onAddLabel: () => void;
  onEditLabel: (labelId: string) => void;
  onDeleteLabel: (labelId: string) => void;

  // Zones
  zones: DropZone[];
  onAddZone: () => void;
  onEditZone: (zoneId: string) => void;
  onDeleteZone: (zoneId: string) => void;
}

export const MainContentArea: React.FC<MainContentAreaProps> = ({
  questionText,
  explanation,
  onQuestionTextChange,
  onExplanationChange,
  runtime,
  courseId,
  backgroundImageUrl,
  backgroundImageWidth,
  backgroundImageHeight,
  onBackgroundImageUrlChange,
  onBackgroundImageWidthChange,
  onBackgroundImageHeightChange,
  onOpenAssetPicker,
  labels,
  onAddLabel,
  onEditLabel,
  onDeleteLabel,
  zones,
  onAddZone,
  onEditZone,
  onDeleteZone,
}) => {
  const [uploading, setUploading] = useState(false);

  // Handle image upload with auto-detect dimensions
  const handleImageUpload = async (data: any) => {
    const imageUrl = data.asset?.url || data.url;
    onBackgroundImageUrlChange(imageUrl);

    // Auto-detect dimensions
    const img = new Image();
    img.onload = () => {
      onBackgroundImageWidthChange(img.naturalWidth);
      onBackgroundImageHeightChange(img.naturalHeight);
    };
    img.src = imageUrl;
  };


  return (
    <div className="main-content-area">
      {/* Problem Content Section */}
      <div className="mb-5">
        <div className="h4 mb-3">Problem Content</div>
        <ContentTab
          questionText={questionText}
          explanation={explanation}
          onQuestionTextChange={onQuestionTextChange}
          onExplanationChange={onExplanationChange}
        />
      </div>

      {/* Background Image Section */}
      <div className="mb-5">
        <div className="h4 mb-3">Background Image</div>
        <ImageUploadWidget
          imageUrl={backgroundImageUrl}
          uploading={uploading}
          onImageUpload={handleImageUpload}
          onOpenAssetPicker={onOpenAssetPicker}
        />
      </div>

      {/* Labels Section */}
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="h4">Labels</div>
          <Button
            variant="primary"
            onClick={onAddLabel}
            iconBefore={Add}
          >
            Add Label
          </Button>
        </div>

        {labels.length === 0 ? (
          <div className="text-muted text-center p-4 border rounded">
            <p>No labels defined yet.</p>
            <p className="small">Labels are the draggable items that students place on the image.</p>
            <Button variant="outline-primary" onClick={onAddLabel}>
              Create Your First Label
            </Button>
          </div>
        ) : (
          <div className="labels-list">
            {labels.map(label => (
              <LabelItem
                key={label.id}
                label={label}
                onEdit={onEditLabel}
                onDelete={onDeleteLabel}
              />
            ))}
          </div>
        )}
      </div>

      {/* Drop Zones Section */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="h4">Drop Zones</div>
          <Button
            variant="primary"
            onClick={onAddZone}
            iconBefore={Add}
            disabled={labels.length === 0} // Can't create zones without labels
          >
            Add Drop Zone
          </Button>
        </div>

        {labels.length === 0 ? (
          <div className="text-muted text-center p-4 border rounded bg-light">
            <p>Please create labels before adding drop zones.</p>
            <p className="small">Drop zones define the correct placement areas for labels.</p>
          </div>
        ) : zones.length === 0 ? (
          <div className="text-muted text-center p-4 border rounded">
            <p>No drop zones defined yet.</p>
            <p className="small">Drop zones are the correct placement areas on the image.</p>
            <Button variant="outline-primary" onClick={onAddZone}>
              Create Your First Drop Zone
            </Button>
          </div>
        ) : (
          <div className="zones-list">
            {zones.map(zone => (
              <ZoneItem
                key={zone.id}
                zone={zone}
                onEdit={onEditZone}
                onDelete={onDeleteZone}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
