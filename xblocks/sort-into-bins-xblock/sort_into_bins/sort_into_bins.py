"""SortIntoBins - A bin-sorting problem XBlock for Open edX

Students drag items (text, images, or HTML) into categorized bins.
Supports configurable bin capacities and flexible grading modes.
"""

import json
import pkg_resources
from xblock.core import XBlock
from xblock.fields import String, Integer, Float, Scope
from xblock.fragment import Fragment
from xblock.scorable import ScorableXBlockMixin, Score


class SortIntoBins(ScorableXBlockMixin, XBlock):
    """
    A gradable bin-sorting problem XBlock.

    Students drag items into bins with configurable capacities.
    Supports text, images, and HTML content types.
    Flexible grading: all-or-nothing or partial credit.
    """

    # =========================================================================
    # ARCHITECTURAL: Required properties for gradable XBlocks
    # =========================================================================

    has_score = True
    icon_class = "problem"

    # =========================================================================
    # SETTINGS: Course author configuration (Scope.settings)
    # =========================================================================

    display_name = String(
        display_name="Display Name",
        default="Sort Into Bins",
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

    grading_mode = String(
        display_name="Grading Mode",
        default="partial_credit",
        values=["all_or_nothing", "partial_credit"],
        scope=Scope.settings,
        help="Grading mode: 'all_or_nothing' (must be perfect) or 'partial_credit' (points per correct item)"
    )

    show_correct_answers = String(
        display_name="Show Correct Answers",
        default="after_attempts",
        values=["never", "after_attempts", "always"],
        scope=Scope.settings,
        help="When to show correct answers: 'never', 'after_attempts' (after max attempts), or 'always'"
    )

    show_feedback_mode = String(
        display_name="Feedback Mode",
        default="on_submit",
        values=["on_submit", "immediate"],
        scope=Scope.settings,
        help="When to show feedback: 'on_submit' (after clicking Submit) or 'immediate' (instant feedback)"
    )

    # =========================================================================
    # CONTENT: Problem definition (Scope.content)
    # =========================================================================

    problem_title = String(
        display_name="Problem Title",
        default="Sort the items into the correct bins",
        scope=Scope.content,
        help="Title shown at top of problem",
        multiline_editor=False
    )

    instructions = String(
        display_name="Instructions",
        default="Drag each item into the bin where it belongs.",
        scope=Scope.content,
        help="Instructions shown to students (supports HTML)",
        multiline_editor=True
    )

    bins = String(
        display_name="Bins",
        default=json.dumps([
            {
                "id": "bin1",
                "label": "Category A",
                "description": "Items that belong in category A",
                "max_capacity": 3
            },
            {
                "id": "bin2",
                "label": "Category B",
                "description": "Items that belong in category B",
                "max_capacity": 3
            }
        ]),
        scope=Scope.content,
        help="JSON array of bin definitions with id, label, description, max_capacity"
    )

    items = String(
        display_name="Items",
        default=json.dumps([
            {
                "id": "item1",
                "type": "text",
                "content": "First item",
                "correct_bin_id": "bin1"
            },
            {
                "id": "item2",
                "type": "text",
                "content": "Second item",
                "correct_bin_id": "bin2"
            },
            {
                "id": "item3",
                "type": "text",
                "content": "Third item",
                "correct_bin_id": "bin1"
            }
        ]),
        scope=Scope.content,
        help="JSON array of items with id, type (text/image/html), content, correct_bin_id"
    )

    explanation = String(
        display_name="Explanation",
        default="",
        scope=Scope.content,
        help="Explanation shown after submission (optional, supports HTML)",
        multiline_editor=True
    )

    # =========================================================================
    # USER STATE: Student-specific data (Scope.user_state)
    # =========================================================================

    student_placements = String(
        default="{}",
        scope=Scope.user_state,
        help="JSON dict mapping item_id to placement data {binId: str, correct: bool}"
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
    # HELPER METHODS
    # =========================================================================

    def resource_string(self, path):
        """Read the content of a resource file."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    # =========================================================================
    # GRADING METHODS
    # =========================================================================

    def calculate_score(self):
        """
        Calculate raw score based on current state.

        Supports two grading modes:
        - all_or_nothing: Must place ALL items correctly to get full points
        - partial_credit: Points awarded per correctly placed item

        Returns: Score(raw_earned, raw_possible)
        """
        items_data = json.loads(self.items)
        placements = json.loads(self.student_placements)

        if not items_data:
            return Score(raw_earned=0.0, raw_possible=self.weight)

        # Count correct placements
        correct_count = 0
        for item in items_data:
            item_id = item['id']
            placement = placements.get(item_id)

            # Handle both old format (string bin_id) and new format (dict with binId and correct)
            if isinstance(placement, dict):
                is_correct = placement.get('correct', False)
            else:
                # Old format or direct bin_id comparison
                correct_bin_id = item['correct_bin_id']
                is_correct = placement == correct_bin_id

            if is_correct:
                correct_count += 1

        total_items = len(items_data)

        if self.grading_mode == "all_or_nothing":
            # All items must be correct
            if correct_count == total_items:
                earned = self.weight
            else:
                earned = 0.0
        else:  # partial_credit
            # Proportional points
            percentage = correct_count / total_items if total_items > 0 else 0
            earned = percentage * self.weight

        return Score(raw_earned=earned, raw_possible=self.weight)

    def get_score(self):
        """Return the current score (called by OpenEdX grading system)."""
        return self.calculate_score()

    def set_score(self, score):
        """Set the score (called by OpenEdX after grade event is published)."""
        self.current_score = score.raw_earned

    def _validate_placements(self, placements, bins_data, items_data):
        """
        Validate student placements against bin capacity limits.

        Args:
            placements (dict): Mapping of item_id to placement data (dict or string)
            bins_data (list): List of bin definitions
            items_data (list): List of item definitions

        Returns:
            tuple: (is_valid, error_message)
        """
        # Count items per bin
        bin_counts = {}
        for bin_def in bins_data:
            bin_counts[bin_def['id']] = 0

        for item_id, placement in placements.items():
            # Extract bin_id from placement (handle both old and new format)
            if isinstance(placement, dict):
                bin_id = placement.get('binId')
            else:
                bin_id = placement

            if bin_id:  # Ignore items not placed in bins
                bin_counts[bin_id] = bin_counts.get(bin_id, 0) + 1

        # Check capacity limits
        for bin_def in bins_data:
            bin_id = bin_def['id']
            max_capacity = bin_def.get('max_capacity', 0)

            if max_capacity > 0 and bin_counts.get(bin_id, 0) > max_capacity:
                return False, f"Bin '{bin_def['label']}' exceeds capacity limit ({max_capacity})"

        return True, None

    # =========================================================================
    # XBLOCK VIEWS
    # =========================================================================

    def student_view(self, context=None):
        """Student view: Display problem and handle submissions."""
        frag = Fragment()

        # Add bootstrap loader
        bootstrap_js = self.resource_string("static/student.js")
        frag.add_javascript(bootstrap_js)

        # Add CSS bundle
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

        # Determine if we should show correct answers
        show_answers = False
        if self.show_correct_answers == "always":
            show_answers = True
        elif self.show_correct_answers == "after_attempts":
            if self.max_attempts > 0 and self.attempts_count >= self.max_attempts:
                show_answers = True

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

        # Initialize React component
        frag.initialize_js('SortIntoBinsStudentView', {
            'url': self.runtime.local_resource_url(self, 'public/student-ui.js'),
            'problemTitle': self.problem_title,
            'instructions': self.instructions,
            'bins': json.loads(self.bins),
            'items': json.loads(self.items),
            'studentPlacements': json.loads(self.student_placements),
            'currentScore': self.current_score,
            'maxScore': self.weight,
            'attemptsRemaining': attempts_remaining,
            'gradingMode': self.grading_mode,
            'showCorrectAnswers': show_answers,
            'feedbackMode': self.show_feedback_mode,
            'lastSubmissionResult': last_result,
            'isGraded': is_graded,
        })

        return frag

    def studio_view(self, context=None):
        """Studio view: Edit problem settings."""
        frag = Fragment()

        # Add bootstrap loader
        bootstrap_js = self.resource_string("static/studio.js")
        frag.add_javascript(bootstrap_js)

        # Load Paragon CSS from CDN (runtime, not bundled)
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/core.min.css')
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.0.0/dist/light.min.css')

        # Add XBlock custom styles (minimal)
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/studio-ui.css'))

        # Initialize React component
        frag.initialize_js('SortIntoBinsStudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js'),
            'fields': {
                'display_name': self.display_name,
                'problem_title': self.problem_title,
                'instructions': self.instructions,
                'bins': json.loads(self.bins),
                'items': json.loads(self.items),
                'explanation': self.explanation,
                'weight': self.weight,
                'max_attempts': self.max_attempts,
                'grading_mode': self.grading_mode,
                'show_correct_answers': self.show_correct_answers,
                'show_feedback_mode': self.show_feedback_mode,
            }
        })

        return frag

    # =========================================================================
    # JSON HANDLERS
    # =========================================================================

    @XBlock.json_handler
    def submit_item(self, data, suffix=''):
        """
        Handle individual item placement for immediate feedback mode.

        Expected data format:
        {
            "itemId": "item1",
            "binId": "bin2"  (or null to remove from bin)
        }
        """
        # 1. VALIDATE INPUT
        item_id = data.get('itemId')
        bin_id = data.get('binId')  # Can be None/null to remove from bin

        if not item_id:
            return {
                'success': False,
                'error': 'Missing itemId'
            }

        # 2. LOAD PROBLEM DATA
        try:
            bins_data = json.loads(self.bins)
            items_data = json.loads(self.items)
        except json.JSONDecodeError:
            return {
                'success': False,
                'error': 'Problem configuration error. Please contact your instructor.'
            }

        # 3. FIND THE ITEM
        item_def = None
        for item in items_data:
            if item['id'] == item_id:
                item_def = item
                break

        if not item_def:
            return {
                'success': False,
                'error': f'Invalid item ID: {item_id}'
            }

        # 4. CHECK IF PLACEMENT IS CORRECT
        correct_bin_id = item_def['correct_bin_id']
        is_correct = bin_id == correct_bin_id if bin_id else False

        # 5. UPDATE STUDENT STATE
        placements = json.loads(self.student_placements)

        if bin_id:
            # Place item in bin with correctness info
            placements[item_id] = {
                'binId': bin_id,
                'correct': is_correct
            }
        else:
            # Remove item from bin
            if item_id in placements:
                del placements[item_id]

        self.student_placements = json.dumps(placements)

        # 6. RECALCULATE SCORE
        score = self.calculate_score()
        self.current_score = score.raw_earned

        # 7. PUBLISH GRADE EVENT (immediate mode publishes on each placement)
        self.runtime.publish(self, "grade", {
            "value": score.raw_earned,
            "max_value": self.weight
        })

        # 8. CALCULATE ATTEMPTS REMAINING (for display only - not enforced in immediate mode)
        attempts_remaining = None
        if self.max_attempts > 0:
            attempts_remaining = self.max_attempts - self.attempts_count

        # 9. CALCULATE PERCENTAGE
        total_items = len(items_data)
        correct_count = sum(1 for p in placements.values()
                          if isinstance(p, dict) and p.get('correct', False))
        percentage = (correct_count / total_items * 100) if total_items > 0 else 0

        # 10. RETURN RESPONSE WITH IMMEDIATE FEEDBACK
        return {
            'success': True,
            'correct': is_correct,
            'score': score.raw_earned,
            'maxScore': self.weight,
            'percentage': percentage,
            'correctCount': correct_count,
            'totalItems': total_items,
            'attemptsRemaining': attempts_remaining,
        }

    @XBlock.json_handler
    def submit_placements(self, data, suffix=''):
        """
        Handle batch submission of all item placements for on_submit feedback mode.

        Expected data format:
        {
            "placements": {
                "item1": {"binId": "bin2"},
                "item2": {"binId": "bin1"},
                ...
            }
        }
        """
        # 1. VALIDATE INPUT
        placements = data.get('placements', {})

        if not isinstance(placements, dict):
            return {
                'success': False,
                'error': 'Invalid input format. Expected placements object.'
            }

        # 2. CHECK ATTEMPT LIMITS (enforced in on_submit mode)
        if self.max_attempts > 0 and self.attempts_count >= self.max_attempts:
            return {
                'success': False,
                'error': f'Maximum attempts ({self.max_attempts}) exceeded'
            }

        # 3. LOAD PROBLEM DATA
        try:
            bins_data = json.loads(self.bins)
            items_data = json.loads(self.items)
        except json.JSONDecodeError:
            return {
                'success': False,
                'error': 'Problem configuration error. Please contact your instructor.'
            }

        # 4. VALIDATE PLACEMENTS (capacity limits)
        is_valid, error_msg = self._validate_placements(placements, bins_data, items_data)
        if not is_valid:
            return {
                'success': False,
                'error': error_msg
            }

        # 5. GRADE THE SUBMISSION
        # Build placements with correctness for storage
        graded_placements = {}
        item_results = {}
        correct_count = 0

        for item in items_data:
            item_id = item['id']
            correct_bin_id = item['correct_bin_id']

            # Extract bin_id from placement (handle both dict and string format)
            placement = placements.get(item_id)
            if isinstance(placement, dict):
                student_bin_id = placement.get('binId')
            else:
                student_bin_id = placement

            is_correct = student_bin_id == correct_bin_id

            if is_correct:
                correct_count += 1

            # Store with correctness
            if student_bin_id:
                graded_placements[item_id] = {
                    'binId': student_bin_id,
                    'correct': is_correct
                }

            # Build results for response
            item_results[item_id] = {
                'correct': is_correct,
                'correctBinId': correct_bin_id,
                'binId': student_bin_id
            }

        total_items = len(items_data)
        percentage = (correct_count / total_items * 100) if total_items > 0 else 0
        all_correct = correct_count == total_items

        # Calculate score based on grading mode
        if self.grading_mode == "all_or_nothing":
            earned_score = self.weight if all_correct else 0.0
        else:  # partial_credit
            earned_score = (correct_count / total_items * self.weight) if total_items > 0 else 0.0

        # 6. INCREMENT ATTEMPTS (on_submit mode tracks attempts)
        self.attempts_count += 1

        # 7. STORE STATE
        self.student_placements = json.dumps(graded_placements)
        self.current_score = earned_score

        # Store submission result for feedback display
        submission_result = {
            'allCorrect': all_correct,
            'correctCount': correct_count,
            'totalItems': total_items,
            'score': earned_score,
            'maxScore': self.weight,
            'percentage': percentage,
            'results': item_results,
            'explanation': self.explanation if self.explanation else None
        }
        self.last_submission_result = json.dumps(submission_result)

        # 8. PUBLISH GRADE EVENT (once per submission in on_submit mode)
        self.runtime.publish(self, "grade", {
            "value": earned_score,
            "max_value": self.weight
        })

        # 9. CALCULATE ATTEMPTS REMAINING
        attempts_remaining = None
        if self.max_attempts > 0:
            attempts_remaining = self.max_attempts - self.attempts_count

        # 10. DETERMINE IF EXPLANATION SHOULD BE SHOWN
        # Show explanation if all correct OR no attempts remaining
        show_explanation = all_correct or (attempts_remaining is not None and attempts_remaining <= 0)
        explanation = self.explanation if (show_explanation and self.explanation) else None

        # 11. RETURN RESPONSE
        return {
            'success': True,
            'results': item_results,
            'allCorrect': all_correct,
            'correctCount': correct_count,
            'totalItems': total_items,
            'score': earned_score,
            'maxScore': self.weight,
            'percentage': percentage,
            'attemptsRemaining': attempts_remaining,
            'explanation': explanation
        }

    @XBlock.json_handler
    def show_answer(self, data, suffix=''):
        """
        Return correct bin assignments for all items.
        Used by "Show Answer" button in on_submit mode.
        """
        try:
            items_data = json.loads(self.items)
        except json.JSONDecodeError:
            return {
                'success': False,
                'error': 'Problem configuration error.'
            }

        # Build mapping of item_id to correct_bin_id
        correct_answers = {}
        for item in items_data:
            correct_answers[item['id']] = item['correct_bin_id']

        return {
            'success': True,
            'correctAnswers': correct_answers
        }

    @XBlock.json_handler
    def save_data(self, data, suffix=''):
        """Studio handler: Save problem configuration."""
        # VALIDATE REQUIRED FIELDS
        display_name = data.get('display_name', '').strip()
        if not display_name:
            return {'success': False, 'error': 'Display name is required'}

        problem_title = data.get('problem_title', '').strip()
        if not problem_title:
            return {'success': False, 'error': 'Problem title is required'}

        # VALIDATE BINS
        bins = data.get('bins', [])
        if not isinstance(bins, list) or len(bins) < 1:
            return {'success': False, 'error': 'At least one bin is required'}

        for i, bin_def in enumerate(bins):
            if not bin_def.get('id'):
                return {'success': False, 'error': f'Bin {i+1} missing ID'}
            if not bin_def.get('label'):
                return {'success': False, 'error': f'Bin {i+1} missing label'}
            max_cap = bin_def.get('max_capacity', 0)
            try:
                max_cap = int(max_cap)
                if max_cap < 0:
                    return {'success': False, 'error': f'Bin {i+1} capacity cannot be negative'}
                bin_def['max_capacity'] = max_cap
            except (ValueError, TypeError):
                return {'success': False, 'error': f'Bin {i+1} invalid capacity value'}

        # VALIDATE ITEMS
        items = data.get('items', [])
        if not isinstance(items, list) or len(items) < 1:
            return {'success': False, 'error': 'At least one item is required'}

        bin_ids = {bin_def['id'] for bin_def in bins}
        for i, item in enumerate(items):
            if not item.get('id'):
                return {'success': False, 'error': f'Item {i+1} missing ID'}
            if not item.get('type') in ['text', 'image', 'html']:
                return {'success': False, 'error': f'Item {i+1} invalid type'}
            if not item.get('content'):
                return {'success': False, 'error': f'Item {i+1} missing content'}
            if item.get('correct_bin_id') not in bin_ids:
                return {'success': False, 'error': f'Item {i+1} references invalid bin ID'}

        # VALIDATE NUMERIC FIELDS
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

        # SAVE DATA
        self.display_name = display_name
        self.problem_title = problem_title
        self.instructions = data.get('instructions', '').strip()
        self.bins = json.dumps(bins)
        self.items = json.dumps(items)
        self.explanation = data.get('explanation', '').strip()
        self.weight = weight
        self.max_attempts = max_attempts
        self.grading_mode = data.get('grading_mode', 'partial_credit')
        self.show_correct_answers = data.get('show_correct_answers', 'after_attempts')
        self.show_feedback_mode = data.get('show_feedback_mode', 'on_submit')

        return {
            'success': True,
            'display_name': self.display_name,
            'problem_title': self.problem_title
        }

    @XBlock.json_handler
    def reset_problem(self, data, suffix=''):
        """Instructor handler: Reset student's problem state."""
        self.student_placements = "{}"
        self.attempts_count = 0
        self.current_score = 0.0
        self.last_submission_result = "{}"

        # Publish zero grade
        self.runtime.publish(self, "grade", {
            "value": 0.0,
            "max_value": self.weight
        })

        return {'success': True, 'message': 'Problem reset successfully'}

    # =========================================================================
    # WORKBENCH SCENARIOS
    # =========================================================================

    @staticmethod
    def workbench_scenarios():
        """Workbench scenarios for testing."""
        return [
            ("SortIntoBins Basic",
             """<sort_into_bins/>"""),
            ("SortIntoBins Anatomy Categories",
             """<sort_into_bins
                    display_name="Anatomy Quiz"
                    problem_title="Sort teeth into categories"
                    weight="2.0"
                    max_attempts="5"
                    grading_mode="partial_credit"
                />"""),
        ]
