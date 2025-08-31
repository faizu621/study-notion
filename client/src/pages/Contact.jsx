import React from "react";
import Navbar from "../components/common/Navbar";
import ContactDetails from "../components/core/Contact/ContactDetails";
import ContactUsFormSection from "../components/core/Contact/ContactusFormSection";
import Footer from "../components/common/Footer";


const Contact = () =>{
    return (
        <div className="w-full min-h-screen bg-richblack-900">
            <div className="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto my-10 sm:my-16 gap-8 sm:gap-12 lg:gap-20 px-2 sm:px-4">
                <div className="w-full lg:w-2/5 text-richblack-300 mb-8 lg:mb-0">
                    <ContactDetails />
                </div>
                <div className="w-full lg:w-3/5 border border-richblack-700 rounded-lg p-4 sm:p-8 bg-richblack-800">
                    <ContactUsFormSection />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Contact;