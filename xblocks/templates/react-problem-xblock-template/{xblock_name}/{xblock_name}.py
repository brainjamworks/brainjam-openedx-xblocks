"""{XBlockName} - A React-based Gradable Problem XBlock for Open edX

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
import pkg_resources
from xblock.core import XBlock
from xblock.fields import String, Integer, Float, Scope
from xblock.fragment import Fragment
from xblock.scorable import ScorableXBlockMixin, Score


class {XBlockName}(ScorableXBlockMixin, XBlock):
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
        default="{XBlockName}",
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
    # IMPLEMENTATION: Define your problem content here
    # =========================================================================

    question_text = String(
        display_name="Question",
        default="What is 2 + 2?",
        scope=Scope.content,
        help="The question to ask the student",
        multiline_editor=True
    )

    correct_answer = String(
        display_name="Correct Answer",
        default="4",
        scope=Scope.content,
        help="The correct answer to the question"
    )

    explanation = String(
        display_name="Explanation",
        default="2 + 2 equals 4",
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
    # IMPLEMENTATION: Track student progress and answers
    # =========================================================================

    student_answer = String(
        default="",
        scope=Scope.user_state,
        help="Student's submitted answer"
    )

    # MULTI-PART EXAMPLE: For multiple answers
    # student_answers = String(
    #     default="{}",
    #     scope=Scope.user_state,
    #     help="JSON dict mapping question_id to answer"
    # )

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

        IMPLEMENTATION: Default is all-or-nothing grading.
        See PARTIAL CREDIT EXAMPLE below for proportional scoring.
        """
        # Simple all-or-nothing grading
        is_correct = self._check_answer(self.student_answer, self.correct_answer)

        if is_correct:
            earned = self.weight
        else:
            earned = 0.0

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

    def _check_answer(self, student_answer, correct_answer):
        """
        Check if student answer is correct.

        IMPLEMENTATION: Customize this method for your answer validation logic.
        Default: Case-insensitive string comparison with whitespace trimming.

        Args:
            student_answer (str): The student's submitted answer
            correct_answer (str): The correct answer

        Returns:
            bool: True if correct, False otherwise
        """
        # Normalize both answers for comparison
        student_normalized = str(student_answer).strip().lower()
        correct_normalized = str(correct_answer).strip().lower()

        return student_normalized == correct_normalized

        # IMPLEMENTATION EXAMPLES:
        #
        # For numeric answers with tolerance:
        # try:
        #     student_num = float(student_answer)
        #     correct_num = float(correct_answer)
        #     tolerance = 0.01
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
        frag.add_javascript(bootstrap_js)

        # ARCHITECTURAL: Add CSS bundle
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

        # ARCHITECTURAL: Initialize with bundle URL + data
        frag.initialize_js('{XBlockName}StudentView', {
            'url': self.runtime.local_resource_url(self, 'public/student-ui.js'),
            # IMPLEMENTATION: Problem data for React
            'questionText': self.question_text,
            'studentAnswer': self.student_answer,
            'currentScore': self.current_score,
            'maxScore': self.weight,
            'attemptsRemaining': attempts_remaining,
            'feedbackMode': self.show_feedback_mode,
            'lastSubmissionResult': last_result,
            # MULTI-PART EXAMPLE:
            # 'questions': json.loads(self.questions),
            # 'studentAnswers': json.loads(self.student_answers),
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

        # ARCHITECTURAL: Add CSS bundle
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/studio-ui.css'))

        # ARCHITECTURAL: Initialize with bundle URL + data
        frag.initialize_js('{XBlockName}StudioView', {
            'url': self.runtime.local_resource_url(self, 'public/studio-ui.js'),
            'fields': {
                # IMPLEMENTATION: Editable fields for course authors
                'display_name': self.display_name,
                'question_text': self.question_text,
                'correct_answer': self.correct_answer,
                'explanation': self.explanation,
                'weight': self.weight,
                'max_attempts': self.max_attempts,
                'show_feedback_mode': self.show_feedback_mode,
                # MULTI-PART EXAMPLE:
                # 'questions': json.loads(self.questions),
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
        Handle student answer submission.

        ARCHITECTURAL: This handler must:
        1. Validate input
        2. Check attempt limits
        3. Grade the answer
        4. Call runtime.publish() to publish grade
        5. Store state
        6. Return feedback

        IMPLEMENTATION: Customize validation and feedback logic.
        """
        # =============================================================
        # 1. VALIDATE INPUT
        # =============================================================
        answer = data.get('answer', '')

        # Type validation
        if not isinstance(answer, str):
            return {
                'success': False,
                'error': 'Invalid input type. Expected string.'
            }

        # IMPLEMENTATION: Add custom validation here
        # Example: Check answer length
        # if len(answer) > 1000:
        #     return {'success': False, 'error': 'Answer too long'}

        # =============================================================
        # 2. CHECK ATTEMPT LIMITS
        # =============================================================
        if self.max_attempts > 0 and self.attempts_count >= self.max_attempts:
            return {
                'success': False,
                'error': f'Maximum attempts ({self.max_attempts}) exceeded'
            }

        # =============================================================
        # 3. SANITIZE INPUT (Security best practice)
        # =============================================================
        # For text answers, remove potentially dangerous content
        # Uncomment if you're storing/displaying user input:
        # from bleach import clean
        # sanitized_answer = clean(answer, tags=[], strip=True)
        sanitized_answer = answer.strip()

        # =============================================================
        # 4. GRADE THE ANSWER
        # =============================================================
        is_correct = self._check_answer(sanitized_answer, self.correct_answer)

        # Calculate score (all-or-nothing by default)
        if is_correct:
            earned_score = self.weight
        else:
            earned_score = 0.0

        percentage = (earned_score / self.weight * 100) if self.weight > 0 else 0

        # =============================================================
        # 5. STORE STATE
        # =============================================================
        self.student_answer = sanitized_answer
        self.attempts_count += 1
        self.current_score = earned_score

        # Store submission result for feedback display
        submission_result = {
            'correct': is_correct,
            'score': earned_score,
            'max_score': self.weight,
            'percentage': percentage,
            'feedback': self.explanation if not is_correct else "Correct!",
            'submitted_answer': sanitized_answer
        }
        self.last_submission_result = json.dumps(submission_result)

        # =============================================================
        # 6. CRITICAL: PUBLISH GRADE EVENT
        # This triggers OpenEdX grading cascade (problem → subsection → course)
        # =============================================================
        self.runtime.publish(self, "grade", {
            "value": earned_score,
            "max_value": self.weight
        })

        # =============================================================
        # 7. CALCULATE ATTEMPTS REMAINING
        # =============================================================
        attempts_remaining = None
        if self.max_attempts > 0:
            attempts_remaining = self.max_attempts - self.attempts_count

        # =============================================================
        # 8. RETURN RESPONSE TO STUDENT
        # IMPORTANT: Use camelCase to match TypeScript interface
        # =============================================================
        return {
            'success': True,
            'correct': is_correct,
            'score': earned_score,
            'maxScore': self.weight,
            'percentage': percentage,
            'feedback': submission_result['feedback'],
            'attemptsRemaining': attempts_remaining,
            'explanation': self.explanation if not is_correct else None
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
        Studio handler: Save problem configuration.

        IMPLEMENTATION: Customize field validation and saving logic.
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

        correct_answer = data.get('correct_answer', '').strip()
        if not correct_answer:
            return {
                'success': False,
                'error': 'Correct answer is required'
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
        # SANITIZE AND SAVE DATA
        # =============================================================
        # For rich text fields, use bleach to sanitize HTML
        # from bleach import clean
        # question_text = clean(question_text, tags=['p', 'br', 'strong', 'em', 'ul', 'li'])

        self.display_name = display_name
        self.question_text = question_text
        self.correct_answer = correct_answer
        self.explanation = data.get('explanation', '').strip()
        self.weight = weight
        self.max_attempts = max_attempts
        self.show_feedback_mode = data.get('show_feedback_mode', 'on_submit')

        # MULTI-PART EXAMPLE: Save questions array
        # questions = data.get('questions', [])
        # if not isinstance(questions, list):
        #     return {'success': False, 'error': 'Questions must be an array'}
        #
        # # Validate each question
        # for i, q in enumerate(questions):
        #     if not q.get('text'):
        #         return {'success': False, 'error': f'Question {i+1} missing text'}
        #     if not q.get('correct_answer'):
        #         return {'success': False, 'error': f'Question {i+1} missing answer'}
        #
        # self.questions = json.dumps(questions)

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
        self.student_answer = ""
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
            ("{XBlockName} Basic",
             """<{xblock_name}/>
             """),
            ("{XBlockName} with Custom Settings",
             """<{xblock_name}
                    display_name="Math Quiz"
                    question_text="What is 5 + 3?"
                    correct_answer="8"
                    weight="2.0"
                    max_attempts="5"
                />
             """),
        ]
