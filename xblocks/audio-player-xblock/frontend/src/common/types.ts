/**
 * Common TypeScript types for Audio Player XBlock
 */

/**
 * Audio asset in the course contentstore
 */
export interface AudioAsset {
  filename: string;
  url: string;
  portable_url: string;
  content_type: string;
  upload_date: string;
}

/**
 * Response from list_course_audio_assets handler
 */
export interface ListAudioAssetsResponse {
  success: boolean;
  assets?: AudioAsset[];
  count?: number;
  error?: string;
}

/**
 * Response from Studio contentstore upload API
 */
export interface UploadAudioResponse {
  asset?: {
    url: string;
    display_name: string;
    portable_url: string;
    thumbnail: string | null;
    id: string;
    locked: boolean;
  };
  msg?: string;
  error?: string;
}
