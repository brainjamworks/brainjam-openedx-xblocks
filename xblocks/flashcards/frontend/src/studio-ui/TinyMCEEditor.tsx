/**
 * TinyMCE Editor Component
 *
 * Wraps TinyMCE rich text editor using OpenEdX's TinyMCE instance.
 * Based on xmodule/js/src/html/edit.js implementation with custom image picker.
 */

import React, { useEffect, useRef, useState } from 'react';
import { XBlockRuntime } from '../common/api';
import { ImagePickerModal } from './ImagePickerModal';

/**
 * Props for TinyMCEEditor
 */
interface TinyMCEEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: string;
  baseAssetUrl?: string | null;
  runtime: XBlockRuntime;
  courseId: string;
}

/**
 * Declare global objects
 */
declare global {
  interface Window {
    tinyMCE: any;
    tinymce: any;
    baseUrl: string;
    gettext: (text: string) => string;
    $: any;
  }
}

/**
 * Rewrite static links for asset URL portability
 * Port of window.rewriteStaticLinks from common/static/js/src/utility.js
 */
function rewriteStaticLinks(content: string, from: string | null, to: string | null): string {
  if (from === null || to === null) {
    return content;
  }

  function replacer(match: string): string {
    if (match === from) {
      return to;
    } else {
      return match;
    }
  }

  // Escape regex special characters
  const fromRe = from.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

  // Match relative URLs, optionally preceded by full URLs
  const regex = new RegExp(
    '(https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}([-a-zA-Z0-9@:%_\\+.~#?&//=]*)?)?' + fromRe,
    'g'
  );

  return content.replace(regex, replacer);
}

/**
 * Get font formats (custom + standard TinyMCE fonts)
 * From xmodule/js/src/html/edit.js:13-38
 */
function getFontFormats(): string {
  const CUSTOM_FONTS = "Default='Open Sans', Verdana, Arial, Helvetica, sans-serif;";
  const STANDARD_FONTS =
    "Andale Mono=andale mono,times;" +
    "Arial=arial,helvetica,sans-serif;" +
    "Arial Black=arial black,avant garde;" +
    "Book Antiqua=book antiqua,palatino;" +
    "Comic Sans MS=comic sans ms,sans-serif;" +
    "Courier New=courier new,courier;" +
    "Georgia=georgia,palatino;" +
    "Helvetica=helvetica;" +
    "Impact=impact,chicago;" +
    "Symbol=symbol;" +
    "Tahoma=tahoma,arial,helvetica,sans-serif;" +
    "Terminal=terminal,monaco;" +
    "Times New Roman=times new roman,times;" +
    "Trebuchet MS=trebuchet ms,geneva;" +
    "Verdana=verdana,geneva;" +
    "Webdings=webdings;" +
    "Wingdings=wingdings,zapf dingbats";

  return CUSTOM_FONTS + STANDARD_FONTS;
}

/**
 * Get localized block format labels
 */
