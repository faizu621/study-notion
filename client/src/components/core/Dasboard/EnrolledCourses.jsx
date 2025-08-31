import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../services/operations/profileAPI";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(null);
  const { token } = useSelector((state) => state.auth);

  
  const navigate=useNavigate();

  async function getEnrolledCourse() {
    try {
      const res = await getUserEnrolledCourses(token);
      //const filterPublishCourse = res.filter( (ele) => ele.status !== "Draft");
      console.log("res ",res);
      setEnrolledCourses(res);
    } catch (error) {
      console.log("Eroor", error);
    }
  }

  useEffect(() => {
    getEnrolledCourse();
  }, []);

  console.log("enrolled course ",enrolledCourses);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-2 sm:px-4">
      <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-richblack-50 mb-3 sm:mb-4">Enrolled Courses</div>
      {!enrolledCourses ? (
        <div>Loading</div>
      ) : !enrolledCourses.length ? (
        <div className="grid h-[10vh] w-full place-content-center text-richblack-5 text-sm sm:text-base">
          You have not enrolled in any courses
        </div>
      ) : (
        <div className="my-4 sm:my-6 md:my-8 text-richblack-5 w-full overflow-x-auto">
          <div className="hidden sm:flex rounded-t-lg bg-richblack-500 text-xs sm:text-sm">
            <div className="w-[45%] px-2 sm:px-3 md:px-5 py-2 sm:py-3">Course Name</div>
            <div className="w-1/4 px-2 py-2 sm:py-3">Duration</div>
            <div className="flex-1 px-2 py-2 sm:py-3">Progress</div>
          </div>
          <div className="flex flex-col gap-2">
            {enrolledCourses.map((course, i, arr) => (
              <div
                className={`flex flex-col sm:flex-row items-start sm:items-center border border-richblack-700 ${i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"}`}
                key={i}
              >
                <div
                  className="flex w-full sm:w-[45%] cursor-pointer items-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-5 py-2 sm:py-3"
                  onClick={() => {
                    navigate(
                      `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subsection?.[0]?._id}`
                    )
                  }}
                >
                  <img
                    src={course?.thumbnail}
                    alt="course_img"
                    className="h-10 w-10 sm:h-14 sm:w-14 rounded-lg object-cover"
                  />
                  <div className="flex max-w-xs flex-col gap-1 sm:gap-2">
                    <p className="font-semibold text-sm sm:text-base">{course.courseName}</p>
                    <p className="text-xs text-richblack-300">
                      {course.courseDescription.length > 50
                        ? `${course.courseDescription.slice(0, 50)}...`
                        : course.courseDescription}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/4 px-2 py-2 sm:py-3 text-xs sm:text-base">{course?.totalDuration}</div>
                <div className="flex w-full sm:w-1/5 flex-col gap-1 sm:gap-2 px-2 py-2 sm:py-3">
                  <p className="text-xs sm:text-base">Progress: {course.progressPercentage || 0}%</p>
                  <ProgressBar
                    completed={course.progressPercentage || 0}
                    height="8px"
                    isLabelVisible={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;
