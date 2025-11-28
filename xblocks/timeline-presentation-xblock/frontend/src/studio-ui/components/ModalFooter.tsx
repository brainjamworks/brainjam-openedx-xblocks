/**
 * ModalFooter Component
 *
 * Elevated fixed footer with action buttons
 * Clean separation with subtle shadow
 */

import React, { ReactNode } from 'react';

interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`modal-footer-fullscreen ${className}`}>
      <div className="modal-footer-content">
        {children}
      </div>
    </div>
  );
};
