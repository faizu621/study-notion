import { useSelector } from "react-redux";
import * as React from "react";
import TotalAmount from "./TotalAmount";
import CartCourse from "./CartCourses";

const Cart = () => {
  const { totalItems, total } = useSelector((state) => state.cart);
  return (
    <div>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">Cart</h1>
      <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">
        {totalItems} Courses in Cart
      </p>
      {total > 0 ? (
        <div>
            <CartCourse/>
            <TotalAmount/>
        </div>
      ) : (
        <p className="mt-14 text-center text-3xl text-richblack-100">
          Your cart is empty
        </p>
      )}
    </div>
  );
};
export default Cart;
