const router = require("express").Router();
const fs = require("fs");

// Local imports
const authUser = require("../middleware/authUser");
const fileUpload = require("../middleware/fileUpload");
const HttpError = require("../utils/HttpError");
const Post = require("../model/PostModel");
const HashTag = require("../model/HashTagModel");
const Connection = require("../model/ConnectionModel");
 
// Create a new post, hashtags and save it in db. Protected route.
router.post("/create",authUser,fileUpload.single("image"),(req,res,next)=>{
    let image = undefined;
    if(req.file){
        image = req.file.path;
    }
    let {content,hashtags} = req.body;
    console.log(hashtags);
    hashtags = hashtags.split(",");
    hashtags = hashtags.filter((hashtag)=>hashtag.length != 0);
    // console.log(hashtags);
    // if(!content){
    //     const httpError = new HttpError("Content is required",422,[image]);
    //     return next(httpError);
    // }
    console.log("Content: ",content);
    Post.create({
        user:req.user._id,
        text:content,
        image,
        hashtags,
        likes:[],
        comments:[],
    }).then((post)=>{
        return post.populate("user","name username description profileImg");
    }).then((post)=>{
        // console.log(post.user);
        res.status(200).json({message:"Post created successfully",post:post});
        hashtags.forEach((hashtag)=>{
            HashTag.findOne({hashtag:hashtag}).then((tag)=>{
                if(!tag && tag.length != 0){
                    HashTag.create({hashtag:hashtag,posts:[post._id]});
                }else{
                    tag.posts.push(post._id);
                    tag.save();
                }
            }).catch((err)=>{
                console.log("Tag creation failed");
            });
        });
        return;
    }).catch((err)=>{
        const httpError = new HttpError("Post creation failed",500,[image]);
        return next(httpError);
    });
});

// Delete the post of user, remove the image from uploads folder and remove the post from hashtags. Protected route.
router.delete("/delete/:id",authUser,async function(req,res,next){
    const id = req.params.id;
    console.log(id);
    // return res.json({message:"Post deleted successfully"});
    Post.findOneAndDelete({_id:id,user:req.user._id}).then((post)=>{
        if(!post){
            const httpError = new HttpError("Post not found",404);
            return next(httpError);
        }
        // remove the image from uploads folder
        fs.unlink(post.image,(err)=>{
            if(err){
                console.log("Image deletion failed");
            }
        });
        // remove the post from hashtags
        post.hashtags.forEach((hashtag)=>{
            HashTag.findOne({hashtag:hashtag}).then((tag)=>{
                if(tag){
                    tag.posts.pull(post._id);
                    tag.save();
                }
            }).catch((err)=>{
                console.log("Tag deletion failed");
            });
        });
        // Send the response
        res.status(200).json({message:"Post deleted successfully"});
        return;
    }).catch((err)=>{
        console.log(err);
        const httpError = new HttpError("Post deletion failed",500);
        return next(httpError);
    });
});

// Get all the post of user and create a feed.
// Feed includes the posts of user and the posts of users which are connected to user.
// Protected route.
router.get("/feed",authUser,async(req,res,next)=>{
    const user = req.user;
    // First find all the connections of user from ConnectionModel
    let connectionsId = [];
    try{
        // Connections where user is sender
        const senderConnections = await Connection.find({sender:user._id});
        senderConnections.forEach((connection)=>{
            connectionsId.push(connection.receiver);
        });
        // Connections where user is receiver
        const receiverConnections = await Connection.find({receiver:user._id});
        receiverConnections.forEach((connection)=>{
            connectionsId.push(connection.sender);
        });
        // Add the user id to connectionsId
        connectionsId.push(user._id);
    } catch(err){
        console.log(err);
        const httpError = new HttpError("Feed fetching failed",500);
        return next(httpError);
    }
    
    // Then find all the posts of user and the posts of users which are connected to user from PostModel.
    // Then populate the user field of posts with username, name and image
    // Then sort the posts in descending order of createdAt
    // Then populate the user field of posts with username, name and image
    console.log(connectionsId)
    Post.find({
        user:{
            $in:connectionsId
        }
    }).populate("user","username name profileImg description").sort({createdAt:-1})
    .then((posts)=>{
        res.status(200).json({message:"Feed fetched successfully",posts});
        return;
    })
    .catch((err)=>{
        console.log(err);
        const httpError = new HttpError("Feed fetching failed",500);
        return next(httpError);
    });

});


module.exports = router;