import user from '../models/user'
import feeds from '../models/feeds'
import AutoDelete from '../models/autoDelete'
import posts from '../models/posts'
import Chats from '../models/chats'

import { deleteImage } from '..'

async function deletePost(postId:string){
    try{
        const post=await posts.findById(postId)
        const postUrl=post?.post_url
        if(postUrl){
            deleteImage(postUrl)
        }
        
        const deletedPost=await posts.findByIdAndDelete(postId)
    }catch(err){
    }
}
async function deleteFollowing(user_id:string,destination_id:string){
    try{

        const User=await user.findById(user_id)
        if(User  && User.followers.includes(destination_id)){
            User.followers=User.followers.filter(id=>id!==destination_id)
            
        }else throw new Error("user does not exist")
        await User.save()
    }catch(err){
        console.log(err)
    }
}
async function deleteUser(userId:string){
    const newUser=await user.findById(userId)
    const following=newUser?.following
    const posts=newUser?.posts
    const feedsId=newUser?.feeds_id
    const chats=newUser?.chats
    const profile_picture=newUser?.profile_picture
    if(following){
        for(let i=0;i<following.length;i++){
            deleteFollowing(following[i],userId)
        }
    }
    if(posts){
        for(let i=0;i<posts.length;i++){
            deletePost(posts[i])
        }
    }
    if(feedsId){
        const deleteFeed=await feeds.findByIdAndDelete(feedsId) 
    }
    if(chats){
        for(const [friend,chatId] of chats){
            deleteChat(userId,friend,chatId)
        }
    }
    if(profile_picture && profile_picture!=="profile.svg"){
        deleteImage(newUser?.profile_picture)
    }
    const userDeleted=await user.findByIdAndDelete(userId)
}
async function deleteChat(userId:string,friendId:string,chatId:string){
    try{
        const friend=await user.findById(friendId)
        if(friend){
            friend.chats.delete(userId)
            friend.save()
        }
        const chatDeleted=await Chats.findByIdAndDelete(chatId)
    }catch(err){

    }
}

async function deleteComment(postId:string,commentorId:string){
    try{
        const post=await posts.findById(postId)
            if(post){
                post.comments=post?.comments.filter((comment)=>comment.commentor_id!==commentorId) as any
                post.save()
            }   
    }catch(err){
    }
}
export async function deleteNewUsers(){
    const newUsers=await AutoDelete.findById(process.env.usersToDeleteId)
    const usersToDelete=newUsers?.usersToDelete
    const commentsToDelete=newUsers?.commentsToDelete

    if(usersToDelete){
    for(let i=0;i<usersToDelete.length;i++){
        deleteUser(usersToDelete[i])
    }
    newUsers.usersToDelete=[]
    
    if(commentsToDelete){
        for(let [postId,commentorId] of commentsToDelete){
            deleteComment(postId,commentorId)
        }
    }
    newUsers.commentsToDelete=new Map()
    newUsers.save()
}
}

