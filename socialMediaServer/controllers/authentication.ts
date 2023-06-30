import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import user from '../models/user'
import feeds from '../models/feeds'
import AutoDelete from '../models/autoDelete'
const register=async (req:any,res:any)=>{
    try{
        const profile_picture=req.file
        const {
            firstName,
            lastName,
            email,
            password,
            occupation,
        }=req.body

        const salt=await bcrypt.genSalt()
        const passwordHash=await bcrypt.hash(password,salt)
        const newFeeds=new feeds({})
        const feedsSaved=await newFeeds.save()
        const newUser=new user({
            firstName,
            lastName,
            email,
            password:passwordHash,  
            profile_picture:profile_picture? profile_picture.filename:"profile.svg",
            occupation,
            feeds_id:feedsSaved._id
        })
        const userSaved=await newUser.save()
        const usersToDeletelist=await AutoDelete.findById(process.env.usersToDeleteId)
        usersToDeletelist?.usersToDelete.push(userSaved.id)
        const usersrToDeleteListSaved=await usersToDeletelist?.save()
        
        res.status(201).json(userSaved)
    }catch(err){
        console.log(err)
        res.status(500).json({error:err})
    }
}
const login=async (req:any,res:any)=>{
    try{

        const {email,password}=req.body
        const User=await user.findOne({email:email})
        if(!User)return res.status(400).json({msg:"user does not exist"})
        const isMatch=await bcrypt.compare(password,User.password)
        if(!isMatch)return res.status(400).json({msg:"Invalid credentials."})
        const token=jwt.sign({id:User._id},process.env.jwt_SECRET as string)

        res.status(200).json({token,user_details:{
            _id: User._id,
            firstName: User.firstName,
            lastName: User.lastName,
            email: User.email,
            profile_picture: User.profile_picture,
            occupation: User.occupation,
            followers: User.followers,
            following: User.following,
            posts:User.posts,
            feeds_id:User.feeds_id,
            chats:User.chats
        }})
    }catch(err){
        res.status(500).json({error:err})
    }

}
export  {register,login}