/**
 * Tabs Student View Component
 *
 * Interactive tabbed content interface with keyboard navigation and state persistence.
 * Follows accessibility best practices with ARIA attributes and keyboard support.
 */

import React, { useState, useRef, useEffect } from 'react';
import { xblockPost, XBlockRuntime } from '../common/api';

/**
 * Single tab structure
 */
interface Tab {
  label: string;
  content: string;
}

/**
 * Props for the student-facing tabs component
 */
interface StudentViewProps {
  displayName: string;
  title?: string;
  tabs: Tab[];
  currentTabIndex: number;
  runtime: XBlockRuntime;
}

/**
 * StudentView - Tabbed content interface with accessibility and state persistence
 */
export const StudentView: React.FC<StudentViewProps> = ({
  displayName,
  title,
  tabs,
  currentTabIndex,
  runtime
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(currentTabIndex || 0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Ensure active tab is within bounds
  useEffect(() => {
    if (activeTabIndex >= tabs.length) {
      setActiveTabIndex(0);
    }
  }, [activeTabIndex, tabs.length]);

  /**
   * Switch to a new tab with fade animation and state persistence
   */
  const handleTabClick = async (index: number) => {
    if (index === activeTabIndex || isTransitioning) return;

    // Start fade-out transition
    setIsTransitioning(true);

    // After fade-out completes, switch tab
    setTimeout(() => {
      setActiveTabIndex(index);

      // Save state to backend
      xblockPost(runtime, 'set_current_tab', {
        tab_index: index
      }).catch((error) => {
        console.error('Failed to save tab state:', error);
      });

      // Fade-in after brief delay
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150); // Half of 300ms total transition
  };

  /**
   * Keyboard navigation handler
   * Arrow Left/Right: Navigate tabs
   * Home/End: Jump to first/last tab
   * Enter/Space: Activate focused tab
   */
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = index > 0 ? index - 1 : tabs.length - 1;
        tabRefs.current[newIndex]?.focus();
        break;

      case 'ArrowRight':
        e.preventDefault();
        newIndex = index < tabs.length - 1 ? index + 1 : 0;
        tabRefs.current[newIndex]?.focus();
        break;

      case 'Home':
        e.preventDefault();
        newIndex = 0;
        tabRefs.current[newIndex]?.focus();
        break;

      case 'End':
        e.preventDefault();
        newIndex = tabs.length - 1;
        tabRefs.current[newIndex]?.focus();
        break;

      case 'Enter':
      case ' ':
        e.preventDefault();
        handleTabClick(index);
        break;

      default:
        break;
    }
  };

  // Get active tab or fallback to first tab
  const activeTab = tabs[activeTabIndex] || tabs[0];

  return (
    <div className="tabs-student-view">
      {title && <h3 className="tabs-main-title">{title}</h3>}
      {/* Unified shadow wrapper - Legacy Design */}
      <div className="tabs-wrapper">
        {/* Tab Bar */}
        <div
          className="tabs-tab-bar"
          role="tablist"
          aria-label={displayName}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              role="tab"
              aria-selected={index === activeTabIndex}
              aria-controls={`tab-panel-${index}`}
              id={`tab-${index}`}
              tabIndex={index === activeTabIndex ? 0 : -1}
              className={`tabs-tab-button ${index === activeTabIndex ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              <h4 className="tabs-tab-label">{tab.label}</h4>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
          role="tabpanel"
          id={`tab-panel-${activeTabIndex}`}
          aria-labelledby={`tab-${activeTabIndex}`}
          className={`tabs-content-area ${isTransitioning ? '' : 'fade-in'}`}
        >
          <div
            className="tabs-content-html"
            dangerouslySetInnerHTML={{ __html: activeTab.content }}
          />
        </div>
      </div>
    </div>
  );
};
