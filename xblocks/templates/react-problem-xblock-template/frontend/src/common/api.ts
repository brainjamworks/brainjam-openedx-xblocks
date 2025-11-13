/**
 * ARCHITECTURAL: CSRF-protected API helpers for XBlock handlers
 *
 * USE AS-IS OR EXTEND
 *
 * These utilities provide secure, consistent ways to call XBlock JSON handlers
 * with proper CSRF protection.
 *
 * Why this is critical:
 * - OpenEdX requires CSRF tokens for all POST/PUT/DELETE requests
 * - Forgetting CSRF protection is a common security vulnerability
 * - Standardizing API calls prevents bugs and security issues
 *
 * Usage in your components:
 *   import { xblockPost } from '../common/api';
 *
 *   const result = await xblockPost(runtime, 'save_data', { field: 'value' });
 */

/**
 * XBlock Runtime interface (minimal subset we need)
 */
export interface XBlockRuntime {
  handlerUrl: (element: any, handler: string) => string;
  element: any;
}

/**
 * Standard response format for XBlock JSON handlers
 */
export interface XBlockResponse<T = any> {
  success: boolean;
  error?: string;
  data?: T;
  [key: string]: any;
}

/**
 * GET CSRF token from page
 *
 * ARCHITECTURAL: OpenEdX stores CSRF token in cookies or meta tags
 * This function retrieves it using the standard OpenEdX pattern
 */
function getCSRFToken(): string {
  // Try to get from cookie first (Django's default)
  const name = 'csrftoken';
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }

  // Fallback: try meta tag (some Django configs use this)
  const meta = document.querySelector('meta[name="csrf-token"]');
  if (meta) {
    return meta.getAttribute('content') || '';
  }

  // If no token found, return empty (will likely fail, but better than crashing)
  console.warn('CSRF token not found');
  return '';
}

/**
 * POST to XBlock JSON handler with CSRF protection
 *
 * @param runtime - XBlock runtime object (passed to your component)
 * @param handler - Handler name (e.g., 'save_data')
 * @param data - Data to send in request body
 * @returns Promise with parsed JSON response
 *
 * Example:
 *   const result = await xblockPost(runtime, 'save_data', {
 *     display_name: 'New Name',
 *     content: 'New Content'
 *   });
 *
 *   if (result.success) {
 *     // Handle success
 *   } else {
 *     // Handle error: result.error
 *   }
 */
export async function xblockPost<T = any>(
  runtime: XBlockRuntime,
  handler: string,
  data: any = {}
): Promise<XBlockResponse<T>> {
  const url = runtime.handlerUrl(runtime.element, handler);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCSRFToken(), // ARCHITECTURAL: CSRF protection
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`XBlock handler error (${handler}):`, error);

    // Return standardized error response
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * GET from XBlock JSON handler
 *
 * @param runtime - XBlock runtime object
 * @param handler - Handler name
 * @param params - Query parameters (optional)
 * @returns Promise with parsed JSON response
 *
 * Example:
 *   const result = await xblockGet(runtime, 'get_data', { id: '123' });
 */
export async function xblockGet<T = any>(
  runtime: XBlockRuntime,
  handler: string,
  params: Record<string, string> = {}
): Promise<XBlockResponse<T>> {
  let url = runtime.handlerUrl(runtime.element, handler);

  // Add query parameters if provided
  const queryString = new URLSearchParams(params).toString();
  if (queryString) {
    url += `?${queryString}`;
  }

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`XBlock handler error (${handler}):`, error);

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * IMPLEMENTATION TIP: Extend these utilities for your needs
 *
 * You can add XBlock-specific API functions here:
 *
 * export async function saveMyData(runtime: XBlockRuntime, myData: MyDataType) {
 *   return xblockPost(runtime, 'save_my_data', myData);
 * }
 *
 * export async function loadMyData(runtime: XBlockRuntime, id: string) {
 *   return xblockGet(runtime, 'load_my_data', { id });
 * }
 */
