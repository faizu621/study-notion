import { useEffect, useRef, useState } from "react"
import { AiOutlineDown } from "react-icons/ai"
import React from "react"
import CourseSubSectionAccordion from "./CourseSubSectionAccordion"

export default function CourseAccordionBar({ course, isActive, handleActive }) {
  const contentEl = useRef(null)
  //console.log("course",course);
  // Accordian state
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(isActive?.includes(course._id))
  }, [isActive])
  const [sectionHeight, setSectionHeight] = useState(0)
  useEffect(() => {
    setSectionHeight(active ? contentEl.current.scrollHeight : 0)
  }, [active])

  return (
    <div className="overflow-hidden border border-solid border-richblack-600 bg-richblack-700 text-richblack-5 last:mb-0 rounded-md w-full">
      <div>
        <div
          className="flex flex-col sm:flex-row cursor-pointer items-start sm:items-center justify-between bg-opacity-20 px-4 sm:px-7 py-4 sm:py-6 transition-all"
          onClick={() => {
            handleActive(course._id)
          }}
        >
          <div className="flex items-center gap-2">
            <i className={isActive.includes(course._id) ? "rotate-180" : "rotate-0"}>
              <AiOutlineDown />
            </i>
            <p className="text-richblack-5 text-sm sm:text-base">{course?.sectionName}</p>
          </div>
          <div className="space-x-2 sm:space-x-4 mt-2 sm:mt-0">
            <span className="text-yellow-25 text-xs sm:text-sm">
              {`${course?.subsection?.length || 0} lecture(s)`}
            </span>
          </div>
        </div>
      </div>
      <div
        ref={contentEl}
        className="relative h-0 overflow-hidden bg-richblack-900 transition-[height] duration-300 ease-in-out"
        style={{ height: sectionHeight }}
      >
        <div className="text-textHead flex flex-col gap-2 px-4 sm:px-7 py-4 sm:py-6 font-semibold">
          {course?.subsection?.map((subSec, i) => (
            <CourseSubSectionAccordion subSec={subSec} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
