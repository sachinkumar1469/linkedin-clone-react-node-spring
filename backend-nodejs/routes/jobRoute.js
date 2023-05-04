const router = require("express").Router();

// Local imports
const auth = require("../middleware/authUser");
const fileUpload = require("../middleware/fileUpload");
const path = require("path");
const HttpError = require("../utils/HttpError");
const jobModel = require("../model/JobsModel");

// Post a new job. Protected route
router.post("/create",auth,fileUpload.single("logo"),async(req,res,next)=>{
    const user = req.user;
    
    const logo = req.file == undefined || req.file.path == undefined ? path.join("uploads","userImages","defaultLogo.png") : req.file.path;

    const {title, company, location, description, salary, experience } = req.body;

    const job = new jobModel({
        title,
        companyName:company,
        location,
        description,
        salary,
        experience,
        companyLogo:logo,
        user:user._id,
        applied:[]
    });

    try{
        await job.save();
        res.status(201).json({
            "status":"success",
            "message":"Job created successfully",
            "data":job
        });
    }catch(err){
        console.log(err);
        const error = new HttpError("Unable to create job",500);
        return next(error);
    }
    
});

// Get all jobs. Protected route
router.get("/all",auth,async(req,res,next)=>{
    const user = req.user;
    try{
        const jobs = await jobModel.find({user:user._id}).populate("user","name email").sort({createdAt:-1});
        res.status(200).json({
            "status":"success",
            "message":"Jobs fetched successfully",
            "data":jobs
        });
    }catch(err){
        console.log(err);
        const error = new HttpError("Unable to fetch jobs",500);
        return next(error);
    }
});

module.exports = router;