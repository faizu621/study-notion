import React, { useEffect, useState } from "react"
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
//import { BuyCourse } from "../services/operations/studentFeaturesAPI"

import ConfirmationModal from "../components/core/Dasboard/ConfirmationModal"
import Footer from "../components/common/Footer"
import RatingStars from "../components/common/RatingStars"
import CourseAccordionBar from "../components/core/Course/CourseAccordionBar"
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard"
import { formatDate } from "../services/formateDate"
import { fetchCourseDetails } from "../services/operations/CourseApi"
import BuyCourse  from "../services/operations/studentFeaturesAPI"
import GetAvgRating from "../utils/avgRating";
import Error from "./Error"

function CourseDetails() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const { loading } = useSelector((state) => state.profile)
  const { paymentLoading } = useSelector((state) => state.course)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Getting courseId from url parameter
  const { courseId } = useParams()
  // console.log(`course id: ${courseId}`)

  // Declear a state to save the course details
  const [response, setResponse] = useState(null)
  const [confirmationModal, setConfirmationModal] = useState(null)
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    ;(async () => {
      try {
        const res = await fetchCourseDetails(courseId)
        // console.log("course details res: ", res)
        setResponse(res)
      } catch (error) {
        console.log("Could not fetch Course Details")
      }
    })()
  }, [courseId])

  // console.log("response: ", response)

  // Calculating Avg Review count
  const [avgReviewCount, setAvgReviewCount] = useState(0)
  useEffect(() => {
    const count = GetAvgRating(response?.data?.courseDetails[0].ratingAndReviews)
    setAvgReviewCount(count)
  }, [response])
  // console.log("avgReviewCount: ", avgReviewCount)

  // // Collapse all
  // const [collapse, setCollapse] = useState("")
  const [isActive, setIsActive] = useState(Array(0))
  const handleActive = (id) => {
    // console.log("called", id)
    setIsActive(
      !isActive.includes(id)
        ? isActive.concat([id])
        : isActive.filter((e) => e != id)
    )
  }

  // Total number of lectures
  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0)
  useEffect(() => {
    let lectures = 0
    response?.data?.courseDetails[0]?.courseContent?.forEach((sec) => {
      lectures += sec.subsection.length || 0
    })
    setTotalNoOfLectures(lectures)
  }, [response])

  if (loading || !response) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
  if (!response.success) {
    return <Error />
  }
  console.log("response",response?.data?.courseDetails[0]);
  const {
    _id: course_id,
    courseName,
    courseDescription,
    thumbnail,
    price,
    whatWillYouLearn,
    courseContent,
    ratingAndReviews,
    instructor,
    studentsEnrolled,
    createdAt,
  } = response.data?.courseDetails[0];

  console.log("instructor",instructor);
  const handleBuyCourse = () => {
    if (token) {
      BuyCourse(token, [courseId], user, navigate, dispatch)
      return
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to Purchase Course.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }

  if (paymentLoading) {
    // console.log("payment loading")
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <>
      <div className="relative w-full bg-richblack-800">
        {/* Hero Section */}
        <div className="mx-auto box-content px-2 sm:px-4 w-full max-w-screen-xl 2xl:relative">
          <div className="mx-auto grid min-h-[320px] sm:min-h-[450px] max-w-3xl justify-items-center py-6 sm:py-8 lg:mx-0 lg:justify-items-start xl:max-w-[810px]">
            <div className="relative block max-h-[20rem] sm:max-h-[30rem] w-full lg:hidden">
              <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
              <img
                src={thumbnail}
                alt="course thumbnail"
                className="aspect-auto w-full rounded-lg"
              />
            </div>
            <div
              className="z-30 my-4 flex flex-col justify-center gap-3 sm:gap-4 py-4 text-base sm:text-lg text-richblack-5 w-full"
            >
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-richblack-5">
                  {courseName}
                </p>
              </div>
              <p className="text-richblack-200 text-sm sm:text-base">{courseDescription}</p>
              <div className="text-sm sm:text-md flex flex-wrap items-center gap-2">
                <span className="text-yellow-25">{avgReviewCount}</span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={20} />
                <span>{`(${ratingAndReviews?.length} reviews)`}</span>
                <span>{`${studentsEnrolled?.length} students enrolled`}</span>
              </div>
              <div>
                <p>
                  Created By {`${instructor?.firstName} ${instructor?.lastName}`}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-5 text-sm sm:text-lg">
                <p className="flex items-center gap-2">
                  <BiInfoCircle /> Created at {formatDate(createdAt)}
                </p>
                <p className="flex items-center gap-2">
                  <HiOutlineGlobeAlt /> English
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 sm:gap-4 border-y border-y-richblack-500 py-3 sm:py-4 lg:hidden">
              <p className="pb-2 sm:pb-4 text-xl sm:text-2xl font-semibold text-richblack-5">
                Rs. {price}
              </p>
              <button className="yellowButton" onClick={handleBuyCourse}>
                Buy Now
              </button>
              <button className="blackButton">Add to Cart</button>
            </div>
          </div>
          {/* Courses Card */}
          <div className="right-4 top-[60px] mx-auto hidden min-h-[400px] w-1/3 max-w-xs translate-y-24 md:translate-y-0 lg:absolute lg:block">
            <CourseDetailsCard
              course={response?.data?.courseDetails[0]}
              setConfirmationModal={setConfirmationModal}
              handleBuyCourse={handleBuyCourse}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto box-content px-2 sm:px-4 text-start text-richblack-5 w-full max-w-screen-xl">
        <div className="mx-auto max-w-3xl lg:mx-0 xl:max-w-[810px]">
          {/* What will you learn section */}
          <div className="my-6 sm:my-8 border border-richblack-600 p-4 sm:p-8 rounded-lg">
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">What you'll learn</p>
            <div className="mt-3 sm:mt-5">
              <ReactMarkdown>{whatWillYouLearn}</ReactMarkdown>
            </div>
          </div>

          {/* Course Content Section */}
          <div className="max-w-2xl">
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold">Course Content</p>
              <div className="flex flex-wrap justify-between gap-2">
                <div className="flex gap-2 text-xs sm:text-sm">
                  <span>
                    {courseContent?.length} {`section(s)`}
                  </span>
                  <span>
                    {totalNoOfLectures} {`lecture(s)`}
                  </span>
                  <span>{response.data?.totalDuration} total length</span>
                </div>
                <div>
                  <button
                    className="text-yellow-25 text-xs sm:text-sm"
                    onClick={() => setIsActive([])}
                  >
                    Collapse all sections
                  </button>
                </div>
              </div>
            </div>

            {/* Course Details Accordion */}
            <div className="py-3 sm:py-4">
              {courseContent?.map((course, index) => (
                <CourseAccordionBar
                  course={course}
                  key={index}
                  isActive={isActive}
                  handleActive={handleActive}
                />
              ))}
            </div>

            {/* Author Details */}
            <div className="mb-8 sm:mb-12 py-3 sm:py-4">
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold">Author</p>
              <div className="flex items-center gap-3 sm:gap-4 py-3 sm:py-4">
                <img
                  src={
                    instructor?.image
                      ? instructor.image
                      : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor?.firstName} ${instructor?.lastName}`
                  }
                  alt="Author"
                  className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover"
                />
                <p className="text-base sm:text-lg">{`${instructor?.firstName} ${instructor?.lastName}`}</p>
              </div>
              <p className="text-xs sm:text-sm text-richblack-50">
                {instructor?.additionalDetails?.about}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}

export default CourseDetails
