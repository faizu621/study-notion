import { useSelector } from "react-redux";
import IconBtn from "../../../common/IconBtn";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BuyCourse from "../../../../services/operations/studentFeaturesAPI";
const TotalAmount = () => {
  
  const { total, cart } = useSelector((state) => state.cart)
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course._id)
    BuyCourse(token, courses, user, navigate, dispatch)
  }
  return (
    <div className="w-full min-w-[220px] sm:min-w-[280px] rounded-md border border-richblack-700 bg-richblack-800 p-4 sm:p-6 flex flex-col items-center">
      <p className="mb-1 text-xs sm:text-sm font-medium text-richblack-300">Total</p>
      <p className="mb-6 text-2xl sm:text-3xl font-medium text-yellow-100">RS.{total}</p>
      <IconBtn text={"Buy Now"}
        customClasses="w-full justify-center"
        onclick={handleBuyCourse}
      />
    </div>
  );
};

export default TotalAmount;
