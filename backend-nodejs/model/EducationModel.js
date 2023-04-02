const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = new Schema({
    school:{ type:String, required:true },
    degree:{ type:String, required:true },
    fieldOfStudy:{ type:String, required:true },
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

},{ timestamps:true });

const Education = mongoose.model("Education",educationSchema);
module.exports = Education;
