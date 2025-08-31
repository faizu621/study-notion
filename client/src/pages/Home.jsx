import * as React from 'react'

import {FaArrowRight} from "react-icons/fa";
import Highlight from "../components/core/Home/Highlight";
import FTAButton from "../components/core/FTAButton";
import banner from "../assets/Images/banner.mp4";
import { Link } from "react-router-dom";
import CodeBlocks from "../components/core/Home/CodeBlocks";
import TimeLine from "../components/core/Home/TimeLine";
import LearnLangSection from "../components/core/Home/LearnLangSection";
import BecomeInstructor from "../components/core/Home/BecomeInstructor";
import ReviewsSection from "../components/core/Home/ReviewsSection";
import PowerOfCodeSection from "../components/core/Home/PowerOfCodeSection";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";
import InstructorSection from '../components/core/Home/InstructorSection';
// import Navbar from "../components/common/Navbar";

const Home = () =>{ 

      return (
         <div className="w-full min-h-screen bg-richblue-900">
            <div className="flex flex-col items-center w-full max-w-screen-xl mx-auto px-2 sm:px-4 md:px-8">
               {/* Section 1 */}
               <div className="bg-richblack-700 mt-10 px-4 py-2 sm:px-6 sm:py-3 rounded-full max-w-full">
                  <Link to={'/signUp'}>
                     <div className="group text-lg sm:text-xl text-richblack-100 flex flex-row items-center gap-2 sm:gap-4">
                        <p>Become an Instructor</p>
                        <FaArrowRight className="text-xs sm:text-sm"/>
                     </div>
                  </Link>
               </div>

               <div className="text-richblack-5 text-2xl sm:text-3xl lg:text-4xl font-bold mt-8 sm:mt-12 text-center">
                  Empower Your Future with
                  <Highlight text=" Coding Skills" />
               </div>

               <div className="text-richblack-300 mt-4 sm:mt-6 w-full max-w-2xl text-center font-medium leading-6">
                  With our online coding courses, you can learn at your own pace, from anywhere in the world and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
               </div>

               <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6 sm:mt-8 w-full justify-center">
                  <FTAButton active={true} toLink={'/'}>
                     Learn More
                  </FTAButton>
                  <FTAButton active={false} toLink={'/'}>
                     Book a Demo
                  </FTAButton>
               </div>

               <div className="w-full max-w-2xl mx-auto mt-10 sm:mt-16">
                  <video controls autoPlay muted loop className="rounded-lg w-full h-auto max-h-[320px] sm:max-h-[400px] object-cover">
                     <source src={banner} type="video/mp4" />
                  </video>
               </div>

               <div className="w-full mx-auto mt-10 lg:max-w-[80%]">
                  <CodeBlocks
                     position={"flex-col lg:flex-row"}
                     heading={<div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-richblack-5">Unlock Your <Highlight text="coding potential" /> with our online courses.</div>}
                     codeColor={" text-yellow-5 "}
                     subheading={
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                     }
                     btn1={{ btnText: "Try it yourself ", linkto: "/signup", active: true }}
                     btn2={{ btnText: "Learn more ", linkto: "/login", active: false }}
                     Codeblocks={`<!DOCTYPE html>\n<html>\n head><>Example</\n title><linkrel="stylesheet"href="styles.css">\n/head>\nbody\n<h1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
                  />
               </div>

               <div className="w-full mx-auto mt-10 lg:max-w-[80%]">
                  <CodeBlocks
                     position={"flex-col lg:flex-row-reverse"}
                     heading={<div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-richblack-5">Start <Highlight text={`coding`} /> <br /> <Highlight text="in seconds" /></div>}
                     codeColor={" text-yellow-5 "}
                     subheading={
                        "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                     }
                     btn1={{ btnText: "Continue Lesson", linkto: "/signup", active: true }}
                     btn2={{ btnText: "Learn more", linkto: "/login", active: false }}
                     Codeblocks={`<!DOCTYPE html>\n<html>\n head><>Example</\n title><linkrel="stylesheet"href="styles.css">\n/head>\nbody\n<h1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
                  />
               </div>
            </div>

            <PowerOfCodeSection />

            {/* Section 2 */}
            <div className="bg-richblack-5 w-full mt-10">
               <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-7 pt-10 px-2 sm:px-4 md:px-8">
                  <div className="lg:text-4xl text-2xl sm:text-3xl font-bold">
                     Get the skills you need for a <Highlight text={" job that is in demand."} />
                  </div>
                  <div className="flex flex-col items-start gap-y-6 sm:gap-y-10 w-full max-w-xl">
                     <p className="text-pure-greys-600 w-full">
                        The modern StudyNotion dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                     </p>
                     <FTAButton active={true}>Learn More</FTAButton>
                  </div>
               </div>
               <TimeLine />
               <LearnLangSection />
            </div>

            {/* Section 3 */}
            <div className="relative mx-auto my-16 w-full max-w-screen-xl flex flex-col justify-between gap-8 bg-richblack-900 text-white px-2 sm:px-4 md:px-8">
               {/* Become a instructor section */}
               <InstructorSection />

               {/* Reviews from Other Learners */}
               <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold mt-8">
                  Reviews from other learners
               </h1>
               <ReviewSlider />
            </div>

            {/* footer */}
            <Footer />
         </div>
      );
}

export default Home;
