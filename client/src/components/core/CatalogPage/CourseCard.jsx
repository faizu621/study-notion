import { Link } from "react-router-dom";
import RatingStars from "../../common/RatingStars"
import { useState } from "react";
const CourseCard = ({ course, Height }) => {
    //console.log("course",course);
  const [avgReviewCount, setAvgReviewCount] = useState(0);
  return (
    <>
      <Link>
        <div className=" bg-richblack-800 p-3 rounded-md ">
          <div>
            <img
              src={course?.thumbnail}
              alt="course thumbnail"
              className={`${Height} w-full rounded-xl object-cover `}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className=" text-xl text-richblack-5 ">{course?.courseName}</p>
            <p className=" text-sm text-richblack-50 " >
              {course?.instructor?.firstName}{" "}
              {course?.instructor?.lastName}
            </p>
          </div>

          <div className="  flex gap-2 items-center ">
            <span className="text-yellow-5 ">{avgReviewCount || 0}</span>
            <RatingStars Review_Count={avgReviewCount} />
            <span className="text-richblack-400">
              {course?.ratingAndReviews?.length} Ratings
            </span>
          </div>
          <p className="text-xl text-richblack-5">RS. {course?.price}</p>
        </div>
      </Link>
    </>
  );
};

export default CourseCard;
