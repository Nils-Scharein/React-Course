import type {JSX} from "react";

/**
 * Props for the {@link Star} component.
 */
export interface StarProps {
    /** The current star number (1–5). */
    star: number;
    /** The currently selected rating value. */
    rating: number;
    /** The star value currently being hovered. */
    hover: number;
    /** The color used for active (highlighted) stars. */
    color: string;
    /** Callback function triggered when the star is clicked. */
    ratingClick: (star: number) => void;
    /** Callback function triggered when the mouse enters (hovers over) the star. */
    hoverEnter: (value: number) => void;
    /** Callback function triggered when the mouse leaves (hover is removed) from the star. */
    hoverLeaver: () => void;
}

/**
 * A single star component used as part of a star rating system.
 *
 * @remarks
 * - The star changes color when hovered or if the current rating is greater than or equal to this star's number.
 * - Clicking on the star triggers the `ratingClick` callback with the star's value.
 * - Hover events call `hoverEnter` and `hoverLeaver` to manage hover state in the parent component.
 *
 * @param props - The {@link StarProps} including the star number, rating state, hover state, and callbacks.
 * @returns A JSX element representing a single interactive star.
 *
 * @example
 * ```tsx
 * <Star
 *   star={1}
 *   rating={3}
 *   hover={2}
 *   color="gold"
 *   ratingClick={(s) => console.log(`Star clicked: ${s}`)}
 *   hoverEnter={(s) => console.log(`Hover over: ${s}`)}
 *   hoverLeaver={() => console.log('Hover left')}
 * />
 * ```
 */
const Star = ({star, rating, hover, color, ratingClick, hoverEnter, hoverLeaver}: StarProps): JSX.Element => {
    return (
        <span
            onClick={() => ratingClick(star)}
            onMouseEnter={() => hoverEnter(star)}
            onMouseLeave={hoverLeaver}
            className="star"
            style={{
                color: star <= (hover || rating) ? color : "#ccc",
            }}
        >
            {'\u2605'}
        </span>
    );
};

export default Star;
