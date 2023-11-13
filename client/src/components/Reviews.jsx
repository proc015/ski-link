

const Reviews = ({review}) => {
  return (
    <div>
        <p> {review.name}</p>
        <p> {review.score} </p>
        <p> {review.comment} </p>
    </div>
  )
}

export default Reviews
