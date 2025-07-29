import '../index.css';
import {type JSX, useState} from 'react';
import Star from './Star.tsx';
import Modal from './modal.tsx';
import Button from './Button.tsx';

// Create an array of 5 stars [1, 2, 3, 4, 5]
const startsArray = Array.from({length: 5}, (_, i) => i + 1);

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
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = () => {
        if (rating > 0) {
            setSubmitted(true);
        }
    };

    const closeModal = () => {
        setSubmitted(false);
        setRating(0);
        setHover(0);
    };

    return (
        <div className="rating-container">
            <h2>{heading}</h2>
            <div className="star">
                {startsArray.map((star) => (
                    <Star
                        key={star}
                        star={star}
                        rating={rating}
                        hover={hover}
                        color={color}
                        ratingClick={setRating}
                        hoverEnter={setHover}
                        hoverLeaver={() => setHover(0)}
                    />
                ))}
            </div>
            {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}

            <Button
                className="submit-btn"
                disabled={rating === 0}
                onClick={handleSubmit}
            >
                Submit
            </Button>
            {/* <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </button> */}
            <Modal isOpen={submitted} onClose={closeModal} rating={rating}/>
        </div>
    );
};

export default Rating;
