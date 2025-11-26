/**
 * Student UI Components - Central Export
 *
 * This file provides a central point to import all student-facing components.
 * Makes it easier to import multiple components in tests or other files.
 */

export { StudentView } from './StudentView';
export { TimelinePlayer } from './TimelinePlayer';
export { DiagramCanvas } from './DiagramCanvas';
export { TimelineElement } from './TimelineElement';
export {
  useTimelineSync,
  getAnimationClasses,
  calculateAnimationDelay,
} from './AnimationEngine';