function getBlockFormats(): string {
  const gettext = window.gettext || ((text: string) => text);

  return `${gettext("Paragraph")}=p;${gettext("Preformatted")}=pre;${gettext("Heading 3")}=h3;${gettext("Heading 4")}=h4;${gettext("Heading 5")}=h5;${gettext("Heading 6")}=h6`;
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
  height = '400px',
  baseAssetUrl = null,
  runtime,
  courseId
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const editorRef = useRef<any>(null);
  const startingContentRef = useRef<string>('');

  // Image picker modal state
  const [showImagePicker, setShowImagePicker] = useState(false);

  /**
   * Initialize TinyMCE
   */
  useEffect(() => {
    if (!textareaRef.current || !window.tinyMCE || !window.$) {
      console.error('TinyMCE or jQuery not available');
      return;
    }

    const $ = window.$;
    const gettext = window.gettext || ((text: string) => text);

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

    /**
     * Setup callback - register custom buttons and event handlers
     */
    const setupTinyMCE = (ed: any) => {
      // Register custom "Code block" button
      ed.ui.registry.addButton('wrapAsCode', {
        tooltip: gettext('Code block'),
        icon: 'code-sample',
        onAction: () => {
          ed.formatter.toggle('code');
        }
      });

      // Register custom "Insert Image" button to replace default
      ed.ui.registry.addButton('customImage', {
        tooltip: gettext('Insert/Edit Image'),
        icon: 'image',
        onAction: () => {
          // Open our custom image picker modal
          setShowImagePicker(true);
        }
      });

      // Store editor reference
      editorRef.current = ed;

      // Handle content changes
      ed.on('change keyup', () => {
        const content = ed.getContent();
        onChange(content);
      });
    };

    /**
     * Init callback - set initial content and focus
     */
    const initInstanceCallback = (ed: any) => {
      // Rewrite static links in initial content
      const initialContent = rewriteStaticLinks(
        ed.getContent({ no_events: 1 }),
        '/static/',
        baseAssetUrl
      );
      ed.setContent(initialContent);

      // Store starting content for dirty checking
      startingContentRef.current = ed.getContent({ format: 'raw', no_events: 1 });

      // Focus editor
      ed.focus();
    };

    // TinyMCE configuration (matches xmodule/js/src/html/edit.js:99-179)
    const tinyMceConfig = {
      script_url: window.baseUrl + "js/vendor/tinymce/js/tinymce/tinymce.full.min.js",
      font_formats: getFontFormats(),
      theme: 'silver',
      skin: 'studio-tmce5',
      schema: 'html5',
      entity_encoding: 'raw',

      // Preserve relative URLs
      convert_urls: false,

      // Directionality from parent
      directionality: document.querySelector('.wrapper-view, .window-wrap')?.getAttribute('dir') || 'ltr',

      // Content CSS
      content_css: contentCssLinks.join(', '),

      // Inline code format
      formats: {
        code: { inline: 'code' }
      },

      // Disable visual aid
      visual: false,

      // Plugins - removed 'image' plugin to avoid conflicts
      plugins: 'lists, link, codemirror',

      // CodeMirror configuration
      codemirror: {
        path: window.baseUrl + "js/vendor",
        disableFilesMerge: true,
        jsFiles: ["codemirror-compressed.js"],
        cssFiles: ["CodeMirror/codemirror.css"]
      },

      // Toolbar - with custom image button instead of default
      toolbar:
        "formatselect fontselect bold italic underline forecolor wrapAsCode " +
        "alignleft aligncenter alignright alignjustify " +
        "bullist numlist outdent indent blockquote link unlink " +
        "customImage code",

      // Block formats
      block_formats: getBlockFormats(),

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

      // Callbacks
      setup: setupTinyMCE,
      init_instance_callback: initInstanceCallback,

      // Spellcheck
      browser_spellcheck: true
    };

    // Initialize TinyMCE using jQuery wrapper (matches OpenEdx pattern)
    $(textareaRef.current).tinymce(tinyMceConfig);

    // Cleanup on unmount
    return () => {
      // Remove editor instance
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
   * Update editor content when value prop changes externally
   */
  useEffect(() => {
    if (editorRef.current && editorRef.current.getContent() !== value) {
      editorRef.current.setContent(value || '');
    }
  }, [value]);

  /**
   * Handle image selection from picker
   */
  const handleImageSelect = (url: string) => {
    if (editorRef.current) {
      // Insert image at cursor position
      editorRef.current.insertContent(`<img src="${url}" alt="" />`);
    }
  };

  /**
   * Handle modal close
   */
  const handleCloseImagePicker = () => {
    setShowImagePicker(false);
  };

  return (
    <>
      <div className="tinymce-wrapper">
        <textarea
          ref={textareaRef}
          className="tiny-mce"
          placeholder={placeholder}
          defaultValue={value}
        />
      </div>

      {/* Image Picker Modal */}
      <ImagePickerModal
        runtime={runtime}
        courseId={courseId}
        isOpen={showImagePicker}
        onClose={handleCloseImagePicker}
        onSelectImage={handleImageSelect}
      />
    </>
  );
};
