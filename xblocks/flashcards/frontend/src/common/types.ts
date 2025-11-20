/**
 * Type definitions for Flashcards XBlock
 */

/**
 * Course asset from contentstore
 * Returned by list_course_assets handler
 */
export interface CourseAsset {
  filename: string;
  url: string;
  portable_url: string;
  content_type: string;
  upload_date: string;
  thumbnail_url: string;
}

/**
 * Response from list_course_assets handler
 */
export interface ListAssetsResponse {
  success: boolean;
  assets?: CourseAsset[];
  count?: number;
  error?: string;
}

/**
 * Response from save_data handler
 */
export interface SaveDataResponse {
  success: boolean;
  display_name?: string;
  cards?: FlashCard[];
  error?: string;
}

/**
 * Single flashcard structure
 */
export interface FlashCard {
  front_title: string;
  front_subtitle: string;
  back_text: string;
}
