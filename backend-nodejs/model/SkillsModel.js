const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillsSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    skills:[{
        skill:{ type:String, required:true },
        level:{ type:String, required:true, enum:["beginner","intermediate","advanced"] },
    }],
},{
    timestamps:true,
});

const Skills = mongoose.model("Skills",skillsSchema);
module.exports = Skills;