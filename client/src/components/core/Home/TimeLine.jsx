import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timlineImage from "../../../assets/Images/TimelineImage.png"
const Timeline=[
    {
        logo:Logo1,
        heading:"Leadership",
        desc:"Fully committed to the success company",
    },
    {
        logo:Logo2,
        heading:"Responsibility",
        desc:"Students will always be our top priority",
    },
    {
        logo:Logo3,
        heading:"Flexibility",
        desc:"The ability to switch is an important skills",
    },
    {
        logo:Logo4,
        heading:"Solve the problem",
        desc:"Code your way to a solution",
    }
]

const TimeLine = () =>{
    return (
        <div className="w-full max-w-screen-xl mx-auto my-10 lg:my-20 pb-10 lg:pb-20 px-2 sm:px-4">
            <div className="w-full flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-1/3 flex flex-col gap-8 sm:gap-14 py-8 sm:py-16">
                    {Timeline.map((data, index) => (
                        <div key={index} className="flex items-center gap-4 sm:gap-10">
                            <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                                <img src={data.logo} className="w-6 h-6 object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold text-base sm:text-lg md:text-xl">{data.heading}</p>
                                <p className="text-sm sm:text-base">{data.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative w-full lg:w-2/3 flex flex-col items-center mt-8 lg:mt-0">
                    <img src={timlineImage} alt="timeline image" className="w-full h-auto object-cover rounded-lg" />
                    <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-0 bg-caribbeangreen-700 py-6 sm:py-10 px-4 sm:px-0 uppercase justify-center items-center rounded-lg shadow-lg -mt-10 sm:-mt-16 lg:absolute lg:bottom-0 lg:left-1/4 lg:w-2/3">
                        <div className="flex gap-3 sm:gap-5 items-center sm:px-8 border-b sm:border-b-0 sm:border-r border-caribbeangreen-300 pb-4 sm:pb-0 sm:pr-8">
                            <p className="text-2xl sm:text-3xl font-bold text-white">10</p>
                            <p className="text-xs sm:text-sm text-caribbeangreen-300 max-w-[80px]">Years experiences</p>
                        </div>
                        <div className="flex gap-3 sm:gap-5 items-center sm:px-8 pt-4 sm:pt-0">
                            <p className="text-2xl sm:text-3xl font-bold text-white">250</p>
                            <p className="text-xs sm:text-sm text-caribbeangreen-300 max-w-[80px]">Types of Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TimeLine;