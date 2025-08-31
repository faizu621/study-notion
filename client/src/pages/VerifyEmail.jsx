import { useState, useEffect } from "react";
import * as React from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import authSlice from "../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { otpSend, signUp } from "../services/operations/authAPI";


const VerifyEmail = () => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) {
      navigate("/signup");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleVerifyAndSignup(e) {
    e.preventDefault();

    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center w-full px-2 py-8 bg-richblack-900">
      {loading ? (
        <div>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="w-full max-w-[500px] p-4 sm:p-6 md:p-8 bg-richblack-800 rounded-lg shadow-lg">
          <div className="text-richblack-5 font-semibold text-2xl sm:text-3xl md:text-[1.875rem] leading-tight text-center">Verify Email</div>
          <div className="text-base sm:text-lg md:text-[1.125rem] leading-snug my-4 text-richblack-100 text-center">A verification code has been sent to you. Enter the code below</div>
          <form onSubmit={handleVerifyAndSignup} className="flex flex-col gap-4">
            <OTPInput
              numInputs={6}
              value={otp}
              onChange={setOtp}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-8 sm:w-10 md:w-12 lg:w-[60px] border-0 bg-richblack-900 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
            />
            <button
              type="submit"
              className="w-full bg-yellow-50 py-3 px-4 rounded-md mt-4 font-medium text-richblack-900 text-base hover:bg-yellow-100 transition"
            >
              Verify Email
            </button>
          </form>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <Link to={"/signup"} className="w-full sm:w-auto">
              <p className="text-richblack-5 flex items-center gap-x-2 justify-center sm:justify-start">
                <BiArrowBack /> Back to Signup
              </p>
            </Link>
            <button
              className="flex items-center text-blue-100 gap-x-2 w-full sm:w-auto justify-center sm:justify-end"
              onClick={() => dispatch(otpSend(signupData.email, navigate))}
            >
              <RxCountdownTimer />
              Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default VerifyEmail;
