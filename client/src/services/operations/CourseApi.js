import { apiConnector } from "../apiconnector";
import { courseEndpoints } from "../apis";
import { toast } from "react-hot-toast";
import React from 'react'
const {
  COURSE_DETAILS_API,
  COURSE_CATEGORIES_API,
  EDIT_COURSE_API,
  CREATE_COURSE_API,
  CREATE_SECTION_API,
  UPDATE_SECTION_API,
  DELETE_SECTION_API,
  CREATE_SUBSECTION_API,
  UPDATE_SUBSECTION_API,
  DELETE_SUBSECTION_API,
  GET_ALL_INSTRUCTOR_COURSES_API,
  DELETE_COURSE_API,
  GET_FULL_COURSE_DETAILS_AUTHENTICATED,
  CREATE_RATING_API,
  LECTURE_COMPLETION_API
} = courseEndpoints;


export const fetchCourseCategories = async () => {
  let result = [];
  try {
    const response = await apiConnector("GET", COURSE_CATEGORIES_API);
    console.log("COURSE_CATEGORIES_API API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Course Categories");
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("COURSE_CATEGORY_API API ERROR............", error);
    toast.error(error.message);
  }
  return result;
};
export const addCourseDetails = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorisation: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error("Could Not Add Course Details");
    }

    toast.success("Course added successfully ");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE COURSE API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};
export const editCourseDetails = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading..");
  try {
    const response = await apiConnector("POST", EDIT_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorisation: `Bearer ${token}`,
    });
    console.log("EDIT COURSE API RESPONSE............", response);
    if (!response.data.success) {
      throw new Error("Could Not Update Course Details");
    }
    toast.success("Course Details Updated Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("EDIT COURSE API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const fetchCourseDetails = async (courseId) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", COURSE_DETAILS_API, {
      courseId,
    })
    console.log("COURSE_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
  } catch (error) {
    console.log("COURSE_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

export const createSection = async (data, token) => {
  let result;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_SECTION_API, data, {
      Authorisation: `Bearer ${token}`,
    });
    console.log("CREATE SECTION API RESPONSE............", response);
    if (!response.data.success) {
      throw new Error("Could not create section");
    }
    toast.success("Section created successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const updateSection = async (data, token) => {
  let result;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", UPDATE_SECTION_API, data, {
      Authorisation: `Bearer ${token}`,
    });
    console.log("UPDATE SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Update Section");
    }

    toast.success("Section update successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("UPDATE SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const deleteSection = async (data, token) => {
  console.log("token", token);
  const toastId = toast.loading("loading...");
  let result;
  try {
    const response = await apiConnector("DELETE", DELETE_SECTION_API, data, {
      Authorisation: `Bearer ${token}`,
    });
    console.log("DELETE SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could not delete section");
    }
    toast.success("Section is deleted successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("DELETE SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const createSubSection = async (data, token) => {
  const toastId = toast.loading("Loading...");
  let result;
  try {
    const response = await apiConnector("POST", CREATE_SUBSECTION_API, data, {
      "Content-Type": "multipart/form-data",
      Authorisation: `Bearer ${token}`,
    });
    console.log("Create Section Api Response....", response);
    if (!response?.data?.success) {
      throw new Error("Could not created subsection");
    }
    toast.success("Lecture Added Successfully ");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE SUB-SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const updateSubSection = async (data, token) => {
  const toastId = toast.loading("Loading...");
  let result;
  try {
    const response = await apiConnector("POST", UPDATE_SUBSECTION_API, data, {
      "Content-Type": "multipart/form-data",
      Authorisation: `Bearer ${token}`,
    });
    console.log("UPDATE SUB-SECTION API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Update Lecture");
    }
    toast.success("Lecture Updated");
    result = response?.data?.data;
  } catch (error) {
    console.log("UPDATE SUB-SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const deleteSubSection=async(data,token)=>{
  const toastId=toast.success("Loading...");
  let result=null;
  try{
    const response=await apiConnector("DELETE",DELETE_SUBSECTION_API,data,
    {
      Authorisation: `Bearer ${token}`,
    })
    console.log("DELETE SUB-SECTION API RESPONSE............", response);
    if(!response.data.success){
      throw new Error("Could not delete subsection");
    }

    toast.success("Lecture deleted successfully");
    result=response.data.data;
  }catch(error){
    console.log("DELETE SUB-SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
}

export const fetchInstructorCourses=async(token)=>{
  const toastId=toast.loading("Loading...");
  let result=null;
  try{
    const response=await apiConnector("GET",GET_ALL_INSTRUCTOR_COURSES_API,null,{
      Authorisation: `Bearer ${token}`,
    })
    console.log("FETCH_INSTRUCTOR_COURSES_API_RESPONSE.....",response);
    if(!response?.data?.success){
      throw new Error("Could not fetch instructor courses ");
    }

    result=response?.data?.data;
    toast.success("Instructor Courses fetch Successfully ");
  } catch(error){
    console.log("FETCH_INSTRUCTOR_COURSES_API_ERROR.....",error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
}

export const deleteCourse=async(data,token)=>{
  const toastId=toast.loading("Loading...");
  let result;
  try{
    const response =await apiConnector("DELETE",DELETE_COURSE_API,data,{
      Authorisation: `Bearer ${token}`,
    });
    console.log("DELETE COURSE API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Course")
    }
    toast.success("Course Deleted")
  } catch(error){
    console.log("DELETE COURSE API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}

export const getFullDetailsOfCourse=async (courseId,token)=>{
  const toastId=toast.loading("Loading...");
  let result;
  try{
    const response=await apiConnector("POST",GET_FULL_COURSE_DETAILS_AUTHENTICATED,{courseId},{
      Authorisation: `Bearer ${token}`,
    }) 
    console.log("GET_FULLDETAILS_OF_COURSE_RESPONSE..",response);

    if(!response?.data?.success){
      throw new Error("Could not fetched course details.. ");
    }

    console.log("response",response);
    result=response?.data?.data;
    toast.success("Fetched successfully all course details...");

  } catch(error){
    console.log("GET_FULLDETAILS_OF_COURSE_ERROR..",error);
    toast.error("Could not fetched course details.. ");
  }
  toast.dismiss(toastId);
  return result;
}


// mark a lecture as complete
export const markLectureAsComplete = async (data, token) => {
  let result = null
  console.log("mark complete data", data)
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", LECTURE_COMPLETION_API, data, {
      Authorisation: `Bearer ${token}`,
    })
    console.log(
      "MARK_LECTURE_AS_COMPLETE_API API RESPONSE............",
      response
    )

    if (!response.data.message) {
      throw new Error(response.data.error)
    }
    toast.success("Lecture Completed")
    result = true
  } catch (error) {
    console.log("MARK_LECTURE_AS_COMPLETE_API API ERROR............", error)
    toast.error(error.message)
    result = false
  }
  toast.dismiss(toastId)
  return result
}

// create a rating for course
export const createRating = async (data, token) => {
  const toastId = toast.loading("Loading...")
  let success = false
  try {
    const response = await apiConnector("POST", CREATE_RATING_API, data, {
      Authorisation: `Bearer ${token}`,
    })
    console.log("CREATE RATING API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Create Rating")
    }
    toast.success("Rating Created")
    success = true
  } catch (error) {
    success = false
    console.log("CREATE RATING API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return success
}