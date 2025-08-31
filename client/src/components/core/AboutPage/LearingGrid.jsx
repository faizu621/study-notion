import React from "react";
import Highlight from "../Home/Highlight";
import { Link } from "react-router-dom";
import FTAButton from "../../core/FTAButton";

const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highliteText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating " Auto-grading " `,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];

const LearnigGrid=()=>{
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 lg:w-10/12 mx-auto my-8 sm:my-12 lg:my-20 gap-4 sm:gap-6 lg:gap-8">
        {LearningGridArray.map((card, i) => (
          <div
            key={i}
            className={`
              ${i === 0 ? "col-span-1 lg:col-span-2 xl:h-[294px]" : ""}
              ${card.order % 2 === 1 ? "bg-richblack-700 xl:h-[294px]" : card.order % 2 === 0 ? "bg-richblack-800 xl:h-[294px]" : "bg-transparent"}
              ${card.order === 3 ? "xl:col-start-2" : ""}
              rounded-lg flex flex-col justify-between min-h-[180px] sm:min-h-[220px] md:min-h-[260px] xl:min-h-[294px] p-4 sm:p-6 lg:p-8"
            `}
          >
            {card.order < 0 ? (
              <div className="flex flex-col gap-3 sm:gap-5 items-start w-full h-full">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-richblack-5">
                  {card.heading} <Highlight text={card.highliteText} />
                </h1>
                <p className="text-richblack-300 text-xs sm:text-sm lg:text-base">{card.description}</p>
                <div className="mt-2">
                  <FTAButton active={true} toLink={card.BtnLink}>
                    {card.BtnText}
                  </FTAButton>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3 sm:gap-5 h-full">
                <h1 className="text-base sm:text-lg font-bold text-richblack-5 text-start">
                  {card.heading}
                </h1>
                <p className="text-richblack-300 font-medium text-xs sm:text-sm lg:text-base">{card.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    )
}
export default LearnigGrid;