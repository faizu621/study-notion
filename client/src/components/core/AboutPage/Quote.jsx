import React from "react";
import Highlight from "../Home/Highlight";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
const Quote =()=>{
    return(
        <div className="text-base sm:text-xl md:text-2xl lg:text-4xl font-semibold mx-auto py-4 sm:py-8 lg:py-20 text-center text-white w-full max-w-4xl px-2">
            We are passionate about revolutionizing the way we learn. Our
            innovative platform <Highlight text={"combines technology"} />,{' '}
            <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
                expertise
            </span>
            , and community to create an
            <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
                unparalleled educational experience.
            </span>
        </div>
    )
}
export default Quote;