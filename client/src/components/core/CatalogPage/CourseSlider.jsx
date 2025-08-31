import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "./CourseCard";
import {FreeMode, Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const CourseSlider = ({ courses }) => {
  //console.log("courses", courses);
  return (
    <div className="w-full">
      {courses?.length ? (
        <Swiper
          spaceBetween={8}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 8 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          loop={true}
          modules={[FreeMode, Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {courses.map((course, i) => (
            <SwiperSlide key={i}>
              <div className="px-1 sm:px-2 py-2 sm:py-4 h-full flex items-stretch">
                <CourseCard course={course} Height="h-[160px] sm:h-[200px] md:h-[220px] lg:h-[250px]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-sm sm:text-base md:text-xl text-richblack-5">No Course Found</p>
      )}
    </div>
  );
};
export default CourseSlider;
