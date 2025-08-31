import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

import * as React from "react";
import {FcGoogle} from "react-icons/fc";
import frame from "../../assets/Images/frame.png"

const Template= ({heading,desc1,desc2,formType,image}) =>{
    return(
        <div className="w-full min-h-screen flex items-center justify-center bg-richblack-900 py-8 px-2">
            <div className="w-full max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 bg-transparent mt-8 mb-8">
                {/* section 1 */}
                <div className="flex flex-col w-full max-w-md gap-4">
                   <div className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">{heading}</div>
                   <div className="text-richblack-100 text-base sm:text-lg md:text-xl mb-2">{desc1} <span className="text-blue-100 italic text-sm sm:text-base md:text-lg">{desc2}</span></div>
                   <div>
                    {formType==='signup' ? (<SignupForm/>) : (<LoginForm/>) }
                   </div>
                   <div className="flex text-richblack-700 items-center mt-4 gap-x-2">
                      <div className="w-full bg-richblack-700 h-[2px]"></div>
                      <div>OR</div>
                      <div className="w-full bg-richblack-700 h-[2px]"></div>
                   </div>
                   <div className="bg-transparent w-full text-richblack-100 flex items-center justify-center gap-x-2 border border-richblack-700 px-2 py-2 mt-6 rounded-md font-semibold cursor-pointer hover:bg-richblack-700 transition">
                     <FcGoogle/>
                     Sign Up with Google
                   </div>
                </div>
                {/* section 2*/}
                <div className="relative w-full flex items-center justify-center max-w-lg">
                   <img src={frame} alt="Pattern" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain" loading="lazy"/>
                   <img src={image} className="absolute -top-4 right-4 w-2/3 sm:w-3/4 md:w-4/5 lg:w-[80%] h-auto object-contain rounded-lg shadow-lg" alt="Main visual" />
                </div>
            </div>
        </div>
    )
}
export default Template; 