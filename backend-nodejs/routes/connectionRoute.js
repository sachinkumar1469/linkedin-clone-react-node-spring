const router = require("express").Router();

// Local imports
const authUser = require("../middleware/authUser");
const User = require("../model/UserModel");
const Connection = require("../model/ConnectionModel");
const HttpError = require("../utils/HttpError");

// All users for connection suggestions. Protected route.
router.get("/suggestions",authUser,async(req,res,next)=>{
    const user = req.user;
    // Find user connection list.
    let connectionsList = [];
    try{
        const senderConnection = await Connection.find({sender:user._id});
        const receiverConnection = await Connection.find({receiver:user._id});
        senderConnection.forEach((connection)=>{
            connectionsList.push(connection.receiver);
        });
        receiverConnection.forEach((connection)=>{
            connectionsList.push(connection.sender);
        });
        connectionsList.push(user._id);
    }catch(err){
        console.log(err);
        const httpError = new HttpError("Connection list fetching failed",500);
        return next(httpError);
    }
    // Get all the user which are not in the user's connection list.
    const users = await User.find({_id:{$nin:connectionsList}}).select("username name profileImg description coverImg");
    res.status(200).json({message:"All connections",users});
});

// Send connection request. Protected route.
router.post("/send-request",authUser,async(req,res,next)=>{
    const senderId = req.user._id;
    const receiverId = req.body.id;
    console.log(senderId,receiverId);
    // Check if the connection already exists.
    let senderConnection = null;
    let receiverConnection = null;
    try{
        senderConnection = await Connection.findOne({sender:senderId,receiver:receiverId});
        receiverConnection = await Connection.findOne({sender:receiverId,receiver:senderId});
    }catch(err){
        console.log(err);
        const httpError = new HttpError("Connection request sending failed",500);
        return next(httpError);
    }
    if(senderConnection || receiverConnection){
        const httpError = new HttpError("Connection already exists",500);
        return next(httpError);
    }
    // Create a new connection request.
    const connection = new Connection({
        sender:senderId,
        receiver:receiverId,
        status:"pending"
    });
    try{
        await connection.save();
    }catch(err){
        console.log(err);
        const httpError = new HttpError("Connection request sending failed",500);
        return next(httpError);
    }

    return res.status(200).json({message:"Connection request sent successfully",connection});
});

// Show invitations connection for authenticated user. Protected route.
router.get("/invitations",authUser,async(req,res,next)=>{
    const user = req.user;
    // Find all the pending connection request for user.
    let pendingConnections = [];
    try{
        pendingConnections = await Connection.find({receiver:user._id,status:"pending"}).populate("sender","username name profileImg description");
        console.log(pendingConnections);
    }catch(err){
        console.log(err);
        const httpError = new HttpError("Pending connection fetching failed",500);
        return next(httpError);
    }
    res.status(200).json({message:"Pending connections",pendingConnections});
});

// Accept connection request. Protected route.
router.get("/accept-request/:connectionID",authUser,async(req,res,next)=>{
    let connection = null;
    try{
        connection = await Connection.findById(req.params.connectionID);
    }catch(err){
        console.log(err);
        const httpError = new HttpError("Connection not found",500);
        return next(httpError);
    }
    if(!connection){
        const httpError = new HttpError("Connection not found",500);
        return next(httpError);
    }
    connection.status = "accepted";
    try{
        await connection.save();
    }catch(err){
        console.log(err);
        const httpError = new HttpError("Connection accepting failed",500);
        return next(httpError);
    }
    res.status(200).json({message:"Connection accepted successfully",connection});
});

// Reject connection request. Protected route.
router.get("/reject-request/:connectionID",authUser,async(req,res,next)=>{
    Connection.findByIdAndDelete(req.params.connectionID)
    .then((connection)=>{
        if(!connection){
            const httpError = new HttpError("Connection not found",500);
            return next(httpError);
        }
        return res.status(200).json({message:"Connection rejected successfully",connection});
    })
    .catch((err)=>{
        console.log(err);
        const httpError = new HttpError("Connection rejecting failed",500);
        return next(httpError);
    });
});

// Show all the connections for authenticated user. Protected route.
router.get("/all",authUser,async(req,res,next)=>{
    const user = req.user;
    // Find all the accepted connection for user.
    let connections = [];
    try{
        let senderConnection = await Connection.find({sender:user._id,status:"accepted"});
        let receiverConnection = await Connection.find({receiver:user._id,status:"accepted"});
        senderConnection.forEach((connection)=>{
            connections.push(connection.receiver);
        });
        receiverConnection.forEach((connection)=>{
            connections.push(connection.sender);
        });
    }catch(err){
        console.log(err);
        const httpError = new HttpError("Connection fetching failed",500);
        return next(httpError);
    }
    // Get all the user which are in the user's connection list.
    const users = await User.find({_id:{$in:connections}}).select("username name profileImg description");

    res.status(200).json({message:"All connections",connections:users});
});

module.exports = router;