const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    profileImg:{
        type:String,
        required:true
    },
    coverImg:{
        type:String,
        default:""
    },
},{
    timestamps:true,
});

const User = mongoose.model("User",userSchema);
module.exports = User;