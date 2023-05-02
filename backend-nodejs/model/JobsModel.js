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
    experience:{
        type:String,
        required:true,
    },
    companyName:{
        type:String,
        required:true,
    },
    companyLogo:{
        type:String,
        default:""
    },
    salary:{
        type:String,
        required:true,
    },
    applied:[
        { user:{ type:Schema.Types.ObjectId, ref:"User"}}
    ],

},{
    timestamps:true,
});

const Job = mongoose.model("Job",jobSchema);
module.exports = Job;