import React from "react";
import ContactForm from "./ContactForm";

const ContactUsFormSection =()=>{
    return(
        <div className="w-full flex flex-col items-center gap-4 px-2 py-8 sm:py-12">
           <h1 className="text-2xl sm:text-3xl lg:text-4xl text-richblack-5 text-center font-bold">
             Got an Idea? We’ve got the skills. Let’s team up
           </h1>
           <p className="text-richblack-300 text-center max-w-xl">
             Tell us more about yourself and what you’ve got in mind.
           </p>
           <div className="w-full max-w-2xl">
             <ContactForm/>
           </div>
        </div>
    )
}

export default ContactUsFormSection;