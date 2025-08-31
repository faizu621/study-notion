import React, { useState,useRef } from "react";
import IconBtn from "../../../common/IconBtn";
import { useDispatch, useSelector, } from "react-redux";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { updateDisplayPicture } from "../../../../services/operations/SettingsAPI";
import { useEffect } from "react";
const UpdatePicture = () => {
  const [loading, setLoading] = useState(false);
  const {token}=useSelector((state)=>state.auth)
  const { user } = useSelector((state) => state.profile);
  const dispatch=useDispatch();

  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
        setImageFile(file);
        previewFile(file);
    }
  };

  const fileInputRef=useRef(null);

  const handleClick=()=>{
    fileInputRef.current.click();
  }

  const previewFile=(file)=>{
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
        setPreviewSource(reader.result);
    }
  }

  const handleFileUpload=()=>{
    try{
        if(!imageFile){
            toast.error("Please choose file");
            return;
        }
        setLoading(true);
        const formData=new FormData();
        formData.append("displayPicture",imageFile);
        dispatch(updateDisplayPicture(token,formData)).then(() => {
          setLoading(false)
        })
    } catch(error){
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile)
    }
  }, [imageFile])

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between rounded-md border border-richblack-700 bg-richblack-800 p-4 sm:p-8 sm:px-12 text-richblack-5 w-full gap-4 sm:gap-0">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
        <img
          src={previewSource || user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[60px] sm:w-[78px] rounded-full object-cover"
        />
        <div className="flex flex-col gap-y-2 w-full">
          <p className="text-sm sm:text-base">Change profile picture</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center w-full">
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
              accept="image/png, image/gif, image/jpeg"
            />
            <button
              className="cursor-pointer rounded-md bg-richblack-700 py-2 px-4 sm:px-5 font-semibold text-richblack-50 text-xs sm:text-base w-full sm:w-auto"
              onClick={handleClick}
              disabled={loading}
            >
              Select
            </button>
            <IconBtn text={loading ? "uploading..." : "upload"} onclick={handleFileUpload} className="w-full sm:w-auto">
              {!loading && <FiUpload className="text-base sm:text-lg text-richblack-900" />}
            </IconBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdatePicture;

// import { useEffect, useRef, useState } from "react"
// import { FiUpload } from "react-icons/fi"
// import { useDispatch, useSelector } from "react-redux"

// import { updateDisplayPicture } from "../../../../services/operations/SettingsAPI"
// import IconBtn from "../../../common/IconBtn"
// export default function UpdatePicture() {
//   const { token } = useSelector((state) => state.auth)
//   const { user } = useSelector((state) => state.profile)
//   const dispatch = useDispatch()

//   const [loading, setLoading] = useState(false)
//   const [imageFile, setImageFile] = useState(null)
//   const [previewSource, setPreviewSource] = useState(null)

//   const fileInputRef = useRef(null)

//   const handleClick = () => {
//     fileInputRef.current.click()
//   }

//   const handleFileChange = (e) => {
//     const file = e.target.files[0]
//     // console.log(file)
//     if (file) {
//       setImageFile(file)
//       previewFile(file)
//     }
//   }

//   const previewFile = (file) => {
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onloadend = () => {
//       setPreviewSource(reader.result)
//     }
//   }

//   const handleFileUpload = () => {
//     try {
//       console.log("uploading...")
//       setLoading(true)
//       const formData = new FormData()
//       formData.append("displayPicture", imageFile)
//       // console.log("formdata", formData)
//       dispatch(updateDisplayPicture(token, formData)).then(() => {
//         setLoading(false)
//       })
//     } catch (error) {
//       console.log("ERROR MESSAGE - ",error.message)
//     }
//   }

//   useEffect(() => {
//     if (imageFile) {
//       previewFile(imageFile)
//     }
//   }, [imageFile])
//   return (
//     <>
//       <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5">
//         <div className="flex items-center gap-x-4">
//           <img
//             src={previewSource || user?.image}
//             alt={`profile-${user?.firstName}`}
//             className="aspect-square w-[78px] rounded-full object-cover"
//           />
//           <div className="space-y-2">
//             <p>Change Profile Picture</p>
//             <div className="flex flex-row gap-3">
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//                 className="hidden"
//                 accept="image/png, image/gif, image/jpeg"
//               />
//               <button
//                 onClick={handleClick}
//                 disabled={loading}
//                 className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
//               >
//                 Select
//               </button>
//               <IconBtn
//                 text={loading ? "Uploading..." : "Upload"}
//                 onclick={handleFileUpload}
//               >
//                 {!loading && (
//                   <FiUpload className="text-lg text-richblack-900" />
//                 )}
//               </IconBtn>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
