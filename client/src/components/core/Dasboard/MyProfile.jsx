import React from "react";
import { useSelector } from "react-redux";
import IconBtn from "../../common/IconBtn";
import { RiEditBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { fetchInstructorCourses } from "../../../services/operations/CourseApi";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  console.log("user",user);
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-screen-xl mx-auto px-2 sm:px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-10 md:mb-14 text-richblack-5">My Profile</h1>
      {/* section 1 */}
      <div className="p-3 sm:p-4 md:p-8 flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-4 border border-richblack-700 bg-richblack-800 rounded-md">
        <div className="flex items-center gap-x-3 sm:gap-x-4">
          <img
            src={user?.image}
            className="aspect-square w-12 sm:w-16 md:w-[78px] rounded-full object-cover"
            alt="Profile"
          />
          <div className="space-y-1">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-richblack-5">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs sm:text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <div className="mt-3 sm:mt-0">
          <IconBtn text={"Edit"} onclick={() => navigate("/dashboard/settings")}> <RiEditBoxLine /> </IconBtn>
        </div>
      </div>
      {/* section 2 */}
      <div className="my-4 sm:my-6 md:my-10 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-10 rounded-md border border-richblack-700 bg-richblack-800 p-3 sm:p-4 md:p-8">
        <div className="flex w-full items-center justify-between">
          <p className="text-sm sm:text-base md:text-lg font-semibold text-richblack-5">About</p>
          <IconBtn text="Edit" onclick={() => { navigate("/dashboard/settings"); }}><RiEditBoxLine /></IconBtn>
        </div>
        <p className={`${user?.additionalDetails?.about ? "text-richblack-5" : "text-richblack-400"} text-xs sm:text-sm font-medium`}>
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      {/* section 3 */}
      <div className="my-4 sm:my-6 md:my-10 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-10 rounded-md border border-richblack-700 bg-richblack-800 p-3 sm:p-4 md:p-8">
        <div className="flex items-center justify-between w-full">
          <p className="text-sm sm:text-base md:text-lg font-semibold text-richblack-5">Personal Details</p>
          <IconBtn text={"Edit"} onclick={() => navigate("/dashboard/settings")}> <RiEditBoxLine /> </IconBtn>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-3 sm:gap-4 w-full">
          <div className="flex flex-col gap-y-2 sm:gap-y-4 w-full md:w-1/2">
            <div className="space-y-1">
              <p className="text-xs sm:text-sm text-richblack-300">First Name</p>
              <p className="text-sm sm:text-base text-richblack-5">{user?.firstName}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs sm:text-sm text-richblack-300">Email</p>
              <p className="text-sm sm:text-base text-richblack-5">{user?.email}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs sm:text-sm text-richblack-300">Gender</p>
              <p className="text-sm sm:text-base text-richblack-5">{user?.additionalDetails?.gender ?? "Add Gender"}</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 sm:gap-y-4 w-full md:w-1/2">
            <div className="space-y-1">
              <p className="text-xs sm:text-sm text-richblack-300">Last Name</p>
              <p className="text-sm sm:text-base text-richblack-5 font-medium">{user?.lastName}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs sm:text-sm text-richblack-300">Contact Number</p>
              <p className="text-sm sm:text-base text-richblack-5">{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs sm:text-sm text-richblack-300">Date of Birth</p>
              <p className="text-sm sm:text-base text-richblack-5">{user?.additionalDetails?.dateOfBirth ? user?.additionalDetails?.dateOfBirth : "Add Date of Birth "}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
