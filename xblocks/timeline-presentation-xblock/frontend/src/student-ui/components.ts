/**
 * Student UI Components - Central Export
 *
 * This file provides a central point to import all student-facing components.
 * Makes it easier to import multiple components in tests or other files.
 */

export { StudentView } from './StudentView';
export { TimelinePlayer } from './TimelinePlayer';
export { DiagramCanvas } from './DiagramCanvas';

// Wave 2 & 3: Konva-based rendering with React Spring + GSAP timeline
export { TimelineKonvaElement } from './components/TimelineKonvaElement';

// Wave 3: GSAP timeline hook
export { useGSAPTimeline } from './hooks/useGSAPTimeline';

// Legacy CSS-based rendering (kept for reference, not used)
export { TimelineElement } from './TimelineElement';

// Legacy animation engine (replaced by GSAP in Wave 3)
export {
  useTimelineSync,
  getAnimationClasses,
  calculateAnimationDelay,
} from './AnimationEngine';
