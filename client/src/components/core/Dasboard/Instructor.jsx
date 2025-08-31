import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import React from 'react'
import { fetchInstructorCourses } from "../../../services/operations/CourseApi";
import { getInstructorData } from "../../../services/operations/profileAPI"
import InstructorChart from "./InstructorDashboard/InstructorChart"

export default function Instructor() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const [loading, setLoading] = useState(false)
  const [instructorData, setInstructorData] = useState(null)
  const [courses, setCourses] = useState([])
  const [totalStudents, setTotalStudents] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  // Fetch instructor data and courses here (not shown for brevity)

  return (
    <div className="w-full max-w-screen-xl mx-auto px-2 sm:px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-10 md:mb-14 text-richblack-5">Instructor Dashboard</h1>
      <div className="flex flex-col gap-4 sm:gap-6">
        {courses.length === 0 ? (
          <div className="text-richblack-5 text-base sm:text-lg">No courses found</div>
        ) : (
          courses.map((course) => (
            <div key={course._id} className="border border-richblack-700 rounded-md p-3 sm:p-4 bg-richblack-800 flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-8">
              <img src={course.thumbnail} alt={course.courseName} className="h-20 sm:h-28 md:h-32 w-20 sm:w-28 md:w-32 rounded-lg object-cover" />
              <div className="flex flex-col flex-1 gap-1 sm:gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-richblack-5">{course.courseName}</h2>
                  <div className="flex gap-1 sm:gap-2 items-center">
                    <span className="text-xs sm:text-sm text-richblack-300">{course.studentsEnrolled.length} students</span>
                    <span className="hidden sm:inline text-xs sm:text-sm text-richblack-300">|</span>
                    <span className="text-xs sm:text-sm text-richblack-300">{course.ratingAndReviews.length} reviews</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-richblack-300">{course.courseDescription}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                  <div className="flex gap-1 sm:gap-2 items-center">
                    <span className="text-xs sm:text-sm text-richblack-300">Created: {course.createdAt}</span>
                    <span className="hidden sm:inline text-xs sm:text-sm text-richblack-300">|</span>
                    <span className="text-xs sm:text-sm text-richblack-300">Last Updated: {course.updatedAt}</span>
                  </div>
                  <div className="flex gap-1 sm:gap-2">
                    <button className="px-2 py-1 text-xs sm:text-sm bg-yellow-100 text-richblack-900 rounded hover:bg-yellow-200 transition-all">View</button>
                    <button className="px-2 py-1 text-xs sm:text-sm bg-caribbeangreen-300 text-richblack-900 rounded hover:bg-caribbeangreen-200 transition-all">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Render chart / graph */}
      {totalAmount > 0 || totalStudents > 0 ? (
        <InstructorChart courses={instructorData} />
      ) : (
        <div className="flex-1 rounded-md bg-richblack-800 p-6">
          <p className="text-lg font-bold text-richblack-5">Visualize</p>
          <p className="mt-4 text-xl font-medium text-richblack-50">Not Enough Data To Visualize</p>
        </div>
      )}
      {/* Total Statistics */}
      <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6 mt-4">
        <p className="text-lg font-bold text-richblack-5">Statistics</p>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-lg text-richblack-200">Total Courses</p>
            <p className="text-3xl font-semibold text-richblack-50">{courses.length}</p>
          </div>
          <div>
            <p className="text-lg text-richblack-200">Total Students</p>
            <p className="text-3xl font-semibold text-richblack-50">{totalStudents}</p>
          </div>
          <div>
            <p className="text-lg text-richblack-200">Total Income</p>
            <p className="text-3xl font-semibold text-richblack-50">Rs. {totalAmount}</p>
          </div>
        </div>
      </div>
      {/* Render 3 courses */}
      <div className="rounded-md bg-richblack-800 p-6 mt-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-richblack-5">Your Courses</p>
          <Link to="/dashboard/my-courses">
            <p className="text-xs font-semibold text-yellow-50">View All</p>
          </Link>
        </div>
        <div className="my-4 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {courses.slice(0, 3).map((course) => (
            <div key={course._id} className="w-full sm:w-1/3">
              <img src={course.thumbnail} alt={course.courseName} className="h-32 sm:h-[201px] w-full rounded-md object-cover" />
              <div className="mt-3 w-full">
                <p className="text-sm font-medium text-richblack-50">{course.courseName}</p>
                <div className="mt-1 flex items-center space-x-2">
                  <p className="text-xs font-medium text-richblack-300">{course.studentsEnrolled.length} students</p>
                  <p className="text-xs font-medium text-richblack-300">|</p>
                  <p className="text-xs font-medium text-richblack-300">Rs. {course.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* If no courses at all */}
      {courses.length === 0 && (
        <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
          <p className="text-center text-2xl font-bold text-richblack-5">You have not created any courses yet</p>
          <Link to="/dashboard/add-course">
            <p className="mt-1 text-center text-lg font-semibold text-yellow-50">Create a course</p>
          </Link>
        </div>
      )}
    </div>
  )
}
