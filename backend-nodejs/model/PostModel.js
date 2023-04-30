const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    text:{
        type:String,
        default:"",
    },
    hashtags:{
        type:[String],
    },
    image:{
        type:String,
    },
    likes:[
        {
            user:{ type:Schema.Types.ObjectId, ref:"User" },
        },
    ],
    comments:[
        {
            user:{ type:Schema.Types.ObjectId, ref:"User" },
            text:{ type:String, required:true },
        }
    ],
},{
    timestamps:true,
});

const Post = mongoose.model("Post",postSchema);
module.exports = Post;