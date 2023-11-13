import { useEffect, useState } from "react";
import { getReviews } from "../apiService";
import Reviews from "./Reviews";


const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <div className="reviewList-container">
      {reviews.map((review) => {
        return <Reviews key={review._id} review={review} />;
      })}
    </div>
  );
};

export default ReviewList;
