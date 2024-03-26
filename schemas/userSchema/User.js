import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    lastname:{
        type: String
    },
    // email:{
    //     type:String,
    //     required: true,
    //     minLenght: 6,
    //     maxLenght: 256
    // },
    // password:{
    //     type:String,
    //     required: true,
    //     minLenght: 8,
    //     maxLenght: 25,
    // },
    // re_password:{
    //     type:String,
    //     minLenght: 8,
    //     maxLenght: 25,
    // }
},{timestamps:true})

export default mongoose.models.user || mongoose.model("user",userSchema)