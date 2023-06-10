import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const userSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            min:2,
            max:50
        },
        lastName:{
            type:String,
            required:true,
            min:2,
            max:50
        },
        email:{
            type:String,
            required:true,
            max:50,
            unique:true
        },
        password:{
            type:String,
            required:true,
            min:5
        },
        profile_picture:{
            type:String,
            default:""
        },
        occupation:String,  
        followers:{
            type:Array,
            default:[]
        },
        following:{
            type:Array,
            default:[]
        },
        posts:{
            type:Array,
            default:[]
        },
        feeds_id:{
            type:ObjectId,
            required:true
        },
        chats:{
            type:Map,
            default:()=>new Map()
        }
    },{timestamps:true}
)
userSchema.index({firstName:'text',lastName:'text',email:'text'})
const user=mongoose.model("user",userSchema)

export default user