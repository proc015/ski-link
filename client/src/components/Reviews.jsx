
import StarRating from "./StarRating"

const Reviews = ({review}) => {
  return (
    <div className="review-container">
        <p> {review.name}</p>
        < StarRating rating={review.score} />
        <p> {review.comment} </p>
    </div>
  )
}

export default Reviews
