import express from "express";
 import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import { app, server } from "./SocketIO/server.js";

dotenv.config()
//middleware
app.use(express.json())
app.use(cookieParser());
const allowedOrigins = ["http://localhost:5173", "http://localhost:3001"];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
    } else {
        callback(new Error("Not allowed by CORS"));
    }
},
  credentials: true 
}));
const PORT = 4000 || process.env.PORT;
const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI)
   console.log("Connected to mongodb");

} catch (err) {
    console.log(err);
}
//routes
app.use("/api/user",userRoute)
app.use("/api/message",messageRoute);


// code for deployment---------------------------

if(process.env.NODE_ENV==="production"){
  const dirPath=path.resolve();
  app.use(express.static("./Frontend/dist"));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath,"./Frontend/dist","index.html"));
  })
}


server.listen(PORT, () => {
  console.log(`Your Servers is Running ${PORT}`)
});
