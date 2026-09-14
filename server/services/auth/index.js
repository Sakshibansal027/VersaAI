import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
dotenv.config();

const port = process.env.PORT;

const app = express();


app.get("/",(req,res)=>{
    res.json({message:"hello from server"});
})
app.listen(port,()=>{
    console.log(`auth server started at ${port}`);
    connectdb();
})