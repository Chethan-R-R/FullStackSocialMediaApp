import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const commentsSchema=new mongoose.Schema({
    commentor_id:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
})

const postsSchema=new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    post_url:{
        type:String,
        required:true

    },post_title:{
        type:String,
    },post_description:{
        type:String
    },
    likes:{
        type:[ObjectId]
    },
    comments:{
        type:[commentsSchema]
    }
})

const posts=mongoose.model("posts",postsSchema)
export default posts