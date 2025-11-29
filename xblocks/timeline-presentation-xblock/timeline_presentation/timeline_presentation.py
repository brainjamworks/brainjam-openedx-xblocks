"""TimelinePresentation - Audio-Synchronized Animation XBlock for Open edX

A React-based XBlock for creating timeline-based presentations with audio narration
and synchronized visual animations. Perfect for educational content that benefits
from choreographed presentation (anatomy lessons, procedures, step-by-step processes).
"""

import json
import logging
import pkg_resources
from xblock.core import XBlock
from xblock.fields import String, List, Boolean, Dict, Scope
from xblock.fragment import Fragment

# Contentstore imports for asset management
try:
    from xmodule.contentstore.content import StaticContent
    from xmodule.contentstore.django import contentstore
    from xmodule.exceptions import NotFoundError
    from pymongo import DESCENDING
    CONTENTSTORE_AVAILABLE = True
except ImportError:
    CONTENTSTORE_AVAILABLE = False
    logging.getLogger(__name__).warning("Contentstore not available - asset upload will not work")

logger = logging.getLogger(__name__)


class TimelinePresentation(XBlock):
    """
    Timeline Presentation XBlock - Audio-synchronized animations

    Create choreographed educational presentations where visual elements appear
    and animate in sync with audio narration. Ideal for:
    - Medical/anatomy lessons
    - Step-by-step procedure demonstrations
    - Complex concept visualizations
    - Any content needing synchronized narration + visuals
    """

    # Studio display metadata
    display_name_with_default = "Timeline Presentation"
    category = "timeline_presentation"
    icon_class = "other"

    # =============================================================================
    # SETTINGS: Configuration fields (Scope.settings)
    # =============================================================================

    display_name = String(
        display_name="Display Name",
        default="Timeline Presentation",
        scope=Scope.settings,
        help="The display name for this component"
    )

    # =============================================================================
    # CONTENT: Presentation configuration (Scope.content)
    # =============================================================================

    title = String(
        display_name="Title",
        default="",
        scope=Scope.content,
        help="Main title displayed above the presentation"
    )

    description = String(
        display_name="Description (Optional)",
        default="",
        scope=Scope.content,
        help="Optional description or context displayed before the presentation",
        multiline_editor=True
    )

    image_url = String(
        display_name="Background Image URL",
        default="",
        scope=Scope.content,
        help="URL to the diagram/image used as the presentation canvas"
    )

    audio_url = String(
        display_name="Audio Narration URL",
        default="",
        scope=Scope.content,
        help="URL to the audio file (MP3) for narration"
    )

    timeline_events = List(
        display_name="Timeline Events",
        default=[],
        scope=Scope.content,
        help="JSON array of timeline events (elements and animations synchronized with audio)"
    )
    # Timeline event structure - SUPPORTS TWO FORMATS:
    #
    # V2 FORMAT (New - GSAP timeline with entry/exit animations):
    # {
    #   "id": "event-1",
    #   "elementType": "text" | "shape" | "line" | "arrow",
    #   "timing": {
    #     "startTime": 7.25,      # seconds from audio start
    #     "endTime": 12.5         # OPTIONAL - when element exits (omit to stay visible)
    #   },
    #   "entryAnimation": {
    #     "type": "fade" | "scale" | "wipe" | "slide" | "show",
    #     "duration": 750,        # milliseconds
    #     "direction": "left" | "right" | "up" | "down",  # optional
    #     "easing": "power2.out"  # GSAP easing, optional
    #   },
    #   "exitAnimation": {        # OPTIONAL - omit to keep element visible
    #     "type": "fade",
    #     "duration": 500,
    #     "easing": "power2.in"
    #   },
    #   "position": {"x": 50, "y": 50},  # percentage (0-100)
    #   "content": "Text content",       # for text elements
    #   "shapeType": "circle" | "rectangle" | "triangle",  # for shape elements
    #   "color": "#FFFFFF",
    #   "fontSize": 18,                  # for text
    #   "thickness": 2,                  # for line/arrow
    #   "lineCoordinates": {"x1": 10, "y1": 10, "x2": 90, "y2": 90}  # for line/arrow
    # }
    #
    # V1 FORMAT (Legacy - flat structure - STILL SUPPORTED):
    # {
    #   "id": "event-1",
    #   "timestamp": 7.25,              # seconds (converted to timing.startTime)
    #   "animation": "fade",            # converted to entryAnimation.type
    #   "animationDuration": 750,       # ms (converted to entryAnimation.duration)
    #   "animationDirection": "left",   # converted to entryAnimation.direction
    #   "elementType": "text",
    #   "position": {"x": 50, "y": 50},
    #   ... (other fields same as v2)
    # }
    #
    # BACKWARD COMPATIBILITY:
    # - Old v1 events auto-convert to v2 format in TypeScript (normalizeTimelineEvent)
    # - v1 events stay visible forever (no endTime, no exitAnimation)
    # - Python just stores the data - validation happens in TypeScript
    # - ZERO breaking changes for existing content

    editor_canvas_dimensions = Dict(
        display_name="Editor Canvas Dimensions",
        default={'width': 800, 'height': 600},
        scope=Scope.content,
        help="Canvas dimensions from the studio editor (for proper scaling in student view)"
    )

    show_timeline_controls = Boolean(
        display_name="Show Timeline Controls",
        default=True,
        scope=Scope.settings,
        help="Show play/pause, scrubber, and replay controls"
    )

    autoplay = Boolean(
        display_name="Auto-play",
        default=False,
        scope=Scope.settings,
        help="Automatically start presentation when page loads (not recommended for UX)"
    )

    # =============================================================================
    # ARCHITECTURAL: Helper methods
    # =============================================================================

    def resource_string(self, path):
        """Read the content of a resource file."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    # =============================================================================
    # VIEWS: Student and Studio views
    # =============================================================================

    def student_view(self, context=None):
        """
        Student view: Display timeline presentation using React + Paragon

        Renders the audio-synchronized presentation with all timeline events.
        """
        frag = Fragment()

        # Add bootstrap loader
        bootstrap_js = self.resource_string("static/student.js")
        frag.add_javascript(bootstrap_js)

        # Load Paragon CSS from CDN (runtime, not bundled)
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/core.min.css')
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/light.min.css')

        # Add XBlock custom styles
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/student-ui.css'))

        # Initialize with data
        frag.initialize_js('TimelinePresentationStudentView', {
            'url': self.runtime.local_resource_url(self, 'public/student-ui.js'),
            # Pass presentation data to React
            'displayName': self.display_name,
            'title': self.title,
            'description': self.description,
            'imageUrl': self.image_url,
            'audioUrl': self.audio_url,
            'timelineEvents': self.timeline_events,
            'editorCanvasDimensions': dict(self.editor_canvas_dimensions) if self.editor_canvas_dimensions else None,
            'showTimelineControls': self.show_timeline_controls,
            'autoplay': self.autoplay,
        })

        return frag

    def studio_view(self, context=None):
        """
        Studio view: Edit timeline presentation using React + Paragon

        Provides visual editor for configuring timeline events and uploading assets.
        """
        frag = Fragment()

        # Add bootstrap loader
        bootstrap_js = self.resource_string("static/studio.js")
        frag.add_javascript(bootstrap_js)

        # Load Paragon CSS from CDN (runtime, not bundled)
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/core.min.css')
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/light.min.css')

        # Add XBlock custom styles
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/studio-ui.css'))

        # Initialize with data
        frag.initialize_js('TimelinePresentationStudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js'),
            'fields': {
                'display_name': self.display_name,
                'title': self.title,
                'description': self.description,
                'image_url': self.image_url,
                'audio_url': self.audio_url,
                'timeline_events': self.timeline_events,
                'editor_canvas_dimensions': self.editor_canvas_dimensions,
                'show_timeline_controls': self.show_timeline_controls,
                'autoplay': self.autoplay,
                'course_id': str(self.location.course_key) if hasattr(self, 'location') else None,
            }
        })

        return frag

    # =============================================================================
    # HANDLERS: JSON handlers for studio interactions
    # =============================================================================

    @XBlock.json_handler
    def save_data(self, data, suffix=''):
        """
        Save timeline presentation configuration from studio view
        """
        # Validate required fields
        if not data.get('title', '').strip():
            return {
                'success': False,
                'error': 'Title is required'
            }

        if not data.get('image_url', '').strip():
            return {
                'success': False,
                'error': 'Background image is required'
            }

        if not data.get('audio_url', '').strip():
            return {
                'success': False,
                'error': 'Audio narration is required'
            }

        # Save all fields
        self.display_name = data.get('display_name', '').strip()
        self.title = data.get('title', '').strip()
        self.description = data.get('description', '').strip()
        self.image_url = data.get('image_url', '').strip()
        self.audio_url = data.get('audio_url', '').strip()
        self.timeline_events = data.get('timeline_events', [])
        self.editor_canvas_dimensions = data.get('editor_canvas_dimensions', {'width': 800, 'height': 600})
        self.show_timeline_controls = data.get('show_timeline_controls', True)
        self.autoplay = data.get('autoplay', False)

        return {
            'success': True,
            'display_name': self.display_name,
            'title': self.title,
            'description': self.description,
            'image_url': self.image_url,
            'audio_url': self.audio_url,
            'timeline_events': self.timeline_events,
            'editor_canvas_dimensions': self.editor_canvas_dimensions,
            'show_timeline_controls': self.show_timeline_controls,
            'autoplay': self.autoplay,
        }

    @XBlock.json_handler
    def upload_asset(self, data, suffix=''):
        """
        Upload image or audio asset to contentstore

        Expects data: {
            'file': base64-encoded file data,
            'filename': 'filename.ext',
            'content_type': 'image/png' or 'audio/mp3'
        }
        """
        if not CONTENTSTORE_AVAILABLE:
            return {
                'success': False,
                'error': 'Contentstore not available'
            }

        try:
            import base64
            from opaque_keys.edx.keys import CourseKey

            # Decode file data
            file_data = base64.b64decode(data.get('file', ''))
            filename = data.get('filename', 'unnamed')
            content_type = data.get('content_type', 'application/octet-stream')

            # Get course key
            course_key = self.runtime.course_id

            # Create static content
            content_loc = StaticContent.compute_location(
                course_key,
                filename
            )

            content = StaticContent(
                content_loc,
                filename,
                content_type,
                file_data
            )

            # Save to contentstore
            contentstore().save(content)

            # Get asset URL
            asset_url = StaticContent.get_static_path_from_location(content_loc)

            return {
                'success': True,
                'asset_url': asset_url,
                'filename': filename
            }

        except Exception as e:
            logger.error(f"Asset upload failed: {str(e)}")
            return {
                'success': False,
                'error': f'Upload failed: {str(e)}'
            }

    @XBlock.json_handler
    def list_course_assets(self, data, suffix=''):
        """
        List all image assets from the course contentstore.

        Returns a list of image assets for the course images browser modal.
        Filters for image types only and sorts by upload date (most recent first).
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

    # =============================================================================
    # WORKBENCH: Testing scenarios
    # =============================================================================

    @staticmethod
    def workbench_scenarios():
        """Workbench scenarios for testing."""
        return [
            ("Timeline Presentation - Basic",
             """<timeline_presentation/>
             """),
            ("Timeline Presentation - With Example Data",
             """<timeline_presentation
                title="Lutein's Method"
                description="Learn how to measure root canal curvature"
                image_url="/static/example.png"
                audio_url="/static/example.mp3"
                />
             """),
        ]
