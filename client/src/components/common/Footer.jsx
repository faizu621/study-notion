import React from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png"
import {AiFillYoutube,AiFillGoogleCircle,AiOutlineTwitter} from "react-icons/ai";
import {BiLogoFacebookCircle} from "react-icons/bi";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

const Footer = () =>{

  return (
    <div className="bg-richblack-700 w-full">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10 px-4 sm:px-8 py-10 lg:py-20">
        {/* Section 1 */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-8 lg:gap-x-14 lg:border-r border-r-richblack-300 flex-wrap">
          {/* part1 */}
          <div className="flex flex-col gap-y-4 min-w-[150px]">
            <div className="w-[120px] mb-2"><img src={logo} alt="logo" className="w-full h-auto" /></div>
            <div className="font-bold text-richblack-5">Company</div>
            <div className="text-richblack-300 flex flex-col gap-1 text-sm">
              <p>About</p>
              <p>Careers</p>
              <p>Affiliates</p>
            </div>
            <div className="flex gap-2 text-richblack-300 mt-2">
              <div className="w-5 h-5 flex items-center justify-center"><BiLogoFacebookCircle size={20} /></div>
              <div className="w-5 h-5 flex items-center justify-center"><AiFillGoogleCircle size={20} /></div>
              <div className="w-5 h-5 flex items-center justify-center"><AiOutlineTwitter size={20} /></div>
              <div className="w-5 h-5 flex items-center justify-center"><AiFillYoutube size={20} /></div>
            </div>
          </div>
          {/* part2 */}
          <div className="flex flex-col gap-6 min-w-[150px]">
            <div className="flex flex-col gap-2">
              <div className="font-bold text-richblack-5">Resources</div>
              <div className="flex flex-col gap-1 text-richblack-300 text-sm">
                <p>Articles</p>
                <p>Blog</p>
                <p>Chart Sheet</p>
                <p>Code Challenges</p>
                <p>Docs</p>
                <p>Projects</p>
                <p>Videos</p>
                <p>Workspaces</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold text-richblack-5">Support</div>
              <div className="text-richblack-300 text-sm">Help Center</div>
            </div>
          </div>
          {/* part3 */}
          <div className="flex flex-col gap-6 min-w-[150px]">
            <div className="flex flex-col gap-2">
              <div className="font-bold text-richblack-5">Plans</div>
              <div className="flex flex-col gap-1 text-richblack-300 text-sm">
                <p>Paid memberships</p>
                <p>For students</p>
                <p>Business Students</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-richblack-5 font-bold">Community</div>
              <div className="flex flex-col gap-1 text-richblack-300 text-sm">
                <p>Forums</p>
                <p>Chapters</p>
                <p>Events</p>
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="w-full lg:w-1/2 flex flex-wrap gap-8 lg:gap-14 lg:px-14">
          {FooterLink2.map((element, index) => (
            <div className="flex flex-col gap-2 min-w-[140px]" key={index}>
              <div className="text-richblack-5 font-bold">{element.title}</div>
              <div className="flex flex-col text-richblack-300 gap-1 text-sm">
                {element.links.map((link, ind) => (
                  <Link to={link.link} key={ind}>
                    <div>{link.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;