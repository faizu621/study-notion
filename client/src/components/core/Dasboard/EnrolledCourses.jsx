import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../services/operations/profileAPI";
import ProgressBar from "@ramonak/react-progress-bar";
const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(null);
  const { token } = useSelector((state) => state.auth);

  async function getEnrolledCourse() {
    try {
      const res = getUserEnrolledCourses(token);
      //const filterPublishCourse = res.filter( (ele) => ele.status !== "Draft");
      setEnrolledCourses(res);
    } catch (error) {
      console.log("Eroor", error);
    }
  }

  useEffect(() => {
    getEnrolledCourse();
  }, []);
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
        <div>
          <div>
            <div>Course Name</div>
            <div>Duration</div>
            <idv>Progress</idv>
          </div>
          <div>
            {enrolledCourses.map((course, index) => {
              return (
                <div>
                  <div key={index}>
                    <img>{course.thumbnail}</img>
                    <div>
                      <p>{course.courseName}</p>
                      <p>{course.courseDescription}</p>
                    </div>
                  </div>

                  <div>{course.totalDuration}</div>
                  <div>
                    <p>Progress: {course.progressPercentage || 0}%</p>
                    <ProgressBar
                      completed={course.progressPercentage || 0}
                      height="8px"
                      isLabelVisible={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;
