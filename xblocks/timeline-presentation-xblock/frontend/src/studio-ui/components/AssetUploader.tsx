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
      <label className="mb-2 d-block font-weight-bold">{label}</label>

      {error && (
        <Alert variant="danger" dismissible className="mb-3">
          {error}
        </Alert>
      )}

      {/* Current Asset Display */}
      {currentAsset && !uploading && (
        <Card className="mb-3">
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <div className="flex-grow-1">
                {assetType === 'image' ? (
                  <img
                    src={currentAsset}
                    alt="Current asset"
                    style={{ maxWidth: '200px', maxHeight: '150px', objectFit: 'contain' }}
                  />
                ) : (
                  <div className="d-flex align-items-center">
                    <FilePresent className="mr-2" />
                    <audio controls src={currentAsset} style={{ maxWidth: '300px' }} />
                  </div>
                )}
              </div>
              {onDelete && (
                <Button
                  variant="danger"
                  iconBefore={Delete}
                  onClick={onDelete}
                  size="sm"
                >
                  Remove
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      )}

      {/* Upload Area */}
      <div
        className={`upload-dropzone ${dragOver ? 'drag-over' : ''} ${uploading ? 'uploading' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        style={{
          border: `2px dashed ${dragOver ? '#0075b4' : '#ccc'}`,
          borderRadius: '8px',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: dragOver ? '#f0f8ff' : '#fafafa',
          transition: 'all 0.2s',
          cursor: uploading ? 'not-allowed' : 'pointer',
        }}
      >
        {uploading ? (
          <div>
            <Spinner animation="border" className="mb-2" />
            <p className="mb-0">Uploading...</p>
          </div>
        ) : (
          <>
            <Upload style={{ fontSize: '3rem', color: '#6c757d' }} className="mb-2" />
            <p className="mb-2">
              Drag and drop your {assetType} here, or{' '}
              <Button variant="link" onClick={handleBrowseClick} className="p-0">
                browse
              </Button>
            </p>
            <small className="text-muted">
              Accepted formats: {accept}
              <br />
              Max size: {assetType === 'image' ? '10MB' : '50MB'}
            </small>
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
