import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import * as React from 'react'
import { FaStar } from "react-icons/fa";
import { removeCart } from "../../../../slices/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartCourse = () => {
    const dispatch=useDispatch();
  const { cart } = useSelector((state) => state.cart);
  return (
    <div>
      {cart.map((course, i) => (
        <div>

          <div>
            <img src={course?.thumbnail} />
            <div>
              <p>{course.courseName}</p>
              <p>{course?.category?.name}</p>

              <div>
                {/* hardcode */}
                <p>4.5</p>
                <ReactStars
                    count={5}
                    value={course?.ratingAndReviews?.length}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar/>}
                    fullIcon={<FaStar/>}
                />
                <span className="text-richblack-400">
                  {course?.ratingAndReviews?.length} Ratings
                </span>
              </div>
            </div>
          </div>

          <div>
            <button onClick={()=>dispatch(removeCart(course._id))}>
                <RiDeleteBin6Line/>
                <span>Remove</span>
            </button>
            <p>
                {course?.price}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default CartCourse;
