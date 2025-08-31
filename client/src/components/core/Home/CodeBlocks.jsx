import FTAButton from "../FTAButton";
import {FaArrowRight} from "react-icons/fa";
import {TypeAnimation} from "react-type-animation";
import * as React from "react";

const CodeBlocks = ( {position,heading,subheading,btn1,btn2,Codeblocks,codeColor }) =>{
  return (
    <div className={`mx-auto flex flex-col lg:flex-row ${position} my-8 lg:my-20 justify-between gap-6 lg:gap-10 w-full`}>
      {/* block1 */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <div>{heading}</div>
        <div className="text-richblack-200 font-bold text-base sm:text-lg leading-6">{subheading}</div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-4">
          <div>
            <FTAButton toLink={btn1.linkto} active={true}>
              {btn1.btnText} <FaArrowRight className="text-xs sm:text-sm lg:text-base" />
            </FTAButton>
          </div>
          <FTAButton toLink={btn2.linkto}>{btn2.btnText}</FTAButton>
        </div>
      </div>
      {/* block 2 */}
      <div className="h-fit flex w-full lg:w-[500px] py-4 mt-6 lg:mt-0">
        {/* HW bg -- */}
        <div className="flex flex-col text-richblack-200 items-center w-8 sm:w-12 md:w-[10%]">
          {[...Array(11)].map((_, i) => <p key={i}>{i + 1}</p>)}
        </div>
        <div className={`w-full ${codeColor} overflow-x-auto`}>
          <TypeAnimation
            sequence={[Codeblocks, 2000, ""]}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CodeBlocks;