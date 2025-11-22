"""ImageCommentary - An annotated image XBlock for Open edX

Displays an image with clickable markers that show commentary in popovers.
Perfect for annotating exam transcripts, diagrams, or other educational materials.
"""

import json
import logging
import pkg_resources
from xblock.core import XBlock
from xblock.fields import String, List, Scope
from xblock.fragment import Fragment

# Contentstore imports for image upload and asset management
try:
    from xmodule.contentstore.content import StaticContent
    from xmodule.contentstore.django import contentstore
    from xmodule.exceptions import NotFoundError
    from pymongo import DESCENDING
    from django.conf import settings
    CONTENTSTORE_AVAILABLE = True
except ImportError:
    CONTENTSTORE_AVAILABLE = False
    logging.getLogger(__name__).warning("Contentstore not available - image upload will not work")

# Module logger
logger = logging.getLogger(__name__)


class ImageCommentary(XBlock):
    """
    Image Commentary XBlock

    Allows instructors to upload an image and place markers with commentary.
    Students can click markers to view commentary in popovers.

    Use cases:
    - Annotated exam transcripts
    - Labeled diagrams
    - Image-based explanations
    - Visual learning aids
    """

    display_name = String(
        display_name="Display Name",
        default="Image Commentary",
        scope=Scope.settings,
        help="The display name for this component"
    )

    # Optional title displayed above content
    title = String(
        display_name="Title (Optional)",
        default="",
        scope=Scope.content,
        help="Optional H3 heading displayed above the image. Leave empty to hide."
    )

    image_url = String(
        display_name="Image URL",
        default="",
        scope=Scope.content,
        help="URL of the image to annotate"
    )

    markers = List(
        display_name="Markers",
        default=[],
        scope=Scope.content,
        help="List of markers with commentary. Each marker has: id, x, y, label, commentary, type (info/warning/success/danger)"
    )

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
        frag.initialize_js('ImageCommentaryStudentView', {
            'url': self.runtime.local_resource_url(self, 'public/student-ui.js'),
            # IMPLEMENTATION: Pass your XBlock's data to React
            'displayName': self.display_name,
            'title': self.title,
            'imageUrl': self.image_url,
            'markers': self.markers,
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
        import time
        cache_bust = str(int(time.time()))
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/studio-ui.css') + f'?v={cache_bust}')

        # ARCHITECTURAL: Initialize with bundle URL + data
        # Runtime is passed separately by XBlock framework to the bootstrap function
        # IMPLEMENTATION: Customize the fields dictionary
        frag.initialize_js('ImageCommentaryStudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js') + f'?v={cache_bust}',
            'fields': {
                # IMPLEMENTATION: Pass your editable fields to React
                'display_name': self.display_name,
                'title': self.title,
                'image_url': self.image_url,
                'markers': self.markers,
                'course_id': str(self.runtime.course_id),  # For contentstore API calls
            }
        })

        return frag

    # IMPLEMENTATION: Add your JSON handlers here
    @XBlock.json_handler
    def list_course_assets(self, data, suffix=''):
        """
        List all image assets from the course contentstore.

        Returns a list of image assets with URLs for display in asset picker.

        Args:
            data (dict): Request data (unused)
            suffix (str): URL suffix (unused)

        Returns:
            dict: Success response with assets array, or error response
        """
        if not CONTENTSTORE_AVAILABLE:
            return {
                'success': False,
                'error': 'Contentstore not available'
            }

        try:
            course_key = self.runtime.course_id

            # Filter for image types only
            image_types = [
                'image/jpeg',
                'image/png',
                'image/gif',
                'image/webp',
                'image/svg+xml'
            ]
            filter_params = {'contentType': {'$in': image_types}}

            # Get all image assets from contentstore
            all_assets, total_count = contentstore().get_all_content_for_course(
                course_key,
                start=0,
                maxresults=500,  # Reasonable limit for asset picker
                sort=[('uploadDate', DESCENDING)],  # Most recent first
                filter_params=filter_params
            )

            # Format assets for frontend consumption
            image_assets = []
            for asset in all_assets:
                asset_key = asset.get('asset_key')

                # Get portable URL (relative path)
                portable_url = StaticContent.get_static_path_from_location(asset_key)

                # Get full canonicalized URL for display
                asset_url = StaticContent.get_canonicalized_asset_path(
                    course_key,
                    portable_url,
                    '',
                    []
                )

                # Extract filename from asset key
                filename = asset_key.block_id

                # Get upload date
                upload_date = asset.get('uploadDate', '')
                if upload_date:
                    upload_date = upload_date.isoformat() if hasattr(upload_date, 'isoformat') else str(upload_date)

                image_assets.append({
                    'filename': filename,
                    'url': asset_url,
                    'portable_url': portable_url,
                    'content_type': asset.get('contentType', ''),
                    'upload_date': upload_date,
                    'thumbnail_url': asset_url  # Could generate thumbnails in the future
                })

            logger.info(f"Listed {len(image_assets)} image assets for course {course_key}")

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

    @XBlock.json_handler
    def save_data(self, data, suffix=''):
        """
        Handler to save data from studio view

        IMPLEMENTATION: Validate and save image commentary data
        """
        # IMPLEMENTATION: Validate input
        display_name = data.get('display_name', '').strip()
        if not display_name:
            return {
                'success': False,
                'error': 'Display name is required'
            }

        title = data.get('title', '').strip()

        image_url = data.get('image_url', '').strip()
        if not image_url:
            return {
                'success': False,
                'error': 'Image URL is required'
            }

        markers = data.get('markers', [])
        if not isinstance(markers, list):
            return {
                'success': False,
                'error': 'Markers must be a list'
            }

        # Validate marker structure
        valid_marker_types = ['info', 'warning', 'success', 'danger']
        for i, marker in enumerate(markers):
            if not isinstance(marker, dict):
                return {
                    'success': False,
                    'error': f'Marker {i+1} must be an object'
                }

            required_fields = ['id', 'x', 'y', 'label', 'commentary', 'type']
            for field in required_fields:
                if field not in marker:
                    return {
                        'success': False,
                        'error': f'Marker {i+1} missing required field: {field}'
                    }

            if not marker['label'].strip():
                return {
                    'success': False,
                    'error': f'Marker {i+1} must have a label'
                }

            if marker['type'] not in valid_marker_types:
                return {
                    'success': False,
                    'error': f'Marker {i+1} has invalid type. Must be one of: {", ".join(valid_marker_types)}'
                }

        # Save data
        self.display_name = display_name
        self.title = title
        self.image_url = image_url
        self.markers = markers

        return {
            'success': True,
            'display_name': self.display_name,
            'image_url': self.image_url,
            'markers': self.markers,
        }

    # ARCHITECTURAL: Workbench scenarios for testing
    # IMPLEMENTATION: Customize scenarios for your XBlock
    @staticmethod
    def workbench_scenarios():
        """Workbench scenarios for testing."""
        return [
            ("ImageCommentary",
             """<image_commentary/>
             """),
            ("Multiple ImageCommentary",
             """<vertical_demo>
                <image_commentary/>
                <image_commentary/>
                <image_commentary/>
                </vertical_demo>
             """),
        ]
