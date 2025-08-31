import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import * as React from "react";
import { FaStar } from "react-icons/fa";
import { removeCart } from "../../../../slices/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import BuyCourse from "../../../../services/operations/studentFeaturesAPI";
import { useNavigate } from "react-router-dom";

const CartCourse = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const navigate=useNavigate();
  const { user } = useSelector((state) => state.profile)


  

  return (
    <div className="flex flex-1 flex-col w-full">
      {cart.map((course, indx) => (
        <div
          key={course._id}
          className={`flex flex-col sm:flex-row w-full items-start justify-between gap-4 sm:gap-6 ${
            indx !== cart.length - 1 ? "border-b border-b-richblack-400 pb-4 sm:pb-6" : ""
          } ${indx !== 0 ? "mt-4 sm:mt-6" : ""}`}
        >
          <div className="flex flex-col sm:flex-row flex-1 gap-3 sm:gap-4">
            <img
              src={course?.thumbnail}
              alt={course?.courseName}
              className="h-[120px] w-full sm:w-[220px] sm:h-[148px] rounded-lg object-cover"
            />
            <div className="flex flex-col space-y-1 mt-2 sm:mt-0">
              <p className="text-base sm:text-lg font-medium text-richblack-5">{course.courseName}</p>
              <p className="text-xs sm:text-sm text-richblack-300">{course?.category?.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-yellow-5 text-xs sm:text-base">4.5</p>
                <ReactStars
                  count={5}
                  value={course?.ratingAndReviews?.length}
                  size={16}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
                <span className="text-richblack-400 text-xs sm:text-sm">
                  {course?.ratingAndReviews?.length} Ratings
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col items-end sm:items-end space-x-2 sm:space-x-0 sm:space-y-2 w-full sm:w-auto mt-2 sm:mt-0">
            <button
              onClick={() => dispatch(removeCart(course._id))}
              className="flex items-center gap-x-1 rounded-md border border-richblack-600 bg-richblack-700 py-2 sm:py-3 px-3 sm:px-[12px] text-pink-200 text-xs sm:text-base"
            >
              <RiDeleteBin6Line />
              <span>Remove</span>
            </button>
            <p className="mb-0 sm:mb-6 text-xl sm:text-3xl font-medium text-yellow-100">{course?.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartCourse;
