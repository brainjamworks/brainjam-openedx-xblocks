"""Flashcards - A React-based XBlock for Open edX

IMPLEMENTATION: Customize this file for your XBlock's functionality.
"""

import json
import re
import pkg_resources
from html import escape
from xblock.core import XBlock
from xblock.fields import String, Scope
from xblock.fragment import Fragment

# Import for getting course asset URL paths
try:
    from xmodule.contentstore.content import StaticContent
    from xmodule.contentstore.django import contentstore
    from xmodule.exceptions import NotFoundError
    from pymongo import DESCENDING
    HAS_STATIC_CONTENT = True
except ImportError:
    # Fallback if running outside full edx-platform
    HAS_STATIC_CONTENT = False

# Logging
import logging
logger = logging.getLogger(__name__)


class Flashcards(XBlock):
    """
    IMPLEMENTATION: Describe your XBlock's purpose here.

    Example: A minimal XBlock that displays content using React and Paragon.
    """

    # IMPLEMENTATION: Define your XBlock's fields
    # Add/modify fields based on your requirements
    display_name = String(
        display_name="Display Name",
        default="Flashcards",
        scope=Scope.settings,
        help="The display name for this component"
    )

    # Cards data - JSON-encoded list of flashcards (supports 1-100 cards)
    cards = String(
        display_name="Flashcards",
        default=json.dumps([{
            'front_title': 'Front of Card',
            'front_subtitle': '',
            'back_text': 'Back of card - click to flip'
        }]),
        scope=Scope.content,
        help="JSON list of flashcards, each with front_title, front_subtitle, and back_text"
    )

    # SECURITY: Field length limits
    MAX_DISPLAY_NAME_LENGTH = 255
    MAX_FRONT_TITLE_LENGTH = 100
    MAX_FRONT_SUBTITLE_LENGTH = 100
    MAX_BACK_TEXT_LENGTH = 10000  # Allow rich HTML content

    # SECURITY: Safe JSON parsing with error handling
    @staticmethod
    def safe_json_loads(json_str, default=None):
        """
        Safely parse JSON with error handling.
        Returns default value if parsing fails.
        """
        try:
            return json.loads(json_str)
        except (json.JSONDecodeError, TypeError, ValueError):
            return default if default is not None else []

    # SECURITY: HTML sanitization for TinyMCE content
    @staticmethod
    def sanitize_html(html_content):
        """
        Sanitize HTML content to prevent XSS attacks.
        Allows safe HTML tags from TinyMCE editor.
        Strips dangerous tags and attributes.
        """
        if not html_content:
            return ''

        # Remove dangerous tags
        dangerous_tags = [
            'script', 'iframe', 'object', 'embed', 'link',
            'meta', 'style', 'form', 'input', 'button'
        ]

        sanitized = html_content
        for tag in dangerous_tags:
            # Remove opening and closing tags (case insensitive)
            sanitized = re.sub(
                f'<{tag}[^>]*>.*?</{tag}>',
                '',
                sanitized,
                flags=re.IGNORECASE | re.DOTALL
            )
            # Remove self-closing tags
            sanitized = re.sub(
                f'<{tag}[^>]*/>',
                '',
                sanitized,
                flags=re.IGNORECASE
            )

        # Remove dangerous attributes
        dangerous_attrs = ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus']
        for attr in dangerous_attrs:
            sanitized = re.sub(
                f'{attr}\\s*=\\s*["\'][^"\']*["\']',
                '',
                sanitized,
                flags=re.IGNORECASE
            )

        # Remove javascript: protocol from href and src
        sanitized = re.sub(
            r'(href|src)\s*=\s*["\']javascript:[^"\']*["\']',
            '',
            sanitized,
            flags=re.IGNORECASE
        )

        return sanitized

    # ARCHITECTURAL: Helper method for reading static resources
    # DON'T CHANGE: This is the standard pattern
    def resource_string(self, path):
        """Read the content of a resource file."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    # ARCHITECTURAL: Student view structure
    # DON'T CHANGE: The Fragment pattern and initialization structure
    # IMPLEMENTATION: Customize the data passed to React
    def student_view(self, context=None):
        """
        Student view: Display content using React + Paragon

        ARCHITECTURAL: The Fragment, bootstrap loader, and initialize_js pattern
        IMPLEMENTATION: Customize the data dictionary
        """
        frag = Fragment()

        # ARCHITECTURAL: Add bootstrap loader (never changes)
        bootstrap_js = self.resource_string("static/student.js")
        frag.add_javascript(bootstrap_js)        # Load Paragon CSS from CDN (runtime, not bundled)
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/core.min.css')
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/light.min.css')



        # ARCHITECTURAL: Add XBlock custom styles (minimal)
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/student-ui.css'))

        # ARCHITECTURAL: Initialize with bundle URL + data
        # Runtime is passed separately by XBlock framework to the bootstrap function
        # IMPLEMENTATION: Customize this data dictionary with your fields
        frag.initialize_js('FlashcardsStudentView', {
            'url': self.runtime.local_resource_url(self, 'public/student-ui.js'),
            # IMPLEMENTATION: Pass your XBlock's data to React
            'displayName': self.display_name,
            # SECURITY: Use safe JSON parsing with fallback
            'cards': self.safe_json_loads(self.cards, default=[{
                'front_title': 'Error loading cards',
                'front_subtitle': '',
                'back_text': 'Please contact your instructor'
            }]),
        })

        return frag

    # ARCHITECTURAL: Studio view structure
    # DON'T CHANGE: The Fragment pattern and initialization structure
    # IMPLEMENTATION: Customize the data passed to React
    def studio_view(self, context=None):
        """
        Studio view: Edit the XBlock using React + Paragon

        ARCHITECTURAL: The Fragment, bootstrap loader, and initialize_js pattern
        IMPLEMENTATION: Customize the fields dictionary
        """
        frag = Fragment()

        # ARCHITECTURAL: Add bootstrap loader
        bootstrap_js = self.resource_string("static/studio.js")
        frag.add_javascript(bootstrap_js)        # Load Paragon CSS from CDN (runtime, not bundled)
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/core.min.css')
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/light.min.css')



        # ARCHITECTURAL: Add XBlock custom styles (minimal)
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/studio-ui.css'))

        # Get base asset URL and course ID for TinyMCE image handling
        base_asset_url = None
        course_id = None
        if HAS_STATIC_CONTENT and hasattr(self, 'location'):
            try:
                base_asset_url = StaticContent.get_base_url_path_for_course_assets(
                    self.location.course_key
                )
                course_id = str(self.location.course_key)
            except Exception:
                # Fallback if course assets not available
                pass

        # ARCHITECTURAL: Initialize with bundle URL + data
        # Runtime is passed separately by XBlock framework to the bootstrap function
        # IMPLEMENTATION: Customize the fields dictionary
        frag.initialize_js('FlashcardsStudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js'),
            'fields': {
                # IMPLEMENTATION: Pass your editable fields to React
                'display_name': self.display_name,
                # SECURITY: Use safe JSON parsing with fallback
                'cards': self.safe_json_loads(self.cards, default=[{
                    'front_title': 'Front of Card',
                    'front_subtitle': '',
                    'back_text': 'Back of card - click to flip'
                }]),
            },
            'baseAssetUrl': base_asset_url,
            'courseId': course_id
        })

        return frag

    # IMPLEMENTATION: Add your JSON handlers here
    # This is an example save handler - customize for your needs
    @XBlock.json_handler
    def save_data(self, data, suffix=''):
        """
        Handler to save data from studio view

        IMPLEMENTATION: Customize validation and field handling
        SECURITY: Includes input validation, sanitization, and length checks
        """
        try:
            # SECURITY: Validate input types
            if not isinstance(data, dict):
                return {
                    'success': False,
                    'error': 'Invalid data format'
                }

            # SECURITY: Validate and sanitize display name
            display_name = data.get('display_name', '').strip()
            cards = data.get('cards', [])

            if not display_name:
                return {
                    'success': False,
                    'error': 'Display name is required'
                }

            # SECURITY: Check display name length
            if len(display_name) > self.MAX_DISPLAY_NAME_LENGTH:
                return {
                    'success': False,
                    'error': f'Display name must be {self.MAX_DISPLAY_NAME_LENGTH} characters or less'
                }

            # SECURITY: Validate cards array
            if not isinstance(cards, list):
                return {
                    'success': False,
                    'error': 'Cards must be a list'
                }

            if len(cards) < 1:
                return {
                    'success': False,
                    'error': 'At least one card is required'
                }

            if len(cards) > 100:
                return {
                    'success': False,
                    'error': 'Maximum 100 cards allowed'
                }

            # SECURITY: Validate and sanitize each card
            sanitized_cards = []
            for i, card in enumerate(cards):
                if not isinstance(card, dict):
                    return {
                        'success': False,
                        'error': f'Card {i+1} must be an object'
                    }

                front_title = card.get('front_title', '').strip()
                front_subtitle = card.get('front_subtitle', '').strip()
                back_text = card.get('back_text', '').strip()

                # SECURITY: Validate required fields
                if not front_title:
                    return {
                        'success': False,
                        'error': f'Card {i+1}: Front title is required'
                    }

                if not back_text:
                    return {
                        'success': False,
                        'error': f'Card {i+1}: Back text is required'
                    }

                # SECURITY: Validate field lengths
                if len(front_title) > self.MAX_FRONT_TITLE_LENGTH:
                    return {
                        'success': False,
                        'error': f'Card {i+1}: Front title must be {self.MAX_FRONT_TITLE_LENGTH} characters or less'
                    }

                if len(front_subtitle) > self.MAX_FRONT_SUBTITLE_LENGTH:
                    return {
                        'success': False,
                        'error': f'Card {i+1}: Front subtitle must be {self.MAX_FRONT_SUBTITLE_LENGTH} characters or less'
                    }

                if len(back_text) > self.MAX_BACK_TEXT_LENGTH:
                    return {
                        'success': False,
                        'error': f'Card {i+1}: Back text must be {self.MAX_BACK_TEXT_LENGTH} characters or less'
                    }

                # SECURITY: Sanitize HTML in back_text to prevent XSS
                sanitized_back_text = self.sanitize_html(back_text)

                # Add sanitized card
                sanitized_cards.append({
                    'front_title': front_title,
                    'front_subtitle': front_subtitle,
                    'back_text': sanitized_back_text
                })

            # SECURITY: Save sanitized data
            self.display_name = display_name
            self.cards = json.dumps(sanitized_cards)

            return {
                'success': True,
                'display_name': self.display_name,
                'cards': self.safe_json_loads(self.cards, default=[]),
            }

        except Exception as e:
            # SECURITY: Log error but don't expose internal details to client
            return {
                'success': False,
                'error': 'An error occurred while saving. Please try again.'
            }

    # JSON handler to list course assets for image picker
    @XBlock.json_handler
    def list_course_assets(self, data, suffix=''):
        """
        List all image assets from the course contentstore.

        Returns a list of image assets with URLs for display in image picker modal.
        """
        if not HAS_STATIC_CONTENT:
            return {'success': False, 'error': 'Contentstore not available'}

        try:
            course_key = self.runtime.course_id

            # Filter for image types only
            image_types = [
                'image/jpeg', 'image/png', 'image/gif',
                'image/webp', 'image/svg+xml'
            ]
            filter_params = {'contentType': {'$in': image_types}}

            # Get all image assets from contentstore
            all_assets, total_count = contentstore().get_all_content_for_course(
                course_key,
                start=0,
                maxresults=500,
                sort=[('uploadDate', DESCENDING)],
                filter_params=filter_params
            )

            # Format assets for frontend consumption
            image_assets = []
            for asset in all_assets:
                asset_key = asset.get('asset_key')
                if not asset_key:
                    continue

                # Get portable URL for storage
                portable_url = StaticContent.get_static_path_from_location(asset_key)

                # Get full URL for display
                asset_url = StaticContent.get_canonicalized_asset_path(
                    course_key, portable_url, '', []
                )

                # Get upload date
                upload_date = asset.get('uploadDate')
                upload_date_str = upload_date.isoformat() if upload_date else ''

                image_assets.append({
                    'filename': asset_key.block_id,
                    'url': asset_url,
                    'portable_url': portable_url,
                    'content_type': asset.get('contentType', ''),
                    'upload_date': upload_date_str,
                    'thumbnail_url': asset_url  # Use same URL for thumbnail
                })

            return {
                'success': True,
                'assets': image_assets,
                'count': len(image_assets)
            }

        except Exception as e:
            logger.exception(f"Error listing course assets: {str(e)}")
            return {
                'success': False,
                'error': 'Unable to load course assets'
            }

    # ARCHITECTURAL: Workbench scenarios for testing
    # IMPLEMENTATION: Customize scenarios for your XBlock
    @staticmethod
    def workbench_scenarios():
        """Workbench scenarios for testing."""
        return [
            ("Flashcards",
             """<flashcards/>
             """),
            ("Multiple Flashcards",
             """<vertical_demo>
                <flashcards/>
                <flashcards/>
                <flashcards/>
                </vertical_demo>
             """),
        ]
