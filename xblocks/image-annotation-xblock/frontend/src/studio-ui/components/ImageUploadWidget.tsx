/**
 * ImageUploadWidget Component
 *
 * Handles image upload and selection for annotation problems.
 * Copied from image-hotspot-xblock.
 *
 * Features:
 * - Image preview (with maxWidth: 100% to prevent overflow)
 * - Dropzone for file upload
 * - Asset picker button
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import Alert from '@openedx/paragon/dist/Alert';
import Dropzone from '@openedx/paragon/dist/Dropzone';
import Form from '@openedx/paragon/dist/Form';

interface ImageUploadWidgetProps {
  imageUrl: string;
  uploading: boolean;
  onImageUpload: (data: any) => void;
  onOpenAssetPicker: () => void;
}

export const ImageUploadWidget: React.FC<ImageUploadWidgetProps> = ({
  imageUrl,
  uploading,
  onImageUpload,
  onOpenAssetPicker
}) => {
  return (
    <div>
      {/* Current Image Preview */}
      {imageUrl ? (
        <div className="mb-4">
          <Form.Label>Current Image</Form.Label>
          <div
            style={{
              border: '2px solid #dee2e6',
              borderRadius: '4px',
              padding: '1rem',
              backgroundColor: '#f8f9fa',
              textAlign: 'center'
            }}
          >
            <img
              src={imageUrl}
              alt="Annotation background image"
              style={{
                maxWidth: '100%',
                maxHeight: '400px',
                display: 'block',
                margin: '0 auto',
                borderRadius: '4px'
              }}
            />
          </div>
          <small className="text-muted d-block mt-2">{imageUrl}</small>
        </div>
      ) : (
        <Alert variant="warning" className="mb-4">
          <strong>No image selected.</strong> Please upload or select an image to continue.
        </Alert>
      )}

      {/* Upload Section */}
      <Form.Group className="mb-4">
        <Form.Label>Upload New Image</Form.Label>
        <Dropzone
          onProcessUpload={onImageUpload}
          accept={{
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/png': ['.png'],
            'image/gif': ['.gif'],
            'image/webp': ['.webp']
          }}
          maxSize={5 * 1024 * 1024}
        />
        <Form.Text className="text-muted">
          Maximum file size: 5MB. Supported formats: JPG, PNG, GIF, WebP
        </Form.Text>
      </Form.Group>

      {/* Asset Picker */}
      <div>
        <Form.Label>Or Choose Existing Image</Form.Label>
        <div>
          <Button
            variant="outline-primary"
            onClick={onOpenAssetPicker}
            disabled={uploading}
          >
            Choose from Course Images
          </Button>
        </div>
        <Form.Text className="text-muted mt-2">
          Browse images already uploaded to this course
        </Form.Text>
      </div>
    </div>
  );
};
