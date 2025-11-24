/**
 * Audio Player - Studio View Component
 *
 * Editor interface for configuring the audio player XBlock.
 * Allows instructors to set title, description, audio URL, and playback options.
 */

import React, { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import Alert from '@openedx/paragon/dist/Alert';
import Card from '@openedx/paragon/dist/Card';
import Dropzone from '@openedx/paragon/dist/Dropzone';
import { xblockPost, XBlockRuntime } from '../common/api';
import { UploadAudioResponse } from '../common/types';
import './styles/minimal-paragon.scss';

interface StudioViewProps {
  runtime: XBlockRuntime;
  fields: {
    display_name: string;
    title: string;
    description: string;
    audio_url: string;
    show_controls: boolean;
    autoplay: boolean;
    show_download: boolean;
    course_id: string;
  };
}

/**
 * StudioView Component
 *
 * Form-based editor for audio player configuration.
 */
export const StudioView: React.FC<StudioViewProps> = ({ runtime, fields }) => {
  // Form field state
  const [displayName, setDisplayName] = useState(fields.display_name);
  const [title, setTitle] = useState(fields.title || '');
  const [description, setDescription] = useState(fields.description || '');
  const [audioUrl, setAudioUrl] = useState(fields.audio_url || '');
  const [showControls, setShowControls] = useState(fields.show_controls !== false);
  const [autoplay, setAutoplay] = useState(fields.autoplay === true);
  const [showDownload, setShowDownload] = useState(fields.show_download !== false);

  // UI state
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [wasUploaded, setWasUploaded] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Helper: Get CSRF token from cookies
  const getCSRFToken = (): string => {
    const name = 'csrftoken';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return '';
  };

  // Audio upload handler
  const handleAudioUpload = async ({ fileData, handleError }: any) => {
    setUploading(true);
    setMessage(null);

    try {
      // Upload directly to Studio's contentstore API
      const uploadUrl = `/assets/${fields.course_id}/`;

      const response = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'X-CSRFToken': getCSRFToken(),
          'Accept': 'application/json',
        },
        body: fileData,
      });

      // Handle response
      const contentType = response.headers.get('content-type');
      let result: UploadAudioResponse;

      if (contentType?.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        result = { error: text || 'Upload failed' };
      }

      if (response.ok && result.asset) {
        // Update audio URL with uploaded file
        setAudioUrl(result.asset.url);
        setWasUploaded(true); // Mark as uploaded to skip URL validation
        setMessage({ type: 'success', text: 'Audio file uploaded successfully!' });
      } else {
        const errorMsg = result.error || result.msg || 'Upload failed';
        const error = new Error(errorMsg);
        handleError(error);
        setMessage({ type: 'error', text: errorMsg });
      }
    } catch (error) {
      console.error('Audio upload error:', error);
      const errorMsg = error instanceof Error ? error.message : 'Upload failed';
      handleError(error);
      setMessage({ type: 'error', text: errorMsg });
    } finally {
      setUploading(false);
    }
  };

  // Save handler
  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      // Client-side validation
      if (!displayName.trim()) {
        setMessage({ type: 'error', text: 'Display name is required' });
        setSaving(false);
        return;
      }

      if (!audioUrl.trim()) {
        setMessage({ type: 'error', text: 'Audio URL is required' });
        setSaving(false);
        return;
      }

      // Validate URL format only if manually entered (skip for uploaded files)
      if (!wasUploaded) {
        try {
          new URL(audioUrl);
        } catch {
          setMessage({ type: 'error', text: 'Please enter a valid URL for the audio file' });
          setSaving(false);
          return;
        }
      }

      // Notify Studio that save is starting
      if (runtime.notify) {
        runtime.notify('save', { state: 'start' });
      }

      // Save to backend
      const result = await xblockPost(runtime, 'save_data', {
        display_name: displayName,
        title: title,
        description: description,
        audio_url: audioUrl,
        show_controls: showControls,
        autoplay: autoplay,
        show_download: showDownload,
      });

      if (result.success) {
        setMessage({ type: 'success', text: 'Changes saved successfully!' });

        // Notify Studio that save completed
        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to save changes.' });

        if (runtime.notify) {
          runtime.notify('save', { state: 'end' });
        }
      }
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'An error occurred while saving.' });

      if (runtime.notify) {
        runtime.notify('save', { state: 'end' });
      }
    } finally {
      setSaving(false);
    }
  };

  // Cancel handler
  const handleCancel = () => {
    if (runtime.notify) {
      runtime.notify('cancel', {});
    }
  };

  return (
    <div className="audio-player-studio-view">
      {/* Success/error messages */}
      {message && (
        <Alert
          variant={message.type === 'success' ? 'success' : 'danger'}
          dismissible
          onClose={() => setMessage(null)}
        >
          {message.text}
        </Alert>
      )}

      <Form>
        {/* Basic Settings */}
        <Card className="mb-4">
          <Card.Header title="Basic Settings" />
          <Card.Section>
            {/* Display Name */}
            <Form.Group className="mb-3">
              <Form.Label>Display Name *</Form.Label>
              <Form.Control
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Audio Player"
              />
              <Form.Text>The name shown in the course outline.</Form.Text>
            </Form.Group>

            {/* Title */}
            <Form.Group className="mb-3">
              <Form.Label>Title (Optional)</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Lecture Introduction"
              />
              <Form.Text>Optional heading displayed above the audio player.</Form.Text>
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-3">
              <Form.Label>Description (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Optional text content displayed alongside the audio..."
              />
              <Form.Text>
                Optional text content. Supports basic HTML (p, strong, em, a, ul, ol, li).
              </Form.Text>
            </Form.Group>
          </Card.Section>
        </Card>

        {/* Audio File */}
        <Card className="mb-4">
          <Card.Header title="Audio File" />
          <Card.Section>
            {/* Upload Dropzone */}
            <Form.Group className="mb-3">
              <Form.Label>Upload Audio File</Form.Label>
              <Dropzone
                onProcessUpload={handleAudioUpload}
                accept={{
                  'audio/mpeg': ['.mp3'],
                  'audio/mp4': ['.m4a'],
                  'audio/ogg': ['.ogg'],
                  'audio/wav': ['.wav'],
                  'audio/webm': ['.webm']
                }}
                maxSize={50 * 1024 * 1024}
                multiple={false}
              />
              <Form.Text>
                Upload audio files (MP3, M4A, OGG, WAV, WebM). Maximum size: 50MB.
              </Form.Text>
            </Form.Group>

            {/* Manual URL Input */}
            <Form.Group className="mb-3">
              <Form.Label>Or Enter Audio URL *</Form.Label>
              <Form.Control
                type="url"
                value={audioUrl}
                onChange={(e) => {
                  setAudioUrl(e.target.value);
                  setWasUploaded(false); // Reset flag when manually editing
                }}
                placeholder="https://example.com/audio.mp3"
                disabled={uploading}
              />
              <Form.Text>
                Alternatively, enter a direct URL to an audio file.
              </Form.Text>
            </Form.Group>

            {/* Preview */}
            {audioUrl && !uploading && (
              <div className="audio-preview mt-3">
                <Form.Label>Preview</Form.Label>
                <audio controls className="w-100">
                  <source src={audioUrl} type="audio/mpeg" />
                  Your browser does not support audio preview.
                </audio>
                <small className="text-muted d-block mt-2">{audioUrl}</small>
              </div>
            )}

            {/* Upload Status */}
            {uploading && (
              <Alert variant="info" className="mt-3">
                Uploading audio file...
              </Alert>
            )}
          </Card.Section>
        </Card>

        {/* Playback Settings */}
        <Card className="mb-4">
          <Card.Header title="Playback Settings" />
          <Card.Section>
            {/* Show Controls */}
            <Form.Group className="mb-3">
              <Form.Switch
                checked={showControls}
                onChange={(e) => setShowControls(e.target.checked)}
              >
                Show Controls
              </Form.Switch>
              <Form.Text>
                Display play/pause, volume, and progress controls. Recommended: ON
              </Form.Text>
            </Form.Group>

            {/* Autoplay */}
            <Form.Group className="mb-3">
              <Form.Switch
                checked={autoplay}
                onChange={(e) => setAutoplay(e.target.checked)}
              >
                Auto-play
              </Form.Switch>
              <Form.Text className="text-warning">
                ⚠️ Automatically start playback when page loads. Not recommended for accessibility.
              </Form.Text>
            </Form.Group>

            {/* Allow Download */}
            <Form.Group className="mb-3">
              <Form.Switch
                checked={showDownload}
                onChange={(e) => setShowDownload(e.target.checked)}
              >
                Allow Download
              </Form.Switch>
              <Form.Text>Display a download link for students.</Form.Text>
            </Form.Group>
          </Card.Section>
        </Card>

        {/* Action buttons */}
        <div className="d-flex justify-content-end">
          <Button variant="tertiary" onClick={handleCancel} disabled={saving} className="mr-2">
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={saving}>
            {saving ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </Form>
    </div>
  );
};
