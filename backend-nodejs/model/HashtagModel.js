const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hashtagSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    posts:[
        {
            type:Schema.Types.ObjectId,
            ref:"Post",
        },
    ],
},{
    timestamps:true,
});

const Hashtag = mongoose.model("Hashtag",hashtagSchema);
module.exports = Hashtag;