import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
       
    }
},{timestamps:true})

const User=mongoose.model("User",userSchema); // User name ka db me collection create hota ha jisma sab data hota ha
export default User