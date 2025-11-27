/**
 * Undo/Redo history hook
 *
 * Provides undo/redo functionality for any state type.
 * Maintains a history stack with a maximum size limit.
 */

import { useState, useCallback, useRef } from 'react';

const MAX_HISTORY_SIZE = 50;

/**
 * Hook for managing undo/redo state
 *
 * @param initialState - The initial state value
 * @returns Array containing [currentState, setState, undo, redo, canUndo, canRedo]
 *
 * @example
 * const [events, setEvents, undo, redo, canUndo, canRedo] = useHistory<TimelineEvent[]>([]);
 */
export function useHistory<T>(initialState: T): [
  state: T,
  setState: (newState: T | ((prevState: T) => T)) => void,
  undo: () => void,
  redo: () => void,
  canUndo: boolean,
  canRedo: boolean
] {
  // History stack stores previous states
  const [history, setHistory] = useState<T[]>([initialState]);

  // Current position in the history stack
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flag to prevent adding to history during undo/redo operations
  const isUndoRedoAction = useRef(false);

  // Current state is always at currentIndex in history
  const currentState = history[currentIndex];

  /**
   * Set new state and add to history
   */
  const setState = useCallback((newState: T | ((prevState: T) => T)) => {
    setHistory((prevHistory) => {
      setCurrentIndex((prevIndex) => {
        // Resolve the new state (handle both direct values and updater functions)
        const resolvedState =
          typeof newState === 'function'
            ? (newState as (prevState: T) => T)(prevHistory[prevIndex])
            : newState;

        // If this is an undo/redo action, don't modify history
        if (isUndoRedoAction.current) {
          isUndoRedoAction.current = false;
          return prevIndex;
        }

        // Remove any "future" history after current index
        const newHistory = prevHistory.slice(0, prevIndex + 1);

        // Add new state to history
        newHistory.push(resolvedState);

        // Trim history if it exceeds max size
        if (newHistory.length > MAX_HISTORY_SIZE) {
          newHistory.shift();
          return newHistory.length - 1;
        }

        return newHistory.length - 1;
      });

      // Return the updated history
      const newHistory = prevHistory.slice(0, currentIndex + 1);
      const resolvedState =
        typeof newState === 'function'
          ? (newState as (prevState: T) => T)(prevHistory[currentIndex])
          : newState;
      newHistory.push(resolvedState);

      if (newHistory.length > MAX_HISTORY_SIZE) {
        newHistory.shift();
      }

      return newHistory;
    });
  }, [currentIndex]);

  /**
   * Undo to previous state
   */
  const undo = useCallback(() => {
    if (currentIndex > 0) {
      isUndoRedoAction.current = true;
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  /**
   * Redo to next state
   */
  const redo = useCallback(() => {
    if (currentIndex < history.length - 1) {
      isUndoRedoAction.current = true;
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, history.length]);

  const canUndo = currentIndex > 0;
  const canRedo = currentIndex < history.length - 1;

  return [currentState, setState, undo, redo, canUndo, canRedo];
}
