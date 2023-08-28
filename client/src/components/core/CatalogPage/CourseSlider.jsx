import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "./CourseCard";

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import {FreeMode,Pagination} from "swiper";

const CourseSlider = ({ courses }) => {
  console.log("courses", courses);
  return (
    <>
      {/* {courses?.length ? (
        <Swiper
        >
          {courses.map((course) => (
            <SwiperSlide>
              <CourseCard course={course} Height={"h-[250px]"}/>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )} */}

      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="text-richblack-25 "
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      ...
    </Swiper>
    </>
  );
};
export default CourseSlider;
