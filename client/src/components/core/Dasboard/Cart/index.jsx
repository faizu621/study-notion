import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import TotalAmount from "./TotalAmount";
import CartCourse from "./CartCourses";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const {cart}=useSelector((state)=> state.cart);
  const {user}=useSelector((state)=> state.profile)
  const dispatch=useDispatch();
  const navigate=useNavigate();

  // const handleBuyCourse = () => {
  //   if (token) {
  //     BuyCourse(token, cart , user, navigate, dispatch)
  //     return
  //   }
  //   setConfirmationModal({
  //     text1: "You are not logged in!",
  //     text2: "Please login to Purchase Course.",
  //     btn1Text: "Login",
  //     btn2Text: "Cancel",
  //     btn1Handler: () => navigate("/login"),
  //     btn2Handler: () => setConfirmationModal(null),
  //   })
  // }
  const { totalItems, total } = useSelector((state) => state.cart);
  return (
    <div className="w-full px-2 sm:px-4 md:px-8">
      <h1 className="mb-8 sm:mb-14 text-2xl sm:text-3xl font-medium text-richblack-5">Cart</h1>
      <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400 text-sm sm:text-base">
        {totalItems} Courses in Cart
      </p>
      {total > 0 ? (
        <div className="mt-6 sm:mt-8 flex flex-col-reverse items-start gap-x-0 sm:gap-x-10 gap-y-6 lg:flex-row">
          <div className="w-full lg:w-3/4">
            <CartCourse/>
          </div>
          <div className="w-full lg:w-1/4">
            <TotalAmount/>
          </div>
        </div>
      ) : (
        <p className="mt-10 sm:mt-14 text-center text-2xl sm:text-3xl text-richblack-100">
          Your cart is empty
        </p>
      )}
    </div>
  );
};
export default Cart;
