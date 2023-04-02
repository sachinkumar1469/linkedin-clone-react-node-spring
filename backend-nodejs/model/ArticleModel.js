const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    title:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
    },
    likes:[
        {
            user:{
                type:Schema.Types.ObjectId,
                ref:"User",
            },
        },
    ],
    comments:[
        {
            user:{
                type:Schema.Types.ObjectId,
                ref:"User",
            },
            text:{
                type:String,
                required:true,
            },
        }
    ],
},{
    timestamps:true,
});

const Article = mongoose.model("Article",articleSchema);
module.exports = Article;