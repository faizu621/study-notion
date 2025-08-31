import React from "react"
import copy from "copy-to-clipboard"
import { toast } from "react-hot-toast"
import { BsFillCaretRightFill } from "react-icons/bs"
import { FaShareSquare } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { addToCart } from "../../../slices/cartSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"

// const CourseIncludes = [
//   "8 hours on-demand video",
//   "Full Lifetime access",
//   "Access on Mobile and TV",
//   "Certificate of completion",
// ]

function CourseDetailsCard({ course, setConfirmationModal, handleBuyCourse }) {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    thumbnail: ThumbnailImage,
    price: CurrentPrice,
    _id: courseId,
  } = course

  const handleShare = () => {
    copy(window.location.href)
    toast.success("Link copied to clipboard")
  }

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor. You can't buy a course.")
      return
    }
    if (token) {
      dispatch(addToCart(course))
      return
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to add To Cart",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }
  console.log("course",course);
  // console.log("Student already enrolled ", course?.studentsEnroled, user?._id)

  return (
    <>
      <div className="flex flex-col gap-4 rounded-md bg-richblack-700 p-3 sm:p-4 md:p-6 text-richblack-5 w-full max-w-lg mx-auto">
        {/* Course Image */}
        <img
          src={ThumbnailImage}
          alt={course?.courseName}
          className="w-full max-w-full max-h-[220px] sm:max-h-[260px] md:max-h-[300px] min-h-[120px] sm:min-h-[160px] md:min-h-[180px] overflow-hidden rounded-2xl object-cover mx-auto"
        />
        <div className="px-0 sm:px-2 md:px-4">
          <div className="space-x-2 pb-3 sm:pb-4 text-xl sm:text-2xl md:text-3xl font-semibold text-center sm:text-left">
            Rs. {CurrentPrice}
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <button
              className="yellowButton w-full"
              onClick={
                user && course?.studentsEnrolled.includes(user?._id)
                  ? () => navigate("/dashboard/enrolled-courses")
                  : handleBuyCourse
              }
            >
              {user && course?.studentsEnrolled.includes(user?._id)
                ? "Go To Course"
                : "Buy Now"}
            </button>
            {(!user || !course?.studentsEnrolled.includes(user?._id)) && (
              <button onClick={handleAddToCart} className="blackButton w-full">
                Add to Cart
              </button>
            )}
          </div>
          <div>
            <p className="pb-2 sm:pb-3 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-richblack-25">
              30-Day Money-Back Guarantee
            </p>
          </div>
          <div>
            <p className="my-2 text-base sm:text-lg md:text-xl font-semibold">
              This Course Includes :
            </p>
            <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-caribbeangreen-100">
              {course?.instructions?.map((item, i) => (
                <p className="flex gap-2" key={i}>
                  <BsFillCaretRightFill />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="text-center">
            <button
              className="mx-auto flex items-center gap-2 py-4 sm:py-6 text-yellow-100 text-sm sm:text-base"
              onClick={handleShare}
            >
              <FaShareSquare size={15} /> Share
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetailsCard
