const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    title:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    expirence:{
        type:String,
        required:true,
        enum:["Fresher","1-2 years","2-3 years","3-4 years","4-5 years","5-6 years","6-7 years","7-8 years","8-9 years","9-10 years","10+ years"],
    },
    companyName:{
        type:String,
        required:true,
    },
    companyLogo:{
        type:String,
        default:""
    },
    companyWebsite:{
        type:String,
        default:""
    },
    applied:[
        { user:{ type:Schema.Types.ObjectId, ref:"User"}}
    ],

},{
    timestamps:true,
});

const Job = mongoose.model("Job",jobSchema);
module.exports = Job;