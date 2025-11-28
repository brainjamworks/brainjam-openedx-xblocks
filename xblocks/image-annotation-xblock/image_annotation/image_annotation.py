"""ImageAnnotationXBlock - A React-based Gradable Problem XBlock for Open edX

IMPLEMENTATION: Customize this file for your problem's functionality.

This template implements a gradable problem XBlock using ScorableXBlockMixin.
It includes:
- Automatic grade publishing to OpenEdX
- Attempt tracking and limits
- Configurable feedback modes
- Security best practices
- Image annotation with draggable labels and drop zones
"""

import json
import logging
import math
import pkg_resources
from xblock.core import XBlock
from xblock.fields import String, Integer, Float, Boolean, Scope, Dict
from xblock.fragment import Fragment
from xblock.scorable import ScorableXBlockMixin, Score

logger = logging.getLogger(__name__)

# Import contentstore for image asset management
try:
    from xmodule.contentstore.content import StaticContent
    from xmodule.contentstore.django import contentstore
    from opaque_keys.edx.keys import CourseKey
    from pymongo import DESCENDING
    CONTENTSTORE_AVAILABLE = True
except ImportError:
    CONTENTSTORE_AVAILABLE = False
    DESCENDING = -1  # Fallback value if pymongo not available


# Default configuration - empty arrays for clean testing
DEFAULT_LABELS = []
DEFAULT_ZONES = []


