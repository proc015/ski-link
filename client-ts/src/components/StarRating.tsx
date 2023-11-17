import { useState } from "react";

interface StarRatingProps {
  rating: number;
  interactive: boolean;
  setRating?: (newRating: number) => void;
}


const StarRating: React.FC<StarRatingProps> = ({ rating, interactive, setRating }) => {
  const [hover, setHover] = useState<number>(0);

  const handleClick = (index: number) => {
    if (interactive && setRating) {
      setRating(index);
    }
  };

  const handleMouseEnter = (index: number) => {
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
            onClick={() => interactive && setRating && setRating(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            // onMouseLeave={() => handleMouseLeave(rating)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="star" >&#9733; </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
