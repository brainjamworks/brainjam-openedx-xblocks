"""Content Blocks - A React-based content XBlock for Open edX

Simple content organization component that allows instructors to present
multiple related content sections in a vertical layout.
"""

import json
import re
import pkg_resources
from html import escape
from xblock.core import XBlock
from xblock.fields import String, Integer, Boolean, Scope
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


class ContentBlocks(XBlock):
    """
    Content Blocks XBlock - organize related content in simple vertical layout.

    Supports 1-10 content blocks with rich HTML content.
    """

    # Display name for the component
    display_name = String(
        display_name="Display Name",
        default="Content Blocks",
        scope=Scope.settings,
        help="The display name for this component"
    )

    # Optional title displayed above content blocks
    title = String(
        display_name="Title (Optional)",
        default="",
        scope=Scope.content,
        help="Optional H3 heading displayed above the content blocks. Leave empty to hide."
    )

    # Sections data - JSON-encoded array of section objects
    sections_data = String(
        display_name="Sections Data",
        default=json.dumps([
            {
                'title': 'Learning Objectives',
                'content': '<p><strong>By the end of this section, you will be able to:</strong></p><ul><li>Identify key concepts and principles</li><li>Apply knowledge to practical scenarios</li><li>Analyze and evaluate different approaches</li></ul>'
            },
            {
                'title': 'Key Concepts',
                'content': '<h4>Core Principles</h4><p>Understanding the fundamental concepts is essential for mastering this topic.</p><ul><li><strong>Concept 1:</strong> Foundation of the subject matter</li><li><strong>Concept 2:</strong> Building on basic knowledge</li><li><strong>Concept 3:</strong> Advanced applications</li></ul>'
            },
            {
                'title': 'Practice Activities',
                'content': '<p>Apply what you\'ve learned through these exercises:</p><ol><li>Complete the self-assessment quiz</li><li>Review the case study examples</li><li>Participate in the discussion forum</li></ol>'
            }
        ]),
        scope=Scope.content,
        help="JSON array of section objects, each with 'title' and 'content' properties"
    )

    # SECURITY: Field length limits
    MAX_DISPLAY_NAME_LENGTH = 255
    MAX_SECTION_TITLE_LENGTH = 100
    MAX_SECTION_CONTENT_LENGTH = 50000  # Allow rich HTML content

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

    # SECURITY: HTML sanitization for tab content
    @staticmethod
    def sanitize_html(html_content):
        """
        Sanitize HTML content to prevent XSS attacks.
        Allows safe HTML tags for educational content.
        Strips dangerous tags and attributes.
        """
        if not html_content:
            return ''

        # Remove dangerous tags (iframe allowed for video embeds)
        dangerous_tags = [
            'script', 'object', 'embed', 'link',
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
    def resource_string(self, path):
        """Read the content of a resource file."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    # ARCHITECTURAL: Student view structure
    def student_view(self, context=None):
        """
        Student view: Display content blocks in simple vertical layout
        """
        frag = Fragment()

        # ARCHITECTURAL: Add bootstrap loader
        bootstrap_js = self.resource_string("static/student.js")
        frag.add_javascript(bootstrap_js)        # Load Paragon CSS from CDN (runtime, not bundled)
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/core.min.css')
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/light.min.css')



        # ARCHITECTURAL: Add XBlock custom styles (minimal)
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/student-ui.css'))

        # ARCHITECTURAL: Initialize with bundle URL + data
        # SECURITY: Use safe JSON parsing with fallback
        frag.initialize_js('ContentBlocksStudentView', {
            'url': self.runtime.local_resource_url(self, 'public/student-ui.js'),
            'displayName': self.display_name,
            'title': self.title,
            'sections': self.safe_json_loads(self.sections_data, default=[{
                'title': 'Error',
                'content': 'No sections configured. Please contact your instructor.'
            }]),
        })

        return frag

    # ARCHITECTURAL: Studio view structure
    def studio_view(self, context=None):
        """
        Studio view: Edit the XBlock using React + Paragon
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
        # SECURITY: Use safe JSON parsing with fallback
        frag.initialize_js('ContentBlocksStudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js'),
            'fields': {
                'display_name': self.display_name,
                'title': self.title,
                'sections': self.safe_json_loads(self.sections_data, default=[
                    {
                        'title': 'Section 1',
                        'content': '<p>Content here</p>'
                    }
                ]),
            },
            'baseAssetUrl': base_asset_url,
            'courseId': course_id
        })

        return frag

    # JSON handler to save studio data
    @XBlock.json_handler
    def save_data(self, data, suffix=''):
        """
        Handler to save data from studio view

        SECURITY: Includes input validation, sanitization, and length checks
        """
        try:
            # SECURITY: Validate input types
            if not isinstance(data, dict):
                return {
                    'success': False,
                    'error': 'Invalid data format'
                }

            # SECURITY: Validate and sanitize display name and title
            display_name = data.get('display_name', '').strip()
            title = data.get('title', '').strip()
            sections = data.get('sections', [])

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

            # SECURITY: Validate sections array
            if not isinstance(sections, list):
                return {
                    'success': False,
                    'error': 'Sections must be a list'
                }

            if len(sections) < 1:
                return {
                    'success': False,
                    'error': 'At least one section is required'
                }

            if len(sections) > 10:
                return {
                    'success': False,
                    'error': 'Maximum 10 sections allowed'
                }

            # SECURITY: Validate and sanitize each section
            sanitized_sections = []
            for i, section in enumerate(sections):
                if not isinstance(section, dict):
                    return {
                        'success': False,
                        'error': f'Section {i+1} must be an object'
                    }

                section_title = section.get('title', '').strip()
                content = section.get('content', '').strip()

                # SECURITY: Validate required fields
                if not section_title:
                    return {
                        'success': False,
                        'error': f'Section {i+1}: Title is required'
                    }

                # Content can be empty, but field must exist
                if 'content' not in section:
                    return {
                        'success': False,
                        'error': f'Section {i+1}: Content field is required'
                    }

                # SECURITY: Validate field lengths
                if len(section_title) > self.MAX_SECTION_TITLE_LENGTH:
                    return {
                        'success': False,
                        'error': f'Section {i+1}: Title must be {self.MAX_SECTION_TITLE_LENGTH} characters or less'
                    }

                if len(content) > self.MAX_SECTION_CONTENT_LENGTH:
                    return {
                        'success': False,
                        'error': f'Section {i+1}: Content must be {self.MAX_SECTION_CONTENT_LENGTH} characters or less'
                    }

                # SECURITY: Sanitize HTML in content to prevent XSS
                sanitized_content = self.sanitize_html(content)

                # Add sanitized section
                sanitized_sections.append({
                    'title': section_title,
                    'content': sanitized_content
                })

            # SECURITY: Save sanitized data
            self.display_name = display_name
            self.title = title
            self.sections_data = json.dumps(sanitized_sections)

            return {
                'success': True,
                'display_name': self.display_name,
                'sections': self.safe_json_loads(self.sections_data, default=[]),
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
                'error': f'Failed to list assets: {str(e)}'
            }

    # ARCHITECTURAL: Workbench scenarios for testing
    @staticmethod
    def workbench_scenarios():
        """Workbench scenarios for testing."""
        return [
            ("Content Blocks",
             """<content_blocks/>
             """),
            ("Multiple Content Blocks",
             """<vertical_demo>
                <content_blocks/>
                <content_blocks/>
                <content_blocks/>
                </vertical_demo>
             """),
        ]
