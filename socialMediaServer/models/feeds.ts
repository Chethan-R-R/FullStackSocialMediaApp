import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const feedSchema=new mongoose.Schema({
    feeds:{
        type:Array,
        default:[]
    }
})
const feeds=mongoose.model("feeds",feedSchema)
export default feeds