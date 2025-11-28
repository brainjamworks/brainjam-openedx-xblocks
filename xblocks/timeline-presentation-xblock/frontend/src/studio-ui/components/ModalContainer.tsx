/**
 * ModalContainer Component
 *
 * Fullscreen modal wrapper (98vh × 98vw) with beautiful Liverpool design
 * Provides the structural layout: fixed header, flexible body, fixed footer
 */

import React, { ReactNode } from 'react';

interface ModalContainerProps {
  children: ReactNode;
  className?: string;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`modal-container-fullscreen ${className}`}>
      {children}
    </div>
  );
};
