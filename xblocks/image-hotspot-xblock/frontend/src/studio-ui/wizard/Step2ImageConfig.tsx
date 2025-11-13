/**
 * Step 2: Image Configuration
 *
 * Allows instructors to:
 * - Upload a new image
 * - Select an existing image from course assets
 * - Preview the current image
 */

import React from 'react';
import Button from '@openedx/paragon/dist/Button';
import Card from '@openedx/paragon/dist/Card';
import Alert from '@openedx/paragon/dist/Alert';
import Dropzone from '@openedx/paragon/dist/Dropzone';
import Form from '@openedx/paragon/dist/Form';

interface Step2Props {
  imageUrl: string;
  uploading: boolean;
  onImageUpload: (data: any) => void;
  onOpenAssetPicker: () => void;
}

export const Step2ImageConfig: React.FC<Step2Props> = ({
  imageUrl,
  uploading,
  onImageUpload,
  onOpenAssetPicker
}) => {
  return (
    <div className="wizard-step-content">
      <Card className="mb-3">
        <Card.Header>
          <h4 className="h6 mb-0">Select Image for Hotspot Problem</h4>
        </Card.Header>
        <Card.Section>
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
                  alt="Hotspot image"
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
            <Form.Text className="text-muted">
              Browse images already uploaded to this course
            </Form.Text>
          </div>
        </Card.Section>
      </Card>

      {!imageUrl && (
        <Alert variant="info">
          <strong>Next Step:</strong> After selecting an image, you'll create clickable hotspots on it.
        </Alert>
      )}
    </div>
  );
};
