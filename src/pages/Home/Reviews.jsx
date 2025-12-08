import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import comment from "../../assets/reviewQuote.png";
const userReviews = [
  {
    reviewerImage:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewerName: "Rahim Uddin",
    reviewerReview:
      "Loanlink provides quick loan approval and the entire process feels very easy and hassle-free.",
  },
  {
    reviewerImage:
      "https://images.unsplash.com/photo-1602442787305-decbd65be507?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewerName: "Fatima Khan",
    reviewerReview:
      "Document verification was clear, there was no hassle. The service is truly user-friendly and fast.",
  },
  {
    reviewerImage:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewerName: "Sohan Ali",
    reviewerReview:
      "Getting a loan from Loanlink is very easy, and their support team was extremely helpful.",
  },
  {
    reviewerImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewerName: "Nusrat Jahan",
    reviewerReview:
      "Interest rates are transparent, everything is clearly displayed. Very satisfied with Loanlink's service.",
  },
  {
    reviewerImage:
      "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reviewerName: "Arif Chowdhury",
    reviewerReview:
      "Loan disbursement was fast and all information is easily accessible on the dashboard.",
  },
];
const Reviews = () => {
  return (
    <div className="md:w-10/12 mx-auto">
      <div className="text-center gap-4">
        <h1 className="text-red-500 font-bold">-- Customer Testimonials</h1>
        <h1 className="text-2xl md:text-3xl font-bold">
          What our customers are sayings
        </h1>
      </div>
      <Swiper
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={[3]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper mt-5"
      >
        <div className="hidden">
          {userReviews.map((review) => (
            <SwiperSlide className="bg-base-100 rounded-2xl p-5 border-l-7 border-red-500 shadow-2xl">
              <img src={comment} alt="" />
              <p>{review.reviewerReview}</p>
              <h1 className="border border-dashed my-2 border-gray-400"></h1>
              <div className="flex items-center gap-2">
                <img
                  src={review.reviewerImage}
                  alt=""
                  className="w-15 h-15 object-cover rounded-full mt-2"
                />
                <div className="">
                  <h1 className="text-2xl font-bold">{review.reviewerName}</h1>
                  <h2>{review.user_email}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Reviews;
