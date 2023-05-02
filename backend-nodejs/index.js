const path = require("path");
const fs = require("fs");

// Libraries import
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Local imports
const routes = require("./routes");


// MongoDB Atlas DB Connection
mongoose.connect('mongodb+srv://sachinyadav1469:Sachin%40123@cluster0.my3twen.mongodb.net/linkedin?retryWrites=true&w=majority')
.then(result=>{
    console.log("Connected to db");
})
.catch(err=>{
    console.log("Unable to connect to db");
})

// Initializing express
const app = express();

// Allow cross origin requests
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Origin,X-Requested-With,Accept,Authorization');
    next();
})


// Static file path
app.use(express.static(path.join(__dirname,"public")));

// Image upload path
app.use("/uploads",express.static(path.join(__dirname,"uploads")));


// Parse the urlencoded body data
app.use(bodyParser.urlencoded({extended:false}));

// Parse the json body data
app.use(bodyParser.json());

// Routes
app.use("/api",routes);

// General Error Handler
app.use((error,req,res,next)=>{
    if(error){
        let errorCode = error.code || 422;
        if(isNaN(errorCode)){
            errorCode = 422;
        }
        res.status(errorCode).json({
            "status":"error",
            "message":error.message,
            "data":null
        });
        const filePath = error.filesPath;
        if(filePath){
            filePath.forEach(file=>{
                if(file == path.join("uploads","userImages","defaultProfile.png") || file == path.join("uploads","userImages","defaultCover.png") || file == path.join("uploads","userImages","defaultLogo.png")){
                    console.log("Default image");
                    return;
                }
                fs.unlink(path.join(__dirname,file),err=>{
                    if(err){
                        console.log("Unable to delete file");
                    }else{
                        console.log("File deleted");
                    }
                });
            });
        }
    }
});
    

// Server is listening on port 5001
app.listen(5001);