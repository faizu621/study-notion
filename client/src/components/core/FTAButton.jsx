import React from "react";
import { Link } from "react-router-dom";

const FTAButton = ({children ,active,toLink}) =>{
    return(
        <Link to={toLink}>
        <div className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:scale-95 transition-all duration-200 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 flex justify-center items-center max-w-max
         ${active ? "bg-yellow-50 text-richblack-800" : "bg-richblack-700 text-richblack-200"}`}>
            {children}
        </div>
        </Link>
    )
}

export default FTAButton;