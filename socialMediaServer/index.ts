
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer"
import {register} from "./controllers/authentication";
import authRoutes from "./routes/auth";
import users from "./routes/users";
import { verifyToken } from "./middleware/authorisation";
import { posts } from "./routes/posts";
import { uploadPost } from "./controllers/posts";
import { verifyChatToken } from "./middleware/authorisation";
import { Socket } from "socket.io";
import Chats from "./models/chats";
import user from "./models/user";
import { JwtPayload } from "jsonwebtoken";
import cron from 'node-cron'
import {  deleteNewUsers } from "./controllers/AutoDeleteUserData";
import fs from 'fs'
import path from 'path'


const forms=multer()

dotenv.config()
const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
const httpserver=require('http').Server(app)


const io=require('socket.io')(httpserver,{
    cors:{
        origin:"http://localhost:3000"
    }
})

app.use("/uploads",express.static('./uploads'))
const connectedUser=new Map()



const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload=multer({storage})

io.on('connection',async (socket:Socket)=>{
    const token=socket.handshake.auth.token
    let userData:any
    try{    
        const isverified:{id:string}|string | false | JwtPayload=verifyChatToken(token)
        if(isverified && typeof isverified!=='boolean' && typeof isverified!=='string' ){
            userData=await user.findById(isverified.id)
            connectedUser.set(isverified.id,socket.id)
        }else throw('token invalid')
        
    }catch(err){
        socket.disconnect(true)
        return false
    }
    socket.on('createChat',async(data:{chatId:string})=>{
        
    })
    socket.on('gethistoy',async (data:{chatId:string})=>{
        const chatHistory=await Chats.findById(data.chatId)
        socket.emit('history',{chatHistory})
    })
    socket.on('message',async (data:{receiverId:string,message:string})=>{
        
        if(connectedUser.has(data.receiverId)){
            connectedUser.get(data.receiverId)
            socket.broadcast.to(connectedUser.get(data.receiverId)).emit('message',{id:userData._id ,message:data.message})
        }

        const user2=await user.findById(data.receiverId)
        if(userData && user2 && userData?.chats.has(data.receiverId)){
            const chatData=await Chats.findById(userData.chats.get(user2?._id.toString()))
            chatData?.chats.push({userId:userData._id,message:data.message})
            chatData?.save()
            
        }else{

            const chat=new Chats({
                userData:userData?._id,
                user2:user2?._id,
                chats:[{userId:userData?._id,message:data.message}]
            })
            const savedChat=await chat.save()
            
            if(userData && user2){
                userData.chats.set(user2._id.toString(),savedChat._id)
                user2.chats.set(userData._id.toString(),savedChat._id.toString())
                userData.save()
                user2.save()
            }
        }
    })

    socket.on('disconnect',()=>{
        connectedUser.delete(userData?._id)
    })
})
//const upload=multer({dest:'uploads'})

export function deleteImage(fileName:string){
    const imgPath=path.join(__dirname,'uploads',fileName)
    console.log(imgPath)
        fs.unlink(imgPath,(err)=>console.log(err))
}
app.post("/auth/register",upload.single("profile_picture"),register)
app.post('/posts/upload',verifyToken,upload.single("post_picture"),uploadPost)
app.use(forms.any())
app.use("/auth",authRoutes)
app.use("/user",users)
app.use("/posts",posts)

cron.schedule('0 0 * * *',()=>{
    deleteNewUsers()
})

const PORT=process.env.port || 6001
mongoose.connect(process.env.DB_URI!
,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}as ConnectOptions).then(()=>{
    httpserver.listen(PORT,()=>console.log(`server port:${PORT}`))
}).catch((err)=>console.log(`${err} did not connect`))

