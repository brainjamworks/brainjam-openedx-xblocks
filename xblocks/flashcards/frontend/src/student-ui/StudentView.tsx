/**
 * Flashcards Student View Component
 *
 * Interactive flashcard with front/back faces and flip animation.
 * Uses Paragon Card components following SOLID principles.
 */

import React, { useState } from 'react';
import Card from '@openedx/paragon/dist/Card';
import Button from '@openedx/paragon/dist/Button';
import Icon from '@openedx/paragon/dist/Icon';
import SwapHoriz from '@openedx/paragon/icons/es5/SwapHoriz';
import ArrowBack from '@openedx/paragon/icons/es5/ArrowBack';
import ArrowForward from '@openedx/paragon/icons/es5/ArrowForward';

/**
 * Single flashcard structure
 */
interface FlashCard {
  front_title: string;
  front_subtitle: string;
  back_text: string;
}

/**
 * Props for the student-facing flashcard component
 */
interface StudentViewProps {
  displayName: string;
  cards: FlashCard[];
}

/**
 * Props for individual flashcard face component
 */
interface FlashcardFaceProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * FlashcardFace - Single Responsibility: Display one face of the card
 * Uses Paragon Card for consistent styling
 */
const FlashcardFace: React.FC<FlashcardFaceProps> = ({ children, className }) => (
  <div className={`flashcard-face ${className || ''}`}>
    <Card className="flashcard-card">
      <Card.Section>
        {children}
      </Card.Section>
    </Card>
  </div>
);

/**
 * StudentView - Main component with flip and navigation logic
 * Single Responsibility: Manage flip state, navigation, and user interaction
 */
export const StudentView: React.FC<StudentViewProps> = ({
  displayName,
  cards,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  // Get current card
  const currentCard = cards[currentCardIndex] || cards[0];
  const hasMultipleCards = cards.length > 1;

  // Flip handler
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Navigation handlers with circular wrapping
  const handlePrevious = () => {
    if (isSliding) return; // Prevent navigation during slide

    const performSlide = () => {
      setSlideDirection('right'); // Slide in from right (going to previous)
      setIsSliding(true);

      // Change card content halfway through slide animation
      setTimeout(() => {
        setCurrentCardIndex((prev) => {
          if (prev === 0) {
            return cards.length - 1; // Wrap to last card
          }
          return prev - 1;
        });
      }, 150); // 150ms into the 300ms slide

      // Clear slide state after animation completes
      setTimeout(() => {
        setIsSliding(false);
        setSlideDirection(null);
      }, 300); // 300ms slide duration
    };

    // If card is flipped, flip it back first, then slide
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(performSlide, 600); // Wait for flip animation (600ms)
    } else {
      performSlide();
    }
  };

  const handleNext = () => {
    if (isSliding) return; // Prevent navigation during slide

    const performSlide = () => {
      setSlideDirection('left'); // Slide in from left (going to next)
      setIsSliding(true);

      // Change card content halfway through slide animation
      setTimeout(() => {
        setCurrentCardIndex((prev) => {
          if (prev === cards.length - 1) {
            return 0; // Wrap to first card
          }
          return prev + 1;
        });
      }, 150); // 150ms into the 300ms slide

      // Clear slide state after animation completes
      setTimeout(() => {
        setIsSliding(false);
        setSlideDirection(null);
      }, 300); // 300ms slide duration
    };

    // If card is flipped, flip it back first, then slide
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(performSlide, 600); // Wait for flip animation (600ms)
    } else {
      performSlide();
    }
  };

  // Keyboard handler for flip and navigation
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (hasMultipleCards) {
        handlePrevious();
      }
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (hasMultipleCards) {
        handleNext();
      }
    }
  };

  return (
    <div className="flashcards-student-view">
      <div
        className={`flashcard-container ${isFlipped ? 'flipped' : ''} ${isSliding ? `sliding-${slideDirection}` : ''}`}
        onClick={handleFlip}
        onKeyDown={handleKeyPress}
        role="button"
        tabIndex={0}
        aria-label={isFlipped ? 'Flip to front of card' : 'Flip to back of card'}
      >
        <div className="flashcard-inner">
          {/* Front Face */}
          <FlashcardFace className="flashcard-front">
            <div className="flashcard-content">
              <h2 className="flashcard-title">{currentCard.front_title}</h2>
              {currentCard.front_subtitle && (
                <p className="flashcard-subtitle">{currentCard.front_subtitle}</p>
              )}
            </div>
            <div className="flashcard-flip-icon">
              <Icon src={SwapHoriz} />
            </div>
          </FlashcardFace>

          {/* Back Face */}
          <FlashcardFace className="flashcard-back">
            <div className="flashcard-content">
              <div
                className="flashcard-back-text"
                dangerouslySetInnerHTML={{ __html: currentCard.back_text }}
              />
            </div>
            <div className="flashcard-flip-icon">
              <Icon src={SwapHoriz} />
            </div>
          </FlashcardFace>
        </div>
      </div>

      {/* Navigation Controls - Only show when 2+ cards */}
      {hasMultipleCards && (
        <div className="flashcard-navigation">
          <Button
            variant="tertiary"
            iconBefore={ArrowBack}
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            aria-label="Previous card"
          />

          <div className="flashcard-counter">
            {currentCardIndex + 1} / {cards.length}
          </div>

          <Button
            variant="tertiary"
            iconAfter={ArrowForward}
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next card"
          />
        </div>
      )}
    </div>
  );
};
