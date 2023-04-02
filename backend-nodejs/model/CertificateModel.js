const mongose = require('mongoose');
const Schema = mongose.Schema;

const certificateSchema = new Schema({
    title:{ type:String, required:true },
    school:{ type:String, required:true },
    link:{ type:String, required:true },
    issuedOn:{ type:Date, required:true },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
},{
    timestamps:true,
});

const Certificate = mongose.model("Certificate",certificateSchema);
module.exports = Certificate;