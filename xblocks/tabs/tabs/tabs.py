"""Tabs - A React-based tabbed content XBlock for Open edX

Interactive content organization component that allows instructors to present
multiple related content sections in a space-efficient tabbed interface.
"""

import json
import re
import pkg_resources
from html import escape
from xblock.core import XBlock
from xblock.fields import String, Integer, Scope
from xblock.fragment import Fragment


class Tabs(XBlock):
    """
    Tabbed Content XBlock - organize related content into navigable tabs.

    Supports 1-5 tabs with rich HTML content, keyboard navigation, and
    user state persistence.
    """

    # Display name for the component
    display_name = String(
        display_name="Display Name",
        default="Tabbed Content",
        scope=Scope.settings,
        help="The display name for this component"
    )

    # Tabs data - JSON-encoded array of tab objects
    tabs_data = String(
        display_name="Tabs Data",
        default=json.dumps([
            {
                'label': 'Validity',
                'content': '<h3>Validity</h3><p>Does the assessment measure what it is intended to measure?</p><ul><li>Content validity: Does it cover the learning objectives?</li><li>Construct validity: Does it measure the underlying skill or knowledge?</li></ul>'
            },
            {
                'label': 'Reliability',
                'content': '<h3>Reliability</h3><p>Does the assessment produce consistent results?</p><ul><li>Internal consistency: Do all items measure the same construct?</li><li>Test-retest: Would students get similar scores if tested again?</li></ul>'
            },
            {
                'label': 'Educational Impact',
                'content': '<h3>Educational Impact</h3><p>Does the assessment drive learning in desired directions?</p><ul><li>Does it promote deep learning or surface learning?</li><li>Does it guide students\' study strategies?</li><li>Does it provide useful feedback?</li></ul>'
            }
        ]),
        scope=Scope.content,
        help="JSON array of tab objects, each with 'label' and 'content' properties"
    )

    # User state - which tab is currently active
    current_tab_index = Integer(
        display_name="Current Tab Index",
        default=0,
        scope=Scope.user_state,
        help="Index of the currently selected tab (0-based)"
    )

    # SECURITY: Field length limits
    MAX_DISPLAY_NAME_LENGTH = 255
    MAX_TAB_LABEL_LENGTH = 50
    MAX_TAB_CONTENT_LENGTH = 50000  # Allow rich HTML content

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
        Student view: Display tabbed content using React + Paragon
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
        frag.initialize_js('TabsStudentView', {
            'url': self.runtime.local_resource_url(self, 'public/student-ui.js'),
            'displayName': self.display_name,
            'tabs': self.safe_json_loads(self.tabs_data, default=[{
                'label': 'Error',
                'content': 'No tabs configured. Please contact your instructor.'
            }]),
            'currentTabIndex': self.current_tab_index,
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
        frag.initialize_js('TabsStudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js'),
            'fields': {
                'display_name': self.display_name,
                'tabs': self.safe_json_loads(self.tabs_data, default=[
                    {
                        'label': 'Tab 1',
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
            tabs = data.get('tabs', [])

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

            # SECURITY: Validate tabs array
            if not isinstance(tabs, list):
                return {
                    'success': False,
                    'error': 'Tabs must be a list'
                }

            if len(tabs) < 1:
                return {
                    'success': False,
                    'error': 'At least one tab is required'
                }

            if len(tabs) > 5:
                return {
                    'success': False,
                    'error': 'Maximum 5 tabs allowed'
                }

            # SECURITY: Validate and sanitize each tab
            sanitized_tabs = []
            for i, tab in enumerate(tabs):
                if not isinstance(tab, dict):
                    return {
                        'success': False,
                        'error': f'Tab {i+1} must be an object'
                    }

                label = tab.get('label', '').strip()
                content = tab.get('content', '').strip()

                # SECURITY: Validate required fields
                if not label:
                    return {
                        'success': False,
                        'error': f'Tab {i+1}: Label is required'
                    }

                # Content can be empty, but field must exist
                if 'content' not in tab:
                    return {
                        'success': False,
                        'error': f'Tab {i+1}: Content field is required'
                    }

                # SECURITY: Validate field lengths
                if len(label) > self.MAX_TAB_LABEL_LENGTH:
                    return {
                        'success': False,
                        'error': f'Tab {i+1}: Label must be {self.MAX_TAB_LABEL_LENGTH} characters or less'
                    }

                if len(content) > self.MAX_TAB_CONTENT_LENGTH:
                    return {
                        'success': False,
                        'error': f'Tab {i+1}: Content must be {self.MAX_TAB_CONTENT_LENGTH} characters or less'
                    }

                # SECURITY: Sanitize HTML in content to prevent XSS
                sanitized_content = self.sanitize_html(content)

                # Add sanitized tab
                sanitized_tabs.append({
                    'label': label,
                    'content': sanitized_content
                })

            # SECURITY: Save sanitized data
            self.display_name = display_name
            self.tabs_data = json.dumps(sanitized_tabs)

            # Reset current tab if it's now out of bounds
            if self.current_tab_index >= len(sanitized_tabs):
                self.current_tab_index = 0

            return {
                'success': True,
                'display_name': self.display_name,
                'tabs': self.safe_json_loads(self.tabs_data, default=[]),
            }

        except Exception as e:
            # SECURITY: Log error but don't expose internal details to client
            return {
                'success': False,
                'error': 'An error occurred while saving. Please try again.'
            }

    # JSON handler to save current tab state
    @XBlock.json_handler
    def set_current_tab(self, data, suffix=''):
        """
        Handler to save user's current tab selection

        Enables state persistence so learners return to their last viewed tab.
        """
        try:
            tab_index = int(data.get('tab_index', 0))

            # Validate tab index is within bounds
            tabs = self.safe_json_loads(self.tabs_data, default=[])
            if 0 <= tab_index < len(tabs):
                self.current_tab_index = tab_index
                return {'success': True}
            else:
                return {
                    'success': False,
                    'error': 'Invalid tab index'
                }
        except (ValueError, TypeError):
            return {
                'success': False,
                'error': 'Invalid tab index format'
            }

    # ARCHITECTURAL: Workbench scenarios for testing
    @staticmethod
    def workbench_scenarios():
        """Workbench scenarios for testing."""
        return [
            ("Tabs",
             """<tabs/>
             """),
            ("Multiple Tabs",
             """<vertical_demo>
                <tabs/>
                <tabs/>
                <tabs/>
                </vertical_demo>
             """),
        ]
