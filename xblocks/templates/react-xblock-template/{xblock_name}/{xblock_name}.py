"""{XBlockName} - A React-based XBlock for Open edX

IMPLEMENTATION: Customize this file for your XBlock's functionality.
"""

import json
import pkg_resources
from xblock.core import XBlock
from xblock.fields import String, Scope
from xblock.fragment import Fragment


class {XBlockName}(XBlock):
    """
    IMPLEMENTATION: Describe your XBlock's purpose here.

    Example: A minimal XBlock that displays content using React and Paragon.
    """

    # IMPLEMENTATION: Define your XBlock's fields
    # Add/modify fields based on your requirements
    display_name = String(
        display_name="Display Name",
        default="{XBlockName}",
        scope=Scope.settings,
        help="The display name for this component"
    )

    # IMPLEMENTATION: Add more fields as needed
    # Example fields:
    # content = String(
    #     display_name="Content",
    #     default="Default content here",
    #     scope=Scope.content,
    #     help="The main content to display"
    # )

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
        frag.add_javascript(bootstrap_js)

        # ARCHITECTURAL: Add CSS bundle
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/student-ui.css'))

        # ARCHITECTURAL: Initialize with bundle URL + data
        # Runtime is passed separately by XBlock framework to the bootstrap function
        # IMPLEMENTATION: Customize this data dictionary with your fields
        frag.initialize_js('{XBlockName}StudentView', {
            'url': self.runtime.local_resource_url(self, 'public/student-ui.js'),
            # IMPLEMENTATION: Pass your XBlock's data to React
            'displayName': self.display_name,
            # Add more data as needed:
            # 'content': self.content,
            # 'settings': {...},
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
        frag.add_javascript(bootstrap_js)

        # ARCHITECTURAL: Add CSS bundle
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/studio-ui.css'))

        # ARCHITECTURAL: Initialize with bundle URL + data
        # Runtime is passed separately by XBlock framework to the bootstrap function
        # IMPLEMENTATION: Customize the fields dictionary
        frag.initialize_js('{XBlockName}StudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js'),
            'fields': {
                # IMPLEMENTATION: Pass your editable fields to React
                'display_name': self.display_name,
                # Add more fields as needed:
                # 'content': self.content,
                # 'settings': {...},
            }
        })

        return frag

    # IMPLEMENTATION: Add your JSON handlers here
    # This is an example save handler - customize for your needs
    @XBlock.json_handler
    def save_data(self, data, suffix=''):
        """
        Handler to save data from studio view

        IMPLEMENTATION: Customize validation and field handling
        """
        # IMPLEMENTATION: Validate input
        display_name = data.get('display_name', '').strip()
        if not display_name:
            return {
                'success': False,
                'error': 'Display name is required'
            }

        # IMPLEMENTATION: Sanitize and save data
        # For rich text content, use bleach or similar:
        # from bleach import clean
        # content = clean(data.get('content', ''), tags=['p', 'br', 'strong', 'em'])

        self.display_name = display_name
        # self.content = content  # Add your fields

        return {
            'success': True,
            'display_name': self.display_name,
            # Return updated fields as needed
        }

    # ARCHITECTURAL: Workbench scenarios for testing
    # IMPLEMENTATION: Customize scenarios for your XBlock
    @staticmethod
    def workbench_scenarios():
        """Workbench scenarios for testing."""
        return [
            ("{XBlockName}",
             """<{xblock_name}/>
             """),
            ("Multiple {XBlockName}",
             """<vertical_demo>
                <{xblock_name}/>
                <{xblock_name}/>
                <{xblock_name}/>
                </vertical_demo>
             """),
        ]
