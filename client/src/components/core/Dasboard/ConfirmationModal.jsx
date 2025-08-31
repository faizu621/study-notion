import React from "react";
import IconBtn from "../../common/IconBtn";

const ConfirmationModal= ({modalData})=>{
    return(
        <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm px-2 sm:px-0">
           <div className="w-full sm:w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblue-800 p-4 sm:p-6 ">
               <p className="text-lg sm:text-xl md:text-2xl font-semibold text-richblack-5 ">{modalData?.text1}</p>
               <p className="mt-2 sm:mt-3 mb-4 sm:mb-5 leading-5 sm:leading-6 text-richblack-300">{modalData?.text2}</p>
               <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-x-4 w-full">
                <IconBtn text={modalData?.btn1Text} onclick={modalData?.btn1Handler}/>
                <button onClick={modalData?.btn2Handler}
                className="w-full sm:w-auto mt-2 sm:mt-0 cursor-pointer rounded-md bg-richblack-200 py-2 px-4 font-semibold text-richblack-900">
                    {modalData?.btn2Text}
                </button>
               </div>
           </div>
        </div>
    )
}
export default ConfirmationModal;