import mongoose from "mongoose";

const autoDeleteSchema=new mongoose.Schema({
    usersToDelete:{
        type:Array,
        default:[]
    },
    commentsToDelete:{
        type:Map,
        of:String,
        default:new Map()
    }
})

const AutoDelete=mongoose.model("autoDelete",autoDeleteSchema)

export default AutoDelete