"""DragDropMatching - A React-based Gradable Problem XBlock for Open edX

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
import random
import pkg_resources
from xblock.core import XBlock
from xblock.fields import String, Integer, Float, Boolean, Scope
from xblock.fragment import Fragment
from xblock.scorable import ScorableXBlockMixin, Score


class DragDropMatching(ScorableXBlockMixin, XBlock):
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

    # =========================================================================
    # SETTINGS: Course author configuration (Scope.settings)
    # IMPLEMENTATION: Modify these fields based on your problem requirements
    # =========================================================================

    display_name = String(
        display_name="Display Name",
        default="DragDropMatching",
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

    unlimited_attempts = Boolean(
        display_name="Unlimited Attempts",
        default=False,
        scope=Scope.settings,
        help="Allow unlimited attempts (overrides max_attempts when True)"
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
    # IMPLEMENTATION: Drag and drop matching problem fields
    # =========================================================================

    question_text = String(
        display_name="Question",
        default="Match each term with its correct description:",
        scope=Scope.content,
        help="The instruction text for students",
        multiline_editor=True
    )

    matching_pairs = String(
        display_name="Matching Pairs",
        default=json.dumps([
            {
                "id": "pair1",
                "term": "Apply",
                "description": "Using information in new situations"
            },
            {
                "id": "pair2",
                "term": "Analyse",
                "description": "Drawing connections among ideas"
            },
            {
                "id": "pair3",
                "term": "Evaluate",
                "description": "Justifying a stand or decision"
            },
            {
                "id": "pair4",
                "term": "Create",
                "description": "Producing new or original work"
            }
        ]),
        scope=Scope.content,
        help="JSON array of matching pairs with id, term, and description"
    )

    randomize_items = Boolean(
        display_name="Randomize Items",
        default=True,
        scope=Scope.content,
        help="Randomize the order of terms and descriptions on each attempt"
    )

    explanation = String(
        display_name="Explanation",
        default="These terms represent different cognitive levels in Bloom's Taxonomy.",
        scope=Scope.content,
        help="Explanation shown after submission (optional)",
        multiline_editor=True
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
    # IMPLEMENTATION: Track student progress and matches
    # =========================================================================

    student_matches = String(
        default="{}",
        scope=Scope.user_state,
        help="JSON dict mapping pair_id to match status {id: {correct: bool, description_id: str}}"
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

        IMPLEMENTATION: Partial credit based on correct matches.
        Each correct match = (weight / total_pairs).
        """
        try:
            pairs = json.loads(self.matching_pairs)
            matches = json.loads(self.student_matches)
        except (json.JSONDecodeError, TypeError):
            return Score(raw_earned=0.0, raw_possible=self.weight)

        if not pairs:
            return Score(raw_earned=0.0, raw_possible=self.weight)

        # Count correct matches
        correct_count = sum(
            1 for pair in pairs
            if matches.get(pair['id'], {}).get('correct', False)
        )

        # Calculate score (partial credit)
        total_pairs = len(pairs)
        percentage = correct_count / total_pairs if total_pairs > 0 else 0
        earned = percentage * self.weight

        return Score(raw_earned=earned, raw_possible=self.weight)

        # PARTIAL CREDIT EXAMPLE: For multi-part problems
        # Uncomment and modify for partial credit:
        #
        # questions = json.loads(self.questions)
        # answers = json.loads(self.student_answers)
        #
        # total_points = sum(q['points'] for q in questions)
        # earned_points = 0.0
        #
        # for question in questions:
        #     student_ans = answers.get(question['id'], '')
        #     if self._check_answer(student_ans, question['correct_answer']):
        #         earned_points += question['points']
        #
        # # Scale to weight
        # percentage = earned_points / total_points if total_points > 0 else 0
        # return Score(
        #     raw_earned=percentage * self.weight,
        #     raw_possible=self.weight
        # )

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

    def _check_match(self, pair_id, description_id):
        """
        Check if a term-description match is correct.

        Args:
            pair_id (str): ID of the matching pair
            description_id (str): ID that student selected

        Returns:
            bool: True if the description_id matches the pair_id, False otherwise
        """
        # In our matching system, the correct match is when
        # the description_id equals the pair_id (term's own description)
        return pair_id == description_id

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

        # Parse matching pairs
        try:
            pairs = json.loads(self.matching_pairs)
            matches = json.loads(self.student_matches)
        except (json.JSONDecodeError, TypeError):
            pairs = []
            matches = {}

        # Randomize if enabled
        if self.randomize_items:
            terms = [{"id": p["id"], "term": p["term"]} for p in pairs]
            descriptions = [{"id": p["id"], "description": p["description"]} for p in pairs]
            random.shuffle(terms)
            random.shuffle(descriptions)
        else:
            terms = [{"id": p["id"], "term": p["term"]} for p in pairs]
            descriptions = [{"id": p["id"], "description": p["description"]} for p in pairs]

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
        frag.initialize_js('DragDropMatchingStudentView', {
            'url': self.runtime.local_resource_url(self, 'public/student-ui.js'),
            # IMPLEMENTATION: Drag and drop matching data
            'displayName': self.display_name,
            'questionText': self.question_text,
            'terms': terms,
            'descriptions': descriptions,
            'studentMatches': matches,
            'currentScore': self.current_score,
            'maxScore': self.weight,
            'attemptsRemaining': attempts_remaining,
            'feedbackMode': self.show_feedback_mode,
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

        # ARCHITECTURAL: Load XBlock styles in correct order
        # 1. Load studio-ui.css FIRST (contains all: initial reset)
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/studio-ui.css'))

        # 2. Load Paragon/Liverpool AFTER reset (re-applies clean styles)
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.14.9/dist/core.min.css')
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@openedx/paragon@23.14.9/dist/light.min.css')
        frag.add_css_url('https://cdn.jsdelivr.net/npm/@brainjam/liverpool-dental-theme@1.1.0/liverpool-authoring-complete.css')

        # Parse matching pairs
        try:
            pairs = json.loads(self.matching_pairs)
        except (json.JSONDecodeError, TypeError):
            pairs = []

        # ARCHITECTURAL: Initialize with bundle URL + data
        frag.initialize_js('DragDropMatchingStudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js'),
            'fields': {
                # IMPLEMENTATION: Editable fields for course authors
                'display_name': self.display_name,
                'question_text': self.question_text,
                'matching_pairs': pairs,
                'randomize_items': self.randomize_items,
                'explanation': self.explanation,
                'weight': self.weight,
                'max_attempts': self.max_attempts,
                'unlimited_attempts': self.unlimited_attempts,
                'show_feedback_mode': self.show_feedback_mode,
            }
        })

        return frag

    # =========================================================================
    # JSON HANDLERS: API endpoints for student submissions and studio saves
    # IMPLEMENTATION: Customize validation and grading logic
    # =========================================================================

    @XBlock.json_handler
    def submit_match(self, data, suffix=''):
        """
        Handle student drag-and-drop match submission.

        This handler is called when a student makes a match between a term and description.
        It provides immediate feedback for each match.

        Args:
            data (dict): {
                'pairId': str,  # ID of the matching pair (term)
                'descriptionId': str  # ID of the description student selected
            }

        Returns:
            dict: {
                'success': bool,
                'correct': bool,
                'score': float,  # Current total score
                'maxScore': float,
                'percentage': float,
                'attemptsRemaining': int
            }
        """
        # =============================================================
        # 1. VALIDATE INPUT
        # =============================================================
        pair_id = data.get('pairId', '')
        description_id = data.get('descriptionId', '')

        if not pair_id or not description_id:
            return {
                'success': False,
                'error': 'Missing pairId or descriptionId'
            }

        # =============================================================
        # 2. CHECK ATTEMPT LIMITS (optional - could check per match or per full solution)
        # =============================================================
        # For drag-and-drop matching, we typically allow unlimited rematching
        # If you want attempt limits, uncomment:
        # if self.max_attempts > 0 and self.attempts_count >= self.max_attempts:
        #     return {
        #         'success': False,
        #         'error': f'Maximum attempts ({self.max_attempts}) exceeded'
        #     }

        # =============================================================
        # 3. CHECK IF MATCH IS CORRECT
        # =============================================================
        is_correct = self._check_match(pair_id, description_id)

        # =============================================================
        # 4. UPDATE STUDENT MATCHES
        # =============================================================
        try:
            matches = json.loads(self.student_matches)
        except (json.JSONDecodeError, TypeError):
            matches = {}

        matches[pair_id] = {
            'correct': is_correct,
            'descriptionId': description_id
        }

        self.student_matches = json.dumps(matches)

        # =============================================================
        # 5. RECALCULATE SCORE
        # =============================================================
        score = self.calculate_score()
        self.current_score = score.raw_earned

        # =============================================================
        # 6. PUBLISH GRADE EVENT
        # =============================================================
        self.runtime.publish(self, "grade", {
            "value": score.raw_earned,
            "max_value": self.weight
        })

        # =============================================================
        # 7. CALCULATE ATTEMPTS REMAINING (if applicable)
        # =============================================================
        attempts_remaining = None
        if self.max_attempts > 0:
            attempts_remaining = self.max_attempts - self.attempts_count

        percentage = (score.raw_earned / self.weight * 100) if self.weight > 0 else 0

        # =============================================================
        # 8. RETURN RESPONSE TO STUDENT
        # =============================================================
        return {
            'success': True,
            'correct': is_correct,
            'score': score.raw_earned,
            'maxScore': self.weight,
            'percentage': percentage,
            'attemptsRemaining': attempts_remaining,
        }

    @XBlock.json_handler
    def submit_all_matches(self, data, suffix=''):
        """
        Handle batch submission of all matches (for "on_submit" feedback mode).

        This handler is called when a student clicks the Submit button after making
        all their matches. It evaluates all matches at once and provides comprehensive
        feedback.

        Args:
            data (dict): {
                'matches': dict,  # {pairId: {'descriptionId': str}}
            }

        Returns:
            dict: {
                'success': bool,
                'results': dict,  # {pairId: {'correct': bool, 'descriptionId': str}}
                'score': float,
                'maxScore': float,
                'percentage': float,
                'allCorrect': bool,
                'explanation': str,
                'attemptsRemaining': int
            }
        """
        # =============================================================
        # 1. VALIDATE INPUT
        # =============================================================
        matches = data.get('matches', {})

        if not isinstance(matches, dict):
            return {
                'success': False,
                'error': 'Invalid matches format'
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
        # 4. EVALUATE ALL MATCHES
        # =============================================================
        results = {}
        for pair_id, match_data in matches.items():
            description_id = match_data.get('descriptionId', '')
            is_correct = self._check_match(pair_id, description_id)

            results[pair_id] = {
                'correct': is_correct,
                'descriptionId': description_id
            }

        # =============================================================
        # 5. SAVE STUDENT MATCHES
        # =============================================================
        self.student_matches = json.dumps(results)

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
        # 10. RETURN COMPREHENSIVE FEEDBACK
        # =============================================================
        return {
            'success': True,
            'results': results,
            'score': score.raw_earned,
            'maxScore': self.weight,
            'percentage': percentage,
            'allCorrect': all_correct,
            'explanation': self.explanation if all_correct or attempts_remaining == 0 else '',
            'attemptsRemaining': attempts_remaining,
        }

    @XBlock.json_handler
    def get_correct_answers(self, data, suffix=''):
        """
        Return the correct term-description pairs for "Show Answer" functionality.

        This handler is called when a student clicks "Show Answer" to reveal
        the correct matches. Returns a dictionary mapping term IDs to their
        correct description IDs.
        """
        pairs = json.loads(self.matching_pairs)

        # Create a mapping of term_id -> description_id for correct matches
        correct_matches = {}
        for pair in pairs:
            correct_matches[pair['id']] = pair['id']

        return {
            'success': True,
            'correctMatches': correct_matches
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
    def save_data(self, data, suffix=''):
        """
        Studio handler: Save drag-drop matching configuration.

        IMPLEMENTATION: Validate and save matching pairs.
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

        # Validate matching pairs
        matching_pairs = data.get('matching_pairs', [])
        if not isinstance(matching_pairs, list):
            return {
                'success': False,
                'error': 'Matching pairs must be an array'
            }

        if len(matching_pairs) < 2:
            return {
                'success': False,
                'error': 'At least 2 matching pairs are required'
            }

        # Validate each pair
        for i, pair in enumerate(matching_pairs):
            if not pair.get('id'):
                return {'success': False, 'error': f'Pair {i+1} missing ID'}
            if not pair.get('term'):
                return {'success': False, 'error': f'Pair {i+1} missing term'}
            if not pair.get('description'):
                return {'success': False, 'error': f'Pair {i+1} missing description'}

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
        self.matching_pairs = json.dumps(matching_pairs)
        self.randomize_items = data.get('randomize_items', True)
        self.explanation = data.get('explanation', '').strip()
        self.weight = weight
        self.max_attempts = max_attempts
        self.unlimited_attempts = data.get('unlimited_attempts', False)
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
        self.student_matches = "{}"
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
    # WORKBENCH SCENARIOS: For testing in XBlock SDK
    # IMPLEMENTATION: Customize test scenarios
    # =========================================================================

    @staticmethod
    def workbench_scenarios():
        """Workbench scenarios for testing."""
        return [
            ("DragDropMatching Basic",
             """<drag_drop_matching/>
             """),
            ("DragDropMatching with Custom Settings",
             """<drag_drop_matching
                    display_name="Math Quiz"
                    question_text="What is 5 + 3?"
                    correct_answer="8"
                    weight="2.0"
                    max_attempts="5"
                />
             """),
        ]
