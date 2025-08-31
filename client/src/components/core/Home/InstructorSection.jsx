import React from 'react'
import CTAButton from "../../../components/core/FTAButton";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from './Highlight';

const InstructorSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-2 sm:px-4">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center w-full max-w-screen-xl mx-auto">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Instructor}
            alt="Instructor"
            className="shadow-white shadow-[-10px_-10px_0_0] w-4/5 sm:w-3/4 md:w-2/3 lg:w-full h-auto max-h-[350px] object-contain rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-10 items-center lg:items-start">
          <h1 className="w-full text-2xl sm:text-3xl lg:text-4xl font-semibold text-center lg:text-left">
            Become an <HighlightText text={"instructor"} />
          </h1>
          <p className="font-medium text-sm sm:text-base md:text-lg text-center lg:text-left w-full text-richblack-300">
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className="w-fit mx-auto lg:mx-0">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorSection