import '../index.css';
import { type JSX, useState } from 'react';

// fast way to create array
const startsArray = Array.from({ length: 5 }, (_, i) => i + 1);

/**
 * Logs which star was clicked (for debugging/demo purposes).
 *
 * @param index - The index (1–5) of the star that was clicked.
 */
//const clicked = (index: number) => console.log(`Star: ${index} got clicked!`);

/**
 * Logs hover direction and index (for debugging/demo purposes).
 *
 * @param direction - The hover direction (enter or leave).
 * @param index - The index (1–5) of the hovered star.
 */
//const hovered = (direction: string, index: number) =>
//console.log('Hovered!', direction, index);


/**
 * Props for the {@link Rating} component.
 */
export interface RatingProps {
  /** The heading text displayed above the rating stars. */
  heading: string;
  /** The color used for active stars (default: `Gold`). */
  color?: string;
  /**
   * Feedback messages corresponding to the star rating.
   * The first item matches 1 star, the second item 2 stars, etc.
   */
  feedbackMessages?: string[];
}

/**
 * Default feedback messages for ratings from 1 to 5 stars.
 */
const feedbackMessagesArray = [
  'Terrible experience',
  'Bad experience',
  'Okay experience',
  'Good experience',
  'Excellent experience',
];

/**
 * A React component that renders a star-based rating system.
 *
 * @remarks
 * - Users can click on stars (1–5) to set a rating.
 * - Stars are highlighted on hover and selection.
 * - Displays a feedback message based on the selected rating.
 *
 * @param props - {@link RatingProps} containing the heading, color, and optional feedback messages.
 * @returns A JSX element rendering the rating UI.
 *
 * @example
 * ```tsx
 * <Rating heading="Rate your experience" color="orange" />
 * ```
 */
export const Rating = ({
                         heading,
                         color = 'Gold',
                         feedbackMessages = feedbackMessagesArray,
                       }: RatingProps): JSX.Element => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="star">
        {startsArray.map((star) => (
          <span
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            key={star}
            className={`star ${star <= (hover || rating) ? 'active' : ''}`}
            style={{
              color: star <= (hover || rating) ? color : '#ccc',
            }}
          >
            {'\u2605'}
          </span>
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
    </div>
  );
};

export default Rating;
