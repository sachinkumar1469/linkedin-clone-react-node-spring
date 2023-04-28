const router = require("express").Router();
const {body,validationResult} = require("express-validator");
const HttpError = require("../utils/HttpError");
const path = require("path");

//local imports
const fileUpload = require("../middleware/fileUpload");

const allowedFileTypes = ["image/png","image/jpg","image/jpeg"];
const imageValidator = (value,{req})=>{
    console.log("Value: ",value);
    if(req.files[value]){
        const image = req.files[value];
        const mimetype = image.mimetype;
        if(!allowedFileTypes.includes(mimetype)){
            throw new Error(`Unsupported file type ${mimetype}.`);
        }
        if(image.size > 1024*1024*2){
            throw new Error(`File size is too large. Max size is 2MB`);
        }
    
        return true;
    }else{
        throw new Error(`${value} is required`);
    }
}

const signupValidation = [
    body("name","Name is required").not().isEmpty(),
    body("username","Username is required").not().isEmpty(),
    body("email","Email is required").not().isEmpty(),
    body("email","Email is not valid").isEmail(),
    body("phone","Phone is required").not().isEmpty(),
    body("password","Password is required").not().isEmpty(),
    body("description","Description is required").not().isEmpty(),
];

router.post("/signup",
    fileUpload.fields([{name:'coverImg',maxCount:1},{name:'profileImg',maxCount:1}]),
    signupValidation,
    (req,res,next)=>{
        console.log("Signup route");
        console.log(req.header("Authorization"))
        // Validation Result
        const errors = validationResult(req);
        // Check for file upload. If file is not uploaded then use default image
        // And if there is any error in validation then delete files from uploads folder and send error response
        const profileImg = req.files["profileImg"] === undefined ? path.join("uploads","userImages","defaultProfile.png") : req.files["profileImg"][0].path;
        const coverImg = req.files["coverImg"] === undefined ? path.join("uploads","userImages","defaultCover.png") : req.files["coverImg"][0].path;
        if(!errors.isEmpty()){
            const httpError = new HttpError(errors.array()[0].msg,422,[profileImg,coverImg]);
            return next(httpError);
        }
        req.body.profileImg = profileImg;
        req.body.coverImg = coverImg;
        const {name,email,phone,password,description} = req.body;
        console.log(req.body,">>>>>>",profileImg,coverImg);
        // If there is no error then send success response
        return res.status(200).json({
            "status":"success",
            "message":"Signup successfull",
            "data":{
                token:"thisistoken",
                user: req.body
            }
        });
    }
);

router.post("/signin",(req,res,next)=>{
    const {email,password} = req.body;
    
})

module.exports = router;