
import React from "react";
import { useState } from "react";
import {BiShow,BiHide} from "react-icons/bi";
import { useDispatch } from "react-redux";
import { login } from "../../services/operations/authAPI";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [accountType,setAccountType]=useState("student");
    const [showPassword,setShowPassword]=useState(false);
    const [formData,setFormData]=useState({email:"",password:""});

    function changeHandler(event) {
        
        setFormData( prev => {
            return{
                ...prev,
                [event.target.name]:event.target.value

            }
        })
    }

    function handleOnSubmit(e){
        e.preventDefault();

        const {email,password}=formData;
        dispatch(login(email,password,navigate));

    }

        return (
                <div className="w-full max-w-md mx-auto p-4 sm:p-6 md:p-8 bg-richblack-800 rounded-lg shadow-lg">
                        <div className="text-richblack-100 bg-richblack-700 px-1 py-1 max-w-max gap-2 rounded-full flex gap-x-1 mt-6 mx-auto">
                                <button onClick={()=>{setAccountType('student')}} className={` ${accountType === "student" ? "bg-richblack-800 text-richblack-5 px-5 py-2 rounded-full" : "bg-transparent text-richblack-200 px-5 py-2" }`}>Student</button>
                                <button className={` ${accountType === "student" ? "bg-transparent text-richblack-200 px-5 py-2" : "bg-richblack-800 text-richblack-5 px-5 py-2 rounded-full" }`} onClick={()=>{setAccountType("instructor")}}>Instructor</button>
                        </div>
                        <form onSubmit={handleOnSubmit} className="mt-4 flex flex-col gap-4">
                             <label className="w-full">
                                 <p className="text-white text-sm sm:text-base">Email Address<sup className="text-pink-200">*</sup></p>
                                 <input type="email" required placeholder="Enter email address" name="email" value={formData.email} onChange={changeHandler} className="bg-richblack-900 py-3 px-3 rounded-md mt-1 w-full text-richblack-5 text-sm sm:text-base" />
                             </label>
                             <label className="relative w-full">
                                 <p className="text-white text-sm sm:text-base mt-2">Password<sup className="text-pink-200">*</sup></p>
                                 <input type={showPassword ? "text" : "password"} required placeholder="Enter Password" name="password" value={formData.password} onChange={changeHandler} className="bg-richblack-900 py-3 px-3 rounded-md mt-1 w-full text-richblack-5 text-sm sm:text-base" />
                                 <span onClick={()=>(setShowPassword(!showPassword))} className="absolute right-3 top-[38px] sm:top-[42px] cursor-pointer">
                                        {showPassword ? (<BiHide fill='#AFB2BF' fontSize={24}/>) : (<BiShow fill='#AFB2BF' fontSize={24}/>) }
                                 </span>
                                 <p className="text-xs text-blue-200 text-end w-full mt-1">
                                     <Link to={"/resetPasswordToken"}>Forgot Password</Link>
                                 </p>
                             </label>
                             <button className="w-full bg-yellow-50 py-2 rounded-md mt-6 text-richblack-900 font-semibold text-base hover:bg-yellow-100 transition" type="submit">Sign In</button>
                        </form>
                </div>
        )
}

export default LoginForm;