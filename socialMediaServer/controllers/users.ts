import user from "../models/user";
import feeds from "../models/feeds";

export const getUser=async (req:any,res:any)=>{
    try{
        const {id}=req.params
        const User=await user.findById(id)
        res.status(200).json(User)

    }catch(err){
        res.status(404).json({error:err})
    }
}

export const followUnfollow=async (req:any,res:any)=>{
    try{
         const {user_id,destination_id}=req.params
         const User=await user.findById(user_id)
         const destination=await user.findById(destination_id)
         if(User && destination && User.following.includes(destination_id)){
            User.following=User.following.filter(id=>id!==destination_id)
            destination.followers=destination.followers.filter(id=>id!==user_id)
         }else if(User && destination){
            User.following.push(destination_id)
            destination.followers.push(user_id)
         }else throw new Error("user does not exist")
         await User.save()
         await destination.save()
         res.status(200).json(User)

    }catch(err){
        res.status(404).json({error:err})
    }
}

export const removefollower=async (req:any,res:any)=>{
    try{
        const {user_id,destination_id}=req.params
        const User=await user.findById(user_id)
        const destination=await user.findById(destination_id)
        if(User && destination && User.followers.includes(destination_id)){
            User.followers=User.followers.filter(id=>id!==destination_id)
            destination.following=destination.following.filter(id=>id!==user_id)
            
        }else throw new Error("user does not exist")
        await User.save()
        await destination.save()
        res.status(200).json(User)
    }catch(err){
        res.status(404).json({error:err})
    }
}

export const searchUser=async (req:any,res:any)=>{
    try{
        const {searchString}=req.params
        const searchResult=await user.find({$or:[{firstName:{$regex:searchString}},{lastName:{$regex:searchString}},{email:{$regex:searchString}}]})
        res.status(200).json(searchResult)
    }catch(err){
        res.status(404).json({error:err})
    }
}

export const getUserFeed=async (req:any,res:any)=>{
    try{
        const {feed_id}=req.params
        const userFeed=await feeds.findById(feed_id)
        res.status(200).json(userFeed)
    }catch(err){
        res.status(404).json({error:err})
    }
}