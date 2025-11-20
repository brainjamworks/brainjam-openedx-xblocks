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

      // Plugins - include CodeMirror (removed image plugin)
      plugins: 'lists, link, codemirror',

      // CodeMirror configuration
      codemirror: {
        path: window.baseUrl + "js/vendor",
        disableFilesMerge: true,
        jsFiles: ["codemirror-compressed.js"],
        cssFiles: ["CodeMirror/codemirror.css"]
      },

      // Toolbar - with custom image button
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

    // Add i18n translations (from edit.js:220-1241)
    if (window.tinymce && window.tinymce.addI18n) {
      window.tinymce.addI18n('en', {
        "Add to Dictionary": gettext("Add to Dictionary"),
        "Advanced": gettext("Advanced"),
        "Align center": gettext("Align center"),
        "Align left": gettext("Align left"),
        "Align right": gettext("Align right"),
        "Alignment": gettext("Alignment"),
        "Alternative source": gettext("Alternative source"),
        "Anchor": gettext("Anchor"),
        "Anchors": gettext("Anchors"),
        "Author": gettext("Author"),
        "Background color": gettext("Background color"),
        "Blockquote": gettext("Blockquote"),
        "Blocks": gettext("Blocks"),
        "Body": gettext("Body"),
        "Bold": gettext("Bold"),
        "Border color": gettext("Border color"),
        "Border": gettext("Border"),
        "Bottom": gettext("Bottom"),
        "Bullet list": gettext("Bullet list"),
        "Cancel": gettext("Cancel"),
        "Caption": gettext("Caption"),
        "Cell padding": gettext("Cell padding"),
        "Cell properties": gettext("Cell properties"),
        "Cell spacing": gettext("Cell spacing"),
        "Cell type": gettext("Cell type"),
        "Cell": gettext("Cell"),
        "Center": gettext("Center"),
        "Circle": gettext("Circle"),
        "Clear formatting": gettext("Clear formatting"),
        "Close": gettext("Close"),
        "Code block": gettext("Code block"),
        "Code": gettext("Code"),
        "Color": gettext("Color"),
        "Cols": gettext("Cols"),
        "Column group": gettext("Column group"),
        "Column": gettext("Column"),
        "Constrain proportions": gettext("Constrain proportions"),
        "Copy row": gettext("Copy row"),
        "Copy": gettext("Copy"),
        "Could not find the specified string.": gettext("Could not find the specified string."),
        "Custom color": gettext("Custom color"),
        "Custom...": gettext("Custom..."),
        "Cut row": gettext("Cut row"),
        "Cut": gettext("Cut"),
        "Decrease indent": gettext("Decrease indent"),
        "Default": gettext("Default"),
        "Delete column": gettext("Delete column"),
        "Delete row": gettext("Delete row"),
        "Delete table": gettext("Delete table"),
        "Description": gettext("Description"),
        "Dimensions": gettext("Dimensions"),
        "Disc": gettext("Disc"),
        "Div": gettext("Div"),
        "Document properties": gettext("Document properties"),
        "Edit HTML": gettext("Edit HTML"),
        "Edit": gettext("Edit"),
        "Embed": gettext("Embed"),
        "Emoticons": gettext("Emoticons"),
        "Encoding": gettext("Encoding"),
        "File": gettext("File"),
        "Find and replace": gettext("Find and replace"),
        "Find next": gettext("Find next"),
        "Find previous": gettext("Find previous"),
        "Find": gettext("Find"),
        "Finish": gettext("Finish"),
        "Font Family": gettext("Font Family"),
        "Font Sizes": gettext("Font Sizes"),
        "Footer": gettext("Footer"),
        "Format": gettext("Format"),
        "Formats": gettext("Formats"),
        "Fullscreen": gettext("Fullscreen"),
        "General": gettext("General"),
        "H Align": gettext("H Align"),
        "Header 1": gettext("Header 1"),
        "Header 2": gettext("Header 2"),
        "Header 3": gettext("Header 3"),
        "Header 4": gettext("Header 4"),
        "Header 5": gettext("Header 5"),
        "Header 6": gettext("Header 6"),
        "Header cell": gettext("Header cell"),
        "Header": gettext("Header"),
        "Headers": gettext("Headers"),
        "Heading 1": gettext("Heading 1"),
        "Heading 2": gettext("Heading 2"),
        "Heading 3": gettext("Heading 3"),
        "Heading 4": gettext("Heading 4"),
        "Heading 5": gettext("Heading 5"),
        "Heading 6": gettext("Heading 6"),
        "Headings": gettext("Headings"),
        "Height": gettext("Height"),
        "Horizontal line": gettext("Horizontal line"),
        "Horizontal space": gettext("Horizontal space"),
        "HTML source code": gettext("HTML source code"),
        "Ignore all": gettext("Ignore all"),
        "Ignore": gettext("Ignore"),
        "Image description": gettext("Image description"),
        "Increase indent": gettext("Increase indent"),
        "Inline": gettext("Inline"),
        "Insert column after": gettext("Insert column after"),
        "Insert column before": gettext("Insert column before"),
        "Insert date/time": gettext("Insert date/time"),
        "Insert image": gettext("Insert image"),
        "Insert link": gettext("Insert link"),
        "Insert row after": gettext("Insert row after"),
        "Insert row before": gettext("Insert row before"),
        "Insert table": gettext("Insert table"),
        "Insert template": gettext("Insert template"),
        "Insert video": gettext("Insert video"),
        "Insert": gettext("Insert"),
        "Insert/edit image": gettext("Insert/edit image"),
        "Insert/edit link": gettext("Insert/edit link"),
        "Insert/edit video": gettext("Insert/edit video"),
        "Italic": gettext("Italic"),
        "Justify": gettext("Justify"),
        "Keywords": gettext("Keywords"),
        "Left to right": gettext("Left to right"),
        "Left": gettext("Left"),
        "Lower Alpha": gettext("Lower Alpha"),
        "Lower Greek": gettext("Lower Greek"),
        "Lower Roman": gettext("Lower Roman"),
        "Match case": gettext("Match case"),
        "Merge cells": gettext("Merge cells"),
        "Middle": gettext("Middle"),
        "Name": gettext("Name"),
        "New document": gettext("New document"),
        "New window": gettext("New window"),
        "Next": gettext("Next"),
        "No color": gettext("No color"),
        "Nonbreaking space": gettext("Nonbreaking space"),
        "None": gettext("None"),
        "Numbered list": gettext("Numbered list"),
        "Ok": gettext("Ok"),
        "OK": gettext("OK"),
        "Page break": gettext("Page break"),
        "Paragraph": gettext("Paragraph"),
        "Paste as text": gettext("Paste as text"),
        "Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.": gettext("Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off."),
        "Paste row after": gettext("Paste row after"),
        "Paste row before": gettext("Paste row before"),
        "Paste your embed code below:": gettext("Paste your embed code below:"),
        "Paste": gettext("Paste"),
        "Poster": gettext("Poster"),
        "Pre": gettext("Pre"),
        "Prev": gettext("Prev"),
        "Preview": gettext("Preview"),
        "Print": gettext("Print"),
        "Redo": gettext("Redo"),
        "Remove link": gettext("Remove link"),
        "Replace all": gettext("Replace all"),
        "Replace with": gettext("Replace with"),
        "Replace": gettext("Replace"),
        "Restore last draft": gettext("Restore last draft"),
        "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": gettext("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),
        "Right to left": gettext("Right to left"),
        "Right": gettext("Right"),
        "Robots": gettext("Robots"),
        "Row group": gettext("Row group"),
        "Row properties": gettext("Row properties"),
        "Row type": gettext("Row type"),
        "Row": gettext("Row"),
        "Rows": gettext("Rows"),
        "Save": gettext("Save"),
        "Scope": gettext("Scope"),
        "Select all": gettext("Select all"),
        "Show blocks": gettext("Show blocks"),
        "Show invisible characters": gettext("Show invisible characters"),
        "Source code": gettext("Source code"),
        "Source": gettext("Source"),
        "Special character": gettext("Special character"),
        "Spellcheck": gettext("Spellcheck"),
        "Split cell": gettext("Split cell"),
        "Square": gettext("Square"),
        "Start search": gettext("Start search"),
        "Strikethrough": gettext("Strikethrough"),
        "Style": gettext("Style"),
        "Subscript": gettext("Subscript"),
        "Superscript": gettext("Superscript"),
        "Table properties": gettext("Table properties"),
        "Table": gettext("Table"),
        "Target": gettext("Target"),
        "Templates": gettext("Templates"),
        "Text color": gettext("Text color"),
        "Text to display": gettext("Text to display"),
        "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": gettext("The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?"),
        "The URL you entered seems to be an external link. Do you want to add the required http:// prefix?": gettext("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?"),
        "Title": gettext("Title"),
        "Tools": gettext("Tools"),
        "Top": gettext("Top"),
        "Underline": gettext("Underline"),
        "Undo": gettext("Undo"),
        "Upper Alpha": gettext("Upper Alpha"),
        "Upper Roman": gettext("Upper Roman"),
        "Url": gettext("Url"),
        "V Align": gettext("V Align"),
        "Vertical space": gettext("Vertical space"),
        "View": gettext("View"),
        "Visual aids": gettext("Visual aids"),
        "Whole words": gettext("Whole words"),
        "Width": gettext("Width"),
        "Words: {0}": gettext("Words: {0}"),
        "You have unsaved changes are you sure you want to navigate away?": gettext("You have unsaved changes are you sure you want to navigate away?"),
        "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.": gettext("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.")
      });
    }

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
