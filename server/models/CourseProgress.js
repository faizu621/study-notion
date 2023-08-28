const mongoose=require("mongoose");

const CourseProgressSchema=new mongoose.Schema({
    CourseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Courses",
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    completedVideos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subsection",
    }],
})

module.exports=mongoose.model("CourseProgress",CourseProgressSchema);