import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const chatSchema=new mongoose.Schema({
    user1:{type:ObjectId},
    user2:{type:ObjectId},
    chats:{type:Array}
})

const Chats=mongoose.model('chats',chatSchema)

export default Chats