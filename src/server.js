// install and import express
// const express = () => {};
const express=require("express");
const rootPath=require("path");
let app = express();
app.use(express.json())

// Code here

const details=require("./assets/user.json");


app.get(("/"),async(req,res)=>{
    try {

        // const userdata=await User.find({}).lean().exec();
        console.log(rootPath);
        return res.status(200).sendFile(rootPath.join(__dirname+"src/assets/users.html"));
    } catch (error) {
        
        return res.status(500).send("something went wrong");
    
    }

});

app.get(("/users"),async(req,res)=>{
    try {

        // const userdata=await details.find({}).lean().exec();
        return res.status(200).send(details);
        
    } catch (error) {

        return res.status(500).send("something went wrong");
    
    }

});

app.get(("/users/:ID"),async(req,res)=>{
    try {

        const user=await details.filter((el)=>el.ID===req.params.ID)
        return res.status(200).send(user);
        
    } catch (error) {

        return res.status(500).send(error.message);
    
    }

});


app.post(("/users/:ID"),async(req,res)=>{
    try {

        const user=await details.findByIdAndUpdate(req.params.ID,req.body,{new:true}).lean().exec()
        return res.status(200).send(user);
        
    } catch (error) {

        return res.status(500).send(error.message);
    
    }

});


app.listen(8000,async()=>{
    try {
    
    await details;
    
    } catch (error) {
        console.log(error)
    }
    console.log("8000")
    
    })

// Note: Do not remove this export statement
module.exports = app;
