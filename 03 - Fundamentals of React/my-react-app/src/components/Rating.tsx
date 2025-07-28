import "../index.css";

const startsArray = Array.from({ length: 5 }, (_, i) => i + 1);

const clicked = (index: number) => console.log(`Star: ${index} got clicked!`);
const hovered = (direction: string, index: number) =>
  console.log("Hovered!", direction, index);

export const Rating = () => {
  return (
    <div className="rating-container">
      <h2>Rate your Experience</h2>
      <div className="star">
        {startsArray.map((star, index) => (
          <span
            onClick={() => clicked(index + 1)}
            onMouseEnter={() => hovered("enter", star)}
            onMouseLeave={() => hovered("leave", star)}
            key={star}
          >
            {"\u2605"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
