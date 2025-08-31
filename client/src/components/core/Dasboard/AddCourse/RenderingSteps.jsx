import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CourseInformationForm from "./CourseInFormation/CourseInformationForm";
import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm";
import PublishCourse from "./PublishCourse";
import { useSelector } from "react-redux";

const RenderingSteps = () => {
  const { step } = useSelector((state) => state.course);
  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];
  return (
    <div className="w-full">
      <div className="relative mb-2 flex w-full justify-center items-center flex-wrap gap-2 sm:gap-0">
        {steps.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="flex flex-col items-center">
              <button
                className={`grid aspect-square w-7 sm:w-[34px] rounded-full place-items-center border-[1px] mt-2 sm:mt-4 cursor-default
              ${step === item.id ? "border-yellow-50 bg-yellow-900 text-yellow-50 " : "border-richblack-700 bg-richblack-800 text-richblack-300"}
              ${step > item.id ? "bg-yellow-50 text-yellow-50" : ""}`}
              >
                {step > item.id ? (
                  <FaCheck className="font-bold text-richblack-900 text-xs sm:text-base" />
                ) : (
                  <span className="text-xs sm:text-base">{item.id}</span>
                )}
              </button>
            </div>
            {item.id !== steps.length && (
              <div
                className={`h-[calc(34px/2)] w-12 sm:w-[33%] border-dashed border-b-2 ${step > item.id ? "border-yellow-50" : "border-richblack-500"}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="relative mb-10 sm:mb-16 flex w-full select-none justify-between flex-wrap gap-y-2">
        {steps.map((item, index) => (
          <div
            key={index}
            className={`flex min-w-[90px] sm:min-w-[130px] flex-col items-center ${step >= item.id ? "text-richblack-5" : "text-richblack-500"}`}
          >
            <span className="text-xs sm:text-sm font-medium">{item.title}</span>
          </div>
        ))}
      </div>
      {step === 1 && <CourseInformationForm />}
      {step === 2 && <CourseBuilderForm />}
      {step === 3 && <PublishCourse />}
    </div>
  );
};

export default RenderingSteps;
