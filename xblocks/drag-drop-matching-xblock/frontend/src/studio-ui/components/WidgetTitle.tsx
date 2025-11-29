import React from 'react';

interface WidgetTitleProps {
  title: string;
  description?: string;
  className?: string;
}

/**
 * Widget section title component
 *
 * Matches the Paragon problem editor pattern for widget titles
 * (e.g., "Question", "Answers", "Explanation")
 */
export const WidgetTitle: React.FC<WidgetTitleProps> = ({
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`mt-4 text-primary-500 ${className}`}>
      <div className="h4">{title}</div>
      {description && (
        <div className="small text-gray-500">{description}</div>
      )}
    </div>
  );
};
