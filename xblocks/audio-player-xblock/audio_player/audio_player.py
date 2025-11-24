"""AudioPlayer - A React-based XBlock for Open edX

Audio Player XBlock for embedding MP3 audio content with optional text.
Ideal for podcasts, language learning, lectures, and audio guides.
"""

import json
import logging
import pkg_resources
from xblock.core import XBlock
from xblock.fields import String, Boolean, Scope
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
    logging.getLogger(__name__).warning("Contentstore not available - audio upload will not work")

logger = logging.getLogger(__name__)


class AudioPlayer(XBlock):
    """
    Audio Player XBlock - Embed audio content with text

    Simple XBlock for playing MP3 files with optional text content.
    Perfect for ElevenLabs-generated narration alongside text.
    """

    # Studio display metadata
    display_name_with_default = "Audio Player"
    category = "audio_player"
    icon_class = "other"

    # Display name
    display_name = String(
        display_name="Display Name",
        default="Audio Player",
        scope=Scope.settings,
        help="The display name for this component"
    )

    # Optional title above audio player
    title = String(
        display_name="Title (Optional)",
        default="",
        scope=Scope.content,
        help="Optional heading displayed above the audio player"
    )

    # Optional description/text content
    description = String(
        display_name="Description (Optional)",
        default="",
        scope=Scope.content,
        help="Optional text content displayed alongside audio (supports HTML)",
        multiline_editor=True
    )

    # Audio file URL (required)
    audio_url = String(
        display_name="Audio URL",
        default="",
        scope=Scope.content,
        help="URL to the MP3 file (e.g., https://example.com/audio.mp3)"
    )

    # Show standard HTML5 controls
    show_controls = Boolean(
        display_name="Show Controls",
        default=True,
        scope=Scope.settings,
        help="Show play/pause, volume, progress controls"
    )

    # Autoplay (use sparingly - UX best practice)
    autoplay = Boolean(
        display_name="Auto-play",
        default=False,
        scope=Scope.settings,
        help="Automatically start playback when page loads (not recommended)"
    )

    # Allow download
    show_download = Boolean(
        display_name="Allow Download",
        default=True,
        scope=Scope.settings,
        help="Display download link for students"
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
        frag.add_javascript(bootstrap_js)

        # ARCHITECTURAL: Add CSS bundle
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/student-ui.css'))

        # ARCHITECTURAL: Initialize with bundle URL + data
        # Runtime is passed separately by XBlock framework to the bootstrap function
        frag.initialize_js('AudioPlayerStudentView', {
            'url': self.runtime.local_resource_url(self, 'public/student-ui.js'),
            # Pass audio player data to React
            'displayName': self.display_name,
            'title': self.title,
            'description': self.description,
            'audioUrl': self.audio_url,
            'showControls': self.show_controls,
            'autoplay': self.autoplay,
            'showDownload': self.show_download,
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
        frag.initialize_js('AudioPlayerStudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js'),
            'fields': {
                # Pass all editable fields to React
                'display_name': self.display_name,
                'title': self.title,
                'description': self.description,
                'audio_url': self.audio_url,
                'show_controls': self.show_controls,
                'autoplay': self.autoplay,
                'show_download': self.show_download,
                'course_id': str(self.runtime.course_id),  # For contentstore API calls
            }
        })

        return frag

    @XBlock.json_handler
    def list_course_audio_assets(self, data, suffix=''):
        """
        List all audio assets from the course contentstore.
        Returns a list of audio assets with URLs for display in asset picker.
        """
        if not CONTENTSTORE_AVAILABLE:
            return {'success': False, 'error': 'Contentstore not available'}

        try:
            course_key = self.runtime.course_id

            # Filter for audio types only
            audio_types = [
                'audio/mpeg',      # .mp3
                'audio/mp4',       # .m4a
                'audio/ogg',       # .ogg
                'audio/wav',       # .wav
                'audio/webm'       # .webm
            ]
            filter_params = {'contentType': {'$in': audio_types}}

            # Get all audio assets from contentstore
            all_assets, total_count = contentstore().get_all_content_for_course(
                course_key,
                start=0,
                maxresults=500,
                sort=[('uploadDate', DESCENDING)],
                filter_params=filter_params
            )

            # Format assets for frontend
            audio_assets = []
            for asset in all_assets:
                asset_key = asset.get('asset_key')
                portable_url = StaticContent.get_static_path_from_location(asset_key)
                asset_url = StaticContent.get_canonicalized_asset_path(
                    course_key, portable_url, '', []
                )

                audio_assets.append({
                    'filename': asset_key.block_id,
                    'url': asset_url,
                    'portable_url': portable_url,
                    'content_type': asset.get('contentType', ''),
                    'upload_date': asset.get('uploadDate', '').isoformat() if asset.get('uploadDate') else '',
                })

            return {
                'success': True,
                'assets': audio_assets,
                'count': len(audio_assets)
            }
        except Exception as e:
            logger.exception(f"Error listing audio assets: {str(e)}")
            return {'success': False, 'error': f'Failed to list assets: {str(e)}'}

    @XBlock.json_handler
    def save_data(self, data, suffix=''):
        """
        Handler to save data from studio view
        """
        # Validate required fields
        display_name = data.get('display_name', '').strip()
        audio_url = data.get('audio_url', '').strip()

        if not display_name:
            return {
                'success': False,
                'error': 'Display name is required'
            }

        if not audio_url:
            return {
                'success': False,
                'error': 'Audio URL is required'
            }

        # Save all fields
        self.display_name = display_name
        self.title = data.get('title', '').strip()
        self.description = data.get('description', '').strip()
        self.audio_url = audio_url
        self.show_controls = data.get('show_controls', True)
        self.autoplay = data.get('autoplay', False)
        self.show_download = data.get('show_download', True)

        return {
            'success': True,
            'display_name': self.display_name,
            'title': self.title,
            'description': self.description,
            'audio_url': self.audio_url,
            'show_controls': self.show_controls,
            'autoplay': self.autoplay,
            'show_download': self.show_download,
        }

    # ARCHITECTURAL: Workbench scenarios for testing
    # IMPLEMENTATION: Customize scenarios for your XBlock
    @staticmethod
    def workbench_scenarios():
        """Workbench scenarios for testing."""
        return [
            ("AudioPlayer",
             """<audio_player/>
             """),
            ("Multiple AudioPlayer",
             """<vertical_demo>
                <audio_player/>
                <audio_player/>
                <audio_player/>
                </vertical_demo>
             """),
        ]
