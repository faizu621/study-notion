import { createSlice } from "@reduxjs/toolkit";
import React from 'react'

const initialState = {
  step: 1,
  course: null,
  editCourse: false,
  paymentLoading: false,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setStep: (state, value) => {
      state.step = value.payload;
    },
    setCourse: (state, value) => {
      state.course = value.payload;
    },
    setEditCourse: (state, action) => {
        state.editCourse = action.payload
      },
    setPaymentLoading: (state, value) => {
      state.paymentLoading = value.payload;
    },
    resetCourseState: (state) => {
      state.step = 1;
      state.course = null;
      state.editCourse = false;
    },
  },
});
export const {
  setStep,
  setCourse,
  setEditCourse,
  setPaymentLoading,
  resetCourseState,
} = courseSlice.actions;
export default courseSlice.reducer;
