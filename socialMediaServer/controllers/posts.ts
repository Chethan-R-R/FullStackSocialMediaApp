import posts from "../models/posts"
import user from "../models/user"
import AutoDelete from "../models/autoDelete"

import feeds from "../models/feeds"
import { ObjectId } from "mongodb"
type comment={
    comment_id:ObjectId,
    commentor_id:string,
    commentorName:string,
    commentorProfile:string,
    comment:string
}
export const uploadPost=async( req:any,res:any)=>{
    
    try{
        const post_picture=req.file
        const {user_id,
        post_title,
        post_description,
    }=req.body
    const newPost=new posts({
        user_id,
        post_url:post_picture.filename,
        post_title,
        post_description
    })
    
    const User=await user.findById(user_id)
    if(User){
        const postSaved=await newPost.save()
        for(let i=0;i<User.followers.length;i++){
            const follower=await user.findById(User.followers[i])
            const followerFeed=await feeds.findById(follower?.feeds_id)
            followerFeed?.feeds.push(postSaved._id)
            followerFeed?.save()
        }
        User.posts.push(postSaved._id)
        const UserSaved=await User?.save()
        res.status(200).json({postSaved,UserSaved})
    }else throw("user not found")
    

    }catch(err){
        res.status(500).json({error:err})
    }
}
export const userPostList=async(req:any,res:any)=>{
    try{
        const User=await user.findById(req.params.id)
        if(User){
            let postList:any=[]
            for(let i=User.posts.length-1;i>=0;i--){
                const data=await posts.findById(User.posts[i])
                if(data)postList.push(data)
            }
            
            res.status(200).json( postList)
        }else{
            throw("user not found")
        }
    }catch(err){
            res.status(400).json({error:err})
    }
}
export const getPost=async (req:any,res:any) => {
    try{
        const Post=await posts.findById(req.params.id)
        if(Post){
        res.status(200).json(Post)
        }else throw("post not found")
    }catch(err){
        res.status(400).json({error:err})
    }    
}
export const getComments=async (req:any,res:any)=>{
    try{
        const Post=await posts.findById(req.params.post_id)
        if(Post){
            const commentsList:comment[]=[]
            for(let i=Post.comments.length-1;i>=0;i--){
                const comment=Post.comments[i]
                const commentor=await user.findById(comment.commentor_id)
                if(commentor && comment._id){
                    commentsList.push({
                        comment_id:comment._id,
                        commentor_id:comment.commentor_id,
                        commentorName:commentor?.firstName+" "+commentor?.lastName,
                        commentorProfile:commentor?.profile_picture,
                        comment:comment.comment
                    })
                }
                }
            res.status(200).json(commentsList)
        }else throw("invalid post id")
    }catch(err){

    }
}
export const addComment=async(req:any,res:any)=>{
    try{
        const commentor_id=req.user.id
        const {
            post_id,
            comment
        }=req.body
        
        const Post=await posts.findById(post_id)
        if(Post){
            Post.comments.push({
                commentor_id,
                comment})
            const PostSaved=await Post.save()
            const commentsToDeleteList=await AutoDelete.findById(process.env.usersToDeleteId)
            commentsToDeleteList?.commentsToDelete.set(post_id,commentor_id)
            await commentsToDeleteList?.save()
            res.status(200).json(PostSaved)
        }else throw("post not found")
    }catch(err){
        res.status(500).json({error:err})
    }
}

export const removePost=async (req:any,res:any)=>{
    try{
        const user_id=req.user.id
        const {post_id}=req.body
        const User=await user.findById(user_id)
        const Post=await posts.findById(post_id)
        if(user_id===Post?.user_id && User){
            
            if(User.followers){
                for(let i=0;i<User.followers.length;i++){
                    const follower=await user.findById(User.followers[i])
                    const Feed=await feeds.findById(follower?.feeds_id)
                    if(Feed){
                        Feed.feeds=Feed.feeds.filter(id=>id.toString()!==post_id)
                        Feed.save()
                    }else throw("failed to get feed")
                }
            }
            const deletedPost=await posts.findByIdAndDelete(post_id)
            if(deletedPost){
                User.posts=User.posts.filter(id=>id.toString()!==post_id)
                User.save()
                res.status(200).json({res:"deleted successfully"})
            }else throw("deletion failed")
        }else throw("deletion failed")
        
    }catch(err){
        res.status(500).json({error:err})
    }
}

export const deleteComment=async (req:any,res:any)=>{
    try{
        const {post_id,comment_id}=req.body
        const Post=await posts.findById(post_id)
        if(Post){
            Post.comments.id(comment_id)?.deleteOne()
            await Post.save()
            res.status(200).json({res:"comment deleted"})
        }else throw("comment deltion failed")
        
    }catch(err){
        res.status(500).json({error:err})
    }
}

export const likeDislikePost=async (req:any,res:any)=>{
    try{
        const user_id=req.user.id
        const {post_id}=req.body
        const post=await posts.findById(post_id)
        if(post){
            if(post.likes.includes(user_id)){
                post.likes=post.likes.filter(id=>id!=user_id)
                await post.save()
            }else{
                post.likes.push(user_id)
                await post.save() 
            }
            res.status(200).json({'like_saved':"successfully"})
        }else throw("post not found")
    }catch(err){ 
        res.status(500).json({error:err})
    }
}
