/**
 * TinyMCE Editor Component
 *
 * Wraps TinyMCE rich text editor using OpenEdX's TinyMCE instance.
 * Based on xmodule/js/src/html/edit.js implementation.
 */

import React, { useEffect, useRef } from 'react';

/**
 * Props for TinyMCEEditor
 */
interface TinyMCEEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: string;
}

/**
 * Declare global tinyMCE
 */
declare global {
  interface Window {
    tinyMCE: any;
    baseUrl: string;
  }
}

/**
 * TinyMCE Editor Component
 *
 * IMPORTANT: This assumes TinyMCE is globally available in Studio (it is).
 * OpenEdX loads TinyMCE from js/vendor/tinymce/js/tinymce/tinymce.full.min.js
 */
export const TinyMCEEditor: React.FC<TinyMCEEditorProps> = ({
  value,
  onChange,
  placeholder = 'Enter content...',
  height = '400px'
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const editorRef = useRef<any>(null);
  const editorIdRef = useRef<string>(`tinymce-${Math.random().toString(36).substr(2, 9)}`);

  /**
   * Initialize TinyMCE
   */
  useEffect(() => {
    if (!textareaRef.current || !window.tinyMCE) {
      console.error('TinyMCE not available or textarea ref not ready');
      return;
    }

    // Ensure baseURL is set (required for AWS instances)
    if (window.baseUrl) {
      window.tinyMCE.baseURL = window.baseUrl + "js/vendor/tinymce/js/tinymce";
    }

    // Ensure suffix is set (required for file loading)
    window.tinyMCE.suffix = ".min";

    // Find TinyMCE content CSS files
    const contentCssLinks: string[] = [];
    document.querySelectorAll("link[rel=stylesheet][href*='tinymce']").forEach((link) => {
      const href = link.getAttribute('href');
      if (href && href.includes('content')) {
        contentCssLinks.push(href);
      }
    });

    // TinyMCE configuration (simplified from OpenEdX HTML block)
    const config = {
      target: textareaRef.current,

      // Theme and appearance
      theme: 'silver',
      skin: 'studio-tmce5',
      schema: 'html5',
      entity_encoding: 'raw',

      // Preserve URLs
      convert_urls: false,

      // Direction from parent
      directionality: document.querySelector('.wrapper-view, .window-wrap')?.getAttribute('dir') || 'ltr',

      // Content CSS
      content_css: contentCssLinks.join(', '),

      // Inline code format
      formats: {
        code: {
          inline: 'code'
        }
      },

      // Disable visual aid
      visual: false,

      // Plugins - simplified set
      plugins: 'lists link image',

      // Toolbar - focused on educational content
      toolbar: 'formatselect bold italic underline forecolor ' +
        'alignleft aligncenter alignright ' +
        'bullist numlist outdent indent blockquote link',

      // Block formats
      block_formats: 'Paragraph=p;Preformatted=pre;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6',

      // Size
      width: '100%',
      height: height,

      // No menubar or statusbar
      menubar: false,
      statusbar: false,

      // Allow any elements
      valid_children: '+body[style]',
      valid_elements: '*[*]',
      extended_valid_elements: '*[*]',
      invalid_elements: '',

      // Spellcheck
      browser_spellcheck: true,

      // Setup callback
      setup: (editor: any) => {
        editorRef.current = editor;

        // Handle content changes
        editor.on('change keyup', () => {
          const content = editor.getContent();
          onChange(content);
        });
      },

      // Init callback
      init_instance_callback: (editor: any) => {
        // Set initial content
        editor.setContent(value || '');

        // Focus editor
        editor.focus();
      }
    };

    // Initialize TinyMCE
    window.tinyMCE.init(config);

    // Cleanup on unmount
    return () => {
      if (editorRef.current) {
        try {
          editorRef.current.remove();
        } catch (e) {
          console.warn('Error removing TinyMCE instance:', e);
        }
      }
    };
  }, []); // Only run once on mount

  /**
   * Update editor content when value prop changes (but not from editor)
   */
  useEffect(() => {
    if (editorRef.current && editorRef.current.getContent() !== value) {
      editorRef.current.setContent(value || '');
    }
  }, [value]);

  return (
    <div className="tinymce-wrapper">
      <textarea
        ref={textareaRef}
        id={editorIdRef.current}
        className="tiny-mce"
        placeholder={placeholder}
        defaultValue={value}
      />
    </div>
  );
};
