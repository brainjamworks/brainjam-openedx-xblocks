/**
 * ModalHeader Component
 *
 * Beautiful fixed header with title, step indicator, and close button
 * Liverpool blue accent with clean typography
 */

import React from 'react';

interface ModalHeaderProps {
  title: string;
  subtitle?: string;
  onClose?: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  subtitle,
  onClose,
}) => {
  return (
    <div className="modal-header-fullscreen">
      <div className="modal-header-content">
        <div className="modal-header-titles">
          <h3 className="modal-header-title">{title}</h3>
          {subtitle && <span className="modal-header-subtitle">{subtitle}</span>}
        </div>
        {onClose && (
          <button
            className="modal-header-close"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
