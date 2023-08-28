import { useSelector } from "react-redux";
import IconBtn from "../../../common/IconBtn";
import * as React from "react";

const TotalAmount = () => {
  const { total } = useSelector((state) => state.cart);
  return (
    <div>
      <p>Total</p>
      <p>RS.{total}</p>
      <IconBtn text={"Buy Now"}/>
    </div>
  );
};

export default TotalAmount;
