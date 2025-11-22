/**
 * Image Commentary Studio View Component
 *
 * Main container that provides infrastructure for:
 * - Image upload
 * - Asset picker modal
 * - Wizard-based configuration interface
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import { StandardModal } from '@openedx/paragon';
import { xblockPost, XBlockRuntime } from '../common/api';
import type { StudioViewFields, CourseAsset, ListAssetsResponse } from '../common/types';
import { WizardView } from './WizardView';

interface StudioViewProps {
  runtime: XBlockRuntime;
  fields: StudioViewFields;
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
 * Studio configuration component
 */
export const StudioView: React.FC<StudioViewProps> = ({ runtime, fields }) => {
  // =======================================================================
  // STATE - UI (Image upload and asset picker only)
  // =======================================================================

  const [imageUrl, setImageUrl] = useState(fields.image_url);
  const [uploading, setUploading] = useState(false);
  const [showAssetPicker, setShowAssetPicker] = useState(false);
  const [loadingAssets, setLoadingAssets] = useState(false);
  const [courseAssets, setCourseAssets] = useState<CourseAsset[]>([]);

  // =======================================================================
  // HANDLERS - Image Upload
  // =======================================================================

  const handleProcessUpload = async ({ fileData, requestConfig, handleError }: any) => {
    setUploading(true);

    try {
      const uploadUrl = `/assets/${fields.course_id}/`;

      const response = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'X-CSRFToken': getCSRFToken(),
          'Accept': 'application/json',
        },
        body: fileData,
      });

      let result;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.log('Non-JSON response:', text);
        result = { error: text || 'Upload failed' };
      }

      if (response.ok && result.asset) {
        setImageUrl(result.asset.url);
      } else {
        const errorMsg = result.error || result.message || JSON.stringify(result) || 'Upload failed';
        const error = new Error(errorMsg);
        handleError(error);
      }
    } catch (error) {
      console.error('Upload error:', error);
      handleError(error);
    } finally {
      setUploading(false);
    }
  };

  // =======================================================================
  // HANDLERS - Asset Picker
  // =======================================================================

  const handleOpenAssetPicker = async () => {
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

  const handleSelectAsset = (asset: CourseAsset) => {
    setImageUrl(asset.url);
    setShowAssetPicker(false);
  };

  // =======================================================================
  // RENDER
  // =======================================================================

  return (
    <div className="image-commentary-studio-view">
      {/* Wizard View */}
      <WizardView
        runtime={runtime}
        fields={fields}
        imageUrl={imageUrl}
        uploading={uploading}
        onImageUpload={handleProcessUpload}
        onOpenAssetPicker={handleOpenAssetPicker}
      />

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
                  border: imageUrl === asset.url ? '2px solid #0075b4' : '1px solid #ccc',
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
