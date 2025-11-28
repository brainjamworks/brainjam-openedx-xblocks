/**
 * ImageTab - Image Configuration
 *
 * Provides form fields for configuring the background image:
 * - Image URL with validation
 * - File upload with drag-and-drop
 * - Browse course assets
 * - Width and height inputs
 * - Image preview
 * - Auto-detect dimensions button
 */

import React, { useState, useEffect } from 'react';
import Form from '@openedx/paragon/dist/Form';
import Button from '@openedx/paragon/dist/Button';
import Alert from '@openedx/paragon/dist/Alert';
import Spinner from '@openedx/paragon/dist/Spinner';
import Dropzone from '@openedx/paragon/dist/Dropzone';
import { StandardModal } from '@openedx/paragon';
import { xblockPost } from '../../common/api';
import type { XBlockRuntime, CourseAsset, ListAssetsResponse } from '../../common/types';

export interface ImageTabProps {
  runtime: XBlockRuntime;
  courseId: string;
  backgroundImageUrl: string;
  backgroundImageWidth: number;
  backgroundImageHeight: number;
  onBackgroundImageUrlChange: (value: string) => void;
  onBackgroundImageWidthChange: (value: number) => void;
  onBackgroundImageHeightChange: (value: number) => void;
}

export const ImageTab: React.FC<ImageTabProps> = ({
  runtime,
  courseId,
  backgroundImageUrl,
  backgroundImageWidth,
  backgroundImageHeight,
  onBackgroundImageUrlChange,
  onBackgroundImageWidthChange,
  onBackgroundImageHeightChange,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [loadingDimensions, setLoadingDimensions] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [showAssetPicker, setShowAssetPicker] = useState(false);
  const [loadingAssets, setLoadingAssets] = useState(false);
  const [courseAssets, setCourseAssets] = useState<CourseAsset[]>([]);

  // Reset image state when URL changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [backgroundImageUrl]);

  /**
   * Auto-detect image dimensions
   */
  const handleAutoDetectDimensions = () => {
    if (!backgroundImageUrl) {
      return;
    }

    setLoadingDimensions(true);
    const img = new Image();

    img.onload = () => {
      onBackgroundImageWidthChange(img.naturalWidth);
      onBackgroundImageHeightChange(img.naturalHeight);
      setImageLoaded(true);
      setImageError(false);
      setLoadingDimensions(false);
    };

    img.onerror = () => {
      setImageError(true);
      setLoadingDimensions(false);
    };

    img.crossOrigin = 'anonymous';
    img.src = backgroundImageUrl;
  };

  /**
   * Handle image load for preview
   */
  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  /**
   * Handle image error for preview
   */
  const handleImageError = () => {
    setImageLoaded(false);
    setImageError(true);
  };

  /**
   * Handle file upload via Dropzone
   * Paragon's Dropzone provides fileData as FormData, requestConfig for axios, and handleError callback
   */
  const handleProcessUpload = async ({ fileData, requestConfig, handleError }: any) => {
    setUploading(true);
    setUploadError(null);

    try {
      // Upload to OpenEdX contentstore
      const uploadUrl = `/assets/${courseId}/`;
      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: fileData,
        headers: {
          'X-CSRFToken': (window as any).$.cookie('csrftoken') || '',
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      let result;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        result = { error: text || 'Upload failed' };
      }

      if (!response.ok || result.error) {
        throw new Error(result.error || 'Upload failed');
      }

      const assetUrl = result.asset?.url || result.url;

      if (assetUrl) {
        onBackgroundImageUrlChange(assetUrl);
        // Auto-detect dimensions for uploaded image
        setTimeout(() => handleAutoDetectDimensions(), 100);
      } else {
        throw new Error('No URL returned from upload');
      }
    } catch (error) {
      console.error('Upload error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Upload failed';
      setUploadError(errorMessage);
      if (handleError) {
        handleError(error);
      }
    } finally {
      setUploading(false);
    }
  };

  /**
   * Open asset picker modal and load course assets
   */
  const handleBrowseAssets = async () => {
    setShowAssetPicker(true);
    setLoadingAssets(true);

    try {
      const result = await xblockPost<ListAssetsResponse>(runtime, 'list_course_assets', {});

      if (result.success && result.assets) {
        setCourseAssets(result.assets);
      }
    } catch (error) {
      console.error('Asset list error:', error);
    } finally {
      setLoadingAssets(false);
    }
  };

  /**
   * Handle asset selection - immediate selection on click
   */
  const handleSelectAsset = (asset: CourseAsset) => {
    onBackgroundImageUrlChange(asset.url);
    setShowAssetPicker(false);
    // Auto-detect dimensions for selected image
    setTimeout(() => handleAutoDetectDimensions(), 100);
  };

  return (
    <div className="image-tab">
      {/* File Upload Section */}
      <div className="mb-4">
        <h4>Upload New Image</h4>
        {uploadError && (
          <Alert variant="danger" dismissible onClose={() => setUploadError(null)}>
            {uploadError}
          </Alert>
        )}
        <Dropzone
          onProcessUpload={handleProcessUpload}
          accept={{
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/png': ['.png'],
            'image/gif': ['.gif'],
            'image/svg+xml': ['.svg'],
            'image/webp': ['.webp']
          }}
          maxSize={10 * 1024 * 1024}
        />
        <Button
          variant="outline-secondary"
          onClick={handleBrowseAssets}
          className="mt-2"
          disabled={uploading}
        >
          Browse Course Assets
        </Button>
      </div>

      {/* Manual URL Input Section */}
      <div className="mb-4">
        <h4>Or Enter Image URL</h4>
        <Form.Group className="mb-3">
          <Form.Label>Background Image URL</Form.Label>
          <Form.Control
            type="text"
            value={backgroundImageUrl}
            onChange={(e) => onBackgroundImageUrlChange(e.target.value)}
            placeholder="Enter image URL (e.g., /static/diagram.png)"
          />
          <Form.Text>
            URL to the background image. Can be a course asset or external URL.
          </Form.Text>
        </Form.Group>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Form.Group className="mb-3">
            <Form.Label>Image Width (pixels)</Form.Label>
            <Form.Control
              type="number"
              min="100"
              max="2000"
              value={backgroundImageWidth}
              onChange={(e) => onBackgroundImageWidthChange(parseInt(e.target.value) || 800)}
            />
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group className="mb-3">
            <Form.Label>Image Height (pixels)</Form.Label>
            <Form.Control
              type="number"
              min="100"
              max="2000"
              value={backgroundImageHeight}
              onChange={(e) => onBackgroundImageHeightChange(parseInt(e.target.value) || 600)}
            />
          </Form.Group>
        </div>
      </div>

      <Button
        variant="outline-primary"
        onClick={handleAutoDetectDimensions}
        disabled={!backgroundImageUrl || loadingDimensions}
        className="mb-3"
      >
        {loadingDimensions ? (
          <>
            <Spinner animation="border" size="sm" className="mr-2" />
            Detecting...
          </>
        ) : (
          'Auto-Detect Image Dimensions'
        )}
      </Button>

      {/* Image Preview */}
      {backgroundImageUrl && (
        <div className="mt-4">
          <h4>Image Preview</h4>
          {imageError && (
            <Alert variant="danger">
              Failed to load image. Please check the URL and ensure the image is accessible.
            </Alert>
          )}
          {!imageError && (
            <div
              className="border p-2"
              style={{
                maxWidth: '100%',
                maxHeight: '500px',
                overflow: 'auto',
                backgroundColor: '#f5f5f5',
              }}
            >
              <img
                src={backgroundImageUrl}
                alt="Background preview"
                style={{
                  width: `${backgroundImageWidth}px`,
                  height: `${backgroundImageHeight}px`,
                  display: 'block',
                }}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </div>
          )}
        </div>
      )}

      {/* Asset Picker Modal */}
      <StandardModal
        title="Choose Course Image"
        isOpen={showAssetPicker}
        onClose={() => setShowAssetPicker(false)}
        size="lg"
        isOverflowVisible={false}
        footerNode={
          <Button variant="tertiary" onClick={() => setShowAssetPicker(false)}>
            Close
          </Button>
        }
      >
        {loadingAssets ? (
          <p>Loading images...</p>
        ) : courseAssets.length === 0 ? (
          <p>No images found in course. Upload an image first.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
            {courseAssets.map((asset) => (
              <div
                key={asset.url}
                onClick={() => handleSelectAsset(asset)}
                style={{
                  cursor: 'pointer',
                  border: backgroundImageUrl === asset.url ? '2px solid #0075b4' : '1px solid #ccc',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  transition: 'border-color 0.2s'
                }}
              >
                <img
                  src={asset.thumbnail_url}
                  alt={asset.filename}
                  style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '2px' }}
                />
                <small style={{ display: 'block', marginTop: '0.5rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {asset.filename}
                </small>
              </div>
            ))}
          </div>
        )}
      </StandardModal>
    </div>
  );
};
