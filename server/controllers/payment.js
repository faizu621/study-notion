const { default: mongoose } = require("mongoose");
const {instance} =require("../config/razorpay");
const Course=require("../models/Course");
const User=require("../models/User");
const mailsender=require("../utils/mailSender");
// mail ki body import karni hai jo send karni hai

exports.capturePayment=async (req,res) =>{
    try{
        //get courseId and userId 
        const {courseId}=req.body;
        const userId=req.user.id;

        //validation
        if(!courseId||!userId){
            return res.status(400).json({
                success:false,
                message:"Data missing "
            })
        }

        //validation course
        const course= await Course.findById({courseId});
        if(!course){
            return res.status(400).json({
                success:false,
                message:"course not found "
            });
        }

        //check user already pay for this course ?
        const uid= new mongoose.Types.ObjectId(userId);
        if(course.studentEnrolled.includes(uid)){
            return res.status(400).json({
                success:false,
                message:"User is alredy enrolled "
            });
        }

        // create order
        const amount=course.price;
        const currency="INR";

        const options={
            amount:amount*100,
            currency,
            receipt:Math.random(Date.now()).toString(),
            notes:{
                courseId,
                userId
            }
        }
        try{
            //initiate payment using razorpay 
            const paymentResponse=await instance.orders.create(options);
            console.log(paymentResponse);
        }
        catch(error){
            res.status(500).json({
                success:false,
                message:error.message
            })
        }

        //return res
        res.status(200).json({
            success:true,
            message:"order created successfully",
            courseName:course.courseName,
            description:course.description,
            thumbnail:course.thumbnail,
            orderId:paymentResponse.id,
            currency:paymentResponse.currency,
            amount:paymentResponse.amount
        });

    } catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

//verify siganture of razorpay and server
exports.verifySignature = async (req,res) => {
    try{
        const webhookSecret="12345678";
        const signature=req.headers("x-razorpay-signature");  //hashed signature

        //hash webhookSecret
        const shasum=crypto.createHmac("sha256",webhookSecret);

        shasum.update(json.stringify(req.body));

        const digest=shasum.digest("hex");

        //match digest and signature

        if(signature===digest){
            console.log("payment authrized");

            //fecth data feom notes
            const {userId,courseId}=req.body.payload.payment.entity.notes;

            //preform action
            try{
                //find course and enroll the student
                const course= await Course.findByIdAndUpdate({courseId},{$push:{studentEnrolled:userId}},{new:true});

                //find the student and add course in list of course
                const user=await User.findByIdAndUpdate({userId},{$push:{courses:courseId}},{new:true});

                //send email of confirmation
                const emailResponse=await mailSender(user.email,"congartulations, from Codehelp ",
                "congratulations, you are enrolled in new codehelp course ");

                console.log(emailResponse);

                return res.status(200).json({
                    success:true,
                    message:"students enroolled successfully "
                });
            }
            catch(error){
                res.status(500).json({
                    success:false,
                    message:error.message
                });
            }
        }
    } catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}