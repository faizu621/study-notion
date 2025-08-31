import React from "react";
import RenderingSteps from "./RenderingSteps";
import { useEffect } from "react";
import { setEditCourse } from "../../../../slices/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const AddCourse = () => {
  const { editCourse } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const [flag,setFlag]=useState("add-course");
  useEffect(() => {
    const currentURL = window.location.href;
    // Using the URL constructor to extract the pathname
    const pathname = new URL(currentURL).pathname;

    // Splitting the pathname by slashes and getting the last part
    const parts = pathname.split("/");
    const lastPart = parts[parts.length - 1];

    setFlag(lastPart);

    if (lastPart === "add-course") {
      dispatch(setEditCourse(false));
    }
    else{
      dispatch(setEditCourse(true));
    }
  }, []);
  return (
    <div className="flex flex-col lg:flex-row w-full items-start gap-4 lg:gap-x-6 px-2 sm:px-4">
      <div className="flex flex-1 flex-col w-full">
        <h1 className="mb-6 sm:mb-8 md:mb-10 text-2xl sm:text-3xl font-medium text-richblack-5">Add Course</h1>
        <RenderingSteps />
      </div>
      <div className="sticky top-10 w-full lg:max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 mt-6 lg:mt-0 p-4 sm:p-6">
        <p className="mb-4 sm:mb-8 text-base sm:text-lg text-richblack-5 font-semibold">⚡ Code Upload Tips</p>
        <ul className="ml-4 list-disc space-y-2 sm:space-y-4 text-xs sm:text-sm text-richblack-5">
          <li>Set the Course Price option or make it free.</li>
          <li>Standard size for the course thumbnail is 1024x576.</li>
          <li>Video section controls the course overview video.</li>
          <li>Course Builder is where you create & organize a course.</li>
          <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
          <li>Information from the Additional Data section shows up on the course single page.</li>
          <li>Make Announcements to notify any important</li>
          <li>Notes to all enrolled students at once.</li>
        </ul>
      </div>
    </div>
  );
};
export default AddCourse;
