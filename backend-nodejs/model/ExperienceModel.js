const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    title:{ type:String, required:true },
    company:{ type:String, required:true },
    location:{ type:String, required:true },
    from:{ type:Date, required:true },
    to:{ 
        type:Date,
    },
    current:{ type:Boolean, default:false },
    description:{ type:String },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
},{
    timestamps:true,
});

const Experience = mongoose.model("Experience",experienceSchema);
module.exports = Experience;