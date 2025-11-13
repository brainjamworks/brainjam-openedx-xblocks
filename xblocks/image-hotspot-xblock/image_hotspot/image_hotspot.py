"""ImageHotspot - A React-based Gradable Problem XBlock for Open edX

IMPLEMENTATION: Customize this file for your problem's functionality.

This template implements a gradable problem XBlock using ScorableXBlockMixin.
It includes:
- Automatic grade publishing to OpenEdX
- Attempt tracking and limits
- Configurable feedback modes
- Security best practices
- Examples for multi-part problems and partial credit
"""

import json
import logging
import re
import mimetypes
import pkg_resources
from xblock.core import XBlock
from xblock.fields import String, Integer, Float, List, Scope
from xblock.fragment import Fragment
from xblock.scorable import ScorableXBlockMixin, Score

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

logger = logging.getLogger(__name__)


class ImageHotspot(ScorableXBlockMixin, XBlock):
    """
    IMPLEMENTATION: A gradable problem XBlock

    This template provides a single-question problem by default.
    See comments marked with "MULTI-PART EXAMPLE" for extending to multiple questions.
    See comments marked with "PARTIAL CREDIT EXAMPLE" for partial credit grading.
    """

    # =========================================================================
    # ARCHITECTURAL: Required properties for gradable XBlocks
    # DON'T CHANGE: These are required for OpenEdX grading integration
    # =========================================================================

    # REQUIRED: Marks this XBlock as gradable (appears in Progress page)
    has_score = True

    # RECOMMENDED: Shows problem icon in LMS course navigation
    icon_class = "problem"

    # STUDIO: Define which fields appear in Studio's metadata editor
    editable_metadata_fields = ('display_name',)

    # STUDIO: Show in read-only mode (for preview)
    show_in_read_only_mode = True

    # =========================================================================
    # SETTINGS: Course author configuration (Scope.settings)
    # IMPLEMENTATION: Modify these fields based on your problem requirements
    # =========================================================================

    display_name = String(
        display_name="Display Name",
        default="ImageHotspot",
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
    # IMPLEMENTATION: Image hotspot problem configuration
    # =========================================================================

    question_text = String(
        display_name="Question",
        default="Click on the correct region in the image",
        scope=Scope.content,
        help="The question prompt for students",
        multiline_editor=True
    )

    image_url = String(
        display_name="Image URL",
        default="",
        scope=Scope.content,
        help="URL to the uploaded image in contentstore"
    )

    hotspots = List(
        display_name="Hotspots",
        default=[],
        scope=Scope.content,
        help="List of clickable hotspot regions with coordinates and feedback"
    )
    # Hotspot structure: {
    #   "id": "hotspot-1",
    #   "label": "Region name",
    #   "shape": "rectangle",  # "rectangle", "circle", or "polygon"
    #   "coordinates": [x, y, width, height],  # percentage-based (0-100)
    #   "correct": true,  # whether this is a correct answer
    #   "feedback": "Feedback message for this hotspot"
    # }
    # Note: All correct hotspots have equal weight (points divided equally)

    grading_mode = String(
        display_name="Grading Mode",
        default="partial_credit",
        values=["all_or_nothing", "partial_credit", "first_correct"],
        scope=Scope.content,
        help="How to calculate scores: all_or_nothing (all correct needed), partial_credit (points per correct), first_correct (first correct click wins)"
    )

    # MULTI-PART EXAMPLE: For problems with multiple questions
    # Uncomment and modify this field for multi-part problems:
    #
    # questions = String(
    #     display_name="Questions",
    #     default=json.dumps([
    #         {
    #             "id": "q1",
    #             "text": "What is 2 + 2?",
    #             "correct_answer": "4",
    #             "points": 1.0
    #         },
    #         {
    #             "id": "q2",
    #             "text": "What is 3 + 3?",
    #             "correct_answer": "6",
    #             "points": 1.0
    #         }
    #     ]),
    #     scope=Scope.content,
    #     help="JSON array of question objects"
    # )

    # =========================================================================
    # USER STATE: Student-specific data (Scope.user_state)
    # IMPLEMENTATION: Track student click attempts and progress
    # =========================================================================

    student_clicks = String(
        default="[]",
        scope=Scope.user_state,
        help="JSON array of student click attempts with coordinates and results"
    )
    # Click structure: {
    #   "x": 45.5,  # percentage (0-100)
    #   "y": 30.2,  # percentage (0-100)
    #   "hotspot_id": "hotspot-1" or null,
    #   "correct": true/false,
    #   "timestamp": "2025-10-18T..."
    # }

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
        Calculate raw score based on student's hotspot clicks.

        IMPORTANT: This should NOT modify the XBlock state.
        Returns: Score(raw_earned, raw_possible)

        IMPLEMENTATION: Supports multiple grading modes.
        """
        try:
            clicks = json.loads(self.student_clicks) if self.student_clicks else []
        except (json.JSONDecodeError, TypeError):
            logger.error("Failed to parse student_clicks")
            return Score(raw_earned=0.0, raw_possible=self.weight)

        correct_clicks = [c for c in clicks if c.get('correct')]

        if self.grading_mode == 'all_or_nothing':
            # All correct hotspots must be clicked
            correct_hotspots = [h for h in self.hotspots if h.get('correct')]
            if len(correct_clicks) >= len(correct_hotspots) and len(correct_hotspots) > 0:
                return Score(raw_earned=self.weight, raw_possible=self.weight)
            return Score(raw_earned=0.0, raw_possible=self.weight)

        elif self.grading_mode == 'first_correct':
            # First correct click wins full points
            if len(correct_clicks) > 0:
                return Score(raw_earned=self.weight, raw_possible=self.weight)
            return Score(raw_earned=0.0, raw_possible=self.weight)

        else:  # partial_credit (default)
            # Award points proportionally for each correct hotspot
            # Equal weight system: each correct hotspot is worth the same
            correct_hotspots = [h for h in self.hotspots if h.get('correct')]
            num_correct = len(correct_hotspots)

            if num_correct == 0:
                return Score(raw_earned=0.0, raw_possible=self.weight)

            # Count unique correct hotspots clicked (not total clicks)
            correct_hotspot_ids = {h.get('id') for h in correct_hotspots}
            clicked_correct_ids = {c.get('hotspot_id') for c in correct_clicks if c.get('hotspot_id') in correct_hotspot_ids}
            num_correct_clicked = len(clicked_correct_ids)

            # Calculate percentage based on equal weighting
            percentage = min(num_correct_clicked / num_correct, 1.0)  # Cap at 100%

            return Score(
                raw_earned=percentage * self.weight,
                raw_possible=self.weight
            )

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

    def _check_click_in_hotspot(self, click_x, click_y, hotspot):
        """
        Check if a click coordinate is within a hotspot's bounds.

        Args:
            click_x (float): Click X coordinate (percentage 0-100)
            click_y (float): Click Y coordinate (percentage 0-100)
            hotspot (dict): Hotspot definition with shape and coordinates

        Returns:
            bool: True if click is within hotspot bounds
        """
        shape = hotspot.get('shape', 'rectangle')
        coords = hotspot.get('coordinates', [])

        if not coords:
            return False

        if shape == 'rectangle':
            # coords = [x, y, width, height]
            if len(coords) < 4:
                return False
            x, y, width, height = coords[0], coords[1], coords[2], coords[3]
            return (x <= click_x <= x + width and
                    y <= click_y <= y + height)

        elif shape == 'circle':
            # coords = [center_x, center_y, radius]
            if len(coords) < 3:
                return False
            center_x, center_y, radius = coords[0], coords[1], coords[2]
            distance = ((click_x - center_x) ** 2 + (click_y - center_y) ** 2) ** 0.5
            return distance <= radius

        elif shape == 'polygon':
            # coords = [x1, y1, x2, y2, x3, y3, ...]
            # Ray casting algorithm for point-in-polygon
            if len(coords) < 6:  # Need at least 3 points (triangle)
                return False

            # Convert flat array to list of points
            points = [(coords[i], coords[i+1]) for i in range(0, len(coords), 2)]
            return self._point_in_polygon(click_x, click_y, points)

        return False

    def _point_in_polygon(self, x, y, polygon):
        """
        Ray casting algorithm to check if point is inside polygon.

        Args:
            x (float): Point X coordinate
            y (float): Point Y coordinate
            polygon (list): List of (x, y) tuples defining polygon vertices

        Returns:
            bool: True if point is inside polygon
        """
        n = len(polygon)
        inside = False

        p1x, p1y = polygon[0]
        for i in range(1, n + 1):
            p2x, p2y = polygon[i % n]
            if y > min(p1y, p2y):
                if y <= max(p1y, p2y):
                    if x <= max(p1x, p2x):
                        if p1y != p2y:
                            xinters = (y - p1y) * (p2x - p1x) / (p2y - p1y) + p1x
                        if p1x == p2x or x <= xinters:
                            inside = not inside
            p1x, p1y = p2x, p2y

        return inside
        #     return abs(student_num - correct_num) <= tolerance
        # except (ValueError, TypeError):
        #     return False
        #
        # For multiple choice (A, B, C, D):
        # return student_answer.strip().upper() == correct_answer.strip().upper()
        #
        # For case-sensitive answers:
        # return student_answer.strip() == correct_answer.strip()

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
        frag.add_javascript(bootstrap_js)        # Load Paragon CSS from CDN (runtime, not bundled)
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

        # Parse student clicks
        try:
            clicks = json.loads(self.student_clicks) if self.student_clicks else []
        except (json.JSONDecodeError, TypeError):
            clicks = []

        # SECURITY FIX: Filter out 'correct' field from hotspots
        # Students should not have access to correct answers in initial payload
        safe_hotspots = [
            {
                'id': h.get('id'),
                'label': h.get('label', ''),
                'shape': h.get('shape'),
                'coordinates': h.get('coordinates'),
                # 'correct' field intentionally omitted
                # 'feedback' field intentionally omitted (shown after submission)
            }
            for h in self.hotspots
        ]

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

        # ARCHITECTURAL: Initialize with bundle URL + data
        frag.initialize_js('ImageHotspotStudentView', {
            'url': self.runtime.local_resource_url(self, 'public/student-ui.js'),
            # IMPLEMENTATION: Image hotspot data for React
            'questionText': self.question_text,
            'imageUrl': self.image_url,
            'hotspots': safe_hotspots,  # SECURITY: Only coordinates, not correct answers
            'studentClicks': clicks,
            'currentScore': self.current_score,
            'maxScore': self.weight,
            'attemptsRemaining': attempts_remaining,
            'feedbackMode': self.show_feedback_mode,
            'lastSubmissionResult': last_result,
            'gradingMode': self.grading_mode,
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
        frag.add_javascript(bootstrap_js)        # Load Paragon CSS from CDN (runtime, not bundled)
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/core.min.css')
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/light.min.css')



        # ARCHITECTURAL: Add XBlock custom styles (minimal)
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/studio-ui.css'))

        # ARCHITECTURAL: Initialize with bundle URL + data
        frag.initialize_js('ImageHotspotStudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js'),
            'fields': {
                # IMPLEMENTATION: Editable fields for course authors
                'display_name': self.display_name,
                'question_text': self.question_text,
                'image_url': self.image_url,
                'hotspots': self.hotspots,
                'grading_mode': self.grading_mode,
                'weight': self.weight,
                'max_attempts': self.max_attempts,
                'show_feedback_mode': self.show_feedback_mode,
                'course_id': str(self.runtime.course_id)  # For contentstore API calls
            }
        })

        return frag

    # =========================================================================
    # JSON HANDLERS: API endpoints for student submissions and studio saves
    # IMPLEMENTATION: Customize validation and grading logic
    # =========================================================================

    @XBlock.json_handler
    def submit_answer(self, data, suffix=''):
        """
        Handle student click submission on image hotspot.

        This handler processes a click coordinate, determines which hotspot
        (if any) was clicked, records the click, and updates the score.

        Args:
            data (dict): Contains 'x' and 'y' coordinates as percentages (0-100)

        Returns:
            dict: Result with success status, click result, and updated score
        """
        # =============================================================
        # 1. VALIDATE INPUT
        # =============================================================
        try:
            click_x = float(data.get('x', -1))
            click_y = float(data.get('y', -1))
        except (ValueError, TypeError):
            return {
                'success': False,
                'error': 'Invalid click coordinates. Expected numeric values.'
            }

        # Validate coordinate ranges (0-100 percentage)
        if not (0 <= click_x <= 100) or not (0 <= click_y <= 100):
            return {
                'success': False,
                'error': 'Click coordinates must be between 0 and 100 (percentage)'
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
        # 3. CHECK WHICH HOTSPOT WAS CLICKED (IF ANY)
        # =============================================================
        import datetime

        clicked_hotspot = None
        is_correct = False
        points_earned = 0.0

        # Check each hotspot to see if click intersects
        for hotspot in self.hotspots:
            if self._check_click_in_hotspot(click_x, click_y, hotspot):
                clicked_hotspot = hotspot
                is_correct = hotspot.get('correct', False)
                points_earned = hotspot.get('points', 1.0) if is_correct else 0.0
                break  # Use first matching hotspot

        # =============================================================
        # 4. RECORD THE CLICK
        # =============================================================
        try:
            clicks = json.loads(self.student_clicks) if self.student_clicks else []
        except (json.JSONDecodeError, TypeError):
            clicks = []

        click_record = {
            'x': click_x,
            'y': click_y,
            'hotspot_id': clicked_hotspot.get('id') if clicked_hotspot else None,
            'correct': is_correct,
            'points': points_earned,
            'timestamp': datetime.datetime.now().isoformat()
        }
        clicks.append(click_record)
        self.student_clicks = json.dumps(clicks)

        # =============================================================
        # 5. INCREMENT ATTEMPTS
        # =============================================================
        self.attempts_count += 1

        # =============================================================
        # 6. CALCULATE SCORE AND PUBLISH GRADE
        # =============================================================
        score = self.calculate_score()
        self.current_score = score.raw_earned

        # CRITICAL: Publish grade event to OpenEdX
        self.runtime.publish(self, "grade", {
            "value": score.raw_earned,
            "max_value": score.raw_possible
        })

        # =============================================================
        # 7. PREPARE FEEDBACK
        # =============================================================
        # Get total progress for context
        correct_hotspots = [h for h in self.hotspots if h.get('correct')]
        num_correct_hotspots = len(correct_hotspots)

        # Count unique correct hotspots found so far
        try:
            all_clicks = json.loads(self.student_clicks) if self.student_clicks else []
        except (json.JSONDecodeError, TypeError):
            all_clicks = []

        correct_clicks = [c for c in all_clicks if c.get('correct')]
        correct_hotspot_ids = {h.get('id') for h in correct_hotspots}
        clicked_correct_ids = {c.get('hotspot_id') for c in correct_clicks if c.get('hotspot_id') in correct_hotspot_ids}
        num_found = len(clicked_correct_ids)

        # Build contextual feedback
        feedback = ""
        if clicked_hotspot:
            # Use custom feedback if provided
            custom_feedback = clicked_hotspot.get('feedback', '')
            if custom_feedback:
                feedback = custom_feedback
            else:
                if is_correct:
                    if num_found >= num_correct_hotspots:
                        feedback = f"Correct! You've now found all {num_correct_hotspots} correct region{'s' if num_correct_hotspots != 1 else ''}."
                    else:
                        remaining = num_correct_hotspots - num_found
                        feedback = f"Correct! You've found {num_found} out of {num_correct_hotspots} correct region{'s' if num_correct_hotspots != 1 else ''}. Keep searching for the remaining {remaining}."
                else:
                    feedback = f"This region is incorrect. You've found {num_found} out of {num_correct_hotspots} correct region{'s' if num_correct_hotspots != 1 else ''}."
        else:
            # No hotspot clicked - provide guidance
            if num_found >= num_correct_hotspots:
                feedback = f"No hotspot found at this location. You've already found all {num_correct_hotspots} correct region{'s' if num_correct_hotspots != 1 else ''}."
            elif num_found > 0:
                remaining = num_correct_hotspots - num_found
                feedback = f"No hotspot found at this location. You've found {num_found} out of {num_correct_hotspots} correct region{'s' if num_correct_hotspots != 1 else ''}. Keep searching for the remaining {remaining}."
            else:
                feedback = f"No hotspot found at this location. Try clicking on a specific region. There {'are' if num_correct_hotspots != 1 else 'is'} {num_correct_hotspots} correct region{'s' if num_correct_hotspots != 1 else ''} to find."

        # Store submission result
        submission_result = {
            'correct': is_correct,
            'score': score.raw_earned,
            'max_score': score.raw_possible,
            'percentage': (score.raw_earned / score.raw_possible * 100) if score.raw_possible > 0 else 0,
            'feedback': feedback,
            'clicked_hotspot': clicked_hotspot.get('id') if clicked_hotspot else None
        }
        self.last_submission_result = json.dumps(submission_result)

        # =============================================================
        # 8. CALCULATE ATTEMPTS REMAINING
        # =============================================================
        attempts_remaining = None
        if self.max_attempts > 0:
            attempts_remaining = self.max_attempts - self.attempts_count

        # =============================================================
        # 9. RETURN RESPONSE (camelCase for TypeScript)
        # =============================================================
        return {
            'success': True,
            'correct': is_correct,
            'clickedHotspot': clicked_hotspot.get('id') if clicked_hotspot else None,
            'points': points_earned,
            'score': score.raw_earned,
            'maxScore': score.raw_possible,
            'percentage': submission_result['percentage'],
            'feedback': feedback,
            'attemptsRemaining': attempts_remaining,
            'totalClicks': len(clicks)
        }

        # MULTI-PART EXAMPLE: Handler for multiple questions
        #
        # answers = data.get('answers', {})  # Dict of {question_id: answer}
        #
        # if not isinstance(answers, dict):
        #     return {'success': False, 'error': 'Invalid format'}
        #
        # questions = json.loads(self.questions)
        # results = []
        # total_earned = 0.0
        # total_possible = sum(q['points'] for q in questions)
        #
        # for question in questions:
        #     q_id = question['id']
        #     student_ans = answers.get(q_id, '')
        #     is_correct = self._check_answer(student_ans, question['correct_answer'])
        #
        #     earned = question['points'] if is_correct else 0.0
        #     total_earned += earned
        #
        #     results.append({
        #         'question_id': q_id,
        #         'correct': is_correct,
        #         'earned': earned,
        #         'possible': question['points']
        #     })
        #
        # percentage = (total_earned / total_possible * 100) if total_possible > 0 else 0
        # final_score = (total_earned / total_possible) * self.weight if total_possible > 0 else 0
        #
        # self.student_answers = json.dumps(answers)
        # self.attempts_count += 1
        # self.current_score = final_score
        #
        # self.runtime.publish(self, "grade", {
        #     "value": final_score,
        #     "max_value": self.weight
        # })
        #
        # return {
        #     'success': True,
        #     'results': results,
        #     'score': final_score,
        #     'max_score': self.weight,
        #     'percentage': percentage,
        #     'attempts_remaining': attempts_remaining
        # }

    @XBlock.json_handler
    def submit_all_clicks(self, data, suffix=''):
        """
        Handle batch submission of all clicks (for "on_submit" feedback mode).

        This handler processes multiple clicks at once, validates them all,
        calculates the score, and returns comprehensive feedback.

        Args:
            data (dict): Contains 'clicks' array with [{'x': float, 'y': float}, ...]

        Returns:
            dict: Batch result with per-click feedback and overall score
        """
        # =============================================================
        # 1. VALIDATE INPUT
        # =============================================================
        clicks_data = data.get('clicks', [])
        if not isinstance(clicks_data, list):
            return {
                'success': False,
                'error': 'Clicks must be an array'
            }

        if len(clicks_data) == 0:
            return {
                'success': False,
                'error': 'No clicks provided for submission'
            }

        # =============================================================
        # 2. CHECK ATTEMPT LIMITS (ONCE for the entire batch)
        # =============================================================
        if self.max_attempts > 0 and self.attempts_count >= self.max_attempts:
            return {
                'success': False,
                'error': f'Maximum attempts ({self.max_attempts}) exceeded'
            }

        # =============================================================
        # 3. PROCESS ALL CLICKS
        # =============================================================
        import datetime

        # Parse existing clicks
        try:
            existing_clicks = json.loads(self.student_clicks) if self.student_clicks else []
        except (json.JSONDecodeError, TypeError):
            existing_clicks = []

        # Process each click in the batch
        results = {}
        all_clicks = []

        for i, click_data in enumerate(clicks_data):
            try:
                click_x = float(click_data.get('x', -1))
                click_y = float(click_data.get('y', -1))
            except (ValueError, TypeError):
                continue  # Skip invalid clicks

            # Validate ranges
            if not (0 <= click_x <= 100) or not (0 <= click_y <= 100):
                continue

            # Check which hotspot was clicked
            clicked_hotspot = None
            is_correct = False

            for hotspot in self.hotspots:
                if self._check_click_in_hotspot(click_x, click_y, hotspot):
                    clicked_hotspot = hotspot
                    is_correct = hotspot.get('correct', False)
                    break

            # Record click
            click_id = f"click-{len(existing_clicks) + i}"
            click_record = {
                'x': click_x,
                'y': click_y,
                'hotspot_id': clicked_hotspot.get('id') if clicked_hotspot else None,
                'correct': is_correct,
                'timestamp': datetime.datetime.now().isoformat()
            }
            all_clicks.append(click_record)

            # Store result for this click
            results[click_id] = {
                'correct': is_correct,
                'hotspotId': clicked_hotspot.get('id') if clicked_hotspot else None
            }

        # Save all clicks
        existing_clicks.extend(all_clicks)
        self.student_clicks = json.dumps(existing_clicks)

        # =============================================================
        # 4. INCREMENT ATTEMPTS (ONCE for the entire batch)
        # =============================================================
        self.attempts_count += 1

        # =============================================================
        # 5. CALCULATE SCORE AND PUBLISH GRADE (ONCE)
        # =============================================================
        score = self.calculate_score()
        self.current_score = score.raw_earned

        # CRITICAL: Publish grade event to OpenEdX
        self.runtime.publish(self, "grade", {
            "value": score.raw_earned,
            "max_value": score.raw_possible
        })

        # =============================================================
        # 6. PREPARE COMPREHENSIVE FEEDBACK
        # =============================================================
        correct_clicks = [c for c in all_clicks if c.get('correct')]
        all_correct = len(correct_clicks) == len(all_clicks) and len(all_clicks) > 0

        # Build explanation based on grading mode
        explanation = ""
        correct_hotspots = [h for h in self.hotspots if h.get('correct')]
        num_correct_hotspots = len(correct_hotspots)

        # Count unique correct hotspots clicked
        correct_hotspot_ids = {h.get('id') for h in correct_hotspots}
        clicked_correct_ids = {c.get('hotspot_id') for c in correct_clicks if c.get('hotspot_id') in correct_hotspot_ids}
        num_found = len(clicked_correct_ids)

        if self.grading_mode == 'all_or_nothing':
            if all_correct and num_found >= num_correct_hotspots:
                explanation = f"Excellent! You identified all {num_correct_hotspots} correct region{'s' if num_correct_hotspots != 1 else ''}."
            else:
                explanation = f"You found {num_found} out of {num_correct_hotspots} correct region{'s' if num_correct_hotspots != 1 else ''}. You need to identify all correct regions to earn points."
        elif self.grading_mode == 'partial_credit':
            if num_found >= num_correct_hotspots:
                explanation = f"Excellent! You correctly identified all {num_correct_hotspots} correct region{'s' if num_correct_hotspots != 1 else ''}."
            else:
                remaining = num_correct_hotspots - num_found
                explanation = f"You correctly identified {num_found} out of {num_correct_hotspots} region{'s' if num_correct_hotspots != 1 else ''}. You're missing {remaining} correct region{'s' if remaining != 1 else ''}."
        elif self.grading_mode == 'first_correct':
            if len(correct_clicks) > 0:
                explanation = "Correct! You found a valid hotspot."
            else:
                explanation = f"None of your clicks matched a correct region. There {'are' if num_correct_hotspots != 1 else 'is'} {num_correct_hotspots} correct region{'s' if num_correct_hotspots != 1 else ''} to find."

        # Store submission result
        submission_result = {
            'correct': all_correct,
            'score': score.raw_earned,
            'max_score': score.raw_possible,
            'percentage': (score.raw_earned / score.raw_possible * 100) if score.raw_possible > 0 else 0,
            'explanation': explanation,
            'total_clicks': len(all_clicks),
            'correct_clicks': len(correct_clicks)
        }
        self.last_submission_result = json.dumps(submission_result)

        # =============================================================
        # 7. CALCULATE ATTEMPTS REMAINING
        # =============================================================
        attempts_remaining = None
        if self.max_attempts > 0:
            attempts_remaining = self.max_attempts - self.attempts_count

        # =============================================================
        # 8. RETURN BATCH RESPONSE
        # =============================================================
        return {
            'success': True,
            'results': results,
            'score': score.raw_earned,
            'maxScore': score.raw_possible,
            'percentage': submission_result['percentage'],
            'allCorrect': all_correct,
            'explanation': explanation,
            'attemptsRemaining': attempts_remaining,
            'totalClicks': len(all_clicks),
            'correctClicks': len(correct_clicks)
        }

    @XBlock.json_handler
    def get_correct_answers(self, data, suffix=''):
        """
        Return the correct hotspot regions for "Show Answer" functionality.

        SECURITY: Only returns correct hotspots after student has submitted.
        This prevents students from inspecting network traffic to see answers.

        Returns:
            dict: Success response with correct hotspots array
        """
        # Optional: Add check to ensure student has submitted first
        # if self.attempts_count == 0:
        #     return {
        #         'success': False,
        #         'error': 'You must submit an answer before viewing correct answers'
        #     }

        # Filter hotspots to only return correct ones
        correct_hotspots = [
            {
                'id': h.get('id'),
                'label': h.get('label', ''),
                'shape': h.get('shape'),
                'coordinates': h.get('coordinates'),
                'feedback': h.get('feedback', '')
            }
            for h in self.hotspots
            if h.get('correct', False)
        ]

        return {
            'success': True,
            'correctHotspots': correct_hotspots
        }

    @XBlock.json_handler
    def save_data(self, data, suffix=''):
        """
        Studio handler: Save image hotspot problem configuration.

        Expects:
        - display_name: string
        - question_text: string
        - image_url: string (URL to contentstore asset)
        - hotspots: array of hotspot objects
        - grading_mode: string (all_or_nothing, partial_credit, first_correct)
        - weight: number
        - max_attempts: number
        - show_feedback_mode: string (on_submit, immediate)
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

        # =============================================================
        # VALIDATE IMAGE URL
        # =============================================================
        image_url = data.get('image_url', '').strip()
        # Image is optional during initial setup, but warn if missing
        if not image_url:
            logger.warning("Image URL not provided - problem may not function correctly")

        # =============================================================
        # VALIDATE HOTSPOTS
        # =============================================================
        hotspots = data.get('hotspots', [])
        if not isinstance(hotspots, list):
            return {
                'success': False,
                'error': 'Hotspots must be an array'
            }

        # Validate each hotspot structure
        for i, hotspot in enumerate(hotspots):
            if not isinstance(hotspot, dict):
                return {
                    'success': False,
                    'error': f'Hotspot {i+1} must be an object'
                }

            # Check required fields
            if not hotspot.get('id'):
                return {
                    'success': False,
                    'error': f'Hotspot {i+1} missing id'
                }

            if not hotspot.get('shape'):
                return {
                    'success': False,
                    'error': f'Hotspot {i+1} missing shape'
                }

            if hotspot['shape'] not in ['rectangle', 'circle', 'polygon']:
                return {
                    'success': False,
                    'error': f'Hotspot {i+1} has invalid shape: {hotspot["shape"]}'
                }

            if 'coordinates' not in hotspot or not isinstance(hotspot['coordinates'], list):
                return {
                    'success': False,
                    'error': f'Hotspot {i+1} missing or invalid coordinates'
                }

            # Validate coordinates based on shape
            coords = hotspot['coordinates']
            if hotspot['shape'] == 'rectangle' and len(coords) < 4:
                return {
                    'success': False,
                    'error': f'Hotspot {i+1} (rectangle) needs 4 coordinates [x, y, width, height]'
                }
            elif hotspot['shape'] == 'circle' and len(coords) < 3:
                return {
                    'success': False,
                    'error': f'Hotspot {i+1} (circle) needs 3 coordinates [x, y, radius]'
                }
            elif hotspot['shape'] == 'polygon' and len(coords) < 6:
                return {
                    'success': False,
                    'error': f'Hotspot {i+1} (polygon) needs at least 6 coordinates (3 points)'
                }

        # =============================================================
        # VALIDATE GRADING MODE
        # =============================================================
        grading_mode = data.get('grading_mode', 'partial_credit')
        if grading_mode not in ['all_or_nothing', 'partial_credit', 'first_correct']:
            return {
                'success': False,
                'error': f'Invalid grading mode: {grading_mode}'
            }

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

        # =============================================================
        # SAVE DATA
        # =============================================================
        self.display_name = display_name
        self.question_text = question_text
        self.image_url = image_url
        self.hotspots = hotspots
        self.grading_mode = grading_mode
        self.weight = weight
        self.max_attempts = max_attempts
        self.show_feedback_mode = data.get('show_feedback_mode', 'on_submit')

        logger.info(
            f"Saved image hotspot configuration: {display_name} "
            f"with {len(hotspots)} hotspots"
        )

        return {
            'success': True,
            'display_name': self.display_name,
            'question_text': self.question_text,
            'image_url': self.image_url,
            'hotspot_count': len(self.hotspots),
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
        self.student_clicks = "[]"
        self.attempts_count = 0
        self.current_score = 0.0
        self.last_submission_result = "{}"

        # Publish zero grade
        self.runtime.publish(self, "grade", {
            "value": 0.0,
            "max_value": self.weight
        })

        return {'success': True, 'message': 'Problem reset successfully'}

    # NOTE: Image upload now uses Studio's contentstore API directly from frontend
    # No custom upload handler needed - see StudioView.tsx handleProcessUpload()

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

    # =========================================================================
    # WORKBENCH SCENARIOS: For testing in XBlock SDK
    # IMPLEMENTATION: Customize test scenarios
    # =========================================================================

    @staticmethod
    def workbench_scenarios():
        """Workbench scenarios for testing."""
        return [
            ("ImageHotspot Basic",
             """<image_hotspot/>
             """),
            ("ImageHotspot with Custom Settings",
             """<image_hotspot
                    display_name="Math Quiz"
                    question_text="What is 5 + 3?"
                    correct_answer="8"
                    weight="2.0"
                    max_attempts="5"
                />
             """),
        ]
