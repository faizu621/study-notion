// import { Link } from "react-router-dom";
// import RatingStars from "../../common/RatingStars"
// import { useState } from "react";
// const CourseCard = ({ course, Height }) => {
//     //console.log("course",course);
//   const [avgReviewCount, setAvgReviewCount] = useState(0);
//   return (
//     <>
//       <Link to={`/courses/${course._id}`}>
//         <div className=" bg-richblack-800 p-3 rounded-md ">
//           <div>
//             <img
//               src={course?.thumbnail}
//               alt="course thumbnail"
//               className={`${Height} w-full rounded-xl object-cover `}
//             />
//           </div>
//           <div className="flex flex-col gap-2 px-1 py-3">
//             <p className=" text-xl text-richblack-5 ">{course?.courseName}</p>
//             <p className=" text-sm text-richblack-50 " >
//               {course?.instructor?.firstName}{" "}
//               {course?.instructor?.lastName}
//             </p>
//           </div>

//           <div className="  flex gap-2 items-center ">
//             <span className="text-yellow-5 ">{avgReviewCount || 0}</span>
//             <RatingStars Review_Count={avgReviewCount} />
//             <span className="text-richblack-400">
//               {course?.ratingAndReviews?.length} Ratings
//             </span>
//           </div>
//           <p className="text-xl text-richblack-5">RS. {course?.price}</p>
//         </div>
//       </Link>
//     </>
//   );
// };

// export default CourseCard;


import React, { useEffect, useState } from "react";
// Icons
//import { FaRegStar, FaStar } from "react-icons/fa"
//import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"

//import GetAvgRating from "../../../utils/avgRating"
import RatingStars from "../../common/RatingStars"

function CourseCard({ course, Height }) {
  // const avgReviewCount = GetAvgRating(course.ratingAndReviews)
  // console.log(course.ratingAndReviews)
  const [avgReviewCount, setAvgReviewCount] = useState(0)
  // useEffect(() => {
  //   const count = GetAvgRating(course.ratingAndReviews)
  //   setAvgReviewCount(count)
  // }, [course])
  // console.log("count............", avgReviewCount)

  return (
    <Link to={`/courses/${course._id}`} className="block h-full">
      <div className="bg-richblack-800 p-2 sm:p-3 md:p-4 rounded-lg h-full flex flex-col transition-shadow hover:shadow-lg">
        <div className="rounded-lg overflow-hidden">
          <img
            src={course?.thumbnail}
            alt="course thumbnail"
            className={`${Height} w-full rounded-xl object-cover`}
          />
        </div>
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 px-1 py-2 sm:py-3 md:py-4 flex-1">
          <p className="text-sm sm:text-base md:text-lg font-semibold text-richblack-5 truncate">{course?.courseName}</p>
          <p className="text-xs sm:text-sm text-richblack-50 truncate">
            {course?.instructor?.firstName} {course?.instructor?.lastName}
          </p>
          <div className="flex items-center gap-1 sm:gap-2 mt-1">
            <span className="text-yellow-5 text-xs sm:text-sm">{avgReviewCount || 0}</span>
            <RatingStars Review_Count={avgReviewCount} />
            <span className="text-richblack-400 text-xs sm:text-sm">
              {course?.ratingAndReviews?.length} Ratings
            </span>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-richblack-5 font-bold mt-1">Rs. {course?.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard
