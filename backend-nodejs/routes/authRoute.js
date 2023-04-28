const router = require("express").Router();
const {body,validationResult} = require("express-validator");

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
    body("email","Email is required").not().isEmpty(),
    body("email","Email is not valid").isEmail(),
    body("phone","Phone is required").not().isEmpty(),
    body("password","Password is required").not().isEmpty(),
    body("description","Description is required").not().isEmpty(),
    body("profileImg").custom(imageValidator),
    body("coverImg").custom(imageValidator)
];

router.post("/signup",
    fileUpload.fields([{name:'coverImg',maxCount:1},{name:'profileImg',maxCount:1}]),
    // signupValidation,
    (req,res,next)=>{
        const errors = validationResult(req);
        console.log(req.files,"req.files");
        console.log(req.file,"req.file");
        if(!errors.isEmpty()){
            return res.status(422).json({errors:errors.array()});
        }
        const {name,email,phone,password,description} = req.body;
        res.json({message:"Signup successful"});
    }
);

router.post("/signin",(req,res,next)=>{
    const {email,password} = req.body;
    
})

module.exports = router;