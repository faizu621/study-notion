import React from "react";
import Highlight from "./Highlight";
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import compareWithOthers from "../../../assets/Images/Compare_with_others.png";
import planYourLessons from "../../../assets/Images/Plan_your_lessons.png";
import FTAButton from "../FTAButton";

const LearnLangSection = () =>{
    return (
        <div className="mt-10 flex flex-col gap-7 bg-richblack-5 w-full">
            <div className="w-full max-w-screen-md mx-auto gap-y-3 flex flex-col justify-center items-center px-2 sm:px-4">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold lg:font-bold text-center">Your swiss knife for <Highlight text={"learning any language"} /></p>
                <p className="w-full sm:w-5/6 lg:w-3/4 text-center px-0 sm:px-4 text-sm sm:text-base lg:text-lg">Using spin making learning multiple languages easy. With 20+ languages, realistic voice-over, progress tracking, custom schedule and more.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-4xl mx-auto py-6 px-2">
                <img src={knowYourProgress} className="w-4/5 sm:w-1/3 max-w-xs h-auto object-contain" alt="Know your progress" />
                <img src={compareWithOthers} className="w-4/5 sm:w-1/3 max-w-xs h-auto object-contain" alt="Compare with others" />
                <img src={planYourLessons} className="w-4/5 sm:w-1/3 max-w-xs h-auto object-contain" alt="Plan your lessons" />
            </div>
            <div className="w-full flex justify-center items-center pb-8">
                <FTAButton active={true}>Learn More</FTAButton>
            </div>
        </div>
    )
}
export default LearnLangSection;