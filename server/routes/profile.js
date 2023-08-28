const express=require("express");
const router=express.Router();

//import the controllers
const {updateProfile, updateProfilePicture, getAllUserDetails, enrolledCourses, deleteAccount}=require("../controllers/profile");
const {auth}=require("../middlewares/Auth");

//route 
router.put('/updateProfile',auth,updateProfile);
router.put('/updateProfilePicture',auth,updateProfilePicture);
router.get('/getEnrolledCourses',auth,enrolledCourses);
router.delete('/deleteAccount',auth,deleteAccount);

//get user details
router.get("/getUserDetails",auth,getAllUserDetails);

module.exports=router;