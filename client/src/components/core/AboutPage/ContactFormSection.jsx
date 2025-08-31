import React from "react";
import ContactForm from "../Contact/ContactForm";

const ConatactFormSection = () =>{
    return(
        <div className="flex flex-col items-center gap-y-4 sm:gap-y-5 pt-10 sm:pt-16 lg:pt-20 my-4 sm:my-8 lg:my-12 w-full px-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-richblack-5 text-center">Get in Touch</h1>
            <p className="text-richblack-300 text-xs sm:text-sm lg:text-base text-center max-w-xl">We'd love to hear from you, please fill out this form.</p>
            <div className="w-full max-w-2xl">
                <ContactForm/>
            </div>
        </div>
    )
}
export default ConatactFormSection;