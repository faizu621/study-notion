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
    <div>
      <div className="text-3xl text-richblack-50">Enrolled Courses</div>
      {!enrolledCourses ? (
        <div>Loading</div>
      ) : !enrolledCourses.length ? (
        <div className="grid h-[10vh] w-full place-content-center text-richblack-5">
          You have not enrolled in any courses{" "}
        </div>
      ) : (
        <div className="my-8 text-richblack-5">
          <div className="flex rounded-t-lg bg-richblack-500 ">
            <div className="w-[45%] px-5 py-3">Course Name</div>
            <div className="w-1/4 px-2 py-3">Duration</div>
            <div className="flex-1 px-2 py-3">Progress</div>
          </div>
          <div>
          {enrolledCourses.map((course, i, arr) => (
            <div
              className={`flex items-center border border-richblack-700 ${
                i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
              }`}
              key={i}
            >
              <div
                className="flex w-[45%] cursor-pointer items-center gap-4 px-5 py-3"
                onClick={() => {
                  console.log("section ",course.courseContent)
                  navigate(
                    `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subsection?.[0]?._id}`
                  )
                }}
              >
                <img
                  src={course?.thumbnail}
                  alt="course_img"
                  className="h-14 w-14 rounded-lg object-cover"
                />
                <div className="flex max-w-xs flex-col gap-2">
                  <p className="font-semibold">{course.courseName}</p>
                  <p className="text-xs text-richblack-300">
                    {course.courseDescription.length > 50
                      ? `${course.courseDescription.slice(0, 50)}...`
                      : course.courseDescription}
                  </p>
                </div>
              </div>
              <div className="w-1/4 px-2 py-3">{course?.totalDuration}</div>
              <div className="flex w-1/5 flex-col gap-2 px-2 py-3">
                <p>Progress: {course.progressPercentage || 0}%</p>
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
