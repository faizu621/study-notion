import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat on us",
    description: "Our friendly team is here to help.",
    details: "info@studynotion.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit us",
    description: "Come and say hello at our office HQ.",
    details:
      "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
  },
  {
    icon: "IoCall",
    heading: "Call us",
    description: "Mon - Fri From 8am to 5pm",
    details: "+123 456 7869",
  },
];
const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 p-4 sm:p-8 md:p-10 bg-richblack-700 rounded-lg w-full max-w-2xl mx-auto">
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
        return (
          <div key={i} className="flex flex-col">
            <div className="flex gap-3 sm:gap-5 items-start">
              <div className="text-richblack-5 flex-shrink-0">
                <Icon size={28} />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-richblack-5">{ele?.heading}</h1>
                <p className="text-xs sm:text-sm text-richblack-200">{ele?.description}</p>
                <p className="text-xs sm:text-sm text-richblack-100 break-words">{ele?.details}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ContactDetails;
