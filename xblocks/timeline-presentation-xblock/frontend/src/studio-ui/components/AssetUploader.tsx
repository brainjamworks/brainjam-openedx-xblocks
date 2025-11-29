/**
 * AssetUploader Component
 *
 * Handles file upload for images and audio files with drag-drop support
 */

import React, { useState, useRef } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Card from '@openedx/paragon/dist/Card';
import Spinner from '@openedx/paragon/dist/Spinner';
import Alert from '@openedx/paragon/dist/Alert';
import { Delete, Upload, FilePresent } from '@openedx/paragon/icons';
import type { CourseAsset } from '../../common/types';

interface AssetUploaderProps {
  label: string;
  accept: string; // e.g., "image/png,image/jpeg" or "audio/mpeg"
  currentAsset?: string;
  assetType: 'image' | 'audio';
  onUpload: (file: File) => Promise<void>;
  onDelete?: () => void;
  uploading: boolean;
  error?: string;
}

export const AssetUploader: React.FC<AssetUploaderProps> = ({
  label,
  accept,
  currentAsset,
  assetType,
  onUpload,
  onDelete,
  uploading,
  error,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (file: File) => {
    // Validate file type
    const acceptedTypes = accept.split(',').map(t => t.trim());
    const isValid = acceptedTypes.some(type => {
      if (type.endsWith('/*')) {
        const category = type.split('/')[0];
        return file.type.startsWith(category + '/');
      }
      return file.type === type;
    });

    if (!isValid) {
      alert(`Invalid file type. Please upload: ${accept}`);
      return;
    }

    // Validate file size (max 10MB for images, 50MB for audio)
    const maxSize = assetType === 'image' ? 10 * 1024 * 1024 : 50 * 1024 * 1024;
    if (file.size > maxSize) {
      alert(`File too large. Maximum size: ${maxSize / 1024 / 1024}MB`);
      return;
    }

    await onUpload(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="asset-uploader">
      <label className="asset-uploader-label">{label}</label>

      {error && (
        <Alert variant="danger" dismissible className="mb-3">
          {error}
        </Alert>
      )}

      {/* Current Asset Display */}
      {currentAsset && !uploading && (
        <div className="asset-preview-card">
          <div className="asset-preview-content">
            <div className="asset-preview-media">
              {assetType === 'image' ? (
                <img
                  src={currentAsset}
                  alt="Current asset"
                  className="asset-preview-image"
                />
              ) : (
                <div className="asset-preview-audio">
                  <FilePresent />
                  <audio controls src={currentAsset} />
                </div>
              )}
            </div>
            {onDelete && (
              <Button
                iconBefore={Delete}
                onClick={onDelete}
                className="asset-delete-btn"
              >
                Remove
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Upload Area */}
      <div
        className={`upload-dropzone ${dragOver ? 'drag-over' : ''} ${uploading ? 'uploading' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {uploading ? (
          <div>
            <Spinner animation="border" className="mb-2" />
            <p className="upload-text">Uploading...</p>
          </div>
        ) : (
          <>
            <Upload className="upload-icon" />
            <p className="upload-text">
              Drag and drop your {assetType} here, or{' '}
              <Button onClick={handleBrowseClick} className="upload-browse-link">
                browse
              </Button>
            </p>
            <div className="upload-helper">
              Accepted formats: {accept}
              <br />
              Max size: {assetType === 'image' ? '10MB' : '50MB'}
            </div>
          </>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleInputChange}
        style={{ display: 'none' }}
        disabled={uploading}
      />
    </div>
  );
};
