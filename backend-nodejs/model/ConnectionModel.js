const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    sender:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    receiver:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    status:{
        type:String,
        enum:["pending","accepted","rejected"],
        default:"pending",
    },
});

const Connection = mongoose.model("Connection",connectionSchema);
module.exports = Connection;