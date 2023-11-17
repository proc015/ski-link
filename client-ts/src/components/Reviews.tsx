
import StarRating from "./StarRating";
import { RatingsList } from "../types";


interface ReviewProps {
  review: RatingsList;
  interactive: boolean;
}

const Reviews: React.FC<ReviewProps> = ({ review, interactive }) => {

  return (
    <div className="review-container">
      <p id='name'> <b> {review.name} </b> </p>
      <p>
        <StarRating rating={review.score} interactive={interactive} /> </p>
      <p id="comment"> {review.comment} </p>
    </div>
  )
}

export default Reviews

