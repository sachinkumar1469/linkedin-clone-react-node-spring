const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    combinedId:{
        type:String,
        required:true,
    },
    messages:[
        {
            sender:{
                type:Schema.Types.ObjectId,
                ref:"User",
            },
            receiver:{
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

const Message = mongoose.model("Message",messageSchema);
module.exports = Message;