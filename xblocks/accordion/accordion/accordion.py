"""Accordion - A React-based accordion content XBlock for Open edX

Interactive content organization component that allows instructors to present
multiple related content sections in expandable/collapsible accordion panels.
"""

import json
import re
import pkg_resources
from html import escape
from xblock.core import XBlock
from xblock.fields import String, Integer, Boolean, Scope
from xblock.fragment import Fragment


class Accordion(XBlock):
    """
    Accordion Content XBlock - organize related content into expandable sections.

    Supports 1-10 accordion sections with rich HTML content, keyboard navigation,
    and user state persistence for open/closed sections.
    """

    # Display name for the component
    display_name = String(
        display_name="Display Name",
        default="Accordion",
        scope=Scope.settings,
        help="The display name for this component"
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

    # User state - which sections are currently open
    open_sections = String(
        display_name="Open Sections",
        default="[0]",  # First section open by default
        scope=Scope.user_state,
        help="JSON array of indices for currently open sections"
    )

    # Allow multiple sections to be open simultaneously
    allow_multiple_open = Boolean(
        display_name="Allow Multiple Open",
        default=True,
        scope=Scope.settings,
        help="Allow multiple accordion sections to be open at the same time"
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
    def resource_string(self, path):
        """Read the content of a resource file."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    # ARCHITECTURAL: Student view structure
    def student_view(self, context=None):
        """
        Student view: Display accordion content using React + Paragon Collapsible
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
        frag.initialize_js('AccordionStudentView', {
            'url': self.runtime.local_resource_url(self, 'public/student-ui.js'),
            'displayName': self.display_name,
            'sections': self.safe_json_loads(self.sections_data, default=[{
                'title': 'Error',
                'content': 'No sections configured. Please contact your instructor.'
            }]),
            'openSections': self.safe_json_loads(self.open_sections, default=[0]),
            'allowMultipleOpen': self.allow_multiple_open,
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

        # ARCHITECTURAL: Initialize with bundle URL + data
        # SECURITY: Use safe JSON parsing with fallback
        frag.initialize_js('AccordionStudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js'),
            'fields': {
                'display_name': self.display_name,
                'sections': self.safe_json_loads(self.sections_data, default=[
                    {
                        'title': 'Section 1',
                        'content': '<p>Content here</p>'
                    }
                ]),
            }
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

            # SECURITY: Validate and sanitize display name
            display_name = data.get('display_name', '').strip()
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

                title = section.get('title', '').strip()
                content = section.get('content', '').strip()

                # SECURITY: Validate required fields
                if not title:
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
                if len(title) > self.MAX_SECTION_TITLE_LENGTH:
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
                    'title': title,
                    'content': sanitized_content
                })

            # SECURITY: Save sanitized data
            self.display_name = display_name
            self.sections_data = json.dumps(sanitized_sections)

            # Reset open sections if any are now out of bounds
            open_sections = self.safe_json_loads(self.open_sections, default=[0])
            open_sections = [idx for idx in open_sections if idx < len(sanitized_sections)]
            if not open_sections:
                open_sections = [0]  # Default to first section open
            self.open_sections = json.dumps(open_sections)

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

    # JSON handler to toggle section open/closed state
    @XBlock.json_handler
    def toggle_section(self, data, suffix=''):
        """
        Handler to toggle a section's open/closed state

        Enables state persistence so learners' accordion state is remembered.
        Respects allow_multiple_open setting.
        """
        try:
            section_index = int(data.get('section_index', 0))

            # Validate section index is within bounds
            sections = self.safe_json_loads(self.sections_data, default=[])
            if not (0 <= section_index < len(sections)):
                return {
                    'success': False,
                    'error': 'Invalid section index'
                }

            # Get current open sections
            open_sections = self.safe_json_loads(self.open_sections, default=[0])

            # Toggle the section
            if section_index in open_sections:
                # Close this section
                open_sections.remove(section_index)
            else:
                # Open this section
                if self.allow_multiple_open:
                    # Add to open sections
                    open_sections.append(section_index)
                else:
                    # Only allow one section open at a time
                    open_sections = [section_index]

            # Save updated state
            self.open_sections = json.dumps(open_sections)

            return {
                'success': True,
                'open_sections': open_sections
            }

        except (ValueError, TypeError):
            return {
                'success': False,
                'error': 'Invalid section index format'
            }

    # ARCHITECTURAL: Workbench scenarios for testing
    @staticmethod
    def workbench_scenarios():
        """Workbench scenarios for testing."""
        return [
            ("Accordion",
             """<accordion/>
             """),
            ("Multiple Accordion",
             """<vertical_demo>
                <accordion/>
                <accordion/>
                <accordion/>
                </vertical_demo>
             """),
        ]
