const express = require("express");
const AuthorizationMiddleware = require("../Middlewares/AuthorizationMiddleware");

const AlluserRoute=express.Router()

AlluserRoute.get("/",AuthorizationMiddleware,(req,res)=>{
    
    res.send("Welcome to All users")
})

module.exports={AlluserRoute}