import { useEffect, useState } from "react";
import { getReviews } from "../apiService";
import Reviews from "./Reviews";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { RatingsList } from "../types";
import 'swiper/css';
import 'swiper/css/navigation';


const ReviewList = () => {
  const [reviews, setReviews] = useState<RatingsList[]>([]);

  useEffect(() => {
    getReviews().then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
    >

      {reviews.map((review: RatingsList) => (
        <SwiperSlide key={review._id}>
          <Reviews review={review} interactive={false} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewList;