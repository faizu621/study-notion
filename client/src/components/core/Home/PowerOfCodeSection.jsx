import FTAButton from "../FTAButton";
import * as React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Highlight from "./Highlight";
import { HomePageExplore } from "../../../data/homepage-explore";
import { useState } from "react";
import {FiUsers} from "react-icons/fi";
import {HiUsers} from "react-icons/hi";

const tabsName=[
    "Free",
    "New to coding",
    "Most popular",
    "Skill paths",
    "Career paths",
];

const PowerOfCodeSection = () =>{
     
    const [currTab,setCurrTab]=useState(tabsName[0]);
    const [courses,setCourses]=useState(HomePageExplore[0].courses);
    const [currCard,setCurrCard]=useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) =>{
        setCurrTab(value);
        const result = HomePageExplore.filter((element)=>{
            return element.tag===value;
        })
        setCourses(result[0].courses);
        setCurrCard(result[0].courses[0].heading);
    }


    return (
        <div className="relative w-full">
            <div className="relative w-full max-w-screen-xl mx-auto flex flex-col items-center gap-y-8 lg:gap-y-10 pb-32 lg:pb-[220px] px-2 sm:px-4">
                <div className="flex flex-col lg:items-center gap-y-2 items-start w-full">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-richblack-5">Unlock the <Highlight text={"Power of Code"} /></div>
                    <div className="text-richblack-300 text-sm sm:text-base">Learn to Build Anything You Can Imagine</div>
                </div>
                <div className="flex gap-2 sm:gap-4 md:gap-x-5 text-xs sm:text-sm md:text-base p-1 bg-richblack-700 rounded-full w-full max-w-2xl overflow-x-auto">
                    {tabsName.map((tab, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer px-3 py-1 sm:py-2 sm:px-4 rounded-full whitespace-nowrap ${currTab === tab ? "bg-richblack-800 text-richblack-5" : "text-richblack-300"}`}
                            onClick={() => setMyCards(tab)}
                        >
                            <p>{tab}</p>
                        </div>
                    ))}
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 px-0 md:px-6 lg:px-10 mt-8 overflow-x-auto">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className={`min-w-[260px] max-w-full flex-1 px-4 pt-8 pb-6 flex flex-col gap-y-8 justify-between rounded-lg shadow-md ${currCard === course.heading ? "bg-richblack-5" : "bg-richblack-700 text-richblack-300"}`}
                            style={{ minWidth: '260px', maxWidth: '350px' }}
                        >
                            <div className="flex flex-col gap-y-2">
                                <div className="text-lg font-bold text-richblack-900 dark:text-white">{course.heading}</div>
                                <div className="text-sm sm:text-base">{course.description}</div>
                            </div>
                            <div className="p-3 flex justify-between border-t-2 border-t-black">
                                <div className="flex items-center gap-x-2">
                                    <HiUsers className=" w-[24px]"/>
                                    <p>{course.level}</p>
                                </div>
                                <div className=" flex items-center ">
                                    <p>{course.lessionNumber} </p>
                                    <p>Lessons</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="bgimage bg-richblack-5 h-[320px]  ">
            <div className="h-[20%]"></div>
            <div className=" lg:w-11/12 mx-auto flex justify-center items-center  h-[80%] gap-7 ">
                <FTAButton active={true}>Explore Full Catalog  <FaArrowRight/> </FTAButton>
                <FTAButton active={false}>Learn More</FTAButton>
            </div>
        </div>

        </div>
    )
}
export default PowerOfCodeSection;