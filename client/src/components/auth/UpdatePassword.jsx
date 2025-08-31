import React, { useState } from "react";
import { BiHide,BiShow,BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updatePassword } from "../../services/operations/authAPI";

const UpdatePassword = () => {
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);

    const [password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");

    const {loading} =useSelector((state) => state.auth)

    const dispatch=useDispatch();
    const location =useLocation();
    const navigate=useNavigate();

    function handleOnSubmit(e){
        e.preventDefault();
        const token=location.pathname.split("/").at(-1);
        console.log("token",token);
        dispatch(updatePassword(password,confirmPassword,token,navigate))
    }


  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center w-full px-2 py-8 bg-richblack-900">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="w-full max-w-[500px] p-4 sm:p-6 md:p-8 bg-richblack-800 rounded-lg shadow-lg">
          <div className="text-2xl sm:text-3xl md:text-[1.875rem] font-semibold leading-tight text-richblack-5 text-center">Choose New Password</div>
          <div className="my-4 text-base sm:text-lg md:text-[1.125rem] leading-snug text-richblack-100 text-center">Almost done. Enter your new password and you're all set.</div>
          <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
            <label className="relative w-full">
              <p className="text-white text-sm sm:text-base">New Password<sup className="text-pink-200">*</sup></p>
              <input type={showPassword ? "text" : "password"} required placeholder="Enter Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="bg-richblack-900 py-3 px-3 rounded-md mt-1 w-full text-richblack-5 text-sm sm:text-base" />
              <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] sm:top-[42px] cursor-pointer">
                {showPassword ? (<BiHide fill="#AFB2BF" fontSize={24} />) : (<BiShow fill="#AFB2BF" fontSize={24} />)}
              </span>
            </label>
            <label className="relative w-full">
              <p className="text-white text-sm sm:text-base">Confirm New Password<sup className="text-pink-200">*</sup></p>
              <input type={showConfirmPassword ? "text" : "password"} required placeholder="Enter Password" name="confirmPassword" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} className="bg-richblack-900 py-3 px-3 rounded-md mt-1 w-full text-richblack-5 text-sm sm:text-base" />
              <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-[38px] sm:top-[42px] cursor-pointer">
                {showConfirmPassword ? (<BiHide fill="#AFB2BF" fontSize={24} />) : (<BiShow fill="#AFB2BF" fontSize={24} />)}
              </span>
            </label>
            <button className="mt-4 w-full rounded-md bg-yellow-50 py-3 px-4 font-medium text-richblack-900 text-base hover:bg-yellow-100 transition" type="submit">Reset Password</button>
          </form>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <Link to="/login" className="w-full sm:w-auto">
              <p className="flex items-center gap-x-2 text-richblack-5 justify-center sm:justify-start">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default UpdatePassword;
