/**
 * Image Picker Modal Component
 *
 * Provides dual functionality:
 * - Upload new images to course contentstore
 * - Browse and select existing course images
 *
 * Integrated with TinyMCE via callback function
 */

import React, { useState, useEffect } from 'react';
import Button from '@openedx/paragon/dist/Button';
import { StandardModal, Tabs, Tab } from '@openedx/paragon';
import Dropzone from 'react-dropzone';
import { xblockPost, XBlockRuntime } from '../common/api';
import type { CourseAsset, ListAssetsResponse } from '../common/types';

interface ImagePickerModalProps {
  runtime: XBlockRuntime;
  courseId: string;
  isOpen: boolean;
  onClose: () => void;
  onSelectImage: (url: string) => void;
}

/**
 * Helper to get CSRF token from cookies
 */
function getCSRFToken(): string {
  const name = 'csrftoken';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return '';
}

/**
 * Image Picker Modal Component
 */
export const ImagePickerModal: React.FC<ImagePickerModalProps> = ({
  runtime,
  courseId,
  isOpen,
  onClose,
  onSelectImage,
}) => {
  // =======================================================================
  // STATE
  // =======================================================================

  const [activeTab, setActiveTab] = useState('upload');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [loadingAssets, setLoadingAssets] = useState(false);
  const [courseAssets, setCourseAssets] = useState<CourseAsset[]>([]);
  const [selectedAssetUrl, setSelectedAssetUrl] = useState<string | null>(null);

  // =======================================================================
  // EFFECTS
  // =======================================================================

  // Load assets when browse tab is opened
  useEffect(() => {
    if (isOpen && activeTab === 'browse') {
      loadCourseAssets();
    }
  }, [isOpen, activeTab]);

  // =======================================================================
  // HANDLERS - Upload Tab
  // =======================================================================

  const handleDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    setUploading(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const uploadUrl = `/assets/${courseId}/`;

      const response = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'X-CSRFToken': getCSRFToken(),
          'Accept': 'application/json',
        },
        body: formData,
      });

      let result;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        result = { error: text || 'Upload failed' };
      }

      if (response.ok && result.asset) {
        // Upload successful - select the image and close modal
        onSelectImage(result.asset.url);
        onClose();
      } else {
        const errorMsg = result.error || result.message || 'Upload failed';
        setUploadError(errorMsg);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError(error instanceof Error ? error.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  // =======================================================================
  // HANDLERS - Browse Tab
  // =======================================================================

  const loadCourseAssets = async () => {
    setLoadingAssets(true);

    try {
      const result = await xblockPost<ListAssetsResponse>(runtime, 'list_course_assets', {});

      if (result.success && result.assets) {
        setCourseAssets(result.assets);
      } else {
        console.error('Failed to load assets:', result.error);
      }
    } catch (error) {
      console.error('Asset list error:', error);
    } finally {
      setLoadingAssets(false);
    }
  };

  const handleSelectAsset = (asset: CourseAsset) => {
    setSelectedAssetUrl(asset.url);
  };

  const handleConfirmSelection = () => {
    if (selectedAssetUrl) {
      onSelectImage(selectedAssetUrl);
      onClose();
    }
  };

  // =======================================================================
  // HANDLERS - Modal
  // =======================================================================

  const handleClose = () => {
    setUploadError(null);
    setSelectedAssetUrl(null);
    onClose();
  };

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <StandardModal
      title="Insert Image"
      isOpen={isOpen}
      onClose={handleClose}
      size="lg"
      isOverflowVisible={false}
      footerNode={
        <>
          <Button variant="tertiary" onClick={handleClose}>
            Cancel
          </Button>
          {activeTab === 'browse' && selectedAssetUrl && (
            <Button variant="primary" onClick={handleConfirmSelection}>
              Insert Selected Image
            </Button>
          )}
        </>
      }
    >
      <Tabs
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key as string)}
        id="image-picker-tabs"
      >
        {/* Upload Tab */}
        <Tab eventKey="upload" title="Upload New Image">
          <div style={{ padding: '1rem 0' }}>
            <Dropzone
              onDrop={handleDrop}
              accept={{
                'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg']
              }}
              multiple={false}
              disabled={uploading}
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <div
                  {...getRootProps()}
                  style={{
                    border: '2px dashed #ccc',
                    borderRadius: '4px',
                    padding: '2rem',
                    textAlign: 'center',
                    cursor: uploading ? 'not-allowed' : 'pointer',
                    backgroundColor: isDragActive ? '#f0f8ff' : '#fafafa',
                    transition: 'background-color 0.2s'
                  }}
                >
                  <input {...getInputProps()} />
                  {uploading ? (
                    <p>Uploading...</p>
                  ) : isDragActive ? (
                    <p>Drop image here...</p>
                  ) : (
                    <>
                      <p>Drag and drop an image here, or click to select</p>
                      <small style={{ color: '#666' }}>
                        Supported formats: PNG, JPG, GIF, WebP, SVG
                      </small>
                    </>
                  )}
                </div>
              )}
            </Dropzone>

            {uploadError && (
              <div
                style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  backgroundColor: '#fee',
                  border: '1px solid #fcc',
                  borderRadius: '4px',
                  color: '#c00'
                }}
              >
                <strong>Upload Error:</strong> {uploadError}
              </div>
            )}
          </div>
        </Tab>

        {/* Browse Tab */}
        <Tab eventKey="browse" title="Choose Existing Image">
          <div style={{ padding: '1rem 0' }}>
            {loadingAssets ? (
              <p>Loading images...</p>
            ) : courseAssets.length === 0 ? (
              <p>No images found in course. Upload an image first.</p>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                  gap: '1rem',
                  maxHeight: '400px',
                  overflowY: 'auto'
                }}
              >
                {courseAssets.map((asset) => (
                  <div
                    key={asset.url}
                    onClick={() => handleSelectAsset(asset)}
                    style={{
                      cursor: 'pointer',
                      border: selectedAssetUrl === asset.url ? '3px solid #0075b4' : '1px solid #ccc',
                      padding: '0.5rem',
                      borderRadius: '4px',
                      transition: 'border-color 0.2s',
                      backgroundColor: selectedAssetUrl === asset.url ? '#f0f8ff' : 'white'
                    }}
                  >
                    <img
                      src={asset.thumbnail_url}
                      alt={asset.filename}
                      style={{
                        width: '100%',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '2px'
                      }}
                    />
                    <small
                      style={{
                        display: 'block',
                        marginTop: '0.5rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                      title={asset.filename}
                    >
                      {asset.filename}
                    </small>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Tab>
      </Tabs>
    </StandardModal>
  );
};
