"use client"; //

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error loading reviews:", error));
  }, []);

  return (
    <section className="my-20  bg-[#ebedf4] shadow-2xl  rounded-xl">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              {/* Image Section */}
              {review.img && (
                <div className="pt-3">
                  <Image
                    src={review.img}
                    alt={review.name}
                    width={64}
                    height={64}
                    className="border-2 border-gray-600 rounded-full"
                  />
                </div>
              )}
              <p className="pt-3 font-semibold text-gray-700">
                <span className="text-black">From : </span>
                {review.location}
              </p>
              <p className="py-8 text-center">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
