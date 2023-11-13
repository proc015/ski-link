import { useEffect, useState } from "react";
import { getReviews } from "../apiService";
import Reviews from "./Reviews";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';




const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

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
    
      {reviews.map((review) => (
        <SwiperSlide key={review._id}> 
        <Reviews review={review} />
        </SwiperSlide>
      ))}
      
      </Swiper>
  );
};

export default ReviewList;
