const path = require("path");

// Libraries import
const express = require("express");
const mongoose = require("mongoose");


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

// Static file path
app.use(express.static(path.join(__dirname,"public")));

// Parse the json body data
app.use(express.json());

app.use("/",(req,res)=>{
    res.send("Hello");
})

// Server is listening on port 5001
app.listen(5001);