class ImageAnnotationXBlock(ScorableXBlockMixin, XBlock):
    """
    IMPLEMENTATION: A gradable image annotation problem XBlock

    This XBlock allows students to drag labels onto specific regions of an image,
    with configurable snap-to-target behavior and multiple grading modes.
    """

    # =========================================================================
    # ARCHITECTURAL: Required properties for gradable XBlocks
    # DON'T CHANGE: These are required for OpenEdX grading integration
    # =========================================================================

    # REQUIRED: Marks this XBlock as gradable (appears in Progress page)
    has_score = True

    # RECOMMENDED: Shows problem icon in LMS course navigation
    icon_class = "problem"

    # =========================================================================
    # SETTINGS: Course author configuration (Scope.settings)
    # IMPLEMENTATION: Modify these fields based on your problem requirements
    # =========================================================================

    display_name = String(
        display_name="Display Name",
        default="Image Annotation Assessment",
        scope=Scope.settings,
        help="The display name for this problem"
    )

    weight = Float(
        display_name="Problem Weight",
        default=1.0,
        scope=Scope.settings,
        help="Maximum grade for this problem (affects course grade calculation)"
    )

    max_attempts = Integer(
        display_name="Maximum Attempts",
        default=3,
        scope=Scope.settings,
        help="Maximum number of submission attempts (0 = unlimited)"
    )

    show_feedback_mode = String(
        display_name="Feedback Mode",
        default="on_submit",
        values=["on_submit", "immediate"],
        scope=Scope.settings,
        help="When to show feedback: 'on_submit' (after clicking Submit) or 'immediate' (instant)"
    )

    # =========================================================================
    # CONTENT: Problem definition (Scope.content)
    # IMPLEMENTATION: Image annotation problem fields
    # =========================================================================

    question_text = String(
        display_name="Question",
        default="Drag the labels to the correct positions on the image:",
        scope=Scope.content,
        help="The instruction text for students",
        multiline_editor=True
    )

    background_image_url = String(
        display_name="Background Image URL",
        default="",
        scope=Scope.content,
        help="URL to the background image"
    )

    background_image_width = Integer(
        display_name="Background Image Width",
        default=960,
        scope=Scope.content,
        help="Original image width in pixels"
    )

    background_image_height = Integer(
        display_name="Background Image Height",
        default=540,
        scope=Scope.content,
        help="Original image height in pixels"
    )

    draggable_labels = String(
        display_name="Draggable Labels",
        default=json.dumps(DEFAULT_LABELS),
        scope=Scope.content,
        help="JSON list of draggable label definitions"
    )

    drop_zones = String(
        display_name="Drop Zones",
        default=json.dumps(DEFAULT_ZONES),
        scope=Scope.content,
        help="JSON list of drop zone definitions"
    )

    snap_enabled = Boolean(
        display_name="Enable Snap-to-Target",
        default=True,
        scope=Scope.content,
        help="Enable snap-to-target behavior"
    )

    grading_mode = String(
        display_name="Grading Mode",
        default="partial_credit",
        values=["all_or_nothing", "partial_credit", "positioning_only"],
        scope=Scope.content,
        help="Grading mode: all_or_nothing, partial_credit, or positioning_only"
    )

    show_correct_on_submit = Boolean(
        display_name="Show Correct Answers",
        default=True,
        scope=Scope.content,
        help="Show correct label positions after submission"
    )

    explanation = String(
        display_name="Explanation",
        default="",
        scope=Scope.content,
        help="Explanation shown after submission (optional)",
        multiline_editor=True
    )

    # =========================================================================
    # USER STATE: Student-specific data (Scope.user_state)
    # IMPLEMENTATION: Track student progress and label placements
    # =========================================================================

    student_placements = Dict(
        default={},
        scope=Scope.user_state,
        help="Student label placements"
    )

    attempts_count = Integer(
        default=0,
        scope=Scope.user_state,
        help="Number of submission attempts made"
    )

    current_score = Float(
        default=0.0,
        scope=Scope.user_state,
        help="Current score for this problem"
    )

    last_submission_result = String(
        default="{}",
        scope=Scope.user_state,
        help="JSON data about last submission (for displaying feedback)"
    )

    # =========================================================================
    # ARCHITECTURAL: Helper method for reading static resources
    # DON'T CHANGE: Standard XBlock pattern
    # =========================================================================

    def resource_string(self, path):
        """Read the content of a resource file."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    # =========================================================================
    # SCORABLE XBLOCK MIXIN: Required grading methods
    # IMPLEMENTATION: Customize scoring logic for your problem
    # =========================================================================

    def calculate_score(self):
        """
        Calculate raw score based on current state.

        IMPORTANT: This should NOT modify the XBlock state.
        Returns: Score(raw_earned, raw_possible)

        IMPLEMENTATION: Score based on label placements according to grading_mode.

        Grading modes:
        - all_or_nothing: All placements must be correct for any points
        - partial_credit: Proportional credit (correct_count / total_count) * weight
        - positioning_only: Same as partial credit (accuracy-based scoring)
        """
        try:
            labels = json.loads(self.draggable_labels)
            zones = json.loads(self.drop_zones)
            placements = self.student_placements
        except (json.JSONDecodeError, TypeError):
            return Score(raw_earned=0.0, raw_possible=self.weight)

        if not labels or not zones:
            return Score(raw_earned=0.0, raw_possible=self.weight)

        # Count correct placements
        total_labels = len(labels)
        correct_count = sum(
            1 for label in labels
            if placements.get(str(label.get('id', '')), {}).get('correct', False)
        )

        # Calculate score based on grading mode
        if self.grading_mode == "all_or_nothing":
            # All labels must be correct for any points
            if correct_count == total_labels:
                return Score(raw_earned=self.weight, raw_possible=self.weight)
            else:
                return Score(raw_earned=0.0, raw_possible=self.weight)

        elif self.grading_mode == "partial_credit":
            # Proportional credit for correct placements
            percentage = correct_count / total_labels if total_labels > 0 else 0
            earned = percentage * self.weight
            return Score(raw_earned=earned, raw_possible=self.weight)

        elif self.grading_mode == "positioning_only":
            # Score based on positioning accuracy
            # For now, same as partial credit
            # Future enhancement: Could calculate based on distance to correct zones
            percentage = correct_count / total_labels if total_labels > 0 else 0
            earned = percentage * self.weight
            return Score(raw_earned=earned, raw_possible=self.weight)

        else:
            # Default to partial credit for unknown modes
            percentage = correct_count / total_labels if total_labels > 0 else 0
            earned = percentage * self.weight
            return Score(raw_earned=earned, raw_possible=self.weight)

    def get_score(self):
        """
        Return the current score.

        ARCHITECTURAL: Called by OpenEdX grading system.
        Returns: Score(raw_earned, raw_possible)
        """
        return self.calculate_score()

    def set_score(self, score):
        """
        Set the score for this block.

        ARCHITECTURAL: Called by OpenEdX after grade event is published.
        This persists the score to the database.

        Args:
            score (Score): Score object with raw_earned and raw_possible
        """
        self.current_score = score.raw_earned

    def _calculate_distance(self, pos1, pos2):
        """
        Calculate Euclidean distance between two positions.

        Args:
            pos1 (dict): First position with 'x' and 'y' keys
            pos2 (dict): Second position with 'x' and 'y' keys

        Returns:
            float: Euclidean distance between the positions
        """
        x1 = pos1.get('x', 0)
        y1 = pos1.get('y', 0)
        x2 = pos2.get('x', 0)
        y2 = pos2.get('y', 0)

        return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    def _find_nearest_zone(self, position, zones):
        """
        Find the nearest drop zone within its own radius.

        Args:
            position (dict): Position to check with 'x' and 'y' keys (in percentages 0-100)
            zones (list): List of zone definitions with radius property (in percentages)

        Returns:
            tuple: (zone, distance) or (None, None) if no zone found within its radius
        """
        nearest_zone = None
        nearest_distance = float('inf')

        for zone in zones:
            zone_position = {
                'x': zone.get('x', 0),
                'y': zone.get('y', 0)
            }
            distance = self._calculate_distance(position, zone_position)

            # Use the zone's own radius for snap detection (stored as percentage 0-100)
            zone_radius = zone.get('radius', 5.0)  # Default 5% if not specified

            if distance <= zone_radius and distance < nearest_distance:
                nearest_distance = distance
                nearest_zone = zone

        return (nearest_zone, nearest_distance) if nearest_zone else (None, None)

    def _validate_placement(self, label_id, position, zone_id=None):
        """
        Validate a label placement against drop zones.

        Args:
            label_id: ID of the label being placed (e.g., "label_A")
            position: Dict with x, y coordinates
            zone_id: Optional zone ID if already snapped

        Returns:
            Dict with validation result:
            {
                'correct': bool,
                'zone_id': str or None,
                'expected_zone': str,
                'distance': float,
                'message': str
            }
        """
        # Parse drop zones and labels from JSON
        try:
            zones = json.loads(self.drop_zones)
            labels = json.loads(self.draggable_labels)
        except (json.JSONDecodeError, TypeError):
            return {
                'correct': False,
                'zone_id': None,
                'expected_zone': None,
                'distance': None,
                'message': 'Configuration error: Invalid zones or labels data'
            }

        # Find the label definition to get the correct zone
        label_def = next((label for label in labels if label.get('id') == label_id), None)
        if not label_def:
            return {
                'correct': False,
                'zone_id': None,
                'expected_zone': None,
                'distance': None,
                'message': f'Label {label_id} not found in configuration'
            }

        # Get the expected correct zone for this label
        # Find which zone has this label as the correct answer
        expected_zone = next((zone for zone in zones if zone.get('correctAnswer') == label_id), None)
        expected_zone_id = expected_zone.get('id', '') if expected_zone else ''

        if not expected_zone:
            return {
                'correct': False,
                'zone_id': None,
                'expected_zone': expected_zone_id,
                'distance': None,
                'message': f'Expected zone {expected_zone_id} not found'
            }

        # Calculate distance to the correct zone
        expected_position = {
            'x': expected_zone.get('x', 0),
            'y': expected_zone.get('y', 0)
        }
        distance_to_correct = self._calculate_distance(position, expected_position)

        # Case 1: zone_id is provided (label was snapped to a zone)
        if zone_id:
            is_correct = (zone_id == expected_zone_id)
            message = (
                'Correct placement!' if is_correct
                else f'Incorrect zone. This label belongs in {expected_zone_id}.'
            )
            return {
                'correct': is_correct,
                'zone_id': zone_id,
                'expected_zone': expected_zone_id,
                'distance': distance_to_correct,
                'message': message
            }

        # Case 2: No zone_id provided - check if within snap radius of any zone
        if self.snap_enabled:
            nearest_zone, nearest_distance = self._find_nearest_zone(
                position,
                zones
            )

            if nearest_zone:
                # Label is within snap radius of a zone
                snapped_zone_id = nearest_zone.get('id', '')
                is_correct = (snapped_zone_id == expected_zone_id)
                message = (
                    'Correct placement!' if is_correct
                    else f'Incorrect zone. This label belongs in {expected_zone_id}.'
                )
                return {
                    'correct': is_correct,
                    'zone_id': snapped_zone_id,
                    'expected_zone': expected_zone_id,
                    'distance': nearest_distance,
                    'message': message
                }

        # Case 3: Not snapped to any zone (either snap disabled or outside radius)
        # Check if the position is close enough to the correct zone
        expected_zone_radius = expected_zone.get('radius', 5.0)  # Get zone's own radius (% of image width)
        within_radius = distance_to_correct <= expected_zone_radius

        if within_radius:
            message = 'Close to correct position, but not snapped to zone.'
        else:
            message = f'Too far from correct zone. Expected zone: {expected_zone_id}.'

        return {
            'correct': within_radius and not self.snap_enabled,  # Only correct if snap is disabled
            'zone_id': None,
            'expected_zone': expected_zone_id,
            'distance': distance_to_correct,
            'message': message
        }

    def _get_zone_occupancy(self, placements):
        """
        Build a dict of zone_id -> label_id showing which labels are in which zones.

        Used to enforce single occupancy and detect conflicts.

        Args:
            placements (dict): Dictionary of label_id -> placement_data

        Returns:
            dict: Mapping of zone_id -> label_id for occupied zones
        """
        occupancy = {}
        for label_id, placement_data in placements.items():
            zone_id = placement_data.get('zone_id')
            if zone_id:
                # If zone already occupied, we have a conflict
                if zone_id in occupancy:
                    # For now, just track the first label
                    # In production, you might want to handle conflicts differently
                    pass
                else:
                    occupancy[zone_id] = label_id
        return occupancy

    def _generate_feedback_message(self, validation_results, score_percentage):
        """
        Generate human-readable feedback based on validation results.

        Args:
            validation_results (dict): Dictionary of label_id -> validation_result
            score_percentage (float): Overall score percentage (0-100)

        Returns:
            str: Overall feedback message
        """
        if not validation_results:
            return "No placements submitted."

        total_labels = len(validation_results)
        correct_count = sum(1 for result in validation_results.values() if result.get('correct', False))

        if correct_count == total_labels:
            return "Excellent work! All labels are correctly placed."
        elif correct_count == 0:
            return "All labels are incorrectly placed. Review the image carefully and try again."
        elif score_percentage >= 80:
            return f"Good job! You correctly placed {correct_count} out of {total_labels} labels. Review the incorrect ones."
        elif score_percentage >= 50:
            return f"You correctly placed {correct_count} out of {total_labels} labels. Keep trying!"
        else:
            return f"You correctly placed {correct_count} out of {total_labels} labels. Review the material and try again."

    # =========================================================================
    # XBLOCK VIEWS: Student and Studio views
    # ARCHITECTURAL: Fragment pattern with React bundle loading
    # IMPLEMENTATION: Customize data passed to React components
    # =========================================================================

    def student_view(self, context=None):
        """
        Student view: Display problem and handle submissions

        ARCHITECTURAL: The Fragment, bootstrap loader, and initialize_js pattern
        IMPLEMENTATION: Customize the data dictionary passed to React
        """
        frag = Fragment()

        # ARCHITECTURAL: Add bootstrap loader (never changes)
        bootstrap_js = self.resource_string("static/student.js")
        frag.add_javascript(bootstrap_js)

        # Load Paragon CSS from CDN (runtime, not bundled)
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/core.min.css')
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/light.min.css')

        # ARCHITECTURAL: Add XBlock custom styles (minimal)
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/student-ui.css'))

        # Calculate attempts remaining
        attempts_remaining = None
        if self.max_attempts > 0:
            attempts_remaining = self.max_attempts - self.attempts_count
            if attempts_remaining < 0:
                attempts_remaining = 0

        # Parse last submission result
        try:
            last_result = json.loads(self.last_submission_result) if self.last_submission_result else None
        except (json.JSONDecodeError, TypeError):
            last_result = None

        # Parse configuration
        try:
            labels = json.loads(self.draggable_labels)
            zones = json.loads(self.drop_zones)
        except (json.JSONDecodeError, TypeError):
            labels = []
            zones = []

        # Check grading status from parent subsection
        is_graded = False
        try:
            parent = self.get_parent()
            if parent:
                is_graded = getattr(parent, 'graded', False)
        except Exception:
            # Fallback to False if unable to access parent
            # (e.g., in workbench or unit tests)
            is_graded = False

        # Determine if student has submitted
        has_submitted = bool(self.last_submission_result and self.last_submission_result != "{}")

        # ARCHITECTURAL: Initialize with bundle URL + data
        frag.initialize_js('ImageAnnotationStudentView', {
            'url': self.runtime.local_resource_url(self, 'public/student-ui.js'),
            # IMPLEMENTATION: Image annotation data
            'questionText': self.question_text,
            'backgroundImageUrl': self.background_image_url,
            'backgroundImageWidth': self.background_image_width,
            'backgroundImageHeight': self.background_image_height,
            'labels': labels,  # Changed from draggableLabels to labels
            'dropZones': zones,
            'snapEnabled': self.snap_enabled,
            'showCorrectOnSubmit': self.show_correct_on_submit,
            'gradingMode': self.grading_mode,
            'studentPlacements': self.student_placements,
            'currentScore': self.current_score,
            'maxScore': self.weight,
            'attemptsRemaining': attempts_remaining,
            'feedbackMode': self.show_feedback_mode,
            'hasSubmitted': has_submitted,
            'lastSubmissionResult': last_result,
            'isGraded': is_graded,
        })

        return frag

    def studio_view(self, context=None):
        """
        Studio view: Edit problem settings

        ARCHITECTURAL: The Fragment, bootstrap loader, and initialize_js pattern
        IMPLEMENTATION: Customize the fields dictionary
        """
        frag = Fragment()

        # ARCHITECTURAL: Add bootstrap loader
        bootstrap_js = self.resource_string("static/studio.js")
        frag.add_javascript(bootstrap_js)

        # Load Paragon CSS from CDN (runtime, not bundled)
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/core.min.css')
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/light.min.css')

        # ARCHITECTURAL: Add XBlock custom styles (minimal)
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/studio-ui.css'))

        # Parse configuration
        try:
            labels = json.loads(self.draggable_labels)
            zones = json.loads(self.drop_zones)
        except (json.JSONDecodeError, TypeError):
            labels = []
            zones = []

        # ARCHITECTURAL: Initialize with bundle URL + data
        frag.initialize_js('ImageAnnotationStudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js'),
            # IMPLEMENTATION: Pass individual props (not fields object)
            'displayName': self.display_name,
            'questionText': self.question_text,
            'backgroundImageUrl': self.background_image_url,
            'backgroundImageWidth': self.background_image_width,
            'backgroundImageHeight': self.background_image_height,
            'labels': labels,  # Changed from draggable_labels
            'dropZones': zones,  # Changed from drop_zones
            'snapEnabled': self.snap_enabled,
            'gradingMode': self.grading_mode,
            'showCorrectOnSubmit': self.show_correct_on_submit,
            'explanation': self.explanation,
            'weight': self.weight,
            'maxAttempts': self.max_attempts,
            'showFeedbackMode': self.show_feedback_mode,
            'courseId': str(self.location.course_key),
        })

        return frag

    # =========================================================================
    # JSON HANDLERS: API endpoints for student submissions and studio saves
    # IMPLEMENTATION: Customize validation and grading logic
    # =========================================================================

    @XBlock.json_handler
    def submit_placement(self, data, suffix=''):
        """
        Handle student label placement submission.

        This handler is called when a student places a label on the image.
        It provides immediate feedback for each placement.

        Args:
            data (dict): {
                'labelId': str,  # ID of the label
                'position': dict,  # Position data with x, y coordinates
                'zoneId': str or None  # Optional zone ID if snapped
            }

        Returns:
            dict: {
                'success': bool,
                'correct': bool,
                'message': str,
                'score': float,  # Current total score
                'maxScore': float,
                'percentage': float,
                'attemptsRemaining': int,
                'validationResult': dict  # Detailed validation info
            }
        """
        # =============================================================
        # 1. VALIDATE INPUT
        # =============================================================
        label_id = data.get('labelId', '')
        position = data.get('position', {})
        zone_id = data.get('zoneId')  # May be None

        if not label_id or not position:
            return {
                'success': False,
                'error': 'Missing labelId or position'
            }

        # =============================================================
        # 2. VALIDATE PLACEMENT WITH ZONE_ID
        # =============================================================
        validation_result = self._validate_placement(label_id, position, zone_id)
        is_correct = validation_result['correct']

        # =============================================================
        # 3. UPDATE STUDENT PLACEMENTS
        # =============================================================
        placements = dict(self.student_placements)
        placements[label_id] = {
            'correct': is_correct,
            'position': position,
            'zone_id': validation_result.get('zone_id'),
            'expected_zone': validation_result.get('expected_zone'),
            'distance': validation_result.get('distance'),
        }
        self.student_placements = placements

        # =============================================================
        # 4. RECALCULATE SCORE
        # =============================================================
        score = self.calculate_score()
        self.current_score = score.raw_earned

        # =============================================================
        # 5. PUBLISH GRADE EVENT (for immediate feedback mode)
        # =============================================================
        if self.show_feedback_mode == 'immediate':
            self.runtime.publish(self, "grade", {
                "value": score.raw_earned,
                "max_value": self.weight
            })

        # =============================================================
        # 6. CALCULATE ATTEMPTS REMAINING (if applicable)
        # =============================================================
        attempts_remaining = None
        if self.max_attempts > 0:
            attempts_remaining = self.max_attempts - self.attempts_count

        percentage = (score.raw_earned / self.weight * 100) if self.weight > 0 else 0

        # =============================================================
        # 7. RETURN RESPONSE TO STUDENT
        # =============================================================
        return {
            'success': True,
            'correct': is_correct,
            'message': validation_result.get('message', ''),
            'score': score.raw_earned,
            'maxScore': self.weight,
            'percentage': percentage,
            'attemptsRemaining': attempts_remaining,
            'validationResult': validation_result,
        }

    @XBlock.json_handler
    def submit_all_placements(self, data, suffix=''):
        """
        Handle batch submission of all label placements (for "on_submit" feedback mode).

        This handler is called when a student clicks the Submit button after placing
        all their labels. It evaluates all placements at once and provides comprehensive
        feedback.

        Args:
            data (dict): {
                'placements': dict,  # {labelId: {'position': dict, 'zoneId': str or None}}
            }

        Returns:
            dict: {
                'success': bool,
                'results': dict,  # {labelId: {'correct': bool, 'position': dict, 'message': str}}
                'score': float,
                'maxScore': float,
                'percentage': float,
                'allCorrect': bool,
                'feedbackMessage': str,  # Overall feedback
                'explanation': str,  # Course author's explanation
                'attemptsRemaining': int,
                'validationResults': dict  # Detailed validation for each label
            }
        """
        # =============================================================
        # 1. VALIDATE INPUT
        # =============================================================
        placements = data.get('placements', {})

        if not isinstance(placements, dict):
            return {
                'success': False,
                'error': 'Invalid placements format'
            }

        # =============================================================
        # 2. CHECK ATTEMPT LIMITS
        # =============================================================
        if self.max_attempts > 0 and self.attempts_count >= self.max_attempts:
            return {
                'success': False,
                'error': f'Maximum attempts ({self.max_attempts}) exceeded'
            }

        # =============================================================
        # 3. INCREMENT ATTEMPTS
        # =============================================================
        self.attempts_count += 1

        # =============================================================
        # 4. EVALUATE ALL PLACEMENTS WITH DETAILED VALIDATION
        # =============================================================
        results = {}
        validation_results = {}

        for label_id, placement_data in placements.items():
            position = placement_data.get('position', {})
            zone_id = placement_data.get('zoneId')  # May be None

            validation_result = self._validate_placement(label_id, position, zone_id)
            is_correct = validation_result['correct']

            results[label_id] = {
                'correct': is_correct,
                'position': position,
                'zone_id': validation_result.get('zone_id'),
                'expected_zone': validation_result.get('expected_zone'),
                'distance': validation_result.get('distance'),
                'message': validation_result.get('message', ''),
            }

            validation_results[label_id] = validation_result

        # =============================================================
        # 5. SAVE STUDENT PLACEMENTS
        # =============================================================
        self.student_placements = results

        # =============================================================
        # 6. CALCULATE SCORE
        # =============================================================
        score = self.calculate_score()
        self.current_score = score.raw_earned

        # =============================================================
        # 7. PUBLISH GRADE EVENT
        # =============================================================
        self.runtime.publish(self, "grade", {
            "value": score.raw_earned,
            "max_value": self.weight
        })

        # =============================================================
        # 8. CHECK IF ALL CORRECT
        # =============================================================
        all_correct = all(r['correct'] for r in results.values()) if results else False

        # =============================================================
        # 9. CALCULATE ATTEMPTS REMAINING
        # =============================================================
        attempts_remaining = None
        if self.max_attempts > 0:
            attempts_remaining = self.max_attempts - self.attempts_count

        percentage = (score.raw_earned / self.weight * 100) if self.weight > 0 else 0

        # =============================================================
        # 10. GENERATE FEEDBACK MESSAGE
        # =============================================================
        feedback_message = self._generate_feedback_message(validation_results, percentage)

        # =============================================================
        # 11. BUILD COMPLETE RESPONSE (used for both return and storage)
        # =============================================================
        response_data = {
            'success': True,
            'results': results,
            'score': score.raw_earned,
            'maxScore': self.weight,
            'percentage': percentage,
            'allCorrect': all_correct,
            'feedbackMessage': feedback_message,
            'explanation': self.explanation if all_correct or attempts_remaining == 0 else '',
            'attemptsRemaining': attempts_remaining,
            'validationResults': validation_results,
        }

        # =============================================================
        # 12. SAVE SUBMISSION RESULT FOR LATER DISPLAY
        # =============================================================
        self.last_submission_result = json.dumps(response_data)

        # =============================================================
        # 13. RETURN COMPREHENSIVE FEEDBACK
        # =============================================================
        return response_data

    @XBlock.json_handler
    def get_correct_placements(self, data, suffix=''):
        """
        Return the correct label placements for "Show Answer" functionality.

        This handler is called when a student clicks "Show Answer" to reveal
        the correct placements. Returns a dictionary mapping label IDs to their
        correct positions and zones.
        """
        try:
            labels = json.loads(self.draggable_labels)
            zones = json.loads(self.drop_zones)
        except (json.JSONDecodeError, TypeError):
            labels = []
            zones = []

        # Create a mapping of label_id -> correct placement
        correct_placements = {}
        for label in labels:
            label_id = label.get('id', '')

            # Find which zone has this label as the correct answer
            correct_zone = next((z for z in zones if z.get('correctAnswer') == label_id), None)
            correct_zone_id = correct_zone.get('id', '') if correct_zone else ''

            if correct_zone:
                correct_placements[label_id] = {
                    'zone_id': correct_zone_id,
                    'position': {
                        'x': correct_zone.get('x', 0),
                        'y': correct_zone.get('y', 0)
                    }
                }

        return {
            'success': True,
            'correctPlacements': correct_placements
        }

    @XBlock.json_handler
    def save_data(self, data, suffix=''):
        """
        Studio handler: Save image annotation configuration.

        IMPLEMENTATION: Validate and save image annotation settings.
        """
        # =============================================================
        # VALIDATE REQUIRED FIELDS
        # =============================================================
        display_name = data.get('display_name', '').strip()
        if not display_name:
            return {
                'success': False,
                'error': 'Display name is required'
            }

        question_text = data.get('question_text', '').strip()
        if not question_text:
            return {
                'success': False,
                'error': 'Question text is required'
            }

        background_image_url = data.get('background_image_url', '').strip()
        if not background_image_url:
            return {
                'success': False,
                'error': 'Background image URL is required'
            }

        # Validate draggable labels
        draggable_labels = data.get('draggable_labels', [])
        if not isinstance(draggable_labels, list):
            return {
                'success': False,
                'error': 'Draggable labels must be an array'
            }

        # Validate drop zones
        drop_zones = data.get('drop_zones', [])
        if not isinstance(drop_zones, list):
            return {
                'success': False,
                'error': 'Drop zones must be an array'
            }

        # Warn about empty configuration (but still allow save for initial setup)
        if len(draggable_labels) == 0:
            logger.warning("ImageAnnotation: No draggable labels configured - problem may not function correctly")

        if len(drop_zones) == 0:
            logger.warning("ImageAnnotation: No drop zones configured - problem may not function correctly")

        # =============================================================
        # VALIDATE NUMERIC FIELDS
        # =============================================================
        weight = data.get('weight', 1.0)
        try:
            weight = float(weight)
            if weight <= 0:
                return {'success': False, 'error': 'Weight must be positive'}
        except (ValueError, TypeError):
            return {'success': False, 'error': 'Invalid weight value'}

        max_attempts = data.get('max_attempts', 3)
        try:
            max_attempts = int(max_attempts)
            if max_attempts < 0:
                return {'success': False, 'error': 'Max attempts cannot be negative'}
        except (ValueError, TypeError):
            return {'success': False, 'error': 'Invalid max attempts value'}

        background_image_width = data.get('background_image_width', 960)
        try:
            background_image_width = int(background_image_width)
            if background_image_width <= 0:
                return {'success': False, 'error': 'Image width must be positive'}
        except (ValueError, TypeError):
            return {'success': False, 'error': 'Invalid image width value'}

        background_image_height = data.get('background_image_height', 540)
        try:
            background_image_height = int(background_image_height)
            if background_image_height <= 0:
                return {'success': False, 'error': 'Image height must be positive'}
        except (ValueError, TypeError):
            return {'success': False, 'error': 'Invalid image height value'}

        # =============================================================
        # SAVE DATA
        # =============================================================
        self.display_name = display_name
        self.question_text = question_text
        self.background_image_url = background_image_url
        self.background_image_width = background_image_width
        self.background_image_height = background_image_height
        self.draggable_labels = json.dumps(draggable_labels)
        self.drop_zones = json.dumps(drop_zones)
        self.snap_enabled = data.get('snap_enabled', True)
        self.grading_mode = data.get('grading_mode', 'partial_credit')
        self.show_correct_on_submit = data.get('show_correct_on_submit', True)
        self.explanation = data.get('explanation', '').strip()
        self.weight = weight
        self.max_attempts = max_attempts
        self.show_feedback_mode = data.get('show_feedback_mode', 'on_submit')

        return {
            'success': True,
            'display_name': self.display_name,
            'question_text': self.question_text,
            'weight': self.weight
        }

    @XBlock.json_handler
    def reset_problem(self, data, suffix=''):
        """
        Instructor handler: Reset student's problem state.

        IMPLEMENTATION: Add staff permission check in production.

        Note: In production, add this check:
        if not self.runtime.user_is_staff:
            return {'success': False, 'error': 'Permission denied'}
        """
        self.student_placements = {}
        self.attempts_count = 0
        self.current_score = 0.0
        self.last_submission_result = "{}"

        # Publish zero grade
        self.runtime.publish(self, "grade", {
            "value": 0.0,
            "max_value": self.weight
        })

        return {'success': True, 'message': 'Problem reset successfully'}

    @XBlock.json_handler
    def list_course_assets(self, data, suffix=''):
        """
        List image assets available in the course content library.

        This handler queries the course's contentstore to retrieve all image assets
        that can be used as background images.

        Returns:
            dict: {
                'success': bool,
                'assets': list of {
                    'display_name': str,
                    'url': str,
                    'thumbnail': str,
                    'locked': bool
                },
                'error': str (if success=False)
            }
        """
        if not CONTENTSTORE_AVAILABLE:
            return {
                'success': False,
                'error': 'Content store not available'
            }

        try:
            # Get course key from block's location
            course_key_string = str(self.location.course_key)
            course_key = CourseKey.from_string(course_key_string)

            # Define image content types for filtering
            image_types = [
                'image/png',
                'image/jpeg',
                'image/jpg',
                'image/gif',
                'image/webp',
                'image/svg+xml'
            ]
            filter_params = {'contentType': {'$in': image_types}}

            # Query contentstore for image assets
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
            return {
                'success': False,
                'error': str(e)
            }

    # =========================================================================
    # WORKBENCH SCENARIOS: For testing in XBlock SDK
    # IMPLEMENTATION: Customize test scenarios
    # =========================================================================

    @staticmethod
    def workbench_scenarios():
        """Workbench scenarios for testing."""
        return [
            ("ImageAnnotation Basic",
             """<image_annotation/>
             """),
            ("ImageAnnotation with Custom Settings",
             """<image_annotation
                    display_name="Anatomy Quiz"
                    question_text="Label the parts of the heart"
                    weight="2.0"
                    max_attempts="5"
                />
             """),
        ]
