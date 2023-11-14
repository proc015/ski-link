import { useState } from "react";

const StarRating = ({ rating, setRating, interactive = true }) => {
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    if (interactive) {
      setRating(index);
    }
  };

  const handleMouseEnter = (index) => {
    if (interactive) {
      setHover(index);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHover(rating);
    }
  };

  return (
    <div className="star-rating-container">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClickCapture={() => handleClick(index)}
            onClick={() => interactive && setRating(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(rating)}
          >
            <span className="star" >&#9733; </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
