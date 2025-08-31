import React, { useEffect, useRef, useState } from "react"
import { AiOutlineDown } from "react-icons/ai"
import { HiOutlineVideoCamera } from "react-icons/hi"

function CourseSubSectionAccordion({ subSec }) {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 gap-2">
        <div className="flex items-center gap-2">
          <span>
            <HiOutlineVideoCamera />
          </span>
          <p className="text-xs sm:text-sm md:text-base text-richblack-5">{subSec?.title}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseSubSectionAccordion
