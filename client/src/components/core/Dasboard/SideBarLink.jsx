import React from "react";
import * as Icons from "react-icons/vsc";
import { NavLink, matchPath, useLocation } from "react-router-dom";
const SideBarLink = ({iconName,linkpath,name}) =>{
    const location=useLocation();

    const matchRoute=(route)=>{
        return matchPath({path:route},location.pathname);
    }
    const Icon=Icons[iconName];
    return (
        <NavLink
            to={linkpath}
            className={({ isActive }) =>
                `relative px-3 sm:px-6 md:px-8 py-2 md:py-3 text-xs sm:text-sm md:text-base font-medium flex items-center gap-x-1 sm:gap-x-2 transition-all duration-200 hover:bg-richblack-700 hover:text-yellow-50 ${
                    isActive ? "bg-yellow-800 text-yellow-50" : "text-richblack-300"
                }`
            }
        >
            <span className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50 ${
                matchRoute(linkpath) ? "opacity-100" : "opacity-0"
            }`}></span>
            <div className="flex gap-x-1 sm:gap-x-2 items-center">
                <Icon className="text-base sm:text-lg md:text-xl"/>
                <span>{name}</span>
            </div>
        </NavLink>
    );
}
export default SideBarLink;